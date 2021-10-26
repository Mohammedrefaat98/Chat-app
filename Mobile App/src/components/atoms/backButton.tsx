import React, { Component } from 'react';
import Icon from './icon';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


export default class BackButton extends Component<{
    onPressBack?: any
}>

{
    render() {
        return (
            <TouchableOpacity style={styles.backButton} onPress={this.props.onPressBack}>
                <Icon name="arrow" size={20} style={styles.arrow} />
                <Text style={styles.BackText}>Back</Text>
            </TouchableOpacity>
        );

    }
}
const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        position:'absolute',
        left: 16.5
    },
    BackText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#0A84FF',
        left: 5.5
    },
    arrow:{
        color:"#007AFF"
    }
});