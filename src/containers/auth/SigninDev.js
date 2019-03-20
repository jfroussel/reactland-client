import React, { Component } from "react"
import { signinUser } from "../../actions/auth"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import {
    Form, Icon, Input, Button,
} from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SigninDev extends Component {
    /*
    handleSubmit = (credentials) => {
        this.props.signinUser(credentials, this.props.history)
    }
    */
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.signinUser(e, this.props.history)
            }
           
        });
    }


    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        const emailError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="font-weight-light">Tu as déjà un compte !<br /> Connecte toi</h3>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item
                            validateStatus={emailError ? 'error' : ''}
                            help={emailError || ''}
                        >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>
                        <Form.Item
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={hasErrors(getFieldsError())}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </header>
            </div>
        )
    }
}






const mapStateToProps = (state) => {
    return {
        auth: state.authentification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signinUser }, dispatch)

}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(SigninDev);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedHorizontalLoginForm))