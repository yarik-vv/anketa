import angular from 'angular';

class loadData {
  request(method, url) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      //обрабaтываем ответ
      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data);
          } else {
            reject(this.responseText);
          }
        }
      };
      //открываем запрос
      request.open(method, url, true);
      //посылаем запрос
      request.send();
    });
  }
}

export default angular
  .module('services.load-data', [])
  .service('loadData', loadData).name;
