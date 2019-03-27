import React, { Component } from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../../actions/auth'


class Competences extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        //console.log('PROPS : ', this.props)


    }

    render() {
        const { info } = this.props
        console.log('info', this.props)
        return (
            <div>
                <Card
                    title="COMPETENCES"
                    extra={<a href="#">More</a>}
                    style={{ width: 'auto' }}
                >
                   
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isLoggedIn: state.authentification.isLoggedIn,
    info: state.userInfo.info
  
  
  })
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userInfo }, dispatch)
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Competences)
