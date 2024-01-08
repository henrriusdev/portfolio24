# Etapa 1: Construcción
FROM node:20 AS builder

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para la instalación de dependencias
COPY package.json yarn.lock ./

RUN npm install -g yarn@latest

# Instala Yarn globalmente y copia los archivos de configuración de workspace
COPY .yarn ./.yarn
COPY .yarnrc.yml ./

# Instala las dependencias
RUN yarn install --immutable --inline-builds

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
