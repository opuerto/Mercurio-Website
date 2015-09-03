mercurioApp.service('mainPageService', ['$resource', '$cookies', '$http', function($resource, $cookies, $http) {
	this.urlRequest = 'http://app.mercurio.hn/';
	var urlR = 'http://app.mercurio.hn/'; 
	this.token = $cookies.get('token_mercuriowebsite');
	var token_website = $cookies.get('token_mercuriowebsite');
	this.getToken = function()
	{
		var url = urlR+"/accesstokenC";
            var promise = $http({
                method: 'GET',
                url: url,
                
            });
            return promise;
	}

	this.getJwtToken = function(data)
	{
		if (token_website) 
		{
			 data.access_token = token_website;
			 //data.token = $localStorage.token;
            promise = $http.post(urlR+"/jwt/token",  data);
            return promise;
		};
	}
	

}])