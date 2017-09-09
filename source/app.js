'use strict';

//styles
import scss from './scss/index.scss';

//main dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import stepOne from './step-1';
import stepTwo from './step-2';
import stepThree from './step-3';
import stepFour from './step-4';
import result from './result';
import val from './directive.js';

angular.module('app', [uirouter, stepOne, stepTwo, stepThree, stepFour, result, val])
  .config(routing);