import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { signout } from "../../actions/auth"
import '../../components/App.css'
import { Icon, Drawer, Tooltip, Avatar, Menu, Dropdown } from 'antd'
import Logo from '../../assets/logo.png'
import Signin from '../../containers/auth/Signin'
import Signup from '../../containers/auth/Signup'
import Reset from '../../containers/auth/ResetPassword'
import notify from '../../components/utils/notification'
import UserTools from '../../components/user/userTools'
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
        const { info } = this.props.user

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to={"/account"}>
                        <Icon type="setting" theme="filled" style={{ verticalAlign: 0 }} /> Paramétres de Compte
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="message" theme="filled" style={{ verticalAlign: 0 }} /> Vos Messages
                </Menu.Item>
                <Menu.Item onClick={() => this.signout()}>
                    Se deconnecter
                </Menu.Item>
            </Menu>
        );

        return (
            <header className="header header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/" >
                                <img src={Logo} alt="reactland" />
                            </Link>
                        </div>
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item active">
                                {
                                    !this.props.auth.isLoggedIn ?
                                        <Tooltip title="Se connecter">
                                            <Icon
                                                type="user"
                                                style={{ fontSize: 25, color: "#fff", cursor: "pointer" }}
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
                    <div className="header__content text-center">

                        {
                            !this.props.auth.isLoggedIn &&
                            <div>
                                <h1 className="header__content__title">Reactland Marketplace</h1>
                                <p className="header__content__paragraph">Bienvenue sur Reactland, cette market place propose de mettre en relation GRATUITEMENT des developpeurs reactJS avec des clients finaux sans intermédiaires, ainsi qu'une base de connaissance autour de l'eco-system ReactJS</p>
                                <button className="button button--margin-right button--hover" >Je suis developpeur reactJS !</button>
                                <button className="button button--hover" >Je recherche un developpeur reactJS</button>
                            </div>
                        }

                        {
                            this.props.auth.isLoggedIn &&
                            <div>
                                <h1 className="header__content__title">Bienvenue {info ? info.username : null}</h1>
                                <p className="header__content__paragraph"><em>Tu es connecté avec l'email {info ? info.email : null}</em></p>
                                <UserTools />
                            </div>
                        }

                    </div>
                </div>
                {
                    !this.props.auth.isLoggedIn && <Drawer
                        title="Authentification Reactland !"
                        placement="right"
                        width={720}
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
            </header>
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