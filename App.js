import * as React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

import * as SecureStore from "expo-secure-store";

import * as Facebook from "expo-facebook";

// https://reactnavigation.org/docs/tab-based-navigation

// const RootStack = createStackNavigator();

const passwordKey = "password";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			password: null,
		};
	}

	componentWillMount() {
		let userEnteredThis = "This do be the entered password";
		SecureStore.setItemAsync(passwordKey, userEnteredThis);
	}

	async fetchValueFromStorage(key) {
		let _password = await SecureStore.getItemAsync(key);
		this.setState({
			password: _password,
		});
	}

	render() {
		this.fetchValueFromStorage(passwordKey);
		return (
			<View style={styles.container}>
				<Text>
					{this.state.password === null
						? "still fetching"
						: this.state.password}
				</Text>
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
