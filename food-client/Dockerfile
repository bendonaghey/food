FROM nginx:alpine
LABEL author="Niall Conaghan"
COPY ./dist/food-client /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]