
import React, {useState} from 'react';
import TrainList from '../components/TrainList';

export default function LinksScreen(navigator) {
  console.log(navigator)
  var exercises;
  if(navigator.route.params){
    console.log(navigator.route.params.ctrain.ctrain)
    exercises = navigator.route.params.ctrain.ctrain
  }
  else{
    var exerciseData = require('../data/exercises.js').exerciseData;
    exercises = exerciseData.exercises
    console.log(exerciseData.exercises)
  }

  return (
    <TrainList
      exercises={exercises}
      navigator={navigator}
    />
  );
}

