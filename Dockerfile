FROM nginx:alpine

# expose nginx http port
EXPOSE 80

# start nginx 
CMD ["nginx", "-g", "daemon off;"]
