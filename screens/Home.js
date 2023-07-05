import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, WorkoutData } from '../constants';
import { WorkoutCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [workoutData, setWorkoutData] = useState(WorkoutData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setWorkoutData(WorkoutData);
    }

    const filteredData = WorkoutData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setWorkoutData(WorkoutData);
    } else {
      setWorkoutData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={WorkoutData}
            renderItem={({ item }) => <WorkoutCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;