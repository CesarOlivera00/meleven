import * as FileSystem from "expo-file-system";
import { DB_InsertTienda } from "../../DBHelper";

export const INSERT_TIENDA = "INSERT_TIENDA";
export const UPDATE_TIENDA = "UPDATE_TIENDA";

export const InsertTienda = (nombreTienda, textoProvincia, textoLocalidad, textoCalle, altura, imagen, latitud, longitud) => {
    return async dispatch => {
        const result = await DB_InsertTienda(nombreTienda, textoProvincia, textoLocalidad, textoCalle, altura, imagen, latitud, longitud);
        dispatch({ type: INSERT_TIENDA, payload: { textoProvincia, textoLocalidad, textoCalle, altura, imagen, latitud, longitud } });
    };
};