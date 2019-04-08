import React, { Component } from 'react';

class Messages extends Component {
    render() {
        const user = this.props.userInfo
        return (
            <div>
                <h3>Messages</h3>
                <p>ID : {user._id}</p>
            </div>
        );
    }
}

export default Messages;

