define(['require', 'angular'], function(require, angular) {
    'use strict';
    var site = location.search.match('site=(.*)')[1];
    var ngApp = angular.module('app', []);
    ngApp.service('hisService', ['$http', '$q', function($http, $q) {
        var _baseUrl = '/rest/site/fe/user/history';
        return {
            myApps: function() {
                var deferred = $q.defer();
                $http.get(_baseUrl + '/appList?site=' + site).success(function(rsp) {
                    deferred.resolve(rsp.data.apps);
                });
                return deferred.promise;
            },
            myMissions: function() {
                var deferred = $q.defer();
                $http.get(_baseUrl + '/missionList?site=' + site).success(function(rsp) {
                    deferred.resolve(rsp.data.missions);
                });
                return deferred.promise;
            },
        }
    }]);
    ngApp.controller('ctrlHistory', ['$scope', '$http', 'hisService', function($scope, $http, hisService) {
        $http.get('/rest/site/fe/get?site=' + site).success(function(rsp) {
            $scope.site = rsp.data;
            window.loading.finish();
            hisService.myApps().then(function(apps) {
                $scope.myApps = apps;
            });
            hisService.myMissions().then(function(missions) {
                $scope.myMissions = missions;
            });
            $http.get('/rest/site/fe/user/siteList?site=' + site).success(function(rsp) {});
        });
    }]);
});