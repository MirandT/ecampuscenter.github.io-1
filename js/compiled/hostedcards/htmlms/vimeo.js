// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.vimeo');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('domina.xpath');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
if(typeof htmlms.vimeo.initial_title !== 'undefined'){
} else {
htmlms.vimeo.initial_title = (function (){var G__23921 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23921) : cljs.core.atom.call(null,G__23921));
})();
}
if(typeof htmlms.vimeo.initial_length !== 'undefined'){
} else {
htmlms.vimeo.initial_length = (function (){var G__23922 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23922) : cljs.core.atom.call(null,G__23922));
})();
}
htmlms.vimeo.intervalobj = (function (){var G__23923 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.initial_length) : cljs.core.deref.call(null,htmlms.vimeo.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__23923) : goog.date.Interval.fromIsoString.call(null,G__23923));
})();
htmlms.vimeo.get_id_from_url = (function htmlms$vimeo$get_id_from_url(u){

return u;
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.vimeo.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.vimeo.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.vimeo.timeout = (function htmlms$vimeo$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__23926_23928 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__23927_23929 = ms;
setTimeout(G__23926_23928,G__23927_23929);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$vimeo,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator* \n",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.vimeo.gcd = (function htmlms$vimeo$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23930_SHARP_){
return (cljs.core.mod(x,p1__23930_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.vimeo.receiver = (function htmlms$vimeo$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.vimeo.xhr_data = (function htmlms$vimeo$xhr_data(url,cb){
var G__23934 = [cljs.core.str(url)].join('');
var G__23935 = ((function (G__23934){
return (function (f){
var xhr = f.target;
var G__23936 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23936) : cb.call(null,G__23936));
});})(G__23934))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__23934,G__23935) : goog.net.XhrIo.send.call(null,G__23934,G__23935));
});
htmlms.vimeo.xhr_data_ted = (function htmlms$vimeo$xhr_data_ted(url,content){
var G__23941 = [cljs.core.str(url)].join('');
var G__23942 = htmlms.vimeo.receiver;
var G__23943 = "GET";
var G__23944 = content;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4(G__23941,G__23942,G__23943,G__23944) : goog.net.XhrIo.send.call(null,G__23941,G__23942,G__23943,G__23944));
});
htmlms.vimeo.calc_bmi = (function htmlms$vimeo$calc_bmi(bmi_data){
var map__23947 = bmi_data;
var map__23947__$1 = ((((!((map__23947 == null)))?((((map__23947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23947):map__23947);
var data = map__23947__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23947__$1,cljs.core.cst$kw$title);
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$bmi,((1) / ((width / htmlms.vimeo.gcd(width,height)) / (height / htmlms.vimeo.gcd(width,height)))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$width,((bmi * h) * h));
}
});
htmlms.vimeo.slider = (function htmlms$vimeo$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$yurl)){
htmlms.vimeo.xhr_data([cljs.core.str(htmlms.vimeo.get_id_from_url(e.target.value))].join(''),(function (g){
console.log("new title: ",cljs.core.first(domina.text(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(g,"//title"))),cljs.core.rest(domina.text(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(g,"//title"))));

console.log("new time: ",cljs.core.re_find(/\d+:\d+/,cljs.core.re_find(/\"formatted\":\"\d+:\d+\"/,g)));

var response = g.target;
var updlength = cljs.core.re_find(/\d+:\d+/,cljs.core.re_find(/\"formatted\":\"\d+:\d+\"/,g));
var updtitle = domina.text(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(g,"//title")).toString();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$length,updlength);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(htmlms.vimeo.initial_length,cljs.core.assoc,cljs.core.cst$kw$initlength,updlength);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":initlength: ",cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.initial_length) : cljs.core.deref.call(null,htmlms.vimeo.initial_length)))], 0));

console.log("updlength: ",updlength);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$title,updtitle);
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial-length: ",htmlms.vimeo.initial_length], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("param:"),cljs.core.str(param)].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.vimeo.ifriendly = (function htmlms$vimeo$ifriendly(url){

return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(url,"vimeo.com","player.vimeo.com/video"),"https:",""),"http:","");
});
htmlms.vimeo.fluff = (function htmlms$vimeo$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.vimeo.ifriendly(skinny)),cljs.core.str("\" frameBorder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame. To display the video captions, click on the <strong>CC</strong> buton and choose the language you want the captions to be displayed in. To expand the video, use the <strong>Full Screen</strong> icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website.</p>\n")].join('');
});
htmlms.vimeo.get_data = (function htmlms$vimeo$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.vimeo.htmlout = (function htmlms$vimeo$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element("textarea",({"cols": max, "rows": min, "value": htmlms.vimeo.fluff(value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.vimeo.htmloutvisual = (function htmlms$vimeo$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
var G__23987 = "div";
var G__23988 = null;
var G__23989 = (function (){var G__23993 = "p";
var G__23994 = ({"style": ({"fontSize": ".8em"})});
var G__23995 = "Click the ";
var G__23996 = React.createElement("strong",null,"Play");
var G__23997 = " icon to begin.";
return React.createElement(G__23993,G__23994,G__23995,G__23996,G__23997);
})();
var G__23990 = (function (){var G__23998 = "iframe";
var G__23999 = ({"width": width, "height": height, "src": htmlms.vimeo.ifriendly(value), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__23998,G__23987,G__23988,G__23989){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__23998,G__23987,G__23988,G__23989))
});
return React.createElement(G__23998,G__23999);
})();
var G__23991 = (function (){var G__24000 = "p";
var G__24001 = ({"style": ({"fontSize": ".8em"})});
var G__24002 = "If video doesn't appear, follow this direct link: ";
var G__24003 = (function (){var G__24007 = "a";
var G__24008 = ({"href": value, "title": title, "target": "_blank"});
var G__24009 = sablono.interpreter.interpret(title);
return React.createElement(G__24007,G__24008,G__24009);
})();
var G__24004 = " (";
var G__24005 = sablono.interpreter.interpret(length);
var G__24006 = ")";
return React.createElement(G__24000,G__24001,G__24002,G__24003,G__24004,G__24005,G__24006);
})();
var G__23992 = (function (){var G__24010 = "p";
var G__24011 = ({"style": ({"fontSize": ".8em"})});
var G__24012 = "Start the video to access more options in the video frame. To display the video captions,\n     click on the ";
var G__24013 = React.createElement("strong",null,"CC");
var G__24014 = "  button and choose the language you want the captions to be displayed in. To expand the video, use the ";
var G__24015 = React.createElement("strong",null,"Full Screen");
var G__24016 = " icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website.";
return React.createElement(G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__24016);
})();
return React.createElement(G__23987,G__23988,G__23989,G__23990,G__23991,G__23992);
});
htmlms.vimeo.height_ratio = (function htmlms$vimeo$height_ratio(w,h){
return (h / htmlms.vimeo.gcd(w,h));
});
htmlms.vimeo.width_ratio = (function htmlms$vimeo$width_ratio(w,h){
return (w / htmlms.vimeo.gcd(w,h));
});
htmlms.vimeo.bmi_component = (function htmlms$vimeo$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24079 = htmlms.vimeo.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24079__$1 = ((((!((map__24079 == null)))?((((map__24079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24079):map__24079);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24079__$1,cljs.core.cst$kw$title);
var vec__24080 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.vimeo.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.vimeo.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.vimeo.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.vimeo.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.vimeo.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.vimeo.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(1),null);
var G__24086 = "div";
var G__24087 = null;
var G__24088 = React.createElement("h3",null,"Parameters");
var G__24089 = (function (){var G__24098 = "div";
var G__24099 = null;
var G__24100 = (function (){var attrs24097 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24097))?sablono.interpreter.attributes(attrs24097):null),((cljs.core.map_QMARK_(attrs24097))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24097)], null)));
})();
var G__24101 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__24098,G__24099,G__24100,G__24101);
})();
var G__24090 = (function (){var G__24103 = "div";
var G__24104 = null;
var G__24105 = (function (){var attrs24102 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24102))?sablono.interpreter.attributes(attrs24102):null),((cljs.core.map_QMARK_(attrs24102))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24102)], null)));
})();
var G__24106 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24103,G__24104,G__24105,G__24106);
})();
var G__24091 = (function (){var G__24108 = "div";
var G__24109 = null;
var G__24110 = (function (){var attrs24107 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24107))?sablono.interpreter.attributes(attrs24107):null),((cljs.core.map_QMARK_(attrs24107))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24107)], null)));
})();
var G__24111 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24108,G__24109,G__24110,G__24111);
})();
var G__24092 = (function (){var G__24113 = "div";
var G__24114 = null;
var G__24115 = (function (){var attrs24112 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24112))?sablono.interpreter.attributes(attrs24112):null),((cljs.core.map_QMARK_(attrs24112))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24112)], null)));
})();
var G__24116 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24113,G__24114,G__24115,G__24116);
})();
var G__24093 = (function (){var G__24118 = "div";
var G__24119 = null;
var G__24120 = (function (){var attrs24117 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24117))?sablono.interpreter.attributes(attrs24117):null),((cljs.core.map_QMARK_(attrs24117))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24117)], null)));
})();
var G__24121 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24118,G__24119,G__24120,G__24121);
})();
var G__24094 = (function (){var G__24123 = "div";
var G__24124 = null;
var G__24125 = (function (){var attrs24122 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24122))?sablono.interpreter.attributes(attrs24122):null),((cljs.core.map_QMARK_(attrs24122))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24122)], null)));
})();
var G__24126 = (function (){var G__24128 = "span";
var G__24129 = ({"style": ({"color": color})});
var G__24130 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24128,G__24129,G__24130);
})();
var G__24127 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24123,G__24124,G__24125,G__24126,G__24127);
})();
var G__24095 = (function (){var G__24132 = "div";
var G__24133 = null;
var G__24134 = (function (){var attrs24131 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24131))?sablono.interpreter.attributes(attrs24131):null),((cljs.core.map_QMARK_(attrs24131))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24131)], null)));
})();
var G__24135 = sablono.interpreter.interpret(htmlms.vimeo.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24132,G__24133,G__24134,G__24135);
})();
var G__24096 = (function (){var G__24137 = "div";
var G__24138 = null;
var G__24139 = (function (){var attrs24136 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24136))?sablono.interpreter.attributes(attrs24136):null),((cljs.core.map_QMARK_(attrs24136))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24136)], null)));
})();
var G__24140 = sablono.interpreter.interpret(htmlms.vimeo.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24137,G__24138,G__24139,G__24140);
})();
return React.createElement(G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,G__24093,G__24094,G__24095,G__24096);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$vimeo,cljs.core.cst$kw$Vimeo], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"Vimeo",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.vimeo.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(360),cljs.core.cst$kw$width,(640),cljs.core.cst$kw$yurl,"https://vimeo.com/10570139",cljs.core.cst$kw$length,"00:22",cljs.core.cst$kw$title,"\u201CThe Last 3 Minutes\u201D Directed by Po Chan"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.vimeo.main = (function htmlms$vimeo$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
var G__24145 = React.createElement("div",null,"");
var G__24146 = node;
return React.render(G__24145,G__24146);
} else {
return null;
}
});
htmlms.vimeo.main();
