import React, { Component } from 'react';

class Competences extends Component {
    render() {
        const user = this.props.userInfo
        return (
            <div>
                <h3>Compétences</h3>
                <p>ID : {user._id}</p>
            </div>
        );
    }
}

export default Competences;
