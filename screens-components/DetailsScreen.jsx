import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Constants from "expo-constants";

const DetailsScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "white", fontSize: 30 }}>Details Screen</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
				<View style={{ backgroundColor: "red", padding: 5 }}>
					<Text style={{ color: "blue", fontSize: 30 }}>Go Home!</Text>
				</View>
			</TouchableOpacity>
			{/*
         <TouchableOpacity onPress={() => props.navigation.push("Details")}>
				<View style={{ backgroundColor: "green", padding: 5 }}>
					<Text style={{ color: "blue", fontSize: 30 }}>Return to details</Text>
				</View>
			</TouchableOpacity>
         */}
			<TouchableOpacity onPress={() => props.navigation.goBack()}>
				<View style={{ backgroundColor: "orange", padding: 5 }}>
					<Text style={{ color: "blue", fontSize: 30 }}>Go back!</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue",
	},
	text: {
		color: "white",
	},
});
