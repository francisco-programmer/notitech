const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');


if(localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('hidden');
	fondoAvisoCookies.classList.add('hidden')
}

botonAceptarCookies.addEventListener('click', () => {	
	localStorage.setItem('cookies-aceptadas', true);
	avisoCookies.classList.add('hidden');
	fondoAvisoCookies.classList.add('hidden')
	
});