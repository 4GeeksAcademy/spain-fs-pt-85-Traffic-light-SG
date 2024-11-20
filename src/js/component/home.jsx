import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const clickCondition = (color) =>{
		setSelectedColor(selectedColor === color ? "" : color);
	}
	
	return (
		<div className="traffic-light" style={{background: "black", display: "inline-block",
		padding: "15px", borderRadius: "15px", position: "relative", left:"580px",
		top: "150px"}}>
			<div className="red" onClick={() => clickCondition("red")} style={{borderRadius: "50px", 
			width: "100px", height: "100px",
			background: "red", 
			boxShadow: selectedColor === "red"? "0px 0px 9px 4px #FFD700" : "none"
			}}></div>
			<div className="yellow" onClick={() => clickCondition("yellow")} style={{borderRadius: "50px", 
			width: "100px", height: "100px",
			background: "yellow", 
			boxShadow: selectedColor === "yellow"? "0px 0px 9px 4px #FFD700" : "none"}}></div>
			<div className="green" onClick={() => clickCondition("green")} style={{borderRadius: "50px", 
			width: "100px", height: "100px",
			background: "green", 
			boxShadow: selectedColor === "green"? "0px 0px 9px 4px #FFD700" : "none"}}></div>
		</div>
	);
};

export default Home;
