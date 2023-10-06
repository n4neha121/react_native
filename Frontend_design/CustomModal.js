import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ModalComponent = ({isVisible, closeModal, data}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => closeModal()}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.topContent}>
            <Image
              source={data.image1}
              resizeMode="contain"
              style={styles.modalImage}
            />
          </View>
          <View style={styles.centeredContent}>
            <Text style={styles.nameText}>{data.name1}</Text>
            <Text style={styles.smallText}>{data.smalltext}</Text>
          </View>
          <View style={styles.bottomContent}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Image
                  source={require('./assets/dollar.png')}
                  style={styles.touchable1}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Image
                  source={require('./assets/job.png')}
                  style={styles.touchable2}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Image
                  source={require('./assets/seat.png')}
                  style={styles.touchable3}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContent}>
            <Text style={styles.grayText}>Salary</Text>
            <Text style={styles.grayText}>Job Type</Text>
            <Text style={styles.grayText}>Position</Text>
          </View>
          <View style={styles.bottomContent}>
            <Text style={styles.boldText}>$40k-$60k</Text>
            <Text style={styles.boldText}>Remote</Text>
            <Text style={styles.boldText}>Senior</Text>
          </View>

          <View style={styles.responsiblities}>
            <Text style={styles.bigText}>Resposibilities</Text>
            <View style={styles.container}>
              <View style={styles.bulletpointContainer}>
                <Text style={styles.bulletpoint}>.</Text>
              </View>
              <Text style={styles.gray2Text}>
                Create Overall concepts for the user experience within a
                business webpage or product ,ensuring all interactions are
                intuitive and easy for customers
              </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.bulletpointContainer}>
                <Text style={styles.bulletpoint}>.</Text>
              </View>
              <Text style={styles.gray2Text}>
                Create overall concepts for the user experience within a
                business webpage or product
              </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.bulletpointContainer}>
                <Text style={styles.bulletpoint}>.</Text>
              </View>
              <Text style={styles.gray2Text}>
                Experience in Figma and Design App
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => closeModal()}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: '85%',
    width: '100%',
    backgroundColor: '#fff',
    // margin: 10,
    // marginTop: 10,
    // justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topContent: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  centeredContent: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  modalImage: {
    width: 65,
    height: 65,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  closeButton: {
    backgroundColor: '#4295f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    height: 75,
    width: '85%',
    marginTop: 5,
    paddingTop: 0,
    justifyContent: 'center',
    marginRight: 18,
    marginLeft: 13,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  touchable1: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable2: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderRadius: 10,
  },
  touchable3: {
    backgroundColor: 'lightblue',
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderRadius: 10,
  },
  grayText: {
    fontSize: 11,
    color: 'gray',
    textAlign: 'center',
    paddingRight: 30,
    paddingLeft: 22,
  },
  boldText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    paddingRight: 30,
    paddingLeft: 22,
  },
  bigText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
    marginBottom: 15,
  },
  gray2Text: {
    fontSize: 12,
    color: '#808080',
    flex: 1, // Make the text take up the remaining space
    flexWrap: 'wrap', // Allow text to wrap to the next line if it's too long
    marginBottom: 6, // Adjust the spacing between lines
    fontWeight: '500',
  },

  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    //marginLeft: 5,
    //marginRight: 8,
    paddingLeft: 22,
    paddingRight: 30,
  },
  bulletpoint: {
    fontSize: 25, // Adjust the font size for the bullet point
    marginRight: 5, // Adjust the spacing between the bullet point and text
    color: '#000',
    alignSelf: 'flex-start', // Change the color to match the gray2Text color
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  responsiblities: {
    margin: 22,
  },
  bulletpointContainer: {
    width: 20, // Adjust the width of the bullet point container as needed
    alignItems: 'center', // Center the bullet point vertically
  },
});

export default ModalComponent;
<Image source={food.image} />;