import React, { Component } from 'react';

class Experiences extends Component {
    render() {
        const user = this.props.userInfo
        return (
            <div>
                <h3>Experiences</h3>
                <p>ID : {user._id}</p>
            </div>
        );
    }
}

export default Experiences;
