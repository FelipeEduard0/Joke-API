const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const apiUrl =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke = () => {
    fetch(apiUrl)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        });
}

btn.addEventListener("click",getJoke);

getJoke();