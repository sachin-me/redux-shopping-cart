import React from 'react';
import {connect} from 'react-redux';
import * as mapDispatchToProps from '../actions';
let productCounter;

function SortBy(props) {
  const {productArr} = props
  if (!productArr) {productCounter = props.productItems.length}
  else {productCounter = productArr.length}
  return (
    <div className="sort-items">
      <h2>{productCounter}:Products Found</h2>
      <div>
        <span>Order By: </span>
        <select name="" id="" onChange={
          (e) => {
            e.target.value === "Lowest to Highest" ? props.ascending() : props.descending()
          }
        }>
          <option value="">Select</option>
          <option value="Lowest to Highest">Lowest to Highest</option>
          <option value="Highest to Lowest">Highest to Lowest</option>
        </select>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SortBy);
