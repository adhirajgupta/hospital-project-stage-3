import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Linking, StatusBar, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import AppBar from '../../globalComponents/AppBar';
import CenterBody from './components/CenterBody';
import LowerBody from './components/LowerBody';
import SpeedDialComponent from './components/SpeedDialComponent'
import SwiperComponent from './components/SwiperComponent';
import UpperBody from './components/UpperBody';
import * as Animate from 'react-native-animatable'

const { width, height } = Dimensions.get('screen')
export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                {/* <StatusBar backgroundColor="#fff" barStyle="light-content"  /> */}
                <Animate.View
                animation="fadeInUpBig"
                >
                    <ScrollView>
                        <View
                            style={styles.container}
                        >
                            <UpperBody navigation={this.props.navigation} />
                            <CenterBody navigation={this.props.navigation} />
                            <View style={styles.buttonContainer}>

                                <Button
                                    icon={"phone"}
                                    labelStyle={{ fontSize: 25 }}
                                    mode="contained"
                                    contentStyle={[styles.button, { width: width - 40, }]}
                                    style={styles.button}
                                    color='red'
                                    onPress={() => Linking.openURL('tel:+919079737008')}>
                                    <Text style={[styles.buttonText, { color: 'white' }]}>Emergency Helpline</Text>
                                </Button>
                            </View>
                            <LowerBody navigation={this.props.navigation} />
                        </View>
                    </ScrollView>
                <SpeedDialComponent />
                </Animate.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: width - 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        justifyContent: 'center', alignItems: 'center', marginTop: 20
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

});
