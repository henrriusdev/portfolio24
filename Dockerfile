# Etapa 1: Construcción
FROM node:20 AS builder

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de Yarn y workspaces
COPY package.json yarn.lock ./

# Instala las dependencias de nivel de raíz
RUN yarn install --immutable --inline-builds

COPY . .

# Construye las aplicaciones
RUN yarn build

# Etapa 2: Ejecución
FROM node:20-slim AS runner

# Define el directorio de trabajo
WORKDIR /app

# Copia las dependencias y los archivos de build necesarios desde la etapa de construcción
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/build/ ./build/

# Define el comando para ejecutar la aplicación
CMD ["yarn", "serve"]
