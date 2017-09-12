import { initPagination, setState, buttonState } from './pagination';

//директива управления кнопками навигации при загрузке вьюшки
function initButtonState() {
  return {
    restrict: "A",
    link: scope => {
      scope.$on('$locationChangeStart', () => { 
        buttonState('flex', 'none');
      }, true);
    }  
  }
}

export default angular.module('directives.init-button-state', [])
  .directive('initButtonState', initButtonState)
  .name;