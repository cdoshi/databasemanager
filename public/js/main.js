require.config({

    paths : {
        angular : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular',
        angularRoute : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-route',
        angularAMD : '//cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min',
        bootstrap : '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap.min',
        bootstraptpl : '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min'
    },

    shim : {
        angular : {
            exports : 'angular'
        },
        angularAMD : {
            exports : 'angularAMD'
        },
        angularRoute : ['angular'],
        bootstrap : {
            exports : 'bootstrap',
            deps : ['angular']
        },
        bootstraptpl : {
            exports : 'bootstraptpl',
            deps : ['angular', 'bootstrap']
        }
    },

    deps : ['app']
});
