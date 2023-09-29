import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet, //all the imports because it will be used in codes
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ModalComponent from './CustomModal';
const data = [
  {
    id: '1',
    name: 'App Designer',
    image: require('./assets/iphone.jpeg'), //all objects images for flatlist
  },
  {
    id: '2',
    name: 'Web Designer',
    image: require('./assets/phone.png'), // array of objects for first flatlist datas
  },
  {
    id: '3',
    name: 'Graphics Designer', // different keywords name id images
    image: require('./assets/laptop.jpeg'),
  },
  {
    id: '4',
    name: 'Screen designer',
    image: require('./assets/Tablet.jpeg'),
  },
  {
    id: '5',
    name: 'tab designer',
    image: require('./assets/graphics.png'),
  },
  {
    id: '6',
    name: 'xyz Designer',
    image: require('./assets/mac.jpeg'),
  },
];
const data2 = [
  {
    name1: 'Interface Designer',
    smalltext: 'pigo',
    salary: '$1000-$2000/month',
    image1: require('./assets/xyz.jpeg'), // array of objects for second  vertical flatlist various styling should be done
    image2: require('./assets/add.png'), //name1,smalltexts image 1 for displaying main image ,image icon for displaying it in top right after touching it the
  }, // modal will be open
  {
    name1: 'Product Designer',
    smalltext: 'Mailchimp',
    salary: '$1000-$2000/month',
    image1: require('./assets/pinterest.jpeg'),
    image2: require('./assets/add.png'),
  },
  {
    name1: 'gadget Designer',
    smalltext: 'Lfgcdc',
    salary: '$1000-$2000/month',
    image1: require('./assets/interface.jpeg'),
    image2: require('./assets/add.png'),
  },
  {
    name1: 'App Designer',
    smalltext: 'risha',
    salary: '$1000-$2000/month',
    image1: require('./assets/new.jpeg'),
    image2: require('./assets/add.png'),
  },
  {
    name1: 'Website Designer',
    smalltext: 'lelllsjj',
    salary: '$1000-$2000/month',
    image1: require('./assets/laz.jpeg'),
    image2: require('./assets/add.png'),
  },
];

const HomeScreen = () => {
  // main component where usestate for two is defined one for displaying the textinput and one for setting up datas in a modal and flatlist
  const [textinput, setTextinput] = useState('');
  const [datas, setDatas] = useState({
    image1: '',
    name1: '',
    smalltext: '',
  });
  const [selectedItemName, setSelectedItemName] = useState(''); // for rendering data with the specified item name
  const [modalVisible, setModalVisible] = useState(false); //taking modal visible in usestate and settting it in false

  const renderItem = (
    {item}, //item as a props or objectx for first flatlist itemcontainer styling for view of first flatlist
  ) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} resizeMode="contain" style={styles.images} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    </View>
  ); //also item.image is an object which has been called for displaying each image one by one in a list also item.name is an objects which has been called for displaying all the images one by one
  const renderItem2 = ({item}) => {
    return (
      //2ndflatlist rendering where styling of the view of all flatlist items
      <View
        style={{
          width: '100%',
          justifyContent: 'center', // flatlist view background color margin all the required styling
          marginBottom: 20,
          backgroundColor: '#f2f1ed',
          borderRadius: 10,
          borderTopEndRadius: 10,
        }}>
        <View style={styles.itemContainer2}>
          <Image
            source={item.image1} // image1 is displayed in each flatlist one by one where itemimage is styling of an image its height width and diplay
            resizeMode="contain"
            style={styles.itemImage}
          />
          <View>
            <Text style={styles.itemName1}>{item.name1}</Text>
            <Text style={styles.smalltext}>{item.smalltext}</Text>
          </View>
        </View>
        {/*everydata of array of objects  has been called one by one */}
        <Text style={styles.sal}> {item.salary}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Senior designer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Full time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText}>Remote</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContent}>
          <TouchableOpacity
            onPress={() => {
              setDatas({
                //setting all the datas in touchable opacity
                image1: item.image1,
                name1: item.name1,
                smalltext: item.smalltext,
              });
              setSelectedItemName(item.name1);
              setModalVisible(true); // and set modal visible to true to display all the  modal elements
            }}>
            <Image
              source={require('./assets/add.png')} //when this icon will be touchged all the data will get visibled
              style={styles.imageicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    // now the whole display of the screen is done here
    <View style={styles.screenContainer}>
      <View style={styles.headerTextcontainer}>
        <Text style={styles.headerText1}>Hello,</Text>
        <Text style={styles.headerText2}>Saber Ali</Text>
        <View style={styles.headerContainer}>
          {/* all the designing of each texts icon is done the screen container contains the stying of screen height width background color flex etc.
          headertext container will maintain the styling of the text at left side hello and saber ali header text1&2 will make the display of text gray black */}
          <Image
            source={require('./assets/icon.png')} //image path for header icon
            style={styles.headerIcon} //size of icon
          />
        </View>
      </View>

      <View style={{alignItems: 'center', width: '100%'}}>
        <View style={styles.screenContainer2}>
          <Image
            source={require('./assets/search.png')}
            style={styles.searchicon} //for search icon
          />
          <TextInput
            placeholder="Searchyourjob.. "
            style={styles.textInput}
            value={textinput} // for textinput adjustment
            onChangeText={text => setTextinput(text)}
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.rowWithBorder}>
        <Text style={styles.text1}>Categories</Text>
        <Text style={styles.text2}>View all</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatlist}
          horizontal={true} // render item for 1st flatlist data
        />
      </View>
      <View style={styles.rowWithBorder}>
        <Text style={styles.text1}>Popular Jobs</Text>
        <Text style={styles.text2}>More</Text>
      </View>
      <View style={styles.newContainer}>
        <FlatList
          data={data2} // render item for second flatlist data
          renderItem={renderItem2}
          keyExtractor={item => item.name1}
        />
        <ModalComponent
          isVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
          selectedItem={selectedItemName}
          data={datas}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    width: '100%',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    right: 10, // position the header icon on top right
    bottom: 0,
    justifyContent: 'center',
  },
  text1: {
    color: 'black',
    marginRight: 60,
    fontWeight: '800',
    marginHorizontal: 25,
    fontSize: 20,
  },
  text2: {
    color: '#4295f5',
    marginLeft: 93,
    marginHorizontal: 25,
    fontWeight: '500',
    fontSize: 14,
  },
  textInput: {
    fontSize: 16,
    // flex: 1,
    height: 50,
    width: '90%',
    borderColor: '#f2f1ed',
    borderWidth: 1,
    borderRadius: 10,
    // marginRight: 20,
    //paddingHorizontal: 80,
    // marginBottom: 'auto',
    //paddingRight: 10,
  },
  images: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginRight: 10, // size of image and displaying of image is mentioned here
  },
  rowWithBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: 10,
    //marginBottom: 370,
    //marginTop: 60,
  },
  headerTextcontainer: {
    // marginLeft: 10,
    // marginbottom: 20,
    padding: 10, //fixed the direction of leftside text
    width: '100%',
  },
  flatlist: {
    margin: 5,
    padding: 5,
    // backgroundColor: "#f2f1ed",
    //borderColor: '#f2f1ed',
  },
  headerIcon: {
    width: 27,
    height: 27,
    // marginRight: 100, // Adjusted marginLeft
    // marginTop: 20,
  },
  headerText1: {
    color: 'lightgray',
    fontWeight: '700',
    fontSize: 15,
    marginRight: 60,
    marginHorizontal: 15,
  },
  headerText2: {
    color: '#000',
    fontSize: 23,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemInfo: {
    flex: 1, // for taking flex one for taking whole sppace
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10, // styling of view of first flatlist where the flexdirection is row border color for each item entirely tyext and image both
    borderWidth: 1,
    borderColor: '#d2d2d2',
    backgroundColor: '#fff',
    marginRight: 10,
    borderRadius: 5,
  },
  itemName: {
    color: 'black',
    fontSize: 12,
    fontWeight: '800', //style of text
  },
  screenContainer2: {
    // flex: 1,
    flexDirection: 'row',
    //height: 40,
    width: '90%',
    //borderColor: '',
    backgroundColor: '#f2f1ed',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchicon: {
    height: 25,
    width: 25,
    // marginBottom: 'auto',
  },
  flatListContainer: {
    height: 60,
    // width: '100%',
    // marginBottom: '60%',
    marginTop: 10,
  },
  newContainer: {
    //height: "90%",
    //width: "85%",
    backgroundColor: '#fff',
    marginHorizontal: 20,
    // justifyContent: 'center',
    borderRadius: 15,
    // marginLeft: 30,
    // marginRight: 35,
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  itemImage: {
    width: 55,
    height: 55, //in this styling it is shown that how image will be displayed in a list means its
    borderRadius: 10, //height,width,borderRadius,margin,borderwidth and all the styling which an image should have
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 25,
    marginLeft: 13,
  },
  itemName1: {
    fontSize: 16, //in this the first text is in bold its all the description is given in this
    fontWeight: 'bold',
    color: '#000',
    // marginTop: 15,
    marginLeft: 0,
  },
  iteminfo1: {
    flex: 1,
    // marginRight: 10,
  },
  itemContainer2: {
    flexDirection: 'row', //here item container is fixing view of flatlist where each item in a flatlist should be in row
    alignItems: 'center', //alignitems in center // borderwidth of each items is set to 1 //bordercolor is gray//margin bottom 10 for each item
    backgroundColor: '#f2f1ed',
    borderColor: 'gray',
    marginBottom: 10,
  },
  sal: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
  },
  smalltext: {
    color: 'gray',
    fontSize: 12,
    // marginLeft: 75,
    marginTop: 0,
    textAlign: 'left',
  },
  flatlist2: {
    flex: 1,
    margin: 2,
    padding: 2,
    backgroundColor: '#f2f1ed',
    borderColor: '#f2f1ed',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginleft: 10,
    alignContent: 'center',
  },
  button1: {
    backgroundColor: 'lightblue',
    height: 35,
    width: 80,
    borderRadius: 9,
    justifyContent: 'center',
    marginleft: 3,
  },
  button2: {
    backgroundColor: 'lightgreen',
    height: 35,
    width: 65,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: 10,
  },
  button3: {
    backgroundColor: 'yellow',
    height: 35,
    width: 63,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 45,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  imageicon: {
    width: 25, // Adjust the width as needed
    height: 25, // Adjust the height as needed
    marginRight: 5,
    marginLeft: 5,
  },
  rightContent: {
    position: 'absolute',
    top: 0,
    right: 10,
    bottom: 83,
    justifyContent: 'center',
  },

  modalContainer: {
    height: '75%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalImage: {
    width: 65,
    height: 65,
    borderColor: '#fff',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4295f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 70,
    height: 35,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  touchable1: {
    // backgroundColor: 'yellow',
    height: 55,
    width: 55,
    // alignSelf: 'center',
  },
  touchable2: {
    // backgroundColor: 'lightgreen',
    height: 55,
    width: 55,
    // alignSelf: 'center',
  },
  touchable3: {
    // backgroundColor: 'lightblue',
    height: 55,
    width: 55,
    // alignSelf: 'center',
  },
  graytext: {
    fontSize: 12,
    color: 'gray',
  },
  boldtext: {
    fontSize: 16,
    color: '#000',
  },
  bigtext: {
    fontSize: 18,
    colr: '#000',
  },
  middlecontent: {
    justifyContent: 'center',
    alignitem: 'center',
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default HomeScreen;
