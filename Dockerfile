FROM node:14-bullseye
WORKDIR /var/www/html
ADD package.json package-lock.json ./
RUN npm install
ADD . .
RUN npm run build
EXPOSE 4200 8080 3000
VOLUME [ "/var/www/html/node_modules" ]
CMD [ "tail", "-f", "/dev/null" ]
