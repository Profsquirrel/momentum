const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const log_off=document.querySelector("#log-off>#btn_logoff");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="userName";
const savedUsername=localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
  event.preventDefault();
  const userName=loginInput.value;
  localStorage.setItem(USERNAME_KEY,userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

function paintGreetings(userName){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText=`반가워요, ${userName}님`;
}

if(savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}

function logOff(event){
  if(confirm("정말 나가시겠어요? 할 일이 모두 지워져요")){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value="";
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem('todos');
  }else{
    event.preventDefault();
  }
}

log_off.addEventListener("click",logOff);