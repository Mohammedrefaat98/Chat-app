import React, { useState } from 'react';
import { StyleSheet, View, Dimensions,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
//@ts-ignore;
import { MessageList } from 'react-chat-elements/native'
import ChatRoomHeader from '../components/molecules/chatRoomHeader';
import ChatRoomBottom from '../components/molecules/chatRoomBottom';
function chatRoom() {
    const [text, setText] = useState('');
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <ChatRoomHeader
                        name="My Name"
                        status="Online"    
                    />
                    <MessageList
                        style={styles.ChatView}
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={[
                            {
                                position: 'right',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            }
                        ]}
                    />
                    <ChatRoomBottom textValue={text} onChangeText={(text: React.SetStateAction<string>) => setText(text)} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: "space-around"
    },
    ChatView: {
        height: '83.384%',
        width: Dimensions.get('window').width,
    },
});
export default chatRoom;
