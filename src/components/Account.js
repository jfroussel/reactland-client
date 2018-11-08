import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}
class Account extends Component {

    
    componentWillMount() {
       console.log('Account CWM', this.props)

    }
    
    render() {
        return (
            <div style={style.container}>
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Account page</h1>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn,
    account: state.account

})


export default connect(mapStateToProps, actions)(Account)
