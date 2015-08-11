mercurioApp.controller('paginaInicioController',['$cookies','$scope','$location','$http','$timeout','$resource','$log','$routeParams','$anchorScroll','$sce','mainPageService','anuncioService',
	function($cookies,$scope,$location,$http,$timeout,$resource,$log,$routeParams,$anchorScroll,$sce,mainPageService,anuncioService) 
{
	$anchorScroll();
	$scope.anuncios = {};
	var token = mainPageService.token;
	if (!token) 
	{
		mainPageService.getToken().success(function(data)
		{
			 // Setting a cookie
	          time = new Date(1451606400 * 1000);
	          //si no hay errores al solicitar el cookie
	         
	          //guardamos una nueva cookie 
	          $cookies.put('token_mercuriowebsite', data.access_token, {
	                'expires': time
	          });
	          
		})
		.error(function(data)
		{
			
		})
			
	};

	anuncioService.getTodosLosAnuncios().success(function(data)
	{
		$scope.anuncios.anunciosResult = data.datos;
		$scope.anuncios.NumAnuncios = data.datos.length;
	}).error(function(data){$log.log(data)})
	
}]);	