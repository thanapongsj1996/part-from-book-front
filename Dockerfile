# FROM node:13.12.0-alpine

# RUN mkdir -p usr/src/app
# WORKDIR /usr/src/app

# COPY . .

# RUN npm install -g serve
# RUN npm install
# RUN npm run build

# EXPOSE 8080

# CMD ["serve", "-s", "-l", "8080", "./build"]


# build environment
FROM node:13.12.0-alpine as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]