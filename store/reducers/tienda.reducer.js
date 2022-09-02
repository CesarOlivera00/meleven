import { Productos } from '../../Data/Productos';
import { INSERT_TIENDA, UPDATE_TIENDA } from '../actions/tienda.action';

const initialState = {
    tienda: {}
};

const TiendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_TIENDA:
            const tienda = {
                ...action.payload
            };

            return {
                tienda: tienda
            }
        case UPDATE_TIENDA:
            return state;
        default:
            return state;
    }
};

export default TiendaReducer;