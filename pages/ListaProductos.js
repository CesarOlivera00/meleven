import React from "react";
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useState, useEffect } from 'react';
// Constants
// Components
import ItemCardProducto from '../components/ItemCardProducto';

const ListaProductos = (props) => {
    var items = [];

    function ShowDetailsProducto(key){
        props.navigation.navigate('DetalleProducto', {id: key});
    }

    for (var i = 0; i < 10; i++){
        items.push(<ItemCardProducto key={i} OnPressBuy={ShowDetailsProducto} id={i}></ItemCardProducto>);
    }

    return (
        <ScrollView>
            <View style={Styles.containerListItems}>
                {items}
            </View>
        </ScrollView>
    );
}

export default ListaProductos;

const Styles = StyleSheet.create({
    containerListItems: {
        width: '100%',
        flexDirection: 'row',
        flexWrap:'wrap'
    }
});