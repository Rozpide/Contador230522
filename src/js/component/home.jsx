import React from "react";

import ActualizarHora from "./RelojAutomatico/Crono.jsx";
import ActualizarHora2 from "./RelojAutomatico/Reloj.jsx";
import ActualizarHora3 from "./RelojAutomatico/Reloj2.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<ActualizarHora>
				<ActualizarHora2></ActualizarHora2>
				<ActualizarHora3></ActualizarHora3>
			</ActualizarHora>
		</div>
	);
};

export default Home;
