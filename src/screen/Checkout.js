import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, View, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Badge } from 'native-base';

export default class Checkout extends Component {
    constructor() {
        super();
    }

    goToSetting = () => {
        Actions.Setting();
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
                <Content>
                    <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", marginTop: 30 }}>Checkout</Text>
                </Content>
                <Footer>
                    {/* <FooterTab style={{ backgroundColor: "blue", shadowColor: "black" }}> */}
                    <FooterTab>
                        <Button vertical onPress={this.goToSetting}>
                            <Icon name="options-outline" />
                            <Text style={{ textAlign: "center" }}>Setting</Text>
                        </Button>
                        <Button vertical onPress={this.goToProductList}>
                            <Icon name="md-bed-outline" />
                            <Text style={{ textAlign: "center" }}>Product</Text>
                        </Button>
                        <Button vertical onPress={this.goToMyCart}>
                            <Icon name="basket-outline" />
                            <Text style={{ textAlign: "center" }}>My Cart</Text>
                        </Button>
                        <Button active badge vertical onPress={this.goToCheckout}>
                            <Badge ><Text>5</Text></Badge>
                            <Icon name="cart-outline" />
                            <Text style={{ textAlign: "center" }}>Checkout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}