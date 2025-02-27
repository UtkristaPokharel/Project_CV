import { useState } from "react"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {EducationInfo} from './EducationInfo';

export function Education() {
	const [isExpanded, setIsExpanded] = useState(false);
   
	const toggleExpand = () => {
	  setIsExpanded(!isExpanded);
	};
   
	return (
	  <div id="dropdownbutton">
		<div className="education">
	    <div className="section-header" onClick={toggleExpand}>
	    <h2>My Education <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
	    </div>
	    
	    {isExpanded && <EducationInfo  />}
	  </div>
	  </div>
	);
   }
