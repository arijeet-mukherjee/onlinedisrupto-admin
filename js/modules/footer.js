define([
    'jquery',
    'bootstrap'
], function($,bootstrap) {
    'use strict';

    var methods={};
    
    methods.loadFooter = function (args) {

                console.log(args);
                this.phonenumber="+91 91238 67498"
                document.getElementById(args).innerHTML=`
                <div class="about_info_area" style="background-color: #300753;">
        
                 <div class="container" style="padding:35px 5px 5px 0px">
        
        
                    <div class="row align-items-left pad2" style="margin-left:20px">
        
        
                   
                    <div class="col-xl-7 col-lg-7">
                        <div class="container">
                            <span class="sc" style="color: rgb(255, 15, 123);font-size:50px; font-weight:bold;">Let's 
                            </span>
                             <span class="sc" style="color: #fff;font-size:50px; font-weight:bold;">spice
                             </span>
                             <span class="sc" style="color: rgb(255, 15, 123);font-size:50px; font-weight:bold;">it up.
                             </span>
                             
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"
                            class="about_thumb aos-init aos-animate">
                            <div class="container" style="width:85%">
                                <form>
                                    <ul>
                                        <li>
                                            <label for="name"><span>Name <span class="required-star">*</span></span></label>
                                            <input type="text" id="name" name="user_name" required>
                                        </li>
                                        <li>
                                            <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                                            <input type="email" id="mail" name="user_email" required>
                                        </li>
                                         <li>
                                            <label for="phonenumber"><span>Phone Number <span class="required-star">*</span></span></label>
                                            <input type="number" id="mobile" name="user_mobile" required>
                                        </li>
                                        <li>
                                            <input type="submit" >
                                        </li>
                                    </ul>
                                </form>
                            </div>
        
                        </div>
        
                    </div>

                    <div class="col-xl-4 col-lg-5">
        
                        
                        <div class="about_text aos-init aos-animate" data-aos="fade-right" data-aos-offset="300"
                            data-aos-easing="ease-in-sine" style="padding:15px;">
                            <div>
                                <span class="sc" style="color: rgb(255, 15, 123);font-size:40px; font-weight:bold;">Address
                                </span>
                            
                            </div>
                            
                        </div>   
                           

                           <div class="showmap" id="showmap" style="width:100%;  margin:65px 0 0 0">
                           <div class="mapouter"><div class="gmap_canvas"><iframe width="320" height="381" id="gmap_canvas" src="https://maps.google.com/maps?q=105,%20shalpata%20bagan,%20agarpara,%20kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:381px;width:320px;}</style><a href="https://www.embedgooglemap.net">how to embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:381px;width:320px;}</style></div></div>
                            </div>
                    </div>
        
                </div>
              </div>
                <footer class="page-footer font-small blue">
                     <section style="text-align:center;color:#fff;">
                        <a href="https://www.facebook.com/Online-Disruptor-109178600796626/" target="_blank" style="color:#fff;padding:4px"><i class="fa fa-facebook"></i></a>
                        <a href="https://instagram.com/onlinedisruptor?igshid=1ljnbyj7766yi" target="_blank" style="color:#fff;padding:4px"><i class="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/OnlineDisruptor?s=09" target="_blank" style="color:#fff;padding:4px"><i class="fa fa-twitter"></i></a>
                        <a href="#" target="_blank" style="color:#fff;padding:4px"><i class="fa fa-telegram"></i></a>
                    </section>
                    <!-- Copyright -->
                    <div class="footer-copyright text-center py-3">© 2022 Copyright:
                        <a href="https://onlinedisruptor.com/" style="color:gray" target="_blank" > onlinedisruptor.com</a>
                    </div>
                    <!-- Copyright -->

                </footer>
        </div>      
       `;
    
                
    };

    methods.show=function(params) {
        console.log("Arijeet");
    };


    return methods;
    
});