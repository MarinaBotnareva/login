const form = document.querySelector('#log-form');

const loginData = {};


const unameInput = document.querySelector('[name="uname"]');
const passInput = document.querySelector('[name="password"]');
const bag1 = document.querySelector('#e-login');
const bag2 = document.querySelector('#e-login2');
const bag3 = document.querySelector('#e-pass');

function checkUname(){
  const letters = /[а-я]/;
  if(loginData.uname = ''|| loginData.uname.match(letters)) {
    bag1.classList.add("bag");
    return false;
  } 
}

function checkPass(){
 
  if(loginData.password.length < 6){
    bag3.classList.add("bag");
    return false;
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

