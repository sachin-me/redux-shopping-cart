import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';
import { displayData } from './actions/index';
import Main from './components/Main';
import Cart from './components/Cart';

class App extends Component {
  
  componentWillMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json').then(d => d.json()).then(data => this.props.displayData(data.products))
  }

  render() {
    return (
      <div className="App">
        <Main />
        <Cart />
      </div>
    );
  }
}

const mapDispatchToProps = {displayData};

const mapStateToProps = (state) => {
  return {
    productItems: state.productItems,
    filterArr: state.filterArr
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
