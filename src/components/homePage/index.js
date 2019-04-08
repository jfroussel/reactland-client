import React, { Component } from 'react'
import Header from '../../containers/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../../actions/auth'


class HomePage extends Component {

    render() {
        console.log('this.props', this.props)
        const {info} = this.props
        return (
            <div>
                <Header />

                <div className="text-center">

                    {
                        !this.props.isLoggedIn &&
                        <main role="main" className="container" style={{ paddingTop: 80 }}>
                            <div className="starter-template">
                                <h1>Bienvenue sur reactland</h1>
                                <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
                            </div>
                        </main>
                    }

                    {
                        this.props.isLoggedIn &&
                        <div style={{ paddingTop: 80 }}>
                            <h1>Bienvenue {info ? info.username : null}</h1>
                            <p><em>Tu es maintenant connecté avec l'email {info ? info.email : null}</em></p>

                        </div>
                    }

                </div>
            </div>


        )
    }

}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn,
    info: state.userInfo.info


})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userInfo }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
