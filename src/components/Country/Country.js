import React, {Component} from 'react';
import './Country.css';

class Country extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Joke] ShouldUpdate');
  //   return nextProps.value !== this.props.value;
  // }

  render() {
    return (
      <div className="Country" onClick={this.props.clicked}>
        <a href='#'>{this.props.name}</a>
      </div>
    );
  }
}
export default Country;