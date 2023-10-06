import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Home({navigation}) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        

      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
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
    backgroundColor: '#F0F8FF',
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  }
});
