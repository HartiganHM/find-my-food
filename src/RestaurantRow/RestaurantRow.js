import React, { Component } from "react";
import "./RestaurantRow.css";
export class RestaurantRow extends Component {
  state = {};

  render() {
    const { genre, name, city, state, telephone, address1 } = this.props.info;
    console.log(this.props.info);
    return (
      <section className="restaurant-row">
        <div className="row_div-right">
          <h2>{name}</h2>
          <p>
            <b>Phone Number:</b> {telephone}
          </p>
          <p>
            <b>Cuisine:</b> {genre}
          </p>
        </div>
        <div className="row_div-left">
          <p>{address1}</p>
          <p>
            {city}, {state}
          </p>
        </div>
      </section>
    );
  }
}

export default RestaurantRow;
