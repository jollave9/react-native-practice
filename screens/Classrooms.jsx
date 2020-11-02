import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button } from 'react-native';

const classrooms_in_computerlab = [
    {
        floor: 1,
        room_numbers: [100, 101, 102, 103, 104, 105, 106, 107]
    },
    {
        floor: 2,
        room_numbers: [100, 101, 102, 103, 104, 105, 106, 107]
    },
    {
        floor: 3,
        room_numbers: [300, 301, 302, 303, 304, 305, 306, 307]
    },
]

const Classrooms = () => {

    return (
        <FlatList
            data={classrooms_in_computerlab}
            renderItem={({ item }) => (
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 25 }}>{item.floor}</Text>
                    <FlatList
                        data={item.room_numbers}
                        renderItem={({ item }) => <Button title={item + ''} />}
                        horizontal={true}
                        keyExtractor={(item, index) => `room_number ${index}`}
                    />
                </View>
            )}
            keyExtractor={(item, index) => `floor ${index}`}
        />
    )
}

const styles = StyleSheet.create({

})

export default Classrooms;