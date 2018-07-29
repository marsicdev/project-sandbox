import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './App.css';

class App extends Component {

  state = {
    user: {
      name: "Marko",
      photo: "https://marsic.info/images/marko-small.png",
      followers: 66,
      posts: 32
    }
  }

  render() {
    const { user } = this.state;
    return [
      <Header user={user} />,
      <Main user={user} />,
      <Footer />
    ]
  }
}

export default App;
