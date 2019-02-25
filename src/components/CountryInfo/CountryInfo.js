import React, {Component} from 'react';
import './CountryInfo.css';
import axios from 'axios';
import Border from '../Border/Border'

class CountryInfo extends Component {
    state = {
        loadedCountry: null,
        borderCountry: []
    }

    componentDidUpdate() {
        if(this.props.selectedCountry) {
            if(!this.state.loadedCountry ||
                (this.state.loadedCountry && this.props.selectedCountry !== this.state.loadedCountry.alpha3Code)) {
                const BASE_URL = 'https://restcountries.eu/rest/v2/';
                axios.get(BASE_URL + 'alpha/' + this.props.selectedCountry).then(response => {
                    const request = response.data.borders.map(border => {
                        return axios.get(BASE_URL + 'alpha/' + border).then(response => {
                          return {name: response.data.name, alpha3Code: border};
                        })
                    });
                    console.log(request);
                    return Promise.all(request)
                    .then(borderCountry =>
                        this.setState({borderCountry: borderCountry, loadedCountry: response.data})

                    ).catch(error => {
                        console.log(error);
                    })
                });
            }
        }
    }



  render() {

    return (
      this.state.loadedCountry ? <div className="CountryInfo">
        <h2>{this.state.loadedCountry.name}</h2>
        <h3>Столица: {this.state.loadedCountry.capital}</h3>
        <h3>Население: {this.state.loadedCountry.population} человек.</h3>
        <h3>Граничит с:</h3>
        {this.state.borderCountry.map(border => (
            <Border
              key={border.id}
              name={border.name}
              clicked={() => this.props.clicked(border.alpha3Code)}
            />
          ))}
      </div> : <h1>Выберите страну</h1>
    );
  }
}
export default CountryInfo;