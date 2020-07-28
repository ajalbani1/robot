import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import './App.css';
import Robot from './features/Robot/Robot';

function App() {
    return (
        <Router>
            <div className="App">
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
