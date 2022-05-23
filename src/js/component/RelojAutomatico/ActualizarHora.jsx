import React from "react";

export const ActualizarHora2 = () => {
	let fecha = new Date();
	let horas = fecha.getHours();
	let ampm;
	let minutos = fecha.getMinutes();
	let segundos = fecha.getSeconds();
	let diaSemana = fecha.getDay();
	let dia = fecha.getDate();
	let mes = fecha.getMonth();
	let year = fecha.getFullYear();
	let pHoras = document.getElementById("horas");
	let pAMPM = document.getElementById("ampm");
	let pMinutos = document.getElementById("minutos");
	let pSegundos = document.getElementById("segundos");
	let pDiaSemana = document.getElementById("diaSemana");
	let pDia = document.getElementById("dia");
	let pMes = document.getElementById("mes");
	let pYear = document.getElementById("year");

	let semana = [
		" Domingo ",
		" Lunes ",
		" Martes ",
		" Miercoles ",
		" Jueves ",
		" Viernes ",
		" Sabado ",
	];
	pDiaSemana.textContent = semana[diaSemana];
	pDia.textContent = dia;

	let meses = [
		" Enero ",
		" Febrero ",
		" Marzo ",
		" Abril ",
		" Mayo ",
		" Junio ",
		" Julio ",
		" Agosto ",
		" Septiembre ",
		" Octubre ",
		" Noviembre ",
		" Diciembre ",
	];
	pMes.textContent = meses[mes];
	pYear.textContent = year;
	{
		horas >= 12 ? (horas = horas - 12) : (horas = horas);
	}
	{
		horas >= 12 ? (ampm = "PM") : (ampm = "AM");
	}
	{
		horas === 0 ? (horas = 12) : (horas = horas);
	}

	pHoras.textContent = horas;
	pAMPM.textContent = ampm;

	{
		minutos < 10 ? (minutos = "0" + minutos) : (minutos = minutos);
	}
	{
		segundos < 10 ? (segundos = "0" + segundos) : (segundos = segundos);
	}

	pMinutos.textContent = minutos;
	pSegundos.textContent = segundos;

	let intervalo = setInterval(ActualizarHora2, 1000);
	return <></>;
};
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
