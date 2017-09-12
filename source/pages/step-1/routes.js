routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepOne', {
      url: '/',
      template: require('./template.html'),
      controller: 'stepOneController',
      controllerAs: 'stepOne'
    });
}