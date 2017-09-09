class FourStepController {
  constructor($scope) {
    $scope.title = 'Четвертый шаг анкеты';
    $scope.stepName = '4. Выберите любимого котика';
    $scope.nextPage = '';
    $scope.page4 = false;
    $scope.currentPage = 4;
    $scope.prevPage = '/step-3';

    this.select = (text) => {
      this.error = null;
      active(event.target);

      if(text === 'cat'){
        $scope.avatar = event.target.src;
        $scope.page4 = true;
        $scope.nextPage = '/result';
      } else {
        $scope.nextPage = '';
        $scope.page4 = false;
        this.error = 'Вы выбрали собачку. А надо котика.';
      }
    };

    function active (element) {
      let images = element.parentNode.childNodes;
      for (let i = 0; i < images.length; i++) {
        if(i%2 !== 0){
          images[i].style.border = 'none';
        } 
      }
      element.style.border = '3px solid #ff9800';
    }
    
  }
}

FourStepController.$inject = ['$rootScope'];
export default FourStepController;
