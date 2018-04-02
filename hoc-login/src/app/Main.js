import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import requireAuth from './hoc/requireAuth';

const Main = () => {
    return (
        <main className="container">
            <Switch >
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={requireAuth(AboutPage)} />
            </Switch >
        </main>
    );
};

export default Main;