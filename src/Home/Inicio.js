import React, {Component} from "react"
import { Container, Header, Segment, Card, Button} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { auth, providers } from './../Config'
import Navegacao from './Navegacao'


class Inicio extends Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if(usuario){
                console.log(usuario)
                this.setState({
                    usuario,
                    estaLogado: true
                })
                // localStorage.setItem('nome', usuario.displayName)
                // localStorage.setItem('foto', usuario.photoURL)
            }else{
                console.log('não logou')
                this.setState({
                    estaLogado:false
                })
            }
        })
    }

    autentica(provider){
        console.log(provider)
        auth.signInWithPopup(providers[provider])
    }

    

    render (){
        if(this.state.estaLogado){
            return <Redirect to='/categorias' />

        }
        return(
            <section>            
                <div>
                    <Navegacao />
                    <Container>                    
                        <Header as='h2'>
                            Jogo de Perguntas e Respostas
                        </Header>
                        <p>
                            Desafie seus amigos neste incrivel jogo.
                        </p>
                        {
                            !this.state.estaLogado &&
                        
                            <Card fluid>
                                <Card.Content>
                                    Lorem impsun
                                </Card.Content>
                                <Card.Content>
                                    <Button color='facebook' onClick={() => this.autentica('facebook')}>Logar com Facebook</Button> <br /><br />
                                    <Button color='twitter' onClick={() => this.autentica('twitter')}>Logar com Twitter</Button> <br /><br />
                                    <Button basic color='blue'>Painel Admin</Button>
                                </Card.Content>
                            </Card>
                        }
                        {
                            this.state.estaLogado &&
                            <div>
                                <h3>{this.state.usuario.displayName}</h3>
                                <img src={this.state.usuario.photoURL}/>
                            </div>                            
                        }
                    </Container>
                </div>
            </section>
        )
    }
   
}

export default Inicio