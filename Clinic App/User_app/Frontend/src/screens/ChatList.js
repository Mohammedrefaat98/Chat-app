import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { ChatItem } from 'react-chat-elements/native'

function Chatlist(props) {
    return (
        <View style={styles.container}>
            <View style={styles.SearchContainer}>
                <View style={styles.SearchBar}>
                    <Icon name="search" size={16} style={styles.Searchicon} />
                    <Icon name="filter" size={17} style={styles.Filtericon} />
                    <TextInput
                        style={styles.SearchInput}
                        placeholder="Search"
                    />
                </View>
                <Text style={styles.Cancel}>Cancel</Text>
            </View>
            <View style={styles.Chatlist}>
                <ChatItem
                    avatar={'https://facebook.github.io/react/img/logo.svg'}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={0} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Chatlist: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 116
    },
    Cancel: {
        fontSize: 17,
        fontWeight: '400',
        top: 15,
        left: 0.805 * Dimensions.get('window').width,
        color: '#007AFF'
    },
    SearchBar: {
        top: 10,
        left: 16,
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
    SearchContainer: {
        width: Dimensions.get('window').width,
        height: 56
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

export default Chatlist;
