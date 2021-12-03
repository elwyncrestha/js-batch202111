const body = document.querySelector('body');
const button = document.createElement('button');
button.id = 'btn';
button.innerHTML = 'Test function';
button.classList.add('btn');
button.classList.add('btn-primary');
body.appendChild(button);

button.addEventListener('click', function() {
  console.log('Normal function: ', this);
});

button.addEventListener('click', () => console.log('Arrow function: ', this));
