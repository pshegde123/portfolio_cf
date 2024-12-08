(function () {
  let form = document.querySelector("#contact-form");
  let emailInput = document.querySelector("#contact-email");

  const validateEmail = (email) => {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(email.value);
  };

  const validate = () => {
    const result = document.querySelector("#result");
    const email = document.querySelector("#contact-email");
    result.innerHTML = "";

    if (validateEmail(email)) {
      result.innerHTML = emailInput.value + " is valid.";
      result.classList.add("validInput");
      result.classList.remove("invalidInput");
    } else {
      result.innerHTML = emailInput.value + " is not valid.";
      result.classList.remove("validInput");
      result.classList.add("invalidInput");
    }
    return false;
  };
  function validateForm() {
    return validateEmail() && validatePassword();
  }

  emailInput.addEventListener("change", function () {
    validate();
  });

  /*form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert("Success!");
    }
  });*/
})();
