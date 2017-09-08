class StepThreeController {
  constructor($scope) {
    $scope.title = 'Третий шаг анкеты';
    $scope.stepName = '3. Отметьте социальные сети';
    $scope.nextPage = '/step-4';
    $scope.prevPage = '/step-2';

    this.save = () => {
      $scope.country = 'ukraine';
      $scope.sity = 'kiev';
    }
  }
}

StepThreeController.$inject = ['$rootScope'];
export default StepThreeController;
