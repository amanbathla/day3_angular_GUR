const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'C:\Users\AmanBathla\23May-Ang-Gur-2019\day3\src**' // Entry point of your code
       }
     }, () => {});