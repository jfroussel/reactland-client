import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo} from '../actions/auth'

const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}
class Dashboard extends Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        console.log('DASHBOARD : ',this.props)
    }

    
    
    render() {
        const { info, isLoggedIn } = this.props
        return (
            <div style={style.container}>
                <header className="App-header text-center">
                    <h1 className="font-weight-light pb-5">Welcome <br /> {isLoggedIn && info ? info.username : null} <br /> on your dashboard</h1>
                </header>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
