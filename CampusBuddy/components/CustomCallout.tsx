import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getDatabase, ref, set, query, get, push, update, remove} from "firebase/database";


export const CustomCallout = (props) => {
  const [color, setColor] = useState('white');
  const [text, setText] = useState('Empty');
  setBGColor(props.name)
  //setColor();
  const [redClicked, setRed] = useState('#ff5757');
  const [orangeClicked, setOrange] = useState('#ffbd59');
  const [yellowClicked, setYellow] = useState('#7ed957');
  const [currClicked, setCurr] = useState('none');
  
  function setBGColor(name) {
    var avg = 0;
    getAvg(name).then((value) => {
      avg = value; // 👉️ "hello world"
      console.log(avg)
      if (avg < 1.66){
        setColor('#7ed957');
        setText('Empty');
      }
      else if (avg < 2.33){
        setColor('#ffbd59');
        setText('Medium');
      }
      else{
        setColor('#ff5757');
        setText('Crowded');
      }

    });
    
  }
  async function getAvg(name) {
    const db = getDatabase();
    const avgRef = ref(db, 'static_markers/' + name + '/avg');
    const avgQuery = await get(avgRef);
    const avg = avgQuery.val();
    //console.log(avg);
    return avg;
  }
  async function high(name) {
      if(currClicked != 'red'){
        const db = getDatabase();
        const markerRef = ref(db, 'static_markers/' + name);
        const queueRef = ref(db, 'static_markers/' + name + '/queue');
    
        const queueLenRef = ref(db, 'static_markers/' + name + '/queue/length');
        const lengthQuery = await get(queueLenRef);
        var length = lengthQuery.val();
    
        const totalRef = ref(db, 'static_markers/' + name + '/total');
        const totalQuery = await get(totalRef);
        var total = totalQuery.val();
        
        

        push(queueRef, {"rating": 3, "priority": length});
        
        //Handle queue that is longer than 30 entries: Should kick out the lowest priority items
        if (length>=30){
          const indexes = length-30;
          const queueQuery = await get(queueRef);
          queueQuery.forEach((value) => {
            const prior = value.child("priority").val();
            const val = value.child("rating").val();
            if(prior <= indexes){
              total = total-val;
              remove(value.ref);
              length = length-1;
            }
            else{
              update(value.ref, {priority: prior-indexes})
            }
          })
        }

        update(queueRef, {length: length+1});
        const average = (total+3)/(length+1);
        update(markerRef, {total: total+3, avg: average});
        //handle graying out affect, currClicked is the current choice clicked
        if(currClicked == 'none'){
          setCurr('red');
          setRed('grey');
        }
        else if(currClicked == 'orange'){
          setCurr('red');
          setRed('grey');
          setOrange('#ffbd59')
        }
        else if(currClicked == 'yellow'){
          setCurr('red');
          setRed('grey');
          setYellow('#7ed957')
        }
        if (average < 1.66){
          setColor('#7ed957');
        }
        else if (average < 2.33){
          setColor('#ffbd59');
        }
        else{
          setColor('#7ed957');
        }
        console.log("high pressed!");
      }
  }
  async function med(name) {
      if(currClicked != 'orange'){
        const db = getDatabase();
        const markerRef = ref(db, 'static_markers/' + name);
        const queueRef = ref(db, 'static_markers/' + name + '/queue');
    
        const queueLenRef = ref(db, 'static_markers/' + name + '/queue/length');
        const lengthQuery = await get(queueLenRef);
        var length = lengthQuery.val();
    
        const totalRef = ref(db, 'static_markers/' + name + '/total');
        const totalQuery = await get(totalRef);
        var total = totalQuery.val();
        
    
        push(queueRef, {"rating": 2, "priority": length});
        
        //Handle queue that is longer than 30 entries: Should kick out the lowest priority items
        if (length>=30){
          const indexes = length-30;
          const queueQuery = await get(queueRef);
          queueQuery.forEach((value) => {
            const prior = value.child("priority").val();
            const val = value.child("rating").val();
            if(prior <= indexes){
              total = total-val;
              remove(value.ref);
              length = length-1;
            }
            else{
              update(value.ref, {priority: prior-indexes})
            }
          })
        }

        update(queueRef, {length: length+1});
        const average = (total+2)/(length+1);
        update(markerRef, {total: total+2, avg: average});
        //handle graying out affect, currClicked is the current choice clicked
        if(currClicked == 'none'){
          setCurr('orange');
          setOrange('grey');
        }
        else if(currClicked == 'red'){
          setCurr('orange');
          setOrange('grey');
          setRed('#ff5757')
        }
        else if(currClicked == 'yellow'){
          setCurr('orange');
          setOrange('grey');
          setYellow('#7ed957')
        }
        if (average < 1.66){
          setColor('#7ed957');
        }
        else if (average < 2.33){
          setColor('#ffbd59');
        }
        else{
          setColor('#ff5757');
        }
        console.log("med pressed!")
      }
  }
  async function low(name) {
    if(currClicked!='yellow'){
      const db = getDatabase();
      const markerRef = ref(db, 'static_markers/' + name);
      const queueRef = ref(db, 'static_markers/' + name + '/queue');
  
      const queueLenRef = ref(db, 'static_markers/' + name + '/queue/length');
      const lengthQuery = await get(queueLenRef);
      var length = lengthQuery.val();
  
      const totalRef = ref(db, 'static_markers/' + name + '/total');
      const totalQuery = await get(totalRef);
      var total = totalQuery.val();
      
  
      push(queueRef, {"rating": 1, "priority": length});
      
      //Handle queue that is longer than 30 entries: Should kick out the lowest priority items
      if (length>=30){
        const indexes = length-30;
        const queueQuery = await get(queueRef);
        queueQuery.forEach((value) => {
          const prior = value.child("priority").val();
          const val = value.child("rating").val();
          // total = 0
          // remove(value.ref);
          // length = 0
          if(prior <= indexes){
            total = total-val;
            remove(value.ref);
            length = length-1;
          }
          else{
            update(value.ref, {priority: prior-indexes})
          }
        })
      }

      update(queueRef, {length: length+1});
      const average = (total+1)/(length+1)
      update(markerRef, {total: total+1, avg: average});

      //handle graying out affect, currClicked is the current choice clicked
      if(currClicked == 'none'){
        setCurr('yellow');
        setYellow('grey');
      }
      else if(currClicked == 'red'){
        setCurr('yellow');
        setYellow('grey');
        setRed('#ff5757')
      }
      else if(currClicked == 'orange'){
        setCurr('yellow');
        setYellow('grey');
        setOrange('#ffbd59')
      }
      if (average < 1.66){
        setColor('#7ed957');
      }
      else if (average < 2.33){
        setColor('#ffbd59');
      }
      else{
        setColor('#ff5757');
      }
      console.log("low pressed!")
    }
  }
  
    return ( 
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={[styles.text, {alignSelf:'center'}]}>Give a rating:</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => high(props.name)}
              style={[styles.button, {backgroundColor: redClicked}]}
            >
              <Text style={styles.buttonText}>Crowded</Text>
    
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => med(props.name)}
              style={[styles.button, {backgroundColor: orangeClicked}]}
            >
              <Text style={styles.buttonText}>Medium</Text>
    
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => low(props.name)}
              style={[styles.button, {backgroundColor: yellowClicked}]}
            >
              <Text style={styles.buttonText}>Empty</Text>
    
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, {alignSelf:'center', paddingTop:10}]}>Current Rating:</Text>
          <View 
            style={[styles.button, {backgroundColor: color, alignSelf: 'center'}]}
          >
            <Text style={styles.buttonText}>{text}</Text>
    
          </View>
        </View>
        <View style={styles.arrowBorder}/>
        <View style={styles.arrow}/>
      </View>
    )
}
const styles = StyleSheet.create ({
  
  container: {
    padding: 20,
    backgroundColor: '#f7f9f8',
    borderRadius: 10,
  },
  arrow: {
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderTopColor: '#f7f9f8',
    borderWidth: 16,
    alignSelf:'center',
    marginTop:-32
  },
  arrowBorder: {
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf:'center',
    marginTop:-.5
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
    fontSize: 14,
    color: '#000',
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
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 0,
    
  },
  button: {
    //backgroundColor: '#861F41',
    width: '80%%',
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 0,
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 12,
    color: '#f7f9f8',
  }
  
})