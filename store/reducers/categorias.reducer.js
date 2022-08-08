import { Categorias } from '../../data/Categorias';

const initialState = {
    categorias: Categorias,
    selected: null
};

const CategoriaReducer = (state = initialState, action) => {
    return state;
};

export default CategoriaReducer;