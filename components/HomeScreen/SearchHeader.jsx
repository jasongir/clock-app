import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Featured</Text>
			<Image
				style={styles.search}
				source={require("../../assets/search-white.png")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: "white",
		marginTop: 48,
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-end",
		width: "100%",
	},
	title: {
		color: "white",
		fontSize: 32,
		fontFamily: "Helvetica-Bold",
	},
	search: {
		zIndex: 999,
	},
});
