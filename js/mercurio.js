$(document).ready(inicio);
function inicio(){
	
    showSidebarDefautl();
    //take out for a momment .
    //scrollable();
    //$('#ascrail2000').show();
   	
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

function scrollable() { 

    $("#sidebar").niceScroll(
    		{
        cursorcolor: "rgba(0,0,0,0.5)",
        cursoropacitymin: 0.3,
        background: "#bbb",
        cursorborder: "0",
        autohidemode: false,
        cursorminheight: 30
    }
    	);

  }

