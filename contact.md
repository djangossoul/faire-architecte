---
layout: page
title: Contact
permalink: /contact/
order : 10
---

<!-- Main Content -->
<div id="main-content">
    <!-- Hero Section -->
    <div id="hero">
        <div id="hero-styles">
            <div id="hero-caption" class="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
                <div class="inner">
                    <h1 class="hero-title caption-timeline" data-infotextbefore="" data-infotextafter="">
                        <div><span>contact</span></div>
                    </h1>
                    <div class="hero-subtitle caption-timeline onload-shuffle-disabled">
                        <!--<div><span>Envie de discuter de votre projet ?</span></div>
                        <div class="secondary-font"><span>Envoyez-moi un petit mot</span></div>-->
                    </div>
                </div>
            </div>
            <div id="hero-footer" class="has-border">
                <div class="hero-footer-left">
                    <div class="button-wrap left scroll-down">
                        <div class="icon-wrap parallax-wrap">
                            <div class="button-icon parallax-element">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                        <!--<div class="button-text sticky left">
                            <span data-hover="Scroller pour Explorer">Scroller pour Explorer</span>
                        </div>-->
                    </div>
                </div>
                <div class="hero-footer-right">
                    <!--<div id="info-text">
                        <span>fairearchitecture@gmail.com</span>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
    <!--/Hero Section -->
    <!-- Main Page Content -->
    <div id="main-page-content">
        <!-- Fit Thumb Screen Effects -->
        <div id="itemsWrapperLinks">
            <div id="itemsWrapper" class="webgl-fitthumbs fx-one">
                <!-- Row -->
                <div class="content-row row_padding_top row_padding_bottom dark-section text-align-center"
                    data-bgcolor="#0c0c0c">
                    <h2 class="has-shuffle-disabled">Discutons de votre projet</h2>
                    <hr>
                    <hr>
                    <!-- Contact Form -->
                    <!-- modify this form HTML and place wherever you want your form -->
                    <form id="my-form" action="https://formspree.io/f/myzrjgvo" method="POST">
                        <label style="display:inline-block; margin-top:25px;">Email:</label>
                        <input type="email" name="email" />
                        <label style="display:inline-block; margin-top:25px;">Message:</label>
                        <input type="text" name="message" />
                        <style>
                            .my-form-button{margin: 50px 0; transition: transform .2s ease-out; background-color:#FFFFFF; color:#000000; font-weight: 400; font-size: 16px; line-height: 40px; overflow: hidden; width: auto; padding: 0 25px 0 25px; height: 44px; line-height: 44px; border-radius: 44px; position: relative; cursor: pointer; text-decoration: none; display: inline-block; border: none; text-align: center; width:100%; max-width:580px;}
                            .my-form-button:hover{background-color:#000000; color:#FFFFFF;}
                        </style>
                        <button class="my-form-button">Envoyer</button>
                        <p id="my-form-status"></p>
                    </form>
                    <!-- Place this script at the end of the body tag -->
                    <script>
                        var form = document.getElementById("my-form");
                        async function handleSubmit(event) {
                            event.preventDefault();
                            var status = document.getElementById("my-form-status");
                            var data = new FormData(event.target);
                            fetch(event.target.action, {
                            method: form.method,
                            body: data,
                            headers: {
                                'Accept': 'application/json'
                            }
                            }).then(response => {
                            if (response.ok) {
                                status.innerHTML = "Merci pour votre message!";
                                form.reset()
                            } else {
                                response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                } else {
                                    status.innerHTML = "Oops! Il y a eu un problème avec l'envoi de votre message"
                                }
                                })
                            }
                            }).catch(error => {
                            status.innerHTML = "Oops! Il y a eu un problème avec l'envoi de votre message"
                            });
                        }
                        form.addEventListener("submit", handleSubmit)
                    </script>
                    <!--/Contact Form -->
                </div>
                <!--/Row -->
                <!-- Row -->
                <div class="content-row dark-section" data-bgcolor="#0c0c0c">
                    <div class="clipped-image-wrapper">
                        <div class="clipped-image-pin">
                            <div class="clipped-image">
                                <div id="map_canvas-disabled"></div>
                                    <img class="fit-picture" src="/assets/images/maps-contact.jpg"  alt="" />
                                <div class="clipped-image-gradient"></div>
                            </div>
                        </div>
                        <div class="clipped-image-content">
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                            <hr>
                        </div>
                    </div>
                </div>
                <!--/Row -->
                <!-- Row -->
                <div class="content-row dark-section text-align-center" data-bgcolor="#0c0c0c">
                    <div class="one_third has-animation" data-delay="100">
                        <div class="box-icon-wrapper block-boxes">
                            <div class="box-icon">
                                <i class="fa fa-map-marker fa-2x" aria-hidden="true" style="color:#FFFFFF;"></i>
                            </div>
                            <div class="box-icon-content">
                                <h6 class="no-margins"><a href="https://maps.app.goo.gl/s1jPQaeyLTY29m8x9" target="_blank">18, rue du Dr Lemoine, 51100 Reims</a></h6>
                                <!--<p>Adresse</p>-->
                            </div>
                        </div>
                    </div>
                    <div class="one_third has-animation" data-delay="200">
                        <hr>
                        <p class="bigger">. . .</p>
                    </div>
                    <div class=" one_third last has-animation" data-delay="300">
                        <div class="box-icon-wrapper block-boxes">
                            <div class="box-icon">
                                <i class="fa fa-phone fa-2x" aria-hidden="true" style="color:#FFFFFF;"></i>
                            </div>
                            <div class="box-icon-content">
                                <h6 class="no-margins"><a href="tel:+33680042486">06 80 04 24 86</a></h6>
                                <!--<p>Téléphone</p>-->
                            </div>
                        </div>
                    </div>
                </div>
                <!--/Row -->
                <!-- Row -->
                <div class="content-row full row_padding_top row_padding_bottom dark-section text-align-center"
                    data-bgcolor="#0c0c0c">
                    <p class="bigger has-shuffle-disabled no-margins secondary-font">Envie de travailler ensemble ?</p>
                    <div id="copy-email" data-hover-message="Copy Mail" data-clicked-message="Copied">
                        <span><a href="mailto:fairearchitecture@gmail.com">fairearchitecture@gmail.com</a></span>
                    </div>
                </div>
                <!--/Row -->
            </div>
        </div>
        <!-- Fit Thumb Screen Effects -->
    </div>
    <!--/Main Page Content -->
</div>
<!--/Main Content -->