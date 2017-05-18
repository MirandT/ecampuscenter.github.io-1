// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.tedtalks');
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
if(typeof htmlms.tedtalks.initial_title !== 'undefined'){
} else {
htmlms.tedtalks.initial_title = (function (){var G__28210 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28210) : cljs.core.atom.call(null,G__28210));
})();
}
if(typeof htmlms.tedtalks.initial_length !== 'undefined'){
} else {
htmlms.tedtalks.initial_length = (function (){var G__28211 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28211) : cljs.core.atom.call(null,G__28211));
})();
}
htmlms.tedtalks.intervalobj = (function (){var G__28212 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.initial_length) : cljs.core.deref.call(null,htmlms.tedtalks.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__28212) : goog.date.Interval.fromIsoString.call(null,G__28212));
})();
htmlms.tedtalks.get_id_from_url = (function htmlms$tedtalks$get_id_from_url(u){

return u;
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.tedtalks.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.tedtalks.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.tedtalks.timeout = (function htmlms$tedtalks$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__28215_28217 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__28216_28218 = ms;
setTimeout(G__28215_28217,G__28216_28218);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$tedtalks,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator* \n\n  This application has been developed using the TED API and is not an official service of TED",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.tedtalks.gcd = (function htmlms$tedtalks$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28219_SHARP_){
return (cljs.core.mod(x,p1__28219_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.tedtalks.receiver = (function htmlms$tedtalks$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.tedtalks.xhr_data = (function htmlms$tedtalks$xhr_data(url,cb){
var G__28223 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__28224 = ((function (G__28223){
return (function (f){
var xhr = f.target;
var G__28225 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__28225) : cb.call(null,G__28225));
});})(G__28223))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__28223,G__28224) : goog.net.XhrIo.send.call(null,G__28223,G__28224));
});
htmlms.tedtalks.xhr_data_ted = (function htmlms$tedtalks$xhr_data_ted(url,content){
var G__28230 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__28231 = htmlms.tedtalks.receiver;
var G__28232 = "GET";
var G__28233 = content;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4(G__28230,G__28231,G__28232,G__28233) : goog.net.XhrIo.send.call(null,G__28230,G__28231,G__28232,G__28233));
});
htmlms.tedtalks.calc_bmi = (function htmlms$tedtalks$calc_bmi(bmi_data){
var map__28236 = bmi_data;
var map__28236__$1 = ((((!((map__28236 == null)))?((((map__28236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28236):map__28236);
var data = map__28236__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,cljs.core.cst$kw$title);
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
htmlms.tedtalks.xhr_data([cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.get_id_from_url(e.target.value))].join(''),(function (g){
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
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("param:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join('')], 0));

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" height=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.ifriendly(skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" frameBorder=\"0\" scrolling=\"no\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(skinny),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" target=\"_blank\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a> ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")</p><p>Start the video to access more options in the video frame. To display the video captions, click on the <strong>gray speech bubble</strong> with three dots in the center and choose the language you want the captions to be displayed in. To expand the video, use the <strong>Full Screen</strong> icon in the bottom right-hand corner or use the direct link above to open the video on the TED website. To navigate the video using the transcript, click <strong>Interactive Transcript</strong>.</p>\n")].join('');
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
var G__28278 = "div";
var G__28279 = null;
var G__28280 = (function (){var G__28284 = "p";
var G__28285 = ({"style": ({"fontSize": ".8em"})});
var G__28286 = "Click the ";
var G__28287 = React.createElement("strong",null,"Play");
var G__28288 = " icon to begin.";
return React.createElement(G__28284,G__28285,G__28286,G__28287,G__28288);
})();
var G__28281 = (function (){var G__28289 = "iframe";
var G__28290 = ({"width": width, "height": height, "src": htmlms.tedtalks.ifriendly([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__28289,G__28278,G__28279,G__28280){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__28289,G__28278,G__28279,G__28280))
});
return React.createElement(G__28289,G__28290);
})();
var G__28282 = (function (){var G__28291 = "p";
var G__28292 = ({"style": ({"fontSize": ".8em"})});
var G__28293 = "If video doesn't appear, follow this direct link: ";
var G__28294 = (function (){var G__28298 = "a";
var G__28299 = ({"href": value, "title": title, "target": "_blank"});
var G__28300 = sablono.interpreter.interpret(title);
return React.createElement(G__28298,G__28299,G__28300);
})();
var G__28295 = " (";
var G__28296 = sablono.interpreter.interpret(length);
var G__28297 = ")";
return React.createElement(G__28291,G__28292,G__28293,G__28294,G__28295,G__28296,G__28297);
})();
var G__28283 = (function (){var G__28301 = "p";
var G__28302 = ({"style": ({"fontSize": ".8em"})});
var G__28303 = "Start the video to access more options in the video frame. To display the video captions,\n     click on the ";
var G__28304 = React.createElement("strong",null,"gray speech bubble");
var G__28305 = " with three dots in the center and choose the language you want the captions to be displayed in. To expand the video, use the ";
var G__28306 = React.createElement("strong",null,"Full Screen");
var G__28307 = " icon in the bottom right-hand corner or use the direct link above to open the video on the TED website.\n     To navigate the video using the transcript, click ";
var G__28308 = React.createElement("strong",null,"Interactive Transcript");
var G__28309 = ".";
return React.createElement(G__28301,G__28302,G__28303,G__28304,G__28305,G__28306,G__28307,G__28308,G__28309);
})();
return React.createElement(G__28278,G__28279,G__28280,G__28281,G__28282,G__28283);
});
htmlms.tedtalks.height_ratio = (function htmlms$tedtalks$height_ratio(w,h){
return (h / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.width_ratio = (function htmlms$tedtalks$width_ratio(w,h){
return (w / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.bmi_component = (function htmlms$tedtalks$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__28372 = htmlms.tedtalks.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__28372__$1 = ((((!((map__28372 == null)))?((((map__28372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28372):map__28372);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,cljs.core.cst$kw$title);
var vec__28373 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 16:9. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 4:3. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("non-standard ratio "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(1),null);
var G__28379 = "div";
var G__28380 = null;
var G__28381 = React.createElement("h3",null,"Parameters");
var G__28382 = (function (){var G__28391 = "div";
var G__28392 = null;
var G__28393 = (function (){var attrs28390 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28390))?sablono.interpreter.attributes(attrs28390):null),((cljs.core.map_QMARK_(attrs28390))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28390)], null)));
})();
var G__28394 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__28391,G__28392,G__28393,G__28394);
})();
var G__28383 = (function (){var G__28396 = "div";
var G__28397 = null;
var G__28398 = (function (){var attrs28395 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((width | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28395))?sablono.interpreter.attributes(attrs28395):null),((cljs.core.map_QMARK_(attrs28395))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28395)], null)));
})();
var G__28399 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__28396,G__28397,G__28398,G__28399);
})();
var G__28384 = (function (){var G__28401 = "div";
var G__28402 = null;
var G__28403 = (function (){var attrs28400 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((height | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28400))?sablono.interpreter.attributes(attrs28400):null),((cljs.core.map_QMARK_(attrs28400))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28400)], null)));
})();
var G__28404 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__28401,G__28402,G__28403,G__28404);
})();
var G__28385 = (function (){var G__28406 = "div";
var G__28407 = null;
var G__28408 = (function (){var attrs28405 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28405))?sablono.interpreter.attributes(attrs28405):null),((cljs.core.map_QMARK_(attrs28405))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28405)], null)));
})();
var G__28409 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__28406,G__28407,G__28408,G__28409);
})();
var G__28386 = (function (){var G__28411 = "div";
var G__28412 = null;
var G__28413 = (function (){var attrs28410 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28410))?sablono.interpreter.attributes(attrs28410):null),((cljs.core.map_QMARK_(attrs28410))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28410)], null)));
})();
var G__28414 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__28411,G__28412,G__28413,G__28414);
})();
var G__28387 = (function (){var G__28416 = "div";
var G__28417 = null;
var G__28418 = (function (){var attrs28415 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28415))?sablono.interpreter.attributes(attrs28415):null),((cljs.core.map_QMARK_(attrs28415))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28415)], null)));
})();
var G__28419 = (function (){var G__28421 = "span";
var G__28422 = ({"style": ({"color": color})});
var G__28423 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__28421,G__28422,G__28423);
})();
var G__28420 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__28416,G__28417,G__28418,G__28419,G__28420);
})();
var G__28388 = (function (){var G__28425 = "div";
var G__28426 = null;
var G__28427 = (function (){var attrs28424 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28424))?sablono.interpreter.attributes(attrs28424):null),((cljs.core.map_QMARK_(attrs28424))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28424)], null)));
})();
var G__28428 = sablono.interpreter.interpret(htmlms.tedtalks.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28425,G__28426,G__28427,G__28428);
})();
var G__28389 = (function (){var G__28430 = "div";
var G__28431 = null;
var G__28432 = (function (){var attrs28429 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28429))?sablono.interpreter.attributes(attrs28429):null),((cljs.core.map_QMARK_(attrs28429))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28429)], null)));
})();
var G__28433 = sablono.interpreter.interpret(htmlms.tedtalks.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28430,G__28431,G__28432,G__28433);
})();
return React.createElement(G__28379,G__28380,G__28381,G__28382,G__28383,G__28384,G__28385,G__28386,G__28387,G__28388,G__28389);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$tedtalks,cljs.core.cst$kw$_u00a9_TED_DASH_CC_DASH_BY_DASH_NC_DASH_ND_DASH_3$0], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"\u00A9TED-CC-BY-NC-ND-3.0",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.tedtalks.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://www.ted.com/talks/teenaged_boy_wonders_play_bluegrass",cljs.core.cst$kw$length,"4m 55s",cljs.core.cst$kw$title,"Sleep Man Banjo Boys: Teen wonders play bluegrass"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.tedtalks.main = (function htmlms$tedtalks$main(){
var temp__6736__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__6736__auto__)){
var node = temp__6736__auto__;
var G__28438 = React.createElement("div",null,"");
var G__28439 = node;
return ReactDOM.render(G__28438,G__28439);
} else {
return null;
}
});
htmlms.tedtalks.main();
