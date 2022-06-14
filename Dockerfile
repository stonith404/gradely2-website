FROM node:alpine as builder

COPY package.json ./
RUN ["npm", "install"]
COPY . ./
RUN [ "npm","run","build"]

FROM node:alpine 
WORKDIR /usr/src/app
COPY --from=builder package.json  .
COPY --from=builder build  ./
RUN ["npm", "install"]

ENV PORT=80
EXPOSE 80

CMD [ "node", "index.js"]
