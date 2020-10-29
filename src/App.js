import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Onboarding from './screen/Onboarding';
import Profile from './screen/Profile';
import ProductList from './screen/ProductList';
import MyCart from './screen/MyCart';
import Checkout from './screen/Checkout';

export default class App extends Component {
  render() {
    return (
      // <Router navigationBarStyle={{ backgroundColor: '#007AFF', height: 500 }}>
      <Router>
        <Scene key="root">
          {/* <Scene
            key="Onboarding"
            component={Onboarding}
            left={() => null}
            title="Shop Me"
            initial={true}
          /> */}
          <Scene
            key="ProductList"
            component={ProductList}
            left={() => null}
            title="Product List"
            // initial={true}
            titleStyle={styles.header}
          />
          <Scene
            key="MyCart"
            component={MyCart}
            right={() => true}
            back={() => true}
            title="My Cart"
            titleStyle={styles.header}
            initial={true}
          />
          <Scene
            key="Checkout"
            component={Checkout}
            right={() => true}
            back={() => true}
            title="Checkout"
            titleStyle={styles.header}
          />
          <Scene
            key="Profile"
            component={Profile}
            back={() => true}
            right={() => true}
            title="Profile"
            // initial={true}
            titleStyle={styles.header}
          />
        </Scene>
      </Router >
    );
  }
}


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    flex: 1,
    // color: "white",
  }
});
