import React from "react";
import Topbar from "./topbar";
import "./topbar.css";
import Display from "./display";
import "./display.css";
import Downbar from "./downbar";
import "./downbar.css";

function Main() {
	return (
		<div style={{ maxWidth: "100%", overflow: "hidden" }}>
			<Topbar />
			<Display />
			<Downbar />
		</div>
	);
}

export default Main;
