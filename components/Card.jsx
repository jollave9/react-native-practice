import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// overriding styles not yet available
// margin to be removed
// styles to be changed to base figma

const Card = ({ children, handlePress, type }) => (
    <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress(type)}>
        <View style={styles.cardShadow}>
            <View style={styles.cardContainer}>
                {children}
            </View>
        </View>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    cardShadow: {
        margin: 10,
        width: 250,
        height: 250,
        borderRadius: 15,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardContainer: {
        overflow: "hidden",
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 15
    },
});
export default Card;