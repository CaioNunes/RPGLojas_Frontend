import React , { Component } from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import axios from './axios';

class CidadeList extends Component {
    constructor(props){
        super(props);
        this.state = {cidades: [], isLoading: true, error: null}
    }


    getCidadesInfo() {
        axios('cidades')
            .then(response => {
                console.log(response.json);
                console.log(response.data);
                const cidadesRetornadas = response.data;
                this.setState({
                    cidades: cidadesRetornadas,
                    isLoading: false
                })
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.getCidadesInfo();
    }

    render() {
        const {cidades, isLoading} = this.state;

        if(isLoading) {
            return <p>Loading...</p>
        }

        const cidadeList = cidades.map(cidade => {
            return <tr key={cidade.id}>
                <td style={{whiteSpace: 'nowrap'}}>{cidade.nome}</td>
                <td>{cidade.tesouro}</td>
                <td>
                <ButtonGroup>
                    <Button size ="sm" color="primary" tag={Link} to={"/cidades/" + cidade.id}>Editar</Button>
                </ButtonGroup>
                </td>
            </tr>
        });


        return(
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Cidades</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Nome</th>
                                <th width="30%">Tesouro</th>
                                <th width="40%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cidadeList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );

    }
}

export default CidadeList;