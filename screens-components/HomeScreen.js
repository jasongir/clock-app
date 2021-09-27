import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";

import Constants from "expo-constants";

const RootStack = createStackNavigator();

const HomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "white", fontSize: 30 }}>Home Screen</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate("Details")}>
				<View style={{ backgroundColor: "red", padding: 5 }}>
					<Text style={{ color: "blue", fontSize: 30 }}>Press Me</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "purple",
	},
	text: {
		color: "white",
	},
});
