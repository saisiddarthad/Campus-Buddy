import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import login from '../App';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {Map} from '../components/Map';
import {TopBar} from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import navigation from '../navigation';

export default function MapScreen( {route, navigation}) {
    const {markerArrays, boolArray} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
    return (
        <View style = {{width:'100%', height:'100%'}}>

            <TopBar navigation={navigation} />
            <Map markerData={markerArrays} boolArray={boolArray}/>
            <BottomBar navigation={navigation} boolArray={boolArray}/>

        </View>
    );

} 