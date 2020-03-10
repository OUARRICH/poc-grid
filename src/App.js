import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AgGridDemo from './agDrid';

const App = () =>  (
    <Router>
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">AgGrid</Link>
                </li>
                {/* <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li> */}
            </ul>
        </nav>

        <Switch>
            <Route path="/agGrid">
                <AgGridDemo />
            </Route>
            <Route path="/">
                <AgGridDemo />
            </Route>
            {/* <Route path="/users">
            <Users />
            </Route>
            <Route path="/">
            <Home />
            </Route> */}
        </Switch>
        </div>
    </Router>
);

export default App;
