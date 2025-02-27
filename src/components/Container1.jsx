// import { useState } from "react";
import "../styles/left.css";
import {Personal} from "../components/personal/Personal.jsx";
import {Education} from "./education/Education.jsx";
import {Experience} from "./experience/Experience.jsx";
import {Language} from "./language/Language.jsx";
import {Skill} from "./skills/Skill.jsx";
function Container1() {

	return (
		<div className="LEFT">
			<div className="dropdowns">
				<Personal></Personal>
				<Education></Education>
				<Experience></Experience>
				<Language></Language>
				<Skill></Skill>
			</div>
				<button className="DownloadPDF">Download PDF</button>
		</div>
	)
}
export default Container1;
