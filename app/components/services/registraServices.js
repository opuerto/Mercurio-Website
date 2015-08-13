mercurioApp.service('registraService', ['$resource', '$cookies', '$http','mainPageService', function($resource, $cookies, $http, mainPageService) {
	var url_request = mainPageService.urlRequest;
	var token = mainPageService.token;

	this.getRubro = function()
	{
		 if (token) {
            var url = url_request+"/api/v0.1/rubro/rubros";
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    access_token: token
                }
            });
            return promise;
        };
	}

	this.registraUsuario = function(data)
	{
		if (token) 
		{
			data.access_token = token;
            promise = $http.post(url_request+"/api/v0.1/users/usuarios", data);
            return promise;
		};
	}

	this.loginUser = function(data)
	{
		if (token) 
		{
			 data.access_token = token;
            promise = $http.post(url_request+"/api/v0.1/auth/login", data);
            return promise;
		};	
	}

	this.CrearEmpresa = function(data,usuario_id)
	{
		if (token) 
		{
			 data.access_token = token;
            promise = $http.post(url_request+"/api/v0.1/creaempresa/usuarios/" + usuario_id + "/empresas",  data);
            return promise;
		};	
	}

}]);