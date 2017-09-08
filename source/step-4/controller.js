class FourStepController {
  constructor($scope) {
    $scope.title = 'Четвертый шаг анкеты';
    $scope.stepName = '4. Выберите любимого котика';
    $scope.nextPage = '/result';
    $scope.prevPage = '/step-3';

    this.save = () => {
      //
    }
  }
}

FourStepController.$inject = ['$rootScope'];
export default FourStepController;
