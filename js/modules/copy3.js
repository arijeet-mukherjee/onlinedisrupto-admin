define([
    'jquery',
    'bootstrap'
], function($,bootstrap) {
    'use strict';

    var methods={};
    
    methods.loadCopy = function (args) {

                console.log(args);
                this.phonenumber="+91 91238 67498"
                document.getElementById(args).innerHTML=`
                
        <div class="copy">
            <div class="hero">
                <div class="one">
                <div class="cc1" style="padding-top:45px"></div>
                    <div class="cc">
                      <div class="mockup">
                            <span class="sc">Market </span><span class="sc" style="color: rgb(255, 15, 123);">it</span>  
                            <span class="copy-text">
                                Your app has been launched. Now
                            </span>
                            <span class="copy-text">
                                let us make the noise in the market
                            </span>
                            <span class="copy-text">
                                on your behalf and we will help you
                            </span>
                            <span class="copy-text">
                                find the right customers and boost
                            </span>
                            <span class="copy-text">
                                your app installs.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="two">
                    <div class="cc">
                        <img loading="lazy" decoding="async"
                        data-src="assets/img/4.png"
                        alt="Illustration of a hand holding a mobile device with other mobile devices swirling around it." 
                        imagealignment="center" class="lazy">
                       
                    </div>
                </div>
            </div>
        </div>`;
    
                
    };

    methods.show=function(params) {
        console.log("Arijeet");
    };


    return methods;
    
});