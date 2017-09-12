import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import FourStepController from './controller';
import val from '../../directive.js';

export default angular.module('app.fourStep', [uirouter, val])
  .config(routing)
  .controller('FourStepController', FourStepController)
  .name;