const selects = document.getElementsByTagName('select');
const countriesUrl = '../../data/countries.json';
const citiesUrl = '../../data/cities.json';

import { validate, reset } from '../../validation';
import { initPagination, setState, buttonState } from '../../pagination';

class StepTwoController {
  constructor($scope, loadData) {
    $scope.prevPage = '/step-1';
    $scope.nextPage = '/step-3';
    $scope.title = 'Второй шаг анкеты';
    $scope.stepName = '2. Выберите страну и город';

    initPagination($scope.page1, $scope.page2, $scope.page3, $scope.page4, 2);
    //buttonState('flex', 'none');
    setState($scope.page2);

    loadData.request('GET', countriesUrl).then(
      result => {
        this.countries = result;
      },
      error => {
        console.log(error);
      }
    );

    loadData.request('GET', citiesUrl).then(
      result => {
        this.cities = result;
        //citiess = result;
      },
      error => {
        console.log(error);
      }
    );

    // let newCities = [];
    // let c = 1;
    // this.kek = (country) => {
    //   for(name in this.countries){
    //     if('Ukraine' === this.countries[name]){
    //       for(let i in this.cities){
    //         if(c === this.cities[i].country){
    //           newCities.push(this.cities[i]);
    //         }
    //       }
    //     }
    //     c++;
    //   }
    // }

    //var citiess= null;



    const countrySelect = selects[0];
    const citySelect = selects[1];
    let countryValid = false;
    let cityValid = false;

    $scope.$watch('user.country', (text) => {

        $scope.cities = [];
        let n = 1;
        for(name in this.countries){
          if(text === this.countries[name]){
            for(let i in this.cities){
              if(n === this.cities[i].country){
                $scope.cities.push(this.cities[i]);
              }
            }
          }
          n++;
        }



      if (check('ng-empty', countrySelect.className)) {
        citySelect.style.border = '1px solid #ff0000';
        countryValid = true;

        if (cityValid) {
          $scope.page2 = true;
          setState(true);
        } else {
          $scope.page2 = false;
          setState(false);
        }
      }
    }, true);

    $scope.$watch('user.city', () => {
      if (check('ng-empty', citySelect.className)) {
        citySelect.style.border = 'none';
        cityValid = true;

        if (countryValid) {
          $scope.page2 = true;
          setState(true);
        } else {
          $scope.page2 = false;
          setState(false);
        }
      }
    }, true);

    function check(regexp, text, element) {
      let reg = new RegExp(regexp);
      if (reg.test(text)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

StepTwoController.$inject = ['$rootScope', 'loadData'];
export default StepTwoController;
