import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../actions/auth'
import Navigation from '../components/account/Navigation'
const style = {
    container: {
        paddingTop: 150
    }
}
class Account extends Component {


    render() {
        console.log('userInfo : ', this.props.userInfo)
        const {info} = this.props
       
        return (
            <div className="container-fluid" style={style.container}>
                <div className="row">
                    <div className="col">
                        <Navigation info={info}/>
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
