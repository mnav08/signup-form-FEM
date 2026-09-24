# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/capture.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/mnav08/signup-form-FEM.git)
- Live Site URL: [Live Demo](https://mnav08.github.io/signup-form-FEM/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- DOM Manipulation JS

### What I learned

I learned how to store and work with data from an input form. I did validation for the email showing error messages for empty field and invalid email pattern

```js
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
```

## Author

Moises Navas

- Frontend Mentor - [@mnav08](https://www.frontendmentor.io/profile/mnav08)
