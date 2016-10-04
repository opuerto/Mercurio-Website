/*app*/
var mercurioApp = angular.module('mercurioApp', ['ngRoute', 'ngResource','ngCookies',
	'ngSanitize','ngAnimate','ngStorage','angular-jwt','auth0','angular-loading-bar'])
.config(function Config($httpProvider, jwtOptionsProvider){
	jwtOptionsProvider.config({
		whiteListedDomains: ['app.mercurio.hn']
	});
});