routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepFour', {
      url: '/step-4',
      template: require('./template.html'),
      controller: 'StepFourController',
      controllerAs: 'stepFour'
    });
}