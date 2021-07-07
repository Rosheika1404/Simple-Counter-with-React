import React, { useEffect, useState } from "react";
import Card from "./card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


//create your first component
export function Home() {
	const [num1, setNum1] = useState(0);
	if (num1 === 10) {
		setNum1(0);
	}
	useEffect(() => {
		setInterval(() => {
			setNum1(num1 => num1 + 1);
		}, 1000);
	}, []);

	return (
		<div className="container-fluid text-center mt-5">
			<h2>Simple Counter</h2>
			<div className="container-fluid row m-auto justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card number={num1} />
			</div>
		</div>
	);
}
