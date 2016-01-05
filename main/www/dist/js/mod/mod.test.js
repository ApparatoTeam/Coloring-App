define(function( require ){
    var $ = jQuery; //require('jquery');
    
    window.mod = {
        init : function(){
            
            var ns_jqm = require('jqueryMobile')
            ,   $ = jQuery;
            
            $('#page-viewport').find('h2').html('Color now!');
            
            $( window )
            .on('orientationchange', function(e){
                
                //if( ( e.orientation ).match(/landscape/) )
                    $('#page-viewport').find('h2').html( e.orientation );
                    
             })
            .trigger('orientationchange');
            
            
         }
        
        
     };
    
    window.mod.init();
    
});