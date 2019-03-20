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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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

const FIELDS = { email: "email", password: "password", confirmPassword: "confirmPassword", username: "username", subscribe: "subscribe" }

class Signup extends Component {
    state = {
        //checkedSubscribe: false
    }

    handleChange = name => event => {
        console.log('name', name)
        this.setState({ [name]: event.target.checked })
    };

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

    renderCheckBox = (field) => {
        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedSubscribe}
                            onChange={this.handleChange('checkedSubscribe')}
                            value={this.state.checkedSubscribe}
                            color="primary"
                            {...field.input}
                        />
                    }
                    label="Subscribe to the newsletter !"
                />
            </div>
        )
    }

    render() {
        const { classes } = this.props
        console.log('state', this.state)
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="font-weight-light">Pas encore de compte !<br /> Inscris toi</h3>
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Field
                            name={FIELDS.username}
                            component={this.renderInput}
                            type="text"
                            label="username"
                        />
                        <Field
                            name={FIELDS.email}
                            component={this.renderInput}
                            type="text"
                            label="email"
                        />
                        <Field
                            name={FIELDS.password}
                            component={this.renderInput}
                            type="password"
                            label="password"
                        />
                        <Field
                            name={FIELDS.confirmPassword}
                            component={this.renderInput}
                            type="password"
                            label="confirm password"
                        />


                        <div className="justify-content-md-center pb-5 pt-5">
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                S'enregistrer
                            </Button>
                        </div>

                        
                        <Field
                            name={FIELDS.subscribe}
                            component={this.renderCheckBox}
                        />
                    </form>
                </header>
            </div>
        )
    }
}

function validate(formValues) {
    console.log('formValues', formValues)
    const errors = {}
    errors.email = validations.validateEmail(formValues.email)
    errors.password = validations.validateNotEmpty(formValues.password)
    errors.username = validations.validateNotEmpty(formValues.username)
    errors.confirmPassword = validations.validateEqualPassword(formValues.password, formValues.confirmPassword)
    return errors
}

const signupForm = reduxForm({
    form: "Signup",
    fields: Object.keys(FIELDS),
    validate
})(Signup)

const mapStateToProps = (state) => {
    return {
        auth: state.authentification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signupUser }, dispatch)

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(signupForm))) 