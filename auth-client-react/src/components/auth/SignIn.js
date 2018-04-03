import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class SignIn extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password)
        // Need to do something to log user in
        this.props.signinUser({ email, password })
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props

        return (
            <div className="row">
                <form
                    onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                    className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input {...email} id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input {...password} id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button action="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn)
