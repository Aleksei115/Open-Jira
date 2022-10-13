# Next.js OpenJira App

You can deploy the app on your computer, just follow these steps:

## Download the repositorie and use the command:

```
yarn
```

## Then you need to deploy the database with the command:

```
docker-compose up -d
```

## To connect to the database the url is:

```
mongodb://localhost:27017/entriesdb
```


## Setting environment variables

Rename the file __.env.template__  to  __.env__


## Filling out the database with test data

```
http://localhost:3000/api/seed

```

## Views of the project:

![alt text](https://github.com//Aleksei115/Open-Jira/blob/main/img_prueba/Capture1.PNG?raw=true)