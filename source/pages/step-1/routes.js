routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepOne', {
      url: '/',
      template: require('./index.html'),
      controller: 'stepOneController',
      controllerAs: 'stepOne'
    });
}