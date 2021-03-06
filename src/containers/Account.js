import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../actions/auth'
import Navigation from '../components/account/Navigation'


const style = {
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
                            <h3>Reactland</h3>
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
