class ResultController {
  constructor($scope) {
    $scope.title = 'Ваш результат';

    this.reset = () => {
      //
    }
  }
}

ResultController.$inject = ['$rootScope'];
export default ResultController;
