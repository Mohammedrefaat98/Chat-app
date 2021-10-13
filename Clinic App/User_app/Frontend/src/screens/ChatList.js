import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

function ChatList(props) {

    return (
        <View style={styles.container}>
            <View style={styles.SearchContainer}>
                <View style={styles.SearchBar}>
                    <Icon name="search" size={15.78} style={styles.Searchicon} />
                    <Icon name="filter" size={30} style={styles.Filtericon} />
                    <TextInput
                        style={styles.SearchInput}
                        placeholder="Search"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    SearchBar: {
        top: 10,
        left: 16,
        width: 0.728*Dimensions.get('window').width,
        height: 36,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#EBEBF5',
    },
    SearchInput:{
        left:30,
        top:2,
        height:36,
        width: 0.53*Dimensions.get('window').width
    },
    SearchContainer: {
        width: Dimensions.get('window').width,
        height: 56
    },
    Searchicon: {
        left: 8.18,
        top: 10,
        position: 'absolute',
    },
    Filtericon: {
        left: 0.61*Dimensions.get('window').width,
        top: 5,
        position: 'absolute',
    },
});

export default ChatList;
