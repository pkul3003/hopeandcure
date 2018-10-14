FROM node:8
# create app directory
#RUN mkdir /usr
#RUN mkdir /usr/src
RUN mkdir /usr/src/app
RUN mkdir /usr/src/app/primenova_server
WORKDIR /usr/src/app/primenova_server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7443
CMD [ "node", "hms_server.js" ]

