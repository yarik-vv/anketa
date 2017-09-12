const resultBtn = document.getElementById('result');

import { validate, reset } from '../../validation';
import { initPagination, setState, buttonState } from '../../pagination';

class StepFourController {
  constructor($scope) {
    //инициализация
    $scope.page4 = false;
    $scope.title = 'Четвертый шаг анкеты';
    $scope.stepName = '4. Выберите любимого котика';
    $scope.nextPage = '/result';
    $scope.prevPage = '/step-3';

    initPagination($scope.page1, $scope.page2, $scope.page3, $scope.page4, 4);
    setState($scope.page4, resultBtn);

    //скрывание кнопки следующей страницы и отображение кнопки результата
    buttonState('none', 'flex');

    //функция проверки выбора изображения
    this.select = (text, imageUrl, event) => {
      this.error = null;
      active(event.target);

      if (text === 'cat') {
        $scope.user.avatar = imageUrl;
        $scope.page4 = true;
        setState(true, resultBtn);
      } else {
        $scope.page4 = false;
        setState(false, resultBtn);
        this.error = 'Вы выбрали собачку. А надо котика.';
      }
    };

    //функция активирующая выбраное изображение
    function active(element) {
      let images = element.parentNode.childNodes;
      for (let i = 0; i < images.length; i++) {
        if (i % 2 !== 0) {
          images[i].style.border = 'none';
        }
      }
      element.style.border = '3px solid #ff9800';
    }
  }
}

StepFourController.$inject = ['$rootScope'];
export default StepFourController;
