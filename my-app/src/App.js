import React, { Component } from 'react';

import Home from './Home';

class App extends Component {

  handlSubmit(e) {
    e.preventDefault()
    let user = this.refs.username.value
    let pass = this.refs.password.value
    if (user === "cuong" && pass === "123") {
      console.log("dung");
    }
  }

  render() {
    return(
      <form onSubmit={this.handlSubmit.bind(this)}>
        <label>
          User name:
          <input type="text" ref="username" />
        </label>
        <label>
          Password:
          <input type="text" ref="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default App;
