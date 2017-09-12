const selects = document.getElementsByTagName('select');
const countriesUrl = '../../data/countries.json';
const citiesUrl = '../../data/cities.json';

import { validate, reset } from '../../validation';
import { initPagination, setState, buttonState } from '../../pagination';

class StepTwoController {
  constructor($scope, loadData) {
    //иницилизация основного
    $scope.prevPage = '/step-1';
    $scope.nextPage = '/step-3';
    $scope.title = 'Второй шаг анкеты';
    $scope.stepName = '2. Выберите страну и город';

    initPagination($scope.page1, $scope.page2, $scope.page3, $scope.page4, 2);
    setState($scope.page2);

    //получение данных про страны и города с помощью сервиса
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
      },
      error => {
        console.log(error);
      }
    );

    const countrySelect = selects[0];
    const citySelect = selects[1];
    let countryValid = false;

    //вешаем вотчер на селект выбора страны
    $scope.$watch('user.country', text => {
      if (text !== undefined) {
        countryValid = true;
        $scope.page2 = true;
      } else {
        $scope.page2 = false;
        setState(false);
      }

      let n = 1;
      let tempCities = [];

      //загружаем города в завистимости от выбраной страны
      for (name in this.countries) {
        if (text === this.countries[name]) {
          for (let i in this.cities) {
            if (n === this.cities[i].country) {
              tempCities.push(this.cities[i]);
            }
          }
        }
        $scope.cities = tempCities;
        n++;
      }
    }, true);

    //вешаем вотчер на селект выбора города
    $scope.$watch('user.city', text => {
      if (text !== undefined) {
        if (countryValid) {
          $scope.page2 = true;
          setState(true);
        } else {
          $scope.page2 = false;
          setState(false);
        }
      } else {
        $scope.page2 = false;
        setState(false);
      }
    }, true);
  }
}

StepTwoController.$inject = ['$rootScope', 'loadData'];
export default StepTwoController;
