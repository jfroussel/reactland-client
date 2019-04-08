import React, { Component } from 'react';


class Settings extends Component {
    render() {
        const user = this.props.userInfo
        return (
            <div>
                <h3>Parametres du compte</h3>
                <p>ID : {user._id}</p>
            </div>
        );
    }
}



export default Settings


