import React from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//animation to be fixed

const BottomPopUpSheet = ({ children, isOpen, closeHandler }) => (
    <Modal visible={isOpen} transparent={true} animationType="slide">

        <View style={styles.container}>
            <TouchableOpacity onPress={closeHandler}>
                <View style={styles.closebtn}>
                    <Text style={{ fontWeight: 'bold' }}>
                        X
                </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.sheet}>
                {children}
            </View>
        </View>
    </Modal>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    sheet: {
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    closebtn: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default BottomPopUpSheet;