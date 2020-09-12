import { createStore} from 'redux'

const initialState = {
    pokemons:[
        {
            id:1,
            nombre:'Bullbasaur',
            foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
            
        },
        {
            id:2,
            nombre:'Pikachu',
            foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
        },
        {
            id:3,
            nombre:'Charizard',
            foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
        },
        {
            id:4,
            nombre:'Treecko',
            foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/252.svg'
        },
        {
            id:5,
            nombre:'Abra',
            foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg'
        }
    ],
    encancha:[],
    guardados : []
}

const reducerEntrenador= (state = initialState, action)=>{
    if(action.type === 'elegir'){
        return{
            ...state,
            encancha: state.encancha.concat(action.pokemon),
            pokemons: state.pokemons.filter(j => j.id!== action.pokemon.id)
        }
    }
    if(action.type === 'guardar'){
        return{
            ...state,
            encancha: state.encancha.filter(j => j.id!== action.pokemon.id),
            pokemons: state.pokemons.concat(action.pokemon)
        }
    }

    return state;
}

export default createStore(reducerEntrenador)