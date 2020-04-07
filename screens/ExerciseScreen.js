
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View} from 'react-native';


export default function ExercisesScreen(navigator){
    var params = navigator.route.params
    const item = params.item
    navigator.navigation.setOptions({
        headerTitle: ('Exercise')
    })
    return(
        <ScrollView >
            <View styles={styles.container}> 
            <Text style={styles.header}>{item.title}</Text>
            <Image
                source = {item.imageURL}
                style={styles.img} 
            />
            <Text style={styles.text}>Description: {item.description}</Text>
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        marginTop: 16,
        marginBottom: 10,
        paddingVertical: 8,
        borderWidth: 0,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30
    },
    img:{
        borderRadius: 2,
        width: 300, 
        height: 300,
        alignSelf: 'center',
    },
    text:{
        marginTop:10,
        fontSize:20,
        padding: 20
       // fontFamily:'lucida grande'
    }
}
)