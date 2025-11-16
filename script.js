function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()  //A timeline lets you sequence multiple animations in order, so they play one after another smoothly

    tl.to("#nav-bottom",{  //.to() means GSAP will animate from its current height → to 21vh
        height: "21vh"
    })
    tl.to(".nav-part2 h5",{
        display: "block"  //Hidden <h5> elements appear
    })
    tl.to(".nav-part2 h5 span",{
        y:25,  //.from() means the elements start 20px below their final position (y:20) and animate upward to their original position
        //stagger in GSAP is used to delay the start of each element’s animation when you’re
        //animating multiple elements together - not everything moves at once
        stagger:{  //makes each span animate one after another with a 0.1 second delay — creating a smooth "wave" or "staggered" entrance effect
            amount: 0.6  //amount means the total duration of the staggering effect across all elements.
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
navAnimation();

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
page2Animation();

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
}
page3VideoAnimation()


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
