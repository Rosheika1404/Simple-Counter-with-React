import React from "react";
import PropTypes from "prop-types";

const Card = ({ number }) => {
	return (
		<div
			className="card align-middle text-center mr-2 mt-5"
			style={{ height: "12rem", width: "8rem", background: "black" }}>
			<div className="card-body" style={{ color: "white" }}>
				<h5 className="card-title" style={{ fontSize: "8rem" }}>
					{number ? number : 0}
					{/*If number is true show number else show 0*/}
				</h5>
			</div>
		</div>
	);
};

Card.propTypes = {
	number: PropTypes.number
};
export default Card;
