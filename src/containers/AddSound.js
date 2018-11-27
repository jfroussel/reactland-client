import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addSound } from '../actions/sound'
import { userInfo } from '../actions/auth'
import { withRouter } from 'react-router'
import * as validations from '../validations'
import Tones from "../constants/tones"
import Genres from "../constants/genres"
import Moods from "../constants/moods"
import Instruments from "../constants/instruments"

const style = {
    container: {
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
}

const FIELDS = {
    title: "title",
    description: "description",
    filename: "filename",
    author: "author",
    uid: "uid",
    bpm: "bpm",
    tone: "tone",
    genres: "genres",
    moods: "moods",
    loops: "loops",
    lenght: "lenght",
    instruments: "instruments"
}

class Sound extends Component {

    handleSubmit = (sound) => {
        this.props.addSound(sound, this.props.history)
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
    renderTextareaComponent = (field) => {
        return (
            <div className="justify-content-md-center">
                <fieldset className="col-md-12 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <textarea className="form-control" {...field.input} type={field.type} />
                    {field.meta.touched && field.meta.error && <span style={style.error}>{field.meta.error}</span>}
                </fieldset>
            </div>
        )
    }

    renderSelectComponent = (field) => {
        return (
            <div className="justify-content-md-center">
                <fieldset className="col-md-12 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <select className="form-control" {...field.input} type={field.type}>
                        <option value="">Select a tone...</option>
                        {Tones.map((tone, index) => (
                            <option value={tone.value} key={index}>
                                {tone.label}
                            </option>
                        ))}
                    </select>
                    {field.meta.touched && field.meta.error && <span style={style.error}>{field.meta.error}</span>}
                </fieldset>
            </div>
        )
    }



    renderReactSelect = (field) => {
        return (
            <fieldset className="col-md-12 form-group"  >
                <label className="bmd-label-floating">{field.label}</label>
                <Select
                    {...field.input}
                    value={field.input.value}
                    onBlur={() => field.input.onBlur([...field.input.value])}
                    options={field.options}
                    components={makeAnimated()}
                    isMulti
                    closeMenuOnSelect={false}
                />
            </fieldset>
        )
    }

    render() {




        return (
            <div className="container-fluid pt-5" style={style.container}>
                <div className="text-center text-dark">
                    <h1 className="font-weight-light pt-5 pb-5">Add new sound</h1>
                </div>
                <p className="text-center pb-5"><Link type="button" className="btn btn-sm btn-dark" to="/catalog">Return catalog page</Link></p>
                <div className=" container">
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)} >
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" name={FIELDS.author} type="hidden" />
                                <input className="form-control" name={FIELDS.uid} type="hidden" />
                                <Field
                                    name={FIELDS.title}
                                    component={this.renderInputComponent}
                                    type="text"
                                    label="title"
                                />
                                <Field
                                    name={FIELDS.description}
                                    component={this.renderTextareaComponent}
                                    type="text"
                                    label="description"
                                />
                                <Field
                                    name={FIELDS.filename}
                                    component={this.renderInputComponent}
                                    type="text"
                                    label="filename"
                                />
                                <Field
                                    name={FIELDS.bpm}
                                    component={this.renderInputComponent}
                                    type="text"
                                    label="bpm"
                                />
                                <Field
                                    name={FIELDS.tone}
                                    component={this.renderSelectComponent}
                                    type="text"
                                    label="tone"
                                >
                                </Field>
                            </div>
                            <div className="col-6">
                                <Field
                                    name={FIELDS.genres}
                                    component={this.renderReactSelect}
                                    options={Genres}
                                    label="genres"

                                />
                                <Field
                                    name={FIELDS.moods}
                                    component={this.renderReactSelect}
                                    options={Moods}
                                    label="moods"
                                />
                                <Field
                                    name={FIELDS.loops}
                                    component={this.renderInputComponent}
                                    type="text"
                                    label="loops"
                                />
                                <Field
                                    name={FIELDS.lenght}
                                    component={this.renderInputComponent}
                                    type="text"
                                    label="lenght"
                                />
                                <Field
                                    name={FIELDS.instruments}
                                    component={this.renderReactSelect}
                                    options={Instruments}
                                    label="instruments"
                                />
                                <div className="justify-content-md-center pt-5 pb-5">
                                    <button type="submit" className="btn btn-lg btn-info btn-raised">Validate</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(formValues) {
    const errors = {}
    errors.title = validations.validateNotEmpty(formValues.title)
    errors.filename = validations.validateNotEmpty(formValues.filename)
    return errors
}

const soundForm = reduxForm({
    form: "Sound",
    fields: Object.keys(FIELDS),
    enableReinitialize: true,
    validate

})(Sound)

const mapStateToProps = (state) => ({

    addsound: state.addSound,
    user: state.userInfo,
    initialValues: { uid: state.userInfo.info._id, author: state.userInfo.info.username }


})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addSound, userInfo }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(soundForm))

