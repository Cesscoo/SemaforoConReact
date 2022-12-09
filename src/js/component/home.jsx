import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	// const colors = {red: "red", yellow: "yellow", green: "green"}
	// const newcolors = "red"
	// const color = colors[newcolors]

	// return <div>color: {color}</div>

	// ---
	const defaultObj = {red: "gray", yellow: "gray", green: "gray"}
	const [colors, SetColors] = useState(defaultObj);
	
	const switchRed = (newcolor) => {
		// const color = colors[newcolor] == newcolor ? "gray" : newcolor ;
		let color = "gray" 
		if (colors[newcolor] != newcolor) {
			color = newcolor
		}

		const aux = {...colors}; //... Es hacer una copia en la constante aux
		aux[newcolor] = color;
		SetColors(aux);
	};

	return (
		<div className="d-block">
			<div className="TrafficTop" style={{backgroundColor:"black", width:"40px", height:"100px", margin:"auto"}}></div>
			<div className="container d-flex flex-column" style={{backgroundColor:"black", width:"200px", height:"450px", margin:"auto"}}>
				<div className="w-100 h-50 rounded-circle mt-1 ms-auto" onClick={()=>switchRed("red")} style={{backgroundColor: colors["red"]}}></div>
				<div className="w-100 h-50 rounded-circle mt-1 ms-auto" onClick={()=>switchRed("yellow")} style={{backgroundColor: colors["yellow"]}}></div>
				<div className="w-100 h-50 rounded-circle mt-1 ms-auto" onClick={()=>switchRed("green")} style={{backgroundColor: colors["green"]}}></div>
			</div>
		</div>
	);
};

export default Home;
