import React from "react";
import Card from "./card";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello World</h1>
			<Card />
		</div>
	);
}
