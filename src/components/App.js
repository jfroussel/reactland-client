import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'



const style = {
    container: {
        paddingTop: '5rem'
    }
}

const App = () => (
    <Router>
        <div style={style.container}>
            <Route exact path="/" component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />

        </div>
    </Router>
);

export default App;