import React from "react";

const ActualizarHora2 = () => {
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

export default ActualizarHora2;
