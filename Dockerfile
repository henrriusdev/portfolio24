# Etapa 1: Construcción
FROM node:18 AS builder

# Define el directorio de trabajo
WORKDIR /app

# Instala la CLI de NestJS globalmente
RUN npm install -g @nestjs/cli cross-env

# Copia los archivos de configuración de Yarn y workspaces
COPY package.json yarn.lock ./

COPY . .

# Instala las dependencias de nivel de raíz
RUN yarn install --immutable --inline-builds

# Construye las aplicaciones
RUN yarn build

# Etapa 2: Ejecución
FROM node:18-slim AS runner

# Define el directorio de trabajo
WORKDIR /app

# Copia las dependencias y los archivos de build necesarios desde la etapa de construcción
COPY --from=builder /app/package.json ./
COPY --from=builder /app/turbo.json ./
COPY --from=builder /app/apps/backend/package.json ./apps/backend/
COPY --from=builder /app/apps/frontend/package.json ./apps/frontend/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/apps/backend/dist/ ./apps/backend/dist/
COPY --from=builder /app/apps/frontend/build/ ./apps/frontend/build/

# Define el comando para ejecutar la aplicación
CMD ["yarn", "deploy"]
