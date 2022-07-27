import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
//Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
//Components
import IconButton from './formControls/IconButton';

const HeaderMain = () => {
    const menuIconSize = 20;

    return (
        <View style={Styles.containerHeader}>
            <View style={Styles.wrapperIconLeft}>
                <IconButton iconName="Bars" iconWidth={menuIconSize} iconFill="#fff" style={Styles.buttonMenuLeft}/>
            </View>
            <Text style={Styles.logoHeader}>MEleven</Text>
            <View style={Styles.wrapperIconRight}>
                <IconButton iconName="MagnifyingGlass" iconWidth={menuIconSize} iconFill="#fff" style={Styles.buttonMenuRight}/>
                <IconButton iconName="CartShopping" iconWidth={menuIconSize} iconFill="#fff" style={Styles.buttonMenuRight}/>
            </View>
        </View>
    );
}

export default HeaderMain;

const Styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.colorPrimary,
        paddingTop: 45,
        paddingBottom: 15
    },
    wrapperIconLeft: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 80
    },
    buttonMenuLeft: {
        paddingLeft: 15
    },
    logoHeader: {
        color: "#fff",
        fontSize: 30,
        fontFamily: Fonts.fmMedium
    },
    wrapperIconRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 80,
    },
    buttonMenuRight: {
        paddingRight: 15,
    },
});