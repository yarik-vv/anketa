routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('fourStep', {
      url: '/step-4',
      template: require('./index.html'),
      controller: 'FourStepController',
      controllerAs: 'fourStep'
    });
}