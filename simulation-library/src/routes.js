import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Browsing from './components/Browsing';
import MyShelf from './components/MyShelf';
import Cart from './components/Cart';
import Details from './components/Details';

export default(
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/browsing' component={Browsing}/>
        <Route path='/myshelf' component={MyShelf}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/details/:id' component={Details}/>
    </Switch>
)