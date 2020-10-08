import React from 'react'
import {Grid, Header, Segment, Icon} from 'semantic-ui-react'

const Categoria = props => {
    return (
        <Grid.Column>
            <Segment circular>
                <Header as='h2'>   
                    <Header.Subheader>
                        <Icon name={props.icone} />
                    </Header.Subheader>
                    {props.titulo}  
                </Header>
            </Segment >
        </Grid.Column>
    )
}

export default Categoria