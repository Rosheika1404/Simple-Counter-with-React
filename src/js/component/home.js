import React, { useEffect, useState } from "react";
import Card from "./card";

//create your first component
export function Home() {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [num3, setNum3] = useState(0);
	const [num4, setNum4] = useState(0);
	const [num5, setNum5] = useState(0);
	const [num6, setNum6] = useState(0);

	if (num1 === 10) {
		setNum1(0);
	}
	if (num2 === 10) {
		setNum2(0);
	}
	if (num3 === 10) {
		setNum3(0);
	}
	if (num4 === 10) {
		setNum4(0);
	}
	if (num5 === 10) {
		setNum5(0);
	}
	if (num6 === 10) {
		setNum6(0);
	}
	useEffect(() => {
		setInterval(() => {
			setNum1(num1 => num1 + 1);
		}, 1000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setNum2(num2 => num2 + 1);
		}, 10000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setNum3(num3 => num3 + 1);
		}, 100000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setNum4(num4 => num4 + 1);
		}, 1000000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setNum5(num5 => num5 + 1);
		}, 10000000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setNum6(num6 => num6 + 1);
		}, 100000000);
	}, []);

	return (
		<div className="container-fluid text-center mt-5">
			<h2 style={{ fontSize: "4rem" }}>Simple Counter</h2>
			<div className="container-fluid row m-auto justify-content-center">
				<Card
					number={
						<i
							className="far fa-clock"
							style={{
								fontSize: "6rem",
								paddingLeft: "-4rem",
								paddingBottom: "-5rem"
							}}></i>
					}
				/>
				<Card number={num6} />
				<Card number={num5} />
				<Card number={num4} />
				<Card number={num3} />
				<Card number={num2} />
				<Card number={num1} />
			</div>
		</div>
	);
}
