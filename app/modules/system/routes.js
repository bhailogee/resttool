/**
 * Created by mwaseem on 1/23/2017.
 */

'use strict';

angular.module('rt.routes', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);




/*


(function (angular) {

    angular.module('app.states')
        .provider('prStates', ['$stateProvider','$logProvider',function prStates($stateProvider,log) {
            this.$get = function () {
                return {
                    addState: function (name, state) {
                        try {
                            $stateProvider.state(name, state);
                        }
                        catch (exp) {
                            var t = exp.toString().indexOf("already defined");
                            if (t < 0) {
                                log.error(exp.toString());
                            }
                        }
                    }
                }
            }
        }]);

})(window.angular);*/
