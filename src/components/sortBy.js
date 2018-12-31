import React from 'react';
import {connect} from 'react-redux';
import * as mapDispatchToProps from '../actions';

function SortBy(props) {
  return (
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
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SortBy);
