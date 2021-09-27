import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import MonthCalender from "./components/MonthCalendar";
import CaroselView from "./components/CaroselView";
import DayCalendar from "./components/DayCalendar";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

//Keep the data at the highest level and then
//have it flow to lower sub components.

//converted to functional component
export default function App() {
	//Screen really only has two states
	//Month and events
	const [month, setMonth] = useState(new Date().getMonth());
	const [events, setEvents] = useState([]);

	//Hook The fires on onmount and gets data
	useEffect(() => {
		const fetchData = async () => {
			let response = await fetch(
				"https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json"
			);
			let parseObject = await response.json();
			setEvents(assignIDs(parseObject));
		};
		fetchData();
	}, []);

	//AssignIDs  this function will be remove in the future as id will be added to the invitations

	function assignIDs(events) {
		return events.map((event, index) => {
			event.id = index;
			event.date = moment(event.date, "DD-MM-YYYY hh:mm:ss");

			return event;
		});
	}

	//Method That Filters Events
	//This methods returns the events for a specific month
	function eventsForMonth(events, month) {
		return events.filter((event) => {
			//Get Month check to see if matches
			return (event.date.month() === month) & (event.accepted === true)
				? true
				: false;
		});
	}

	//Method For setting MonthState
	function callBackForSettingMonth(monthID) {
		//Remember these will get merged into a single object
		setMonth(monthID);
	}

	//Methods for accepting invitation
	function acceptInvitation(eventID) {
		setEvents(
			events.map((event) => {
				if (event.id === eventID) event.accepted = true;
				return event;
			})
		);
	}

	//Methods for declining invitation
	function declineInvitation(eventID) {
		setEvents(
			events.filter((event) => {
				return event.id === eventID ? false : true;
			})
		);
	}

	//Method that filters Events Pending
	function eventsPending(events) {
		return events.filter((event) => {
			return event.accepted === undefined ? true : false;
		});
	}

	return (
		<View style={styles.container}>
			<View style={{ height: 40, width: "100%" }} />
			<LinearGradient colors={["#FFFFFF", "#D3DAEB", "#FFFFFF"]}>
				<MonthCalender
					selectedMonth={month}
					monthData={monthData}
					callBackOnPress={callBackForSettingMonth}
				/>
				<CaroselView
					eventsData={eventsPending(events)}
					acceptInvitationCallBack={acceptInvitation}
					declineInvitationCallBack={declineInvitation}
				/>
				<DayCalendar
					eventsForMonth={eventsForMonth(events, month)}
					month={month}
				/>
			</LinearGradient>
		</View>
	);
}

//Month Data Ideally we would fetch this to allow for internationization
const monthData = [
	{
		label: "January",
	},
	{
		label: "Feburary",
	},
	{
		label: "March",
	},
	{
		label: "April",
	},
	{
		label: "May",
	},
	{
		label: "June",
	},
	{
		label: "July",
	},
	{
		label: "August",
	},
	{
		label: "Setember",
	},
	{
		label: "October",
	},
	{
		label: "November",
	},
	{
		label: "December",
	},
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		width: "100%",
		justifyContent: "flex-start",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "white",
	},
});
