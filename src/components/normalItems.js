import React, {Fragment} from "react";
import {connect} from 'react-redux';
import * as mapDispatchToProps from '../actions';
import SortBy from './sortBy';

function NormalItems(props) {
  const {appliedFilter, productItems, filterArr} = props;

  console.log(filterArr)

  let displayArr = []; 

  if(appliedFilter.length === 0) {
    displayArr = productItems;
  } else {
    appliedFilter.forEach(filter => {
      displayArr = [...displayArr, ...productItems.filter(item => item.availableSizes.includes(filter))]
    }) 
  }

  return (
    <div className="product-item hero-container">
      <div>
        <SortBy productArr={displayArr} />
      </div>
      <div className="hero-wrapper">
        {
          displayArr && displayArr.map((v, i) => {
            return (
              <div key={i}>
                <img src={require(`../products-image/${v.sku}_1.jpg`)} alt=""/>
                <h3>{v.title}</h3>
                <p>${v.price}</p>
                <p>{v.installments} X ${(v.price / v.installments).toFixed(2)}</p>
                <button id={i} onClick={
                  (e) => props.cart(e)
                }>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalItems)

