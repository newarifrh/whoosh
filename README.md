## Whoosh
A simple application in implementing Clean Architecture in Node.js consisting of Express.js, and MongoDB Replica Set.


### Prerequisite
Generate a keyfile for MongoDB Replica Set

```
openssl rand -base64 756 > mongo.key
chmod 400 mongo.key
```

Configure environment file

```
cp .env.example .env
```

### How to run?
For docker users

```
docker compose up
```


For non-docker users, you need install MongoDB Standalone or MongoDB Replica Set then configure connection string in environment file.

