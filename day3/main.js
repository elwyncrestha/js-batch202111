function validateForm() {
  event.preventDefault();
  ''.includes()
  const email = document.querySelector('#email');
  if (!email.value) {
    const emailBlock = document.querySelector('#emailBlock');
    const emailHelp = document.createElement('div');
    emailHelp.innerHTML = 'Email is required';
    emailHelp.classList.add('form-text');
    emailHelp.classList.add('text-danger');
    emailHelp.classList.add('email-control');
    emailBlock.appendChild(emailHelp);
    return;
  }
  const emailHelp = document.querySelector('.email-control');
  emailHelp?.remove();

  const password = document.querySelector('#password');
  if (!password.value) {
    const passwordHelp = document.querySelector('#passwordHelp');
    passwordHelp.innerHTML = 'Password is required';
    passwordHelp.style.color = 'red';
    return;
  }
  passwordHelp.innerHTML = '';

  const credential = { email: email.value, password: password.value };
  console.log(JSON.stringify(credential));

}

// event bubbling
document.querySelector('#clickMeBtn').addEventListener('click', () => console.log('btn clicked!'), false);
document.querySelector('#event-demo').addEventListener('click', () => console.log('btn div clicked!'), false);

// event capturing
document.querySelector('#clickMeBtn').addEventListener('click', () => console.log('btn clicked!'), true);
document.querySelector('#event-demo').addEventListener('click', () => console.log('btn div clicked!'), true);
