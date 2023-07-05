const emailEl = document.querySelector(".email-input");
const formEl = document.querySelector("form");
const labelErrorEl = document.querySelector(".error-failure");
const successModal = document.querySelector(".success-modal");
const subscribedEmailEl = document.querySelector(".success-email");

const closeSuccessModalBtn = document.querySelector(".close-success-modal-btn");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!emailEl.value || !/^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(emailEl.value)) {
    labelErrorEl.classList.add("error-failure-active");
    emailEl.classList.add("email-input-error");
  } else {
    const emailSubmitted = emailEl.value;
    subscribedEmailEl.textContent = emailSubmitted;
    labelErrorEl.classList.remove("error-failure-active");
    emailEl.classList.remove("email-input-error");
    successModal.classList.add("success-modal-active");
  }
});

closeSuccessModalBtn.addEventListener("click", function () {
  successModal.classList.remove("success-modal-active");
});
