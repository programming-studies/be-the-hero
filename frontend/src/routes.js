import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogonPage from './pages/Logon';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LogonPage}/>
            </Switch>
        </BrowserRouter>
    )
}
