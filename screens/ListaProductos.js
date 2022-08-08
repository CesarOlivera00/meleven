import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
// Constants
// Components
import ItemCardProducto from '../components/ItemCardProducto';

const ListaProductos = (props) => {
    const Productos = useSelector(store => store.productos.productos);

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
            numColumns={Dimensions.get('window').width < 500 ? '2' : '3'}
            style={Styles.containerListItems}
        />
    );
}

export default ListaProductos;

const Styles = StyleSheet.create({
    containerListItems: {
        width: '100%',
    }
});