import React, { Component } from 'react'
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
        const { info } = this.props
        const routes = [
            {
                path: "/settings",
                exact: true,
                sidebar: () => <div>Parametres du profil</div>,
                main: () => <Settings info={info} />
            },
            {
                path: "/competences",
                sidebar: () => <div>competences</div>,
                main: () => <Competences info={info} />
            },
            {
                path: "/experiences",
                sidebar: () => <div>experiences</div>,
                main: () => <Experiences info={info} />
            },
            {
                path: "/messages",
                sidebar: () => <div>messages</div>,
                main: () => <Messages info={info} />
            }
        ]
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "15%",
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

export default Navigation
