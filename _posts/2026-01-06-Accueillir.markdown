---
layout: post
title:  "Accueillir"
categories:
- Rénovation
date:   2026-01-06 12:19:21 +0100
thumbnail1: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON APRES - ACA.avif"
thumbnail2: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON CROQUIS - ACA.avif"
detail1: "Maître d’ouvrage // Privé"
detail2: "Mission // Complète"
detail3: "Superficie // 94 m2 existant + 63m2 surélévation"
detail4: "Montant des travaux // < 300 000 € HT"
detail5: "Maîtrise d'oeuvre // Collaboration <a class='link' style='color:#FFFFFF' href='https://cadetarchitecte.com/' target='_blank'>ACA</a>"
detail6: ""
nextprojecttitle: "Ancrer"
nextprojectpermalink: "/portfolio/construction/ancrer"
nextprojectthumbnail: "/assets/images/02hero.jpg"
description1: "Cette maison typique rémoise a été abîmée dans son usage par ses anciens propriétaires. Que se soit les sols, les murs ou les plafonds, tout a été recouvert par des matériaux bas de gamme."
description2: "L’enjeu est de redonner ses lettres de noblesse à cette demeure en retrouvant au maximum les matériaux d’origine (parquet, carreaux de ciment...) Tout en lui offrant un nouvel usage d’habitation mêlant tous le confort traditionnel avec un enjeu énergétique non négligeable. Isolation, système de chauffage, électricité, plomberie, tout est repensé et mis aux normes pour cette nouvelle vie."

type1: text
img1: ""
captionimg1: "Lorem ipsum"
text1: "Je mets du texte car je n'ai pas de photo Avant"
type2: img
img2: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON CROQUIS - ACA.avif"
captionimg2: "Lorem ipsum"
text2: ""
type3: img
img3: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON APRES - ACA.avif"
captionimg3: "Lorem ipsum"
text3: ""

type4: img
img4: "/assets/images/projects/Maison Urbaine 1930 - 01 SDB AVANT - ACA.avif"
captionimg4: "Lorem ipsum"
text4: ""
type5: img
img5: "/assets/images/projects/Maison Urbaine 1930 - 01 SDB CROQUIS - ACA 1.avif"
captionimg5: "Lorem"
text5: ""
type6: img
img6: "/assets/images/projects/Maison Urbaine 1930 - 01 SDB APRES - ACA.avif"
captionimg6: "Lorem ipsum"
text6: ""

type7: img
img7: "/assets/images/projects/Maison Urbaine 1930 - 02 CHAMBRE ROUGE AVANT - ACA.avif"
captionimg7: "Lorem ipsum"
text7: ""
type8: text
img8: ""
captionimg8: ""
text8: "Je mets du texte aussi ici"
type9: img
img9: "/assets/images/projects/Maison Urbaine 1930 - 02 CHAMBRE ROUGE APRES - ACA.avif"
captionimg9: "Lorem ipsum"
text9: ""

type10: img
img10: "/assets/images/projects/Maison Urbaine 1930 - 03 SDD AVANT - ACA.avif"
captionimg10: "Lorem ipsum"
text10: ""
type11: text
img11: ""
captionimg11: ""
text11: "Et du texte là"
type12: img
img12: "/assets/images/projects/Maison Urbaine 1930 - 03 SDD APRES - ACA.avif"
captionimg12: "Lorem ipsum"
text12: ""

type13: text
img13: ""
captionimg13: "Lorem ipsum"
text13: "Et aussi ici"
type14: img
img14: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON CUISINE CHANTIER - ACA.avif"
captionimg14: "Lorem ipsum"
text14: ""
type15: img
img15: "/assets/images/projects/Maison Urbaine 1930 - 04 SALON CUISINE APRES - ACA.avif"
captionimg15: "Lorem ipsum"
text15: ""

type16: text
img16: ""
captionimg16: ""
text16: "Et je crois que c'est le dernier texte que je mets"
type17: img
img17: "/assets/images/projects/Maison Urbaine 1930 - 05 CHAMBRE MARRON TRAVAUX - ACA.avif"
captionimg17: "Lorem ipsum"
text17: ""
type18: img
img18: "/assets/images/projects/Maison Urbaine 1930 - 05 CHAMBRE MARRON APRES - ACA.avif"
text18: ""
---
<div id="main-page-content">
    <!-- Row -->
    <div class="content-row small row_padding_top" data-bgcolor="#0c0c0c">
        <h1>Description</h1>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
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
                        <a target="_blank" href="/contact">
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