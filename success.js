const confirmEmail = document.querySelector(".confirm-email");

document.addEventListener("DOMContentLoaded", function () {
  const storedEmail = sessionStorage.getItem("email");

  confirmEmail.textContent = storedEmail;
  sessionStorage.removeItem("email");
});
