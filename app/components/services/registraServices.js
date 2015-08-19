mercurioApp.service('registraService', ['$resource', '$cookies', '$http','$localStorage','mainPageService', function($resource, $cookies, $http,$localStorage, mainPageService) {
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
            promise = $http.post(url_request+"/api/v0.1/users/creaanunciodesdeweb", data);
            return promise;
		};
	}

	this.loginUser = function(data)
	{
		if (token) 
		{
			 data.access_token = token;
            promise = $http.post(url_request+"/api/v0.1/auth/login", data,{skipAuthorization: true});
            return promise;
		};	
	}

	this.CrearEmpresa = function(data)
	{
		if (token) 
		{
			 data.access_token = token;
			 //data.token = $localStorage.token;
            promise = $http.post(url_request+"/api/v0.1/creaempresa/nuevaempresa",  data);
            return promise;
		};	
	}

	this.login = function()
	{
		if (token) {
            var url = url_request+"/aplicacion";
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

	this.contactanos = function(data)
	{
		if (token) 
		{
			 data.access_token = token;
			 //data.token = $localStorage.token;
            promise = $http.post(url_request+"/contactanos",  data);
            return promise;
		};		
	}

}]);