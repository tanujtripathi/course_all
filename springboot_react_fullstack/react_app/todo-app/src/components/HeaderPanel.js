import React from 'react';
import { Segment, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class HeaderPanel extends React.Component {

    state = {
        showNav: false
    }

    render() {
        return (
            <div>
                <Segment inverted vertical style={{ backgroundColor: "purple" }}>

                    <Grid divided inverted stackable>

                        <Grid.Row width={10}>

                            <Grid.Column style={{ marginLeft: "800px" }} width={3}>
                               
                             <Button.Group>
                                    <Link to="/login" ><Button positive inverted={true} style={{ backgroundColor: "rgb(87, 87, 238)" }}>Log in</Button></Link>
                                    <Button.Or />
                                    <a href="/register"><Button inverted={true} style={{ marginLeft: '0.5em' }}>Sign Up</Button></a>
                                </Button.Group>
                            </Grid.Column>


                        </Grid.Row>
                    </Grid>
                </Segment >
            </div >
        );

    }
}

export default HeaderPanel;