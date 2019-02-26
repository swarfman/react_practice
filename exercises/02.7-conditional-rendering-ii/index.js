import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	//your component here
	let alertClassName = "alert";
	if (props.color == "red") alertClassName += "alert alert-danger";
	else if (props.color == "orange") alertClassName += "alert alert-warning";
	else if (props.color == "green") alertClassName += "alert alert-success";

	return (
		<div className={alertClassName} role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	color: PropTypes.text,
	text: PropTypes.text
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green." color="green" />
	</div>,
	document.querySelector("#myDiv")
);
