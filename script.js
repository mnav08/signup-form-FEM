const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const signupSection = document.getElementById("signup-section");
const successSection = document.getElementById("success-section");
const successEmail = document.getElementById("success-email");
const dismissBtn = document.getElementById("dismiss-button");
const emailErrorMessage = document.getElementById("email-error");
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//submit event handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //creates object from input values
  const { email } = Object.fromEntries(new FormData(form)); // email = Object.email
  const cleanedEmail = (email || "").trim(); // remove whitespaces

  //checks email is not falsy
  if (!cleanedEmail) {
    console.log("email required");
    emailErrorMessage.hidden = false;
    emailInput.ariaInvalid = true;
    return;
  } else {
    emailErrorMessage.hidden = true;
    emailInput.ariaInvalid = false;
  }

  //checks email contains characters before and after the @ symbol
  if (!isValidEmail.test(cleanedEmail)) {
    console.log("valid email required");
    emailErrorMessage.hidden = false;
    emailInput.ariaInvalid = true;
    return;
  }

  //Shows the success message
  successEmail.textContent = cleanedEmail;
  signupSection.hidden = true;
  successSection.hidden = false;
});

//dismiss behavior event handler
dismissBtn.addEventListener("click", () => {
  successSection.hidden = true;
  signupSection.hidden = false;
  emailInput.value = ""; //Clear the input value.
  //Hide the error and mark the input as valid again.
  emailErrorMessage.hidden = true;
  emailInput.setAttribute("aria-invalid", "false");
  emailInput.focus(); // keyboard and screen-reader users return directly to the form input
});
