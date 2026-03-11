---
layout: post
title:  "Accueillir"
categories:
- Rénovation
date:   2026-01-06 12:19:21 +0100
thumbnailback: "/assets/images/projects/Maison Urbaine 1930/04 SALON APRES.jpg"
thumbnailfront: "/assets/images/projects/Maison Urbaine 1930/04 SALON CROQUIS.jpg"
detail1a: "Maître d’ouvrage"
detail1b: "Privé"
detail2a: "Mission"
detail2b: "Complète"
detail3a: "Superficie"
detail3b: "120 m2"
detail4a: "Montant des travaux"
detail4b: "< 300 000 € HT"
detail5a: "Maîtrise d'oeuvre"
detail5b: "Collaboration <a class='link' style='color:#FFFFFF' href='https://cadetarchitecte.com/' target='_blank'>ACA</a>"
detail6a: ""
detail6b: ""
nextprojecttitle: "Ancrer"
nextprojectpermalink: "/portfolio/construction/Ancrer"
description1: "Cette maison typique rémoise a été abîmée dans son usage par ses anciens propriétaires. Que se soit les sols, les murs ou les plafonds, tout a été recouvert par des matériaux bas de gamme."
description2: "L’enjeu est de redonner ses lettres de noblesse à cette demeure en retrouvant au maximum les matériaux d’origine (parquet, carreaux de ciment...) Tout en lui offrant un nouvel usage d’habitation mêlant tous le confort traditionnel avec un enjeu énergétique non négligeable. Isolation, système de chauffage, électricité, plomberie, tout est repensé et mis aux normes pour cette nouvelle vie."

type1: img
img1: "/assets/images/projects/Maison Urbaine 1930/04 SALON AVANT.png"
captionimg1: "AVANT - Entrée de la maison"
text1: ""
type2: img
img2: "/assets/images/projects/Maison Urbaine 1930/04 SALON CROQUIS.jpg"
captionimg2: "CROQUIS DE CONCEPTION - SALON"
text2: ""
type3: img
img3: "/assets/images/projects/Maison Urbaine 1930/04 SALON APRES.jpg"
captionimg3: "APRES - Entrée de la maison salon salle à manger"
text3: ""

type4: img
img4: "/assets/images/projects/Maison Urbaine 1930/01 SDB AVANT.jpg"
captionimg4: "AVANT - Salle de bains"
text4: ""
type5: img
img5: "/assets/images/projects/Maison Urbaine 1930/01 SDB CROQUIS.jpg"
captionimg5: "CROQUIS DE CONCEPTION - Salle de bains"
text5: ""
type6: img
img6: "/assets/images/projects/Maison Urbaine 1930/01 SDB APRES.jpg"
captionimg6: "APRES - Salle de bains"
text6: ""

type7: img
img7: "/assets/images/projects/Maison Urbaine 1930/02 CHAMBRE ROUGE AVANT.jpeg"
captionimg7: "AVANT - Chambre rouge"
text7: ""
type8: text
img8: ""
captionimg8: ""
text8: "Je mets du texte aussi ici"
type9: img
img9: "/assets/images/projects/Maison Urbaine 1930/02 CHAMBRE ROUGE APRES.jpg"
captionimg9: "APRES - Chambre rouge"
text9: ""

type10: img
img10: "/assets/images/projects/Maison Urbaine 1930/03 SDD AVANT.jpeg"
captionimg10: "AVANT - Salle de douche"
text10: ""
type11: text
img11: ""
captionimg11: ""
text11: "Et du texte là"
type12: img
img12: "/assets/images/projects/Maison Urbaine 1930/03 SDD APRES.jpg"
captionimg12: "APRES - Salle de douche"
text12: ""

type13: text
img13: ""
captionimg13: "Lorem ipsum"
text13: "Et aussi ici"
type14: img
img14: "/assets/images/projects/Maison Urbaine 1930/04 SALON CUISINE CHANTIER.jpg"
captionimg14: "EN CHANTIER - Salon Cuisine"
text14: ""
type15: img
img15: "/assets/images/projects/Maison Urbaine 1930/04 SALON CUISINE APRES.jpg"
captionimg15: "APRES - Salon Cuisine"
text15: ""

type16: text
img16: ""
captionimg16: ""
text16: "Et je crois que c'est le dernier texte que je mets"
type17: img
img17: "/assets/images/projects/Maison Urbaine 1930/05 CHAMBRE MARRON TRAVAUX.jpg"
captionimg17: "EN CHANTIER - Chambre marron"
text17: ""
type18: img
img18: "/assets/images/projects/Maison Urbaine 1930/05 CHAMBRE MARRON APRES.jpg"
text18: "APRES - Chambre marron"
---
<div id="main-page-content">
    <!-- Row -->
    <div class="content-row small row_padding_top" style="padding-right: 20px; padding-left: 20px;" data-bgcolor="#0c0c0c">
        <h2>Description</h2>
        <div class="secondary-font" style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div style="flex-basis: 48%; box-sizing: border-box;"><p><span>{{ page.description1 }}</span></p></div>
            <div style="flex-basis: 48%; box-sizing: border-box;"><p><span>{{ page.description2 }}</span></p></div>
            <hr><hr>
        </div>
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6"  style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type1 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img1 }}" class="image-link">
                                <img src="{{ page.img1 }}">
                            </a>
                            <figcaption>{{ page.captionimg1 }}</figcaption>
                        </div>
                        {% elsif page.type1 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text1 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type2 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img2 }}" class="image-link">
                                <img src="{{ page.img2 }}">
                            </a>
                            <figcaption>{{ page.captionimg2 }}</figcaption>
                        </div>
                        {% elsif page.type2 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text2 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type3 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img3 }}" class="image-link">
                                <img src="{{ page.img3 }}">
                            </a>
                            <figcaption>{{ page.captionimg3 }}</figcaption>
                        </div>
                        {% elsif page.type3 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text3 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6" style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type4 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img4 }}" class="image-link">
                                <img src="{{ page.img4 }}">
                            </a>
                            <figcaption>{{ page.captionimg4 }}</figcaption>
                        </div>
                        {% elsif page.type4 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text4 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type5 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img5 }}" class="image-link">
                                <img src="{{ page.img5 }}">
                            </a>
                            <figcaption>{{ page.captionimg5 }}</figcaption>
                        </div>
                        {% elsif page.type5 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text5 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type6 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img6 }}" class="image-link">
                                <img src="{{ page.img6 }}">
                            </a>
                            <figcaption>{{ page.captionimg6 }}</figcaption>
                        </div>
                        {% elsif page.type6 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text6 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6"  style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type7 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img7 }}" class="image-link">
                                <img src="{{ page.img7 }}">
                            </a>
                            <figcaption>{{ page.captionimg7 }}</figcaption>
                        </div>
                        {% elsif page.type7 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text7 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type8 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img8 }}" class="image-link">
                                <img src="{{ page.img8 }}">
                            </a>
                            <figcaption>{{ page.captionimg8 }}</figcaption>
                        </div>
                        {% elsif page.type8 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text8 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type9 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img9 }}" class="image-link">
                                <img src="{{ page.img9 }}">
                            </a>
                            <figcaption>{{ page.captionimg9 }}</figcaption>
                        </div>
                        {% elsif page.type9 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text9 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6"  style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type10 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img10 }}" class="image-link">
                                <img src="{{ page.img10 }}">
                            </a>
                            <figcaption>{{ page.captionimg10 }}</figcaption>
                        </div>
                        {% elsif page.type10 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text10 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type11 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img11 }}" class="image-link">
                                <img src="{{ page.img11 }}">
                            </a>
                            <figcaption>{{ page.captionimg11 }}</figcaption>
                        </div>
                        {% elsif page.type11 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text11 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type12 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img12 }}" class="image-link">
                                <img src="{{ page.img12 }}">
                            </a>
                            <figcaption>{{ page.captionimg12 }}</figcaption>
                        </div>
                        {% elsif page.type12 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text12 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6"  style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type13 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img13 }}" class="image-link">
                                <img src="{{ page.img13 }}">
                            </a>
                            <figcaption>{{ page.captionimg13 }}</figcaption>
                        </div>
                        {% elsif page.type13 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text13 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type14 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img14 }}" class="image-link">
                                <img src="{{ page.img14 }}">
                            </a>
                            <figcaption>{{ page.captionimg14 }}</figcaption>
                        </div>
                        {% elsif page.type14 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text14 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type15 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img15 }}" class="image-link">
                                <img src="{{ page.img15 }}">
                            </a>
                            <figcaption>{{ page.captionimg15 }}</figcaption>
                        </div>
                        {% elsif page.type15 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text15 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row" data-bgcolor="#0c0c0c">
        <div class="zoom-gallery2">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.6"  style="align-items: center; padding-top:25px;">
                <li class="zoom-center">
                    {% if page.type16 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img16 }}" class="image-link">
                                <img src="{{ page.img16 }}">
                            </a>
                            <figcaption>{{ page.captionimg16 }}</figcaption>
                        </div>
                        {% elsif page.type16 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text16 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type17 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img17}}" class="image-link">
                                <img src="{{ page.img17 }}">
                            </a>
                            <figcaption>{{ page.captionimg17 }}</figcaption>
                        </div>
                        {% elsif page.type17 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text17 }}</p>
                        </div>
                    {% endif %}
                </li>
                <li class="zoom-center">
                    {% if page.type18 == "img" %}
                        <div class="zoom-img-wrapper">
                            <a href="{{ page.img18 }}" class="image-link">
                                <img src="{{ page.img18 }}">
                            </a>
                            <figcaption>{{ page.captionimg18 }}</figcaption>
                        </div>
                        {% elsif page.type18 == "text" %}
                        <div class="zoom-img-wrapper" style="background-color:transparent;">
                            <p>{{ page.text18 }}</p>
                        </div>
                    {% endif %}
                </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
        </div> 
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row small row_padding_bottom light-section text-align-center" data-bgcolor="#ffffff">
        <hr>
        <hr class="destroy">
        <div class="button-box has-animation" data-delay="100">             
            <div class="clapat-button-wrap parallax-wrap hide-ball">
                <div class="clapat-button parallax-element">
                    <div class="button-border rounded parallax-element-second">
                        <a target="_self" href="/contact">
                            <span data-hover="Je me lance !">Me contacter</span>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <!--/Row -->    
</div>
<!--/Main Page Content -->