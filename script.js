function locomotiveAnimation() {  //locomotive scroll provides smooth scrolling, scroll-based reveal/animations
     gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()  //A timeline lets you sequence multiple animations in order, so they play one after another smoothly

    tl.to("#nav-bottom",{  //.to() means GSAP will animate from its current height → to 21vh
        height: "21vh",
        duration: 0.5
    })
    tl.to(".nav-part2 h5",{
        display: "block",  //Hidden <h5> elements appear
        duration: 0.1
    })
    tl.to(".nav-part2 h5 span",{
        y:0,  //.from() means the elements start 20px below their final position (y:20) and animate upward to their original position
        //stagger in GSAP is used to delay the start of each element’s animation when you’re
        //animating multiple elements together - not everything moves at once
        stagger:{  //makes each span animate one after another with a 0.1 second delay — creating a smooth "wave" or "staggered" entrance effect
            amount: 0.5  //amount means the total duration of the staggering effect across all elements.
                        //The delay between each element is automatically calculated based on how many elements you’re animating.
                    //GSAP will distribute that 0.6 seconds evenly across all 6 items So each element starts roughly 0.1 seconds apart
        }  
        
    })
})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y: 25,
        stagger:{
            amount: 0.2
        }
    })
    tl.to (".nav-part2 h5",{
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom",{
        height: 0,
        duration: 0.2
    })
})
}


function page2Animation(){
    
var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{   //animate the 4th child node (index 3)
            opacity:1,  //fully visible
            scale:1    //normal size
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{  //animate the 4th child node (index 3)
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-90,   //X position of the element inside the viewport
            y:dets.y -  elem.getBoundingClientRect().y-215  //-90 & -215 Manual offsets to reposition the image
        })
    })
})
}


function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click",function(){
        video.play();  //This starts the video playback
        gsap.to(video,{
            transform: "scaleX(1) scaleY(1)",  //set width back to 100% ,set height back to 100%
            opacity: 1,
            borderRadius: 0
        })

    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.7) scaleY(0)",  
            opacity: 0,
            borderRadius: "30px"
        })
    })

    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity=1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity=0
            elem.childNodes[3].load()  //load = restart video from the beginning
        })
    })
}


function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

locomotiveAnimation()

navAnimation()

page2Animation()

page3VideoAnimation()

page6Animations()

loadingAnimation()