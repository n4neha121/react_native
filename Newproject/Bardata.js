import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const BarData = () => {
  // Correct data structure for BarChart
  const subjectsData = [
    {
      subject: 'Chemistry',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'Physics',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'Maths',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'English',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'Biology',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'Physics',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
    {
      subject: 'Information Technology',
      data: [
        {Numberofquestionsattempt: 15, percentage: 20},
        {Numberofquestionsattempt: 20, percentage: 40},
        {Numberofquestionsattempt: 56, percentage: 33},
        {Numberofquestionsattempt: 78, percentage: 24},
        {Numberofquestionsattempt: 45, percentage: 66},
        {Numberofquestionsattempt: 89, percentage: 56},
        {Numberofquestionsattempt: 90, percentage: 78},
        {Numberofquestionsattempt: 55, percentage: 88},
        {Numberofquestionsattempt: 43, percentage: 25},
      ],
    },
  ];

  return (
    <View>
      <Text>BarChart</Text>
      {/* Use the BarChart component with your data */}
      <BarChart
        data={subjectsData}
        xKey="Numberofquestionsattempt" // Property name for X-axis labels
        yKey="percentage" // Property name for Y-axis values
      />
    </View>
  );
};

export default BarData;
