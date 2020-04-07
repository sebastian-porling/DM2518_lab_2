
import React, {useState} from 'react';
import TrainList from '../components/TrainList';

export default function LinksScreen(navigator) {
  navigator.navigation.setOptions({
    headerTitle: ('List of exercises')
  });
  var exercises;
  if(navigator.route.params){
    exercises = navigator.route.params.ctrain.ctrain
  }
  else{
    var exerciseData = require('../data/exercises.js').exerciseData;
    exercises = exerciseData.exercises
  }

  return (
    <TrainList
      exercises={exercises}
      navigator={navigator}
    />
  );
}

