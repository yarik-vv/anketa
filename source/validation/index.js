const nextBtn = document.getElementById('next');

//модуль для валидации
function validate(regexp, text, element, message){
  let reg = new RegExp(regexp);
  
  if(text !== undefined){
    if(reg.test(text)){
      reset(element, message);
      return true;
    } else {
      element.style.border = '1px solid #ff0000';
      message.style.display = 'flex';
      return false;
    }
  }
}

//сброс подсказок валидации
function reset(input, message){
  input.style.border = 'none';
  message.style.display = 'none';
}

export { validate, reset };