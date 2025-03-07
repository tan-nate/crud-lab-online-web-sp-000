import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    )
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants });

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text: text }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id: id })
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);