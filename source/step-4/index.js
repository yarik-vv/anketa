import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import FourStepController from './controller';

export default angular.module('app.fourStep', [uirouter])
  .config(routing)
  .controller('FourStepController', FourStepController)
  .name;