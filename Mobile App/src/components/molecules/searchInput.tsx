import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import Icon from '../atoms/icon';
export default class SearchInput extends Component<{
    style?: any
}>

{
    render() {
        return (
            <View style={{...this.props.style,...styles.SearchBar}}>
                <Icon name="search" size={16} style={styles.Searchicon} />
                <Icon name="filter" size={17} style={styles.Filtericon} />
                <TextInput
                    style={styles.SearchInput}
                    placeholder="Search"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    SearchBar: {
        width: 0.728 * Dimensions.get('window').width,
        height: 36,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#EBEBF5',
    },
    SearchInput: {
        fontSize: 17,
        fontWeight: '400',
        left: 30,
        top: -4,
        height: 45,
        width: 0.53 * Dimensions.get('window').width,
    },
    Searchicon: {
        left: 8.18,
        top: 9.98,
        width: 15.63,
        height: 15.78,
        position: 'absolute',
    },
    Filtericon: {
        left: (0.66 * Dimensions.get('window').width) - 3,
        top: 10,
        width: 30,
        height: 30,
        position: 'absolute',
    },

});
