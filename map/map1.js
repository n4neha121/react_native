import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
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

const Maps = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const goTonextScreen = () => {
    console.log('button pressed');
    navigation.navigate('Map2');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onMarkerPress = location => {
    setSelectedLocation(location);

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
            <Image source={require('./assets/car.png')} style={styles.marker} />
          </Marker>
        ))}
      </MapView>

      <CustomModal
        isVisible={isModalVisible}
        closeModal={toggleModal}
        results={locationData}
      />
      <TouchableOpacity onPress={goTonextScreen} style={styles.button}>
        <Text style={styles.button_text}>Lets go</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'green',
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button_text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Maps;
