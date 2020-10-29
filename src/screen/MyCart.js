import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Badge, Card } from 'native-base';
import Cart from '../component/cart';

export default class MyCart extends Component {
  constructor() {
    super();
  }

  goToProfile = () => {
    Actions.Profile();
  }
  goToProductList = () => {
    Actions.ProductList();
  }
  goToMyCart = () => {
    Actions.MyCart();
  }
  goToCheckout = () => {
    Actions.Checkout();
  }

  render() {
    return (
      <Container>
        <Cart />
        <Footer>
          <FooterTab>
            <Button vertical onPress={this.goToProductList}>
              <Icon name="md-bed-outline" />
              <Text style={{ textAlign: "center" }}>Product</Text>
            </Button>
            <Button active vertical onPress={this.goToMyCart}>
              <Icon name="basket-outline" />
              <Text style={{ textAlign: "center" }}>My Cart</Text>
            </Button>
            <Button badge vertical onPress={this.goToCheckout}>
              <Badge ><Text>5</Text></Badge>
              <Icon name="cart-outline" />
              <Text style={{ textAlign: "center" }}>Checkout</Text>
            </Button>
            <Button vertical onPress={this.goToProfile}>
              <Icon name="options-outline" />
              <Text style={{ textAlign: "center" }}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    flex: 1,
  },
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 2,
    height: 120,
  },
});