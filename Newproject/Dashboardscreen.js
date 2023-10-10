import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {BarChart} from 'react-native-gifted-charts';

const DashboardScreen = () => {
  const SubjectPerformance = [
    {label: 'Biology', value: 30, color: 'red'},
    {label: 'Chemistry', value: 40, color: 'lightblue'},
    {label: 'Physics', value: 66, color: 'green'},
    {label: 'Maths', value: 78, color: '#f5e342'},
    {label: 'English', value: 87, color: '#b342f5'},
    {label: 'Computer', value: 60, color: '#f542a7'},
    {label: 'SocialScience', value: 70, color: '#66f542'},
    {label: 'EnvironmentalScience', value: 92, color: '#42c8f5'},
  ];
  const barData = [
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
    {value: 15, percentage: 20},
  ];
  const subjectColors = [
    '#f5429b', // Color for Biology
    '#f5ef42', // Color for Physics
    '#8a42f5', // Color for Chemistry
    '#f542e3', // Color for English
    '#90f542', // Color for Maths
    '#9542f5', // Color for ComputerSci
    '#e67e22', // Color for Hindi
    '#1abc9c', // Color for Social Science
  ];
  const Data = [
    {
      id: 1,
      image: require('./assets/Biology.jpeg'),
      Subject: 'Biology',
      color: subjectColors[0],
    },
    {
      id: 2,
      image: require('./assets/Physics.jpeg'),
      Subject: 'Physics',
      color: subjectColors[1],
    },
    {
      id: 3,
      image: require('./assets/chem.png'),
      Subject: 'Chemistry',
      color: subjectColors[2],
    },
    {
      id: 4,
      image: require('./assets/English.png'),
      Subject: 'English',
      color: subjectColors[3],
    },
    {
      id: 5,
      image: require('./assets/Maths.png'),
      Subject: 'Maths',
      color: subjectColors[4],
    },
    {
      id: 6,
      image: require('./assets/Comp.jpeg'),
      Subject: 'ComputerSci',
      color: subjectColors[5],
    },
    {
      id: 7,
      image: require('./assets/Hindi.jpeg'),
      Subject: 'Hindi',
      color: subjectColors[6],
    },
    {
      id: 8,
      image: require('./assets/SocialSc.png'),
      Subject: 'Social Science',
      color: subjectColors[7],
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const SubjectData = ({detail}) => {
    const backgroundColor = detail.color;
    const borderRadius = 10;
    const height = 140;
    const width = 165;
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          paddingBottom: 90,
          paddingTop: 10,
          backgroundColor,
          borderRadius,
          height,
          width,
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <Image
          source={detail.image}
          style={{
            height: 70,
            width: 70,
            borderRadius: 20,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginRight: 5,
            alignSelf: 'center',
            marginTop: 80,
          }}
        />

        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              padding: 5,
              alignItems: 'center',
            }}>
            {detail.Subject}
          </Text>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <View style={style.pieChartContainer}>
      <PieChart
        donut
        data={SubjectPerformance}
        innerRadius={80}
        style={style.piedata}
      />
      <Text style={style.labeldata}>{item.value}%</Text>
      <Text style={style.secdata}>{item.label}</Text>
    </View>
  );
  const renderItem2 = ({item}) => (
    <View>
      <BarChart
        barWidth={20}
        barBorderRadius={4}
        frontColor="#177AD5"
        data={barData}
        yAxisThickness={1}
        xAxisThickness={1}
      />
    </View>
  );
  return (
    <ImageBackground
      source={require('./assets/image.jpeg')}
      style={style.backgroundImage}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 32,
        }}>
        <Text style={{color: '#fff', fontSize: 28, paddingHorizontal: 18}}>
          Hello,
        </Text>
        <View style={{marginRight: 22}}>
          <Image
            source={require('./assets/profile.jpeg')}
            style={style.image}
          />
        </View>
      </View>
      <Text style={{color: '#fff', fontSize: 20, paddingHorizontal: 18}}>
        Good morning
      </Text>
      <View style={style.secondContainer}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: '600',
            paddingTop: 15,
            paddingLeft: 15,
          }}>
          Your Performance
        </Text>
        <Text style={{color: '#000', fontSize: 16, paddingLeft: 15}}>
          Total number of sessions given: 8
        </Text>
        <FlatList
          data={SubjectPerformance}
          renderItem={renderItem}
          keyExtractor={item => item.label}
          horizontal
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: '500',
            paddingTop: 10,
          }}>
          Recommended Topics
        </Text>
        <Text
          style={{
            color: '#136deb',
            fontSize: 16,
            paddingRight: 10,
            paddingTop: 14,
          }}>
          See all
        </Text>
      </View>
      <View>
        <FlatList
          ///showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({item}) => <SubjectData detail={item} />}
          horizontal
        />
      </View>
      <View>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
          Subjectwise Performance
        </Text>
        <FlatList
          data={SubjectPerformance}
          renderItem={renderItem2}
          keyExtractor={item => item.label}
        />
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;

const style = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#136deb',
    height: 180,
    width: '100%',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  backgroundImage: {
    flex: 1,
  },
  secondContainer: {
    height: 200,
    width: '94%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 25,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  labeldata: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  secdata: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  piedata: {
    height: 35,
    width: 35,
  },
  middleContainer: {
    height: 140,
    width: 140,
  },
});
/*<SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View underlayColor="#1076e3" style={styles.TopContainer}>
        <View style={styles.textimg}>
          <Text style={styles.firsttext}>Hello</Text>
          <Text style={styles.secondtext}>Good morning</Text>
          <Image
            source={require('./assets/profile.jpeg')}
            style={styles.profile}
          />
        </View>
      </View>
</SafeAreaView>
const MyFlatList = () => {
  const data = [
    { id: '1', text: 'Item 1', backgroundColor: 'red' },
    { id: '2', text: 'Item 2', backgroundColor: 'green' },
    { id: '3', text: 'Item 3', backgroundColor: 'blue' },
    // Add more items with different background colors as needed
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.backgroundColor }]}>
      {/* Render your item content here 
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});

export default MyFlatList;
*/
