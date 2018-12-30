import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Settings from './Settings'
import Catalog from './Catalog'
import Profile from './Profile'
const style = {
    link: {
        color:"#6c757d"
    }
}


class Navigation extends Component {

    
    componentWillMount() {
        console.log('nav props ',this.props)
    }
    

    render() {
        const {info} = this.props
        const routes = [
            {
                path: "/account-profile",
                exact: true,
                sidebar: () => <div>profile</div>,
                main: () => <Profile info={info} />
            },
            {
                path: "/account-catalog",
                sidebar: () => <div>catalogue</div>,
                main: () => <Catalog />
            },
            {
                path: "/account-settings",
                sidebar: () => <div>settings</div>,
                main: () => <Settings />
            }
        ]
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "25%",
                            background: "#f0f0f0"
                        }}
                    >
                        <ul style={{ listStyleType: "none",fontSize: 20, padding: 0 }}>
                            <li >
                                <Link style={style.link} to="/account-profile">Profile</Link>
                            </li>
                            <li>
                                <Link style={style.link} to="/account-catalog">Catalog</Link>
                            </li>
                            <li>
                                <Link style={style.link} to="/account-settings">Settings</Link>
                            </li>
                        </ul>
                    </div>
                        
                    <div style={{ flex: 1, padding: "10px" }}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
    
}

export default Navigation
