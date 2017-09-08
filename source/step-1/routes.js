routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepOne', {
      url: '/',
      template: require('./step-1.html'),
      controller: 'StepOneController',
      controllerAs: 'stepOne'
    });
}