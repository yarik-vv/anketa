class StepTwoController {
  constructor($scope) {
    $scope.title = 'Второй шаг анкеты';
    $scope.stepName = '2. Выберите страну и город';
    $scope.nextPage = '/step-3';
    $scope.prevPage = '/step-1';

    this.save = () => {
      $scope.country = 'ukraine';
      $scope.sity = 'kiev';
    }
  }
}

StepTwoController.$inject = ['$rootScope'];
export default StepTwoController;
