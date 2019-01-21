import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Sales from './Sales'
import Statistics from './Statistics'
import RequireAuthentification from '../helpers/require-authentification'
import Navbar from './header'
import Signin from '../containers/auth/Signin'
import Signout from '../containers/auth/Signout'
import Signup from '../containers/auth/Signup'
import Account from './account/Account'
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
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={RequireAuthentification(Dashboard)} />
            <Route exact path='/sales' component={RequireAuthentification(Sales)} />
            <Route exact path='/statistics' component={RequireAuthentification(Statistics)} />
            <Route exact path='/account' component={RequireAuthentification(Account)} />
            <Route exact path='/401' component={Error401} />
            
        </div>
    </Router>
);

export default App;