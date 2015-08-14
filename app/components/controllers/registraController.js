mercurioApp.controller('registraController',['$cookies','$scope','$location',
	'$http','$timeout','$resource','$log','$routeParams','$anchorScroll','$sce',
	'mainPageService','anuncioService',
	'registraService','paisesService','$localStorage','$sessionStorage','jwtHelper',
	function($cookies,$scope,$location,$http,$timeout,$resource,
		$log,$routeParams,$anchorScroll,$sce,mainPageService,
		anuncioService,registraService,paisesService,$localStorage,$sessionStorage,jwtHelper) 
{
	$anchorScroll();
	$scope.registra = {};

	//Propiedades del objeto registra
	$scope.registra.nombreUsuario = '';
	$scope.registra.apellido = '';
	$scope.registra.email = '';
	$scope.registra.password = '';
	$scope.registra.nombreEmpresa = '';
	$scope.terminos = 
	{
		value1 : 'NO'
       
	}



	// para guardar los rubros 
	var rubro;
	//arreglo para guardar los rubros que mostramos en el select input
	$scope.registra.rubro = [];
	$scope.registra.rubro[0] = {id:"-1",nombre:"Seleccione un rubro"};
	$scope.rubro;

		
    /*
	|
	|	Obtengo el rubro de la empresa 
	|
	*/
	registraService.getRubro().success(function(data){
		rubro = data;
		for(i=0; i < rubro.length; i++)
		{
			$scope.registra.rubro[i+1] = {id:rubro[i].id,nombre:angular.uppercase(rubro[i].nombre)};	
		}	
		//$log.log(rubro);
	});

	//Lista de paises del mundo
	$scope.pais;
	$scope.listaPaises = paisesService.getPaises();
	
	$scope.validateFormRegistraEmpresa = function(inputs)

	{
		if (inputs !== 'undefined' && inputs.length > 0) 
		{
			for (i=0; i < inputs.length; i++) {
				if (inputs[i].terminos !== 'NO' && inputs[i].nombreUsuario !== '' && inputs[i].apellido !== '' && inputs[i].direccion !== '' && inputs[i].email !== '' && inputs[i].password !== '' && inputs[i].pais !=='Seleccione un país' && inputs[i].rubro_id !== '-1' ) 
					{
						return true;
					}
				else
					{
						if (inputs[i].terminos === 'NO') 
							{
								$("#terminos-text").css({'display':'block'}).append("Debe aceptar los terminos y condiciones de uso");
							};
						if (inputs[i].nombreUsuario == '') 
							{
								//return "Escriba el nombre de la empresa";
								$("#bloc-nombre").addClass('has-error');
								$("#nombre-text").css({'display':'block'}).append("* Escriba su nombre");
							};
						 if (inputs[i].apellido == '')
							{	
								//return "Escriba la dirección de la empresa";
								$("#bloc-apellido").addClass('has-error');
								$("#apellido-text").css({'display':'block'}).append("* Escriba su apellido");
							};
						 if(inputs[i].email == '')
							{
								//return "Escriba el telefono de la empresa";
								$("#bloc-email").addClass('has-error');
								$("#email-text").css({'display':'block'}).append("Escriba su email");
							};
						
						 if (inputs[i].password == '')
							{
								//return "Escriba el email de la empresa";
								$("#bloc-password").addClass('has-error');
								$("#password-text").css({'display':'block'}).append("Escriba una contraseña");
							};
						 if (inputs[i].nombreEmpresa == '')
							{
								//return "Escriba el email de la empresa";
								$("#bloc-nombreEmpresa").addClass('has-error');
								$("#nombreEmpresa-text").css({'display':'block'}).append("Escriba el nombre de la empresa");	
							};	
						
						 if (inputs[i].rubro_id == '-1')
							{
								//return "Seleccione un rubro";
								$("#bloc-rubro").addClass('has-error');
								$("#rubro-text").css({'display':'block'}).append("Seleccioné un rubro");
							};
						 if (inputs[i].pais == 'Seleccione un país' )
							{
								//return "Seleccioné un país";
								$("#bloc-pais").addClass('has-error');
								$("#pais-text").css({'display':'block'}).append("Seleccioné un país");
							};
					};	
			};
		};
	}
	

	$scope.registrarEmpresa = function()
	{
		var datos = 
		{
			terminos:$scope.terminos.value1,
			nombreUsuario:$scope.registra.nombreUsuario,
			apellido:$scope.registra.apellido,
			email:$scope.registra.email,
			password:$scope.registra.password,
			nombreEmpresa:$scope.registra.nombreEmpresa,
			rubro_id:$scope.rubro,
			pais:$scope.pais

		}
		var inputs = [];
		inputs[0] = datos;
		var validar = $scope.validateFormRegistraEmpresa(inputs);
		if (validar) 
		{
			var data = 
			{
				email:$scope.registra.email,
				password:$scope.registra.password,
				nombre:$scope.registra.nombreUsuario,
				apellido:$scope.registra.apellido,
				grupo:'empresa',
				terminos:$scope.terminos.value1,

			}
			registraService.registraUsuario(data).success(function(data)
			{
				
				 
				 localStorage.setItem('token',data.token);
				 //var tokenPayload = jwtHelper.decodeToken(data.token);
				 if(data.token)
				{
					 
					datos_empresa =
					{
						nombre:$scope.registra.nombreEmpresa,
						pais:$scope.pais,
						rubro_id:$scope.rubro,
					}
					registraService.CrearEmpresa(datos_empresa).success(function(data)
					{
							//redirecciono con el token 					
						window.location = "http://localapi.mercurio.hn/aplicacion?token="+localStorage.getItem('token');
					}).error(function(data)
					{
						
					})
				}	
			}).
			error(function(data)
			{

			})

		};

	}


}]);