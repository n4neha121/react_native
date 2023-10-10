import React from 'react';
import {View, Text} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
const PieChartData = () => {
  const SubjectPerformance = [
    {label: 'Biology', value: 30},
    {label: 'Chemistry', value: 40},
    {label: 'Physics', value: 66},
    {label: 'Maths', value: 78},
    {label: 'English', value: 87},
    {label: 'Computer', value: 60},
    {label: 'SocialSciene', value: 70},
    {label: 'EnviromentalSc', value: 92},
  ];
  return (
    <View>
      <Text>PieChart</Text>
      {/* Use the BarChart component with your data */}
      <PieChart data={SubjectPerformance} />
    </View>
  );
};
export default PieChartData;
{
  /* <View style={style.subjectItem}>*/
}
