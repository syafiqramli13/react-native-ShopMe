import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Setting from './Profile';

export default class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
            //To show the main page of the app
        };
    }
    _onDone = () => {
        this.setState({ showRealApp: true });
    };
    _onSkip = () => {
        this.setState({ showRealApp: true });
    };
    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    render() {
        //If false show the Intro Slides
        if (this.state.showRealApp) {
            //Real Application
            return (
                <Setting />
            );
        } else {
            //Intro slides
            return (
                <AppIntroSlider
                    slides={slides}
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    showSkipButton={true}
                    onSkip={this._onSkip}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    title: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
});

const slides = [
    {
        key: 's1',
        title: 'Onboarding 1',
        text: 'Your personal book review',
        // image: require('../images/book2.jpg'),
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Onboarding2 2',
        text: 'Scan barcode effortlessly',
        // image: require('../images/barcode-512.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Onboarding 3',
        text: 'Rate your enjoyness reading book',
        // image: require('../images/star.png'),
        backgroundColor: '#22bcb5',
    },
];
