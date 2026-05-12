---
layout: page
title: Contact
permalink: /contact/
seo_title: "Contacter FAIRE Architecte – Architecte à Reims | Floriane Jean HMONP"
description: "Contactez FAIRE Architecte à Reims pour discuter de votre projet de construction, extension ou rénovation. Floriane Jean, architecte HMONP, répond à vos questions."
breadcrumbs:
  - name: "Accueil"
    url: "/"
---

<!-- Main Content -->
<div id="main-content">
    <!-- Hero Section -->
    <div id="hero">
        <div id="hero-styles">
            <div id="hero-caption" class="content-full-width parallax-scroll-caption text-align-center hero-full-caption">
                <div class="inner">
                    <h1 class="hero-title caption-timeline" data-infoTextBefore="" data-infoTextAfter="">
                        <div class="red-color"><span>contact</span></div>
                    </h1>
                    <div class="hero-subtitle caption-timeline onload-shuffle-disabled">
                    </div>
                </div>
            </div>
            <div id="hero-footer" class="has-border">
                <div class="hero-footer-left">
                    <div class="button-wrap left scroll-down">
                        <div class="icon-wrap parallax-wrap">
                            <div class="button-icon parallax-element">
                                <!--<i class="fa-solid fa-arrow-down"></i>-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="margin:10px;"><path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-footer-right">
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
                    data-bgcolor="#733821">
                    <h2 class="has-shuffle-disabled">Discutons de votre projet</h2>
                    <hr>
                    <hr>
                    <!-- Contact Form -->
                    <!-- modify this form HTML and place wherever you want your form -->
                    <form id="my-form" action="https://formspree.io/f/xdawryge" method="POST" autocomplete="on" style="max-width: 800px; margin-right: auto; margin-left: auto;">
                        <label>Nom*:</label>
                        <input type="text" name="username" id="username" autocomplete="name" placeholder="Votre nom" required>
                        <label>Email*:</label>
                        <input type="email" name="email" id="email" autocomplete="email" placeholder="votre@email.com" required />
                        <label>Téléphone*:</label>
                        <input type="tel" name="telephone" autocomplete="tel" maxlength="12" placeholder="0605040302" required/>    
                        <label>Message:</label>
                        <textarea name="message" id="message" autocomplete="off" placeholder=""></textarea>
                        <label>
                            <input type="checkbox" name="terms" value="yes" required>
                            J'accepte la <a class="link" href="/politique-de-confidentialite/">politique de confidentialité</a>
                        </label>
                        <hr>
                        <button id="my-form-button" type="submit" class="button-border outline rounded parallax-element-second" >Envoyer</button>
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
                            status.innerHTML = "Merci pour votre message !";
                            form.reset()
                        } else {
                            response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oups ! Un problème est survenu lors de l'envoi de votre message."
                            }
                            })
                        }
                        }).catch(error => {
                        status.innerHTML = "Oups ! Un problème est survenu lors de l'envoi de votre message."
                        });
                    }
                    form.addEventListener("submit", handleSubmit)
                    </script>
                    <!--/Contact Form -->
                </div>
                <!--/Row -->
                <!-- Row -->
                <!--<div class="content-row dark-section" data-bgcolor="#733821">
                    <div class="clipped-image-wrapper">
                        <div class="clipped-image-pin">
                            <div class="clipped-image">
                                <div id="map_canvas-disabled"></div>
                                    {% include img.html
                                        path="/assets/images/maps-contact.jpg"
                                        alt="Localisation de FAIRE Architecte à  Reims"
                                        class=""
                                        style=""
                                        loading="lazy" %}
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
                </div>-->
                <!--/Row -->
                <!-- Row -->
                <div class="content-row dark-section text-align-center" data-bgcolor="#733821">
                    <div class="one_third has-animation" data-delay="100">
                        <div class="box-icon-wrapper block-boxes">
                            <div class="box-icon">
                                <!--<i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#FFFFFF"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
                            </div>
                            <div class="box-icon-content">
                                <p class="no-margins">
                                    <a href="https://maps.app.goo.gl/s1jPQaeyLTY29m8x9" target="_blank">18, rue du Dr Lemoine, 51100 Reims</a>
                                </p>
                                <!--<p>Adresse</p>-->
                            </div>
                        </div>
                    </div>
                    <div class="one_third has-animation" data-delay="200">
                        <hr>
                        <!--<p class="bigger">. . .</p>-->
                    </div>
                    <div class=" one_third last has-animation" data-delay="300">
                        <div class="box-icon-wrapper block-boxes">
                            <div class="box-icon">
                                <!--<i class="fa fa-phone fa-2x" aria-hidden="true"></i>-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"  fill="#FFFFFF"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                            </div>
                            <div class="box-icon-content">
                                <p class="no-margins">
                                    <a href="tel:+33680042486">06 80 04 24 86</a>
                                </p>
                                <!--<p>Téléphone</p>-->
                            </div>
                        </div>
                    </div>
                </div>
                <!--/Row -->
                <!-- Row -->
                <div class="content-row full row_padding_top row_padding_bottom dark-section text-align-center"
                    data-bgcolor="#733821">
                    <!--<p class="bigger has-shuffle-disabled no-margins secondary-font above-email">Envie de travailler ensemble ?</p>
                    <div id="copy-email" data-hover-message="Copy Mail" data-clicked-message="Copied">
                        <span><a href="mailto:contact@faire-architecte.com">contact@faire-architecte.com</a></span>
                    </div>-->
                    <div class="box-icon-wrapper block-boxes">
                        <div class="box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="fill:#ffffff;"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 128C214 128 128 214 128 320C128 426 214 512 320 512C337.7 512 352 526.3 352 544C352 561.7 337.7 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320L576 352C576 405 533 448 480 448C450.7 448 424.4 434.8 406.8 414.1C384 435.1 353.5 448 320 448C249.3 448 192 390.7 192 320C192 249.3 249.3 192 320 192C347.9 192 373.7 200.9 394.7 216.1C400.4 211.1 407.8 208 416 208C433.7 208 448 222.3 448 240L448 352C448 369.7 462.3 384 480 384C497.7 384 512 369.7 512 352L512 320C512 214 426 128 320 128zM384 320C384 284.7 355.3 256 320 256C284.7 256 256 284.7 256 320C256 355.3 284.7 384 320 384C355.3 384 384 355.3 384 320z"/></svg>
                        </div>
                        <div class="box-icon-content">
                            <p class="no-margins">
                                <a href="mailto:contact@faire-architecte.com">contact@faire-architecte.com</a>
                            </p>
                        </div>
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