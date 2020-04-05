
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text} from 'react-native';


export default function ExercisesScreen(navigator){
    var params = navigator.route.params
    const item = params.item
    return(
        <ScrollView styles={styles.container}>
            <Text style={styles.header}>{item.title}</Text>
            <Image
                source = {item.imageURL}
                style={styles.img} 
            />
            <Text style={styles.text}>Description: {item.description}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 16,
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
        width: 300, 
        height: 300,
        alignSelf: 'center',
    },
    text:{
        marginTop:10,
        fontSize:20,
       // fontFamily:'lucida grande'
    }
}
)