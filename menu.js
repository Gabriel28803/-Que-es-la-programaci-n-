let abrirMenu = document.querySelector(".contenedor__abrir_menu");
let cerrarMenu = document.querySelector(".cerrar__menu");
let menu = document.querySelector(".menu");

abrirMenu.addEventListener("click", ()=>{
	abrirMenu.style.display = "none"
	menu.style.transform= "translateY(0)";
})
cerrarMenu.addEventListener("click", ()=>{
	abrirMenu.style.display= "block"
	menu.style.transform= "translateY(-500px)";	
})