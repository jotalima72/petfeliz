import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Lista from './pages/Lista/index';
import Pet from './pages/Pet/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exacte path='/Cadastro' component={Cadastro}/>
            <Route exacte path='/Lista' component={Lista}/>
            <Route exacte path='/Pet:index' component={Pet}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;