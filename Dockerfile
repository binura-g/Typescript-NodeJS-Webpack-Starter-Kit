FROM node:9-slim
LABEL MAINTAINER BinuraG
ENV ENV production
ENV K8S_BINARY /google-cloud-sdk/bin/kubectl

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app
EXPOSE ${PORT}
RUN npm i -g webpack
RUN webpack
CMD ["node", "bundle"]
