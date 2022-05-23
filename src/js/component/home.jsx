import React from "react";

import ActualizarHora from "./RelojAutomatico/ActualizarHora.jsx";
import { ActualizarHora2 } from "./RelojAutomatico/ActualizarHora.jsx";
// import ActualizarHora2 from "./RelojAutomatico/ActualizarHora2.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<ActualizarHora>
				<ActualizarHora2></ActualizarHora2>
			</ActualizarHora>
		</div>
	);
};

export default Home;
