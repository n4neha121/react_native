import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

const ModalComponent = ({isVisible, closeModal, data}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide" // modal making
      onRequestClose={() => closeModal()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Text>Data from API:</Text>
          <Text style={{color: 'blue'}}>ID: {data.id}</Text>
          <Text style={{color: 'purple'}}>Title: {data.title}</Text>
          <Text style={{color: 'green'}}>Body: {data.body}</Text>
          <Text style={{color: 'magenta'}}>User ID: {data.userId}</Text>
          <View>
            <Text style={{color: 'magenta'}}>Tags:</Text>
            {data.tags.map(
              (
                innerItem,
                index, // modal  overall structure details also each items visiblity
              ) => (
                <Text style={{color: 'magenta'}} key={index}>
                  {index + 1}.{innerItem}
                </Text>
              ),
            )}
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
});
export default ModalComponent;
