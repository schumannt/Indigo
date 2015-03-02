var app = angular.module('indigo.site', []);

app.controller('siteManager', ['$scope', function($scope){
	$scope.site = {
		"skills":[
			{"title":"Agile software development","type":"meth", "wiki":true},
			{"title":"Android OS","type":"frontEnd", "wiki":true},
			{"title":"AngularJS","type":"frontEnd", "wiki":true},
			{"title":"Amazon Web Services","type":"meth", "wiki":true},
			{"title":"Backbone.js","type":"frontEnd", "wiki":true},
			{"title":"Business Analysis","type":"meth", "wiki":true},
			{"title":"CSS3","type":"frontEnd", "wiki":true},
			{"title":"Git (software)","type":"meth", "wiki":true},
			{"title":"Gradle","type":"backEnd", "wiki":true},
			{"title":"HTML5","type":"frontEnd", "wiki":true},
			{"title":"Java","type":"backEnd", "wiki":false},
			{"title":"JavaScript","type":"frontEnd", "wiki":true},
			{"title":"JQuery","type":"frontEnd", "wiki":true},
			{"title":"JSON","type":"frontEnd", "wiki":true},
			{"title":"Linux","type":"backEnd", "wiki":true},
			{"title":"Microsoft Azure","type":"meth", "wiki":true},
			{"title":"Mobile Development","type":"frontEnd", "wiki":true},
			{"title":"NGINX","type":"frontEnd", "wiki":true},
			{"title":"NodeJS","type":"backEnd", "wiki":true},
			{"title":"Objective-C","type":"backEnd", "wiki":true},
			{"title":"Project Delivery","type":"meth", "wiki":false},
			{"title":"REST","type":"meth", "wiki":true},
			{"title":"Service-oriented architecture","type":"meth", "wiki":true},
			{"title":"Solution Architecture","type":"meth", "wiki":true},
			{"title":"Test-driven development","type":"meth", "wiki":true},
			{"title":"Technical Solution Design","type":"meth", "wiki":false},
			{"title":"twitter Bootstrap","type":"frontEnd", "wiki":true},
			{"title":"Vert.X","type":"backEnd", "wiki":true}
		]
	};
	$scope.openWiki = function(title, wiki) {
		var host;
		var url;
		if(wiki){
			host = "http://en.wikipedia.org/wiki/";
			url = host+title.split(" ").join("_");
		}else{
			host = "https://www.google.co.uk/#q=";
			url = host+title.split(" ").join("+");
		}
		var win = window.open(url, '_blank');
		win.focus();
	};
}]);