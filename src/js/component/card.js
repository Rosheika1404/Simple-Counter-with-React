import React from "react";
import PropTypes from "prop-types";

const Card = () => {
	return (
		<div
			className="card align-middle text-center mr-2"
			style={{ height: "12rem", width: "8rem", background: "black" }}>
			<div
				className="card-body"
				style={{ color: "white", fontSize: "4rem" }}>
				<h5 className="card-title">0</h5>
			</div>
		</div>
	);
};
// Card.propTypes ={
// 	number=PropTypes.number
// }
export default Card;
