FROM node
WORKDIR /app
COPY app-hello/package*.json ./
RUN npm install
COPY app-hello .
EXPOSE 8080
CMD ["node", "app.js"]