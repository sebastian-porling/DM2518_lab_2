
import React from 'react'
import ListItem from './ListItem'
import {ScrollView, FlatList} from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

class TrainList extends React.Component{
    render(){
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <FlatList
                data={this.props.exercises} 
                renderItem={({item})=>
                <ListItem 
                    item={item}
                    navigation = {this.props.navigator.navigation}
                ></ListItem>}
            />
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
  });
  
export default TrainList