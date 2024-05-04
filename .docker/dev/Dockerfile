# Use official node image as base
FROM node:16-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install --force



# # Copy the rest of the application files
# COPY . /app

# # Start the application
# CMD ["npm", "start"]
# # CMD: use to run a command when the container starts
# EXPOSE 3000
