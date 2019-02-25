import React, {Component, Fragment} from 'react';
import './Blog.css';
import Country from '../../components/Country/Country';
import CountryInfo from "../../components/CountryInfo/CountryInfo";

class Blog extends Component {
  state = {
    countries: [],
    selectedCountry: null,
  };

  componentDidMount() {
    const P_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';
    fetch(P_URL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong with network request');
    }).then(countries => {
      const Countries = countries.map(country => {
        return {
            ...country
        }
      });
      this.setState({countries: Countries});
    }).catch(error => {
      console.log(error);
    })
  }

  postClicked = (idCountry) => {
      this.setState({
          ...this.state,
          selectedCountry: idCountry
      })
  };

  render() {

    return (
      <Fragment>
        <section className="Container">
            <section className="Countries">
              {this.state.countries.map(country => (
                <Country
                  key={country.id}
                  name={country.name}
                  clicked={() => this.postClicked(country.alpha3Code)}
                />
              ))}
            </section>
            <section className="Info">
                <CountryInfo selectedCountry={this.state.selectedCountry}
                             clicked={this.postClicked}
                />
            </section>
        </section>
       </Fragment>
    )
  }
}

export default Blog;