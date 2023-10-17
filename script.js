const input = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector("form");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function emailValidator() {
  const email = input.value;

  if (email === "") {
    input.classList.remove("input-error");
    errorMessage.classList.add("hidden");
    return false;
  }

  if (!validateEmail(email)) {
    input.classList.add("input-error");
    errorMessage.classList.remove("hidden");
    return false;
  }

  input.classList.remove("input-error");
  errorMessage.classList.add("hidden");
  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValidEmail = emailValidator();

  const email = document.getElementById("email").value;
  sessionStorage.setItem("email", email);

  if (isValidEmail) window.location = "/success.html";
});
