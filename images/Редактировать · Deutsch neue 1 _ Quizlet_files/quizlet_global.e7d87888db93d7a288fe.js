(window.QJP=window.QJP||[]).push([["quizlet_global"],{"570s":function(e,n,t){t("EnZy"),function(e){"use strict";e.console||(e.console={});for(var n,t,r=e.console,o=function(){},i=["memory"],c="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");n=i.pop();)r[n]||(r[n]={});for(;t=c.pop();)r[t]||(r[t]=o)}("undefined"==typeof window?this:window)},97:function(e,n,t){QWait("Quizlet.Common.i18n",(function(){e.exports=t("G6ya")}))},BNVi:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return p}));t("hByQ"),t("zKZe");var r=t("og3H"),o=t("zK28"),i=t("QR21"),c=t("qsN4"),u=t("sLV1"),a=t("lGCb"),s="inbound",d="outbound",l="outbound_success";function p(e,n,t){var s=Object(a.a)(e).search,d=(new c.a).parseUriValues(s);if(void 0!==d.userId&&d.userId>=0||Object.keys(d.params).length>=1){var l=Object.assign({action:n,sharer_user_id:d.userId||null,utm_medium:d.params.medium||null,utm_campaign:d.params.campaign||null,utm_source:d.params.source||null,normalized_source:d.params.source||null,share_url:e,user_id:o.a.user?o.a.user.id:null,uid:o.a.uid,client_timestamp:Object(u.c)(),agent:window.navigator.userAgent,platform:r.J.WEB},t);Object(i.a)("share_events",l)}}},G6ya:function(e,n,t){"use strict";t.r(n);var r=t("R7uB"),o=t.n(r),i=(t("570s"),t("zK28")),c=(t("EnZy"),t("FZtP"),t("og3H")),u=t("xvNY"),a=t("xNal");var s=t("3XR0"),d=t("T3U7"),l=t("BNVi"),p=t("y2oz"),m=t("b5qW"),v=t("siyy"),f=t("Y2nb");window.Visitor=f.a,window.Cookie=a.b,window.logPageAction=d.a,window.obfuscate=v.a,window.Quizlet.navigateOnClickHandler=m.b,window.Quizlet.logSubscriptionEvent=p.a,o()((()=>{var e;window.document.addEventListener("click",(()=>{i.a.userInteracted=!0}),{capture:!0,once:!0}),window.document.addEventListener("click",(()=>{Object(s.b)()})),window.document.addEventListener("keydown",(()=>{i.a.userInteracted=!0}),{capture:!0,once:!0}),window.document.addEventListener("keyup",s.b),(e=a.b.read(c.l.TRACKING__SERVER_TO_CLIENT_EVENTS))&&(a.b.dispose(c.l.TRACKING__SERVER_TO_CLIENT_EVENTS),e.split(";").forEach((e=>{var n=JSON.parse(atob(e));n&&"signup"===n.event&&Object(u.q)(n),n&&"transaction"===n.event&&Object(u.f)(n),n&&"after-login"===n.event&&Object(u.e)()}))),Object(l.d)(window.location.href,l.a)}));var g=t("93Hy"),b=t("ApwE");t("xGON"),window._assetBaseURL&&(t.p=window._assetBaseURL);Object(g.enableAllPlugins)(),o()((()=>{QLoad("dom")})),Object(b.f)()},qsN4:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t("4mDm"),t("3bBZ"),t("FZtP"),t("EnZy"),t("JfAA"),t("UxlC");var r=t("og3H"),o=(e,n)=>{var t=new Map;return Object.keys(e).forEach((r=>{t.set(e[r],"0qjKtxWUYS1AlN6Ibrmf7HsF3o2kOzLeEhC5aDQZRd9MPwyGTBngipv4cVJu8X-._~!"[n[r]])})),t},i=o(r.Yb,r.Xb),c=o(r.ac,r.Zb),u=o(r.cc,r.bc);class a{_getEncodedChar(e,n){return n&&e.get(n)||"0"}_getDecodedValue(e,n){for(var[t,r]of e.entries())if(n===r)return t;return null}decodeUTM(e){if(e&&4!==e.length||e&&1!==parseInt(e[0],10))return{};var n=e?e.split(""):["0","0","0","0"],t={},r=this._getDecodedValue(i,n[1]);r&&(t.campaign=r);var o=this._getDecodedValue(c,n[2]);o&&(t.medium=o);var a=this._getDecodedValue(u,n[3]);return a&&(t.source=a),t}encodeUTMParams(e,n,t){return[1,this._getEncodedChar(i,e),this._getEncodedChar(c,n),this._getEncodedChar(u,t)].join("")}encodeUserId(e){return Number(e).toString(36)}decodeUserId(e){return e?parseInt(e,36):null}generateUriValues(e,n,t,r){var o="x="+this.encodeUTMParams(e,n,t);return r&&(o="i="+this.encodeUserId(r)+"&"+o),o}parseUriValues(e){for(var n=e.replace(/^\?/,"").split("&"),t={},r=0;r<n.length;r++){var o=n[r].split("=");if(o.length>1){var i=o.shift();if("x"!==i&&"i"!==i)continue;var c=o.length>1?o.join("="):o[0];t[i]=c}}var u={params:this.decodeUTM(t.x)},a=this.decodeUserId(t.i);return a&&(u.userId=a),u}}},siyy:function(e,n,t){"use strict";function r(e,n){for(var t="",r=0,o=e.length;r<o;r++)t+="-"+(e.charCodeAt(r)+n%(r+1));return t.substr(1)}t.d(n,"a",(function(){return r}))},xGON:function(e,n,t){"use strict";t.r(n)},xvNY:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"g",(function(){return a})),t.d(n,"t",(function(){return s})),t.d(n,"q",(function(){return d})),t.d(n,"f",(function(){return l})),t.d(n,"n",(function(){return p})),t.d(n,"i",(function(){return m})),t.d(n,"v",(function(){return v})),t.d(n,"k",(function(){return f})),t.d(n,"j",(function(){return g})),t.d(n,"r",(function(){return b})),t.d(n,"s",(function(){return h})),t.d(n,"o",(function(){return w})),t.d(n,"h",(function(){return y})),t.d(n,"l",(function(){return _})),t.d(n,"m",(function(){return C})),t.d(n,"p",(function(){return E})),t.d(n,"d",(function(){return O})),t.d(n,"b",(function(){return j})),t.d(n,"u",(function(){return P})),t.d(n,"e",(function(){return U})),t.d(n,"c",(function(){return k}));t("toAj"),t("zKZe");var r,o=t("og3H"),i=t("9WHe"),c=t("ctRD");!function(e){e.PRODUCT="product",e.PRODUCT_GROUP="product_group"}(r||(r={}));var u=e=>{var n=window;n.dataLayer&&n.dataLayer.push(e)},a=()=>{u({event:"initiatecheckout"})},s=(e,n,t,r)=>{r?((e,n,t)=>{u({event:"FreeTrial",action:"Start",value:Math.round(e),valueFB:null==e?void 0:e.toFixed(2),product:t,currency:(n||"").toUpperCase(),nonInteraction:!0})})(e,n,t):((e,n,t)=>{var r={action:"Complete",valueFB:null==e?void 0:e.toFixed(2),value:Math.round(e),product:t,currency:(n||"").toUpperCase(),nonInteraction:!0};u(Object.assign({},r,{event:"Purchase"})),u(Object.assign({},r,{event:"Purchase "+t}))})(e,n,t)},d=e=>{u(e)},l=e=>{u(e)},p=e=>{u({event:"Search",search_term:e})},m=e=>{u(Object.assign({},e,{event:"initiatecheckout"}))},v=e=>{u(Object.assign({event:"ViewContent"},e))},f=e=>{var n=(e=>{switch(e){case o.D.PREP_PACK:return"Prep Pack";case o.D.FOLDER:case o.D.SET:return"Supplemental";default:return"Unknown"}})(e.modelType),t={action:"Complete",content_type:e.content_type,product:n,valueFB:(e.priceValue/100).toFixed(2),value:Math.round(e.priceValue/100),content_name:e.title,content_ids:e.content_ids,currency:(e.priceCurrency||"").toUpperCase()};u(Object.assign({},t,{event:"Purchase"})),u(Object.assign({},t,{event:"Purchase "+n}))},g=e=>{u(Object.assign({event:"ViewContent"},e))},b=e=>{u({event:"study-set-create",studySetSource:e})},h=e=>{u({event:"study-set-publish",studySetSource:e})},w=e=>{u({event:"product-impressions",ecommerce:{currencyCode:"USD",impressions:e}})},y=(e,n)=>{u({event:"product-impressions",ecommerce:{currencyCode:n,impressions:e}})},_=e=>{var n={event:"product-impressions",ecommerce:{currencyCode:e.currentCode,impressions:e.impressions}};u(n)},C=e=>{var n={event:"product-click",ecommerce:{currencyCode:e.currentCode,click:{actionField:{list:"categories"},products:e.productClick[0]}}};u(n)},E=e=>{var n={event:"product-click",ecommerce:{currencyCode:e.currentCode,click:{actionField:{list:"search results"},products:[e.productClick[0]]}}};u(n)},O=e=>{var n={event:"add-to-cart",ecommerce:{currencyCode:e.currentCode,add:{actionField:{list:"categories"},products:[e.products[0]]}}};u(n)},j=(e,n)=>n.impressionGo&&n.impressionGo[0]&&e===n.impressionGo[0].id?n.impressionGo[0]:n.impressionPlus&&n.impressionPlus[0]&&e===n.impressionPlus[0].id?n.impressionPlus[0]:void 0,P=e=>{try{var n={name:e.name,id:e.id,price:e.price,brand:e.brand,category:e.category,quantity:"1"};O({products:[n],currentCode:"usd"})}catch(t){i.a.error("Unable to track GA event",{e:t})}},U=()=>{u({event:"after-login"})},k=()=>{c.h()}}},[[97,"main","redux","common"]]]);