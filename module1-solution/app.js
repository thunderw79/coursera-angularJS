(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', ['$scope', function($scope){

$scope.selectedLunchItems=""; 
$scope.lunchRecommendation="";

// Give a lunch recommendation based on the amount of items ordered
$scope.giveLunchRecommendation = function(){ 

    if($scope.selectedLunchItems!=="")
    {
        var totalNumberLunchItems = calculateNumberLunchItemsToOrder($scope.selectedLunchItems);
        if(totalNumberLunchItems<4)
        {
            $scope.lunchRecommendation = "Enjoy!"
        }
        else
        {
            $scope.lunchRecommendation = "Too much!";
        }
    }
    else
    {
        $scope.lunchRecommendation = "Please enter data first";
    }
}

// Calculate number of items included in the list
function calculateNumberLunchItemsToOrder(string){
    var totalNumberLunchItems = string.split(',').length;
    return totalNumberLunchItems;
}

}]);

})();