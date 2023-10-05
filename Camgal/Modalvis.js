import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ModalComponent from './ CamModal';
const ModalVisible = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true); // and set modal visible to true to display all the  modal elements
        }}>
        <Text style={styles.buttext}> Open Modal</Text>
      </TouchableOpacity>
      <View>
        <ModalComponent
          isVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
};
export default ModalVisible;
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgreen',
    height: 60,
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttext: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
});
