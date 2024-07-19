# Moone Ceramique

Moone Ceramique est un projet réalisé dans le cadre du checkpoint 4 de la formation de web developpeur à la Wild Code School, c'est un site internet à destination des personnes qui s'interressent à la poterie et qui souhaiteraient se renseigner sur le sujet. On retrouve aussi sur le site une partie utilisateur depuis laquelle il pourra poster des articles.

##  Use
- Harmonia
- React
- Argon 2
- Joi
- JsonWebToken
- react-leaflet
- react-hook-form
- react-toastify
- swiper

## Modélisation 

<img width="633" alt="Capture d’écran 2024-07-19 à 00 45 46" src="https://github.com/user-attachments/assets/28f379df-c066-498d-b7ee-10c43150ba99">

## Les maquettes 

![Capture d’écran 2024-07-19 à 17 04 44](https://github.com/user-attachments/assets/15d92793-4708-4157-9597-fce7f0a15ad6)
![Capture d’écran 2024-07-19 à 17 04 50](https://github.com/user-attachments/assets/6ca36ac5-6232-45bc-a497-2a6b45a76c81)

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (client + server) in one terminal
- `dev:client` : Starts the React client
- `dev:back` : Starts the Express server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the server will be accessible. The root path `"/"` will redirect to the dist folder of your client. In order to allow that, please uncomment the line as explained in `server/src/app.js` (Line 102).
Because the server will also serve the client, the global variable VITE_SERVER_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the server. If you want to seed automaticaly your database using the `seed.js` script, replace the `cd ./server && node ./bin/migrate.js && node index.js` by `cd ./server && node ./bin/migrate.js && node ./bin/seed.js && node index.js`

### About public assets (pictures, fonts...)

Don't use any public folder on your client. This folder won't be accessible online. You may move your public assets in the `server/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Specific Environment Variables (e.g., Email)

Students should use the template provided in the `*.env.sample*` file as `<PROJECT_NAME><SPECIFIC_NAME>=<THE_VARIABLE>`.

> ⚠️ **Warning:** The `PROJECT_NAME` should match the one used in the Git public variable.

To add it during deployment, follow these 2 steps:

- Add the following variable to the `docker-compose.prod.yml` file (as shown in the example: `PROJECT_NAME_SPECIFIC_NAME: ${PROJECT_NAME_SPECIFIC_NAME}`).
- Connect to your server via SSH. Open the global `.env` file in Traefik (`nano ./traefik/data/.env`). Add the variable with the correct value and save the file.
- Afterward, you can initiate automatic deployment. Docker will not refresh during this process.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.
