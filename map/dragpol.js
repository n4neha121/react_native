import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MapView, {Marker, Polygon, Callout} from 'react-native-maps';
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
const polygonCoordinates = [
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

const Mapdata = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState(data);
  const [locationdata, setLocationData] = useState('');
  const [tooltips, setTooltip] = useState(data);

  const onMarkerPress = location => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&sensor=true&key=YOUR_API_KEY`,
      )
      .then(response => {
        setLocationData(response);
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
        <Polygon
          coordinates={polygonCoordinates}
          //fillColor="#ad0909"
          strokeColor="blue"
          strokeWidth={3}
        />
        {markerCoordinates.map((item, index) => (
          <Marker
            key={index}
            coordinate={item}
            draggable={true}
            onPress={() => onMarkerPress(item)}>
            <Image
              source={require('./assets/marker.png')}
              style={styles.marker}
            />
            <Callout
              tooltip
              style={{
                height: 300,
                width: 300,
                bottom: -50,
                position: 'absolute',
              }}>
              <View style={styles.Callout_Container}>
                <View style={styles.Callout_Back}>
                  <Text style={styles.text}> Location detail:</Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
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
  locationInfoContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  locationInfoText: {
    fontWeight: 'bold',
  },
  Callout_Back: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    padding: 15,
    maxWidth: 900,
    maxHeight: 900,
  },
  text: {
    fontSize: 15,
    color: 'darkgreen',
    textAlign: 'center',
  },
  //Callout_Container: {
  //flexDirection: 'column',
  //alignItems: 'center',
  //justifyContent: 'center',
  //},
});

export default Mapdata;
