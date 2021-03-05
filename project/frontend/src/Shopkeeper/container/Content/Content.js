import React, { useState, useEffect, useContext } from "react";
import "./Content.css";
import axios from "../../../axios/axios";
import Current from "../../pages/Current";

function Content() {
	return (
		<div className="content w-100">
			<Current />
		</div>
	);
}

export default Content;
