import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-tiny-toast';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { OpenMap } from '../components/OpenMap';
// import login from '../App';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updatePassword } from 'firebase/auth'
import { auth } from '../firebase'

import { getDatabase, ref, set, query, get, push, update } from "firebase/database";



export default function ChangePwd({ navigation }) {
    const [password, setPassword] = useState('')
    const ChangePwd = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        updatePassword(user, password).then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
            Toast.show("Unable to change Password", { position: Toast.position.TOP })
        });
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.text}>Enter New Password:</Text>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            onPress={ChangePwd}
                            style={styles.button}
                        >
                            <Text>Change Password</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={{flex: 0.1}}></View> */}
            </TouchableWithoutFeedback>


        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 18,
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
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#f7f9f8',
        marginTop: 0,
        padding: '10%',
    },
    button: {
        backgroundColor: '#861F41',
        width: '60%',
        padding: '10%',
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10
    }
});
