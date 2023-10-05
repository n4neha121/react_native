import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import DisplayCamera from './Camgal/OpenCamera';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCameraPhoto, setSelectedCameraPhoto] = useState(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState(null);
  const [isCameraSelected, setIsCameraSelected] = useState(false); // Add a state variable

  const openCameraModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onCameraPhotoSelected = uri => {
    setSelectedCameraPhoto(uri);
    setSelectedGalleryPhoto(null); // Clear the gallery photo when a camera photo is selected
    setIsCameraSelected(true); // Set the flag to indicate camera selection
  };

  const onGalleryPhotoSelected = uri => {
    setSelectedGalleryPhoto(uri);
    setSelectedCameraPhoto(null); // Clear the camera photo when a gallery photo is selected
    setIsCameraSelected(false); // Set the flag to indicate gallery selection
  };

  return (
    <View style={styles.container}>
      {isCameraSelected && selectedCameraPhoto && (
        <Image style={styles.imageStyle} source={{uri: selectedCameraPhoto}} />
      )}
      {!isCameraSelected && selectedGalleryPhoto && (
        <Image style={styles.imageStyle} source={{uri: selectedGalleryPhoto}} />
      )}
      <TouchableOpacity style={styles.button} onPress={openCameraModal}>
        <Text style={styles.buttonText}>Open Camera Modal</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.buttonsty}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.buttonTexttwo}>Close</Text>
            </TouchableOpacity>
          </View>
          <DisplayCamera
            onCameraPhotoSelected={onCameraPhotoSelected}
            onGalleryPhotoSelected={onGalleryPhotoSelected}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5b042',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 65,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#6434eb',
    borderRadius: 22,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 15,
  },
  modalContainer: {
    height: '75%',
    width: '100%',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: '#cceb34',
  },
  closeButton: {
    backgroundColor: 'purple',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 22,
    padding: 5,
  },
  buttonTexttwo: {
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  buttonsty: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 25,
  },
  imageStyle: {
    height: 150,
    width: '50%',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
