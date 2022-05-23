import React from "react";

const ActualizarHora3 = () => {
	var pHoras = document.getElementById("horas"),
		pAMPM = document.getElementById("ampm"),
		pMinutos = document.getElementById("minutos"),
		pSegundos = document.getElementById("segundos"),
		pDiaSemana = document.getElementById("diaSemana"),
		pDia = document.getElementById("dia"),
		pMes = document.getElementById("mes"),
		pYear = document.getElementById("Year");

	var semana = [
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

	var meses = [
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
	pMes.textContent = meses[meses];
	pYear.textContent = Year;
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
};
export default ActualizarHora3;
