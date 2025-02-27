import { useEffect, useState } from "react"
import { InputGroup } from "../InputGroup"

// export function EducationExpand(education) {
export function EducationExpand(education, updateEducation, deleteEducation, clearEducation) {
	const [formData, setFormData] = useState({
		SchoolName: education.SchoolName,
		Degree: education.Degree,
		startDate: education.startDate,
		endDate: education.endDate,
		Location: education.Location
	});

	useEffect(() => {
		setFormData({
			SchoolName: education.SchoolName,
			Degree: education.Degree,
			startDate: education.startDate,
			endDate: education.endDate,
			Location: education.Location
		});
	}, [education]);

	const handleChange = (e, key) => {
		setFormData({
			...formData,
			[key]: e.target.value
		});
	};

	return (
		<div className="education-expand">
			<InputGroup
				id="SchoolName"
				labelText="School Name"
				placeholder="Enter Your School Name"
				value={formData.SchoolName}
				onChange={(e) => handleChange(e, 'SchoolName')}
				data-key="SchoolName"
			/>
			<InputGroup
				id="Degree"
				labelText="Degree"
				placeholder="Enter Your Degree"
				value={formData.Degree}
				onChange={(e) => handleChange(e, "Degree")}
				data-key="Degree"
			/>
			<InputGroup
				id="startdate"
				labelText="Start Date"
				type="date"
				placeholder="Enter Your Start Date"
				value={formData.startDate}
				onChange={(e) => handleChange(e, "StartDate")}
				data-key="StartDate"
			/>
			<InputGroup
				id="enddate"
				labelText="End Date"
				type="date"
				placeholder="Enter Your End Date"
				value={formData.endDate}
				onChange={(e) => handleChange(e, "EndDate")}
				data-key="EndDate"
			/>
			<InputGroup
				id="location"
				labelText="Location"
				placeholder="Location"
				value={formData.Location}
				onChange={(e) => handleChange(e, "Location")}
				data-key="Location"
			/>
			<div className="Form-button">
				<button type="button" onClick={() => deleteEducation(education.id)}>
					Delete
				</button>
				<button type="button" onClick={() => clearEducation(education.id)}>
					Clear
				</button>
				<button type="button" onClick={() => updateEducation(education.id, formData)}>
					Save
				</button>
			</div>
		</div>

	)
}