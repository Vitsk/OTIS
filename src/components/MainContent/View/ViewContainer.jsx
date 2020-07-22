import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import { setCars } from '../../../redux/reducers/viewReducer';

class ViewContainer extends Component {
  componentDidMount() {
    this.props.setCars()
  }

  render() {
    return (
      <View cars={this.props.cars} />
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.viewPage.cars
})

export default connect(mapStateToProps, { setCars })(ViewContainer);
