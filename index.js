// Form Input
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const submit = (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value; //Doesn't do anything
  alert(
    `Hi, ${nameValue}, don't worry, this form doesn't actually do anything.`
  );
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submit);
