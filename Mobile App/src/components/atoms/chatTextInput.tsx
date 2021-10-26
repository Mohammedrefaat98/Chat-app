import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class ChatTextInput extends Component<{
    textValue?: any,
    onChangeText?: any
}, { height: number }>
{
    constructor(props: any) {
        super(props);
        this.state = { height: 0 };
    }
    render() {
        return (
            <TextInput
                placeholder="Type Message"
                numberOfLines={8}
                multiline={true}
                onChangeText={this.props.onChangeText}
                onContentSizeChange={(event) => {
                    this.setState({ height: (event.nativeEvent.contentSize.height) })
                }}
                style={[styles.chatInput, { height: Math.max(40, this.state.height <= 61 ? this.state.height : 61) }]}
                defaultValue={this.props.textValue}
            />
        );

    }
}
const styles = StyleSheet.create({
    chatInput: {
        paddingLeft: 12,
        borderRadius: 5,
        backgroundColor: 'rgba(60, 60, 67, 0.08)',
        alignSelf: 'center',
        left: 37.5,
        width: '66.4%',
    },
});