#!/bin/bash

echo "Deleting existing containers ~ "
sudo docker stop $(sudo docker ps -aq)

echo "Running mongo container ~"
docker-compose up -d mongo

echo "Running app container ~"
docker-compose up -d app

echo "Running client container ~"
docker-compose up -d client
