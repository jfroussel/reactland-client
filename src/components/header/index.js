import React, { Component } from 'react';
import Appbar from '../../containers/header/Appbar'

class Header extends Component {
    render() {
        return (
            <div>
                <Appbar props={this.props} />
            </div>
        );
    }
}

export default Header
