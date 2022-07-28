import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
// Data
import { Productos } from '../data/Productos';
// Constants
// Components
import ItemCardProducto from '../components/ItemCardProducto';

const ListaProductos = (props) => {
    var items = [];

    function ShowDetailsProducto(id_producto){
        props.navigation.navigate('DetalleProducto', {id: id_producto});
    }

    const RenderItem = ({ item }) => {
        return <ItemCardProducto item={item} OnPressBuy={ShowDetailsProducto} />
    }

    return (
        <FlatList
            data={Productos}
            keyExtractor={item => item.id_producto}
            renderItem={RenderItem}
            numColumns='2'
            style={StyleSheet.containerListItems}
        />
    );
}

export default ListaProductos;

const Styles = StyleSheet.create({
    containerListItems: {
        width: '100%',
    }
});