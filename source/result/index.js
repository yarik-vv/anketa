import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import ResultController from './controller';

export default angular.module('app.result', [uirouter])
  .config(routing)
  .controller('ResultController', ResultController)
  .name;