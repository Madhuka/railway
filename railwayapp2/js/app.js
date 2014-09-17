var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;
    $http.get("./apis/api/v1.jag?action=listgateupdatecache")
      .success(function(data) {
        app.devices = data;
      })


	
		app.listLocation = function(gateID) {
		console.log(gateID);
        $http.get("./apis/api/v1.jag?action=gatelocationbygateid&gateId="+gateID)
          .success(function(data) {
		   app.location = data;
          })
		  app.listH(gateID)
    }
	

	
	app.listH = function(gateID) {
        $http.get("./apis/api/v1.jag?action=getgateupdate&gateId="+gateID)
      .success(function(data) {
        app.his = data;
      })
    }
	

	
})