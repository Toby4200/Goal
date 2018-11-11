import React from 'react';
import { Route } from 'react-router-dom';
import App from './App.tsx';

// const a = () => (<div>a</div>);
const b = () => (<div>b</div>);
const c = () => (<div>c</div>);

export default () => (
    [
        <Route path="/" exact component={App} />,
        <Route path="/b/" component={b} />,
        <Route path="/c/" component={c} />
    ]
);
