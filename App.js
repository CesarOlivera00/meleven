import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [item, SetItem] = useState('');
    const [itemList, SetItemList] = useState([]);
    const [modalVisible, SetModalVisible] = useState(false);
    const [itemSelected, SetItemSelected] = useState({});

    const OnHandlerChangeItem = (text) => SetItem(text);

    const OnHanlderAddItem = () => {
        SetItemList(currentItems => [...currentItems, { id: itemList.length + 1, value: item }]);
    }

    const OnHandlerDeleteItem = id => {
        SetItemList(currentItems => currentItems.filter(item => item.id !== id));
        SetItemSelected({});
        SetModalVisible(!modalVisible);
    }

    const OnHandlerModal = id => {
        SetItemSelected(itemList.find(item => item.id === id));
        SetModalVisible(!modalVisible);
    }

    return (
        <View style={Styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={Styles.modalBack}>
                    <View style={Styles.modal}>
                        <View>
                            <Text style={Styles.modalTextTitle}>Mi Modal</Text>
                        </View>
                        <View style={Styles.modalBody}>
                            <Text>¿Está seguro que desea borrar este Item?</Text>
                            <Text>"{itemSelected.value}"</Text>
                        </View>
                        <View style={Styles.modalButton}>
                            <Button title='Confirmar' onPress={() => { OnHandlerDeleteItem(itemSelected.id) }}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={Styles.containerDataEnter}>
                <TextInput placeholder='Texto Item' style={Styles.inputTextItem}
                    onChangeText={OnHandlerChangeItem}
                />
            </View>
            <TouchableOpacity style={Styles.buttonEnter} onPress={OnHanlderAddItem} ><Text style={{color: '#FFFFFF'}}>Agregar</Text></TouchableOpacity>
            <FlatList
                style={Styles.containerListItem}
                data={itemList}
                renderItem={
                    data => (
                        <TouchableOpacity style={Styles.item} onPress={() => {OnHandlerModal(data.item.id)}}>
                            <View>
                                <Text>Id: {data.item.id}, Value: "{data.item.value}"</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%',
        marginTop: 50
    },
    containerDataEnter: {
        textAlign: 'left'  
    },
    inputTextItem: {
        marginBottom: 10,
        width: 300,
        height: 50,
        paddingLeft: 10,
        borderColor: '#D5DBDB',
        borderRadius: 15,
        borderWidth: 2
    },
    buttonEnter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        backgroundColor: '#16A085',
        borderColor: '#138D75',
        borderRadius: 20,
        borderWidth: 2
    },
    containerListItem: {
        marginTop: 20
    },
    item: {
        width: 300,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 10
    },
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