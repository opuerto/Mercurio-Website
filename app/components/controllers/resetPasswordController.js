mercurioApp.controller('resetPasswordController',['$cookies','$scope','$location',
	'$http','$timeout','$resource','$log','$routeParams','$anchorScroll','$sce',
	'mainPageService','anuncioService',
	'registraService','paisesService','$localStorage','$sessionStorage','jwtHelper','resetPassword',
	function($cookies,$scope,$location,$http,$timeout,$resource,
		$log,$routeParams,$anchorScroll,$sce,mainPageService,
		anuncioService,registraService,paisesService,$localStorage,$sessionStorage,jwtHelper,resetPassword) 
{
	$anchorScroll();
	
	$scope.reset = {};
	$scope.reset.email = '';
	//guardar la password nueva si esta tratando de reiniciar la password
	$scope.newpassword = '';
	
	//guardar el codigo para reiniciar la password
	$scope.code = $routeParams.code;
	//guardar el id del usuario que esta tratando de reiniciar la password
	$scope.id = $routeParams.id;

	$scope.restePassword = function()
	{
		data = {email:$scope.reset.email};
		resetPassword.resetPassword(data).success(function(data){
					swal({
		                title: "Un correo se ha enviado a "+$scope.reset.email,
		                text: "por favor revise su bandeja de entrada",
		                type: "success" 
		            },function(){
		            	window.location.href = "/";
		            	
		            	
		            });
		}).error(function(data)
		{
			$log.log(data);
		})
	}

	

}]);