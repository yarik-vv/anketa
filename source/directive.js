import { initPagination, setState, buttonState } from './pagination';

//директива управления кнопками навигации
function initButtonState() {
  return {
    restrict: "A",
    link: (scope, elem, attr) => {
      scope.$on('$locationChangeStart', () => { 
        buttonState('flex', 'none');
      }, true);
    }  
  }
}

export default angular.module('directives.init-button-state', [])
  .directive('initButtonState', initButtonState)
  .name;