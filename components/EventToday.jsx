import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import dummydata from '../dummydata'
import Event from './Event'

const EventToday = () => {
    const [data, setEvent] = useState(dummydata)

    const events = (data) => {
        let arr = []
        data && data.map(section => {
            section.room_types.map(room => {
                room.events && room.events.map(event => {
                    arr.push(event)
                })
            })
        })
        return arr
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={events(data)}
                renderItem={({ item }) => <Event event={item.event} reservedBy={item.reservedBy} time={item.time} />}
                keyExtractor={(item, index) => `event ${index}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})

export default EventToday;