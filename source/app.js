'use strict';

//styles
import scss from './scss/index.scss';

//main dependencies
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import stepOne from './step-1';

angular.module('app', [uirouter, stepOne])
  .config(routing);