import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import TrainList from '../components/TrainList'

export default function ClassScreen(navigator, ctrain){
    var categoryData = require('../data/categories.js').categories;
    const categories = categoryData.categories
    ctrain = []
    return(
        <ScrollView styles={styles.container}>
        <FlatList
            numColumns={2}
            data={categories} 
            renderItem={({item})=>
            <TouchableOpacity 
                style={styles.class}
                onPress={() => {ctrain = _classify(item.name)
                console.log(ctrain)
                }}
            >
                    <Image
                    source = {item.img}
                    style={styles.img} 
                    />
                    <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>}  
        />
            <TrainList
                exercises= {ctrain}
                navigator = {navigator}
            /> 

        </ScrollView>      
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
        padding:24,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    class: {
        margin: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
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
        fontFamily:'lucida grande'
    }})

