import React from "react";

const DashboardLayout = ({children}) => {
	return(
    <div className="dashboard-layout">
        <div className="side-nav-bar">
            This is side nav bar
        </div>
        <div className="main-container">
            This Contains Children of  DashBoard
        </div>
        
    </div>
    );
};

export default DashboardLayout;
