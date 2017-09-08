import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import StepThreeController from './controller';

export default angular.module('app.stepThree', [uirouter])
  .config(routing)
  .controller('StepThreeController', StepThreeController)
  .name;