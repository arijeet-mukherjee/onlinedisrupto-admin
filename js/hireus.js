define([
    'jquery',
    'popper',
    'slick',
    'imagesloaded',
    'isotope',
    'worldmap',
    'wow',
    'worldmaptopo',
    'mediaelement',    
    'bootstrap',
    
    'copy3',
    'howwe',
    'footer',
    'swiper',
    'hireusheader'
    
], function($,popper,slick,imagesloaded,isotype,worldmap,wow,worldmaptopo,mediaelement,bootstrap,copy3,howwe,footer,Swiper,hireusheader) {
      'use strict';

        /* Testimonial */
                    var	testim = document.getElementById("testim"),
                    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
                    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
                    testimLeftArrow = document.getElementById("left-arrow"),
                    testimRightArrow = document.getElementById("right-arrow"),
                    testimSpeed = 2500,
                    currentSlide = 0,
                    currentActive = 0,
                    testimTimer,
                        touchStartPos,
                        touchEndPos,
                        touchPosDiff,
                        ignoreTouch = 10;
                ;

                window.onload = function() {

                    // Testim Script
                    function playSlide(slide) {
                        for (var k = 0; k < testimDots.length; k++) {
                            testimContent[k].classList.remove("active");
                            testimContent[k].classList.remove("inactive");
                            testimDots[k].classList.remove("active");
                        }

                        if (slide < 0) {
                            slide = currentSlide = testimContent.length-1;
                        }

                        if (slide > testimContent.length - 1) {
                            slide = currentSlide = 0;
                        }

                        if (currentActive != currentSlide) {
                            testimContent[currentActive].classList.add("inactive");            
                        }
                        testimContent[slide].classList.add("active");
                        testimDots[slide].classList.add("active");

                        currentActive = currentSlide;
                    
                        clearTimeout(testimTimer);
                        testimTimer = setTimeout(function() {
                            playSlide(currentSlide += 1);
                        }, testimSpeed)
                    }

                    testimLeftArrow.addEventListener("click", function() {
                        playSlide(currentSlide -= 1);
                    })

                    testimRightArrow.addEventListener("click", function() {
                        playSlide(currentSlide += 1);
                    })    

                    for (var l = 0; l < testimDots.length; l++) {
                        testimDots[l].addEventListener("click", function() {
                            playSlide(currentSlide = testimDots.indexOf(this));
                        })
                    }

                    playSlide(currentSlide);

                    // keyboard shortcuts
                    document.addEventListener("keyup", function(e) {
                        switch (e.keyCode) {
                            case 37:
                                testimLeftArrow.click();
                                break;
                                
                            case 39:
                                testimRightArrow.click();
                                break;

                            case 39:
                                testimRightArrow.click();
                                break;

                            default:
                                break;
                        }
                    })
                        
                        testim.addEventListener("touchstart", function(e) {
                                touchStartPos = e.changedTouches[0].clientX;
                        })
                    
                        testim.addEventListener("touchend", function(e) {
                                touchEndPos = e.changedTouches[0].clientX;
                            
                                touchPosDiff = touchStartPos - touchEndPos;
                            
                                console.log(touchPosDiff);
                                console.log(touchStartPos);	
                                console.log(touchEndPos);	

                            
                                if (touchPosDiff > 0 + ignoreTouch) {
                                        testimLeftArrow.click();
                                } else if (touchPosDiff < 0 - ignoreTouch) {
                                        testimRightArrow.click();
                                } else {
                                    return;
                                }
                            
                        })
                }

                
                    /* Testimonial End */ 
      
    
        $(document).ready(function() {

                    hireusheader.loadHeader("header");
                    
                    footer.loadFooter("footer");
                    var mySwiper;
                    $('.swiper-container').each(function() {
                    $(this).on("mouseenter", function(e) {
                        $(this).find('.swiper-pagination,.swiper-button-next,.swiper-button-prev,.swiper-scrollbar').addClass('activeSwipe');

                        $(this).attr("data-id");
                        mySwiper = new Swiper('.' + $(this).attr("data-id"), {
                        loop: true,
                        speed: 400,
                        direction: 'vertical',

                        pagination: '.swiper-pagination.activeSwipe',
                        nextButton: '.swiper-button-next.activeSwipe',
                        prevButton: '.swiper-button-prev.activeSwipe',
                        scrollbar: '.swiper-scrollbar.activeSwipe',
                        preventClicksPropagation: false
                        });
                    });

                    $(this).on("mouseleave", function(e) {
                        
                        $(this).find('fas, fa-angle-up').addClass('hide');
                        mySwiper.destroy(true, true);
                    });
                    });
                    $('.navbar-toggler').on('click',function(){
                        console.log("Menu Clicked");
                        var x = document.getElementById("ftco-nav2");
                        if (x.style.display === "block") {
                            x.style.display = "none";
                            x.classList.remove("collapse"); 
                        } else {
                            
                            x.style.display = "block";
                            x.classList.add("collapse"); 
                            
                        }
                        
                    });

                    $('.round-btn').on('click',function (params) {
                        window.location.href='/service.html';
                    });
                    
                    var y=document.getElementById("dropdown04").getAttribute('aria-expanded');
                    $("#dropmenu").on('click',function(){
                            
                            if (y == "true") 
                            {
                                    y = "false";
                                    document.getElementById("dpm").style.display="none";
                                    
                                    document.getElementById("dpm").classList.remove("dropdown-menu");  
                            } else {
                                    y = "true";
                                    document.getElementById("dpm").style.display="block";
                                    document.getElementById("dpm").classList.add("dropdown-menu");
                            }
                            console.log("Hi----"+y);
                            document.getElementById("dropdown04").setAttribute('aria-expanded',y);
                    });
                 

                    /* Content Copied  */

                    document.addEventListener('copy', (event) => {
                    const pagelink = `\n\nRead more at: ${document.location.href}`;
                    event.clipboardData.setData('text/plain', document.getSelection() + pagelink);
                    event.preventDefault();
                    });

                    /* Lazy Loading Images */
                    if( document.readyState !== 'loading' ) {
                        console.log( 'document is already ready, executing code here' );
                        lazyLoad();
                    } else {
                        
                                /* Lazy Loading Images */
                            document.addEventListener("DOMContentLoaded", function() {
                                var lazyloadImages;    
                                console.log("Dom created Evnets");

                                if ("IntersectionObserver" in window) {
                                    lazyloadImages = document.querySelectorAll(".lazy");
                                    var imageObserver = new IntersectionObserver(function(entries, observer) {
                                    entries.forEach(function(entry) {
                                        if (entry.isIntersecting) {
                                        var image = entry.target;
                                        image.src = image.dataset.src;
                                        image.classList.remove("lazy");
                                        imageObserver.unobserve(image);
                                        }
                                    });
                                    });

                                    lazyloadImages.forEach(function(image) {
                                    imageObserver.observe(image);
                                    });
                                } else {  
                                    var lazyloadThrottleTimeout;
                                    lazyloadImages = document.querySelectorAll(".lazy");
                                    
                                    function lazyload () {
                                    if(lazyloadThrottleTimeout) {
                                        clearTimeout(lazyloadThrottleTimeout);
                                    }    

                                    lazyloadThrottleTimeout = setTimeout(function() {
                                        var scrollTop = window.pageYOffset;
                                        lazyloadImages.forEach(function(img) {
                                            if(img.offsetTop < (window.innerHeight + scrollTop)) {
                                            img.src = img.dataset.src;
                                            img.classList.remove('lazy');
                                            }
                                        });
                                        if(lazyloadImages.length == 0) { 
                                        document.removeEventListener("scroll", lazyload);
                                        window.removeEventListener("resize", lazyload);
                                        window.removeEventListener("orientationChange", lazyload);
                                        }
                                    }, 20);
                                    }

                                    document.addEventListener("scroll", lazyload);
                                    window.addEventListener("resize", lazyload);
                                    window.addEventListener("orientationChange", lazyload);
                                }
                            });
                            
                    }
                    /* Lazy Loading Images end*/
                    
                  
                    

        });

       /* Lazy Loading Images */
       

        function lazyLoad() {
             var lazyloadImages;    
                    console.log("Dom created Evnets");

                    if ("IntersectionObserver" in window) {
                        lazyloadImages = document.querySelectorAll(".lazy");
                        var imageObserver = new IntersectionObserver(function(entries, observer) {
                        entries.forEach(function(entry) {
                            if (entry.isIntersecting) {
                            var image = entry.target;
                            image.src = image.dataset.src;
                            image.classList.remove("lazy");
                            imageObserver.unobserve(image);
                            }
                        });
                        });

                        lazyloadImages.forEach(function(image) {
                        imageObserver.observe(image);
                        });
                    } else {  
                        var lazyloadThrottleTimeout;
                        lazyloadImages = document.querySelectorAll(".lazy");
                        
                        function lazyload () {
                        if(lazyloadThrottleTimeout) {
                            clearTimeout(lazyloadThrottleTimeout);
                        }    

                        lazyloadThrottleTimeout = setTimeout(function() {
                            var scrollTop = window.pageYOffset;
                            lazyloadImages.forEach(function(img) {
                                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                                img.src = img.dataset.src;
                                img.classList.remove('lazy');
                                }
                            });
                            if(lazyloadImages.length == 0) { 
                            document.removeEventListener("scroll", lazyload);
                            window.removeEventListener("resize", lazyload);
                            window.removeEventListener("orientationChange", lazyload);
                            }
                        }, 20);
                        }

                        document.addEventListener("scroll", lazyload);
                        window.addEventListener("resize", lazyload);
                        window.addEventListener("orientationChange", lazyload);
                    }
        }
                    
       /* Lazy Loading Images end*/

            
                
                
                
            
});
