import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import StepTwoController from './controller';
import loadData from '../../service';

export default angular.module('app.stepTwo', [uirouter, loadData])
  .config(routing)
  .controller('StepTwoController', StepTwoController)
  .name;