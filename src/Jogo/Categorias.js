import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'

import config from './../Config'
import Navegacao from './Navegacao'
import Categoria from './Categoria'


class Categorias extends Component {
    constructor (props){
        super(props)

        this.state = {
            categorias: {}
        }
        
        config.syncState('categorias',{ 
            context: this,
            state: 'categorias',
            asArray: false
        })
    }

    render(){
        return(
            <section>
                <div>
                    <Navegacao />
                    <h2>
                        Categorias
                    </h2>
                    <p>Selecione a categoria das perguntas</p>
                    <p>{JSON.stringify(this.state.categorias)}</p>

                    <Grid columns={5}>
                        <Categoria titulo='Esportes'  icone='futbol'/>
                        <Categoria titulo='Música' icone='music'/>
                        <Categoria titulo='Mundo' icone='globe'/>
                        <Categoria titulo='Animais'  icone='paw'/>
                        <Categoria titulo='Games' icone='gamepad'/>
                        <Categoria titulo='Filmes' icone='video'/>
                    </Grid>
                </div>
            </section>
            
        )
    }
}

export default Categorias