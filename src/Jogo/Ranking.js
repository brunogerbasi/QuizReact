import React, {Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Usuario from './Usuario'
import Navegacao from './Navegacao'



class Ranking extends Component {
    render(){
        return(
            <section>
                <div>
                    <Navegacao />
                    <h2>RANKING</h2>
                    <p>Confira a lista dos melhores</p>
                    
                    <Container>                    
                        <List>
                            <Usuario  
                                foto='' 
                                nome='Bruno Gerbasi' 
                                pontos='100'
                            />
                            <Usuario  
                                foto='' 
                                nome='Enzo' 
                                pontos='35'
                            />
                             <Usuario  
                                foto='' 
                                nome='Jessica' 
                                pontos='50'
                            />

                        </List>
                    </Container>
                </div>
            </section>
        )
    }
}

export default Ranking