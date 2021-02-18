# Volvo Testing

## Dependencies

-   NodeJS 12+
-   (optional) docker
-   Chrome & Firefox

## Run tests
### Local (to run tests on local machine and local browser)
- npm install
- npx wdio wdio.conf.js
0
### Local with selenium grid (to run tests on local machine with dockerized selenium grid)
- start selenium by running 'docker-compose up' inside grid folder
- npm install
- npx wdio wdio.conf.js

### Docker with selenium grid (to run tests on docker container with dockerized selenium grid)
- 'docker-compose up' on root folder( volvo-testing)

## Generate allure report
### For local instance
- run 'allure generate allure-results/ && allure open'
### For docker instance
- run 'allure generate allure-results/ && allure open'

## To deploy in Kubernetes 
### To start minikube 
  -run 'minikube start --cpus 4 --memory 8192'

### To deploy Visual testing and selenium grid on Kubernetes (use git bash / terminal)
  -run 'sh install.sh'
### To get the ip address and host name after ingress installed
  -run 'kubectl get ingress'
### To update hostname in windows edit (c:/windows/system32/drivers/etc/hosts) file and add new entry for the DNS created by ingress 
### Now you can access selenium grid UI access 'http://selenium.grid.internal/'

## To delete kuberntes resources 
  -run 'kubectl delete --all deployments'
  -run 'kubectl delete --all service'
  -run 'kubectl delete --all ingress'