const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

const description = document.getElementById('description');
const guess = document.getElementById('guess');
const input = document.getElementById('input');

const hint = document.getElementById('hint');
const requestHint = document.getElementById('requestHint');
const start = document.getElementById('start');
const refresh = document.getElementById('refresh');
randomNumber = Math.round(Math.random() * 11);

start.addEventListener('click', (e) => {
    const elem = document.createElement('div');
    description.innerHTML = movies[randomNumber].explanation;
  
    description.appendChild(elem);
});

guess.addEventListener('click', (e) => {
  
    const elem = document.createElement('div');
    elem.classList.add('alert');
    output.innerHTML = '';
    console.log(guess.value);
    if (input.value == movies[randomNumber].title) {
      elem.classList.add('alert-success');
      elem.innerHTML = 'Nice Guess!';
    } else {
      elem.classList.add('alert-danger');
      elem.innerHTML = 'Nope, the movie was ' + movies[randomNumber].title;
    }
  
    output.appendChild(elem);
    randomNumber = Math.round(Math.random() * 11);
});

requestHint.addEventListener('click', (e) => {
  
    const elem = document.createElement('div');
    elem.classList.add('alert');
    hint.innerHTML = '';

    elem.classList.add('alert-success');
    elem.innerHTML = "Hint: " + movies[randomNumber].hint;
  
    hint.appendChild(elem);
});
   