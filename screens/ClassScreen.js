import * as React from 'react';
import { Image, Switch, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import TrainList from '../components/TrainList'

export default function ClassScreen(navigator, ctrain){
    var categoryData = require('../data/categories.js').categories;
    const categories = categoryData.categories
    ctrain = []
    return(
        <View style={styles.container}>
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
        </View>
        
     
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
         /*flex:1,
         padding:24,
         justifyContent: 'center',
         flexDirection: 'column',
         alignItems: 'center',*/
         flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center' 
    },
    class: {
        margin: 16,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fafafa',
        shadowRadius: 5,
        shadowOpacity: 0.2
    },
    img:{
        borderRadius: 4,
        width: 150, 
        height: 150,
        alignSelf: 'center',
    },
    text:{
        marginTop:10,
        fontSize:20,
        textAlign:"center",
    }})

