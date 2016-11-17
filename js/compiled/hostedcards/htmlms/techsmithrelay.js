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
htmlms.techsmithrelay.initial_title = (function (){var G__19067 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19067) : cljs.core.atom.call(null,G__19067));
})();
}
if(typeof htmlms.techsmithrelay.initial_length !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_length = (function (){var G__19068 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19068) : cljs.core.atom.call(null,G__19068));
})();
}
htmlms.techsmithrelay.intervalobj = (function (){var G__19069 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.initial_length) : cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__19069) : goog.date.Interval.fromIsoString.call(null,G__19069));
})();
htmlms.techsmithrelay.get_id_from_url = (function htmlms$techsmithrelay$get_id_from_url(u){

return clojure.string.replace_first(u,"https://boisestate.techsmithrelay.com/","");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.techsmithrelay.get_id_from_url("https://boisestate.techsmithrelay.com/TB3U")], 0));
htmlms.techsmithrelay.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.techsmithrelay.timeout = (function htmlms$techsmithrelay$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19072_19074 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__19073_19075 = ms;
setTimeout(G__19072_19074,G__19073_19075);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.techsmithrelay.gcd = (function htmlms$techsmithrelay$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19076_SHARP_){
return (cljs.core.mod(x,p1__19076_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.techsmithrelay.xhr_data = (function htmlms$techsmithrelay$xhr_data(url,cb){
var G__19080 = [cljs.core.str(url)].join('');
var G__19081 = ((function (G__19080){
return (function (f){
var xhr = f.target;
var G__19082 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19082) : cb.call(null,G__19082));
});})(G__19080))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__19080,G__19081) : goog.net.XhrIo.send.call(null,G__19080,G__19081));
});
htmlms.techsmithrelay.calc_bmi = (function htmlms$techsmithrelay$calc_bmi(bmi_data){
var map__19085 = bmi_data;
var map__19085__$1 = ((((!((map__19085 == null)))?((((map__19085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19085):map__19085);
var data = map__19085__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19085__$1,cljs.core.cst$kw$title);
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
var G__19129 = "div";
var G__19130 = null;
var G__19131 = (function (){var G__19135 = "p";
var G__19136 = ({"style": ({"fontSize": ".8em"})});
var G__19137 = "Click the ";
var G__19138 = React.createElement("strong",null,"Play");
var G__19139 = " icon to begin.";
return React.createElement(G__19135,G__19136,G__19137,G__19138,G__19139);
})();
var G__19132 = (function (){var G__19140 = "iframe";
var G__19141 = ({"width": width, "height": height, "src": htmlms.techsmithrelay.ifriendly([cljs.core.str(value)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__19140,G__19129,G__19130,G__19131){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__19140,G__19129,G__19130,G__19131))
});
return React.createElement(G__19140,G__19141);
})();
var G__19133 = (function (){var G__19142 = "p";
var G__19143 = ({"style": ({"fontSize": ".8em"})});
var G__19144 = "If video doesn't appear, follow this direct link: ";
var G__19145 = (function (){var G__19149 = "a";
var G__19150 = ({"href": value, "title": title, "target": "_blank"});
var G__19151 = sablono.interpreter.interpret(title);
return React.createElement(G__19149,G__19150,G__19151);
})();
var G__19146 = " (";
var G__19147 = sablono.interpreter.interpret(length);
var G__19148 = ")";
return React.createElement(G__19142,G__19143,G__19144,G__19145,G__19146,G__19147,G__19148);
})();
var G__19134 = (function (){var G__19152 = "p";
var G__19153 = ({"style": ({"fontSize": ".8em"})});
var G__19154 = "Start the video to access more options in the video frame. To access the ";
var G__19155 = React.createElement("strong",null,"closed captions");
var G__19156 = " for this video click on\n     the ";
var G__19157 = React.createElement("strong",null,"CC");
var G__19158 = " button in the toolbar at the bottom of the video.\u00A0To ";
var G__19159 = React.createElement("strong",null,"expand the video");
var G__19160 = ", click the ";
var G__19161 = React.createElement("strong",null,"Full Screen icon");
var G__19162 = " in the toolbar\n     at the bottom of the video.";
return React.createElement(G__19152,G__19153,G__19154,G__19155,G__19156,G__19157,G__19158,G__19159,G__19160,G__19161,G__19162);
})();
return React.createElement(G__19129,G__19130,G__19131,G__19132,G__19133,G__19134);
});
htmlms.techsmithrelay.height_ratio = (function htmlms$techsmithrelay$height_ratio(w,h){
return (h / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.width_ratio = (function htmlms$techsmithrelay$width_ratio(w,h){
return (w / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.bmi_component = (function htmlms$techsmithrelay$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__19225 = htmlms.techsmithrelay.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__19225__$1 = ((((!((map__19225 == null)))?((((map__19225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19225):map__19225);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,cljs.core.cst$kw$title);
var vec__19226 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226,(1),null);
var G__19232 = "div";
var G__19233 = null;
var G__19234 = React.createElement("h3",null,"Parameters");
var G__19235 = (function (){var G__19244 = "div";
var G__19245 = null;
var G__19246 = (function (){var attrs19243 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19243))?sablono.interpreter.attributes(attrs19243):null),((cljs.core.map_QMARK_(attrs19243))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19243)], null)));
})();
var G__19247 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__19244,G__19245,G__19246,G__19247);
})();
var G__19236 = (function (){var G__19249 = "div";
var G__19250 = null;
var G__19251 = (function (){var attrs19248 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19248))?sablono.interpreter.attributes(attrs19248):null),((cljs.core.map_QMARK_(attrs19248))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19248)], null)));
})();
var G__19252 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__19249,G__19250,G__19251,G__19252);
})();
var G__19237 = (function (){var G__19254 = "div";
var G__19255 = null;
var G__19256 = (function (){var attrs19253 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19253))?sablono.interpreter.attributes(attrs19253):null),((cljs.core.map_QMARK_(attrs19253))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19253)], null)));
})();
var G__19257 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__19254,G__19255,G__19256,G__19257);
})();
var G__19238 = (function (){var G__19259 = "div";
var G__19260 = null;
var G__19261 = (function (){var attrs19258 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19258))?sablono.interpreter.attributes(attrs19258):null),((cljs.core.map_QMARK_(attrs19258))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19258)], null)));
})();
var G__19262 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__19259,G__19260,G__19261,G__19262);
})();
var G__19239 = (function (){var G__19264 = "div";
var G__19265 = null;
var G__19266 = (function (){var attrs19263 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19263))?sablono.interpreter.attributes(attrs19263):null),((cljs.core.map_QMARK_(attrs19263))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19263)], null)));
})();
var G__19267 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__19264,G__19265,G__19266,G__19267);
})();
var G__19240 = (function (){var G__19269 = "div";
var G__19270 = null;
var G__19271 = (function (){var attrs19268 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19268))?sablono.interpreter.attributes(attrs19268):null),((cljs.core.map_QMARK_(attrs19268))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19268)], null)));
})();
var G__19272 = (function (){var G__19274 = "span";
var G__19275 = ({"style": ({"color": color})});
var G__19276 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__19274,G__19275,G__19276);
})();
var G__19273 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__19269,G__19270,G__19271,G__19272,G__19273);
})();
var G__19241 = (function (){var G__19278 = "div";
var G__19279 = null;
var G__19280 = (function (){var attrs19277 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19277))?sablono.interpreter.attributes(attrs19277):null),((cljs.core.map_QMARK_(attrs19277))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19277)], null)));
})();
var G__19281 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__19278,G__19279,G__19280,G__19281);
})();
var G__19242 = (function (){var G__19283 = "div";
var G__19284 = null;
var G__19285 = (function (){var attrs19282 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19282))?sablono.interpreter.attributes(attrs19282):null),((cljs.core.map_QMARK_(attrs19282))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19282)], null)));
})();
var G__19286 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__19283,G__19284,G__19285,G__19286);
})();
return React.createElement(G__19232,G__19233,G__19234,G__19235,G__19236,G__19237,G__19238,G__19239,G__19240,G__19241,G__19242);
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
var G__19291 = React.createElement("div",null,"");
var G__19292 = node;
return React.render(G__19291,G__19292);
} else {
return null;
}
});
htmlms.techsmithrelay.main();
