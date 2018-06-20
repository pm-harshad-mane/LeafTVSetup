function pwtCreatePrebidNamespace(preBidNameSpace) {
    window[preBidNameSpace] = window[preBidNameSpace] || {};
    window[preBidNameSpace].que = window[preBidNameSpace].que || [];
    /* prebid.js v0.26.0-preUpdated : 2017-12-27 */
    !(function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }
    )([(function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e) {
            e.forEach((function(e) {
                if (s(e.called) === C)
                    try {
                        e.call(),
                        e.called = !0
                    } catch (t) {
                        S.logError("Error processing command :", "prebid.js", t)
                    }
            }
            ))
        }
        function a(e) {
            var t = window[preBidNameSpace]._bidsRequested.map((function(e) {
                return e.bids.map((function(e) {
                    return e.placementCode
                }
                ))
            }
            )).reduce(p.flatten).filter(p.uniques);
            return S.contains(t, e) ? !0 : (S.logError('The "' + e + '" placement is not defined.'),
            void 0)
        }
        function o() {
            window[preBidNameSpace]._bidsRequested = [],
            window[preBidNameSpace]._bidsReceived = window[preBidNameSpace]._bidsReceived.filter((function(e) {
                return !window[preBidNameSpace]._adUnitCodes.includes(e.adUnitCode)
            }
            ))
        }
        function d(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
            e.defaultView.frameElement.height = n)
        }
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , u = n(1)
          , p = n(2)
          , l = n(4)
          , f = n(7);
        n(23);
        var m = n(12)
          , g = n(15)
          , v = n(71)
          , b = n(72)
          , h = n(17)
          , w = n(11);
        window[preBidNameSpace] = u.getGlobal();
        var y = n(3)
          , S = n(2)
          , B = n(14)
          , N = n(5)
          , I = n(13)
          , E = n(9)
          , A = n(73)
          , _ = n(74)
          , T = "function"
          , C = "undefined"
          , x = "object"
          , O = y.EVENTS.BID_WON
          , R = y.EVENTS.SET_TARGETING
          , U = !1
          , k = []
          , P = {
            bidWon: a
        };
        window[preBidNameSpace]._bidsRequested = [],
        window[preBidNameSpace]._bidsReceived = [],
        window[preBidNameSpace]._adUnitCodes = [],
        window[preBidNameSpace]._winningBids = [],
        window[preBidNameSpace]._adsReceived = [],
        window[preBidNameSpace]._sendAllBids = !1,
        window[preBidNameSpace].bidderSettings = window[preBidNameSpace].bidderSettings || {},
        window[preBidNameSpace].bidderTimeout = window[preBidNameSpace].bidderTimeout || 3e3,
        window[preBidNameSpace].cbTimeout = window[preBidNameSpace].cbTimeout || 200,
        window[preBidNameSpace].timeoutBuffer = 200,
        window[preBidNameSpace].logging = window[preBidNameSpace].logging || !1,
        window[preBidNameSpace].publisherDomain = window[preBidNameSpace].publisherDomain || window.location.origin,
        window[preBidNameSpace].libLoaded = !0,
        window[preBidNameSpace].version = "v0.26.0-pre",
        S.logInfo("Prebid.js v0.26.0-pre loaded"),
        window[preBidNameSpace].adUnits = window[preBidNameSpace].adUnits || [],
        window[preBidNameSpace].cookieSyncDelay = window[preBidNameSpace].cookieSyncDelay || 100,
        window[preBidNameSpace].cmd.push = function(e) {
            if (("undefined" == typeof e ? "undefined" : s(e)) === T)
                try {
                    e.call()
                } catch (t) {
                    S.logError("Error processing command :" + t.message)
                }
            else
                S.logError("Commands written into window[preBidNameSpace].cmd.push must be wrapped in a function")
        }
        ,
        window[preBidNameSpace].que.push = window[preBidNameSpace].cmd.push,
        window[preBidNameSpace].getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (S.logInfo("Invoking window[preBidNameSpace].getAdserverTargetingForAdUnitCodeStr", arguments),
            e) {
                var t = window[preBidNameSpace].getAdserverTargetingForAdUnitCode(e);
                return S.transformAdServerTargetingObj(t)
            }
            S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }
        ,
        window[preBidNameSpace].getAdserverTargetingForAdUnitCode = function(e) {
            return window[preBidNameSpace].getAdserverTargeting(e)[e]
        }
        ,
        window[preBidNameSpace].getAdserverTargeting = function(e) {
            return S.logInfo("Invoking window[preBidNameSpace].getAdserverTargeting", arguments),
            _.getAllTargeting(e).map((function(e) {
                return r({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                    return r({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }
                )).reduce((function(e, t) {
                    return c(t, e)
                }
                ), {}))
            }
            )).reduce((function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = c({}, e[n], t[n]),
                e
            }
            ), {})
        }
        ,
        window[preBidNameSpace].getBidResponses = function() {
            S.logInfo("Invoking window[preBidNameSpace].getBidResponses", arguments);
            var e = window[preBidNameSpace]._bidsReceived.filter(p.adUnitsFilter.bind(this, window[preBidNameSpace]._adUnitCodes))
              , t = e && e.length && e[e.length - 1].requestId;
            return e.map((function(e) {
                return e.adUnitCode
            }
            )).filter(p.uniques).map((function(n) {
                return e.filter((function(e) {
                    return e.requestId === t && e.adUnitCode === n
                }
                ))
            }
            )).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            }
            )).map((function(e) {
                return r({}, e[0].adUnitCode, {
                    bids: e
                })
            }
            )).reduce((function(e, t) {
                return c(e, t)
            }
            ), {})
        }
        ,
        window[preBidNameSpace].getBidResponsesForAdUnitCode = function(e) {
            var t = window[preBidNameSpace]._bidsReceived.filter((function(t) {
                return t.adUnitCode === e
            }
            ));
            return {
                bids: t
            }
        }
        ,
        window[preBidNameSpace].setTargetingForGPTAsync = function(e) {
            if (S.logInfo("Invoking window[preBidNameSpace].setTargetingForGPTAsync", arguments),
            !p.isGptPubadsDefined())
                return S.logError("window.googletag is not defined on the page"),
                void 0;
            var t = _.getAllTargeting(e);
            _.resetPresetTargeting(e),
            _.setTargeting(t),
            E.emit(R)
        }
        ,
        window[preBidNameSpace].setTargetingForAst = function() {
            return S.logInfo("Invoking window[preBidNameSpace].setTargetingForAn", arguments),
            _.isApntagDefined() ? (_.setTargetingForAst(),
            E.emit(R),
            void 0) : (S.logError("window.apntag is not defined on the page"),
            void 0)
        }
        ,
        window[preBidNameSpace].allBidsAvailable = function() {
            return S.logInfo("Invoking window[preBidNameSpace].allBidsAvailable", arguments),
            B.bidsBackAll()
        }
        ,
        window[preBidNameSpace].renderAd = function(e, t) {
            if (S.logInfo("Invoking window[preBidNameSpace].renderAd", arguments),
            S.logMessage("Calling renderAd with adId :" + t),
            e && t)
                try {
                    var n = window[preBidNameSpace]._bidsReceived.find((function(e) {
                        return e.adId === t
                    }
                    ));
                    if (n) {
                        n.ad = S.replaceAuctionPrice(n.ad, n.cpm),
                        n.url = S.replaceAuctionPrice(n.url, n.cpm),
                        window[preBidNameSpace]._winningBids.push(n),
                        E.emit(O, n);
                        var r = n.height
                          , i = n.width
                          , a = n.ad
                          , o = n.mediaType
                          , c = n.adUrl
                          , s = n.renderer;
                        if (s && s.url)
                            s.render(n);
                        else if (e === document && !S.inIframe() || "video" === o)
                            S.logError("Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.");
                        else if (a)
                            e.write(a),
                            e.close(),
                            d(e, i, r);
                        else if (c) {
                            var u = S.createInvisibleIframe();
                            u.height = r,
                            u.width = i,
                            u.style.display = "inline",
                            u.style.overflow = "hidden",
                            u.src = c,
                            S.insertElement(u, e, "body"),
                            d(e, i, r)
                        } else
                            S.logError("Error trying to write ad. No ad for bid response id: " + t)
                    } else
                        S.logError("Error trying to write ad. Cannot find ad by given id : " + t)
                } catch (p) {
                    S.logError("Error trying to write ad Id :" + t + " to the page:" + p.message)
                }
            else
                S.logError("Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }
        ,
        window[preBidNameSpace].removeAdUnit = function(e) {
            if (S.logInfo("Invoking window[preBidNameSpace].removeAdUnit", arguments),
            e)
                for (var t = 0; t < window[preBidNameSpace].adUnits.length; t++)
                    window[preBidNameSpace].adUnits[t].code === e && window[preBidNameSpace].adUnits.splice(t, 1)
        }
        ,
        window[preBidNameSpace].clearAuction = function() {
            U = !1,
            b.syncCookies(window[preBidNameSpace].cookieSyncDelay),
            S.logMessage("Prebid auction cleared"),
            k.length && k.shift()()
        }
        ,
        window[preBidNameSpace].requestBids = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.bidsBackHandler
              , n = e.timeout
              , r = e.adUnits
              , i = e.adUnitCodes;
            E.emit("requestBids");
            var a = window[preBidNameSpace].cbTimeout = n || window[preBidNameSpace].bidderTimeout;
            r = r || window[preBidNameSpace].adUnits,
            S.logInfo("Invoking window[preBidNameSpace].requestBids", arguments),
            i && i.length ? r = r.filter((function(e) {
                return i.includes(e.code)
            }
            )) : i = r && r.map((function(e) {
                return e.code
            }
            ));
            var d = r.filter(l.videoAdUnit).filter(l.hasNonVideoBidder);
            if (d.forEach((function(e) {
                S.logError("adUnit " + e.code + " has 'mediaType' set to 'video' but contains a bidder that doesn't support video. No Prebid demand requests will be triggered for this adUnit.");
                for (var t = 0; t < r.length; t++)
                    r[t].code === e.code && r.splice(t, 1)
            }
            )),
            r.filter(f.nativeAdUnit).filter(f.hasNonNativeBidder).forEach((function(e) {
                var t = e.bids.filter((function(e) {
                    return !f.nativeBidder(e)
                }
                )).map((function(e) {
                    return e.bidder
                }
                )).join(", ");
                S.logError("adUnit " + e.code + " has 'mediaType' set to 'native' but contains non-native bidder(s) " + t + ". No Prebid demand requests will be triggered for those bidders."),
                e.bids = e.bids.filter(f.nativeBidder)
            }
            )),
            U)
                return k.push((function() {
                    window[preBidNameSpace].requestBids({
                        bidsBackHandler: t,
                        timeout: a,
                        adUnits: r,
                        adUnitCodes: i
                    })
                }
                )),
                void 0;
            if (U = !0,
            window[preBidNameSpace]._adUnitCodes = i,
            B.externalCallbackReset(),
            o(),
            !r || 0 === r.length)
                return S.logMessage("No adUnits configured. No bids requested."),
                ("undefined" == typeof t ? "undefined" : s(t)) === T && B.addOneTimeCallback(t, !1),
                B.executeCallback(),
                void 0;
            var c = !0
              , u = B.executeCallback.bind(B, c)
              , p = setTimeout(u, a);
            w.setAjaxTimeout(a),
            ("undefined" == typeof t ? "undefined" : s(t)) === T && B.addOneTimeCallback(t, p),
            N.callBids({
                adUnits: r,
                adUnitCodes: i,
                cbTimeout: a
            }),
            0 === window[preBidNameSpace]._bidsRequested.length && B.executeCallback()
        }
        ,
        window[preBidNameSpace].addAdUnits = function(e) {
            S.logInfo("Invoking window[preBidNameSpace].addAdUnits", arguments),
            S.isArray(e) ? (e.forEach((function(e) {
                return e.transactionId = S.generateUUID()
            }
            )),
            window[preBidNameSpace].adUnits.push.apply(window[preBidNameSpace].adUnits, e)) : ("undefined" == typeof e ? "undefined" : s(e)) === x && (e.transactionId = S.generateUUID(),
            window[preBidNameSpace].adUnits.push(e))
        }
        ,
        window[preBidNameSpace].onEvent = function(e, t, n) {
            return S.logInfo("Invoking window[preBidNameSpace].onEvent", arguments),
            S.isFn(t) ? n && !P[e].call(null, n) ? (S.logError('The id provided is not valid for event "' + e + '" and no handler was set.'),
            void 0) : (E.on(e, t, n),
            void 0) : (S.logError('The event handler provided is not a function and was not set on event "' + e + '".'),
            void 0)
        }
        ,
        window[preBidNameSpace].offEvent = function(e, t, n) {
            S.logInfo("Invoking window[preBidNameSpace].offEvent", arguments),
            (!n || P[e].call(null, n)) && E.off(e, t, n)
        }
        ,
        window[preBidNameSpace].addCallback = function(e, t) {
            S.logInfo("Invoking window[preBidNameSpace].addCallback", arguments);
            var n = null;
            return e && t && ("undefined" == typeof t ? "undefined" : s(t)) === T ? (n = S.getUniqueIdentifierStr,
            B.addCallback(n, t, e),
            n) : (S.logError("error registering callback. Check method signature"),
            n)
        }
        ,
        window[preBidNameSpace].removeCallback = function() {
            return null
        }
        ,
        window[preBidNameSpace].registerBidAdapter = function(e, t) {
            S.logInfo("Invoking window[preBidNameSpace].registerBidAdapter", arguments);
            try {
                N.registerBidAdapter(e(), t)
            } catch (n) {
                S.logError("Error registering bidder adapter : " + n.message)
            }
        }
        ,
        window[preBidNameSpace].registerAnalyticsAdapter = function(e) {
            S.logInfo("Invoking window[preBidNameSpace].registerAnalyticsAdapter", arguments);
            try {
                N.registerAnalyticsAdapter(e)
            } catch (t) {
                S.logError("Error registering analytics adapter : " + t.message)
            }
        }
        ,
        window[preBidNameSpace].bidsAvailableForAdapter = function(e) {
            S.logInfo("Invoking window[preBidNameSpace].bidsAvailableForAdapter", arguments),
            window[preBidNameSpace]._bidsRequested.find((function(t) {
                return t.bidderCode === e
            }
            )).bids.map((function(t) {
                return c(t, I.createBid(1), {
                    bidderCode: e,
                    adUnitCode: t.placementCode
                })
            }
            )).map((function(e) {
                return window[preBidNameSpace]._bidsReceived.push(e)
            }
            ))
        }
        ,
        window[preBidNameSpace].createBid = function(e) {
            return S.logInfo("Invoking window[preBidNameSpace].createBid", arguments),
            I.createBid(e)
        }
        ,
        window[preBidNameSpace].addBidResponse = function(e, t) {
            S.logInfo("Invoking window[preBidNameSpace].addBidResponse", arguments),
            B.addBidResponse(e, t)
        }
        ,
        window[preBidNameSpace].loadScript = function(e, t, n) {
            S.logInfo("Invoking window[preBidNameSpace].loadScript", arguments),
            h.loadScript(e, t, n)
        }
        ,
        window[preBidNameSpace].enableAnalytics = function(e) {
            e && !S.isEmpty(e) ? (S.logInfo("Invoking window[preBidNameSpace].enableAnalytics for: ", e),
            N.enableAnalytics(e)) : S.logError("window[preBidNameSpace].enableAnalytics should be called with option {}")
        }
        ,
        window[preBidNameSpace].aliasBidder = function(e, t) {
            S.logInfo("Invoking window[preBidNameSpace].aliasBidder", arguments),
            e && t ? N.aliasBidAdapter(e, t) : S.logError("bidderCode and alias must be passed as arguments", "window[preBidNameSpace].aliasBidder")
        }
        ,
        window[preBidNameSpace].setPriceGranularity = function(e) {
            if (S.logInfo("Invoking window[preBidNameSpace].setPriceGranularity", arguments),
            !e)
                return S.logError("Prebid Error: no value passed to `setPriceGranularity()`"),
                void 0;
            if ("string" == typeof e)
                B.setPriceGranularity(e);
            else if ("object" === ("undefined" == typeof e ? "undefined" : s(e))) {
                if (!g.isValidePriceConfig(e))
                    return S.logError("Invalid custom price value passed to `setPriceGranularity()`"),
                    void 0;
                B.setCustomPriceBucket(e),
                B.setPriceGranularity(y.GRANULARITY_OPTIONS.CUSTOM),
                S.logMessage("Using custom price granularity")
            }
        }
        ,
        window[preBidNameSpace].enableSendAllBids = function() {
            window[preBidNameSpace]._sendAllBids = !0
        }
        ,
        window[preBidNameSpace].getAllWinningBids = function() {
            return window[preBidNameSpace]._winningBids
        }
        ,
        window[preBidNameSpace].buildMasterVideoTagFromAdserverTag = function(e, t) {
            S.logInfo("Invoking window[preBidNameSpace].buildMasterVideoTagFromAdserverTag", arguments);
            var n = m.parse(e);
            if (0 === window[preBidNameSpace]._bidsReceived.length)
                return e;
            var r = "";
            if ("dfp" !== t.adserver.toLowerCase())
                return S.logError("Only DFP adserver is supported"),
                void 0;
            var i = A.dfpAdserver(t, n);
            return i.verifyAdserverTag() || S.logError("Invalid adserverTag, required google params are missing in query string"),
            i.appendQueryParams(),
            r = m.format(i.urlComponents)
        }
        ,
        window[preBidNameSpace].setBidderSequence = function(e) {
            e === y.ORDER.RANDOM && N.setBidderSequence(y.ORDER.RANDOM)
        }
        ,
        window[preBidNameSpace].getHighestCpmBids = function(e) {
            return _.getWinningBids(e)
        }
        ,
        window[preBidNameSpace].setS2SConfig = function(e) {
            if (!S.contains(Object.keys(e), "accountId"))
                return S.logError("accountId missing in Server to Server config"),
                void 0;
            if (!S.contains(Object.keys(e), "bidders"))
                return S.logError("bidders missing in Server to Server config"),
                void 0;
            var t = c({
                enabled: !1,
                endpoint: y.S2S.DEFAULT_ENDPOINT,
                timeout: 1e3,
                maxBids: 1,
                adapter: "prebidServer"
            }, e);
            N.setS2SConfig(t)
        }
        ,
        window[preBidNameSpace].cmd.push((function() {
            return v.listenMessagesFromCreative()
        }
        )),
        i(window[preBidNameSpace].cmd),
        i(window[preBidNameSpace].que)
    }
    ), (function(e, t) {
        "use strict";
        function n() {
            return window[preBidNameSpace]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getGlobal = n,
        window[preBidNameSpace] = window[preBidNameSpace] || {},
        window[preBidNameSpace].cmd = window[preBidNameSpace].cmd || [],
        window[preBidNameSpace].que = window[preBidNameSpace].que || []
    }
    ), (function(e, t, n) {
        "use strict";
        function r() {
            return j() + Math.random().toString(16).substr(2)
        }
        function i() {
            return window.console && window.console.log
        }
        function a(e, t, n) {
            return n.indexOf(e) === t
        }
        function o(e, t) {
            return e.concat(t)
        }
        function d(e) {
            return window[preBidNameSpace]._bidsRequested.map((function(t) {
                return t.bids.find((function(t) {
                    return t.bidId === e
                }
                ))
            }
            )).find((function(e) {
                return e
            }
            ))
        }
        function c(e) {
            return Object.keys(e)
        }
        function s(e, t) {
            return e[t]
        }
        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window[preBidNameSpace].adUnits;
            return e.map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                }
                )).reduce(o, [])
            }
            )).reduce(o).filter(a)
        }
        function p() {
            return window.googletag && t.isFn(window.googletag.pubads) && t.isFn(window.googletag.pubads().getSlots) ? !0 : void 0
        }
        function l(e, t) {
            return e.cpm === t.cpm ? e.timeToRespond > t.timeToRespond ? t : e : e.cpm < t.cpm ? t : e
        }
        function f(e) {
            for (var t = e.length; t > 0; ) {
                var n = Math.floor(Math.random() * t);
                t--;
                var r = e[t];
                e[t] = e[n],
                e[n] = r
            }
            return e
        }
        function m(e, t) {
            return e.includes(t && t.placementCode || t && t.adUnitCode)
        }
        function g(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc"in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }
        function v(e) {
            return JSON.parse(JSON.stringify(e))
        }
        function b() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }
        function h() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }
        function w(e, t) {
            return e ? e.replace(/\$\{AUCTION_PRICE\}/g, t) : void 0
        }
        function y(e) {
            return window[preBidNameSpace]._bidsRequested.find((function(t) {
                return t.bidderCode === e
            }
            ))
        }
        function S(e, t) {
            return window[preBidNameSpace]._bidsRequested.find((function(n) {
                return n.bids.filter((function(n) {
                    return n.bidder === e && n.placementCode === t
                }
                )).length > 0
            }
            )) || {
                start: null,
                requestId: null
            }
        }
        function B(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head><body><!--PRE_SCRIPT_TAG_MACRO--><script src="' + e + '"></script><!--POST_SCRIPT_TAG_MACRO--></body></html>' : ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        t.uniques = a,
        t.flatten = o,
        t.getBidRequest = d,
        t.getKeys = c,
        t.getValue = s,
        t.getBidderCodes = u,
        t.isGptPubadsDefined = p,
        t.getHighestCpm = l,
        t.shuffle = f,
        t.adUnitsFilter = m,
        t.isSrcdocSupported = g,
        t.cloneJson = v,
        t.inIframe = b,
        t.isSafariBrowser = h,
        t.replaceAuctionPrice = w,
        t.getBidderRequestAllAdUnits = y,
        t.getBidderRequest = S,
        t.createContentToExecuteExtScriptInFriendlyFrame = B;
        var I = n(3)
          , E = "object"
          , A = "string"
          , _ = "number"
          , T = !1
          , C = "Array"
          , x = "String"
          , O = "Function"
          , R = "Number"
          , U = Object.prototype.toString
          , k = null;
        try {
            k = console.info.bind(window.console)
        } catch (P) {}
        t.replaceTokenInString = function(e, t, n) {
            return this._each(t, (function(t, r) {
                t = void 0 === t ? "" : t;
                var i = n + r.toUpperCase() + n
                  , a = new RegExp(i,"g");
                e = e.replace(a, t)
            }
            )),
            e
        }
        ;
        var j = (function() {
            var e = 0;
            return function() {
                return e++,
                e
            }
        }
        )();
        t.getUniqueIdentifierStr = r,
        t.generateUUID = function z(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, z)
        }
        ,
        t.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }
        ,
        t.tryAppendQueryString = function(e, t, n) {
            return n ? e += t + "=" + encodeURIComponent(n) + "&" : e
        }
        ,
        t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e)
                e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }
        ,
        t.transformAdServerTargetingObj = function(e) {
            return e && Object.getOwnPropertyNames(e).length > 0 ? c(e).map((function(t) {
                return t + "=" + encodeURIComponent(s(e, t))
            }
            )).join("&") : ""
        }
        ,
        t.parseSizesInput = function(e) {
            var t = [];
            if (("undefined" == typeof e ? "undefined" : N(e)) === A) {
                var n = e.split(",")
                  , r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n)
                        G(n, i) && n[i].match(r) && t.push(n[i])
            } else if (("undefined" == typeof e ? "undefined" : N(e)) === E) {
                var a = e.length;
                if (a > 0)
                    if (2 === a && N(e[0]) === _ && N(e[1]) === _)
                        t.push(this.parseGPTSingleSizeArray(e));
                    else
                        for (var o = 0; a > o; o++)
                            t.push(this.parseGPTSingleSizeArray(e[o]))
            }
            return t
        }
        ,
        t.parseGPTSingleSizeArray = function(e) {
            return !this.isArray(e) || 2 !== e.length || isNaN(e[0]) || isNaN(e[1]) ? void 0 : e[0] + "x" + e[1]
        }
        ,
        t.getTopWindowLocation = function() {
            var e = void 0;
            try {
                e = window.top.location
            } catch (t) {
                e = window.location
            }
            return e
        }
        ,
        t.getTopWindowUrl = function() {
            var e = void 0;
            try {
                e = this.getTopWindowLocation().href
            } catch (t) {
                e = ""
            }
            return e
        }
        ,
        t.logWarn = function(e) {
            q() && console.warn && console.warn("WARNING: " + e)
        }
        ,
        t.logInfo = function(e, t) {
            q() && i() && k && (t && 0 !== t.length || (t = ""),
            k("INFO: " + e + ("" === t ? "" : " : params : "), t))
        }
        ,
        t.logMessage = function(e) {
            q() && i() && console.log("MESSAGE: " + e)
        }
        ,
        t.hasConsoleLogger = i;
        var D = (function(e) {
            return e ? window.console.error ? "error" : "log" : ""
        }
        )(i())
          , q = function() {
            return window[preBidNameSpace].logging === !1 && T === !1 && (window[preBidNameSpace].logging = "TRUE" === M(I.DEBUG_MODE).toUpperCase(),
            T = !0),
            !!window[preBidNameSpace].logging
        };
        t.debugTurnedOn = q,
        t.logError = function(e, t, n) {
            var r = t || "ERROR";
            q() && i() && console[D](console, r + ": " + e, n || "")
        }
        ,
        t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = r(),
            e.height = 0,
            e.width = 0,
            e.border = "0px",
            e.hspace = "0",
            e.vspace = "0",
            e.marginWidth = "0",
            e.marginHeight = "0",
            e.style.border = "0",
            e.scrolling = "no",
            e.frameBorder = "0",
            e.src = "about:blank",
            e.style.display = "none",
            e
        }
        ;
        var M = function(e) {
            var t = "[\\?&]" + e + "=([^&#]*)"
              , n = new RegExp(t)
              , r = n.exec(window.location.search);
            return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
        };
        t.hasValidBidRequest = function(e, t, n) {
            function r(e, n) {
                n === t[a] && (i = !0)
            }
            for (var i = !1, a = 0; a < t.length; a++)
                if (i = !1,
                this._each(e, r),
                !i)
                    return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + t, n),
                    !1;
            return !0
        }
        ,
        t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }
        ,
        t.isA = function(e, t) {
            return U.call(e) === "[object " + t + "]"
        }
        ,
        t.isFn = function(e) {
            return this.isA(e, O)
        }
        ,
        t.isStr = function(e) {
            return this.isA(e, x)
        }
        ,
        t.isArray = function(e) {
            return this.isA(e, C)
        }
        ,
        t.isNumber = function(e) {
            return this.isA(e, R)
        }
        ,
        t.isEmpty = function(e) {
            if (!e)
                return !0;
            if (this.isArray(e) || this.isStr(e))
                return !(e.length > 0);
            for (var t in e)
                if (hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        ,
        t.isEmptyStr = function(e) {
            return this.isStr(e) && (!e || 0 === e.length)
        }
        ,
        t._each = function(e, t) {
            if (!this.isEmpty(e)) {
                if (this.isFn(e.forEach))
                    return e.forEach(t, this);
                var n = 0
                  , r = e.length;
                if (r > 0)
                    for (; r > n; n++)
                        t(e[n], n, e);
                else
                    for (n in e)
                        hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        ,
        t.contains = function(e, t) {
            if (this.isEmpty(e))
                return !1;
            if (this.isFn(e.indexOf))
                return -1 !== e.indexOf(t);
            for (var n = e.length; n--; )
                if (e[n] === t)
                    return !0;
            return !1
        }
        ,
        t.indexOf = (function() {
            return Array.prototype.indexOf ? Array.prototype.indexOf : void 0
        }
        )(),
        t._map = function(e, t) {
            if (this.isEmpty(e))
                return [];
            if (this.isFn(e.map))
                return e.map(t);
            var n = [];
            return this._each(e, (function(r, i) {
                n.push(t(r, i, e))
            }
            )),
            n
        }
        ;
        var G = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : "undefined" != typeof e[t] && e.constructor.prototype[t] !== e[t]
        };
        t.insertElement = function(e, t, n) {
            t = t || document;
            var r = void 0;
            r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                r = r.length ? r : t.getElementsByTagName("body"),
                r.length && (r = r[0],
                r.insertBefore(e, r.firstChild))
            } catch (i) {}
        }
        ,
        t.insertPixel = function(e) {
            var t = new Image;
            t.id = this.getUniqueIdentifierStr(),
            t.src = e,
            t.height = 0,
            t.width = 0,
            t.style.display = "none",
            t.onload = function() {
                try {
                    this.parentNode.removeChild(this)
                } catch (e) {}
            }
            ,
            this.insertElement(t)
        }
        ,
        t.insertCookieSyncIframe = function(e, t) {
            var n = this.createTrackPixelIframeHtml(e, t)
              , r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            this.insertElement(i)
        }
        ,
        t.createTrackPixelHtml = function(e) {
            if (!e)
                return "";
            var t = encodeURI(e)
              , n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }
        ,
        t.createTrackPixelIframeHtml = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0;
            return e ? (t && (e = encodeURI(e)),
            '<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" width="0" hspace="0" vspace="0" height="0" style="height:0p;width:0p;display:none;" scrolling="no" src="' + e + '"></iframe>') : ""
        }
        ,
        t.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (n) {
                    this.logError("Cannot get iframe document", n)
                }
                return t
            }
        }
        ,
        t.getValueString = function(e, t, n) {
            return void 0 === t || null === t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : (this.logWarn("Unsuported type for param: " + e + " required type: String"),
            void 0)
        }
    }
    ), (function(e) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            REPO_AND_VERSION: "prebid_prebid_0.26.0-pre",
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            objectType_function: "function",
            objectType_undefined: "undefined",
            objectType_object: "object",
            objectType_string: "string",
            objectType_number: "number",
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                BID_WON: "bidWon",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            ORDER: {
                RANDOM: "random"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal"],
            S2S: {
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/auction"
            }
        }
    }
    ), (function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hasNonVideoBidder = t.videoAdUnit = void 0;
        {
            var r = n(5)
              , i = (t.videoAdUnit = function(e) {
                return "video" === e.mediaType
            }
            ,
            function(e) {
                return !r.videoAdapters.includes(e.bidder)
            }
            );
            t.hasNonVideoBidder = function(e) {
                return e.bids.filter(i).length
            }
        }
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i(e) {
            var t = e.bidderCode
              , n = e.requestId
              , r = e.bidderRequestId
              , i = e.adUnits;
            return i.map((function(e) {
                return e.bids.filter((function(e) {
                    return e.bidder === t
                }
                )).map((function(t) {
                    var i = e.sizes;
                    if (e.sizeMapping) {
                        var a = s.mapSizes(e);
                        if ("" === a)
                            return "";
                        i = a
                    }
                    return e.nativeParams && (t = d({}, t, {
                        nativeParams: p["default"](e.nativeParams)
                    })),
                    d({}, t, {
                        placementCode: e.code,
                        mediaType: e.mediaType,
                        transactionId: e.transactionId,
                        sizes: i,
                        bidId: t.bid_id || f.getUniqueIdentifierStr(),
                        bidderRequestId: r,
                        requestId: n
                    })
                }
                ))
            }
            )).reduce(c.flatten, []).filter((function(e) {
                return "" !== e
            }
            ))
        }
        function a(e) {
            var t = []
              , n = f.parseSizesInput(e.sizes);
            return n.forEach((function(e) {
                var n = e.split("x")
                  , r = {
                    w: parseInt(n[0]),
                    h: parseInt(n[1])
                };
                t.push(r)
            }
            )),
            t
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , c = n(2)
          , s = n(6)
          , u = n(7)
          , p = r(u)
          , l = n(8)
          , f = n(2)
          , m = n(3)
          , g = n(9)
          , v = {};
        t.bidderRegistry = v;
        var b = {}
          , h = {}
          , w = null;
        t.callBids = function(e) {
            var t = e.adUnits
              , n = e.cbTimeout
              , r = f.generateUUID()
              , o = Date.now()
              , d = {
                timestamp: o,
                requestId: r
            };
            g.emit(m.EVENTS.AUCTION_INIT, d);
            var u = c.getBidderCodes(t);
            if (w === m.ORDER.RANDOM && (u = c.shuffle(u)),
            b.enabled) {
                var p = b.bidders;
                u = u.filter((function(e) {
                    return !p.includes(e)
                }
                ));
                var l = f.cloneJson(t);
                l.forEach((function(e) {
                    e.sizeMapping && (e.sizes = s.mapSizes(e),
                    delete e.sizeMapping),
                    e.sizes = a(e),
                    e.bids = e.bids.filter((function(e) {
                        return p.includes(e.bidder)
                    }
                    )).map((function(e) {
                        return e.bid_id = f.getUniqueIdentifierStr(),
                        e
                    }
                    ))
                }
                ));
                var h = f.generateUUID();
                p.forEach((function(e) {
                    var t = f.getUniqueIdentifierStr()
                      , n = {
                        bidderCode: e,
                        requestId: r,
                        bidderRequestId: t,
                        tid: h,
                        bids: i({
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: t,
                            adUnits: l
                        }),
                        start: (new Date).getTime(),
                        auctionStart: o,
                        timeout: b.timeout
                    };
                    window[preBidNameSpace]._bidsRequested.push(n)
                }
                ));
                var y = {
                    tid: h,
                    ad_units: l
                }
                  , S = v[b.adapter];
                f.logMessage("CALLING S2S HEADER BIDDERS ==== " + p.join(",")),
                S.setConfig(b),
                S.callBids(y)
            }
            u.forEach((function(e) {
                var a = v[e];
                if (a) {
                    var d = f.getUniqueIdentifierStr()
                      , c = {
                        bidderCode: e,
                        requestId: r,
                        bidderRequestId: d,
                        bids: i({
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: d,
                            adUnits: t
                        }),
                        start: (new Date).getTime(),
                        auctionStart: o,
                        timeout: n
                    };
                    c.bids && 0 !== c.bids.length && (f.logMessage("CALLING BIDDER ======= " + e),
                    window[preBidNameSpace]._bidsRequested.push(c),
                    g.emit(m.EVENTS.BID_REQUESTED, c),
                    a.callBids(c))
                } else
                    f.logError("Adapter trying to be called which does not exist: " + e + " adaptermanager.callBids")
            }
            ))
        }
        ,
        t.registerBidAdapter = function(e, t) {
            e && t ? o(e.callBids) === m.objectType_function ? v[t] = e : f.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : f.logError("bidAdaptor or bidderCode not specified")
        }
        ,
        t.aliasBidAdapter = function(e, t) {
            var n = v[t];
            if (("undefined" == typeof n ? "undefined" : o(n)) === m.objectType_undefined) {
                var r = v[e];
                if (("undefined" == typeof r ? "undefined" : o(r)) === m.objectType_undefined)
                    f.logError('bidderCode "' + e + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                else
                    try {
                        var i = null;
                        r instanceof l.BaseAdapter ? f.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter") : (i = r.createNew(),
                        i.setBidderCode(t),
                        this.registerBidAdapter(i, t))
                    } catch (a) {
                        f.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                    }
            } else
                f.logMessage('alias name "' + t + '" has been already specified.')
        }
        ,
        t.registerAnalyticsAdapter = function(e) {
            var t = e.adapter
              , n = e.code;
            t && n ? o(t.enableAnalytics) === m.objectType_function ? (t.code = n,
            h[n] = t) : f.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : f.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }
        ,
        t.enableAnalytics = function(e) {
            f.isArray(e) || (e = [e]),
            f._each(e, (function(e) {
                var t = h[e.provider];
                t ? t.enableAnalytics(e) : f.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }
            ))
        }
        ,
        t.setBidderSequence = function(e) {
            w = e
        }
        ,
        t.setS2SConfig = function(e) {
            b = e
        }
        ;
        var y = n(10);
        t.registerBidAdapter(new y, "aol");
        var S = n(16);
        t.registerBidAdapter(new S, "appnexus");
        var B = n(19);
        t.registerBidAdapter(new B, "audienceNetwork");
        var N = n(20);
        t.registerBidAdapter(new N, "openx");
        var I = n(21);
        t.registerBidAdapter(new I, "pubmatic");
        var E = n(22);
        t.registerBidAdapter(new E, "rubicon"),
        t.videoAdapters = []
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e,
            t
        }
        function i(e) {
            if (!a(e.sizeMapping))
                return e.sizes;
            var t = o();
            if (!t) {
                var n = e.sizeMapping.reduce((function(e, t) {
                    return e.minWidth < t.minWidth ? t : e
                }
                ));
                return n.sizes && n.sizes.length ? n.sizes : e.sizes
            }
            var r = ""
              , i = e.sizeMapping.find((function(e) {
                return t > e.minWidth
            }
            ));
            return i && i.sizes && i.sizes.length ? (r = i.sizes,
            s.logMessage("AdUnit : " + e.code + " resized based on device width to : " + r)) : s.logMessage("AdUnit : " + e.code + " not mapped to any sizes for device width. This request will be suppressed."),
            r
        }
        function a(e) {
            return s.isArray(e) && e.length > 0 ? !0 : (s.logInfo("No size mapping defined"),
            !1)
        }
        function o(e) {
            var t = e || u || window
              , n = t.document;
            return t.innerWidth ? t.innerWidth : n.body.clientWidth ? n.body.clientWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : 0
        }
        function d(e) {
            u = e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setWindow = t.getScreenWidth = t.mapSizes = void 0;
        var c = n(2)
          , s = r(c)
          , u = void 0;
        t.mapSizes = i,
        t.getScreenWidth = o,
        t.setWindow = d
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.type && i(e.type) ? p[e.type] : e
        }
        function i(e) {
            return e && Object.keys(p).includes(e) ? !0 : (d.logError(e + " nativeParam is not supported"),
            !1)
        }
        function a(e) {
            var t = d.getBidRequest(e.adId);
            if (!t)
                return !1;
            var n = t.nativeParams;
            if (!n)
                return !0;
            var r = Object.keys(n).filter((function(e) {
                return n[e].required
            }
            ))
              , i = Object.keys(e.native);
            return r.every((function(e) {
                return i.includes(e)
            }
            ))
        }
        function o(e) {
            var t = e.native && e.native.impressionTrackers;
            (t || []).forEach((function(e) {
                d.insertPixel(e)
            }
            ))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = void 0,
        t["default"] = r,
        t.nativeBidIsValid = a,
        t.fireNativeImpressions = o;
        {
            var d = n(2)
              , c = []
              , s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl"
            }
              , u = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map((function(e) {
                return s[e]
            }
            )),
            {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            })
              , p = {
                image: u
            }
              , l = (t.nativeAdUnit = function(e) {
                return "native" === e.mediaType
            }
            ,
            t.nativeBidder = function(e) {
                return c.includes(e.bidder)
            }
            );
            t.hasNonNativeBidder = function(e) {
                return e.bids.filter((function(e) {
                    return !l(e)
                }
                )).length
            }
        }
    }
    ), (function(e, t) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        {
            var r = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }
            )();
            t.BaseAdapter = (function() {
                function e(t) {
                    n(this, e),
                    this.code = t
                }
                return r(e, [{
                    key: "getCode",
                    value: function() {
                        return this.code
                    }
                }, {
                    key: "setCode",
                    value: function(e) {
                        this.code = e
                    }
                }, {
                    key: "callBids",
                    value: function() {
                        throw "adapter implementation must override callBids method"
                    }
                }]),
                e
            }
            )()
        }
    }
    ), (function(e, t, n) {
        "use strict";
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , i = n(2)
          , a = n(3)
          , o = Array.prototype.slice
          , d = Array.prototype.push
          , c = i._map(a.EVENTS, (function(e) {
            return e
        }
        ))
          , s = a.EVENT_ID_PATHS
          , u = [];
        e.exports = (function() {
            function e(e, t) {
                i.logMessage("Emitting event for: " + e);
                var r = t[0] || {}
                  , a = s[e]
                  , o = r[a]
                  , c = n[e] || {
                    que: []
                }
                  , p = i._map(c, (function(e, t) {
                    return t
                }
                ))
                  , l = [];
                u.push({
                    eventType: e,
                    args: r,
                    id: o
                }),
                o && i.contains(p, o) && d.apply(l, c[o].que),
                d.apply(l, c.que),
                i._each(l, (function(e) {
                    if (e)
                        try {
                            e.apply(null, t)
                        } catch (n) {
                            i.logError("Error executing handler:", "events.js", n)
                        }
                }
                ))
            }
            function t(e) {
                return i.contains(c, e)
            }
            var n = {}
              , a = {};
            return a.on = function(e, r, a) {
                if (t(e)) {
                    var o = n[e] || {
                        que: []
                    };
                    a ? (o[a] = o[a] || {
                        que: []
                    },
                    o[a].que.push(r)) : o.que.push(r),
                    n[e] = o
                } else
                    i.logError("Wrong event name : " + e + " Valid event names :" + c)
            }
            ,
            a.emit = function(t) {
                var n = o.call(arguments, 1);
                e(t, n)
            }
            ,
            a.off = function(e, t, r) {
                var a = n[e];
                i.isEmpty(a) || i.isEmpty(a.que) && i.isEmpty(a[r]) || r && (i.isEmpty(a[r]) || i.isEmpty(a[r].que)) || (r ? i._each(a[r].que, (function(e) {
                    var n = a[r].que;
                    e === t && n.splice(i.indexOf.call(n, e), 1)
                }
                )) : i._each(a.que, (function(e) {
                    var n = a.que;
                    e === t && n.splice(i.indexOf.call(n, e), 1)
                }
                )),
                n[e] = a)
            }
            ,
            a.get = function() {
                return n
            }
            ,
            a.getEvents = function() {
                var e = [];
                return i._each(u, (function(t) {
                    var n = r({}, t);
                    e.push(n)
                }
                )),
                e
            }
            ,
            a
        }
        )()
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        var i = r(["", "://", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", "", ";misc=", ""], ["", "://", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", "", ";misc=", ""])
          , a = r(["", "://", "/bidRequest?"], ["", "://", "/bidRequest?"])
          , o = r(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""])
          , d = n(2)
          , c = n(11).ajax
          , s = n(13)
          , u = n(14)
          , p = n(3);
        window[preBidNameSpace].aolGlobals = {
            pixelsDropped: !1
        };
        var l = function() {
            function e(e) {
                if (!window[preBidNameSpace].aolGlobals.pixelsDropped) {
                    var r = t(e);
                    n(r),
                    window[preBidNameSpace].aolGlobals.pixelsDropped = !0
                }
            }
            function t(e) {
                var t = /(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi
                  , n = /\w*(?=\s)/
                  , r = /src=("|')(.*?)\1/
                  , i = [];
                if (e) {
                    var a = e.match(t);
                    a && a.forEach((function(e) {
                        var t = e.match(n)
                          , a = e.match(r);
                        t && a && i.push({
                            tagName: t[0].toUpperCase(),
                            src: a[2]
                        })
                    }
                    ))
                }
                return i
            }
            function n(e) {
                e.forEach((function(e) {
                    switch (e.tagName) {
                    case _.img:
                        return r(e);
                    case _.iframe:
                        return l(e)
                    }
                }
                ))
            }
            function r(e) {
                var t = new Image;
                t.src = e.src
            }
            function l(e) {
                var t = document.createElement("iframe");
                t.width = 1,
                t.height = 1,
                t.style.display = "none",
                t.src = e.src,
                "interactive" === document.readyState || "complete" === document.readyState ? document.body.appendChild(t) : T((function() {
                    document.body.appendChild(t)
                }
                ))
            }
            function f(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++)
                    n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = Array(t), i = 0; t > i; i++)
                        r[i] = arguments[i];
                    var a = r[r.length - 1] || {}
                      , o = [e[0]];
                    return n.forEach((function(t, n) {
                        var i = Number.isInteger(t) ? r[t] : a[t];
                        o.push(i, e[n + 1])
                    }
                    )),
                    o.join("")
                }
            }
            function m(e) {
                var t = e.params
                  , n = t.server
                  , r = t.region || "us"
                  , i = void 0;
                return E.hasOwnProperty(r) || (d.logWarn("Unknown region '" + r + "' for AOL bidder."),
                r = "us"),
                i = n ? n : E[r],
                t.region = r,
                S({
                    protocol: "https:" === document.location.protocol ? "https" : "http",
                    host: i,
                    network: t.network,
                    placement: parseInt(t.placement),
                    pageid: t.pageId || 0,
                    sizeid: t.sizeId || 0,
                    alias: t.alias || d.getUniqueIdentifierStr(),
                    bidfloor: "undefined" != typeof t.bidFloor ? ";bidfloor=" + t.bidFloor.toString() : "",
                    misc: (new Date).getTime()
                })
            }
            function g(e) {
                var t = e.params
                  , n = t.dcn
                  , r = t.pos
                  , i = B({
                    protocol: "https:" === document.location.protocol ? "https" : "http",
                    host: e.params.host || A
                });
                if (n && r) {
                    var a = "";
                    d._each(e.params.ext, (function(e, t) {
                        a += "&" + t + "=" + encodeURIComponent(e)
                    }
                    )),
                    i += N({
                        dcn: n,
                        pos: r,
                        ext: a
                    })
                }
                return i
            }
            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = s.createBid(2, e);
                n.bidderCode = I,
                n.reason = t.nbr,
                n.raw = t,
                u.addBidResponse(e.placementCode, n)
            }
            function b(t, n) {
                var r = void 0;
                try {
                    r = n.seatbid[0].bid[0]
                } catch (i) {
                    return v(t, n),
                    void 0
                }
                var a = void 0;
                if (r.ext && r.ext.encp)
                    a = r.ext.encp;
                else if (a = r.price,
                null === a || isNaN(a))
                    return d.logError("Invalid price in bid response", I, t),
                    v(t, n),
                    void 0;
                var o = r.adm;
                if (n.ext && n.ext.pixels)
                    if (t.params.userSyncOn === p.EVENTS.BID_RESPONSE)
                        e(n.ext.pixels);
                    else {
                        var c = n.ext.pixels.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, "");
                        o += "<script>if(!parent." + preBidNameSpace + ".aolGlobals.pixelsDropped){parent." + preBidNameSpace + ".aolGlobals.pixelsDropped=true;" + c + "}</script>"
                    }
                var l = s.createBid(1, t);
                l.bidderCode = I,
                l.ad = o,
                l.cpm = a,
                l.width = r.w,
                l.height = r.h,
                l.creativeId = r.crid,
                l.pubapiId = n.id,
                l.currencyCode = n.cur,
                r.dealid && (l.dealId = r.dealid),
                u.addBidResponse(t.placementCode, l)
            }
            function h(e) {
                if (e.params.id && e.params.imp && e.params.imp[0]) {
                    var t = e.params.imp[0];
                    return t.id && t.tagid && (t.banner && t.banner.w && t.banner.h || t.video && t.video.mimes && t.video.minduration && t.video.maxduration)
                }
            }
            function w(e) {
                d._each(e.bids, (function(e) {
                    var t = void 0
                      , n = null
                      , r = {
                        withCredentials: !0
                    }
                      , i = h(e);
                    e.params.placement && e.params.network ? t = m(e) : (e.params.dcn && e.params.pos || i) && (t = g(e),
                    i && (n = e.params,
                    r.customHeaders = {
                        "x-openrtb-version": "2.2"
                    },
                    r.method = "POST",
                    r.contentType = "application/json")),
                    t && c(t, (function(t) {
                        if (y && window[preBidNameSpace].bidderSettings && window[preBidNameSpace].bidderSettings.aol && "function" == typeof window[preBidNameSpace].bidderSettings.aol.bidCpmAdjustment && d.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net u2013 please contact your accounts team to enable."),
                        y = !1,
                        !t && t.length <= 0)
                            return d.logError("Empty bid response", I, e),
                            v(e, t),
                            void 0;
                        try {
                            t = JSON.parse(t)
                        } catch (n) {
                            return d.logError("Invalid JSON in bid response", I, e),
                            v(e, t),
                            void 0
                        }
                        b(e, t)
                    }
                    ), n, r)
                }
                ))
            }
            var y = !0
              , S = f(i, "protocol", "host", "network", "placement", "pageid", "sizeid", "alias", "bidfloor", "misc")
              , B = f(a, "protocol", "host")
              , N = f(o, "dcn", "pos", "ext")
              , I = "aol"
              , E = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            }
              , A = "hb.nexage.com"
              , _ = {
                iframe: "IFRAME",
                img: "IMG"
            }
              , T = (function() {
                var e = !1;
                return function(t) {
                    var n = function() {
                        return e ? void 0 : (e = !0,
                        t())
                    };
                    return "complete" === document.readyState ? n() : (document.addEventListener("DOMContentLoaded", n, !1),
                    window.addEventListener("load", n, !1),
                    void 0)
                }
            }
            )();
            return {
                callBids: w
            }
        };
        e.exports = l
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            u = e
        }
        function i(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            try {
                var i = void 0
                  , p = !1
                  , l = r.method || (n ? "POST" : "GET")
                  , f = "object" === ("undefined" == typeof t ? "undefined" : o(t)) ? t : {
                    success: function() {
                        c.logMessage("xhr success")
                    },
                    error: function(e) {
                        c.logError("xhr error", null, e)
                    }
                };
                if ("function" == typeof t && (f.success = t),
                window.XMLHttpRequest ? (i = new window.XMLHttpRequest,
                void 0 === i.responseType && (p = !0)) : p = !0,
                i.timeout = u,
                p ? (i = new window.XDomainRequest,
                i.onload = function() {
                    f.success(i.responseText, i)
                }
                ,
                i.onerror = function() {
                    f.error("error", i)
                }
                ,
                i.ontimeout = function() {
                    f.error("timeout", i)
                }
                ,
                i.onprogress = function() {
                    c.logMessage("xhr onprogress")
                }
                ) : i.onreadystatechange = function() {
                    if (i.readyState === s) {
                        var e = i.status;
                        e >= 200 && 300 > e || 304 === e ? f.success(i.responseText, i) : f.error(i.statusText, i)
                    }
                }
                ,
                "GET" === l && n) {
                    var m = d.parse(e);
                    a(m.search, n),
                    e = d.format(m)
                }
                i.open(l, e),
                p || (r.withCredentials && (i.withCredentials = !0),
                c._each(r.customHeaders, (function(e, t) {
                    i.setRequestHeader(t, e)
                }
                )),
                r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                i.setRequestHeader("Content-Type", r.contentType || "text/plain")),
                i.send("POST" === l && n)
            } catch (g) {
                c.logError("xhr construction", g)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        t.setAjaxTimeout = r,
        t.ajax = i;
        var d = n(12)
          , c = n(2)
          , s = 4
          , u = 3e3
    }
    ), (function(e, t) {
        "use strict";
        function n(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var n = t.split("=")
                  , r = o(n, 2)
                  , i = r[0]
                  , a = r[1];
                return /\[\]$/.test(i) ? (i = i.replace("[]", ""),
                e[i] = e[i] || [],
                e[i].push(a)) : e[i] = a || "",
                e
            }
            ), {}) : {}
        }
        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                }
                )).join("&") : t + "=" + e[t]
            }
            )).join("&")
        }
        function i(e) {
            var t = document.createElement("a");
            return t.href = decodeURIComponent(e),
            {
                protocol: (t.protocol || "").replace(/:$/, ""),
                hostname: t.hostname,
                port: +t.port,
                pathname: t.pathname.replace(/^(?!\/)/, "/"),
                search: n(t.search || ""),
                hash: (t.hash || "").replace(/^#/, ""),
                host: t.host
            }
        }
        function a(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var o, d = e[Symbol.iterator](); !(r = (o = d.next()).done) && (n.push(o.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (c) {
                    i = !0,
                    a = c
                } finally {
                    try {
                        !r && d["return"] && d["return"]()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }
        )();
        t.parseQS = n,
        t.formatQS = r,
        t.parse = i,
        t.format = a
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n() {
                switch (a) {
                case 0:
                    return "Pending";
                case 1:
                    return "Bid available";
                case 2:
                    return "Bid returned empty or error response";
                case 3:
                    return "Bid timed out"
                }
            }
            var r = t && t.bidId || i.getUniqueIdentifierStr()
              , a = e || 0;
            this.bidderCode = t && t.bidder || "",
            this.width = 0,
            this.height = 0,
            this.statusMessage = n(),
            this.adId = r,
            this.getStatusCode = function() {
                return a
            }
            ,
            this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
        var i = n(2);
        t.createBid = function() {
            return new (Function.prototype.bind.apply(r, [null].concat(Array.prototype.slice.call(arguments))))
        }
    }
    ), (function(e, t, n) {
        "use strict";
        function r() {
            return (new Date).getTime()
        }
        function i(e) {
            return e.bidderCode
        }
        function a(e) {
            return e.bidder
        }
        function o(e) {
            var t = this
              , n = window[preBidNameSpace]._bidsRequested.map((function(n) {
                return n.bids.filter(w.adUnitsFilter.bind(t, window[preBidNameSpace]._adUnitCodes)).filter((function(t) {
                    return t.placementCode === e
                }
                ))
            }
            )).reduce(w.flatten, []).map((function(e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            }
            )).reduce(d, 0)
              , r = window[preBidNameSpace]._bidsReceived.filter((function(t) {
                return t.adUnitCode === e
            }
            )).length;
            return n === r
        }
        function d(e, t) {
            return e + t
        }
        function c() {
            var e = window[preBidNameSpace]._bidsRequested.map((function(e) {
                return e.bids
            }
            )).reduce(w.flatten, []).filter(w.adUnitsFilter.bind(this, window[preBidNameSpace]._adUnitCodes)).map((function(e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            }
            )).reduce((function(e, t) {
                return e + t
            }
            ), 0)
              , t = window[preBidNameSpace]._bidsReceived.filter(w.adUnitsFilter.bind(this, window[preBidNameSpace]._adUnitCodes)).length;
            return e === t
        }
        function s(e, t) {
            var n = {}
              , r = window[preBidNameSpace].bidderSettings;
            if (t && r) {
                var i = g();
                u(n, i, t)
            }
            return e && t && r && r[e] && r[e][B.JSON_MAPPING.ADSERVER_TARGETING] ? (u(n, r[e], t),
            t.alwaysUseBid = r[e].alwaysUseBid,
            t.sendStandardTargeting = r[e].sendStandardTargeting) : x[e] && (u(n, x[e], t),
            t.alwaysUseBid = x[e].alwaysUseBid,
            t.sendStandardTargeting = x[e].sendStandardTargeting),
            t.native && Object.keys(t.native).forEach((function(e) {
                var r = S.NATIVE_KEYS[e]
                  , i = t.native[e];
                r && (n[r] = i)
            }
            )),
            n
        }
        function u(e, t, n) {
            var r = t[B.JSON_MAPPING.ADSERVER_TARGETING];
            return n.size = n.getSize(),
            I._each(r, (function(r) {
                var i = r.key
                  , a = r.val;
                if (e[i] && I.logWarn("The key: " + i + " is getting ovewritten"),
                I.isFn(a))
                    try {
                        a = a(n)
                    } catch (o) {
                        I.logError("bidmanager", "ERROR", o)
                    }
                ("undefined" == typeof t.suppressEmptyKeys || t.suppressEmptyKeys !== !0) && "hb_deal" !== i || !I.isEmptyStr(a) && null !== a && void 0 !== a ? e[i] = a : I.logInfo("suppressing empty key '" + i + "' from adserver targeting")
            }
            )),
            e
        }
        function p(e) {
            var t = [e];
            l(_.byAdUnit, t)
        }
        function l(e, t) {
            var n = this;
            I.isArray(e) && e.forEach((function(e) {
                var r = t || window[preBidNameSpace]._adUnitCodes
                  , i = [window[preBidNameSpace]._bidsReceived.filter(w.adUnitsFilter.bind(n, r)).reduce(f, {})];
                e.apply(window[preBidNameSpace], i)
            }
            ))
        }
        function f(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }),
            e[t.adUnitCode].bids.push(t),
            e
        }
        function m(e) {
            var t = e.bidderCode
              , n = e.cpm;
            if (t && window[preBidNameSpace].bidderSettings && window[preBidNameSpace].bidderSettings[t] && b(window[preBidNameSpace].bidderSettings[t].bidCpmAdjustment) === A)
                try {
                    n = window[preBidNameSpace].bidderSettings[t].bidCpmAdjustment.call(null, e.cpm, h({}, e))
                } catch (r) {
                    I.logError("Error during bid adjustment", "bidmanager.js", r)
                }
            n >= 0 && (e.cpm = n)
        }
        function g() {
            var e = window[preBidNameSpace].bidderSettings;
            return e[B.JSON_MAPPING.BD_SETTING_STANDARD] || (e[B.JSON_MAPPING.BD_SETTING_STANDARD] = {
                adserverTargeting: [{
                    key: "hb_bidder",
                    val: function(e) {
                        return e.bidderCode
                    }
                }, {
                    key: "hb_adid",
                    val: function(e) {
                        return e.adId
                    }
                }, {
                    key: "hb_pb",
                    val: function(e) {
                        return T === B.GRANULARITY_OPTIONS.AUTO ? e.pbAg : T === B.GRANULARITY_OPTIONS.DENSE ? e.pbDg : T === B.GRANULARITY_OPTIONS.LOW ? e.pbLg : T === B.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : T === B.GRANULARITY_OPTIONS.HIGH ? e.pbHg : T === B.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                    }
                }, {
                    key: "hb_size",
                    val: function(e) {
                        return e.size
                    }
                }, {
                    key: "hb_deal",
                    val: function(e) {
                        return e.dealId
                    }
                }]
            }),
            e[B.JSON_MAPPING.BD_SETTING_STANDARD]
        }
        function v() {
            return g()[B.JSON_MAPPING.ADSERVER_TARGETING]
        }
        var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , w = n(2)
          , y = n(15)
          , S = n(7)
          , B = n(3)
          , N = B.EVENTS.AUCTION_END
          , I = n(2)
          , E = n(9)
          , A = "function"
          , _ = {
            byAdUnit: [],
            all: [],
            oneTime: null,
            timer: !1
        }
          , T = B.GRANULARITY_OPTIONS.MEDIUM
          , C = void 0
          , x = {};
        t.setCustomPriceBucket = function(e) {
            C = e
        }
        ,
        t.getTimedOutBidders = function() {
            return window[preBidNameSpace]._bidsRequested.map(i).filter(w.uniques).filter((function(e) {
                return window[preBidNameSpace]._bidsReceived.map(a).filter(w.uniques).indexOf(e) < 0
            }
            ))
        }
        ,
        t.bidsBackAll = function() {
            return c()
        }
        ,
        t.addBidResponse = function(e, n) {
            if (!e)
                return I.logWarn("No adUnitCode supplied to addBidResponse, response discarded"),
                void 0;
            if (n) {
                if ("native" === n.mediaType && !S.nativeBidIsValid(n))
                    return I.logError("Native bid response does not contain all required assets. This bid won't be addeed to the auction"),
                    void 0;
                var i = w.getBidderRequest(n.bidderCode, e)
                  , a = i.requestId
                  , d = i.start;
                if (h(n, {
                    requestId: a,
                    responseTimestamp: r(),
                    requestTimestamp: d,
                    cpm: parseFloat(n.cpm) || 0,
                    bidder: n.bidderCode,
                    adUnitCode: e
                }),
                n.timeToRespond = n.responseTimestamp - n.requestTimestamp,
                n.timeToRespond > window[preBidNameSpace].cbTimeout + window[preBidNameSpace].timeoutBuffer) {
                    var u = !0;
                    t.executeCallback(u)
                }
                E.emit(B.EVENTS.BID_ADJUSTMENT, n),
                E.emit(B.EVENTS.BID_RESPONSE, n);
                var l = y.getPriceBucketString(n.cpm, C);
                n.pbLg = l.low,
                n.pbMg = l.med,
                n.pbHg = l.high,
                n.pbAg = l.auto,
                n.pbDg = l.dense,
                n.pbCg = l.custom;
                var f = {};
                n.bidderCode && (n.cpm > 0 || n.dealId) && (f = s(n.bidderCode, n)),
                n.adserverTargeting = f,
                window[preBidNameSpace]._bidsReceived.push(n)
            }
            n && n.adUnitCode && o(n.adUnitCode) && p(n.adUnitCode),
            c() && t.executeCallback()
        }
        ,
        t.getKeyValueTargetingPairs = function() {
            return s.apply(void 0, arguments)
        }
        ,
        t.setPriceGranularity = function(e) {
            var t = B.GRANULARITY_OPTIONS;
            Object.keys(t).filter((function(n) {
                return e === t[n]
            }
            )) ? T = e : (I.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."),
            T = B.GRANULARITY_OPTIONS.MEDIUM)
        }
        ,
        t.registerDefaultBidderSetting = function(e, t) {
            x[e] = t
        }
        ,
        t.executeCallback = function(e) {
            if (!e && _.timer && clearTimeout(_.timer),
            _.all.called !== !0 && (l(_.all),
            _.all.called = !0,
            e)) {
                var n = t.getTimedOutBidders();
                n.length && E.emit(B.EVENTS.BID_TIMEOUT, n)
            }
            if (_.oneTime) {
                E.emit(N);
                try {
                    l([_.oneTime])
                } catch (r) {
                    I.logError("Error executing bidsBackHandler", null, r)
                } finally {
                    _.oneTime = null,
                    _.timer = !1,
                    window[preBidNameSpace].clearAuction()
                }
            }
        }
        ,
        t.externalCallbackReset = function() {
            _.all.called = !1
        }
        ,
        t.addOneTimeCallback = function(e, t) {
            _.oneTime = e,
            _.timer = t
        }
        ,
        t.addCallback = function(e, t, n) {
            t.id = e,
            B.CB.TYPE.ALL_BIDS_BACK === n ? _.all.push(t) : B.CB.TYPE.AD_UNIT_BIDS_BACK === n && _.byAdUnit.push(t)
        }
        ,
        E.on(B.EVENTS.BID_ADJUSTMENT, (function(e) {
            m(e)
        }
        )),
        t.adjustBids = function() {
            return m.apply(void 0, arguments)
        }
        ,
        t.getStandardBidderAdServerTargeting = v
    }
    ), (function(e, t) {
        "use strict";
        function n(e, t) {
            var n = 0;
            return n = parseFloat(e),
            isNaN(n) && (n = ""),
            {
                low: "" === n ? "" : r(e, d),
                med: "" === n ? "" : r(e, c),
                high: "" === n ? "" : r(e, s),
                auto: "" === n ? "" : r(e, p),
                dense: "" === n ? "" : r(e, u),
                custom: "" === n ? "" : r(e, t)
            }
        }
        function r(e, t) {
            var n = "";
            if (!i(t))
                return n;
            var r = t.buckets.reduce((function(e, t) {
                return e.max > t.max ? e : t
            }
            ), {
                max: 0
            })
              , d = t.buckets.find((function(t) {
                if (e > r.max) {
                    var i = t.precision || o;
                    n = t.max.toFixed(i)
                } else if (e <= t.max && e >= t.min)
                    return t
            }
            ));
            return d && (n = a(e, d.increment, d.precision)),
            n
        }
        function i(e) {
            if (!e || !e.buckets || !Array.isArray(e.buckets))
                return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                "undefined" != typeof e.min && e.max && e.increment || (t = !1)
            }
            )),
            t
        }
        function a(e, t, n) {
            n || (n = o);
            var r = 1 / t;
            return (Math.floor(e * r) / r).toFixed(n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = 2
          , d = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .5
            }]
        }
          , c = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .1
            }]
        }
          , s = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .01
            }]
        }
          , u = {
            buckets: [{
                min: 0,
                max: 3,
                increment: .01
            }, {
                min: 3,
                max: 8,
                increment: .05
            }, {
                min: 8,
                max: 20,
                increment: .5
            }]
        }
          , p = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .05
            }, {
                min: 5,
                max: 10,
                increment: .1
            }, {
                min: 10,
                max: 20,
                increment: .5
            }]
        };
        t.getPriceBucketString = n,
        t.isValidePriceConfig = i
    }
    ), (function(e, t, n) {
        "use strict";
        var r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , a = n(2), o = n(3), d = n(2), c = n(17), s = n(14), u = n(13), p = n(18);
        r = function l() {
            function e(e, t) {
                var n = d.getBidIdParameter("placementId", e.params)
                  , r = d.getBidIdParameter("memberId", e.params)
                  , a = d.getBidIdParameter("member", e.params)
                  , o = d.getBidIdParameter("invCode", e.params)
                  , c = d.getBidIdParameter("query", e.params)
                  , s = d.getBidIdParameter("referrer", e.params)
                  , u = d.getBidIdParameter("alt_referrer", e.params)
                  , p = "//ib.adnxs.com/jpt?";
                p = d.tryAppendQueryString(p, "callback", preBidNameSpace + ".handleAnCB"),
                p = d.tryAppendQueryString(p, "callback_uid", t),
                p = d.tryAppendQueryString(p, "psa", "0"),
                p = d.tryAppendQueryString(p, "id", n),
                a ? p = d.tryAppendQueryString(p, "member", a) : r && (p = d.tryAppendQueryString(p, "member", r),
                d.logMessage('appnexus.callBids: "memberId" will be deprecated soon. Please use "member" instead')),
                p = d.tryAppendQueryString(p, "code", o),
                p = d.tryAppendQueryString(p, "traffic_source_code", d.getBidIdParameter("trafficSourceCode", e.params));
                var l = ""
                  , f = d.parseSizesInput(e.sizes)
                  , m = f.length;
                if (m > 0 && (l = "size=" + f[0],
                m > 1)) {
                    l += "&promo_sizes=";
                    for (var g = 1; m > g; g++)
                        l += f[g] += ",";
                    l && "," === l.charAt(l.length - 1) && (l = l.slice(0, l.length - 1))
                }
                l && (p += l + "&");
                var v = d.parseQueryStringParameters(c);
                v && (p += v);
                var b = i({}, e.params);
                delete b.placementId,
                delete b.memberId,
                delete b.invCode,
                delete b.query,
                delete b.referrer,
                delete b.alt_referrer,
                delete b.member;
                var h = d.parseQueryStringParameters(b);
                return h && (p += h),
                "" === s && (s = d.getTopWindowUrl()),
                p = d.tryAppendQueryString(p, "referrer", s),
                p = d.tryAppendQueryString(p, "alt_referrer", u),
                p.lastIndexOf("&") === p.length - 1 && (p = p.substring(0, p.length - 1)),
                d.logMessage("jpt request built: " + p),
                e.startTime = (new Date).getTime(),
                p
            }
            var t = p.createNew("appnexus")
              , n = !1;
            return t.callBids = function(t) {
                for (var n = t.bids, r = 0; r < n.length; r++) {
                    var i = n[r]
                      , a = i.bidId;
                    c.loadScript(e(i, a))
                }
            }
            ,
            window[preBidNameSpace].handleAnCB = function(e) {
                var t;
                if (e && e.callback_uid) {
                    var r, i = e.callback_uid, c = "", p = a.getBidRequest(i);
                    p && (t = p.bidder,
                    c = p.placementCode,
                    p.status = o.STATUS.GOOD),
                    d.logMessage("JSONP callback function called for ad ID: " + i);
                    var l = [];
                    if (e.result && e.result.cpm && 0 !== e.result.cpm) {
                        r = parseInt(e.result.cpm, 10),
                        r /= 1e4;
                        var f = e.result.creative_id;
                        l = u.createBid(1, p),
                        l.creative_id = f,
                        l.bidderCode = t,
                        l.cpm = r,
                        l.adUrl = e.result.ad,
                        l.width = e.result.width,
                        l.height = e.result.height,
                        l.dealId = e.result.deal_id,
                        s.addBidResponse(c, l)
                    } else
                        d.logMessage("No prebid response from AppNexus for placement code " + c),
                        l = u.createBid(2, p),
                        l.bidderCode = t,
                        s.addBidResponse(c, l);
                    if (!n) {
                        var m = d.createInvisibleIframe();
                        m.src = "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html";
                        try {
                            document.body.appendChild(m)
                        } catch (g) {
                            d.logError(g)
                        }
                        n = !0
                    }
                } else
                    d.logMessage("No prebid response for placement %%PLACEMENT%%")
            }
            ,
            {
                callBids: t.callBids,
                setBidderCode: t.setBidderCode,
                createNew: l.createNew,
                buildJPTCall: e
            }
        }
        ,
        r.createNew = function() {
            return new r
        }
        ,
        e.exports = r
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript",
            n.async = !0,
            t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null,
                t())
            }
            : n.onload = function() {
                t()
            }
            ),
            n.src = e;
            var r = document.getElementsByTagName("head");
            r = r.length ? r : document.getElementsByTagName("body"),
            r.length && (r = r[0],
            r.insertBefore(n, r.firstChild))
        }
        var i = n(2)
          , a = {};
        t.loadScript = function(e, t, n) {
            return e ? (n ? a[e] ? t && "function" == typeof t && (a[e].loaded ? t() : a[e].callbacks.push(t)) : (a[e] = {
                loaded: !1,
                callbacks: []
            },
            t && "function" == typeof t && a[e].callbacks.push(t),
            r(e, (function() {
                a[e].loaded = !0;
                try {
                    for (var t = 0; t < a[e].callbacks.length; t++)
                        a[e].callbacks[t]()
                } catch (n) {
                    i.logError("Error executing callback", "adloader.js:loadScript", n)
                }
            }
            ))) : r(e, t),
            void 0) : (i.logError("Error attempting to request empty URL", "adloader.js:loadScript"),
            void 0)
        }
    }
    ), (function(e, t) {
        "use strict";
        function n(e) {
            function t(e) {
                i = e
            }
            function n() {
                return i
            }
            function r() {}
            var i = e;
            return {
                callBids: r,
                setBidderCode: t,
                getBidderCode: n
            }
        }
        t.createNew = function(e) {
            return new n(e)
        }
    }
    ), (function(e, t, n) {
        "use strict";
        var r = (function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var o, d = e[Symbol.iterator](); !(r = (o = d.next()).done) && (n.push(o.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (c) {
                    i = !0,
                    a = c
                } finally {
                    try {
                        !r && d["return"] && d["return"]()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }
        )()
          , i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = n(11)
          , o = n(13)
          , d = n(14)
          , c = n(3)
          , s = n(12)
          , u = n(2)
          , p = n(18)
          , l = p.createNew("audienceNetwork")
          , f = l.setBidderCode
          , m = l.getBidderCode
          , g = function(e) {
            return "object" === i(e.params) && "string" == typeof e.params.placementId && e.params.placementId.length > 0 && Array.isArray(e.sizes) && e.sizes.length > 0
        }
          , v = function(e) {
            return Array.isArray(e) && 2 === e.length ? e[0] + "x" + e[1] : e
        }
          , b = function(e) {
            return ["300x250", "320x50"].includes(e)
        }
          , h = function() {
            return Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString()
        }
          , w = function(e) {
            var t = {};
            try {
                t = JSON.parse(e)
            } catch (n) {}
            return t
        }
          , y = function(e, t, n) {
            var r = "native" === t ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}</script>' : ""
              , i = "native" === t ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "";
            return "<html><head>" + r + "</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'" + e + "',format:'" + t + "',bidid:'" + n + "',onAdLoaded:function(e){console.log('Audience Network [" + e + "] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network [" + e + "] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n</script>\n" + i + "</div></body></html>"
        }
          , S = function(e, t, n, i, a) {
            var d = o.createBid(c.STATUS.GOOD, {
                bidId: i
            });
            d.bidderCode = m(),
            d.cpm = a / 100,
            d.ad = y(e, n, i);
            var s = t.split("x").map(Number)
              , u = r(s, 2);
            return d.width = u[0],
            d.height = u[1],
            d.hb_bidder = "fan",
            d.fb_bidid = i,
            d.fb_format = n,
            d.fb_placementid = e,
            d
        }
          , B = function() {
            var e = o.createBid(c.STATUS.NO_BID);
            return e.bidderCode = m(),
            e
        }
          , N = function(e) {
            var t = []
              , n = []
              , r = []
              , i = [];
            if (e.bids.filter(g).forEach((function(e) {
                return e.sizes.map(v).filter(b).slice(0, 1).forEach((function(a) {
                    t.push(e.placementCode),
                    n.push(e.params.placementId),
                    r.push(e.params.format || a),
                    i.push(a)
                }
                ))
            }
            )),
            n.length) {
                var o = h()
                  , c = s.format({
                    protocol: "https",
                    host: "an.facebook.com",
                    pathname: "/v2/placementbid.json",
                    search: {
                        sdk: "5.5.web",
                        testmode: o,
                        placementids: n,
                        adformats: r
                    }
                });
                a.ajax(c, (function(e) {
                    var n = w(e);
                    if (n.errors && n.errors.length) {
                        var a = B();
                        t.forEach((function(e) {
                            return d.addBidResponse(e, a)
                        }
                        )),
                        n.errors.forEach(u.logError)
                    } else
                        Object.keys(n.bids).map((function(e) {
                            return n.bids[e]
                        }
                        )).reduce((function(e, t) {
                            return e.concat(t)
                        }
                        ), []).forEach((function(e, n) {
                            return d.addBidResponse(t[n], S(e.placement_id, i[n], r[n], e.bid_id, e.bid_price_cents))
                        }
                        ))
                }
                ), null, {
                    withCredentials: !0
                })
            } else
                u.logError("No valid bids requested")
        }
          , I = function() {
            return {
                callBids: N,
                setBidderCode: f,
                getBidderCode: m
            }
        };
        e.exports = I
    }
    ), (function(e, t, n) {
        "use strict";
        var r = n(13)
          , i = n(14)
          , a = n(17)
          , o = n(3)
          , d = n(2)
          , c = function() {
            function e(e) {
                var t = void 0
                  , n = void 0
                  , r = window
                  , i = document
                  , a = i.documentElement
                  , o = void 0;
                if (e) {
                    try {
                        r = window.top,
                        i = window.top.document
                    } catch (d) {
                        return
                    }
                    a = i.documentElement,
                    o = i.body,
                    t = r.innerWidth || a.clientWidth || o.clientWidth,
                    n = r.innerHeight || a.clientHeight || o.clientHeight
                } else
                    a = i.documentElement,
                    t = r.innerWidth || a.clientWidth,
                    n = r.innerHeight || a.clientHeight;
                return t + "x" + n
            }
            function t(e) {
                var t = d.createInvisibleIframe()
                  , n = "openx-pd";
                t.setAttribute("id", n),
                t.setAttribute("name", n);
                var r = document.body;
                r && (t.src = e,
                v ? (v.parentNode.replaceChild(t, v),
                v = t) : v = r.appendChild(t))
            }
            function n(e, t) {
                var n = r.createBid(e ? o.STATUS.GOOD : o.STATUS.NO_BID, t);
                if (n.bidderCode = f,
                e) {
                    var a = e.creative[0];
                    n.ad = e.html,
                    n.cpm = Number(e.pub_rev) / 1e3,
                    n.ad_id = e.adid,
                    e.deal_id && (n.dealId = e.deal_id),
                    a && (n.width = a.width,
                    n.height = a.height)
                }
                i.addBidResponse(t.placementCode, n)
            }
            function c(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && (e[t] || delete e[t]);
                return d._map(Object.keys(e), (function(t) {
                    return t + "=" + e[t]
                }
                )).join("&")
            }
            function s(e, t) {
                var n = new Image
                  , r = e.tracking.impression
                  , i = r.match(/([^?]+\/)ri\?/);
                i && (n.src = i[1] + "bo?" + c(t))
            }
            function u(e, t) {
                var n = d.parseSizesInput(t.sizes)
                  , r = n && n.length || 0
                  , i = !1
                  , a = e.creative && e.creative[0]
                  , o = String(a.width) + "x" + String(a.height);
                if (d.isArray(n))
                    for (var c = 0; r > c; c++) {
                        var s = n[c];
                        if (String(s) === String(o)) {
                            i = !0;
                            break
                        }
                    }
                return i
            }
            function p(e, t, n) {
                if (d.isArray(e)) {
                    t.auid = d._map(e, (function(e) {
                        return e.params.unit
                    }
                    )).join("%2C"),
                    t.aus = d._map(e, (function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    }
                    )).join("|"),
                    e.forEach((function(e) {
                        for (var n in e.params.customParams)
                            e.params.customParams.hasOwnProperty(n) && (t["c." + n] = e.params.customParams[n])
                    }
                    )),
                    t.callback = "window." + preBidNameSpace + ".oxARJResponse";
                    var r = c(t);
                    a.loadScript("//" + n + "/w/1.0/arj?" + r)
                }
            }
            function l(t) {
                var n = void 0
                  , r = t.bids || []
                  , i = window.parent !== window ? document.referrer : window.location.href;
                i = i && encodeURIComponent(i);
                try {
                    n = window.self !== window.top
                } catch (a) {
                    n = !1
                }
                if (0 !== r.length) {
                    var o = r[0].params.delDomain;
                    g = new Date(t.start),
                    p(r, {
                        ju: i,
                        jr: i,
                        ch: document.charSet || document.characterSet,
                        res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                        ifr: n,
                        tz: g.getTimezoneOffset(),
                        tws: e(n),
                        ef: "bt%2Cdb",
                        be: 1,
                        bc: m
                    }, o)
                }
            }
            var f = "openx"
              , m = "hb_pb"
              , g = void 0
              , v = null;
            return window[preBidNameSpace].oxARJResponse = function(e) {
                var r = e.ads.ad;
                e.ads && e.ads.pixels && t(e.ads.pixels),
                r || (r = []);
                for (var i = window[preBidNameSpace]._bidsRequested.find((function(e) {
                    return "openx" === e.bidderCode
                }
                )).bids, a = 0; a < i.length; a++) {
                    for (var o = i[a], d = null, c = null, p = 0; p < r.length; p++)
                        if (c = r[p],
                        String(o.params.unit) === String(c.adunitid) && u(c, o) && !c.used) {
                            d = c.adunitid;
                            break
                        }
                    var l = {
                        bd: +new Date - g,
                        br: "0",
                        bt: window[preBidNameSpace].cbTimeout || window[preBidNameSpace].bidderTimeout,
                        bs: window.location.hostname
                    };
                    d && c.pub_rev ? (c.used = !0,
                    l.br = l.bt < l.bd ? "t" : "p",
                    l.bp = c.pub_rev,
                    l.ts = c.ts,
                    n(c, o),
                    s(c.creative[0], l)) : n(null, o)
                }
            }
            ,
            {
                callBids: l
            }
        };
        e.exports = c
    }
    ), (function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = n(2)
          , a = n(13)
          , o = n(14)
          , d = n(3)
          , c = function() {
            function e() {
                var e = {}
                  , t = new Date;
                e.SAVersion = "1100",
                e.wp = "PreBid",
                e.js = 1,
                e.wv = d.REPO_AND_VERSION,
                m && (e.sec = 1),
                e.screenResolution = screen.width + "x" + screen.height,
                e.ranreq = Math.random(),
                e.inIframe = window != top ? "1" : "0",
                window.navigator.cookieEnabled === !1 && (e.fpcd = "1");
                try {
                    e.pageURL = window.top.location.href,
                    e.refurl = window.top.document.referrer
                } catch (n) {
                    e.pageURL = window.location.href,
                    e.refurl = window.document.referrer
                }
                return e.kltstamp = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds(),
                e.timezone = t.getTimezoneOffset() / 60 * -1,
                e
            }
            function t(e, t) {
                t.kadpageurl || (t.kadpageurl = t.pageURL);
                var n, a, o;
                for (n in h)
                    h.hasOwnProperty(n) && (a = e[n],
                    a && (o = h[n],
                    "object" === ("undefined" == typeof o ? "undefined" : r(o)) ? (a = o.m(a, t),
                    n = o.n) : i.isStr(a) ? n = h[n] : i.logWarn("PubMatic: Ignoring param key: " + h[n] + ", expects string-value, found " + ("undefined" == typeof a ? "undefined" : r(a))),
                    a && (t[n] = a)));
                return t
            }
            function n(e) {
                var t, n, r = e.length, a = [];
                for (t = 0; r > t; t++)
                    n = e[t],
                    i.isStr(n) && (n = n.replace(/^\s+/g, "").replace(/\s+$/g, ""),
                    n.length > 0 && a.push(n));
                return a
            }
            function c(e, t) {
                var n = s(e, t);
                v = i.createInvisibleIframe();
                var r = document.getElementsByTagName("head")[0];
                r.insertBefore(v, r.firstChild);
                var a = i.getIframeDocument(v)
                  , o = i.createContentToExecuteExtScriptInFriendlyFrame(n);
                o = o.replace("<!--POST_SCRIPT_TAG_MACRO-->", "<script>window.parent." + preBidNameSpace + ".handlePubmaticCallback(window.bidDetailsMap, window.progKeyValueMap);</script>"),
                a.write(o),
                a.close()
            }
            function s(e, t) {
                var n = "gads.pubmatic.com/AdServer/AdCallAggregator";
                return g + n + "?" + i.parseQueryStringParameters(e) + "adslots=" + encodeURIComponent("[" + t.join(",") + "]")
            }
            function u(e) {
                if (!f) {
                    var t = i.createInvisibleIframe();
                    t.src = g + "ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + e,
                    i.insertElement(t, document),
                    f = !0
                }
            }
            function p(r) {
                var i = e()
                  , a = [];
                i.pubId = 0,
                l = r.bids || [];
                for (var o = 0; o < l.length; o++) {
                    var d = l[o];
                    i.pubId = i.pubId || d.params.publisherId,
                    i = t(d.params, i),
                    a.push(d.params.adSlot)
                }
                a = n(a),
                i.pubId && a.length > 0 && c(i, a),
                u(i.pubId)
            }
            var l, f = !1, m = 0, g = ("https:" === window.location.protocol ? (m = 1,
            "https") : "http") + "://", v = void 0, b = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            }, h = {
                kadgender: "gender",
                age: "kadage",
                dctr: "dctr",
                wiid: "wiid",
                profId: "profId",
                verId: "verId",
                pmzoneid: {
                    n: "pmZoneId",
                    m: function(e) {
                        return i.isStr(e) ? e.split(",").slice(0, 50).join() : ""
                    }
                }
            };
            return window[preBidNameSpace].handlePubmaticCallback = function(e, t) {
                var n, r, d, c, s = e, u = t;
                if (s && u)
                    for (n = 0; n < l.length; n++) {
                        var p;
                        c = l[n].params,
                        r = s[c.adSlot] || {},
                        u[c.adSlot] && -1 === u[c.adSlot].indexOf("=") && (u[c.adSlot] = u[c.adSlot].replace(/([a-z]+);(.[^;]*)/gi, "$1=$2")),
                        d = (u[c.adSlot] || "").split(";").reduce((function(e, t) {
                            var n = t.split("=");
                            return e[n[0]] = n[1],
                            e
                        }
                        ), {}),
                        "1" === d.bidstatus ? (p = a.createBid(1),
                        p.bidderCode = "pubmatic",
                        p.adSlot = c.adSlot,
                        p.cpm = Number(d.bid),
                        p.ad = unescape(r.creative_tag),
                        p.ad += i.createTrackPixelIframeHtml(decodeURIComponent(r.tracking_url)),
                        p.width = r.width,
                        p.height = r.height,
                        p.dealId = d.wdeal,
                        p.dealChannel = b[r.deal_channel] || null,
                        o.addBidResponse(l[n].placementCode, p)) : (p = a.createBid(2),
                        p.bidderCode = "pubmatic",
                        o.addBidResponse(l[n].placementCode, p))
                    }
            }
            ,
            {
                callBids: p
            }
        };
        e.exports = c
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e,
            t
        }
        function a() {
            return "pbjs_lite_" + window[preBidNameSpace].version
        }
        function o() {
            return "https:" === location.protocol
        }
        function d() {
            function e(e) {
                var t = e.bids || [];
                t.forEach((function(t) {
                    function n(e) {
                        try {
                            h.logMessage("XHR callback function called for ad ID: " + t.bidId),
                            p(e, t)
                        } catch (n) {
                            "string" == typeof n ? h.logWarn(n + " when processing rubicon response for placement code " + t.placementCode) : h.logError("Error processing rubicon response for placement code " + t.placementCode, null, n),
                            o()
                        }
                    }
                    function a(e, t) {
                        h.logError("Request for rubicon responded with:", t.status, e),
                        o()
                    }
                    function o() {
                        var e = m["default"].createBid(y.STATUS.NO_BID, t);
                        e.bidderCode = t.bidder,
                        v["default"].addBidResponse(t.placementCode, e)
                    }
                    try {
                        "video" === t.mediaType ? w.ajax(N, {
                            success: n,
                            error: a
                        }, r(t, e), {
                            withCredentials: !0
                        }) : w.ajax(i(t), {
                            success: n,
                            error: a
                        }, void 0, {
                            withCredentials: !0
                        })
                    } catch (d) {
                        h.logError("Error sending rubicon request for placement code " + t.placementCode, null, d),
                        o()
                    }
                }
                ))
            }
            function t() {
                return [window.screen.width, window.screen.height].join("x")
            }
            function n() {
                function e() {
                    var e = window.DigiTrust && window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                    });
                    return e && e.success && e.identity || null
                }
                var t = e();
                return !t || t.privacy && t.privacy.optout ? [] : ["dt.id", t.id, "dt.keyv", t.keyv]
            }
            function r(e, n) {
                e.startTime = (new Date).getTime();
                var r = e.params;
                if (!r || "object" !== u(r.video))
                    throw "Invalid Video Bid";
                var i = void 0;
                if (r.video.playerWidth && r.video.playerHeight)
                    i = [r.video.playerWidth, r.video.playerHeight];
                else {
                    if (!(Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1))
                        throw "Invalid Video Bid - No size provided";
                    i = e.sizes[0]
                }
                var o = {
                    page_url: r.referrer ? r.referrer : h.getTopWindowUrl(),
                    resolution: t(),
                    account_id: r.accountId,
                    integration: a(),
                    timeout: n.timeout - (Date.now() - n.auctionStart + I),
                    stash_creatives: !0,
                    ae_pass_through_parameters: r.video.aeParams,
                    slots: []
                }
                  , d = {
                    site_id: r.siteId,
                    zone_id: r.zoneId,
                    position: r.position || "btf",
                    floor: parseFloat(r.floor) > .01 ? r.floor : .01,
                    element_id: e.placementCode,
                    name: e.placementCode,
                    language: r.video.language,
                    width: i[0],
                    height: i[1]
                };
                if (!r.video.size_id)
                    throw "Invalid Video Bid - Invalid Ad Type!";
                return d.size_id = r.video.size_id,
                r.inventory && "object" === u(r.inventory) && (d.inventory = r.inventory),
                r.keywords && Array.isArray(r.keywords) && (d.keywords = r.keywords),
                r.visitor && "object" === u(r.visitor) && (d.visitor = r.visitor),
                o.slots.push(d),
                JSON.stringify(o)
            }
            function i(e) {
                e.startTime = (new Date).getTime();
                var r = e.params
                  , i = r.accountId
                  , c = r.siteId
                  , s = r.zoneId
                  , p = r.position
                  , l = r.floor
                  , f = r.keywords
                  , m = r.visitor
                  , g = r.inventory
                  , v = r.userId
                  , b = r.referrer;
                l = (l = parseFloat(l)) > .01 ? l : .01,
                p = p || "btf";
                var w = d.masSizeOrdering(Array.isArray(e.params.sizes) ? e.params.sizes.map((function(e) {
                    return (E[e] || "").split("x")
                }
                )) : e.sizes);
                if (w.length < 1)
                    throw "no valid sizes";
                if (!/^\d+$/.test(i))
                    throw "invalid accountId provided";
                var y = ["account_id", i, "site_id", c, "zone_id", s, "size_id", w[0], "alt_size_ids", w.slice(1).join(",") || void 0, "p_pos", p, "rp_floor", l, "rp_secure", o() ? "1" : "0", "tk_flint", a(), "p_screen_res", t(), "kw", f, "tk_user_key", v];
                return null !== m && "object" === ("undefined" == typeof m ? "undefined" : u(m)) && h._each(m, (function(e, t) {
                    return y.push("tg_v." + t, e)
                }
                )),
                null !== g && "object" === ("undefined" == typeof g ? "undefined" : u(g)) && h._each(g, (function(e, t) {
                    return y.push("tg_i." + t, e)
                }
                )),
                y.push("rand", Math.random(), "rf", b ? b : h.getTopWindowUrl()),
                y = y.concat(n()),
                y.reduce((function(e, t, n) {
                    return n % 2 === 0 && void 0 !== y[n + 1] ? e + t + "=" + encodeURIComponent(y[n + 1]) + "&" : e
                }
                ), B + "?").slice(0, -1)
            }
            function p(e, t) {
                var n = JSON.parse(e)
                  , r = n.ads
                  , i = t.placementCode;
                if ("object" !== ("undefined" == typeof n ? "undefined" : u(n)) || "ok" !== n.status)
                    throw "bad response";
                if ("video" === t.mediaType && "object" === ("undefined" == typeof r ? "undefined" : u(r)) && (r = r[i]),
                !Array.isArray(r) || r.length < 1)
                    throw "invalid ad response";
                r = r.sort(f),
                r.forEach((function(e) {
                    if ("ok" !== e.status)
                        throw "bad ad status";
                    var n = m["default"].createBid(y.STATUS.GOOD, t);
                    if (n.creative_id = e.ad_id,
                    n.bidderCode = t.bidder,
                    n.cpm = e.cpm || 0,
                    n.dealId = e.deal,
                    "video" === t.mediaType)
                        n.width = t.params.video.playerWidth,
                        n.height = t.params.video.playerHeight,
                        n.vastUrl = e.creative_depot_url,
                        n.descriptionUrl = e.impression_id,
                        n.impression_id = e.impression_id;
                    else {
                        n.ad = g(e.script, e.impression_id);
                        var r = E[e.size_id].split("x").map((function(e) {
                            return Number(e)
                        }
                        ))
                          , i = s(r, 2);
                        n.width = i[0],
                        n.height = i[1]
                    }
                    n.rubiconTargeting = (Array.isArray(e.targeting) ? e.targeting : []).reduce((function(e, t) {
                        return e[t.key] = t.values[0],
                        e
                    }
                    ), {
                        rpfl_elemid: t.placementCode
                    });
                    try {
                        v["default"].addBidResponse(t.placementCode, n)
                    } catch (a) {
                        h.logError("Error from addBidResponse", null, a)
                    }
                }
                ))
            }
            function f(e, t) {
                return (t.cpm || 0) - (e.cpm || 0)
            }
            var g = function(e, t) {
                return "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n<!-- Rubicon Project Ad Tag -->\n<div data-rp-impression-id='" + t + "'>\n<script type='text/javascript'>" + e + "</script>\n</div>\n</body>\n</html>"
            };
            return c(l.createNew(S), {
                callBids: e,
                createNew: d.createNew
            })
        }
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , s = (function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var o, d = e[Symbol.iterator](); !(r = (o = d.next()).done) && (n.push(o.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (c) {
                    i = !0,
                    a = c
                } finally {
                    try {
                        !r && d["return"] && d["return"]()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }
        )()
          , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , p = n(18)
          , l = i(p)
          , f = n(13)
          , m = r(f)
          , g = n(14)
          , v = r(g)
          , b = n(2)
          , h = i(b)
          , w = n(11)
          , y = n(3)
          , S = "rubicon"
          , B = "//fastlane.rubiconproject.com/a/api/fastlane.json"
          , N = "//fastlane-adv.rubiconproject.com/v1/auction/video"
          , I = 500
          , E = {
            1: "468x60",
            2: "728x90",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            65: "640x480",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            94: "970x310",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600"
        };
        h._each(E, (function(e, t) {
            return E[e] = t
        }
        )),
        d.masSizeOrdering = function(e) {
            var t = [15, 2, 9];
            return h.parseSizesInput(e).reduce((function(e, t) {
                var n = parseInt(E[t], 10);
                return n && e.push(n),
                e
            }
            ), []).sort((function(e, n) {
                var r = t.indexOf(e)
                  , i = t.indexOf(n);
                return r > -1 || i > -1 ? -1 === r ? 1 : -1 === i ? -1 : r - i : e - n
            }
            ))
        }
        ,
        d.createNew = function() {
            return new d
        }
        ,
        e.exports = d
    }
    ), (function(e, t, n) {
        "use strict";
        n(24),
        n(57),
        n(62),
        Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
    }
    ), (function(e, t, n) {
        n(25),
        e.exports = n(28).Array.find
    }
    ), (function(e, t, n) {
        "use strict";
        var r = n(26)
          , i = n(44)(5)
          , a = "find"
          , o = !0;
        a in [] && Array(1)[a]((function() {
            o = !1
        }
        )),
        r(r.P + r.F * o, "Array", {
            find: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(56)(a)
    }
    ), (function(e, t, n) {
        var r = n(27)
          , i = n(28)
          , a = n(29)
          , o = n(39)
          , d = n(42)
          , c = "prototype"
          , s = function(e, t, n) {
            var u, p, l, f, m = e & s.F, g = e & s.G, v = e & s.S, b = e & s.P, h = e & s.B, w = g ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[c], y = g ? i : i[t] || (i[t] = {}), S = y[c] || (y[c] = {});
            g && (n = t);
            for (u in n)
                p = !m && w && void 0 !== w[u],
                l = (p ? w : n)[u],
                f = h && p ? d(l, r) : b && "function" == typeof l ? d(Function.call, l) : l,
                w && o(w, u, l, e & s.U),
                y[u] != l && a(y, u, f),
                b && S[u] != l && (S[u] = l)
        };
        r.core = i,
        s.F = 1,
        s.G = 2,
        s.S = 4,
        s.P = 8,
        s.B = 16,
        s.W = 32,
        s.U = 64,
        s.R = 128,
        e.exports = s
    }
    ), (function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    }
    ), (function(e) {
        var t = e.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = t)
    }
    ), (function(e, t, n) {
        var r = n(30)
          , i = n(38);
        e.exports = n(34) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    ), (function(e, t, n) {
        var r = n(31)
          , i = n(33)
          , a = n(37)
          , o = Object.defineProperty;
        t.f = n(34) ? Object.defineProperty : function(e, t, n) {
            if (r(e),
            t = a(t, !0),
            r(n),
            i)
                try {
                    return o(e, t, n)
                } catch (d) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    ), (function(e, t, n) {
        var r = n(32);
        e.exports = function(e) {
            if (!r(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    }
    ), (function(e) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }
    ), (function(e, t, n) {
        e.exports = !n(34) && !n(35)((function() {
            return 7 != Object.defineProperty(n(36)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ), (function(e, t, n) {
        e.exports = !n(35)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ), (function(e) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }
    ), (function(e, t, n) {
        var r = n(32)
          , i = n(27).document
          , a = r(i) && r(i.createElement);
        e.exports = function(e) {
            return a ? i.createElement(e) : {}
        }
    }
    ), (function(e, t, n) {
        var r = n(32);
        e.exports = function(e, t) {
            if (!r(e))
                return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e)))
                return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    ), (function(e) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    ), (function(e, t, n) {
        var r = n(27)
          , i = n(29)
          , a = n(40)
          , o = n(41)("src")
          , d = "toString"
          , c = Function[d]
          , s = ("" + c).split(d);
        n(28).inspectSource = function(e) {
            return c.call(e)
        }
        ,
        (e.exports = function(e, t, n, d) {
            var c = "function" == typeof n;
            c && (a(n, "name") || i(n, "name", t)),
            e[t] !== n && (c && (a(n, o) || i(n, o, e[t] ? "" + e[t] : s.join(String(t)))),
            e === r ? e[t] = n : d ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t],
            i(e, t, n)))
        }
        )(Function.prototype, d, (function() {
            return "function" == typeof this && this[o] || c.call(this)
        }
        ))
    }
    ), (function(e) {
        var t = {}.hasOwnProperty;
        e.exports = function(e, n) {
            return t.call(e, n)
        }
    }
    ), (function(e) {
        var t = 0
          , n = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
        }
    }
    ), (function(e, t, n) {
        var r = n(43);
        e.exports = function(e, t, n) {
            if (r(e),
            void 0 === t)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    ), (function(e) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    }
    ), (function(e, t, n) {
        var r = n(42)
          , i = n(45)
          , a = n(47)
          , o = n(49)
          , d = n(51);
        e.exports = function(e, t) {
            var n = 1 == e
              , c = 2 == e
              , s = 3 == e
              , u = 4 == e
              , p = 6 == e
              , l = 5 == e || p
              , f = t || d;
            return function(t, d, m) {
                for (var g, v, b = a(t), h = i(b), w = r(d, m, 3), y = o(h.length), S = 0, B = n ? f(t, y) : c ? f(t, 0) : void 0; y > S; S++)
                    if ((l || S in h) && (g = h[S],
                    v = w(g, S, b),
                    e))
                        if (n)
                            B[S] = v;
                        else if (v)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return S;
                            case 2:
                                B.push(g)
                            }
                        else if (u)
                            return !1;
                return p ? -1 : s || u ? u : B
            }
        }
    }
    ), (function(e, t, n) {
        var r = n(46);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }
    ), (function(e) {
        var t = {}.toString;
        e.exports = function(e) {
            return t.call(e).slice(8, -1)
        }
    }
    ), (function(e, t, n) {
        var r = n(48);
        e.exports = function(e) {
            return Object(r(e))
        }
    }
    ), (function(e) {
        e.exports = function(e) {
            if (void 0 == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    }
    ), (function(e, t, n) {
        var r = n(50)
          , i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }
    ), (function(e) {
        var t = Math.ceil
          , n = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
        }
    }
    ), (function(e, t, n) {
        var r = n(52);
        e.exports = function(e, t) {
            return new (r(e))(t)
        }
    }
    ), (function(e, t, n) {
        var r = n(32)
          , i = n(53)
          , a = n(54)("species");
        e.exports = function(e) {
            var t;
            return i(e) && (t = e.constructor,
            "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0),
            r(t) && (t = t[a],
            null === t && (t = void 0))),
            void 0 === t ? Array : t
        }
    }
    ), (function(e, t, n) {
        var r = n(46);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }
    ), (function(e, t, n) {
        var r = n(55)("wks")
          , i = n(41)
          , a = n(27).Symbol
          , o = "function" == typeof a
          , d = e.exports = function(e) {
            return r[e] || (r[e] = o && a[e] || (o ? a : i)("Symbol." + e))
        }
        ;
        d.store = r
    }
    ), (function(e, t, n) {
        var r = n(27)
          , i = "__core-js_shared__"
          , a = r[i] || (r[i] = {});
        e.exports = function(e) {
            return a[e] || (a[e] = {})
        }
    }
    ), (function(e, t, n) {
        var r = n(54)("unscopables")
          , i = Array.prototype;
        void 0 == i[r] && n(29)(i, r, {}),
        e.exports = function(e) {
            i[r][e] = !0
        }
    }
    ), (function(e, t, n) {
        n(58),
        e.exports = n(28).Array.includes
    }
    ), (function(e, t, n) {
        "use strict";
        var r = n(26)
          , i = n(59)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(56)("includes")
    }
    ), (function(e, t, n) {
        var r = n(60)
          , i = n(49)
          , a = n(61);
        e.exports = function(e) {
            return function(t, n, o) {
                var d, c = r(t), s = i(c.length), u = a(o, s);
                if (e && n != n) {
                    for (; s > u; )
                        if (d = c[u++],
                        d != d)
                            return !0
                } else
                    for (; s > u; u++)
                        if ((e || u in c) && c[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        }
    }
    ), (function(e, t, n) {
        var r = n(45)
          , i = n(48);
        e.exports = function(e) {
            return r(i(e))
        }
    }
    ), (function(e, t, n) {
        var r = n(50)
          , i = Math.max
          , a = Math.min;
        e.exports = function(e, t) {
            return e = r(e),
            0 > e ? i(e + t, 0) : a(e, t)
        }
    }
    ), (function(e, t, n) {
        n(63),
        e.exports = n(28).Object.assign
    }
    ), (function(e, t, n) {
        var r = n(26);
        r(r.S + r.F, "Object", {
            assign: n(64)
        })
    }
    ), (function(e, t, n) {
        "use strict";
        var r = n(65)
          , i = n(69)
          , a = n(70)
          , o = n(47)
          , d = n(45)
          , c = Object.assign;
        e.exports = !c || n(35)((function() {
            var e = {}
              , t = {}
              , n = Symbol()
              , r = "abcdefghijklmnopqrst";
            return e[n] = 7,
            r.split("").forEach((function(e) {
                t[e] = e
            }
            )),
            7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
        }
        )) ? function(e) {
            for (var t = o(e), n = arguments.length, c = 1, s = i.f, u = a.f; n > c; )
                for (var p, l = d(arguments[c++]), f = s ? r(l).concat(s(l)) : r(l), m = f.length, g = 0; m > g; )
                    u.call(l, p = f[g++]) && (t[p] = l[p]);
            return t
        }
        : c
    }
    ), (function(e, t, n) {
        var r = n(66)
          , i = n(68);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    }
    ), (function(e, t, n) {
        var r = n(40)
          , i = n(60)
          , a = n(59)(!1)
          , o = n(67)("IE_PROTO");
        e.exports = function(e, t) {
            var n, d = i(e), c = 0, s = [];
            for (n in d)
                n != o && r(d, n) && s.push(n);
            for (; t.length > c; )
                r(d, n = t[c++]) && (~a(s, n) || s.push(n));
            return s
        }
    }
    ), (function(e, t, n) {
        var r = n(55)("keys")
          , i = n(41);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    }
    ), (function(e) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    ), (function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    ), (function(e, t) {
        t.f = {}.propertyIsEnumerable
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i() {
            addEventListener("message", a, !1)
        }
        function a(e) {
            var t = e.message ? "message" : "data"
              , n = {};
            try {
                n = JSON.parse(e[t])
            } catch (r) {
                return
            }
            if (n.adId) {
                var i = window[preBidNameSpace]._bidsReceived.find((function(e) {
                    return e.adId === n.adId
                }
                ));
                "Prebid Request" === n.message && (o(i, n.adServerDomain, e.source),
                window[preBidNameSpace]._winningBids.push(i),
                s["default"].emit(f, i)),
                "Prebid Native" === n.message && (p["default"](i),
                window[preBidNameSpace]._winningBids.push(i),
                s["default"].emit(f, i))
            }
        }
        function o(e, t, n) {
            var r = e.adId
              , i = e.ad
              , a = e.adUrl
              , o = e.width
              , c = e.height;
            r && (d(e),
            n.postMessage(JSON.stringify({
                message: "Prebid Response",
                ad: i,
                adUrl: a,
                adId: r,
                width: o,
                height: c
            }), t))
        }
        function d(e) {
            var t = e.adUnitCode
              , n = e.width
              , r = e.height
              , i = document.getElementById(window.googletag.pubads().getSlots().find((function(e) {
                return e.getAdUnitPath() === t || e.getSlotElementId() === t
            }
            )).getSlotElementId()).querySelector("iframe");
            i.width = "" + n,
            i.height = "" + r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.listenMessagesFromCreative = i;
        var c = n(9)
          , s = r(c)
          , u = n(7)
          , p = r(u)
          , l = n(3)
          , f = l.EVENTS.BID_WON
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e,
            t
        }
        function i() {
            p.forEach((function(e) {
                s.logMessage("Invoking cookie sync for bidder: " + e.bidder),
                "iframe" === e.type ? s.insertCookieSyncIframe(e.url, !1) : s.insertPixel(e.url)
            }
            )),
            p.length = 0
        }
        function a(e) {
            for (var t = 0; t < document.links.length; t++) {
                var n = document.links[t];
                n.href = e + encodeURIComponent(n.href)
            }
        }
        function o(e) {
            "true" !== document.cookie.replace(/(?:(?:^|.*;\s*)pbsCookiePersistFooter\s*\=\s*([^;]*).*$)|^.*$/, "$1") && (document.body.appendChild(d(e)),
            document.cookie = "pbsCookiePersistFooter=true; expires=Fri, 31 Dec 9999 23:59:59 GMT")
        }
        function d(e) {
            var t = document.createElement("div");
            t.style.background = "#D3D3D3",
            t.style.color = "#555",
            t.style.boxShadow = "0 -1px 2px rgba(0, 0, 0, 0.2)",
            t.style.fontFamily = "sans-serif",
            t.style.lineHeight = "1.5",
            t.style.position = "fixed",
            t.style.bottom = "0",
            t.style.left = "0",
            t.style.right = "0",
            t.style.width = "100%",
            t.style.padding = "1em 0",
            t.style.zindex = "1000";
            var n = document.createElement("p");
            return n.style.margin = "0 2em",
            n.innerHTML = e,
            t.appendChild(n),
            t
        }
        var c = n(2)
          , s = r(c)
          , u = t
          , p = [];
        u.queueSync = function(e) {
            var t = e.bidder
              , n = e.url
              , r = e.type;
            p.push({
                bidder: t,
                url: n,
                type: r
            })
        }
        ,
        u.syncCookies = function(e) {
            e ? setTimeout(i, e) : i()
        }
        ,
        u.persist = function(e, t) {
            s.isSafariBrowser() && (a(e),
            o(t))
        }
    }
    ), (function(e, t, n) {
        "use strict";
        var r = n(12)
          , i = n(74)
          , a = function(e) {
            this.name = e.adserver,
            this.code = e.code,
            this.getWinningBidByCode = function() {
                return i.getWinningBids(this.code)[0]
            }
        };
        t.dfpAdserver = function(e, t) {
            var n = new a(e);
            n.urlComponents = t;
            var i = {
                env: "vp",
                gdfp_req: "1",
                impl: "s",
                unviewed_position_start: "1"
            }
              , o = ["output", "iu", "sz", "url", "correlator", "description_url", "hl"]
              , d = function(e) {
                return encodeURIComponent(r.formatQS(e))
            };
            return n.appendQueryParams = function() {
                var e = n.getWinningBidByCode();
                e && (this.urlComponents.search.description_url = encodeURIComponent(e.descriptionUrl),
                this.urlComponents.search.cust_params = d(e.adserverTargeting),
                this.urlComponents.search.correlator = Date.now())
            }
            ,
            n.verifyAdserverTag = function() {
                for (var e in i)
                    if (!this.urlComponents.search.hasOwnProperty(e) || this.urlComponents.search[e] !== i[e])
                        return !1;
                for (var t in o)
                    if (!this.urlComponents.search.hasOwnProperty(o[t]))
                        return !1;
                return !0
            }
            ,
            n
        }
    }
    ), (function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e) {
            return "string" == typeof e ? [e] : f.isArray(e) ? e : window[preBidNameSpace]._adUnitCodes || []
        }
        function a(e) {
            var t = g.getWinningBids(e)
              , n = o();
            return t = t.map((function(e) {
                return r({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function(t) {
                    return "undefined" == typeof e.sendStandardTargeting || e.sendStandardTargeting || -1 === n.indexOf(t)
                }
                )).map((function(t) {
                    return r({}, t.substring(0, 20), [e.adserverTargeting[t]])
                }
                )))
            }
            ))
        }
        function o() {
            return l.getStandardBidderAdServerTargeting().map((function(e) {
                return e.key
            }
            )).concat(m.TARGETING_KEYS).filter(u.uniques)
        }
        function d(e) {
            var t = o();
            return window[preBidNameSpace]._bidsReceived.filter(u.adUnitsFilter.bind(this, e)).map((function(e) {
                return e.alwaysUseBid ? r({}, e.adUnitCode, Object.keys(e.adserverTargeting).map((function(n) {
                    return t.indexOf(n) > -1 ? void 0 : r({}, n.substring(0, 20), [e.adserverTargeting[n]])
                }
                )).filter((function(e) {
                    return e
                }
                ))) : void 0
            }
            )).filter((function(e) {
                return e
            }
            ))
        }
        function c(e) {
            var t = m.TARGETING_KEYS.concat(p.NATIVE_TARGETING_KEYS);
            return window[preBidNameSpace]._bidsReceived.filter(u.adUnitsFilter.bind(this, e)).map((function(e) {
                return e.adserverTargeting ? r({}, e.adUnitCode, s(e, t.filter((function(t) {
                    return "undefined" != typeof e.adserverTargeting[t]
                }
                )))) : void 0
            }
            )).filter((function(e) {
                return e
            }
            ))
        }
        function s(e, t) {
            return t.map((function(t) {
                return r({}, (t + "_" + e.bidderCode).substring(0, 20), [e.adserverTargeting[t]])
            }
            ))
        }
        var u = n(2)
          , p = n(7)
          , l = n(14)
          , f = n(2)
          , m = n(3)
          , g = t
          , v = [];
        g.resetPresetTargeting = function(e) {
            if (u.isGptPubadsDefined()) {
                var t = i(e)
                  , n = window[preBidNameSpace].adUnits.filter((function(e) {
                    return t.includes(e.code)
                }
                ));
                window.googletag.pubads().getSlots().forEach((function(e) {
                    v.forEach((function(t) {
                        n.forEach((function(n) {
                            (n.code === e.getAdUnitPath() || n.code === e.getSlotElementId()) && e.setTargeting(t, null)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
        ,
        g.getAllTargeting = function(e) {
            var t = i(e)
              , n = a(t).concat(d(t)).concat(window[preBidNameSpace]._sendAllBids ? c(t) : []);
            return n.map((function(e) {
                Object.keys(e).map((function(t) {
                    e[t].map((function(e) {
                        -1 === v.indexOf(Object.keys(e)[0]) && (v = Object.keys(e).concat(v))
                    }
                    ))
                }
                ))
            }
            )),
            n
        }
        ,
        g.setTargeting = function(e) {
            window.googletag.pubads().getSlots().forEach((function(t) {
                e.filter((function(e) {
                    return Object.keys(e)[0] === t.getAdUnitPath() || Object.keys(e)[0] === t.getSlotElementId()
                }
                )).forEach((function(e) {
                    return e[Object.keys(e)[0]].forEach((function(e) {
                        e[Object.keys(e)[0]].map((function(n) {
                            return f.logMessage("Attempting to set key value for slot: " + t.getSlotElementId() + " key: " + Object.keys(e)[0] + " value: " + n),
                            n
                        }
                        )).forEach((function(n) {
                            t.setTargeting(Object.keys(e)[0], n)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        g.getWinningBids = function(e) {
            var t = i(e);
            return window[preBidNameSpace]._bidsReceived.filter((function(e) {
                return t.includes(e.adUnitCode)
            }
            )).filter((function(e) {
                return e.cpm > 0
            }
            )).map((function(e) {
                return e.adUnitCode
            }
            )).filter(u.uniques).map((function(e) {
                return window[preBidNameSpace]._bidsReceived.filter((function(t) {
                    return t.adUnitCode === e ? t : null
                }
                )).reduce(u.getHighestCpm, {
                    adUnitCode: e,
                    cpm: 0,
                    adserverTargeting: {},
                    timeToRespond: 0
                })
            }
            ))
        }
        ,
        g.setTargetingForAst = function() {
            var e = window[preBidNameSpace].getAdserverTargeting();
            Object.keys(e).forEach((function(t) {
                return Object.keys(e[t]).forEach((function(n) {
                    if (f.logMessage("Attempting to set targeting for targetId: " + t + " key: " + n + " value: " + e[t][n]),
                    f.isStr(e[t][n]) || f.isArray(e[t][n])) {
                        var r = {}
                          , i = "hb_adid"
                          , a = n.substring(0, i.length) === i ? n.toUpperCase() : n;
                        r[a] = e[t][n],
                        window.apntag.setKeywords(t, r)
                    }
                }
                ))
            }
            ))
        }
        ,
        g.isApntagDefined = function() {
            return window.apntag && f.isFn(window.apntag.setKeywords) ? !0 : void 0
        }
    }
    )]);
}
!(function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var o = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = "",
    e(0)
}
)([(function(t, e, i) {
    var n = i(1)
      , o = i(9)
      , r = i(6)
      , a = n.getMetaInfo(window);
    window.PWT = window.PWT || {},
    window.PWT.bidMap = window.PWT.bidMap || {},
    window.PWT.bidIdMap = window.PWT.bidIdMap || {},
    window.PWT.isIframe = window.PWT.isIframe || a.isInIframe,
    window.PWT.protocol = window.PWT.protocol || a.protocol,
    window.PWT.secure = window.PWT.secure || a.secure,
    window.PWT.pageURL = window.PWT.pageURL || a.pageURL,
    window.PWT.refURL = window.PWT.refURL || a.refURL,
    window.PWT.isSafeFrame = window.PWT.isSafeFrame || !1,
    window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || !1,
    window.PWT.udpv = window.PWT.udpv || n.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtv"),
    n.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtc") && n.enableDebugLog(),
    n.findQueryParamInURL(a.isIframe ? a.refURL : a.pageURL, "pwtvc") && n.enableVisualDebugLog(),
    window.PWT.displayCreative = function(t, e) {
        n.log("In displayCreative for: " + e),
        r.displayCreative(t, e)
    }
    ,
    window.PWT.displayPMPCreative = function(t, e, i) {
        n.log("In displayPMPCreative for: " + e);
        var o = n.getBididForPMP(e, i);
        o && r.displayCreative(t, o)
    }
    ,
    window.PWT.sfDisplayCreative = function(t, e) {
        n.log("In sfDisplayCreative for: " + e),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: e,
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.PWT.sfDisplayPMPCreative = function(t, e, i) {
        n.log("In sfDisplayPMPCreative for: " + e),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: n.getBididForPMP(e, i),
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.OWT = {
        notifyCount: 0,
        externalBidderStatuses: {}
    },
    window.OWT.registerExternalBidders = function(t) {
        return window.OWT.notifyCount++,
        n.forEachOnArray(t, (function(t, e) {
            n.log("registerExternalBidders: " + e),
            window.OWT.externalBidderStatuses[e] = {
                id: window.OWT.notifyCount,
                status: !1
            }
        }
        )),
        window.OWT.notifyCount
    }
    ,
    window.OWT.notifyExternalBiddingComplete = function(t) {
        n.forEachOnObject(window.OWT.externalBidderStatuses, (function(e, i) {
            i && i.id === t && (n.log("notify externalBidding complete: " + e),
            window.OWT.externalBidderStatuses[e] = {
                id: i.id,
                status: !0
            })
        }
        ))
    }
    ,
    o.init(window)
}
), (function(t, e, i) {
    function n(t, e) {
        return g.call(t) === "[object " + e + "]"
    }
    var o = i(2)
      , r = i(3)
      , a = i(6)
      , s = !1;
    e.debugLogIsEnabled = s;
    var d = !1;
    e.visualDebugLogIsEnabled = d;
    var l = "Array"
      , u = "String"
      , p = "Function"
      , c = "Number"
      , g = Object.prototype.toString
      , f = this;
    e.isA = n,
    e.isFunction = function(t) {
        return f.isA(t, p)
    }
    ,
    e.isString = function(t) {
        return f.isA(t, u)
    }
    ,
    e.isArray = function(t) {
        return f.isA(t, l)
    }
    ,
    e.isNumber = function(t) {
        return f.isA(t, c)
    }
    ,
    e.isObject = function(t) {
        return "object" == typeof t && null !== t
    }
    ,
    e.isOwnProperty = function(t, e) {
        return t.hasOwnProperty ? t.hasOwnProperty(e) : !1
    }
    ,
    e.isUndefined = function(t) {
        return "undefined" == typeof t
    }
    ,
    e.enableDebugLog = function() {
        f.debugLogIsEnabled = !0
    }
    ,
    e.isDebugLogEnabled = function() {
        return f.debugLogIsEnabled
    }
    ,
    e.enableVisualDebugLog = function() {
        f.debugLogIsEnabled = !0,
        f.visualDebugLogIsEnabled = !0
    }
    ;
    var h = "[OpenWrap] : ";
    e.log = function(t) {
        f.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(t) ? console.log((new Date).getTime() + " : " + h + t) : console.log(t))
    }
    ,
    e.getCurrentTimestampInMs = function() {
        var t = new window.Date;
        return t.getTime()
    }
    ,
    e.getCurrentTimestamp = function() {
        var t = new Date;
        return Math.round(t.getTime() / 1e3)
    }
    ;
    var I = (function() {
        var t = 0;
        return function() {
            return t++,
            t
        }
    }
    )();
    e.utilGetIncrementalInteger = I,
    e.getUniqueIdentifierStr = function() {
        return I() + window.Math.random().toString(16).substr(2)
    }
    ,
    e.copyKeyValueObject = function(t, e) {
        if (f.isObject(t) && f.isObject(e)) {
            var i = f;
            f.forEachOnObject(e, (function(n, o) {
                if (e[n] = i.isArray(o) ? o : [o],
                i.isOwnProperty(t, n)) {
                    if (!f.isArray(t[n])) {
                        var r = t[n];
                        t[n] = [r]
                    }
                    t[n].push(o)
                } else
                    t[n] = [o]
            }
            ))
        }
    }
    ,
    e.getIncrementalInteger = (function() {
        var t = 0;
        return function() {
            return t++,
            t
        }
    }
    )(),
    e.generateUUID = function() {
        var t = (new window.Date).getTime()
          , e = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, "")
          , i = e.length
          , n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, (function(n) {
            var o = (t + 16 * Math.random()) % 16 | 0;
            t = Math.floor(t / 16);
            var r;
            switch (n) {
            case "x":
                r = o;
                break;
            case "z":
                r = e[Math.floor(Math.random() * i)];
                break;
            default:
                r = 3 & o | 8
            }
            return r.toString(16)
        }
        ));
        return n
    }
    ;
    var m = "g"
      , w = new RegExp(o.MACROS.WIDTH,m)
      , E = new RegExp(o.MACROS.HEIGHT,m)
      , S = new RegExp(o.MACROS.AD_UNIT_ID,m)
      , T = new RegExp(o.MACROS.AD_UNIT_INDEX,m)
      , A = new RegExp(o.MACROS.INTEGER,m)
      , y = new RegExp(o.MACROS.DIV,m);
    e.generateSlotNamesFromPattern = function(t, e) {
        var i, n, o, r, a = [], s = {};
        if (f.isObject(t) && f.isFunction(t.getSizes) && (n = t.getSizes(),
        o = n.length,
        o > 0))
            for (r = 0; o > r; r++)
                n[r][0] && n[r][1] && (i = e,
                i = i.replace(S, t.getAdUnitID()).replace(w, n[r][0]).replace(E, n[r][1]).replace(T, t.getAdUnitIndex()).replace(A, f.getIncrementalInteger()).replace(y, t.getDivID()),
                f.isOwnProperty(s, i) || (s[i] = "",
                a.push(i)));
        return a
    }
    ,
    e.checkMandatoryParams = function(t, e, i) {
        var n = !1
          , o = !0;
        if (!t || !f.isObject(t) || f.isArray(t))
            return f.log(i + "provided object is invalid."),
            n;
        if (!f.isArray(e))
            return f.log(i + "provided keys must be in an array."),
            n;
        var r = e.length;
        if (0 == r)
            return o;
        for (var a = 0; r > a; a++)
            if (!f.isOwnProperty(t, e[a]))
                return f.log(i + ": " + e[a] + ", mandatory parameter not present."),
                n;
        return o
    }
    ,
    e.forEachGeneratedKey = function(t, e, i, n, s, d, l, u, p, c) {
        var g, h, I, m, w, E = d.length;
        if (E > 0 && l.length > 3)
            for (w = l.indexOf(o.MACROS.WIDTH) >= 0 && l.indexOf(o.MACROS.HEIGHT) >= 0,
            g = 0; E > g; g++) {
                var S = d[g];
                for (I = f.generateSlotNamesFromPattern(S, l),
                m = I.length,
                h = 0; m > h; h++) {
                    var T = I[h]
                      , A = null
                      , y = !1
                      , O = S.getSizes();
                    if (null == u ? y = !0 : (A = u[T],
                    A ? f.checkMandatoryParams(A, s, t) ? y = !0 : f.log(t + ": " + T + o.MESSAGES.M9) : f.log(t + ": " + T + o.MESSAGES.M8)),
                    y) {
                        if (1 == c) {
                            var D = r.createBid(t, T);
                            D.setDefaultBidStatus(1).setReceivedTime(f.getCurrentTimestampInMs()),
                            a.setBidFromBidder(S.getDivID(), D)
                        }
                        p(t, e, i, n, T, w, S, u ? u[T] : null, O[h][0], O[h][1])
                    }
                }
            }
    }
    ,
    e.resizeWindow = function(t, e, i) {
        if (i && e)
            try {
                var n = t.defaultView.frameElement;
                n.width = e,
                n.height = i
            } catch (o) {}
    }
    ,
    e.writeIframe = function(t, e, i, n, o) {
        t.write('<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + i + '" hspace="0" vspace="0" height="' + n + '"' + (o ? ' style="' + o + '"' : "") + ' src="' + e + '"></iframe>')
    }
    ,
    e.displayCreative = function(t, e) {
        f.resizeWindow(t, e.width, e.height),
        e.adHtml ? t.write(e.adHtml) : e.adUrl ? f.writeIframe(t, e.adUrl, e.width, e.height, "") : (f.log("creative details are not found"),
        f.log(e))
    }
    ,
    e.getScreenWidth = function(t) {
        var e = -1;
        return t.innerHeight ? e = t.innerWidth : t.document && t.document.documentElement && t.document.documentElement.clientWidth ? e = t.document.documentElement.clientWidth : t.document.body && (e = t.document.body.clientWidth),
        e
    }
    ,
    e.getScreenHeight = function(t) {
        var e = -1;
        return t.innerHeight ? e = t.innerHeight : t.document && t.document.documentElement && t.document.documentElement.clientHeight ? e = t.document.documentElement.clientHeight : t.document.body && (e = t.document.body.clientHeight),
        e
    }
    ,
    e.forEachOnObject = function(t, e) {
        if (f.isObject(t) && f.isFunction(e))
            for (var i in t)
                f.isOwnProperty(t, i) && e(i, t[i])
    }
    ,
    e.forEachOnArray = function(t, e) {
        if (f.isArray(t) && f.isFunction(e))
            for (var i = 0, n = t.length; n > i; i++)
                e(i, t[i])
    }
    ,
    e.trim = function(t) {
        return f.isString(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : t
    }
    ,
    e.getTopFrameOfSameDomain = function(t) {
        try {
            if (t.parent.document != t.document)
                return f.getTopFrameOfSameDomain(t.parent)
        } catch (e) {}
        return t
    }
    ,
    e.metaInfo = {},
    e.getMetaInfo = function(t) {
        var e, i = {}, n = 512;
        i.pageURL = "",
        i.refURL = "",
        i.protocol = "https://",
        i.secure = 1,
        i.isInIframe = f.isIframe(t);
        try {
            e = f.getTopFrameOfSameDomain(t),
            i.refURL = (e.refurl || e.document.referrer || "").substr(0, n),
            i.pageURL = (e !== window.top && "" != e.document.referrer ? e.document.referrer : e.location.href).substr(0, n),
            i.protocol = (function(t) {
                return "http:" === t.location.protocol ? (i.secure = 0,
                "http://") : (i.secure = 1,
                "https://")
            }
            )(e)
        } catch (o) {}
        return f.metaInfo = i,
        i
    }
    ,
    e.isIframe = function(t) {
        try {
            return t.self !== t.top
        } catch (e) {
            return !1
        }
    }
    ,
    e.findInString = function(t, e) {
        return t.indexOf(e) >= 0
    }
    ,
    e.findQueryParamInURL = function(t, e) {
        return f.isOwnProperty(f.parseQueryParams(t), e)
    }
    ,
    e.parseQueryParams = function(t) {
        var e = window.document.createElement("a");
        e.href = t;
        var i = {};
        if (e.search) {
            var n = e.search.replace("?", "");
            n = n.split("&"),
            f.forEachOnArray(n, (function(t, e) {
                var e = e.split("=")
                  , n = e[0] || ""
                  , o = e[1] || "";
                i[n] = o
            }
            ))
        }
        return i
    }
    ,
    e.addHookOnFunction = function(t, e, i, n) {
        var o = t;
        if (t = e ? t.__proto__ : t,
        f.isObject(t) && f.isFunction(t[i])) {
            var r = t[i];
            t[i] = n(o, r)
        } else
            f.log("in assignNewDefination: oldReference is not a function")
    }
    ,
    e.getBididForPMP = function(t, e) {
        t = t.split(",");
        var i = t.length
          , n = e.length
          , r = ""
          , a = "";
        if (0 == i)
            return this.log("Error: Unable to find bidID as values array is empty."),
            void 0;
        for (var s = 0; n > s; s++) {
            for (var d = 0; i > d; d++)
                if (t[d].indexOf(e[s]) >= 0) {
                    r = t[d];
                    break
                }
            if ("" != r)
                break
        }
        "" == r ? (r = t[0],
        this.log("No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: " + r)) : this.log("Selecting PMP-Deal: " + r);
        var l = r.split(o.COMMON.DEAL_KEY_VALUE_SEPARATOR);
        return 3 == l.length && (a = l[2]),
        a ? a : (this.log("Error: bidID not found in PMP-Deal: " + r),
        void 0)
    }
    ,
    e.createInvisibleIframe = function() {
        var t = window.document.createElement("iframe");
        return t.id = f.getUniqueIdentifierStr(),
        t.height = 0,
        t.width = 0,
        t.border = "0px",
        t.hspace = "0",
        t.vspace = "0",
        t.marginWidth = "0",
        t.marginHeight = "0",
        t.style.border = "0",
        t.scrolling = "no",
        t.frameBorder = "0",
        t.src = "about:self",
        t.style = "display:none",
        t
    }
    ,
    e.addMessageEventListener = function(t, e) {
        return "function" != typeof e ? (f.log("EventHandler should be a function"),
        !1) : (t.addEventListener ? t.addEventListener("message", e, !1) : t.attachEvent("onmessage", e),
        !0)
    }
    ,
    e.safeFrameCommunicationProtocol = function(t) {
        try {
            if (msgData = window.JSON.parse(t.data),
            !msgData.pwt_type)
                return;
            switch (window.parseInt(msgData.pwt_type)) {
            case 1:
                if (window.PWT.isSafeFrame)
                    return;
                var e = a.getBidById(msgData.pwt_bidID);
                if (e) {
                    var i = e.bid
                      , n = i.getAdapterID()
                      , o = e.slotid
                      , r = {
                        pwt_type: 2,
                        pwt_bid: i
                    };
                    f.vLogInfo(o, {
                        type: "disp",
                        adapter: n
                    }),
                    a.executeMonetizationPixel(o, i),
                    t.source.postMessage(window.JSON.stringify(r), msgData.pwt_origin)
                }
                break;
            case 2:
                if (!window.PWT.isSafeFrame)
                    return;
                if (msgData.pwt_bid) {
                    var i = msgData.pwt_bid;
                    if (f.resizeWindow(window.document, i.height, i.width),
                    i.adHtml)
                        try {
                            var s = f.createInvisibleIframe(window.document);
                            if (!s)
                                throw {
                                    message: "Failed to create invisible frame.",
                                    name: ""
                                };
                            if (s.setAttribute("width", i.width),
                            s.setAttribute("height", i.height),
                            s.style = "",
                            window.document.body.appendChild(s),
                            !s.contentWindow)
                                throw {
                                    message: "Unable to access frame window.",
                                    name: ""
                                };
                            var d = s.contentWindow.document;
                            if (!d)
                                throw {
                                    message: "Unable to access frame window document.",
                                    name: ""
                                };
                            var l = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>';
                            l += "<body>",
                            l += "<script>var $sf = window.parent.$sf;</script>",
                            l += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>",
                            l += i.adHtml,
                            l += "</body></html>",
                            d.write(l),
                            d.close()
                        } catch (u) {
                            f.log("Error in rendering creative in safe frame."),
                            f.log(u),
                            f.log("Rendering synchronously."),
                            f.displayCreative(window.document, msgData.pwt_bid)
                        }
                    else
                        i.adUrl ? f.writeIframe(window.document, i.adUrl, i.width, i.height, "") : (f.log("creative details are not found"),
                        f.log(i))
                }
            }
        } catch (u) {}
    }
    ,
    e.addMessageEventListenerForSafeFrame = function(t) {
        f.addMessageEventListener(t, f.safeFrameCommunicationProtocol)
    }
    ,
    e.getElementLocation = function(t) {
        var e, i = 0, n = 0;
        if (f.isFunction(t.getBoundingClientRect))
            e = t.getBoundingClientRect(),
            i = Math.floor(e.left),
            n = Math.floor(e.top);
        else
            for (; t; )
                i += t.offsetLeft,
                n += t.offsetTop,
                t = t.offsetParent;
        return {
            x: i,
            y: n
        }
    }
    ,
    e.createVLogInfoPanel = function(t, e) {
        var i, n, o, r = window.document;
        if (f.visualDebugLogIsEnabled && (i = r.getElementById(t),
        i && e.length && e[0][0] && e[0][1] && (o = t + "-pwtc-info",
        !f.isUndefined(r.getElementById(o))))) {
            var a = f.getElementLocation(i);
            n = r.createElement("div"),
            n.id = o,
            n.style = "position: absolute; /*top: " + a.y + "px;*/ left: " + a.x + "px; width: " + e[0][0] + "px; height: " + e[0][1] + "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;";
            var s = r.createElement("img");
            s.src = f.metaInfo.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png",
            s.style = "cursor:pointer; position: absolute; top: 2px; left: " + (a.x + e[0][0] - 16 - 15) + "px; z-index: 9999998;",
            s.title = "close",
            s.onclick = function() {
                n.style.display = "none"
            }
            ,
            n.appendChild(s),
            n.appendChild(r.createElement("br"));
            for (var d = "Slot: " + t + " | ", l = 0; l < e.length; l++)
                d += (0 != l ? ", " : "") + e[l][0] + "x" + e[l][1];
            n.appendChild(r.createTextNode(d)),
            n.appendChild(r.createElement("br")),
            i.parentNode.insertBefore(n, i)
        }
    }
    ,
    e.realignVLogInfoPanel = function(t) {
        var e, i, n, o = window.document;
        if (f.visualDebugLogIsEnabled && (e = o.getElementById(t),
        e && (n = t + "-pwtc-info",
        i = o.getElementById(n)))) {
            var r = f.getElementLocation(e);
            i.style.visibility = "visible",
            i.style.left = r.x + "px",
            i.style.height = e.clientHeight + "px"
        }
    }
    ,
    e.vLogInfo = function(t, e) {
        var i, n, o = window.document;
        if (f.visualDebugLogIsEnabled) {
            var r = t + "-pwtc-info";
            if (i = o.getElementById(r)) {
                switch (e.type) {
                case "bid":
                    var a = e.latency
                      , s = e.bidDetails;
                    0 > a && (a = 0),
                    n = "Bid: " + e.bidder + ": " + s.getNetEcpm() + "(" + s.getGrossEcpm() + "): " + a + "ms",
                    s.getPostTimeoutStatus() && (n += ": POST-TIMEOUT");
                    break;
                case "win-bid":
                    var s = e.bidDetails;
                    n = "Winning Bid: " + s.getAdapterID() + ": " + s.getNetEcpm();
                    break;
                case "win-bid-fail":
                    n = "There are no bids from PWT";
                    break;
                case "hr":
                    n = "----------------------";
                    break;
                case "disp":
                    n = "Displaying creative from " + e.adapter
                }
                i.appendChild(o.createTextNode(n)),
                i.appendChild(o.createElement("br"))
            }
        }
    }
    ,
    e.getExternalBidderStatus = function(t) {
        var e = !0;
        return f.forEachOnArray(t, (function(t, i) {
            e = window.OWT.externalBidderStatuses[i] ? e && window.OWT.externalBidderStatuses[i].status : e
        }
        )),
        e
    }
    ,
    e.resetExternalBidderStatus = function(t) {
        f.forEachOnArray(t, (function(t, e) {
            f.log("resetExternalBidderStatus: " + e),
            window.OWT.externalBidderStatuses[e] = void 0
        }
        ))
    }
}
), (function(t, e) {
    e.COMMON = {
        BID_PRECISION: 2,
        DEAL_KEY_FIRST_PART: "pwtdeal_",
        DEAL_KEY_VALUE_SEPARATOR: "_-_",
        PREBID_PREFIX: "PB_",
        CONFIG: "config",
        DIV_ID: "divID",
        PARAMS: "params",
        SIZES: "sizes",
        HEIGHT: "height",
        WIDTH: "width",
        SLOTS: "slots",
        KEY_GENERATION_PATTERN_VALUE: "kgpv",
        KEY_VALUE_PAIRS: "kvp",
        IMPRESSION_ID: "iid",
        PARENT_ADAPTER_PREBID: "prebid"
    },
    e.CONFIG = {
        GLOBAL: "global",
        ADAPTERS: "adapters",
        COMMON: "pwt",
        TIMEOUT: "t",
        KEY_GENERATION_PATTERN: "kgp",
        KEY_LOOKUP_MAP: "klm",
        SERVER_SIDE_KEY: "sk",
        PUBLISHER_ID: "pubid",
        PROFILE_ID: "pid",
        PROFILE_VERSION_ID: "pdvid",
        LOGGER_URL: "dataURL",
        TRACKER_URL: "winURL",
        REV_SHARE: "rev_share",
        THROTTLE: "throttle",
        BID_PASS_THROUGH: "pt",
        GLOBAL_KEY_VALUE: "gkv",
        MASK_BIDS: "maksBids",
        META_DATA_PATTERN: "metaDataPattern",
        SEND_ALL_BIDS: "sendAllBids"
    },
    e.METADATA_MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        PARTNER: "_P_",
        GROSS_ECPM: "_GE_",
        NET_ECPM: "_NE_",
        BID_COUNT: "_BC_",
        PARTNER_COUNT: "_PC_"
    },
    e.MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        AD_UNIT_ID: "_AU_",
        AD_UNIT_INDEX: "_AUI_",
        INTEGER: "_I_",
        DIV: "_DIV_"
    },
    e.SLOT_STATUS = {
        CREATED: 0,
        PARTNERS_CALLED: 1,
        TARGETING_ADDED: 2,
        DISPLAYED: 3
    },
    e.WRAPPER_TARGETING_KEYS = {
        BID_ID: "pwtsid",
        BID_STATUS: "pwtbst",
        BID_ECPM: "pwtecp",
        BID_DEAL_ID: "pwtdid",
        BID_ADAPTER_ID: "pwtpid",
        BID_SIZE: "pwtsz",
        PUBLISHER_ID: "pwtpubid",
        PROFILE_ID: "pwtprofid",
        PROFILE_VERSION_ID: "pwtverid",
        META_DATA: "pwtm"
    },
    e.IGNORE_PREBID_KEYS = {
        hb_bidder: 1,
        hb_adid: 1,
        hb_pb: 1,
        hb_size: 1,
        hb_deal: 1
    },
    e.LOGGER_PIXEL_PARAMS = {
        TIMESTAMP: "tst",
        PAGE_URL: "purl",
        TIMEOUT: "to"
    },
    e.MESSAGES = {
        M1: ": In fetchbids.",
        M2: ": Throttled.",
        M3: ": adapter must implement the fetchBids() function.",
        M4: "BidManager: entry ",
        M5: ": Callback.",
        M6: "bidAlreadExists : ",
        M7: ": Exiting from fetchBids.",
        M8: ". Config not found, ignored.",
        M9: ". Config ignored.",
        M10: "Bid is rejected as ecpm is NULL.",
        M11: "Bid is rejected as ecpm is NaN: ",
        M12: "Existing bid ecpm: ",
        M13: ", is lower than new bid ecpm ",
        M14: ", so we are replacing bid.",
        M15: ", is greater than new bid ecpm ",
        M16: ", so we are not replacing bid.",
        M17: "Post timeout bid, ignored.",
        M18: "Bid is selected.",
        M19: ": Found winning adapterID: ",
        M20: "Bid is rejected as ecpm is empty string.",
        M21: ": error in respose handler.",
        M22: "Bid is rejected as ecpm is <= 0.",
        M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner.",
        M24: "Passsed argument is not a bidAdaptor",
        M25: "Bid details not found for bidID: "
    }
}
), (function(t, e, i) {
    function n(t, e) {
        this.adapterID = t,
        this.kgpv = e,
        this.bidID = a.getUniqueIdentifierStr(),
        this.grossEcpm = 0,
        this.netEcpm = 0,
        this.defaultBid = 0,
        this.adHtml = "",
        this.adUrl = "",
        this.height = 0,
        this.width = 0,
        this.creativeID = "",
        this.keyValuePairs = {},
        this.isPostTimeout = !1,
        this.receivedTime = 0,
        this.dealID = "",
        this.dealChannel = "",
        this.isWinningBid = !1,
        this.status = 0
    }
    var o = i(4)
      , r = i(2)
      , a = i(1);
    n.prototype.getAdapterID = function() {
        return this.adapterID
    }
    ,
    n.prototype.getBidID = function() {
        return this.bidID
    }
    ,
    n.prototype.setGrossEcpm = function(t) {
        return null === t ? (a.log(r.MESSAGES.M10),
        a.log(this),
        this) : a.isString(t) && (t = t.replace(/\s/g, ""),
        0 === t.length) ? (a.log(r.MESSAGES.M20),
        a.log(this),
        this) : window.isNaN(t) ? (a.log(r.MESSAGES.M11 + t),
        a.log(this),
        this) : (t = window.parseFloat(t.toFixed(r.COMMON.BID_PRECISION)),
        this.grossEcpm = t,
        this.netEcpm = window.parseFloat((this.grossEcpm * o.getAdapterRevShare(this.getAdapterID())).toFixed(r.COMMON.BID_PRECISION)),
        this)
    }
    ,
    n.prototype.getGrossEcpm = function() {
        return this.grossEcpm
    }
    ,
    n.prototype.getNetEcpm = function() {
        return this.netEcpm
    }
    ,
    n.prototype.setDefaultBidStatus = function(t) {
        return this.defaultBid = t,
        this
    }
    ,
    n.prototype.getDefaultBidStatus = function() {
        return this.defaultBid
    }
    ,
    n.prototype.setAdHtml = function(t) {
        return this.adHtml = t,
        this
    }
    ,
    n.prototype.getAdHtml = function() {
        return this.adHtml
    }
    ,
    n.prototype.setAdUrl = function(t) {
        return this.adUrl = t,
        this
    }
    ,
    n.prototype.getAdUrl = function() {
        return this.adUrl
    }
    ,
    n.prototype.setHeight = function(t) {
        return this.height = t,
        this
    }
    ,
    n.prototype.getHeight = function() {
        return this.height
    }
    ,
    n.prototype.setWidth = function(t) {
        return this.width = t,
        this
    }
    ,
    n.prototype.getWidth = function() {
        return this.width
    }
    ,
    n.prototype.getKGPV = function() {
        return this.kgpv
    }
    ,
    n.prototype.setKeyValuePair = function(t, e) {
        return this.keyValuePairs[t.substr(0, 20)] = e,
        this
    }
    ,
    n.prototype.getKeyValuePairs = function() {
        return this.keyValuePairs
    }
    ,
    n.prototype.setPostTimeoutStatus = function() {
        return this.isPostTimeout = !0,
        this
    }
    ,
    n.prototype.getPostTimeoutStatus = function() {
        return this.isPostTimeout
    }
    ,
    n.prototype.setReceivedTime = function(t) {
        return this.receivedTime = t,
        this
    }
    ,
    n.prototype.getReceivedTime = function() {
        return this.receivedTime
    }
    ,
    n.prototype.setDealID = function(t) {
        return t && (this.dealID = t,
        this.dealChannel = this.dealChannel || "PMP",
        this.setKeyValuePair(r.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    n.prototype.getDealID = function() {
        return this.dealID
    }
    ,
    n.prototype.setDealChannel = function(t) {
        return this.dealID && t && (this.dealChannel = t,
        this.setKeyValuePair(r.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    n.prototype.getDealChannel = function() {
        return this.dealChannel
    }
    ,
    n.prototype.setWinningBidStatus = function() {
        return this.isWinningBid = !0,
        this
    }
    ,
    n.prototype.getWinningBidStatus = function() {
        return this.isWinningBid
    }
    ,
    n.prototype.setStatus = function(t) {
        return this.status = t,
        this
    }
    ,
    n.prototype.getStatus = function() {
        return this.status
    }
    ,
    n.prototype.setSendAllBidsKeys = function() {
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_ID + "_" + this.adapterID, this.bidID),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_STATUS + "_" + this.adapterID, this.getNetEcpm() > 0 ? 1 : 0),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_ECPM + "_" + this.adapterID, this.getNetEcpm().toFixed(r.COMMON.BID_PRECISION)),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_SIZE + "_" + this.adapterID, this.width + "x" + this.height)
    }
    ,
    t.exports.Bid = n,
    e.createBid = function(t, e) {
        return new n(t,e)
    }
}
), (function(t, e, i) {
    function n() {
        var t = r.COMMON.PARENT_ADAPTER_PREBID;
        if (!a.isOwnProperty(o.adapters, t)) {
            var e = {};
            e[r.CONFIG.REV_SHARE] = "0.0",
            e[r.CONFIG.THROTTLE] = "100",
            e[r.CONFIG.KEY_GENERATION_PATTERN] = "_DIV_",
            e[r.CONFIG.KEY_LOOKUP_MAP] = {},
            o.adapters[t] = e
        }
    }
    var o = i(5)
      , r = i(2)
      , a = i(1)
      , s = null;
    s = this,
    e.getPublisherId = function() {
        return a.trim(o.pwt.pubid) || "0"
    }
    ,
    e.getMataDataPattern = function() {
        return a.isString(o[r.CONFIG.COMMON][r.CONFIG.META_DATA_PATTERN]) ? o[r.CONFIG.COMMON][r.CONFIG.META_DATA_PATTERN] : null
    }
    ,
    e.getSendAllBidsStatus = function() {
        return window.parseInt(o[r.CONFIG.COMMON][r.CONFIG.SEND_ALL_BIDS]) || 0
    }
    ,
    e.getTimeout = function() {
        return window.parseInt(o.pwt.t) || 1e3
    }
    ,
    e.getAdapterRevShare = function(t) {
        var e = o.adapters;
        return a.isOwnProperty(e[t], r.CONFIG.REV_SHARE) ? 1 - window.parseFloat(e[t][r.CONFIG.REV_SHARE]) / 100 : 1
    }
    ,
    e.getAdapterThrottle = function(t) {
        var e = o.adapters;
        return a.isOwnProperty(e[t], r.CONFIG.THROTTLE) ? 100 - window.parseFloat(e[t][r.CONFIG.THROTTLE]) : 0
    }
    ,
    e.getAdapterMaskBidsStatus = function(t) {
        var e = o.adapters
          , i = {
            audienceNetwork: 1,
            rubicon: 1
        };
        return a.isOwnProperty(i, t) ? i[t] : a.isOwnProperty(e[t], r.CONFIG.MASK_BIDS) ? window.parseInt(e[t][r.CONFIG.MASK_BIDS]) || 0 : 0
    }
    ,
    e.getBidPassThroughStatus = function(t) {
        var e = o.adapters;
        return a.isOwnProperty(e[t], r.CONFIG.BID_PASS_THROUGH) ? window.parseInt(e[t][r.CONFIG.BID_PASS_THROUGH]) : 0
    }
    ,
    e.getProfileID = function() {
        return a.trim(o.pwt[r.CONFIG.PROFILE_ID]) || "0"
    }
    ,
    e.getProfileDisplayVersionID = function() {
        return a.trim(o.pwt[r.CONFIG.PROFILE_VERSION_ID]) || "0"
    }
    ,
    e.getAnalyticsPixelURL = function() {
        return o.pwt[r.CONFIG.LOGGER_URL] || !1
    }
    ,
    e.getMonetizationPixelURL = function() {
        return o.pwt[r.CONFIG.TRACKER_URL] || !1
    }
    ,
    e.forEachAdapter = function(t) {
        a.forEachOnObject(o.adapters, t)
    }
    ,
    e.addPrebidAdapter = n,
    e.initConfig = function() {
        s.addPrebidAdapter();
        var t = {};
        a.forEachOnObject(r.CONFIG, (function(e, i) {
            t[i] = ""
        }
        )),
        a.forEachOnObject(o.adapters, (function(e, i) {
            var n = {};
            a.forEachOnObject(i, (function(e, i) {
                a.isOwnProperty(t, e) || (n[e] = i)
            }
            )),
            a.forEachOnObject(i[r.CONFIG.KEY_LOOKUP_MAP], (function(t, e) {
                a.forEachOnObject(n, (function(t, i) {
                    e[t] = i
                }
                ))
            }
            ))
        }
        ))
    }
}
), (function(t, e) {
    e.pwt = {
        t: "1000",
        pid: "498",
        gcv: "38",
        pdvid: "6",
        pubid: "156496",
        dataURL: "t.pubmatic.com/wl?",
        winURL: "t.pubmatic.com/wt?",
        metaDataPattern: 0,
        sendAllBids: "0"
    },
    e.adapters = {
        pubmatic: {
            publisherId: "156496",
            rev_share: "13.0",
            timeout: "1000",
            throttle: "100",
            pt: 0,
            kgp: "_DIV_@_W_x_H_",
            sk: "true"
        },
        openx: {
            delDomain: "demandmedia-d.openx.net",
            rev_share: "0.0",
            timeout: "1000",
            throttle: "100",
            pt: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "horizontal1-1@728x90": {
                    unit: "539512434"
                },
                "horizontal1-1@970x250": {
                    unit: "539512435"
                },
                "horizontal2-1@728x90": {
                    unit: "539512434"
                },
                "horizontal2-1@970x250": {
                    unit: "539512435"
                },
                "horizontal3-1@728x90": {
                    unit: "539512434"
                },
                "horizontal3-1@970x250": {
                    unit: "539512435"
                },
                "horizontal4-1@728x90": {
                    unit: "539512434"
                },
                "horizontal4-1@970x250": {
                    unit: "539512435"
                },
                "horizontal5-1@728x90": {
                    unit: "539512434"
                },
                "horizontal5-1@970x250": {
                    unit: "539512435"
                },
                "rightrail1-1@300x250": {
                    unit: "539512417"
                },
                "rightrail1-1@300x600": {
                    unit: "539512420"
                },
                "rightrail1-2@300x250": {
                    unit: "539512419"
                },
                "rightrail2-1@300x250": {
                    unit: "539512417"
                },
                "rightrail2-1@300x600": {
                    unit: "539512420"
                },
                "rightrail2-2@300x250": {
                    unit: "539512419"
                },
                "rightrail3-1@300x250": {
                    unit: "539512417"
                },
                "rightrail3-1@300x600": {
                    unit: "539512420"
                },
                "rightrail3-2@300x250": {
                    unit: "539512419"
                },
                "rightrail4-1@300x250": {
                    unit: "539512417"
                },
                "rightrail4-1@300x600": {
                    unit: "539512420"
                },
                "rightrail4-2@300x250": {
                    unit: "539512419"
                },
                "rightrail5-1@300x250": {
                    unit: "539512417"
                },
                "rightrail5-1@300x600": {
                    unit: "539512420"
                },
                "rightrail5-2@300x250": {
                    unit: "539512419"
                },
                "slot1-1@300x250": {
                    unit: "539512436"
                },
                "slot1-2@300x250": {
                    unit: "539512437"
                },
                "slot1-3@300x250": {
                    unit: "539512510"
                },
                "slot1-4@300x250": {
                    unit: "539512560"
                },
                "slot2-1@300x250": {
                    unit: "539512436"
                },
                "slot2-2@300x250": {
                    unit: "539512437"
                },
                "slot2-3@300x250": {
                    unit: "539512510"
                },
                "slot2-4@300x250": {
                    unit: "539512560"
                },
                "slot3-1@300x250": {
                    unit: "539512436"
                },
                "slot3-2@300x250": {
                    unit: "539512437"
                },
                "slot3-3@300x250": {
                    unit: "539512510"
                },
                "slot3-4@300x250": {
                    unit: "539512560"
                },
                "slot4-1@300x250": {
                    unit: "539512436"
                },
                "slot4-2@300x250": {
                    unit: "539512437"
                },
                "slot4-3@300x250": {
                    unit: "539512510"
                },
                "slot4-4@300x250": {
                    unit: "539512560"
                },
                "slot5-1@300x250": {
                    unit: "539512436"
                },
                "slot5-2@300x250": {
                    unit: "539512437"
                },
                "slot5-3@300x250": {
                    unit: "539512510"
                },
                "slot5-4@300x250": {
                    unit: "539512560"
                }
            }
        },
        audienceNetwork: {
            rev_share: "0.0",
            timeout: "1000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "slot1-1@300x250": {
                    placementId: "1169695949832996_1169698349832756"
                },
                "slot1-2@300x250": {
                    placementId: "1169695949832996_1169698379832753"
                },
                "slot1-3@300x250": {
                    placementId: "1169695949832996_1169699073166017"
                },
                "slot1-4@300x250": {
                    placementId: "1169695949832996_1169699169832674"
                },
                "slot2-1@300x250": {
                    placementId: "1169695949832996_1169698349832756"
                },
                "slot2-2@300x250": {
                    placementId: "1169695949832996_1169698379832753"
                },
                "slot2-3@300x250": {
                    placementId: "1169695949832996_1169699073166017"
                },
                "slot2-4@300x250": {
                    placementId: "1169695949832996_1169699169832674"
                },
                "slot3-1@300x250": {
                    placementId: "1169695949832996_1169698349832756"
                },
                "slot3-2@300x250": {
                    placementId: "1169695949832996_1169698379832753"
                },
                "slot3-3@300x250": {
                    placementId: "1169695949832996_1169699073166017"
                },
                "slot3-4@300x250": {
                    placementId: "1169695949832996_1169699169832674"
                },
                "slot4-1@300x250": {
                    placementId: "1169695949832996_1169698349832756"
                },
                "slot4-2@300x250": {
                    placementId: "1169695949832996_1169698379832753"
                },
                "slot4-3@300x250": {
                    placementId: "1169695949832996_1169699073166017"
                },
                "slot4-4@300x250": {
                    placementId: "1169695949832996_1169699169832674"
                },
                "slot5-1@300x250": {
                    placementId: "1169695949832996_1169698349832756"
                },
                "slot5-2@300x250": {
                    placementId: "1169695949832996_1169698379832753"
                },
                "slot5-3@300x250": {
                    placementId: "1169695949832996_1169699073166017"
                },
                "slot5-4@300x250": {
                    placementId: "1169695949832996_1169699169832674"
                }
            }
        },
        rubicon: {
            accountId: "8737",
            rev_share: "0.0",
            timeout: "1000",
            throttle: "100",
            pt: "0",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "horizontal1-1@728x90": {
                    zoneId: "789774",
                    siteId: "164724",
                    position: "2"
                },
                "horizontal1-1@970x250": {
                    zoneId: "789776",
                    siteId: "164724",
                    position: "57"
                },
                "horizontal2-1@728x90": {
                    zoneId: "789774",
                    siteId: "164724",
                    position: "2"
                },
                "horizontal2-1@970x250": {
                    zoneId: "789776",
                    siteId: "164724",
                    position: "57"
                },
                "horizontal3-1@728x90": {
                    zoneId: "789774",
                    siteId: "164724",
                    position: "2"
                },
                "horizontal3-1@970x250": {
                    zoneId: "789776",
                    siteId: "164724",
                    position: "57"
                },
                "horizontal4-1@728x90": {
                    zoneId: "789774",
                    siteId: "164724",
                    position: "2"
                },
                "horizontal4-1@970x250": {
                    zoneId: "789776",
                    siteId: "164724",
                    position: "57"
                },
                "horizontal5-1@728x90": {
                    zoneId: "789774",
                    siteId: "164724",
                    position: "2"
                },
                "horizontal5-1@970x250": {
                    zoneId: "789776",
                    siteId: "164724",
                    position: "57"
                },
                "rightrail1-1@300x250": {
                    zoneId: "789768",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail1-1@300x600": {
                    zoneId: "789772",
                    siteId: "164724",
                    position: "10"
                },
                "rightrail1-2@300x250": {
                    zoneId: "789770",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail2-1@300x250": {
                    zoneId: "789768",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail2-1@300x600": {
                    zoneId: "789772",
                    siteId: "164724",
                    position: "10"
                },
                "rightrail2-2@300x250": {
                    zoneId: "789770",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail3-1@300x250": {
                    zoneId: "789768",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail3-1@300x600": {
                    zoneId: "789772",
                    siteId: "164724",
                    position: "10"
                },
                "rightrail3-2@300x250": {
                    zoneId: "789770",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail4-1@300x250": {
                    zoneId: "789768",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail4-1@300x600": {
                    zoneId: "789772",
                    siteId: "164724",
                    position: "10"
                },
                "rightrail4-2@300x250": {
                    zoneId: "789770",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail5-1@300x250": {
                    zoneId: "789768",
                    siteId: "164724",
                    position: "15"
                },
                "rightrail5-1@300x600": {
                    zoneId: "789772",
                    siteId: "164724",
                    position: "10"
                },
                "rightrail5-2@300x250": {
                    zoneId: "789770",
                    siteId: "164724",
                    position: "15"
                },
                "slot1-1@300x250": {
                    zoneId: "789778",
                    siteId: "164726",
                    position: "15"
                },
                "slot1-2@300x250": {
                    zoneId: "789780",
                    siteId: "164726",
                    position: "15"
                },
                "slot1-3@300x250": {
                    zoneId: "789782",
                    siteId: "164726",
                    position: "15"
                },
                "slot1-4@300x250": {
                    zoneId: "789784",
                    siteId: "164726",
                    position: "15"
                },
                "slot2-1@300x250": {
                    zoneId: "789778",
                    siteId: "164726",
                    position: "15"
                },
                "slot2-2@300x250": {
                    zoneId: "789780",
                    siteId: "164726",
                    position: "15"
                },
                "slot2-3@300x250": {
                    zoneId: "789782",
                    siteId: "164726",
                    position: "15"
                },
                "slot2-4@300x250": {
                    zoneId: "789784",
                    siteId: "164726",
                    position: "15"
                },
                "slot3-1@300x250": {
                    zoneId: "789778",
                    siteId: "164726",
                    position: "15"
                },
                "slot3-2@300x250": {
                    zoneId: "789780",
                    siteId: "164726",
                    position: "15"
                },
                "slot3-3@300x250": {
                    zoneId: "789782",
                    siteId: "164726",
                    position: "15"
                },
                "slot3-4@300x250": {
                    zoneId: "789784",
                    siteId: "164726",
                    position: "15"
                },
                "slot4-1@300x250": {
                    zoneId: "789778",
                    siteId: "164726",
                    position: "15"
                },
                "slot4-2@300x250": {
                    zoneId: "789780",
                    siteId: "164726",
                    position: "15"
                },
                "slot4-3@300x250": {
                    zoneId: "789782",
                    siteId: "164726",
                    position: "15"
                },
                "slot4-4@300x250": {
                    zoneId: "789784",
                    siteId: "164726",
                    position: "15"
                },
                "slot5-1@300x250": {
                    zoneId: "789778",
                    siteId: "164726",
                    position: "15"
                },
                "slot5-2@300x250": {
                    zoneId: "789780",
                    siteId: "164726",
                    position: "15"
                },
                "slot5-3@300x250": {
                    zoneId: "789782",
                    siteId: "164726",
                    position: "15"
                },
                "slot5-4@300x250": {
                    zoneId: "789784",
                    siteId: "164726",
                    position: "15"
                }
            }
        },
        appnexus: {
            rev_share: "0.0",
            timeout: "1000",
            throttle: "100",
            pt: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "horizontal1-1@728x90": {
                    placementId: "12506078"
                },
                "horizontal1-1@970x250": {
                    placementId: "12506079"
                },
                "horizontal2-1@728x90": {
                    placementId: "12506078"
                },
                "horizontal2-1@970x250": {
                    placementId: "12506079"
                },
                "horizontal3-1@728x90": {
                    placementId: "12506078"
                },
                "horizontal3-1@970x250": {
                    placementId: "12506079"
                },
                "horizontal4-1@728x90": {
                    placementId: "12506078"
                },
                "horizontal4-1@970x250": {
                    placementId: "12506079"
                },
                "horizontal5-1@728x90": {
                    placementId: "12506078"
                },
                "horizontal5-1@970x250": {
                    placementId: "12506079"
                },
                "rightrail1-1@300x250": {
                    placementId: "12506073"
                },
                "rightrail1-1@300x600": {
                    placementId: "12506076"
                },
                "rightrail1-2@300x250": {
                    placementId: "12506077"
                },
                "rightrail2-1@300x250": {
                    placementId: "12506073"
                },
                "rightrail2-1@300x600": {
                    placementId: "12506076"
                },
                "rightrail2-2@300x250": {
                    placementId: "12506077"
                },
                "rightrail3-1@300x250": {
                    placementId: "12506073"
                },
                "rightrail3-1@300x600": {
                    placementId: "12506076"
                },
                "rightrail3-2@300x250": {
                    placementId: "12506077"
                },
                "rightrail4-1@300x250": {
                    placementId: "12506073"
                },
                "rightrail4-1@300x600": {
                    placementId: "12506076"
                },
                "rightrail4-2@300x250": {
                    placementId: "12506077"
                },
                "rightrail5-1@300x250": {
                    placementId: "12506073"
                },
                "rightrail5-1@300x600": {
                    placementId: "12506076"
                },
                "rightrail5-2@300x250": {
                    placementId: "12506077"
                },
                "slot1-1@300x250": {
                    placementId: "12506081"
                },
                "slot1-2@300x250": {
                    placementId: "12506082"
                },
                "slot1-3@300x250": {
                    placementId: "12506084"
                },
                "slot1-4@300x250": {
                    placementId: "12506085"
                },
                "slot2-1@300x250": {
                    placementId: "12506081"
                },
                "slot2-2@300x250": {
                    placementId: "12506082"
                },
                "slot2-3@300x250": {
                    placementId: "12506084"
                },
                "slot2-4@300x250": {
                    placementId: "12506085"
                },
                "slot3-1@300x250": {
                    placementId: "12506081"
                },
                "slot3-2@300x250": {
                    placementId: "12506082"
                },
                "slot3-3@300x250": {
                    placementId: "12506084"
                },
                "slot3-4@300x250": {
                    placementId: "12506085"
                },
                "slot4-1@300x250": {
                    placementId: "12506081"
                },
                "slot4-2@300x250": {
                    placementId: "12506082"
                },
                "slot4-3@300x250": {
                    placementId: "12506084"
                },
                "slot4-4@300x250": {
                    placementId: "12506085"
                },
                "slot5-1@300x250": {
                    placementId: "12506081"
                },
                "slot5-2@300x250": {
                    placementId: "12506082"
                },
                "slot5-3@300x250": {
                    placementId: "12506084"
                },
                "slot5-4@300x250": {
                    placementId: "12506085"
                }
            }
        },
        aol: {
            network: "9836.1",
            server: "adserver-us.adtech.advertising.com",
            rev_share: "0.0",
            timeout: "1000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "horizontal1-1@728x90": {
                    placement: "4731997"
                },
                "horizontal1-1@970x250": {
                    placement: "4731998"
                },
                "horizontal2-1@728x90": {
                    placement: "4731997"
                },
                "horizontal2-1@970x250": {
                    placement: "4731998"
                },
                "horizontal3-1@728x90": {
                    placement: "4731997"
                },
                "horizontal3-1@970x250": {
                    placement: "4731998"
                },
                "horizontal4-1@728x90": {
                    placement: "4731997"
                },
                "horizontal4-1@970x250": {
                    placement: "4731998"
                },
                "horizontal5-1@728x90": {
                    placement: "4731997"
                },
                "horizontal5-1@970x250": {
                    placement: "4731998"
                },
                "rightrail1-1@300x250": {
                    placement: "4731999"
                },
                "rightrail1-1@300x600": {
                    placement: "4732000"
                },
                "rightrail1-2@300x250": {
                    placement: "4732001"
                },
                "rightrail2-1@300x250": {
                    placement: "4731999"
                },
                "rightrail2-1@300x600": {
                    placement: "4732000"
                },
                "rightrail2-2@300x250": {
                    placement: "4732001"
                },
                "rightrail3-1@300x250": {
                    placement: "4731999"
                },
                "rightrail3-1@300x600": {
                    placement: "4732000"
                },
                "rightrail3-2@300x250": {
                    placement: "4732001"
                },
                "rightrail4-1@300x250": {
                    placement: "4731999"
                },
                "rightrail4-1@300x600": {
                    placement: "4732000"
                },
                "rightrail4-2@300x250": {
                    placement: "4732001"
                },
                "rightrail5-1@300x250": {
                    placement: "4731999"
                },
                "rightrail5-1@300x600": {
                    placement: "4732000"
                },
                "rightrail5-2@300x250": {
                    placement: "4732001"
                },
                "slot1-1@300x250": {
                    placement: "4732003"
                },
                "slot1-2@300x250": {
                    placement: "4732006"
                },
                "slot1-3@300x250": {
                    placement: "4732004"
                },
                "slot1-4@300x250": {
                    placement: "4732005"
                },
                "slot2-1@300x250": {
                    placement: "4732003"
                },
                "slot2-2@300x250": {
                    placement: "4732006"
                },
                "slot2-3@300x250": {
                    placement: "4732004"
                },
                "slot2-4@300x250": {
                    placement: "4732005"
                },
                "slot3-1@300x250": {
                    placement: "4732003"
                },
                "slot3-2@300x250": {
                    placement: "4732006"
                },
                "slot3-3@300x250": {
                    placement: "4732004"
                },
                "slot3-4@300x250": {
                    placement: "4732005"
                },
                "slot4-1@300x250": {
                    placement: "4732003"
                },
                "slot4-2@300x250": {
                    placement: "4732006"
                },
                "slot4-3@300x250": {
                    placement: "4732004"
                },
                "slot4-4@300x250": {
                    placement: "4732005"
                },
                "slot5-1@300x250": {
                    placement: "4732003"
                },
                "slot5-2@300x250": {
                    placement: "4732006"
                },
                "slot5-3@300x250": {
                    placement: "4732004"
                },
                "slot5-4@300x250": {
                    placement: "4732005"
                }
            }
        }
    }
}
), (function(t, e, i) {
    function n(t) {
        c.isOwnProperty(window.PWT.bidMap, t) || (window.PWT.bidMap[t] = g.createBMEntry(t))
    }
    function o(t, e, i, n) {
        window.PWT.bidMap[t].setNewBid(e, i),
        window.PWT.bidIdMap[i.getBidID()] = {
            s: t,
            a: e
        },
        0 === i.getDefaultBidStatus() && c.vLogInfo(t, {
            type: "bid",
            bidder: e + (0 !== u.getBidPassThroughStatus(e) ? "(Passthrough)" : ""),
            bidDetails: i,
            latency: n
        })
    }
    function r(t, e, i) {
        var n = ""
          , o = 0
          , r = 0
          , s = p.METADATA_MACROS
          , d = "g";
        c.forEachOnObject(e.adapters, (function(e, i) {
            "" != i.getLastBidID() && (r++,
            c.forEachOnObject(i.bids, (function(e, i) {
                1 != i.getDefaultBidStatus() && 1 != i.getPostTimeoutStatus() && (o++,
                n += a(t, i))
            }
            )))
        }
        )),
        0 == n.length && (n = t),
        n = n.replace(new RegExp(s.BID_COUNT,d), o),
        n = n.replace(new RegExp(s.PARTNER_COUNT,d), r),
        i[p.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(n)
    }
    function a(t, e) {
        var i = p.METADATA_MACROS
          , n = "g";
        return t.replace(new RegExp(i.PARTNER,n), e.getAdapterID()).replace(new RegExp(i.WIDTH,n), e.getWidth()).replace(new RegExp(i.HEIGHT,n), e.getHeight()).replace(new RegExp(i.GROSS_ECPM,n), e.getGrossEcpm()).replace(new RegExp(i.NET_ECPM,n), e.getNetEcpm())
    }
    function s(t) {
        var e = null
          , i = {};
        return c.forEachOnObject(t.adapters, (function(t, n) {
            var o = f.auctionBidsCallBack(t, n, i, e);
            e = o.winningBid,
            i = o.keyValuePairs
        }
        )),
        null !== u.getMataDataPattern() && r(u.getMataDataPattern(), t, i),
        {
            wb: e,
            kvp: i
        }
    }
    function d(t, e, i, n) {
        return "" != e.getLastBidID() ? (c.forEachOnObject(e.bids, (function(e, o) {
            return o.getPostTimeoutStatus() === !0 ? {
                winningBid: n,
                keyValuePairs: i
            } : (1 !== o.getDefaultBidStatus() && 1 == u.getSendAllBidsStatus() && o.setSendAllBidsKeys(),
            0 === u.getBidPassThroughStatus(t) && c.copyKeyValueObject(i, o.getKeyValuePairs()),
            0 !== u.getBidPassThroughStatus(t) ? (c.copyKeyValueObject(i, o.getKeyValuePairs()),
            {
                winningBid: n,
                keyValuePairs: i
            }) : (null == n ? n = o : n.getNetEcpm() < o.getNetEcpm() && (n = o),
            void 0))
        }
        )),
        {
            winningBid: n,
            keyValuePairs: i
        }) : {
            winningBid: n,
            keyValuePairs: i
        }
    }
    function l(t, e, i) {
        var n = e.getCreationTime();
        if (e.getAnalyticEnabledStatus() && !e.getExpiredStatus()) {
            var o = {
                sn: t,
                sz: e.getSizes(),
                ps: []
            };
            e.setExpired();
            var r = e.getImpressionID();
            i[r] = i[r] || [],
            c.forEachOnObject(e.adapters, (function(t, e) {
                1 != u.getBidPassThroughStatus(t) && c.forEachOnObject(e.bids, (function(e, i) {
                    if (1 != u.getAdapterMaskBidsStatus(t) || i.getWinningBidStatus() !== !1) {
                        var r = i.getReceivedTime();
                        o.ps.push({
                            pn: t,
                            bidid: e,
                            db: i.getDefaultBidStatus(),
                            kgpv: i.getKGPV(),
                            psz: i.getWidth() + "x" + i.getHeight(),
                            eg: i.getGrossEcpm(),
                            en: i.getNetEcpm(),
                            di: i.getDealID(),
                            dc: i.getDealChannel(),
                            l1: r - n,
                            l2: 0,
                            t: i.getPostTimeoutStatus() === !1 ? 0 : 1,
                            wb: i.getWinningBidStatus() === !0 ? 1 : 0
                        })
                    }
                }
                ))
            }
            )),
            i[r].push(o)
        }
    }
    var u = i(4)
      , p = i(2)
      , c = i(1)
      , g = i(7)
      , f = this;
    e.createBidEntry = n,
    e.setSizes = function(t, e) {
        f.createBidEntry(t),
        window.PWT.bidMap[t].setSizes(e)
    }
    ,
    e.setCallInitTime = function(t, e) {
        f.createBidEntry(t),
        window.PWT.bidMap[t].setAdapterEntry(e)
    }
    ,
    e.setBidFromBidder = function(t, e) {
        var i = e.getAdapterID()
          , n = (e.getBidID(),
        window.PWT.bidMap[t]);
        if (!c.isOwnProperty(window.PWT.bidMap, t))
            return c.log("BidManager is not expecting bid for " + t + ", from " + i),
            void 0;
        var o = n.getCreationTime() + u.getTimeout() < e.getReceivedTime() ? !0 : !1
          , r = e.getReceivedTime() - n.getCreationTime();
        f.createBidEntry(t),
        c.log("BdManagerSetBid: divID: " + t + ", bidderID: " + i + ", ecpm: " + e.getGrossEcpm() + ", size: " + e.getWidth() + "x" + e.getHeight() + ", postTimeout: " + o),
        o === !0 && e.setPostTimeoutStatus();
        var a = n.getLastBidIDForAdapter(i);
        if ("" != a) {
            var s = n.getBid(i, a)
              , d = 1 === s.getDefaultBidStatus();
            d || !o ? (d && c.log(p.MESSAGES.M23),
            d || s.getNetEcpm() < e.getNetEcpm() ? (c.log(p.MESSAGES.M12 + s.getNetEcpm() + p.MESSAGES.M13 + e.getNetEcpm() + p.MESSAGES.M14),
            f.storeBidInBidMap(t, i, e, r)) : c.log(p.MESSAGES.M12 + s.getNetEcpm() + p.MESSAGES.M15 + e.getNetEcpm() + p.MESSAGES.M16)) : c.log(p.MESSAGES.M17)
        } else
            c.log(p.MESSAGES.M18),
            f.storeBidInBidMap(t, i, e, r)
    }
    ,
    e.storeBidInBidMap = o,
    e.resetBid = function(t, e) {
        c.vLogInfo(t, {
            type: "hr"
        }),
        delete window.PWT.bidMap[t],
        f.createBidEntry(t),
        window.PWT.bidMap[t].setImpressionID(e)
    }
    ,
    e.createMetaDataKey = r,
    e.replaceMetaDataMacros = a,
    e.auctionBids = s,
    e.auctionBidsCallBack = d,
    e.getBid = function(t) {
        var e = null
          , i = null;
        if (c.isOwnProperty(window.PWT.bidMap, t)) {
            var n = f.auctionBids(window.PWT.bidMap[t]);
            e = n.wb,
            i = n.kvp,
            window.PWT.bidMap[t].setAnalyticEnabled(),
            e && e.getNetEcpm() > 0 ? (e.setStatus(1),
            e.setWinningBidStatus(),
            c.vLogInfo(t, {
                type: "win-bid",
                bidDetails: e
            })) : c.vLogInfo(t, {
                type: "win-bid-fail"
            })
        }
        return {
            wb: e,
            kvp: i
        }
    }
    ,
    e.getBidById = function(t) {
        if (!c.isOwnProperty(window.PWT.bidIdMap, t))
            return c.log(p.MESSAGES.M25 + t),
            null;
        var e = window.PWT.bidIdMap[t].s
          , i = window.PWT.bidIdMap[t].a;
        if (c.isOwnProperty(window.PWT.bidMap, e)) {
            c.log("BidID: " + t + ", DivID: " + e + p.MESSAGES.M19 + i);
            var n = window.PWT.bidMap[e].getBid(i, t);
            return null == n ? null : {
                bid: n,
                slotid: e
            }
        }
        return c.log(p.MESSAGES.M25 + t),
        null
    }
    ,
    e.displayCreative = function(t, e) {
        var i = f.getBidById(e);
        if (i) {
            var n = i.bid
              , o = i.slotid;
            c.displayCreative(t, n),
            c.vLogInfo(o, {
                type: "disp",
                adapter: n.getAdapterID()
            }),
            f.executeMonetizationPixel(o, n)
        }
    }
    ,
    e.executeAnalyticsPixel = function() {
        var t = {
            s: []
        }
          , e = u.getAnalyticsPixelURL()
          , i = {};
        e && (e = c.metaInfo.protocol + e + "pubid=" + u.getPublisherId() + "&json=",
        t[p.CONFIG.PUBLISHER_ID] = u.getPublisherId(),
        t[p.LOGGER_PIXEL_PARAMS.TIMEOUT] = "" + u.getTimeout(),
        t[p.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(c.metaInfo.pageURL),
        t[p.LOGGER_PIXEL_PARAMS.TIMESTAMP] = c.getCurrentTimestamp(),
        t[p.CONFIG.PROFILE_ID] = u.getProfileID(),
        t[p.CONFIG.PROFILE_VERSION_ID] = u.getProfileDisplayVersionID(),
        c.forEachOnObject(window.PWT.bidMap, (function(t, e) {
            f.analyticalPixelCallback(t, e, i)
        }
        )),
        c.forEachOnObject(i, (function(i, n) {
            n.length > 0 && (t.s = n,
            t[p.COMMON.IMPRESSION_ID] = window.encodeURIComponent(i),
            (new window.Image).src = e + window.encodeURIComponent(JSON.stringify(t)))
        }
        )))
    }
    ,
    e.executeMonetizationPixel = function(t, e) {
        var i = u.getMonetizationPixelURL();
        i && (i += "pubid=" + u.getPublisherId(),
        i += "&purl=" + window.encodeURIComponent(c.metaInfo.pageURL),
        i += "&tst=" + c.getCurrentTimestamp(),
        i += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[t].getImpressionID()),
        i += "&bidid=" + window.encodeURIComponent(e.getBidID()),
        i += "&pid=" + window.encodeURIComponent(u.getProfileID()),
        i += "&pdvid=" + window.encodeURIComponent(u.getProfileDisplayVersionID()),
        i += "&slot=" + window.encodeURIComponent(t),
        i += "&pn=" + window.encodeURIComponent(e.getAdapterID()),
        i += "&en=" + window.encodeURIComponent(e.getNetEcpm()),
        i += "&eg=" + window.encodeURIComponent(e.getGrossEcpm()),
        i += "&kgpv=" + window.encodeURIComponent(e.getKGPV()),
        f.setImageSrcToPixelURL(i))
    }
    ,
    e.analyticalPixelCallback = l,
    e.setImageSrcToPixelURL = function(t) {
        var e = new window.Image;
        e.src = c.metaInfo.protocol + t
    }
    ,
    e.getAllPartnersBidStatuses = function(t, e) {
        var i = !0;
        return c.forEachOnArray(e, (function(e, n) {
            t[n] && c.forEachOnObject(t[n].adapters, (function(t, e) {
                c.forEachOnObject(e.bids, (function(t, e) {
                    i = i && 0 === e.getDefaultBidStatus()
                }
                ))
            }
            ))
        }
        )),
        i
    }
}
), (function(t, e, i) {
    function n(t) {
        this.name = t,
        this.sizes = [],
        this.adapters = {},
        this.creationTime = r.getCurrentTimestampInMs(),
        this.impressionID = "",
        this.analyticsEnabled = !1,
        this.expired = !1
    }
    var o = i(2)
      , r = i(1)
      , a = i(8).AdapterEntry;
    n.prototype.setExpired = function() {
        return this.expired = !0,
        this
    }
    ,
    n.prototype.getExpiredStatus = function() {
        return this.expired
    }
    ,
    n.prototype.setAnalyticEnabled = function() {
        return this.analyticsEnabled = !0,
        this
    }
    ,
    n.prototype.getAnalyticEnabledStatus = function() {
        return this.analyticsEnabled
    }
    ,
    n.prototype.setNewBid = function(t, e) {
        r.isOwnProperty(this.adapters, t) || (this.adapters[t] = new a(t)),
        this.adapters[t].setNewBid(e)
    }
    ,
    n.prototype.getBid = function(t, e) {
        return r.isOwnProperty(this.adapters, t) ? this.adapters[t].getBid(e) : void 0
    }
    ,
    n.prototype.getName = function() {
        return this.name
    }
    ,
    n.prototype.getCreationTime = function() {
        return this.creationTime
    }
    ,
    n.prototype.setImpressionID = function(t) {
        return this.impressionID = t,
        this
    }
    ,
    n.prototype.getImpressionID = function() {
        return this.impressionID
    }
    ,
    n.prototype.setSizes = function(t) {
        return this.sizes = t,
        this
    }
    ,
    n.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    n.prototype.setAdapterEntry = function(t) {
        return r.isOwnProperty(this.adapters, t) || (this.adapters[t] = new a(t),
        r.log(o.MESSAGES.M4 + this.name + " " + t + " " + this.adapters[t].getCallInitiatedTime())),
        this
    }
    ,
    n.prototype.getLastBidIDForAdapter = function(t) {
        return r.isOwnProperty(this.adapters, t) ? this.adapters[t].getLastBidID() : ""
    }
    ,
    t.exports.BMEntry = n,
    e.createBMEntry = function(t) {
        return new n(t)
    }
}
), (function(t, e, i) {
    function n(t) {
        this.adapterID = t,
        this.callInitiatedTime = o.getCurrentTimestampInMs(),
        this.bids = {},
        this.lastBidID = ""
    }
    var o = i(1);
    n.prototype.getCallInitiatedTime = function() {
        return this.callInitiatedTime
    }
    ,
    n.prototype.getLastBidID = function() {
        return this.lastBidID
    }
    ,
    n.prototype.getBid = function(t) {
        return o.isOwnProperty(this.bids, t) ? this.bids[t] : null
    }
    ,
    n.prototype.setNewBid = function(t) {
        delete this.bids[this.lastBidID];
        var e = t.getBidID();
        this.bids[e] = t,
        this.lastBidID = e
    }
    ,
    t.exports.AdapterEntry = n
}
), (function(t, e, i) {
    function n(t) {
        q.isObject(t) && (re = t)
    }
    function o() {
        return re
    }
    function r(t) {
        var e = 0;
        try {
            var i = t.getSlotId().getId().split("_");
            e = parseInt(i[i.length - 1])
        } catch (n) {}
        return e
    }
    function a(t, e) {
        if (!q.isOwnProperty(e, t))
            return !1;
        var i = e[t]
          , n = q.getScreenWidth(ae.getWindowReference())
          , o = q.getScreenHeight(ae.getWindowReference());
        if (q.log(t + ": responsiveSizeMapping found: screenWidth: " + n + ", screenHeight: " + o),
        q.log(i),
        !q.isArray(i))
            return !1;
        for (var r = 0, a = i.length; a > r; r++)
            if (2 == i[r].length && 2 == i[r][0].length) {
                var s = i[r][0][0]
                  , d = i[r][0][1];
                if (n >= s && o >= d) {
                    if (0 != i[r][1].length && !q.isArray(i[r][1][0])) {
                        if (2 == i[r][1].length && q.isNumber(i[r][1][0]) && q.isNumber(i[r][1][1]))
                            return [i[r][1]];
                        q.log(t + ": Unsupported mapping template."),
                        q.log(i)
                    }
                    return i[r][1]
                }
            }
        return !1
    }
    function s(t, e) {
        var i = ae.getSizeFromSizeMapping(t, ae.slotSizeMapping);
        if (i !== !1)
            return q.log(t + ": responsiveSizeMapping applied: "),
            q.log(i),
            i;
        var n = [];
        return q.isFunction(e.getSizes) && q.forEachOnArray(e.getSizes(), (function(e, i) {
            q.isFunction(i.getWidth) && q.isFunction(i.getHeight) ? n.push([i.getWidth(), i.getHeight()]) : (q.log(t + ", size object does not have getWidth and getHeight method. Ignoring: "),
            q.log(i))
        }
        )),
        n
    }
    function d(t, e) {
        q.isObject(t) && q.isFunction(t.getDivID) && q.isArray(e) && e[0] && e[0] == t.getDivID() && (t.setDisplayFunctionCalled(!0),
        t.setArguments(e))
    }
    function l(t, e, i) {
        if (q.isOwnProperty(ae.slotsMap, t))
            i || ae.slotsMap[t].setSizes(ae.getAdSlotSizesArray(t, e));
        else {
            var n = X.createSlot(t);
            n.setDivID(t),
            n.setPubAdServerObject(e),
            n.setAdUnitID(e.getAdUnitPath()),
            n.setAdUnitIndex(ae.getAdUnitIndex(e)),
            n.setSizes(ae.getAdSlotSizesArray(t, e)),
            n.setStatus(Y.SLOT_STATUS.CREATED),
            te && q.isObject(JSON) && q.isFunction(JSON.stringify) && q.forEachOnArray(e.getTargetingKeys(), (function(t, i) {
                n.setKeyValue(i, e.getTargeting(i))
            }
            )),
            ae.slotsMap[t] = n,
            q.createVLogInfoPanel(t, n.getSizes())
        }
    }
    function u(t) {
        if (q.isObject(t) && q.isFunction(t.getSlotId)) {
            var e = t.getSlotId();
            if (e && q.isFunction(e.getDomId))
                return e.getDomId()
        }
        return ""
    }
    function p(t, e, i) {
        q.log("Generating slotsMap"),
        q.forEachOnArray(t, (function(t, n) {
            var o = ae.generateSlotName(n);
            ae.storeInSlotsMap(o, n, i),
            i && q.isOwnProperty(ae.slotsMap, o) && ae.setDisplayFunctionCalledIfRequired(ae.slotsMap[o], e)
        }
        )),
        q.log(ae.slotsMap)
    }
    function c(t) {
        return q.isOwnProperty(ae.slotsMap, t) ? ae.slotsMap[t].getStatus() : Y.SLOT_STATUS.DISPLAYED
    }
    function g(t, e) {
        q.isOwnProperty(ae.slotsMap, t) && ae.slotsMap[t].updateStatusAfterRendering(e)
    }
    function f(t) {
        var e = [];
        return q.forEachOnObject(ae.slotsMap, (function(i, n) {
            q.isOwnProperty(t, n.getStatus()) && e.push(i)
        }
        )),
        e
    }
    function h(t) {
        var e, i = {};
        q.isOwnProperty(ae.slotsMap, t) && (e = ae.slotsMap[t].getPubAdServerObject(),
        q.forEachOnArray(e.getTargetingKeys(), (function(t, n) {
            i[n] = e.getTargeting(n)
        }
        )),
        e.clearTargeting(),
        q.forEachOnObject(i, (function(t, i) {
            q.isOwnProperty(ae.wrapperTargetingKeys, t) || e.setTargeting(t, i)
        }
        )))
    }
    function I(t, e, i) {
        q.forEachOnArray(t, (function(t, n) {
            if (q.isOwnProperty(ae.slotsMap, n)) {
                var o = ae.slotsMap[n];
                o.setStatus(Y.SLOT_STATUS.PARTNERS_CALLED),
                i && (ae.removeDMTargetingFromSlot(n),
                o.setRefreshFunctionCalled(!0),
                o.setArguments(e))
            }
        }
        ))
    }
    function m(t) {
        var e = [];
        return q.forEachOnArray(t, (function(t, i) {
            e.push(ae.slotsMap[i])
        }
        )),
        e
    }
    function w(t) {
        var e = {};
        return q.forEachOnObject(t, (function(t, i) {
            e[i] = ""
        }
        )),
        e
    }
    function E(t) {
        var e = Q.getBid(t)
          , i = e.wb || null
          , n = e.kvp || null
          , o = ae.slotsMap[t].getPubAdServerObject()
          , r = Y.IGNORE_PREBID_KEYS;
        if (q.log("DIV: " + t + " winningBid: "),
        q.log(i),
        i && i.getNetEcpm() > 0) {
            ae.slotsMap[t].setStatus(Y.SLOT_STATUS.TARGETING_ADDED),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ID, i.getBidID()),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_STATUS, i.getStatus()),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ECPM, i.getNetEcpm().toFixed(Y.COMMON.BID_PRECISION));
            var a = i.getDealID();
            a && o.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_DEAL_ID, a),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID, i.getAdapterID()),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.PUBLISHER_ID, V.getPublisherId()),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_ID, V.getProfileID()),
            o.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID, V.getProfileDisplayVersionID())
        }
        q.forEachOnObject(n, (function(t, e) {
            q.isOwnProperty(r, t) || (o.setTargeting(t, e),
            ae.defineWrapperTargetingKey(t))
        }
        ))
    }
    function S(t) {
        q.isObject(ae.wrapperTargetingKeys) || (ae.wrapperTargetingKeys = {}),
        ae.wrapperTargetingKeys[t] = ""
    }
    function T(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return $ = !0,
            q.log("Disable Initial Load is called"),
            e.apply(t, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function A(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return q.log("enableSingleRequest is called"),
            e.apply(t, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function y(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            var i = arguments
              , n = i[0] ? i[0] : null;
            return null != n && (q.isOwnProperty(oe, n) || (oe[n] = []),
            oe[n] = oe[n].concat(i[1])),
            e.apply(t, arguments)
        }
        : (q.log("setTargeting: originalFunction is not a function"),
        null)
    }
    function O(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            var i = arguments[0] || window.googletag.pubads().getSlots();
            return q.forEachOnArray(i, (function(t, e) {
                delete ne[ae.generateSlotName(e)]
            }
            )),
            e.apply(t, arguments)
        }
        : (q.log("destroySlots: originalFunction is not a function"),
        null)
    }
    function D(t, e, i, n) {
        q.log(t),
        q.log(n),
        ae.updateStatusAfterRendering(n[0], !1),
        i.apply(e, n)
    }
    function P(t, e) {
        var i = e.getStatus();
        i != Y.SLOT_STATUS.DISPLAYED && i != Y.SLOT_STATUS.TARGETING_ADDED && ae.findWinningBidAndApplyTargeting(t)
    }
    function x(t, e, i) {
        ae.getStatusOfSlotForDivId(i[0]) != Y.SLOT_STATUS.DISPLAYED ? ae.updateStatusAndCallOriginalFunction_Display("Calling original display function after timeout with arguments, ", t, e, i) : q.log("AdSlot already rendered")
    }
    function _(t, e, i) {
        q.getExternalBidderStatus(e) && Q.getAllPartnersBidStatuses(window.PWT.bidMap, e) ? (q.resetExternalBidderStatus(e),
        i()) : t > 0 && window.setTimeout((function() {
            ae.executeDisplay(t - 10, e, i)
        }
        ), 10)
    }
    function b(t, e, i, n) {
        switch (t) {
        case Y.SLOT_STATUS.CREATED:
        case Y.SLOT_STATUS.PARTNERS_CALLED:
            var o = Object.keys(ae.slotsMap);
            "object" == typeof window.OWT.externalBidderStatuses[n[0]] && window.OWT.externalBidderStatuses[n[0]] && ae.executeDisplay(V.getTimeout(), o, (function() {
                q.forEachOnObject(ae.slotsMap, (function(t, e) {
                    ae.findWinningBidIfRequired_Display(t, e)
                }
                )),
                ae.processDisplayCalledSlot(e, i, n)
            }
            )),
            setTimeout((function() {
                q.log("PostTimeout.. back in display function"),
                q.forEachOnObject(ae.slotsMap, (function(t, e) {
                    ae.findWinningBidIfRequired_Display(t, e)
                }
                )),
                ae.processDisplayCalledSlot(e, i, n)
            }
            ), V.getTimeout());
            break;
        case Y.SLOT_STATUS.TARGETING_ADDED:
            ae.updateStatusAndCallOriginalFunction_Display("As DM processing is already done, Calling original display function with arguments", e, i, n);
            break;
        case Y.SLOT_STATUS.DISPLAYED:
            ae.updateStatusAndCallOriginalFunction_Display("As slot is already displayed, Calling original display function with arguments", e, i, n)
        }
    }
    function v(t, e, i) {
        if (t.length > 0) {
            ae.updateStatusOfQualifyingSlotsBeforeCallingAdapters(t, e, i);
            var n = ae.arrayOfSelectedSlots(t);
            J.callAdapters(n)
        }
    }
    function R(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            if (q.log("In display function, with arguments: "),
            q.log(arguments),
            $)
                return q.log("DisableInitialLoad was called, Nothing to do"),
                e.apply(t, arguments);
            ae.updateSlotsMapFromGoogleSlots(t.pubads().getSlots(), arguments, !0),
            ae.displayFunctionStatusHandler(c(arguments[0]), t, e, arguments);
            var i = {};
            i[Y.SLOT_STATUS.CREATED] = "",
            ae.forQualifyingSlotNamesCallAdapters(f(i), arguments, !1);
            var n = arguments[0];
            setTimeout((function() {
                q.realignVLogInfoPanel(n),
                Q.executeAnalyticsPixel()
            }
            ), 2e3 + V.getTimeout())
        }
        : (q.log("display: originalFunction is not a function"),
        null)
    }
    function M(t) {
        ae.displayHookIsAdded || (ae.displayHookIsAdded = !0,
        q.log("Adding hook on googletag.display."),
        q.addHookOnFunction(t, !1, "display", this.newDisplayFunction))
    }
    function B(t, e, i) {
        return q.isOwnProperty(ae.slotsMap, t) && ae.slotsMap[t].isRefreshFunctionCalled() === !0 && ae.slotsMap[t].getStatus() !== Y.SLOT_STATUS.DISPLAYED ? (ae.findWinningBidAndApplyTargeting(e),
        ae.updateStatusAfterRendering(e, !0),
        !0) : i
    }
    function C(t, e) {
        q.createVLogInfoPanel(t, ae.slotsMap[e].getSizes()),
        q.realignVLogInfoPanel(t),
        Q.executeAnalyticsPixel()
    }
    function L(t, e, i, n) {
        q.log("Executing post timeout events, arguments: "),
        q.log(n);
        var o = !1;
        q.forEachOnArray(t, (function(t, e) {
            var i = ae.slotsMap[e].getDivID();
            o = ae.findWinningBidIfRequired_Refresh(e, i, o),
            window.setTimeout((function() {
                ae.postRederingChores(i, e)
            }
            ), 2e3)
        }
        )),
        this.callOriginalRefeshFunction(o, e, i, n)
    }
    function F(t, e, i, n) {
        t === !0 ? (q.log("Calling original refresh function post timeout"),
        i.apply(e, n)) : q.log("AdSlot already rendered")
    }
    function N(t, e) {
        var i = []
          , n = [];
        return n = 0 == t.length || null == t[0] ? e.getSlots() : t[0],
        q.forEachOnArray(n, (function(t, e) {
            var n = ae.generateSlotName(e);
            n.length > 0 && (i = i.concat(n))
        }
        )),
        i
    }
    function W(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            q.log("In Refresh function"),
            ae.updateSlotsMapFromGoogleSlots(t.getSlots(), arguments, !1);
            var i = N(arguments, t);
            ae.forQualifyingSlotNamesCallAdapters(i, arguments, !0),
            q.log("Intiating Call to original refresh function with Timeout: " + V.getTimeout() + " ms");
            var n = arguments;
            "object" == typeof window.OWT.externalBidderStatuses[i[0]] && window.OWT.externalBidderStatuses[i[0]] && ae.executeDisplay(V.getTimeout(), i, (function() {
                ae.postTimeoutRefreshExecution(i, t, e, n)
            }
            )),
            setTimeout((function() {
                ae.postTimeoutRefreshExecution(i, t, e, n)
            }
            ), V.getTimeout())
        }
        : (q.log("refresh: originalFunction is not a function"),
        null)
    }
    function z(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return ie[ae.generateSlotName(this)] = arguments[0],
            e.apply(this, arguments)
        }
        : (q.log("newSizeMappingFunction: originalFunction is not a function"),
        null)
    }
    function U(t) {
        if (q.isObject(t) && q.isFunction(t.defineSlot)) {
            var e = t.defineSlot("/Harshad", [[728, 90]], "Harshad-02051986");
            if (e)
                return q.addHookOnFunction(e, !0, "defineSizeMapping", ae.newSizeMappingFunction),
                t.destroySlots([e]),
                !0
        }
        return !1
    }
    function G(t) {
        if (q.isObject(t) && q.isObject(t.googletag) && q.isFunction(t.googletag.pubads)) {
            var e = t.googletag
              , i = e.pubads();
            return q.isObject(i) ? (ae.addHookOnSlotDefineSizeMapping(e),
            q.addHookOnFunction(i, !1, "disableInitialLoad", ae.newDisableInitialLoadFunction),
            q.addHookOnFunction(i, !1, "enableSingleRequest", ae.newEnableSingleRequestFunction),
            ae.newAddHookOnGoogletagDisplay(e),
            q.addHookOnFunction(i, !1, "refresh", ae.newRefreshFuncton),
            q.addHookOnFunction(i, !1, "setTargeting", ae.newSetTargetingFunction),
            q.addHookOnFunction(e, !1, "destroySlots", ae.newDestroySlotsFunction),
            !0) : !1
        }
        return !1
    }
    function k(t) {
        return q.isObject(t) ? (t.googletag = t.googletag || {},
        t.googletag.cmd = t.googletag.cmd || [],
        !0) : !1
    }
    function H(t) {
        if (q.isUndefined(t.google_onload_fired) && q.isObject(t.googletag) && q.isArray(t.googletag.cmd) && q.isFunction(t.googletag.cmd.unshift)) {
            q.log("Succeeded to load before GPT");
            var e = this;
            return t.googletag.cmd.unshift((function() {
                q.log("OpenWrap initialization started"),
                e.addHooks(t),
                q.log("OpenWrap initialization completed")
            }
            )),
            !0
        }
        return q.log("Failed to load before GPT"),
        !1
    }
    function j(t) {
        return q.isObject(t) && q.isObject(t.PWT) && q.isFunction(t.PWT.jsLoaded) ? (t.PWT.jsLoaded(),
        !0) : !1
    }
    function K(t) {
        t.PWT.safeFrameMessageListenerAdded || (q.addMessageEventListenerForSafeFrame(t),
        t.PWT.safeFrameMessageListenerAdded = !0)
    }
    var V = i(4)
      , Y = i(2)
      , q = i(1)
      , Q = i(6)
      , J = i(10)
      , X = i(12)
      , Z = !1;
    e.displayHookIsAdded = Z;
    var $ = !1
      , te = !0
      , ee = {};
    e.wrapperTargetingKeys = ee;
    var ie = {};
    e.slotSizeMapping = ie;
    var ne = {};
    e.slotsMap = ne;
    var oe = {}
      , re = null
      , ae = this;
    e.setWindowReference = n,
    e.getWindowReference = o,
    e.getAdUnitIndex = r,
    e.getSizeFromSizeMapping = a,
    e.getAdSlotSizesArray = s,
    e.setDisplayFunctionCalledIfRequired = d,
    e.storeInSlotsMap = l,
    e.generateSlotName = u,
    e.updateSlotsMapFromGoogleSlots = p,
    e.getStatusOfSlotForDivId = c,
    e.updateStatusAfterRendering = g,
    e.getSlotNamesByStatus = f,
    e.removeDMTargetingFromSlot = h,
    e.updateStatusOfQualifyingSlotsBeforeCallingAdapters = I,
    e.arrayOfSelectedSlots = m,
    e.defineWrapperTargetingKeys = w,
    e.findWinningBidAndApplyTargeting = E,
    e.defineWrapperTargetingKey = S,
    e.newDisableInitialLoadFunction = T,
    e.newEnableSingleRequestFunction = A,
    e.newSetTargetingFunction = y,
    e.newDestroySlotsFunction = O,
    e.updateStatusAndCallOriginalFunction_Display = D,
    e.findWinningBidIfRequired_Display = P,
    e.processDisplayCalledSlot = x,
    e.executeDisplay = _,
    e.displayFunctionStatusHandler = b,
    e.forQualifyingSlotNamesCallAdapters = v,
    e.newDisplayFunction = R,
    e.newAddHookOnGoogletagDisplay = M,
    e.findWinningBidIfRequired_Refresh = B,
    e.postRederingChores = C,
    e.postTimeoutRefreshExecution = L,
    e.callOriginalRefeshFunction = F,
    e.getQualifyingSlotNamesForRefresh = N,
    e.newRefreshFuncton = W,
    e.newSizeMappingFunction = z,
    e.addHookOnSlotDefineSizeMapping = U,
    e.addHooks = G,
    e.defineGPTVariables = k,
    e.addHooksIfPossible = H,
    e.callJsLoadedIfRequired = j,
    e.initSafeFrameListener = K,
    e.init = function(t) {
        return V.initConfig(),
        q.isObject(t) ? (ae.setWindowReference(t),
        ae.initSafeFrameListener(t),
        ae.wrapperTargetingKeys = ae.defineWrapperTargetingKeys(Y.WRAPPER_TARGETING_KEYS),
        ae.defineGPTVariables(t),
        J.registerAdapters(),
        ae.addHooksIfPossible(t),
        ae.callJsLoadedIfRequired(t),
        !0) : !1
    }
}
), (function(t, e, i) {
    function n() {
        return Math.floor(100 * Math.random())
    }
    function o(t, e, i) {
        c.forEachOnObject(t, (function(t, n) {
            I.setInitTimeForSlotsForAdapter(e, t),
            n.fB(e, i)
        }
        ))
    }
    function r(t, e) {
        c.forEachOnArray(t, (function(t, i) {
            var n = i.getDivID();
            g.resetBid(n, e),
            g.setSizes(n, c.generateSlotNamesFromPattern(i, "_W_x_H_"))
        }
        ))
    }
    function a(t, e) {
        return !(t >= u.getAdapterThrottle(e))
    }
    function s(t, e) {
        c.forEachOnObject(t, (function(t, i) {
            g.setCallInitTime(i.getDivID(), e)
        }
        ))
    }
    function d(t) {
        if (t) {
            var e = t.ID();
            c.isFunction(t.fB) ? I.registeredAdapters[e] = t : c.log(e + p.MESSAGES.M3)
        } else
            c.log(p.MESSAGES.M3),
            c.log(t)
    }
    function l() {
        I.registerAdapter(f.register())
    }
    var u = i(4)
      , p = i(2)
      , c = i(1)
      , g = i(6)
      , f = i(11)
      , h = {};
    e.registeredAdapters = h;
    var I = this;
    e.callAdapters = function(t) {
        var e = c.generateUUID();
        I.resetSlots(t, e),
        I.callAdapter(h, t, e)
    }
    ,
    e.getRandomNumberBelow100 = n,
    e.callAdapter = o,
    e.resetSlots = r,
    e.throttleAdapter = a,
    e.setInitTimeForSlotsForAdapter = s,
    e.registerAdapter = d,
    e.registerAdapters = l
}
), (function(t, e, i) {
    function n(t, e) {
        var i = c.createBid(t.bidderCode, e);
        return i.setGrossEcpm(t.cpm),
        i.setDealID(t.dealId),
        i.setDealChannel(t.dealChannel),
        i.setAdHtml(t.ad || ""),
        i.setAdUrl(t.adUrl || ""),
        i.setWidth(t.width),
        i.setHeight(t.height),
        i.setReceivedTime(t.responseTimestamp),
        g.forEachOnObject(t.adserverTargeting, (function(t, e) {
            i.setKeyValuePair(t, e)
        }
        )),
        i
    }
    function o(t) {
        var e = t.adUnitCode || "";
        g.isOwnProperty(S.kgpvMap, e) && t.bidderCode && f.setBidFromBidder(S.kgpvMap[e].divID, S.transformPBBidToOWBid(t, S.kgpvMap[e].kgpv))
    }
    function r(t) {
        for (var e in t)
            if (g.isOwnProperty(t, e) && g.isOwnProperty(S.kgpvMap, e))
                for (var i = t[e], o = i.bids || [], r = 0; r < o.length; r++) {
                    var a = o[r];
                    a.bidderCode && f.setBidFromBidder(S.kgpvMap[e].divID, n(a, S.kgpvMap[e].kgpv))
                }
    }
    function a(t, e, i, n, o, r, a, s, d, l) {
        var p, c, f = a.getDivID();
        r ? (p = f + "@" + t + "@" + d + "X" + l,
        c = [[d, l]]) : (p = f + "@" + t,
        c = a.getSizes()),
        S.kgpvMap[p] = {
            kgpv: o,
            divID: f
        },
        g.isOwnProperty(e, p) || (e[p] = {
            code: p,
            sizes: c,
            bids: []
        });
        var h = {};
        switch (g.forEachOnObject(s, (function(t, e) {
            h[t] = e
        }
        )),
        t) {
        case "pubmatic":
            h.publisherId = i.publisherId,
            h.adSlot = o,
            h.wiid = n,
            h.profId = u.getProfileID(),
            window.PWT.udpv && (h.verId = u.getProfileDisplayVersionID()),
            e[p].bids.push({
                bidder: t,
                params: h
            });
            break;
        case "pulsepoint":
            g.forEachOnArray(c, (function(i, n) {
                var o = {};
                g.forEachOnObject(s, (function(t, e) {
                    o[t] = e
                }
                )),
                o.cf = n[0] + "x" + n[1],
                e[p].bids.push({
                    bidder: t,
                    params: o
                })
            }
            ));
            break;
        case "adg":
            g.forEachOnArray(c, (function(i, n) {
                var o = {};
                g.forEachOnObject(s, (function(t, e) {
                    o[t] = e
                }
                )),
                o.width = n[0],
                o.height = n[1],
                e[p].bids.push({
                    bidder: t,
                    params: o
                })
            }
            ));
            break;
        default:
            e[p].bids.push({
                bidder: t,
                params: h
            })
        }
    }
    function s(t, e, i, n, o) {
        g.log(t + p.MESSAGES.M1),
        e && g.forEachGeneratedKey(t, n, e, o, [], i, e[p.CONFIG.KEY_GENERATION_PATTERN], e[p.CONFIG.KEY_LOOKUP_MAP] || null, S.generatedKeyCallback, !0)
    }
    function d(t, e) {
        var i = m + w++;
        if (window.pwtCreatePrebidNamespace(i),
        !window[i])
            return g.log("PreBid js is not loaded"),
            void 0;
        if (!g.isFunction(window[i].onEvent))
            return g.log("PreBid js onEvent method is not available"),
            void 0;
        window[i].onEvent("bidResponse", S.pbBidStreamHandler),
        window[i].logging = g.isDebugLogEnabled();
        var n = {}
          , o = h.getRandomNumberBelow100();
        u.forEachAdapter((function(i, r) {
            i !== S.parentAdapterID && (0 == h.throttleAdapter(o, i) ? (h.setInitTimeForSlotsForAdapter(t, i),
            S.generatePbConf(i, r, t, n, e)) : g.log(i + p.MESSAGES.M2))
        }
        ));
        var r = [];
        for (var a in n)
            g.isOwnProperty(n, a) && r.push(n[a]);
        if (r.length > 0 && window[i])
            try {
                if (g.isFunction(window[i].setBidderSequence) && window[i].setBidderSequence("random"),
                !g.isFunction(window[i].requestBids))
                    return g.log("PreBid js requestBids function is not available"),
                    void 0;
                window[i].requestBids({
                    adUnits: r,
                    bidsBackHandler: function(t) {
                        g.log("In PreBid bidsBackHandler with bidResponses: "),
                        g.log(t)
                    },
                    timeout: u.getTimeout() - 50
                })
            } catch (s) {
                g.log("Error occured in calling PreBid."),
                g.log(s)
            }
    }
    function l() {
        return S.parentAdapterID
    }
    var u = i(4)
      , p = i(2)
      , c = i(3)
      , g = i(1)
      , f = i(6)
      , h = i(10)
      , I = (i(5),
    p.COMMON.PARENT_ADAPTER_PREBID)
      , m = "pbjs"
      , w = 0;
    e.parentAdapterID = I;
    var E = {};
    e.kgpvMap = E;
    var S = this;
    e.transformPBBidToOWBid = n,
    e.pbBidStreamHandler = o,
    e.handleBidResponses = r,
    e.generatedKeyCallback = a,
    e.generatePbConf = s,
    e.fetchBids = d,
    e.getParenteAdapterID = l,
    e.register = function() {
        return {
            fB: S.fetchBids,
            ID: S.getParenteAdapterID
        }
    }
}
), (function(t, e, i) {
    function n(t) {
        this.name = t,
        this.status = o.SLOT_STATUS.CREATED,
        this.divID = "",
        this.adUnitID = "",
        this.adUnitIndex = 0,
        this.sizes = [],
        this.keyValues = {},
        this.arguments = [],
        this.pubAdServerObject = null,
        this.displayFunctionCalled = !1,
        this.refreshFunctionCalled = !1
    }
    var o = i(2);
    n.prototype.getName = function() {
        return this.name
    }
    ,
    n.prototype.setStatus = function(t) {
        return this.status = t,
        this
    }
    ,
    n.prototype.getStatus = function() {
        return this.status
    }
    ,
    n.prototype.setDivID = function(t) {
        return this.divID = t,
        this
    }
    ,
    n.prototype.getDivID = function() {
        return this.divID
    }
    ,
    n.prototype.setAdUnitID = function(t) {
        return this.adUnitID = t,
        this
    }
    ,
    n.prototype.getAdUnitID = function() {
        return this.adUnitID
    }
    ,
    n.prototype.setAdUnitIndex = function(t) {
        return this.adUnitIndex = t,
        this
    }
    ,
    n.prototype.getAdUnitIndex = function() {
        return this.adUnitIndex
    }
    ,
    n.prototype.setSizes = function(t) {
        return this.sizes = t,
        this
    }
    ,
    n.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    n.prototype.setKeyValue = function(t, e) {
        return this.keyValues[t] = e,
        this
    }
    ,
    n.prototype.setKeyValues = function(t) {
        return this.keyValues = t,
        this
    }
    ,
    n.prototype.getkeyValues = function() {
        return this.keyValues
    }
    ,
    n.prototype.setArguments = function(t) {
        return this.arguments = t,
        this
    }
    ,
    n.prototype.getArguments = function() {
        return this.arguments
    }
    ,
    n.prototype.setPubAdServerObject = function(t) {
        return this.pubAdServerObject = t,
        this
    }
    ,
    n.prototype.getPubAdServerObject = function() {
        return this.pubAdServerObject
    }
    ,
    n.prototype.setDisplayFunctionCalled = function(t) {
        return this.displayFunctionCalled = t,
        this
    }
    ,
    n.prototype.isDisplayFunctionCalled = function() {
        return this.displayFunctionCalled
    }
    ,
    n.prototype.setRefreshFunctionCalled = function(t) {
        return this.refreshFunctionCalled = t,
        this
    }
    ,
    n.prototype.isRefreshFunctionCalled = function() {
        return this.refreshFunctionCalled
    }
    ,
    n.prototype.updateStatusAfterRendering = function(t) {
        this.status = o.SLOT_STATUS.DISPLAYED,
        this.arguments = [],
        t ? this.refreshFunctionCalled = !1 : this.displayFunctionCalled = !1
    }
    ,
    t.exports.Slot = n,
    e.createSlot = function(t) {
        return new n(t)
    }
}
)]);
