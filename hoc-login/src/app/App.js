import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Main from './Main';
import { login, logout, isAuthenticated } from '../services/authService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: isAuthenticated()
    }
  }

  userLoginHandler = () => {
    isAuthenticated() ? logout() : login()

    this.setState({
      isLoggedIn: isAuthenticated()
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          onLogin={this.userLoginHandler}
          isLoggedIn={this.state.isLoggedIn} />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
