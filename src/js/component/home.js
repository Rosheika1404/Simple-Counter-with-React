import React from "react";
import Card from "./card";

//create your first component
export function Home() {
	return (
		<div className="container-fluid text-center mt-5">
			<h2>Simple Counter</h2>
			<div className="container-fluid row m-auto">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
