import React, {useState} from 'react'
import { Button, StyleSheet, Text, View, Modal, TextInput, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { OpenMap } from './OpenMap';

export const BottomBar = ({navigation, boolArray}) => {
   const [isVisible, setVisible] = useState(false)
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')

      return (
        <View style={styles.container}>
           <Modal            
          animationType = {"fade"}  
          transparent = {true}  
          visible = {isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <Text style = {styles.title}>Create Event</Text>
              <View style={styles.separator}></View>
              <Text style={styles.text}>Event Name</Text>
              <TextInput 
                placeholder='Event Name'
                style={styles.input}
                value={name} 
                onChangeText={text => setName(text)}
              />
              <Text style={styles.text}>Description</Text>
              <TextInput 
                placeholder='Description'
                style={styles.input}
                value={description} 
                onChangeText={text => setDescription(text)}
              />
              <TouchableOpacity 
              style={styles.button}
              onPress={() => {setVisible(!isVisible); navigation.navigate('MarkerPlace', {name: name, description: description, boolArray: boolArray})}}>
              <Text style={styles.text}>Create Event</Text>
              </TouchableOpacity>
              <View style={styles.separator}></View>   
              <Button title="Return to Map" onPress = {() => setVisible(!isVisible)}/>  
          </View>  
        </Modal>  
            <Button title="Create Icon" color = "white" onPress={() => setVisible(true)}/>
            <Icon name = "reload1" size = {38} color="white" onPress={async () => navigation.navigate("Map", { markerArrays: await OpenMap(), boolArray: boolArray})}/>
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
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: '2%'
    },
    modal: {  
      justifyContent: 'center',  
      alignItems: 'center',   
      backgroundColor : "white",   
      height: '70%',  
      width: '80%',  
      borderRadius:10,  
      borderWidth: 1,  
      borderColor: '#fff',    
      marginTop: 120,  
      marginLeft: 40,  
       
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
      button: {
        backgroundColor: '#861F41',
        width: '60%',
        padding: '5%',
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 10
      } 
  });
  
  export default BottomBar;