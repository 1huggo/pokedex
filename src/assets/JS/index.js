/* 
1) Ao cliclar no pokemon do list temos que esconder o cartão do pokemon aberto e mostrar o cartão selecionado 

2) Para isso vamos precisar trabalhr com dois elementos 
1- list 
2- card-pokemon 

3) Precisamos criar duas variáveis JS pra trabalhar com os elementos da tela.

4) evento clique pleo usuário para escolher o pokemon

-romever a classe aberto
-ao clicar em um pokemon da list pegamos o id dessse pokemon para saber qual card mostrar
-remover a classe ativa que marca o pokemon selecionado.
-adicionar a classe ativo no item da lista selecionado.
*/

//Precisamos criar duas variáveis JS pra trabalhar com os elementos da tela.

const selectionListPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

//evento clique pleo usuário para escolher o pokemon
selectionListPokemons.forEach(pokemon => {
    

    pokemon.addEventListener('click', () => {
     const pokemonCardOpened = document.querySelector('.open')
     pokemonCardOpened.classList.remove('open')
    
     const idSelectedPokemon = pokemon.attributes.id.value

     const idPokemonCardToOpen = idSelectedPokemon + '-card'
     const pokemonCardToOpen = document.getElementById(idPokemonCardToOpen)
     pokemonCardToOpen.classList.add('open')

     const activePokemonList = document.querySelector('.active')
     activePokemonList.classList.remove('active')

     const pokemonSelectedList = document.getElementById(idSelectedPokemon)
     pokemonSelectedList.classList.add('active')
    })
})
