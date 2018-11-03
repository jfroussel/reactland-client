import React, { Component } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Header extends Component {


    authentificationLabel = () => {
        if (this.props.isLoggedIn) {
            return "Deconnexion"
        }
        return "Connexion"

    }

    render() {
        console.log('RENDER', this.props)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} width="170" className="d-inline-block align-top" alt="" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/catalog">Catalog <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sales">Sales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/statistics">Statistics</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="btn btn-dark btn-raised" to="/signin">
                                    {this.authentificationLabel()}
                                </Link>
                            </li>
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
