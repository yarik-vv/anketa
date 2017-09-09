function validate(regexp, text, element, message){
  let reg = new RegExp(regexp);
  
  if(text !== undefined){
    if(reg.test(text)){
      console.log('valid');
      element.style.border = 'none';
      message.style.display = 'none';
      return true;
    } else {
      console.log('invalid');
      element.style.border = '1px solid #ff0000';
      message.style.display = 'flex';
      return false;
    }
  }
}

function reset(input, message){
  input.style.border = 'none';
  message.style.display = 'none';
}

export { validate, reset };