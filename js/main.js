let form  = document.getElementById("form");
let input = document.getElementById("input");
let msg   = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
  if (input.value === "") {
      msg.innerHTML = "You should write a post";
  } else {
      msg.innerHTML = "";
  }
};


