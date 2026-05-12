function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-N8R9314KRH';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-N8R9314KRH');
}

CookieConsent.run({
    cookie: {
        name: 'cc_cookie',
        expiresAfterDays: 365
    },
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom left',
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    onConsent: function() {
        if (CookieConsent.acceptedCategory('analytics')) {
            loadGA();
        }
    },
    onChange: function(param) {
        if (param.changedCategories.includes('analytics')) {
            if (CookieConsent.acceptedCategory('analytics')) {
                loadGA();
            } else {
                window.location.reload();
            }
        }
    },
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            autoClear: {
                cookies: [
                    { name: /^_ga/ },
                    { name: '_gid' },
                    { name: '_gat' }
                ]
            }
        }
    },
    language: {
        default: 'fr',
        translations: {
            fr: {
                consentModal: {
                    title: 'Nous utilisons des cookies',
                    description: 'Ce site utilise Google Analytics pour mesurer son audience. Vous pouvez accepter ou refuser ces cookies de mesure.',
                    acceptAllBtn: 'Tout autoriser',
                    acceptNecessaryBtn: 'Refuser',
                    showPreferencesBtn: 'Personnaliser',
                    footer: '<a href="/politique-de-confidentialite">Politique de confidentialité</a>'
                },
                preferencesModal: {
                    title: 'Préférences de cookies',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Tout refuser',
                    savePreferencesBtn: 'Enregistrer mes choix',
                    closeIconLabel: 'Fermer',
                    sections: [
                        {
                            title: 'Utilisation des cookies',
                            description: 'Vous pouvez choisir quels cookies activer. Les cookies strictement nécessaires ne peuvent pas être désactivés.'
                        },
                        {
                            title: 'Strictement nécessaires',
                            description: 'Ces cookies assurent le bon fonctionnement du site (mémorisation de vos préférences de cookies). Ils ne peuvent pas être désactivés.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Mesure d\'audience — Google Analytics',
                            description: 'Ces cookies permettent de mesurer le trafic du site via Google Analytics. Toutes les données sont anonymisées et ne sont pas transmises à des tiers à des fins publicitaires.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookies Google Analytics',
                                headers: {
                                    name: 'Nom',
                                    domain: 'Domaine',
                                    duration: 'Durée',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: location.hostname,
                                        duration: '2 ans',
                                        desc: 'Identifiant unique visiteur (Google Analytics)'
                                    },
                                    {
                                        name: '_ga_N8R9314KRH',
                                        domain: location.hostname,
                                        duration: '2 ans',
                                        desc: 'État de session Google Analytics 4'
                                    },
                                    {
                                        name: '_gid',
                                        domain: location.hostname,
                                        duration: '24 heures',
                                        desc: 'Identifiant de session journalière (Google Analytics)'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Plus d\'informations',
                            description: 'Consultez notre <a class="cc__link" href="/politique-de-confidentialite">politique de confidentialité</a> pour en savoir plus sur l\'utilisation des cookies sur ce site.'
                        }
                    ]
                }
            }
        }
    }
});
