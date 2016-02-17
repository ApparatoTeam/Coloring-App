define([ window.app.__c__.pageShift ], function(pageShift, __a){
    
    window.app.mod.screen.index = null;
    __a = window.app.mod.screen.index;
    
    __a = {
        activate : function( self ){
            self = this;
            
             pageShift.set({
                name : 'index',
                data : function(){ 
                    window.app.navigation.init();
                    console.log('Welcome to index page');   
                 }
             });
         },
     };
    
    return __a;
});