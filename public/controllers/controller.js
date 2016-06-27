var App = angular.module('lottoland', [])
    .controller('controller', function($scope, AppFact) {
        AppFact.getData(function(data) {
            const lastDraw = new lotto(data.last.numbers, data.last.date, data.last.odds, data.last.euroNumbers);

            $scope.drawDate = lastDraw.date.day + "/" + lastDraw.date.month + "/" + lastDraw.date.year;
            $scope.numbers = lastDraw.winningNumbers;
            $scope.euroNumbers = lastDraw.euroNumbers;
            $scope.odds = lastDraw.winnings;
            $scope.winners = lastDraw.winners;
            $scope.nextDrawDate = data.next.lateClosingDate;
        });
    })
    .factory('AppFact', function($http) {
        return {
            getData: function(successcb) {
                const url = 'https://media.lottoland.com/api/drawings/euroJackpot';

                $http.jsonp(url + "?callback=JSON_CALLBACK&data=").success(function(data, status, headers, config) {
                    console.log(data);
                    successcb(data);
                }).error(function(data, status, headers, config) {
                    //  alert("Status is " + status);
                });
            }
        };
    });
