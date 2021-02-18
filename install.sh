#!/usr/bin/env bash
#
# Build esp8266 development container

readonly CURRENT_SCRIPT="$(basename -- ${BASH_SOURCE[0]})"
readonly CURRENT_DIRECTORY="$(cd "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
readonly DOCKER_BINARY="$(command -v docker)"

## Make sure minikube and docker dekstop is installed in your machine

## Start minikube 'minikube start --cpus 4 --memory 8192' for mac 'minikube start --vm=true --driver=hyperkit  --cpus 4 --memory 8192'

## Enable minikube ingress 'minikube addons enable ingress'

## Build Docker image in minikube container 'eval $(minikube docker-env)'

eval $(minikube docker-env)

docker build -t volvo:1.0.0 .

cd k8

## Deploy Selenium grid on K8

kubectl create  --filename=selenium-hub-deployment.yaml

kubectl create  --filename=selenium-hub-svc.yaml

kubectl create  --filename=selenium-node-chrome-deployment.yaml

kubectl create  --filename=selenium-node-firefox-deployment.yaml

kubectl create  --filename=selenium-ingress.yaml

## After ingress installed run kubectl get ingress and get ingress host & ip then update hosts file with the created DNS (Mac & Linux: /etc/hosts, Windows: c:/windows/system32/drivers/etc/hosts) ex entry : 192.12.12.0 selenium.grid,internal

## Now you can access Selenium Grid in http://selenium.grid.internal and in your local machine you can 'npx wdio wdio.k8.conf.js' to test 

## you can deploy volvo-testing image in kubernates

kubectl create --filename=volvo-deployment.yaml



## As exposing externalIp not working in my minikube i am not able to test against selenium-grid inside pod