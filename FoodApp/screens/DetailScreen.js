import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  //console.log('fgcbcfybuyf', item);
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          onPress={navigation.goBack}
          color="#000"
          size={25}
        />
        <Text style={{fontSize: 22, fontWeight: '800', color: '#000'}}>
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image
            source={item.image}
            style={{height: 250, width: 250, borderRadius: 250 / 2}}
          />
        </View>
        <View style={styles.details}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  goback: {
    marginleft: 5,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 8,
    backgroundColor: '#eb8f34',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
