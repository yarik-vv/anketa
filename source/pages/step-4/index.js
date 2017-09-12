import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routes';
import StepFourController from './controller';

export default angular.module('app.stepFour', [uirouter])
  .config(routing)
  .controller('StepFourController', StepFourController)
  .name;