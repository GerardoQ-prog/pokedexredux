import React from 'react'
import {connect} from 'react-redux'
 const EnCancha = ({encancha,guaradarpoke}) => {
    return (
        <div className="batalla">
            <h2>En Batalla</h2>
            <div className="batalla__campo">
                {
                    encancha.map( e => (
                        <article key={e.id} className="pokedex__pokemon">
                            <img src={e.foto} className="pokeimage"></img>
                            <h3>{e.nombre}</h3>
                            <div>
                            <button 
                            onClick={()=>guaradarpoke(e)}
                            className="pokedex__button">Regresar</button>
                            </div>
                            
                        </article>
                    ))
                }
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    encancha: state.encancha

})
const mapDispatchToProps = dispatch => ({
    guaradarpoke(pokemon){
        dispatch({
            type:'guardar',
            pokemon
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EnCancha)

  
