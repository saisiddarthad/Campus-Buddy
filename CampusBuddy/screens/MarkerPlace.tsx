import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Callout } from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {auth} from '../firebase'


import { getDatabase, ref, set, query, get, push, update } from "firebase/database";
import { OpenMap } from '../components/OpenMap';

export default function MarkerPlace( {route, navigation}) {
    const {name, description, boolArray} = route.params;
    const CustomMarker = async (coord) => {
        const db = getDatabase();
        const markerRef = ref(db, 'markers');
        const userRef = ref(db, 'users/' + auth.currentUser?.uid + '/markers') 
    
        const key = await push(markerRef, {"coordinates": coord, "name": name, "description": description});
        push(userRef, key.key)
    
        
    
        console.log("high pressed!");
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
    return (
        <View style = {{width:'100%', height:'100%'}}>
            <View style = {styles.top_container}>
                <Text style={{color: 'white', fontSize:17}}>Click to place your marker</Text>
            </View>
            <View style = {styles.container}>
                <MapView 
                style = {styles.map}
                showsUserLocation={true}
                showsCompass={true}
                zoomControlEnabled={true}
                onPress={async e => {await CustomMarker(e.nativeEvent.coordinate), navigation.navigate("Map", { markerArrays: await OpenMap(), boolArray: boolArray})}}
                region = {{
                latitude: 37.22838866251515, 
                longitude: -80.4231205423604,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
                }}>

                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    map_container: {
       
        height:'90%'
    },
    top_container: {
        alignSelf: 'stretch',
        
        height: '10%',
        flexDirection: 'row', //
        backgroundColor: '#E87722',
        alignItems: 'center',
        justifyContent: 'center', 
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: '10%'
    },
    map: {
      flex:1
    },
    container: {
      flex: 1,
      backgroundColor: '#f7f9f8'
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 15,
      height: 1,
      width: '80%',
    },
    text: {
      fontSize: 12,
      color: '#000'
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      backgroundColor: '#f7f9f8',
      padding: '2%',
      margin: 10,
      width: 200,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#f7f9f8',
      marginTop: 0,
      padding: 0,
    },
    button: {
      backgroundColor: '#861F41',
      width: '60%',
      padding: '5%',
      borderRadius: 15,
      marginTop: 1,
      marginHorizontal: 1
    }
    
})