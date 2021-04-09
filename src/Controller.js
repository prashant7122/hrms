import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";

const Controller = () => {
	return (
		<Router>
			<DashboardLayout>
                This is Dashboard Layout
				<Switch>
					<Route />
				</Switch>
			</DashboardLayout>
		</Router>
	);
};

export default Controller;
