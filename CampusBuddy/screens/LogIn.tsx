import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Toast from 'react-native-tiny-toast';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {OpenMap} from '../components/OpenMap';
// import login from '../App';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

import { getDatabase, ref, set, query, get, push, update } from "firebase/database";



export default function LogIn( {navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const showLogIn = () => {
    Toast.show("Logged In!", {position: Toast.position.TOP})
  }
  const showInvalidEmail = () => {
    Toast.show("Please enter a valid email", {position: Toast.position.TOP})
  }  
  const showWrongEmailPassword = () => {
    Toast.show("Incorrect username or password", {position: Toast.position.TOP})
  }


  const login = async () => {
    
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        showLogIn();
        const iconStrings = await OpenMap();
        navigation.navigate("Map", {markerArrays: iconStrings, boolArray: [true, true, true]});
      })
      .catch((error) => {if(error.code == "auth/invalid-email"){showInvalidEmail()} else if (error.code == "auth/wrong-password") {showWrongEmailPassword()} else {alert(error.code)}});
    
    

  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>Enter Email:</Text>
          <TextInput 
            placeholder='Email'
            value={email} 
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <View style={styles.separator}></View>
          <Text style={styles.text}>Enter Password:</Text>
          <TextInput 
            placeholder='Password'
            value={password} 
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          /> 
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              onPress={login}
              style={styles.button}
            >
              <Text>Log In</Text>

            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={styles.button}
            >
              <Text>Home</Text>

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
    width: '60%',
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
