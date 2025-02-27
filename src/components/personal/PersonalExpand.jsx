import { useEffect, useState } from "react"
import { InputGroup } from "../InputGroup"

	export function PersonalExpand(personal) {
	// export function PersonalExpand(personal,updatePersonal,deletePersonal,clearPersonal) {
	const [formData, setFormData] = useState({
		Name: personal.Name,
		Email: personal.Email,
		Phonenumber: personal.Phonenumber,
		Address: personal.Address
	});

	useEffect(() => {
		setFormData({
			Name: personal.Name,
			Email: personal.Email,
			Phonenumber: personal.Phonenumber,
			Address: personal.Address
		});
	}, [personal]);

	const handleChange = (e, key) => {
		setFormData({
			...formData,
			[key]: e.target.value
		});
	};

	return (
		<div className="personal-expand">
			<InputGroup
				id="name"
				labelText="Full Name"
				placeholder="Enter Your Name"
				value={formData.Name}
				onChange={(e) => handleChange(e, 'Name')}
				data-key="Name"
			/>
			<InputGroup
				id="email"
				labelText="E-mail"
				placeholder="Enter Your Email"
			    value={formData.Email}
			    onChange={(e)=>handleChange(e,"email")}
			    data-key="email"
			/>
			<InputGroup
				id="phonenumber"
				labelText="Phone Number"
				placeholder="Enter Your Number"
			    value={formData.Phonenumber}
			    onChange={(e)=>handleChange(e,"number")}
			    data-key="number"
			/>
			<InputGroup
				id="address"
				labelText="Your Address"
				placeholder="Enter Your Address"
			    value={formData.Address}
			    onChange={(e)=>handleChange(e,"address")}
			    data-key="address"
			/>
			{/* <div className="Form-button">
				<button type="button" onClick={() => deletePersonal(personal.id)}>
					Delete
				</button>
				<button type="button" onClick={() => clearPersonal(personal.id)}>
					Clear
				</button>
				<button type="button" onClick={() => updatePersonal(personal.id, formData)}>
					Save
				</button>
			</div> */}
		</div>

	)
}