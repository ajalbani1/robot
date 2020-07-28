import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import './App.scss';
import Robot from './features/Robot/Robot';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <ul className={`hor-menu`}>
                        <li>
                            <Link to="/robot">Robot</Link>
                        </li>
                        <li>
                            <Link to="/stats">Stats</Link>
                        </li>
                    </ul>
                    <hr/>
                </header>
                <section className={`main`}>
                    <Switch>
                        <Route path="/robot" component={Robot} />
                        <Route exact path="/">
                            <Redirect to="/robot" />
                        </Route>
                    </Switch>
                </section>
            </div>
        </Router>
    );
}

export default App;
