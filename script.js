const submit = document.getElementById("submit");
const subscribe = document.getElementById("subscribe");
const success = document.getElementById("success");
const dismiss = document.getElementById("dismiss");
const email = document.getElementById("email");
const addEmail = document.getElementById("replace");
const required = document.getElementById("required")

function submitForm(event) {
  if(email.value.includes("@", ".")){
  event.preventDefault();
  success.classList.remove("display");
  subscribe.classList.add("display");
  addEmail.innerHTML = email.value;}
  else{
    event.preventDefault();
    required.classList.remove("display");
    email.style.backgroundColor = "hsla(4, 100.00%, 67.10%, 0.40)";
    email.style.outline = "1px solid hsl(4, 100%, 67%)";
  }
}

function dismissForm() {
  success.classList.add("display");
  subscribe.classList.remove("display");
  required.classList.add("display");
  email.style.backgroundColor = "White";
  email.style.outline = "none";
  email.value = "";
}

submit.addEventListener("click", submitForm);
dismiss.addEventListener("click", dismissForm);
