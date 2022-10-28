import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from '../service/axios';
import { logout } from '../service/auth';

export default class AppNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
        this.dataAtual = {};
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        axios('calendario/dataAtual')
        .then(response => {
            const dataRetornada = response.data;
            console.log(dataRetornada);
            this.setState({
                dataAtual: dataRetornada.semana + " " + dataRetornada.dia + " de " + dataRetornada.mes + " de " + dataRetornada.ano
            })
        })
        .catch(error => this.setState({error}));
    }

    handleLogout = async ( ) => {      
        const response = await axios.delete(`api/v1/logout`, {});
        logout(response.data.token);
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} onClick={() => this.handleLogout()} to="/login"> Sair </NavbarBrand>
            <NavbarBrand tag={Link} to="/#">{this.state.dataAtual}</NavbarBrand>
        </Navbar>
    }
}