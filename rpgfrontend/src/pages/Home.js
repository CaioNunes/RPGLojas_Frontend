import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { SolidGameCardDemo } from '../SolidGameCardDemo';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/cidades">Cidades</Link></Button>
                </Container>
                <SolidGameCardDemo></SolidGameCardDemo>
            </div>
        )
    }
}

export default Home;