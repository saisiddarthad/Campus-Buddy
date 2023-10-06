import * as React from 'react';
import { Button, Alert, StyleSheet, Modal, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements'
import { useState } from 'react';
import { OpenMap } from './OpenMap';
import { withNavigation } from 'react-navigation';
import { Menu, Divider, Provider } from 'react-native-paper';


export const TopBar = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false)
  const [visible, setVisible2] = useState(false);
  const [checked, setChecked] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)

 
    return (
      <View style={styles.container}>
        <Modal            
          animationType = {"fade"}  
          transparent = {true}  
          visible = {isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
          <View style = {styles.modal}> 
          <Text style = {styles.title}>Filter Icons</Text>
          <CheckBox
              title='Dining Hall Icons'
              checked={checked}
              onPress={() => setChecked(!checked)}
              />
          <CheckBox
              title='Parking Icons'
              checked={checked2}
              onPress={() => setChecked2(!checked2)}
              />
          <CheckBox
              title='Event Icons'
              checked={checked3}
              onPress={() => setChecked3(!checked3)}
              />
          <TouchableOpacity 
              style={styles.button} onPress={async () => {setVisible(false); navigation.navigate("Map", { markerArrays: await OpenMap(), boolArray: [checked, checked2, checked3]})}}>
              <Text style={styles.text}>Filter Map</Text>
              
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <Button title="Return to Map" onPress={() => {
            setVisible(!isVisible)
          }} />
        </View>
      </Modal>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={visible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
        {/*All views of Modal*/}
        <View style={styles.modal2}>
          <View style={{ alignItems: "center", justifyContent: 'space-between', flexDirection: 'row' }}><Icon onPress={() => {setVisible2(false); navigation.navigate('Change Password')}} name="setting" size={38} color="black" /><Text onPress={() => {setVisible2(false); navigation.navigate('Change Password')}} style={{ color: 'black', fontSize: 17, textAlign: 'center' }}>Settings</Text></View>
          <View style={styles.separator}/>
          <View style={{ alignItems: "center", justifyContent: 'space-between', flexDirection: 'row' }}><Icon onPress={() => navigation.navigate('Home')} name="home" size={38} color="black" /><Text onPress={() => navigation.navigate('Home')} style={{ color: 'black', fontSize: 17, textAlign: 'center' }}>Sign Out</Text></View>
          <View style={styles.separator}/>
          <Button title="Return to Map" onPress={() => setVisible2(!visible)} />
        </View>
      </Modal>
      <Icon name="ellipsis1" size={38} color="white" onPress={() => setVisible2(true)} />
      <Text style={{ color: 'white', fontSize: 17 }}>Campus Buddy</Text>
      <Icon name="filter" size={38} color="white" onPress={() => setVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',

    height: '10%',
    flexDirection: 'row', //
    backgroundColor: '#E87722',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: '10%'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    height: '70%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 120,
    marginLeft: 40,

  },
  modal2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    height: '50%',
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 200,
    marginLeft: 60,

  },
  title: {
    color: 'maroon',
    fontSize: 36,
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#f7f9f8',
    padding: '2%',
    margin: 10,
    width: 200,
  },
  button: {
    backgroundColor: '#861F41',
    width: '60%',
    padding: '5%',
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 10
  }
});

