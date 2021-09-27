import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";

export default class App extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row", // column, row
					justifyContent: "space-between", // flex-end, flex-start, space-between, space-around
					alignItems: "center", //   ^ and space-evenly
					backgroundColor: "purple",
				}}
			>
				<LinearGradient colors={["#000", "#fff"]} style={{ flex: 1 }}>
					<Text
						style={{
							padding: 20,
						}}
					>
						Sign in or something
					</Text>
				</LinearGradient>
				<View
					style={{
						backgroundColor: "red",
						width: "25%",
						height: 100,
					}}
				/>
				<View
					style={{
						backgroundColor: "blue",
						width: "25%",
						height: 100,
					}}
				/>
				<View
					style={{
						backgroundColor: "green",
						width: 100,
						height: 100,
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <LinearGradient
//         colors={['#FFFFFF', '#535C5B', '#000D0C']}
//         start ={[1,1]}
//         end = {[0.6, 0.7]}
//         style={{
//           flex: 1,
//           flexDirection: 'column',
//            width: "100%",
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text
//           style={{
//             fontFamily: "Helvetica-Bold",
//             fontSize: 40,
//             color: "#D5D7D7",
//           }}>
//           AckeePod
//           </Text>
//       </LinearGradient>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
