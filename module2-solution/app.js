(function(){
'use strict';

var toBuyListTemplate=[{name: "cookies", quantity: 10},
{name: "chocolate cookies", quantity: 10},{name: "bombons", quantity: 9},{name: "chocolate", quantity: 8},
{name: "donuts", quantity: 7},{name: "woofle", quantity: 6}];

angular.module('ShoppingListCheckOff',[])
//ToBuyController
.controller('ToBuyController', ['$scope','ShoppingListCheckOffService', function($scope,ShoppingListCheckOffService){

var buyCtrl = this;

buyCtrl.toBuyList = ShoppingListCheckOffService.getAvailableElements();  

// Buy an element removing from toBuyList and updating boughtList
buyCtrl.buyElement = function(index){ 
    ShoppingListCheckOffService.buyElement(index);
}
//Already bought controller
}]).controller('AlreadyBoughtController', ['$scope','ShoppingListCheckOffService', function($scope,ShoppingListCheckOffService){

var alreadyBoughtCtrl = this;
alreadyBoughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtElements();    

}])
//Service
.service('ShoppingListCheckOffService', [function(){

var service = this;
var toBuyList = toBuyListTemplate; 
var boughtList = [];

// Buy an element of the toBuyList
service.buyElement = function(index){ 
    //Add element to the bought list
    boughtList.push(toBuyList[index]);
    //Remove element of toBuyList
    toBuyList.splice(index,1);
 };

service.getAvailableElements = function(){
    return toBuyList;
};

service.getBoughtElements = function(){
    return boughtList;
};

}]);

})();