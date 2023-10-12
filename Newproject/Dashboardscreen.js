import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {BarChart} from 'react-native-gifted-charts';

const DashboardScreen = () => {
  const SubjectPerformance = [
    {label: 'Biology', value: 50, color: '#2a05e6'},
    {label: 'Chemistry', value: 40, color: 'lightblue'},
  ];
  [
    {label: 'Maths', value: 50, color: 'lightgreen'},
    {label: 'english', value: 40, color: 'lightblue'},
  ];
  [
    {label: 'Physics', value: 50, color: 'red'},
    {label: 'Sanskrit', value: 40, color: 'lightblue'},
  ];
  [
    {label: 'socialscience', value: 50, color: 'blue'},
    {label: 'Computer', value: 40, color: 'lightblue'},
  ];

  // Create an array to hold all the arrays

  // You can access the individual arrays within allArrays like this:

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

  const barData = [
    {value: 6, label: 20, subject: 'Chemistry'},
    {value: 4, label: 55, subject: 'Physics'},
    {value: 8, label: 80, subject: 'Biology'},
    {value: 12, label: 40, subject: 'English'},
    {value: 20, label: 33, subject: 'Maths'},
    {value: 18, label: 70, subject: 'Sanskrit'},
    {value: 10, label: 22, subject: 'Computer'},
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const SubjectData = ({detail}) => {
    const backgroundColor = detail.color;
    const borderRadius = 10;
    const height = 130;
    const width = 145;
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
        innerRadius={30}
        style={style.PieData}
        radius={40}
        centerLabelComponent={() => {
          return <Text style={style.labeldata}>{item.value}%</Text>;
        }}
      />
      <Text style={style.secdata}>{item.label}</Text>
    </View>
  );
  const renderItem2 = ({item}) => (
    <View style={style.barChartContainer}>
      <View>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            paddingLeft: 10,
          }}>
          {item.subject}
        </Text>
      </View>
      <BarChart
        barWidth={14}
        barBorderRadius={4}
        frontColor="#0588e6"
        data={barData}
        yAxisThickness={1}
        xAxisThickness={1}
        showYAxisIndices={false}
        showXAxisIndices={false}
        style={{flex: 1, width: '100%'}}
      />
    </View>
  );

  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Image
          source={require('./assets/frame.png')}
          style={style.backgroundImage}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 18,
            Top: 100,
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
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              paddingLeft: 15,
              shadowOpacity: 0.5,
              elevation: 2,
            }}>
            Total number of sessions given: 8
          </Text>
          <FlatList
            data={SubjectPerformance}
            renderItem={renderItem}
            keyExtractor={item => item.label}
            horizontal
            style={style.listSize}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 21,
              fontWeight: 'bold',
              paddingTop: 13,
              paddingBottom: 7,
              paddingLeft: 10,
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
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 20,
              paddingTop: 12,
              paddingBottom: 10,
              paddingLeft: 10,
            }}>
            Subjectwise Performance
          </Text>
        </View>
        <FlatList
          data={barData}
          renderItem={renderItem2}
          keyExtractor={item => item.label}
        />
      </View>
    </ScrollView>
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
    height: 180,
    width: '100%',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    position: 'absolute',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowColor: '#0575e6',
  },
  secondContainer: {
    height: 180,
    width: '94%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 18,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  labeldata: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  secdata: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
  },
  middleContainer: {
    height: 140,
    width: 140,
  },
  listSize: {
    height: 35,
    width: '94%',
  },
  pieChartContainer: {
    width: 120,
    height: 80,
    alignItems: 'center',
  },
  PieData: {
    height: 80,
    width: 80,
    alignItems: 'center',
  },
  barChartContainer: {
    height: 220, // Adjust the height as needed
    width: '100%',
    marginBottom: 30, // Increase the bottom margin
  },
});
