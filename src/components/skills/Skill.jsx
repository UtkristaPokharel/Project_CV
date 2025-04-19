import { useEffect, useState } from "react"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputGroup } from "../InputGroup"
import "../../styles/form.css";

export function Skill(skill, updateSkill, deleteSkill) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [formData, setFormData] = useState({
		SkillName: skill.SkillName
	});
	useEffect(() => {
		setFormData({
			SkillName: skill.Name,
		});
	}, [skill]);
	const [Skill, setSkill] = useState('');
	const [level, setLevel] = useState('');

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div id="dropdownbutton">
			<div className="skill">
				<div className="section-header" onClick={toggleExpand}>
					<h2>My Skills <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded ? '' : 'open'}`} /></span> </h2>
				</div>

				{isExpanded && (
					<div className="skill">
						<InputGroup
							id="skill"
							labelText="Skill"
							placeholder="Enter Your Skill"
							value={formData.Skill}
							onChange={(e) => setSkill(e, Skill)}
							data-key="Skill"
						/>

						<div className="radio-group">
							Skill Level:
							<div>
								<label>
									Basic
									<input
										type="radio"
										name="level"
										value="Basic"
										checked={level === 'Basic'}
										onChange={(e) => setLevel(e.target.value)}
									/>
								</label>
								<label>
									Intermediate
									<input
										type="radio"
										name="level"
										value="Intermediate"
										checked={level === 'Intermediate'}
										onChange={(e) => setLevel(e.target.value)}
									/>
								</label>
								<label>
									Advanced
									<input
										type="radio"
										name="level"
										value="Advanced"
										checked={level === 'Advanced'}
										onChange={(e) => setLevel(e.target.value)}
									/>
								</label>
							</div>
						</div>
						<div className="Form-button">
							<button type="button" onClick={() => updateSkill(Skill.id,formData)}>
								Add
							</button>
							<button type="button" onClick={() => deleteSkill(Skill.id)}>
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
