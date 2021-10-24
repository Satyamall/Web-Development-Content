# Fake RESTful API

A fake RESTful API for testing purposes, running using the npm module **json-server**. You can easily deploy the API to services like Heroku by simply pushing the repository there.

## Installation

Run npm to install all dependencies:

```sh
npm install
```

Now you are ready to deploy to Heroku:

```sh
# Login with your Heroku account
heroku login

# Create the project
heroku create your-api-project-name

# Deploy to Heroku
git push heroku master
```

Test your API by running:

```sh
heroku open
```

## Editing the initial data

The database is in the file **[db.json](db.json)**. You can edit the JSON information there.

## HTTP Requests & Endpoints

Refer to the [json-server documentation](https://github.com/typicode/json-server) for how to use your API.

npm init -y
- git init
- touch .gitignore
'''
- add `node_modules` to .gitignore

- install package dayjs
'''
npm install dayjs
'''
- install webpack packages
'''

npm install webpack webpack-cli --save-dev
'''
- create folders, build,src
- create index.html inside build
- create index.js inside src
- create a component/ function that will show the   current time in a particular format from dayjs library
- append it to the body
- create index.html and basic tags for it to work
- import a file called `app.bundle.js` from the same folder as index.html
- create webpack.config.js
- add entry, and output fields
- entry should be the ./src/index.js
- output is where the bundled file should be
'''bash
$ webpack
# if there is an error
# please ignore this, add move to the npm run script method
'''
- add a script to the package.json 
- "build" : "webpack",
- "analyze": "webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json"
- run
'''
npm run build
'''
- you will get the bundled file, in the folder with the file name that you have suggested inside webpack.config.js
