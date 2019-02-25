import React, {Component, Fragment} from 'react';
import './App.css';
import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Blog/>
      </Fragment>
    );
  }
}

export default App;
