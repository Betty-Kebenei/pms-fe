import React from 'react';

import DispalyALocation from './DisplayALocation';

const DisplayLocations = (props) => {
  const {
    history,
    locations,
    subLocations,
    fetchALocation,
    deleteLocation
  } = props;

  return (
    <div>
      {
        locations.map((location, index) => {
          return(
            <div key={index}>
              <div className="location-list">
                <div className="item"><b></b> {location.name.toUpperCase()}</div>
                <div className="item"><b>Males:</b> {location.males}</div>
                <div className="item"><b>Females:</b> {location.females}</div>
                <div className="item"><b>Total Polulation:</b> {location.total}</div>
                <div className="item">
                  <span
                    className="glyphicon glyphicon-plus action-icon"
                    onClick={() => history.push(`/form/${location.id}`)}
                  ></span>
                  <span
                    className="glyphicon glyphicon-eye-open action-icon"
                    onClick={() => fetchALocation(location.id)}
                  ></span>
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
              <div>
              { subLocations.location ?
                subLocations.location.id === location.id &&
                <DispalyALocation
                  history={history}
                  locations={subLocations}
                  subLocations={subLocations}
                  fetchALocation={fetchALocation}
                  deleteLocation={deleteLocation}
                />
                : ''
              }
              </div>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default DisplayLocations;


