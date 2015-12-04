var LS = (function(fields) {
    function locationSearch() {
        var ls, search;
        ls = location.search;
        search = {};
        angular.forEach(fields, function(q) {
            var match, pattern;
            pattern = new RegExp(q + '=([^&]*)');
            match = ls.match(pattern);
            search[q] = match ? match[1] : '';
        });
        return search;
    };
    /*join search*/
    function j(method) {
        var j, l, url = '/rest/op/enroll',
            _this = this,
            search = [];
        method && method.length && (url += '/' + method);
        if (arguments.length > 1) {
            for (i = 1, l = arguments.length; i < l; i++) {
                search.push(arguments[i] + '=' + _this.p[arguments[i]]);
            };
            url += '?' + search.join('&');
        }
        return url;
    };
    return {
        p: locationSearch(),
        j: j
    };
})(['mpid', 'aid', 'page']);
var setPage = function(scope, page) {
    if (page.ext_css && page.ext_css.length) {
        angular.forEach(page.ext_css, function(css) {
            var link, head;
            link = document.createElement('link');
            link.href = css.url;
            link.rel = 'stylesheet';
            head = document.querySelector('head');
            head.appendChild(link);
        });
    }
    if (page.ext_js && page.ext_js.length) {
        angular.forEach(page.ext_js, function(js) {
            $.getScript(js.url, function() {
                if (page.js && page.js.length) {
                    scope.$apply(
                        function dynamicjs() {
                            eval(page.js);
                            scope.Page = params.page;
                        }
                    );
                }
            });
        });
    } else if (page.js && page.js.length) {
        (function dynamicjs() {
            eval(page.js);
        })();
    }
};
app = angular.module('app', ['ngSanitize', 'infinite-scroll']);
app.config(['$controllerProvider', function($cp) {
    app.register = {
        controller: $cp.register
    };
}]);
app.directive('dynamicHtml', function($compile) {
    return {
        restrict: 'EA',
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch(attrs.dynamicHtml, function(html) {
                if (html && html.length) {
                    ele.html(html);
                    $compile(ele.contents())(scope);
                }
            });
        }
    };
});
app.factory('Record', ['$http', '$q', function($http, $q) {
    var Record, _ins, _running;
    Record = function() {};
    Record.prototype.list = function(rid) {
        var _this, url, deferred, promise;
        _this = this;
        deferred = $q.defer();
        promise = deferred.promise;
        url = LS.j('record/list', 'mpid', 'aid');
        rid !== undefined && rid.length && (url += '&rid=' + rid);
        $http.get(url).success(function(rsp) {
            var records, record;
            if (rsp.err_code == 0) {
                records = rsp.data.records;
                if (records && records.length) {
                    for (var i = 0; i < records.length; i++) {
                        record = records[i];
                        record.data.member && (record.data.member = JSON.parse(record.data.member));
                    }
                }
                deferred.resolve(records);
            }
        });
        return promise;
    };
    return {
        ins: function() {
            !_ins && (_ins = new Record());
            return _ins;
        }
    };
}]);
app.controller('ctrlRecords', ['$scope', '$http', 'Record', function($scope, $http, Record) {
    var facRecord;
    facRecord = Record.ins();
    facRecord.list().then(function(rsp) {
        $scope.records = rsp.records;
    });
}]);
app.controller('ctrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    var tasksOfOnReady = [];
    $scope.errmsg = '';
    $scope.onReady = function(task) {
        if ($scope.params) {
            PG.exec(task);
        } else {
            tasksOfOnReady.push(task);
        }
    };

    $http.get(LS.j('pageGet', 'aid', 'page')).success(function(rsp) {
        if (rsp.err_code !== 0) {
            $scope.errmsg = rsp.err_msg;
            return;
        }
        var params;
        params = rsp.data;
        $scope.Page = params.page;
        setPage($scope, params.page);
        if (tasksOfOnReady.length) {
            angular.forEach(tasksOfOnReady, PG.exec);
        }
        $timeout(function() {
            $scope.$broadcast('xxt.app.enroll.ready', params);
        });
    });
}]);