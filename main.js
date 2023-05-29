function validation(){
  let form = document.getElementById('form');
  let email = document.getElementById('email').value;
  let text = document.getElementById('text');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if(email.match(pattern)){
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'This is a valid Email address';
    text.style.color = '#005C01'
  }else{
     form.classList.remove('valid');
     form.classList.add('invalid');
      text.innerHTML = 'invalid Email address';
      text.style.color = '#ff0000'
  }
  
  
  if(email == ''){
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
    text.style.color = '#00ff00'
  }
}
  