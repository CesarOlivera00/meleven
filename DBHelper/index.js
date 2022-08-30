import { SQLite } from "expo-sqlite";

const db = SQLite.openDatabase("address.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `create table if not exists direccion (
                    id integer primary key not null,
                    texto_provincia text not null,
                    texto_localidad text not null,
                    texto_calle text not null,
                    altura integer not null,
                    imagen text not null,
                    latitud real not null,
                    longitud real not null
                )`,
                [],
                () => { resolve(); },
                (_, err) => { reject(err); }
            );
        });
    });

    return promise;
}

export const insertAddress = (textoProvincia, textoLocalidad, textoCalle, altura, imagen, latitud, longitud) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((cmd) => {
            cmd.executeSql("insert into direccion (texto_provincia, texto_localidad, texto_calle, altura, imagen, latitud, longitud) values (?, ?, ?, ?, ?, ?, ?);",
                [textoProvincia, textoLocalidad, textoCalle, altura, imagen, latitud, longitud],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
}