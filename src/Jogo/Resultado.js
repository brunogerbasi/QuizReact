import React, { Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Resposta from './Resposta'
import Navegacao from './Navegacao'

const resposta = {
    id:3,
    titulo: 'Primeira Pergunta',
    alternativa:3
}

class Resultado extends Component{
    render(){
        return(
            <section>
                <div>
                    <Navegacao />
                    <h2>Seus resultados</h2>
                    <p>Confira o seu resultado nesta categoria</p>
                    
                    <Container>                    
                        <List>
                            <Resposta resposta={resposta}/>
                        </List>
                    </Container>
                </div>
            </section>
            
        )
            
        
    }
}

export default Resultado