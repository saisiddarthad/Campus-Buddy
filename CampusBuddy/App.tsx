import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import MapScreen from './screens/MapScreen';

import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
//import Home from './screens/Home';
import ChangePwd from './screens/ChangePwd';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import MarkerPlace from './screens/MarkerPlace';
import { LogBox } from 'react-native';



const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return (
    <View style={[styles.container]}>
      <View style={{ flex: 0.1 }}></View>
      <Text style={[styles.title, { padding: 50 }]}>Welcome to Campus Buddy</Text>
      <Image source={require('./assets/images/turkeylogo.jpg')} style={{ width: 200, height: 200 }} />
      <View style={{ flex: 0.1 }}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#fff' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: '#fff' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

}


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const logout = async () => {

  }




  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer
          onStateChange={(state) => console.log('New state is', state)}
        >
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="MarkerPlace" component={MarkerPlace} />
            <Stack.Screen name="Change Password" component={ChangePwd} />
          </Stack.Navigator>

        </NavigationContainer>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 30,
    width: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  map: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#861F41',
    width: '60%',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  }

})
