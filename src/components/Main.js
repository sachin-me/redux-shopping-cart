import React from "react";
import {connect} from 'react-redux';
import Hero from './Hero'
import SizeFilter from './sizeFilter';
import SortBy from './sortBy';
import Cart from './Cart';

function Main(props) {
  
  return (
    <div className="main">
      <SizeFilter />
      <Hero />
      <SortBy />
      <Cart />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productItems: state.data
  }
}

export default connect(mapStateToProps)(Main)

