import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './homePage'
import Dashboard from '../containers/Dashboard'
import RequireAuthentification from '../helpers/require-authentification'
import Signin from '../containers/auth/Signin'
import Signout from '../containers/auth/Signout'
import Signup from '../containers/auth/Signup'
import ResetPassword from '../containers/auth/ResetPassword'
import Account from '../containers/Account'
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
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/reset-password' component={ResetPassword} />
            <Route exact path='/dashboard' component={RequireAuthentification(Dashboard)} />
            <Route exact path='/account' component={RequireAuthentification(Account)} />
            <Route exact path='/401' component={Error401} />
            
        </div>
    </Router>
);

export default App;