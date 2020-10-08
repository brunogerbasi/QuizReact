import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Image, Dropdown, Icon} from 'semantic-ui-react'
import firebase from 'firebase'

class Reader extends Component {

    constructor (props){
        super(props)

        this.state = {
            usuario: '',
            estaLogado: false
        }
    }

    componentDidMount(){
        const usuarioAtual = firebase.auth().currentUser

        
        if(usuarioAtual !== null){
            const usuarioLogado = {
                nome : usuarioAtual.displayName,
                foto : usuarioAtual.photoURL
            }

            this.setState({
                usuario: usuarioLogado,
                estaLogado: true
            })

        }

        // const usuarioLogado = {
        //     nome : localStorage.getItem('nome'),
        //     foto : localStorage.getItem('foto')
        // }

        
    }

    deslogarUsuario(){
        firebase
            .auth()
            .signOut()
            .then(() => {
                // localStorage.removeItem('nome')
                // localStorage.removeItem('foto')
                this.setState({
                    usuario: '',
                    estaLogado: false
                })
            })
            .catch( err => {
                console.logo('Erro ao deslogar')
            })

    }

    render(){
        if(!this.state.estaLogado){
            return(
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item as={Link} to='/'>Para jogar é necessário logar-se</Menu.Item>
                </Menu>
            )

        }
        const {foto, nome} = this.state.usuario
        return(
            <div>
                 <header className="App-header">                
                    <h2 className="App-title">Quiz React JS</h2>        
                
                    <Menu>
                        <Menu.Item as={Link} to='/'>Home</Menu.Item>
                        <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                        <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                        <Menu.Item as={Link}to='resultado'>Resultado</Menu.Item>
                        <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>

                        {
                            this.state.estaLogado &&
                            <span>
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Image avatar src={foto}/>                            
                                        <Dropdown item text={nome}>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={this.deslogarUsuario}>Sair</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Item>
                                </Menu.Menu>
                            </span>
                            
                        }
                        {
                            !this.state.estaLogado &&
                            <span>
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Icon name='user' />
                                    </Menu.Item>
                                </Menu.Menu>
                            </span>
                            
                        }

                        

                    </Menu>
                </header>
            </div>
            
        )
    }
    
}

export default Reader