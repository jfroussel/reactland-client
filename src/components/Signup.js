import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import * as validations from '../validations'

const style = {
    error: {
        color: '#dc3545'
    }
}

const FIELDS = { email: "email", password: "password", confirmPassword: "confirmPassword" }

class Signup extends Component {

    handleSubmit = (credentials) => {
        this.props.signupUser(credentials, this.props.history)
    }

    renderInputComponent = (field) => {
        return (
            <div className="justify-content-mdr-center">
                <fieldset className="col-md-12 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <input className="form-control" {...field.input} type={field.type} />
                    {field.meta.touched && field.meta.error && <span style={style.error}>{field.meta.error}</span>}
                </fieldset>
            </div>
        )
    }

    render() {
        const { handleSubmit, fields } = this.props
        return (

            <div className="App">
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Register</h1>
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Field
                            name={FIELDS.email}
                            component={this.renderInputComponent}
                            type="text"
                            label="email"
                        />
                        <Field
                            name={FIELDS.password}
                            component={this.renderInputComponent}
                            type="password"
                            label="password"
                        />
                        <Field
                            name={FIELDS.confirmPassword}
                            component={this.renderInputComponent}
                            type="password"
                            label="confirm password"
                        />
                        <div className="justify-content-md-center pt-5 pb-5">
                            <button type="submit" className="btn btn-lg btn-primary btn-raised">Connexion</button>
                        </div>
                        <p>You have an account ! <Link to="/signin">login !</Link></p>
                    </form>
                </header>
            </div>
        )
    }
}

function validate(formValues) {
    const errors = {}
    errors.email = validations.validateEmail(formValues.email)
    errors.password = validations.validateNotEmpty(formValues.password)
    errors.confirmPassword = validations.validateEqualPassword(formValues.password, formValues.confirmPassword)
    return errors
}

const signupForm = reduxForm({
    form: "Signup",
    fields: Object.keys(FIELDS),
    validate
})(Signup)


export default withRouter(connect(null, actions)(signupForm)) 