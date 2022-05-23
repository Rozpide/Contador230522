import React from "react";
import ActualizarHora2 from "./Reloj.jsx";
import ActualizarHora3 from "./Reloj2.jsx";
const ActualizarHora = () => {
	return (
		<div class="wrap">
			<div class="widget">
				<div class="fecha">
					<p id="diaSemana" class="diaSemana"></p>

					<p id="dia" class="dia">
						{" "}
					</p>
					<p> de </p>

					<p id="mes" class="mes">
						{" "}
					</p>
					<p> del </p>
					<p id="year" class="Year"></p>
					<ActualizarHora2></ActualizarHora2>
				</div>
				<div class="reloj">
					<p id="horas" class="horas"></p>
					<p>:</p>
					<p id="minutos" class="minutos"></p>
					<p>:</p>
					<div class="caja-segundos">
						<p id="ampm" class="ampm"></p>
						<p id="segundos" class="segundos"></p>
					</div>
					<ActualizarHora3></ActualizarHora3>
				</div>
			</div>
		</div>
	);
};

export default ActualizarHora;
