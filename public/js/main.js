require.config({

    paths : {
        angular : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular',
        angularRoute : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-route',
        angularAMD : '//cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min'
    },

    shim : {
        'angular' : {
            exports : 'angular'
        },
        angularAMD : {
            exports : 'angularAMD'
        },
        angularRoute : ['angular']
    },

    deps : ['app']
}); 