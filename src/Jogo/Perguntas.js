import React from 'react'
import { Grid, Radio, Button, Message } from 'semantic-ui-react'

import Navegacao from './Navegacao'

const Perguntas = props =>{
    return(
        <section>
            <div>
                <Navegacao />
                <h2>
                    Perguntas sobre Games
                </h2>
                <p>
                    Mostre o que você sabe sobre o assunto.
                </p>

                <h3>Pergunta: Lorem inpsun...</h3>
                <Grid columns={2}>                
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='orange'>
                                <Radio toggle/>
                                <p>Alternativa 1</p>
                            </Message>                            
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <Radio toggle/>
                                <p>Alternativa 1</p>
                            </Message>                
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='pink'>
                                <Radio toggle/>
                                <p>Alternativa 1</p>
                            </Message>                
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='green'>
                                <Radio toggle/>
                                <p>Alternativa 1</p>
                            </Message>                
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br /><br />
                <Button>Responder</Button>


            </div>
        </section>
       
    )
}

export default Perguntas