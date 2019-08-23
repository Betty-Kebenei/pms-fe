import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayLocations from './DisplayLocations';
import { fetchLocations, updateLocation, deleteLocation } from '../redux/actions/locationAction';

class Location extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h1>Locations</h1>
        <button
          onClick={() => this.props.history.push('/form')}
          >+ NEW LOCATION
        </button>
        <hr />
        {
         this.props.locations
         &&
         <DisplayLocations
          locations={this.props.locations}
          deleteLocation={this.props.deleteLocation}
          history={this.props.history}
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  const {
    locations: { locations }
  } = state;
  return { locations }
}

export default connect(
  mapStateToProps,
  {
    fetchLocations,
    deleteLocation
  })(Location);
