$(document).ready(inicio);
function inicio(){
	
    showSidebarDefautl();
   	
}

function showSidebarDefautl()
{
	var no_primer_login = localStorage.getItem('primer_login');
	if (no_primer_login !== "1") 
		{
			localStorage.setItem('primer_login', 1);	
			//asigno 1 a ma-layout-status para asegurarme que siempre muestre la barra de opciones.
			localStorage.setItem('ma-layout-status', 1);	
			$('body').addClass('sw-toggled');
        	$('#tw-switch').prop('checked', true);
		};

}
