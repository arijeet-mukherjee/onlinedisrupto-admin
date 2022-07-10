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
    'header',
    'copy3',
    'howwe',
    'footer',
    'swiper',
    'smtp'
    
], function($,popper,slick,imagesloaded,isotype,worldmap,wow,worldmaptopo,mediaelement,bootstrap,header,copy3,howwe,footer,Swiper,smtp) {
      'use strict';
       var map={}; 
       map.show=function () {
        // The location of Uluru
        console.log("Map Here");
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("showmap"), {
            zoom: 4,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
        };
    
        $(document).ready(function() {
                    header.loadHeader("header");
                    
                    copy3.loadCopy("copy3");
                    howwe.loadHowwe("howwe");
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

                    $('#getnow').on('click', function (params) {
                       
                        var email = $('#inputEmail').val();
                        console.log('====================================');
                        console.log("email is" + email);
                        console.log('====================================');
                        document.getElementById("inputEmail").value = '';
                        sendEmailPhp(email);
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

                    
                    
                  /*   $('nav .dropdown').hover(function(){
                                    var $this = $(this);
                                    $this.addClass('show');
                                    $this.find('> a').attr('aria-expanded', true);
                                    $this.find('.dropdown-menu').addClass('show');
                        }, function(){
                        var $this = $(this);
                            $this.removeClass('show');
                            $this.find('> a').attr('aria-expanded', false);
                            $this.find('.dropdown-menu').removeClass('show');
                    }); */

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

                    /* Popup */
                    if(localStorage.getItem('popState') != 'showne'){
                            $("#once-popup").delay(1700).fadeIn();
                            localStorage.setItem('popState','shown')
                                }
                    else {                            
                            console.log('once-popup is allready shown previously')
                        }
                    $('#popup-close').click(function(e) // You are clicking the close button
                        {
                           $('#once-popup').fadeOut(); // Now the pop up is hiden.
                        });
                    
        
                    

        });

        function showPopUp(){
            localStorage.setItem('popState','notshown');
            if(localStorage.getItem('popState') != 'shown'){
                            $("#once-popup").delay(1700).fadeIn();
                            localStorage.setItem('popState','shown')
                                }
                                else {
                                
                                
                                    console.log('once-popup is allready shown previously')
                                }

                                $('#popup-close').click(function(e) // You are clicking the close button
                                {
                                $('#once-popup').fadeOut(); // Now the pop up is hiden.
                                });
                                

        }

        function sendEmailPhp(to){
                var ajaxurl = './php/ajax.php',
                data =  {'to': to};
                $.post(ajaxurl, data, function (response) {
                    // Response div goes here.
                    console.log("action performed successfully");
                });
        }
      
       function sendEmail(email) {
           console.log(Email);
            Email.send({
            Host: "smtp.gmail.com",
            Username : "info.onlinedisruptor@gmail.com",
            Password : "Arijeet@123",
            
            To : 'ari123acess@gmail.com',
            From : "info.onlinedisruptor@gmail.com",
            Subject : "Testing Mail",
            Body : "Auto Mail Test",
            }).then(
                message => alert("mail sent successfully")
            ).catch(
                (message) => {console.log('====================================');
                console.log(message);
                console.log('====================================');
                }
            );
        }

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
