import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, View, Image, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Badge, Card, CardItem, Body, Thumbnail, Header, Item, Input } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SearchBar } from 'react-native-elements';
// import SearchBar from '../component/searchBar';
import data from '../data/data.json';
import productList from '../data/data';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, // check if json data (online) is fetching
      dataSource: [], // store an object of json data
      search: '',
      dataBackup: [],
      img: '../images/rack.png',
    };
  }

  componentDidMount() {
    //set state value
    this.setState({
      isLoading: false, //already loading
      // dataSource: data.productList
      dataSource: productList
    });
  }

  setSearchText(event) {
    searchText = event.nativeEvent.text;
    dataSource = this.state.dataBackup;
    searchText = searchText.trim().toLowerCase();

    dataSource = dataSource.filter(l => {
      return l.nama.toLowerCase().match(searchText);
    });

    this.setState({
      dataSource: dataSource
    });
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
  //function to get img source from url string
  getImageSource(imgSrc) {
    return require(imgSrc);
  }

  render() {
    // show waiting screen when json data is fetching
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Container style={{ backgroundColor: '#f6f6f6' }}>
        {/* <SearchBar /> */}
        {/* <SearchBar
          lightTheme
          placeholder="Type Here..."
          onChange={this.setSearchText.bind(this)}
        value={search}
        /> */}
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
              <Content>
                {/* <Text style={styles.info}>{item.name} is {item.age} years old. {item.sex == "male" ? "He" : "She"} likes {item.hobby}</Text> */}
                <Card style={styles.card}>
                  <CardItem>
                    <Grid>
                      <Col size={40}>
                        <Image style={styles.productImg} source={item.src} />
                      </Col>
                      <Col size={30}>
                        <Row>
                          <Text style={styles.productName}>{item.name}</Text>
                        </Row>
                        <Row>
                          <Text style={styles.productQuantity}>3</Text>
                        </Row>
                      </Col>
                      <Col size={30}>
                        <Row>
                          <Text style={styles.productPrice}>RM {item.price}</Text>
                        </Row>
                        <Row>
                          <Text style={styles.totalPrice}>RM 3,000</Text>
                        </Row>
                      </Col>
                    </Grid>
                  </CardItem>
                </Card>
              </Content>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        <Footer>
          <FooterTab>
            <Button active vertical onPress={this.goToProductList}>
              <Icon name="md-bed-outline" />
              <Text style={{ textAlign: "center" }}>Product</Text>
            </Button>
            <Button vertical onPress={this.goToMyCart}>
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
  info: {
    fontSize: 20,
  },
  card: {
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  footer: {
    backgroundColor: "green",
  },
  itemCenter: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: "auto"
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  productImg: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    backgroundColor: '#eeeeee',
    alignSelf: 'center'
  },
  productPrice: {
    color: 'grey',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-end'
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    // flex: 1
  }
});