import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readsound } from '../../actions/sound'
import { withRouter } from 'react-router'


class Sound extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const { id } = this.props.match.params
        if(id) {
            this.props.readsound(id)
        }
    }

    render() {
        const sound = this.props.sound.readsound
        console.log('sound : ', this.props)
        return (
            <div className="container pt-5">
                <div className="pt-5">
                    <h1>Edit  sound </h1>
                    <p>
                        {JSON.stringify(sound)}
                    </p>
                    
                   
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    sound: state.sound,

})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ readsound }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sound))

