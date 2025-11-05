# Steg 1: Basimage
FROM node:20-alpine

# Steg 2: Skapa arbetsmapp
WORKDIR /app

# Steg 3: Kopiera package.json
COPY package*.json ./

# Steg 4: Installera beroenden
RUN npm install --only=production

# Steg 5: Kopiera applikationskod
COPY . .

# Steg 6: Exponera port
EXPOSE 3000

# Steg 7: Starta applikationen
CMD ["node", "index.js"]