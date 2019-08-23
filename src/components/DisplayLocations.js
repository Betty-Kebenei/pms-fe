import React from 'react';

const DisplayLocations = (props) => {
  const { history, locations, deleteLocation } = props;

  return (
    <div>
      {
        locations.map((location, index) => {
          return(
            <div key={index}>
              <div><b>Location:</b> {location.name.toUpperCase()}</div>
              <div><b>Males:</b> {location.males}</div>
              <div><b>Females:</b> {location.females}</div>
              <div><b>Total Polulation:</b> {location.total}</div>
              <div>
                <button>View sub-locations</button>
                <button
                  onClick={() => history.push(`/form/${location.id}/edit`)}
                >Edit</button>
                <button
                  onClick={() => deleteLocation(location.id)}
                >Delete</button>
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
