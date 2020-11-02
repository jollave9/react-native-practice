import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventToday = () => (
    <View style={styles.container}>
        <Text>
            Event Today
        </Text>
    </View >
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EventToday;