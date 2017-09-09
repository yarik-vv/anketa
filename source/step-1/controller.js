const inputs = document.getElementsByTagName('input');
const errors = document.getElementsByTagName('p');

import { validate, reset } from '../validation';

class stepOneController {
  constructor($scope) {
    $scope.prevPage = '';
    $scope.nextPage = '_';
    $scope.page1 = false;
    $scope.currentPage = 1;
    $scope.title = 'Первый шаг анкеты';
    $scope.stepName = '1. Введите имя и email';

    let emailValid = false;
    let nameValid = false;

    $scope.$watch('user.name', (text) => {
      const nameInput = inputs[0];
      const nameError = errors[0];

      if(nameInput.value.length !== 0){ 
        if(validate('^[а-яА-ЯёЁa-zA-Z]{2,20}$', text, nameInput, nameError)){
          nameValid = true;
          if(emailValid){
            $scope.nextPage = '/step-2';
            $scope.page1 = true;
          };
        } else {
          nameValid = false; 
          $scope.nextPage = '_';  
          $scope.page1 = false;   
        }
      } else {
        reset(nameInput, nameError); 
      }
    }, true);

    $scope.$watch('user.email', (text) => {
      const emailInput = inputs[1];
      const emailError = errors[1];

      if(emailInput.value.length !== 0){ 
        if(validate('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$', text, emailInput, emailError)) {
          emailValid = true;
          if(nameValid){
            $scope.nextPage = '/step-2';
            $scope.page1 = true;
          }
        } else {
          emailValid = false;
          $scope.nextPage = '_';
          $scope.page1 = false;
        }
      } else {
        reset(emailInput, emailError); 
      }
    }, true);
  }
}

stepOneController.$inject = ['$rootScope'];
export default stepOneController;
