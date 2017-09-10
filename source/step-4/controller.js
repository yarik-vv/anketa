const nextBtn = document.getElementById('next');
const resultBtn = document.getElementById('result');
// nextBtn.style.display = 'none';
// resultBtn.style.display = 'flex';

import { validate, reset } from '../validation';
import { initPagination, setState, buttonState } from '../pagination';

class FourStepController {
  constructor($scope) {
    $scope.title = 'Четвертый шаг анкеты';
    $scope.stepName = '4. Выберите любимого котика';
    $scope.nextPage = '/result';
    $scope.page4 = false;
    //$scope.currentPage = 4;
    $scope.prevPage = '/step-3';

    initPagination($scope.page1, $scope.page2, $scope.page3, $scope.page4, 4);
    buttonState('none', 'flex');
    ///setState($scope.page4);
    nextBtn.style.display = 'none';
    resultBtn.style.display = 'flex';

    this.select = (text) => {
      this.error = null;
      active(event.target);

      if(text === 'cat'){
        $scope.avatar = event.target.src;
        $scope.page4 = true;
        //$scope.nextPage = '/result';
        setState(true); 
      } else {
        //$scope.nextPage = null;
        $scope.page4 = false;
        setState(false); 
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
