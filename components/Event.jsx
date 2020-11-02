import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Event = ({ event, reservedBy, time }) => (
    <View style={styles.container}>
        <View style={styles.event_reservedby} >
            <Text style={styles.event}>
                {event}
            </Text>
            <Text style={styles.reservedBy}>
                {reservedBy}
            </Text>
        </View>
        <View style={styles.time}>
            <Text>
                {time}
            </Text>

        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row'
    },
    event_reservedby: {
        // flex: 1
    },
    event: {
        fontWeight: 'bold',
        fontSize: 15
    },
    reservedBy: {
        color: 'rgba(0,0,0,0.5)'
    },
    time: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Event;
