// Variables
//Inputs
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");
const resetBtn = document.getElementById("resetBtn");

//Outputs
const fnameErr = document.getElementById("fname-error");
const lnameErr = document.getElementById("lname-error");
const emailErr = document.getElementById("email-error");
const phoneErr = document.getElementById("phone-error");
const charCount = document.getElementById("msg-count");

// Check so that firstname only contains letters
firstName.addEventListener("input", function () {
   const fnameValue = firstName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (fnameValue === "") {
      fnameErr.innerHTML = "";
      firstName.classList.remove("error-border", "valid-border");
   } else if (!onlyLetters.test(fnameValue)) {
      fnameErr.classList.add("show");
      firstName.classList.add("error-border");
      firstName.classList.remove("valid-border");
      fnameErr.innerHTML = "Please use only letters";
   } else {
      fnameErr.innerHTML = "";
      fnameErr.classList.remove("show");
      firstName.classList.remove("error-border");
      firstName.classList.add("valid-border");
   }
});

// Check so that lastname only contains letters
lastName.addEventListener("input", function () {
   const lnameValue = lastName.value;
   const onlyLetters = /^[A-Za-z]+$/;

   if (lnameValue === "") {
      lnameErr.innerHTML = "";
      lastName.classList.remove("error-border", "valid-border");
   } else if (!onlyLetters.test(lnameValue)) {
      lnameErr.classList.add("show");
      lastName.classList.add("error-border");
      lastName.classList.remove("valid-border");
      lnameErr.innerHTML = "Please use only letters";
   } else {
      lnameErr.innerHTML = "";
      lnameErr.classList.remove("show");
      lastName.classList.remove("error-border");
      lastName.classList.add("valid-border");
   }
});

// Check that the email contains a @
email.addEventListener("input", function () {
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
});

// Check so that phone only contains numbers
phone.addEventListener("input", function () {
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
});

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

   const removeErrMsg = document.querySelectorAll(".err-msg");
   removeErrMsg.forEach((p) => p.remove());

   firstName.value = "";
   firstName.classList.remove("valid-border", "error-border");
   lastName.value = "";
   lastName.classList.remove("valid-border", "error-border");
   email.value = "";
   email.classList.remove("valid-border", "error-border");
   phone.value = "";
   phone.classList.remove("valid-border", "error-border");
   subject.value = "";
   subject.classList.remove("valid-border", "error-border");
   msg.value = "";
   msg.classList.remove("valid-border", "error-border");
   charCount.textContent = "0 / 20";
   charCount.classList.remove("under", "over");
});
