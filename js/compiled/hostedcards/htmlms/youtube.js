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
htmlms.youtube.initial_title = (function (){var G__24385 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24385) : cljs.core.atom.call(null,G__24385));
})();
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = (function (){var G__24386 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24386) : cljs.core.atom.call(null,G__24386));
})();
}
htmlms.youtube.intervalobj = (function (){var G__24387 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__24387) : goog.date.Interval.fromIsoString.call(null,G__24387));
})();
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.youtube.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.youtube.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__24390_24392 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__24391_24393 = ms;
setTimeout(G__24390_24392,G__24391_24393);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24394_SHARP_){
return (cljs.core.mod(x,p1__24394_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
var G__24398 = [cljs.core.str(url)].join('');
var G__24399 = ((function (G__24398){
return (function (f){
var xhr = f.target;
var G__24400 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24400) : cb.call(null,G__24400));
});})(G__24398))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__24398,G__24399) : goog.net.XhrIo.send.call(null,G__24398,G__24399));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__24403 = bmi_data;
var map__24403__$1 = ((((!((map__24403 == null)))?((((map__24403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24403):map__24403);
var data = map__24403__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24403__$1,cljs.core.cst$kw$title);
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
htmlms.youtube.ialmostfriendly = (function htmlms$youtube$ialmostfriendly(url){

return clojure.string.replace_first(clojure.string.replace_first(url,"youtu.be/","www.youtube.com/watch?v="),"https:","");
});
htmlms.youtube.fluff = (function htmlms$youtube$fluff(skinny,startTime,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.youtube.ifriendly(skinny)),cljs.core.str("?rel=0&start="),cljs.core.str(startTime),cljs.core.str("\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str([cljs.core.str(htmlms.youtube.ialmostfriendly(skinny)),cljs.core.str("&t="),cljs.core.str(startTime)].join('')),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame: to display the video captions, click\u00A0<strong>CC</strong>.\u00A0To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript, click YouTube, select ...More, then Transcript.</p>\n")].join('');
});
htmlms.youtube.get_data = (function htmlms$youtube$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element("input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.youtube.htmlout = (function htmlms$youtube$htmlout(bmi_data,param,value,startTime,width,height,min,max,length,title){
return sablono.interpreter.create_element("textarea",({"cols": max, "rows": min, "value": htmlms.youtube.fluff(value,startTime,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
})}));
});
htmlms.youtube.htmloutvisual = (function htmlms$youtube$htmloutvisual(bmi_data,param,value,startTime,width,height,min,max,length,title){
var G__24441 = "div";
var G__24442 = null;
var G__24443 = (function (){var G__24447 = "p";
var G__24448 = ({"style": ({"fontSize": ".8em"})});
var G__24449 = "Click the ";
var G__24450 = React.createElement("strong",null,"Play");
var G__24451 = " icon to begin.";
return React.createElement(G__24447,G__24448,G__24449,G__24450,G__24451);
})();
var G__24444 = (function (){var G__24452 = "iframe";
var G__24453 = ({"width": width, "height": height, "src": htmlms.youtube.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0&start="),cljs.core.str(startTime)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__24452,G__24441,G__24442,G__24443){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__24452,G__24441,G__24442,G__24443))
});
return React.createElement(G__24452,G__24453);
})();
var G__24445 = (function (){var G__24454 = "p";
var G__24455 = ({"style": ({"fontSize": ".8em"})});
var G__24456 = "If video doesn't appear, follow this direct link: ";
var G__24457 = (function (){var G__24461 = "a";
var G__24462 = ({"href": [cljs.core.str(htmlms.youtube.ialmostfriendly(value)),cljs.core.str("&t="),cljs.core.str(startTime)].join(''), "title": title, "target": "_blank"});
var G__24463 = sablono.interpreter.interpret(title);
return React.createElement(G__24461,G__24462,G__24463);
})();
var G__24458 = " (";
var G__24459 = sablono.interpreter.interpret(length);
var G__24460 = ")";
return React.createElement(G__24454,G__24455,G__24456,G__24457,G__24458,G__24459,G__24460);
})();
var G__24446 = (function (){var G__24464 = "p";
var G__24465 = ({"style": ({"fontSize": ".8em"})});
var G__24466 = "Start the video to access more options in the video frame: to display the video captions, click ";
var G__24467 = React.createElement("strong",null,"CC");
var G__24468 = ".\u00A0\n     To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript.";
return React.createElement(G__24464,G__24465,G__24466,G__24467,G__24468);
})();
return React.createElement(G__24441,G__24442,G__24443,G__24444,G__24445,G__24446);
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24537 = htmlms.youtube.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24537__$1 = ((((!((map__24537 == null)))?((((map__24537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24537):map__24537);
var startTime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$startTime);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$title);
var vec__24538 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(1),null);
var G__24544 = "div";
var G__24545 = null;
var G__24546 = React.createElement("h3",null,"Parameters");
var G__24547 = (function (){var G__24557 = "div";
var G__24558 = null;
var G__24559 = (function (){var attrs24556 = [cljs.core.str("url: "),cljs.core.str([cljs.core.str(yurl),cljs.core.str("&t="),cljs.core.str(startTime)].join(''))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24556))?sablono.interpreter.attributes(attrs24556):null),((cljs.core.map_QMARK_(attrs24556))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24556)], null)));
})();
var G__24560 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$yurl,[cljs.core.str(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v=")),cljs.core.str("&t="),cljs.core.str(startTime)].join(''),(0),(100)));
return React.createElement(G__24557,G__24558,G__24559,G__24560);
})();
var G__24548 = (function (){var G__24562 = "div";
var G__24563 = null;
var G__24564 = (function (){var attrs24561 = [cljs.core.str("start time: "),cljs.core.str((startTime | (0))),cljs.core.str("s")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24561))?sablono.interpreter.attributes(attrs24561):null),((cljs.core.map_QMARK_(attrs24561))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24561)], null)));
})();
var G__24565 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$startTime,startTime,(0),(100)));
return React.createElement(G__24562,G__24563,G__24564,G__24565);
})();
var G__24549 = (function (){var G__24567 = "div";
var G__24568 = null;
var G__24569 = (function (){var attrs24566 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24566))?sablono.interpreter.attributes(attrs24566):null),((cljs.core.map_QMARK_(attrs24566))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24566)], null)));
})();
var G__24570 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24567,G__24568,G__24569,G__24570);
})();
var G__24550 = (function (){var G__24572 = "div";
var G__24573 = null;
var G__24574 = (function (){var attrs24571 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24571))?sablono.interpreter.attributes(attrs24571):null),((cljs.core.map_QMARK_(attrs24571))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24571)], null)));
})();
var G__24575 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24572,G__24573,G__24574,G__24575);
})();
var G__24551 = (function (){var G__24577 = "div";
var G__24578 = null;
var G__24579 = (function (){var attrs24576 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24576))?sablono.interpreter.attributes(attrs24576):null),((cljs.core.map_QMARK_(attrs24576))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24576)], null)));
})();
var G__24580 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24577,G__24578,G__24579,G__24580);
})();
var G__24552 = (function (){var G__24582 = "div";
var G__24583 = null;
var G__24584 = (function (){var attrs24581 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24581))?sablono.interpreter.attributes(attrs24581):null),((cljs.core.map_QMARK_(attrs24581))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24581)], null)));
})();
var G__24585 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24582,G__24583,G__24584,G__24585);
})();
var G__24553 = (function (){var G__24587 = "div";
var G__24588 = null;
var G__24589 = (function (){var attrs24586 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24586))?sablono.interpreter.attributes(attrs24586):null),((cljs.core.map_QMARK_(attrs24586))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24586)], null)));
})();
var G__24590 = (function (){var G__24592 = "span";
var G__24593 = ({"style": ({"color": color})});
var G__24594 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24592,G__24593,G__24594);
})();
var G__24591 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24587,G__24588,G__24589,G__24590,G__24591);
})();
var G__24554 = (function (){var G__24596 = "div";
var G__24597 = null;
var G__24598 = (function (){var attrs24595 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24595))?sablono.interpreter.attributes(attrs24595):null),((cljs.core.map_QMARK_(attrs24595))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24595)], null)));
})();
var G__24599 = sablono.interpreter.interpret(htmlms.youtube.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__24596,G__24597,G__24598,G__24599);
})();
var G__24555 = (function (){var G__24601 = "div";
var G__24602 = null;
var G__24603 = (function (){var attrs24600 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24600))?sablono.interpreter.attributes(attrs24600):null),((cljs.core.map_QMARK_(attrs24600))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24600)], null)));
})();
var G__24604 = sablono.interpreter.interpret(htmlms.youtube.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__24601,G__24602,G__24603,G__24604);
})();
return React.createElement(G__24544,G__24545,G__24546,G__24547,G__24548,G__24549,G__24550,G__24551,G__24552,G__24553,G__24554,G__24555);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$YouTube], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"YouTube",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.youtube.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$startTime,(0),cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://www.youtube.com/watch?v=Wfj4g8zh2gk",cljs.core.cst$kw$length,"4m 16s",cljs.core.cst$kw$title,"Like I used to do.mp4"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.youtube.main = (function htmlms$youtube$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
var G__24609 = React.createElement("div",null,"");
var G__24610 = node;
return React.render(G__24609,G__24610);
} else {
return null;
}
});
htmlms.youtube.main();
