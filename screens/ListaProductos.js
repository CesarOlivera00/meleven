import React, { useEffect } from "react";
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// Redux
import { FilteredProducto, SelectProducto } from "../store/actions/productos.action";
// Constants
// Components
import ItemCardProducto from '../components/ItemCardProducto';

const ListaProductos = (props) => {
    const dispatch = useDispatch();
    const Productos = useSelector(store => store.productos.filteredProductos);
    const Categoria = useSelector(store => store.categorias.selected);

    console.log(Categoria);

    useEffect(() => {
        dispatch(FilteredProducto(Categoria.id_categoria));
    }, []);

    function ShowDetailsProducto(id_producto){
        dispatch(SelectProducto(id_producto));
        props.navigation.navigate('DetalleProducto');
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