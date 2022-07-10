define([
    'jquery',
    'bootstrap'
], function($,bootstrap) {
    'use strict';

    var methods={};
    
    methods.loadHeader = function (args,tab) {

                console.log(args);
               
                this.phonenumber="+91 91238 67498"
                document.getElementById(args).innerHTML=`
		                        <nav id="myNav" class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                                <div class="container" >
                                    <a class="navbar-brand" href="https://onlinedisruptor.com/" style="font-family:eczar">ONLINE <span>Disruptor</span></a>
                                    
                <button class="navbar-toggler my-selected-item" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span> Menu
                </button>
                <div class="navbar-collapse collapse" id="ftco-nav2">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-item dropdown" id="dropmenu">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown04" id="dpm">
                        <a class="dropdown-item" href="service.html">Mobile App Development</a>
                        <a class="dropdown-item" href="service.html">Website Development</a>
                        <a class="dropdown-item" href="service.html">Social Media Marketing</a>
                        
                    </div>
                    </li>
                        
                        
                    <li class="nav-item my-selected-item active"><a href="#" class="nav-link">Hire Us</a></li>
                    </ul>
                </div>
                </div>
            </nav>
    <!-- END nav -->`;
    
                
    };

    methods.show=function(params) {
        console.log("Arijeet");
    };


    return methods;

    
    
});