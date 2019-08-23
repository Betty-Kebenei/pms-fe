import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postLocation, updateLocation } from '../redux/actions/locationAction';

class LocationForm extends Component {
  state = {
    name: '',
    males: 0,
    females: 0
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const { name, males, females } = this.state;
    const parentId = this.props.match.params.parentId ? this.props.match.params.parentId : null;
    const locationId = this.props.match.params.locationId ? this.props.match.params.locationId : null;
    if(locationId) {
      const data = {
        "name": name,
        "males": males,
        "females": females
      }
      await this.props.updateLocation(locationId, data);
    } else {
      const data = {
        "name": name,
        "males": males,
        "females": females,
        "parent_id": parentId
      }
      await this.props.postLocation(data);
    }
    this.props.history.push('/');
  }

  render() {
    console.log(this.props)
    const { name, males, females } = this.state;
    return(
      <div>
        <div>
          <Link to='/'>Back</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <label htmlFor="name">Location Name:</label>
            <input
              id="name"
              type="text"
              name='name'
              value={name}
              onChange={this.handleChange}
              required/>
          </div>
          <div className="form-group">
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <label htmlFor="males">Number of males:</label>
            <input
              id="males"
              type="number"
              name='males'
              value={males}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <label htmlFor="females">Number of females:</label>
            <input
              id="females"
              type="number"
              name='females'
              value={females}
              onChange={this.handleChange}
              />
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}

export default connect(
  null,
  {
    postLocation,
    updateLocation
  })(LocationForm);
