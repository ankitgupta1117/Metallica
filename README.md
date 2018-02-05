# Metallica
Sample application build for demonstrating full-stack knowledge gained during the Full Stack Academy batch 1.


## About

### Backend
All the backend microservices are independently deployable and does not have dependency on each other. All the services talk to each other using service registry design architechture. Following services are developed in this exercise:
    
    a. Service Registry - This is a Eureka server which is used as service registry. 
                          Microservices will not know the location of other microservices' lcoation, so they will use service registry to communicate with other microservice. 
                          Each service has to register itself to Service registry. Service Registry is listening on port 10000
    b. Reference Service - Reference data service is reponsible to fetch reference data from DB. 
                           It is listening on 9000
    c. Trade Service -    Contains the Trade operations logic. The trade events like creation, updation, deletion of trades are pushed to messaging queue.
                          It is listening on 9002
    d. MarketData service - This service creates dummy market data for all commoditiees randomly. 
                            All the market data is pushed on a messaging queue.
    e. Notification Service - This is responsible to listen to market data queue and trade events queue and push these notification to websocket.
    
### FrontEnd
Front end is implemented in Angular 4. It uses Async Http calls and observer design from Rxjs to invoke backend services thorugh REST. All the notifications are 
listened to websocket hosted by notification service.  

## Local installation

  Please follow below steps to setup the applicaiton on local machine.
  1. Install ActiveMq and start the MQ broker
  2. Install oracle and start the same. DB tables and sequences also needs to be created.
  3. Start the services in following order:
            
            a. Service Registry
            b. Reference Service
            c. Trade Service
            d. MarketData Service
            e. Notification Service
            f. Api gateway
  4. Upon successful startup of above services the application should be available on port 80.
  5. Since the service is authenticated and authorized by facebook, you will be asked for facebook crredentials
  6. upon successful login application should be accessible. 
              