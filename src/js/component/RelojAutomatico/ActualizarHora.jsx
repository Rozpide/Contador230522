import React from "react";

const ActualizarHora = () => {
	return (
		<div className="wrap">
			<div className="widget">
				<div className="fecha">
					<p id="diaSemana" className="diaSemana"></p>

					<p id="dia" className="dia">
						{" "}
					</p>
					<p> de </p>

					<p id="mes" className="mes">
						{" "}
					</p>
					<p> del </p>
					<p id="year" className="Year"></p>
				</div>
				<div class="reloj">
					<p id="horas" className="horas"></p>
					<p>:</p>
					<p id="minutos" className="minutos"></p>
					<p>:</p>
					<div class="caja-segundos">
						<p id="ampm" className="ampm"></p>
						<p id="segundos" className="segundos"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActualizarHora;
