import React, { Component } from "react";
import BasicNav from "./basic_nav";
import Showcase from "./showcase";

class App extends Component {
  state = {
    user: {
      name: "Arif Bhuiya",
      email: "arifbhuiya@gmail.com",
      languages: ["java", "javaScript", "python", "golang"]
    },
    isAuthonticated: true
  };

  login = () => {
    this.setState({ isAuthonticated: true });
  };

  logout = () => {
    this.setState({ isAuthonticated: false });
  };

  addToShowcase = item => {
    const user = { ...this.state.user };
    user.languages.push(item);
    this.setState({ user });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h1 className="my-2">Context API Course</h1>
            <hr />
            <BasicNav
              isAuthonticated={this.state.isAuthonticated}
              user={this.state.user}
              login={this.login}
              logout={this.logout}
            />
            <hr />
            {this.state.isAuthonticated && (
              <Showcase
                user={this.state.user}
                addToShowcase={this.addToShowcase}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
