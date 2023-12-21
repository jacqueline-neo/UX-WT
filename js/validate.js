
const form = document.querySelector('.requires-validation');

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    // form is valid, show success modal
    event.preventDefault();
    $('#success-modal').modal('show');
  }

  form.classList.add('was-validated');
});

