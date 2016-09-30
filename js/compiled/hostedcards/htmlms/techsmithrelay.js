// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.techsmithrelay');
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
if(typeof htmlms.techsmithrelay.initial_title !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_title = (function (){var G__19051 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19051) : cljs.core.atom.call(null,G__19051));
})();
}
if(typeof htmlms.techsmithrelay.initial_length !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_length = (function (){var G__19052 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19052) : cljs.core.atom.call(null,G__19052));
})();
}
htmlms.techsmithrelay.intervalobj = (function (){var G__19053 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.initial_length) : cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__19053) : goog.date.Interval.fromIsoString.call(null,G__19053));
})();
htmlms.techsmithrelay.get_id_from_url = (function htmlms$techsmithrelay$get_id_from_url(u){

return clojure.string.replace_first(u,"https://boisestate.techsmithrelay.com/","");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.techsmithrelay.get_id_from_url("https://boisestate.techsmithrelay.com/TB3U")], 0));
htmlms.techsmithrelay.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.techsmithrelay.timeout = (function htmlms$techsmithrelay$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19056_19058 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__19057_19059 = ms;
setTimeout(G__19056_19058,G__19057_19059);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.techsmithrelay.gcd = (function htmlms$techsmithrelay$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19060_SHARP_){
return (cljs.core.mod(x,p1__19060_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.techsmithrelay.xhr_data = (function htmlms$techsmithrelay$xhr_data(url,cb){
var G__19064 = [cljs.core.str(url)].join('');
var G__19065 = ((function (G__19064){
return (function (f){
var xhr = f.target;
var G__19066 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19066) : cb.call(null,G__19066));
});})(G__19064))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__19064,G__19065) : goog.net.XhrIo.send.call(null,G__19064,G__19065));
});
htmlms.techsmithrelay.calc_bmi = (function htmlms$techsmithrelay$calc_bmi(bmi_data){
var map__19069 = bmi_data;
var map__19069__$1 = ((((!((map__19069 == null)))?((((map__19069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19069):map__19069);
var data = map__19069__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19069__$1,cljs.core.cst$kw$title);
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$bmi,((1) / ((width / htmlms.techsmithrelay.gcd(width,height)) / (height / htmlms.techsmithrelay.gcd(width,height)))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$width,((bmi * h) * h));
}
});
htmlms.techsmithrelay.slider = (function htmlms$techsmithrelay$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$yurl)){
htmlms.techsmithrelay.xhr_data([cljs.core.str("https://boisestate.techsmithrelay.com/api/v1/media/"),cljs.core.str(htmlms.techsmithrelay.get_id_from_url(e.target.value)),cljs.core.str("/details")].join(''),(function (g){
var updlength = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.techsmithrelay.r,g),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration"], null));
var updtitle = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.techsmithrelay.r,g),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Description"], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["url: ",value], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can i get a new url? ",e.target.value], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["updlength: ",updlength], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$length,clojure.string.replace_first(updlength,/\.(\d+)/,""));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(htmlms.techsmithrelay.initial_length,cljs.core.assoc,cljs.core.cst$kw$initlength,clojure.string.replace_first(updlength,/\.(\d+)/,""));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":initlength: ",cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.initial_length) : cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$title,updtitle);
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial-length: ",htmlms.techsmithrelay.initial_length], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("param:"),cljs.core.str(param)].join('')], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.techsmithrelay.ifriendly = (function htmlms$techsmithrelay$ifriendly(url){

return clojure.string.replace_first(clojure.string.replace_first(url,"boisestate.techsmithrelay.com/","boisestate.techsmithrelay.com/connector/embed/index/"),"https:","");
});
htmlms.techsmithrelay.fluff = (function htmlms$techsmithrelay$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.techsmithrelay.ifriendly(skinny)),cljs.core.str("\" scrolling=\"no\" style=\"width: "),cljs.core.str(width),cljs.core.str(";height: "),cljs.core.str(height),cljs.core.str(" border:0;\" frameBorder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame. To access the <strong>closed captions</strong> for this video click on the\n       <strong>CC</strong> button in the toolbar at the bottom of the video. To expand the video, click the <strong>Full Screen icon</strong> in the toolbar at the bottom of the video.</p>\n")].join('');
});
htmlms.techsmithrelay.get_data = (function htmlms$techsmithrelay$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.techsmithrelay.htmlout = (function htmlms$techsmithrelay$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element("textarea",({"cols": max, "rows": min, "value": htmlms.techsmithrelay.fluff(value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.techsmithrelay.htmloutvisual = (function htmlms$techsmithrelay$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
var G__19113 = "div";
var G__19114 = null;
var G__19115 = (function (){var G__19119 = "p";
var G__19120 = ({"style": ({"fontSize": ".8em"})});
var G__19121 = "Click the ";
var G__19122 = React.createElement("strong",null,"Play");
var G__19123 = " icon to begin.";
return React.createElement(G__19119,G__19120,G__19121,G__19122,G__19123);
})();
var G__19116 = (function (){var G__19124 = "iframe";
var G__19125 = ({"width": width, "height": height, "src": htmlms.techsmithrelay.ifriendly([cljs.core.str(value)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__19124,G__19113,G__19114,G__19115){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__19124,G__19113,G__19114,G__19115))
});
return React.createElement(G__19124,G__19125);
})();
var G__19117 = (function (){var G__19126 = "p";
var G__19127 = ({"style": ({"fontSize": ".8em"})});
var G__19128 = "If video doesn't appear, follow this direct link: ";
var G__19129 = (function (){var G__19133 = "a";
var G__19134 = ({"href": value, "title": title, "target": "_blank"});
var G__19135 = sablono.interpreter.interpret(title);
return React.createElement(G__19133,G__19134,G__19135);
})();
var G__19130 = " (";
var G__19131 = sablono.interpreter.interpret(length);
var G__19132 = ")";
return React.createElement(G__19126,G__19127,G__19128,G__19129,G__19130,G__19131,G__19132);
})();
var G__19118 = (function (){var G__19136 = "p";
var G__19137 = ({"style": ({"fontSize": ".8em"})});
var G__19138 = "Start the video to access more options in the video frame. To access the ";
var G__19139 = React.createElement("strong",null,"closed captions");
var G__19140 = " for this video click on\n     the ";
var G__19141 = React.createElement("strong",null,"CC");
var G__19142 = " button in the toolbar at the bottom of the video.\u00A0To ";
var G__19143 = React.createElement("strong",null,"expand the video");
var G__19144 = ", click the ";
var G__19145 = React.createElement("strong",null,"Full Screen icon");
var G__19146 = " in the toolbar\n     at the bottom of the video.";
return React.createElement(G__19136,G__19137,G__19138,G__19139,G__19140,G__19141,G__19142,G__19143,G__19144,G__19145,G__19146);
})();
return React.createElement(G__19113,G__19114,G__19115,G__19116,G__19117,G__19118);
});
htmlms.techsmithrelay.height_ratio = (function htmlms$techsmithrelay$height_ratio(w,h){
return (h / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.width_ratio = (function htmlms$techsmithrelay$width_ratio(w,h){
return (w / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.bmi_component = (function htmlms$techsmithrelay$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__19209 = htmlms.techsmithrelay.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__19209__$1 = ((((!((map__19209 == null)))?((((map__19209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19209):map__19209);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,cljs.core.cst$kw$title);
var vec__19210 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19210,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19210,(1),null);
var G__19216 = "div";
var G__19217 = null;
var G__19218 = React.createElement("h3",null,"Parameters");
var G__19219 = (function (){var G__19228 = "div";
var G__19229 = null;
var G__19230 = (function (){var attrs19227 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19227))?sablono.interpreter.attributes(attrs19227):null),((cljs.core.map_QMARK_(attrs19227))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19227)], null)));
})();
var G__19231 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__19228,G__19229,G__19230,G__19231);
})();
var G__19220 = (function (){var G__19233 = "div";
var G__19234 = null;
var G__19235 = (function (){var attrs19232 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19232))?sablono.interpreter.attributes(attrs19232):null),((cljs.core.map_QMARK_(attrs19232))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19232)], null)));
})();
var G__19236 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__19233,G__19234,G__19235,G__19236);
})();
var G__19221 = (function (){var G__19238 = "div";
var G__19239 = null;
var G__19240 = (function (){var attrs19237 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19237))?sablono.interpreter.attributes(attrs19237):null),((cljs.core.map_QMARK_(attrs19237))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19237)], null)));
})();
var G__19241 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__19238,G__19239,G__19240,G__19241);
})();
var G__19222 = (function (){var G__19243 = "div";
var G__19244 = null;
var G__19245 = (function (){var attrs19242 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19242))?sablono.interpreter.attributes(attrs19242):null),((cljs.core.map_QMARK_(attrs19242))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19242)], null)));
})();
var G__19246 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__19243,G__19244,G__19245,G__19246);
})();
var G__19223 = (function (){var G__19248 = "div";
var G__19249 = null;
var G__19250 = (function (){var attrs19247 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19247))?sablono.interpreter.attributes(attrs19247):null),((cljs.core.map_QMARK_(attrs19247))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19247)], null)));
})();
var G__19251 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__19248,G__19249,G__19250,G__19251);
})();
var G__19224 = (function (){var G__19253 = "div";
var G__19254 = null;
var G__19255 = (function (){var attrs19252 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19252))?sablono.interpreter.attributes(attrs19252):null),((cljs.core.map_QMARK_(attrs19252))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19252)], null)));
})();
var G__19256 = (function (){var G__19258 = "span";
var G__19259 = ({"style": ({"color": color})});
var G__19260 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__19258,G__19259,G__19260);
})();
var G__19257 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__19253,G__19254,G__19255,G__19256,G__19257);
})();
var G__19225 = (function (){var G__19262 = "div";
var G__19263 = null;
var G__19264 = (function (){var attrs19261 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19261))?sablono.interpreter.attributes(attrs19261):null),((cljs.core.map_QMARK_(attrs19261))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19261)], null)));
})();
var G__19265 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__19262,G__19263,G__19264,G__19265);
})();
var G__19226 = (function (){var G__19267 = "div";
var G__19268 = null;
var G__19269 = (function (){var attrs19266 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19266))?sablono.interpreter.attributes(attrs19266):null),((cljs.core.map_QMARK_(attrs19266))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19266)], null)));
})();
var G__19270 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__19267,G__19268,G__19269,G__19270);
})();
return React.createElement(G__19216,G__19217,G__19218,G__19219,G__19220,G__19221,G__19222,G__19223,G__19224,G__19225,G__19226);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$TechSmithRelay], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"TechSmithRelay",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.techsmithrelay.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://boisestate.techsmithrelay.com/TB3U",cljs.core.cst$kw$length,"04:22",cljs.core.cst$kw$title,"Stephen Hill Introduction"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.techsmithrelay.main = (function htmlms$techsmithrelay$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
var G__19275 = React.createElement("div",null,"");
var G__19276 = node;
return React.render(G__19275,G__19276);
} else {
return null;
}
});
htmlms.techsmithrelay.main();
