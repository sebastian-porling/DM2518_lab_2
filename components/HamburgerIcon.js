import React, {Component} from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default function HamburgerIcon({navigation}){
    return (
        <TouchableOpacity
        style={{
            width: 44,
            height: 44,
            marginLeft: 20,
            marginTop: 20
        }}
        onPress={()=>{
            navigation.openDrawer();
        }}>
            <Icon name='menu' size={20} color='black'/>
        </TouchableOpacity>
    )
}
