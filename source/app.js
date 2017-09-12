//main dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';

//app dependencies
import routing from './app.config';
import initButtonState from './directive.js';

//data
import cities from './data/cities.json';
import countries from './data/countries.json';

//app pages
import stepOne from './pages/step-1';
import stepTwo from './pages/step-2';
import stepThree from './pages/step-3';
import stepFour from './pages/step-4';
import result from './pages/result';

//styles
import scss from './scss/index.scss';


angular.module('app', [
    uirouter, 
    initButtonState, 
    stepOne, 
    stepTwo, 
    stepThree, 
    stepFour, 
    result
  ])
  .config(routing);
