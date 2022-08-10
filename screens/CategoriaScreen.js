import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ImageBackground, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
// Redux
import { SelectCategoria } from "../store/actions/categorias.action";
import { FilteredProducto, SelectProducto } from "../store/actions/productos.action";
// Data
// Fonts
import Fonts from "../constants/fonts";

const CategoriaScreen = (props) => {
    const dispatch = useDispatch();
    const Categorias = useSelector(store => store.categorias.categorias);

    const OnSelectCategoria = (id) => {
        dispatch(SelectCategoria(id));
        props.navigation.navigate("ListaProductos");
    }

    return (
        <ScrollView>
            <View style={Styles.containerListCategories}>
                {
                    Categorias.map(function(c) {
                        return (
                            <View style={Styles.wrapperCategoria} key={c.id_categoria}>
                                <TouchableOpacity style={Styles.buttonCategoria} onPress={() => { OnSelectCategoria(c.id_categoria); }}>
                                    <ImageBackground source={c.backgroundImage} resizeMode="cover" style={Styles.imageBackgroundCategory} imageStyle={{ borderRadius: 20}}>
                                        <View style={Styles.wrapperTextCategory}>
                                            <Text style={Styles.textCategoria}>{c.texto_categoria}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

export default CategoriaScreen;

const Styles = StyleSheet.create({
    containerListCategories: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    wrapperCategoria: {
        display: "flex",
        width: "50%",
        height: 320,
        padding: 10,
        paddingBottom: 20,
        paddingTop: 20
    },
    buttonCategoria: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    imageBackgroundCategory: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    wrapperTextCategory: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 20
    },
    textCategoria: {
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: Fonts.fmMedium,
        fontSize: 16
    }
});