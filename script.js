const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const signupSection = document.getElementById("signup-section");
const successSection = document.getElementById("success-section");
const successEmail = document.getElementById("success-email");
const dismissBtn = document.getElementById("dismiss-button");
const emailErrorMessage = document.getElementById("email-error");
const isValidEmail = /^\S+@\S+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email } = Object.fromEntries(new FormData(form));
  const cleanedEmail = (email || "").trim();

  if (!cleanedEmail) {
    console.log("email required");
    emailErrorMessage.hidden = false;
    emailInput.ariaInvalid = true;
    return;
  } else {
    emailErrorMessage.hidden = true;
    emailInput.ariaInvalid = false;
  }

  if (!isValidEmail.test(cleanedEmail)) {
    console.log("valid email required");
    emailErrorMessage.hidden = false;
    emailInput.ariaInvalid = true;
    return;
  }
  emailInput.value = "";
});
