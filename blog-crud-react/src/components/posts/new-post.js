import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { error } from 'util';

class NewPost extends Component {

    renderField(field) {
        return (
            <div className="input-field">
                <input
                    className="validate"
                    type="text"
                    {...field.input} />
                <label htmlFor={field.label.toLowerCase()}>{field.label}</label>
                {field.meta.error}
            </div>
        );
    }


    handleSubmit() {

    }

    render() {
        const { handleSubmit } = this.props
        // const submitAction = ;

        return (
            <div className="section">
                <form onSubmit={handleSubmit    } >
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField} />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField} />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField} />
                    <button className="btn waves-effect red" type="submit" name="action">
                        Submit
                    <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // validate the input from values
    if (!values.title) {
        errors.title = "Enter a title"
    }

    if (!values.categories) {
        errors.categories = "Enter some categories"
    }

    if (!values.content) {
        errors.content = "Enter some content"
    }

    // If errors is empty, the form is fine to submit
    // If errors has any props, redux assumes form is invalid
    return error;
}

const formOptions = {
    validate,
    form: 'PostsNewFrom'
}

export default reduxForm(formOptions)(NewPost);
