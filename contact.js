// Variables
//Inputs
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submit");
const formSent = document.getElementById("form-sent");

// Outputs
const fnameErr = document.getElementById("fname-error");
const lnameErr = document.getElementById("lname-error");
const emailErr = document.getElementById("email-error");
const phoneErr = document.getElementById("phone-error");
const charCount = document.getElementById("msg-count");
const thanksTxt = document.getElementById("thanksTxt");

// Functions
function validateName() {
   const fnameValue = firstName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (fnameValue === "") {
      return resetField(firstName, fnameErr);
   } else if (!onlyLetters.test(fnameValue)) {
      return showError(firstName, fnameErr, "Please use only letters");
   } else {
      return clearError(firstName, fnameErr);
   }
}
function validateLast() {
   const lnameValue = lastName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (lnameValue === "") {
      return resetField(lastName, lnameErr);
   } else if (!onlyLetters.test(lnameValue)) {
      return showError(lastName, lnameErr, "Please use only letters");
   } else {
      return clearError(lastName, lnameErr);
   }
}
function validateEmail() {
   const emailValue = email.value;

   if (emailValue === "") {
      return resetField(email, emailErr);
   } else if (emailValue.includes("@")) {
      return clearError(email, emailErr);
   } else {
      return showError(email, emailErr, "Email must contain a @");
   }
}
function validatePhone() {
   const phoneValue = phone.value;
   const onlyNumber = /^[0-9/-]+$/;

   if (phoneValue === "") {
      return resetField(phone, phoneErr);
   } else if (!onlyNumber.test(phoneValue)) {
      return showError(phone, phoneErr, "Please use only numbers, / or -");
   } else {
      return clearError(phone, phoneErr);
   }
}
function validateMessage() {
   if (msg.value.length < 20) {
      return false;
   } else {
      return true;
   }
}
function showError(inputField, errorElement, message) {
   errorElement.innerHTML = message;
   errorElement.classList.add("show");
   inputField.classList.add("error-border");
   inputField.classList.remove("valid-border");
   return false;
}
function clearError(inputField, errorElement) {
   errorElement.innerHTML = "";
   errorElement.classList.remove("show");
   inputField.classList.remove("error-border");
   inputField.classList.add("valid-border");
   return true;
}
// If element is empty then hide element and remove border
function resetField(inputField, errorElement) {
   errorElement.innerHTML = "";
   errorElement.classList.remove("show");
   inputField.classList.remove("error-border", "valid-border");
   return false;
}
function clearForm() {
   firstName.value = "";
   firstName.classList.remove("valid-border", "error-border");
   fnameErr.classList.remove("show");
   lastName.value = "";
   lastName.classList.remove("valid-border", "error-border");
   lnameErr.classList.remove("show");
   email.value = "";
   email.classList.remove("valid-border", "error-border");
   emailErr.classList.remove("show");
   phone.value = "";
   phone.classList.remove("valid-border", "error-border");
   phoneErr.classList.remove("show");
   subject.value = "";
   subject.classList.remove("valid-border", "error-border");
   msg.value = "";
   msg.classList.remove("valid-border", "error-border");
   charCount.textContent = "0 / 20";
   charCount.classList.remove("under", "over");
}

function showModal() {
   const senderName = firstName.value;
   thanksTxt.innerHTML = "Thank you " + senderName + "!";

   formSent.classList.add("sent");
   setTimeout(() => {
      formSent.classList.remove("sent");
   }, 3000);
   clearForm();
}

// Check so that firstname only contains letters
firstName.addEventListener("input", validateName);

// Check so that lastname only contains letters
lastName.addEventListener("input", validateLast);

// Check that the email contains a @
email.addEventListener("input", validateEmail);

// Check so that phone only contains numbers
phone.addEventListener("input", validatePhone);

// Add a green border when an option is chosen
subject.addEventListener("change", function () {
   const subjectValue = subject.value;

   if (subjectValue !== "") {
      subject.classList.add("valid-border");
   } else subject.classList.remove("valid-border");
});

//Count characters in textarea
msg.addEventListener("input", function () {
   const text = msg.value;
   const count = text.length;
   charCount.textContent = count + " / " + "20";

   charCount.classList.remove("under", "over");
   msg.classList.remove("valid-border", "error-border");

   if (count === 0) {
      return;
   }

   if (count < 20) {
      charCount.classList.add("under");
      msg.classList.add("error-border");
   } else {
      charCount.classList.add("over");
      msg.classList.add("valid-border");
   }
});

// Reset button
resetBtn.addEventListener("click", function (e) {
   e.preventDefault();
   clearForm();
});

// Submit button
form.addEventListener("submit", function (e) {
   const isFirstNameValid = validateName();
   const isLastNameValid = validateLast();
   const isEmailValid = validateEmail();
   const isMsgValid = validateMessage();

   if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isMsgValid) {
      e.preventDefault();
      alert("Formuläret har fel och skickades inte.");
   } else {
      showModal();
   }
});
