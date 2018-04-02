var shortUrlApp = angular.module('shortUrlApp', []); 

shortUrlApp.controller('shortUrlController', function($scope, $http) { 
	
	//Variables
	$scope.url = { "original" : "", "short" : ""};																				//Initialize url orginal and short
	$scope.shortUrlInput = false; 																								//Show/hide short url input
	$scope.regex = "(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-zA-Z0-9\\/\\-\\=!&_|\\+?.]*)?"; 	//Pattern to validate url format
	//$scope.regex = "^(http[s]?:\\/\\/)?[\w.-]+[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z, /]{2,5}[\\.]{0,1}\\/[a-zA-Z0-9\\.\\-\\/]";		


	//Functions

   /** 
	*	generateShortUrl - generate the short version of the url given and save it in the DB
	*/
	$scope.generateShortUrl = function(){
		console.log("Generating short url...");

		//Validate the url - if not valid show error message and hide short url
		if($scope.url.original == null || $scope.url.original == ""){
			$scope.shortUrlInput = false;
			$scope.url.short = "";	
			console.log("Invalid url. Generate canceled.");
		}else{
			//Valid, show short url and save url in the DB
			$scope.shortUrlInput = true;
			saveUrl();
			console.log("Generated short url successfully.");
		}
	}

   /** 
	*	saveUrl - save url (proginal and short version) in the DB
	*/
	var saveUrl = function(){
		console.log($scope.url);
		$http.post('/urllist', $scope.url).then(function(response){
			console.log("------------------------------------");
			console.log("Short url:" + response.data.short);
			$scope.url.short = response.data.short;
		})
	};

});


