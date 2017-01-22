define(['frame'], function(ngApp) {
    ngApp.provider.directive('flexImg', function() {
        return {
            restrict: 'A',
            replace: true,
            template: "<img src='{{img.imgSrc}}'>",
            link: function(scope, elem, attrs) {
                angular.element(elem).on('load', function() {
                    var w = this.clientWidth,
                        h = this.clientHeight,
                        sw, sh;
                    if (w > h) {
                        sw = w / h * 80;
                        angular.element(this).css({
                            'height': '100%',
                            'width': sw + 'px',
                            'top': '0',
                            'left': '50%',
                            'margin-left': (-1 * sw / 2) + 'px'
                        });
                    } else {
                        sh = h / w * 80;
                        angular.element(this).css({
                            'width': '100%',
                            'height': sh + 'px',
                            'left': '0',
                            'top': '50%',
                            'margin-top': (-1 * sh / 2) + 'px'
                        });
                    }
                })
            }
        }
    });
    ngApp.provider.controller('ctrlPlayer', ['$scope', 'http2', '$q', '$uibModal', 'mattersgallery', 'noticebox', 'srvApp', function($scope, http2, $q, $uibModal, mattersgallery, noticebox, srvApp) {
        (function() {
            new ZeroClipboard(document.querySelectorAll('.text2Clipboard'));
        })();
        $scope.activeRound = null;
        srvApp.roundList().then(function(rounds) {
            $scope.rounds = rounds;
        });
        $scope.importByApp = function() {
            $uibModal.open({
                templateUrl: 'importByApp.html',
                resolve: {
                    app: function() {
                        return $scope.app;
                    }
                },
                controller: ['$scope', '$uibModalInstance', 'app', function($scope2, $mi, app) {
                    $scope2.app = app;
                    $scope2.data = {
                        app: '',
                        appType: 'registration',
                        onlySpeaker: 'N'
                    };
                    app.mission && ($scope2.data.sameMission = 'Y');
                    $scope2.cancel = function() {
                        $mi.dismiss();
                    };
                    $scope2.ok = function() {
                        $mi.close($scope2.data);
                    };
                    $scope2.$watch('data.appType', function(appType) {
                        if (!appType) return;
                        var url;
                        if (appType === 'registration') {
                            url = '/rest/pl/fe/matter/enroll/list?site=' + $scope.siteId + '&size=999';
                            url += '&scenario=registration';
                            delete $scope2.data.includeEnroll;
                        } else if (appType === 'signin') {
                            url = '/rest/pl/fe/matter/signin/list?site=' + $scope.siteId + '&size=999';
                            $scope2.data.includeEnroll = 'Y';
                        } else {
                            url = '/rest/pl/fe/matter/wall/list?site=' + $scope.siteId + '&size=999';
                        }
                        app.mission && (url += '&mission=' + app.mission.id);
                        http2.get(url, function(rsp) {
                            $scope2.apps = $scope2.data.appType === 'wall' ? rsp.data : rsp.data.apps;
                        });
                    });
                }],
                backdrop: 'static'
            }).result.then(function(data) {
                var params;
                if (data.app) {
                    params = {
                        app: data.app.id,
                        appType: data.appType
                    };
                    data.appType === 'signin' && (params.includeEnroll = data.includeEnroll);
                    data.appType === 'wall' && (params.onlySpeaker = data.onlySpeaker);
                    http2.post('/rest/pl/fe/matter/group/player/importByApp?site=' + $scope.siteId + '&app=' + $scope.id, params, function(rsp) {
                        $scope.app.sourceApp = data.app;
                        $scope.app.data_schemas = rsp.data.data_schemas ? JSON.parse(rsp.data.data_schemas) : '';
                        $scope.open(null);
                    });
                }
            });
        };
        $scope.cancelSourceApp = function() {
            $scope.app.source_app = '';
            $scope.app.data_schemas = '';
            delete $scope.app.sourceApp;
            srvApp.update(['source_app', 'data_schemas']);
        };
        $scope.syncByApp = function() {
            var defer = $q.defer();
            if ($scope.app.sourceApp) {
                var url = '/rest/pl/fe/matter/group/player/syncByApp?site=' + $scope.siteId + '&app=' + $scope.id
                if ($scope.app.sourceApp.type === 'wall') {
                    if (window.confirm('仅同步发言用户用，请按确认！\n同步所有用户，请按取消!')) {
                        url += '&onlySpeaker=Y';
                    } else {
                        url += '&onlySpeaker=N';
                    }
                }
                http2.get(url, function(rsp) {
                    noticebox.success('同步' + rsp.data + '个用户');
                    defer.resolve(rsp.data);
                    $scope.$broadcast('xxt.matter.group.player.sync', rsp.data);
                });
            }
            return defer.promise;
        };
        $scope.configRule = function() {
            $uibModal.open({
                templateUrl: 'configRule.html',
                resolve: {
                    app: function() {
                        return $scope.app;
                    },
                    rule: function() {
                        return angular.copy($scope.app.group_rule);
                    },
                    schemas: function() {
                        return angular.copy($scope.app.data_schemas);
                    }
                },
                controller: ['$uibModalInstance', '$scope', 'http2', 'app', 'rule', 'schemas', function($mi, $scope, http2, app, rule, schemas) {
                    $scope.schemas = [];
                    http2.get('/rest/pl/fe/matter/group/player/count?site=' + app.siteid + '&app=' + app.id, function(rsp) {
                        $scope.countOfPlayers = rsp.data;
                    });
                    angular.forEach(schemas, function(schema) {
                        if (schema.type === 'single') {
                            $scope.schemas.push(schema);
                            if (rule.schema && rule.schema.id === schema.id) {
                                rule.schema = schema;
                            }
                        }
                    });
                    $scope.rule = rule;
                    $scope.cancel = function() {
                        $mi.dismiss();
                    };
                    $scope.ok = function() {
                        $mi.close($scope.rule);
                    };
                    $scope.$watch('rule.count', function(countOfGroups) {
                        if (countOfGroups) {
                            rule.times = Math.ceil($scope.countOfPlayers / countOfGroups);
                        }
                    });
                }],
                backdrop: 'static',
            }).result.then(function(rule) {
                var url = '/rest/pl/fe/matter/group/configRule?site=' + $scope.siteId + '&app=' + $scope.id;
                http2.post(url, rule, function(rsp) {
                    $scope.rounds = rsp.data;
                    $scope.group_rule = rule;
                });
            });
        };
        $scope.emptyRule = function() {
            if (window.confirm('本操作将清除已有分组数据，确定执行?')) {
                var url = '/rest/pl/fe/matter/group/configRule?site=' + $scope.siteId + '&app=' + $scope.id;
                http2.post(url, {}, function(rsp) {
                    $scope.rounds = [];
                    $scope.group_rule = {};
                    $scope.$broadcast('xxt.matter.group.execute.done', rsp.data);
                });
            }
        };
        $scope.addRound = function() {
            var proto = {
                title: '分组' + ($scope.rounds.length + 1)
            };
            http2.post('/rest/pl/fe/matter/group/round/add?site=' + $scope.siteId + '&app=' + $scope.id, proto, function(rsp) {
                $scope.rounds.push(rsp.data);
            });
        };
        $scope.execute = function() {
            if (window.confirm('本操作将清除已有分组数据，确定执行?')) {
                http2.get('/rest/pl/fe/matter/group/execute?site=' + $scope.siteId + '&app=' + $scope.id, function(rsp) {
                    $scope.$broadcast('xxt.matter.group.execute.done', rsp.data);
                });
            }
        };
        $scope.open = function(round) {
            $scope.activeRound = round;
        };
        $scope.json2Obj = function(json) {
            if (json && json.length) {
                obj = JSON.parse(json);
                return obj;
            } else {
                return {};
            }
        };
        $scope.value2Label = function(val, key) {
            var schemas = $scope.app.data_schemas,
                i, j, s, aVal, aLab = [];
            if (val === undefined) return '';
            for (i = 0, j = schemas.length; i < j; i++) {
                if (schemas[i].id === key) {
                    s = schemas[i];
                    break;
                }
            }
            if (s && s.ops && s.ops.length) {
                if (angular.isString(val)) {
                    aVal = val.split(',');
                    for (i = 0, j = s.ops.length; i < j; i++) {
                        aVal.indexOf(s.ops[i].v) !== -1 && aLab.push(s.ops[i].l);
                    }
                    if (aLab.length) return aLab.join(',');
                }
            }
            return val;
        };
        $scope.updateRound = function(name) {
            var nv = {};
            nv[name] = $scope.activeRound[name];
            http2.post('/rest/pl/fe/matter/group/round/update?site=' + $scope.siteId + '&app=' + $scope.id + '&rid=' + $scope.activeRound.round_id, nv, function(rsp) {
                noticebox.success('完成保存');
            });
        };
        $scope.removeRound = function() {
            http2.get('/rest/pl/fe/matter/group/round/remove?site=' + $scope.siteId + '&app=' + $scope.id + '&rid=' + $scope.activeRound.round_id, function(rsp) {
                var i = $scope.rounds.indexOf($scope.activeRound);
                $scope.rounds.splice(i, 1);
                $scope.activeRound = null;
            });
        };
        $scope.export = function() {
            var url = '/rest/pl/fe/matter/group/player/export?site=' + $scope.siteId + '&app=' + $scope.id;
            window.open(url);
        };
        $scope.activeTabIndex = 0;
        $scope.activeTab = function(index) {
            $scope.activeTabIndex = index;
        };
    }]);
    ngApp.provider.controller('ctrlRule', ['$scope', '$uibModal', 'http2', 'noticebox', function($scope, $uibModal, http2, noticebox) {
        $scope.aTargets = null;
        $scope.$watch('editingRound', function(round) {
            $scope.aTargets = (!round || round.targets.length === 0) ? [] : eval(round.targets);
        });
        $scope.addTarget = function() {
            $uibModal.open({
                templateUrl: 'targetEditor.html',
                resolve: {
                    schemas: function() {
                        return angular.copy($scope.app.data_schemas);
                    }
                },
                controller: ['$uibModalInstance', '$scope', 'schemas', function($mi, $scope, schemas) {
                    $scope.schemas = schemas;
                    $scope.target = {};
                    $scope.cancel = function() {
                        $mi.dismiss();
                    };
                    $scope.ok = function() {
                        $mi.close($scope.target);
                    };
                }],
                backdrop: 'static',
            }).result.then(function(target) {
                $scope.aTargets.push(target);
                $scope.saveTargets();
            });
        };
        $scope.removeTarget = function(i) {
            $scope.aTargets.splice(i, 1);
            $scope.saveTargets();
        };
        $scope.labelTarget = function(target) {
            var labels = [];
            angular.forEach(target, function(v, k) {
                if (k !== '$$hashKey' && v && v.length) {
                    labels.push($scope.value2Label(v, k));
                }
            });
            return labels.join(',');
        };
        $scope.saveTargets = function() {
            $scope.activeRound.targets = $scope.aTargets;
            $scope.updateRound('targets');
        };
    }]);
    ngApp.provider.controller('ctrlPlayers', ['$scope', '$uibModal', 'http2', function($scope, $uibModal, http2) {
        $scope.editPlayer = function(player) {
            $uibModal.open({
                templateUrl: '/views/default/pl/fe/matter/group/component/playerEditor.html?_=4',
                controller: 'ctrlEditor',
                windowClass: 'auto-height',
                resolve: {
                    app: function() {
                        return angular.copy($scope.app);
                    },
                    rounds: function() {
                        return $scope.rounds;
                    },
                    player: function() {
                        return angular.copy(player);
                    }
                }
            }).result.then(function(updated) {
                var p = updated[0];
                http2.post('/rest/pl/fe/matter/group/player/update?site=' + $scope.siteId + '&app=' + $scope.id + '&ek=' + player.enroll_key, p, function(rsp) {
                    angular.extend(player, rsp.data);
                });
            });
        };
        $scope.addPlayer = function() {
            $uibModal.open({
                templateUrl: '/views/default/pl/fe/matter/group/component/playerEditor.html?_=4',
                controller: 'ctrlEditor',
                windowClass: 'auto-height',
                resolve: {
                    app: function() {
                        return $scope.app;
                    },
                    rounds: function() {
                        return $scope.rounds;
                    },
                    player: function() {
                        return {
                            tags: ''
                        };
                    }
                }
            }).result.then(function(updated) {
                var p = updated[0];
                http2.post('/rest/pl/fe/matter/group/player/add?site=' + $scope.siteId + '&app=' + $scope.id, p, function(rsp) {
                    $scope.players.splice(0, 0, rsp.data);
                });
            });
        };
        $scope.removePlayer = function(player) {
            if (window.confirm('确认删除？')) {
                http2.get('/rest/pl/fe/matter/group/player/remove?site=' + $scope.siteId + '&app=' + $scope.id + '&ek=' + player.enroll_key, function(rsp) {
                    var i = $scope.players.indexOf(player);
                    $scope.players.splice(i, 1);
                    $scope.page.total = $scope.page.total - 1;
                });
            }
        };
        // 当前选中的行
        $scope.rows = {
            allSelected: 'N',
            selected: {}
        };
        $scope.selectedPlayers = [];
        $scope.selectPlayer = function(player) {
            if ($scope.selectedPlayers.indexOf(player) === -1) {
                $scope.selectedPlayers.push(player);
            } else {
                $scope.selectedPlayers.splice($scope.selectedPlayers.indexOf(player), 1);
            }
        };
        // 选中或取消选中所有行
        $scope.selectAllRows = function(checked) {
            var index = 0;
            if (checked === 'Y') {
                $scope.selectedPlayers = [];
                while (index < $scope.players.length) {
                    $scope.selectedPlayers.push($scope.players[index]);
                    $scope.rows.selected[index++] = true;
                }
            } else if (checked === 'N') {
                $scope.rows.selected = {};
                $scope.selectedPlayers = [];
            }
        };
        /**
         * 选中的用户移出分组
         */
        $scope.quitGroup = function(players) {
            if ($scope.activeRound && players.length) {
                var url, eks = [];

                url = '/rest/pl/fe/matter/group/player/quitGroup?site=' + $scope.siteId + '&app=' + $scope.id;
                url += '&round=' + $scope.activeRound.round_id;

                angular.forEach(players, function(player) {
                    eks.push(player.enroll_key);
                });

                http2.post(url, eks, function(rsp) {
                    var result = rsp.data;
                    angular.forEach(players, function(player) {
                        if (result[player.enroll_key] !== false) {
                            $scope.players.splice($scope.players.indexOf(player), 1);
                        }
                    });
                    $scope.rows.allSelected = 'N';
                    $scope.rows.selected = {};
                    $scope.selectedPlayers = [];
                });
            }
        };
        /**
         * 选中的用户移入分组
         */
        $scope.joinGroup = function(round, players) {
            if (round && players.length) {
                var url, eks = [];

                url = '/rest/pl/fe/matter/group/player/joinGroup?site=' + $scope.siteId + '&app=' + $scope.id;
                url += '&round=' + round.round_id;

                angular.forEach(players, function(player) {
                    eks.push(player.enroll_key);
                });

                http2.post(url, eks, function(rsp) {
                    var result = rsp.data;
                    angular.forEach(players, function(player) {
                        if (result[player.enroll_key] !== false) {
                            if ($scope.activeRound === false) {
                                $scope.players.splice($scope.players.indexOf(player), 1);
                            } else if ($scope.activeRound === null) {
                                player.round_id = round.round_id;
                                player.round_title = round.title;
                            }
                        }
                    });
                    $scope.rows.allSelected = 'N';
                    $scope.rows.selected = {};
                    $scope.selectedPlayers = [];
                });
            }
        };
        $scope.empty = function() {
            var vcode;
            vcode = prompt('是否要从【' + $scope.app.title + '】删除所有用户？，若是，请输入活动名称。');
            if (vcode === $scope.app.title) {
                http2.get('/rest/pl/fe/matter/group/player/empty?site=' + $scope.siteId + '&app=' + $scope.id, function(rsp) {
                    $scope.doSearch(1);
                });
            }
        };
        $scope.allPlayers = function() {
            var url = '/rest/pl/fe/matter/group/player/list?site=' + $scope.siteId + '&app=' + $scope.id;
            http2.get(url, function(rsp) {
                $scope.players = rsp.data.players;
            });
        };
        $scope.winners = function(round) {
            var url = '/rest/pl/fe/matter/group/round/winnersGet?app=' + $scope.id;
            url += '&rid=' + round.round_id;
            http2.get(url, function(rsp) {
                $scope.players = rsp.data;
                $scope.activeTab($scope.players.length ? 1 : 0);
            });
        };
        $scope.pendings = function() {
            var url = '/rest/pl/fe/matter/group/player/pendingsGet?app=' + $scope.id;
            http2.get(url, function(rsp) {
                $scope.players = rsp.data;
            });
        };
        /**
         * 完成用户同步操作
         */
        $scope.$on('xxt.matter.group.player.sync', function(event, count) {
            if (count > 0) {
                if ($scope.activeRound === null) {
                    $scope.allPlayers();
                } else if ($scope.activeRound === false) {
                    $scope.pendings();
                } else {
                    $scope.winners($scope.activeRound);
                }
            }
        });
        /**
         * 完成自动分组操作
         */
        $scope.$on('xxt.matter.group.execute.done', function(winners) {
            if ($scope.activeRound === null) {
                $scope.allPlayers();
            } else if ($scope.activeRound === false) {
                $scope.pendings();
            } else {
                $scope.winners($scope.activeRound);
            }
        });
        // 表格定义是否准备完毕
        $scope.tableReady = 'N';
        $scope.$watch('activeRound', function(round) {
            if (round === null) {
                $scope.allPlayers();
            } else if (round === false) {
                $scope.pendings();
            } else {
                $scope.winners(round);
            }
            $scope.tableReady = 'Y';
        });
    }]);
    ngApp.provider.controller('ctrlEditor', ['$scope', '$uibModalInstance', '$sce', 'app', 'rounds', 'player', function($scope, $mi, $sce, app, rounds, player) {
        var p, col, files;
        if (player.data) {
            for (p in app.data_schemas) {
                col = app.data_schemas[p];
                if (player.data[col.id]) {
                    if (col.type === 'file') {
                        files = JSON.parse(player.data[col.id]);
                        angular.forEach(files, function(file) {
                            file.url = $sce.trustAsResourceUrl(file.url);
                        });
                        player.data[col.id] = files;
                    } else if (col.type === 'multiple') {
                        var value = player.data[col.id].split(','),
                            obj = {};
                        angular.forEach(value, function(p) {
                            obj[p] = true;
                        });
                        player.data[col.id] = obj;
                    } else if (col.type === 'image') {
                        var value = player.data[col.id].split(','),
                            obj = [];
                        angular.forEach(value, function(p) {
                            obj.push({
                                imgSrc: p
                            });
                        });
                        player.data[col.id] = obj;
                    }
                }
            }
        }
        $scope.app = app;
        $scope.rounds = rounds;
        $scope.aTags = app.tags;
        player.aTags = (!player.tags || player.tags.length === 0) ? [] : player.tags.split(',');
        $scope.player = player;
        $scope.scoreRangeArray = function(schema) {
            var arr = [];
            if (schema.range && schema.range.length === 2) {
                for (var i = schema.range[0]; i <= schema.range[1]; i++) {
                    arr.push('' + i);
                }
            }
            return arr;
        };
        $scope.ok = function() {
            var c, p, col;
            p = {
                data: {},
                comment: $scope.player.comment,
                tags: $scope.player.aTags.join(','),
                round_id: $scope.player.round_id
            };
            $scope.player.tags = p.tags;
            if ($scope.player.data) {
                for (c in $scope.app.data_schemas) {
                    col = $scope.app.data_schemas[c];
                    p.data[col.id] = $scope.player.data[col.id];
                }
            }
            $mi.close([p, $scope.aTags]);
        };
        $scope.cancel = function() {
            $mi.dismiss('cancel');
        };
        $scope.$on('tag.xxt.combox.done', function(event, aSelected) {
            var aNewTags = [];
            for (var i in aSelected) {
                var existing = false;
                for (var j in $scope.player.aTags) {
                    if (aSelected[i] === $scope.player.aTags[j]) {
                        existing = true;
                        break;
                    }
                }!existing && aNewTags.push(aSelected[i]);
            }
            $scope.player.aTags = $scope.player.aTags.concat(aNewTags);
        });
        $scope.$on('tag.xxt.combox.add', function(event, newTag) {
            $scope.player.aTags.push(newTag);
            $scope.aTags.indexOf(newTag) === -1 && $scope.aTags.push(newTag);
        });
        $scope.$on('tag.xxt.combox.del', function(event, removed) {
            $scope.player.aTags.splice($scope.player.aTags.indexOf(removed), 1);
        });
    }]);
});