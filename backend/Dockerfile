FROM node:18-alpine

WORKDIR /app

# Package.json ve package-lock.json kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodlarını kopyala
COPY . .

# Port 5000'i aç
EXPOSE 5000

# Uygulamayı başlat
CMD ["npm", "run", "dev"] 