import { useEffect, useState } from "react"
import { InputGroup } from "../InputGroup"

// export function ExperienceExpand(experience) {
export function ExperienceExpand(experience, updateExperience, deleteExperience, clearExperience) {
	const [formData, setFormData] = useState({
		CompanyName: experience.CompanyName,
		Position: experience.Position,
		Details: experience.Details,
		startDate: experience.startDate,
		endDate: experience.endDate
	});

	useEffect(() => {
		setFormData({
			CompanyName: experience.Name,
			Position: experience.Position,
			startDate: experience.startDate,
			endDate: experience.endDate,
			Details: experience.Details
		});
	}, [experience]);

	const handleChange = (e, key) => {
		setFormData({
			...formData,
			[key]: e.target.value
		});
	};

	return (
		<div className="experience-expand">
			<InputGroup
				id="CompanyName"
				labelText="COMPANY NAME"
				placeholder="Enter Your Company Name"
				value={formData.Name}
				onChange={(e) => handleChange(e, 'CompanyName')}
				data-key="CompanyName"
			/>
			<InputGroup
				id="Position"
				labelText="POSITION"
				placeholder="Enter Your Position"
				value={formData.Position}
				onChange={(e) => handleChange(e, "Position")}
				data-key="Position"
			/>
				<InputGroup
					id="Details"
					labelText="DETAILS"
					placeholder="Enter Your Details"
					value={formData.Details}
					onChange={(e) => handleChange(e, "Details")}
					data-key="Details"
				/>
			<InputGroup
				id="startdate"
				labelText="START DATE"
				type="date"
				placeholder="Enter Your Start Date"
				value={formData.startDate}
				onChange={(e) => handleChange(e, "StartDate")}
				data-key="StartDate"
			/>
			<InputGroup
				id="enddate"
				labelText="END DATE"
				type="date"
				placeholder="Enter Your End Date"
				value={formData.endDate}
				onChange={(e) => handleChange(e, "EndDate")}
				data-key="EndDate"
			/>
			<div className="Form-button">
				<button type="button" onClick={() => deleteExperience(experience.id)}>
					Delete
				</button>
				<button type="button" onClick={() => clearExperience(experience.id)}>
					Clear
				</button>
				<button type="button" onClick={() => updateExperience(experience.id, formData)}>
					Save
				</button>
			</div>
		</div>

	)
}