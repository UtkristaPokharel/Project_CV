import { useEffect, useState } from "react";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup } from "../InputGroup"
import "../../styles/form.css";

export function Language(language, updateLanguage, deleteLanguage) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [Language, setLanguage] = useState('');
	const [formData, setFormData] = useState({
		LanguageName: language.LanguageName
	});
	useEffect(() => {
		setFormData({
			LanguageName: language.Name,
		});
	}, [language]);
	const [level, setLevel] = useState('');

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div id="dropdownbutton">
			<div className="language">
				<div className="section-header" onClick={toggleExpand}>
					<h2>Language <span className='arrow-down'>
						<FontAwesomeIcon icon={faAngleDown}
							className={`angle-down ${isExpanded ? '' : 'open'}`} />
					</span>
					</h2>
				</div>

				{isExpanded && (
					<div className="language-info">
						<InputGroup
							id="language"
							labelText="Language"
							placeholder="Enter Your Language"
							value={formData.Language}
							onChange={(e) => setLanguage(e, Language)}
							data-key="Language"
						/>

						<div className="radio-group">
							Proficiency Level:
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
							<button type="button" onClick={() => updateLanguage(Language.id, formData)}>
								Add
							</button>
							<button type="button" onClick={() => deleteLanguage(Language.id)}>
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
