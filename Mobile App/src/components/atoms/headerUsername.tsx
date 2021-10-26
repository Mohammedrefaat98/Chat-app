import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
export default class HeaderUsername extends Component<{
    name?: string,
    status?: string
}>

{
    render() {
        return (
            <View style={styles.headerNameContainer}>
                <Text style={styles.userNameText}>{this.props.name}</Text>
                <Text style={styles.statusText}>{this.props.status}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    userNameText: {
        textAlign:'center',
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
        letterSpacing: -0.3,
        top: 17,
        width:'60%',
        height:'40%'
    },
    statusText: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(60, 60, 67, 0.6)',
        top: 17
    },
    headerNameContainer: {
        width: Dimensions.get('window').width,
        height: 61,
        alignItems: 'center',
        position:'absolute',
    }
});