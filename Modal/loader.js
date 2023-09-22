import React, {useState} from 'react';
import {View, Modal, ActivityIndicator, TouchableOpacity} from 'react-native';

const Allmodals = ({}) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity
      style={{backgroundColor: '#ebba34', flex: 1, justifyContent: 'center'}}
      onPress={() => {
        setVisible(true);
      }}>
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            backgroundColor: '#0008',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            color: 'red',
          }}>
          <View
            style={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 100,
              borderRadius: 10,
              margin: 20,
              flexDirection: 'row',
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      </Modal>
      <View />
    </TouchableOpacity>
  );
};
export default Allmodals;
