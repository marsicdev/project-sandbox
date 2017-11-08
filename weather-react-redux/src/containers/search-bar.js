import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="file-field input-field">
                        <div className="col s9 file-path-wrapper">
                            <input type="text"
                                placeholder="Get five-day forecast in favorite cities"
                                value={this.state.term}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="col s3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Search
                                <i className="material-icons left">search</i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

// null because we don't need any state here
export default connect(null, mapDispatchToProps)(SearchBar);
