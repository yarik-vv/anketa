const currentPage = document.getElementById('step1');


class stepOneController {
  constructor($scope) {
    $scope.title = 'Первый шаг анкеты';
    $scope.nextPage = '/step-2';
    $scope.prevPage = ' ';
    $scope.stepName = '1. Введите имя и email';
    currentPage.className = 'active';

    

    if($scope.name !== undefined && $scope.email !== undefined){
      this.name = $scope.name;
      this.email = $scope.email;
    }

    this.save = () => {
      console.log($scope.user.$invalid);
      $scope.name = this.name;
      $scope.email = this.email; 
    }
  }
}

stepOneController.$inject = ['$rootScope'];
export default stepOneController;