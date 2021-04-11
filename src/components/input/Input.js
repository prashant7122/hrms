import React, { Fragment } from "react";
const defaultClasses = {
	inputClassname: "",
	labelClassname: "",
	iconClassname: "",
	inputComponenetClass: "",
	inputIconContainer: "",
};
const Input = ({
	type = "text",
	value,
	name,
	label,
	id,
	icon,
	classes={...defaultClasses},
	placeholder,
	onChange,
}) => {
	const {
		inputClassname,
		labelClassname,
		iconClassname,
		inputComponenetClass,
		inputIconContainer,
	} = classes;
	return (
		<div className={`input-component ${inputComponenetClass}`}>
			{label && (
				<label className={`label ${labelClassname}`}>{label}</label>
			)}
			<div className={`input-icon-container ${inputIconContainer}`}>
				<input
					id={id}
					className={`input ${inputClassname}`}
					onChange={onchange}
					type={type}
					placeholder={placeholder}
					value={value}
					name={name}
				/>
				{icon}
			</div>
		</div>
	);
};

export default Input;
