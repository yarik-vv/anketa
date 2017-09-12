const pagination = document.getElementById('pagination').childNodes;
const resultBtn = document.getElementById('result');
const nextBtn = document.getElementById('next');

//основные цвета
const enableColor = '#ff9800';
const selectColor = '#333333';
const disableColor = '#bbbbbb';

//функции управления цветами клавиш пагинации
function setColor(state, element) {
  if (state) {
    element.style.color = enableColor;
  } else {
    element.style.color = disableColor;
  }
}

function setPage(currentPage, pageNumber, element) {
  if (currentPage === pageNumber) {
    element.style.color = selectColor;
  }
}

//функции управления состоянием клавиш пагинации
function setState(state, element) {
  if(element === undefined){
    element = document.getElementById('next');
  }
  element.onclick = event => {
    if (state === undefined) {
      state = false;
    }
    return state;
  };
}

function buttonState(next, result){
  nextBtn.style.display = next;
  resultBtn.style.display = result;
}

//функции инициализации пагинации
const initPagination = function(page1, page2, page3, page4, currentPage) {
  for (let i = 0; i < pagination.length; i++) {
    if (i % 2 !== 0) {
      switch (+pagination[i].text) {
        case 1:
          setColor(page1, pagination[i]);
          setState(page1, pagination[i]);
          setPage(currentPage, 1, pagination[i]);
          break;

        case 2:
          setColor(page2, pagination[i]);
          setState(page2, pagination[i]);
          setPage(currentPage, 2, pagination[i]);
          break;

        case 3:
          setColor(page3, pagination[i]);
          setState(page3, pagination[i]);
          setPage(currentPage, 3, pagination[i]);
          break;

        case 4:
          setColor(page4, pagination[i]);
          setState(page4, pagination[i]);
          setPage(currentPage, 4, pagination[i]);
          break;

        default:
          break;
      }
    }
  }
};

export { initPagination, setState, buttonState };
