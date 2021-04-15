import React, { Fragment } from "react";
const defaultClasses = {
	inputClassname: "",
	labelClassname: "",
	iconClassname: "",
	inputComponentClass: "",
	inputIconContainer: "",
};
const Input = ({
	type = "text",
	value,
	name,
	label,
	id,
	icon,
	classes = { ...defaultClasses },
	placeholder,
	onChange = () =>{},
	onFocus = () => {},
	onBlur = () => {},
	errors,
}) => {
	const {
		inputClassname,
		labelClassname,
		iconClassname,
		inputComponentClass,
		inputIconContainer,
	} = classes;
	return (
		<Fragment>
			<div className={`input-component ${inputComponentClass}`}>
				{label && (
					<label className={`label ${labelClassname}`}>{label}</label>
				)}
				<div className={`input-icon-container ${inputIconContainer}`}>
					<input
						id={id}
						className={`input ${inputClassname}`}
						onChange={onChange}
						type={type}
						placeholder={placeholder}
						value={value}
						name={name}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					{icon}
				</div>
			</div>
			{errors && <p className="input-error">{errors}</p>}
		</Fragment>
	);
};

export default Input;
