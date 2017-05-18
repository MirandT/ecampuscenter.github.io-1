// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.vimeo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('cljs.reader');
goog.require('domina');
goog.require('domina.xpath');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('devcards.core');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
cljs.core.enable_console_print_BANG_();
devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
if(typeof htmlms.vimeo.initial_title !== 'undefined'){
} else {
htmlms.vimeo.initial_title = (function (){var G__27980 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27980) : cljs.core.atom.call(null,G__27980));
})();
}
if(typeof htmlms.vimeo.initial_length !== 'undefined'){
} else {
htmlms.vimeo.initial_length = (function (){var G__27981 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27981) : cljs.core.atom.call(null,G__27981));
})();
}
htmlms.vimeo.intervalobj = (function (){var G__27982 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.initial_length) : cljs.core.deref.call(null,htmlms.vimeo.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__27982) : goog.date.Interval.fromIsoString.call(null,G__27982));
})();
htmlms.vimeo.get_id_from_url = (function htmlms$vimeo$get_id_from_url(u){

return u;
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.vimeo.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.vimeo.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.vimeo.timeout = (function htmlms$vimeo$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__27985_27987 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__27986_27988 = ms;
setTimeout(G__27985_27987,G__27986_27988);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$vimeo,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator* \n",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.vimeo.gcd = (function htmlms$vimeo$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27989_SHARP_){
return (cljs.core.mod(x,p1__27989_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.vimeo.receiver = (function htmlms$vimeo$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.vimeo.xhr_data = (function htmlms$vimeo$xhr_data(url,cb){
var G__27993 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__27994 = ((function (G__27993){
return (function (f){
var xhr = f.target;
var G__27995 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__27995) : cb.call(null,G__27995));
});})(G__27993))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__27993,G__27994) : goog.net.XhrIo.send.call(null,G__27993,G__27994));
});
htmlms.vimeo.xhr_data_ted = (function htmlms$vimeo$xhr_data_ted(url,content){
var G__28000 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__28001 = htmlms.vimeo.receiver;
var G__28002 = "GET";
var G__28003 = content;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4(G__28000,G__28001,G__28002,G__28003) : goog.net.XhrIo.send.call(null,G__28000,G__28001,G__28002,G__28003));
});
htmlms.vimeo.calc_bmi = (function htmlms$vimeo$calc_bmi(bmi_data){
var map__28006 = bmi_data;
var map__28006__$1 = ((((!((map__28006 == null)))?((((map__28006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28006):map__28006);
var data = map__28006__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,cljs.core.cst$kw$title);
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
htmlms.vimeo.xhr_data([cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.get_id_from_url(e.target.value))].join(''),(function (g){
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
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("param:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join('')], 0));

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" height=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.ifriendly(skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" frameBorder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(skinny),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" target=\"_blank\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a> ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")</p><p>Start the video to access more options in the video frame. To display the video captions, click on the <strong>CC</strong> buton and choose the language you want the captions to be displayed in. To expand the video, use the <strong>Full Screen</strong> icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website.</p>\n")].join('');
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
var G__28046 = "div";
var G__28047 = null;
var G__28048 = (function (){var G__28052 = "p";
var G__28053 = ({"style": ({"fontSize": ".8em"})});
var G__28054 = "Click the ";
var G__28055 = React.createElement("strong",null,"Play");
var G__28056 = " icon to begin.";
return React.createElement(G__28052,G__28053,G__28054,G__28055,G__28056);
})();
var G__28049 = (function (){var G__28057 = "iframe";
var G__28058 = ({"width": width, "height": height, "src": htmlms.vimeo.ifriendly(value), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__28057,G__28046,G__28047,G__28048){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__28057,G__28046,G__28047,G__28048))
});
return React.createElement(G__28057,G__28058);
})();
var G__28050 = (function (){var G__28059 = "p";
var G__28060 = ({"style": ({"fontSize": ".8em"})});
var G__28061 = "If video doesn't appear, follow this direct link: ";
var G__28062 = (function (){var G__28066 = "a";
var G__28067 = ({"href": value, "title": title, "target": "_blank"});
var G__28068 = sablono.interpreter.interpret(title);
return React.createElement(G__28066,G__28067,G__28068);
})();
var G__28063 = " (";
var G__28064 = sablono.interpreter.interpret(length);
var G__28065 = ")";
return React.createElement(G__28059,G__28060,G__28061,G__28062,G__28063,G__28064,G__28065);
})();
var G__28051 = (function (){var G__28069 = "p";
var G__28070 = ({"style": ({"fontSize": ".8em"})});
var G__28071 = "Start the video to access more options in the video frame. To display the video captions,\n     click on the ";
var G__28072 = React.createElement("strong",null,"CC");
var G__28073 = "  button and choose the language you want the captions to be displayed in. To expand the video, use the ";
var G__28074 = React.createElement("strong",null,"Full Screen");
var G__28075 = " icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website.";
return React.createElement(G__28069,G__28070,G__28071,G__28072,G__28073,G__28074,G__28075);
})();
return React.createElement(G__28046,G__28047,G__28048,G__28049,G__28050,G__28051);
});
htmlms.vimeo.height_ratio = (function htmlms$vimeo$height_ratio(w,h){
return (h / htmlms.vimeo.gcd(w,h));
});
htmlms.vimeo.width_ratio = (function htmlms$vimeo$width_ratio(w,h){
return (w / htmlms.vimeo.gcd(w,h));
});
htmlms.vimeo.bmi_component = (function htmlms$vimeo$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__28138 = htmlms.vimeo.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__28138__$1 = ((((!((map__28138 == null)))?((((map__28138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28138):map__28138);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,cljs.core.cst$kw$title);
var vec__28139 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 16:9. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 4:3. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("non-standard ratio "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139,(1),null);
var G__28145 = "div";
var G__28146 = null;
var G__28147 = React.createElement("h3",null,"Parameters");
var G__28148 = (function (){var G__28157 = "div";
var G__28158 = null;
var G__28159 = (function (){var attrs28156 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28156))?sablono.interpreter.attributes(attrs28156):null),((cljs.core.map_QMARK_(attrs28156))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28156)], null)));
})();
var G__28160 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__28157,G__28158,G__28159,G__28160);
})();
var G__28149 = (function (){var G__28162 = "div";
var G__28163 = null;
var G__28164 = (function (){var attrs28161 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((width | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28161))?sablono.interpreter.attributes(attrs28161):null),((cljs.core.map_QMARK_(attrs28161))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28161)], null)));
})();
var G__28165 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__28162,G__28163,G__28164,G__28165);
})();
var G__28150 = (function (){var G__28167 = "div";
var G__28168 = null;
var G__28169 = (function (){var attrs28166 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((height | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28166))?sablono.interpreter.attributes(attrs28166):null),((cljs.core.map_QMARK_(attrs28166))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28166)], null)));
})();
var G__28170 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__28167,G__28168,G__28169,G__28170);
})();
var G__28151 = (function (){var G__28172 = "div";
var G__28173 = null;
var G__28174 = (function (){var attrs28171 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28171))?sablono.interpreter.attributes(attrs28171):null),((cljs.core.map_QMARK_(attrs28171))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28171)], null)));
})();
var G__28175 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__28172,G__28173,G__28174,G__28175);
})();
var G__28152 = (function (){var G__28177 = "div";
var G__28178 = null;
var G__28179 = (function (){var attrs28176 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28176))?sablono.interpreter.attributes(attrs28176):null),((cljs.core.map_QMARK_(attrs28176))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28176)], null)));
})();
var G__28180 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__28177,G__28178,G__28179,G__28180);
})();
var G__28153 = (function (){var G__28182 = "div";
var G__28183 = null;
var G__28184 = (function (){var attrs28181 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28181))?sablono.interpreter.attributes(attrs28181):null),((cljs.core.map_QMARK_(attrs28181))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28181)], null)));
})();
var G__28185 = (function (){var G__28187 = "span";
var G__28188 = ({"style": ({"color": color})});
var G__28189 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__28187,G__28188,G__28189);
})();
var G__28186 = sablono.interpreter.interpret(htmlms.vimeo.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__28182,G__28183,G__28184,G__28185,G__28186);
})();
var G__28154 = (function (){var G__28191 = "div";
var G__28192 = null;
var G__28193 = (function (){var attrs28190 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28190))?sablono.interpreter.attributes(attrs28190):null),((cljs.core.map_QMARK_(attrs28190))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28190)], null)));
})();
var G__28194 = sablono.interpreter.interpret(htmlms.vimeo.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28191,G__28192,G__28193,G__28194);
})();
var G__28155 = (function (){var G__28196 = "div";
var G__28197 = null;
var G__28198 = (function (){var attrs28195 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28195))?sablono.interpreter.attributes(attrs28195):null),((cljs.core.map_QMARK_(attrs28195))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28195)], null)));
})();
var G__28199 = sablono.interpreter.interpret(htmlms.vimeo.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28196,G__28197,G__28198,G__28199);
})();
return React.createElement(G__28145,G__28146,G__28147,G__28148,G__28149,G__28150,G__28151,G__28152,G__28153,G__28154,G__28155);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$vimeo,cljs.core.cst$kw$Vimeo], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"Vimeo",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.vimeo.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(360),cljs.core.cst$kw$width,(640),cljs.core.cst$kw$yurl,"https://vimeo.com/10570139",cljs.core.cst$kw$length,"00:22",cljs.core.cst$kw$title,"\u201CThe Last 3 Minutes\u201D Directed by Po Chan"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.vimeo.main = (function htmlms$vimeo$main(){
var temp__6736__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__6736__auto__)){
var node = temp__6736__auto__;
var G__28204 = React.createElement("div",null,"");
var G__28205 = node;
return ReactDOM.render(G__28204,G__28205);
} else {
return null;
}
});
htmlms.vimeo.main();
