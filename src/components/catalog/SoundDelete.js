import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {deletesound} from '../../actions/sound'
import { withRouter } from 'react-router'



class SoundDelete extends Component {
    
    componentWillMount() {
       
        const { id } = this.props.match.params
        this.props.deletesound(id, this.props.history)
    }
    
    render() {
        const { id } = this.props.match.params
        return (
            <div>
                {console.log(`Sound ID : ${id} has been deleted`)}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    deletesound: state.sound,

})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deletesound }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SoundDelete))


