// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.youtube');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
if(typeof htmlms.youtube.initial_title !== 'undefined'){
} else {
htmlms.youtube.initial_title = (function (){var G__24152 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24152) : cljs.core.atom.call(null,G__24152));
})();
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = (function (){var G__24153 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24153) : cljs.core.atom.call(null,G__24153));
})();
}
htmlms.youtube.intervalobj = (function (){var G__24154 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__24154) : goog.date.Interval.fromIsoString.call(null,G__24154));
})();
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.youtube.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.youtube.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__24157_24159 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__24158_24160 = ms;
setTimeout(G__24157_24159,G__24158_24160);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24161_SHARP_){
return (cljs.core.mod(x,p1__24161_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
var G__24165 = [cljs.core.str(url)].join('');
var G__24166 = ((function (G__24165){
return (function (f){
var xhr = f.target;
var G__24167 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24167) : cb.call(null,G__24167));
});})(G__24165))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__24165,G__24166) : goog.net.XhrIo.send.call(null,G__24165,G__24166));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__24170 = bmi_data;
var map__24170__$1 = ((((!((map__24170 == null)))?((((map__24170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24170):map__24170);
var data = map__24170__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24170__$1,cljs.core.cst$kw$title);
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$bmi,((1) / ((width / htmlms.youtube.gcd(width,height)) / (height / htmlms.youtube.gcd(width,height)))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$width,((bmi * h) * h));
}
});
htmlms.youtube.slider = (function htmlms$youtube$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$yurl)){
htmlms.youtube.xhr_data([cljs.core.str("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id="),cljs.core.str(htmlms.youtube.get_id_from_url(e.target.value)),cljs.core.str("&fields=items(contentDetails%2Csnippet)&key=AIzaSyAEqd5yONIxbtMZO-iF5t5aQ0Am1QmTPzs")].join(''),(function (g){
var updlength = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"contentDetails","duration"], null));
var updtitle = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"snippet","title"], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["url: ",value], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can i get a new url? ",e.target.value], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["updlength: ",updlength], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$length,(function (){var me = (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(updlength) : goog.date.Interval.fromIsoString.call(null,updlength));
return [cljs.core.str((((me.hours > (0)))?[cljs.core.str(me.hours),cljs.core.str("h ")].join(''):null)),cljs.core.str(me.minutes),cljs.core.str("m "),cljs.core.str(me.seconds),cljs.core.str("s")].join('');
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(htmlms.youtube.initial_length,cljs.core.assoc,cljs.core.cst$kw$initlength,updlength);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":initlength: ",cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$title,updtitle);
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial-length: ",htmlms.youtube.initial_length], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("param:"),cljs.core.str(param)].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.youtube.ifriendly = (function htmlms$youtube$ifriendly(url){

return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(url,"youtu.be/","www.youtube.com/watch?v="),"watch?v=","embed/"),"https:","");
});
htmlms.youtube.fluff = (function htmlms$youtube$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.youtube.ifriendly(skinny)),cljs.core.str("?rel=0\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame: to display the video captions, click\u00A0<strong>CC</strong>.\u00A0To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript, click YouTube, select ...More, then Transcript.</p>\n")].join('');
});
htmlms.youtube.get_data = (function htmlms$youtube$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.youtube.htmlout = (function htmlms$youtube$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element("textarea",({"cols": max, "rows": min, "value": htmlms.youtube.fluff(value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.youtube.htmloutvisual = (function htmlms$youtube$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
var G__24208 = "div";
var G__24209 = null;
var G__24210 = (function (){var G__24214 = "p";
var G__24215 = ({"style": ({"fontSize": ".8em"})});
var G__24216 = "Click the ";
var G__24217 = React.createElement("strong",null,"Play");
var G__24218 = " icon to begin.";
return React.createElement(G__24214,G__24215,G__24216,G__24217,G__24218);
})();
var G__24211 = (function (){var G__24219 = "iframe";
var G__24220 = ({"width": width, "height": height, "src": htmlms.youtube.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__24219,G__24208,G__24209,G__24210){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__24219,G__24208,G__24209,G__24210))
});
return React.createElement(G__24219,G__24220);
})();
var G__24212 = (function (){var G__24221 = "p";
var G__24222 = ({"style": ({"fontSize": ".8em"})});
var G__24223 = "If video doesn't appear, follow this direct link: ";
var G__24224 = (function (){var G__24228 = "a";
var G__24229 = ({"href": value, "title": title, "target": "_blank"});
var G__24230 = sablono.interpreter.interpret(title);
return React.createElement(G__24228,G__24229,G__24230);
})();
var G__24225 = " (";
var G__24226 = sablono.interpreter.interpret(length);
var G__24227 = ")";
return React.createElement(G__24221,G__24222,G__24223,G__24224,G__24225,G__24226,G__24227);
})();
var G__24213 = (function (){var G__24231 = "p";
var G__24232 = ({"style": ({"fontSize": ".8em"})});
var G__24233 = "Start the video to access more options in the video frame: to display the video captions, click ";
var G__24234 = React.createElement("strong",null,"CC");
var G__24235 = ".\u00A0\n     To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript.";
return React.createElement(G__24231,G__24232,G__24233,G__24234,G__24235);
})();
return React.createElement(G__24208,G__24209,G__24210,G__24211,G__24212,G__24213);
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24298 = htmlms.youtube.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24298__$1 = ((((!((map__24298 == null)))?((((map__24298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24298):map__24298);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$title);
var vec__24299 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299,(1),null);
var G__24305 = "div";
var G__24306 = null;
var G__24307 = React.createElement("h3",null,"Parameters");
var G__24308 = (function (){var G__24317 = "div";
var G__24318 = null;
var G__24319 = (function (){var attrs24316 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24316))?sablono.interpreter.attributes(attrs24316):null),((cljs.core.map_QMARK_(attrs24316))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24316)], null)));
})();
var G__24320 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$yurl,clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v="),(0),(100)));
return React.createElement(G__24317,G__24318,G__24319,G__24320);
})();
var G__24309 = (function (){var G__24322 = "div";
var G__24323 = null;
var G__24324 = (function (){var attrs24321 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24321))?sablono.interpreter.attributes(attrs24321):null),((cljs.core.map_QMARK_(attrs24321))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24321)], null)));
})();
var G__24325 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24322,G__24323,G__24324,G__24325);
})();
var G__24310 = (function (){var G__24327 = "div";
var G__24328 = null;
var G__24329 = (function (){var attrs24326 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24326))?sablono.interpreter.attributes(attrs24326):null),((cljs.core.map_QMARK_(attrs24326))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24326)], null)));
})();
var G__24330 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24327,G__24328,G__24329,G__24330);
})();
var G__24311 = (function (){var G__24332 = "div";
var G__24333 = null;
var G__24334 = (function (){var attrs24331 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24331))?sablono.interpreter.attributes(attrs24331):null),((cljs.core.map_QMARK_(attrs24331))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24331)], null)));
})();
var G__24335 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24332,G__24333,G__24334,G__24335);
})();
var G__24312 = (function (){var G__24337 = "div";
var G__24338 = null;
var G__24339 = (function (){var attrs24336 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24336))?sablono.interpreter.attributes(attrs24336):null),((cljs.core.map_QMARK_(attrs24336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24336)], null)));
})();
var G__24340 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24337,G__24338,G__24339,G__24340);
})();
var G__24313 = (function (){var G__24342 = "div";
var G__24343 = null;
var G__24344 = (function (){var attrs24341 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24341))?sablono.interpreter.attributes(attrs24341):null),((cljs.core.map_QMARK_(attrs24341))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24341)], null)));
})();
var G__24345 = (function (){var G__24347 = "span";
var G__24348 = ({"style": ({"color": color})});
var G__24349 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24347,G__24348,G__24349);
})();
var G__24346 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24342,G__24343,G__24344,G__24345,G__24346);
})();
var G__24314 = (function (){var G__24351 = "div";
var G__24352 = null;
var G__24353 = (function (){var attrs24350 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24350))?sablono.interpreter.attributes(attrs24350):null),((cljs.core.map_QMARK_(attrs24350))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24350)], null)));
})();
var G__24354 = sablono.interpreter.interpret(htmlms.youtube.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24351,G__24352,G__24353,G__24354);
})();
var G__24315 = (function (){var G__24356 = "div";
var G__24357 = null;
var G__24358 = (function (){var attrs24355 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24355))?sablono.interpreter.attributes(attrs24355):null),((cljs.core.map_QMARK_(attrs24355))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24355)], null)));
})();
var G__24359 = sablono.interpreter.interpret(htmlms.youtube.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24356,G__24357,G__24358,G__24359);
})();
return React.createElement(G__24305,G__24306,G__24307,G__24308,G__24309,G__24310,G__24311,G__24312,G__24313,G__24314,G__24315);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$YouTube], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"YouTube",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.youtube.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://www.youtube.com/watch?v=Wfj4g8zh2gk",cljs.core.cst$kw$length,"4m 16s",cljs.core.cst$kw$title,"Like I used to do.mp4"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.youtube.main = (function htmlms$youtube$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
var G__24364 = React.createElement("div",null,"");
var G__24365 = node;
return React.render(G__24364,G__24365);
} else {
return null;
}
});
htmlms.youtube.main();
