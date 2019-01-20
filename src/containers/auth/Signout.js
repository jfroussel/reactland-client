import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signout} from '../../actions/auth'
import { withRouter } from 'react-router'

class Signout extends Component {

    
    componentWillMount() {
        this.props.signout(this.props.history)
        

    }
    
    render() {
        return (
            <div>
                bye !
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.authentification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signout }, dispatch)

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signout)) 