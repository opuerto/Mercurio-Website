mercurioApp.service('resetPassword', ['$resource', '$cookies', '$http','$localStorage','mainPageService', function($resource, $cookies, $http,$localStorage, mainPageService) {
	var url_request = mainPageService.urlRequest;
	var token = mainPageService.token;

	this.resetPassword = function(data)
	{

		if (token) 
		{
			 data.access_token = token;
			 //data.token = $localStorage.token;
            promise = $http.post(url_request+"/getcode/resetpass",  data,{skipAuthorization: true});
            return promise;
		};	
	}


}]);