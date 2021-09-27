import * as React from "react";
import { Text, View, Image } from "react-native";
import Constants from "expo-constants";
// Note you can include the house as background image
export default class App extends React.Component {
	render() {
		return (
			<View>
				<Image source={require("./assets/girl1.png")} />
				<Image source={require("./assets/girl2.png")} />
				<Image source={require("./assets/boy.png")} />
				<Text>DinDin</Text>
				<Text>Connecting food lovers</Text>
				<Text>Get Started</Text>
			</View>
		);
	}
}
