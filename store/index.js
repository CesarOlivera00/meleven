import { createStore, combineReducers } from "redux";

//Reducers
import CategoriaReducer from "./reducers/categorias.reducer";
import ProductoReducer from "./reducers/productos.reducer";
import TiendaReducer from "./reducers/tienda.reducer";

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    productos: ProductoReducer,
    tienda: TiendaReducer
});

export default createStore(RootReducer);