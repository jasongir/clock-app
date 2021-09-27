import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Constants } from "expo";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default class ScrollingView extends React.Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.boxLarge} />
				<ScrollView horizontal>
					<View style={styles.boxSmall} />
					<View style={styles.boxSmall} />
					<View style={styles.boxSmall} />
				</ScrollView>
				<View style={styles.boxLarge} />
				<View style={styles.boxSmall} />
				<View style={styles.boxLarge} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	boxSmall: {
		width: 200,
		height: 200,
		marginBottom: 10,
		marginRight: 10,
		backgroundColor: "skyblue",
	},
	boxLarge: {
		width: 300,
		height: 300,
		marginBottom: 10,
		marginRight: 10,
		backgroundColor: "steelblue",
	},
});
