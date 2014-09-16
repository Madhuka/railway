//var SERVER_URL = 'http://localhost:9763/retailmanager/apis/';

function retailers($scope, $http) {	
//server URL needed to added 

    $http.get('./apis/api/seller.jag?action=listseller').
        success(function(data) {
        	if(!data.error){
            $scope.sellers = data.results;
        	}
        });
}

function retailersForReport($scope, $http) {
	
    $http.get('./apis/api/seller.jag?action=listseller').
        success(function(data) {
        	if(!data.error){
            $scope.sellers = data.results;
            $scope.sellers.push({
            	seller_id: 0,
            	seller_name: "All"});
           
        	}
        });
    
    
    
}

function viewRetailers($scope, $http) {

	//server URL needed to added 
	var sellerID = location.search.split('sellerID=')[1]
	    $http.get('./apis/api/seller.jag?action=getseller&sellerId='+sellerID).
	        success(function(data) {
	        	if(!data.error){
	            $scope.seller = data.results[0];
	        	}
	        });
	}