import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import UserImg from '../../assets/jeff.jpg'

const style = {
    avatar: {
        margin: 10,
    },
    link: {
        textDecoration: "none"
    }
};

class UserMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;

        return (

            <li className="nav-item">
                <Avatar
                    src={UserImg}
                    style={style.avatar}
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                </Avatar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <Link style={style.link} to="/account">
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Link>
                    <Link style={style.link} to="/signout">
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Link>
                </Menu>
            </li>

        );
    }
}

export default UserMenu;