mercurioApp.config(function ($routeProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'app/templates/routeTemplates/paginaInicio.html',
        controller: 'paginaInicioController'
    })

});