import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export default function(ChildComponent) {
    class requireAuthentification extends Component {
        
        componentWillMount() {
            if(!this.props.isLoggedIn) {
                console.log('Are you connected yet ? ', this.props.isLoggedIn)
                this.props.history.push("/")
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.isLoggedIn) {
                console.log('Are you connected yet ? ', nextProps.isLoggedIn)
                this.props.history.push("/")
            }
        }
        
        render() {
            return <ChildComponent />
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.authentification.isLoggedIn
        }
    }
    return withRouter(connect(mapStateToProps)(requireAuthentification)) 
}


