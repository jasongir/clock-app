import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default class FeaturedImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feature: "",
		};
	}

	componentDidMount() {
		this.getData();
	}
	getData = async () => {
		let response = await fetch(
			"https://www.cs.virginia.edu/~dgg6b/Mobile/Featured.json"
		);
		let parsed = await response.json();
		this.setState(() => {
			return { feature: parsedResponse };
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={
						this.state.feature == null ? "" : { uri: this.state.feature.image }
					}
					style={styles.featuredImage}
				>
					<Text style={styles.text}>Top Section</Text>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	featuredImage: {
		// borderColor: "white",
		width: 100,
		height: 100,
	},
	container: {
		height: 14,
		paddingTop: 10,
		borderColor: "white",
		borderWidth: 1,
	},
	text: {
		color: "white",
	},
});
