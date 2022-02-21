import './sass/main.scss';

window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.getElementById('header').classList.remove('scroll')
      : document.getElementById('header').classList.add('scroll');
  } else {
    scrollY <= 120
      ? document.getElementById('header').classList.remove('scroll')
      : document.getElementById('header').classList.add('scroll');
  }
};

// const nameInput = document.querySelector('input.input');
function validate(e) {
  let valid = true;

  // удаляем все уже существующие ошибки валидации, чтобы проверять по новой
  const errors = document.getElementsByClassName('validation-error');
  while (errors.length > 0) {
    errors[0].parentNode.removeChild(errors[0]);
  }

  // проверяем автора
  const authorField = document.getElementById('author');

  if (!authorField.value) {
    // если не заполнено
    document.querySelector('label[for="author"]').innerHTML +=
      ' <span class="validation-error">This is a required field</span>';
    valid = false;
  }

  // проверяем поле комментария

  // проверяем поле емейла
  const emailField = document.getElementById('email');

  if (!emailField.value) {
    // если не заполнено
    document.querySelector('label[for="email"]').innerHTML +=
      ' <span class="validation-error">This is a required field</span>';
    valid = false;
  } else {
    // если заполнено, то проверяем на корректность email-адреса регулярным выражением
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(emailField.value).toLowerCase())) {
      document.querySelector('label[for="email"]').innerHTML +=
        ' <span class="validation-error">Некорректный email</span>';
      valid = false;
    }
  }

  if (false == valid) {
    e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
  }
  return valid;
}

const form = document.getElementById('form');

form.addEventListener('submit', validate);
