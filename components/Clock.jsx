import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	componentDidMount() {
		console.log("component did mount");

		this.timer = setInterval(() => {
			this.tick();
		}, 1000);
	}
	componentWillUnmount() {
		console.log("component will unmount");
		clearInterval(this.timer);
	}
	render() {
		let clockElement = (
			<View style={styles.container}>
				<Text>The Time is Now: {this.state.date.toLocaleDateString()}</Text>
			</View>
		);
		return clockElement;
	}
}
