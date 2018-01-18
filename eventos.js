/* Definimos el objeto teclas con el código de las 
 * teclas que se desean detectar
 */

var teclas = {
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
};

var posicion = {
	x : 150,
	y : 150
}

/* Detectando el evento "keydown" y llamando a la función
 * dibujarTeclado
 */

document.addEventListener("keydown", dibujarTeclado);
area = document.getElementById('area_de_dibujo');
lienzo = area.getContext("2d");

/* Dibujando los marcos
 */
dibujarLinea("grey",0,0,300,0);
dibujarLinea("grey",300,0,300,300);
dibujarLinea("grey",300,300,0,300);
dibujarLinea("grey",0,300,0,0);


/* La función dibujar linea recibe como parámetro
 * el color, punto inicial y punto final
 */

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineWidth = 1;
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

/* La función dibujarTeclado recibo como parámetro el objeto
 * generado en el evento "keydown". Se puede conocer los metodos
 * y atributos haciendo un consle.log(evento)
 */

function dibujarTeclado(evento){
	switch (evento.keyCode)
	{
		case teclas.UP: 
			if (posicion.y-1 >=0){
				dibujarLinea(
					"red",
					posicion.x,
					posicion.y,
					posicion.x,
					--posicion.y);
			}
		break;
		case teclas.DOWN: 
			if (posicion.y+1 <= 300){
				dibujarLinea(
					"red",
					posicion.x,
					posicion.y,
					posicion.x,
					++posicion.y);
			}
		break;
		case teclas.LEFT: 
			if (posicion.x-1 >=0){
				dibujarLinea(
					"red",
					posicion.x,
					posicion.y,
					--posicion.x,
					posicion.y);
			}
		break;
		case teclas.RIGHT: 
			if (posicion.x-1 >=0){
				dibujarLinea(
					"red",
					posicion.x,
					posicion.y,
					++posicion.x,
					posicion.y);
			}
		break;
		default:
			console.log("otra tecla");
	}
}
