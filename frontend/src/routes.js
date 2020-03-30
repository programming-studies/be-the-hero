import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogonPage from './pages/Logon';
import RegisterPage from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LogonPage}/>
                <Route path="/register" component={RegisterPage}/>
            </Switch>
        </BrowserRouter>
    )
}
