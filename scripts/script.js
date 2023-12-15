const pokemonName = document.getElementById("name").value;
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

const pokemonForm = document.getElementById("pokemonForm");
const submitButton = document.getElementById("submit");
const pokemonInfoList = document.querySelector(".pokemon-info__list");

pokemonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("name").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    axios
        .get(url)
        .then((response) => {
            let pokemonData = response.data;
            console.log(pokemonData);
            displayPokemon(event, pokemonData);
        })
        .catch((error) => {
            console.log(error);
        })
});

function displayPokemon(event, pokemonData) {
    event.preventDefault();
    console.log(event.target.name.value)

    pokemonInfoList.innerHTML = "";

    // id
    const id = document.createElement("li");
    id.innerHTML = `<label>ID:</label> ${pokemonData.id}`;

    //sprite
    const sprite = document.createElement("li");
    id.innerHTML = `<img src="${pokemonData.sprites.front_default}"></img>`;

    // name
    const name = document.createElement("li");
    name.innerHTML = `<label>Name:</label> ${pokemonData.name}`;

    // weight
    const weight = document.createElement("li");
    weight.innerHTML = `<label>Weight:</label> ${pokemonData.weight} kg`;

    // height
    const height = document.createElement("li");
    height.innerHTML = `<label>Height:</label> ${pokemonData.height} m`;

    // abilities
    const abilities = document.createElement("li");
    abilities.innerHTML = `<label>Abilities:</label> ${pokemonData.abilities
        .map((ability) => ability.ability.name)
        .join(', ')}`;

    // moves    
    const moves = document.createElement("li");
    moves.innerHTML = `<label>Moves:</label> ${pokemonData.moves
        .map((move) => move.move.name)
        .slice(0, 5)
        .join(', ')}`;

    pokemonInfoList.appendChild(id);
    pokemonInfoList.appendChild(name);
    pokemonInfoList.appendChild(weight);
    pokemonInfoList.appendChild(height);
    pokemonInfoList.appendChild(abilities);
    pokemonInfoList.appendChild(moves);
}
