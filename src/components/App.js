import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './homePage'
import Dashboard from '../containers/Dashboard'
import RequireAuthentification from '../helpers/require-authentification'
import Account from '../containers/Account'
import Settings from '../components/account/Settings'
import Competences from '../components/account/Competences'
import Experiences from '../components/account/Experiences'
import Messages from '../components/account/Messages'

import Error401 from '../components/error/401'

const style = {
    container: {
        backgroundColor: '#fff',
        minHeight: '100vh'
    }
}

const App = () => (
    <Router>
        <div style={style.container}>
            
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home-page" component={HomePage} />
            <Route exact path='/dashboard' component={RequireAuthentification(Dashboard)} />
            <Route exact path='/account' component={RequireAuthentification(Account)} />
            <Route exact path='/settings' component={Settings}></Route>
            <Route exact path='/competences' component={Competences}></Route>
            <Route exact path='/experiences' component={Experiences}></Route>
            <Route exact path='/messages' component={Messages}></Route>
            <Route exact path='/401' component={Error401} />
            
        </div>
    </Router>
);

export default App;