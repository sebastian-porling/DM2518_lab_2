import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HamburgerIcon from './components/HamburgerIcon';
import ExercisesScreen from './screens/ExerciseScreen'
import AboutScreen from './screens/AboutScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinksScreen from './screens/LinksScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(props) {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen component={Tabs} name="Home" navigation={props.navigation}/>
            <Drawer.Screen name="About" component={About} navigation={props.navigation}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  //}
}

function About({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} options={({navigation}) =>
        ({headerLeft: () => (<HamburgerIcon navigation={navigation}/>)})}/>
    </Stack.Navigator>
  );
};

function Tabs({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} navigation={navigation}/>
            <Stack.Screen name="details" component={ExercisesScreen} />
            <Stack.Screen name="links" component={LinksScreen} />
          </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
