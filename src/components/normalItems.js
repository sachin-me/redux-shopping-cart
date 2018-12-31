import React, {Fragment} from "react";
import {connect} from 'react-redux';
import * as mapDispatchToProps from '../actions';


function NormalItems(props) {
  const {appliedFilter, productItems} = props;

  let displayArr = []; 

  if(appliedFilter.length === 0) {
    displayArr = productItems;
  } else {
    appliedFilter.forEach(filter => {
      displayArr = [...displayArr, ...productItems.filter(item => item.availableSizes.includes(filter))]
    }) 
  }

  return (
    <Fragment>
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
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalItems)

