routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepTwo', {
      url: '/step-2',
      template: require('./index.html'),
      controller: 'StepTwoController',
      controllerAs: 'stepTwo'
    });
}