import { Productos } from '../../data/Productos';

const initialState = {
    productos: Productos,
    selected: null
};

const ProductoReducer = (state = initialState, action) => {
    return state;
};

export default ProductoReducer;