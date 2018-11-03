import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
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



export default withRouter(connect(null, actions)(Signout)) 