import React,{useEffect} from "react";
import Header from "../../components/header/Header";
import authenticate from "../../hoc/authentication"

const Home = (props) => {
	return (
		<div className="home">
			<Header pageHeader="Dashboard"/>
		</div>
	);
};

export default authenticate(Home);
