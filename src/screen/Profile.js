import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, View, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge, List, ListItem, Left, Body, Right } from 'native-base';
import { Buttons, Colors, Typography } from '../styles'

export default class Profile extends Component {
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

	alertMsg = () =>
		Alert.alert(
			"Alert",
			"Button clicked",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{
					text: "OK",
					onPress: () => console.log("OK Pressed")
				}
			],
			{ cancelable: false }
		);

	render() {
		return (
			<Container>
				<Content>
					<Image style={styles.picture} source={require('../images/profile_pic.png')} />
					<Text style={styles.username}>Alex Bane</Text>
					<Text style={styles.center}>
						<Icon style={{ fontSize: 20, color: '#4ca64c' }} name="location-sharp" />
						Kubang Pasu, Kedah
					</Text>
					<List style={styles.list}>
						<ListItem icon style={styles.listItem} onPress={this.alertMsg}>
							<Left>
								<Button style={styles.icon}>
									<Icon active name="chatbubble-ellipses-outline" />
								</Button>
							</Left>
							<Body>
								<Text>Messages</Text>
							</Body>
							<Right>
								<Badge >
									<Text>5</Text>
								</Badge>
							</Right>
						</ListItem>
						<ListItem icon style={styles.listItem} onPress={this.alertMsg}>
							<Left>
								<Button style={styles.icon}>
									<Icon active name="notifications-outline" />
								</Button>
							</Left>
							<Body>
								<Text>Notification</Text>
							</Body>
							<Right>
								<Badge >
									<Text>3</Text>
								</Badge>
							</Right>
						</ListItem>
						<ListItem icon style={styles.listItem} onPress={this.alertMsg}>
							<Left>
								<Button style={styles.icon}>
									<Icon active name="person-outline" />
								</Button>
							</Left>
							<Body>
								<Text>Account Details</Text>
							</Body>
							<Right>
								<Icon active name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon style={styles.listItem} onPress={this.alertMsg}>
							<Left>
								<Button style={styles.icon}>
									<Icon active name="cart-outline" />
								</Button>
							</Left>
							<Body>
								<Text>My Purchases</Text>
							</Body>
							<Right>
								<Icon active name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon style={styles.listItem} onPress={this.alertMsg}>
							<Left>
								<Button style={styles.setting}>
									<Icon active name="settings-outline" />
								</Button>
							</Left>
							<Body>
								<Text>Setting</Text>
							</Body>
							<Right>
								<Icon active name="arrow-forward" />
							</Right>
						</ListItem>
					</List>
				</Content>
				<Footer>
					<FooterTab>
						<Button vertical onPress={this.goToProductList}>
							<Icon name="md-bed-outline" />
							<Text style={styles.center}>Product</Text>
						</Button>
						<Button vertical onPress={this.goToMyCart}>
							<Icon name="basket-outline" />
							<Text style={styles.center}>My Cart</Text>
						</Button>
						<Button badge vertical onPress={this.goToCheckout}>
							<Badge >
								<Text>5</Text>
							</Badge>
							<Icon name="cart-outline" />
							<Text style={styles.center}>Checkout</Text>
						</Button>
						<Button active vertical onPress={this.goToProfile}>
							<Icon name="options-outline" />
							<Text style={styles.center}>Profile</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container >
		)
	}
}

const styles = StyleSheet.create({
	icon: {
		...Colors.primary,
	},
	setting: {
		...Buttons.accent,
	},
	center: {
		textAlign: "center",
	},
	picture: {
		maxWidth: 220,
		maxHeight: 205,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 10
	},
	list: {
		marginHorizontal: 10,
		marginTop: 40
	},
	listItem: {
		marginBottom: 5,
	},
	username: {
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center"
	}
});