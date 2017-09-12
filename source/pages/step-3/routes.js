routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stepThree', {
      url: '/step-3',
      template: require('./template.html'),
      controller: 'StepThreeController',
      controllerAs: 'stepThree'
    });
}