import { Categorias } from '../../data/Categorias';
import { SELECT_CATEGORIA } from '../actions/categorias.action';

const initialState = {
    categorias: Categorias,
    selected: null
};

const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORIA:
            const IndexCategoria = state.categorias.findIndex(c => c.id == action.id_categoria);
            
            if (IndexCategoria == -1) return state;

            return {...state, selected: state.categorias[IndexCategoria]};
        default:
            return state;
    }
    
};

export default CategoriaReducer;