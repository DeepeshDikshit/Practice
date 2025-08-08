const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
form.addEventListener('submit',
   function (e) {
      e.preventDefault();
      const usernamevalue = username.value.trim();
      const emailvalue = email.value.trim();
      const passwordvalue = password.value.trim();

      if (usernamevalue === '') {
         usernameError.textContent = 'username is required';
         username.style.borderColor = 'red';
      } else {
         usernameError.textContent = '';
         username.style.borderColor = "green"
      }
      if (emailvalue === '') {
         emailError.textContent = 'email is required';
         email.style.borderColor = 'red';
      } else if (!emailvalue.includes('@') || !emailvalue.includes(".")) {
         emailError.textContent = "please enter valid email"
         email.style.borderColor = 'red'
      }
      else {
         emailError.textContent = '';
         email.style.borderColor = "green"
      }
      if (passwordvalue === '') {
         passwordError.textContent = 'username is required';
         password.style.borderColor = 'red';
      } else if (passwordvalue.length < 6) {
         passwordError.textContent = "must be of 6 digit"
         password.style.borderColor = "red"
      }

      else {
         passwordError.textContent = '';
         password.style.borderColor = "green"
      }
   })