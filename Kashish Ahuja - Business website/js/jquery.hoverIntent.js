/*!
* hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
* http://briancherne.github.io/jquery-hoverIntent/
*
* You may use hoverIntent under the terms of the MIT license. Basically that
* means you are free to use hoverIntent as long as this header is left intact.
* Copyright 2007, 2014 Brian Cherne
*/(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(jQuery&&!jQuery.fn.hoverIntent){factory(jQuery);}})(function($){'use strict';var _cfg={interval:100,sensitivity:6,timeout:0};var INSTANCE_COUNT=0;var cX,cY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity){$el.off(s.event,track);delete s.timeoutId;s.isActive=true;ev.pageX=cX;ev.pageY=cY;delete s.pX;delete s.pY;return cfg.over.apply($el[0],[ev]);}else{s.pX=cX;s.pY=cY;s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg);},cfg.interval);}};var delay=function(ev,$el,s,out){delete $el.data('hoverIntent')[s.id];return out.apply($el[0],[ev]);};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++;var cfg=$.extend({},_cfg);if($.isPlainObject(handlerIn)){cfg=$.extend(cfg,handlerIn);if(!$.isFunction(cfg.out)){cfg.out=cfg.over;}}else if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector});}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});}
var handleHover=function(e){var ev=$.extend({},e);var $el=$(this);var hoverIntentData=$el.data('hoverIntent');if(!hoverIntentData){$el.data('hoverIntent',(hoverIntentData={}));}
var state=hoverIntentData[instanceId];if(!state){hoverIntentData[instanceId]=state={id:instanceId};}
if(state.timeoutId){state.timeoutId=clearTimeout(state.timeoutId);}
var mousemove=state.event='mousemove.hoverIntent.hoverIntent'+instanceId;if(e.type==='mouseenter'){if(state.isActive){return;}
state.pX=ev.pageX;state.pY=ev.pageY;$el.off(mousemove,track).on(mousemove,track);state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg);},cfg.interval);}else{if(!state.isActive){return;}
$el.off(mousemove,track);state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out);},cfg.timeout);}};return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover},cfg.selector);};});