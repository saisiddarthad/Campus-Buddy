import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Callout } from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {CustomCallout} from './CustomCallout';


import { getDatabase, ref, set, query, get, push, update } from "firebase/database";


const Stack  = createNativeStackNavigator()
export const Map = (props) => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();

    const icons = props.markerData[0]
    const coords = props.markerData[1]
    const descs = props.markerData[2]
    const names = props.markerData[3]

    const marks = []

    for (var i = 0; i < coords.length; i++) {
      const la = Number(JSON.stringify(coords[i].child("latitude")));
      const lo = Number(JSON.stringify(coords[i].child("longitude")));
      const de = JSON.stringify(descs[i])
      const na = JSON.stringify(names[i])
      marks.push(<Marker coordinate={{latitude: la, longitude: lo}} title={na} description={de} image={require("../assets/images/event_blue.png")}/>)

    }

    const getIcon = (icon) => {
      switch (icon) {
        case "../assets/images/food_orange.png": return require("../assets/images/food_orange.png");
        case "../assets/images/food_green.png": return require("../assets/images/food_green.png");
        case "../assets/images/food_red.png": return require("../assets/images/food_red.png");
        case "../assets/images/parking_orange.png": return require("../assets/images/parking_orange.png");
        case "../assets/images/parking_green.png": return require("../assets/images/parking_green.png");
        case "../assets/images/parking_red.png": return require("../assets/images/parking_red.png");
      }
    }
    let icon1 = getIcon(icons[0]);
    let icon2 = getIcon(icons[1]);
    let icon3 = getIcon(icons[2]);
    let icon4 = getIcon(icons[3]);
    let icon5 = getIcon(icons[4]);
    let icon6 = getIcon(icons[5]);
    let icon7 = getIcon(icons[6]);
    let icon8 = getIcon(icons[7]);
    let icon9 = getIcon(icons[8]);
    let icon10 = getIcon(icons[9]);
    let icon11 = getIcon(icons[10]);
    let icon12 = getIcon(icons[11]);
    let icon13 = getIcon(icons[12]);
    let icon14 = getIcon(icons[13]);
    let icon15 = getIcon(icons[14]);
    let icon16 = getIcon(icons[15]);
    let icon17 = getIcon(icons[16]);
    let icon18 = getIcon(icons[17]);
    let icon19 = getIcon(icons[18]);
    let icon20 = getIcon(icons[19]);
    let icon21 = getIcon(icons[20]);
    let icon22 = getIcon(icons[21]);
    let icon23 = getIcon(icons[22]);
    let icon24 = getIcon(icons[23]);
    let icon25 = getIcon(icons[24]);
    let icon26 = getIcon(icons[25]);
    let icon27 = getIcon(icons[26]);
    let icon28 = getIcon(icons[27]);
    let icon29 = getIcon(icons[28]);
    let icon30 = getIcon(icons[29]);
    let icon31 = getIcon(icons[30]);
    let icon32 = getIcon(icons[31]);
    let icon33 = getIcon(icons[32]);
    let icon34 = getIcon(icons[33]);
    let icon35 = getIcon(icons[34]);

    
    const staticNames = ["Hokie Grill", "Owens Food Court", "Lavery Hall", "West End Market", "D2 Dining Hall", "Squires Student Center", "Lower Lot", "Old Cranwell Lot","Dietrick Lot", "Owens Lot", "Bookstore Lot", "Squires Lot", "Basketball Practice Facility Lot", "Tennis Courts Lot", "Fieldhouse Lot", "Chicken Hill Lot", "Lot 6", "Upper Rec Fields Lot", "Lot 3", "Lot 4", "Lot 2", "Lot 1", "Architecture Annex Lot", "Kent Square Parking Garage", "Lower Stranger Lot", "Perry Street Lot 3", "Prices Fork Lot 5", "Prices Fork Lot 6", "P2 Lot", "Perry Street Lot 1", "Derring Lot", "Lot 13A", "Lot 14", "Litton Reaves Ext Lot", "Lot 8"];
    const db = getDatabase();

    

    return (
      <View style = {styles.container}>
      <MapView 
      style = {styles.map}
      showsUserLocation={true}
      showsCompass={true}
      zoomControlEnabled={true}
      region = {{
        latitude: 37.22838866251515, 
        longitude: -80.4231205423604,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}>
        {props.boolArray[2] && (<>
        {marks}
        </>)}
        {props.boolArray[0] && (<>
        <Marker
            
            coordinate={{latitude: 37.22692,
            longitude: -80.41872}}
            title={"Hokie Grill"}
            image={icon1}
        >
              <Callout tooltip>
              <CustomCallout name={"Hokie Grill"}/>
              </Callout>
        </Marker>
        <Marker
            coordinate={{latitude: 37.22650,
            longitude: -80.41910}}
            title={"Owens Food Court"}
            image={icon2}
        >
              <Callout tooltip>
              <CustomCallout name={"Owens Food Court"}/>
              </Callout>
        </Marker>
        <Marker
            coordinate={{latitude: 37.23098,
            longitude: -80.42271}}
            title={"Lavery Hall"}
            image={icon3}
            >
            <Callout tooltip>
            <CustomCallout name={"Lavery Hall"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22291,
            longitude: -80.42222}}
            title={"West End Market"}
            image={icon4}
            >
            <Callout tooltip>
            <CustomCallout name={"West End Market"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22456,
            longitude: -80.42119}}
            title={"D2 Dining Hall"}
            image={icon5}
            >
            <Callout tooltip>
            <CustomCallout name={"D2 Dining Hall"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22949,
            longitude: -80.41819}}
            title={"Squires Student Center"}
            image={icon6}
            >
            <Callout tooltip>
            <CustomCallout name={"Squires Student Center"}/>
            </Callout>            
        </Marker>
        </>
        )}
        {props.boolArray[1] && (<>
        <Marker
            coordinate={{latitude: 37.21612,
            longitude: -80.41841}}
            title={"Lower Lot"}
            image={icon7}
            >
            <Callout tooltip>
            <CustomCallout name={"Lower Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23037,
            longitude: -80.40732}}
            title={"Old Cranwell Lot"}
            image={icon8}
            >
            <Callout tooltip>
            <CustomCallout name={"Old Cranwell Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22495,
            longitude: -80.42132}}
            title={"Dietrick Lot"}
            image={icon9}
            >
            <Callout tooltip>
            <CustomCallout name={"Dietrick Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22646,
            longitude: -80.41848}}
            title={"Owens Lot"}
            image={icon10}
            >
            <Callout tooltip>
            <CustomCallout name={"Owens Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22791,
            longitude: -80.41818}}
            title={"Bookstore Lot"}
            image={icon11}
            >
            <Callout tooltip>
            <CustomCallout name={"Bookstore Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22921,
            longitude: -80.41683}}
            title={"Squires Lot"}
            image={icon12}
            >
            <Callout tooltip>
            <CustomCallout name={"Squires Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22347,
            longitude: -80.41871}}
            title={"Basketball Practice Facility Lot"}
            image={icon13}
            >
            <Callout tooltip>
            <CustomCallout name={"Basketball Practice Facility Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22393,
            longitude: -80.41776}}
            title={"Tennis Courts Lot"}
            image={icon14}
            >
            <Callout tooltip>
            <CustomCallout name={"Tennis Courts Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21571,
            longitude: -80.41839}}
            title={"Fieldhouse Lot"}
            image={icon15}
            >
            <Callout tooltip>
            <CustomCallout name={"Fieldhouse Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21675,
            longitude: -80.41686}}
            title={"Chicken Hill Lot"}
            image={icon16}
            >
            <Callout tooltip>
            <CustomCallout name={"Chicken Hill Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21484,
            longitude: -80.41806}}
            title={"Lot 6"}
            image={icon17}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 6"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21397,
            longitude: -80.41772}}
            title={"Upper Rec Fields Lot"}
            image={icon18}
            >
            <Callout tooltip>
            <CustomCallout name={"Upper Rec Fields Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21787,
            longitude: -80.41608}}
            title={"Lot 3"}
            image={icon19}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 3"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21809,
            longitude: -80.41984}}
            title={"Lot 4"}
            image={icon20}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 4"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.21845,
            longitude: -80.41880}}
            title={"Lot 2"}
            image={icon21}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 2"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22169,
            longitude: -80.42111}}
            title={"Lot 1"}
            image={icon22}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 1"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22852,
            longitude: -80.41577}}
            title={"Architecture Annex Lot"}
            image={icon23}
            >
            <Callout tooltip>
            <CustomCallout name={"Architecture Annex Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22808,
            longitude: -80.41335}}
            title={"Kent Square Parking Garage"}
            image={icon24}
            >
            <Callout tooltip>
            <CustomCallout name={"Kent Square Parking Garage"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23272,
            longitude: -80.42345}}
            title={"Lower Stranger Lot"}
            image={icon25}
            >
            <Callout tooltip>
            <CustomCallout name={"Lower Stranger Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23159,
            longitude: -80.42638}}
            title={"Perry Street Lot 3"}
            image={icon26}
            >
            <Callout tooltip>
            <CustomCallout name={"Perry Street Lot 3"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23193,
            longitude: -80.42697}}
            title={"Prices Fork Lot 5"}
            image={icon27}
            >
            <Callout tooltip>
            <CustomCallout name={"Prices Fork Lot 5"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23085,
            longitude: -80.42797}}
            title={"Prices Fork Lot 6"}
            image={icon28}
            >
            <Callout tooltip>
            <CustomCallout name={"Prices Fork Lot 6"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23095,
            longitude: -80.42594}}
            title={"P2 Lot"}
            image={icon29}
            >
            <Callout tooltip>
            <CustomCallout name={"P2 Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.23031,
            longitude: -80.42714}}
            title={"Perry Street Lot 1"}
            image={icon30}
            >
            <Callout tooltip>
            <CustomCallout name={"Perry Street Lot 1"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22952,
            longitude: -80.42655}}
            title={"Derring Lot"}
            image={icon31}
            >
            <Callout tooltip>
            <CustomCallout name={"Derring Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22774,
            longitude: -80.42615}}
            title={"Lot 13A"}
            image={icon32}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 13A"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22661,
            longitude: -80.42611}}
            title={"Lot 14"}
            image={icon33}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 14"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22305,
            longitude: -80.42617}}
            title={"Litton Reaves Ext Lot"}
            image={icon34}
            >
            <Callout tooltip>
            <CustomCallout name={"Litton Reaves Ext Lot"}/>
            </Callout>            
        </Marker>
        <Marker
            coordinate={{latitude: 37.22240,
            longitude: -80.42700}}
            title={"Lot 8"}
            image={icon35}
            >
            <Callout tooltip>
            <CustomCallout name={"Lot 8"}/>
            </Callout>            
        </Marker>
        </>)}
      </MapView>
      </View>
    );
  }


  const styles = StyleSheet.create ({
    map_container: {
       
        height:'90%'
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