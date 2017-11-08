import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {

    renderList() {
        const actions = this.props.actions;
        const books = this.props.books;

        return books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => actions.selectBook(book)}
                    className="collection-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="col s3 card-panel collection">
                <li class="collection-header"><h4>Books</h4></li>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    }
}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectedBook is called, the result should be passed
    // to all of our reducers 
    return { actions: bindActionCreators({ selectBook }, dispatch) };
}

// const mapDispatchToProps = {
//     selectBook
// };

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
