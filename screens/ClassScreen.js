import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import TrainList from '../components/TrainList'

export default function ClassScreen(navigator, ctrain){
    var categoryData = require('../data/categories.js').categories;
    const categories = categoryData.categories
    ctrain = []
    return(
        <FlatList
            numColumns={2}
            data={categories} 
            renderItem={({item})=>
            <TouchableOpacity 
                style={styles.class}
                onPress={() => {
                    ctrain = _classify(item.name)
                    navigator.navigation.navigate('links',
                    {
                        ctrain:{ctrain}
                    })
                }}
            >
                    <Image
                    source = {item.img}
                    style={styles.img} 
                    />
                    <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>}  
            keyExtractor={(item, index) => index.toString()}
        />
     
    )
}

function _classify(category){
    var ctrain = []
    exercises.map(
        x=>{
            if(category==x.category){
                ctrain.push(x)
            }
        }
    )
    return ctrain
  }

var exerciseData = require('../data/exercises.js').exerciseData;
const exercises = exerciseData.exercises


const styles = StyleSheet.create({
    container:{
         flex:1,
         padding:24,
         justifyContent: "space-between",
         flexDirection: 'column',
         alignItems: 'center',
    },
    class: {
        margin: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 6,
    },
    img:{
        borderRadius: 2,
        width: 100, 
        height: 100,
        alignSelf: 'center',
    },
    text:{
        marginTop:10,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
       // fontFamily:'lucida grande'
    }})

