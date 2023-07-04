import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    deleteTask
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                    <Pressable
    style={[styles.button, styles.buttonDone]}
    onPress={() => {
        setModalVisible(!modalVisible);
        deleteTask(taskActive.id);
    }}
>
    <Text style={styles.textStyle}>Lista!</Text>
</Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonNotyet]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Falta</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonDone: {
        backgroundColor: "black",
    },
    buttonNotyet: {
        backgroundColor: "grey",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
