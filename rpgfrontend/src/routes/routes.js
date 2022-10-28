import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from '../service/PrivateRoute';

import Login from '../pages/login';
import Main from '../pages/main';
import Home from '../pages/Home'
import CidadeList from '../pages/CidadeList';

 const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login}/>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/main" exact component={Main} />
          <PrivateRoute path="/cidades" exact component={CidadeList} />
        </Switch>
      </BrowserRouter>
 )

export default Routes;