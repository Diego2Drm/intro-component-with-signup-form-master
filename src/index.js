const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const inputEmail = document.getElementById('email');
const password = document.getElementById('password');

const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
  const emailValue = document.querySelector('.email').value;
  e.preventDefault();
  firstNameValue();
  lastNameValue();
  validEmail(emailValue);
  passwordValue();

});
function firstNameValue() {
  if (firstName.value.length == 0) {
    firstName.nextElementSibling.classList.remove('inactive');
    firstName.nextElementSibling.nextElementSibling.classList.remove('inactive');
    firstName.classList.add('error');
  } else {
    firstName.nextElementSibling.classList.add('inactive');
    firstName.nextElementSibling.nextElementSibling.classList.add('inactive');
    firstName.classList.remove('error');
  };
};

function lastNameValue() {
  if (lastName.value.length == 0) {
    lastName.nextElementSibling.classList.remove('inactive');
    lastName.nextElementSibling.nextElementSibling.classList.remove('inactive');
    lastName.classList.add('error')
  } else {
    lastName.nextElementSibling.classList.add('inactive');
    lastName.nextElementSibling.nextElementSibling.classList.add('inactive');
    lastName.classList.remove('error');
  };
};

function passwordValue() {
  if (password.value.length == 0) {
    password.nextElementSibling.classList.remove('inactive');
    password.nextElementSibling.nextElementSibling.classList.remove('inactive');
    password.classList.add('error');
  } else {
    password.nextElementSibling.classList.add('inactive');
    password.nextElementSibling.nextElementSibling.classList.add('inactive');
    password.classList.remove('error');
  };
};

const validEmail = (email) => {
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  let valid = expReg.test(email);

  if (valid) {
    inputEmail.nextElementSibling.classList.add('inactive');
    inputEmail.nextElementSibling.nextElementSibling.classList.add('inactive')
    inputEmail.classList.remove('error');

  } else {
    inputEmail.placeholder = "email@example.com"
    inputEmail.nextElementSibling.classList.remove('inactive');
    inputEmail.nextElementSibling.nextElementSibling.classList.remove('inactive');
    inputEmail.classList.add('error');

  };

};
