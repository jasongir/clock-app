import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchHeader from "./components/HomeScreen/SearchHeader";
import FeatureImage from "./components/HomeScreen/FeatureImage";
import ScrollingView from "./components/ScrollView";

// import ScrollLabSolution from "./components/ScrollLabSolution";

import Constants from "expo-constants";

const App = () => {
	return (
		<View>
			<Text>
				CAN YOU PLEASE WORK FOR ONCE Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Nisi corporis eius similique sint ad soluta numquam
				culpa dolore dolores cupiditate! Atque nihil ipsa voluptatem,
				perspiciatis quidem illo modi, hic voluptatibus eum quisquam id nemo
				consectetur eius quae quaerat ipsam? Sint cum saepe accusamus iusto, sit
				necessitatibus at. Molestias, incidunt dolorum.
			</Text>
		</View>
	);
	// return (
	// 	<View style={styles.container}>
	// 		<SearchHeader />
	// 		<Text style={styles.text}>Welcome...</Text>
	// 		<FeatureImage />
	// 		<ScrollingView />
	// 	</View>
	// );
	// return <ScrollLabSolution />;
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	upperContainer: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
	},
	text: {
		color: "white",
	},
});
