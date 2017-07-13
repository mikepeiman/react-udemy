import React, { Component } from 'react';
import logo from './mikepeiman logo v4-empty.svg';
import './App.css';
import './bulma.css';
import './font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeter />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Mike',
      greeting: 'Mike is learning React app development'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  render: function() {
    var name = this.props.name;
    var greeting = this.props.greeting;

    return (
      <div>
        <h1>Hello {name}!!!</h1>
        <p>{greeting} <i className="button is-success fa fa-check-square-o"></i></p>
        
      </div>
      );
  }
});
export default App;
