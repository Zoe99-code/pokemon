let base_URL = "https://pokeapi.co/api/v2/pokemon/";
function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let pokemon = data.results;
      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      container.innerHTML += `<button onclick="getPokemonList('${data.next}')">Next</button>`;
      container.innerHTML += `<button onclick="getPokemonList('${data.previous}')">Previous</button>`;
    });
}
getPokemonList(base_URL);
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.other.dream_world.front_default} ">
    `;
      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Weight:" + data.weight + "kg" + ""
      }</span>`;

      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Height:" + data.height + "m" + ""
      }</span>`;

      document.querySelector(".pokemon-info").innerHTML += `<br><span> ${
        "Name:" + data.name + "" + ""
      }</span>`;
    });
}