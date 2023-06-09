
/* Pinegrow generated Interactions Begin */

if(typeof pgia == 'undefined') {
    console && console.error('Pinegrow Interactions: pgia.js must be included before this script.');
} else {
    pgia.add('$.menu-trigger', null, {
        'interactions': '{"l":[{"name":"mouseover","trg":"mouseenter","t":"this","a":{"l":[{"t":".icon-el","l":[{"t":"set","p":0,"d":0,"l":{"stroke-dasharray":100,"stroke-dashoffset":0}},{"t":"tween","p":0,"d":0.5,"s":0.1,"l":{"stroke-dashoffset":50,"stroke-dasharray":50},"e":"Linear.easeOut"},{"t":"tween","p":0.5,"d":0.75,"s":0.1,"l":{"stroke-dashoffset":0,"stroke-dasharray":100},"e":"Linear.easeOut"}]}]}}]}'    
    });
    pgia.add('$section.opening-wine', null, {
        'scene': '{"dir":"v","s":"custom","s_t":"start","s_s":"start","e_t":"end","e_s":"center","pin_type":"transform","snap_sel":".title, .text","l":[{"name":"single-wine","a":{"l":[{"t":".title","l":[{"t":"tween","p":0,"d":0.3,"l":{"autoAlpha":0,"y":"5vh"}}]},{"t":".img-1","l":[{"t":"tween","p":0.2,"d":0.4,"l":{"autoAlpha":0}}]},{"t":".img-2","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"scale":10}},{"t":"tween","p":0.2,"d":0.8,"l":{"scale":1}},{"t":"tween","p":0.6,"d":0.4,"l":{"autoAlpha":1}}]}]},"t":"this"}]}'    
    });
    pgia.add('$section.home-opening', null, {
        'interactions': '{"l":[{"name":"loading","t":"this","a":{"l":[{"t":".clipped","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"filter":"blur(10px)","height":"calc(100vh - 160px)","y":"160px"}},{"t":"tween","p":0.9,"d":0.3,"l":{"filter":"blur(20px)"},"e":"Circ.easeOut"},{"t":"tween","p":1.2,"d":0.7,"l":{"autoAlpha":1,"filter":"blur(0px)"},"e":"Linear.easeOut"}]},{"t":".logo","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"y":"10vh","transformOrigin":"50% 50%","width":"360px"}},{"t":"tween","p":0,"d":0.51,"s":0.2,"l":{"y":0},"e":"Circ.easeOut"},{"t":"tween","p":0.21,"d":0.3,"s":0.2,"l":{"autoAlpha":1},"e":"Linear.easeOut"},{"t":"tween","p":1.1,"d":0.5,"l":{"width":"300px"},"e":"Quad.easeOut"}]},{"t":".logo-wrapper","l":[{"t":"tween","p":1.1,"d":0.5,"l":{"bottom":"calc(100vh - 160px)"},"e":"Quad.easeOut"}]}]},"trg":"now"}]}',
        'scene': '{"dir":"v","s":"custom","s_t":"start","s_s":"start","e_t":"end","e_s":"center","pin_type":"transform","snap_sel":".title, .text","l":[{"name":"estate-elements","t":"this","a":{"l":[{"t":".clipped","l":[{"t":"tween","p":0,"d":0.5,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%)"},"e":"Power0.easeOut"},{"t":"tween","p":0.5,"d":0.5,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"},"e":"Power0.easeOut"}]}]}}]}'    
    });
    pgia.add('$section.animated-section', null, {
        'scene': '{"dir":"v","s":"custom","s_t":"start","s_s":"end","e_t":"end","e_s":"center","l":[{"name":"hands-section","t":"this","a":{"l":[{"t":".hr-line","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0,"d":0.2,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]}]}},{"name":"fading","t":"this","a":{"l":[{"t":".appearing","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0.2,"d":0.4,"s":0.15,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]}]}},{"name":"parallax","t":"this","a":{"l":[{"t":".plx-n-1","l":[{"t":"set","p":0,"d":0,"l":{"y":"-40vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".plx-n-2","l":[{"t":"set","p":0,"d":0,"l":{"y":"-10vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".plx-n-3","l":[{"t":"set","p":0,"d":0,"l":{"y":"-120vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".plx-3","l":[{"t":"set","p":0,"d":0,"l":{"y":"120vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".plx-2","l":[{"t":"set","p":0,"d":0,"l":{"y":"80vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".plx-1","l":[{"t":"set","p":0,"d":0,"l":{"y":"40vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]}]},"on":"desktop"},{"name":"gold","t":"this","a":{"l":[{"t":".gradient-text","l":[{"t":"set","p":0,"d":0,"l":{"backgroundSize":"100%"}},{"t":"tween","p":0.3,"d":0.7,"l":{"backgroundSize":"1100%"}}]}]}},{"name":"sfondo","t":"this","a":{"l":[{"t":".animated-bkg img","l":[{"t":"tween","p":0,"d":1,"l":{"autoAlpha":0.75}}]}]}}]}'    
    });
    pgia.add('$section.opening', null, {
        'interactions': '{"l":[{"name":"loading","t":"this","a":{"l":[{"t":".clipped","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"filter":"blur(10px)"}},{"t":"tween","p":1.2,"d":0.3,"l":{"filter":"blur(20px)"},"e":"Circ.easeOut"},{"t":"tween","p":1.5,"d":0.7,"l":{"autoAlpha":1,"filter":"blur(0px)"},"e":"Linear.easeOut"},{"t":"tween","p":1.65,"d":0.5,"l":{}}]},{"t":".title #gt# *","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"y":"10vh"}},{"t":"tween","p":0,"d":0.51,"s":0.2,"l":{"y":0},"e":"Circ.easeOut"},{"t":"tween","p":0.21,"d":0.3,"s":0.2,"l":{"autoAlpha":1},"e":"Linear.easeOut"}]}]},"trg":"now"}]}',
        'scene': '{"dir":"v","s":"custom","s_t":"start","s_s":"start","e_t":"end","e_s":"center","pin_type":"transform","snap_sel":".title, .text","l":[{"t":"this","a":{"l":[{"t":".clipped","l":[{"t":"tween","p":0,"d":0.5,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%)"},"e":"Power0.easeOut"},{"t":"tween","p":0.5,"d":0.5,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"},"e":"Power0.easeOut"}]},{"t":".title","l":[{"t":"tween","p":0,"d":0.3,"l":{"autoAlpha":0,"y":"5vh"}}]}]},"name":"opening-elements"}]}'    
    });
    pgia.add('$section.horizontal-section', null, {
        'scene': '{"dir":"v","s":"custom","s_t":"start","s_s":"end","s_o":"-10vh","e_t":"end","e_s":"start","l":[{"name":"horizontal","t":"this","a":{"l":[{"t":"div","l":[{"t":"set","p":0,"d":0,"l":{"x":"100vw"}},{"t":"tween","p":0,"d":0.7,"l":{"x":"20vw"},"e":"Linear.easeIn"},{"t":"tween","p":0.7,"d":0.3,"l":{"x":"-10vw"},"e":"Linear.easeOut"}]}]}}],"e_o":"100px"}'    
    });
    pgia.add('$section.thedoc', null, {
        'scene': '{"dbg":"true","s":"custom","s_t":"start","s_s":"start","e_t":"end","pint":"this","pin_type":"transform","pin_body":"true","pin_spc":"auto","l":[{"name":"elements","t":"this","a":{"l":[{"t":".tables","l":[{"t":"tween","p":0,"d":1.2,"l":{"y":"-20vh","x":"50vw","autoAlpha":0}}]},{"t":".fields","l":[{"t":"tween","p":0,"d":0.8,"l":{"scale":2,"autoAlpha":0}},{"t":"tween","p":0,"d":2,"l":{"y":"650px"}}]},{"t":".fields-high","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":0.8,"l":{"autoAlpha":1,"scale":2}},{"t":"tween","p":0,"d":2,"l":{"y":"650px"}}]},{"t":".cover","l":[{"t":"tween","p":0,"d":1.2,"l":{"y":"-20vh","x":"-50vw","autoAlpha":0}}]},{"t":".appearing","l":[{"t":"set","p":0,"d":0,"l":{"y":"-900px"}},{"t":"tween","p":0.6,"d":0.9,"l":{"opacity":1}},{"t":"tween","p":0.6,"d":1.41,"l":{"y":0}}]}]},"p":"scroll","rev":"true","rep":"true"}],"e_s":"center"}'    
    });
    pgia.add('$section.thedoc-m', null, {
        'scene': '{"dbg":"true","s":"custom","s_t":"start","s_s":"center","e_t":"end","pint":"this","pin_type":"transform","pin_body":"true","pin_spc":"auto","l":[{"name":"elementsmobile","t":"this","a":{"l":[{"t":".appearing","l":[{"t":"tween","p":0.3,"d":0.7,"l":{"autoAlpha":1,"y":0},"e":"Quad.easeOut"}]},{"t":".doc1","l":[{"t":"tween","p":0,"d":0.4,"l":{"autoAlpha":0}}]},{"t":".fields-high","l":[{"t":"set","p":0,"d":0,"l":{"transformOrigin":"50% 0%","y":"-55vh","scale":4,"x":"-45vw"}},{"t":"tween","p":0.3,"d":0.4,"l":{"opacity":1}}]}]},"p":"scroll","rev":"true","rep":"true"}],"e_s":"center"}'    
    });
    pgia.add('$section.emotional-square', null, {
        'scene': '{"s":"custom","s_t":"start","s_s":"end","e_t":"end","e_s":"end","l":[{"name":"appear","a":{"l":[{"t":".appearing","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"s":0.2,"l":{"autoAlpha":1}}]}]},"t":"this"},{"name":"movement","t":"this","a":{"l":[{"t":"img","l":[{"t":"set","p":0,"d":0,"l":{"scale":2}},{"t":"tween","p":0,"d":1,"s":0.2,"l":{"scale":1.15}}]}]}}]}'    
    });
    pgia.add('$main > section.estate-section', null, {
        'scene': '{"s":"onEnter","s_t":"start","s_s":"end","s_o":"-200px","e_t":"end","e_s":"end","l":[{"name":"estate-section-elements","t":".hands-container","a":{"l":[{"t":".border-top","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0,"d":0.2,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]},{"t":".hands-img","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0,"y":"20vh"}},{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":1}},{"t":"tween","p":0,"d":1,"l":{"y":0}}]},{"t":".body-text #gt# *:not(.border-top)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":0.2,"s":0.1,"l":{"autoAlpha":1}}]}]}},{"name":"profile","a":{"l":[{"t":".clipped","l":[{"t":"set","p":0,"d":0,"l":{"y":"30vh"}},{"t":"tween","p":0,"d":1,"l":{"y":0}},{"t":"tween","p":0.6,"d":0.4,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}]},{"t":".body-text #gt# *:not(.border-primary)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0.6,"d":0.4,"s":0.1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]}]},"t":".container-lg"},{"name":"background","t":"#gt# div:nth-of-type(1)","a":{"l":[{"t":"this","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1}},{"t":"tween","p":0.5,"d":0.5,"l":{"autoAlpha":0}}]}]}}]}'    
    });
    pgia.add('$section.profile-section', null, {
        'scene': '{"s":"custom","s_t":"start","s_s":"center","e_t":"end","pin_type":"transform","l":[{"name":"profile","t":"this","a":{"l":[{"t":".clipped","l":[{"t":"tween","p":0,"d":1,"l":{"clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},"e":"Power4.easeOut"}]},{"t":".body-text #gt# *:not(.border-info)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":1,"s":0.1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".row #gt# div:nth-of-type(2) #gt# div","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0,"d":1,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]}]},"p":"scroll","sc_dir":"up_down","rev":"true","rep":"true","rec":"true"}],"e_s":"end"}'    
    });
    pgia.add('$section.wine-item-section', null, {
        'scene': '{"s":"custom","s_t":"start","s_s":"end","s_o":"-200px","e_t":"end","e_s":"end","l":[{"name":"text-and-image","t":"this","a":{"l":[{"t":"img","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".bottle-text #gt# *:not(.border-top)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0.3,"d":0.5,"s":0.1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".border-top","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0.3,"d":0.5,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]}]}}]}'    
    });
    pgia.add('$section.wine-item-section', null, {
        'scene': '{"s":"custom","s_t":"start","s_s":"end","s_o":"-200px","e_t":"end","e_s":"end","l":[{"name":"text-and-image","t":"this","a":{"l":[{"t":"img","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".bottle-text #gt# *:not(.border-top)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0.3,"d":0.5,"s":0.1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".border-top","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0.3,"d":0.5,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]}]}}]}'    
    });
    pgia.add('$section.wine-item-section', null, {
        'scene': '{"s":"custom","s_t":"start","s_s":"end","s_o":"-200px","e_t":"end","e_s":"end","l":[{"name":"text-and-image","t":"this","a":{"l":[{"t":"img","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0,"d":1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".bottle-text #gt# *:not(.border-top)","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0}},{"t":"tween","p":0.3,"d":0.5,"s":0.1,"l":{"autoAlpha":1},"e":"Power4.easeOut"}]},{"t":".border-top","l":[{"t":"set","p":0,"d":0,"l":{"scaleX":0}},{"t":"tween","p":0.3,"d":0.5,"l":{"scaleX":1,"transformOrigin":"0% 0%"}}]}]}}]}'    
    });
    pgia.update();
}

    /* Pinegrow generated Interactions End */
