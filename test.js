const submit = document.getElementById("submit");
const subscribe = document.getElementById("subscribe");
const success = document.getElementById("success");
const dismiss = document.getElementById("dismiss");
const email = document.getElementById("email");




function submitForm() {
  if (email.value === "") {
    email.style.backgroundColor = "hsla(4, 100.00%, 67.10%, 0.40)";
    email.style.outline = "1px solid hsl(4, 100%, 67%)";
  } else {
    console.log("hello");
    success.classList.remove("display");
    subscribe.classList.add("display");
  }
}
function dismissForm() {
  success.classList.add("display");
  subscribe.classList.remove("display");
}

submit.addEventListener("click", submitForm);
dismiss.addEventListener("click", dismissForm);

