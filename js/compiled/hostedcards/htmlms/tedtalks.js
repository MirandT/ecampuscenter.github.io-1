// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.tedtalks');
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
if(typeof htmlms.tedtalks.initial_title !== 'undefined'){
} else {
htmlms.tedtalks.initial_title = (function (){var G__23921 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23921) : cljs.core.atom.call(null,G__23921));
})();
}
if(typeof htmlms.tedtalks.initial_length !== 'undefined'){
} else {
htmlms.tedtalks.initial_length = (function (){var G__23922 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23922) : cljs.core.atom.call(null,G__23922));
})();
}
htmlms.tedtalks.intervalobj = (function (){var G__23923 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.initial_length) : cljs.core.deref.call(null,htmlms.tedtalks.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__23923) : goog.date.Interval.fromIsoString.call(null,G__23923));
})();
htmlms.tedtalks.get_id_from_url = (function htmlms$tedtalks$get_id_from_url(u){

return u;
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.tedtalks.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.tedtalks.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.tedtalks.timeout = (function htmlms$tedtalks$timeout(ms){
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$tedtalks,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator* \n\n  This application has been developed using the TED API and is not an official service of TED",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.tedtalks.gcd = (function htmlms$tedtalks$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23930_SHARP_){
return (cljs.core.mod(x,p1__23930_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.tedtalks.receiver = (function htmlms$tedtalks$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.tedtalks.xhr_data = (function htmlms$tedtalks$xhr_data(url,cb){
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
htmlms.tedtalks.xhr_data_ted = (function htmlms$tedtalks$xhr_data_ted(url,content){
var G__23941 = [cljs.core.str(url)].join('');
var G__23942 = htmlms.tedtalks.receiver;
var G__23943 = "GET";
var G__23944 = content;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4(G__23941,G__23942,G__23943,G__23944) : goog.net.XhrIo.send.call(null,G__23941,G__23942,G__23943,G__23944));
});
htmlms.tedtalks.calc_bmi = (function htmlms$tedtalks$calc_bmi(bmi_data){
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$bmi,((1) / ((width / htmlms.tedtalks.gcd(width,height)) / (height / htmlms.tedtalks.gcd(width,height)))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$width,((bmi * h) * h));
}
});
htmlms.tedtalks.slider = (function htmlms$tedtalks$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$yurl)){
htmlms.tedtalks.xhr_data([cljs.core.str(htmlms.tedtalks.get_id_from_url(e.target.value))].join(''),(function (g){
var response = g.target;
var updlength = domina.text(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(g,"//*[@id=\"player-hero\"]/div[1]/div[2]/div/span[1]"));
var updtitle = domina.text(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(g,"//*[@id=\"player-hero\"]/div[1]/div[2]/h1/div[2]/span"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$length,updlength);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(htmlms.tedtalks.initial_length,cljs.core.assoc,cljs.core.cst$kw$initlength,updlength);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":initlength: ",cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.initial_length) : cljs.core.deref.call(null,htmlms.tedtalks.initial_length)))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$title,updtitle);
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial-length: ",htmlms.tedtalks.initial_length], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("param:"),cljs.core.str(param)].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.tedtalks.ifriendly = (function htmlms$tedtalks$ifriendly(url){

return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(url,"www.ted.com/talks","embed-ssl.ted.com/talks/lang/en"),"https:",""),"http:","");
});
htmlms.tedtalks.fluff = (function htmlms$tedtalks$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.tedtalks.ifriendly(skinny)),cljs.core.str("\" frameBorder=\"0\" scrolling=\"no\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame. To display the video captions, click on the <strong>gray speech bubble</strong> with three dots in the center and choose the language you want the captions to be displayed in. To expand the video, use the <strong>Full Screen</strong> icon in the bottom right-hand corner or use the direct link above to open the video on the TED website. To navigate the video using the transcript, click <strong>Interactive Transcript</strong>.</p>\n")].join('');
});
htmlms.tedtalks.get_data = (function htmlms$tedtalks$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.tedtalks.htmlout = (function htmlms$tedtalks$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element("textarea",({"cols": max, "rows": min, "value": htmlms.tedtalks.fluff(value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.tedtalks.htmloutvisual = (function htmlms$tedtalks$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
var G__23989 = "div";
var G__23990 = null;
var G__23991 = (function (){var G__23995 = "p";
var G__23996 = ({"style": ({"fontSize": ".8em"})});
var G__23997 = "Click the ";
var G__23998 = React.createElement("strong",null,"Play");
var G__23999 = " icon to begin.";
return React.createElement(G__23995,G__23996,G__23997,G__23998,G__23999);
})();
var G__23992 = (function (){var G__24000 = "iframe";
var G__24001 = ({"width": width, "height": height, "src": htmlms.tedtalks.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__24000,G__23989,G__23990,G__23991){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__24000,G__23989,G__23990,G__23991))
});
return React.createElement(G__24000,G__24001);
})();
var G__23993 = (function (){var G__24002 = "p";
var G__24003 = ({"style": ({"fontSize": ".8em"})});
var G__24004 = "If video doesn't appear, follow this direct link: ";
var G__24005 = (function (){var G__24009 = "a";
var G__24010 = ({"href": value, "title": title, "target": "_blank"});
var G__24011 = sablono.interpreter.interpret(title);
return React.createElement(G__24009,G__24010,G__24011);
})();
var G__24006 = " (";
var G__24007 = sablono.interpreter.interpret(length);
var G__24008 = ")";
return React.createElement(G__24002,G__24003,G__24004,G__24005,G__24006,G__24007,G__24008);
})();
var G__23994 = (function (){var G__24012 = "p";
var G__24013 = ({"style": ({"fontSize": ".8em"})});
var G__24014 = "Start the video to access more options in the video frame. To display the video captions,\n     click on the ";
var G__24015 = React.createElement("strong",null,"gray speech bubble");
var G__24016 = " with three dots in the center and choose the language you want the captions to be displayed in. To expand the video, use the ";
var G__24017 = React.createElement("strong",null,"Full Screen");
var G__24018 = " icon in the bottom right-hand corner or use the direct link above to open the video on the TED website.\n     To navigate the video using the transcript, click ";
var G__24019 = React.createElement("strong",null,"Interactive Transcript");
var G__24020 = ".";
return React.createElement(G__24012,G__24013,G__24014,G__24015,G__24016,G__24017,G__24018,G__24019,G__24020);
})();
return React.createElement(G__23989,G__23990,G__23991,G__23992,G__23993,G__23994);
});
htmlms.tedtalks.height_ratio = (function htmlms$tedtalks$height_ratio(w,h){
return (h / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.width_ratio = (function htmlms$tedtalks$width_ratio(w,h){
return (w / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.bmi_component = (function htmlms$tedtalks$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24083 = htmlms.tedtalks.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24083__$1 = ((((!((map__24083 == null)))?((((map__24083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24083):map__24083);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$title);
var vec__24084 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24084,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24084,(1),null);
var G__24090 = "div";
var G__24091 = null;
var G__24092 = React.createElement("h3",null,"Parameters");
var G__24093 = (function (){var G__24102 = "div";
var G__24103 = null;
var G__24104 = (function (){var attrs24101 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24101))?sablono.interpreter.attributes(attrs24101):null),((cljs.core.map_QMARK_(attrs24101))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24101)], null)));
})();
var G__24105 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__24102,G__24103,G__24104,G__24105);
})();
var G__24094 = (function (){var G__24107 = "div";
var G__24108 = null;
var G__24109 = (function (){var attrs24106 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24106))?sablono.interpreter.attributes(attrs24106):null),((cljs.core.map_QMARK_(attrs24106))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24106)], null)));
})();
var G__24110 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24107,G__24108,G__24109,G__24110);
})();
var G__24095 = (function (){var G__24112 = "div";
var G__24113 = null;
var G__24114 = (function (){var attrs24111 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24111))?sablono.interpreter.attributes(attrs24111):null),((cljs.core.map_QMARK_(attrs24111))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24111)], null)));
})();
var G__24115 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24112,G__24113,G__24114,G__24115);
})();
var G__24096 = (function (){var G__24117 = "div";
var G__24118 = null;
var G__24119 = (function (){var attrs24116 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24116))?sablono.interpreter.attributes(attrs24116):null),((cljs.core.map_QMARK_(attrs24116))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24116)], null)));
})();
var G__24120 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24117,G__24118,G__24119,G__24120);
})();
var G__24097 = (function (){var G__24122 = "div";
var G__24123 = null;
var G__24124 = (function (){var attrs24121 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24121))?sablono.interpreter.attributes(attrs24121):null),((cljs.core.map_QMARK_(attrs24121))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24121)], null)));
})();
var G__24125 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24122,G__24123,G__24124,G__24125);
})();
var G__24098 = (function (){var G__24127 = "div";
var G__24128 = null;
var G__24129 = (function (){var attrs24126 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24126))?sablono.interpreter.attributes(attrs24126):null),((cljs.core.map_QMARK_(attrs24126))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24126)], null)));
})();
var G__24130 = (function (){var G__24132 = "span";
var G__24133 = ({"style": ({"color": color})});
var G__24134 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24132,G__24133,G__24134);
})();
var G__24131 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24127,G__24128,G__24129,G__24130,G__24131);
})();
var G__24099 = (function (){var G__24136 = "div";
var G__24137 = null;
var G__24138 = (function (){var attrs24135 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24135))?sablono.interpreter.attributes(attrs24135):null),((cljs.core.map_QMARK_(attrs24135))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24135)], null)));
})();
var G__24139 = sablono.interpreter.interpret(htmlms.tedtalks.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24136,G__24137,G__24138,G__24139);
})();
var G__24100 = (function (){var G__24141 = "div";
var G__24142 = null;
var G__24143 = (function (){var attrs24140 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24140))?sablono.interpreter.attributes(attrs24140):null),((cljs.core.map_QMARK_(attrs24140))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24140)], null)));
})();
var G__24144 = sablono.interpreter.interpret(htmlms.tedtalks.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24141,G__24142,G__24143,G__24144);
})();
return React.createElement(G__24090,G__24091,G__24092,G__24093,G__24094,G__24095,G__24096,G__24097,G__24098,G__24099,G__24100);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$tedtalks,cljs.core.cst$kw$_u00a9_TED_DASH_CC_DASH_BY_DASH_NC_DASH_ND_DASH_3$0], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"\u00A9TED-CC-BY-NC-ND-3.0",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.tedtalks.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://www.ted.com/talks/teenaged_boy_wonders_play_bluegrass",cljs.core.cst$kw$length,"4m 55s",cljs.core.cst$kw$title,"Sleep Man Banjo Boys: Teen wonders play bluegrass"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.tedtalks.main = (function htmlms$tedtalks$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
var G__24149 = React.createElement("div",null,"");
var G__24150 = node;
return React.render(G__24149,G__24150);
} else {
return null;
}
});
htmlms.tedtalks.main();
