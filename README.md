![CI](https://github.com/developer239/nest-rest-api/workflows/CI/badge.svg)
[![Dependabot](https://badgen.net/dependabot/developer239/nest-rest-api/241242706?icon=dependabot)](https://dependabot.com/)
[![Maintainability](https://api.codeclimate.com/v1/badges/ae13e67516a18ad471b0/maintainability)](https://codeclimate.com/github/developer239/nest-rest-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ae13e67516a18ad471b0/test_coverage)](https://codeclimate.com/github/developer239/nest-rest-api/test_coverage)

## Nest REST API

Demo application [is running here](https://nest-rest-api.herokuapp.com/) (it might take a while before the free server wakes up)

📘 API is documented [here](https://nest-rest-api.herokuapp.com/api).

The core code of this application was generated automatically by [create-opinionated-app](https://github.com/developer239/create-opinionated-app).

### Example Features

**Configuration**

- [x] Basic Project Setup
- [x] Environment Variables
- [x] Database (TODO: migrations)
- [x] Tests

**Features**

- [x] Authorization (TODO: refresh token)
- [ ] Health Check
- [x] Basic CRUD operations
- [x] Documentation
- [ ] In-memory Cache

**Deployment**

- [x] Heroku CD
- [x] GitHub Actions CI

### Development

1. Start development server: `yarn start:dev`

### Useful Commands

- `yarn test` runs jest
- `yarn start:debug` start debug server
- `yarn format` Prettify source code
- `yarn lint:ts` Show ts errors

## Deployment on Heroku

This application is Heroku ready.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

1. Install Heroku CLI: `brew tap heroku/brew && brew install heroku`
2. Login: `heroku login`
3. Go to your app folder: `cd ~/nest-rest-api`
4. Create new project on Heroku `heroku create`

You can find more information [here](https://devcenter.heroku.com/articles/heroku-cli).
