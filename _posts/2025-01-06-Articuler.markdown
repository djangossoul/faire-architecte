---
layout: post
title:  "Articuler"
seo_title: 
description: 
categories:
- Extensions
breadcrumbs:
  - name: "Accueil"
    url: "/"
  - name: "Portfolio"
    url: "/portfolio/"
  - name: "Extensions"
    url: "/portfolio/extensions/"
date:   2025-01-06 12:19:21 +0100
thumbnailback: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 04.jpg"
thumbnailback-alt: "Voir le projet Articuler – Extensions à Reims, FAIRE Architecte"
thumbnailfront: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 01Vcarre.jpg"
thumbnailfront-alt: "Voir le projet Articuler – Extensions à Reims, FAIRE Architecte"
detail1a: "Mission "
detail1b: "Esquisse"
detail2a: ""
detail2b: ""
detail3a: ""
detail3b: ""
detail4a: ""
detail4b: ""
detail5a: ""
detail5b: ""
detail6a: ""
detail6b: "" 
description1: "Implanté au sein d'un lotissement des années 90, ce projet s'inscrit dans une logique constructive commune à l'ensemble du quartier. La mission confiée : créer une chambre supplémentaire et un atelier, tout en repensant l'organisation intérieure existante.<br><br><strong>Une implantation pensée pour créer de l'intimité</strong><br><br>Les deux extensions sont positionnées de manière à générer un patio privatif, ménagé entre la maison, les nouveaux volumes et la limite parcellaire. Ce dispositif préserve une transparence visuelle entre la rue et le jardin, sans sacrifier l'intimité des habitants — ni l'arbre remarquable déjà présent sur le terrain."
description2: "<br><br><strong>Une intégration par la matière et la couleur</strong><br><br>Plutôt que de s'opposer à la palette existante du lotissement, le projet choisit de s'y inscrire par une réinterprétation contemporaine. Les extensions adoptent un principe mono-matériau en façade comme en toiture, avec un bardage métallique teinté rouge tuile. Les menuiseries, renouvelées sur l'existant et neuves sur les extensions, sont laquées dans la même teinte pour assurer une unité formelle.<br><br><strong>Un intérieur entièrement repensé</strong><br><br>L'aménagement intérieur est intégralement revu pour offrir un espace de vie ouvert sur le jardin, deux chambres enfants bien isolées, et une chambre parentale tournée vers le jardin et le patio — préservant une totale intimité vis-à-vis de la rue."

img1: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 05.jpg"
altimg1: ""
captionimg1: "Croquis de recherche d’extension sur existant"

img2: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 01.jpg"
altimg2: ""
captionimg2: "Travail de mise en situation des extensions"

img3: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 02.jpg"
altimg3: ""
captionimg3: "Mise en couleur rapide dans l’esprit désiré du projet"

img4: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 03.jpg"
altimg4: ""
captionimg4: "Travail de façade rapport entre existant et crée"

img5: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 04.jpg"
altimg5: ""
captionimg5: "Vue de dessus de l’ensemble du projet "

img6: "/assets/images/projects/articuler/2_CROQUIS EXTENSION SUR EXISTANT 06.jpg"
altimg6: ""
captionimg6: "Insertion, mise en situation avec la matérialité"

img7: "/assets/images/projects/articuler/2_PLAN EXTENSION SUR EXISTANT 06 - copie.jpg"
altimg7: ""
captionimg7: "Plan représentant l’existant en gris hachuré et le projet en rouge"

img8: ""
altimg8: ""
captionimg8: ""

img9: ""
altimg9: ""
captionimg9: ""

img10: ""
altimg10: ""
captionimg10: ""
---
<div id="main-page-content">   
     <!-- Row -->
    <div class="content-row small row_padding_top" style="padding-right: 20px; padding-left: 20px;"  data-bgcolor="#0c0c0c">
        <h2>Description</h2>
        <div class="secondary-font" style="display: flex; flex-wrap: wrap; gap: 25px;">
            <div style="flex-basis: 48%; box-sizing: border-box;"><p><span>{{ page.description1 }}</span></p></div>
            <div style="flex-basis: 48%; box-sizing: border-box;"><p><span>{{ page.description2 }}</span></p></div>
            <hr><hr>
        </div>
    </div> 
    <!--/Row -->
    <!-- Row -->
    <div class="content-row row_padding_top light-section" data-bgcolor="#ffffff">                                
        <div class="">
        {% if page.img1 and page.img1 != "" and page.img1 != nil %}
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img1 }}" class="image-link">
                    <img src="{{ page.img1 }}" alt="{{ page.altimg1  | default: page.captionimg1 }}">
                </a>
                <figcaption>{{ page.captionimg1 }}</figcaption>
            </figure>
        {% endif %}
            <hr><br><br>
        {% if page.img2 and page.img2 != "" and page.img2 != nil %}
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img2 }}" class="image-link">
                    <img src="{{ page.img2 }}" alt="{{ page.altimg2  | default: page.captionimg2 }}">
                </a>
                <figcaption>{{ page.captionimg2 }}</figcaption>
            </figure>
        {% endif %}
        </div>                   
    </div> 
    <!--/Row -->         
    <!-- Row -->
    <div class="content-row row_padding_top light-section" data-bgcolor="#ffffff">                                
        <div class="one_half">
            {% if page.img3 and page.img3 != "" and page.img3 != nil %}
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img3 }}" class="image-link">
                    <img src="{{ page.img3 }}" alt="{{ page.altimg3  | default: page.captionimg3 }}">
                </a>
                <figcaption>{{ page.captionimg3 }}</figcaption>
            </figure>
            {% endif %}
            <hr><br><br>
            {% if page.img4 and page.img4 != "" and page.img4 != nil %}
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img4 }}" class="image-link">
                    <img src="{{ page.img4 }}" alt="{{ page.altimg4  | default: page.captionimg4 }}">
                </a>
                <figcaption>{{ page.captionimg4 }}</figcaption>
            </figure>
            {% endif %}
        </div>   
        <div class="one_half last">
            {% if page.img5 and page.img5 != "" and page.img5 != nil %}                                             
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img5 }}" class="image-link">
                    <img src="{{ page.img5 }}" alt="{{ page.altimg5  | default: page.captionimg5 }}">
                </a>
                <figcaption>{{ page.captionimg5 }}</figcaption>
            </figure>
            {% endif %}
            <hr><br><br>
            {% if page.img6 and page.img6 != "" and page.img6 != nil %}
            <figure class="has-animation" data-delay="200">
                <a href="{{ page.img6 }}" class="image-link">
                    <img src="{{ page.img6 }}" alt="{{ page.altimg6  | default: page.captionimg6 }}">
                </a>
                <figcaption>{{ page.captionimg6 }}</figcaption>
            </figure>
            {% endif %}                                           
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