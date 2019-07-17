import React from "react";
import logo from  "/Users/abdulahmad/Lambda-Projects/WeathR/weathr/src/img/logo.png"

const Titles = () => (
	<div>
		<h1 className="title-container__title"><h1>WeathR</h1></h1>
        {/* <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3> */}
        <img src={logo} alt="Logo" />
	</div>
);

export default Titles;