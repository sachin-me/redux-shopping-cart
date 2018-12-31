import React from "react";
import {connect} from 'react-redux';
import Hero from './Hero'
import SizeFilter from './sizeFilter';

function Main(props) {
  
  return (
    <div className="main">
      <SizeFilter />
      <Hero />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productItems: state.data
  }
}

export default connect(mapStateToProps)(Main)

