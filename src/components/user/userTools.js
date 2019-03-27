import React from 'react'
import { Row, Col, Icon } from 'antd'
const style = {
    row: {
        paddingBottom: 25
    },
    icon: {
        color: "#fff",
        fontSize: 45,
        cursor: "pointer"
    },
    iconTitle: {
        fontSize: 15,
        color: "#fff"
    }
}
const UserTools = () => {
    return (
        <div>
            <Row type="flex" justify="center" style={style.row}>
                <Col span={4}><Icon type="pie-chart" style={style.icon} /><br /><span style={style.iconTitle}>Compte</span></Col>
                <Col span={4}><Icon type="bar-chart" style={style.icon} /><br /><span style={style.iconTitle}>Profil</span></Col>
                <Col span={4}><Icon type="dot-chart" style={style.icon} /><br /><span style={style.iconTitle}>Message</span></Col>
                <Col span={4}><Icon type="radar-chart" style={style.icon} /><br /><span style={style.iconTitle}>CV</span></Col>
            </Row>
            <Row type="flex" justify="center" style={style.row}>
                <Col span={4}><Icon type="pie-chart" style={style.icon} /><br /><span style={style.iconTitle}>Compte</span></Col>
                <Col span={4}><Icon type="bar-chart" style={style.icon} /><br /><span style={style.iconTitle}>Profil</span></Col>
                <Col span={4}><Icon type="dot-chart" style={style.icon} /><br /><span style={style.iconTitle}>Message</span></Col>
                <Col span={4}><Icon type="radar-chart" style={style.icon} /><br /><span style={style.iconTitle}>CV</span></Col>
            </Row>
        </div>

    )
}

export default UserTools