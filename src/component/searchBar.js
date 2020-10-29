import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Item, Input } from 'native-base';


export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Item rounded style={styles.search}>
        <Icon name="search-outline" />
        <Input placeholder='Search product...' />
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    shadowRadius: 5,
    shadowColor: 'grey'
  }
});