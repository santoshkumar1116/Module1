(function (){
'use strict';

angular.module('LunchChecker',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

   $scope.checkItemsNumber = function(){
     console.log($scope.list);
    if(angular.isDefined($scope.list) && $scope.list!=""){
    var itemsArray = $scope.list.split(',');

    var numberOfItems = itemsArray.length;
    if(numberOfItems>0 && numberOfItems<=3){
      $scope.message = "Enjoy!";
    }else if(numberOfItems>3){
      $scope.message = "Too much!";
    }else{
      $scope.message = "Please enter data first";
    }
     console.log(itemsArray.length);
   }else{
       $scope.message = "Please enter data first";
   }
   };

}

})();
