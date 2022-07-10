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
    'srvheader',
    'owlcarousel',
    
], function($,popper,slick,imagesloaded,isotype,worldmap,wow,worldmaptopo,mediaelement,bootstrap,header,copy3,howwe,footer,Swiper,srvheader,owlCarousel,) {
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
                    
                    srvheader.loadHeader("serviceheader");
                    
                    footer.loadFooter("footer");
                   
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
                     $(".owl-carousel").owlCarousel({

                        autoPlay: 3000,
                        items : 4,
                        itemsDesktop : [1199,3],
                        itemsDesktopSmall : [979,3],
                        center: true,
                        nav:true,
                        loop:true,
                        responsive: {
                        600: {
                        items: 4
                        }
                        }
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

                    $(function() {
                    $('#bk1').mouseover(function () {
                        $('#bk1').addClass("myborder");
                    }).mouseout(function() {
                        $('#bk1').removeClass("myborder");
                    });
                    $('#bk2').mouseover(function () {
                        $('#bk2').addClass("myborder");
                    }).mouseout(function() {
                        $('#bk2').removeClass("myborder");
                    });

                    $('#promofirst').mouseover(function () {
                        $('#promofirst').addClass("scale");
                        $('#promothird').removeClass("scale");
                    }).mouseout(function() {
                        $('#promothird').addClass("scale");
                        $('#promofirst').removeClass("scale");
                    });
                  
                    $('#promosecond').mouseover(function () {
                        $('#promosecond').addClass("scale");
                        $('#promothird').removeClass("scale");
                    }).mouseout(function() {
                        $('#promothird').addClass("scale");
                        $('#promosecond').removeClass("scale");
                    });
                    
                    $('#btn1').click(function () {
                        console.log("clicked 1");
                        var dpd =  $('#myDropdown1');
                        var img =  $('#imgservice1');
                        if(dpd.hasClass("show")){
                            dpd.removeClass("show");
                            img.css('opacity', '1');
                        }
                        else{
                            dpd.addClass("show");
                            img.css('opacity', '0.4');
                        }
                    });
                    $('#btn2').click(function () {
                        console.log("clicked 2");
                        var dpd =  $('#myDropdown2');
                        var img =  $('#imgservice2');
                        if(dpd.hasClass("show")){
                            dpd.removeClass("show");
                            img.css('opacity', '1');
                        }
                        else{
                            dpd.addClass("show");
                            img.css('opacity', '0.4');
                        }
                    });
                    $('.material-card > .mc-btn-action').click(function () {
                        var card = $(this).parent('.material-card');
                        var icon = $(this).children('i');
                        var dpd =  $('.material-card > .dropdown-content');
                        icon.addClass('fa-spin-fast');

                        if (!icon.hasClass('fa-bars')) {
                            card.removeClass('mc-active');
                            
                            window.setTimeout(function() {
                                icon
                                    .removeClass('fa-arrow-left')
                                    .removeClass('fa-spin-fast')
                                    .addClass('fa-bars');

                            }, 800);
                        } else {
                            card.removeClass('mc-active');
                           
                            window.setTimeout(function() {
                                icon
                                    .removeClass('fa-bars')
                                    .removeClass('fa-spin-fast')
                                    .addClass('fa-arrow-left');

                            }, 800);
                        }
                      
                    });
                });

               const selectPackage = document.getElementById('myPackage');
               selectPackage.addEventListener('change', (event)=>{
                    console.log("Arijeet Test Selections : "+ event.target.value);
                    const value=event.target.value;
                    if(value==='3'){
                        console.log("Yes!");
                        document.getElementById("ninjaPrice").innerHTML = "$1,700";
                        document.getElementById("roninPrice").innerHTML = "$2900";
                        document.getElementById("samuraiPrice").innerHTML = "$4,300";
                        document.getElementById("samuraiF").innerHTML = `
                                <b><li>Everything in Ronin</li></b>
                                <li>3 Months Content Marketing</li>
                                <li>Branding & Viral Marketing</li>
                                <li>Quora Optimization</li>
                                <li>30 Industry relevant Quora answers</li>
                                <li>Twitter Consultancy</li>
                        `;
                        document.getElementById("roninF").innerHTML = `
                                <b><li>Everything in Ninja + Source Code</li></b>
                                <li>Landing Page Website </li>
                                <li>Free 8 Months Technical Support</li>
                                <li>LinkedIn Optimization</li>
                                <li>30 LinkedIn Posts</li>
                                <li>LinkedIn Targeting & Account Management</li>
                        `;
                        document.getElementById("ninjaF").innerHTML = `
                                <li>Top Notch UI/UX</li>
                                <li>Mobile App Development</li>
                                <li>Free 6 Month Technical Support</li>
                                <li>30 Instagram Creatives</li>
                                <li>Instagram Optimization</li>
                                <li>Instagram Account Management</li>
                                <li>8 SEO friendly Blogs</li>
                        `;
                    }
                    if(value==='2'){
                        console.log("Yes!");
                        document.getElementById("ninjaPrice").innerHTML = "$500";
                        document.getElementById("roninPrice").innerHTML = "$1000";
                        document.getElementById("samuraiPrice").innerHTML = "$1500";
                        document.getElementById("samuraiF").innerHTML = `
                               <b> <li>Everything in Ronin</li></b>
                                <li>Quora Optimization</li>
                                <li>30 Industry relevant Quora answers</li>
                                <li>Twitter Consultancy</li>
                        `;
                        document.getElementById("roninF").innerHTML = `
                                <b><li>Everything in Ninja + Source Code</li></b>
                                <li>LinkedIn Optimization</li>
                                <li>30 LinkedIn Posts</li>
                                <li>LinkedIn Targeting & Account Management</li>
                        `;
                        document.getElementById("ninjaF").innerHTML = `
                                <li>30 Instagram Creatives</li>
                                <li>Instagram Optimization</li>
                                <li>Instagram Account Management </li>
                                <li>8 SEO friendly Blogs</li>
                        `;
                    }
                    if(value==='1'){
                        console.log("Yes!");
                        document.getElementById("ninjaPrice").innerHTML = "$1,200";
                        document.getElementById("roninPrice").innerHTML = "$1,900";
                        document.getElementById("samuraiPrice").innerHTML = "$2,800";
                        document.getElementById("samuraiF").innerHTML = `
                                <b><li>Everything in Ronin</li></b>
                                <li>3 Months Content Marketing</li>
                                <li>Branding & Viral Marketing</li>
                                
                        `;
                        document.getElementById("roninF").innerHTML = `
                                <b><li>Everything in Ninja + Source Code</li></b>
                                <li>Landing Page Website </li>
                                <li>Free 8 Months Technical Support</li>
                                
                        `;
                        document.getElementById("ninjaF").innerHTML = `
                                <li>Top Notch UI/UX</li>
                                <li>Mobile App Development</li>
                                <li>Free 6 Month Technical Support</li>
                                
                        `;
                    }
               });
                
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

      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        }

            
                
                

            
                
                
                
            
});
