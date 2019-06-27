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


export default class FlexScreen extends React.Component {
	render() {
	    return (<ScrollView>
	    			<View style={{flex: 1, flexDirection: 'row'}}>
				       <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}} />
				       <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
				       <View style={{width: 50, height: 250, backgroundColor: 'steelblue'}} />
				     </View>
	    			<Text>AAAA</Text>
	    		</ScrollView>);
	}
}

const styles  = StyleSheet.create({
	flex: {}
});