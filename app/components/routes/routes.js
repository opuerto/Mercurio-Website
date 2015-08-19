mercurioApp.config(['$routeProvider','$httpProvider','jwtInterceptorProvider','cfpLoadingBarProvider',function ($routeProvider,$httpProvider,jwtInterceptorProvider,cfpLoadingBarProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'app/templates/routeTemplates/paginaInicio.html',
        controller: 'paginaInicioController'
    })
	.when('/ver/anuncio/:id/:tipoAnuncio', {
        templateUrl: 'app/templates/routeTemplates/verAnuncios.html',
        controller: 'verAnuncioController'
    })  
    .when('/ver/anuncio/:id/:tipoAnuncio/:empresaId', {
        templateUrl: 'app/templates/routeTemplates/verAnuncios.html',
        controller: 'verAnuncioController'
    })  
    .when('/registrate', {
        templateUrl: 'app/templates/routeTemplates/registrate.html',
        controller: 'registraController'
    }) 
     .when('/anuncios/categoria/:ca_id', {
        templateUrl: 'app/templates/routeTemplates/anunciocategoria.html',
        controller: 'paginaInicioController'
    })
    .when('/anuncios/departamento/:de_id', {
        templateUrl: 'app/templates/routeTemplates/anunciodepartamento.html',
        controller: 'paginaInicioController'
    })  
    .when('/reset/password', {
        templateUrl: 'app/templates/routeTemplates/resetPassword.html',
        controller: 'resetPasswordController'
    }) 
    .when('/contactanos', {
        templateUrl: 'app/templates/routeTemplates/contactanos.html',
        controller: 'contactanosController'
    }) 
    
     .otherwise({
               redirectTo: '/'
    })
     cfpLoadingBarProvider.includeSpinner = false;
    jwtInterceptorProvider.urlParam = 'token';
      jwtInterceptorProvider.tokenGetter = function() {
        return localStorage.getItem('token');
      }
      $httpProvider.interceptors.push('jwtInterceptor');
   
    
	 
}]);