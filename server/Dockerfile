# syntax=docker/dockerfile:1
FROM node:16-alpine
ENV NODE_ENV=production

# default location for all subsequent commands
WORKDIR /app
# copy the package.json and the package-lock.json file into our working directory /app.
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

# Tell Docker what command we want to run when our image is run inside of a container. 
CMD ["node", "./src/index.js"]

EXPOSE 3000