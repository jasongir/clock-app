import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import DetailsScreen from "./screens-components/DetailsScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Constants from "expo-constants";
import { StackRouter } from "react-navigation";
import HomeScreen from "./screens-components/HomeScreen";

const RootStack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator initialRoutName="Home">
				<RootStack.Screen name="Home" component={HomeScreen} />
				<RootStack.Screen name="Details" component={DetailsScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};
export default App;

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
