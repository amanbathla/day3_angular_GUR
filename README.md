# Day3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#################Sonar Qube Analysis of a Angular Project #########

1. npm install sonarqube-scanner --save-dev

2. Create a sonar-project.js file in the root of your project with the following code:
const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'packages/core/src/**' // Entry point of your code
       }
     }, () => {});

3. In your package.json file, you can update the script section to add the command to execute:
"scripts": {
     ...
     "sonar": "node sonar-project.js"
   },

4. npm run sonar

Note : Don't Forgot to pull Docker image for sonarqube or install it manually to run on localhost

##################SonarQube Analysis run Successfully######################

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
