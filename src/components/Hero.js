import React, {Fragment} from "react";
import {connect} from 'react-redux';
import NormalItems from './normalItems';
import * as mapDispatchToProps from '../actions';


function Hero(props) {
  return (
      <NormalItems /> 
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)

