import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { signout } from "../../actions/auth"
import '../../components/App.css'
import { Icon, Drawer, Tooltip, Avatar, Menu, Dropdown } from 'antd'
import Signin from '../../containers/auth/Signin'
import Signup from '../../containers/auth/Signup'
import Reset from '../../containers/auth/ResetPassword'
import notify from '../../components/utils/notification'
import UserImg from '../../assets/jeff.jpg'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            reset: false,
            signup: false,
            signin: true,
            title: "reactJS Market Place"
        }
    }



    onClose() {
        this.setState({ visible: false })
    }

    login() {
        return this.setState({ visible: true })
    }

    signout() {
        if (this.props.auth.isLoggedIn) {
            this.setState({ visible: false })
            this.props.signout()
            return notify("success", "deconnexion", "Vous êtes maintenant deconnecté de votre compte reactland ! à bientôt", "bottomRight")
        }
    }

    resetPassword() {
        return this.setState({ reset: true, signin: false, signup: false })
    }

    signup() {
        return this.setState({ signup: true, reset: false, signin: false })
    }

    signin() {
        return this.setState({ signin: true, reset: false, signup: false })
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to={"/account"}>
                        <Icon type="setting" theme="filled" style={{ verticalAlign: 0 }} /> Paramétres de Compte
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/messages">
                        <Icon type="message" theme="filled" style={{ verticalAlign: 0 }} /> Vos Messages
                    </Link>
                </Menu.Item>
                <Menu.Item onClick={() => this.signout()}>
                    Se deconnecter
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/" >
                                REACTLAND
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
                                </li>
                            </ul>

                        </div>
                        <ul className="navbar-nav pull-right mr-auto">
                            <li className="nav-item active ">
                                {
                                    !this.props.auth.isLoggedIn ?
                                        <Tooltip title="Se connecter" placement="bottom">
                                            <Icon
                                                type="user"
                                                style={{ fontSize: 25, color: "#c7c7c7", cursor: "pointer" }}
                                                onClick={() => this.login()}
                                            />
                                        </Tooltip>
                                        :
                                        <div>
                                            <Dropdown overlay={menu} placement="bottomRight">
                                                <Avatar
                                                    src={UserImg}
                                                    size="large"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                </Avatar>
                                            </Dropdown>
                                        </div>


                                }
                            </li>
                        </ul>
                    </nav>

                </div>
                {
                    !this.props.auth.isLoggedIn && <Drawer
                        title="Authentification Reactland !"
                        placement="right"
                        width="auto"
                        closable={true}
                        onClose={() => this.onClose()}
                        visible={this.state.visible}
                        style={{
                            overflow: 'auto',
                            height: 'calc(100% - 108px)',
                            paddingBottom: '108px',
                            textAlign: 'center',
                        }}

                    >
                        <br />
                        {this.state.signin && <Signin />}
                        {this.state.signup && <Signup />}
                        {this.state.reset && <Reset />}

                        <hr />
                        {this.state.signin &&
                            <div>
                                <em>
                                    <h6 className="font-weight-light">Pas encore de compte !
                                <span onClick={() => this.signup()} style={{ color: "#007bff", cursor: "pointer" }}>  S'enregistrer</span>
                                    </h6>
                                    <h6 className="font-weight-light">Mot de passe oublié !
                                <span onClick={() => this.resetPassword()} style={{ color: "#007bff", cursor: "pointer" }}>  Récuperer</span>
                                    </h6>
                                </em>
                            </div>
                        }

                        {this.state.signup &&
                            <em>
                                <h6 className="font-weight-light">Se connecter !
                            <span onClick={() => this.signin()} style={{ color: "#007bff", cursor: "pointer" }}>  Se connecter</span>
                                </h6>
                            </em>
                        }

                    </Drawer>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authentification,
        user: state.userInfo
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signout }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)