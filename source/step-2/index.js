import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import StepTwoController from './controller';

export default angular.module('app.stepTwo', [uirouter])
  .config(routing)
  .controller('StepTwoController', StepTwoController)
  .name;