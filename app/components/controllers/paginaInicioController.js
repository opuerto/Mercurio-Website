mercurioApp.controller('paginaInicioController', ['$cookies', '$scope', '$location', '$http', '$timeout', '$resource', '$log', '$routeParams', '$anchorScroll', '$sce', 'mainPageService', 'anuncioService',
    function($cookies, $scope, $location, $http, $timeout, $resource, $log, $routeParams, $anchorScroll, $sce, mainPageService, anuncioService) {
        $anchorScroll();
        $scope.anuncios = {};
        $scope.credentials = {}
        $scope.credentials.email;
        $scope.credentials.password;
        $scope.credentials.recordarme = 
        {
        value1 : 'NO'
       
        }
        var token = mainPageService.token;
        if (!token) {
            mainPageService.getToken().success(function(data) {
                // Setting a cookie
                time = new Date(1451606400 * 1000);
                //si no hay errores al solicitar el cookie
                //guardamos una nueva cookie 
                $cookies.put('token_mercuriowebsite', data.access_token, {
                    'expires': time
                });
            }).error(function(data) {
                if (data.error == "access_denied") {
                    // Setting a cookie
                    time = new Date(1451606400 * 1000);
                    //si no hay errores al solicitar el cookie
                    //guardamos una nueva cookie 
                    $cookies.put('token_mercuriowebsite', data.access_token, {
                        'expires': time
                    });
                };
            })
        };
        anuncioService.getTodosLosAnuncios().success(function(data) {
            $scope.anuncios.anunciosResult = data.datos;
            $scope.anuncios.NumAnuncios = data.datos.length;
        }).error(function(data,status) {
            
            //si el token no existe en la base de datos
            if (data.error == "access_denied" || status === 500) {
            	//volvemos a crear un token y a guardarlo
                mainPageService.getToken().success(function(data) {
                	$cookies.remove('token_mercuriowebsite');
                    // Setting a cookie
                    time = new Date(1451606400 * 1000);
                    //si no hay errores al solicitar el cookie
                    //guardamos una nueva cookie 
                    $cookies.put('token_mercuriowebsite', data.access_token, {
                        'expires': time
                    });
                    location.reload();
                })
            };
        })

      
 }]);