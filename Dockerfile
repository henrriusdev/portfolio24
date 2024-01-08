# Etapa 1: Construcción
FROM node:20 AS builder

# Define el directorio de trabajo
WORKDIR /app

# Instala la CLI de NestJS globalmente
RUN npm install -g @nestjs/cli

# Copia los archivos de configuración de Yarn y workspaces
COPY package.json yarn.lock ./

# Instala las dependencias de nivel de raíz
RUN yarn install --immutable --inline-builds

# Copia los archivos de los workspaces y sus dependencias
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
# Añadir más líneas de COPY si tienes más workspaces

# Instala las dependencias de cada workspace
RUN yarn workspaces focus --all

# Copia el resto del código fuente
COPY . .

# Construye las aplicaciones
RUN yarn build

# Etapa 2: Ejecución
FROM node:20-slim AS runner

# Define el directorio de trabajo
WORKDIR /app

# Copia las dependencias y los archivos de build necesarios desde la etapa de construcción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/frontend/build ./apps/frontend/build

# Define el comando para ejecutar la aplicación
CMD ["node", "./apps/backend/dist/main.js"]
