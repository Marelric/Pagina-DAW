function line(x1, y1, x2, y2){
	x1 = +x1;
	y1 = +y1;
	x2 = +x2;
	y2 = +y2;

	var canvas  = document.getElementById("canvas1");
	var context = canvas.getContext("2d");

	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	document.getElementById('x1').value = "0";
	document.getElementById('y1').value = "0";
	document.getElementById('x2').value = "0";
	document.getElementById('y2').value = "0";

	document.getElementById('x1').focus();
}