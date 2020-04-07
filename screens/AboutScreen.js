
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
	return (
		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
			<View style={styles.aboutContainer}>
				<Text>This lab was done by Shuo Chen and Sebastian Porling</Text>
				<Text>DM2518, VT2020</Text>
        	</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	aboutContainer: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center' 
	},
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