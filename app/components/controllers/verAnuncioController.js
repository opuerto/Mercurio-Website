mercurioApp.controller('verAnuncioController',['$cookies','$scope','$location','$http','$timeout','$resource','$log','$routeParams','$anchorScroll','$sce','mainPageService','anuncioService',
	function($cookies,$scope,$location,$http,$timeout,$resource,$log,$routeParams,$anchorScroll,$sce,mainPageService,anuncioService) 
{
	$scope.anuncio = {};
	$scope.tipoAnuncio = $routeParams.tipoAnuncio;
	$scope.empresaId = $routeParams.empresaId;

	if ($scope.tipoAnuncio === 'empresa') 
	{
		if ($routeParams.id && $scope.empresaId) 
		{
			anuncioService.getEmpresaNombre($scope.empresaId).success(function(data)
			{
				$scope.anuncio.nombreEmpresa = data.nombre;
			}).error(function(data){})
			anuncioService.getAnuncioByID($routeParams.id,$scope.empresaId).success(function(data)
			{
				//asignar la data para la propiedad anunciByIdResult (Ver anuncio)
				$scope.anuncio.anuncioByIdResult = data.datos;	
				$log.log($scope.anuncio.anuncioByIdResult);
			}).
			error(function(data)
			{

			})		
		};
		
	}
	else if($scope.tipoAnuncio === 'admin')
	{
		if ($routeParams.id) 
		{
			anuncioService.getAdminAnuncioById($routeParams.id).success(function(data) {
			$scope.anuncio.nombreEmpresa = data.anuncio.nombre_empresa;	
            $scope.anuncio.anuncioByIdResult = data.anuncio;
            $log.log($scope.anuncio.anuncioByIdResult);
        	})

		};
	}

	$scope.showDescripcionHtml = function(html)
	{
		return $sce.trustAsHtml(html);
	}

}]);