/* Inizialize Lenis  */
function handleResize() {
		if (window.innerWidth >= 992) {
			const lenis = new Lenis()
			function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
		}
	}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

/* Preloader */

const preloaderwrapper = document.querySelector('.preloader');

function preloader(){
    window.addEventListener('load', () => {
        
        let count = 0;
        let counter = setInterval(() => {
            if (count <= 100) {
                count++;
            } else {
                clearInterval(counter);
                fadeOut(preloaderwrapper);
            }
        });

        //  fadeout
        function fadeOut(element) {
            element.style.opacity = 1;

            (function fade() {
                if ((element.style.opacity -= .1) < 0) {
                    element.style.visibility = 'hidden';
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
    });
}

/* Page opening */
function pageOpening(){
    window.addEventListener("load", () => {
        var el = document.querySelector('.apertura');
        pgia.play(el, 'loading');
    });
}

/* Mouse icon */
const links = document.querySelectorAll("a, button, input, #nav-trigger");

function enter() {
    let cursor = document.getElementById("circle");	
    cursor.classList.add("circle-active");
}

function leave() {
    let cursor = document.getElementById("circle");	
    cursor.classList.remove("circle-active");
}

links.forEach(link => {
    link.addEventListener("mouseenter", enter);
    link.addEventListener("mouseleave", leave);
});

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.getElementById('circle');
    
    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

/* Menu toggle */
let trigger = document.getElementById("nav-trigger");
if (trigger){
    trigger.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    let hamburger = document.getElementById("main-nav");
    hamburger.classList.toggle("active");

    const tl = gsap.timeline();

    if (hamburger.classList.contains('active')) {
        tl
        .set('#main-nav .nav-item', {
            opacity: 0,
            y: '30px'
        })
        .set('#main-nav', {
            'z-index': 10000
        })
        .to('#nav-trigger .menu-trigger', {
            y: '-100%',
        })
        .to('#main-nav', {
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: .5,
            ease: "expo.out"
        })
        .to('#main-nav .nav-item', {
            opacity: 1,
            duration: .15,
            y: '0',
            stagger: .15
        })
        .to('#main-nav .bottom-info', {
            opacity:1,
            duration: .15,
        })
    } else {
        tl
        .to('#main-nav .nav-item', {
            opacity: 0,
            duration: .15,
            y: '-30px',
            stagger: .15
        })
        .to('#main-nav .bottom-info', {
            opacity:0,
            duration: .15,
        })
        .to('#nav-trigger .menu-trigger', {
            y: '0',
        })
        .to('#main-nav', {
            'clip-path': 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            duration: .5,
            ease: "expo.out"
        })
        .set('#main-nav', {
            'z-index': -1
        })
    }
}

/* Barba animations */
const animationEnter = (container) => {
    return gsap.from(container, {autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'});
}

const animationLeave = (container) => {
    return gsap.to(container, {autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'});
}

/* Before eneter hook */
barba.hooks.beforeEnter((data) => {
    window.scrollTo(0, 0);
    document.getElementById('script').remove();
    document.getElementById('pgia').remove();
	let pgia = document.createElement('script');
    let script = document.createElement('script');
    pgia.src = "../pgia/lib/pgia.js";
    pgia.id = "pgia";
    script.src = "../anime.js";
    script.id = "script";
    document.body.appendChild(pgia);
    document.body.appendChild(script);
});

/* Initialize barba */
barba.use(barbaPrefetch);
barba.init({
		transitions: [
            {
                beforeOnce: () => preloader(),
                once({next}) {
                    animationEnter(next.container);
                    pageOpening();
                }
            },
            {
                name: 'con-menu',
                from:{
                    custom: ({trigger}) => {
                        return trigger.classList && trigger.classList.contains('nav-link');
                    },
                },
                beforeLeave: () => toggleMenu(),
                
                leave: ({current}) => animationLeave(current.container),

                enter({next}){
                    animationEnter(next.container);
                }
            },
            {
                leave: ({current}) => animationLeave(current.container),
                enter({next}){
                    animationEnter(next.container);
                }
            }
		]
	});
