import React from "react";

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
				</div>
			</div>
		</div>
	);
};

export default ActualizarHora;
