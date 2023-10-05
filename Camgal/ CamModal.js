import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Camera from './OpenCamera';
const ModalData = ({isVisible, closeModal}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide" // modal making
      onRequestClose={() => closeModal()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Text>Click button to open Camera and Gallery inside it</Text>
          <View>
            <TouchableOpacity style={styles.cambut} onPress={() => Camera()}>
              <Text> Open Modal</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonColor}
              onPress={() => closeModal()}>
              <Text style={styles.buttontext}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.textfield}>Close</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: 'orange',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 1,
    margin: 8,
    width: 200,
    alignSelf: 'center',
  },
  buttontext: {
    color: '#000',
    fontSize: 23,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  textfield: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  cambut: {
    backgroundColor: '#bf42f5',
    elevation: 8,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 1,
    margin: 8,
    width: 200,
    alignself: 'center',
  },
});
export default ModalData;
