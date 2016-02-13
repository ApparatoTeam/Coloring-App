define([], function( __a ){
    
    window.app.mod.utils.pageShift = null;
    a = window.app.mod.utils.pageShift;
    
    return __a = {
            
        OBJ : {
            data : function(){}
         },
        
        set : function( param ){
            this.OBJ = param;
            this.get();
            
            return this;
         }, /*-- end mod.utils.pageShift.set() --*/

        get : function(){
            var self = this
            ,   dir = 'text!screen/'+ this.OBJ.name +'.html';

            requirejs([dir], function( markup ){
                self.build.frame( markup );    
             });

            return this;
         }, /*-- end mod.utils.pageShift.get() --*/

        build : {
            frame : function( markup ){
                var self = this
                ,   viewport = $('#viewport')
                ,   obj = __a.OBJ;

                if(! $('[data-screen='+obj.name+']').length ){
                    /*- build markup to viewport -*/
                    viewport.find('[data-screen]').last().after( markup );
                    /*- attach callback -*/
                    self.animate();
                 }
             },

            animate : function(){
                var self = this
                ,   obj = __a.OBJ
                ,   element = $('[data-screen='+obj.name+']')
                ,   direction = element.data('ease-from')
                ,   timeline = new TimelineMax()
                ,   trx_def = {
                        ease : Expo.easeInOut,
                        onStart : function(){
                            
                            obj.data();
                            
                            window.setTimeout( function(){
                                TweenMax.to( element.prev('[data-screen]'), 0.5, {
                                    autoAlpha : 0,
                                    onComplete : function(){
                                        element.prev('[data-screen]').remove();        
                                     }
                                 });
                             }, 250 );
                         }
                     }
                ,   trx_fin = {}
                ;

                if( direction.match(/top/) || direction.match(/bottom/) )
                    trx_par = { y : '0%' }

                if( direction.match(/right/) || direction.match(/left/) )
                    trx_par = { x : '0%' }

                trx_fin = $.extend({}, trx_def, trx_par);

                timeline.to( element, 0.7, trx_fin, 'ease');
                
                return this;
             }

         } /*-- end mod.utils.pageShift.build --*/

     }; /*-- end mod.utils.pageShift --*/
    
    //return window.app.mod.utils.pageShift;
});