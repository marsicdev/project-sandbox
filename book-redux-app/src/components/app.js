import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <BookList />
        <div className="col s9">
          <div className="card-panel">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
