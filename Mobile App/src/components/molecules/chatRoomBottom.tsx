import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ChatInput from '../atoms/chatTextInput';
import CustomIcon from '../atoms/icon';

export default class ChatRoomBottom extends Component<{
    textValue?: any,
    onChangeText?:any
}>

{
    render() {
        return (
            <View style={styles.BottomView}>
                <CustomIcon name="paperclip" size={25} style={styles.paperclip}/>
                <ChatInput textValue={this.props.textValue} onChangeText={this.props.onChangeText} />
                <CustomIcon name="paperplane" size={31} style={styles.paperplane} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    BottomView: {
        height: 61,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        borderBottomWidth: 1,
        position: 'relative'
    },
    paperclip: {
        left: 20.55,
        alignSelf: 'center',
    },
    paperplane: {
        top: 0,
        left: 54,
        alignSelf: 'center',
        color: "#02D17A",
    }
});