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
htmlms.tedtalks.initial_title = (function (){var G__24151 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24151) : cljs.core.atom.call(null,G__24151));
})();
}
if(typeof htmlms.tedtalks.initial_length !== 'undefined'){
} else {
htmlms.tedtalks.initial_length = (function (){var G__24152 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24152) : cljs.core.atom.call(null,G__24152));
})();
}
htmlms.tedtalks.intervalobj = (function (){var G__24153 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.tedtalks.initial_length) : cljs.core.deref.call(null,htmlms.tedtalks.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__24153) : goog.date.Interval.fromIsoString.call(null,G__24153));
})();
htmlms.tedtalks.get_id_from_url = (function htmlms$tedtalks$get_id_from_url(u){

return u;
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.tedtalks.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.tedtalks.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.tedtalks.timeout = (function htmlms$tedtalks$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__24156_24158 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__24157_24159 = ms;
setTimeout(G__24156_24158,G__24157_24159);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$tedtalks,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator* \n\n  This application has been developed using the TED API and is not an official service of TED",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.tedtalks.gcd = (function htmlms$tedtalks$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24160_SHARP_){
return (cljs.core.mod(x,p1__24160_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.tedtalks.receiver = (function htmlms$tedtalks$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.tedtalks.xhr_data = (function htmlms$tedtalks$xhr_data(url,cb){
var G__24164 = [cljs.core.str(url)].join('');
var G__24165 = ((function (G__24164){
return (function (f){
var xhr = f.target;
var G__24166 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24166) : cb.call(null,G__24166));
});})(G__24164))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__24164,G__24165) : goog.net.XhrIo.send.call(null,G__24164,G__24165));
});
htmlms.tedtalks.xhr_data_ted = (function htmlms$tedtalks$xhr_data_ted(url,content){
var G__24171 = [cljs.core.str(url)].join('');
var G__24172 = htmlms.tedtalks.receiver;
var G__24173 = "GET";
var G__24174 = content;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$4(G__24171,G__24172,G__24173,G__24174) : goog.net.XhrIo.send.call(null,G__24171,G__24172,G__24173,G__24174));
});
htmlms.tedtalks.calc_bmi = (function htmlms$tedtalks$calc_bmi(bmi_data){
var map__24177 = bmi_data;
var map__24177__$1 = ((((!((map__24177 == null)))?((((map__24177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24177):map__24177);
var data = map__24177__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,cljs.core.cst$kw$title);
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
var G__24219 = "div";
var G__24220 = null;
var G__24221 = (function (){var G__24225 = "p";
var G__24226 = ({"style": ({"fontSize": ".8em"})});
var G__24227 = "Click the ";
var G__24228 = React.createElement("strong",null,"Play");
var G__24229 = " icon to begin.";
return React.createElement(G__24225,G__24226,G__24227,G__24228,G__24229);
})();
var G__24222 = (function (){var G__24230 = "iframe";
var G__24231 = ({"width": width, "height": height, "src": htmlms.tedtalks.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__24230,G__24219,G__24220,G__24221){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__24230,G__24219,G__24220,G__24221))
});
return React.createElement(G__24230,G__24231);
})();
var G__24223 = (function (){var G__24232 = "p";
var G__24233 = ({"style": ({"fontSize": ".8em"})});
var G__24234 = "If video doesn't appear, follow this direct link: ";
var G__24235 = (function (){var G__24239 = "a";
var G__24240 = ({"href": value, "title": title, "target": "_blank"});
var G__24241 = sablono.interpreter.interpret(title);
return React.createElement(G__24239,G__24240,G__24241);
})();
var G__24236 = " (";
var G__24237 = sablono.interpreter.interpret(length);
var G__24238 = ")";
return React.createElement(G__24232,G__24233,G__24234,G__24235,G__24236,G__24237,G__24238);
})();
var G__24224 = (function (){var G__24242 = "p";
var G__24243 = ({"style": ({"fontSize": ".8em"})});
var G__24244 = "Start the video to access more options in the video frame. To display the video captions,\n     click on the ";
var G__24245 = React.createElement("strong",null,"gray speech bubble");
var G__24246 = " with three dots in the center and choose the language you want the captions to be displayed in. To expand the video, use the ";
var G__24247 = React.createElement("strong",null,"Full Screen");
var G__24248 = " icon in the bottom right-hand corner or use the direct link above to open the video on the TED website.\n     To navigate the video using the transcript, click ";
var G__24249 = React.createElement("strong",null,"Interactive Transcript");
var G__24250 = ".";
return React.createElement(G__24242,G__24243,G__24244,G__24245,G__24246,G__24247,G__24248,G__24249,G__24250);
})();
return React.createElement(G__24219,G__24220,G__24221,G__24222,G__24223,G__24224);
});
htmlms.tedtalks.height_ratio = (function htmlms$tedtalks$height_ratio(w,h){
return (h / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.width_ratio = (function htmlms$tedtalks$width_ratio(w,h){
return (w / htmlms.tedtalks.gcd(w,h));
});
htmlms.tedtalks.bmi_component = (function htmlms$tedtalks$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24313 = htmlms.tedtalks.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24313__$1 = ((((!((map__24313 == null)))?((((map__24313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24313):map__24313);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,cljs.core.cst$kw$title);
var vec__24314 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.tedtalks.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24314,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24314,(1),null);
var G__24320 = "div";
var G__24321 = null;
var G__24322 = React.createElement("h3",null,"Parameters");
var G__24323 = (function (){var G__24332 = "div";
var G__24333 = null;
var G__24334 = (function (){var attrs24331 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24331))?sablono.interpreter.attributes(attrs24331):null),((cljs.core.map_QMARK_(attrs24331))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24331)], null)));
})();
var G__24335 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__24332,G__24333,G__24334,G__24335);
})();
var G__24324 = (function (){var G__24337 = "div";
var G__24338 = null;
var G__24339 = (function (){var attrs24336 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24336))?sablono.interpreter.attributes(attrs24336):null),((cljs.core.map_QMARK_(attrs24336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24336)], null)));
})();
var G__24340 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24337,G__24338,G__24339,G__24340);
})();
var G__24325 = (function (){var G__24342 = "div";
var G__24343 = null;
var G__24344 = (function (){var attrs24341 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24341))?sablono.interpreter.attributes(attrs24341):null),((cljs.core.map_QMARK_(attrs24341))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24341)], null)));
})();
var G__24345 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24342,G__24343,G__24344,G__24345);
})();
var G__24326 = (function (){var G__24347 = "div";
var G__24348 = null;
var G__24349 = (function (){var attrs24346 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24346))?sablono.interpreter.attributes(attrs24346):null),((cljs.core.map_QMARK_(attrs24346))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24346)], null)));
})();
var G__24350 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24347,G__24348,G__24349,G__24350);
})();
var G__24327 = (function (){var G__24352 = "div";
var G__24353 = null;
var G__24354 = (function (){var attrs24351 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24351))?sablono.interpreter.attributes(attrs24351):null),((cljs.core.map_QMARK_(attrs24351))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24351)], null)));
})();
var G__24355 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24352,G__24353,G__24354,G__24355);
})();
var G__24328 = (function (){var G__24357 = "div";
var G__24358 = null;
var G__24359 = (function (){var attrs24356 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24356))?sablono.interpreter.attributes(attrs24356):null),((cljs.core.map_QMARK_(attrs24356))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24356)], null)));
})();
var G__24360 = (function (){var G__24362 = "span";
var G__24363 = ({"style": ({"color": color})});
var G__24364 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24362,G__24363,G__24364);
})();
var G__24361 = sablono.interpreter.interpret(htmlms.tedtalks.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24357,G__24358,G__24359,G__24360,G__24361);
})();
var G__24329 = (function (){var G__24366 = "div";
var G__24367 = null;
var G__24368 = (function (){var attrs24365 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24365))?sablono.interpreter.attributes(attrs24365):null),((cljs.core.map_QMARK_(attrs24365))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24365)], null)));
})();
var G__24369 = sablono.interpreter.interpret(htmlms.tedtalks.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24366,G__24367,G__24368,G__24369);
})();
var G__24330 = (function (){var G__24371 = "div";
var G__24372 = null;
var G__24373 = (function (){var attrs24370 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24370))?sablono.interpreter.attributes(attrs24370):null),((cljs.core.map_QMARK_(attrs24370))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24370)], null)));
})();
var G__24374 = sablono.interpreter.interpret(htmlms.tedtalks.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24371,G__24372,G__24373,G__24374);
})();
return React.createElement(G__24320,G__24321,G__24322,G__24323,G__24324,G__24325,G__24326,G__24327,G__24328,G__24329,G__24330);
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
var G__24379 = React.createElement("div",null,"");
var G__24380 = node;
return React.render(G__24379,G__24380);
} else {
return null;
}
});
htmlms.tedtalks.main();
