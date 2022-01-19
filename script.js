// 'use strict';

function rentalyieldCalc() {

var rent = getFieldFloatValue("rent");
var period	= getFieldFloatValue("period");
var vr	= getFieldFloatValue("vacancy_rate")/100;
var oc	= getFieldFloatValue("oc");
var p	= getFieldFloatValue("p");
var gei	= document.getElementById("gei");
var noi	= document.getElementById("noi");
var ry	= document.getElementById("ry");

	gei.value = round((rent * period * (1 - vr)),2);
	noi.value = round((gei.value - oc),2);
	ry.value = round((noi.value / p) * 100, 2);
	pbp.value = round((p / noi.value), 2);

}

function round(n,dec) {

	X = n * Math.pow(10,dec);
	X= Math.round(X);
	return (X / Math.pow(10,dec)).toFixed(dec);
}

function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}

// function resetValues(form) {
//   for(var i = 0; i < form.elements.length; i++) {
//   if(form.elements[i].type == "text") { form.elements[i].value = "";}
//   }
// }

