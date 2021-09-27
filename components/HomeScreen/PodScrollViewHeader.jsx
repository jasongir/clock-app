import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PodScrollViewHeader() {
	return (
		<View style={styles.container}>
			<Text>My Podcasts</Text>
			<Image source={require("../../assets/dotdotdot.png")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	titleSection: {},
});
