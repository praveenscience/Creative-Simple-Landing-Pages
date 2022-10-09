const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

function generateJoke() {
  const fj = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', fj)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}