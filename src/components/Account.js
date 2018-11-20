import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAccounts } from '../actions/accounts'
const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}
class Account extends Component {

    
    componentWillMount() {
      this.props.getAccounts()

    }
    
    render() {
        const { accounts } = this.props
        
        return (
            <div style={style.container}>
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Account page</h1>
                    <div className="text-success">
                        <ul>
                            {
                                JSON.stringify(accounts)
                            }
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn,
    accounts: state.accounts

})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAccounts }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)
