import React from 'react';

const DisplayALocation = (props) => {
  const {
    history,
    locations,
    deleteLocation
  } = props;

  return (
    <div className="sublocations">
      <p><b>Sub-Locations:</b></p>
      {
        locations.subLocations.map((location, index) => {
          return(
            <div key={index} className="location-list">
              <hr />
              <div className="item"> {location.name.toUpperCase()}</div>
              <div className="item"><b>Males:</b> {location.males}</div>
              <div className="item"><b>Females:</b> {location.females}</div>
              <div className="item"><b>Total Polulation:</b> {location.total}</div>
              <div className="item">
                <span
                  className="glyphicon glyphicon-edit action-icon"
                  onClick={() => history.push(`/form/${location.id}/edit`)}
                ></span>
                <span
                  className="glyphicon glyphicon-trash action-icon"
                  onClick={() => deleteLocation(location.id)}
                ></span>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default DisplayALocation;
