/*- Load dependencies -*/
require.config({
    baseUrl : 'dist/js/lib',
    paths   : {
        jquery      : 'jquery-2.1.4.min',
        jqueryMobile: 'jquery.mobile-1.4.5.min',
        modernizr   : 'modernizr-custom',
        tweenmax    : 'TweenMax.min'
    }
});

/*- load application script [main.js] -*/
requirejs([ '../mod/main' ]);