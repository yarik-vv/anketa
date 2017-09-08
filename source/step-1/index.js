import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import StepOneController from './controller';

export default angular.module('app.stepOne', [uirouter])
  .config(routing)
  .controller('StepOneController', StepOneController)
  .name;