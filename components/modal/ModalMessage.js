import { StyleSheet, Modal, View, Text, Button } from 'react-native'

const ModalMessage = (props) => {
    const { modalVisible, title, message, onHandlerModalAccept, onHandlerModalCancel } = props;
    var buttonCancel = true;

    if (onHandlerModalCancel == null) buttonCancel = false;

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View style={Styles.modalBack}>
                <View style={Styles.modal}>
                    <View>
                        <Text style={Styles.modalTextTitle}>{title}</Text>
                    </View>
                    <View style={Styles.modalBody}>
                        <Text>{message}</Text>
                    </View>
                    <View style={Styles.modalButton}>
                        {
                            buttonCancel ? <Button title='Cancelar' onPress={() => {onHandlerModalCancel()}}></Button> : null
                        }
                        <Button title='Aceptar' onPress={() => {onHandlerModalAccept(true)}}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalMessage;

const Styles = StyleSheet.create({
    modalBack: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: "white",
        width: 320,
        padding: 10,
        borderRadius: 10
    },
    modalTextTitle: {
        fontSize: 18
    },
    modalBody: {
        margin: 10
    },
    modalButton: {
        marginTop: 5
    }
});