# base image
FROM node:latest as node

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./.nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist /usr/share/nginx/html
