import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"

const FIELDS = { email: "email", password: "password" }

class Signin extends Component {

    handleSubmit = (credentials) => {
        this.props.handleSubmit(credentials, this.props.history)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="justify-content-md-center pb-3">
                   
                </div>
                <div className="justify-content-mdr-center">
                    <fieldset className="col-md-12 form-group">
                        <label className="bmd-label-floating">Email</label>
                        <Field
                            name={FIELDS.email}
                            component="input"
                            type="text"
                            className="form-control"
                        />
                    </fieldset>
                </div>
                <div className="justify-content-md-center pb-5">
                    <fieldset className="col-md-12 form-group">
                        <label className="bmd-label-floating">Password</label>
                        <Field
                            name={FIELDS.password}
                            component="input"
                            type="password"
                            className="form-control"
                        />
                    </fieldset>
                </div>
                <div className="justify-content-md-center">
                    <button type="submit" className="btn btn-lg btn-primary btn-raised">Connexion</button>
                </div>
            </form>
        )
    }
}

const SigninForm = reduxForm({
    form:"Signin",
    fields: Object.keys(FIELDS)
})(Signin)


export default connect(null, actions)(SigninForm)