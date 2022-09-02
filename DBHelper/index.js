import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tienda.db");

export const Init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `create table if not exists tienda (
                    id integer primary key not null,
                    nombre_tienda text not null,
                    altura integer not null,
                    texto_calle text not null,
                    texto_localidad text not null,
                    texto_provincia text not null,
                    codigo_postal text not null,
                    latitud real not null,
                    longitud real not null,
                    imagen text not null
                )`,
                [],
                () => { resolve(); },
                (_, err) => { reject(err); }
            );
        });
    });

    return promise;
}

export const DB_InsertTienda = (nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, latitud, longitud, imagen) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((cmd) => {
            cmd.executeSql("insert into tienda (nombre_tienda, altura, texto_calle, texto_localidad, texto_provincia, codigo_postal, latitud, longitud, imagen) values (?, ?, ?, ?, ?, ?, ?, ?, ?);",
                [nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, latitud, longitud, imagen],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const DB_UpdateTienda = (nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, latitud, longitud, imagen) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((cmd) => {
            cmd.executeSql(
                `update tienda
                set nombre_tienda = ?,
                    altura = ?,
                    texto_calle = ?,
                    texto_localidad = ?,
                    texto_provincia = ?,
                    codigo_postal = ?,
                    latitud = ?,
                    longitud = ?,
                    imagen = ?
                where id = 1`,
                [nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, latitud, longitud, imagen],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const DB_GetTienda = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((cmd) => {
            cmd.executeSql("select * from tienda",
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}