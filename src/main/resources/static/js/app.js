angular.module('app', []);

angular
    .module('app')
    .controller('CardController', CardController);

function CardController($http, $scope) {
    var vm = this;
    $http.get("/")
        .then(function (res) {
            vm.greeting = res.data;
        });
}