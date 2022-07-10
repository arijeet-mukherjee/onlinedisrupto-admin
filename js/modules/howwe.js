define([
    'jquery',
    'bootstrap'
], function($,bootstrap) {
    'use strict';

    var methods={};
    
    methods.loadHowwe = function (args) {

                console.log(args);
                this.phonenumber="+91 91238 67498"
                document.getElementById(args).innerHTML=`
                <div class="about_info_area" style="background-color: #300753;">
        
            <div class="container">
        
        
                <div class="row align-items-center pad2">
        
        
                   
                    <div class="col-xl-4 col-lg-4">
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"
                            class="about_thumb aos-init aos-animate">
                            <img loading="lazy" decoding="async" data-src="assets/img/5.png"
                                alt="Illustration of a hand holding a mobile device with other mobile devices swirling around it."
                                imagealignment="center" class="lazy">
        
                        </div>
        
                    </div>

                     <div class="col-xl-6 col-lg-6 p-2 ml-5">
        
                        
                        <div class="about_text aos-init aos-animate" data-aos="fade-right" data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                        <ul style="color: #300753;">
                            <li style="color: #300753;">
                                <span class="sc" style="color: #fff; font-size:40px; font-weight:bold;">
                                    How we </span><span class="sc" style="color: rgb(255, 15, 123);font-size:40px; font-weight:bold;">work?
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li><span class="copy-text">
                                    We will take care of the entire process from start to finish. We have the experience, resources and
                                    expertise to help you get your product to<br> market.
                                </span></li>
                            <li><span class="copy-text">
                                    We specialize in hybrid mobile apps and have a proven track record of delivering great results for our
                                    clients.
                                </span></li>
                            <li><span class="copy-text">
                                    Our hybrid apps are built using the Flutter framework, which allows you<br> to use one code base for both
                                    iOS and Android.
                                </span></li>
                            <li><span class="copy-text">
                                    We are constantly innovating and are early adopters of the latest technologies.
                                </span></li>
                        
                        </ul>
                        </div>

                        <div class="showme" id="showmebtn" >
                            <div class="round-btn" id="hireus" style="background-color:#ff0f7b; margin-bottom:18px; margin-left:20px;border-radius: 35px; height:50px; width:200px;padding:5px">
                                 
                                    <span class="sc"  style="color:#fff; font-size:32px; font-weight:normal;font-family:eczar;margin-left:33px">Hire Now</span>
                                
                                
                            </div>

                            
                       
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
       `;
    
                
    };

    methods.show=function(params) {
        console.log("Arijeet");
    };


    return methods;
    
});