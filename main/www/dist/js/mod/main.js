define(function( require ){
    
    window.mod = window.mod || {};
    
    // lib prefetched ids, see ../initialize.js
    var __tween_max__ = require('tweenmax');
    
    /*- Main function -*/
    ;(function( $, a ){
        'use strict';
        
        //--> intialisation
        a.intitialize = function(){
            // call page utilities
            a.utility.init();
            
            // call externsion mods
            a.extend();
            
            return this;
         };
        
        //--> external mods
        a.extend = function(){
            var extensions = [
                    
                    //'./mod.test'
                ];
            
            require( extensions );
         };
        
        //--> utility page modlications
        a.utility = {
            
            init : function(){
                
                //#-> debug mode
                this.debug();
                
             },
            
            device : {
                boot : 0, // device boot number, based on orientation change
                
                platform : function(){
                    var p = p || 'Android';
                    
                    if( window.navigator.userAgent.match(/Android/i) ){
                        p = 'android';
                     }else if( window.navigator.userAgent.match(/BlackBerry/i) ){
                        p = 'blackberry';
                      }else if( window.navigator.userAgent.match(/iPhone|iPad|iPod/i) ){
                        p = 'ios';
                       }
                
                    return p;
                 },
                
                dimension : {
                    width  : window.screen.width, 
                    height : window.screen.height 
                 }
                
             },
            
            pageLoadedUI : function(){
                var self = this;
                
             },
            
            
            debug : function(){
                //console.log( navigator.userAgent );
             } //--* end debug
         };
        
        /*- explicit call -*/
        a.intitialize();
        
     })( (require('jquery')).noConflict(), window.mod );
    
}); // end define : requirejs module