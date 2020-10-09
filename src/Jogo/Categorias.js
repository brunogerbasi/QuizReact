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
                    
                    <Grid columns={5}>
                        {
                            Object.keys(this.state.categorias)
                            .map(key =>{
                                return <Categoria key={key} titulo={this.state.categorias[key].nome}  icone={this.state.categorias[key].icone}/>    
                            })
                        }
                                            
                    </Grid>
                </div>
            </section>
            
        )
    }
}

export default Categorias