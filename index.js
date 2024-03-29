const form = document.querySelector('#log-form');

const loginData = {};


const unameInput = document.querySelector('[name="uname"]');
const passInput = document.querySelector('[name="password"]');
const bug1 = document.querySelector('#e-login');
const bug2 = document.querySelector('#e-pass');

function checkUname(){
  const letters = /[а-я]/;
  if(loginData.uname.match(letters) || loginData.uname.length < 3) {
    bug1.classList.add("bug");
    return false;
  } 
  if(!loginData.uname.match(letters) && loginData.uname.length >= 3){
    bug1.classList.remove("bug");
  } 
}

function checkPass(){
 
  if(loginData.password.length < 6){
    bug2.classList.add("bug");
    return false;
  }if(loginData.password.length >= 6){
  bug2.classList.remove("bug");
  }
}


unameInput.addEventListener('keyup', checkUname);
passInput.addEventListener('keyup', checkPass);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkUname() == false || checkPass() == false) {
    return
  };
    console.log(loginData);
});


function onInput(event) {
  loginData[event.target.name] = event.target.value;
}

unameInput.addEventListener('input', onInput);
passInput.addEventListener('input', onInput);

