import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={this.state.text}
          onChange={event => this.handleOnChange(event)} />
        <input type="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
