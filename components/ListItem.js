import React from 'react'
import { TouchableOpacity, Switch, Toogles} from 'react-native-gesture-handler'
import { View, Text, StyleSheet} from 'react-native'



const style = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    listItemText:{
        fontSize:20,
    },

})
class ListItem extends React.Component{

    constructor(){
        super()
        this.state={
            value: false
        }
    }

    render(){
        return(
            <View style={style.listItem}>
            <TouchableOpacity style={{paddingRight: 100}}
                onPress = {()=> this.props.navigation.navigate('details',
                {
                    item:this.props.item
                })}
                >
                <View>
                <Text style={style.listItemText}>{this.props.item.title}</Text>
                
                </View>
            </TouchableOpacity>
            <Switch
            onValueChange ={(value)=>
                this.setState({
                   value:value
                })
            }
            value={this.state.value} 
            style={{position: 'absolute', right: 20}}
            ></Switch>
        </View>)
    }



}
export default ListItem