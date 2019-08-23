import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayLocations from './DisplayLocations';
import { fetchLocations, fetchALocation, deleteLocation } from '../redux/actions/locationAction';

class Location extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return(
      <div className="locations">
        <h1>Locations</h1>
        <button
          className='add-button'
          onClick={() => this.props.history.push('/form')}
          ><span className="glyphicon glyphicon-plus action-icon"></span> NEW LOCATION
        </button>
        <hr />
        {
         this.props.locations
         &&
         <DisplayLocations
          locations={this.props.locations}
          subLocations={this.props.subLocations}
          deleteLocation={this.props.deleteLocation}
          fetchALocation={this.props.fetchALocation}
          history={this.props.history}
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    locations: { locations, subLocations }
  } = state;
  return { locations, subLocations }
}

export default connect(
  mapStateToProps,
  {
    fetchLocations,
    fetchALocation,
    deleteLocation
  })(Location);
