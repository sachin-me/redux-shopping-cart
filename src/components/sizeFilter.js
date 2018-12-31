import React from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from '../actions';

function SizeFilter(props) {
  
  let fileredArr = props.productItems.reduce((acc,v) => {
    acc = [...acc, ...v.availableSizes];
    return acc
  }, []).reduce((acc, value) => {
    if(!acc.includes(value)) acc.push(value);
    return acc;
  }, [])

  const handleClick = e => {
    const appliedFilter = props.appliedFilter;
    if(appliedFilter.includes(e.target.innerHTML)) {
      return props.removeFilter(e.target.innerHTML)
    }
    return props.setFilter(e.target.innerHTML)
  }

  return (
    <div className="size-btn">
      {
        fileredArr && fileredArr.map((v, i) => {
          return (
            <button key={i} id={i} onClick={
              handleClick
              }
            >{v}</button>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeFilter);
