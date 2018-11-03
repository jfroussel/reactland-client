import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


const FIELDS = { email: "email", password: "password" }

class Signin extends Component {

    handleSubmit = (credentials) => {
        this.props.signinUser(credentials, this.props.history)
    }

    render() {

        return (

            <div className="App">
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Login</h1>


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
                        <div className="justify-content-md-center pb-5">
                            <button type="submit" className="btn btn-lg btn-primary btn-raised">Connexion</button>
                        </div>
                        <p>Not register ! <Link to="/signup">create account now !</Link></p>
                    </form>
                </header>
            </div>
        )
    }
}

const signinForm = reduxForm({
    form: "Signin",
    fields: Object.keys(FIELDS)
})(Signin)


export default withRouter(connect(null, actions)(signinForm)) 