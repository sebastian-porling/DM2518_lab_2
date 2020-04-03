
import * as React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, Text} from 'react-native';

export default function FindScreen(navigator) {

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={1}
        />
    );
  }

const onChangeText=(text)=>{
    console.log(text)
}