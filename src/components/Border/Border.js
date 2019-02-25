import React, {Component} from 'react';
import './Border.css';

class Border extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Joke] ShouldUpdate');
  //   return nextProps.value !== this.props.value;
  // }

  render() {
    return (
      <div className="Border" onClick={this.props.clicked}>
        <a href='#'>{this.props.name}</a>
      </div>
    );
  }
}
export default Border;