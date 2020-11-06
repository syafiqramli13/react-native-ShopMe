import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Badge, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import NumberFormat from 'react-number-format';
import data from '../data/data.json';
import test from '../data/test.json';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      cartItemsIsLoading: false,
      cartItems: [
        {
          itemId: '111',
          name: 'Rack',
          thumbnailImage: require('../images/rack.png'),
          salePrice: '500',
          qty: 1,
          checked: 1,
        },
        {
          itemId: '222',
          name: 'Bed',
          thumbnailImage: require('../images/bed.png'),
          salePrice: '2000',
          qty: 1,
          checked: 0,
        },
        {
          itemId: '333',
          name: 'Sofa',
          thumbnailImage: require('../images/sofa.png'),
          salePrice: '1000',
          qty: 1,
          checked: 0,
        },
        {
          itemId: '444',
          name: 'Table',
          thumbnailImage: require('../images/table.png'),
          salePrice: '800',
          qty: 1,
          checked: 1,
        },
        {
          itemId: '555',
          name: 'Drawer',
          thumbnailImage: require('../images/drawer.png'),
          salePrice: '300',
          qty: 1,
          checked: 1,
        },
        {
          itemId: '666',
          name: 'Wardrobe',
          thumbnailImage: require('../images/wardrobe.png'),
          salePrice: '4500',
          qty: 1,
          checked: 0,
        },
        {
          itemId: '777',
          name: 'Study Lamp',
          thumbnailImage: require('../images/studylamp.png'),
          salePrice: '150',
          qty: 1,
          checked: 1,
        },

      ],
    };
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

  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value
    this.setState({ cartItems: newItems }); // set new state
  };

  selectHandlerAll = (value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems.map((item, index) => {
      newItems[index]['checked'] = value == true ? 0 : 1; // set the new value
    });
    this.setState({
      cartItems: newItems,
      selectAll: value == true ? false : true,
    }); // set new state
  };

  deleteHandler = (index) => {
    Alert.alert(
      'Are you sure you want to delete this item from your cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            let updatedCart = this.state.cartItems; /* Clone it first */
            updatedCart.splice(
              index,
              1
            ); /* Remove item from the cloned cart state */
            this.setState(updatedCart); /* Update the state */
          },
        },
      ],
      { cancelable: false }
    );
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems]; // clone the array

    let currentQty = newItems[index]['qty'];

    if (action == 'more') {
      newItems[index]['qty'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({ cartItems: newItems }); // set new state
  };

  subtotalPrice = () => {
    const { cartItems } = this.state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum + (item.checked == 1 ? item.qty * item.salePrice : 0),
        0
      );
    }
    return 0;
  };

  render() {
    const { cartItems, cartItemsIsLoading, selectAll } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, { height: 300 }]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
            <ScrollView style={{ paddingTop: 20 }}>
              {cartItems && cartItems.map((item, i) => (
                <Card key={i} style={[styles.card, styles.centerElement, { flexDirection: 'row' }]}>
                  <Grid>
                    {/* checkmark */}
                    <Col size={5} style={{ paddingLeft: 10, alignSelf: 'center' }}>
                      <View>
                        <TouchableOpacity
                          style={[styles.centerElement, { width: 32, height: 32 }]}
                          onPress={() => this.selectHandler(i, item.checked)}>
                          <Icon
                            name={
                              item.checked == 1
                                ? 'checkmark-circle'
                                : 'checkmark-circle-outline'
                            }
                            style={{ fontSize: 20, color: 'green' }}
                          />
                        </TouchableOpacity>
                      </View>
                    </Col>

                    {/* product thumbnail */}
                    <Col size={30}>
                      <TouchableOpacity
                        onPress={() => { }} //route to product details
                      >
                        <Image style={[
                          styles.centerElement,
                          { height: 60, width: 60, resizeMode: 'contain', },
                        ]}
                          source={item.thumbnailImage}
                        />
                      </TouchableOpacity>
                    </Col>

                    <Col size={30}>

                      {/* product name */}
                      <Row style={{ alignSelf: 'center' }}>
                        <Text numberOfLines={1} style={styles.productName}>
                          {item.name}
                        </Text>
                      </Row>

                      {/* product quantity */}
                      <Row style={{ alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                          <TouchableOpacity
                            onPress={() => this.quantityHandler('less', i)}
                            style={{ borderWidth: 1, borderColor: '#cccccc', justifyContent: 'center' }}>
                            <Icon
                              name="remove"
                              style={{ fontSize: 22, color: '#cccccc' }}
                            />
                          </TouchableOpacity>
                          <Text
                            style={{
                              borderTopWidth: 1,
                              borderBottomWidth: 1,
                              borderColor: '#cccccc',
                              paddingHorizontal: 7,
                              paddingTop: 6,
                              color: '#bbbbbb',
                              fontSize: 15,
                            }}>
                            {item.qty}
                          </Text>
                          <TouchableOpacity
                            onPress={() => this.quantityHandler('more', i)}
                            style={{ borderWidth: 1, borderColor: '#cccccc', justifyContent: 'center' }}>
                            <Icon
                              name="add"
                              style={{ fontSize: 22, color: '#cccccc' }} />
                          </TouchableOpacity>
                        </View>
                      </Row>
                    </Col>

                    <Col size={30} style={{ paddingLeft: 10 }}>

                      {/* product price */}
                      <Row>
                        <NumberFormat
                          value={item.salePrice}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'RM '}
                          renderText={
                            value =>
                              <Text numberOfLines={1} style={styles.productPrice}>{value}</Text>
                          }
                        />
                      </Row>

                      {/* product total price */}
                      <Row>
                        <NumberFormat
                          value={item.qty * item.salePrice}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'RM '}
                          renderText={
                            value => <Text numberOfLines={1} style={styles.totalPrice}>{value}</Text>
                          }
                        />
                      </Row>
                    </Col>

                    {/* delete product */}
                    <Col size={5} style={{ alignSelf: 'center', padding: 10 }}>
                      <View style={[styles.centerElement, { width: 60 }]}>
                        <TouchableOpacity
                          style={[styles.centerElement, { width: 32, height: 32 }]}
                          onPress={() => this.deleteHandler(i)}>
                          <Icon name="trash-outline" style={{ fontSize: 20, color: 'red' }} />
                        </TouchableOpacity>
                      </View>
                    </Col>
                  </Grid>
                </Card>
              ))}
            </ScrollView>
          )}

        {!cartItemsIsLoading && (
          <View
            style={{
              backgroundColor: '#fff',
              borderColor: '#7fbf7f',
              borderWidth: 10,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 50,
                height: 50,
              },
              shadowOpacity: 1.0,
              shadowRadius: 30,
              elevation: 24,
              paddingVertical: 5,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.centerElement, { width: 60 }]}>
                <TouchableOpacity
                  style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => this.selectHandlerAll(selectAll)}>
                  <Icon
                    name={
                      selectAll == true
                        ? 'checkmark-circle'
                        : 'checkmark-circle-outline'
                    }
                    style={{ fontSize: 25, color: 'green' }}
                    color={selectAll == true ? '#0faf9a' : '#aaaaaa'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Select All</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingRight: 20,
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#8f8f8f' }}>SubTotal: </Text>
                  <NumberFormat
                    value={this.subtotalPrice().toFixed(2)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'RM '}
                    renderText={value => <Text>{value}</Text>} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 32,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    backgroundColor: '#0faf9a',
                    width: 100,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
                onPress={() => console.log('test')}>
                <Text style={{ color: '#ffffff' }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  card: {
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 120,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10
  },
  productPrice: {
    color: 'grey',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
  }
});