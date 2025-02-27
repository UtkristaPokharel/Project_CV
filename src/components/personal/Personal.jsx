import { useState } from "react"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {PersonalInfo} from './PersonalInfo';
import "../../styles/form.css";


export function Personal() {
	const [isExpanded, setIsExpanded] = useState(false);
   
	const toggleExpand = () => {
	  setIsExpanded(!isExpanded);
	};
   
	return (
	  <div id="dropdownbutton">
		<div className="personal">
	    <div className="section-header" onClick={toggleExpand}>
	    <h2>My Personal Info <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
	    </div>
	    
	    {isExpanded && <PersonalInfo/>}
	  </div>
	  </div>
	);
   }