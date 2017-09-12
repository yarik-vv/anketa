routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('result', {
      url: '/result',
      template: require('./template.html'),
      controller: 'ResultController',
      controllerAs: 'result'
    });
}