import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { signout, userInfo } from "../../actions/auth"
import '../App.css'
import { Icon, Drawer, Tooltip } from 'antd'
import Logo from '../../assets/logo.png'
import Signin from '../../containers/auth/Signin'
import Signup from '../../containers/auth/Signup'
import Reset from '../../containers/auth/ResetPassword'



class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            reset: false,
            signup: false,
            signin: true,
           
        }
    }

    componentWillReceiveProps() {

    }


    showDrawer() {
        this.setState({ visible: true })
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
            return this.props.signout()
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
       
      const info =  this.props.user.info

        
        return (
            <header className="header header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#home" >
                                <img src={Logo} alt="reactland" />
                            </a>
                        </div>
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item active">

                                {
                                    !this.props.auth.isLoggedIn ?
                                        <Tooltip title="Se connecter">
                                            <Icon
                                                type="login"
                                                style={{ fontSize: 25, color: "#fff", cursor: "pointer" }}
                                                onClick={() => this.login()}
                                            />
                                        </Tooltip>
                                        :
                                        <Tooltip title="Se déconnecter">
                                            <Icon
                                                type="logout"
                                                style={{ fontSize: 25, color: "#fff", cursor: "pointer" }}
                                                onClick={() => this.signout()}
                                            />
                                        </Tooltip>
                                }
                            </li>
                        </ul>
                    </nav>
                    <div className="header__content text-center">
                        <h1 className="header__content__title">reactJS Market Place</h1>
                        {
                            !this.props.auth.isLoggedIn &&
                            <p className="header__content__paragraph">Bienvenue sur Reactland, cette market place propose de mettre en relation GRATUITEMENT des developpeurs reactJS avec des clients finaux sans intermédiaires, ainsi qu'une base de connaissance autour de l'eco-system ReactJS</p>
                        }
                        {
                            this.props.auth.isLoggedIn && 
                            <p className="header__content__paragraph">Bienvenue  </p>
                        }
                        <button className="button button--margin-right button--hover" onClick={() => this.showDrawer()}  >Je suis developpeur reactJS !</button>
                        <button className="button button--hover" onClick={() => this.showDrawer()}>Je recherche un developpeur reactJS</button>
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