angular.module('ecommerce').controller('seatsctrl', function($scope, service) {

$scope.getSeats = function(){
  service.getSeats().then(function(response) {
    console.log(response);
    $scope.turbos = response
  })
};

$scope.getSeats();

});
