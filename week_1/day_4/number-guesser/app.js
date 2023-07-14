const input = document.getElementById('input');
const guess = document.getElementById('guess');
const output = document.getElementById('output');

guess.addEventListener('click', (e) => {

  const randomNumber = Math.round(Math.random() * 10);

  const elem = document.createElement('div');
  elem.classList.add('alert');
  output.innerHTML = '';

  if (input.value == randomNumber) {
    elem.classList.add('alert-success');
    elem.innerHTML = 'Alright Houdini, you guessed right.';
  } else {
    elem.classList.add('alert-danger');
    elem.innerHTML = 'Close, the number I was thinking is ' + randomNumber;
  }

  output.appendChild(elem);
});