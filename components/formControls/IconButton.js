import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
// Constants
import Colors from '../../constants/colors';
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