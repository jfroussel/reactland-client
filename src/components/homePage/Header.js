import React, { Component } from 'react'
import '../App.css'
import { Icon, Drawer } from 'antd'
import Logo from '../../assets/logo.png'
import Signin from '../../containers/auth/Signin'
import SignUp from '../../containers/auth/Signup'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showDrawer() {
        this.setState({ visible: true })
    }

    onClose() {
        this.setState({ visible: false })
    }

    render() {
        return (
            <header className="header header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#home" >
                                <img src={Logo} alt="reactland" />
                            </a>
                        </div>
                        
                    </nav>
                    <div className="header__content text-center">
                        <h1 className="header__content__title">reactJS Market Place</h1>
                        <p className="header__content__paragraph">Bienvenue sur Reactland, cette market place propose de mettre en relation GRATUITEMENT des developpeurs reactJS avec des clients finaux sans intermédiaires, ainsi qu'une base de connaissance autour de l'eco-system ReactJS</p>
                        <button className="button button--margin-right button--hover" onClick={() => this.showDrawer()}  >Je suis developpeur reactJS !</button>
                        <button className="button button--hover" onClick={() => this.showDrawer()}>Je recherche un developpeur reactJS</button>
                    </div>
                </div>
                <Drawer
                    //title="Déja inscrit !"
                    placement="right"
                    width={720}
                    closable={true}
                    onClose={() => this.onClose()}
                    visible={this.state.visible}
                    style={{
                        overflow: 'auto',
                        height: 'calc(100% - 108px)',
                        paddingBottom: '108px',
                        textAlign: 'center'
                    }}
                >
                    <br />
                    <Signin />
                    <SignUp />
                    <hr />
                    
                </Drawer>
            </header>
        )
    }

}

export default Header