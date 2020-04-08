import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text, TouchableHighlight, Platform, Alert} from 'react-native';
import * as React from 'react';

import HamburgerIcon from '../components/HamburgerIcon';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ClassScreen from '../screens/ClassScreen';
import FindScreen from '../screens/FindScreen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerLeft: () => (<HamburgerIcon navigation={navigation}/>),
    headerTitle: getHeaderTitle(route),
    headerRight: () => (
      <View style={{marginRight:20}}>
        <TouchableHighlight
        onPress={() => Platform.OS == 'web' ? alert('This is a dialog','Press the button!') : Alert.alert('This is a dialog','Press the button!')}
      >
        <Text style={{color:'#007AFF', fontSize:20}}>Info</Text>
      </TouchableHighlight>
      </View>
    )
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
    tabBarOptions={{
      activeTintColor: '#5e5d5d',
      inactiveTintColor: '#9a9a9a',
      style: {
        backgroundColor: Colors.mainColor
      }
      
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS == 'ios' ? "ios-code-working" : "md-code-working"} />,
        }}
      />
      <BottomTab.Screen
        name="All"
        component={LinksScreen}
        options={{
          title: 'All',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS == 'ios' ? "ios-book" : "md-book"} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={FindScreen}
        options={{
          title: 'Find',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS == 'ios' ? "ios-search" : "md-search"} />,
        }}
      />
      <BottomTab.Screen
        name="Class"
        component={ClassScreen}
        options={{
          title: 'Category',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS == 'ios' ? "ios-folder" : "md-folder"} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Start from here';
    case 'All':
      return 'All exercise you can find';
    case 'Search':
      return 'Search for an exercise';
    case 'Class':
      return 'Train each muscle groups';
  }
}
