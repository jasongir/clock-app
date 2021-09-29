import * as React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import * as Facebook from "expo-facebook";

import DetailsScreen from "./screens-components/DetailsScreen.jsx";
import HomeScreen from "./screens-components/HomeScreen.jsx";

import AppScreen from "./components/AppScreen/AppScreen";

// https://reactnavigation.org/docs/tab-based-navigation

import Constants from "expo-constants";

import { Ionicons } from "@expo/vector-icons";

// const RootStack = createStackNavigator();

class App extends React.Component {
	async logIn() {
		try {
			Facebook.initializeAsync({
				appId: "280343767112876",
				appName: "mobile-app-practice",
			});
			const { type, token, expires, permissions, declined } =
				await Facebook.logInWithReadPermissionsAsync({
					permissions: ["public_profile"],
				});
			if (type === "success") {
				const response = await fetch(
					`https://graph.facebook.com/me?access_token=${token}`
				);
				const object = await response.json();

				Alert.alert(`Hey, ${object.name}`);
			}
		} catch ({ message }) {
			console.log(message);
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Button title="Login with Facebook" onPress={() => this.logIn()} />
			</View>
		);
	}
}
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	text: {
		color: "white",
	},
});
