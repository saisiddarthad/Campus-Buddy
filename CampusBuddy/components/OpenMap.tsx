import { getDatabase, ref, set, query, get, push, update } from "firebase/database";
import Toast from 'react-native-tiny-toast';

export const OpenMap = async () => {
    const staticNames = ["Hokie Grill", "Owens Food Court", "Lavery Hall", "West End Market", "D2 Dining Hall", "Squires Student Center", "Lower Lot", "Old Cranwell Lot","Dietrick Lot", "Owens Lot", "Bookstore Lot", "Squires Lot", "Basketball Practice Facility Lot", "Tennis Courts Lot", "Fieldhouse Lot", "Chicken Hill Lot", "Lot 6", "Upper Rec Fields Lot", "Lot 3", "Lot 4", "Lot 2", "Lot 1", "Architecture Annex Lot", "Kent Square Parking Garage", "Lower Stranger Lot", "Perry Street Lot 3", "Prices Fork Lot 5", "Prices Fork Lot 6", "P2 Lot", "Perry Street Lot 1", "Derring Lot", "Lot 13A", "Lot 14", "Litton Reaves Ext Lot", "Lot 8"];
    const db = getDatabase();
    let iconStrings = [];
    let coords = [];
    let descs = [];
    let names = [];

    const userMarkers = async () => {
      const markerRef = ref(db, 'markers');
      const markerQuery = await get(markerRef);
      markerQuery.forEach((value) => {
        coords.push(value.child("coordinates"))
        descs.push( value.child("description"))
        names.push(value.child("name"))
      })
    }
    const diningIcon = async (name) => {
        const markerRef = ref(db, 'static_markers/' + name + '/avg');
        const avgQuery = await get(markerRef);
        const avg = avgQuery.val();
        
        if (avg == null) {
          return "../assets/images/food_orange.png";
        }
        else if (avg < 1.66) {
          return "../assets/images/food_green.png";
        }
        else if (avg < 2.33) {
          return "../assets/images/food_orange.png";
        }
        else {
          return "../assets/images/food_red.png";
        }
    }
    
    const parkingIcon = async (name) => {
        const markerRef = ref(db, 'static_markers/' + name + '/avg');
        const avgQuery = await get(markerRef);
        const avg = avgQuery.val();
        
        if (avg == null) {
            return "../assets/images/parking_orange.png";
        }
        else if (avg < 1.66) {
            return "../assets/images/parking_green.png";
        }
        else if (avg < 2.33) {
            return "../assets/images/parking_orange.png";
        }
        else {
            return "../assets/images/parking_red.png";
        }
    }

    const setAllIcons = async () => {
      
      for (var i = 0; i < 6; i++) {
        await diningIcon(staticNames[i]).then((value) => {
          iconStrings.push(value);
        });
        
      }
      for (var i = 6; i < 35; i++) {
        await parkingIcon(staticNames[i]).then((value) => {
          iconStrings.push(value);
        });
        
      }
      
      // setIcons(iconStrings);
    }
    const toast = Toast.showLoading("Loading Map...", {position: Toast.position.CENTER})
    await userMarkers();
    await setAllIcons();
    Toast.hide(toast);
    return [iconStrings, coords, descs, names];
    
}