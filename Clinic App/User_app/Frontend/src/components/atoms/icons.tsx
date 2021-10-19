import React, { Component } from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default class Icons extends Component<{
    name: string,
    size: number,
    style:any
}>

{
    render() {
        return (
            <Icon name={this.props.name} size={this.props.size} style={this.props.style} />
        );
    }
}