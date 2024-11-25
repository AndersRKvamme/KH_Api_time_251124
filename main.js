//sets up constants fro m the DOM
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const randButton = document.getElementById("rand-button");
const dadButton = document.getElementById("dad-button");
const chuCkButton = document.getElementById("chuck-button");

//sets up API urls
const randUrl = "https://official-joke-api.appspot.com/random_joke";
const dadUrl = "https://icanhazdadjoke.com/";
const chuckUrl = "https://api.chucknorris.io/jokes/random";

async function getRandJoke() {
  const response = await fetch(randUrl);
  const data = await response.json();
  setup.textContent = data.setup;
  punchline.textContent = data.punchline;
}
async function getDadJoke() {
  const response = await fetch(dadUrl, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();

  setup.textContent = data.joke;
  punchline.textContent = "";
}
const getChuckJoke = async () => {
  const response = await fetch(chuckUrl);
  const data = await response.json();

  setup.textContent = data.value;
  punchline.textContent = "";
};
getDadJoke();

randButton.addEventListener("click", getRandJoke);
dadButton.addEventListener("click", getDadJoke);
chuCkButton.addEventListener("click", getChuckJoke);
