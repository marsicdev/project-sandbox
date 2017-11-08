import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        const book = this.props.book;

        if (!book) {
            return (
                <h5 className="center-align">Select book to get started</h5>
            );
        }

        const { title, pages } = book;

        return (
            <div>
                <h3>Book Details</h3>
                <div>Title: {title}</div>
                <div>Pages: {pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookDetails
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);