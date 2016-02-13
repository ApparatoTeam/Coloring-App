define([ 'js/mod/screen/canvas-list' ], function( canvasList ){
    
    //--> Load screen modules
    window.app.mod.bootstrap = {

        init : function(){
            this.modules();
        }, /*- end bootstrap.init -*/
        
        modules : function(){
            
            // mark the progress on list first-run, default
            window.app.cache({
                'progress' : 'beginner--shapes--001'
             });
            
            // activate canvas list screen
            canvasList.activate();
            
         }, /*- end bootstrap._canvas -*/

    };
    
    /*-- start bootstrap --*/
    window.app.mod.bootstrap.init();
 });