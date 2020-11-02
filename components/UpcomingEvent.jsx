import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Upcoming = () => (
    <View style={styles.container}>
        <Text>
            Upcoming Event
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Upcoming;
