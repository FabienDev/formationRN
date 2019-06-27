/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ScrollView, Button} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class HomeScreen extends React.Component {
	render() {
	    return (<View><Text>Bienvenue sur cette sublime application !</Text><Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('MainScreen')}
        />
        </View>);
	}
}