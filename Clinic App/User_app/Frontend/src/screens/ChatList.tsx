import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import SearchInput from '../components/molecules/searchInput';

//@ts-ignore;
import { ChatItem } from 'react-chat-elements/native'

function Chatlist() {
    return (
        <View style={styles.container}>
            <View style={styles.SearchContainer}>
                <SearchInput style={styles.SearchInput} />
                <Text style={styles.Cancel}>Cancel</Text>
            </View>
            <View style={styles.Chatlist}>
                <ChatItem
                    avatar={'https://i.postimg.cc/g0XDCfv2/portrait-smiling-handsome-male-doctor-man-171337-5055-modified.png'}
                    alt={'App'}
                    title={'Evan Henry'}
                    subtitle={'What are you doing?'}
                    date={new Date('October 10, 2021 03:24:00')}
                    unread={0}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF'
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
    SearchInput: {
        top: 10,
        left: 16
    },
    SearchContainer: {
        width: Dimensions.get('window').width,
        height: 56
    },

});

export default Chatlist;
