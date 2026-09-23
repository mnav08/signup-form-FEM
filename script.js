const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const signupSection = document.getElementById("signup-section");
const successSection = document.getElementById("success-section");
const successEmail = document.getElementById("success-email");
const dismissBtn = document.getElementById("dismiss-button");
const emailErrorMessage = document.getElementById("email-error");
const isValidEmail = /^\S+@\S+$/;

//submit listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target); //  converts the the form element into a collection of key / value pairs
  let data = Object.fromEntries(formData); // converts these entries into an object

  for (const key in data) {
    // removes whitespace from email
    const email = data[key].trim();

    //email validation
    if (!email) {
      console.log("email required");
      emailErrorMessage.hidden = false;
      emailInput.ariaInvalid = true;
      return;
    } else {
      emailErrorMessage.hidden = true;
      emailInput.ariaInvalid = false;
    }

    //email contains characters before and after the @ symbol
    if (!isValidEmail.test(email)) {
      console.log(" valid email required");
      return;
    }
  }
});
