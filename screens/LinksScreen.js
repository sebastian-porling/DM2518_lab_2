import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';

import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import TrainList from '../components/TrainList';

export default function LinksScreen(navigator) {
  var exerciseData = require('../data/exercises.js').exerciseData;
  const exercises = exerciseData.exercises

  return (
    <TrainList
      exercises={exercises}
      navigator={navigator}
    />
  );
}

