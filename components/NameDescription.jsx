import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameDescription = ({ name, desc }) => (
    <View style={styles.container}>
        <Text style={styles.title}>
            {name}
        </Text>
        <Text style={styles.description}>
            {desc}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    description: {
        color: 'rgba(0,0,0,0.5)'
    },
})

export default NameDescription;