import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from '../atoms/icon';
import BackButton from '../atoms/backButton';
import HeaderUsername from '../atoms/headerUsername';
export default class ChatRoomHeader extends Component<{
    onPressBack?: any,
    name?: string,
    status?: string,
    onPressFirstAidKit?: any
}>

{
    render() {
        return (
            <View>
                <HeaderUsername name={this.props.name} status={this.props.status}/>
                <View style={styles.headerButtonsContainer}>
                    <BackButton onPressBack={this.props.onPressBack}/>
                    <Icon name="first-aid-kit" size={35} style={styles.firstAidKit} onPress={this.props.onPressFirstAidKit} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    headerButtonsContainer: {
        width: Dimensions.get('window').width,
        height: 61,
        flexDirection: 'row',

    },
    firstAidKit: {
        alignSelf: 'center',
        right: 13,
        position: 'absolute'
    }
});