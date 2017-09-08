import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import stepOneController from './controller';
//import val from '../directive.js';

export default angular.module('app.stepOne', [uirouter])
  .config(routing)
  .controller('stepOneController', stepOneController)
  .name;