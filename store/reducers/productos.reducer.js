import { Productos } from '../../Data/Productos';
import { SELECT_PRODUCTO, FILTERED_PRODUCTO } from '../actions/productos.action';

const initialState = {
    productos: Productos,
    filteredProductos: [],
    selected: null
};

const ProductoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCTO:
            return {
                ...state,
                selected: state.productos.find(d => d.id_producto == action.id_producto)
            }
        case FILTERED_PRODUCTO:
            return {
                ...state,
                filteredProductos: state.productos.filter(d => d.id_categoria == action.id_categoria)
            }
        default:
            return state;
    }
};

export default ProductoReducer;