function Print (texto) {
    console.log( texto)
}


const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



function convertPokemonToLi (pokemon) {
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    
    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
</li>
    `
}


const pokemonList = document.getElementById('pokemonsOL')

pokeApi.getPokemons().then((pokemons) => {
    const listItems = []

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listItems.push(convertPokemonToLi(pokemon))
    }

    console.log(listItems)
})




