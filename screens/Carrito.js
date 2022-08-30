import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
// Data
import { Cart } from '../Data/Cart';
// Constants
// Components
import ItemCartProducto from '../Components/ItemCartProducto';

const Carrito = (props) => {
    const RenderItem = ({ item }) => {
        return <ItemCartProducto item={item} />
    }

    return (
        <View style={Styles.containerListItems}>
            <Text>Carrito</Text>
            <FlatList
                data={Cart}
                keyExtractor={item => item.id_producto}
                renderItem={RenderItem}
                numColumns="1"
            />
        </View>
    );
}

export default Carrito;

const Styles = StyleSheet.create({
    containerListItems: {
        width: '100%',
    }
});