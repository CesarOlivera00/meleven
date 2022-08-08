import { createStore, combineReducers } from "redux";

//Reducers
import CategoriaReducer from "./reducers/categorias.reducer";
import ProductoReducer from "./reducers/productos.reducer";

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    productos: ProductoReducer
});

export default createStore(RootReducer);