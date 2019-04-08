import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../../actions/auth'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Settings from './Settings'
import Competences from './Competences'
import Experiences from './Experiences'
import Messages from './Messages'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {

    render() {
        console.log('this props ', this.props)
        const { info } = this.props
        const routes = [
            {
                path: "/settings",
                exact: true,
                main: () => <Settings userInfo={info} />
            },
            {
                path: "/competences",
                main: () => <Competences userInfo={info} />
            },
            {
                path: "/experiences",
                main: () => <Experiences userInfo={info} />
            },
            {
                path: "/messages",
                main: () => <Messages userInfo={info}  />
            }
        ]
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "auto",
                            background: "none"
                        }}
                    >
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 'auto' }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item key="settings">
                                <Link to="/settings">
                                    <Icon type="setting" />
                                    <span>Paramétres du compte</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="competences">
                                <Link to="/competences">
                                    <Icon type="profile" />
                                    <span>Competences</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="experiences">
                                <Link to="/experiences">
                                    <Icon type="project" />
                                    <span>Experiences</span>
                                </Link>
                            </Menu.Item>

                            <SubMenu key="messages" title={<span><Link to="/messages"><Icon type="message" /><span>Vos Messages</span></Link></span>}>
                                <MenuItemGroup key="detail">
                                    <Menu.Item key="inbox">Boite de reception</Menu.Item>
                                    <Menu.Item key="send">Messages envoyés</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>

                        </Menu>
                    </div>

                    <div style={{ flex: 1, padding: "5px" }}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn,
    info: state.userInfo.info
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userInfo }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

