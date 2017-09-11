'use strict';

//styles
import scss from './scss/index.scss';

//data
import cities from './data/cities.json';
import countries from './data/countries.json';

//main dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';

//app dependencies
import routing from './app.config';
import initButtonState from './directive.js';

//app views
import stepOne from './step-1';
import stepTwo from './step-2';
import stepThree from './step-3';
import stepFour from './step-4';
import result from './result';


angular.module('app', [uirouter, initButtonState, stepOne, stepTwo, stepThree, stepFour, result])
  .config(routing);
