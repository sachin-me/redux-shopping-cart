import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from '../actions';


class Cart extends Component {

  state = {
    isDisplay: false
  }

  hanldleClick = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    })
  }

  handleCheck = () => {
    alert(`Subtotal: $${this.props.cartArr.reduce((acc, v) => {
      acc = acc + v.price;
      return acc;
    }, 0)}`)
  }

  render() {
    return (
      <div className="cart" onClick={this.hanldleClick}>
        {
          this.state.isDisplay ? 
          <div className="cart-item">
            {
              this.props.cartArr.map((v, i) => {
                return (
                  <div key={i} id={i}>
                    <img id={i} src={require(`../products-image/${v.sku}_1.jpg`)} alt="cart items"/>
                    <div>
                      <h3>{v.title}</h3>
                      <h5>${v.price}</h5>
                      <p>Quantity: 1</p>
                    </div>
                    <button className="cart-item-remove" onClick={
                      () => this.props.handleDeleteCart(i)
                    }>X</button>
                  </div>
                )
              })
            }
            <p className="subtotal">
              {
                `Subtotal: $${this.props.cartArr.reduce((acc, v) => {
                acc = acc + v.price;
                return acc;
              }, 0)}`
              }
            </p>
            <button className="checkout-btn" onClick={this.handleCheck}>Checkout</button>
          </div> : this.props.cartArr.length
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)