import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageURL: PropType.string,
	description: PropType.string,
	buttonURL: PropType.string,
	buttonLabel: PropType.string
	// 2) add here the new properties into the proptypes object
};
ReactDOM.render(<BootstrapCard title="Paul McCartney" />, document.querySelector("#myDiv"));
// 3) Use ReactDOM to add the component into then DOM element #myDiv
