import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Catalog from './Catalog'
import Sales from './Sales'
import Statistics from './Statistics'
import RequireAuthentification from '../helpers/require-authentification'
import Navbar from './Header'
import Signin from './Signin'
import Signout from './Signout'
import Signup from './Signup'
import Account from './Account'



const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}

const App = () => (
    <Router>
        <div style={style.container}>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={RequireAuthentification(Dashboard)} />
            <Route exact path='/catalog' component={RequireAuthentification(Catalog)} />
            <Route exact path='/sales' component={RequireAuthentification(Sales)} />
            <Route exact path='/statistics' component={RequireAuthentification(Statistics)} />
            <Route exact path='/account' component={RequireAuthentification(Account)} />
        </div>
    </Router>
);

export default App;