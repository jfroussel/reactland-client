import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { signupUser } from "../../actions/auth"
import { withRouter } from 'react-router'
import * as validations from '../../validations'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


const styles = theme => ({
    container: {
        display: 'flex 1',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
});

const FIELDS = { email: "email" }

class ResetPassword extends Component {

    handleSubmit = (credentials) => {
        this.props.signupUser(credentials, this.props.history)
    }

    renderInput = (field) => {
        return (
            <div>
                <TextField
                    label={field.label}
                    className={this.props.classes.textField}
                    type={field.type}
                    autoComplete="current-password"
                    margin="normal"
                    {...field.input}
                />
                {field.meta.touched && field.meta.error && <div><span style={{ color: "red", fontSize: 12 }}>{field.meta.error}</span></div>}

            </div>
        )
    }

    render() {
        const { classes } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="font-weight-light">Change ton mot de passe</h3>
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Field
                            name={FIELDS.email}
                            component={this.renderInput}
                            type="text"
                            label="email"
                        />
                       
                        <div className="justify-content-md-center pb-5 pt-5">
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                Reset password
                            </Button>
                        </div>
                    </form>
                </header>
            </div>
        )
    }
}

function validate(formValues) {
    const errors = {}
    errors.email = validations.validateEmail(formValues.email)
    return errors
}

const ResetPasswordForm = reduxForm({
    form: "ResetPassword",
    fields: Object.keys(FIELDS),
    validate
})(ResetPassword)

const mapStateToProps = (state) => {
    return {
        auth: state.authentification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signupUser }, dispatch)

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResetPasswordForm))) 