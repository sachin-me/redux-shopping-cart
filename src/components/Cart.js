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
                  </div>
                )
              })
            }
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