import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <ImageBackground 
          style={styles.img}
          source={require("../assets/images/bg.jpeg")}>
        <Text style={styles.text}>Welcome to Fitness Club! </Text>
        <Text style={styles.text}>Let's Start from Now!</Text>
        </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
    flex: 1,
    justifyContent: "center"
  },
  text:{
    fontSize:30,
    color:"#fff",
    textAlign:"center",
  }
});
