import { useState } from "react"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {ExperienceInfo} from './ExperienceInfo';
import { ExperienceExpand } from "./ExperienceExpand";

export function Experience() {
	const [isExpanded, setIsExpanded] = useState(false);
   
	const toggleExpand = () => {
	  setIsExpanded(!isExpanded);
	};
   
	return (
	  <div id="dropdownbutton">
		<div className="experience">
	    <div className="section-header" onClick={toggleExpand}>
	    <h2>Experience <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
	    </div>
	    
	    {isExpanded && <ExperienceExpand  />}
	  </div>
	  </div>
	);
   }

