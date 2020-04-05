
import React, { useState }  from 'react';
import { Image, ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import TrainList from '../components/TrainList'

export default function FindScreen(navigator) {
    const [data, setData] = useState(0);
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setData(_onChangeText(text))}
                placeholder="Type name of training here"
            /> 
            <TrainList
            exercises={data}
            navigator={navigator}
            />
        </View>
    );
  }
var exerciseData = require('../data/exercises.js').exerciseData;
const exercises = exerciseData.exercises


const _onChangeText = (text)=>{
    var result = []
    if (text) {
        exercises.map(x=>{
            if(x.title.toLowerCase().match(text.toLowerCase())){
                result.push(x)
            }
        })
    }
    return result
}

