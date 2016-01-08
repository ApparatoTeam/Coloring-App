require( ['require.domReady'], function(domReady){
    /*- param function [callback] -*/
    domReady( function(){
        /*- strict mode -*/
        'use strict';
        
        /*- Build Application main namespace object -*/
        window.app = window.app || new Object;
        
        window.app.startup = {
            
            init : function(){
                var self = this;
                
                this.api();
                this.preload.intro( function(){
                    TweenMax.to('#home-preloader', 0.2, {
                        autoAlpha : 1,
                        onComplete : function(){
                            self.preload.process.isRequired();
                         }
                     });
                 });
                
             }, /*- end startup.init -*/
            
            api : function(){
                requirejs.config({
                    baseUrl : 'dist',
                    paths : {
                        text  : '../core/require.text',
                        image : '../core/require.image'
                     }
                 });
             },
            
            preload : {
                dom : $('#home-progress'),
                
                progress : {
                    step : 0,
                    text : ''
                 },
                
                done : function(){
                    console.log('Let\'s get started!');
                 },
                
                failed : function(){
                    
                 },
                
                /*- 5-second preload rule -*/
                process : {
                    isRequired : function(){
                        if( app.startup.preload.progress.step < 100 ){
                            this._sysRequirements();
                         }else{
                             app.startup.preload.done();
                          }    
                     },
                    
                    _sysRequirements : function(){ /*- 1.5 out of 5 sec -*/
                        var self = this
                        ,   ua = window.navigator.userAgent
                        ;
                        
                        //*--> update node #1
                        this.updateProgress({
                            s : 18, 
                            t : 'Checking system requirements...',
                            d : 0.899, // 1.5 * (18/30)
                            f : function(){
                                
                                if( parseFloat( ua.match(/Android\s+([\d\.]+)/)[1] ) >= 4.2 ){ /*- passed sys android ver -*/
                                    //*--> update node #2
                                    self.updateProgress({
                                        s : 30, 
                                        t : 'Checking LAN connection...',
                                        d : 0.4, // 1.5 * (12/30)
                                        f : function(){
                                            self._screens();
                                         }
                                     });
                                    
                                 }else{ /*- failed -*/
                                    self.updateProgress({
                                        t : 'Error: minimum Android KitKat version required.',
                                        e : true
                                     });
                                  }
                             }
                         });
                        
                        return this;
                     },
                    
                    _screens : function(){
                        var self = this
                        ,   list = [
                                'text!screen/sc-settings.html',
                                'text!screen/sc-about.html'
                                //'sc-category',
                                //'sc-level',
                                //'sc-canvas'
                            ];
                        
                        requirejs(list, 
                        function(){
                            //*--> update node #3
                            self.updateProgress({
                                s : app.startup.preload.progress.step + 25,
                                t : 'Loading screen templates...',
                                d : (0.25 * 5),
                                f : function(){
                                    self._media();
                                 }
                             });
                         },
                        function(error){
                            self.updateProgress({
                                t : 'Error: Missing screen materials.',
                                e : true
                             });
                            
                         });
                            
                        return this;
                     },
                    
                    _media : function(){
                        var self = this
                        ,   list = [
                                'image!dist/img/home/color-stripe.jpg!bust',
                                'image!dist/img/home/color-stripe-blue.jpg!bust',
                                'image!dist/img/home/color-stripe-blue2.jpg!bust'
                            ]
                        ;
                        
                        requirejs(list, 
                        function(){
                            //*--> update node #4
                            self.updateProgress({
                                s : app.startup.preload.progress.step + 20,
                                t : 'Loading media files...',
                                d : (0.20 * 5),
                                f : function(){
                                    //self._media();
                                 }
                             });
                         },
                        function(){
                            self.updateProgress({
                                t : 'Error: Missing media files.',
                                e : true
                             });
                         });
                                  
                        return this;
                     },
                    
                    _database : function(){
                        var self = this
                        ,   list = []
                        ;
                        
                        
                        
                        return this;
                     },
                    
                    updateProgress : function( p ){
                        var o = $('#home-preloader');
                        
                        p.s = p.s || 0;
                        p.t = p.t || '';
                        p.d = p.d || 1;
                        p.f = p.f || null;
                        p.e = p.e || false;
                        
                        app.startup.preload.progress.step = p.s;
                        app.startup.preload.progress.text = p.t;
                        
                        if( p.e )
                            TweenLite.to( o, 0.2, {
                                backgroundColor: 'rgba(222, 31, 31, 0.75)'
                             });
                        
                        setTimeout(function(){
                            
                            TweenMax.to( o.find('#preloader-progress'), p.d, {
                                width : p.s+'%',
                                onStart : function(){
                                    o.find('#preloader-text').html( p.t );
                                 },
                                onComplete : function(){
                                    if( ( typeof p.f ).match(/function/) ){
                                        p.f();
                                        console.log('callback...');
                                     }  
                                        
                                 }
                             });
                            
                        }, 10);
                        
                        return this;
                     }
                 },
                
                intro : function( cb ){
                    var stagger_bg = 0.2
                    ,   timeline = new TimelineMax({
                            onComplete : function(){
                                if( typeof cb == 'function' )
                                    cb();
                             }
                         });
                    
                    timeline
                    /*- stagger vp bg-*/
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#fa6387',
                        ease : Bounce.easeInOut
                     }, 'bg-red')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#e38af3',
                        ease : Bounce.easeInOut
                     }, 'bg-violet')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#8E8AF3',
                        ease : Bounce.easeInOut
                     }, 'bg-blue')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#55D0FB',
                        ease : Bounce.easeInOut
                     }, 'bg-blue-lgt')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#5bef7e',
                        ease : Bounce.easeInOut
                     }, 'bg-green')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#fff255',
                        ease : Bounce.easeInOut
                     }, 'bg-yellow')
                    .to('#viewport', stagger_bg, {
                        backgroundColor : '#FFBE44',
                        ease : Bounce.easeInOut
                     }, 'bg-orange')
                    
                    /*- elasticize logo -*/
                    .to( $('#home-header').children('h2'), 0.7, {
                        scale : 1,
                        autoAlpha : 1,
                        ease: Elastic.easeInOut
                     }, 'bg-blue-lgt')
                    
                    /*- stagger stripes */
                    .staggerTo( $('#home-wallpaper').children('span'), 0.5, {
                        autoAlpha : 1,
                        y : '0%'
                     }, 0.1, 'bg-yellow')
                    ;
                    
                    /*- temp -*/
                    timeline.progress(1);
                 }
                
             } /*- end startup.preload -*/
            
         };
        
        /*- initialize startup app -*/
        window.app.startup.init();
        
     });
 });