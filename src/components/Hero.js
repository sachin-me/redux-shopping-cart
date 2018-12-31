import React, {Fragment} from "react";
import {connect} from 'react-redux';
import NormalItems from './normalItems';
import * as mapDispatchToProps from '../actions';
import SortBy from './sortBy';

function Hero(props) {
  return (
    <div className="hero-container">
      <SortBy />
      <div className="hero-wrapper">
        <NormalItems /> 
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)

