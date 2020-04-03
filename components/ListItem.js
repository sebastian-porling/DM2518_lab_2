import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'



const style = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee',
    },

    listItemText:{
        fontSize:20,
    },

})
class ListItem extends React.Component{

    render(){
        return(
        <TouchableOpacity 
            style={style.listItem}
            onPress = {()=> this.props.navigation.navigate('details',
            {
                item:this.props.item
            })}>
            <View>
            <Text style={style.listItemText}>{this.props.item.title}</Text>
            </View>
        </TouchableOpacity>)
    }

}
export default ListItem