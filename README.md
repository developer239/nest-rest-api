[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/)
[![Dependabot](https://badgen.net/dependabot/developer239/nest-rest-api/241242706?icon=dependabot)](https://dependabot.com/)

## Nest REST API

Demo application [is running here](https://nest-rest-api.herokuapp.com/) (it might take a while before the free server wakes up)

📘 API is documented [here](https://nest-rest-api.herokuapp.com/api).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Development

1. Start development server: `yarn start:dev`

### Useful Commands

1. `yarn test` runs jest
2. `yarn start:debug` start debug server
- `yarn format` Prettify source code
- `yarn lint:ts` Show ts errors

## Deployment on Heroku

This application is Heroku ready.

1. Install Heroku CLI: `brew tap heroku/brew && brew install heroku`
2. Login: `heroku login`
3. Go to your app folder: `cd ~/nest-rest-api`
4. Create new project on Heroku `heroku create`

You can find more information [here](https://devcenter.heroku.com/articles/heroku-cli).
