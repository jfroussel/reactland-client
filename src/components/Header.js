import React, { Component } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Header extends Component {

    renderAuthLink = () => {
        if (this.props.isLoggedIn) {
            return (
                <li className="nav-item">
                    <Link className="btn btn-dark btn-raised" to="/signout">
                        Logout
                    </Link>
                </li>
            )
        } else {
            return (
                <li className="nav-item">
                    <Link className="btn btn-dark btn-raised" to="/signin">
                        Login
                    </Link>
                </li>
            )
        }
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} width="170" className="d-inline-block align-top" alt="" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sales">Sales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/statistics">Statistics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/account">Account</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {this.renderAuthLink()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn

})


export default connect(mapStateToProps, actions)(Header)
