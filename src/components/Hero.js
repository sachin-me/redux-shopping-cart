import React, {Fragment} from "react";
import {connect} from 'react-redux';
import NormalItems from './normalItems';
import * as mapDispatchToProps from '../actions';

function Hero(props) {
  return (
    <Fragment>
      <div className="hero-wrapper">
        <NormalItems /> 
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)

