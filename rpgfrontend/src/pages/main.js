import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import axios from '../service/axios';
import { logout } from '../service/auth';

export default function Main( { history } ) {

    const handleLogout = async () => {      
        const response = await axios.delete(`api/v1/logout`, {});
        logout(response.data.token);
        history.push("/login");
    }

    return (
        
        <div className="container">
            <h1 align="center" className="text-primary">Main</h1>
            <div className="d-flex justify-content-end"> 
                <button type="button" className="btn btn-primary" onClick={() => handleLogout()} >Sair</button>
            </div>

            <div className="card">
                <div className="card-body">
                    JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
                    JWT.IO allows you to decode, verify and generate JWT.
                </div>
            </div>             
        </div>
    )
}