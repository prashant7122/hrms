import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
const navItems = [
	{
		name: "Dashboard",
		icon: <BiHomeAlt />,
		link: "/",
	},
	{
		name: "Recruitment",
		icon: <BsPeople />,
		link: "/recruitment",
	},
	{
		name: "Onboarding",
		icon: <CgNotes />,
		link: "/onboarding",
	},
	{
		name: "Reports",
		icon: <RiBarChartBoxLine />,
		link: "/reports",
	},
	{
		name: "Calendar",
		icon: <AiOutlineCalendar />,
		link: "/calendar",
	},
	{
		name: "Settings",
		icon: <AiOutlineSetting />,
		link: "/settings",
	},
];

const DashboardLayout = ({ children }) => {
	const location = useLocation();
	return (
		<div className="dashboard-layout">
			<nav className="side-nav-bar">
				<div className="logo-container">
					<h3>Newton HR</h3>
				</div>
				<div className="nav-container">
					{navItems.map((navItem, index) => (
						<Link key={index} to={navItem.link}>
							<div
								className={`nav-item ${
									navItem.link === location.pathname
										? "selected"
										: ""
								}`}
							>
								{navItem.icon}
								<label className="item-name">
									{navItem.name}
								</label>
							</div>
						</Link>
					))}
				</div>
				<div className="image-container-small">
					Add vector of your choice
				</div>
			</nav>
			<div className="main-container">{children}</div>
		</div>
	);
};

export default DashboardLayout;
