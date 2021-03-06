mercurioApp.controller('paginaInicioController', ['$cookies', '$scope', '$location', '$http', '$timeout', '$resource', '$log', '$routeParams', '$anchorScroll', '$sce', 'mainPageService', 'anuncioService',
    function($cookies, $scope, $location, $http, $timeout, $resource, $log, $routeParams, $anchorScroll, $sce, mainPageService, anuncioService) {
        $anchorScroll();
        $scope.anuncios = {};
        $scope.credentials = {}
        $scope.credentials.email;
        $scope.credentials.password;
        $scope.current_page = 1;
        $scope.lastpage;

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

        anuncioService.sumarAnunciosMostrados();

       if($location.path() == '/')
       { 
        anuncioService.getTodosLosAnuncios($scope.current_page).success(function(data) {
           
            $scope.anuncios.anunciosResult = data.datos;
            $scope.lastpage = data.pagination.last_page;
          
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

    }

        if ($location.path() == '/anuncios/departamento/'+$routeParams.de_id) 
        {
            $scope.current_page = 1;
            anuncioService.getAnuncioByDepartamento($routeParams.de_id,$scope.current_page).success(function(data)
            {
                 $scope.anuncios.anunciosResult = data.datos;
                 $scope.lastpage = data.pagination.last_page;
                 $scope.anuncios.NumAnuncios = data.datos.length;
            })
            .error(function(data,status)
            {
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



        };

        /* $scope.sumarClicks = function(id)
        {
            
            anuncioService.sumarClick(id)
        }*/

        if ($location.path() == '/anuncios/categoria/'+$routeParams.ca_id) 
        {
            $scope.current_page = 1;
             anuncioService.getAnuncioByCategoria($routeParams.ca_id,$scope.current_page).success(function(data)
            {
                 $scope.anuncios.anunciosResult = data.datos;
                 $scope.lastpage = data.pagination.last_page;
                 $scope.anuncios.NumAnuncios = data.datos.length;
            })
            .error(function(data,status)
            {
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
      
        };

        //Funciones para Todos los anuncios 
        $scope.next = function()
        {
             ++$scope.current_page;               
             anuncioService.getTodosLosAnuncios($scope.current_page).success(function(data) {
           
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;
                    $anchorScroll();  
            }, 0);

            

            
           
        })
        
      }  
      $scope.preview = function()
        {
             --$scope.current_page;               
             anuncioService.getTodosLosAnuncios($scope.current_page).success(function(data) {
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;  
                    $anchorScroll();
            }, 0);

                      
           
        })
        
      }  

      //Funciones para getanunciosbycategoria y get anunciosbydepartamento

      $scope.nextInDepartamento = function()
      {
        ++$scope.current_page; 
        anuncioService.getAnuncioByDepartamento($routeParams.de_id,$scope.current_page).success(function(data) {
           
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;
                    $anchorScroll();  
            }, 0);
           
        })
             
      }

      $scope.previewInDepartamento = function()
      {
        --$scope.current_page; 
        anuncioService.getAnuncioByDepartamento($routeParams.de_id,$scope.current_page).success(function(data) {
           
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;
                    $anchorScroll();  
            }, 0);
           
        }) 
      }

      $scope.nextInCategoria = function()
      {
             ++$scope.current_page; 
            anuncioService.getAnuncioByCategoria($routeParams.ca_id,$scope.current_page).success(function(data) {
           
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;
                    $anchorScroll();  
            }, 0);
           
        })
      }

      $scope.previewInCategoria = function()
      {
            --$scope.current_page; 
            anuncioService.getAnuncioByCategoria($routeParams.ca_id,$scope.current_page).success(function(data) {
           
            $timeout(function() {
                        $scope.anuncios.anunciosResult = data.datos;    
                   $scope.anuncios.NumAnuncios = data.datos.length;
                    $anchorScroll();  
            }, 0);
           
        }) 
      }

      
 }]);