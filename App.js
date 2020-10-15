import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Onboarding from './src/screen/Onboarding';
import Setting from './src/screen/Setting';
import ProductList from './src/screen/ProductList';
import MyCart from './src/screen/MyCart';
import Checkout from './src/screen/Checkout';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Onboarding"
            component={Onboarding}
            left={() => null}
            title="Shop Me"
            initial={true}
          />
          <Scene
            key="Setting"
            component={Setting}
            left={() => null}
            title="Setting"
          // initial={true}
          />
          <Scene
            key="ProductList"
            component={ProductList}
            // left={() => null}
            back={() => true}
            title="Product List"
          />
          <Scene
            key="MyCart"
            component={MyCart}
            left={() => null}
            back={() => true}
            title="My Cart"
          />
          <Scene
            key="Checkout"
            component={Checkout}
            left={() => null}
            back={() => true}
            title="Checkout"
          />
        </Scene>
      </Router>
    );
  }
}
