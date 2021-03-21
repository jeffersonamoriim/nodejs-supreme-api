<h1 align="center">Welcome to nodejs-supreme-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000&style=plastic" />
  <img alt="Postgres" src="https://img.shields.io/docker/v/_/postgres/11.5?label=postgres&style=plastic" />
  <img alt="Redis" src="https://img.shields.io/docker/v/_/redis/latest?label=redis&style=plastic" />
  <a href="https://mit-license.org/" target="_blank">
    <img alt="License: (MIT)" src="https://img.shields.io/apm/l/vim-mode?style=plastic" />
  </a>
</p>

> nodejs-supreme-api it's a nodejs project that applies best coding practices and could be used as structure to you create your APIs. I hope you enjoy !

## Features

✅  Eslint, Prettier, EditorConfig<br>
✅   ORM Sequelize<br>
✅   Auth Middleware with JWT<br>
✅  File Upload <br>
✅   Nodemailer<br>
✅   Queues with Redis<br>
✅  Error Monitoring<br>
✅  Tests with Jest and Supertest


## Services
> This project implements a mailing and error monitoring features, so to run properly you should create an account in following services and set enviroment variables values

* MailTrap: https://mailtrap.io/
* Sentry: https://sentry.io/welcome/

## API Request
> ForAPI documentation and request examples simple run:
```sh
npx serve .\docs\api\
```

## Install

```sh
docker-compose -f .\docker-compose.yml up -d
yarn install
```

## Postgres

```sh
sequelize db:migrate
yarn sequelize db:seed
```

## Usage

```sh
yarn dev
```

## Run tests

```sh
yarn test
```

## Author

👤 **Jefferson Amorim**

* Github: [@jeffersonamoriim](https://github.com/jeffersonamoriim)
* LinkedIn: [@jefferson-amorim-03595966](https://linkedin.com/in/jefferson-amorim-03595966)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Jefferson Amorim](https://github.com/jeffersonamoriim).<br />
This project is [(MIT)](https://mit-license.org/) licensed.
