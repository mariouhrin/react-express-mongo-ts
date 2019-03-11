#! /bin/bash

if [ "$(docker ps -a | grep mongo-db)" ]; then
  echo "stop container"
  docker stop mongo-db 

  echo "remove container"
  docker rm mongo-db 
fi

echo "create new mongo-db container"
docker run -d -p 27017:27017 --name mongo-db mongo
