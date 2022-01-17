import React, { Component } from 'react'
import pokemonDb from "../../JSON.json"


let initialState = {
    Db: []
}

class Pokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
             ...initialState,
        }
    }

        componentDidMount() {
        let pokemonMap = pokemonDb.map(item => {
            return{
                id: item.id,
                nombre: item.nombre,
                movimientos: item.movimientos ? item.movimientos.map(item=>item.nombre ?item.nombre: 'no hay data').join(" - ") : 'no se tiene movimientos',
                obtencion: item.movimientos ? item.movimientos.map(item=> item.obtencion ?item.obtencion: 'no hay métodos de obtención').map(item => item.nombre).join(" - ") : 'no se tiene movimientos',
                imagen: item.imagen
            }
        });

        
        let initialState = [...this.state.Db.concat(pokemonMap)];

        this.setState({Db: initialState});

        
    }

    render() {
        return (
            <div>
                <h2>PokemonCC </h2>
                    {this.state.Db.map((item) => 
                    
                            <div key={item.id}>
                            <img src={item.imagen} alt={item.nombre} ></img>
                            <h4> {"Nombre: " + item.nombre}</h4>
                            <h4>{"Movimientos: " + item.movimientos}</h4>
                            <h4>{"Obtencion: " + item.obtencion}</h4>
                            <hr/>
                            </div>
                   )}

            </div>
        );
    }
}

export default Pokemon;

