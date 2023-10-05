
/*import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Camera from './OpenCamera'; //can also add it by only adding file name
function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Camera />
    </GestureHandlerRootView>
  );
}
export default App;
*/


import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const DisplayCamera = ({onCameraPhotoSelected, onGalleryPhotoSelected}) => {
  const openCamera = async () => {
    try {
      // Request camera permissions here
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app requires camera permission to take photos.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          saveToPhotos: true,
          mediaType: 'photo',
        };
        launchCamera(options, result => {
          if (!result.didCancel) {
            onCameraPhotoSelected(result.assets[0].uri);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  };

  const openGallery = async () => {
    try {
      const options = {
        mediaType: 'photo',
      };
      launchImageLibrary(options, result => {
        if (!result.didCancel) {
          onGalleryPhotoSelected(result.assets[0].uri);
        }
      });
    } catch (error) {
      console.error('Error selecting from gallery:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    height: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
    alignSelf: 'center',
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
});

export default DisplayCamera;
//////////////////////////
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

  const openCameraModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {selectedCameraPhoto && (
        <Image style={styles.imageStyle} source={{uri: selectedCameraPhoto}} />
      )}
      {selectedGalleryPhoto && (
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
            onCameraPhotoSelected={uri => setSelectedCameraPhoto(uri)}
            onGalleryPhotoSelected={uri => setSelectedGalleryPhoto(uri)}
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
    borderTopEndRadius: 22,
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
/////////////////////////////////////////////////////
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Vibration,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const DisplayCamera = ({onCameraPhotoSelected, onGalleryPhotoSelected}) => {
  const openCamera = async () => {
    try {
      //take two props one for camera photo selection and one for gallery photot selection
      // Request camera permissions here
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app requires camera permission to take photos.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }, //enable camera
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          saveToPhotos: true,
          mediaType: 'photo',
        };
        launchCamera(options, result => {
          if (!result.didCancel) {
            onCameraPhotoSelected(result.assets[0].uri);
          } //save it in oncameraphotoselected
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  }; //save it in ongalleryselected

  const openGallery = async () => {
    try {
      //then also enable gallery access
      const options = {
        mediaType: 'photo',
      };
      launchImageLibrary(options, result => {
        if (!result.didCancel) {
          onGalleryPhotoSelected(result.assets[0].uri);
        }
      });
    } catch (error) {
      console.error('Error selecting from gallery:', error);
    }
  };

  return (
    //call both the components each in one one buttons
    <View>
      <View style={{paddingbottom: 10}}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 10}}>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
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

export default DisplayCamera;
{
 
}
import React, { useState } from 'react';
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

  const onCameraPhotoSelected = (uri) => {
    setSelectedCameraPhoto(uri);
    setSelectedGalleryPhoto(null); // Clear the gallery photo when a camera photo is selected
    setIsCameraSelected(true); // Set the flag to indicate camera selection
  };

  const onGalleryPhotoSelected = (uri) => {
    setSelectedGalleryPhoto(uri);
    setSelectedCameraPhoto(null); // Clear the camera photo when a gallery photo is selected
    setIsCameraSelected(false); // Set the flag to indicate gallery selection
  };

  return (
    <View style={styles.container}>
      {isCameraSelected && selectedCameraPhoto && (
        <Image style={styles.imageStyle} source={{ uri: selectedCameraPhoto }} />
      )}
      {!isCameraSelected && selectedGalleryPhoto && (
        <Image style={styles.imageStyle} source={{ uri: selectedGalleryPhoto }} />
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

// ... Rest of your styles and export

export default App;
const App = () => {
  const [modalVisible, setModalVisible] = useState(false); //for modal visiblity
  const [selectedCameraPhoto, setSelectedCameraPhoto] = useState(null); //for selected camera photo
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState(null); //for selected gallery photo

  const openCameraModal = () => {
    setModalVisible(true); //for opening a modal
  };

  const closeModal = () => {
    setModalVisible(false); //for closing modal
  };

  const onCameraPhotoSelected = uri => {
    setSelectedCameraPhoto(uri);
  }; //make two component one for selected ca,mera photos and one for selected gallery photos

  const onGalleryPhotoSelected = uri => {
    setSelectedGalleryPhoto(uri);
  };

  return (
    <View style={styles.container}>
      {selectedCameraPhoto && ( //display camera photo and galllery photo
        <Image style={styles.imageStyle} source={{uri: selectedCameraPhoto}} />
      )}
      {selectedGalleryPhoto && (
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
            onCameraPhotoSelected={onCameraPhotoSelected} //call display camera component inside modal to display selected camera and gallery photos
            onGalleryPhotoSelected={onGalleryPhotoSelected}
          />
        </View>
      </Modal>
    </View>
  );
};