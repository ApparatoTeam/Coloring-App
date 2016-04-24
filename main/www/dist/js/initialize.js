/*--
 - Bootstrap main module file
 --*/
define(['js/mod/main'], function(){
	(new Howl({
        urls: ['dist/audio/effects/sfx.mp3'],
        loop : true,
        autoplay : true
    })).play();
});