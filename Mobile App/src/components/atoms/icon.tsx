import React, { Component } from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../config.json';
const CustomedIcon = createIconSetFromFontello(fontelloConfig);

export default class Icon extends Component<{
    name: string,
    size: number,
    style?:any,
    onPress?:any
}>

{
    render() {
        return (
            <CustomedIcon name={this.props.name} size={this.props.size} style={this.props.style} onPress={this.props.onPress} />
        );
    
}
}