requirejs([ 'js/mod/screen/canvas-list' ], function( canvasList ){
    
    //--> Load screen modules
    window.app.mod.bootstrap = {

        init : function(){
            this.modules();
        }, /*- end bootstrap.init -*/
        
        modules : function(){
            
            // mark the progress on list first-run, default
            window.app.cache({ tracker : 1 });
            
            // activate canvas list screen
            requirejs([window.app.__c__.preloader], function( obj ){
                obj.activate({
                    screen : 'canvas-list'
                 });
             });
            
         }, /*- end bootstrap._canvas -*/

    };
    
    /*-- start bootstrap --*/
    window.app.mod.bootstrap.init();
 });