# JavaScript Full-Stack

this project has examples of back and front JavaScript implementations

## Setup

Access https://connect-sandbox.wirecard.com.br and get a token to access sandbox API.

Create a local env file (as below) and place the authorization you picked up in the control panel in the 
"VUE_APP_WIRECARD_AUTHORIZATION" property of .env.local.
```bash
cp front/.env front/.env.local
```

## Run

```bash
cp docker-compose.yml.development docker-compose.yml
docker-compose up
```

Open http://localhost:1981 in your browser when all is ready
