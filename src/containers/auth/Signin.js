import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { signinUser } from "../../actions/auth"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
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

const FIELDS = { email: "email", password: "password" }

class Signin extends Component {

    handleSubmit = (credentials) => {
        this.props.signinUser(credentials, this.props.history)
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
        const { classes } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="font-weight-light">Tu as déjà un compte !<br /> Connecte toi</h3>
                    <form
                        className={classes.container} noValidate autoComplete="off" onSubmit={this.props.handleSubmit(this.handleSubmit)}>

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

                        <div className="justify-content-md-center pb-5 pt-5">
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                Se connecter
                            </Button>
                        </div>
                        <h6 className="font-weight-light">Mot de passe oublié !
                            <Link to="/reset-password" style={{ textDecoration: "none" }}>
                                <span>  Reset</span>
                            </Link>
                        </h6>

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

const mapStateToProps = (state) => {
    return {
        auth: state.authentification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signinUser }, dispatch)

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(signinForm))) 