define([ window.app.__c__.pageShift ], function( pageShift, __a ){
    
    //--> window.app.mod.screen.progress = null;
    __a = window.app.mod.screen.progress;
    
    __a = {
        activate : function( self ){
            self = this;
            
            pageShift.set({
                name : 'progress',
                data : function(){
                    window.app.navigation.init();
                    console.log('Welcome to progress');
                 }
             });
            
         }
     };
    
    return __a;
 });