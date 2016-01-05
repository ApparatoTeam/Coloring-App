require( ['require.domReady'], function(domReady){
    domReady( function(){
        'use strict';
        
        /*- Build Application main namespace object -*/
        window.app = window.app || new Object;
        
        window.app.preload = {
            
            init : function(){
                this.animateStart( this.boot() );
             },
            
            animateStart : function( cb ){
                var header = document.querySelector('#home-header').classList.add('preload-prog');
             },
            
            boot : function(){
                
             }
         };
        
        /*- initialize preload -*/
        window.app.preload.init();
     });
 });