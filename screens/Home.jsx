import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList, FlatList } from 'react-native';
import Card from '../components/Card'
import dummydata from '../dummydata'
import BottomPopUpSheet from '../components/BottomPopUpSheet';
import EventToday from '../components/EventToday'
import UpcomingEvent from '../components/UpcomingEvent'
import NameDescripton from '../components/NameDescription'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

// to be separated to different components
// dirty coding from testing

const Home = ({ navigation }) => {

    const [data, setdata] = useState(dummydata)

    const [isModalOpen, setIsModalopen] = useState(false)

    const handlePress = (type) => {
        if (type === 'Case Room')
            setIsModalopen(true)
        else if (type === 'Computer Lab' || type === 'Lecture Room') {
            navigation.navigate('Classrooms')
        }
    }

    return (
        <View style={styles.container}>

            {/* <TextInput placeholder="Search" style={styles.textInput} /> */}

            {/*flatlist inside sectionlist is complicated*/}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 25, marginBottom: 15 }}>{item.building}</Text>
                        <FlatList
                            data={item.room_types}
                            renderItem={({ item }) => (
                                <Card handlePress={handlePress} type={item.name}>
                                    <View style={styles.img}>

                                    </View>
                                    <NameDescripton name={item.name} desc={item.desc} />
                                </Card>
                            )}
                            horizontal={true}
                            keyExtractor={(item, index) => `room_type ${index}`}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => `Building ${index}`}
            />

            <BottomPopUpSheet isOpen={isModalOpen} closeHandler={() => { setIsModalopen(false) }} >
                <NameDescripton name="Case Room" desc="lorem ipsum" />

                <View style={{ flex: 1 }}>
                    <Tab.Navigator>
                        <Tab.Screen name="today" component={EventToday}></Tab.Screen>
                        <Tab.Screen name="upcoming" component={UpcomingEvent}></Tab.Screen>

                    </Tab.Navigator>
                </View>
            </BottomPopUpSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginBottom: 40 // to be fixed flatlist wont reach end
    },
    img: {
        backgroundColor: 'grey',
        flex: 3
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
});

export default Home