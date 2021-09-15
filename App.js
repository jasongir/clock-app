import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
	componentDidMount() {
		console.log("component did mount");
		setInterval(() => {
			this.forceUpdate();
		}, 1000);
	}
	componentWillUnmount() {
		console.log("component will unmount");
	}
	render() {
		let clockElement = (
			<View style={styles.container}>
				<Text>The Time is Now :{new Date().toLocaleTimeString()}</Text>
			</View>
		);
		return clockElement;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//    let clockElement = <View style={styles.container}>

//    </View>
// 	return (
// 		<View style={styles.container}>
// 			<Text>This is app #1</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
