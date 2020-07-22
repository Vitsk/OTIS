import React, { Component } from 'react';
import Firms from './Firms';
import { setFirmsData } from '../../../redux/reducers/firmsReducer';
import { connect } from 'react-redux';

class FirmsContainer extends Component {
  componentDidMount() {
    this.props.setFirmsData()
  }

  render() {
    return (
      <Firms firms={this.props.firms} />
    );
  }
}

const mapStateToProps = (state) => ({
  firms: state.firmsPage.firms
})

export default connect(mapStateToProps, { setFirmsData })(FirmsContainer);