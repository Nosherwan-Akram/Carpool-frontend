import React, { Component } from "react";
import { getAllCities } from "../../services/secure/city_service";
import SearchBarForm from "./search_bar_form";

class SearchBar extends Component {
  state = {
    cities: [],
  };

  componentDidMount = () => {
    getAllCities().then((res) => {
      this.setState({ cities: res.payload });
    });
  };

  searchRides = (values) => {
    this.props.searchRideHandler(values);
  };

  render() {
    return (
      <div>
        <SearchBarForm
          formSubmission={this.searchRides}
          cities={this.state.cities}
        ></SearchBarForm>
      </div>
    );
  }
}

export default SearchBar;
