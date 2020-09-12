import React from 'react'
import { Provider} from 'react-redux'
import { EquipoSelect } from './components/EquipoSelect'
import Pokemons from './components/Pokemons'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
        <main className="pokedex">
            <div className="pokedex__title">
                <h1 className="title">Team HackSpace</h1>
            </div>
            
            <Pokemons></Pokemons>
            <EquipoSelect></EquipoSelect>

        </main>
        </Provider>
    )
}

export default App
