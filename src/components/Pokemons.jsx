import React from 'react'
import {connect} from 'react-redux'

const Pokemons = ({pokemons,agregarpoke,guaradarpoke}) => {


    return (
        <div className="pokedex__escoger">
            <h2>Pokemons</h2>
            <div className="pokedex__pokemons">
                {
                    pokemons.map((j)=>(
                        <article key={j.id} className="pokedex__pokemon">
                        <img src={j.foto} alt="" className="pokeimage"></img>
                        <h3>{j.nombre}</h3>
                        <div>
                            <button 
                            onClick={()=> agregarpoke(j)}
                            className="pokedex__button">¡Yo te elijo!</button>
                        </div>
                    </article>
                    ))
                }
               
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    pokemons: state.pokemons

})
const mapDispatchToProps = dispatch => ({
    agregarpoke(pokemon){
        dispatch({
            type:'elegir',
            pokemon
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)
