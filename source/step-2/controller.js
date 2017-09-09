class StepTwoController {
  constructor($scope) {
    $scope.prevPage = '/step-1';
    $scope.nextPage = '_';
    $scope.page2 = false;
    $scope.currentPage = 2;
    $scope.title = 'Второй шаг анкеты';
    $scope.stepName = '2. Выберите страну и город';

    let countryValid = false;
    let cityValid = false;

    $scope.$watch('user.$valid', () => {
      let form = $scope.$root.user;

      if (form.$valid ){
        $scope.nextPage = '/step-3';
        $scope.page2 = true;
      } else {
        $scope.nextPage = '';
        $scope.page2 = false;
      }
    }, true);
    
    // $scope.$watch('user.country', (text) => {
    //   countryValid = true;
    //   if(cityValid){
    //     $scope.nextPage = '/step-3';
    //   } else {
    //     $scope.nextPage = false;
    //   }
    // }, true);

    // $scope.$watch('user.city', (text) => {
    //   cityValid = true;
    //   if(countryValid){
    //     $scope.nextPage = '/step-3';
    //   } else {
    //     $scope.nextPage = '';
    //   }
    // }, true);

  }
}

StepTwoController.$inject = ['$rootScope'];
export default StepTwoController;
