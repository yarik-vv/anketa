routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('result', {
      url: '/result',
      template: require('./index.html'),
      controller: 'ResultController',
      controllerAs: 'result'
    });
}