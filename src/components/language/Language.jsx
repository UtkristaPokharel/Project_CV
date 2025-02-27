import { useState } from "react"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Language() {
	const [isExpanded, setIsExpanded] = useState(false);
   
	const toggleExpand = () => {
	  setIsExpanded(!isExpanded);
	};
   
	return (
	  <div id="dropdownbutton">
		<div className="language">
	    <div className="section-header" onClick={toggleExpand}>
	    <h2>Language <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
	    </div>
	    
	    {/* {isExpanded && <EducationInfo  />} */}
	  </div>
	  </div>
	);
   }
