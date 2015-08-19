mercurioApp.controller('contactanosController',['$cookies','$scope','$location',
	'$http','$timeout','$resource','$log','$routeParams','$anchorScroll','$sce',
	'mainPageService','anuncioService',
	'registraService','paisesService','$localStorage','$sessionStorage','jwtHelper',
	function($cookies,$scope,$location,$http,$timeout,$resource,
		$log,$routeParams,$anchorScroll,$sce,mainPageService,
		anuncioService,registraService,paisesService,$localStorage,$sessionStorage,jwtHelper) 
{
	$anchorScroll();

	$scope.contactanos = {};

	$scope.contactanos.nombre = '';
	$scope.contactanos.email = '';
	$scope.contactanos.mensaje = '';

	$scope.validar = function(input)
	{
		if (input[0].nombre !== '' && input[0].email !== '' && input[0].mensaje !== '') 
		{
			return true
		}
		else
		{
			if(input[0].nombre == '')
			{
				//return "Escriba el nombre de la empresa";
				$("#bloc-nombre").addClass('has-error');
				$("#nombre-text").css({'display':'block'}).append("* Escriba su nombre completo");
			};	
			if (input[0].email == '') 
			{
				//return "Escriba el nombre de la empresa";
				$("#bloc-email").addClass('has-error');
				$("#email-text").css({'display':'block'}).append("* Escriba su email");	
			};
			if (input[0].mensaje == '') 
			{
				$("#mensaje-text").css({'display':'block'}).append("* Escriba algun comentario");	
			};
		}
	}

	$scope.cleanError = function()
	{
			//return "Escriba el nombre de la empresa";
				$("#bloc-nombre").removeClass('has-error');
				$("#nombre-text").css({'display':'none'}).text("");
			//return "Escriba el nombre de la empresa";
				$("#bloc-email").removeClass('has-error');
				$("#email-text").css({'display':'none'}).text("");
			$("#mensaje-text").css({'display':'none'}).text("");		
	}

	$scope.enviarCorreo = function()
	{
		
		$scope.cleanError();
		var input = [];
		data = {
					nombre:$scope.contactanos.nombre,
					email:$scope.contactanos.email,
					mensaje:$scope.contactanos.mensaje

			   }
		input[0] = data;
		var validar = $scope.validar(input);
		if (validar) 
		{
			registraService.contactanos(data).success(function()
			{
				swal({
		                title: "Su mensaje ha sido enviado!",
		                text: "Gracias por contactarnos, te responderemos con la brevedad posible.",
		                type: "success" 
		            },function(){
		            	window.location.href = "/";
		            	
		            	
		            });	
			}).error(function(data)
			{
				swal({
		                title: data.mensaje,
		                type: "error" 
		            });
			})			
		};
	}


}]);