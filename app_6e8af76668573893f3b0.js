webpackJsonp([1], Array(54).concat([function(e, t, i) {
    "use strict";
    e.exports = {
        ads: {
            adsense: {
                clientId: "pub-0316265116163263",
                slotId: "4235517585",
                channelIds: ["5304701454", "2654487386"],
                slideshow: {
                    channelId: "8105874596"
                }
            },
            adlink: {
                clientId: "ca-pub-0316265116163263",
                slotId: {
                    rr: "3124580733",
                    body: "2975927994",
                    linkUnit: "8469137641"
                },
                style: {
                    rr: "display: block;",
                    body: "display: inline-block; width: 70%;height: 200px; padding-bottom: 30px",
                    linkUnit: "display:block;"
                }
            },
            mobileAdLogic: {
                articles: {
                    maxAds: 8,
                    midContentDistance: 1100,
                    firstAdDistance: 1,
                    lastAdDistance: 400,
                    imageToCharacters: 270,
                    newlineToCharacters: 70,
                    linkUnit: !0,
                    linkUnitSlot: 2,
                    jwPlayer: !0,
                    jwPlayerSlot: 2
                },
                article: {
                    maxAds: 8,
                    midContentDistance: 1100,
                    firstAdDistance: 1,
                    lastAdDistance: 400,
                    imageToCharacters: 270,
                    newlineToCharacters: 70,
                    linkUnit: !0,
                    linkUnitSlot: 2,
                    jwPlayer: !0,
                    jwPlayerSlot: 2
                }
            },
            GTM: {
                id: "GTM-T8S5XQ"
            },
            GPT: {
                type: "aps",
                pubID: "3066",
                adServer: "googletag",
                showFirstMobileAd: !1,
                showContinueReading: !1,
                blackList: {
                    horizontal: [[470, 200], [640, 320]]
                },
                adUnitPathDesktop: "/6117/dmd.leaftv/",
                adUnitPathMobile: "/6117/dmd.leaftv.mw/",
                pubmaticURL: "https://ads.pubmatic.com/AdServer/js/pwt/156496/498"
            },
            googleBlacklistedUrls: {
                "/articles/how-to-use-a-cigarette-holder/": 1,
                "/articles/what-are-the-benefits-of-a-cigarette-holder/": 1
            },
            jwPlayer: {
                videoLabel: "Video of the Day",
                playlistUrl: "https://cdn.jwplayer.com/v2/playlists/b48fMZYk",
                bidderName: "SpotX",
                bidderId: "220258",
                desktop: {
                    playerUrl: "https://content.jwplatform.com/libraries/cCGcIQYV.js"
                },
                mobile: {
                    playerUrl: "https://content.jwplatform.com/libraries/7vqnYR2L.js"
                }
            }
        },
        s3: {
            bucket: "leaftv_staging_data"
        },
        sdk: {
            name: "frontend-sdk",
            domain: "https://develop-api.stg.leaf.tv",
            token: "token_from_login"
        },
        site: {
            domain: "https://www.leaf.tv",
            title: "LEAFtv",
            name: "Leaf.tv",
            meta: {
                title: "LEAF",
                description: "A modern lifestyle resource for women; comprised of hundreds of how-to videos covering all things Living, Eating and Fashion.",
                info: [{
                    property: "og:site_name",
                    content: "LEAFtv"
                }, {
                    property: "fb:app_id",
                    content: "1855031724752213"
                }, {
                    property: "fb:pages",
                    content: "202292389783837"
                }, {
                    name: "msvalidate.01",
                    content: "129B5DE6FF8DD0ECBDD457C93FF101E3"
                }, {
                    name: "twitter:card",
                    content: "summary"
                }, {
                    name: "twitter:site",
                    content: "@leaftv"
                }, {
                    "http-equiv": "cache-control",
                    content: "no-cache"
                }]
            }
        },
        components: {
            hubs: {
                banner: {
                    imageSizeMobile: "370h",
                    title: {
                        charLimit: 35
                    },
                    subTitle: {
                        charLimit: 75
                    },
                    ctaCopy: {
                        charLimit: 20
                    }
                },
                articleCards: {
                    keysToShow: ["title", "subcategory"]
                }
            }
        },
        articles: {
            loadAds: ["modern_article", "slideshow", "article"],
            taboolaLoaderUrl: "//cdn.taboola.com/libtrc/demandmedia-leaftv/loader.js",
            showAds: {
                LC: !0,
                NC: !0
            },
            showContinueReading: !1
        },
        categories: {
            "feel-good": {
                name: "Feel Good",
                slug: "feel-good",
                title: "Feel Good",
                description: "Easy to follow wellness tips, fitness tutorials, life hacks and creative ways to stay mindful throughout the day.",
                type: "category"
            },
            "feel-good/fitness": {
                name: "Fitness",
                slug: "feel-good/fitness",
                title: "Fitness",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Feel Good",
                    slug: "feel-good"
                }
            },
            "feel-good/life-hacks": {
                name: "Life Hacks",
                slug: "feel-good/life-hacks",
                title: "Life Hacks",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Feel Good",
                    slug: "feel-good"
                }
            },
            "feel-good/mindfulness": {
                name: "Mindfulness",
                slug: "feel-good/mindfulness",
                title: "Mindfulness",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Feel Good",
                    slug: "feel-good"
                }
            },
            "feel-good/wellness": {
                name: "Wellness",
                slug: "feel-good/wellness",
                title: "Wellness",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Feel Good",
                    slug: "feel-good"
                }
            },
            "eat-well": {
                name: "Eat Well",
                slug: "eat-well",
                title: "Eat Well",
                description: "Hundreds of recipes from vegan to paleo, cooking skill tutorials and nutrition tips for a healthy body.",
                type: "category"
            },
            "eat-well/breakfast": {
                name: "Breakfast",
                slug: "eat-well/breakfast",
                title: "Breakfast",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/cocktails": {
                name: "Cocktails",
                slug: "eat-well/cocktails",
                title: "Cocktails",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/cooking-skills": {
                name: "Cooking Skills",
                slug: "eat-well/cooking-skills",
                title: "Cooking Skills",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/dessert": {
                name: "Dessert",
                slug: "eat-well/dessert",
                title: "Dessert",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/dinner": {
                name: "Dinner",
                slug: "eat-well/dinner",
                title: "Dinner",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/healthy-drinks": {
                name: "Healthy Drinks",
                slug: "eat-well/healthy-drinks",
                title: "Healthy Drinks",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/lunch": {
                name: "Lunch",
                slug: "eat-well/lunch",
                title: "Lunch",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/nutrition": {
                name: "Nutrition",
                slug: "eat-well/nutrition",
                title: "Nutrition",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "eat-well/small-bites": {
                name: "Small Bites",
                slug: "eat-well/small-bites",
                title: "Small Bites",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Eat Well",
                    slug: "eat-well"
                }
            },
            "dress-up": {
                name: "Dress Up",
                slug: "dress-up",
                title: "Dress Up",
                description: "Fashion inspiration, beauty and skincare tips, and interior design tutorials to beautify your life.",
                type: "category"
            },
            "dress-up/diy-beauty": {
                name: "DIY Beauty",
                slug: "dress-up/diy-beauty",
                title: "DIY Beauty",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Dress Up",
                    slug: "dress-up"
                }
            },
            "dress-up/fashion": {
                name: "Fashion",
                slug: "dress-up/fashion",
                title: "Fashion",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Dress Up",
                    slug: "dress-up"
                }
            },
            "dress-up/floral": {
                name: "Floral",
                slug: "dress-up/floral",
                title: "Floral",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Dress Up",
                    slug: "dress-up"
                }
            },
            "dress-up/home-design": {
                name: "Home + Design",
                slug: "dress-up/home-design",
                title: "Home + Design",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Dress Up",
                    slug: "dress-up"
                }
            },
            "dress-up/tutorials": {
                name: "Tutorials",
                slug: "dress-up/tutorials",
                title: "Tutorials",
                description: "",
                type: "subcategory",
                parent: {
                    name: "Dress Up",
                    slug: "dress-up"
                }
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = i(2)
      , o = a(r)
      , s = i(75)
      , l = a(s)
      , c = i(554)
      , u = a(c);
    t.default = {
        getDefaultTemplate: function() {
            return {
                article_id: "title_id",
                category: "category.name",
                content_name: "title",
                pagetype: "type",
                publishdate: "published_date",
                subcategory: "subcategory.name",
                subpagetype: "format",
                subsubcat: "subsubcategory.name",
                studioid: "studio_id",
                source: "new_content",
                updated_date: "last_updated",
                has_images: "image.url",
                tags: "tags"
            }
        },
        factory: function(e, t) {
            var i = {};
            return (0,
            l.default)(this.getDefaultTemplate(), function(a, n) {
                var r = "article" === t ? a : n;
                i[n] = (0,
                o.default)(e, r, "")
            }),
            "article" === t && (i.has_images = i.has_images ? "true" : "false",
            i.source = i.source ? "NC" : "LC"),
            "article" === t && (i = this.parse(i)),
            i
        },
        parse: function(e) {
            return JSON.parse(JSON.stringify(e))
        },
        mount: function(e) {
            !function(e, t, i, a, n) {
                e[a] = e[a] || [],
                e[a].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var r = t.getElementsByTagName(i)[0]
                  , o = t.createElement(i);
                o.async = !0,
                o.src = "https://www.googletagmanager.com/gtm.js?id=" + n,
                r.parentNode.insertBefore(o, r)
            }(window, document, "script", "dataLayer", e)
        },
        merge: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var i in t)
                e[i] = t[i];
            return e
        },
        formatArticle: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = this.transform(e, !0);
            return this.merge(i, t)
        },
        formatPageView: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = this.transform(e, !1);
            return this.merge(i, t)
        },
        transform: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = {}
              , a = this.getDefaultTemplate();
            for (var n in a) {
                var r = t ? a[n] : n;
                i[n] = (0,
                o.default)(e, r, "")
            }
            return t && (i.has_images = i.has_images ? "true" : "false",
            i.source = !0 === i.source ? "NC" : "LC"),
            i
        },
        load: function(e) {
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && function(e, t, i, a, n) {
                e[a] = e[a] || [],
                e[a].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var r = t.getElementsByTagName(i)[0]
                  , o = t.createElement(i);
                o.async = !0,
                o.src = "https://www.googletagmanager.com/gtm.js?id=" + n,
                r.parentNode.insertBefore(o, r)
            }(window, document, "script", "dataLayer", e)
        },
        setDataLayer: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            window.dataLayer || (window.dataLayer = []),
            e = (0,
            u.default)(e, t),
            window.dataLayer.push(e)
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        i(818)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(819)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "card-article-wrapper",
            class: {
                "card-article-wrapper--is-featured": e.isFeatured,
                "card-article-wrapper--is-rcp": e.isRCP,
                "card-article-wrapper--is-masonry": e.isMasonry
            }
        }, [i("a", {
            staticClass: "image",
            class: {
                "image--explore": "explore" === e.articleType
            },
            attrs: {
                href: e.article.slug,
                title: e.article.title,
                "data-event": e.dataEventImage,
                "data-info": e.dataInfo
            }
        }, [e.article.image && e.article.image.url ? i("img", {
            class: e.imageSize,
            attrs: {
                src: e._f("resizeImage")(e.article.image.url, e.imageSize),
                alt: e.article.title
            }
        }) : i("img", {
            attrs: {
                src: "/images/article-card-placeholder.png",
                alt: e.article.title
            }
        }), "video" === e.articleType ? i("span", {
            staticClass: "image-overlay image-overlay--video"
        }, [i("span", {
            staticClass: "svg play-icon-white"
        })]) : "explore" === e.articleType ? i("span", {
            staticClass: "image-overlay image-overlay--explore"
        }, [e._v("Explore")]) : i("span", {
            staticClass: "image-overlay image-overlay--read"
        }, [e._v("Read")])]), i("div", {
            staticClass: "info",
            class: {
                "info--is-featured": e.masonryExplore
            }
        }, [i("h3", {
            class: "subcategory category--" + e.getCategorySlug
        }, [e.getSubcategorySlug ? i("a", {
            attrs: {
                href: "/" + e.getCategorySlug + "/" + e.getSubcategorySlug,
                "data-event": e.dataEventText,
                "data-info": e.dataInfo
            }
        }, [e._v(e._s(e.getSubcategoryName))]) : e.getCategorySlug ? i("a", {
            attrs: {
                href: e.getCategorySlug
            }
        }, [e._v(e._s(e.getCategoryName))]) : e._e()]), i("h2", {
            staticClass: "title"
        }, [i("a", {
            staticStyle: {
                "-moz-box-orient": "vertical",
                "-webkit-box-orient": "vertical",
                "box-orient": "vertical"
            },
            attrs: {
                href: e.article.slug,
                title: e.article.title,
                "data-event": e.dataEventText,
                "data-info": e.dataInfo
            }
        }, [e._v(e._s(e.article.title))])]), e.article.summary ? i("div", {
            staticClass: "summary",
            staticStyle: {
                "-moz-box-orient": "vertical",
                "-webkit-box-orient": "vertical",
                "box-orient": "vertical"
            },
            domProps: {
                innerHTML: e._s(e.article.summary)
            }
        }) : e._e()])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e, t) {
        var i = e
          , a = t;
        return a || (a = "default"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "https://img.leafcdn.tv/" + a + "/cpcd/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "https://img.leafcdn.tv/" + a + "/cppd/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "https://img.leafcdn.tv/" + a + "/cpie/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "https://img.leafcdn.tv/" + a + "/ppds/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "https://img.leafcdn.tv/" + a + "/cpeh/"),
        i = i.replace(/https?:\/\/i.ehow.com\/images\//g, "https://img.leafcdn.tv/" + a + "/ieh/"),
        i = i.replace(/https?:\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "https://img.leafcdn.tv/" + a + "/clsd/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/sapling_data\/images\//g, "https://img.leafcdn.tv/" + a + "/sapling/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/sapling_staging_data\/images\//g, "https://img.leafcdn.tv/" + a + "/sapling_staging/"),
        i = i.replace(/https?:\/\/photos.demandstudios.com\/getty\//g, "https://img.leafcdn.tv/" + a + "/photos.demandstudios.com/getty/"),
        i = i.replace(/https?:\/\/photos2.demandstudios.com\/DM-Resize\//g, "https://img.leafcdn.tv/" + a + "/"),
        i = i.replace(/https?:\/\/s3.amazonaws.com\/cuteness_data\//g, "https://img.leafcdn.tv/" + a + "/cme/cuteness_data/"),
        i = i.replace(/https?:\/\/cache.gettyimages.com\//g, "https://img.leafcdn.tv/" + a + "/getty/"),
        i = i.replace(/https?:\/\/cpi.studiod.com\//g, "https://img.leafcdn.tv/" + a + "/cpi.studiod.com/"),
        i = i.replace(/https?:\/\/leafimg-a.akamaihd.net\/default\//g, "https://leafimg-a.akamaihd.net/" + a + "/"),
        i = i.replace(/https?:\/\/ds-farm1\//g, "https://leafimg-a.akamaihd.net/" + a + "/ds-farm1/"),
        i = i.replace(/https?:\/\/st.hzcdn.com\/simgs\//g, "https://leafimg-a.akamaihd.net/" + a + "/st-hzcdn/"),
        i = i.replace(/https?:\/\/photos.demandstudios.com\//g, "https://img.leafcdn.tv/" + t + "/photos.demandstudios.com/")
    }
    function n(e) {
        var t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        try {
            var i = new Date(e);
            return t[i.getMonth()] + " " + i.getDate() + ", " + i.getFullYear()
        } catch (e) {
            return ""
        }
    }
    function r(e) {
        var t = e.match(/:\/\/(www[0-9]?\.)?(.[^\/:]+)/i);
        return null != t && t.length > 2 && "string" == typeof t[2] && t[2].length > 0 ? t[2] : e
    }
    function o(e, t, i) {
        return e + (-1 === e.indexOf("?") ? "?" : "&") + t + "=" + i
    }
    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 160
          , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e.length <= t)
            return e;
        var a = e.substring(0, t);
        return i ? a + "…" : a
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.resizeImage = a,
    t.formatArticleDate = n,
    t.getHostOnly = r,
    t.addQueryParameter = o,
    t.truncate = s
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(735)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(736)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "article-image-wrapper",
            class: {
                "is-lc": e.isLc,
                "has-attribution-text": e.hasAttributionText
            }
        }, [i("div", {
            staticClass: "image-wrapper",
            style: {
                paddingTop: e.image.height / e.image.width * 100 + "%"
            }
        }, [i("img", {
            attrs: {
                src: e._f("resizeImage")(e.image.url, "640"),
                alt: e.image.alttext
            }
        })]), e.image.attributiontext || e.image.attributionlink ? i("div", {
            staticClass: "article-image__credit"
        }, [e._v("\n    credit:\n    "), e.image.attributiontext && e.image.attributionlink && 0 == e.image.attributionlink.indexOf("http") ? i("a", {
            attrs: {
                href: e.image.attributionlink,
                target: "_blank"
            }
        }, [e._v(e._s(e.image.attributiontext))]) : e.image.attributiontext && e.image.attributionlink && 0 != e.image.attributionlink.indexOf("http") ? i("a", {
            attrs: {
                href: "http://" + e.image.attributionlink,
                target: "_blank"
            }
        }, [e._v(e._s(e.image.attributiontext))]) : e.image.attributiontext ? i("span", [e._v(e._s(e.image.attributiontext))]) : e.image.attributionlink ? i("a", {
            attrs: {
                href: e._f("getHostOnly")("http://" + e.image.attributionlink),
                target: "_blank"
            }
        }, [e._v(e._s(e._f("getHostOnly")(e.image.attributionlink)))]) : e._e()]) : e._e(), e.caption || e.image.caption ? i("div", {
            staticClass: "article-image__caption"
        }, [i("div", {
            staticClass: "article-image__caption-inner",
            domProps: {
                innerHTML: e._s(e.caption || e.image.caption)
            }
        })]) : e._e()])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(814)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(815)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-facebook-comments"
        }, [e.showButton ? i("a", {
            attrs: {
                "data-event": "expand comments"
            },
            on: {
                click: e.showCommentsClickHandler
            }
        }, [e._m(0)]) : e._e(), i("div", {
            staticClass: "fb-comments-wrapper",
            attrs: {
                id: e.id
            }
        }, [i("div", {
            staticClass: "fb-comments",
            class: {
                "is-visible": !e.showButton
            },
            attrs: {
                "data-href": e.dataHref,
                "data-width": e.dataWidth,
                "data-numposts": e.dataNumposts
            }
        })])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "button-wrapper"
        }, [i("span", {
            staticClass: "svg facebook-white-on-blue"
        }), e._v("Show Comments\n    ")])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(820)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(821)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "social-share-icons-wrapper"
        }, [i("ul", {
            staticClass: "social-share-icons clearfix"
        }, [i("li", {
            staticClass: "social-share-icons__item",
            on: {
                click: function(t) {
                    e.openSocialWindow(t)
                }
            }
        }, [i("a", {
            attrs: {
                href: "http://www.facebook.com/share.php?u=" + e.config.site.domain + e.article.slug + "&title=" + e.urlReadyArticleTitle + "%20%7C%20" + e.config.site.title,
                target: "_blank",
                "data-event": "Facebook"
            }
        }, [i("span", {
            staticClass: "svg facebook-white social-share-icon"
        })])]), e.article.image ? i("li", {
            staticClass: "social-share-icons__item",
            on: {
                click: function(t) {
                    e.openSocialWindow(t)
                }
            }
        }, [i("a", {
            attrs: {
                href: "http://pinterest.com/pin/create/bookmarklet/?media=" + e.article.image.url + "&url=" + e.config.site.domain + e.article.slug + "&is_video=false&description=" + e.urlReadyArticleTitle + "%20%7C%20" + e.config.site.title,
                target: "_blank",
                "data-event": "Pinterest"
            }
        }, [i("span", {
            staticClass: "svg pinterest-white social-share-icon"
        })])]) : e._e(), e.article.image ? i("li", {
            staticClass: "social-share-icons__item",
            on: {
                click: function(t) {
                    e.openSocialWindow(t)
                }
            }
        }, [i("a", {
            attrs: {
                href: "//twitter.com/share?url=" + e.config.site.domain + e.article.slug,
                target: "_blank",
                "data-event": "Twitter"
            }
        }, [i("span", {
            staticClass: "svg twitter-white social-share-icon"
        })])]) : e._e()])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(756)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(816)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(817)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "related-content-wrapper"
        }, [i("div", {
            staticClass: "related-content-heading"
        }, [i("h2", {
            staticClass: "title"
        }, [e._v(e._s(e.title))])]), i("div", {
            staticClass: "related-content-articles"
        }, e._l(e.relatedArticles, function(e, t) {
            return i("article", {
                staticClass: "related-content-articles__item"
            }, [i("card-article", {
                attrs: {
                    article: e,
                    dataEventImage: "rc_right_rail",
                    dataEventText: "rc_right_rail",
                    dataInfo: t + 1,
                    isRCP: !0
                }
            })], 1)
        }))])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(830)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(831)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "error404-view"
        }, [i("section", {
            staticClass: "section section--not-found"
        }, [i("h1", [e._v("We're sorry, the page you were looking for could not be found.")]), i("search-form-simple", {
            attrs: {
                action: "/search",
                placeholder: "Search"
            }
        })], 1)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(855)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(856)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "infinite-loader"
        }, [i("div", {
            staticClass: "dot one"
        }), i("div", {
            staticClass: "dot two"
        }), i("div", {
            staticClass: "dot three"
        })])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        i(533)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(534)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "social-links"
        }, [i("ul", {
            staticClass: "clearfix"
        }, [i("li", [i("a", {
            attrs: {
                href: "https://www.facebook.com/LEAFtv-202292389783837/",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "Facebook"
            }
        }, [i("span", {
            staticClass: "svg facebook-blue"
        })])]), i("li", [i("a", {
            attrs: {
                href: "https://www.pinterest.com/leaftv/",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "Pinterest"
            }
        }, [i("span", {
            staticClass: "svg pinterest-red"
        })])]), i("li", [i("a", {
            attrs: {
                href: "https://twitter.com/leaftv",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "Twitter"
            }
        }, [i("span", {
            staticClass: "svg twitter-blue"
        })])]), i("li", [i("a", {
            attrs: {
                href: "https://www.instagram.com/leaftv/",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "Instagram"
            }
        }, [i("span", {
            staticClass: "svg instagram-blue"
        })])]), i("li", [i("a", {
            attrs: {
                href: "https://www.youtube.com/user/leaftv",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "YouTube"
            }
        }, [i("span", {
            staticClass: "svg youtube-red"
        })])]), i("li", [i("a", {
            attrs: {
                href: "https://plus.google.com/+leaftv/posts",
                target: "_blank",
                "data-event": "footer follow",
                "data-info": "Google Plus"
            }
        }, [i("span", {
            staticClass: "svg googleplus-red"
        })])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = n.test(e);
        return t ? !r.test(e) : t
    }
    var n = /(ipad|android|silk)/i
      , r = /android.*?mobile/i;
    e.exports = a
}
, , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(75)
      , s = a(o)
      , l = i(54);
    t.default = {
        getCategorySlugsByType: function(e) {
            var t = [];
            return (0,
            s.default)(l.categories, function(i) {
                (0,
                r.default)(i, "type", "") === e && t.push((0,
                r.default)(i, "slug", ""))
            }),
            t.join("|")
        },
        getCategoryObject: function(e) {
            return (0,
            r.default)(l.categories, "[" + e + "]", {})
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.OutOfPage = t.AdTaboola = t.AdLink = t.AdsMixin = t.AdGpt = t.AdAdsense = void 0;
    var n = i(742)
      , r = a(n)
      , o = i(743)
      , s = a(o)
      , l = i(744)
      , c = a(l)
      , u = i(745)
      , d = a(u)
      , f = i(746)
      , p = a(f)
      , h = i(747)
      , m = a(h);
    t.AdAdsense = r.default,
    t.AdGpt = s.default,
    t.AdsMixin = m.default,
    t.AdLink = c.default,
    t.AdTaboola = d.default,
    t.OutOfPage = p.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(753)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , n = i(2)
      , r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n);
    t.default = {
        getDefaultTemplate: function() {
            return {
                article_id: "title_id",
                category: "category.name",
                content_name: "title",
                pagetype: "type",
                publishdate: "published_date",
                subcategory: "subcategory.name",
                subpagetype: "format",
                subsubcat: "subsubcategory.name",
                studioid: "studio_id",
                source: "new_content",
                updated_date: "last_updated",
                has_images: "image.url",
                tags: "tags"
            }
        },
        merge: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var i in t)
                e[i] = t[i];
            return e
        },
        formatArticle: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = this.transform(e, !0);
            return this.merge(i, t)
        },
        formatPageView: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = this.transform(e, !1);
            return this.merge(i, t)
        },
        transform: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = {}
              , a = this.getDefaultTemplate();
            for (var n in a) {
                var o = t ? a[n] : n;
                i[n] = (0,
                r.default)(e, o, "")
            }
            return t && (i.has_images = i.has_images ? "true" : "false",
            i.source = !0 === i.source ? "NC" : "LC"),
            i
        },
        load: function(e) {
            "object" === ("undefined" == typeof window ? "undefined" : a(window)) && function(e, t, i, a, n) {
                e[a] = e[a] || [],
                e[a].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var r = t.getElementsByTagName(i)[0]
                  , o = t.createElement(i);
                o.async = !0,
                o.src = "https://www.googletagmanager.com/gtm.js?id=" + n,
                r.parentNode.insertBefore(o, r)
            }(window, document, "script", "dataLayer", e)
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(this, e),
            this.slots = {},
            this.targets = {},
            this.isLoaded = !1,
            this.googletag = t,
            this.isPubmatic = "string" == typeof i.pubmaticURL,
            this.showFirstMobileAd = i.showFirstMobileAd,
            this.adUnitPathDesktop = i.adUnitPathDesktop,
            this.adUnitPathMobile = i.adUnitPathMobile,
            this.filterAds = "function" == typeof i.filterAds ? i.filterAds : this.defaultFilterAds,
            this.isMobile = null,
            this.adUnitCode = null
        }
        return n(e, [{
            key: "add",
            value: function(e, t) {
                e || (console.warn("add(slug, slot) slug was not set, setting to `initial`"),
                e = "initial"),
                t.displayed = null,
                this.slots[e] || (this.slots[e] = {
                    targets: {},
                    ads: []
                }),
                this.slots[e].ads.push(t)
            }
        }, {
            key: "defineAdSlot",
            value: function(e) {
                return this.googletag.defineSlot(this.getAdCode(e.id), e.sizes, e.id).addService(this.googletag.pubads()).setTargeting("loc", e.loc)
            }
        }, {
            key: "defineOutOfPage",
            value: function() {
                return this.googletag.defineOutOfPageSlot(this.getAdCode("out-of-page"), "out-of-page").addService(this.googletag.pubads())
            }
        }, {
            key: "defineAds",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function() {
                    t.forEach(function(t) {
                        t.Slot = e.defineAdSlot(t)
                    })
                }
            }
        }, {
            key: "defineAdsAndSetTargeting",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.googletag.cmd.push(this.setGoogleTargeting(t)),
                this.googletag.cmd.push(this.defineAds(e))
            }
        }, {
            key: "defaultFilterAds",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = arguments[1];
                return t.filter(function(t, a) {
                    return !e.isMobile || 0 === i || !e.showFirstMobileAd || 0 === a
                })
            }
        }, {
            key: "display",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.googletag.cmd.push(function() {
                    t.forEach(function(t) {
                        e.googletag.display(t.id),
                        t.displayed = !0
                    }),
                    e.refresh(t)
                })
            }
        }, {
            key: "dfpkv",
            value: function() {
                var e = this.locationHasDfpkvFlag(decodeURIComponent(document.location.search));
                if (e) {
                    for (var t = {}, i = e[1].split(","), a = 0; a < i.length; a++) {
                        var n = i[a].split(":")
                          , r = n[0]
                          , o = n[1];
                        r && o && (void 0 === t[r] && (t[r] = []),
                        t[r].push(o))
                    }
                    for (var s in t)
                        t.hasOwnProperty(s) && this.googletag.pubads().setTargeting(s, t[s].join())
                }
            }
        }, {
            key: "fetchHiddenAds",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.slots[e].ads.slice(1)
                  , i = this.slots[e].targets;
                this.defineAdsAndSetTargeting(t, i),
                this.display(t)
            }
        }, {
            key: "filterAdsByDevice",
            value: function() {
                var e = this;
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter(function(t) {
                    return "mobile" === t.device && e.isMobile || "desktop" === t.device && !e.isMobile
                })
            }
        }, {
            key: "getSlotFromAdsArray",
            value: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
                    return e.Slot
                })
            }
        }, {
            key: "getSlotObjectFromSlug",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return this.slots[e] ? this.slots[e] : {}
            }
        }, {
            key: "generateRefreshSlotsHashmap",
            value: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(e, t) {
                    return e[t] = !0,
                    e
                }, {})
            }
        }, {
            key: "getAdCode",
            value: function(e) {
                return "" + this.adUnitCode + e
            }
        }, {
            key: "getArticleNumbers",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = /\/([0-9]+)\/.*/g;
                return t.test(e) ? e.replace(t, "$1") : "none"
            }
        }, {
            key: "initialLoadSetup",
            value: function() {
                var e = this;
                return function() {
                    e.defineOutOfPage(),
                    e.dfpkv(),
                    e.googletag.pubads().setTargeting("ksg", Krux.segments),
                    e.googletag.pubads().setTargeting("kuid", Krux.user),
                    e.googletag.pubads().enableSingleRequest(),
                    e.googletag.pubads().collapseEmptyDivs(),
                    e.googletag.enableServices()
                }
            }
        }, {
            key: "loadAds",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                null === this.isMobile && this.setup(a);
                var n = this.getSlotObjectFromSlug(e);
                n.ads = this.filterAdsByDevice(n.ads),
                n.targets = i;
                var r = this.filterAds(n.ads, t);
                this.defineAdsAndSetTargeting(r, i),
                this.isLoaded || (this.isLoaded = !0,
                this.googletag.cmd.push(this.initialLoadSetup())),
                this.display(r, !this.isPubmatic)
            }
        }, {
            key: "loadAdditionalAdsDynamically",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.getSlotObjectFromSlug(e);
                if (t.ads) {
                    var i = t.ads.filter(function(e) {
                        return !e.displayed
                    });
                    this.googletag.cmd.push(this.setGoogleTargeting(t.targets)),
                    this.googletag.cmd.push(this.defineAds(i)),
                    this.display(i)
                }
            }
        }, {
            key: "locationHasDfpkvFlag",
            value: function(e) {
                var t = decodeURIComponent(e)
                  , i = /.*dfpkv=([^&]*)/
                  , a = t.match(i);
                return !!(a && a.length > 0) && a
            }
        }, {
            key: "lowerCaseAndRemoveHyphens",
            value: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\W/g, "").toLowerCase()
            }
        }, {
            key: "refresh",
            value: function(e) {
                var t = this.getSlotFromAdsArray(e);
                this.googletag.pubads().refresh(t)
            }
        }, {
            key: "refreshAds",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (this.slots[e]) {
                    var i = (0,
                    o.default)(this, "slots[" + e + "].ads", []);
                    if (t && t.length) {
                        var a = this.generateRefreshSlotsHashmap(t);
                        i = i.filter(function(e) {
                            return a[e.id]
                        })
                    }
                    return this.googletag.cmd.push(this.setGoogleTargeting((0,
                    o.default)(this, "slots[" + e + "].targets", {}))),
                    this.refresh(i, !0)
                }
            }
        }, {
            key: "setAdUnitCode",
            value: function(e) {
                this.adUnitCode = e ? this.adUnitPathMobile : this.adUnitPathDesktop
            }
        }, {
            key: "setGoogleTargeting",
            value: function(e) {
                var t = this;
                return function() {
                    for (var i in e) {
                        var a = e[i];
                        a = Array.isArray(a) ? a.map(function(e) {
                            return t.lowerCaseAndRemoveHyphens(e)
                        }) : t.lowerCaseAndRemoveHyphens(a),
                        t.googletag.pubads().setTargeting(i, a)
                    }
                }
            }
        }, {
            key: "setTargets",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.targets = e
            }
        }, {
            key: "setup",
            value: function(e) {
                this.isMobile = e,
                this.setAdUnitCode(e)
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(825)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(826)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "slider-container"
        }, [i("div", {
            staticClass: "display-container"
        }, [e._l(e.imageSlider, function(t) {
            return t.image.url ? i("img", {
                staticClass: "mySlides",
                attrs: {
                    src: e._f("resizeImage")(t.image.url, "640"),
                    alt: t.custom_title
                }
            }) : e._e()
        }), i("div", {
            staticClass: "controller-container"
        }, [i("div", {
            staticClass: "left",
            on: {
                click: function(t) {
                    e.plusDivs(-1)
                }
            }
        }, [i("span", {
            staticClass: "svg image-slider-left"
        })]), i("div", {
            staticClass: "right",
            on: {
                click: function(t) {
                    e.plusDivs(1)
                }
            }
        }, [i("span", {
            staticClass: "svg image-slider-right"
        })])]), i("div", {
            staticClass: "badge-container"
        }, [i("div", {
            staticClass: "badge-inner"
        }, e._l(e.imageSlider, function(t, a) {
            return i("div", {
                staticClass: "thumbnail-wrap"
            }, [t.image.url ? i("img", {
                staticClass: "thumbs thumb-opacity",
                attrs: {
                    src: e._f("resizeImage")(t.image.url, "150x90"),
                    alt: t.custom_title,
                    "data-index": a
                },
                on: {
                    click: function(t) {
                        e.currentDiv(a + 1)
                    }
                }
            }) : e._e()])
        }))])], 2)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , function(e, t, i) {
    "use strict";
    function a(e) {
        i(828)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(829)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "pubexchange"
        }, [i("div", {
            staticClass: "pubexchange_module",
            attrs: {
                id: "pubexchange_flex",
                "data-pubexchange-module-id": "1677"
            }
        })])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(850)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(851)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("section", {
            staticClass: "section section--card-grid-articles",
            class: {
                "section--card-grid-articles--is-featured": e.isFeatured,
                "section--card-grid-articles--is-masonry": e.isMasonry
            }
        }, [i("div", {
            staticClass: "card-grid-articles-wrapper card-grid-articles"
        }, [i("div", {
            staticClass: "row articles-cards"
        }, e._l(e.articles, function(t, a) {
            return i("div", {
                staticClass: "col-xs-12 col-sm-4 articles-cards__item",
                attrs: {
                    "data-count": a
                }
            }, [i("card-article", {
                attrs: {
                    article: t,
                    isFeatured: e.isFeatured,
                    isMasonry: e.isMasonry
                }
            })], 1)
        }))])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(868)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(869)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-article-card"
        }, [i("article", {
            class: "article-card category category--" + e.getCategorySlug + " subcategory subcategory--" + e.getSubcategorySlug
        }, [i("div", {
            staticClass: "image-container"
        }, [e.pinterest && e.article.image ? i("pinterest", {
            attrs: {
                url: e.article.slug,
                media: e.article.image.url,
                description: e.article.title
            }
        }) : e._e(), i("a", {
            staticClass: "image__link",
            attrs: {
                href: e.article.slug,
                title: e.article.title,
                "data-event": e.setDataEvent,
                "data-info": e.setDataInfo
            }
        }, [e.article.image ? i("img", {
            attrs: {
                src: e.resizeImage(e.article.image.url, e.getImageResizeProfile),
                alt: e.article.title
            }
        }) : i("img", {
            attrs: {
                src: "/images/article-card-placeholder.jpg",
                alt: e.article.title
            }
        }), "video" === e.articleType ? i("span", {
            staticClass: "image-overlay image-overlay--video"
        }, [i("span", {
            staticClass: "svg play-icon-white"
        })]) : "explore" === e.articleType ? i("span", {
            staticClass: "image-overlay image-overlay--explore"
        }, [e._v("Explore")]) : i("span", {
            staticClass: "image-overlay image-overlay--read"
        }, [e._v("Read")])])], 1), i("div", {
            staticClass: "info-container"
        }, e._l(e.keysToShow, function(t) {
            return i("div", {
                class: "info__section info__section--" + t
            }, ["title" === t ? i("h2", {
                staticClass: "title"
            }, [i("a", {
                staticClass: "title__link",
                staticStyle: {
                    "-moz-box-orient": "vertical",
                    "-webkit-box-orient": "vertical",
                    "box-orient": "vertical"
                },
                attrs: {
                    href: e.article.slug,
                    title: e.article.title,
                    "data-event": e.setDataEvent,
                    "data-info": e.setDataInfo
                }
            }, [e._v("\n            " + e._s(e.article.title) + "\n          ")])]) : e._e(), "writer" === t ? i("div", {
                staticClass: "writer"
            }, [e._v("\n          " + e._s(e.article.writer) + "\n        ")]) : e._e(), "category" === t ? i("div", {
                class: "category category--" + e.getCategorySlug
            }, [i("a", {
                directives: [{
                    name: "binf",
                    rawName: "v-binf:data-info",
                    value: e.setDataInfo,
                    expression: "setDataInfo",
                    arg: "data-info"
                }],
                staticClass: "category__link",
                attrs: {
                    href: "/" + e.getCategorySlug,
                    title: e.getCategoryName,
                    "data-event": e.setDataEvent
                }
            }, [e._v("\n            " + e._s(e.getCategoryName) + "\n          ")])]) : e._e(), "subcategory" === t ? i("div", {
                class: "category category--" + e.getCategorySlug + " subcategory subcategory--" + e.getSubcategorySlug
            }, [i("a", {
                staticClass: "subcategory__link",
                attrs: {
                    href: "/" + e.getSubcategorySlug,
                    title: e.getSubcategoryName
                }
            }, [e._v("\n            " + e._s(e.getSubcategoryName || e.getCategoryName) + "\n          ")])]) : e._e()])
        }))])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, , , , , , function(e, t, i) {
    "use strict";
    i(271);
    var a = i(273)
      , n = i(192)
      , r = (0,
    a.createApp)()
      , o = r.app
      , s = r.router
      , l = r.store;
    if (window.__INITIAL_STATE__) {
        window.__INITIAL_STATE__.route.query = {};
        var c = location.search.slice(1).split("&");
        c.map(function(e) {
            e = e.split("="),
            e[0] && (window.__INITIAL_STATE__.route.query[e[0]] = decodeURIComponent(e[1] || ""))
        }),
        l.replaceState(window.__INITIAL_STATE__),
        (0,
        n.sync)(l, s)
    }
    s.onReady(function() {
        s.beforeResolve(function(e, t, i) {
            var a = s.getMatchedComponents(e)
              , n = s.getMatchedComponents(t)
              , r = !1;
            if (!a.filter(function(e, t) {
                return r || (r = n[t] !== e)
            }).map(function(e) {
                return e.asyncData
            }).filter(function(e) {
                return e
            }).length)
                return i()
        }),
        o.$mount("#app")
    })
}
, , , function(e, t, i) {
    "use strict";
    function a(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e,
        t
    }
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        var e = (0,
        u.createStore)()
          , t = (0,
        d.createRouter)();
        return {
            app: new s.default({
                router: t,
                store: e,
                render: function(e) {
                    return e(c.default)
                }
            }),
            router: t,
            store: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createApp = r,
    i(274);
    var o = i(70)
      , s = n(o)
      , l = (i(192),
    i(478))
      , c = n(l)
      , u = i(576)
      , d = i(690)
      , f = i(915)
      , p = n(f)
      , h = i(916)
      , m = a(h)
      , g = i(105)
      , v = a(g)
      , y = i(917)
      , b = n(y)
      , _ = i(935)
      , w = n(_);
    s.default.$http = b.default,
    Object.keys(v).forEach(function(e) {
        s.default.filter(e, v[e])
    }),
    Object.keys(m).forEach(function(e) {
        m[e](s.default)
    }),
    s.default.use(w.default),
    s.default.use(p.default)
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        i(479)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(481)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            class: "default-component--" + e.$route.matched[0].components.default.name,
            attrs: {
                id: "app"
            }
        }, [e.shouldLoadOutOfPage ? i("div", {
            staticStyle: {
                display: "none"
            },
            attrs: {
                id: "out-of-page"
            }
        }) : e._e(), i("fb-root"), e.show500 ? i("error500") : i("div", [i("site-header"), i("main", {
            staticClass: "site-main"
        }, [i("transition", {
            attrs: {
                name: "fade",
                mode: "out-in"
            }
        }, [i("router-view", {
            key: e.$route.path,
            staticClass: "view"
        })], 1)], 1), i("site-footer", {
            ref: "site-footer"
        })], 1), i("promo", {
            attrs: {
                referrer: "leaf.tv"
            }
        }, [i("div", {
            attrs: {
                slot: "promo"
            },
            slot: "promo"
        })]), i("email-capture-popup")], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(63)
      , s = a(o)
      , l = i(509)
      , c = i(70)
      , u = a(c)
      , d = i(517)
      , f = a(d)
      , p = i(518)
      , h = a(p)
      , m = i(519)
      , g = a(m)
      , v = i(525)
      , y = a(v)
      , b = i(528)
      , _ = a(b)
      , w = i(530)
      , C = a(w)
      , S = i(535)
      , E = a(S)
      , T = i(542)
      , A = a(T)
      , k = i(55)
      , I = a(k)
      , O = i(574);
    t.default = {
        components: {
            EmailCapturePopup: g.default,
            Error500: y.default,
            FbRoot: _.default,
            Promo: l.Promo,
            SiteFooter: C.default,
            SiteHeader: E.default
        },
        metaInfo: function() {
            return {
                link: [{
                    rel: "shortcut icon",
                    href: "/images/favicon.png"
                }],
                meta: (0,
                r.default)(this, "$store.state.config.site.meta.info")
            }
        },
        beforeMount: function() {
            !function(e) {
                var t, i = {
                    kitId: "mvd6dal",
                    scriptTimeout: 3e3,
                    async: !0
                }, a = e.documentElement, n = setTimeout(function() {
                    a.className = a.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"
                }, i.scriptTimeout), r = e.createElement("script"), o = !1, s = e.getElementsByTagName("script")[0];
                a.className += " wf-loading",
                r.src = "https://use.typekit.net/" + i.kitId + ".js",
                r.async = !0,
                r.onload = r.onreadystatechange = function() {
                    if (t = this.readyState,
                    !(o || t && "complete" != t && "loaded" != t)) {
                        o = !0,
                        clearTimeout(n);
                        try {
                            Typekit.load(i)
                        } catch (e) {}
                    }
                }
                ,
                s.parentNode.insertBefore(r, s)
            }(document),
            window.dataLayer = window.dataLayer || [],
            this.$root.$on("lg-GTM-dataLayer", function(e) {
                return "push" === (0,
                r.default)(e, "type", !1) ? window.dataLayer.push((0,
                r.default)(e, "event", {})) : "pageview" === (0,
                r.default)(e, "type", !1) ? window.dataLayer.pushPageView((0,
                r.default)(e, "event")) : void 0
            }),
            this.$store.dispatch("IS_MOBILE", (0,
            O.isMobile)((0,
            r.default)(window, "navigator.userAgent", "") || (0,
            r.default)(window, "navigator.vendor", "") || (0,
            r.default)(window, "opera", ""))),
            (new f.default).install(u.default);
            var e = {
                fadeOutTimer: 200,
                fadeInTimer: 500,
                stickyTimer: 3e3,
                checkAgainTimer: 1e3,
                slideUpTimer: 1e3,
                fadeOutClass: "fade-out",
                stickyClass: "sticky-ad",
                slideUpClass: "slide-up",
                adPaddingInPx: 20
            };
            (new h.default).install(u.default, e),
            (new A.default).install(u.default)
        },
        mounted: function() {
            I.default.load((0,
            r.default)(this, "$store.state.config.ads.GTM.id", "")),
            window._prum = [["id", "589a651d962e067626acca04"], ["mark", "firstbyte", (new Date).getTime()]];
            var e = new s.default;
            e.load({
                src: "//cdn.optimizely.com/js/8363637294.js",
                async: !0
            }),
            e.load({
                src: "//rum-static.pingdom.net/prum.min.js",
                async: !0
            }),
            window.ineum("page", (0,
            r.default)(this, "$route.name", ""))
        },
        computed: {
            show500: function() {
                return (0,
                r.default)(this, "$store.state.showPage500", !1)
            },
            shouldLoadOutOfPage: function() {
                return "home" === this.$route.name || "article-modern" === this.$route.name || "article-legacy" === this.$route.name
            }
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Promo = void 0;
    var a = i(510)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.Promo = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(511)
    }
    function n(e) {
        i(516)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(2)
      , o = i.n(r)
      , s = i(512)
      , l = {
        name: "modal",
        props: {
            modalData: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            modalDelay: {
                type: Number,
                default: function() {
                    return 3e4
                }
            }
        },
        data: function() {
            return {
                showPopup: !1
            }
        },
        computed: {
            newsletterIsOpen: function() {
                return o()(this, "$store.state.Newsletter.showEmailCapture", !1)
            },
            otherModalIsOpen: function() {
                return o()(this, "$store.state.auth.modalIsVisible", !1) || o()(this, "$store.state.Newsletter.showEmailCapture", !1)
            },
            getTarget: function() {
                var e = o()(this, "$store.state.config.site.domain", "");
                return -1 !== o()(this, "modalData.link", "").indexOf(e) ? "_self" : "_blank"
            },
            getGtmClickEvent: function() {
                return o()(this, "modalData.ga_action", "").toLowerCase().replace(/ /g, "_") + "_click"
            },
            getGtmCloseEvent: function() {
                return o()(this, "modalData.ga_action", "").toLowerCase().replace(/ /g, "_") + "_close"
            },
            getGtmCloseOutsdEvent: function() {
                return o()(this, "modalData.ga_action", "").toLowerCase().replace(/ /g, "_") + "_close_outside"
            },
            getCloseHex: function() {
                return o()(this, "modalData.close_icon", "")
            }
        },
        mounted: function() {
            var e = this;
            -1 === document.cookie.indexOf("PromoModalShown") && (document.addEventListener("keydown", function(t) {
                o()(e, "showPopup", !1) && 27 === o()(t, "keyCode") && e.closePopup()
            }, !1),
            setTimeout(function() {
                o()(e, "otherModalIsOpen", !1) || (e.showPopup = !0,
                document.querySelector("body").className += " no-scroll",
                document.cookie = "PromoModalShown=1; path=/",
                3e4 === e.modalDelay && window.dataLayer.push({
                    event: e.modalData.ga_action.toLowerCase().replace(/ /g, "_") + "_impression"
                }))
            }, this.modalDelay))
        },
        methods: {
            closePopupOuterClick: function(e) {
                this.closePopup()
            },
            closePopup: function() {
                this.showPopup = !1,
                document.querySelector("body").classList.remove("no-scroll")
            },
            resizeImage: function(e, t) {
                return Object(s.ImageResizer)(e, t)
            }
        }
    }
      , c = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-modal"
        }, [i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.showPopup ? i("div", {
            staticClass: "capture-popup-wrapper",
            class: {
                "capture-popup-wrapper--visible": e.showPopup
            },
            attrs: {
                transition: "modal"
            },
            on: {
                click: e.closePopupOuterClick
            }
        }, [i("a", {
            staticClass: "popup-mask",
            attrs: {
                "data-event": e.getGtmCloseOutsdEvent
            }
        }, [i("div", {
            staticClass: "capture-popup-container"
        }, [i("a", {
            staticClass: "image",
            attrs: {
                href: e.modalData.link,
                target: e.getTarget,
                "data-event": e.getGtmClickEvent
            }
        }, [i("picture", [i("source", {
            attrs: {
                media: "(min-width: 991px)",
                srcset: e.resizeImage(e.modalData.image, "900x630")
            }
        }), i("source", {
            attrs: {
                srcset: e.resizeImage(e.modalData.mobileImage, "355x520")
            }
        }), i("img", {
            attrs: {
                src: e.resizeImage(e.modalData.mobileImage, "355x520")
            }
        })])]), i("a", {
            staticClass: "close-popup",
            attrs: {
                "data-event": e.getGtmCloseEvent
            },
            on: {
                click: e.closePopup
            }
        }, [i("div", {
            staticClass: "mobile svg modal-close"
        }, [i("svg", {
            attrs: {
                viewbox: "0 0 40 40"
            }
        }, [i("path", {
            staticStyle: {
                fill: "transparent",
                "stroke-linecap": "round",
                "stroke-width": "3"
            },
            style: {
                stroke: e.getCloseHex
            },
            attrs: {
                id: "close-icon",
                d: "M 10,10 L 30,30 M 30,10 L 10,30"
            }
        })])])])])])]) : e._e()])], 1)
    }
      , u = []
      , d = {
        render: c,
        staticRenderFns: u
    }
      , f = d
      , p = i(1)
      , h = a
      , m = p(l, f, !1, h, null, null)
      , g = m.exports
      , v = {
        name: "promo-slide-in",
        props: {
            slideInData: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            referrer: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                slideIn: !1,
                target: ""
            }
        },
        mounted: function() {
            var e = this;
            this.target = this.getTarget(),
            setTimeout(function() {
                e.$root.$emit("lg-GTM-dataLayer", {
                    type: "push",
                    event: {
                        event: "slide in promo"
                    }
                }),
                e.slideIn = !0,
                document.cookie = "slidein=1;path=/"
            }, 500)
        },
        computed: {
            getData: function() {
                return o()(this, "slideInData", {})
            }
        },
        methods: {
            closePromo: function() {
                this.slideIn = !1
            },
            getTarget: function() {
                return -1 !== o()(this, "slideInData.link", "").indexOf(this.referrer) ? "_self" : "_blank"
            }
        }
    }
      , y = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-promo-slide-in",
            class: {
                "slide-in": e.slideIn
            }
        }, [i("div", {
            staticClass: "promo-slide-in-wrapper"
        }, [i("a", {
            attrs: {
                "data-event": "slide in promo",
                target: e.target,
                href: e.getData.link,
                "data-info": e.getData.ga_label
            },
            on: {
                click: e.closePromo
            }
        }, [i("img", {
            staticClass: "promo-slide-in--image",
            attrs: {
                src: e.getData.image
            }
        })]), i("div", {
            staticClass: "promo-slide-in--close"
        }, [i("a", {
            staticClass: "close",
            on: {
                click: e.closePromo
            }
        })])])])
    }
      , b = []
      , _ = {
        render: y,
        staticRenderFns: b
    }
      , w = _
      , C = i(1)
      , S = n
      , E = C(v, w, !1, S, null, null)
      , T = E.exports
      , A = {
        name: "promo",
        components: {
            PromoSlideIn: T,
            PromoModal: g
        },
        props: {
            referrer: {
                type: String,
                default: ""
            },
            newsletterPopupImpression: {
                type: String,
                default: "newsletter popup impression"
            }
        },
        data: function() {
            return {
                showSlideIn: !1,
                showPopUp: !1,
                slideInData: {},
                modalData: {},
                modalDelay: 3e4,
                modalOpen: !1
            }
        },
        mounted: function() {
            this.showSlideInPromo() ? this.fetchSlideInPromo() : this.showPopupPromo() && this.getPopupPromoCookie() && this.fetchModalPromo();
            var e = this;
            window.toggleEmailCapturePopup = function(t) {
                t ? (document.cookie = "PromoModalShown=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
                e.modalDelay = 500,
                e.fetchModalPromo()) : (e.modalOpen = !1,
                document.querySelector("body").classList.remove("no-scroll"),
                e.$store.commit("SET_EMAIL_CAPTURE", !1))
            }
        },
        computed: {
            authModalIsOpen: function() {
                return o()(this, "$store.state.auth.modalIsVisible", !1)
            }
        },
        methods: {
            fetchSlideInPromo: function() {
                o()(this, "$store.getters.SDK").getPromos().then(this.getPromoSuccessResolver).catch(this.getPromoRejectionResolver)
            },
            fetchModalPromo: function() {
                o()(this, "$store.getters.SDK").getPromos().then(this.getPromoModalSuccessResolver).catch(this.getPromoModalRejectionResolver)
            },
            getPromoSuccessResolver: function(e) {
                var t = this.getCurrentPromoByType(e, "slide-in");
                t.length > 0 ? (this.slideInData = o()(t, "[0]", {}),
                this.showSlideIn = !0) : this.getPromoRejectionResolver()
            },
            getPromoModalSuccessResolver: function(e) {
                var t = this.getCurrentPromoByType(e, "popup");
                t.length > 0 ? (this.modalData = o()(t, "[0]", {}),
                this.showPopUp = !0,
                this.modalOpen = !0) : this.getPromoModalRejectionResolver()
            },
            getPromoRejectionResolver: function() {
                this.fetchModalPromo()
            },
            getPromoModalRejectionResolver: function() {
                this.showEmailCapture()
            },
            showSlideInPromo: function() {
                return this.$store.getters.getIsMobile && -1 === document.cookie.indexOf("slidein") && "/" === document.location.pathname && -1 !== document.referrer.indexOf(this.referrer)
            },
            showPopupPromo: function() {
                var e = o()(this, "$route", {});
                return "/" === o()(e, "path", "") || o()(e, "params.articleId", "") || o()(e, "params.articleSlug", "") || o()(e, "params.categorySlug", "") || !1
            },
            getPopupPromoCookie: function() {
                return -1 === document.cookie.indexOf("PromoModalShown")
            },
            showEmailCapture: function() {
                var e = this;
                this.getPopupPromoCookie() && (document.addEventListener("keydown", function(t) {
                    o()(e, "showPopup", !1) && "Escape" === o()(t, "code") && e.closePopup()
                }, !1),
                setTimeout(function() {
                    o()(e, "authModalIsOpen", !1) || (e.$store.commit("SET_EMAIL_CAPTURE", !0),
                    document.querySelector("body").className += " no-scroll",
                    document.cookie = "PromoModalShown=1;path=/",
                    3e4 === e.modalDelay && window.dataLayer.push({
                        event: e.newsletterPopupImpression
                    }))
                }, this.modalDelay))
            },
            getCurrentPromoByType: function(e, t) {
                var i = Math.round((new Date).getTime() / 1e3);
                return e.filter(function(e) {
                    return o()(e, "type", "") === t && o()(e, "start_date", 9999999999) < i && o()(e, "end_date", 0) > i
                })
            }
        }
    }
      , k = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-promo"
        }, [e.showSlideIn ? i("div", {
            staticClass: "promo-slide-in"
        }, [i("promo-slide-in", {
            attrs: {
                slideInData: e.slideInData,
                referrer: e.referrer
            }
        })], 1) : e.showPopUp ? i("div", {
            staticClass: "promo-pop-up"
        }, [e.modalOpen ? i("promo-modal", {
            attrs: {
                modalData: e.modalData,
                modalDelay: e.modalDelay
            }
        }) : e._e()], 1) : e._e()])
    }
      , I = []
      , O = {
        render: k,
        staticRenderFns: I
    }
      , P = O
      , M = i(1)
      , R = M(A, P, !1, null, null, null);
    t.default = R.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReplaceRcpWithPromo = t.ReplaceHpWithPromo = t.ImageResizer = void 0;
    var n = i(513)
      , r = a(n)
      , o = i(514)
      , s = a(o)
      , l = i(515)
      , c = a(l);
    t.ImageResizer = r.default,
    t.ReplaceHpWithPromo = s.default,
    t.ReplaceRcpWithPromo = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        if (!e)
            return e;
        for (var i = e.replace(/^https?:/, ""), a = [[/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "cpcd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "cppd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "cpie"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "cpeh"], [/\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "ppds"], [/\/\/s3.amazonaws.com\//g, "cme"], [/\/\/i.ehow.com\/images\//g, "ieh"], [/\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "clsd"], [/\/\/photos2.demandstudios.com\/DM-Resize\//g, "/"], [/\/\/photos.demandstudios.com\//g, "photos.demandstudios.com"], [/\/\/api.cuteness.com\//g, "cme/cuteness_data"]], n = a.length, r = 0; r < n; r++) {
            var o = a[r]
              , s = "https://cmeimg-a.akamaihd.net/" + t + "/" + o[1] + "/";
            if (o[0].test(i))
                return i.replace(o[0], s)
        }
        return e
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++)
            !function(e) {
                var a = t[e];
                a.index;
                i = i.filter(function(e, t) {
                    return !(a.slug.indexOf(e.slug) >= 0) || (a.promoFound = !0,
                    !1)
                })
            }(a);
        for (var a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 0, n),
            n.promoFound || i.pop()
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = e.articles
          , i = e.campaigns;
        if (!t.length)
            return [];
        if (!i.length)
            return t;
        var a = Math.ceil(100 * Math.random())
          , r = {}
          , o = 1;
        i.map(function(e, t) {
            for (var i = (0,
            n.default)(e, "percentage", 0), a = 1; a <= i; a++)
                r[o++] = t
        });
        var s = (0,
        n.default)(r, "[" + a + "]", !1);
        if (!1 === s)
            return t;
        var l = (0,
        n.default)(i, "[" + s + "]", {})
          , c = (0,
        n.default)(l, "articles", [])
          , u = Math.floor(Math.random() * c.length)
          , d = (0,
        n.default)(c, "" + u, {})
          , f = {
            type: "rcp-promo",
            title: (0,
            n.default)(d, "title", ""),
            slug: (0,
            n.default)(d, "url", ""),
            image: {
                url: (0,
                n.default)(d, "image", ""),
                alttext: ""
            },
            sponsorship: {
                author_byline: (0,
                n.default)(l, "bylineCopy", ""),
                campaign: (0,
                n.default)(l, "name", ""),
                sponsor_logo: (0,
                n.default)(l, "logo.url", ""),
                sponsor_logo_link: (0,
                n.default)(l, "logo.link", ""),
                advertiser: (0,
                n.default)(l, "advertiser", ""),
                gaTracking: (0,
                n.default)(l, "gaTracking", ""),
                dfpTracking: (0,
                n.default)(l, "dfpTracking", ""),
                gtmEventClick: (0,
                n.default)(l, "gtmEventClick", "")
            }
        }
          , p = (0,
        n.default)(l, "rcSlot", 2);
        return t.splice(p - 1, 0, f),
        t.splice(6, 1),
        window.dataLayer.push({
            event: (0,
            n.default)(l, "gtmEventImpression", ""),
            label: (0,
            n.default)(f, "slug", ""),
            position: (0,
            n.default)(l, "rcSlot", 2)
        }),
        t
    }
    ;
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        function t(a) {
            if (i[a])
                return i[a].exports;
            var n = i[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(n.exports, n, n.exports, t),
            n.l = !0,
            n.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, i, a) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }
        ,
        t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 0)
    }([function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            this.element = null,
            this.elements = [],
            this.installed = !1,
            this.options = {},
            this.scroll = !1,
            this.scrollTimeout = 2500,
            this.interval = null
        }
          , n = {
            directive: {}
        };
        a.prototype.install = function(e, t) {
            if (void 0 === t && (t = {}),
            !this.installed) {
                this.installed = !0,
                this.options = t,
                e.directive("in-viewport", this.directive);
                var i = this
                  , a = function() {
                    i.handler(!0)
                };
                e.prototype.$inViewport = {
                    start: function(e) {
                        e.element && (i.element = e.element,
                        i.element.addEventListener("scroll", a, !1)),
                        e.scrollTimeout && (console.log("generated timeout"),
                        i.scrollTimeout = e.scrollTimeout,
                        i.generateInterval())
                    },
                    kill: function() {
                        clearInterval(i.interval),
                        i.element.removeEventListener("scroll", a, !1),
                        i.cleanUp(i.elements)
                    }
                }
            }
        }
        ,
        a.prototype.checkAll = function(e) {
            var t = this;
            e.forEach(function(e) {
                t.isInView(e.el) ? t.onIn(e) : t.onOut(e)
            })
        }
        ,
        a.prototype.cleanUp = function(e) {
            e.forEach(function(e) {
                e.el.classList.remove(e.data.class.hidden),
                e.el.classList.remove(e.data.class.visible)
            })
        }
        ,
        a.prototype.handler = function(e) {
            this.scroll = e
        }
        ,
        a.prototype.handleIt = function() {
            this.scroll && (this.scroll = !1,
            this.checkAll(this.elements))
        }
        ,
        a.prototype.isInView = function(e) {
            var t = e.getBoundingClientRect();
            return t.bottom > 0 && t.top < window.innerHeight
        }
        ,
        a.prototype.itemize = function(e, t) {
            return void 0 === t && (t = {}),
            {
                el: e,
                data: {
                    class: {
                        visible: "visible",
                        hidden: "hidden"
                    },
                    functions: {
                        visible: t.value && t.value.onIn ? t.value.onIn : null,
                        hidden: t.value && t.value.onOut ? t.value.onOut : null
                    }
                }
            }
        }
        ,
        a.prototype.onIn = function(e) {
            e.el.classList.remove(e.data.class.hidden),
            e.el.classList.add(e.data.class.visible),
            e.data.functions.visible && e.data.functions.visible()
        }
        ,
        a.prototype.onOut = function(e) {
            e.el.classList.remove(e.data.class.visible),
            e.el.classList.add(e.data.class.hidden),
            e.data.functions.hidden && e.data.functions.hidden()
        }
        ,
        a.prototype.generateInterval = function() {
            var e = this;
            this.interval && clearInterval(this.interval),
            this.interval = setInterval(function() {
                e.handleIt()
            }, this.scrollTimeout)
        }
        ,
        n.directive.get = function() {
            var e = this;
            return {
                bind: function(t, i, a) {
                    e.elements.push(e.itemize(t, i))
                },
                unbind: function(e, t) {}
            }
        }
        ,
        Object.defineProperties(a.prototype, n),
        t.default = a
    }
    ])
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = i(2)
      , s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(o)
      , l = function() {
        function e() {
            a(this, e),
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (window.stickyAds = this),
            this.config = null,
            this.$ad = null,
            this.$parent = null,
            this.$header = null,
            this.googletag = null,
            this.scrollHandler = null,
            this.killed = !1,
            this.hasBeenDisplayed = !1,
            this.timer = {
                called: null,
                rendered: null
            }
        }
        return r(e, [{
            key: "install",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.config = t,
                e.directive("article-sticky-ad", this.getDirectives())
            }
        }, {
            key: "bind",
            value: function(e, t, i) {
                this.$ad = (0,
                s.default)(t, "value.el", {}),
                this.$parent = (0,
                s.default)(e, "parentElement"),
                this.$header = (0,
                s.default)(t, "value.header", {}),
                this.googletag = (0,
                s.default)(t, "value.googletag", {
                    cmd: []
                }),
                this.setGoogleTagSlotEventListener()
            }
        }, {
            key: "getDirectives",
            value: function() {
                var e = this;
                return {
                    bind: function(t, i, a) {
                        e.bind(t, i, a)
                    }
                }
            }
        }, {
            key: "addStickyClass",
            value: function() {
                var e = this;
                this.$header.classList.add(this.config.fadeOutClass),
                setTimeout(function() {
                    e.addingPaddingToAd()
                }, this.config.fadeOutTimer)
            }
        }, {
            key: "addingPaddingToAd",
            value: function() {
                this.$parent.style.paddingTop = this.$ad.clientHeight + "px",
                this.$ad.classList.add(this.config.stickyClass)
            }
        }, {
            key: "checkStickyAdUnit",
            value: function() {
                var e = this;
                return function() {
                    e.isAdViewable() ? console.log("Default") : (console.log("Sticky"),
                    e.addStickyClass(),
                    setTimeout(e.stickyFirstThenUnSticky(), e.config.stickyTimer + e.config.fadeInTimer))
                }
            }
        }, {
            key: "removeStickyClass",
            value: function() {
                this.$ad.classList.add(this.config.slideUpClass),
                this.$ad.style.top = "-" + (this.$ad.clientHeight + 2 * this.config.adPaddingInPx) + "px",
                this.killed || setTimeout(this.killStickyAd(), this.config.slideUpTimer)
            }
        }, {
            key: "killStickyAd",
            value: function() {
                var e = this;
                return function() {
                    if (e.killed)
                        return window.removeEventListener("scroll", e.stickyScrollHandler),
                        void e.$header.classList.remove(e.config.fadeOutClass);
                    e.killed = !0,
                    e.$ad.classList.remove(e.config.slideUpClass),
                    e.$ad.classList.remove(e.config.stickyClass),
                    e.$parent.style.removeProperty("padding-top")
                }
            }
        }, {
            key: "stickyFirstThenUnSticky",
            value: function() {
                var e = this;
                return window.addEventListener("scroll", this.stickyScrollHandler),
                this.addStickyClass(),
                function() {
                    e.removeStickyClass()
                }
            }
        }, {
            key: "stickyScrollHandler",
            value: function() {
                (window.scrollY < 30 || window.stickyAds.killed) && window.stickyAds.killStickyAd()()
            }
        }, {
            key: "isAdViewable",
            value: function() {
                return this.$header.clientHeight < this.$ad.getBoundingClientRect().top
            }
        }, {
            key: "setGoogleTagSlotEventListener",
            value: function() {
                var e = this;
                this.googletag.cmd.push(function() {
                    e.googletag.pubads().addEventListener("slotOnload", function(t) {
                        e.hasBeenDisplayed || "horizontal1-1" === t.slot.getSlotElementId() && (e.hasBeenDisplayed = !0,
                        e.isAdViewable() ? (console.log("Ad Rendered Viewable", window.scrollY),
                        setTimeout(e.checkStickyAdUnit(), e.config.checkAgainTimer)) : (console.log("Ad Rendered not Viewable", window.scrollY),
                        console.log("Injected"),
                        setTimeout(e.stickyFirstThenUnSticky(), e.config.stickyTimer + e.config.fadeInTimer)))
                    })
                })
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(520)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(521)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("transition", {
            attrs: {
                name: "fade"
            }
        }, [e.showPopup ? i("div", {
            staticClass: "email-capture-popup-wrapper",
            class: {
                "email-capture-popup-wrapper--visible": e.showPopup
            },
            attrs: {
                transition: "modal"
            },
            on: {
                click: e.closePopupOuterClick
            }
        }, [i("div", {
            staticClass: "popup-mask"
        }, [i("div", {
            staticClass: "email-capture-popup-container"
        }, [i("div", {
            staticClass: "popup-content"
        }, [i("div", {
            staticClass: "popup-header"
        }), i("div", {
            staticClass: "close-popup",
            on: {
                click: e.closePopup
            }
        }, [i("div", {
            staticClass: "close-icon-bg"
        }), i("span", {
            staticClass: "svg close-icon-light"
        })]), i("h3", {
            staticClass: "popup-heading"
        }, [e._v("Subscribe To Our Weekly Newsletter!")]), i("div", {
            staticClass: "popup-copy"
        }, [e._v("It's filled with everything you need to UP your health game, including cold-pressed exclusive video content, monthly horoscopes, skincare tips, healthy (and easy) recipes, and more.")]), i("email-capture-form", {
            attrs: {
                event: "newsletter subscribe popup"
            },
            on: {
                successfulSubmission: e.successfulSubmissionCatch
            }
        })], 1)])])]) : e._e()])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(522)
      , s = a(o);
    t.default = {
        name: "email-capture-popup",
        components: {
            EmailCaptureForm: s.default
        },
        computed: {
            showPopup: function() {
                return (0,
                r.default)(this, "$store.state.showEmailCapture", !1)
            },
            isSubscribeLandingPage: function() {
                return "/subscribe" === (0,
                r.default)(this, "$store.state.route.path", !1)
            }
        },
        watch: {
            showPopup: function(e) {
                !0 === e && window.dataLayer.push({
                    event: "newsletter pop-up impression",
                    prompt: "" + (0,
                    r.default)(this, "$store.state.config.site.domain", "") + (0,
                    r.default)(this, "$store.state.route.path", "")
                })
            }
        },
        mounted: function() {
            var e = this;
            document.addEventListener("keydown", function(t) {
                (0,
                r.default)(e, "showPopup", !1) && "Escape" === (0,
                r.default)(t, "code") && e.closePopup()
            }, !1)
        },
        methods: {
            closePopupOuterClick: function(e) {
                "popup-mask" === (0,
                r.default)(e, "target.className", "") && this.closePopup()
            },
            closePopup: function() {
                this.$store.commit("SET_EMAIL_CAPTURE", !1),
                document.querySelector("body").classList.remove("no-scroll")
            },
            successfulSubmissionCatch: function() {
                var e = this;
                setTimeout(function() {
                    e.closePopup()
                }, 3e3)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(523)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(524)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-email-capture-form"
        }, [i("transition", {
            attrs: {
                name: "fade"
            }
        }, [i("p", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.hasSignedUp,
                expression: "hasSignedUp"
            }],
            staticClass: "thank-you"
        }, [e._v("Thanks For Subscribing!"), i("br"), e._v("TTYL!")])]), i("div", {
            staticClass: "newsletter-form",
            class: {
                "has-signed-up": e.hasSignedUp
            }
        }, [i("form", {
            staticClass: "form",
            attrs: {
                action: "/newsletter-signup",
                method: "POST"
            },
            on: {
                keyup: function(t) {
                    if (!("button"in t) && e._k(t.keyCode, "enter", 13, t.key))
                        return null;
                    e.newsletter(t)
                }
            }
        }, [i("div", {
            staticClass: "form-row"
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.email,
                expression: "email"
            }],
            ref: "newsletter-form-input",
            staticClass: "form-row__input email",
            class: {
                error: e.hasError
            },
            attrs: {
                type: "text",
                id: "mail",
                name: "email",
                placeholder: "Email (Required)",
                autocomplete: "off"
            },
            domProps: {
                value: e.email
            },
            on: {
                input: function(t) {
                    t.target.composing || (e.email = t.target.value)
                }
            }
        }), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.name,
                expression: "name"
            }],
            ref: "newsletter-form-input",
            staticClass: "form-row__input name",
            attrs: {
                type: "text",
                name: "name",
                placeholder: "Name",
                autocomplete: "off",
                onPaste: "return false"
            },
            domProps: {
                value: e.name
            },
            on: {
                keypress: e.checkName,
                input: function(t) {
                    t.target.composing || (e.name = t.target.value)
                }
            }
        }), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.dob,
                expression: "dob"
            }],
            ref: "newsletter-form-input",
            staticClass: "form-row__input dob",
            attrs: {
                id: "dob",
                type: "text",
                name: "dob",
                placeholder: "DOB: (MM/DD/YYYY)",
                autocomplete: "off",
                maxlength: "10",
                onPaste: "return false"
            },
            domProps: {
                value: e.dob
            },
            on: {
                keypress: e.checkDob,
                input: function(t) {
                    t.target.composing || (e.dob = t.target.value)
                }
            }
        })]), i("transition", {
            attrs: {
                name: "component-fade",
                mode: "out-in"
            }
        }, [e.dobError ? i("span", {
            key: "error",
            staticClass: "lower-copy error"
        }, [e._v("DOB should follow MM/DD/YYYY format.")]) : i("span", {
            key: "message",
            staticClass: "lower-copy"
        }, [e._v("Birthday guys and gals receive a special note from us!")])]), i("div", {
            staticClass: "form-row submit"
        }, [i("a", {
            staticClass: "form-row__submit",
            attrs: {
                "data-event": "newsletter subscribe attempt",
                "data-info": "pop-up"
            },
            on: {
                click: e.newsletter
            }
        }, [e._v("SUBMIT")])])], 1), i("div", {
            staticClass: "message",
            class: {
                error: e.hasError
            }
        }, [e._v(e._s(e.message))])])], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "email-capture-form",
        props: ["event"],
        data: function() {
            return {
                email: "",
                name: "",
                dob: "",
                hasSignedUp: !1,
                hasError: !1,
                dobError: !1,
                message: ""
            }
        },
        computed: {
            checkDobLength: function() {
                return this.dob.length >= 1 && this.dob.length <= 9
            }
        },
        methods: {
            newsletter: function(e) {
                var t = this;
                return this.hasError = !1,
                "" === this.email ? (setTimeout(function() {
                    t.message = "Email is required.",
                    t.hasError = !0
                }, 300),
                this.subscribeDataLayerError()) : this.checkEmail() ? this.checkDobLength ? (this.dobError = !0,
                this.subscribeDataLayerError()) : void this.$store.dispatch("SUBSCRIBE", {
                    email: this.email,
                    name: this.name,
                    dob: this.dob
                }).then(function(e) {
                    if ("Subscribed" === (0,
                    n.default)(e, "status"))
                        return t.subscribeDataLayerSuccess(),
                        t.hasSignedUp = !0,
                        t.email = "",
                        t.$emit("successfulSubmission"),
                        void setTimeout(function() {
                            t.hasSignedUp = !1,
                            t.message = ""
                        }, 3e3);
                    t.message = "Invalid email format.",
                    t.hasError = !0
                }).catch(function(e) {
                    t.message = "Invalid email format.",
                    t.hasError = !0,
                    t.subscribeDataLayerError()
                }) : this.subscribeDataLayerError()
            },
            checkEmail: function() {
                var e = this;
                return !!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(document.getElementById("mail").value) || (setTimeout(function() {
                    e.message = "Invalid email format.",
                    e.hasError = !0
                }, 300),
                !1)
            },
            checkName: function(e) {
                var t = e.which;
                t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || 13 === t || e.preventDefault()
            },
            checkDob: function(e) {
                var t = e.which || e.keyCode;
                t >= 48 && t <= 57 || 13 === t ? null === this.dob.match(/^\d{2}$/) && null === this.dob.match(/^\d{2}\/\d{2}$/) || (document.getElementById("dob").value = this.dob + "/") : e.preventDefault()
            },
            subscribeDataLayerError: function() {
                window.dataLayer.push({
                    event: "newsletter subscribe error",
                    prompt: "pop-up"
                })
            },
            subscribeDataLayerSuccess: function() {
                window.dataLayer.push({
                    event: "newsletter subscribe success",
                    prompt: "pop-up"
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(526)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(527)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "error500-view"
        }, [i("section", {
            staticClass: "section section--not-found"
        }, [i("h1", [e._v("Something went wrong!")])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(54)
      , s = a(o);
    t.default = {
        name: "error500-view",
        metaInfo: function() {
            return {
                title: "Page Not Found | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: "Something went wrong! | " + (0,
                    r.default)(s.default, "site.title", "")
                }, {
                    name: "twitter:description",
                    content: "Something went wrong!"
                }, {
                    name: "description",
                    content: "Something went wrong!"
                }, {
                    property: "og:description",
                    content: "Something went wrong!"
                }, {
                    property: "og:url",
                    content: (0,
                    r.default)(s.default, "site.domain", "")
                }, {
                    property: "og:title",
                    content: "Something went wrong! | " + (0,
                    r.default)(s.default, "site.title", "")
                }],
                link: [{
                    vmid: "canonical-url"
                }]
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(529)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            attrs: {
                id: "fb-root"
            }
        })
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "FbRoot",
        mounted: function() {
            !function(e, t, i) {
                var a, n = e.getElementsByTagName(t)[0];
                e.getElementById(i) || (a = e.createElement(t),
                a.id = i,
                a.async = !0,
                a.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8",
                n.parentNode.insertBefore(a, n))
            }(document, "script", "facebook-jssdk")
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(531)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(532)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("footer", {
            staticClass: "site-footer"
        }, [i("div", {
            staticClass: "inner"
        }, [i("div", {
            staticClass: "partner"
        }, [i("small", {
            staticClass: "copyright"
        }, [e._v("© " + e._s((new Date).getFullYear()) + " Leaf Group Ltd. / Well+Good")])]), i("hr", {
            staticClass: "divider"
        }), e._m(0), i("div", {
            staticClass: "community"
        }, [i("h4", {
            staticClass: "title"
        }, [e._v("Community")]), i("social-follow-icons")], 1)])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "pages clearfix"
        }, [i("div", {
            staticClass: "about-links"
        }, [i("h4", {
            staticClass: "title"
        }, [e._v("About")]), i("nav", {
            staticClass: "nav nav--statics nav--footer"
        }, [i("ul", {
            staticClass: "static-links"
        }, [i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/about/"
            }
        }, [e._v("About Us")])]), i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/terms-of-use/"
            }
        }, [e._v("Terms")])]), i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/privacy-policy/"
            }
        }, [e._v("Privacy Policy")])]), i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/copyright-policy/"
            }
        }, [e._v("Copyright Policy")])]), i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/about#partnership"
            }
        }, [e._v("Advertise")])]), i("li", {
            staticClass: "static-links__item"
        }, [i("a", {
            attrs: {
                href: "/about#contact"
            }
        }, [e._v("Contact Us")])])])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(197)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "site-footer",
        components: {
            SocialFollowIcons: n.default
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "social-follow-icons",
        props: ["event"],
        data: function() {
            return {
                config: (0,
                n.default)(this, "$store.state.config", {})
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(536)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(537)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("header", {
            staticClass: "site-header"
        }, [i("div", {
            staticClass: "inner clearfix"
        }, [i("div", {
            staticClass: "header-item",
            class: {
                open: e.showMobileNav
            },
            attrs: {
                id: "hamburger-icon"
            },
            on: {
                click: function(t) {
                    t.preventDefault(),
                    e.toggleMobileNav(t)
                }
            }
        }, [i("span"), i("span"), i("span"), i("span")]), i("a", {
            staticClass: "svg back-icon header-item",
            attrs: {
                href: "/",
                "data-event": "back nav"
            }
        }), e.isHomepage ? i("h1", {
            staticClass: "header-item logo"
        }, [e._m(0)]) : i("div", {
            staticClass: "header-item logo"
        }, [i("a", {
            staticClass: "logo-icon svg logo-black",
            attrs: {
                href: "/"
            }
        })]), i("div", {
            staticClass: "header-item subscribe-toggle",
            on: {
                click: function(t) {
                    t.preventDefault(),
                    e.openEmailPopup(t)
                }
            }
        }, [i("a", {
            attrs: {
                href: "#",
                "data-event": "newsletter subscribe",
                "data-info": "header nav"
            }
        }, [e._v("SUBSCRIBE")])]), i("div", {
            staticClass: "header-item search-mobile",
            on: {
                click: function(t) {
                    t.preventDefault(),
                    e.toggleMobileSearch(t)
                }
            }
        }, [i("a", {
            staticClass: "svg search-magnifier",
            class: {
                "close-icon": e.showMobileSearch
            },
            attrs: {
                href: "#"
            }
        })]), i("div", {
            staticClass: "main-search-fixed-container",
            class: {
                open: e.showMobileSearch
            }
        }, [i("div", {
            staticClass: "search-wrapper"
        }, [i("span", {
            staticClass: "svg close-icon",
            on: {
                click: e.toggleMobileSearch
            }
        }), i("searchForm", {
            ref: "site-header-search-form"
        })], 1)]), i("div", {
            staticClass: "header-item menu",
            class: {
                "mobile-overlay": e.showMobileNav
            }
        }, [i("nav", {
            staticClass: "nav nav--categories nav--header"
        }, [i("ul", {
            staticClass: "category-links"
        }, [i("li", {
            staticClass: "category-links__item feel-good",
            class: {
                "is-current": "feel-good" === e.currentCategory
            }
        }, [i("a", {
            attrs: {
                href: "/feel-good/",
                "data-event": "header nav"
            }
        }, [e._v("FEEL GOOD")]), e._m(1)]), i("li", {
            staticClass: "category-links__item eat-well",
            class: {
                "is-current": "eat-well" === e.currentCategory
            }
        }, [i("a", {
            attrs: {
                href: "/eat-well/",
                "data-event": "header nav"
            }
        }, [e._v("EAT WELL")]), e._m(2)]), i("li", {
            staticClass: "category-links__item dress-up",
            class: {
                "is-current": "dress-up" === e.currentCategory
            }
        }, [i("a", {
            attrs: {
                href: "/dress-up/",
                "data-event": "header nav"
            }
        }, [e._v("DRESS UP")]), e._m(3)]), i("li", {
            staticClass: "category-links__item subscribe",
            on: {
                click: function(t) {
                    t.preventDefault(),
                    e.openEmailPopup(t)
                }
            }
        }, [i("a", {
            attrs: {
                href: "#",
                "data-event": "newsletter subscribe",
                "data-info": "header nav"
            }
        }, [e._v("SUBSCRIBE")])])])]), e._m(4), i("div", {
            staticClass: "social-icons-mobile"
        }, [i("social-follow-icons")], 1)])])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("a", {
            staticClass: "logo-icon svg logo-black",
            attrs: {
                href: "/"
            }
        }, [i("span", [e._v("Leaf")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("ul", {
            staticClass: "sub-menu"
        }, [i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/feel-good/wellness/",
                "data-event": "header sub nav"
            }
        }, [e._v("Wellness")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/feel-good/fitness/",
                "data-event": "header sub nav"
            }
        }, [e._v("Fitness")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/feel-good/mindfulness/",
                "data-event": "header sub nav"
            }
        }, [e._v("Mindfulness")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/feel-good/life-hacks/",
                "data-event": "header sub nav"
            }
        }, [e._v("Life Hacks")])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("ul", {
            staticClass: "sub-menu"
        }, [i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/breakfast/",
                "data-event": "header sub nav"
            }
        }, [e._v("Breakfast")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/lunch/",
                "data-event": "header sub nav"
            }
        }, [e._v("Lunch")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/dinner/",
                "data-event": "header sub nav"
            }
        }, [e._v("Dinner")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/healthy-drinks/",
                "data-event": "header sub nav"
            }
        }, [e._v("Healthy Drinks")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/small-bites/",
                "data-event": "header sub nav"
            }
        }, [e._v("Small Bites")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/dessert/",
                "data-event": "header sub nav"
            }
        }, [e._v("Dessert")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/cocktails/",
                "data-event": "header sub nav"
            }
        }, [e._v("Cocktails")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/cooking-skills/",
                "data-event": "header sub nav"
            }
        }, [e._v("Cooking Skills")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/eat-well/nutrition/",
                "data-event": "header sub nav"
            }
        }, [e._v("Nutrition")])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("ul", {
            staticClass: "sub-menu"
        }, [i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/dress-up/fashion/",
                "data-event": "header sub nav"
            }
        }, [e._v("Fashion")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/dress-up/diy-beauty/",
                "data-event": "header sub nav"
            }
        }, [e._v("DIY Beauty")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/dress-up/tutorials/",
                "data-event": "header sub nav"
            }
        }, [e._v("Tutorials")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/dress-up/home-design/",
                "data-event": "header sub nav"
            }
        }, [e._v("Home + Design")])]), i("li", {
            staticClass: "sub-nav-link"
        }, [i("a", {
            attrs: {
                href: "/dress-up/floral/",
                "data-event": "header sub nav"
            }
        }, [e._v("Floral")])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "main-nav-secondary"
        }, [i("ul", {
            staticClass: "main-nav-secondary",
            attrs: {
                id: "menu-main-nav-secondary"
            }
        }, [i("li", {
            staticClass: "menu-item"
        }, [i("a", {
            attrs: {
                href: "/about/"
            }
        }, [e._v("About Us")])]), i("li", {
            staticClass: "menu-item"
        }, [i("a", {
            attrs: {
                href: "/advertise/"
            }
        }, [e._v("Advertise")])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(538)
      , s = a(o)
      , l = i(197)
      , c = a(l);
    t.default = {
        name: "site-header",
        components: {
            SearchForm: s.default,
            SocialFollowIcons: c.default
        },
        data: function() {
            return {
                showMobileNav: !1,
                showMobileSearch: !1
            }
        },
        computed: {
            currentCategory: function() {
                return ["Feel Good", "Wellness", "Fitness", "Mindfulness", "Life Hacks"].indexOf((0,
                r.default)(this, "$store.state.category.category.name", "")) >= 0 ? "feel-good" : ["Eat Well", "Breakfast", "Lunch", "Dinner", "Healthy Drinks", "Small Bites", "Desserts", "Cocktails", "Cooking Skills"].indexOf((0,
                r.default)(this, "$store.state.category.category.name", "")) >= 0 ? "eat-well" : ["Dress Up", "Fashion", "DIY Beauty", "Tutorials", "Home + Design", "Floral"].indexOf((0,
                r.default)(this, "$store.state.category.category.name", "")) >= 0 ? "dress-up" : void 0
            },
            isHomepage: function() {
                return "/" === this.$store.state.route.path
            }
        },
        methods: {
            openEmailPopup: function() {
                this.$store.commit("SET_EMAIL_CAPTURE", !0),
                document.querySelector("body").className += " no-scroll"
            },
            toggleMobileNav: function() {
                this.showMobileNav ? document.querySelector("body").classList.remove("no-scroll") : document.querySelector("body").className += " no-scroll",
                this.showMobileNav = !this.showMobileNav,
                this.showMobileSearch && (this.showMobileSearch = !this.showMobileSearch)
            },
            toggleMobileSearch: function() {
                var e = this;
                this.showMobileSearch || (window.dataLayer.push({
                    event: "site search start",
                    prompt: "header nav"
                }),
                setTimeout(function() {
                    e.$refs["site-header-search-form"].$refs["search-form-search-input"].focus()
                }, 500)),
                this.showMobileSearch = !this.showMobileSearch,
                this.showMobileNav && (this.showMobileNav = !this.showMobileNav,
                document.querySelector("body").classList.remove("no-scroll"))
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(539)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(540)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "search-form-wrapper"
        }, [i("form", {
            ref: "searchForm",
            staticClass: "form",
            attrs: {
                action: "/search",
                method: "GET"
            }
        }, [i("div", {
            staticClass: "form-row"
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.search,
                expression: "search"
            }],
            ref: "search-form-search-input",
            staticClass: "form-row__input",
            attrs: {
                type: "text",
                name: "q",
                placeholder: "search leaf.tv",
                autocomplete: "off",
                autofocus: ""
            },
            domProps: {
                value: e.search
            },
            on: {
                keydown: [e.submitKeystrokes, function(t) {
                    if (!("button"in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "submit", void 0, t.key))
                        return null;
                    t.preventDefault()
                }
                ],
                keyup: e.callAutocomplete,
                input: function(t) {
                    t.target.composing || (e.search = t.target.value)
                }
            }
        }), i("button", {
            staticClass: "form-row__submit",
            attrs: {
                type: "submit"
            },
            on: {
                click: e.submitForm
            }
        }, [i("span", {
            staticClass: "svg search-magnifier"
        })])])]), 0 != e.autocompleteList.length ? i("div", {
            staticClass: "autocomplete"
        }, [i("div", {
            staticClass: "list-wrapper"
        }, [i("ul", {
            staticClass: "autocomplete-list"
        }, e._l(e.autocompleteList, function(t, a) {
            return i("li", {
                staticClass: "autocomplete-list__item"
            }, [i("a", {
                class: {
                    highlight: a === e.searchIndex
                },
                attrs: {
                    href: t.slug
                }
            }, [e._v(e._s(t.title))])])
        }))])]) : e._e()])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(74)
      , s = a(o);
    t.default = {
        name: "search-form",
        data: function() {
            return {
                searchIndex: -1,
                search: "",
                original: "",
                debounced: (0,
                s.default)(this.handler, 300)
            }
        },
        computed: {
            autocompleteList: function() {
                return (0,
                r.default)(this, "$store.state.search.autocomplete", [])
            }
        },
        mounted: function() {
            this.$store.dispatch("CLEAR_AUTOCOMPLETE")
        },
        methods: {
            callAutocomplete: function(e) {
                if (13 === e.keyCode)
                    return void (-1 !== this.searchIndex ? window.location.href = this.autocompleteList[this.searchIndex].slug : this.$refs.searchForm.submit());
                if ([38, 40].indexOf(e.keyCode) > -1) {
                    var t = (38 === e.keyCode ? -1 : 1) + this.searchIndex;
                    return void (0 <= t && t < this.autocompleteList.length ? (this.searchIndex = t,
                    this.search = this.autocompleteList[t].title) : -1 === t && (this.searchIndex = -1,
                    this.search = this.original))
                }
                this.debounced(e)
            },
            handler: function(e) {
                if (this.search.length < 3)
                    return void this.$store.dispatch("CLEAR_AUTOCOMPLETE");
                this.original = this.search,
                this.$store.dispatch("FETCH_AUTOCOMPLETE", {
                    terms: this.search
                })
            },
            submitForm: function() {
                window.dataLayer.push({
                    event: "site search execute",
                    prompt: "header nav"
                })
            },
            submitKeystrokes: function(e) {
                13 === e.keyCode && window.dataLayer.push({
                    event: "site search execute",
                    prompt: "header nav"
                })
            }
        }
    }
}
, , function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(64)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
            a(this, e),
            this.throttle = t,
            this._window = null,
            this.articles = [],
            this.beenViewedArticles = [!0],
            this.isMobile = null,
            this.position = 0,
            this.setup = !1,
            this.scrollHandler = null
        }
        return n(e, [{
            key: "handler",
            value: function() {
                var e = this.getCurrentArticlePosition()
                  , t = e.position
                  , i = e.article;
                this.position !== t && (this.position = t,
                this.updateHistory(i.title, i.slug),
                this.beenViewedArticles[t] || (this.beenViewedArticles[t] = this.emitDataLayerEvent(t)))
            }
        }, {
            key: "emitDataLayerEvent",
            value: function(e) {
                return !!this.articles.length && (!(!this.articles[e] || !this.articles[e].vnode) && (this.articles[e].vnode.context.$emit("infinite-scroll-fire-pageview", e),
                !0))
            }
        }, {
            key: "updateHistory",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this._window.document.title = e,
                this._window.history.replaceState({}, e, t)
            }
        }, {
            key: "getArticleByIndex",
            value: function(e) {
                return this.articles[e]
            }
        }, {
            key: "getCurrentArticlePosition",
            value: function() {
                var e = void 0
                  , t = void 0
                  , i = this.getCurrentYPosition() + this.getViewportOffset();
                for (t = 0; t < this.articles.length; t++)
                    if (e = this.getArticleByIndex(t),
                    i > e.dom.offsetTop && i < e.dom.offsetTop + e.dom.offsetHeight)
                        return {
                            position: t,
                            article: e
                        };
                return {
                    position: t - 1,
                    article: e
                }
            }
        }, {
            key: "getCurrentYPosition",
            value: function() {
                return this._window.pageYOffset
            }
        }, {
            key: "getPosition",
            value: function(e) {
                return this.articles[e]
            }
        }, {
            key: "getViewportOffset",
            value: function() {
                return this.isMobile ? this._window.innerHeight / 4 : 2 * this._window.innerHeight / 3
            }
        }, {
            key: "install",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.directive("infinite-article", this.getDirective())
            }
        }, {
            key: "setupDirective",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.value && e.value.isMobile && this.setIsMobile(e.value.isMobile),
                e.value && e.value.window && this.setWindow(e.value.window)
            }
        }, {
            key: "setWindow",
            value: function(e) {
                this._window = e
            }
        }, {
            key: "setIsMobile",
            value: function(e) {
                this.isMobile = e
            }
        }, {
            key: "start",
            value: function() {
                var e = this
                  , t = function() {
                    e.handler()
                }
                  , i = (0,
                o.default)(t, 600);
                this.scrollHandler = i,
                this._window.addEventListener("scroll", i)
            }
        }, {
            key: "bind",
            value: function(e, t, i) {
                this.articles.push({
                    dom: e,
                    title: t.value.title,
                    slug: t.value.slug,
                    vnode: i
                })
            }
        }, {
            key: "inserted",
            value: function(e, t) {
                this.setup || (this.setupDirective(t),
                this.start(),
                this.setup = !0)
            }
        }, {
            key: "getDirective",
            value: function() {
                var e = this;
                return {
                    bind: function(t, i, a) {
                        e.bind(t, i, a)
                    },
                    inserted: function(t, i) {
                        e.inserted(t, i)
                    }
                }
            }
        }]),
        e
    }();
    t.default = s
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isTablet = t.isMobile = void 0;
    var n = i(575)
      , r = a(n)
      , o = i(215)
      , s = a(o);
    t.isMobile = r.default,
    t.isTablet = s.default
}
, function(e, t, i) {
    "use strict";
    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = r.test(e);
        return t ? !n(e) : t
    }
    var n = i(215)
      , r = /mobile/i;
    e.exports = a
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n() {
        return new d.default.Store({
            state: {
                statusCode: 200,
                showEmailCapture: !1,
                showPage500: !1
            },
            mutations: {
                NOT_FOUND: function(e, t) {
                    e.statusCode = t || 404
                },
                SET_STATUS: function(e, t) {
                    var i = t.status;
                    e.statusCode = i
                },
                SET_EMAIL_CAPTURE: function(e, t) {
                    e.showEmailCapture = t
                },
                SET_SHOW_500: function(e, t) {
                    e.showPage500 = t || !1
                }
            },
            getters: {
                SDK: function(e) {
                    return s.default.setDomain("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? "/api" : (0,
                    p.default)(e, "config.sdk.domain")),
                    s.default
                },
                articleMutators: function() {
                    return [T.default.slideShowMutatorForExploreArticles, T.default.filterSectionForTipsWarningsThingsNeeded, T.default.mobileAdLogic, T.default.jwPlayerPlacement]
                },
                config: function(e) {
                    return (0,
                    p.default)(e, "config", {})
                },
                searchFields: function() {
                    return ["view.title", "view.slug", "view.image.url", "view.image.alttext", "view.category.name", "view.category.slug", "view.subcategory.name", "view.subcategory.slug", "view.summary"].join(",")
                }
            },
            modules: {
                ads: m.default,
                Article: P.Article,
                articleCollection: v.default,
                category: w.default,
                forms: S.default,
                Helper: P.Helper,
                home: b.default,
                Hubs: P.Hubs,
                newsletter: k.default,
                search: O.default
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    t.createStore = n;
    var o = i(577)
      , s = a(o)
      , l = i(70)
      , c = a(l)
      , u = i(41)
      , d = a(u)
      , f = i(2)
      , p = a(f)
      , h = i(585)
      , m = a(h)
      , g = i(588)
      , v = a(g)
      , y = i(616)
      , b = a(y)
      , _ = i(617)
      , w = a(_)
      , C = i(637)
      , S = a(C)
      , E = i(649)
      , T = a(E)
      , A = i(658)
      , k = a(A)
      , I = i(659)
      , O = a(I)
      , P = i(660);
    c.default.use(d.default)
}
, , , , , , , function(e, t) {
    e.exports = request
}
, , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(586)
      , r = a(n)
      , o = i(587)
      , s = a(o)
      , l = new r.default
      , c = new s.default
      , u = {};
    t.default = {
        actions: l.getActions(),
        mutations: c.getMutations(),
        state: u
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    CREATE_AD: this.CREATE_AD(),
                    LOAD_ADS: this.LOAD_ADS(),
                    UPDATE_ADS: this.UPDATE_ADS()
                }
            }
        }, {
            key: "CREATE_AD",
            value: function() {
                return function(e, t) {
                    (0,
                    e.commit)("SET_AD", {
                        slug: t.slug,
                        adSlot: t.adSlot
                    })
                }
            }
        }, {
            key: "UPDATE_ADS",
            value: function() {
                return function(e, t) {
                    (0,
                    e.commit)("REPLACE_ADS", {
                        slug: t.slug,
                        ads: t.ads
                    })
                }
            }
        }, {
            key: "LOAD_ADS",
            value: function() {
                return function(e, t) {
                    e.commit,
                    t.slug,
                    t.targeting,
                    t.index;
                    console.log()
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_AD: this.SET_AD,
                    REPLACE_ADS: this.REPLACE_ADS
                }
            }
        }, {
            key: "SET_AD",
            value: function(e, t) {
                var i = t.slug
                  , a = t.adSlot;
                e[i] ? e[i].ads.push(a) : e[i] = {
                    ads: [a]
                }
            }
        }, {
            key: "SET_TARGETING",
            value: function(e, t) {
                var i = t.slug
                  , a = t.targeting;
                e[i] && (e[i].targeting = a)
            }
        }, {
            key: "REPLACE_ADS",
            value: function(e, t) {
                var i = t.slug
                  , a = t.ads;
                e[i] && (e[i] = a)
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(146)
      , s = a(o)
      , l = i(225)
      , c = a(l)
      , u = {
        articles: [],
        meta: {},
        category: "",
        subCategory: "",
        page: 1
    }
      , d = {
        FETCH_ARTICLE_COLLECTION_RECENT: function(e, t) {
            var i = e.commit
              , a = e.getters
              , n = t.page
              , r = t.limit
              , o = (t.config,
            {
                limit: r || 9,
                page: n || 1,
                fields: a.searchFields
            });
            return a.SDK.searchRetrieve(o).then(function(e) {
                return i("SET_ARTICLE_COLLECTION", {
                    data: e
                }),
                !0
            }).catch(function(e) {
                return i("SET_ZERO_RESULTS_FLAG_NC"),
                i("SET_STATUS", {
                    status: 500
                }),
                !1
            })
        },
        FETCH_ARTICLE_COLLECTION_BY_CATEGORY: function(e, t) {
            var i = e.commit
              , a = e.getters
              , n = t.slug
              , o = t.page
              , s = t.limit
              , l = (t.type,
            t.config,
            {
                limit: s || 9,
                page: o || 1,
                fields: a.searchFields
            })
              , u = c.default.getCategoryObject(n);
            return "category" === (0,
            r.default)(u, "type") ? l.category = u.name : (l.category = u.parent.name,
            l.subCategory = u.name),
            a.SDK.searchRetrieve(l).then(function(e) {
                i("SET_ARTICLE_COLLECTION", {
                    data: e
                })
            }).catch(function(e) {
                i("SET_ZERO_RESULTS_FLAG_NC"),
                i("SET_SHOW_500", !0),
                i("SET_STATUS", {
                    status: 500
                })
            })
        },
        FETCH_ARTICLE_COLLECTION_BY_SEARCH: function(e, t) {
            var i = e.commit
              , a = e.getters
              , n = t.query
              , r = t.page
              , o = (t.config,
            {
                limit: 9,
                origin: "contentlab",
                page: r || 1,
                fields: a.searchFields
            });
            return n && (o.keywords = n),
            a.SDK.searchRetrieve(o).then(function(e) {
                i("SET_ARTICLE_COLLECTION", {
                    data: e
                })
            }).catch(function(e) {
                i("SET_ZERO_RESULTS_FLAG_NC")
            })
        }
    }
      , f = {
        SET_ARTICLE_COLLECTION: function(e, t) {
            var i = t.data;
            e.articles = e.articles.concat((0,
            r.default)(i, "results", [])),
            e.meta = (0,
            s.default)(i, "results", {}),
            e.page = (0,
            r.default)(i, "meta.current_page", 1)
        }
    };
    t.default = {
        actions: d,
        mutations: f,
        state: u
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , r = {
        articles: {
            editorsPicks: []
        }
    }
      , o = {
        FETCH_HOMEPAGE_ARTICLES_BY_CATEGORY_EDITORS_PICKS: function(e, t) {
            var i = e.commit
              , a = e.getters
              , r = (e.state,
            t.config,
            {
                slug: "editors-picks"
            })
              , o = [];
            return a.SDK.getHub(r).then(function(e) {
                e.sections = e.sections.filter(function(e) {
                    return "article" === (0,
                    n.default)(e, "type", "")
                });
                for (var t = 0; t < e.sections.length && t < 3; t++)
                    o.push(e.articles[e.sections[t].value]);
                return e["editors-picks"] = o,
                i("SET_HOMEPAGE_ARTICLES_EDITORS_PICKS", {
                    data: e
                }),
                !0
            }).catch(function(e) {
                return i("SET_ZERO_RESULTS_FLAG_NC"),
                i("SET_STATUS", {
                    status: 500
                }),
                !1
            })
        }
    }
      , s = {
        SET_HOMEPAGE_ARTICLES_EDITORS_PICKS: function(e, t) {
            var i = t.data;
            e.articles.editorsPicks = (0,
            n.default)(i, "editors-picks", [])
        }
    };
    t.default = {
        actions: o,
        mutations: s,
        state: r
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(226)
      , s = a(o)
      , l = {
        category: {},
        categoryFamily: {}
    }
      , c = {
        FETCH_CATEGORY: function(e, t) {
            var i = e.commit
              , a = t.slug
              , n = t.config;
            i("SET_CATEGORY", {
                category: (0,
                r.default)(n, "categories." + a, {})
            })
        },
        FETCH_CATEGORY_FAMILY: function(e, t) {
            var i = e.commit
              , a = t.slug
              , n = t.config
              , o = {}
              , l = (0,
            r.default)(n, "categories." + a, {});
            if ("category" === (0,
            r.default)(l, "type", ""))
                o.category = l;
            else {
                var c = (0,
                r.default)(n, "categories." + a + ".parent.slug", "");
                o.category = (0,
                r.default)(n, "categories." + c, {})
            }
            o.subcategories = (0,
            s.default)((0,
            r.default)(n, "categories", {}), function(e) {
                return (0,
                r.default)(e, "parent.slug", "") === (0,
                r.default)(o, "category.slug", "")
            }),
            i("SET_CATEGORY_FAMILY", {
                categoryFamily: o
            })
        }
    }
      , u = {
        SET_CATEGORY: function(e, t) {
            var i = t.category;
            e.category = i
        },
        SET_CATEGORY_FAMILY: function(e, t) {
            var i = t.categoryFamily;
            e.categoryFamily = i
        }
    };
    t.default = {
        actions: c,
        mutations: u,
        state: l
    }
}
, , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(638)
      , r = a(n)
      , o = i(648)
      , s = a(o)
      , l = new r.default
      , c = new s.default
      , u = {
        forms: {}
    };
    t.default = {
        actions: l.getActions(),
        mutations: c.getMutations(),
        state: u
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = i(2)
      , s = a(o)
      , l = i(75)
      , c = a(l)
      , u = i(639)
      , d = function() {
        function e() {
            n(this, e)
        }
        return r(e, [{
            key: "getActions",
            value: function() {
                return {
                    REGISTER_FORM_ROW: this.REGISTER_FORM_ROW(),
                    UPDATE_FORM_STATUS: this.UPDATE_FORM_STATUS(),
                    UPDATE_FORM_ROW: this.UPDATE_FORM_ROW(),
                    VALIDATE_FORM: this.VALIDATE_FORM(),
                    CLEAR_FORM_ERRORS: this.CLEAR_FORM_ERRORS()
                }
            }
        }, {
            key: "REGISTER_FORM_ROW",
            value: function() {
                return function(e, t) {
                    (0,
                    e.commit)("SET_FORM_ROW", {
                        form: t.form,
                        field: t.field,
                        rules: t.rules,
                        value: t.value
                    })
                }
            }
        }, {
            key: "UPDATE_FORM_STATUS",
            value: function() {
                return function(e, t) {
                    (0,
                    e.commit)("SET_FORM_STATUS", {
                        form: t.form,
                        status: t.status
                    })
                }
            }
        }, {
            key: "UPDATE_FORM_ROW",
            value: function() {
                return function(e, t) {
                    (0,
                    e.commit)("SET_FORM_ROW_VALUE", {
                        form: t.form,
                        field: t.field,
                        value: t.value
                    })
                }
            }
        }, {
            key: "CLEAR_FORM_ERRORS",
            value: function() {
                return function(e, t) {
                    var i = e.commit
                      , a = e.state
                      , n = t.form
                      , r = (0,
                    s.default)(a, "forms[" + n + "]", {});
                    (0,
                    c.default)(r, function(e, t) {
                        (0,
                        s.default)(r, t + ".error", "") && i("SET_FORM_ROW_ERROR", {
                            form: n,
                            field: t,
                            error: ""
                        })
                    })
                }
            }
        }, {
            key: "VALIDATE_FORM",
            value: function() {
                return function(e, t) {
                    var i = e.commit
                      , a = e.state
                      , n = t.form;
                    return new Promise(function(e, t) {
                        var r = (0,
                        s.default)(a, "forms[" + n + "]", {})
                          , o = {}
                          , l = {};
                        (0,
                        c.default)(r, function(e, t) {
                            (0,
                            s.default)(e, "rules", !1) && (o[t] = (0,
                            s.default)(e, "value"),
                            l[t] = (0,
                            s.default)(e, "rules"))
                        });
                        var d = new u.Validator(o,l,{
                            same: {
                                string: "Must match :same."
                            },
                            min: {
                                string: "Must be at least :min characters."
                            },
                            required: {
                                string: ":attribute is required."
                            }
                        });
                        if (d.passes())
                            return e(o);
                        var f = void 0;
                        return (0,
                        c.default)(r, function(e, t) {
                            d.errors.first(t) && (f = d.errors.first(t),
                            i("SET_FORM_ROW_ERROR", {
                                form: n,
                                field: t,
                                error: f
                            }))
                        }),
                        t({
                            error: f
                        })
                    }
                    )
                }
            }
        }]),
        e
    }();
    t.default = d
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Validator = void 0;
    var a = i(640)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.Validator = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        var t = Number(e);
        return isNaN(t) ? 1 : t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(641)
      , r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n);
    r.default.register("lg_special_character", function(e, t, i) {
        var n = a(t)
          , r = new RegExp("^(.*?[!@#\\$%\\^\\&*\\)\\(+=._-]){" + n + ",}.*$");
        return e.match(r)
    }, ":attribute requires :lg_special_character special character"),
    r.default.register("lg_number", function(e, t, i) {
        var n = a(t)
          , r = new RegExp("^(.*?[0-9]){" + n + ",}.*$");
        return e.match(r)
    }, ":attribute requires at least :lg_number number"),
    r.default.register("lg_alpha_space", function(e, t, i) {
        return e.match(/^[a-zA-Z]+( [a-zA-Z]+)*$/g)
    }, ":attribute must only contain letters"),
    r.default.register("lg_phone_number", function(e, t, i) {
        return e.match(/^\d{3}[\s.-]\d{3}[\s.-]\d{4}$/)
    }, ":attribute is an invalid format"),
    r.default.register("lg_alpha", function(e, t, i) {
        var n = a(t)
          , r = new RegExp("^(.*?[a-zA-Z]){" + n + ",}.*$");
        return e.match(r)
    }, ":attribute requires at least :lg_alpha letter"),
    r.default.register("lg_trim_space", function(e, t, i) {
        return !e.match(/^( )|( )$/g)
    }, ":attribute can not start or end with a space"),
    r.default.register("lg_blacklist", function(e, t, i) {
        return -1 === t.split(",").indexOf(e)
    }, "Invalid value"),
    t.default = r.default
}
, , , , , , , , function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(70)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_FORM_ROW: this.SET_FORM_ROW,
                    SET_FORM_ROW_VALUE: this.SET_FORM_ROW_VALUE,
                    SET_FORM_ROW_ERROR: this.SET_FORM_ROW_ERROR,
                    SET_FORM_STATUS: this.SET_FORM_STATUS
                }
            }
        }, {
            key: "SET_FORM_ROW",
            value: function(e, t) {
                var i = t.form
                  , a = t.field
                  , n = t.rules
                  , r = void 0 === n ? "" : n
                  , s = t.value
                  , l = void 0 === s ? "" : s;
                e.forms[i] || (o.default.set(e.forms, i, {}),
                o.default.set(e.forms[i], "status", "registered")),
                o.default.set(e.forms[i], a, {
                    value: l,
                    rules: r,
                    error: ""
                })
            }
        }, {
            key: "SET_FORM_ROW_VALUE",
            value: function(e, t) {
                var i = t.form
                  , a = t.field
                  , n = t.value;
                o.default.set(e.forms[i][a], "value", n)
            }
        }, {
            key: "SET_FORM_ROW_ERROR",
            value: function(e, t) {
                var i = t.form
                  , a = t.field
                  , n = t.error;
                o.default.set(e.forms[i][a], "error", n)
            }
        }, {
            key: "SET_FORM_STATUS",
            value: function(e, t) {
                var i = t.form
                  , a = t.status;
                o.default.set(e.forms[i], "status", a)
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "things_needed" !== e.type && "warning" !== e.type
    }
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "things_needed" !== e.type && "warning" !== e.type && "tip" !== e.type
    }
    function o(e) {
        return !(0,
        p.default)((0,
        c.default)(e, "sponsorship", {}))
    }
    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0,
        c.default)(t, "articles.loadAds", []).indexOf(e.format)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = i(2)
      , c = a(l)
      , u = i(650)
      , d = a(u)
      , f = i(248)
      , p = a(f)
      , h = i(655)
      , m = i(657);
    t.default = {
        filterArticle: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e
        },
        slideShowMutatorForExploreArticles: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = (0,
            c.default)(e, "format", "").toLowerCase();
            if ("explore" !== t && "video" !== t)
                return e;
            var i = (0,
            d.default)((0,
            c.default)(e, "content", []), function(e) {
                return "slides" === (0,
                c.default)(e, "type", "")
            });
            return e.slider = i,
            e
        },
        injectAds: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return s(e),
            e
        },
        filterSectionForTipsWarningsThingsNeeded: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = r;
            return "articles" === (0,
            c.default)(e, "format", "") && o(e) && (t = n),
            e.content = (0,
            c.default)(e, "content", []).filter(t),
            e
        },
        mobileAdLogic: h.mobileAdLogic,
        jwPlayerPlacement: m.jwPlayerPlacement
    }
}
, , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 270
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 70;
        if ("image" === (0,
        v.default)(e, "type", ""))
            return t + i;
        if ("content" === (0,
        v.default)(e, "type", "")) {
            var n = t + a + (0,
            b.default)((0,
            v.default)(e, "content", "")).length;
            return (0,
            v.default)(e, "step", 0) && (n += a + r(e)),
            n
        }
        if ("custom_title" === (0,
        v.default)(e, "type", "") || "title" === (0,
        v.default)(e, "type", "")) {
            var o = t + a + (0,
            b.default)((0,
            v.default)(e, "content", "")).length;
            return (0,
            v.default)(e, "step", 0) && (o += r(e)),
            o
        }
        return t
    }
    function r(e) {
        return 6 + (0,
        v.default)(e, "step", 0).toString().length
    }
    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments[1]
          , i = (0,
        v.default)(t, "imageToCharacters", 270)
          , a = (0,
        v.default)(t, "newlineToCharacters", 70);
        return e.reduce(function(e, t) {
            return n(t, e, i, a)
        }, 0)
    }
    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
          , n = arguments[4]
          , r = (0,
        v.default)(i, "midContentDistance", 0)
          , o = (0,
        v.default)(i, "lastAdDistance", 0)
          , s = (0,
        v.default)(i, "maxAds", 8);
        return e >= r && "content" === a && t >= o && n < s
    }
    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          , i = 0
          , a = []
          , n = e.reduce(function(e, n) {
            return i >= t ? (e.push(n),
            e) : ("content" === (0,
            v.default)(n, "type", "") && i++,
            a.push(n),
            [])
        }, []);
        return [a, n]
    }
    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
          , n = (0,
        v.default)(t, "linkUnitSlot", 9e3) === i;
        return e && n && 0 === a
    }
    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
          , n = (0,
        v.default)(t, "jwPlayerSlot", 9e3) === i;
        return e && n && 0 === a
    }
    function d(e) {
        return {
            type: "ad-mobile",
            loc: "ad_" + e,
            slot: "slot",
            slotNumber: e
        }
    }
    function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            type: "ad-mobile-link-unit",
            insStyle: (0,
            v.default)(e, "style.linkUnit", ""),
            clientId: (0,
            v.default)(e, "clientId", ""),
            slotId: (0,
            v.default)(e, "slotId.linkUnit", ""),
            format: "link"
        }
    }
    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            type: "ad-mobile-jwplayer",
            videoLabel: (0,
            v.default)(e, "videoLabel", ""),
            playerUrl: (0,
            v.default)(e, "mobile.playerUrl", ""),
            playlistUrl: (0,
            v.default)(e, "playlistUrl", ""),
            bidderName: (0,
            v.default)(e, "bidderName", ""),
            bidderId: (0,
            v.default)(e, "bidderId", "")
        }
    }
    function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , a = (0,
        v.default)(e, "format", "").toLowerCase();
        if ("articles" !== a && "article" !== a)
            return e;
        var r = (0,
        v.default)(t, "ads.mobileAdLogic[" + a + "]", {})
          , h = "leaf_migrated" === (0,
        v.default)(e, "content_origin", "").toLowerCase()
          , g = (0,
        v.default)(t, "ads.adlink", {})
          , y = (0,
        v.default)(t, "ads.jwPlayer", {})
          , b = (0,
        v.default)(e, "content", [])
          , _ = l(b, (0,
        v.default)(r, "firstAdDistance", 1))
          , w = m(_, 2)
          , C = w[0]
          , S = w[1]
          , E = [].concat(C)
          , T = (0,
        v.default)(r, "maxAds", 8)
          , A = o(S)
          , k = 0
          , I = (0,
        v.default)(r, "firstAdDistance", 1)
          , O = void 0
          , P = (0,
        v.default)(r, "linkUnit", !1)
          , M = (0,
        v.default)(r, "jwPlayer", !1);
        return c(P, r, I) && !h ? (O = f(g),
        P = !1) : u(M, r, I) && h ? (O = p(y),
        M = !1) : O = d(I),
        E.push(O),
        S.forEach(function(e) {
            var t = null
              , a = n(e);
            k += a,
            A -= a,
            E.push(e),
            s(k, A, r, e.type, I) && (k = 0,
            c(P, r, I + 1, i) && !h ? (t = f(g),
            P = !1) : u(M, r, I + 1, i) && h ? (t = p(y),
            M = !1) : (I++,
            t = d(I)),
            E.push(t))
        }),
        (1 === I || k >= r.lastAdDistance && I < T) && (I++,
        E.push(d(I))),
        e.content = E,
        e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m = function() {
        function e(e, t) {
            var i = []
              , a = !0
              , n = !1
              , r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (i.push(o.value),
                !t || i.length !== t); a = !0)
                    ;
            } catch (e) {
                n = !0,
                r = e
            } finally {
                try {
                    !a && s.return && s.return()
                } finally {
                    if (n)
                        throw r
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.mobileAdLogic = h;
    var g = i(2)
      , v = a(g)
      , y = i(656)
      , b = a(y)
}
, , function(e, t, i) {
    "use strict";
    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 1 === e && 1 === t || 2 === e && 0 === t
    }
    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if ("leaf_migrated" !== (0,
        o.default)(e, "content_origin", "").toLowerCase())
            return e;
        if (0 !== i)
            return e;
        var n = []
          , r = (0,
        o.default)(t, "ads.jwPlayer", {})
          , s = 0
          , l = 0
          , c = !1;
        return (0,
        o.default)(e, "content", []).forEach(function(e) {
            n.push(e),
            "content" === (0,
            o.default)(e, "type", "") && s++,
            l || "image" !== (0,
            o.default)(e, "type", "") || l++,
            a(s, l) && (c || n.push({
                type: "jwplayer",
                videoLabel: r.videoLabel,
                playerUrl: r.desktop.playerUrl,
                playlistUrl: r.playlistUrl,
                bidderName: r.bidderName,
                bidderId: r.bidderId
            }),
            c = !0)
        }),
        e.content = n,
        e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.jwPlayerPlacement = n;
    var r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {}
      , n = {
        SUBSCRIBE: function(e, t) {
            var i = (e.state,
            e.getters)
              , a = t.email
              , n = t.name
              , r = t.dob;
            return i.SDK.subscribe({
                body: {
                    email: a,
                    first_name: n,
                    custom_field: {
                        dob: r
                    },
                    subscribe: !0
                }
            })
        }
    };
    t.default = {
        actions: n,
        state: a
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        autocomplete: [],
        zeroResults: !1
    }
      , n = {
        FETCH_AUTOCOMPLETE: function(e, t) {
            var i = e.commit
              , a = e.getters
              , n = (e.state,
            t.terms);
            a.SDK.searchRetrieve({
                limit: 5,
                origin: "contentlab",
                keywords: n
            }).then(function(e) {
                i("SET_AUTOCOMPLETE_RESULTS", e.results)
            }).catch(function(e) {
                i("CLEAR_AUTOCOMPLETE_RESULTS")
            })
        },
        CLEAR_AUTOCOMPLETE: function(e) {
            (0,
            e.commit)("CLEAR_AUTOCOMPLETE_RESULTS")
        }
    }
      , r = {
        CLEAR_AUTOCOMPLETE_RESULTS: function(e) {
            e.autocomplete = []
        },
        SET_AUTOCOMPLETE_RESULTS: function(e, t) {
            e.autocomplete = t
        },
        SET_ZERO_RESULTS_FLAG_NC: function(e) {
            e.zeroResults = !0
        }
    };
    t.default = {
        actions: n,
        mutations: r,
        state: a
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Newsletter = t.Hubs = t.Home = t.Helper = t.Collections = t.Category = t.Article = void 0;
    var n = i(661)
      , r = a(n)
      , o = i(669)
      , s = a(o)
      , l = i(672)
      , c = a(l)
      , u = i(677)
      , d = a(u)
      , f = i(681)
      , p = a(f)
      , h = i(684)
      , m = a(h)
      , g = i(687)
      , v = a(g);
    t.Article = r.default,
    t.Category = s.default,
    t.Collections = c.default,
    t.Helper = d.default,
    t.Home = p.default,
    t.Hubs = m.default,
    t.Newsletter = v.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(662)
      , r = a(n)
      , o = i(668)
      , s = a(o)
      , l = {
        articles: [],
        infiniteScrollArticles: [],
        slideshowArticles: []
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = i(2)
      , s = a(o)
      , l = i(663)
      , c = a(l)
      , u = function() {
        function e() {
            n(this, e)
        }
        return r(e, [{
            key: "getActions",
            value: function() {
                return {
                    FETCH_ARTICLE_AND_RCP: this.FETCH_ARTICLE_AND_RCP(),
                    FETCH_INFINITE_SCROLL_ARTICLES: this.FETCH_INFINITE_SCROLL_ARTICLES(),
                    FETCH_NEXT_SLIDESHOW_ARTICLE: this.FETCH_NEXT_SLIDESHOW_ARTICLE()
                }
            }
        }, {
            key: "FETCH_ARTICLE_AND_RCP",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug
                      , o = i.requiredType
                      , l = i.index;
                    return Promise.all([e.fetchArticle({
                        getters: n,
                        slug: r,
                        commit: a
                    }).catch(function(e) {
                        return e
                    }), e.fetchMoreLikeThis({
                        getters: n,
                        slug: r,
                        requiredType: o,
                        commit: a
                    }).catch(function(e) {
                        return e
                    })]).then(function(t) {
                        if (301 === (0,
                        s.default)(t[0], "body.code", ""))
                            return e.fetchArticleAndRCPErrorResolver(a, r)(t[0]);
                        !1 === t[0] && a("SET_SHOW_500", !0),
                        e.fetchArticleAndRCPSuccessfulResolver(a, n, l)(t)
                    })
                }
            }
        }, {
            key: "fetchArticleAndRCPSuccessfulResolver",
            value: function(e, t, i) {
                var a = this;
                return function(n) {
                    var r = (0,
                    s.default)(n, "[0]", {})
                      , o = (0,
                    s.default)(n, "[1]", {});
                    return r = a.tranformArticle({
                        article: r,
                        getters: t
                    }),
                    e("SET_ARTICLE_AND_RCP", {
                        article: r,
                        moreLikeThis: o,
                        mutators: t.articleMutators,
                        config: t.config,
                        index: i
                    })
                }
            }
        }, {
            key: "fetchArticleAndRCPErrorResolver",
            value: function(e, t) {
                var i = this;
                return function(e) {
                    var a = (0,
                    s.default)(e, "body.to_location", !1);
                    if (a)
                        return i.redirect(t, a)
                }
            }
        }, {
            key: "FETCH_INFINITE_SCROLL_ARTICLES",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug;
                    return e.fetchMoreLikeThis({
                        getters: n,
                        slug: r,
                        requiredType: "article"
                    }).then(e.fetchInfiniteScrollArticlesSuccessfulResolver(a)).catch(e.fetchInfiniteScrollArticlesErrorResolver())
                }
            }
        }, {
            key: "fetchInfiniteScrollArticlesSuccessfulResolver",
            value: function(e) {
                return function(t) {
                    return e("SET_INFINITE_SCROLL_ARTICLES", {
                        articles: t
                    })
                }
            }
        }, {
            key: "fetchInfiniteScrollArticlesErrorResolver",
            value: function() {
                return function(e) {}
            }
        }, {
            key: "fetchArticle",
            value: function(e) {
                var t = e.getters
                  , i = e.slug
                  , a = e.commit;
                return (0,
                s.default)(t, "SDK", {}).articleRetrieve({
                    slug: i
                }).then(function(e) {
                    return e
                }).catch(function(e) {
                    return (0,
                    s.default)(e, "body.to_location", !1) ? e : (a("SET_STATUS", {
                        status: 500
                    }),
                    !1)
                })
            }
        }, {
            key: "fetchMoreLikeThis",
            value: function(e) {
                var t = e.getters
                  , i = e.slug
                  , a = e.requiredType
                  , n = e.commit
                  , r = (0,
                s.default)(t, "SDK", {})
                  , o = {
                    excludeSlug: i,
                    category: ""
                };
                return a && (o.requiredType = a),
                r.getMoreLikeThis(o).then(function(e) {
                    return e
                }).catch(function(e) {
                    return n("SET_STATUS", {
                        status: 500
                    }),
                    !1
                })
            }
        }, {
            key: "FETCH_NEXT_SLIDESHOW_ARTICLE",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug;
                    return e.fetchMoreLikeThis({
                        getters: n,
                        slug: r,
                        requiredType: "slideshow"
                    }).then(e.fetchNextSlideshowArticleSuccessfulResolver(a, r))
                }
            }
        }, {
            key: "fetchNextSlideshowArticleSuccessfulResolver",
            value: function(e, t) {
                return function(i) {
                    e("SET_NEXT_SLIDESHOW_ARTICLE", {
                        articles: i,
                        slug: t
                    })
                }
            }
        }, {
            key: "tranformArticle",
            value: function(e) {
                var t = e.article
                  , i = e.getters
                  , a = (0,
                s.default)(i, "config", {});
                return this.shouldLoadAds(t, a) && (t = this.injectMobileAds(t)),
                t = new c.default((0,
                s.default)(i, "config.apiResponseFilter", {}),(0,
                s.default)(i, "config.imageResizeProfiles", {})).filterArticle(t)
            }
        }, {
            key: "reject",
            value: function(e, t, i, a) {
                return Promise.reject({
                    type: e,
                    message: t,
                    code: i,
                    url: a
                })
            }
        }, {
            key: "redirect",
            value: function(e, t) {
                return this.reject("redirect", "Article response was 301: " + e, 301, t)
            }
        }, {
            key: "notFound",
            value: function(e) {
                return this.reject("not-found", "Article response was 404: " + e, 404, e)
            }
        }, {
            key: "shouldLoadAds",
            value: function(e, t) {
                if (0 === (0,
                s.default)(e, "content", []).length)
                    return !1;
                var i = (0,
                s.default)(e, "new_content", !1) ? "NC" : "LC";
                return (0,
                s.default)(t, "articles.showAds." + i, !1)
            }
        }, {
            key: "injectMobileAds",
            value: function(e) {
                var t = (0,
                s.default)(e, "content", []);
                return "SlideShow" === (0,
                s.default)(e, "type", "") ? e.content = this.getSlideshowSectionsWithAds(t) : e.content = this.getSectionsWithAds(t),
                e
            }
        }, {
            key: "adPlacementGenerator",
            value: function(e, t) {
                return {
                    type: "ad",
                    slot: "slot",
                    loc: e,
                    slotNumber: t
                }
            }
        }, {
            key: "determinAdPlacements",
            value: function(e) {
                var t = [];
                if (t[1] = this.adPlacementGenerator("atf", 1),
                e >= 6 && e <= 9)
                    t[4] = this.adPlacementGenerator("mtf1", 2),
                    9 === e && (t[7] = this.adPlacementGenerator("mtf2", 3));
                else if (e > 9) {
                    var i = Math.ceil(e / 3);
                    t[i] = this.adPlacementGenerator("mtf1", 2),
                    t[2 * i - 1] = this.adPlacementGenerator("mtf2", 3)
                }
                return t
            }
        }, {
            key: "getContentLength",
            value: function(e) {
                for (var t = 0, i = !1, a = 0; a < e.length; a++) {
                    var n = e[a];
                    "content" === n.type && t++,
                    "image" === n.type && i && t++,
                    i = "title" === n.type
                }
                return t
            }
        }, {
            key: "getSectionsWithAds",
            value: function(e) {
                var t = this.determinAdPlacements(this.getContentLength(e))
                  , i = 1
                  , a = 0
                  , n = [];
                return n.push(e[0]),
                e = e.slice(1),
                "image" === (0,
                s.default)(e, "[0].type", "") && (n.push((0,
                s.default)(e, "[0]", {})),
                e = e.slice(1)),
                n.push(t[1]),
                t[1] = null,
                e.forEach(function(e) {
                    n.push(e),
                    "content" === (0,
                    s.default)(e, "type", "") && i++,
                    "title" === (0,
                    s.default)(e, "type", "") && (a = 0),
                    "image" === (0,
                    s.default)(e, "type", "") && 1 === a && i++,
                    t[i] && (n.push(t[i]),
                    t[i] = null),
                    a++
                }),
                n
            }
        }, {
            key: "getSlideshowSectionsWithAds",
            value: function(e) {
                var t = e.filter(function(e) {
                    return "slides" === (0,
                    s.default)(e, "type", "")
                });
                if (0 === t.length)
                    return e;
                var i = (0,
                s.default)(t, "[0].content", [])
                  , a = this.determinAdPlacements(i.length)
                  , n = [];
                n.push(i[0]),
                i = i.slice(1),
                n[0].ad = a[1],
                a[1] = null,
                i.forEach(function(e, t) {
                    n.push(e),
                    a[t] && (n[t].ad = a[t],
                    a[t] = null)
                });
                var r = []
                  , o = !1;
                return e.forEach(function(e) {
                    "slides" === (0,
                    s.default)(e, "type", "") ? o ? r.push(e) : (r.push({
                        type: "slides",
                        content: n
                    }),
                    o = !0) : r.push(e)
                }),
                r
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = i(146)
      , s = a(o)
      , l = i(2)
      , c = a(l)
      , u = i(664)
      , d = function() {
        function e(t, i) {
            n(this, e),
            this.omitFromEmbed = (0,
            c.default)(t, "embed", []),
            this.omitFromImage = (0,
            c.default)(t, "image", []),
            this.omitFromWriter = (0,
            c.default)(t, "writer", []),
            this.omitFromArticle = (0,
            c.default)(t, "article", []),
            this.omitFromSearchResults = (0,
            c.default)(t, "searchResults", []),
            this.rcpProfile = (0,
            c.default)(i, "rcp", "120x120"),
            this.writerProfile = (0,
            c.default)(i, "writer", "75x75"),
            this.articleImageProfile = (0,
            c.default)(i, "articleImage", "640"),
            this.categoryCardProfile = (0,
            c.default)(i, "categoryCard", "400x400"),
            this.resizeImage = u.ImageResizer
        }
        return r(e, [{
            key: "filterEmbed",
            value: function(e) {
                return (0,
                s.default)(e, this.omitFromEmbed)
            }
        }, {
            key: "filterImage",
            value: function(e, t) {
                return e.url = this.resizeImage((0,
                c.default)(e, "url"), t),
                (0,
                s.default)(e, this.omitFromImage)
            }
        }, {
            key: "filterWriter",
            value: function(e) {
                return (0,
                c.default)(e, "image", !1) && (e.image = this.filterImage(e.image, this.writerProfile)),
                (0,
                s.default)(e, this.omitFromWriter)
            }
        }, {
            key: "filterContent",
            value: function(e) {
                var t = this
                  , i = [];
                return e.map(function(e) {
                    "image" === (0,
                    c.default)(e, "type", "") && (e = t.filterImage(e, t.articleImageProfile)),
                    "embed" === (0,
                    c.default)(e, "type", "") && (e = t.filterEmbed(e)),
                    i.push(e)
                }),
                i
            }
        }, {
            key: "filterArticleImage",
            value: function(e, t) {
                return (0,
                c.default)(e, "image", !1) && "premium_article" !== (0,
                c.default)(e, "format", "") && (e.image = this.filterImage(e.image, t)),
                e
            }
        }, {
            key: "filterArticleRCP",
            value: function(e) {
                var t = this
                  , i = [];
                return e.map(function(e) {
                    i.push(t.filterArticleImage(e, t.rcpProfile))
                }),
                i
            }
        }, {
            key: "filterSearch",
            value: function(e) {
                var t = this
                  , i = [];
                return e.map(function(e) {
                    i.push((0,
                    s.default)(t.filterArticleImage(e, t.categoryCardProfile), t.omitFromSearchResults))
                }),
                i
            }
        }, {
            key: "filterArticle",
            value: function(e) {
                return e = this.filterArticleImage(e, this.articleImageProfile),
                e.writer = this.filterWriter((0,
                c.default)(e, "writer", {})),
                e.content = this.filterContent((0,
                c.default)(e, "content", [])),
                e.related_content = this.filterArticleRCP((0,
                c.default)(e, "related_content", [])),
                (0,
                s.default)(e, this.omitFromArticle)
            }
        }]),
        e
    }();
    t.default = d
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReplaceRcpWithPromo = t.ReplaceHpWithPromo = t.ImageResizer = void 0;
    var n = i(665)
      , r = a(n)
      , o = i(666)
      , s = a(o)
      , l = i(667)
      , c = a(l);
    t.ImageResizer = r.default,
    t.ReplaceHpWithPromo = s.default,
    t.ReplaceRcpWithPromo = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        if (!e)
            return e;
        for (var i = e.replace(/^https?:/, ""), a = [[/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "cpcd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "cppd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "cpie"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "cpeh"], [/\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "ppds"], [/\/\/s3.amazonaws.com\//g, "cme"], [/\/\/i.ehow.com\/images\//g, "ieh"], [/\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "clsd"], [/\/\/photos2.demandstudios.com\/DM-Resize\//g, "/"], [/\/\/photos.demandstudios.com\//g, "photos.demandstudios.com"], [/\/\/api.cuteness.com\//g, "cme/cuteness_data"]], n = a.length, r = 0; r < n; r++) {
            var o = a[r]
              , s = "https://cmeimg-a.akamaihd.net/" + t + "/" + o[1] + "/";
            if (o[0].test(i))
                return i.replace(o[0], s)
        }
        return e
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = !1, a = e, n = 0; n < t.length; n++)
            !function(e) {
                var n = t[e];
                n.index;
                a = a.filter(function(e, t) {
                    return !(n.slug.indexOf(e.slug) >= 0) || (i = !0,
                    !1)
                })
            }(n);
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
              , o = r.index;
            a.splice(o, 0, r)
        }
        return a
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 1, n)
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_ARTICLE_AND_RCP: this.SET_ARTICLE_AND_RCP,
                    SET_INFINITE_SCROLL_ARTICLES: this.SET_INFINITE_SCROLL_ARTICLES,
                    SET_NEXT_SLIDESHOW_ARTICLE: this.SET_NEXT_SLIDESHOW_ARTICLE
                }
            }
        }, {
            key: "SET_ARTICLE_AND_RCP",
            value: function(e, t) {
                var i = t.article
                  , a = t.moreLikeThis
                  , n = t.mutators
                  , r = t.config;
                t.index;
                i.related_content = a || [],
                n = n || [],
                e.articles.push(n.reduce(function(t, i) {
                    return i(t, r, {
                        isInfinite: e.infiniteScrollArticles.length > 0
                    })
                }, i))
            }
        }, {
            key: "SET_INFINITE_SCROLL_ARTICLES",
            value: function(e, t) {
                var i = t.articles;
                e.infiniteScrollArticles = i
            }
        }, {
            key: "SET_NEXT_SLIDESHOW_ARTICLE",
            value: function(e, t) {
                var i = t.articles
                  , a = t.slug;
                e.slideshowArticles = i.filter(function(e) {
                    return (0,
                    o.default)(e, "slug", "") !== a
                })
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(670)
      , r = a(n)
      , o = i(671)
      , s = a(o)
      , l = {
        category: {},
        family: {}
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    FETCH_CATEGORY: this.FETCH_CATEGORY()
                }
            }
        }, {
            key: "FETCH_CATEGORY",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug
                      , s = (0,
                    o.default)(n, "config.categories", {})
                      , l = (0,
                    o.default)(s, "" + r, {})
                      , c = {
                        category: {},
                        subcategories: []
                    };
                    "category" === (0,
                    o.default)(l, "type", "category") ? c.category = l : c.category = (0,
                    o.default)(s, "" + (0,
                    o.default)(l, "parent.slug", ""), {}),
                    c.subcategories = e.getSubcategories(s, (0,
                    o.default)(c, "category.slug", {})),
                    a("SET_CATEGORY", {
                        category: l
                    }),
                    a("SET_FAMILY", {
                        family: c
                    })
                }
            }
        }, {
            key: "getSubcategories",
            value: function(e, t) {
                var i = [];
                for (var a in e)
                    (0,
                    o.default)(e, a + ".parent.slug", "") === t && i.push((0,
                    o.default)(e, a, {}));
                return i
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_CATEGORY: this.SET_CATEGORY(),
                    SET_FAMILY: this.SET_FAMILY()
                }
            }
        }, {
            key: "SET_CATEGORY",
            value: function() {
                return function(e, t) {
                    var i = t.category;
                    e.category = i
                }
            }
        }, {
            key: "SET_FAMILY",
            value: function() {
                return function(e, t) {
                    var i = t.family;
                    e.family = i
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(673)
      , r = a(n)
      , o = i(676)
      , s = a(o)
      , l = {
        articles: {},
        meta: {},
        page: 1
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = i(2)
      , s = a(o)
      , l = i(674)
      , c = a(l)
      , u = function() {
        function e() {
            n(this, e)
        }
        return r(e, [{
            key: "getActions",
            value: function() {
                return {
                    FETCH_ARTICLE_COLLECTION: this.FETCH_ARTICLE_COLLECTION(),
                    FETCH_ARTICLE_COLLECTION_BY_CATEGORY: this.FETCH_ARTICLE_COLLECTION_BY_CATEGORY(),
                    FETCH_ARTICLE_COLLECTION_BY_SEARCH: this.FETCH_ARTICLE_COLLECTION_BY_SEARCH(),
                    FETCH_ARTICLE_COLLECTION_BY_CONTENT_TYPE: this.FETCH_ARTICLE_COLLECTION_BY_CONTENT_TYPE()
                }
            }
        }, {
            key: "FETCH_ARTICLE_COLLECTION",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.dispatch
                      , n = t.commit
                      , r = t.getters
                      , o = i.limit
                      , s = i.page
                      , l = i.sort
                      , c = i.fields
                      , u = i.contentType
                      , d = i.newContent
                      , f = i.excludes
                      , p = void 0 === f ? "" : f
                      , h = i.concat
                      , m = i.hasPagination
                      , g = i.key
                      , v = i.name
                      , y = i.query
                      , b = i.slug
                      , _ = i.type
                      , w = r.SDK
                      , C = ["subcategory", "subsubcategory", "search"].includes(_)
                      , S = e.searchParameterFactory({
                        limit: o,
                        page: s,
                        sort: l,
                        fields: c,
                        contentType: u,
                        newContent: d,
                        excludes: p,
                        name: v,
                        query: y,
                        revealHidden: C,
                        type: _
                    });
                    return g = g || "recent",
                    "category" === _ || "subcategory" === _ || "subsubcategory" === _ ? g = b : "search" === _ && (g = _),
                    w.searchRetrieve(S).then(e.fetchArticleCollectionResolver(a, n, g, m, h)).catch(e.fetchArticleCollectionError(a, n, g))
                }
            }
        }, {
            key: "FETCH_ARTICLE_COLLECTION_BY_CATEGORY",
            value: function() {
                return function(e, t) {
                    var i = e.dispatch
                      , a = e.getters
                      , n = t.slug
                      , r = t.page
                      , o = t.limit
                      , l = t.hasPagination
                      , c = (0,
                    s.default)(a, "config", {})
                      , u = (0,
                    s.default)(c, "categories[" + n + "]", {})
                      , d = (0,
                    s.default)(u, "type", "category");
                    return i("FETCH_ARTICLE_COLLECTION", {
                        slug: n,
                        name: (0,
                        s.default)(u, "queryName", (0,
                        s.default)(u, "name", "")),
                        type: d,
                        page: r,
                        limit: o,
                        hasPagination: l
                    })
                }
            }
        }, {
            key: "FETCH_ARTICLE_COLLECTION_BY_SEARCH",
            value: function() {
                return function(e, t) {
                    return (0,
                    e.dispatch)("FETCH_ARTICLE_COLLECTION", {
                        query: t.query,
                        page: t.page,
                        limit: t.limit,
                        hasPagination: t.hasPagination,
                        type: "search",
                        newContent: t.newContent
                    })
                }
            }
        }, {
            key: "FETCH_ARTICLE_COLLECTION_BY_CONTENT_TYPE",
            value: function() {
                return function(e, t) {
                    var i = e.dispatch
                      , a = t.contentType
                      , n = t.key;
                    return i("FETCH_ARTICLE_COLLECTION", {
                        contentType: a,
                        page: t.page,
                        limit: t.limit,
                        hasPagination: t.hasPagination,
                        key: n
                    })
                }
            }
        }, {
            key: "searchParameterFactory",
            value: function(e) {
                var t = e.limit
                  , i = e.page
                  , a = e.sort
                  , n = e.fields
                  , r = e.contentType
                  , o = e.newContent
                  , s = e.excludes
                  , l = e.name
                  , u = e.query
                  , d = e.revealHidden
                  , f = e.type;
                t = (0,
                c.default)(Number(t)) ? 36 : Number(t),
                i = (0,
                c.default)(Number(i)) ? 1 : Number(i),
                n = n || this.getSearchFields();
                var p = {
                    limit: t,
                    page: i,
                    fields: n,
                    sort: a,
                    revealHidden: d,
                    excludes: s
                };
                if (l) {
                    var h = {
                        search: "category",
                        category: "category",
                        subcategory: "subCategory",
                        subsubcategory: "subSubCategory"
                    };
                    p[f ? h[f] : "category"] = l
                }
                return "search" === f && u && (p.keywords = u),
                r && (p.contentType = r),
                o && (p.newContent = !0),
                p
            }
        }, {
            key: "fetchArticleCollectionResolver",
            value: function(e, t, i, a, n) {
                return function(e) {
                    t("SET_ARTICLE_COLLECTION", {
                        data: e,
                        key: i,
                        hasPagination: a,
                        concat: n
                    })
                }
            }
        }, {
            key: "fetchArticleCollectionError",
            value: function(e, t, i) {
                return function(a) {
                    if ("search" === i) {
                        return e("FETCH_ARTICLE_COLLECTION", {
                            limit: 12
                        })
                    }
                    500 === (0,
                    s.default)(a, "body.code", 500) && (t("SET_SHOW_500", !0),
                    t("SET_STATUS", {
                        status: 500
                    }))
                }
            }
        }, {
            key: "getSearchFields",
            value: function() {
                return ["view.id", "view.title", "view.slug", "view.summary", "view.writer", "view.image.url", "view.image.alttext", "view.category.slug", "view.category.name", "view.subcategory.slug", "view.subcategory.name", "view.subsubcategory.slug", "view.subsubcategory.name"].join(",")
            }
        }]),
        e
    }();
    t.default = u
}
, , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , l = i(2)
      , c = a(l)
      , u = i(146)
      , d = a(u)
      , f = function() {
        function e() {
            r(this, e)
        }
        return s(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_ARTICLE_COLLECTION: this.SET_ARTICLE_COLLECTION()
                }
            }
        }, {
            key: "SET_ARTICLE",
            value: function(e, t) {
                var i = t.data;
                e.article = i
            }
        }, {
            key: "SET_ARTICLE_COLLECTION",
            value: function() {
                return function(e, t) {
                    var i = t.data
                      , a = t.key
                      , r = t.hasPagination;
                    if (t.concat) {
                        var s = e.articles[a].concat((0,
                        c.default)(i, "results", []));
                        e.articles = o({}, e.articles, n({}, a, s))
                    } else
                        e.articles = {},
                        e.articles[a] = (0,
                        c.default)(i, "results", []);
                    r && (e.meta = (0,
                    d.default)(i, "results", {}),
                    e.page = (0,
                    c.default)(i, "meta.page", 1))
                }
            }
        }]),
        e
    }();
    t.default = f
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(678)
      , r = a(n)
      , o = i(679)
      , s = a(o)
      , l = i(680)
      , c = a(l)
      , u = {
        isMobile: !1
    }
      , d = new r.default
      , f = new s.default
      , p = new c.default;
    t.default = {
        actions: d.getActions(),
        mutations: f.getMutations(),
        getters: p.getGetters(),
        state: u
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    IS_MOBILE: this.IS_MOBILE()
                }
            }
        }, {
            key: "IS_MOBILE",
            value: function() {
                return function(e, t) {
                    var i = e.commit;
                    e.getters;
                    i("SET_IS_MOBILE", t)
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_IS_MOBILE: this.SET_IS_MOBILE()
                }
            }
        }, {
            key: "SET_IS_MOBILE",
            value: function() {
                return function(e, t) {
                    e.isMobile = t
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getGetters",
            value: function() {
                return {
                    getIsMobile: this.getIsMobile()
                }
            }
        }, {
            key: "getIsMobile",
            value: function() {
                return function(e) {
                    return e.isMobile
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(682)
      , r = a(n)
      , o = i(683)
      , s = a(o)
      , l = {
        hero: {}
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    FETCH_HOME_HERO: this.FETCH_HOME_HERO()
                }
            }
        }, {
            key: "FETCH_HOME_HERO",
            value: function() {
                var e = this;
                return function(t) {
                    var i = t.commit;
                    return t.getters.SDK.getHero().then(e.fetchHomeHeroResolver(i)).catch(e.fetchHomeHeroError(i))
                }
            }
        }, {
            key: "fetchHomeHeroResolver",
            value: function(e) {
                return function(t) {
                    e("SET_HOME_HERO", {
                        data: t
                    })
                }
            }
        }, {
            key: "fetchHomeHeroError",
            value: function(e, t) {
                return function(e) {}
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_HOME_HERO: this.SET_HOME_HERO()
                }
            }
        }, {
            key: "SET_HOME_HERO",
            value: function() {
                return function(e, t) {
                    var i = t.data;
                    e.hero = (0,
                    o.default)(i, "data[0]", {})
                }
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(685)
      , r = a(n)
      , o = i(686)
      , s = a(o)
      , l = {
        hubs: {}
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    FETCH_HUB: this.FETCH_HUB(),
                    FETCH_HUB_DATA: this.FETCH_HUB_DATA()
                }
            }
        }, {
            key: "FETCH_HUB",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug;
                    return new Promise(e.getFetchHubResolver(a, n, r))
                }
            }
        }, {
            key: "FETCH_HUB_DATA",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = i.slug
                      , s = (0,
                    o.default)(n, "SDK", {})
                      , l = r.substring(1);
                    return s.getHub({
                        slug: l
                    }).then(e.fetchHubDataSuccessResolver(a, l)).catch(e.fetchHubDataErrorResolver(a, r))
                }
            }
        }, {
            key: "getFetchHubResolver",
            value: function(e, t, i) {
                var a = this;
                return function(n, r) {
                    a.fetchHubPromise(n, r, e, t, i)
                }
            }
        }, {
            key: "fetchHubPromise",
            value: function(e, t, i, a, n) {
                var r = (0,
                o.default)(a, "SDK", {})
                  , s = n.replace(new RegExp(/^\/|\/$/,"g"), "");
                return r.getHub({
                    slug: s
                }).then(this.fetchHubSuccessResolver(e, i, s)).catch(this.fetchHubErrorResolver(t, i, n))
            }
        }, {
            key: "fetchHubSuccessResolver",
            value: function(e, t, i) {
                var a = this;
                return function(n) {
                    return n.sections = a.formatHubSections((0,
                    o.default)(n, "sections", []), (0,
                    o.default)(n, "articles", {})),
                    t("SET_HUB", {
                        data: n,
                        name: i
                    }),
                    e(n)
                }
            }
        }, {
            key: "fetchHubErrorResolver",
            value: function(e, t, i) {
                var a = this;
                return function(n) {
                    return t("NOT_FOUND", 404),
                    a.notFound(e, i)
                }
            }
        }, {
            key: "notFound",
            value: function(e, t) {
                return this.reject(e, "Hub response was 404: " + t, "404", t)
            }
        }, {
            key: "reject",
            value: function(e, t, i, a) {
                return e({
                    message: t,
                    code: i,
                    slug: a
                })
            }
        }, {
            key: "fetchHubDataSuccessResolver",
            value: function(e, t) {
                var i = this;
                return function(a) {
                    a.sections = i.formatHubSections((0,
                    o.default)(a, "sections", []), (0,
                    o.default)(a, "articles", {})),
                    e("SET_HUB", {
                        data: a,
                        name: t
                    })
                }
            }
        }, {
            key: "fetchHubDataErrorResolver",
            value: function(e) {
                return function(e) {}
            }
        }, {
            key: "formatHubSections",
            value: function(e, t) {
                var i = []
                  , a = ""
                  , n = 0;
                for (var r in e) {
                    var s = e[r]
                      , l = (0,
                    o.default)(s, "type", "");
                    if ("article" === l) {
                        var c = (0,
                        o.default)(s, "value", "");
                        l !== a ? (n = i.length,
                        i[n] = {
                            type: "articles",
                            value: [(0,
                            o.default)(t, c, {})]
                        }) : i[n].value.push((0,
                        o.default)(t, c, {}))
                    } else
                        i.push(s);
                    a = l
                }
                return i
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    SET_HUB: this.SET_HUB()
                }
            }
        }, {
            key: "SET_HUB",
            value: function() {
                return function(e, t) {
                    var i = t.data
                      , a = t.name;
                    e.hubs[a] = i
                }
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(688)
      , r = a(n)
      , o = i(689)
      , s = a(o)
      , l = {
        subscribed: !1,
        error: "",
        showEmailCapture: !1
    }
      , c = new r.default
      , u = new s.default;
    t.default = {
        actions: c.getActions(),
        mutations: u.getMutations(),
        state: l
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(2)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getActions",
            value: function() {
                return {
                    SUBSCRIBE: this.SUBSCRIBE()
                }
            }
        }, {
            key: "SUBSCRIBE",
            value: function() {
                var e = this;
                return function(t, i) {
                    var a = t.commit
                      , n = t.getters
                      , r = (t.state,
                    i.email)
                      , s = i.subscription_list_id;
                    return a("CLEAR_SUBSCRIPTION"),
                    (0,
                    o.default)(n, "SDK", {}).subscribe({
                        body: {
                            email: r,
                            subscription_list_id: s,
                            subscribe: !0
                        }
                    }).then(e.getOnSubscribeSuccess(a)).catch(e.getOnSubscribeError(a))
                }
            }
        }, {
            key: "getOnSubscribeSuccess",
            value: function(e) {
                return function(t) {
                    return "Subscribed" === (0,
                    o.default)(t, "status") ? e("SUBSCRIBED") : (0,
                    o.default)(t, "email[0]") && e("SUBSCRIPTION_ERROR", {
                        message: (0,
                        o.default)(t, "email[0]")
                    }),
                    t
                }
            }
        }, {
            key: "getOnSubscribeError",
            value: function(e) {
                return function(t) {
                    e("SUBSCRIPTION_ERROR", {
                        message: "api error"
                    })
                }
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = function() {
        function e() {
            a(this, e)
        }
        return n(e, [{
            key: "getMutations",
            value: function() {
                return {
                    CLEAR_SUBSCRIPTION: this.CLEAR_SUBSCRIPTION,
                    SUBSCRIBED: this.SUBSCRIBED,
                    SUBSCRIPTION_ERROR: this.SUBSCRIPTION_ERROR,
                    SET_EMAIL_CAPTURE: this.SET_EMAIL_CAPTURE
                }
            }
        }, {
            key: "CLEAR_SUBSCRIPTION",
            value: function(e) {
                e.subscribed = !1,
                e.error = ""
            }
        }, {
            key: "SUBSCRIBED",
            value: function(e) {
                e.subscribed = !0
            }
        }, {
            key: "SUBSCRIPTION_ERROR",
            value: function(e, t) {
                var i = t.message;
                e.error = i
            }
        }, {
            key: "SET_EMAIL_CAPTURE",
            value: function(e, t) {
                e.showEmailCapture = t
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n() {
        var e = new u.default({
            mode: "history",
            scrollBehavior: function(e, t, i) {
                if (i)
                    return i;
                var a = {};
                return e.hash && (a.selector = e.hash),
                e.matched.some(function(e) {
                    return e.meta.scrollToTop
                }) && (a.x = 0,
                a.y = 0),
                a
            },
            routes: [{
                path: "/",
                component: P.default,
                name: "home"
            }, {
                path: "/articles/:articleSlug/",
                component: E.default,
                name: "article-legacy"
            }, {
                path: "/:articleId([0-9]+)/:articleSlug/",
                component: E.default,
                name: "article-modern"
            }, {
                path: "/videos/:articleSlug/",
                component: E.default,
                name: "article-videos"
            }, {
                path: "/explore/:articleSlug/",
                component: A.default,
                name: "article-explore"
            }, {
                path: "/:categorySlug(" + f.default.getCategorySlugsByType("category") + ")",
                component: I.default,
                name: "category"
            }, {
                path: "/:subcategorySlug(" + f.default.getCategorySlugsByType("subcategory") + ")",
                component: I.default,
                name: "subcategory"
            }, {
                path: "/search",
                component: x.default,
                name: "search"
            }, {
                path: "/subscribe",
                component: D.default,
                name: "subscribe"
            }, {
                path: "/about/",
                component: C.default,
                name: "about"
            }, {
                path: "/terms-of-use/",
                component: y.default,
                name: "terms-of-use"
            }, {
                path: "/privacy-policy/",
                component: h.default,
                name: "privacy-policy"
            }, {
                path: "/copyright-policy/",
                component: g.default,
                name: "copyright-policy"
            }, {
                path: "/userdata-request",
                component: _.default,
                name: "userdata-request"
            }, {
                path: "*",
                component: R.default,
                name: "hubs"
            }]
        });
        return e.onError(function(e) {
            "undefined" != typeof window && (0,
            o.default)(window, "ineum", console.error)("reportError", new Error("Router Error: " + e))
        }),
        e.beforeEach(function(e, t, i) {
            "undefined" != typeof window && (0,
            o.default)(window, "ineum", function() {})("startSpaPageTransition"),
            i()
        }),
        e.afterEach(function(e, t) {
            "undefined" != typeof window && (0,
            o.default)(window, "ineum", function() {})("endSpaPageTransition", {
                status: "completed"
            })
        }),
        e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createRouter = n;
    var r = i(2)
      , o = a(r)
      , s = i(70)
      , l = a(s)
      , c = i(691)
      , u = a(c)
      , d = i(225)
      , f = a(d)
      , p = i(692)
      , h = a(p)
      , m = i(695)
      , g = a(m)
      , v = i(698)
      , y = a(v)
      , b = i(701)
      , _ = a(b)
      , w = i(723)
      , C = a(w)
      , S = i(726)
      , E = a(S)
      , T = i(841)
      , A = a(T)
      , k = i(847)
      , I = a(k)
      , O = i(857)
      , P = a(O)
      , M = i(860)
      , R = a(M)
      , L = i(903)
      , x = a(L)
      , N = i(909)
      , D = a(N);
    l.default.use(u.default)
}
, , function(e, t, i) {
    "use strict";
    function a(e) {
        i(693)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(694)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-privacy-policy view-corporate"
        }, [i("div", {
            staticClass: "container container--corporate"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [i("h1", {
            staticClass: "corporate-heading"
        }, [e._v("OUR PRIVACY POLICY")]), e._m(0), e._m(1), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("1. Our Privacy Principles")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We are committed to recognizing and respecting your privacy rights by keeping you informed and processing and protecting your personal data in compliance with applicable law.")]), e._m(2), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("2. Information that We Collect from You")]), e._m(3), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may collect and process some or all of the following information you make available to us if you register, download or use the Services, such as your:")]), e._m(4), e._m(5), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may also offer you the option to create a user profile that may be visible to other users of the Services. If you are a registered user you may also be able to adjust your account settings through your user account. We note that, even if you adjust your settings so that your user profile remains private, we will still be able to access and view the information you provide as part of your user profile.")]), e._m(6), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you post information on public areas of the Services, that data may be collected and used by us, other users of the Services, and the public generally, such as reviews, comments, and user content. We strongly recommend that you do not post any information through the Services that allows strangers to identify or locate you or that you otherwise do not want to share with the public.")]), e._m(7), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("In addition to the information you provide to us, the Services may collect and process additional data automatically, this data may include your:")]), e._m(8), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("3. How We Use Your Information")]), e._m(9), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We and our service providers may use the data you provide or that is collected through the Services to operate and improve the Services, our other sites, applications, products and services, to contact you from time to time to provide you with important information and notices relating to the Services, and to communicate with you about marketing promotions.")]), e._m(10), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("The Services may be supported through advertising, and we may work with advertisers and advertising networks to provide advertising through the Services. We may provide these advertisers and advertising networks with the ability to collect data about how you interact with the Services and, if applicable, your mobile device. This data may include the unique device or advertising identifier associated with your device and your precise location data, in order to help analyze and serve targeted advertising on the Services and elsewhere (including third-party sites and applications). In addition, the Services may include third-party content and links to other third-party websites. These advertisers, advertising networks, and third parties may use cookies, pixels, and web beacons to track the actions of users online over time and across different websites or platforms in order to deliver targeted electronic advertisements to an individual user.")]), e._m(11), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v('If you access the Services through a browser, your browser may allow you to adjust your browser settings so that "Do Not Track" requests are sent to the websites that you visit. However, we will not disable tracking technology that may be active on the Services in response to any Do Not Track requests that we receive from your browser. You can change your privacy preferences regarding the use of cookies and other similar technologies through your browser. You may set your browser to accept all cookies, block certain cookies, require our consent before a cookie is placed in your browser, or block all cookies. Blocking all cookies will affect your online experience and may prevent you from enjoying the full features offered through the Services.')]), e._m(12), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may also work with third party analytics companies to help us understand how the Services are being used, such as data collection, reporting, ad response measurement, website and mobile application analytics, and to assist with delivery of relevant marketing messages and advertisements.")]), e._m(13), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We encourage you to review your device and Services settings to ensure they are consistent with your preferences, including with respect to the collection and use of information. You may be able to stop further collection of certain data by the Services by updating your applicable device settings, or you may uninstall the Services. In addition, you may choose not to share your location details by adjusting your mobile device's location services settings. For instructions on changing the relevant settings, please contact your service provider/carrier or device manufacturer.")]), e._m(14), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you make a purchase through the Services, you may be able to pay using a third-party payment service, such as Stripe, PayPal, Apple Pay, Amazon Pay or other third-party payment services. All information collected by these third-party payment services for purposes of processing your payments is not available to us, unless you have otherwise provided this information to us in connection with your use of the Services. Information collected from you by these third-party payment services is governed by the applicable third-party payment service's privacy policy. You should review the applicable privacy policy prior to submitting any information to the applicable third-party payment service.")]), e._m(15), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("From time to time, we may host a promotion, sweepstakes, or content on the Services. You may be asked to provide personal information or permit the transfer of your personal information to a third party in connection with such promotion, sweepstakes or content. The parties who privacy policy applies will be disclosed at point of collection or transfer and you will have a choice of whether or not you wish to permit such transfer or collection of information to a third party.")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you wish to unsubscribe from receiving marketing communications from us by email, please follow the instructions contained in each email you receive from us describing how you can unsubscribe from receiving further marketing communications from us. If you are a registered user you may also be able to adjust your email settings by logging in to your account and adjusting your account settings.")]), e._m(16), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v('The Services may use social networking or "share functionality" or may contain links to third-party social media sites or applications that are not owned or controlled by us. We also may allow you to use social media sites or applications to leverage your existing social media site or application accounts to access features of the Services. Your use of these features may result in the collection or sharing of information about you by these sites or applications, depending on the feature.')]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We have no control over, and assume no responsibility for, any share functionality or the content, privacy policies, or practices of any third-party site or application. We encourage you to review the privacy policies and settings on the social media sites or applications with which you interact to make sure you understand the information that may be collected, used, and shared by those sites. You are subject to the policies of those third parties when and where applicable.")]), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("4. How We Share Your Information with Third Parties")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may share the information you provide or that we collect in some circumstances as follows:")]), e._m(17), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may share your information with advertisers, third-party advertising networks and analytics companies who may use it to deliver targeted advertisements to you on the Services or third-party websites or advertisers. Similarly, these advertisers may share information with us about you that they have independently gathered or acquired. We may also share encrypted versions of information we have collected in order to enable our advertising partners to perform data analysis or for advertising-related use.")]), e._m(18), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may share your information with members of the Leaf Group corporate family in order to provide joint content and services (like registration, transactions and customer support), or to improve your experience with the Services, products and other services.")]), e._m(19), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you are directed to the Services through a third party, we may share certain information back with that third party, which may include information such as name, email and value of purchase depending on the type of relationship or Services utilized.")]), e._m(20), e._m(21), e._m(22), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may share your information with our service providers who work on our behalf. For example, these service providers may handle payment or credit card processing, data management, customer data pooling or aggregating, feature administration, email distribution, market research, information analysis, and promotions management. These service providers will only have access to the information needed to perform these limited functions on our behalf.")]), e._m(23), e._m(24), e._m(25), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("In the event of a merger, acquisition, bankruptcy or other sale of all or a portion of our assets or any business, any user information owned or controlled by us may be one of the assets transferred to third parties in such transaction or event. We reserve the right, as part of this type of transaction or event, to transfer or assign your information and other information we have collected from users of the Services to third parties. Other than to the extent ordered by a bankruptcy or other court, the use and disclosure of all transferred user information will be subject to this Privacy Policy. However, any information you submit or that is collected after this type of transfer may be subject to a new privacy policy adopted by the successor entity or acquirer, as applicable.")]), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("5. Your Access and Control of Your Information")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We acknowledge your right to access and control your personal data.")]), e._m(26), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("To request access to or correction of your personal data, you may use our online form located at "), i("a", {
            attrs: {
                href: e.siteDomain + "/userdata-request"
            }
        }, [e._v(e._s(e.siteDomain) + "/userdata-request")]), e._v(", or send an e-mail to "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v(" or a letter to:")]), e._m(27), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("Please include your registration information you provided through the Services. We may ask you to provide additional information for identity verification purposes, or to verify that you are in possession of an applicable email account.")]), e._m(28), e._m(29), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("Data portability is the ability to obtain some of your information in a format you can move from one service provider to another. Depending on the context, this applies to some of your information, but not to all of your information. Should you request it, we will provide you with an electronic file of your basic account information and the information under your sole control.")]), e._m(30), e._m(31), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("6. Transfer of Data Outside Your Country of Residence")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you are located outside of the United States and you choose to use the Services or provide your information to us, your data may be transferred to, processed and maintained on servers, databases or cloud storage facilities located in the United States. Your use of the Services represents your consent and agreement to these practices. If you do not want your data transferred to or processed or maintained in the United States, you should not use the Services.")]), e._m(32), e._m(33), e._m(34), e._m(35), e._m(36), e._m(37), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("Please note that if your complaint is not resolved through these channels, under limited circumstances, a binding arbitration option may be available before a Privacy Shield Panel.")]), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("7. The Privacy of Children")]), e._m(38), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("8. Security Measures")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We provide industry-standard physical, electronic, and procedural safeguards to protect personal data we process and maintain. For example, we take reasonable measures to limit access to this data to authorized employees and contractors who need to know that information in order to operate, develop or improve our Services. Please be aware that, although we endeavor to provide reasonable security for data we process and maintain, no security system can prevent all potential security breaches. As a result, we cannot guarantee or warrant the security of any information you transmit on or through the Services and you do so at your own risk.")]), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("9. Updates to this Privacy Policy")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We will notify you of material changes to this Privacy Policy by at least thirty (30) days before the effective date of the changes. If you do not agree to such changes following such notice, you should discontinue your use of the Services prior to the time the modified privacy policy takes effect. If you continue using the Services after the modified privacy policy takes effect, you will be bound by the modified privacy policy.")]), i("h2", {
            staticClass: "corporate-subheading"
        }, [e._v("10. Contact Us")]), e._m(39), e._m(40), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We will do our best to respond to you in a timely and professional manner to answer your questions and resolve your concerns.")])])])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Last Updated:")]), e._v(" April 25, 2018")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v('This privacy policy ("'), i("span", {
            staticClass: "bold"
        }, [e._v("Privacy Policy")]), e._v('") describes how information and data is collected from you when you use this online website, mobile website, application, digital service, or any related products, services, sites, features or functionality (each a "'), i("span", {
            staticClass: "bold"
        }, [e._v("Service")]), e._v('", collectively the "'), i("span", {
            staticClass: "bold"
        }, [e._v("Services")]), e._v('") and how Leaf Group Ltd., including its subsidiaries/affiliates Society 6, LLC and Saatchi Online, Inc. ("'), i("span", {
            staticClass: "bold"
        }, [e._v("Leaf Group")]), e._v('", "'), i("span", {
            staticClass: "bold"
        }, [e._v("we")]), e._v('", "'), i("span", {
            staticClass: "bold"
        }, [e._v("us")]), e._v('", or "'), i("span", {
            staticClass: "bold"
        }, [e._v("our")]), e._v('"), uses, shares and manages your information and data. By using any of the Services, you consent to the collection, use, processing, and sharing of your information as described in this Privacy Policy.')])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v('Effective May 25th, 2018, if you are from the European Economic Area ("'), i("span", {
            staticClass: "bold"
        }, [e._v("EEA")]), e._v('"), our processing of your personal data will comply with the Regulations (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation ("'), i("span", {
            staticClass: "bold"
        }, [e._v("GDPR")]), e._v('").')])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Account Data You Directly and Voluntarily Provide to Us")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ul", [i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Name")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Email Address")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Mailing Address")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Phone Number")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Interests")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("User Name")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Password")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Other Registration Information")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Customer Support or Technical Information you provide when you contact us with questions about your use of the Services")])])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("User Profile Data")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Public Data You Post through the Services")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Usage Data We Automatically Collect from You")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ul", [i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Device Registration Data ")]), e._v("(for example, the type of mobile device you use, your mobile device's unique device or advertising ID, IP address, operating system and browser type),")]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Device Settings")]), e._v(" (for example, your language preference)")]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Mobile Carrier")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Information about how you use the Services")]), e._v(" (for example, how many times you use the Services each day)")]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Requested and Referring URLs")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Location Data collected through your Device")]), e._v(" (including, for example, precise location data such as GPS and WiFi information)")])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Improving the Services, Providing Support, and Communicating With You")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Advertising and Third Party Content and Links")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("For information about how tracking works for online advertising purposes you can visit "), i("a", {
            attrs: {
                href: "http://www.aboutads.info/choices"
            }
        }, [e._v("http://www.aboutads.info/choices")]), e._v(" or "), i("a", {
            attrs: {
                href: "http://www.aboutads.info/appchoices"
            }
        }, [e._v("http:///www.aboutads.info/appchoices")]), e._v(". We do not have access to or control over cookies, pixels or web beacons that third-party websites or partners may use. We are not responsible for the privacy practices or the content of these third-party websites. You are encouraged to review the privacy policies of the different websites that you visit.")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Analytics Services")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v('We may use Google Analytics, an analytics service provided by Google or other third party analytics services providers ("'), i("span", {
            staticClass: "bold"
        }, [e._v("Analytics Services")]), e._v('") to collect information about your use of the Services. These Analytics Services may collect information about the content you view and your system information and geographic information. The information generated by the Analytics Services about your use of the Services will be transmitted to and stored by the Analytics Services. The information collected by the Analytics Services allows us to analyze your use of the Services.')])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Purchases and Payment Processors")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Promotions, Sweepstakes, and Contests")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Social Media and Sharing")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("With Advertisers")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("With Our Company Affiliates")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("With Our Partner Programs")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("For Marketing Campaigns")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("From time to time we may disclose certain information (name, mailing address and non-sensitive transactional information such as your purchase history, amounts paid and products ordered) to marketing companies for trade or rental purposes. If you prefer to opt-out of the use of your personal information by marketing companies for trade or rental purposes, please let us know at "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v(".")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("With Our Service Providers")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("As Required By Law or to Protect Rights and to Comply with Our Policies ")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("To the extent permitted by law, we will disclose your information to government authorities or third parties, including national security or law enforcement agencies, if required to do so by law, or if requested in response to a subpoena or court order, we believe in our sole and absolute discretion that disclosure is reasonably necessary to protect against fraud, to protect the property or other rights of us or other users, third parties or the public at large, or we believe that you have abused the Services by using it to attack other systems or to gain unauthorized access to any other system, to engage in spamming or otherwise to violate applicable laws or in violation of our "), i("a", {
            attrs: {
                href: "/terms-of-use"
            }
        }, [e._v("Terms of Use")]), e._v(". You should be aware that, following disclosure to any third party, your information may be accessible by others to the extent permitted or required by applicable law.")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Business Transfers or Bankruptcy")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Accessing, Correcting or Deleting Your Information")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Leaf Group Ltd.")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("Attn: Legal Department")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("1655 26"), i("sup", [e._v("th")]), e._v(" Street")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("Santa Monica, CA 90404")]), i("br")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you'd like us to delete information that you have provided through the Services, please contact us at "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v(" and we will respond in a reasonable time. Please note that some or all of the information you provided may be required in order for the Services to function properly or may be automatically retained in backup storage or records retention archival storage.")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Portability of Your Personal Data")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("California Residents")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you are a California resident under the age of 18 and are a registered user of the Services, you may request that we remove content or information about you that you posted on the Services by: (a) submitting a request in writing to "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v("; and (b) clearly identifying the content or information you wish to have removed and providing sufficient information to allow us to locate the content or information to be removed. However, please note that we are not required to, and may not be able to, erase or otherwise eliminate content or information if: (i) other state or federal laws require us or a third party to maintain the content or information; (ii) the content or information was posted, stored, or republished by another user; (iii) the content or information is anonymized so that you cannot be individually identified; (iv) you do not follow the instructions posted in this Privacy Policy on how to request removal of your content or information; or (v) you have received compensation or other consideration for providing the content. Further, nothing in this provision shall be construed to limit the authority of a law enforcement agency to obtain the applicable content or information.")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Privacy Shield")])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We comply with the "), i("span", {
            staticClass: "bold"
        }, [e._v("EU-US Privacy Shield Framework")]), e._v(" and the "), i("span", {
            staticClass: "bold"
        }, [e._v("Swiss-US Privacy Shield Framework")]), e._v(" as set forth by the US Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union and Switzerland to the United States, respectively. We have certified to the Department of Commerce that we adhere to the Privacy Shield Principles of:")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ul", [i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Notice")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Choice")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Accountability for Onward Transfer")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Security")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Data Integrity and Purpose Limitation")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Access")])]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v("Recourse, Enforcement and Liability")])])])])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If there is any conflict between the policies in this Privacy Policy and the Privacy Shield Principles, the Privacy Shield Principles will govern. To learn more about the Privacy Shield program, and to view our certification page, please visit "), i("a", {
            attrs: {
                href: "https://www.privacyshield.gov/"
            }
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("https://www.privacyshield.gov/")])]), e._v(".")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("In compliance with the EU-US and Swiss-US Privacy Shield Principles, we are committed to resolving complaints about your privacy and our collection or use of your personal information. European Union or Swiss individuals with inquiries or complaints regarding this Privacy Policy should first contact us at"), i("span", {
            staticClass: "bold"
        }, [e._v(" legal@leafgroup.com")]), e._v(".")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("We have further committed to refer unresolved privacy complaints under the EU-US and Swiss-US Privacy Shield Principles to an independent dispute resolution mechanism, the "), i("span", {
            staticClass: "bold"
        }, [e._v("BBB EU PRIVACY SHIELD")]), e._v(", a non-profit alternative dispute resolution provider located in the United States and operated by the Council of Better Business Bureaus. If you do not receive timely acknowledgement of your complaint, or if your complaint is not satisfactorily addressed, please visit "), i("a", {
            attrs: {
                href: "http://www.bbb.org/EU-privacy-shield/for-eu-consumers/"
            }
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("http://www.bbb.org/EU-privacy-shield/for-eu-consumers/")])]), e._v(" for more information and to file a complaint.")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("The Services are not intended for children under age 16. We do not knowingly collect or distribute personal information from or about children under the age of 16. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v(".")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you have questions about this Privacy Policy, you may contact us at "), i("span", {
            staticClass: "bold"
        }, [e._v("legal@leafgroup.com")]), e._v(" or send a letter to:")])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Leaf Group Ltd.")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("Attn: Legal Department")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("1655 26"), i("sup", [e._v("th")]), e._v(" Street")]), i("br"), i("span", {
            staticClass: "bold"
        }, [e._v("Santa Monica, CA 90404")]), i("br")])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "view-privacy-policy",
        metaInfo: function() {
            var e = (0,
            n.default)(this, "$store.state.config", {})
              , t = (0,
            n.default)(e, "site.name", "")
              , i = (0,
            n.default)(e, "site.domain", "")
              , a = "Information on " + t + "'s privacy policy."
              , r = i + "/privacy-policy"
              , o = "Privacy Policy | " + t;
            return {
                title: "Privacy Policy",
                meta: [{
                    name: "twitter:title",
                    content: o
                }, {
                    name: "twitter:description",
                    content: a
                }, {
                    name: "description",
                    content: a
                }, {
                    property: "og:description",
                    content: a
                }, {
                    property: "og:url",
                    content: r
                }, {
                    property: "og:title",
                    content: o
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: r
                }]
            }
        },
        computed: {
            siteDomain: function() {
                return (0,
                n.default)(this, "$store.state.config.site.domain", "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(696)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(697)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-copyright-policy view-corporate"
        }, [i("div", {
            staticClass: "container container--corporate"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [i("div", [e._v("EFFECTIVE DATE: NOVEMBER 9, 2016")]), i("br"), i("h1", {
            staticClass: "corporate-heading"
        }, [e._v("COPYRIGHT POLICY")]), i("h2", {
            staticClass: "corporate-paragraph"
        }, [e._v("Leaf Group Copyright Policy")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold"
        }, [e._v("Reporting Claims of Copyright Infringement")])]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v('We take claims of copyright infringement seriously. We will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from this Site (the "'), i("span", {
            staticClass: "bold"
        }, [e._v("Site")]), e._v('") infringe your copyright, you may request removal of those materials from the Site by submitting written notification to our Copyright Agent (designated below). In accordance with the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act ( '), i("em", [e._v("17 U.S.C. § 512 )")]), e._v(' ("'), i("span", {
            staticClass: "bold"
        }, [e._v("DMCA")]), e._v('"), the written notice (the "'), i("span", {
            staticClass: "bold"
        }, [e._v("DMCA Notice")]), e._v('") must include substantially the following:')]), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ul", [i("li", [e._v("Your physical or electronic signature.")]), i("li", [e._v("Identification of the copyrighted work you believe to have been infringed or, if the claim involves multiple works on the Site, a representative list of such works.")]), i("li", [e._v("Identification of the material you believe to be infringing in a sufficiently precise manner to allow us to locate that material.")]), i("li", [e._v("Adequate information by which we can contact you (including your name, postal address, telephone number and, if available, e-mail address).")]), i("li", [e._v("A statement that you have a good faith belief that use of the copyrighted material is not authorized by the copyright owner, its agent or the law.")]), i("li", [e._v("A statement that the information in the written notice is accurate.")]), i("li", [e._v("A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.")])])]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("Our designated Copyright Agent to receive DMCA Notices is:")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("\n        LEAF GROUP LTD."), i("br"), e._v("\n        Attn: Copyright Agent"), i("br"), e._v("\n        1655 26"), i("sup", [e._v("th")]), e._v(" Street"), i("br"), e._v("\n        Santa Monica, CA 90404"), i("br"), e._v("\n        ( 310 ) 917-6400 (phone)"), i("br"), e._v("\n        ( 310 ) 564-7761 (facsimile)"), i("br"), e._v("\n        copyright@leafgroup.com\n      ")]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("If you fail to comply with all of the requirements of Section 512(c)( 3 ) of the DMCA, your DMCA Notice may not be effective.")]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("Please be aware that if you knowingly materially misrepresent that material or activity on the Site is infringing your copyright, you may be held liable for damages (including costs and attorneys' fees) under Section 512(f) of the DMCA.")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold uppercase"
        }, [e._v("Counter-Notification Procedures")])]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v('If you believe that material you posted on the Site was removed or access to it was disabled by mistake or misidentification, you may file a counter-notification with us (a "'), i("span", {
            staticClass: "bold"
        }, [e._v("Counter-Notice")]), e._v('") by submitting written notification to our copyright agent (identified below). Pursuant to the DMCA, the Counter-Notice must include substantially the following:')]), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ul", [i("li", [e._v("Your physical or electronic signature.")]), i("li", [e._v("An identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access disabled.")]), i("li", [e._v("Adequate information by which we can contact you (including your name, postal address, telephone number and, if available, e-mail address).")]), i("li", [e._v("A statement under penalty of perjury by you that you have a good faith belief that the material identified above was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled.")]), i("li", [e._v("A statement that you will consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or if you reside outside the United States for any judicial district in which the Site may be found) and that you will accept service from the person (or an agent of that person) who provided the Site with the complaint at issue.")])])]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("Completed Counter-Notices should be sent to:")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [e._v("\n        LEAF GROUP LTD."), i("br"), e._v("\n        Attn: Copyright Agent"), i("br"), e._v("\n        1655 26"), i("sup", [e._v("th")]), e._v(" Street"), i("br"), e._v("\n        Santa Monica, CA 90404"), i("br"), e._v("\n        ( 310 ) 917-6400 (phone)"), i("br"), e._v("\n        ( 310 ) 564-7761 (facsimile)"), i("br"), e._v("\n        copyright@leafgroup.com\n      ")]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("The DMCA allows us to restore the removed content if the party filing the original DMCA Notice does not file a court action against you within ten business days of receiving the copy of your Counter-Notice.")]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("Please be aware that if you knowingly materially misrepresent that material or activity on the Site was removed or disabled by mistake or misidentification, you may be held liable for damages (including costs and attorneys' fees) under Section 512(f) of the DMCA.")]), i("p", {
            staticClass: "corporate-paragraph"
        }, [i("span", {
            staticClass: "bold uppercase"
        }, [e._v("Repeat Infringers")])]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("We implement a policy where, in appropriate circumstances, we will disable and/or terminate the accounts of users who are repeat infringers.")])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "view-copyright-policy",
        metaInfo: function() {
            var e = (0,
            n.default)(this, "$store.state.config", {})
              , t = (0,
            n.default)(e, "site.name", "")
              , i = (0,
            n.default)(e, "site.domain", "")
              , a = "Information on " + t + "'s copyright policy."
              , r = i + "/copyright-policy"
              , o = "Copyright Policy | " + t;
            return {
                title: "Copyright Policy",
                meta: [{
                    name: "twitter:title",
                    content: o
                }, {
                    name: "twitter:description",
                    content: a
                }, {
                    name: "description",
                    content: a
                }, {
                    property: "og:description",
                    content: a
                }, {
                    property: "og:url",
                    content: r
                }, {
                    property: "og:title",
                    content: o
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: r
                }]
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(699)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(700)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-terms-of-use view-corporate"
        }, [i("div", {
            staticClass: "container container--corporate"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [i("div", [e._v("EFFECTIVE DATE: NOVEMBER 9, 2016")]), i("br"), i("h1", {
            staticClass: "corporate-heading"
        }, [e._v("TERMS OF USE")]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("Welcome to our website, " + e._s(e.siteDomain) + ' (the "Site"). Please review these Terms of Use, which constitute a binding license agreement ("Agreement") between you and Leaf Group Ltd. ("Leaf Group" or "we" or "us") and conditions your use of this Site. We have tried to avoid unnecessary legal verbiage and hope that you understand we are simply trying to protect our rights in order to provide you with access to the content available on this Site. If you do not wish to be bound by this Agreement after you have read it, please leave the Site. If you remain at this Site or return thereafter, you agree to be bound by this Agreement.')]), i("p", {
            staticClass: "corporate-paragraph indent"
        }, [e._v("The Site is a popular place to find information and instructions on a variety of things. You and other users of our Site have access to thousands of articles, video files, and applications that are intended to provide information for general research, informational, and entertainment purposes only. Much of the Content (as defined herein) and the ratings, reviews, or comments are contributed by people from around the world, and represent a diversity of perspectives, experiences, and approaches that may be of interest to you.")]), e._m(0)])])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Responsible Conduct")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("You agree to act responsibly at this Site and to treat other visitors with respect.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Limited License")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v('Original material that we post on this Site is protected by intellectual property laws. You are hereby granted a non-exclusive license to use the videos, articles, and other content on the Site ("Content"), but only while accessing this Site. You are also granted a limited license to print copies of any Content posted at this Site, but only for your personal use. Except as expressly provided above, all rights are reserved. Among other things, except to the extent required for the limited purpose of reviewing material on our Site, electronic reproduction, adaptation, distribution, performance or display of the Content is prohibited. Commercial use of any of our Content is strictly prohibited. Use of our trademarks as metatags on other websites is also strictly prohibited. You may not display this website in frames (or any of the Content via in-line links) without our express written permission, which may be requested by contacting us at '), i("a", {
            attrs: {
                href: "mailto:legal@leafgroup.com"
            }
        }, [e._v("legal@leafgroup.com")]), e._v(".")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Using the Site")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Eligibility")]), e._v(". In the event we offer any fee-based services on this Site, those fee-based services may only be used by and are limited to individuals who can form binding contracts under applicable law.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Membership")]), e._v(". We may request that you open an account to access certain areas of the Site. You must create an account to access these areas. When creating an account, you must provide us with accurate and complete registration information as prompted. You must promptly notify us if any of this information changes. If you fail to provide or update this information, we may terminate your right to access the Site. You may be asked to create a password. You must keep your password confidential. You will be responsible for all use of your password and account, including, without limitation, any use by any unauthorized third party. You must notify us if you believe your password or account has been obtained or may be accessed or used by an unauthorized person or entity. In addition, you must notify us immediately if you become aware of any breach or attempted breach of the security of the Site. We recommend that you change your password often. Under no circumstances should you respond to a request for your password, particularly a request from an individual claiming to be our employee as we will never ask you for your password.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Material Which You Post or Store")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Prohibited Material")]), e._v('. You agree not to post or store on our Site any software, information, data, databases, music, audio, video or other audio-visual files, photographs, images, documents, text, digital files or other material ("Material") which violates or infringes anyone’s intellectual property rights (including copyrights, trademarks, trade secrets, patents, publicity rights or (to the extent protectable) confidential ideas) or which violates any law or which is obscene, obscene as to minors, child pornography, defamatory, racist, lewd, lascivious, filthy, excessively violent, harassing, or otherwise objectionable.')]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("License, Representation and Warranty")]), e._v(". By posting Material to this Site, you hereby grant us an irrevocable, perpetual, non-exclusive, royalty free worldwide license to reproduce, adapt, distribute, perform (either publicly or by digital audio transmission) or publicly display all or any portion of the Material on our public websites. You further represent and warrant that you own all rights to such Material.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Removal Right")]), e._v('. You expressly agree that we may remove, disable or restrict access to, or availability of, any Material from this Site (including, but not limited to, Material which you have posted or stored) which we believe, in good faith and in our sole discretion, violates the terms of this Agreement (whether or not we are in fact correct in our assessment) or which is the subject of a notification duly sent to us pursuant to the Digital Millennium Copyright Act ("DMCA"). If you believe we may have acted mistakenly with respect to certain Material, you may contact us at '), i("a", {
            attrs: {
                href: "mailto:legal@leafgroup.com"
            }
        }, [e._v("legal@leafgroup.com")]), e._v(", in which case we may investigate the matter further. We reserve the right however, to take no further action. Under no circumstances may we be held liable for removing, disabling or restricting access to or the availability of Material.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Linking to the Site and Social Media Features")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part without our express written consent. This Site may provide you with certain social media features that enable you to: (i) link from your own or certain third-party sites to certain Content on this Site; (ii) send electronic mail or other communications with certain Content, or links to certain Content, on this Site; or (iii) cause limited portions of Content on this Site to be displayed or appear to be displayed on your own or certain third-party sites. You may use these features solely as they are provided by us and solely with respect to the content they are displayed with, and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Notwithstanding the foregoing, you must not (i) establish a link from any site that is not owned by you; (ii) cause the Site or any portions of it to be displayed by framing, deep linking, in-line linking or similar methods on any other site; (iii) link to any part of the Site other than the homepage; or (iv) otherwise take any action with respect to the Content on this Site that is inconsistent with any other provision of this Agreement. You agree to cooperate with us in causing any unauthorized framing or linking to cease. We reserve the right to withdraw linking permission without notice. We may disable all or any social media features and any links at any time without notice in our sole discretion.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Video Player")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("You may not modify, enhance, remove, interfere with, or otherwise alter in any way any portion of the video player, its underlying technology, any digital rights management mechanism, device, or other content protection or access control measure incorporated into the video player. This restriction includes, without limitation, disabling, reverse engineering, modifying, interfering with or otherwise circumventing the video player in any manner.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Customer Service")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("We have no obligation to provide you with customer support of any kind. However, we may provide you with customer support from time to time, at our sole discretion.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Good Samaritan Third-Party Policy & Complaint Procedures")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Policy")]), e._v(". We do not tolerate any acts of intellectual property violations or allow for any child pornography or obscene or defamatory Material to be posted on this Site. We will do our best, in good faith, to remove, disable or restrict access to, or the availability of, Material that, in our subjective view, is infringing, racist, obscene as to minors, child pornography, lewd, lascivious, filthy, excessively violate, harassing, or otherwise objectionable. The provisions of this "), i("span", {
            staticClass: "italic"
        }, [e._v("Section 8")]), e._v(" are intended to implement this policy but are not intended to impose a contractual obligation on us to undertake, or refrain from undertaking, any particular course of action.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Complaint Procedures")]), e._v(". If you believe that someone has posted Material that violates this policy (other than in cases of copyright infringement, which is addressed in "), i("span", {
            staticClass: "italic"
        }, [e._v("Section 9")]), e._v("), we ask you to promptly notify us by email at the following address: "), i("a", {
            attrs: {
                href: "mailto:legal@leafgroup.com"
            }
        }, [e._v("legal@leafgroup.com")]), e._v(". You "), i("span", {
            staticClass: "italic"
        }, [e._v("must ")]), e._v("use this address if you want to ensure that your complaint is actually received by the appropriate person charged with investigating alleged policy violations. Please provide us with sufficient detail in your complaint to allow us to effectively respond. At a minimum, please include (i) the nature of the offending Material or right infringed; (ii) all the facts that lead you to believe this policy has been violated or a right has been infringed; (iii) the precise location where the offending Material is located; (iv) in the case of infringement, any grounds that make you believe that the person who posted the Material was not authorized to do so; and, if (v) if known, the identity of the person or persons who posted the infringing or offending Material.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Indemnification; Waiver of Certain Rights")]), e._v(". By lodging a complaint, you agree that the substance of your complaint will be deemed to constitute a representation made under penalty of perjury under the laws of the State of California. In addition, you agree, at your own expense, to defend and indemnify us and hold us harmless against all claims which may be asserted against us, and all losses incurred, as a result of your complaint and/or our response to it.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Waiver of Claims and Remedies")]), e._v(". We expect visitors to take responsibility for their own actions and cannot assume liability for any acts of third parties that take place at this Site. By taking advantage of the Good Samaritan procedures set forth in this "), i("span", {
            staticClass: "italic"
        }, [e._v("Section 8")]), e._v(", you waive any and all claims or remedies which you might otherwise be able to assert against us under any theory of law (including, but not limited to, intellectual property laws) that arise out of or relate in any way to the Material at this Site or our response, or failure to respond, to a complaint.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Investigation/Liability Limitation")]), e._v(". You agree that we have the right (but not the obligation) to investigate any complaint received. By reserving this right, we do not undertake any responsibility in fact to investigate complaints or to remove, disable or restrict access to or the availability of the Material. We support free speech on the Internet and therefore will not act on complaints that we believe, in our subjective judgment, to be deficient. If you believe that Material remains on this Site that violates your rights, your sole remedy will be against the person(s) responsible for posting or storing it, not against us.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("DMCA Compliance")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you believe that a work protected by a copyright which you own has been posted or stored on our Site without authorization, please see our "), i("span", {
            staticClass: "italic"
        }, [i("a", {
            attrs: {
                href: "/copyright-policy"
            }
        }, [e._v("Copyright Policy")])]), e._v(" for instructions on sending us notice of copyright infringement. We have a policy to terminate, in appropriate circumstances, the access rights of repeat infringers.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Privacy")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("We know your personal information is important to you, so it’s important to us. Our "), i("span", {
            staticClass: "italic"
        }, [i("a", {
            attrs: {
                href: "/privacy-policy"
            }
        }, [e._v("Privacy Policy")])]), e._v(" explains in detail what information about you we collect and how we use the information about you that we collect. You agree to respect the privacy rights of other visitors by not publishing or harvesting email addresses obtained at this Site. Note that we do not knowingly collect information from children. We ask parents or legal guardians to assist us by supervising the activities of children at this Site. This Site is intended for use by adults only.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Links")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may provide links to third-party sites from our Site as a convenience to our visitors. We have no control over the content posted at these sites and make no representations about any content or material available at these locations. Links are not intended to imply sponsorship, affiliation or endorsement. If you believe that we have provided a link to a site that contains infringing or illegal content, or which makes available password cracker tools or other circumvention devices, we ask that you notify us so that we may evaluate whether (in our sole discretion) to disable it.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Unsolicited Email, Spamming & Spoofing")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("You may not use this Site to transmit unsolicited email. You may not send unsolicited email to this Site or to anyone whose email address includes the domain name used on this Site or our domain name. You may not use our domain name as a pseudonymous return email address for any communications which you transmit from another location or through another service. You may not pretend to be someone else – or spoof their identity – when using this Site.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Violations/Indemnification")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("Your access privileges to the Site are conditioned on your adherence to the terms of this Agreement. If you violate any terms of this Agreement, you agree that we may deny you access to the Site. You further agree, at your own expense, to defend and indemnify us and hold us harmless from and against all claims which may be asserted against us, and all losses incurred, as a result of any violations of this Agreement. If asked to do so, you agree that you will not attempt to access this Site.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Intellectual Property Rights")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Copyright")]), e._v(". All materials on the Site, including without limitation, the Site name, URL, any logos, the design, text, graphics, other files, and the selection and organization thereof are either owned by Leaf Group Ltd, or are the property of Leaf Group Ltd.’s suppliers or licensors. You may not use any such materials without our express written permission. Copyright © Leaf Group Ltd. ALL RIGHTS RESERVED.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Trademarks")]), e._v(". The Site name, feature names, and other names or logos on the Site may be trademarks and/or registered trademarks of Leaf Group Ltd. All page headers, custom graphics, button icons and scripts are trademarks or trade dress of Leaf Group Ltd. You may not use any of these trademarks, trade dress, or trade names without our express written permission.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Ownership and Use")]), e._v(". We retain ownership of all of our intellectual property rights and you may not obtain any rights therein by virtue of this Agreement or otherwise, except as expressly set forth in this Agreement.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Termination")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("By Us")]), e._v(". We will have the right in our sole discretion, for any reason or no reason at all, without notice or liability to you or any third party, to terminate your account or your access to the Site, with or without cause.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("By You")]), e._v(". If you have opened an account with us, you may terminate your account at any time by notifying us of your intention to do so at "), i("a", {
            attrs: {
                href: "mailto:legal@leafgroup.com"
            }
        }, [e._v("legal@leafgroup.com")]), e._v(".")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Effect of Termination")]), e._v(". If your account is terminated for any reason, we may, in our sole discretion, delete any websites, files, graphics or other content or materials relating to your use of the Site. If we terminate your account, we reserve the right to exercise whatever means we deem necessary to prevent unauthorized access to our Site.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Changes to the Site")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("We may, in our sole discretion, change, modify, suspend, make improvements to or discontinue any aspect of the Site or any services available on the Site, temporarily or permanently, at any time without notice to you, and we will not be liable for doing so. Without limiting the foregoing, and notwithstanding anything contained in this Agreement, we will have the right from time to time to change the amount of any fees charged, or to institute new fees relating to new or existing services on the Site. Further, we may delete materials that (i) have been stored for an excessive period of time; (ii) are out-of-date; or (iii) relate to an inactive account. If you do not agree with any changes to the Site you may discontinue your use of this Site or terminate your account in accordance with "), i("span", {
            staticClass: "italic"
        }, [e._v("Section 15(b)")]), e._v(".")])]), i("li", [i("span", {
            staticClass: "underline bold"
        }, [e._v("DISCLAIMER OF WARRANTIES")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", {
            staticClass: "bold"
        }, [i("span", {
            staticClass: "underline"
        }, [e._v("GENERAL")]), e._v('. IN ORDER TO PROVIDE YOU WITH ACCESS TO THIS SITE AND ANY RELATED SERVICES, WE ARE UNABLE TO OFFER ANY WARRANTIES OR MAKE ANY REPRESENTATIONS ABOUT ANY BENEFITS OR OPPORTUNITIES WHICH YOU MAY OBTAIN AT THIS SITE. WE HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. THIS WEBSITE IS MADE AVAILABLE TO YOU "AS IS," WITHOUT ANY WARRANTIES WHATSOEVER ABOUT THE NATURE, CONTENT OR ACCURACY (EITHER WHEN POSTED OR AS A RESULT OF THE PASSAGE OF TIME) OF ANY MATERIAL ON THE SITE, AND WITHOUT ANY REPRESENTATIONS OR GUARANTEES. IN ADDITION, WE MAKE NO REPRESENTATIONS, WARRANTIES OR GUARANTEES THAT THE WEBSITE WILL BE SECURE, ACCESSIBLE CONTINUOUSLY AND WITHOUT INTERRUPTION, OR ERROR FREE. ')]), i("li", {
            staticClass: "bold"
        }, [i("span", {
            staticClass: "underline"
        }, [e._v("THIRD PARTY SERVICES")]), e._v(". ANY THIRD-PARTY LINKS, SERVICES, GOODS, RESOURCES AND INFORMATION THAT WE PROVIDE ON OR MAKE AVAILABLE THROUGH THE SITE, INCLUDING, WITHOUT LIMITATION, THOSE AVAILABLE THROUGH THIRD-PARTY ADVERTISEMENTS, ARE NOT CONTROLLED BY US. ACCORDINGLY, WE MAKE NO WARRANTIES REGARDING SUCH THIRD-PARTY LINKS, SERVICES, GOODS, RESOURCES OR INFORMATION, INCLUDING WITHOUT LIMITATION, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY AND NON-INFRINGEMENT AND WILL NOT BE LIABLE FOR YOUR USE OF OR RELIANCE ON SUCH THIRD-PARTY LINKS, SERVICES, GOODS, RESOURCES OR INFORMATION. ")]), i("li", [i("span", {
            staticClass: "bold"
        }, [e._v('THE SITE MAY CONTAIN ADVICE, OPINIONS, INSTRUCTIONS AND STATEMENTS FROM LEAF GROUP, ITS USERS AND OTHER CONTENT AND INFORMATION PROVIDERS. THIS CONTENT IS INTENDED FOR INFORMATIONAL AND ENTERTAINMENT PURPOSES ONLY. YOU USE THIS SITE AND CONTENT AT YOUR OWN RISK. WE STRONGLY URGE YOU TO CONSULT A PROFESSIONAL OR SOME OTHER AUTHORITY IN THE APPROPRIATE FIELD BEFORE USING ANY OF THE CONTENT. THE SITE IS PROVIDED BY LEAF GROUP ON AN "AS IS" AND "AS AVAILABLE" BASIS. WITHOUT LMITING THE FOREGOING, LEAF GROUP MAKES THE FOLLOWING SPECIFIC DISCLAIMERS FOR TH E FOLLOWING CATEGORIES OF INFORMATION: ')]), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline bold"
        }, [e._v("Investment & Financial Information:")]), e._v(" The content on the Site should not be interpreted as financial or investment advice nor should it be interpreted as creating any kind of investment advisor or financial advisor relationship. You should NOT rely on the financial and investment information or opinions provided on this Site. You should conduct your own independent research and consult with your personal investment advisor before making an investment or financial decision. You are solely responsible for any investment and financial decisions, omissions or actions you take. Neither Leaf Group, its affiliates, subsidiaries, nor any of their respective agents, employees, information providers or content providers shall have any liability for your financial or investment decisions based upon, or results obtains from, the content on the Site.")]), i("li", [i("span", {
            staticClass: "underline bold"
        }, [e._v("Medical & Health Information")]), e._v(": The content on the Site should not be interpreted as medical or health advice. The content should not be used to diagnose, treat, or cure any medical or health conditions nor should it be interpreted as creating any doctor-patient or health/medical advisor relationship. You should NOT rely upon the medical, health, dietary, nutritional or other professional information or opinions provided and you should always speak to your personal health care provider before beginning, changing or stopping any medication or any treatment for a health program. You are solely responsible for any decisions, omissions or actions you take based on choosing to seek or not seek professional medical care, or choosing or not choosing specific treatments. Neither Leaf Group, is affiliates or subsidiaries, nor any of their respective agents, employees, information providers or content providers shall have any liability for your medical, health, dietary or nutritional decisions based upon, or results obtains from, the content on the Site.")])])])])])])]), i("li", [e._v("\n            LEGAL INFORMATION: The content located on the Site should not be interpreted as legal advice nor should it be interpreted as creating any kind of attorney-client or legal advisor relationship. You should NOT rely upon the legal information or opinions provided and you should consult with your personal legal advisor; this Site is not a substitute for an in-person consultation with an attorney, as the applicability of the legal principles discussed at this Site may differ substantially in individual situations or in different states or countries. You are solely responsible for any legal decisions or actions you take or omissions you commit. Neither Leaf Group, its affiliates or subsidiaries, nor any of their respective agents, employees, information providers or content providers shall have any liability for your legal decisions based upon, or the results obtained from, the content on the Site.\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", {
            staticClass: "bold"
        }, [e._v("TO THE EXTENT THAT YOU MIGHT OTHERWISE BELIEVE THAT ANY WARRANTIES, GUARANTEES OR REPRESENTATIONS HAVE BEEN MADE TO YOU, YOU HEREBY AGREE THAT SUCH STATEMENTS, WHETHER MADE ORALLY OR IN WRITING, ARE TO BE CONSIDERED AS MERELY NONBINDING EXPRESSIONS OF POLICY RATHER THAN AFFIRMATIVE REPRESENTATIONS, OBLIGATIONS, GUARANTEES OR WARRANTIES. IN THE EVENT OF ANY CONFLICT BETWEEN THIS SECTION 18 AND OTHER TERMS OR PROVISIONS OF THIS AGREEMENT, THIS SECTION SHALL BE CONSTRUED TO TAKE PRECEDENCE. ")])])])]), i("li", {
            staticClass: "bold"
        }, [i("span", {
            staticClass: "underline"
        }, [e._v("LIMITATION OF LIABILITY")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("IN ORDER TO PROVIDE YOU WITH ACCESS TO THIS SITE AND ANY RELATED SERVICES, WE ARE UNABLE TO ACCEPT LIABILITY FOR ANY CONDUCT, ACTS OR OMISSIONS OCCURRING AT THIS SITE OR ANY LOSSES YOU MAY INCUR. IN NO EVENT WILL WE BE LIABLE TO YOU FOR ANY CONSEQUENTIAL, INCIDENTAL OR SPECIAL DAMAGES, INCLUDING ANY LOST PROFITS, EVEN IF YOU CLAIM TO HAVE NOTIFIED US ABOUT SUCH DAMAGES, OR FOR ANY CLAIMS BY ANY THIRD-PARTIES.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Force Majeure")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("We will not be liable for failing to perform under this Agreement as a result of the occurrence of any event beyond our reasonable control, including, without limitation, a labor disturbance, an Internet outage or interruption of service, a communications outage, failure to perform by one of our service providers, fire, terrorism, natural disaster or war.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Notices and Electronic Communication")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v('All notices required or permitted to be given under this Agreement must be in writing and delivered to the receiving party by any of the following methods: (i) hand delivery; (ii) certified U.S. mail, return receipt requested; (iii) overnight courier; or (iv) electronic mail. If we provide notice to you, we must use the contact information provided to us by you (if any). All notices will be deemed received as follows: (i) if by hand delivery, on the date of delivery; (ii) if by delivery by U.S. mail, on the date of receipt appearing on a return receipt card; (iii) if by overnight courier, on the date receipt is confirmed by courier service, or (iv) if by electronic mail, twenty-four ( 24 ) hours after the message was sent, if no "system error" or other notice of non-delivery is generated. Each party agrees that any notice that it receives from the other party electronically satisfies the legal requirement that such communications be in writing.')])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Complete Agreement/No Representations")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("This Agreement constitutes the entire agreement between you and us relating to your access to and use of this Site and supersedes any prior or contemporaneous representations or agreements. Any rights not otherwise expressly granted by this Agreement are reserved by us. This Agreement may not be modified, either expressly or by implications, except as set forth in "), i("span", {
            staticClass: "italic"
        }, [e._v("Section 23")]), e._v(".")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Modification/Termination")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [i("ol", [i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("In General")]), e._v(". Our employees are not authorized to vary the terms of this Agreement. This Agreement may be modified only by obtaining our written consent in a notarized agreement.")]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Periodic Revisions")]), e._v(". You agree that we may modify the terms of this Agreement in our sole discretion, without advance notice, and that your right to access this Site is conditioned on an ongoing basis with your compliance with the then-current version of this Agreement. We will post a notice on this page for thirty ( 30 ) days following any revisions or modifications to this Agreement. You agree to review this page at least once every thirty ( 30 ) days. It will be your responsibility to review this page for possible modifications.")])])])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Arbitration")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("All disputes arising out of this Agreement (including its formation, performance or alleged breach) or your use of our Site or services will be exclusively resolved under confidential binding arbitration. If you can demonstrate that arbitration in California would create an undue burden to you, you are free to initiate the arbitration in your home state. Otherwise, the arbitration hearings will be held in Los Angeles County, California before and in accordance with the Rules of the American Arbitration Association. You may download or copy a form notice at "), i("a", {
            attrs: {
                href: "http://www.adr.org"
            }
        }, [e._v("www.adr.org")]), e._v(". If you initiate arbitration, your arbitration fees will be limited to the filing fees. The arbitrator’s award will be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under this Agreement will be joined to an arbitration involving any other party subject to this Agreement, whether through class arbitration proceedings or otherwise. Notwithstanding the foregoing, we will have the right to seek injunctive or other equitable relief in the state or federal court in Los Angeles County, California to enforce these terms or prevent infringement of a third party’s rights. In the event equitable relief is sought, each party irrevocably submits to the personal jurisdiction of such court.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Waiver of Class Action Rights")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("By entering into this Agreement, you hereby irrevocably waive any right you may have to join claims with those of others in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connected with this Agreement must be individually asserted.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Limitation of Actions")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("You acknowledge and agree that, regardless of any statute or law to the contrary, any claim or cause of action you may have arising out of, relating to, or connected with your use of the Site or any related services, must be filed within one ( 1 ) calendar year after such claim or cause of action arises, or forever be barred.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Additional Terms")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("This Agreement will be binding upon each party hereto and its successors and permitted assigns, and governed and construed in accordance with the laws of Los Angeles, California without reference to conflict of law principles. This Agreement and all of your rights and obligations under this Agreement (including, without limitation, your account, if any) will not be assignable or transferable by you without our prior written consent. No failure or delay by a party in exercising any right, power or privilege under this Agreement will operate as a waiver thereof, nor will any single or partial exercise of any right, power, or privilege under this Agreement. We are independent contractors, and no agency, partnership, joint venture, employee-employer relationship is intended or created by this Agreement. The invalidity or unenforceability of any provision of this Agreement will not affect the validity or enforceability of any other provision of this Agreement, all of which will remain in full force and effect.")])]), i("li", [i("span", {
            staticClass: "underline"
        }, [e._v("Further Information")]), e._v(".\n            "), i("div", {
            staticClass: "corporate-paragraph"
        }, [e._v("If you have a complaint, you may contact us at Leaf Group Ltd., Attention: Legal Department, 1655 26"), i("sup", [e._v("th")]), e._v(" Street, Santa Monica, CA 90404, USA. – "), i("a", {
            attrs: {
                href: "mailto:legal@leafgroup.com"
            }
        }, [e._v("legal@leafgroup.com")]), e._v(". If you are a California resident, the Complaint Assistance Unit of the Division of Consumer Services of the Dept. of Consumer Affairs may be contacted at 400 R Street, Sacramento, CA 95814 or ( 800 ) 952-5210.")])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "view-terms-of-use",
        metaInfo: function() {
            var e = (0,
            n.default)(this, "$store.state.config", {})
              , t = (0,
            n.default)(e, "site.name", "")
              , i = (0,
            n.default)(e, "site.domain", "")
              , a = "Information on " + t + "'s terms of use."
              , r = i + "/terms-of-use"
              , o = "Terms of Use | " + t;
            return {
                title: "Terms of Use",
                meta: [{
                    name: "twitter:title",
                    content: o
                }, {
                    name: "twitter:description",
                    content: a
                }, {
                    name: "description",
                    content: a
                }, {
                    property: "og:description",
                    content: a
                }, {
                    property: "og:url",
                    content: r
                }, {
                    property: "og:title",
                    content: o
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: r
                }]
            }
        },
        computed: {
            siteDomain: function() {
                return (0,
                n.default)(this, "$store.state.config.site.domain", "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(702)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(703)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(704)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-gdpr-form"
        }, [i("div", {
            staticClass: "container"
        }, [i("div", {
            staticClass: "inner"
        }, [i("h1", {
            staticClass: "page-title"
        }, [e._v("\n        We respect your privacy\n      ")]), i("div", {
            staticClass: "form-instructions"
        }, [e._v("\n        We acknowledge the right of individuals to access their personal data in accordance with data protection laws and our Privacy Policy, which can be found at "), i("a", {
            attrs: {
                href: e.getPrivacyPolicyUrl
            }
        }, [e._v(e._s(e.getPrivacyPolicyUrl))]), e._v(". Please fill in the form below to submit a request to access, change, delete, or port your personal data. We may ask you to provide additional information for identity verification purposes, or to verify that you are in possession of an applicable email account.\n      ")]), i("transition", {
            attrs: {
                name: "fade",
                mode: "out-in"
            }
        }, [e.isSuccessful ? i("div", {
            staticClass: "form-success-message"
        }, [e._v("\n          Thank you for submitting.\n        ")]) : i("div", {
            staticClass: "form-container"
        }, [i("form", {
            on: {
                submit: function(t) {
                    t.preventDefault(),
                    e.onFormSubmit(t)
                }
            }
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.formData.name,
                expression: "formData.name"
            }],
            attrs: {
                type: "text",
                name: "name",
                placeholder: "Name",
                required: ""
            },
            domProps: {
                value: e.formData.name
            },
            on: {
                input: function(t) {
                    t.target.composing || e.$set(e.formData, "name", t.target.value)
                }
            }
        }), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.formData.email,
                expression: "formData.email"
            }],
            attrs: {
                type: "email",
                name: "email",
                placeholder: "Email Address *",
                required: ""
            },
            domProps: {
                value: e.formData.email
            },
            on: {
                input: function(t) {
                    t.target.composing || e.$set(e.formData, "email", t.target.value)
                }
            }
        }), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.formData.robot,
                expression: "formData.robot"
            }],
            attrs: {
                type: "hidden",
                name: "robot",
                value: ""
            },
            domProps: {
                value: e.formData.robot
            },
            on: {
                input: function(t) {
                    t.target.composing || e.$set(e.formData, "robot", t.target.value)
                }
            }
        }), i("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.formData.explanation,
                expression: "formData.explanation"
            }],
            attrs: {
                name: "explanation",
                cols: "30",
                rows: "10",
                placeholder: "In a few words please explain if you need to download or remove your data"
            },
            domProps: {
                value: e.formData.explanation
            },
            on: {
                input: function(t) {
                    t.target.composing || e.$set(e.formData, "explanation", t.target.value)
                }
            }
        }), i("input", {
            class: {
                "is-disabled": e.isSubmitting
            },
            attrs: {
                type: "submit"
            },
            domProps: {
                value: e.getSubmitButtonLabel
            }
        })])])]), e.hasError ? i("div", {
            staticClass: "form-error-message"
        }, [e._v("\n        An error occurred.\n      ")]) : e._e(), i("div", {
            staticClass: "form-asterisk"
        }, [e._v("\n        * Please enter the same email address that you previously used on this site.\n      ")])], 1)])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , r = i(2)
      , o = a(r)
      , s = i(705)
      , l = (a(s),
    i(41));
    t.default = {
        name: "view-gdpr-form",
        data: function() {
            return {
                formData: {
                    name: "",
                    email: "",
                    explanation: "",
                    robot: ""
                },
                isSubmitting: !1,
                isSuccessful: !1,
                hasError: !1
            }
        },
        metaInfo: function() {
            return {
                title: "User Data Request",
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    o.default)(this, "$store.state.config.site.domain", "") + "/userdata-request"
                }]
            }
        },
        computed: n({}, (0,
        l.mapGetters)(["SDK"]), {
            getPrivacyPolicyUrl: function() {
                return (0,
                o.default)(this, "$store.state.config.site.domain", "") + "/privacy-policy"
            },
            getSubmitButtonLabel: function() {
                return this.isSubmitting ? "Submitting ..." : "Submit a request"
            }
        }),
        methods: {
            onFormSubmit: function(e) {
                var t = this;
                if ("" === this.formData.robot) {
                    var i = (0,
                    o.default)(this, "$store.state.config", {});
                    this.isSubmitting = !0,
                    this.isSuccessful = !1,
                    this.hasError = !1;
                    var a = this.formData
                      , n = a.name
                      , r = a.email
                      , s = a.explanation
                      , l = document.cookie
                      , c = n + "\n" + r + "\n" + s + "\n" + l + "\n" + JSON.stringify(localStorage);
                    return this.SDK.zendeskRequest({
                        body: {
                            subject: (0,
                            o.default)(i, "site.name", "New") + " GDPR Request",
                            comment: {
                                body: c
                            }
                        }
                    }).then(function(e) {
                        t.isSubmitting = !1,
                        t.isSuccessful = !0,
                        t.formData.name = "",
                        t.formData.email = "",
                        t.formData.explanation = ""
                    }).catch(function(e) {
                        t.isSubmitting = !1,
                        t.hasError = !0
                    })
                }
            }
        }
    }
}
, , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    function a(e) {
        i(724)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(725)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        e._self._c;
        return e._m(0)
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "about-view"
        }, [i("div", {
            staticClass: "about-inner"
        }, [i("section", {
            staticClass: "section section--hero section--hero-about"
        }, [i("div", {
            staticClass: "image-inner"
        })])]), i("div", {
            staticClass: "inner copy-wrapper"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [i("section", {
            staticClass: "copy"
        }, [i("p", [e._v("Welcome to LEAFtv – a modern lifestyle resource for women. From the beginning (2011!), LEAFtv was designed to inform and inspire the busy-girl lifestyle with hundreds of how-to videos covering all things Living, Eating & Fashion. From the basics, like learning how to make a "), i("a", {
            attrs: {
                href: "/videos/how-to-make-a-basic-omelette/"
            }
        }, [e._v("simple omelette")]), e._v(" or "), i("a", {
            attrs: {
                href: "/videos/5-exercises-to-do-around-the-house-2014/"
            }
        }, [e._v("working out at home")]), e._v(", to the not-so basics like how to utilize one bottle of "), i("a", {
            attrs: {
                href: "/videos/top-10-apple-cider-vinegar-life-hacks/"
            }
        }, [e._v("apple cider vinegar in 10 crazy ways")]), e._v(" — we’ve got you covered. LEAFtv is the go-to resource for women who want to live fresh, holistic and energized lives.")]), i("p", [e._v("LEAFtv was built for creative, curious minds, regardless of skill level, who are short on time but passionate about being the best version of themselves they can be. In short, LEAFtv was built for YOU. Each piece of content is carefully crafted to create an entire experience. "), i("span", {
            staticClass: "bold"
        }, [e._v("Wellness, made easy.")])]), i("p", [i("em", [e._v("The material appearing on LEAFtv is for educational use only. It should not be used as a substitute for professional medical advice, diagnosis or treatment.")])])])])]), i("div", {
            staticClass: "inner about-footer"
        }, [i("div", {
            staticClass: "partnership-wrap col-xs-12 col-md-6"
        }, [i("div", {
            attrs: {
                id: "partnership"
            }
        }), i("section", {
            staticClass: "partnership"
        }, [i("h2", {
            staticClass: "page-title"
        }, [e._v("Brand Partnerships")]), i("p", [e._v("Are you a like-minded brand interested in working with LEAFtv? To inquire about sponsorship and advertising opportunities, please contact us.")]), i("div", {
            staticClass: "button-wrapper"
        }, [i("a", {
            attrs: {
                href: "mailto:advertise@leaf.tv"
            }
        }, [i("button", [e._v("advertise@leaf.tv")])])])])]), i("div", {
            staticClass: "contact-wrap col-xs-12 col-md-6"
        }, [i("div", {
            attrs: {
                id: "contact"
            }
        }), i("section", {
            staticClass: "contact"
        }, [i("h2", {
            staticClass: "page-title"
        }, [e._v("Contact")]), i("p", [e._v("We wanna hear from you! Whether you're interested in contributing, sharing your feedback, or just saying hi - reach out!")]), i("div", {
            staticClass: "button-wrapper"
        }, [i("a", {
            attrs: {
                href: "mailto:hello@leaf.tv"
            }
        }, [i("button", [e._v("hello@leaf.tv")])])])])])])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(54)
      , s = a(o);
    t.default = {
        name: "about-view",
        data: function() {
            return {
                config: (0,
                r.default)(this, "$store.state.config", {})
            }
        },
        beforeRouteUpdate: function(e, t, i) {},
        metaInfo: function() {
            return {
                title: "About Us | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: "About Us | " + (0,
                    r.default)(s.default, "site.title", "")
                }, {
                    name: "twitter:description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    name: "description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    property: "og:description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    property: "og:url",
                    content: (0,
                    r.default)(s.default, "site.domain", "") + "/about/"
                }, {
                    property: "og:title",
                    content: "About Us | " + (0,
                    r.default)(s.default, "site.title", "")
                }, {
                    property: "og:image",
                    content: (0,
                    r.default)(s.default, "site.domain", "") + "/images/default-og.png"
                }, {
                    property: "og:type",
                    content: "about us"
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    r.default)(s.default, "site.domain", "") + "/about/"
                }]
            }
        },
        mounted: function() {
            window.dataLayer.pushPageView({
                category: "about"
            })
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(727)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(728)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-article"
        }, [e.hasError && 0 === e.articles.length ? i("error404") : i("div", {
            staticClass: "infinite-articles",
            attrs: {
                id: "infinite-articles"
            }
        }, [i("article-infinite-scroll", {
            attrs: {
                handler: e.loadNextArticle,
                threshold: e.hasPastLowerThreshold,
                throttle: 200,
                shouldHandle: e.shouldHandle,
                scrollContainer: e.getWindow,
                articles: e.articles
            },
            scopedSlots: e._u([{
                key: "article",
                fn: function(t) {
                    return [t.index > 0 ? i("div", {
                        staticClass: "article-separator"
                    }) : e._e(), e.isVideo ? i("article-template-video", {
                        staticClass: "article-container",
                        class: e.getFormat(t.body),
                        attrs: {
                            article: t.body,
                            index: t.index
                        }
                    }) : i("article-template-default", {
                        ref: "article-" + t.index,
                        staticClass: "article-container",
                        class: e.getFormat(t.body),
                        attrs: {
                            article: t.body,
                            index: t.index,
                            breadcrumbs: e.getBreadcrumbs(t.body)
                        }
                    })]
                }
            }])
        }), i("preloader", {
            attrs: {
                show: e.hasMoreArticles && e.enableInfiniteScroll
            }
        })], 1)], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , o = i(2)
      , s = a(o)
      , l = i(255)
      , c = a(l)
      , u = i(41)
      , d = i(105)
      , f = i(731)
      , p = i(106)
      , h = a(p)
      , m = i(737)
      , g = a(m)
      , v = i(739)
      , y = a(v)
      , b = i(822)
      , _ = a(b)
      , w = i(155)
      , C = a(w)
      , S = i(107)
      , E = a(S)
      , T = i(55)
      , A = a(T)
      , k = i(108)
      , I = a(k)
      , O = i(835)
      , P = a(O)
      , M = i(838)
      , R = a(M);
    t.default = {
        name: "article-view",
        components: {
            ArticleImage: h.default,
            ArticleInfiniteScroll: g.default,
            ArticleTemplateDefault: y.default,
            ArticleTemplateVideo: _.default,
            Error404: C.default,
            FbComments: E.default,
            SocialShareIcons: I.default,
            ParseEmbed: P.default,
            Preloader: R.default
        },
        mixins: [f.InfiniteScrollMixin],
        data: function() {
            return {
                beenViewedArticles: [!0],
                currentArticleIndex: 0,
                currentYPosition: 0,
                currentRcpIndex: 0,
                enableInfiniteScroll: !0,
                hasMoreArticles: !0,
                history: {
                    currentArticleIndex: 0
                },
                isLoadingArticles: !1
            }
        },
        metaInfo: function() {
            return {
                title: (0,
                s.default)(this, "articles[0].title", "") + " | " + (0,
                s.default)(this, "$store.state.config.site.title", ""),
                meta: [{
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:title",
                    content: (0,
                    s.default)(this, "articles[0].title", "") + " | " + (0,
                    s.default)(this, "$store.state.config.site.title", "")
                }, {
                    name: "twitter:description",
                    content: (0,
                    c.default)((0,
                    s.default)(this, "articles[0].summary", ""))
                }, {
                    name: "twitter:image",
                    content: (0,
                    d.resizeImage)((0,
                    s.default)(this, "articles[0].image.url", ""), "640")
                }, {
                    name: "twitter:image:alt",
                    content: (0,
                    s.default)(this, "articles[0].image.alttext", "")
                }, {
                    name: "description",
                    content: (0,
                    c.default)((0,
                    s.default)(this, "articles[0].summary", ""))
                }, {
                    property: "og:description",
                    content: (0,
                    c.default)((0,
                    s.default)(this, "articles[0].summary", ""))
                }, {
                    property: "og:url",
                    content: "" + (0,
                    s.default)(this, "$store.state.config.site.domain", "") + (0,
                    s.default)(this, "articles[0].slug", "")
                }, {
                    property: "og:title",
                    content: (0,
                    s.default)(this, "articles[0].title", "") + " | " + (0,
                    s.default)(this, "$store.state.config.site.title", "")
                }, {
                    property: "og:type",
                    content: "article"
                }, {
                    property: "og:image",
                    content: (0,
                    d.resizeImage)((0,
                    s.default)(this, "articles[0].image.url", ""), "640")
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: "" + (0,
                    s.default)(this, "$store.state.config.site.domain", "") + (0,
                    s.default)(this, "articles[0].slug", "")
                }],
                script: []
            }
        },
        mounted: function() {
            window.dataLayer.push(A.default.formatArticle((0,
            s.default)(this, "articles[0]", {}), {
                scroll: 0
            })),
            this.enableInfiniteScroll = !this.isVideo,
            this.isSlideShow((0,
            s.default)(this, "articles[0]", {})) && (this.enableInfiniteScroll = !1),
            this.enableInfiniteScroll && this.$store.dispatch("FETCH_INFINITE_SCROLL_ARTICLES", {
                slug: (0,
                s.default)(this, "articles[0].slug", "")
            })
        },
        computed: r({}, (0,
        u.mapGetters)(["getIsMobile"]), {
            articles: function() {
                return (0,
                s.default)(this, "$store.state.Article.articles", [])
            },
            hasError: function() {
                return 200 !== (0,
                s.default)(this, "$store.state.statusCode", 404)
            },
            isVideo: function() {
                return "video" === (0,
                s.default)(this, "articles[0].format", "").toLowerCase()
            },
            infiniteScrollArticles: function() {
                return (0,
                s.default)(this, "$store.state.Article.infiniteScrollArticles", [])
            },
            getWindow: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window : {}
            }
        }),
        methods: {
            isLc: function(e) {
                return !(0,
                s.default)(e, "new_content", !1)
            },
            isSlideShow: function(e) {
                return "slideshow" === (0,
                s.default)(e, "format", "").toLowerCase()
            },
            getArticleDomFromIndex: function(e) {
                return document.getElementById("infinite-articles__item--" + e)
            },
            getBreadcrumbs: function(e) {
                var t = [];
                return t.push({
                    url: "/",
                    label: "Home"
                }),
                (0,
                s.default)(e, "category.slug", "") && t.push({
                    url: "/" + (0,
                    s.default)(e, "category.slug", ""),
                    label: (0,
                    s.default)(e, "category.name", "")
                }),
                (0,
                s.default)(e, "subcategory.slug", "") && t.push({
                    url: "/" + (0,
                    s.default)(e, "category.slug", "") + "/" + (0,
                    s.default)(e, "subcategory.slug", ""),
                    label: (0,
                    s.default)(e, "subcategory.name", "")
                }),
                t.push({
                    label: (0,
                    s.default)(e, "title", "")
                }),
                t
            },
            getFormat: function(e) {
                return (0,
                s.default)(e, "format", "")
            },
            getLatestLoadedArticleIndex: function() {
                return (0,
                s.default)(this, "articles", []).length - 1
            },
            hasPastLowerThreshold: function() {
                var e = this.getLatestLoadedArticleIndex()
                  , t = (0,
                s.default)(this, "$refs[article-" + e + "].$el", {});
                return window.pageYOffset + window.innerHeight >= .9 * t.offsetHeight + t.offsetTop
            },
            loadNextArticle: function() {
                var e = this;
                this.isLoadingArticles = !0;
                var t = (0,
                s.default)(this, "currentRcpIndex", 0);
                return t >= (0,
                s.default)(this, "infiniteScrollArticles", []).length ? (this.hasMoreArticles = !1,
                Promise.all([])) : Promise.all([this.$store.dispatch("FETCH_ARTICLE_AND_RCP", {
                    slug: (0,
                    s.default)(this, "infiniteScrollArticles[" + t + "].slug", ""),
                    index: t + 1
                }).then(function(t) {
                    e.currentRcpIndex++,
                    e.isLoadingArticles = !1
                }).catch(function(t) {
                    (0,
                    s.default)(e, "infiniteScrollArticles", []).splice(e.currentRcpIndex, 1),
                    e.loadNextArticle()
                })])
            },
            shouldHandle: function() {
                return !this.isLoadingArticles && this.enableInfiniteScroll
            }
        },
        asyncData: function(e) {
            var t = e.store
              , i = e.route.path
              , a = i;
            return t.dispatch("FETCH_ARTICLE_AND_RCP", {
                slug: a,
                index: 0
            })
        }
    }
}
, , , function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.InfiniteScrollMixin = t.InfiniteScrollInstall = void 0;
    var n = i(732)
      , r = a(n)
      , o = i(733)
      , s = a(o)
      , l = i(734)
      , c = a(l)
      , u = {
        install: function(e, t) {
            e.use(new s.default),
            e.component("article-infinite-scroll", r.default)
        }
    };
    t.InfiniteScrollInstall = u,
    t.InfiniteScrollMixin = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(64)
      , n = i.n(a)
      , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = {
        props: {
            articles: {
                type: Array,
                default: function() {
                    return []
                }
            },
            handler: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            shouldHandle: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            threshold: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            throttle: {
                type: Number,
                default: 200
            },
            scrollContainer: {
                default: function() {
                    return {
                        addEventListener: function() {}
                    }
                }
            }
        },
        mounted: function() {
            this.createScrollHandler()
        },
        methods: {
            createScrollHandler: function() {
                this.check = n()(this.execute, this.throttle),
                this.scrollContainer.addEventListener("scroll", this.check)
            },
            execute: function() {
                this.threshold() && this.shouldHandle() && this.handler()
            },
            getSlug: function(e) {
                return this.articles[e] ? this.articles[e].slug : ""
            },
            getTitle: function(e) {
                return this.articles[e] ? this.articles[e].title : ""
            }
        },
        computed: {
            getWindow: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : {}
            }
        },
        beforeDestroy: function() {
            this.scrollContainer.removeEventListener("scroll", this.check)
        }
    }
      , s = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            staticClass: "component-infinite-scroll"
        }, [e._l(e.articles, function(t, i) {
            return e._t("article", null, {
                body: t,
                index: i
            })
        })], 2)
    }
      , l = []
      , c = {
        render: s,
        staticRenderFns: l
    }
      , u = c
      , d = i(1)
      , f = d(o, u, !1, null, null, null);
    t.default = f.exports
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , r = i(64)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
            a(this, e),
            this.throttle = t,
            this._window = null,
            this.articles = [],
            this.beenViewedArticles = [!0],
            this.isMobile = null,
            this.position = 0,
            this.setup = !1,
            this.scrollHandler = null
        }
        return n(e, [{
            key: "handler",
            value: function() {
                var e = this.getCurrentArticlePosition()
                  , t = e.position
                  , i = e.article;
                this.position !== t && (this.position = t,
                this.updateHistory(i.title, i.slug),
                this.beenViewedArticles[t] || (this.beenViewedArticles[t] = this.emitDataLayerEvent(t)))
            }
        }, {
            key: "emitDataLayerEvent",
            value: function(e) {
                return !!this.articles.length && (!(!this.articles[e] || !this.articles[e].vnode) && (this.articles[e].vnode.context.$emit("infinite-scroll-fire-pageview", e),
                !0))
            }
        }, {
            key: "updateHistory",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this._window.document.title = e,
                this._window.history.replaceState({}, e, t)
            }
        }, {
            key: "getArticleByIndex",
            value: function(e) {
                return this.articles[e]
            }
        }, {
            key: "getCurrentArticlePosition",
            value: function() {
                var e = void 0
                  , t = void 0
                  , i = this.getCurrentYPosition() + this.getViewportOffset();
                for (t = 0; t < this.articles.length; t++)
                    if (e = this.getArticleByIndex(t),
                    i > e.dom.offsetTop && i < e.dom.offsetTop + e.dom.offsetHeight)
                        return {
                            position: t,
                            article: e
                        };
                return {
                    position: t - 1,
                    article: e
                }
            }
        }, {
            key: "getCurrentYPosition",
            value: function() {
                return this._window.pageYOffset
            }
        }, {
            key: "getPosition",
            value: function(e) {
                return this.articles[e]
            }
        }, {
            key: "getViewportOffset",
            value: function() {
                return this.isMobile ? this._window.innerHeight / 4 : 2 * this._window.innerHeight / 3
            }
        }, {
            key: "install",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.directive("infinite-article", this.getDirective())
            }
        }, {
            key: "setupDirective",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.value && e.value.isMobile && this.setIsMobile(e.value.isMobile),
                e.value && e.value.window && this.setWindow(e.value.window)
            }
        }, {
            key: "setWindow",
            value: function(e) {
                this._window = e
            }
        }, {
            key: "setIsMobile",
            value: function(e) {
                this.isMobile = e
            }
        }, {
            key: "start",
            value: function() {
                var e = this
                  , t = function() {
                    e.handler()
                }
                  , i = (0,
                o.default)(t, 600);
                this.scrollHandler = i,
                this._window.addEventListener("scroll", i)
            }
        }, {
            key: "bind",
            value: function(e, t, i) {
                this.articles.push({
                    dom: e,
                    title: t.value.title,
                    slug: t.value.slug,
                    vnode: i
                })
            }
        }, {
            key: "inserted",
            value: function(e, t) {
                this.setup || (this.setupDirective(t),
                this.start(),
                this.setup = !0)
            }
        }, {
            key: "getDirective",
            value: function() {
                var e = this;
                return {
                    bind: function(t, i, a) {
                        e.bind(t, i, a)
                    },
                    inserted: function(t, i) {
                        e.inserted(t, i)
                    }
                }
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        mounted: function() {},
        methods: {
            infiniteScrollHandleMobileAd: function() {
                if (this.infiniteScrollIsNextMobileArticle() && this.$refs.article) {
                    var e = this.$refs.article.querySelector(".slot");
                    if (e) {
                        return e.offsetTop + 250 + 140 > this.pixelHeight
                    }
                }
            },
            infiniteScrollIsNextMobileArticle: function() {
                return this.$isMobile && this.index > 0 && this.showContinueReading
            },
            infiniteScrollExpandArticle: function() {
                this.$refs.article.style.height = "",
                this.$refs.article.style.overflow = ""
            }
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "article-image",
        props: ["image", "caption", "isLc"],
        computed: {
            hasAttributionText: function() {
                return (0,
                n.default)(this, "image.attributiontext", "") || (0,
                n.default)(this, "image.attributionlink", "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(738)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            staticClass: "component-infinite-scroll"
        }, [e._l(e.articles, function(t, i) {
            return e._t("article", null, {
                body: t,
                index: i
            })
        })], 2)
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , n = i(64)
      , r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n);
    t.default = {
        name: "ArticleInfiniteScroll",
        props: {
            articles: {
                type: Array,
                default: function() {
                    return []
                }
            },
            handler: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            shouldHandle: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            threshold: {
                type: Function,
                default: function() {
                    return !1
                }
            },
            throttle: {
                type: Number,
                default: 200
            },
            scrollContainer: {
                default: function() {
                    return {
                        addEventListener: function() {}
                    }
                }
            }
        },
        mounted: function() {
            this.createScrollHandler()
        },
        methods: {
            createScrollHandler: function() {
                this.check = (0,
                r.default)(this.execute, this.throttle),
                this.scrollContainer.addEventListener("scroll", this.check)
            },
            execute: function() {
                this.threshold() && this.shouldHandle() && this.handler()
            },
            getSlug: function(e) {
                return this.articles[e] ? this.articles[e].slug : ""
            },
            getTitle: function(e) {
                return this.articles[e] ? this.articles[e].title : ""
            }
        },
        computed: {
            getWindow: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : a(window)) ? window : {}
            }
        },
        beforeDestroy: function() {
            this.scrollContainer.removeEventListener("scroll", this.check)
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(740)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(741)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            directives: [{
                name: "infinite-article",
                rawName: "v-infinite-article",
                value: {
                    title: e.getTitle,
                    slug: e.getSlug,
                    isMobile: e.getIsMobile,
                    window: e.getWindow
                },
                expression: "{\n    title: getTitle,\n    slug: getSlug,\n    isMobile: getIsMobile,\n    window: getWindow\n  }"
            }],
            staticClass: "component-article-template-default"
        }, [i("header", {
            staticClass: "header-container"
        }, [i("div", {
            staticClass: "header-upper",
            class: {
                "is-first": 0 === e.index
            }
        }, [i("div", {
            staticClass: "header-upper-inner"
        }, [i("breadcrumbs", {
            attrs: {
                links: e.breadcrumbs
            }
        }), i("div", {
            staticClass: "ad ad-leader-center"
        }, [e.isLc && !e.getIsMobile && 0 === e.index ? i("div", {
            directives: [{
                name: "article-sticky-ad",
                rawName: "v-article-sticky-ad",
                value: {
                    googletag: e.getGoogleTag,
                    header: e.getHeader,
                    el: e.getAd
                },
                expression: "{\n            googletag: getGoogleTag,\n            header: getHeader,\n            el: getAd,\n          }"
            }],
            staticClass: "sticky-ad-el"
        }, [i("ad", {
            attrs: {
                loc: "atf",
                slots: "horizontal",
                pageNumber: e.index + 1,
                slotNumber: 1,
                sizes: [[728, 90], [970, 250]],
                device: "desktop",
                slug: e.article.slug
            }
        })], 1) : i("ad", {
            attrs: {
                loc: "atf",
                slots: "horizontal",
                pageNumber: e.index + 1,
                slotNumber: 1,
                sizes: [[728, 90], [970, 250]],
                device: "desktop",
                slug: e.article.slug
            }
        })], 1), i("h1", {
            staticClass: "title"
        }, [e._v("\n          " + e._s(e.article.title) + "\n        ")])], 1)]), i("div", {
            staticClass: "header-lower"
        }, [i("div", {
            staticClass: "header-lower-inner"
        }, [i("social-share-icons", {
            attrs: {
                article: e.article
            }
        }), i("div", {
            staticClass: "author"
        }, [e._v("\n          By " + e._s(e.getAuthor) + "\n        ")])], 1)])]), i("div", {
            staticClass: "article-rail-container clearfix"
        }, [i("section", {
            staticClass: "article-wrapper"
        }, [i("article", {
            staticClass: "article-content"
        }, e._l(e.article.content, function(t, a) {
            return i("div", {
                staticClass: "section-container",
                class: "article-section article-section--" + t.type
            }, ["ad-mobile" === t.type ? i("div", {
                class: "section-ad ad " + t.type,
                attrs: {
                    id: "section-ad--" + e.index + "-" + t.type
                }
            }, [i("ad", {
                attrs: {
                    loc: t.loc,
                    slots: t.slot,
                    pageNumber: e.index + 1,
                    slotNumber: t.slotNumber,
                    sizes: [[300, 250]],
                    device: "mobile",
                    slug: e.getSlug
                }
            })], 1) : "ad-mobile-link-unit" === t.type ? i("div", {
                staticClass: "section-ad ad-mobile-link-unit"
            }, [i("ad-link", {
                attrs: {
                    display: e.getIsMobile,
                    clientId: t.clientId,
                    slotId: t.slotId,
                    insStyle: t.insStyle,
                    format: t.format
                }
            })], 1) : "ad-mobile-jwplayer" === t.type ? i("div", {
                staticClass: "section-ad ad-mobile-link-unit"
            }, [e.showMobileJwplayer ? i("article-jwplayer", {
                attrs: {
                    isMobile: e.getIsMobile,
                    videoLabel: t.videoLabel,
                    playerUrl: t.playerUrl,
                    playlistUrl: t.playlistUrl,
                    advertisingTag: e.getJwplayerAdvertisingTag,
                    bidderName: t.bidderName,
                    bidderId: t.bidderId
                }
            }) : e._e()], 1) : i("sections", {
                attrs: {
                    type: t.type,
                    isLc: e.isLc,
                    section: t,
                    site: "www.leaf.tv",
                    slug: e.article.slug
                },
                scopedSlots: e._u([{
                    key: "slideshow",
                    fn: function(t) {
                        return [e.isSlideshow ? i("slideshow", {
                            attrs: {
                                slides: t.slideshow,
                                article: e.article,
                                articleIndex: e.index,
                                slug: e.getSlug,
                                category: e.getCategoryName,
                                subcategory: e.getSubcategorySlug,
                                nextArticleTitle: e.getNextArticleTitle,
                                nextArticleSlug: e.getNextArticleSlug,
                                nextArticleAltSlide: !0
                            }
                        }) : e._e()]
                    }
                }])
            }, [i("template", {
                slot: "image"
            }, [i("article-image", {
                attrs: {
                    image: t.content,
                    slug: e.article.slug,
                    pinterest: !0
                }
            })], 1)], 2), "jwplayer" !== t.type || e.getIsMobile ? e._e() : i("article-jwplayer", {
                attrs: {
                    videoLabel: t.videoLabel,
                    playerUrl: t.playerUrl,
                    playlistUrl: t.playlistUrl,
                    advertisingTag: e.getJwplayerAdvertisingTag,
                    bidderName: t.bidderName,
                    bidderId: t.bidderId
                }
            })], 1)
        })), e.isLc || e.isSlideshow ? i("ad-adsense", {
            attrs: {
                display: e.showAdsense,
                clientId: e.getConfigAdValue("adsense.clientId"),
                slotId: e.getConfigAdValue("adsense.slotId"),
                channelId: e.getChannelId,
                googleBlacklistedUrls: e.getGoogleBlacklistedUrls,
                articleSlug: e.getSlug
            }
        }) : e._e(), i("ad-link", {
            attrs: {
                display: e.showAdLink,
                clientId: e.getConfigAdValue("adlink.clientId"),
                slotId: e.getConfigAdValue("adlink.slotId.body"),
                insStyle: e.getConfigAdValue("adlink.style.body"),
                googleBlacklistedUrls: e.getGoogleBlacklistedUrls,
                articleSlug: e.getSlug
            }
        }), e.isLc && !e.isSlideshow ? i("ad-taboola", {
            attrs: {
                index: e.index,
                loaderUrl: e.config.articles.taboolaLoaderUrl
            }
        }) : e._e(), e.article.slug ? i("fb-comments", {
            attrs: {
                id: "index-" + e.index,
                "data-href": e.config.site.domain + e.article.slug,
                "data-width": 640,
                "data-numposts": 5
            }
        }) : e._e()], 1), i("aside", {
            staticClass: "right-rail"
        }, [i("div", {
            staticClass: "ad atf desktop"
        }, [i("ad", {
            attrs: {
                loc: "atf",
                slots: "rightrail",
                pageNumber: e.index + 1,
                slotNumber: 1,
                sizes: [[300, 250], [300, 600]],
                device: "desktop",
                slug: e.article.slug
            }
        })], 1), i("ad-link", {
            attrs: {
                display: e.showAdLink,
                clientId: e.getConfigAdValue("adlink.clientId"),
                slotId: e.getConfigAdValue("adlink.slotId.rr"),
                insStyle: e.getConfigAdValue("adlink.style.rr"),
                googleBlacklistedUrls: e.getGoogleBlacklistedUrls,
                articleSlug: e.getSlug
            }
        }), e.article.related_content ? i("related-content", {
            staticClass: "related-content-wrapper",
            attrs: {
                relatedArticles: e.getRCP,
                title: "YOU MAY ALSO LIKE"
            }
        }) : e._e(), i("div", {
            staticClass: "ad btf desktop"
        }, [i("ad", {
            attrs: {
                loc: "btf",
                slots: "rightrail",
                pageNumber: e.index + 1,
                slotNumber: 2,
                sizes: [[300, 250]],
                device: "desktop",
                category: e.article.category.slug,
                subcategory: e.article.subcategory.slug,
                slug: e.article.slug
            }
        })], 1)], 1)])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , o = i(2)
      , s = a(o)
      , l = i(41)
      , c = i(256)
      , u = i(748)
      , d = a(u)
      , f = i(257)
      , p = a(f)
      , h = i(258)
      , m = a(h)
      , g = i(153)
      , v = a(g)
      , y = i(785)
      , b = a(y)
      , _ = i(806)
      , w = a(_)
      , C = i(808)
      , S = a(C)
      , E = i(810)
      , T = a(E)
      , A = i(812)
      , k = a(A)
      , I = i(106)
      , O = a(I)
      , P = i(107)
      , M = a(P)
      , R = i(154)
      , L = a(R)
      , x = i(108)
      , N = a(x);
    t.default = {
        name: "articles",
        props: {
            article: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            breadcrumbs: {
                type: Array,
                default: function() {
                    return []
                }
            },
            index: {
                type: Number,
                default: 0
            }
        },
        data: function() {
            return {
                config: (0,
                s.default)(this, "$store.state.config"),
                showAdsense: !1
            }
        },
        components: {
            Ad: w.default,
            AdAdsense: S.default,
            AdLink: T.default,
            AdTaboola: k.default,
            ArticleImage: O.default,
            ArticleJwplayer: d.default,
            Breadcrumbs: p.default,
            FbComments: M.default,
            RelatedContent: L.default,
            Sections: v.default,
            SocialShareIcons: N.default,
            Slideshow: b.default
        },
        beforeMount: function() {
            this.showAdsense = !this.getIsMobile
        },
        mixins: [c.AdsMixin],
        mounted: function() {
            var e = this;
            if (0 === this.index) {
                var t = this.loadAds(this.getSlug, this.index, this.getTargeting, this.getIsMobile, !0);
                this.$store.dispatch("UPDATE_ADS", {
                    ads: t,
                    slug: this.getSlug
                })
            }
            if (this.$on("infinite-scroll-fire-pageview", function(t) {
                var i = e.loadAds(e.getSlug, e.index, e.getTargeting, e.getIsMobile);
                e.$store.dispatch("UPDATE_ADS", {
                    ads: i,
                    slug: e.getSlug
                }),
                window.dataLayer.push(m.default.formatArticle(e.article, {
                    event: "pageview",
                    scroll: t
                }))
            }),
            this.getIsMobile && this.index > 0) {
                var i = document.getElementsByClassName(".slot")
                  , a = i.offsetTop + 250 + 140;
                if (a >= 1400) {
                    var n = document.getElementById("infinite-articles__item--" + this.index);
                    (0,
                    s.default)(n, "childNodes[1]", {}).style.height = a + "px"
                }
            }
            this.isSlideshow && this.$store.dispatch("FETCH_NEXT_SLIDESHOW_ARTICLE", {
                slug: this.getSlug
            })
        },
        computed: r({}, (0,
        l.mapGetters)(["getIsMobile"]), {
            getGoogleTag: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window.googletag : {}
            },
            getHeader: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window.document.querySelector("header.site-header") : {}
            },
            getAd: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window.document.querySelector("#horizontal1-1") : {}
            },
            getAuthor: function() {
                return (0,
                s.default)(this, "article.writer.display_name", (0,
                s.default)(this, "article.writer", ""))
            },
            getCategoryName: function() {
                return (0,
                s.default)(this, "article.category.name")
            },
            getSubcategorySlug: function() {
                return (0,
                s.default)(this, "article.subcategory.slug", "")
            },
            getNextArticleTitle: function() {
                var e = (0,
                s.default)(this, "$store.state.Article.slideshowArticles[0].title", "");
                return e || (0,
                s.default)(this, "article.related_content[0].title", "Next Article")
            },
            getNextArticleSlug: function() {
                var e = (0,
                s.default)(this, "$store.state.Article.slideshowArticles[0].slug", "");
                return e || (0,
                s.default)(this, "article.related_content[0].slug", "/")
            },
            getChannelId: function() {
                var e = (0,
                s.default)(this, "$store.state.config.ads.adsense.channelIds", {})
                  , t = e[this.index];
                return this.isSlideshow ? e[this.index] + "+" + (0,
                s.default)(this, "$store.state.config.ads.adsense.slideshow.channelId", "") : (t || (t = e[e.length - 1]),
                t)
            },
            getNumberOfMobileAds: function() {
                return this.isSlideshow ? this.getAdsArrayFromSlideShow((0,
                s.default)(this, "article.content", [])).length : (0,
                s.default)(this, "article.content", []).filter(function(e) {
                    return "ad" === (0,
                    s.default)(e, "type", "")
                }).length
            },
            getRCP: function() {
                return this.isSlideshow ? (0,
                s.default)(this, "article.related_content", []).slice(0, 3) : (0,
                s.default)(this, "article.related_content", [])
            },
            getSlug: function() {
                return (0,
                s.default)(this, "article.slug", "")
            },
            getTargeting: function() {
                return {
                    art: this.getArticleNumbers(this.getSlug),
                    cat: (0,
                    s.default)(this, "article.category.name", ""),
                    ctype: (0,
                    s.default)(this, "article.type", ""),
                    pagetype: (0,
                    s.default)(this, "article.format", ""),
                    scat: (0,
                    s.default)(this, "article.subcategory.slug", ""),
                    tags: (0,
                    s.default)(this, "article.tags", "")
                }
            },
            getTitle: function() {
                return (0,
                s.default)(this, "article.title", "")
            },
            getWindow: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window : {}
            },
            getJwplayerAdvertisingTag: function() {
                var e = this.lowerCaseAndRemoveHyphens((0,
                s.default)(this, "article.category.slug", ""))
                  , t = this.lowerCaseAndRemoveHyphens((0,
                s.default)(this, "article.subcategory.slug", ""))
                  , i = this.getArticleNumbers((0,
                s.default)(this, "article.slug", ""))
                  , a = this.lowerCaseAndRemoveHyphens((0,
                s.default)(this, "article.type", ""))
                  , n = this.lowerCaseAndRemoveHyphens((0,
                s.default)(this, "article.format", ""));
                return "https://pubads.g.doubleclick.net/gampad/ads?sz=" + (this.getIsMobile ? "480x360" : "640x480") + "&iu=/6117/" + (this.getIsMobile ? "leaftv.mw.jw" : "leaftv.jw") + "&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=cat%3D" + e + "%26scat%3D" + t + "%26art%3D" + i + "%26ctype%3D" + a + "%26pagetype%3D" + n + "&correlator="
            },
            isLc: function() {
                return !(0,
                s.default)(this, "article.new_content", !1)
            },
            isLegacyArticle: function() {
                return "article" === (0,
                s.default)(this, "article.format", "")
            },
            isSlideshow: function() {
                return "slideshow" === (0,
                s.default)(this, "article.format", "")
            },
            getGoogleBlacklistedUrls: function() {
                return (0,
                s.default)(this, "$store.state.config.ads.googleBlacklistedUrls", {})
            },
            showAdLink: function() {
                return !this.getIsMobile && this.index < 1
            },
            showMobileJwplayer: function() {
                return this.getIsMobile && this.index < 1
            }
        }),
        methods: {
            getConfigAdValue: function(e) {
                return (0,
                s.default)(this, "$store.state.config.ads." + e, "")
            },
            getSlideShow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = e.filter(function(e) {
                    return "slides" === (0,
                    s.default)(e, "type", "")
                });
                return (0,
                s.default)(t, "[0]", [])
            },
            getAdsArrayFromSlideShow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return (0,
                s.default)(this.getSlideShow(e), "content", []).filter(function(e) {
                    return e.ad
                })
            },
            getMobileSizes: function() {
                return "atf" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? [[256, 192], [256, 144], [256, 256], [300, 250]] : [[300, 250]]
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "ad-adsense",
        props: {
            display: {
                type: Boolean,
                default: !1
            },
            clientId: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            },
            channelId: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        created: function() {},
        mounted: function() {
            var e = this;
            this.display && (this.enable = this.display,
            this.$script.load({
                src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                asnyc: !0
            }),
            window.adsbygoogle = window.adsbygoogle || [],
            this.$nextTick(function() {
                window.adsbygoogle.push({
                    params: {
                        google_ad_channel: e.channelId
                    }
                })
            }))
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? "display:inline-block;min-width:320px;max-width:1200px;width:100%;height:600px" : ""
            }
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-adsense"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        props: {
            device: {
                type: String,
                default: "desktop"
            },
            loc: {
                type: String,
                default: ""
            },
            sizes: {
                type: Array,
                default: function() {
                    return []
                }
            },
            slots: {
                type: String,
                default: "slot-not-defined"
            },
            pageNumber: {
                type: Number,
                default: 1
            },
            slotNumber: {
                type: Number,
                default: 1
            },
            slug: {
                type: String,
                default: "slug-not-defined"
            }
        },
        computed: {
            getSlot: function() {
                return {
                    id: this.slotId,
                    slotName: this.slots,
                    loc: this.loc,
                    sizes: this.sizes,
                    device: this.device
                }
            }
        },
        data: function() {
            return {
                slotId: "slot"
            }
        },
        created: function() {
            this.slotId = "" + this.slots + this.pageNumber + "-" + this.slotNumber
        },
        mounted: function() {
            this.$gpt.add(this.slug, this.getSlot)
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            class: "ad " + e.slots + " " + e.slotId,
            attrs: {
                id: e.slotId
            }
        })
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "AdLink",
        props: {
            clientId: {
                type: String,
                default: ""
            },
            display: {
                type: Boolean,
                default: !1
            },
            format: {
                type: String,
                default: "link"
            },
            insStyle: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        mounted: function() {
            this.display && (this.enable = this.display,
            this.$script.load({
                src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                asnyc: !0
            }),
            window.adsbygoogle = window.adsbygoogle || [],
            this.$nextTick(function() {
                window.adsbygoogle.push({})
            }))
        },
        method: {
            getPageNumber: function() {
                return this.pageNumber
            }
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? this.insStyle : ""
            }
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-link"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId,
                "data-ad-format": e.format
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        props: {
            index: {
                type: Number,
                default: 0
            },
            loaderUrl: {
                type: String,
                default: ""
            }
        },
        mounted: function() {
            this.$script.load({
                src: this.loaderUrl,
                asnyc: !0
            }),
            window._taboola = window._taboola || [],
            window._taboola.push({
                article: "auto"
            }),
            window._taboola.push({
                mode: "thumbnails-a",
                container: "taboola-below-article-thumbnails-" + this.index,
                placement: "Below Article Thumbnails",
                target_type: "mix"
            }),
            window._taboola.push({
                flush: !0
            })
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-taboola"
        }, [i("div", {
            attrs: {
                id: "taboola-below-article-thumbnails-" + e.index
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "out-of-page"
    }
      , n = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            attrs: {
                id: "out-of-page"
            }
        })
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        beforeMount: function() {
            window.googletag || this.initialSetup()
        },
        computed: {
            adUnitCode: function() {
                var e = (0,
                n.default)(this, "$store.state.config.ads.GPT", {});
                return this.$store.getters.getIsMobile ? e.adUnitPathMobile : e.adUnitPathDesktop
            }
        },
        methods: {
            defineAdSlot: function(e) {
                return window.googletag.defineSlot(this.getAdCode(e.id), e.sizes, e.id).addService(window.googletag.pubads()).setTargeting("loc", e.loc)
            },
            defineOutOfPage: function() {
                return window.googletag.defineOutOfPageSlot(this.getAdCode("out-of-page"), "out-of-page").addService(window.googletag.pubads())
            },
            defineAds: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function() {
                    t.forEach(function(t) {
                        t.Slot = e.defineAdSlot(t)
                    })
                }
            },
            defineAdsAndSetTargeting: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.googletag.cmd.push(this.setGoogleTargeting(t)),
                window.googletag.cmd.push(this.defineAds(e))
            },
            defaultFilterAds: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = arguments[1];
                return t.filter(function(t, a) {
                    return !e.$store.getters.getIsMobile || 0 === i || !e.showFirstMobileAd || 0 === a
                })
            },
            display: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , n = this.getAmazonBids(e);
                t.refreshBids(e, i, a)
                console.log("calling refreshBids", new Date());  
                // window.apstag.fetchBids({
                //     slots: n,
                //     timeout: 2e3
                // }, function(n) {
                //     t.refreshBids(e, i, a)
                // })
            },
            getAmazonBids: function(e) {
                var t = this;
                return e.filter(function(e) {
                    return t.isBiddable(e)
                }).map(function(e) {
                    return {
                        slotID: e.id,
                        sizes: e.sizes
                    }
                })
            },
            isBiddable: function(e) {
                return "out-of-page" !== e.id
            },
            dfpkv: function() {
                var e = this.locationHasDfpkvFlag(decodeURIComponent(document.location.search));
                if (e) {
                    for (var t = {}, i = e[1].split(","), a = 0; a < i.length; a++) {
                        var n = i[a].split(":")
                          , r = n[0]
                          , o = n[1];
                        r && o && (void 0 === t[r] && (t[r] = []),
                        t[r].push(o))
                    }
                    for (var s in t)
                        t.hasOwnProperty(s) && window.googletag.pubads().setTargeting(s, t[s].join())
                }
            },
            fetchHiddenAds: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.slots[e].ads.slice(1)
                  , i = this.slots[e].targets;
                this.defineAdsAndSetTargeting(t, i),
                this.display(t)
            },
            filterAdsByDevice: function() {
                var e = this;
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter(function(t) {
                    return "mobile" === t.device && e.$store.getters.getIsMobile || "desktop" === t.device && !e.$store.getters.getIsMobile
                })
            },
            getSlotFromAdsArray: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
                    return e.Slot
                })
            },
            getSlotObjectFromSlug: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return (0,
                n.default)(this, "$store.state.ads[" + e + "]", {})
            },
            generateRefreshSlotsHashmap: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(e, t) {
                    return e[t] = !0,
                    e
                }, {})
            },
            getAdCode: function(e) {
                return "" + this.adUnitCode + e
            },
            getArticleNumbers: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = /\/([0-9]+)\/.*/g;
                return t.test(e) ? e.replace(t, "$1") : "none"
            },
            loadAPS: function() {
                !function(e, t, i, a, n, r, o) {
                    function s(i, a) {
                        t[e]._Q.push([i, a])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            s("i", arguments)
                        },
                        fetchBids: function() {
                            s("f", arguments)
                        },
                        setDisplayBids: function() {},
                        _Q: []
                    },
                    r = i.createElement(a),
                    r.async = !0,
                    r.src = "//c.amazon-adsystem.com/aax2/apstag.js",
                    o = i.getElementsByTagName(a)[0],
                    o.parentNode.insertBefore(r, o))
                }("apstag", window, document, "script"),
                window.apstag.init({
                    pubID: this.pubID,
                    adServer: this.adServer,
                    bidTimeout: 2e3
                })
            },
            initialLoadSetup: function() {
                var e = this
                  , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return function() {
                    t && e.defineOutOfPage(),
                    e.dfpkv(),
                    window.googletag.pubads().setTargeting("ksg", Krux.segments),
                    window.googletag.pubads().setTargeting("kuid", Krux.user),
                    window.googletag.pubads().enableSingleRequest(),
                    window.googletag.pubads().collapseEmptyDivs(),
                    window.googletag.enableServices()
                }
            },
            loadAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                0 === t)
                  , n = this.getSlotObjectFromSlug(e);
                n.ads = this.filterAdsByDevice(n.ads),
                n.targets = i;
                var r = this.defaultFilterAds(n.ads, t);
                return this.defineAdsAndSetTargeting(r, i),
                window.googletag.cmd.length && window.googletag.cmd.push(this.initialLoadSetup(a)),
                this.display(r, !this.isPubmatic, a),
                n
            },
            loadHomepageCanopyAd: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (this.defineAdsAndSetTargeting([], e),
                window.googletag.cmd.length && window.googletag.cmd.push(this.initialLoadSetup(!0)),
                window.googletag.cmd.push(function() {
                    window.googletag.pubads().refresh()
                }))
            },
            loadAdditionalAdsDynamically: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.getSlotObjectFromSlug(e);
                if (t.ads) {
                    var i = t.ads.filter(function(e) {
                        return !e.displayed
                    });
                    window.googletag.cmd.push(this.setGoogleTargeting(t.targets)),
                    window.googletag.cmd.push(this.defineAds(i)),
                    this.display(i)
                }
            },
            locationHasDfpkvFlag: function(e) {
                var t = decodeURIComponent(e)
                  , i = /.*dfpkv=([^&]*)/
                  , a = t.match(i);
                return !!(a && a.length > 0) && a
            },
            lowerCaseAndRemoveHyphens: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\W/g, "").toLowerCase()
            },
            refresh: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.display(e, t)
            },
            refreshAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , i = (0,
                n.default)(this, "$store.state.ads[" + e + "].ads", []);
                if (t && t.length) {
                    var a = this.generateRefreshSlotsHashmap(t);
                    i = i.filter(function(e) {
                        return a[e.id]
                    })
                }
                return window.googletag.cmd.push(this.setGoogleTargeting((0,
                n.default)(this, "$store.state.ads[" + e + "].targets", {}))),
                this.refresh(i, !0)
            },
            refreshBids: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];                

                window.googletag.cmd.push(function() {
                    window.apstag.fetchBids({
                        slots: t.getAmazonBids(e),
                        timeout: 2e3
                    }, function(n) {
                        window.apstag.setDisplayBids()
                    })
                    t.loadPubmaticAds(e, i, a)
                })
            },
            loadPubmaticAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , a = this.getSlotFromAdsArray(e);
                //window.apstag.setDisplayBids(),
                e.forEach(function(e) {
                    window.googletag.display(e.id),
                    e.displayed = !0
                }),
                a = a && a.length ? a : null,
                i && window.googletag.display("out-of-page"),
                t && window.googletag.pubads().refresh(a)
            },
            setAdUnitCode: function(e) {
                this.adUnitCode = e ? "/6117/hunker.mw/" : "/6117/hunker/"
            },
            setGoogleTargeting: function(e) {
                var t = this;
                return function() {
                    for (var i in e) {
                        var a = e[i];
                        a = Array.isArray(a) ? a.map(function(e) {
                            return t.lowerCaseAndRemoveHyphens(e)
                        }) : t.lowerCaseAndRemoveHyphens(a),
                        window.googletag.pubads().setTargeting(i, a)
                    }
                }
            },
            setTargets: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.targets = e
            },
            setup: function(e) {},
            initialSetup: function() {
                var e = (0,
                n.default)(this, "$store.state.config.ads.GPT", {})
                  , t = (0,
                n.default)(e, "pubmaticURL", "");
                window.PWT = {},
                window.googletag = window.googletag || {},
                window.googletag.cmd = window.googletag.cmd || [],
                window.PWT.jsLoaded = function() {
                    !function() {
                        var e = document.createElement("script")
                          , t = "https:" == document.location.protocol;
                        e.src = (t ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(e, i)
                    }()
                }
                ,
                function() {
                    var e = window.location.href
                      , i = t
                      , a = "";
                    if (e.indexOf("pwtv=") > 0) {
                        var n = /pwtv=(.*?)(&|$)/g
                          , r = n.exec(e);
                        r.length >= 2 && r[1].length > 0 && (a = "/" + r[1])
                    }
                    var o = document.createElement("script");
                    o.async = !0,
                    o.type = "text/javascript",
                    o.src = i + a + "/pwt.js";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(o, s)
                }(),
                window.Krux || ((window.Krux = function() {
                    Krux.q.push(arguments)
                }
                ).q = []),
                function() {
                    function e(e) {
                        var t, i = "kx" + e;
                        return window.localStorage ? window.localStorage[i] || "" : navigator.cookieEnabled ? (t = document.cookie.match(i + "=([^;]*)")) && unescape(t[1]) || "" : ""
                    }
                    Krux.user = e("user"),
                    Krux.segments = e("segs") && e("segs").split(",") || []
                }(),
                function(e, t, i, a, n, r, o) {
                    function s(i, a) {
                        t[e]._Q.push([i, a])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            s("i", arguments)
                        },
                        fetchBids: function() {
                            s("f", arguments)
                        },
                        setDisplayBids: function() {},
                        _Q: []
                    },
                    r = i.createElement(a),
                    r.async = !0,
                    r.src = "//c.amazon-adsystem.com/aax2/apstag.js",
                    o = i.getElementsByTagName(a)[0],
                    o.parentNode.insertBefore(r, o))
                }("apstag", window, document, "script"),
                window.apstag.init({
                    pubID: "3066",
                    adServer: "googletag",
                    bidTimeout: 2e3
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(749)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(750)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(751)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return e.showPlayer ? i("div", {
            staticClass: "component-article-jwplayer"
        }, [i("h2", {
            staticClass: "jwplayer__label"
        }, [e._v("\n    " + e._s(e.videoLabel) + "\n  ")]), i("div", {
            ref: "jwplayerContainerOuter",
            staticClass: "jwplayer__container-outer"
        }, [i("div", {
            ref: "jwplayerContainer",
            staticClass: "jwplayer__container",
            class: {
                "jwplayer__container--sticky": e.isSticky
            }
        }, [i("div", {
            attrs: {
                id: "jw-player"
            }
        }), i("div", {
            staticClass: "jwplayer__close",
            on: {
                click: e.closeJwplayer
            }
        }, [i("span", {
            staticClass: "close-x"
        })])])])]) : e._e()
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(64)
      , s = a(o)
      , l = i(752)
      , c = a(l);
    t.default = {
        name: "article-jwplayer",
        props: {
            isMobile: {
                type: Boolean,
                default: !1
            },
            playerUrl: {
                type: String,
                required: !0
            },
            playlistUrl: {
                type: String,
                required: !0
            },
            advertisingTag: {
                type: String,
                required: !0
            },
            videoLabel: {
                type: String,
                required: !1,
                default: "Video of the Day"
            },
            bidderName: {
                type: String,
                default: ""
            },
            bidderId: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                adCompleted: !1,
                adRequest: !1,
                allowSticky: !0,
                handler: {},
                isSticky: !1,
                needToPause: !1,
                showPlayer: !1
            }
        },
        mounted: function() {
            var e = this;
            if (this.isMobile || !this.$store.getters.getIsMobile) {
                this.showPlayer = !0,
                window.dataLayer = window.dataLayer || [],
                window.lgt = window.lgt || {};
                (new c.default).load({
                    src: (0,
                    r.default)(this, "playerUrl", ""),
                    async: !0
                }, function() {
                    e.handler = window.jwplayer("jw-player");
                    var t = {
                        mute: !0,
                        playlist: (0,
                        r.default)(e, "playlistUrl", ""),
                        advertising: {
                            client: "googima",
                            offset: "pre",
                            tag: (0,
                            r.default)(e, "advertisingTag", "")
                        }
                    };
                    (0,
                    r.default)(e, "bidderId", "") && (t.advertising.bids = (0,
                    r.default)(e, "getBidsConfig", {})),
                    e.handler.setup(t),
                    e.pushToDataLayer({
                        event: "player_jwcall_attempt"
                    }),
                    e.handler.on("error", function(t) {
                        e.showPlayer = !1
                    }),
                    e.handler.on("setupError", function(t) {
                        e.showPlayer = !1;
                        var i = (0,
                        r.default)(t, "error", "Error: setup error").toString();
                        window.dataLayer.push({
                            event: "player_error",
                            message: i,
                            size: e.getJwPlayerSize()
                        })
                    }),
                    e.handler.on("adError", function(t) {
                        window.dataLayer.push({
                            event: "ad_error",
                            tag: e.advertisingTag
                        })
                    }),
                    e.handler.on("ready", function(t) {
                        window.lgt.jwplayerInit = !0,
                        e.pushToDataLayer({
                            event: "player_impression",
                            size: e.getJwPlayerSize(),
                            message: (0,
                            r.default)(t, "viewable", 1) ? "in view" : "not in view"
                        })
                    }),
                    e.handler.on("play", function(t) {
                        if (!(0,
                        r.default)(t, "viewable", 1) && (0,
                        r.default)(e, "isSticky", !1) && e.handler.getMute())
                            return void e.handler.pause();
                        var i = (0,
                        r.default)(t, "playReason", "");
                        "interaction" === i && (e.isMobile && e.handler.setMute(!1),
                        e.pushToDataLayer({
                            event: "player_play_button",
                            message: (0,
                            r.default)(t, "viewable", 1) ? "in view" : "not in view"
                        })),
                        "autostart" !== i && "playlist" !== i || e.pushToDataLayer({
                            event: "video_play",
                            size: e.getJwPlayerSize(),
                            message: (0,
                            r.default)(t, "viewable", 1) ? "in view" : "not in view"
                        }),
                        (0,
                        r.default)(e, "needToPause", !1) && (e.needToPause = !1,
                        e.handler.pause())
                    }),
                    e.handler.on("complete", function(t) {
                        e.pushToDataLayer({
                            event: "video_complete",
                            size: e.getJwPlayerSize()
                        })
                    }),
                    e.handler.on("adClick", function(t) {
                        e.pushToDataLayer({
                            event: "ad_click",
                            size: e.getJwPlayerSize(),
                            tag: (0,
                            r.default)(t, "tag", "")
                        })
                    }),
                    e.handler.on("adRequest", function(t) {
                        e.adRequest = !0,
                        e.pushToDataLayer({
                            event: "ad_tagcalled",
                            size: e.getJwPlayerSize(),
                            tag: (0,
                            r.default)(t, "tag", "")
                        })
                    }),
                    e.handler.on("adPlay", function(t) {
                        "paused" !== (0,
                        r.default)(t, "oldstate") && e.pushToDataLayer({
                            event: "ad_play",
                            size: e.getJwPlayerSize(),
                            tag: (0,
                            r.default)(t, "tag", "")
                        })
                    }),
                    e.handler.on("adComplete", function(t) {
                        e.pushToDataLayer({
                            event: "ad_complete",
                            size: e.getJwPlayerSize(),
                            tag: (0,
                            r.default)(t, "tag", "")
                        }),
                        e.adCompleted = !0
                    }),
                    e.handler.on("adSkipped", function(t) {
                        e.adCompleted = !0
                    }),
                    window.addEventListener("scroll", (0,
                    s.default)(e.scrollHandler, 50), !1),
                    window.addEventListener("resize", (0,
                    s.default)(e.resizeHandler, 50), !1)
                }).then(function(e) {}).catch(function(e) {})
            }
        },
        methods: {
            pushToDataLayer: function(e) {
                var t = e.event
                  , i = e.message
                  , a = e.tag
                  , n = e.size;
                window.dataLayer.push({
                    event: t || "",
                    message: i || "",
                    tag: a || "",
                    size: n || ""
                })
            },
            getJwPlayerSize: function() {
                return (0,
                r.default)(this, "isSticky", !1) ? "resized" : "fullsize"
            },
            scrollHandler: function() {
                this.isMobile || this.setJwPlayerPosition()
            },
            resizeHandler: function() {
                this.isMobile || (0,
                r.default)(this, "isSticky", !1) || this.resizeJwPlayer()
            },
            setJwPlayerPosition: function() {
                if ((0,
                r.default)(this, "allowSticky", !0)) {
                    var e = (0,
                    r.default)(this, "$refs.jwplayerContainerOuter", {});
                    if (e) {
                        var t = e.getBoundingClientRect();
                        (0,
                        r.default)(this, "isSticky", !1) !== t.top < -50 && (e.style.height = t.top < -50 ? e.offsetHeight + "px" : "auto",
                        this.isSticky = t.top < -50,
                        (0,
                        r.default)(this, "isSticky", !1) ? (this.pushToDataLayer({
                            event: "player_resize"
                        }),
                        this.resizeJwPlayer(300)) : this.resizeJwPlayer())
                    }
                }
            },
            closeJwplayer: function() {
                this.isSticky = !1,
                this.allowSticky = !1,
                this.handler.setMute(!0),
                this.resizeJwPlayer(),
                (0,
                r.default)(this, "adCompleted", !1) || !(0,
                r.default)(this, "adRequest", !1) ? this.handler.pause() : this.needToPause = !0
            },
            resizeJwPlayer: function(e) {
                var t = (0,
                r.default)(this, "$refs.jwplayerContainerOuter", {});
                e = e || (0,
                r.default)(t, "offsetWidth", 0);
                var i = e * (9 / 16);
                this.handler.resize(e, i)
            }
        },
        computed: {
            getBidsConfig: function() {
                return {
                    settings: {
                        mediationLayerAdServer: "dfp"
                    },
                    bidders: [{
                        name: (0,
                        r.default)(this, "bidderName", ""),
                        id: (0,
                        r.default)(this, "bidderId", "")
                    }]
                }
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , o = function() {
        function e() {
            if (a(this, e),
            !this.isBrowser())
                return void (this.scripts = {});
            this.scripts = window.ScriptLoader || {},
            window.ScriptLoader = this.scripts
        }
        return r(e, [{
            key: "isBrowser",
            value: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : n(window))
            }
        }, {
            key: "load",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments[1];
                return this.hasScriptBeenLoaded(e.src) ? Promise.resolve() : (this.setScript(e.src),
                this.getScriptLoaderPromise(e.src, e.async, t))
            }
        }, {
            key: "appendScript",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , i = arguments[2]
                  , a = arguments[3]
                  , n = document.createElement("script");
                n.type = "text/javascript",
                n.src = e,
                n.async = t,
                n.onload = i,
                n.onerror = a,
                document.head.appendChild(n)
            }
        }, {
            key: "hasScriptBeenLoaded",
            value: function(e) {
                return this.scripts[e]
            }
        }, {
            key: "setScript",
            value: function(e) {
                this.scripts[e] = !0
            }
        }, {
            key: "getScriptLoaderPromise",
            value: function(e, t, i) {
                return new Promise(this.promiseFunction(e, t, i))
            }
        }, {
            key: "promiseFunction",
            value: function(e, t) {
                var i = this
                  , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                ;
                return function(n, r) {
                    i.appendScript(e, t, function() {
                        n(a())
                    }, function() {
                        r("error")
                    })
                }
            }
        }]),
        e
    }();
    t.default = o
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(754)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(755)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-breadcrumbs"
        }, [i("nav", [i("ol", {
            staticClass: "breadcrumbs",
            attrs: {
                itemscope: "",
                itemtype: "http://schema.org/BreadcrumbList"
            }
        }, e._l(e.links, function(t, a) {
            return i("li", {
                staticClass: "breadcrumbs__item",
                attrs: {
                    itemprop: "itemListElement",
                    itemscope: "",
                    itemtype: "http://schema.org/ListItem"
                }
            }, [i("a", {
                attrs: {
                    href: t.url,
                    itemscope: "",
                    itemtype: "http://schema.org/Thing",
                    itemprop: "item"
                }
            }, [i("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [e._v(e._s(t.label))])]), i("meta", {
                attrs: {
                    itemprop: "position",
                    content: a + 1
                }
            })])
        }))])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "breadcrumbs",
        props: {
            links: {
                type: Array,
                default: function() {
                    return []
                }
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(757)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(758)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-section"
        }, ["title" === e.getSectionType ? i("h2", {
            staticClass: "section-title",
            domProps: {
                innerHTML: e._s(e.section.content)
            }
        }) : e._e(), "custom_title" === e.getSectionType && e.section.step ? i("h2", {
            staticClass: "section-title section-title--step"
        }, [e._v("\n    Step " + e._s(e.section.step) + " " + e._s(e.getSectionContent) + "\n  ")]) : "content" === e.getSectionType && e.section.step ? i("h2", {
            staticClass: "section-title section-title--step"
        }, [e._v("\n    Step " + e._s(e.section.step) + "\n  ")]) : e._e(), "image" === e.getSectionType ? i("div", {
            staticClass: "section-image"
        }, [e._t("image")], 2) : e._e(), "embed" === e.getSectionType ? i("parse-embed", {
            attrs: {
                content: e.section.content
            }
        }) : e._e(), "content" === e.getSectionType ? i("div", {
            staticClass: "section-content",
            domProps: {
                innerHTML: e._s(e.formatArticleContent(e.section.content))
            }
        }) : e._e(), "slides" === e.getSectionType ? i("div", [e._t("slideshow", null, {
            slideshow: e.section.content
        })], 2) : e._e(), "tip" === e.getSectionType || "warning" === e.getSectionType || "things_needed" === e.getSectionType ? i("subsection", {
            class: "section-subsection section-subsection--" + e.getSectionType,
            attrs: {
                section: e.section,
                site: e.site,
                sponsored: e.sponsored
            }
        }) : e._e()], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(759)
      , s = a(o)
      , l = i(782)
      , c = a(l);
    t.default = {
        props: {
            type: {
                type: String,
                default: ""
            },
            section: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            sponsored: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            site: {
                type: String,
                default: ""
            },
            slug: {
                type: String,
                default: ""
            }
        },
        components: {
            ParseEmbed: s.default,
            Subsection: c.default
        },
        computed: {
            getSectionType: function() {
                return (0,
                r.default)(this, "section.type", "")
            },
            getSectionContent: function() {
                return (0,
                r.default)(this, "section.content", "")
            }
        },
        methods: {
            formatArticleContent: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(new RegExp('(<as*[^>]*)(href="https?://)((?!(?:([^/]+.)?' + this.site + '))[^"]+)"([^>]*)(?:[^>]*)>',"ig"), '$1$2$3"$4 target="_blank">')
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(760)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-parse-embed"
        }, [e.isGiphy ? i("div", [i("embed-giphy", {
            attrs: {
                content: e.content.url
            }
        })], 1) : e.isTwitter ? i("div", [i("embed-twitter", {
            attrs: {
                content: e.content.html
            }
        })], 1) : e.isImgur ? i("div", [i("embed-imgur", {
            attrs: {
                content: e.content.html
            }
        })], 1) : e.isInstagram ? i("div", [i("embed-instagram", {
            attrs: {
                content: e.content.html
            }
        })], 1) : e.isVideo ? i("div", [i("embed-video", {
            attrs: {
                content: e.content.html
            }
        })], 1) : e.isFacebookVideo ? i("div", [i("embed-facebook-video", {
            attrs: {
                content: e.content.html,
                url: e.content.url
            }
        })], 1) : e.isFacebookPost ? i("div", [i("embed-facebook-post", {
            attrs: {
                content: e.content.html
            }
        })], 1) : e.isPodcast ? i("div", [i("embed-podcast", {
            attrs: {
                content: e.content.html
            }
        })], 1) : i("div", {
            staticClass: "component-embed-default"
        }, [i("div", {
            staticClass: "default-content",
            domProps: {
                innerHTML: e._s(e.content.html)
            }
        })])])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(761)
      , r = a(n)
      , o = i(764)
      , s = a(o)
      , l = i(767)
      , c = a(l)
      , u = i(770)
      , d = a(u)
      , f = i(772)
      , p = a(f)
      , h = i(774)
      , m = a(h)
      , g = i(777)
      , v = a(g)
      , y = i(779)
      , b = a(y);
    t.default = {
        name: "parse-embed",
        props: {
            content: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        components: {
            EmbedFacebookPost: r.default,
            EmbedFacebookVideo: s.default,
            EmbedGiphy: c.default,
            EmbedImgur: d.default,
            EmbedInstagram: p.default,
            EmbedPodcast: m.default,
            EmbedTwitter: v.default,
            EmbedVideo: b.default
        },
        computed: {
            isVideo: function() {
                return "YouTube" === this.content.provider_name || "Vimeo" === this.content.provider_name || "Rumble.com" === this.content.provider_name
            },
            isFacebookVideo: function() {
                return "Facebook" === this.content.provider_name && "video" === this.content.type
            },
            isFacebookPost: function() {
                return "Facebook" === this.content.provider_name && "rich" === this.content.type
            },
            isGiphy: function() {
                return "GIPHY" === this.content.provider_name
            },
            isImgur: function() {
                return "Imgur" === this.content.provider_name
            },
            isInstagram: function() {
                return "Instagram" === this.content.provider_name
            },
            isPodcast: function() {
                return "ART19" === this.content.provider_name
            },
            isTwitter: function() {
                return "Twitter" === this.content.provider_name
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(762)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(763)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-facebook-post"
        }, [i("div", {
            staticClass: "facebook-post-embed",
            domProps: {
                innerHTML: e._s(e.embedData)
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-facebook-video",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                embedData: ""
            }
        },
        mounted: function() {
            this.loadFB();
            var e = this.content
              , t = e.match(/<div class='?"?fb-post'?"?.*data-href='?"?([^"]+)'?"?.+/);
            this.embedData = t ? t[0] : this.content
        },
        methods: {
            loadFB: function() {
                window.FB && window.FB.XFBML && window.FB.XFBML.parse(this.el)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(765)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(766)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-facebook-video"
        }, [i("div", {
            domProps: {
                innerHTML: e._s(e.embed)
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = 0;
    t.default = {
        name: "embed-facebook-video",
        props: {
            content: {
                type: String,
                default: ""
            },
            url: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                autoplay: 0,
                embed: ""
            }
        },
        created: function() {
            var e = this.content.match(/(<div class="fb-video"?:\r|\n|.)+/gim);
            e && e.length && (this.embed = e[0])
        },
        mounted: function() {
            0 === a && (a++,
            this.embed = this.embed.replace(/<div class="fb-video"/i, '<div class="fb-video" data-autoplay=true')),
            this.loadFB()
        },
        methods: {
            loadFB: function() {
                window.FB && window.FB.XFBML && window.FB.XFBML.parse(this.el)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(768)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(769)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-giphy"
        }, [i("img", {
            staticClass: "giphy-content",
            attrs: {
                src: e.content
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-giphy",
        props: {
            content: {
                type: String,
                default: ""
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(771)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-imgur"
        }, [i("div", {
            staticClass: "imgur-content",
            domProps: {
                innerHTML: e._s(e.getEmbed)
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-imgur",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        beforeMount: function() {
            var e = document.createElement("script");
            e.src = "//s.imgur.com/min/embed.js",
            e.async = !0,
            document.head.appendChild(e)
        },
        computed: {
            getEmbed: function() {
                return this.content.replace(/<script async src="\/\/s.imgur.com\/min\/embed.js" charset="utf-8"><\/script>/gi, "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(773)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-instagram"
        }, [i("div", {
            staticClass: "instagram-content",
            domProps: {
                innerHTML: e._s(e.getEmbed)
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-instagram",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        beforeMount: function() {
            if (window.config || (window.config = {}),
            !window.config.instagram) {
                window.config.instagram = !0;
                var e = document.createElement("script");
                e.src = "//platform.instagram.com/en_US/embeds.js",
                e.async = !0,
                document.head.appendChild(e)
            }
        },
        mounted: function() {
            window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process()
        },
        computed: {
            getEmbed: function() {
                return this.content.replace(/<script async defer src="\/\/platform.instagram.com\/en_US\/embeds.js"><\/script>/gi, "").replace(/<script async defer src="\/\/www.instagram.com\/embed.js"><\/script>/gi, "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(775)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(776)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-podcast"
        }, [i("div", {
            ref: "podcast",
            staticClass: "podcast-content",
            domProps: {
                innerHTML: e._s(e.getContent)
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "embed-podcast",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        metaInfo: {
            script: [{
                src: "//cdn.embed.ly/player-0.0.12.min.js"
            }]
        },
        data: function() {
            return {
                player: null,
                podcastId: ""
            }
        },
        beforeMount: function() {
            this.podcastId = this.getIDFromSource(this.content)
        },
        mounted: function() {
            this.loadEventListener()
        },
        computed: {
            getContent: function() {
                var e = this.content;
                return e = e.replace(/width: [0-9]+px;/, "width: 100%;")
            }
        },
        methods: {
            getIDFromSource: function(e) {
                var t = new RegExp(/\/([a-z0-9-]+)\/embed/)
                  , i = t.exec(e);
                return (0,
                n.default)(i, "[1]", "")
            },
            loadScript: function() {
                var e = this
                  , t = document.createElement("script");
                t.type = "text/javascript",
                t.async = !0,
                t.src = "//cdn.embed.ly/player-0.0.12.min.js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(t, i),
                t.onload = function() {
                    e.loadEventListener()
                }
            },
            attachPlayerListener: function() {
                var e = this;
                this.player.on(playerjs.EVENTS.PLAY, function(t) {
                    e.emitEvent("podcast play")
                }),
                this.player.on(playerjs.EVENTS.PAUSE, function(t) {
                    e.emitEvent("podcast pause")
                }),
                this.player.on(playerjs.EVENTS.ENDED, function(t) {
                    e.emitEvent("podcast ended")
                }),
                this.player.on(playerjs.EVENTS.ERROR, function(t) {
                    e.emitEvent("podcast error")
                })
            },
            setUpEvent: function(e) {
                var t = this;
                return function(i) {
                    t.emitEvent("podcast " + e)
                }
            },
            emitEvent: function(e) {
                var t = {
                    event: e,
                    title: this.podcastId
                };
                this.$root.$emit("lg-GTM-dataLayer", {
                    type: "push",
                    event: t
                })
            },
            loadEventListener: function() {
                var e = this
                  , t = this.$refs.podcast.querySelector("iframe");
                this.player = new playerjs.Player(t),
                this.player.on("ready", function() {
                    e.emitEvent("podcast ready"),
                    e.attachPlayerListener()
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(778)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            ref: "twitterEmbed",
            staticClass: "component-embed-twitter"
        }, [i("div", {
            staticClass: "twitter-content",
            domProps: {
                innerHTML: e._s(e.content)
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-twitter",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        beforeMount: function() {
            if (window.config || (window.config = {}),
            !window.config.twitter) {
                window.config.twitter = !0;
                var e = document.createElement("script");
                e.src = "//platform.twitter.com/widgets.js",
                e.async = !0,
                document.head.appendChild(e)
            }
        },
        mounted: function() {
            window.twttr && window.twttr.widgets.load(this.$refs.twitterEmbed)
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(780)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(781)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-embed-video"
        }, [i("div", {
            staticClass: "video-content",
            domProps: {
                innerHTML: e._s(e.getContent)
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "embed-video",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        computed: {
            getContent: function() {
                var e = this.content;
                return e = e.replace(/width="[0-9]+"/, ""),
                e = e.replace(/height="[0-9]+"/, "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(783)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(784)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-subsection"
        }, [i("h3", {
            staticClass: "subsection-heading"
        }, [e._v("\n    " + e._s(e.getSubsectionHeading(e.getSectionType)) + "\n    "), e.isSponsored ? i("div", {
            staticClass: "tips__sponsored"
        }, [e.getArticleSponsorship.author_byline ? i("span", {
            staticClass: "byline__sponsored"
        }, [e._v(e._s(e.getArticleSponsorship.author_byline))]) : e._e(), e.getArticleSponsorship.sponsor_logo_link && e.getArticleSponsorship.sponsor_logo ? i("a", {
            attrs: {
                href: e.getArticleSponsorship.sponsor_logo_link
            }
        }, [e.getArticleSponsorship.sponsor_logo ? i("img", {
            staticClass: "logo__sponsored",
            attrs: {
                src: e._f("resizeImage")(e.getArticleSponsorship.sponsor_logo, e.resizeSponsored),
                alt: e.getArticleSponsorship.campaign
            }
        }) : e._e()]) : e.getArticleSponsorship.sponsor_logo ? i("img", {
            staticClass: "logo__sponsored",
            attrs: {
                src: e._f("resizeImage")(e.getArticleSponsorship.sponsor_logo, e.resizeSponsored),
                alt: e.getArticleSponsorship.campaign
            }
        }) : e._e()]) : e._e()]), "things_needed" === e.getSectionType ? i("div", {
            staticClass: "subsection-content"
        }, [i("ul", {
            staticClass: "things-needed-list"
        }, e._l(e.getFirstColumnThingsNeeded, function(t) {
            return i("li", {
                staticClass: "things-needed-item",
                domProps: {
                    innerHTML: e._s(e.formatContent(t))
                }
            })
        })), i("ul", {
            staticClass: "things-needed-list"
        }, e._l(e.getSecondColumnThingsNeeded, function(t) {
            return i("li", {
                staticClass: "things-needed-item",
                domProps: {
                    innerHTML: e._s(e.formatContent(t))
                }
            })
        }))]) : i("div", {
            staticClass: "subsection-content",
            domProps: {
                innerHTML: e._s(e.formatContent(e.section.content))
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        props: {
            section: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            sponsored: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            site: {
                type: String,
                default: ""
            }
        },
        computed: {
            resizeSponsored: function() {
                return "x16"
            },
            getFirstColumnThingsNeeded: function() {
                var e = (0,
                n.default)(this, "section.content", []);
                return e.slice(0, Math.ceil(e.length / 2))
            },
            getSecondColumnThingsNeeded: function() {
                var e = (0,
                n.default)(this, "section.content", []);
                return e.slice(Math.ceil(e.length / 2))
            },
            getSectionType: function() {
                return (0,
                n.default)(this, "section.type", "")
            },
            getArticleSponsorship: function() {
                return (0,
                n.default)(this, "sponsored", {})
            },
            isSponsored: function() {
                return (0,
                n.default)(this, "sponsored", !1)
            }
        },
        methods: {
            getSubsectionHeading: function(e) {
                return "tip" === e ? "Tips" : "warning" === e ? "! Warning !" : "Things You'll Need"
            },
            formatContent: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(new RegExp('(<as*[^>]*)(href="https?://)((?!(?:([^/]+.)?' + this.site + '))[^"]+)"([^>]*)(?:[^>]*)>',"ig"), '$1$2$3"$4 target="_blank">')
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(786)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(787)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(788)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-article-inline-slideshow"
        }, [i("div", {
            staticClass: "slideshow-container"
        }, [i("div", {
            staticClass: "slideshow__count-attribution-container"
        }, [i("div", {
            staticClass: "slideshow__attribution"
        }, [i("attribution", {
            attrs: {
                image: e.getImage
            }
        })], 1), i("div", {
            staticClass: "slideshow__count"
        }, [e._v("\n        " + e._s(e.getCount) + " of " + e._s(e.total) + "\n      ")])]), i("div", {
            staticClass: "slideshow__slide-container"
        }, [i("div", {
            staticClass: "slideshow__slides"
        }, [i("div", {
            staticClass: "slide-container"
        }, [i("div", {
            staticClass: "slideshow__arrow arrow--left",
            class: {
                "first-slide": 1 === e.currentSlide
            },
            on: {
                click: function(t) {
                    e.goToSlide(e.currentSlide - 1)
                }
            }
        }, [e._m(0)]), e.lastSlide ? i("a", {
            staticClass: "slideshow__arrow arrow--right arrow--next-article",
            attrs: {
                href: e.nextArticleSlug
            }
        }, [e._m(1)]) : e.currentSlide !== e.total + 1 ? i("div", {
            staticClass: "slideshow__arrow arrow--right",
            class: {
                "first-slide": 1 === e.currentSlide
            },
            on: {
                click: function(t) {
                    e.goToSlide(e.currentSlide + 1)
                }
            }
        }, [e._m(2)]) : e._e(), i("div", {
            staticClass: "slide-wrapper"
        }, [e._l(e.slides, function(t, a) {
            return i("div", {
                staticClass: "slide"
            }, [i("div", {
                staticClass: "mobile-content"
            }, [i("h2", {
                staticClass: "section-title"
            }, [e._v("\n                  " + e._s(t.custom_title) + "\n                ")])]), i("div", {
                staticClass: "slide--image-wrapper"
            }, [i("img", {
                staticClass: "slide--item__img",
                style: e.setRight(a),
                attrs: {
                    src: e.getImgSrc(t),
                    width: "100%"
                }
            })]), i("div", {
                staticClass: "mobile-content"
            }, [i("attribution", {
                attrs: {
                    image: e.getImage
                }
            }), i("div", {
                staticClass: "section-content",
                domProps: {
                    innerHTML: e._s(e.getSlideContent(t))
                }
            }), t.ad ? i("div", [i("ad", {
                attrs: {
                    slots: t.ad.slot,
                    pageNumber: e.articleIndex + 1,
                    slotNumber: t.ad.slotNumber,
                    sizes: [[300, 250]],
                    device: "mobile",
                    loc: t.ad.loc,
                    category: e.category,
                    subcategory: e.subcategory,
                    slug: e.slug
                }
            })], 1) : e._e()], 1)])
        }), e.nextArticleAltSlide ? i("div", {
            staticClass: "slide last-slide",
            class: {
                "slide-in": e.lastSlide
            }
        }, [i("div", {
            staticClass: "slide--next-article-title"
        }, [i("a", {
            staticClass: "heading",
            attrs: {
                href: e.nextArticleSlug
            }
        }, [e._v("\n                  " + e._s(e.nextArticleTitle) + "\n                ")])])]) : i("div", {
            staticClass: "slide last-slide",
            class: {
                "slide-in": e.lastSlide
            }
        }, [i("h2", {
            staticClass: "slide--next-article-title"
        }, [e._v("\n                " + e._s(e.nextArticleTitle) + "\n              ")])])], 2)])]), i("div", {
            staticClass: "slideshow__copy_container"
        }, [i("div", {
            staticClass: "slideshow__title"
        }, [e._v("\n          " + e._s(e.getTitle) + "\n        ")]), i("div", {
            staticClass: "slideshow__content",
            domProps: {
                innerHTML: e._s(e.getContent)
            }
        })])]), i("div", {
            staticClass: "slideshow__dots"
        }, e._l(e.total, function(t) {
            return i("div", {
                staticClass: "dot",
                class: {
                    "dot--is-current": e.currentSlide === t
                },
                on: {
                    click: function(i) {
                        e.goToSlide(t)
                    }
                }
            })
        }))])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "arrow-wrapper arrow--left-wrapper"
        }, [i("div", {
            staticClass: "arrow-text"
        }, [e._v("\n                Prev\n              ")]), i("div", {
            staticClass: "arrow-icon arrow--left-icon svg arrow-left"
        })])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "arrow-wrapper arrow--right-wrapper"
        }, [i("div", {
            staticClass: "arrow-text"
        }, [i("span", {
            staticClass: "next-article-link"
        }, [e._v("Next Slideshow")])]), i("div", {
            staticClass: "arrow-icon arrow--right-icon svg arrow-right"
        })])
    }
    , function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "arrow-wrapper arrow--right-wrapper"
        }, [i("div", {
            staticClass: "arrow-text"
        }, [e._v("\n                Next\n              ")]), i("div", {
            staticClass: "arrow-icon arrow--right-icon svg arrow-right"
        })])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(248)
      , s = a(o)
      , l = i(64)
      , c = a(l)
      , u = i(140)
      , d = a(u)
      , f = i(789)
      , p = a(f)
      , h = i(791)
      , m = i(258)
      , g = a(m)
      , v = i(799)
      , y = i(803)
      , b = a(y);
    t.default = {
        name: "slideshow",
        props: {
            article: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            articleIndex: {
                type: Number,
                default: 1
            },
            category: {
                type: String,
                default: ""
            },
            subcategory: {
                type: String,
                default: ""
            },
            slug: {
                type: String,
                default: ""
            },
            slides: {
                type: Array,
                default: function() {
                    return []
                }
            },
            nextArticleTitle: {
                type: String,
                default: ""
            },
            nextArticleSlug: {
                type: String,
                default: "/"
            },
            nextArticleAltSlide: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            Ad: p.default,
            Attribution: b.default
        },
        mixins: [h.AdsMixin],
        data: function() {
            return {
                slideshow: [],
                currentSlide: 1,
                lastSlide: !1,
                throttleAdCall: function() {}
            }
        },
        created: function() {
            this.currentSlide = this.getSlideNumberFromQuery()
        },
        mounted: function() {
            var e = this;
            document.addEventListener("keydown", this.keydownHandler, !1),
            this.currentSlide = 1,
            this.currentSlide = this.getSlideNumberFromQuery(),
            this.throttleAdCall = (0,
            c.default)(function() {
                e.refreshAds(e.slug)
            }, 2e3, {
                leading: !0,
                trailing: !1
            })
        },
        watch: {
            $route: function(e, t) {
                var i = (0,
                r.default)(e, "query.slide", "");
                this.currentSlide = i ? (0,
                d.default)(i) : 1
            }
        },
        computed: {
            total: function() {
                return (0,
                r.default)(this, "slides", []).length
            },
            getTitle: function() {
                return (0,
                r.default)(this, "getCurrentSlide.custom_title", "")
            },
            getContent: function() {
                return (0,
                r.default)(this, "getCurrentSlide.content", []).join("")
            },
            getImage: function() {
                return (0,
                r.default)(this, "getCurrentSlide.image", {})
            },
            getCurrentSlide: function() {
                return (0,
                r.default)(this, "slides[" + (this.currentSlide - 1) + "]", {})
            },
            getCount: function() {
                return this.currentSlide < 0 ? 1 : this.currentSlide > this.slides.length ? this.slides.length : this.currentSlide
            }
        },
        methods: {
            setRight: function(e) {
                return "right: " + 100 * (this.currentSlide - 1 - e) + "%"
            },
            getSlideNumberFromQuery: function() {
                var e = (0,
                r.default)(this, "$route.query.slide", "");
                return (0,
                s.default)(e) ? 1 : (0,
                d.default)(e)
            },
            getImgSrc: function(e) {
                return (0,
                v.ImageResizer)((0,
                r.default)(e, "image.url", ""), "640")
            },
            getSlideContent: function(e) {
                return (0,
                r.default)(e, "content", []).join("")
            },
            goToSlide: function(e) {
                if (!((e = (0,
                d.default)(e)) < 1)) {
                    if (e > this.slides.length) {
                        if (this.lastSlide)
                            return;
                        e = this.slides.length,
                        this.lastSlide = !0
                    } else
                        this.lastSlide = !1;
                    this.$router.push({
                        query: {
                            slide: e
                        }
                    }),
                    this.throttleAdCall(),
                    window.dataLayer.push(g.default.formatArticle(this.article, {
                        event: "pageview",
                        slide: e,
                        slides: this.total
                    }))
                }
            },
            keydownHandler: function(e) {
                "ArrowLeft" === (0,
                r.default)(e, "key") || "ArrowLeft" === (0,
                r.default)(e, "code") ? this.goToSlide(this.currentSlide - 1) : "ArrowRight" !== (0,
                r.default)(e, "key") && "ArrowRight" !== (0,
                r.default)(e, "code") || this.goToSlide(this.currentSlide + 1)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(790)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            class: "ad " + e.slots + " " + e.slotId,
            attrs: {
                id: e.slotId
            }
        })
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        props: {
            device: {
                type: String,
                default: "desktop"
            },
            loc: {
                type: String,
                default: ""
            },
            sizes: {
                type: Array,
                default: function() {
                    return []
                }
            },
            slots: {
                type: String,
                default: "slot-not-defined"
            },
            pageNumber: {
                type: Number,
                default: 1
            },
            slotNumber: {
                type: Number,
                default: 1
            },
            slug: {
                type: String,
                default: "slug-not-defined"
            }
        },
        computed: {
            getSlot: function() {
                return {
                    id: this.slotId,
                    slotName: this.slots,
                    loc: this.loc,
                    sizes: this.sizes,
                    device: this.device
                }
            }
        },
        data: function() {
            return {
                slotId: "slot"
            }
        },
        created: function() {
            this.slotId = "" + this.slots + this.pageNumber + "-" + this.slotNumber
        },
        mounted: function() {
            this.$store.dispatch("CREATE_AD", {
                slug: this.slug,
                adSlot: this.getSlot
            })
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AdsMixin = t.AdsInstall = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , s = i(259)
      , l = a(s)
      , c = i(792)
      , u = a(c)
      , d = i(793)
      , f = a(d)
      , p = i(794)
      , h = a(p)
      , m = i(795)
      , g = a(m)
      , v = i(796)
      , y = a(v)
      , b = i(797)
      , _ = a(b)
      , w = i(798)
      , C = a(w)
      , S = function() {
        function e() {
            n(this, e),
            this.installed = !1,
            this.options = {}
        }
        return o(e, [{
            key: "install",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = {};
                this.isBrowser() && (window.PWT = {},
                window.googletag = window.googletag || {},
                window.googletag.cmd = window.googletag.cmd || [],
                a = window.googletag,
                window.PWT.jsLoaded = function() {
                    t.loadGPT()
                }
                ,
                i.pubmaticURL ? function() {
                    var e = window.location.href
                      , t = i.pubmaticURL
                      , a = "";
                    if (e.indexOf("pwtv=") > 0) {
                        var n = /pwtv=(.*?)(&|$)/g
                          , r = n.exec(e);
                        r.length >= 2 && r[1].length > 0 && (a = "/" + r[1])
                    }
                    var o = document.createElement("script");
                    o.async = !0,
                    o.type = "text/javascript",
                    o.src = t + a + "/pwt.js";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(o, s)
                }() : this.loadGPT(),
                this.loadKrux()),
                e.prototype.$gpt = this.adFactory(a, i),
                e.component("out-of-page", _.default),
                e.component("ad", f.default),
                e.component("ad-taboola", y.default),
                e.component("ad-adsense", h.default),
                e.component("ad-link", g.default)
            }
        }, {
            key: "adFactory",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("aps" === t.type) {
                    var i = new u.default(e,t);
                    return this.isBrowser() && i.load(),
                    i
                }
                return new l.default(e,t)
            }
        }, {
            key: "isBrowser",
            value: function() {
                return "object" === ("undefined" == typeof window ? "undefined" : r(window))
            }
        }, {
            key: "loadGPT",
            value: function() {
                !function() {
                    var e = document.createElement("script")
                      , t = "https:" == document.location.protocol;
                    e.src = (t ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(e, i)
                }()
            }
        }, {
            key: "loadKrux",
            value: function() {
                this.isBrowser() && (window.Krux || ((window.Krux = function() {
                    Krux.q.push(arguments)
                }
                ).q = []),
                function() {
                    function e(e) {
                        var t, i = "kx" + e;
                        return window.localStorage ? window.localStorage[i] || "" : navigator.cookieEnabled ? (t = document.cookie.match(i + "=([^;]*)")) && unescape(t[1]) || "" : ""
                    }
                    Krux.user = e("user"),
                    Krux.segments = e("segs") && e("segs").split(",") || []
                }())
            }
        }]),
        e
    }();
    t.AdsInstall = S,
    t.AdsMixin = C.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i),
            a && e(t, a),
            t
        }
    }()
      , l = i(259)
      , c = a(l)
      , u = i(2)
      , d = a(u)
      , f = function(e) {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            n(this, t);
            var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
            return a.pubID = i.pubID,
            a.adServer = i.adServer,
            a.blackList = a.createBlackList(i.blackList),
            a
        }
        return o(t, e),
        s(t, [{
            key: "load",
            value: function() {
                !function(e, t, i, a, n, r, o) {
                    function s(i, a) {
                        t[e]._Q.push([i, a])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            s("i", arguments)
                        },
                        fetchBids: function() {
                            s("f", arguments)
                        },
                        setDisplayBids: function() {},
                        _Q: []
                    },
                    r = i.createElement(a),
                    r.async = !0,
                    r.src = "//c.amazon-adsystem.com/aax2/apstag.js",
                    o = i.getElementsByTagName(a)[0],
                    o.parentNode.insertBefore(r, o))
                }("apstag", window, document, "script"),
                window.apstag.init({
                    pubID: this.pubID,
                    adServer: this.adServer,
                    bidTimeout: 2e3
                })
            }
        }, {
            key: "createBlackList",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , i = {};
                return Object.keys(t).map(function(a) {
                    e.blackListSlot(a, t[a], i)
                }),
                i
            }
        }, {
            key: "blackListSlot",
            value: function(e, t, i) {
                var a = this;
                t.map(function(t) {
                    var n = a.createKeyBySlotAndSize(e, t);
                    n && (i[n] = !0)
                })
            }
        }, {
            key: "createKeyBySlotAndSize",
            value: function(e, t) {
                var i = (0,
                d.default)(t, "[0]", 0)
                  , a = (0,
                d.default)(t, "[1]", 0);
                return !(!i || !a) && e + "-" + i + "-" + a
            }
        }, {
            key: "getAmazonBids",
            value: function(e) {
                var t = this;
                return e.filter(function(e) {
                    return t.isBiddable(e)
                }).map(function(e) {
                    return {
                        slotID: e.id,
                        sizes: e.sizes
                    }
                })
            }
        }, {
            key: "isBlackListed",
            value: function(e) {
                var t = this.createKeyBySlotAndSize(e.slotName, (0,
                d.default)(e, "sizes[0]", []));
                return (0,
                d.default)(this.blackList, t, !1)
            }
        }, {
            key: "isBiddable",
            value: function(e) {
                return "out-of-page" !== e.id && !this.isBlackListed(e)
            }
        }, {
            key: "loadPubmaticAds",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = this.getSlotFromAdsArray(e);
                this.getAPSTag().setDisplayBids(),
                e.forEach(function(e) {
                    t.googletag.display(e.id),
                    e.displayed = !0
                }),
                a = a && a.length ? a : null,
                i && this.googletag.pubads().refresh(a)
            }
        }, {
            key: "display",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = this.getAmazonBids(e);
                this.getAPSTag().fetchBids({
                    slots: a,
                    timeout: 2e3
                }, function(a) {
                    t.refreshBids(e, i)
                })
            }
        }, {
            key: "refreshBids",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.googletag.cmd.push(function() {
                    t.loadPubmaticAds(e, i)
                })
            }
        }, {
            key: "getAPSTag",
            value: function() {
                return window.apstag
            }
        }, {
            key: "refresh",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.display(e, t)
            }
        }]),
        t
    }(c.default);
    t.default = f
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        props: {
            device: {
                type: String,
                default: "desktop"
            },
            loc: {
                type: String,
                default: ""
            },
            sizes: {
                type: Array,
                default: function() {
                    return []
                }
            },
            slots: {
                type: String,
                default: "slot-not-defined"
            },
            pageNumber: {
                type: Number,
                default: 1
            },
            slotNumber: {
                type: Number,
                default: 1
            },
            slug: {
                type: String,
                default: "slug-not-defined"
            }
        },
        computed: {
            getSlot: function() {
                return {
                    id: this.slotId,
                    slotName: this.slots,
                    loc: this.loc,
                    sizes: this.sizes,
                    device: this.device
                }
            }
        },
        data: function() {
            return {
                slotId: "slot"
            }
        },
        created: function() {
            this.slotId = "" + this.slots + this.pageNumber + "-" + this.slotNumber
        },
        mounted: function() {
            this.$gpt.add(this.slug, this.getSlot)
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            class: "ad " + e.slots + " " + e.slotId,
            attrs: {
                id: e.slotId
            }
        })
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "ad-adsense",
        props: {
            display: {
                type: Boolean,
                default: !1
            },
            clientId: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            },
            channelId: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        created: function() {},
        mounted: function() {
            var e = this;
            this.display && (this.enable = this.display,
            this.$script.load({
                src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                asnyc: !0
            }),
            window.adsbygoogle = window.adsbygoogle || [],
            this.$nextTick(function() {
                window.adsbygoogle.push({
                    params: {
                        google_ad_channel: e.channelId
                    }
                })
            }))
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? "display:inline-block;min-width:320px;max-width:1200px;width:100%;height:600px" : ""
            }
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-adsense"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "AdLink",
        props: {
            clientId: {
                type: String,
                default: ""
            },
            display: {
                type: Boolean,
                default: !1
            },
            format: {
                type: String,
                default: "link"
            },
            insStyle: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        mounted: function() {
            this.display && (this.enable = this.display,
            this.$script.load({
                src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                asnyc: !0
            }),
            window.adsbygoogle = window.adsbygoogle || [],
            this.$nextTick(function() {
                window.adsbygoogle.push({})
            }))
        },
        method: {
            getPageNumber: function() {
                return this.pageNumber
            }
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? this.insStyle : ""
            }
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-link"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId,
                "data-ad-format": e.format
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        props: {
            index: {
                type: Number,
                default: 0
            },
            loaderUrl: {
                type: String,
                default: ""
            }
        },
        mounted: function() {
            this.$script.load({
                src: this.loaderUrl,
                asnyc: !0
            }),
            window._taboola = window._taboola || [],
            window._taboola.push({
                article: "auto"
            }),
            window._taboola.push({
                mode: "thumbnails-a",
                container: "taboola-below-article-thumbnails-" + this.index,
                placement: "Below Article Thumbnails",
                target_type: "mix"
            }),
            window._taboola.push({
                flush: !0
            })
        }
    }
      , n = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-taboola"
        }, [i("div", {
            attrs: {
                id: "taboola-below-article-thumbnails-" + e.index
            }
        })])
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        name: "out-of-page"
    }
      , n = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            attrs: {
                id: "out-of-page"
            }
        })
    }
      , r = []
      , o = {
        render: n,
        staticRenderFns: r
    }
      , s = o
      , l = i(1)
      , c = l(a, s, !1, null, null, null);
    t.default = c.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        beforeMount: function() {
            window.googletag || this.initialSetup()
        },
        computed: {
            adUnitCode: function() {
                var e = (0,
                n.default)(this, "$store.state.config.ads.GPT", {});
                return this.$store.getters.getIsMobile ? e.adUnitPathMobile : e.adUnitPathDesktop
            }
        },
        methods: {
            defineAdSlot: function(e) {
                return window.googletag.defineSlot(this.getAdCode(e.id), e.sizes, e.id).addService(window.googletag.pubads()).setTargeting("loc", e.loc)
            },
            defineOutOfPage: function() {
                return window.googletag.defineOutOfPageSlot(this.getAdCode("out-of-page"), "out-of-page").addService(window.googletag.pubads())
            },
            defineAds: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function() {
                    t.forEach(function(t) {
                        t.Slot = e.defineAdSlot(t)
                    })
                }
            },
            defineAdsAndSetTargeting: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.googletag.cmd.push(this.setGoogleTargeting(t)),
                window.googletag.cmd.push(this.defineAds(e))
            },
            defaultFilterAds: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = arguments[1];
                return t.filter(function(t, a) {
                    return !e.$store.getters.getIsMobile || 0 === i || !e.showFirstMobileAd || 0 === a
                })
            },
            display: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = this.getAmazonBids(e);
                window.apstag.fetchBids({
                    slots: a,
                    timeout: 2e3
                }, function(a) {
                    t.refreshBids(e, i)
                })
            },
            getAmazonBids: function(e) {
                var t = this;
                return e.filter(function(e) {
                    return t.isBiddable(e)
                }).map(function(e) {
                    return {
                        slotID: e.id,
                        sizes: e.sizes
                    }
                })
            },
            isBiddable: function(e) {
                return "out-of-page" !== e.id
            },
            dfpkv: function() {
                var e = this.locationHasDfpkvFlag(decodeURIComponent(document.location.search));
                if (e) {
                    for (var t = {}, i = e[1].split(","), a = 0; a < i.length; a++) {
                        var n = i[a].split(":")
                          , r = n[0]
                          , o = n[1];
                        r && o && (void 0 === t[r] && (t[r] = []),
                        t[r].push(o))
                    }
                    for (var s in t)
                        t.hasOwnProperty(s) && window.googletag.pubads().setTargeting(s, t[s].join())
                }
            },
            fetchHiddenAds: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.slots[e].ads.slice(1)
                  , i = this.slots[e].targets;
                this.defineAdsAndSetTargeting(t, i),
                this.display(t)
            },
            filterAdsByDevice: function() {
                var e = this;
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter(function(t) {
                    return "mobile" === t.device && e.$store.getters.getIsMobile || "desktop" === t.device && !e.$store.getters.getIsMobile
                })
            },
            getSlotFromAdsArray: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
                    return e.Slot
                })
            },
            getSlotObjectFromSlug: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return (0,
                n.default)(this, "$store.state.ads[" + e + "]", {})
            },
            generateRefreshSlotsHashmap: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(e, t) {
                    return e[t] = !0,
                    e
                }, {})
            },
            getAdCode: function(e) {
                return "" + this.adUnitCode + e
            },
            getArticleNumbers: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = /\/([0-9]+)\/.*/g;
                return t.test(e) ? e.replace(t, "$1") : "none"
            },
            loadAPS: function() {
                !function(e, t, i, a, n, r, o) {
                    function s(i, a) {
                        t[e]._Q.push([i, a])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            s("i", arguments)
                        },
                        fetchBids: function() {
                            s("f", arguments)
                        },
                        setDisplayBids: function() {},
                        _Q: []
                    },
                    r = i.createElement(a),
                    r.async = !0,
                    r.src = "//c.amazon-adsystem.com/aax2/apstag.js",
                    o = i.getElementsByTagName(a)[0],
                    o.parentNode.insertBefore(r, o))
                }("apstag", window, document, "script"),
                window.apstag.init({
                    pubID: this.pubID,
                    adServer: this.adServer,
                    bidTimeout: 2e3
                })
            },
            initialLoadSetup: function() {
                var e = this;
                return function() {
                    e.defineOutOfPage(),
                    e.dfpkv(),
                    window.googletag.pubads().setTargeting("ksg", Krux.segments),
                    window.googletag.pubads().setTargeting("kuid", Krux.user),
                    window.googletag.pubads().enableSingleRequest(),
                    window.googletag.pubads().collapseEmptyDivs(),
                    window.googletag.enableServices()
                }
            },
            loadAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                this.getSlotObjectFromSlug(e));
                a.ads = this.filterAdsByDevice(a.ads),
                a.targets = i;
                var n = this.defaultFilterAds(a.ads, t);
                return this.defineAdsAndSetTargeting(n, i),
                window.googletag.cmd.length && window.googletag.cmd.push(this.initialLoadSetup()),
                this.display(n, !this.isPubmatic),
                a
            },
            loadAdditionalAdsDynamically: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = this.getSlotObjectFromSlug(e);
                if (t.ads) {
                    var i = t.ads.filter(function(e) {
                        return !e.displayed
                    });
                    window.googletag.cmd.push(this.setGoogleTargeting(t.targets)),
                    window.googletag.cmd.push(this.defineAds(i)),
                    this.display(i)
                }
            },
            locationHasDfpkvFlag: function(e) {
                var t = decodeURIComponent(e)
                  , i = /.*dfpkv=([^&]*)/
                  , a = t.match(i);
                return !!(a && a.length > 0) && a
            },
            lowerCaseAndRemoveHyphens: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\W/g, "").toLowerCase()
            },
            refresh: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.display(e, t)
            },
            refreshAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , i = (0,
                n.default)(this, "$store.state.ads[" + e + "].ads", []);
                if (t && t.length) {
                    var a = this.generateRefreshSlotsHashmap(t);
                    i = i.filter(function(e) {
                        return a[e.id]
                    })
                }
                return window.googletag.cmd.push(this.setGoogleTargeting((0,
                n.default)(this, "$store.state.ads[" + e + "].targets", {}))),
                this.refresh(i, !0)
            },
            refreshBids: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                window.googletag.cmd.push(function() {
                    t.loadPubmaticAds(e, i)
                })
            },
            loadPubmaticAds: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = this.getSlotFromAdsArray(e);
                window.apstag.setDisplayBids(),
                e.forEach(function(e) {
                    window.googletag.display(e.id),
                    e.displayed = !0
                }),
                i = i && i.length ? i : null,
                t && window.googletag.pubads().refresh(i)
            },
            setAdUnitCode: function(e) {
                this.adUnitCode = e ? "/6117/hunker.mw/" : "/6117/hunker/"
            },
            setGoogleTargeting: function(e) {
                var t = this;
                return function() {
                    for (var i in e) {
                        var a = e[i];
                        a = Array.isArray(a) ? a.map(function(e) {
                            return t.lowerCaseAndRemoveHyphens(e)
                        }) : t.lowerCaseAndRemoveHyphens(a),
                        window.googletag.pubads().setTargeting(i, a)
                    }
                }
            },
            setTargets: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.targets = e
            },
            setup: function(e) {},
            initialSetup: function() {
                window.PWT = {},
                window.googletag = window.googletag || {},
                window.googletag.cmd = window.googletag.cmd || [],
                window.PWT.jsLoaded = function() {
                    !function() {
                        var e = document.createElement("script")
                          , t = "https:" == document.location.protocol;
                        e.src = (t ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(e, i)
                    }()
                }
                ,
                function() {
                    var e = window.location.href
                      , t = "";
                    if (e.indexOf("pwtv=") > 0) {
                        var i = /pwtv=(.*?)(&|$)/g
                          , a = i.exec(e);
                        a.length >= 2 && a[1].length > 0 && (t = "/" + a[1])
                    }
                    var n = document.createElement("script");
                    n.async = !0,
                    n.type = "text/javascript",
                    n.src = "//ads.pubmatic.com/AdServer/js/pwt/156496/497" + t + "/pwt.js";
                    var r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(n, r)
                }(),
                window.Krux || ((window.Krux = function() {
                    Krux.q.push(arguments)
                }
                ).q = []),
                function() {
                    function e(e) {
                        var t, i = "kx" + e;
                        return window.localStorage ? window.localStorage[i] || "" : navigator.cookieEnabled ? (t = document.cookie.match(i + "=([^;]*)")) && unescape(t[1]) || "" : ""
                    }
                    Krux.user = e("user"),
                    Krux.segments = e("segs") && e("segs").split(",") || []
                }(),
                function(e, t, i, a, n, r, o) {
                    function s(i, a) {
                        t[e]._Q.push([i, a])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            s("i", arguments)
                        },
                        fetchBids: function() {
                            s("f", arguments)
                        },
                        setDisplayBids: function() {},
                        _Q: []
                    },
                    r = i.createElement(a),
                    r.async = !0,
                    r.src = "//c.amazon-adsystem.com/aax2/apstag.js",
                    o = i.getElementsByTagName(a)[0],
                    o.parentNode.insertBefore(r, o))
                }("apstag", window, document, "script"),
                window.apstag.init({
                    pubID: "3066",
                    adServer: "googletag",
                    bidTimeout: 2e3
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReplaceRcpWithPromo = t.ReplaceHpWithPromo = t.ImageResizer = void 0;
    var n = i(800)
      , r = a(n)
      , o = i(801)
      , s = a(o)
      , l = i(802)
      , c = a(l);
    t.ImageResizer = r.default,
    t.ReplaceHpWithPromo = s.default,
    t.ReplaceRcpWithPromo = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        if (!e)
            return e;
        for (var i = e.replace(/^https?:/, ""), a = [[/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "cpcd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "cppd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "cpie"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "cpeh"], [/\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "ppds"], [/\/\/s3.amazonaws.com\//g, "cme"], [/\/\/i.ehow.com\/images\//g, "ieh"], [/\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "clsd"], [/\/\/photos2.demandstudios.com\/DM-Resize\//g, "/"], [/\/\/photos.demandstudios.com\//g, "photos.demandstudios.com"], [/\/\/api.cuteness.com\//g, "cme/cuteness_data"]], n = a.length, r = 0; r < n; r++) {
            var o = a[r]
              , s = "https://cmeimg-a.akamaihd.net/" + t + "/" + o[1] + "/";
            if (o[0].test(i))
                return i.replace(o[0], s)
        }
        return e
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++)
            !function(e) {
                var a = t[e];
                a.index;
                i = i.filter(function(e, t) {
                    return !(a.slug.indexOf(e.slug) >= 0) || (a.promoFound = !0,
                    !1)
                })
            }(a);
        for (var a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 0, n),
            n.promoFound || i.pop()
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 1, n)
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(804)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(805)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-attribution"
        }, [e.attributionText ? i("div", {
            staticClass: "attribution"
        }, [e._v("\n    credit:\n    "), e.attributionText && e.attributionLink ? i("a", {
            attrs: {
                href: e.attributionLink,
                target: "_blank"
            }
        }, [e._v(e._s(e.attributionText))]) : i("span", [e._v(e._s(e.attributionText))])]) : e._e()])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "attribution",
        props: {
            image: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        computed: {
            attributionLink: function() {
                var e = (0,
                n.default)(this, "image.attributionlink", "");
                return !e || e.indexOf("ehow") > -1 ? "" : e.indexOf("http") > -1 ? e : "http://" + e
            },
            attributionText: function() {
                return (0,
                n.default)(this, "image.attributionhtml", "").replace(/\behow/gi, "Cuteness")
            },
            getCaption: function() {
                return (0,
                n.default)(this, "image.caption", "")
            },
            showCaption: function() {
                return (0,
                n.default)(this, "image.attributionhtml", !1) && (0,
                n.default)(this, "image.caption", !1)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(807)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            class: "ad " + e.slots + " " + e.slotId,
            attrs: {
                id: e.slotId
            }
        })
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , n = i(41);
    t.default = {
        props: {
            device: {
                type: String,
                default: "desktop"
            },
            loc: {
                type: String,
                default: ""
            },
            sizes: {
                type: Array,
                default: function() {
                    return []
                }
            },
            slots: {
                type: String,
                default: "slot-not-defined"
            },
            pageNumber: {
                type: Number,
                default: 1
            },
            slotNumber: {
                type: Number,
                default: 1
            },
            slug: {
                type: String,
                default: "slug-not-defined"
            }
        },
        computed: a({}, (0,
        n.mapGetters)(["getIsMobile"]), {
            getSlot: function() {
                return {
                    id: this.slotId,
                    slotName: this.slots,
                    loc: this.loc,
                    sizes: this.filterForTabletAds(),
                    device: this.device
                }
            }
        }),
        data: function() {
            return {
                slotId: "slot"
            }
        },
        created: function() {
            this.slotId = "" + this.slots + this.pageNumber + "-" + this.slotNumber
        },
        mounted: function() {
            this.$store.dispatch("CREATE_AD", {
                slug: this.slug,
                adSlot: this.getSlot
            })
        },
        methods: {
            filterForTabletAds: function() {
                var e = this.sizes;
                return this.getIsMobile ? this.sizes : (window.matchMedia("(max-width: 990px)").matches && (e = e.filter(function(e) {
                    return e[0] < 970
                })),
                e)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(809)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-adsense"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(63)
      , s = a(o);
    t.default = {
        name: "ad-adsense",
        props: {
            display: {
                type: Boolean,
                default: !1
            },
            clientId: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            },
            channelId: {
                type: String,
                default: ""
            },
            googleBlacklistedUrls: {
                type: Object,
                default: function() {}
            },
            articleSlug: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        mounted: function() {
            var e = this
              , t = (0,
            r.default)(this, "googleBlacklistedUrls", {})
              , i = (0,
            r.default)(this, "articleSlug", "");
            if (1 !== (0,
            r.default)(t, i, !1) && this.display) {
                this.enable = this.display;
                (new s.default).load({
                    src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                    asnyc: !0,
                    crossorigin: "anonymous"
                }),
                window.adsbygoogle = window.adsbygoogle || [],
                this.$nextTick(function() {
                    window.adsbygoogle.push({
                        params: {
                            google_ad_channel: e.channelId
                        }
                    })
                })
            }
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? "display:inline-block;min-width:320px;max-width:1200px;width:100%;height:600px" : ""
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(811)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-link"
        }, [i("ins", {
            class: e.getClass,
            style: e.getStyle,
            attrs: {
                "data-ad-client": e.clientId,
                "data-ad-slot": e.slotId,
                "data-ad-format": e.format
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(63)
      , s = a(o);
    t.default = {
        name: "AdLink",
        props: {
            clientId: {
                type: String,
                default: ""
            },
            display: {
                type: Boolean,
                default: !1
            },
            format: {
                type: String,
                default: "link"
            },
            insStyle: {
                type: String,
                default: ""
            },
            slotId: {
                type: String,
                default: ""
            },
            googleBlacklistedUrls: {
                type: Object,
                default: function() {}
            },
            articleSlug: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                enable: !1
            }
        },
        mounted: function() {
            var e = (0,
            r.default)(this, "googleBlacklistedUrls", {})
              , t = (0,
            r.default)(this, "articleSlug", "");
            if (1 !== (0,
            r.default)(e, t, !1) && this.display) {
                this.enable = this.display;
                (new s.default).load({
                    src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                    asnyc: !0,
                    crossorigin: "anonymous"
                }),
                window.adsbygoogle = window.adsbygoogle || [],
                this.$nextTick(function() {
                    window.adsbygoogle.push({})
                })
            }
        },
        method: {
            getPageNumber: function() {
                return this.pageNumber
            }
        },
        computed: {
            getClass: function() {
                return this.enable ? "adsbygoogle" : "nope"
            },
            getStyle: function() {
                return this.enable ? this.insStyle : ""
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(813)
      , n = i.n(a)
      , r = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-ad-taboola"
        }, [i("div", {
            attrs: {
                id: "taboola-below-article-thumbnails-" + e.index
            }
        })])
    }
      , o = []
      , s = {
        render: r,
        staticRenderFns: o
    }
      , l = s
      , c = i(1)
      , u = c(n.a, l, !1, null, null, null);
    t.default = u.exports
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(63)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        props: {
            index: {
                type: Number,
                default: 0
            },
            loaderUrl: {
                type: String,
                default: ""
            }
        },
        mounted: function() {
            (new n.default).load({
                src: this.loaderUrl,
                asnyc: !0,
                crossorigin: "anonymous"
            }),
            window._taboola = window._taboola || [],
            window._taboola.push({
                article: "auto"
            }),
            window._taboola.push({
                mode: "thumbnails-a",
                container: "taboola-below-article-thumbnails-" + this.index,
                placement: "Below Article Thumbnails",
                target_type: "mix"
            }),
            window._taboola.push({
                flush: !0
            })
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "FbComments",
        props: {
            id: {
                type: String,
                default: ""
            },
            dataHref: {
                type: String,
                default: ""
            },
            dataWidth: {
                type: Number,
                default: 640
            },
            dataNumposts: {
                type: Number,
                default: 5
            }
        },
        data: function() {
            return {
                showButton: !0
            }
        },
        methods: {
            showCommentsClickHandler: function() {
                var e = this;
                window.FB && window.FB.XFBML.parse(document.getElementById(this.id), function() {
                    e.showButton = !1
                })
            }
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(78)
      , s = a(o);
    t.default = {
        name: "related-content",
        props: ["relatedArticles", "title"],
        components: {
            CardArticle: s.default
        },
        mounted: function() {
            var e = (0,
            r.default)(this, "relatedArticles", []).map(function(e) {
                return e.id
            });
            window.dataLayer.push({
                event: "rc_right_rail_impression",
                urls: e
            })
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "card-article",
        props: ["article", "dataEventImage", "dataEventText", "dataInfo", "isFeatured", "isRCP", "isMasonry"],
        computed: {
            articleType: function() {
                var e = (0,
                n.default)(this, "article.slug", "");
                return -1 !== e.indexOf("/videos/") ? "video" : -1 !== e.indexOf("/explore/") ? "explore" : "article"
            },
            imageSize: function() {
                return this.isFeatured || "explore" === this.articleType ? "360x385" : this.isRCP ? "190x107" : "500x281"
            },
            masonryExplore: function() {
                return this.isMasonry && "explore" === this.articleType
            },
            getCategorySlug: function() {
                return (0,
                n.default)(this, "article.category.slug", "")
            },
            getCategoryName: function() {
                return (0,
                n.default)(this, "article.category.name", "")
            },
            getSubcategorySlug: function() {
                return (0,
                n.default)(this, "article.subcategory.slug", "")
            },
            getSubcategoryName: function() {
                return (0,
                n.default)(this, "article.subcategory.name", "")
            }
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "social-share-icons",
        props: ["article"],
        data: function() {
            return {
                config: (0,
                n.default)(this, "$store.state.config", {})
            }
        },
        computed: {
            urlReadyArticleTitle: function() {
                return encodeURIComponent((0,
                n.default)(this, "article.title", ""))
            }
        },
        methods: {
            openSocialWindow: function(e) {
                e.preventDefault(),
                void 0 !== e.target.href ? window.open(e.target.href, e.target.href, "width=500,height=500") : window.open(e.target.parentElement.href, e.target.parentElement.href, "width=500,height=500")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(823)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(824)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-videos"
        }, [i("div", {
            staticClass: "header-container"
        }, [i("header", {
            staticClass: "article-header"
        }, [i("h1", {
            staticClass: "title"
        }, [e._v(e._s(e.article.title))]), i("social-share-icons", {
            attrs: {
                article: e.article
            }
        })], 1)]), i("div", {
            staticClass: "video-container"
        }, [i("div", {
            staticClass: "video-embed"
        }, e._l(e.articleSections, function(t) {
            return "embed" === t.type ? i("div", {
                staticClass: "video-inner",
                domProps: {
                    innerHTML: e._s(t.content.html)
                }
            }) : e._e()
        }))]), i("div", {
            staticClass: "article-container"
        }, [i("div", {
            staticClass: "article-rail-container clearfix"
        }, [i("section", {
            staticClass: "article-wrapper"
        }, [i("article", {
            staticClass: "article-content"
        }, e._l(e.articleSections, function(t) {
            return e.isVideo(t.content) ? e._e() : i("div", {
                staticClass: "section-container",
                class: "article-section article-section--" + t.type
            }, [i("sections", {
                attrs: {
                    type: t.type,
                    section: t,
                    site: "www.leaf.tv",
                    slug: e.getSlug
                }
            }, [i("template", {
                slot: "image"
            }, [i("article-image", {
                attrs: {
                    image: t.content,
                    slug: e.getSlug,
                    pinterest: !0
                }
            })], 1)], 2)], 1)
        })), e.slider ? i("image-slider", {
            attrs: {
                imageSlider: e.slider
            }
        }) : e._e(), i("pub-exchange-links"), e.article.slug ? i("fb-comments", {
            attrs: {
                "data-href": e.config.site.domain + e.article.slug,
                "data-width": 640,
                "data-numposts": 5
            }
        }) : e._e()], 1), i("aside", {
            staticClass: "right-rail"
        }, [e.article.related_content ? i("related-content", {
            attrs: {
                relatedArticles: e.article.related_content,
                title: "YOU MAY ALSO LIKE"
            }
        }) : e._e()], 1)])])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(75)
      , s = a(o)
      , l = i(106)
      , c = a(l)
      , u = i(107)
      , d = a(u)
      , f = i(260)
      , p = a(f)
      , h = i(262)
      , m = a(h)
      , g = i(154)
      , v = a(g)
      , y = i(153)
      , b = a(y)
      , _ = i(108)
      , w = a(_);
    t.default = {
        name: "videos",
        props: {
            article: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            index: {
                type: Number,
                default: 0
            }
        },
        components: {
            ArticleImage: c.default,
            FbComments: d.default,
            ImageSlider: p.default,
            PubExchangeLinks: m.default,
            RelatedContent: v.default,
            Sections: b.default,
            SocialShareIcons: w.default
        },
        data: function() {
            return {
                config: (0,
                r.default)(this, "$store.state.config")
            }
        },
        computed: {
            getSlug: function() {
                return (0,
                r.default)(this, "article.slug", "")
            },
            articleSections: function() {
                var e = (0,
                r.default)(this, "article.content", [])
                  , t = [];
                return (0,
                s.default)(e, function(e) {
                    t.push(e)
                }),
                t
            },
            slider: function() {
                return (0,
                r.default)(this, "$store.state.Article.articles[" + this.index + "].slider.content")
            }
        },
        methods: {
            formatArticleContent: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(new RegExp('(<as*[^>]*)(href="https?://)((?!(?:([^/]+.)?www.leaf.tv))[^"]+)"([^>]*)(?:[^>]*)>',"ig"), '$1$2$3"$4 target="_blank">')
            },
            isVideo: function() {
                return "video" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type
            }
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , n = i(827)
      , r = (function(e) {
        e && e.__esModule
    }(n),
    i(41));
    t.default = {
        name: "image-slider",
        props: ["imageSlider"],
        data: function() {
            return {
                slideIndex: 1
            }
        },
        computed: a({}, (0,
        r.mapGetters)(["getIsMobile"])),
        methods: {
            plusDivs: function(e) {
                this.showDivs(this.slideIndex += e)
            },
            currentDiv: function(e) {
                this.showDivs(this.slideIndex = e)
            },
            showDivs: function(e) {
                var t, i = document.getElementsByClassName("mySlides"), a = document.getElementsByClassName("thumbs");
                for (e > i.length && (this.slideIndex = 1),
                e < 1 && (this.slideIndex = i.length),
                t = 0; t < i.length; t++)
                    i[t].classList.remove("visible");
                for (t = 0; t < a.length; t++)
                    a[t].className = a[t].className.replace(" thumb-opacity-off", "");
                i[this.slideIndex - 1].className += " visible",
                a[this.slideIndex - 1].className += " thumb-opacity-off"
            }
        },
        mounted: function() {
            var e = this;
            if (this.showDivs(this.slideIndex),
            this.getIsMobile) {
                var t = 0
                  , i = 0
                  , a = document.querySelector(".display-container");
                a.addEventListener("touchstart", function(e) {
                    t = e.touches[0].clientX,
                    i = e.touches[0].clientY
                }),
                a.addEventListener("touchend", function(a) {
                    Math.abs(i - a.changedTouches[0].clientY) < 25 && (t > a.changedTouches[0].clientX ? e.plusDivs(1) : t < a.changedTouches[0].clientX && e.plusDivs(-1))
                })
            }
        }
    }
}
, , function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        mounted: function() {
            !function(e, t, i, a) {
                e.PUBX = e.PUBX || {
                    pub: "leaftv",
                    discover: !1,
                    lazy: !0
                };
                var n, r = t.getElementsByTagName(i)[0];
                t.getElementById(a) || (n = t.createElement(i),
                n.id = a,
                n.async = !0,
                n.src = "//main.pubexchange.com/loader.min.js",
                r.parentNode.insertBefore(n, r))
            }(window, document, "script", "pubexchange-jssdk")
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        return new Promise(function(t, i) {
            t(e.commit("NOT_FOUND"))
        }
        )
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(2)
      , o = a(r)
      , s = i(54)
      , l = a(s)
      , c = i(832)
      , u = a(c);
    t.default = {
        name: "error404-view",
        components: {
            SearchFormSimple: u.default
        },
        metaInfo: function() {
            return {
                title: "Page Not Found | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: "Page Not Found | " + (0,
                    o.default)(l.default, "site.title", "")
                }, {
                    name: "twitter:description",
                    content: "Sorry, we're not home!"
                }, {
                    name: "description",
                    content: "Sorry, we're not home!"
                }, {
                    property: "og:description",
                    content: "Sorry, we're not home!"
                }, {
                    property: "og:url",
                    content: (0,
                    o.default)(l.default, "site.domain", "")
                }, {
                    property: "og:title",
                    content: "Page Not Found | " + (0,
                    o.default)(l.default, "site.title", "")
                }],
                link: [{
                    vmid: "canonical-url"
                }]
            }
        },
        preFetch: n
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(833)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(834)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "search-form-simple-wrapper"
        }, [i("form", {
            staticClass: "form",
            attrs: {
                action: e.action,
                method: "GET"
            }
        }, [i("div", {
            staticClass: "form-row"
        }, [i("input", {
            staticClass: "form-row__input",
            attrs: {
                type: "text",
                name: "q",
                placeholder: e.placeholder,
                autocomplete: "off"
            },
            domProps: {
                value: e.query
            }
        }), i("button", {
            staticClass: "form-row__submit",
            attrs: {
                type: "submit"
            },
            on: {
                click: e.submitForm
            }
        }, [i("span", {
            staticClass: "svg search-magnifier"
        })])])])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "search-form-simple",
        props: ["action", "placeholder", "query"],
        methods: {
            submitForm: function() {
                window.dataLayer && window.dataLayer.push({
                    event: "site search execute"
                })
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(836)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(837)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "parse-embed"
        }, ["Facebook" === e.content.provider_name ? i("div", ["video" === e.content.type ? i("div", ["iframe" === e.embedType ? i("div", {
            staticClass: "fb-embed fb-video",
            style: {
                paddingBottom: e.padBottom + "%"
            }
        }, [i("iframe", {
            attrs: {
                src: e.iframeSrc,
                scrolling: "no",
                frameborder: "0",
                allowTransparency: "true",
                allowFullScreen: "true"
            }
        })]) : e._e()]) : i("div", {
            staticClass: "fb-post",
            domProps: {
                innerHTML: e._s(e.embedData)
            }
        })]) : "GIPHY" === e.content.provider_name ? i("div", [i("img", {
            staticClass: "giphy-img",
            attrs: {
                src: e.content.url
            }
        })]) : i("div", {
            staticClass: "full-embed",
            class: {
                "video-embed": e.videoEmbedded
            },
            domProps: {
                innerHTML: e._s(e.embedData)
            }
        })])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = 0;
    t.default = {
        name: "parse-embed",
        props: ["content"],
        data: function() {
            return {
                embedURL: "",
                embedData: "",
                autoplay: "",
                embedType: "",
                padBottom: ""
            }
        },
        beforeMount: function() {
            if ("Facebook" === this.content.provider_name) {
                if ("video" === this.content.type) {
                    a++,
                    this.autoplay = 1 === a ? "true" : "false";
                    var e = this.url
                      , t = e.match(/www.facebook.com\/.+\/([0-9]+)\//)
                      , i = this;
                    t.length > 1 && this.$http.get("https://graph.facebook.com/" + t[1]).then(function(t) {
                        var a = t.data.format[0].height
                          , n = t.data.format[0].width;
                        i.padBottom = a / n * 100,
                        i.embedURL = e,
                        i.embedType = "iframe"
                    }).catch(function(e) {
                        var t = i.content.html
                          , a = t.match(/<div class='?"?fb-video'?"?.*data-href="?'?([^"]+)"?'?.+/);
                        i.embedData = a[0]
                    })
                } else if ("rich" === this.content.type) {
                    var n = this.content.html
                      , t = n.match(/<div class='?"?fb-post'?"?.*data-href='?"?([^"]+)'?"?.+/);
                    this.embedData = t ? t[0] : this.content.html
                }
            } else
                this.embedData = this.content.html
        },
        computed: {
            iframeSrc: function() {
                return "https://www.facebook.com/v2.3/plugins/video.php?allowfullscreen=true&autoplay=" + this.autoplay + "&href=" + this.embedURL
            },
            videoEmbedded: function() {
                return "Instagram" !== this.content.provider_name && (this.content.provider_name,
                !0)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(839)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(840)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-preloader"
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.show,
                expression: "show"
            }],
            staticClass: "dots"
        }, [i("span", {
            staticClass: "dot1"
        }), i("span", {
            staticClass: "dot2"
        }), i("span", {
            staticClass: "dot3"
        })])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "preloader",
        props: ["show"]
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(842)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(843)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "explore-view"
        }, [e.hasError ? i("error404-view") : i("div", [i("div", {
            staticClass: "header-container"
        }, [i("header", {
            staticClass: "article-header"
        }, [i("h1", {
            staticClass: "title"
        }, [e._v(e._s(e.article.title))]), i("social-share-icons", {
            attrs: {
                article: e.article
            }
        })], 1)]), e.getArticleVideos ? i("carousel", {
            attrs: {
                exploreVideos: e.getArticleVideos
            }
        }) : e._e(), i("div", {
            staticClass: "article-container"
        }, [i("div", {
            staticClass: "article-rail-container clearfix"
        }, [i("section", {
            staticClass: "article-wrapper"
        }, [i("article", {
            staticClass: "article-content"
        }, e._l(e.articleSections, function(t) {
            return i("div", {
                staticClass: "section-container",
                class: "article-section article-section--" + t.type
            }, [i("sections", {
                attrs: {
                    type: t.type,
                    section: t,
                    site: "www.leaf.tv",
                    slug: e.getSlug
                }
            }, [i("template", {
                slot: "image"
            }, [i("article-image", {
                attrs: {
                    image: t.content,
                    slug: e.getSlug,
                    pinterest: !0
                }
            })], 1)], 2)], 1)
        })), e.slider ? i("image-slider", {
            attrs: {
                imageSlider: e.slider
            }
        }) : e._e(), e.article.slug ? i("fb-comments", {
            attrs: {
                "data-href": e.config.site.domain + e.article.slug,
                "data-width": 790,
                "data-numposts": 5
            }
        }) : e._e(), i("pub-exchange-links")], 1)]), i("div", {
            attrs: {
                id: "bottom-rcp"
            }
        }, [i("div", {
            staticClass: "rcp-wrapper"
        }, [i("h3", {
            staticClass: "section-title"
        }, [e._v("Explore " + e._s(e.getArticleCategoryName))]), i("section", {
            staticClass: "section section--card-grid-articles"
        }, [i("div", {
            staticClass: "card-grid-articles-wrapper card-grid-articles"
        }, [i("div", {
            staticClass: "row articles-cards"
        }, e._l(e.article.related_content, function(t, a) {
            return a < 3 ? i("article", {
                staticClass: "col-xs-12 col-sm-4 articles-cards__item"
            }, [i("card-article", {
                attrs: {
                    article: t,
                    isFeatured: !0
                }
            })], 1) : e._e()
        }))])])])])])], 1)], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        f.default.setDataLayer(f.default.factory(e, "article")),
        (new h.default).load({
            src: "//platform.instagram.com/en_US/embeds.js",
            crossorigin: "anonymous"
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(2)
      , o = a(r)
      , s = i(255)
      , l = a(s)
      , c = i(75)
      , u = a(c)
      , d = i(55)
      , f = a(d)
      , p = i(63)
      , h = a(p)
      , m = i(105)
      , g = i(106)
      , v = a(g)
      , y = i(155)
      , b = a(y)
      , _ = i(107)
      , w = a(_)
      , C = i(108)
      , S = a(C)
      , E = i(153)
      , T = a(E)
      , A = i(154)
      , k = a(A)
      , I = i(78)
      , O = a(I)
      , P = i(844)
      , M = a(P)
      , R = i(260)
      , L = a(R)
      , x = i(262)
      , N = a(x);
    t.default = {
        name: "article-view",
        props: ["relatedArticles"],
        components: {
            ArticleImage: v.default,
            CardArticle: O.default,
            Carousel: M.default,
            Error404: b.default,
            FbComments: w.default,
            ImageSlider: L.default,
            PubExchangeLinks: N.default,
            RelatedContent: k.default,
            Sections: T.default,
            SocialShareIcons: S.default
        },
        beforeMount: function() {
            n((0,
            o.default)(this, "$store.state.article.article", {}))
        },
        data: function() {
            return {
                config: (0,
                o.default)(this, "$store.state.config"),
                slider: (0,
                o.default)(this, "$store.state.Article.articles[0].slider.content")
            }
        },
        metaInfo: function() {
            return {
                title: (0,
                o.default)(this, "article.title", "") + " | LEAFtv",
                meta: [{
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:title",
                    content: (0,
                    o.default)(this, "article.title", "") + " | " + (0,
                    o.default)(this, "$store.state.config.site.title", "")
                }, {
                    name: "twitter:description",
                    content: (0,
                    l.default)((0,
                    o.default)(this, "article.summary", ""))
                }, {
                    name: "twitter:image",
                    content: (0,
                    m.resizeImage)((0,
                    o.default)(this, "article.image.url", ""), "640")
                }, {
                    name: "twitter:image:alt",
                    content: (0,
                    o.default)(this, "article.image.alttext", "")
                }, {
                    name: "description",
                    content: (0,
                    l.default)((0,
                    o.default)(this, "article.summary", ""))
                }, {
                    property: "og:description",
                    content: (0,
                    l.default)((0,
                    o.default)(this, "article.summary", ""))
                }, {
                    property: "og:url",
                    content: "" + (0,
                    o.default)(this, "$store.state.config.site.domain", "") + (0,
                    o.default)(this, "article.slug", "")
                }, {
                    property: "og:title",
                    content: (0,
                    o.default)(this, "article.title", "") + " | " + (0,
                    o.default)(this, "$store.state.config.site.title", "")
                }, {
                    property: "og:type",
                    content: "article"
                }, {
                    property: "og:image",
                    content: (0,
                    m.resizeImage)((0,
                    o.default)(this, "article.image.url", ""), "640")
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: "" + (0,
                    o.default)(this, "$store.state.config.site.domain", "") + (0,
                    o.default)(this, "article.slug", "")
                }]
            }
        },
        computed: {
            article: function() {
                return (0,
                o.default)(this, "$store.state.Article.articles[0]", {})
            },
            getSlug: function() {
                return (0,
                o.default)(this, "article.slug", "")
            },
            getArticleCategoryName: function() {
                return (0,
                o.default)(this, "article.category.name", "")
            },
            getArticleVideos: function() {
                return (0,
                o.default)(this, "article.videos", [])
            },
            articleSections: function() {
                var e = (0,
                o.default)(this, "article.content", [])
                  , t = [];
                return (0,
                u.default)(e, function(e) {
                    t.push(e)
                }),
                t
            },
            hasError: function() {
                return 200 !== (0,
                o.default)(this, "$store.state.statusCode", 404)
            }
        },
        methods: {
            formatArticleContent: function(e) {
                return e.replace(new RegExp('(<as*[^>]*)(href="https?://)((?!(?:([^/]+.)?www.leaf.tv))[^"]+)"([^>]*)(?:[^>]*)>',"ig"), '$1$2$3"$4 target="_blank">')
            }
        },
        asyncData: function(e) {
            var t = e.store
              , i = e.route.path
              , a = i;
            return Promise.all([t.dispatch("FETCH_ARTICLE_AND_RCP", {
                slug: a
            })])
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(845)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(846)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "carousel"
        }, [i("div", {
            staticClass: "related-series-wrapper"
        }, [i("div", {
            attrs: {
                id: "related-series"
            }
        }, [e.exploreVideos.length > 3 ? i("span", {
            staticClass: "series-ctrl series-fwd svg fwd-arrow-icon",
            on: {
                click: function(t) {
                    e.seriesSlideLeft()
                }
            }
        }) : e._e(), e.exploreVideos.length > 3 ? i("span", {
            staticClass: "series-ctrl series-bwd svg bwd-arrow-icon",
            on: {
                click: function(t) {
                    e.seriesSlideRight()
                }
            }
        }) : e._e(), i("ul", {
            attrs: {
                id: "series-stage"
            }
        }, e._l(e.exploreVideos, function(e) {
            return i("li", {
                staticClass: "vid-block"
            }, [i("article", {
                staticClass: "articles-cards__item col-xs-12"
            }, [i("card-article", {
                attrs: {
                    article: e
                }
            })], 1)])
        }))])])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , r = i(2)
      , o = a(r)
      , s = i(41)
      , l = i(78)
      , c = a(l);
    t.default = {
        name: "carousel",
        props: ["exploreVideos", "title"],
        components: {
            CardArticle: c.default
        },
        data: function() {
            return {
                vSlideInMotion: !1
            }
        },
        mounted: function() {
            var e = this;
            if (document.addEventListener("keydown", function(t) {
                "ArrowLeft" === (0,
                o.default)(t, "code") ? e.seriesSlideRight() : "ArrowRight" === (0,
                o.default)(t, "code") && e.seriesSlideLeft()
            }, !1),
            !this.getIsMobile) {
                var t = 0
                  , i = 0
                  , a = document.querySelector("#series-stage");
                a.addEventListener("touchstart", function(e) {
                    t = e.touches[0].clientX,
                    i = e.touches[0].clientY
                }),
                a.addEventListener("touchend", function(a) {
                    Math.abs(i - a.changedTouches[0].clientY) < 25 && (t > a.changedTouches[0].clientX ? e.seriesSlideLeft() : t < a.changedTouches[0].clientX && e.seriesSlideRight())
                })
            }
        },
        computed: n({}, (0,
        s.mapGetters)(["getIsMobile"])),
        methods: {
            seriesSlideLeft: function() {
                var e = this;
                if (!this.vSlideInMotion) {
                    this.vSlideInMotion = !0;
                    var t = document.getElementById("series-stage")
                      , i = t.childNodes[0];
                    i.className += " moving",
                    setTimeout(function() {
                        i.classList.remove("moving"),
                        t.appendChild(i),
                        e.seriesSlideLeftComplete()
                    }, 300)
                }
            },
            seriesSlideLeftComplete: function() {
                this.vSlideInMotion = !1
            },
            seriesSlideRightComplete: function() {
                this.vSlideInMotion = !1
            },
            seriesSlideRight: function() {
                if (!this.vSlideInMotion) {
                    this.vSlideInMotion = !0;
                    var e = document.getElementById("series-stage")
                      , t = e.lastChild;
                    t.className += " out-left",
                    e.insertBefore(t, e.firstChild),
                    this.seriesSlideRightComplete(),
                    setTimeout(function() {
                        e.childNodes[0].classList.remove("out-left"),
                        e.childNodes[0].classList.remove("moving-right")
                    }, 10)
                }
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(848)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(849)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "category-view"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [i("category-family-navigation", {
            attrs: {
                category: e.category,
                categoryFamily: e.categoryFamily
            }
        }), "category" === e.category.type ? i("card-grid-articles", {
            attrs: {
                articles: e.articles.slice(0, 3),
                isFeatured: !0
            }
        }) : e._e(), "subcategory" === e.category.type ? i("card-grid-articles", {
            attrs: {
                articles: e.articles,
                id: "infinite-scroll-wrapper"
            }
        }) : "category" === e.category.type ? i("card-grid-articles", {
            attrs: {
                articles: e.articles.slice(3, e.articles.length),
                id: "infinite-scroll-wrapper"
            }
        }) : e._e(), i("infinite-loader", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isLoadingArticles,
                expression: "isLoadingArticles"
            }]
        }), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showEndMessage,
                expression: "showEndMessage"
            }],
            staticClass: "end-message"
        }, [e._v("You've Reached the End")])], 1)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        var t = (0,
        o.default)(e, "state.config")
          , i = (0,
        o.default)(e, "state.route.params.categorySlug", "") || (0,
        o.default)(e, "state.route.params.subcategorySlug", "")
          , a = (0,
        o.default)(e, "state.route.params.categorySlug", "") ? "category" : "subcategory";
        return Promise.all([e.dispatch("FETCH_CATEGORY", {
            slug: i,
            config: t
        }), e.dispatch("FETCH_CATEGORY_FAMILY", {
            slug: i,
            config: t
        }), e.dispatch("FETCH_ARTICLE_COLLECTION_BY_CATEGORY", {
            config: t,
            page: (0,
            o.default)(e, "state.route.query.page", 1),
            slug: i,
            type: a
        })])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(2)
      , o = a(r)
      , s = i(74)
      , l = a(s)
      , c = i(54)
      , u = a(c)
      , d = i(263)
      , f = a(d)
      , p = i(852)
      , h = a(p)
      , m = i(55)
      , g = a(m)
      , v = i(156)
      , y = a(v);
    t.default = {
        name: "category-view",
        components: {
            CardGridArticles: f.default,
            CategoryFamilyNavigation: h.default,
            InfiniteLoader: y.default
        },
        data: function() {
            return {
                isLoadingArticles: !1,
                currentPage: 1,
                showEndMessage: !1
            }
        },
        metaInfo: function() {
            var e = (0,
            o.default)(this, "$store.state.category.category", {});
            return {
                title: (0,
                o.default)(e, "name", "") + " | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: (0,
                    o.default)(e, "name", "") + " | " + (0,
                    o.default)(u.default, "site.title", "")
                }, {
                    name: "twitter:description",
                    content: this.metaDescription
                }, {
                    name: "description",
                    content: this.metaDescription
                }, {
                    property: "og:description",
                    content: this.metaDescription
                }, {
                    property: "og:url",
                    content: (0,
                    o.default)(u.default, "site.domain", "") + "/" + (0,
                    o.default)(e, "slug", "") + "/"
                }, {
                    property: "og:title",
                    content: (0,
                    o.default)(e, "name", "") + " | " + (0,
                    o.default)(u.default, "site.title", "")
                }, {
                    property: "og:type",
                    content: "category"
                }, {
                    property: "og:image",
                    content: (0,
                    o.default)(u.default, "site.domain", "") + "/images/default-og.png"
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    o.default)(u.default, "site.domain", "") + "/" + (0,
                    o.default)(e, "slug", "") + "/"
                }]
            }
        },
        beforeMount: function() {
            var e = (0,
            o.default)(this, "$store.state.category.category", {});
            g.default.setDataLayer(g.default.factory({
                pagetype: (0,
                o.default)(e, "type", "category"),
                category: "category" === (0,
                o.default)(e, "type") ? (0,
                o.default)(e, "name") : (0,
                o.default)(e, "parent.name"),
                subcategory: "category" === (0,
                o.default)(e, "type") ? "" : (0,
                o.default)(e, "name")
            }))
        },
        mounted: function() {
            var e = this
              , t = document.getElementById("infinite-scroll-wrapper")
              , i = (0,
            l.default)(function(i) {
                window.innerHeight + window.pageYOffset + 200 >= t.clientHeight && !e.isLoadingArticles && (e.currentPage + 1 <= e.collectionMeta.total_pages ? (e.isLoadingArticles = !0,
                e.loadMoreArticles().then(function(t) {
                    e.isLoadingArticles = !1
                })) : e.showEndMessage = !0)
            }, 250);
            window.addEventListener("scroll", i)
        },
        computed: {
            articles: function() {
                return (0,
                o.default)(this, "$store.state.articleCollection.articles", [])
            },
            collectionMeta: function() {
                return (0,
                o.default)(this, "$store.state.articleCollection.meta", {})
            },
            category: function() {
                return (0,
                o.default)(this, "$store.state.category.category", {})
            },
            categoryFamily: function() {
                return (0,
                o.default)(this, "$store.state.category.categoryFamily", {})
            },
            articleTitles: function() {
                var e = (0,
                o.default)(this, "$store.state.articleCollection.articles", [])
                  , t = [];
                return t.push((0,
                o.default)(e, "[0].title", "")),
                t.push((0,
                o.default)(e, "[1].title", "")),
                t
            },
            metaDescription: function() {
                var e = (0,
                o.default)(this, "$store.state.category.category", {});
                return "category" === e.type ? e.description : "Check out the best in " + e.name + " with articles like " + this.articleTitles[0] + ", " + this.articleTitles[1] + " & more!'"
            }
        },
        methods: {
            loadMoreArticles: function() {
                var e = (0,
                o.default)(this, "$store.state.config")
                  , t = (0,
                o.default)(this, "$store.state.route.params.categorySlug", "") || (0,
                o.default)(this, "$store.state.route.params.subcategorySlug", "")
                  , i = (0,
                o.default)(this, "$store.state.route.params.categorySlug", "") ? "category" : "subcategory";
                return this.currentPage++,
                Promise.all([(0,
                o.default)(this, "$store").dispatch("FETCH_ARTICLE_COLLECTION_BY_CATEGORY", {
                    config: e,
                    page: this.currentPage,
                    slug: t,
                    type: i
                })])
            }
        },
        asyncData: function(e) {
            return n(e.store)
        }
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(78)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "card-grid-articles",
        components: {
            CardArticle: n.default
        },
        props: ["articles", "isFeatured", "isMasonry"]
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(853)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(854)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("section", {
            staticClass: "section section--category-family-navigation"
        }, [i("nav", {
            class: "category-family category-family--" + e.categoryFamily.category.slug
        }, [i("h1", {
            staticClass: "category-family__title"
        }, [e._v(e._s(e.categoryFamily.category.name))]), i("ul", {
            staticClass: "category-family__subcategories"
        }, [i("li", {
            staticClass: "category-family__subcategories-item",
            class: {
                "category-family__subcategories-item--current": e.categoryFamily.category.slug === e.category.slug
            }
        }, [i("h2", [i("a", {
            attrs: {
                href: "/" + e.categoryFamily.category.slug + "/"
            }
        }, [e._v("All")])])]), e._l(e.categoryFamily.subcategories, function(t) {
            return i("li", {
                staticClass: "category-family__subcategories-item",
                class: {
                    "category-family__subcategories-item--current": t.slug === e.category.slug
                }
            }, [i("h2", [i("a", {
                attrs: {
                    href: "/" + t.slug + "/"
                }
            }, [e._v(e._s(t.name))])])])
        })], 2)])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "category-family-navigation",
        props: ["category", "categoryFamily"]
    }
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "infinite-loader"
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(858)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(859)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "home-view"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [e.articlesEditorsPicks ? i("div", [i("card-grid-articles", {
            attrs: {
                articles: e.articlesEditorsPicks,
                isFeatured: !0
            }
        }), i("h2", {
            staticClass: "section-title"
        }, [e._v("What's New")]), i("card-grid-articles", {
            attrs: {
                articles: e.articles.slice(0, 3 * Math.round(e.articles.length / 3) - 3),
                id: "infinite-scroll-wrapper"
            }
        })], 1) : i("div", [i("card-grid-articles", {
            attrs: {
                articles: e.articles.slice(0, 3),
                isFeatured: !0
            }
        }), i("h2", {
            staticClass: "section-title"
        }, [e._v("What's New")]), i("card-grid-articles", {
            attrs: {
                articles: e.articles.slice(3, e.articles.length),
                id: "infinite-scroll-wrapper"
            }
        })], 1), i("infinite-loader", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isLoadingArticles,
                expression: "isLoadingArticles"
            }]
        })], 1)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        var t = (0,
        s.default)(e, "state.config");
        return Promise.all([e.dispatch("FETCH_ARTICLE_COLLECTION_RECENT", {
            config: t,
            limit: 18
        }).catch(function(e) {
            return e
        }), e.dispatch("FETCH_HOMEPAGE_ARTICLES_BY_CATEGORY_EDITORS_PICKS", {
            config: t
        }).catch(function(e) {
            return e
        })]).then(function(t) {
            !1 === t[0] && !1 === t[1] && e.commit("SET_SHOW_500", !0)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
      , o = i(2)
      , s = a(o)
      , l = i(247)
      , c = a(l)
      , u = i(74)
      , d = a(u)
      , f = i(226)
      , p = a(f)
      , h = i(41)
      , m = i(256)
      , g = i(263)
      , v = a(g)
      , y = i(55)
      , b = a(y)
      , _ = i(156)
      , w = a(_);
    t.default = {
        name: "home-view",
        components: {
            CardGridArticles: v.default,
            InfiniteLoader: w.default
        },
        data: function() {
            return {
                isLoadingArticles: !1,
                currentPage: 2
            }
        },
        metaInfo: function() {
            return {
                title: (0,
                s.default)(this, "$store.state.config.site.title", "") + " | Home",
                meta: [{
                    name: "twitter:title",
                    content: (0,
                    s.default)(this, "$store.state.config.site.title", "") + " | Home"
                }, {
                    name: "twitter:description",
                    content: (0,
                    s.default)(this, "$store.state.config.site.meta.description", "")
                }, {
                    name: "description",
                    content: (0,
                    s.default)(this, "$store.state.config.site.meta.description", "")
                }, {
                    property: "og:description",
                    content: (0,
                    s.default)(this, "$store.state.config.site.meta.description", "")
                }, {
                    property: "og:url",
                    content: (0,
                    s.default)(this, "$store.state.config.site.domain", "") + "/"
                }, {
                    property: "og:title",
                    content: (0,
                    s.default)(this, "$store.state.config.site.title", "") + " | Home"
                }, {
                    property: "og:type",
                    content: "website"
                }, {
                    property: "og:image",
                    content: (0,
                    s.default)(this, "$store.state.config.site.domain", "") + "/images/default-og.png"
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    s.default)(this, "$store.state.config.site.domain", "") + "/"
                }]
            }
        },
        mixins: [m.AdsMixin],
        beforeMount: function() {
            b.default.setDataLayer(b.default.factory({
                pagetype: "homepage"
            }))
        },
        mounted: function() {
            var e = this
              , t = document.getElementById("infinite-scroll-wrapper")
              , i = (0,
            d.default)(function(i) {
                window.innerHeight + window.pageYOffset + 200 >= t.clientHeight && !e.isLoadingArticles && e.currentPage <= 3 && (e.isLoadingArticles = !0,
                e.loadMoreArticles().then(function(t) {
                    e.isLoadingArticles = !1
                }))
            }, 250);
            window.addEventListener("scroll", i);
            var a = this.loadHomepageCanopyAd({
                ctype: "homepage"
            }, this.getIsMobile);
            this.$store.dispatch("UPDATE_ADS", {
                ads: a,
                slug: "/"
            })
        },
        computed: r({}, (0,
        h.mapGetters)(["getIsMobile"]), {
            articles: function() {
                return this.filterEditorsPicks((0,
                s.default)(this, "$store.state.articleCollection.articles", []))
            },
            articlesEditorsPicks: function() {
                return (0,
                s.default)(this, "$store.state.home.articles.editorsPicks", []).length > 2 && (0,
                s.default)(this, "$store.state.home.articles.editorsPicks", [])
            },
            collectionMeta: function() {
                return (0,
                s.default)(this, "$store.state.articleCollection.meta", {})
            }
        }),
        methods: {
            filterEditorsPicks: function(e) {
                var t = (0,
                s.default)(this, "$store.state.home.articles.editorsPicks", []);
                return e = (0,
                p.default)(e, function(e) {
                    if (-1 === (0,
                    c.default)(t, function(t) {
                        return t.slug === e.slug
                    }))
                        return e
                })
            },
            loadMoreArticles: function() {
                var e = (0,
                s.default)(this, "$store.state.config");
                return this.currentPage++,
                Promise.all([(0,
                s.default)(this, "$store").dispatch("FETCH_ARTICLE_COLLECTION_RECENT", {
                    config: e,
                    page: this.currentPage,
                    limit: 9
                })])
            }
        },
        asyncData: function(e) {
            return n(e.store)
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(861)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(862)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(863)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", [e.is404 ? i("error-404") : i("div", {
            class: "view-hubs view-hubs--" + e.getHubSlug
        }, [i("div", {
            staticClass: "container"
        }, e._l(e.getHub.sections, function(t, a) {
            return i("div", {
                class: "inner inner--" + a + " inner--" + t.type + e.getExtraInnerClasses(t.type)
            }, ["articles" === t.type ? i("hubs-section-articles", {
                attrs: {
                    articles: t.value
                }
            }) : e._e(), "banner" === t.type || "video" === t.type ? i("hubs-section-banner", {
                attrs: {
                    banner: t.value,
                    type: t.type,
                    index: a
                }
            }) : e._e(), "text" === t.type ? i("hubs-section-text", {
                attrs: {
                    text: t.value
                }
            }) : e._e(), "html" === t.type ? i("hubs-section-html", {
                attrs: {
                    html: t.value
                }
            }) : e._e()], 1)
        }))])], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(257)
      , s = a(o)
      , l = i(155)
      , c = a(l)
      , u = i(864)
      , d = a(u)
      , f = i(880)
      , p = a(f)
      , h = i(897)
      , m = a(h)
      , g = i(900)
      , v = a(g);
    t.default = {
        name: "hubs",
        components: {
            Breadcrumbs: s.default,
            Error404: c.default,
            HubsSectionArticles: d.default,
            HubsSectionBanner: p.default,
            HubsSectionText: m.default,
            HubsSectionHtml: v.default
        },
        metaInfo: function() {
            var e = (0,
            r.default)(this, "$store.state.config", {})
              , t = (0,
            r.default)(this, "getHub.title", "")
              , i = (0,
            r.default)(this, "getHubSlug", "")
              , a = (0,
            r.default)(this, "getHub.description", "")
              , n = (0,
            r.default)(e, "site.name", "")
              , o = (0,
            r.default)(e, "site.domain", "")
              , s = o + "/" + i
              , l = t + " | " + n;
            return {
                title: t,
                meta: [{
                    name: "twitter:title",
                    content: l
                }, {
                    name: "twitter:description",
                    content: a
                }, {
                    name: "description",
                    content: a
                }, {
                    property: "og:description",
                    content: a
                }, {
                    property: "og:url",
                    content: s
                }, {
                    property: "og:title",
                    content: l
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: s
                }]
            }
        },
        preFetch: function(e) {
            var t = (0,
            r.default)(e, "state.route.path", "");
            return Promise.all([e.dispatch("FETCH_HUB", {
                slug: t
            })])
        },
        asyncData: function(e) {
            var t = e.store
              , i = (0,
            r.default)(t, "state.route.path", "");
            return Promise.all([t.dispatch("FETCH_HUB", {
                slug: i
            })])
        },
        computed: {
            getHubSlug: function() {
                return (0,
                r.default)(this, "$store.state.route.path", "").replace(new RegExp(/^\/|\/$/,"g"), "")
            },
            getHub: function() {
                return (0,
                r.default)(this, "$store.state.Hubs.hubs[" + this.getHubSlug + "]", {})
            },
            getBreadcrumbLinks: function() {
                var e = [];
                return e.push({
                    url: "/",
                    label: "Home"
                }),
                e.push({
                    url: "/" + (0,
                    r.default)(this, "getHub.slug", ""),
                    label: (0,
                    r.default)(this, "getHub.title", "")
                }),
                e
            },
            is404: function() {
                return 200 !== (0,
                r.default)(this, "$store.state.statusCode", 404)
            }
        },
        methods: {
            getExtraInnerClasses: function(e) {
                var t = "";
                return "articles" === e && (t += " inner--padding"),
                t
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(865)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(866)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-hubs-section-articles"
        }, [i("article-grid", {
            attrs: {
                articles: e.articles,
                keysToShow: e.getArticleCardKeysToShow
            }
        })], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , r = i(867);
    t.default = {
        name: "hubs-section-articles",
        props: {
            articles: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        components: {
            ArticleGrid: r.ArticleGrid
        },
        computed: {
            getArticleCardKeysToShow: function() {
                return (0,
                n.default)(this, "$store.state.config.components.hubs.articleCards.keysToShow", ["title"])
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ArticleGrid = t.ArticleCard = void 0;
    var n = i(264)
      , r = a(n)
      , o = i(877)
      , s = a(o);
    t.ArticleCard = r.default,
    t.ArticleGrid = s.default
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(870)
      , s = i(874)
      , l = a(s);
    t.default = {
        name: "article-card",
        components: {
            Pinterest: l.default
        },
        props: {
            article: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            keysToShow: {
                type: Array,
                default: function() {
                    return ["title"]
                }
            },
            pinterest: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            articleType: function() {
                var e = (0,
                r.default)(this, "article.slug", "");
                return -1 !== e.indexOf("/videos/") ? "video" : -1 !== e.indexOf("/explore/") ? "explore" : "article"
            },
            getCategoryName: function() {
                return (0,
                r.default)(this, "article.category.name", "")
            },
            getCategorySlug: function() {
                return (0,
                r.default)(this, "article.category.slug", "")
            },
            getSubcategoryName: function() {
                return (0,
                r.default)(this, "article.subcategory.name", "")
            },
            getSubcategorySlug: function() {
                return (0,
                r.default)(this, "article.subcategory.slug", "")
            },
            getImageResizeProfile: function() {
                return (0,
                r.default)(this, "$store.state.config.components.articleGrid.articleCards.profile", "400x269")
            },
            setDataEvent: function() {
                return "homepage-promo" === (0,
                r.default)(this, "article.type", "") ? (0,
                r.default)(this, "article.clickEvent", "") : null
            },
            setDataInfo: function() {
                return "homepage-promo" === (0,
                r.default)(this, "article.type", "") ? (0,
                r.default)(this, "article.index", "") + 1 : null
            }
        },
        methods: {
            resizeImage: function(e, t) {
                return (0,
                o.ImageResizer)(e, t)
            },
            promoGtmImpressions: function() {
                var e = _.get(this, "$store.state.config.promos.homepage.data[0].impressionEvent", "")
                  , t = _.get(this, "$store.state.config.promos.homepage.data[1].impressionEvent", "")
                  , i = 3 === this.setDataInfo ? e : t;
                dataLayer.push({
                    event: i,
                    position: this.setDataInfo
                })
            }
        },
        mounted: function() {
            this.setDataInfo && this.promoGtmImpressions()
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReplaceRcpWithPromo = t.ReplaceHpWithPromo = t.ImageResizer = void 0;
    var n = i(871)
      , r = a(n)
      , o = i(872)
      , s = a(o)
      , l = i(873)
      , c = a(l);
    t.ImageResizer = r.default,
    t.ReplaceHpWithPromo = s.default,
    t.ReplaceRcpWithPromo = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        if (!e)
            return e;
        for (var i = e.replace(/^https?:/, ""), a = [[/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "cpcd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "cppd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "cpie"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "cpeh"], [/\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "ppds"], [/\/\/s3.amazonaws.com\//g, "cme"], [/\/\/i.ehow.com\/images\//g, "ieh"], [/\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "clsd"], [/\/\/photos2.demandstudios.com\/DM-Resize\//g, "/"], [/\/\/photos.demandstudios.com\//g, "photos.demandstudios.com"], [/\/\/api.cuteness.com\//g, "cme/cuteness_data"]], n = a.length, r = 0; r < n; r++) {
            var o = a[r]
              , s = "https://cmeimg-a.akamaihd.net/" + t + "/" + o[1] + "/";
            if (o[0].test(i))
                return i.replace(o[0], s)
        }
        return e
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = !1, a = e, n = 0; n < t.length; n++)
            !function(e) {
                var n = t[e];
                n.index;
                a = a.filter(function(e, t) {
                    return !(n.slug.indexOf(e.slug) >= 0) || (i = !0,
                    !1)
                })
            }(n);
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
              , o = r.index;
            a.splice(o, 0, r)
        }
        return a
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 1, n)
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(875)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = n.default
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(876)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = i.n(n)
      , o = {
        name: "pinterest",
        props: {
            description: {
                type: String,
                default: ""
            },
            media: {
                type: String,
                default: ""
            },
            url: {
                type: String,
                default: ""
            }
        },
        computed: {
            getDescription: function() {
                return r()(this, "description", "").replace(/<\/?[^>]+(>|$)/g, "")
            },
            getUrl: function() {
                return r()(this, "$store.state.config.site.domain") + this.url
            }
        },
        methods: {
            customPin: function() {
                window && window.PinUtils && window.PinUtils.pinOne && window.PinUtils.pinOne({
                    url: this.getUrl,
                    media: this.media,
                    description: this.getDescription
                })
            },
            pinHandler: function() {
                this.$dataLayer.push({
                    event: "pin it",
                    image: this.media
                }),
                this.customPin()
            }
        }
    }
      , s = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-pinterest"
        }, [i("div", {
            directives: [{
                name: "in-viewport",
                rawName: "v-in-viewport"
            }],
            staticClass: "pinterest-wrapper",
            on: {
                click: e.pinHandler
            }
        }, [i("span", {
            staticClass: "svg pinterest-pin"
        })])])
    }
      , l = []
      , c = {
        render: s,
        staticRenderFns: l
    }
      , u = c
      , d = i(1)
      , f = a
      , p = d(o, u, !1, f, null, null);
    t.default = p.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(878)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(879)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-article-grid"
        }, [i("div", {
            staticClass: "article-cards"
        }, [e._l(e.articles, function(t) {
            return i("div", {
                staticClass: "article-cards__item"
            }, [i("article-card", {
                attrs: {
                    article: t,
                    keysToShow: e.keysToShow,
                    pinterest: e.pinterest
                }
            })], 1)
        }), i("div", {
            staticClass: "article-cards__item article-cards__item--phantom"
        }), i("div", {
            staticClass: "article-cards__item article-cards__item--phantom"
        }), i("div", {
            staticClass: "article-cards__item article-cards__item--phantom"
        })], 2)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(264)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "article-grid",
        components: {
            ArticleCard: n.default
        },
        props: {
            articles: {
                type: Array,
                default: function() {
                    return []
                }
            },
            keysToShow: {
                type: Array,
                default: function() {
                    return ["title"]
                }
            },
            pinterest: {
                type: Boolean,
                default: !1
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(881)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(882)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-hubs-section-banner"
        }, [e.banner.url && !e.banner.buttonText ? i("a", {
            staticClass: "banner-container banner-container--image",
            class: {
                "banner-container--is-first": 0 === e.index
            },
            attrs: {
                href: e.banner.url
            }
        }, [e.isVideo ? i("hubs-section-banner-video", {
            attrs: {
                banner: e.banner
            }
        }) : i("hubs-section-banner-image", {
            attrs: {
                banner: e.banner,
                index: e.index
            }
        }), e.showOverlay ? i("hubs-section-banner-overlay", {
            attrs: {
                banner: e.banner
            }
        }) : e._e()], 1) : !e.banner.url || e.banner.url && e.banner.buttonText ? i("div", {
            staticClass: "banner-container banner-container--image",
            class: {
                "banner-container--is-first": 0 === e.index
            }
        }, [e.isVideo ? i("hubs-section-banner-video", {
            attrs: {
                banner: e.banner
            }
        }) : i("hubs-section-banner-image", {
            attrs: {
                banner: e.banner,
                index: e.index
            }
        }), e.showOverlay ? i("hubs-section-banner-overlay", {
            attrs: {
                banner: e.banner
            }
        }) : e._e()], 1) : e._e()])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(883)
      , s = a(o)
      , l = i(886)
      , c = a(l)
      , u = i(893)
      , d = a(u);
    t.default = {
        name: "hubs-section-banner",
        props: {
            banner: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            index: {
                type: Number,
                default: 1
            },
            type: {
                type: String,
                default: "banner"
            }
        },
        components: {
            HubsSectionBannerOverlay: s.default,
            HubsSectionBannerImage: c.default,
            HubsSectionBannerVideo: d.default
        },
        computed: {
            showOverlay: function() {
                return "" !== (0,
                r.default)(this, "banner.title", "") || "" !== (0,
                r.default)(this, "banner.subtitle", "") || "" !== (0,
                r.default)(this, "banner.buttonText", "")
            },
            isVideo: function() {
                return "video" === (0,
                r.default)(this, "type", "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(884)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(885)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-hubs-section-banner-overlay"
        }, [i("div", {
            staticClass: "overlay",
            style: {
                backgroundColor: "rgba(0,0,0," + e.getOverlayOpacity + ")"
            }
        }, [i("div", {
            staticClass: "overlay-inner"
        }, [e.banner.title ? i("h2", {
            staticClass: "overlay__title",
            class: e.getTitleColor
        }, [e._v("\n        " + e._s(e.getBannerTitle) + "\n      ")]) : e._e(), e.banner.subtitle ? i("h3", {
            staticClass: "overlay__subtitle",
            class: e.getTitleColor
        }, [e._v("\n        " + e._s(e.getBannerSubTitle) + "\n      ")]) : e._e(), e.showButton ? i("div", {
            staticClass: "overlay__button",
            style: e.getButtonStyles
        }, [e.banner.url ? i("a", {
            staticClass: "button__link",
            attrs: {
                href: e.banner.url
            }
        }, [e._v(e._s(e.getBannerBtnText))]) : i("span", [e._v(e._s(e.getBannerBtnText))])]) : e._e()])])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , r = i(105);
    t.default = {
        name: "hubs-section-banner-overlay",
        props: {
            banner: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        computed: {
            showButton: function() {
                return (0,
                n.default)(this, "banner.buttonColor", !1) && (0,
                n.default)(this, "banner.buttonText", !1) && (0,
                n.default)(this, "banner.url", !1)
            },
            getOverlayOpacity: function() {
                return (0,
                n.default)(this, "banner.overlayOpacity", 0)
            },
            getButtonStyles: function() {
                return (0,
                n.default)(this, "banner.buttonColor", !1) ? {
                    backgroundColor: (0,
                    n.default)(this, "banner.buttonColor", "")
                } : {}
            },
            getBannerTitle: function() {
                var e = (0,
                n.default)(this, "$store.state.config.components.hubs.banner.title.charLimit", "");
                return e ? (0,
                n.default)(this, "banner.title", "").substring(0, e) : this.banner.title
            },
            getBannerSubTitle: function() {
                var e = (0,
                n.default)(this, "$store.state.config.components.hubs.banner.subTitle.charLimit", "");
                return e ? (0,
                r.truncate)((0,
                n.default)(this, "banner.subtitle", ""), e, !0) : this.banner.subtitle
            },
            getBannerBtnText: function() {
                var e = (0,
                n.default)(this, "$store.state.config.components.hubs.banner.ctaCopy.charLimit", "");
                return e ? (0,
                n.default)(this, "banner.buttonText", "").substring(0, e) : this.banner.buttonText
            },
            getTitleColor: function() {
                if ((0,
                n.default)(this, "banner.overlayOpacity", 0))
                    return "light"
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(887)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(888)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-hubs-section-banner-image"
        }, [i("picture", [e.banner.mobile && e.banner.desktop ? i("source", {
            attrs: {
                media: "(min-width: 768px)",
                srcset: e.resizeImage(e.banner.desktop, e.getBannerSizeDesktop)
            }
        }) : e._e(), e.banner.mobile ? i("img", {
            staticClass: "banner-image",
            attrs: {
                src: e.resizeImage(e.banner.mobile, e.getBannerSizeMobile)
            }
        }) : e._e(), !e.banner.mobile && e.banner.desktop ? i("img", {
            staticClass: "banner-image",
            attrs: {
                src: e.resizeImage(e.banner.desktop, e.getBannerSizeDesktop)
            }
        }) : e._e()])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , r = i(889);
    t.default = {
        name: "hubs-section-banner-image",
        props: {
            banner: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            index: {
                type: Number,
                default: 1
            }
        },
        computed: {
            getBannerSizeDesktop: function() {
                return 0 === this.index ? "1440x550" : "1440"
            },
            getBannerSizeMobile: function() {
                return 0 === this.index ? (0,
                n.default)(this, "$store.state.config.components.hubs.banner.imageSizeMobile", "default") : "default"
            }
        },
        methods: {
            resizeImage: function(e, t) {
                return (0,
                r.ImageResizer)(e, t)
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReplaceRcpWithPromo = t.ReplaceHpWithPromo = t.ImageResizer = void 0;
    var n = i(890)
      , r = a(n)
      , o = i(891)
      , s = a(o)
      , l = i(892)
      , c = a(l);
    t.ImageResizer = r.default,
    t.ReplaceHpWithPromo = s.default,
    t.ReplaceRcpWithPromo = c.default
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        if (!e)
            return e;
        for (var i = e.replace(/^https?:/, ""), a = [[/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/cdn-write.demandstudios.com\//g, "cpcd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/photos.demandstudios.com\//g, "cppd"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\/i.ehow.com\//g, "cpie"], [/\/\/s3.amazonaws.com\/cme_public_images\/www_ehow_com\//g, "cpeh"], [/\/\/s3.amazonaws.com\/photography.prod.demandstudios.com\//g, "ppds"], [/\/\/s3.amazonaws.com\//g, "cme"], [/\/\/i.ehow.com\/images\//g, "ieh"], [/\/\/s3-us-west-1.amazonaws.com\/contentlab.studiod\//g, "clsd"], [/\/\/photos2.demandstudios.com\/DM-Resize\//g, "/"], [/\/\/photos.demandstudios.com\//g, "photos.demandstudios.com"], [/\/\/api.cuteness.com\//g, "cme/cuteness_data"]], n = a.length, r = 0; r < n; r++) {
            var o = a[r]
              , s = "https://cmeimg-a.akamaihd.net/" + t + "/" + o[1] + "/";
            if (o[0].test(i))
                return i.replace(o[0], s)
        }
        return e
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = !1, a = e, n = 0; n < t.length; n++)
            !function(e) {
                var n = t[e];
                n.index;
                a = a.filter(function(e, t) {
                    return !(n.slug.indexOf(e.slug) >= 0) || (i = !0,
                    !1)
                })
            }(n);
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
              , o = r.index;
            a.splice(o, 0, r)
        }
        return a
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!t.length)
            return e;
        for (var i = e, a = 0; a < t.length; a++) {
            var n = t[a]
              , r = n.index;
            i.splice(r, 1, n)
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(894)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(895)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "component-hubs-section-banner-video"
        }, [i("video", {
            staticClass: "banner-video",
            attrs: {
                loop: "",
                autoplay: "",
                muted: "",
                playsinline: ""
            },
            domProps: {
                muted: !0
            }
        }, [e.video && e.isValidVideoExtension(e.getVideoExtension) ? i("source", {
            attrs: {
                src: e.video,
                type: "video/" + e.getVideoExtension
            }
        }) : e._e()])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(896)
      , s = a(o);
    t.default = {
        name: "hubs-section-banner-video",
        props: {
            banner: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        data: function() {
            return {
                validVideoExtensions: {
                    mp4: 1,
                    ogg: 1,
                    webm: 1
                },
                video: "",
                videoExtension: ""
            }
        },
        mounted: function() {
            var e = (0,
            r.default)(this, "banner.desktop", "")
              , t = (0,
            r.default)(this, "banner.mobile", "");
            this.$isMobile && t ? this.video = t : this.video = e
        },
        computed: {
            getVideoExtension: function() {
                return s.default.extname((0,
                r.default)(this, "video", "")).slice(1).toLowerCase()
            }
        },
        methods: {
            isValidVideoExtension: function(e) {
                var t = (0,
                r.default)(this, "validVideoExtensions", []);
                return (0,
                r.default)(t, e, !1)
            }
        }
    }
}
, , function(e, t, i) {
    "use strict";
    function a(e) {
        i(898)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(899)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            staticClass: "component-hubs-section-text"
        }, [e._v("\n  " + e._s(e.text) + "\n")])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "hubs-section-text",
        props: {
            text: {
                type: String,
                default: ""
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(901)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(902)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("div", {
            staticClass: "component-hubs-section-html",
            domProps: {
                innerHTML: e._s(e.html)
            }
        })
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        name: "hubs-section-html",
        props: {
            html: {
                type: String,
                default: ""
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(904)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(905)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "search-view"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [e.hasZeroResults ? i("div", {
            staticClass: "no-results-container"
        }, [i("p", {
            staticClass: "no-results"
        }, [e._v("No results for '" + e._s(e.query) + "'")]), i("p", {
            staticClass: "sorry"
        }, [e._v("Sorry, but nothing matched your search criteria. Please try again with some different keywords.")])]) : i("div", {
            staticClass: "yes-results-container"
        }, [i("h1", {
            staticClass: "yes-results-title"
        }, [e._v("Search Results for '" + e._s(e.query) + "'")]), i("search-results-grid-articles", {
            attrs: {
                articles: e.articles,
                id: "infinite-scroll-wrapper",
                isMasonry: !0
            }
        })], 1), i("infinite-loader", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isLoadingArticles,
                expression: "isLoadingArticles"
            }]
        })], 1)])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function n(e) {
        return Promise.all([e.dispatch("FETCH_ARTICLE_COLLECTION_BY_SEARCH", {
            query: (0,
            o.default)(e, "state.route.query.q", ""),
            page: (0,
            o.default)(e, "state.route.query.page", 1),
            config: (0,
            o.default)(e, "state.config")
        })])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(2)
      , o = a(r)
      , s = i(74)
      , l = a(s)
      , c = i(54)
      , u = a(c)
      , d = i(906)
      , f = a(d)
      , p = i(55)
      , h = a(p)
      , m = i(156)
      , g = a(m)
      , v = i(63)
      , y = a(v);
    t.default = {
        name: "search-view",
        components: {
            InfiniteLoader: g.default,
            SearchResultsGridArticles: f.default
        },
        data: function() {
            return {
                isLoadingArticles: !1,
                currentPage: 1,
                showEndMessage: !1
            }
        },
        metaInfo: function() {
            return {
                title: "You searched for " + (0,
                o.default)(this, "query", "") + " | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: "Search Results | " + (0,
                    o.default)(u.default, "site.domain.title", "")
                }, {
                    name: "twitter:description",
                    content: "Search Results for " + (0,
                    o.default)(this, "query", "")
                }, {
                    name: "description",
                    content: "Search Results for " + (0,
                    o.default)(this, "query", "")
                }, {
                    property: "og:description",
                    content: "Search Results for " + (0,
                    o.default)(this, "query", "")
                }, {
                    property: "og:url",
                    content: "" + (0,
                    o.default)(u.default, "site.domain", "") + (0,
                    o.default)(this, "currentUrl", "")
                }, {
                    property: "og:title",
                    content: "Search Results | " + (0,
                    o.default)(u.default, "site.domain.title", "")
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    o.default)(u.default, "site.domain", "") + "/search/"
                }]
            }
        },
        beforeMounted: function() {
            h.default.setDataLayer(h.default.factory({
                pagetype: "search"
            }))
        },
        mounted: function() {
            var e = this;
            (new y.default).load({
                src: "//unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js",
                crossorigin: "anonymous"
            }),
            setTimeout(function() {
                new Masonry(".grid",{
                    itemSelector: ".grid-item",
                    columnWidth: ".grid-sizer",
                    percentPosition: !0,
                    gutter: ".gutter-sizer"
                })
            }, 700);
            var t = document.getElementById("infinite-scroll-wrapper")
              , i = (0,
            l.default)(function(i) {
                window.innerHeight + window.pageYOffset + 200 >= t.clientHeight && !e.isLoadingArticles && (e.currentPage + 1 <= e.collectionMeta.total_pages ? (e.isLoadingArticles = !0,
                e.loadMoreArticles().then(function(t) {
                    e.isLoadingArticles = !1,
                    new Masonry(".grid",{
                        itemSelector: ".grid-item",
                        columnWidth: ".grid-sizer",
                        percentPosition: !0,
                        gutter: ".gutter-sizer"
                    }).reloadItems()
                })) : e.showEndMessage = !0)
            }, 250);
            window.addEventListener("scroll", i)
        },
        computed: {
            articles: function() {
                return (0,
                o.default)(this, "$store.state.articleCollection.articles", [])
            },
            collectionMeta: function() {
                return (0,
                o.default)(this, "$store.state.articleCollection.meta", [])
            },
            hasZeroResults: function() {
                return (0,
                o.default)(this, "$store.state.search.zeroResults", !1)
            },
            query: function() {
                return (0,
                o.default)(this, "$store.state.route.query.q", "")
            },
            currentUrl: function() {
                return (0,
                o.default)(this, "query") ? "/search?q=" + (0,
                o.default)(this, "query", "") : "/search"
            }
        },
        methods: {
            loadMoreArticles: function() {
                return this.currentPage++,
                Promise.all([(0,
                o.default)(this, "$store").dispatch("FETCH_ARTICLE_COLLECTION_BY_SEARCH", {
                    config: (0,
                    o.default)(this, "$store.state.config"),
                    query: (0,
                    o.default)(this, "query", ""),
                    page: this.currentPage
                })])
            }
        },
        asyncData: function(e) {
            return n(e.store)
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(907)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(908)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("section", {
            staticClass: "section section--card-grid-articles",
            class: {
                "section--card-grid-articles--is-masonry": e.isMasonry
            }
        }, [i("div", {
            staticClass: "card-grid-articles-wrapper card-grid-articles"
        }, [i("div", {
            staticClass: "row articles-cards grid"
        }, [i("div", {
            staticClass: "grid-sizer"
        }), i("div", {
            staticClass: "gutter-sizer"
        }), e._l(e.articles, function(t, a) {
            return i("div", {
                staticClass: "grid-item articles-cards__item"
            }, [i("card-article", {
                attrs: {
                    article: t,
                    isMasonry: e.isMasonry
                }
            })], 1)
        })], 2)])])
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(78)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "card-grid-articles",
        components: {
            CardArticle: n.default
        },
        props: ["articles", "isFeatured", "isMasonry"],
        mounted: function() {
            console.log("is mansory", this.isMasonry)
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(910)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(911)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "view-subscribe"
        }, [i("div", {
            staticClass: "inner"
        }, [i("div", {
            staticClass: "inner inner--padding"
        }, [e._m(0), i("section", {
            staticClass: "subscribe-wrapper"
        }, [i("div", {
            staticClass: "subscribe-container"
        }, [i("h3", {
            staticClass: "subscribe-heading",
            class: {
                success: e.successfulSubmission
            }
        }, [e._v("Subscribe To Our Weekly Newsletter!")]), i("div", {
            staticClass: "subscribe-copy",
            class: {
                success: e.successfulSubmission
            }
        }, [e._v("It's filled with everything you need to UP your health game, including cold-pressed exclusive video content, monthly horoscopes, skincare tips, healthy (and easy) recipes, and more.")]), i("newsletter-form", {
            attrs: {
                form: e.formId,
                fieldName: "Name",
                inputType: "text",
                filter: e.filter,
                rules: "lg_alpha_space",
                placeholder: "Name"
            },
            on: {
                successfulSubmission: e.successfulSubmissionCatch
            }
        })], 1), i("a", {
            staticClass: "subscribe-homepage-link",
            class: {
                success: e.successfulSubmission
            },
            attrs: {
                href: "/"
            }
        }, [e._v("Take me back to the homepage.")])])])])])
    }
      , s = [function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("section", {
            staticClass: "image-wrapper"
        }, [i("picture", [i("source", {
            attrs: {
                srcset: "/images/subscribe-desktop.jpg 720w",
                media: "(min-width: 768px)"
            }
        }), i("img", {
            attrs: {
                src: "/images/subscribe-mobile.jpg"
            }
        })])])
    }
    ]
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(2)
      , r = a(n)
      , o = i(54)
      , s = a(o)
      , l = i(55)
      , c = a(l)
      , u = i(912)
      , d = a(u);
    t.default = {
        name: "subscribe",
        components: {
            NewsletterForm: d.default
        },
        data: function() {
            return {
                config: (0,
                r.default)(this, "$store.state.config", {}),
                successfulSubmission: !1,
                formId: "suscribe-landing-page"
            }
        },
        beforeRouteUpdate: function(e, t, i) {},
        metaInfo: function() {
            return {
                title: "Subscribe | LEAFtv",
                meta: [{
                    name: "twitter:title",
                    content: "Subscribe | " + (0,
                    r.default)(s.default, "site.title", "")
                }, {
                    name: "twitter:description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    name: "description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    property: "og:description",
                    content: "Welcome to LEAFtv - a modern lifestyle resource for creative, curious woman passionate about being the best version of themselves they can be."
                }, {
                    property: "og:url",
                    content: (0,
                    r.default)(s.default, "site.domain", "") + "/subscribe/"
                }, {
                    property: "og:title",
                    content: "Subscribe | " + (0,
                    r.default)(s.default, "site.title", "")
                }, {
                    property: "og:image",
                    content: (0,
                    r.default)(s.default, "site.domain", "") + "/images/default-og.png"
                }, {
                    property: "og:type",
                    content: "subscribe"
                }],
                link: [{
                    vmid: "canonical-url",
                    rel: "canonical",
                    href: (0,
                    r.default)(s.default, "site.domain", "") + "/subscribe/"
                }]
            }
        },
        mounted: function() {
            c.default.setDataLayer(c.default.factory({
                pagetype: "subscribe"
            }))
        },
        methods: {
            successfulSubmissionCatch: function() {
                this.successfulSubmission = !0
            },
            filter: function(e) {
                return e = e.replace(/[^A-Za-z']/gi, "")
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    function a(e) {
        i(913)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(914)
      , r = i.n(n)
      , o = function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
            staticClass: "newsletter-form-wrapper"
        }, [i("transition", {
            attrs: {
                name: "fade"
            }
        }, [i("p", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.hasSignedUp,
                expression: "hasSignedUp"
            }],
            staticClass: "thank-you"
        }, [e._v("Thanks For Subscribing!"), i("br"), e._v("TTYL!")])]), i("div", {
            staticClass: "newsletter-form",
            class: {
                "has-signed-up": e.hasSignedUp
            }
        }, [i("form", {
            staticClass: "form",
            attrs: {
                action: "/newsletter-signup",
                method: "POST"
            },
            on: {
                keyup: function(t) {
                    if (!("button"in t) && e._k(t.keyCode, "enter", 13, t.key))
                        return null;
                    e.newsletter(t)
                }
            }
        }, [i("div", {
            staticClass: "form-row"
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.email,
                expression: "email"
            }],
            ref: "newsletter-form-input",
            staticClass: "form-row__input email",
            class: {
                error: e.hasError
            },
            attrs: {
                type: "text",
                name: "email",
                placeholder: "Email (Required)",
                autocomplete: "off"
            },
            domProps: {
                value: e.email
            },
            on: {
                input: function(t) {
                    t.target.composing || (e.email = t.target.value)
                }
            }
        }), i("div", {
            staticClass: "message",
            class: {
                error: e.hasError
            }
        }, [e._v(e._s(e.message))]), i("input", {
            ref: "newsletter-form-input",
            staticClass: "form-row__input name",
            class: {
                error: e.hasError
            },
            attrs: {
                name: e.fieldSlug,
                type: "text",
                name: "name",
                placeholder: "Name",
                autocomplete: "off",
                onPaste: "return false"
            },
            on: {
                input: e.onInput
            }
        }), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.dob,
                expression: "dob"
            }],
            ref: "newsletter-form-input",
            staticClass: "form-row__input dob",
            attrs: {
                id: "dob",
                type: "text",
                name: "dob",
                placeholder: "DOB: (MM/DD/YYYY)",
                autocomplete: "off",
                maxlength: "10",
                onPaste: "return false"
            },
            domProps: {
                value: e.dob
            },
            on: {
                keypress: e.checkDob,
                input: function(t) {
                    t.target.composing || (e.dob = t.target.value)
                }
            }
        }), i("transition", {
            attrs: {
                name: "component-fade",
                mode: "out-in"
            }
        }, [e.dobError ? i("span", {
            key: "error",
            staticClass: "lower-copy error"
        }, [e._v("DOB should follow MM/DD/YYYY format.")]) : i("span", {
            key: "message",
            staticClass: "lower-copy"
        }, [e._v("Birthday guys and gals receive a special note from us!")])])], 1), i("div", {
            staticClass: "form-row submit"
        }, [i("a", {
            staticClass: "form-row__submit",
            attrs: {
                "data-event": "newsletter subscribe attempt",
                "data-info": "landing page"
            },
            on: {
                click: e.newsletter
            }
        }, [e._v("SUBMIT")])])])])], 1)
    }
      , s = []
      , l = {
        render: o,
        staticRenderFns: s
    }
      , c = l
      , u = i(1)
      , d = a
      , f = u(r.a, c, !1, d, null, null);
    t.default = f.exports
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(2)
      , n = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a);
    t.default = {
        name: "newsletter-form",
        props: ["event", "form", "fieldName", "rules", "filter", "inputType", "placeholder", "value"],
        data: function() {
            return {
                email: "",
                name: "",
                dob: "",
                hasSignedUp: !1,
                hasError: !1,
                dobError: !1,
                message: ""
            }
        },
        mounted: function() {
            this.$store.dispatch("REGISTER_FORM_ROW", {
                form: (0,
                n.default)(this, "form", ""),
                field: (0,
                n.default)(this, "fieldSlug", ""),
                rules: (0,
                n.default)(this, "rules", ""),
                value: (0,
                n.default)(this, "init", "")
            })
        },
        computed: {
            checkDobLength: function() {
                return this.dob.length >= 1 && this.dob.length <= 9
            },
            checkDobValid: function() {
                return this.dob.match(/^\d{2}\/\d{2}\/\d{4}$/)
            },
            subscribePage: function() {
                return "/subscribe/" === (0,
                n.default)(this, "$store.state.route.path", "")
            },
            fieldSlug: function() {
                return this.fieldName.replace(/\s+/g, "-").toLowerCase()
            },
            getValue: function() {
                return (0,
                n.default)(this, "$store.state.forms.forms[" + this.form + "][" + this.fieldSlug + "].value", "")
            }
        },
        methods: {
            newsletter: function(e) {
                var t = this;
                return this.hasError = !1,
                this.dobError = !1,
                "" === this.email ? (setTimeout(function() {
                    t.message = "Email is required.",
                    t.hasError = !0
                }, 600),
                this.subscribeDataLayerError()) : this.checkEmail() ? this.checkDobLength || !this.checkDobValid && this.dob.length > 0 ? (setTimeout(function() {
                    t.dobError = !0
                }, 300),
                this.subscribeDataLayerError()) : void this.$store.dispatch("SUBSCRIBE", {
                    email: this.email,
                    name: this.name,
                    dob: this.dob
                }).then(function(e) {
                    if ("Subscribed" === (0,
                    n.default)(e, "status"))
                        return t.subscribeDataLayerSuccess(),
                        t.hasSignedUp = !0,
                        t.$emit("successfulSubmission"),
                        void (t.subscribePage || setTimeout(function() {
                            t.hasSignedUp = !1,
                            t.message = ""
                        }, 3e3));
                    t.message = "Invalid email format.",
                    t.hasError = !0
                }).catch(function(e) {
                    t.message = "Invalid email format.",
                    t.hasError = !0,
                    t.subscribeDataLayerError()
                }) : this.subscribeDataLayerError()
            },
            checkEmail: function() {
                var e = this;
                return !!/^([a-zA-Z0-9_\-\+\/\=\.]+)@([a-zA-Z0-9_\-\+\/\=\.]+)\.([a-zA-Z]{2,5})$/i.test(this.email) || (setTimeout(function() {
                    e.message = "Invalid email format.",
                    e.hasError = !0
                }, 600),
                !1)
            },
            checkDob: function(e) {
                var t = e.which || e.keyCode;
                t >= 48 && t <= 57 || 13 === t ? null === this.dob.match(/^\d{2}$/) && null === this.dob.match(/^\d{2}\/\d{2}$/) || (document.getElementById("dob").value = this.dob + "/") : e.preventDefault()
            },
            onInput: function(e) {
                var t = (0,
                n.default)(e, "target.value", "");
                this.filter && (t = this.filter(t),
                e.target.value = t),
                this.$store.dispatch("UPDATE_FORM_ROW", {
                    form: (0,
                    n.default)(this, "form", ""),
                    field: (0,
                    n.default)(this, "fieldSlug", ""),
                    value: t
                })
            },
            subscribeDataLayerError: function() {
                window.dataLayer.push({
                    event: "newsletter subscribe error",
                    prompt: "landing page"
                })
            },
            subscribeDataLayerSuccess: function() {
                window.dataLayer.push({
                    event: "newsletter subscribe success",
                    prompt: "landing page"
                })
            }
        }
    }
}
, , function(e, t, i) {
    "use strict";
    function a(e) {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = a
}
]), [270]);
