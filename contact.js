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

// Outputs
const fnameErr = document.getElementById("fname-error");
const lnameErr = document.getElementById("lname-error");
const emailErr = document.getElementById("email-error");
const phoneErr = document.getElementById("phone-error");
const charCount = document.getElementById("msg-count");

// Functions
function validateName() {
   const fnameValue = firstName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (fnameValue === "") {
      fnameErr.innerHTML = "";
      firstName.classList.remove("error-border", "valid-border");
      return false;
   } else if (!onlyLetters.test(fnameValue)) {
      fnameErr.classList.add("show");
      firstName.classList.add("error-border");
      firstName.classList.remove("valid-border");
      fnameErr.innerHTML = "Please use only letters";
      return false;
   } else {
      fnameErr.innerHTML = "";
      fnameErr.classList.remove("show");
      firstName.classList.remove("error-border");
      firstName.classList.add("valid-border");
      return true;
   }
}
function validateLast() {
   const lnameValue = lastName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (lnameValue === "") {
      lnameErr.innerHTML = "";
      lastName.classList.remove("error-border", "valid-border");
      return false;
   } else if (!onlyLetters.test(lnameValue)) {
      lnameErr.classList.add("show");
      lastName.classList.add("error-border");
      lastName.classList.remove("valid-border");
      lnameErr.innerHTML = "Please use only letters";
      return false;
   } else {
      lnameErr.innerHTML = "";
      lnameErr.classList.remove("show");
      lastName.classList.remove("error-border");
      lastName.classList.add("valid-border");
      return true;
   }
}
function validateEmail() {
   const emailValue = email.value;

   if (emailValue === "") {
      email.classList.remove("valid-border", "error-border");
      emailErr.classList.remove("show");
      emailErr.innerHTML = "";
   } else if (emailValue.includes("@")) {
      email.classList.add("valid-border");
      email.classList.remove("error-border");
      emailErr.classList.remove("show");
      emailErr.innerHTML = "";
   } else {
      email.classList.remove("valid-border");
      email.classList.add("error-border");
      emailErr.classList.add("show");
      emailErr.innerHTML = "Email must contain a @";
   }
}
function validatePhone() {
   const phoneValue = phone.value;
   const onlyNumber = /^[0-9/-]+$/;

   if (phoneValue === "") {
      phoneErr.innerHTML = "";
      phone.classList.remove("error-border", "valid-border");
   } else if (!onlyNumber.test(phoneValue)) {
      phoneErr.classList.add("show");
      phone.classList.add("error-border");
      phone.classList.remove("valid-border");
      phoneErr.innerHTML = "Please use only numbers, / or -";
   } else {
      phoneErr.innerHTML = "";
      phoneErr.classList.remove("show");
      phone.classList.remove("error-border");
      phone.classList.add("valid-border");
   }
}
function validateMessage() {}
function showError() {}
function clearError() {}
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

   if (!isFirstNameValid || !isLastNameValid) {
      e.preventDefault();
      alert("Formuläret har fel och skickades inte.");
   } else {
      alert("Allt ser bra ut! Skickar...");
   }
});
