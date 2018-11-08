import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import * as validations from '../validations'

const style = {
    error: {
        color: '#e83e8c'
    }
}

const FIELDS = { email: "email", password: "password" }

class Signin extends Component {

    handleSubmit = (credentials) => {
        this.props.signinUser(credentials, this.props.history)
    }

    renderInputComponent = (field) => {
        return (
            <div className="justify-content-md-center">
                <fieldset className="col-md-12 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <input className="form-control" {...field.input} type={field.type} />
                    {field.meta.touched && field.meta.error && <span style={style.error}>{field.meta.error}</span>}
                </fieldset>
            </div>
        )
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Login</h1>
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
                        <div className="justify-content-md-center pb-5 pt-5">
                            <button type="submit" className="btn btn-lg btn-primary btn-raised">Connexion</button>
                        </div>
                        <p>Not register ! <br /><Link to="/signup"> create your account now !</Link></p>
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
    return errors
}


const signinForm = reduxForm({
    form: "Signin",
    fields: Object.keys(FIELDS),
    validate
})(Signin)


export default withRouter(connect(null, actions)(signinForm)) 