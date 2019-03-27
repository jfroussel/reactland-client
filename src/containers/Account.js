import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../actions/auth'
import Navigation from '../components/account/Navigation'
import Logo from '../assets/logo.png'

const style = {
    nav: {
        backgroundColor: '#343a40'
    },
    container: {
        padding: 0
    }
}
class Account extends Component {



    render() {
        console.log('userInfo : ', this.props.userInfo)
        const { info } = this.props

        return (
            <div className="container-fluid" style={style.container}>
                <nav className="navbar" style={style.nav}>
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/" >
                            <img src={Logo} alt="reactland" />
                        </Link>
                    </div>
                </nav>
                <div className="row">
                    <div className="col">
                        <Navigation info={info} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn,
    info: state.userInfo.info


})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userInfo }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)
