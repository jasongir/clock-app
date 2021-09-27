import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import DetailsScreen from "./screens-components/DetailsScreen.jsx";
import HomeScreen from "./screens-components/HomeScreen.jsx";

// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// https://reactnavigation.org/docs/tab-based-navigation

import Constants from "expo-constants";

import { Ionicons } from "@expo/vector-icons";

// const RootStack = createStackNavigator();
const RootStack = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRoutName="Home"
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
				}}
				screenOptions={({ route }) => ({
					// route: name of current screen
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === "Home") {
							iconName = focused ? "ios-list-circle" : "ios-list-sharp";
						} else if (route.name === "Details") {
							iconName = focused
								? "ios-information-circle"
								: "ios-information-circle-outline";
						}
						// iconName = focused ? "ios-inf"
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
			>
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
