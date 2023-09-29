import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ModalComponent from './modal';

const data = [
  {
    latitude: 22.574405099713175,
    longitude: 88.36485897173122,
  },
  {
    //arrays of objects of diffrenet locations of kolkata with its latitude and longiturde to detect map
    latitude: 22.588998609861196,
    longitude: 88.40768066376296,
  },
  {
    latitude: 22.58423230649882,
    longitude: 88.34116970178623,
  },
  {
    latitude: 22.61018052630663,
    longitude: 88.39880140174022,
  },
  {
    latitude: 22.58028126313371,
    longitude: 88.41463294950768,
  },
  {
    latitude: 22.561273226000957,
    longitude: 88.45543813913777,
  },
  {
    latitude: 22.58335353281421,
    longitude: 88.45111934230165,
  },
  {
    latitude: 23.541347010490483,
    longitude: 87.31802897781613,
  },
  {
    latitude: 23.52263958527907,
    longitude: 88.38814255056002,
  },
  {
    latitude: 22.562428995272825,
    longitude: 88.35301641365585,
  },
  {
    latitude: 22.565855586153294,
    longitude: 88.34947263457441,
  },
  {
    latitude: 22.586959020187674,
    longitude: 88.34982281416688,
  },
];
const Maps = () => {
  const [isClicked, setIsClicked] = useState(false); //se state for when the location icon will be touched in a screen it will be called and an alert message will be displayed
  const [modalVisible, setModalVisible] = useState(false);

  const MessageDisplay = () => {
    //Alert.alert('Marker Clicked', 'Location Tracking started');
    <ModalComponent
      isVisible={modalVisible}
      closeModal={() => setModalVisible(false)}
      selectedItem={selectedId}
      data={data}
    />;
  };
  //a component name messageDisplay is been made to display an alert when the location icon will be pressed
  return (
    <View style={styles.Container}>
      <MapView
        style={styles.maplen}
        initialRegion={{
          // initial location details is mentioned to first display initial location
          latitude: 22.574405099713175,
          longitude: 88.36485897173122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421, // for zooming of locations can be added according to need 0.1,0.5
        }}>
        {data.map((item, index) => (
          <Marker
            key={index} //here each item will need a key so each item do have an index property in it so according to index each items one by one will be displayed where a c
            coordinate={item} //a condition has been specified when the marker will be pressed the alert message will be displayed
            onPress={() => {
              setIsClicked(true);
              MessageDisplay();
            }}>
            <View>
              <Image
                source={require('./assets/car.png')}
                style={styles.marker}
              />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  maplen: {
    height: '100%',
    width: '100%',
  },
  marker: {
    height: 50,
    width: 50,
  },
});
///////////////////////////////////////
import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ModalComponent from './modal';

const data = [
  {
    latitude: 22.574405099713175,
    longitude: 88.36485897173122,
  },
  {
    //arrays of objects of diffrenet locations of kolkata with its latitude and longiturde to detect map
    latitude: 22.588998609861196,
    longitude: 88.40768066376296,
  },
  {
    latitude: 22.58423230649882,
    longitude: 88.34116970178623,
  },
  {
    latitude: 22.61018052630663,
    longitude: 88.39880140174022,
  },
  {
    latitude: 22.58028126313371,
    longitude: 88.41463294950768,
  },
  {
    latitude: 22.561273226000957,
    longitude: 88.45543813913777,
  },
  {
    latitude: 22.58335353281421,
    longitude: 88.45111934230165,
  },
  {
    latitude: 23.541347010490483,
    longitude: 87.31802897781613,
  },
  {
    latitude: 23.52263958527907,
    longitude: 88.38814255056002,
  },
  {
    latitude: 22.562428995272825,
    longitude: 88.35301641365585,
  },
  {
    latitude: 22.565855586153294,
    longitude: 88.34947263457441,
  },
  {
    latitude: 22.586959020187674,
    longitude: 88.34982281416688,
  },
];
const Maps = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  {
    /*const MessageDisplay = () => {
    Alert.alert('Marker Clicked', 'Location Tracking started');
  };*/
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 22.574405099713175,
          longitude: 88.36485897173122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={item}
            onPress={() => {
              toggleModal();
              // MessageDisplay();
            }}>
            <View>
              <Image
                source={require('./assets/car.png')}
                style={styles.marker}
              />
            </View>
          </Marker>
        ))}
      </MapView>

      <ModalComponent isVisible={isModalVisible} closeModal={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  marker: {
    height: 50,
    width: 50,
  },
});

export default Maps;
const Maps = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationdata, setLocationData] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onMarkerPress = location => {
    console.log(location);
    //setSelectedLocation(location);
    toggleModal();
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=22.574405099713175,88.36485897173122&sensor=true&key=AIzaSyDMnAqLlONxUIhn7VGthirwrULrRLemsxQ
    //let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&sensor=true&key=AIzaSyDMnAqLlONxUIhn7VGthirwrULrRLemsxQ`;

    // Fetch data from the server using Axios
    //useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&sensor=true&key=AIzaSyDMnAqLlONxUIhn7VGthirwrULrRLemsxQ`,
      )
      .then(response => {
        console.log('data', response);
        setLocationData(response.results);
      }) //in this we fetched data from an api where we will display the posts data in a response if the api call will,be successful
      .catch(error => {
        console.error('Error fetching posts:', error); //else if an error will be caught then it will show error
      });

    // Fetch tags data here if needed, similar to how posts are fetched
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 22.574405099713175,
          longitude: 88.36485897173122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={item}
            onPress={() => onMarkerPress(item)}>
            <View>
              <Image
                source={require('./assets/car.png')}
                style={styles.marker}
              />
            </View>
          </Marker>
        ))}
      </MapView>

      <ModalComponent isVisible={isModalVisible} closeModal={toggleModal}>
        {selectedLocation && (
          <View>
            <Text>Latitude: {selectedLocation.latitude}</Text>
            <Text>Longitude: {selectedLocation.longitude}</Text>
          </View>
        )}
      </ModalComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  marker: {
    height: 50,
    width: 50,
  },
});

export default Maps;
/////////////////
import {View, StyleSheet, Image, Alert, Text} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import CustomModal from './modal';
import axios from 'axios';
const data = [
  {
    latitude: 22.574405099713175,
    longitude: 88.36485897173122,
  },
  {
    //arrays of objects of diffrenet locations of kolkata with its latitude and longiturde to detect map
    latitude: 22.588998609861196,
    longitude: 88.40768066376296,
  },
  {
    latitude: 22.58423230649882,
    longitude: 88.34116970178623,
  },
  {
    latitude: 22.61018052630663,
    longitude: 88.39880140174022,
  },
  {
    latitude: 22.58028126313371,
    longitude: 88.41463294950768,
  },
  {
    latitude: 22.561273226000957,
    longitude: 88.45543813913777,
  },
  {
    latitude: 22.58335353281421,
    longitude: 88.45111934230165,
  },
  {
    latitude: 23.541347010490483,
    longitude: 87.31802897781613,
  },
  {
    latitude: 23.52263958527907,
    longitude: 88.38814255056002,
  },
  {
    latitude: 22.562428995272825,
    longitude: 88.35301641365585,
  },
  {
    latitude: 22.565855586153294,
    longitude: 88.34947263457441,
  },
  {
    latitude: 22.586959020187674,
    longitude: 88.34982281416688,
  },
];
const Maps = () => {
  const [isModalVisible, setModalVisible] = useState(false); //usestate to make modal visible set to false
  const [selectedLocation, setSelectedLocation] = useState(null); //selected location in usestqate asit will be selecteed then the location will be displayed
  const [locationdata, setLocationData] = useState(null); //location info about location

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }; //component when the location will be selected this component will get active

  const onMarkerPress = location => {
    setSelectedLocation(location); //when marker will be pressed then the location data will be appeared in a

    // Fetch data from the server using Axios
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&sensor=true&key=AIzaSyDMnAqLlONxUIhn7VGthirwrULrRLemsxQ`,
      )
      .then(response => {
        setLocationData(response);
        toggleModal();
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 22.574405099713175,
          longitude: 88.36485897173122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={item}
            onPress={() => onMarkerPress(item)}>
            <View>
              <Image
                source={require('./assets/car.png')}
                style={styles.marker}
              />
            </View>
          </Marker>
        ))}
      </MapView>

      <CustomModal
        isVisible={isModalVisible}
        closeModal={toggleModal}
        results={locationdata}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  marker: {
    height: 50,
    width: 50,
  },
});

export default Maps;
///////
}
   {/* Marker for the user's current location */}
        