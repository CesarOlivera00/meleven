import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
// Constants
// Components
import Icon from '../Icon';

const IconButton = (props) => {
    return (
        <TouchableOpacity {...props}>
            <Icon name={props.iconName} width={props.iconWidth} height={props.iconHeight} fill={props.iconFill} />
        </TouchableOpacity>
    );
}

export default IconButton;

const Styles = StyleSheet.create({
    
});