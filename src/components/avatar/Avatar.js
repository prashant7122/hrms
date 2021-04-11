import React from "react";

const Avatar = ({ srcUrl = "https://reqres.in/img/faces/7-image.jpg" }) => {
	return (
		<div className="avatar">
			<img className="image" src={srcUrl} alt={"User Pic"} />
		</div>
	);
};

export default Avatar;
