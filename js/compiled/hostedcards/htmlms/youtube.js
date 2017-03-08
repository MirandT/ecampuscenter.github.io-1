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
htmlms.youtube.initial_title = (function (){var G__19063 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19063) : cljs.core.atom.call(null,G__19063));
})();
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = (function (){var G__19064 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19064) : cljs.core.atom.call(null,G__19064));
})();
}
htmlms.youtube.intervalobj = (function (){var G__19065 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__19065) : goog.date.Interval.fromIsoString.call(null,G__19065));
})();
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.youtube.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.youtube.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19068_19070 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__19069_19071 = ms;
setTimeout(G__19068_19070,G__19069_19071);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19072_SHARP_){
return (cljs.core.mod(x,p1__19072_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
var G__19076 = [cljs.core.str(url)].join('');
var G__19077 = ((function (G__19076){
return (function (f){
var xhr = f.target;
var G__19078 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19078) : cb.call(null,G__19078));
});})(G__19076))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__19076,G__19077) : goog.net.XhrIo.send.call(null,G__19076,G__19077));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__19081 = bmi_data;
var map__19081__$1 = ((((!((map__19081 == null)))?((((map__19081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19081):map__19081);
var data = map__19081__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.cst$kw$title);
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
var G__19119 = "div";
var G__19120 = null;
var G__19121 = (function (){var G__19125 = "p";
var G__19126 = ({"style": ({"fontSize": ".8em"})});
var G__19127 = "Click the ";
var G__19128 = React.createElement("strong",null,"Play");
var G__19129 = " icon to begin.";
return React.createElement(G__19125,G__19126,G__19127,G__19128,G__19129);
})();
var G__19122 = (function (){var G__19130 = "iframe";
var G__19131 = ({"width": width, "height": height, "src": htmlms.youtube.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0&start="),cljs.core.str(startTime)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__19130,G__19119,G__19120,G__19121){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__19130,G__19119,G__19120,G__19121))
});
return React.createElement(G__19130,G__19131);
})();
var G__19123 = (function (){var G__19132 = "p";
var G__19133 = ({"style": ({"fontSize": ".8em"})});
var G__19134 = "If video doesn't appear, follow this direct link: ";
var G__19135 = (function (){var G__19139 = "a";
var G__19140 = ({"href": [cljs.core.str(htmlms.youtube.ialmostfriendly(value)),cljs.core.str("&t="),cljs.core.str(startTime)].join(''), "title": title, "target": "_blank"});
var G__19141 = sablono.interpreter.interpret(title);
return React.createElement(G__19139,G__19140,G__19141);
})();
var G__19136 = " (";
var G__19137 = sablono.interpreter.interpret(length);
var G__19138 = ")";
return React.createElement(G__19132,G__19133,G__19134,G__19135,G__19136,G__19137,G__19138);
})();
var G__19124 = (function (){var G__19142 = "p";
var G__19143 = ({"style": ({"fontSize": ".8em"})});
var G__19144 = "Start the video to access more options in the video frame: to display the video captions, click ";
var G__19145 = React.createElement("strong",null,"CC");
var G__19146 = ".\u00A0\n     To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript.";
return React.createElement(G__19142,G__19143,G__19144,G__19145,G__19146);
})();
return React.createElement(G__19119,G__19120,G__19121,G__19122,G__19123,G__19124);
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__19215 = htmlms.youtube.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__19215__$1 = ((((!((map__19215 == null)))?((((map__19215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19215):map__19215);
var startTime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$startTime);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,cljs.core.cst$kw$title);
var vec__19216 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19216,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19216,(1),null);
var G__19222 = "div";
var G__19223 = null;
var G__19224 = React.createElement("h3",null,"Parameters");
var G__19225 = (function (){var G__19235 = "div";
var G__19236 = null;
var G__19237 = (function (){var attrs19234 = [cljs.core.str("url: "),cljs.core.str([cljs.core.str([cljs.core.str(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v="))].join('')),cljs.core.str("&t="),cljs.core.str(startTime)].join(''))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19234))?sablono.interpreter.attributes(attrs19234):null),((cljs.core.map_QMARK_(attrs19234))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19234)], null)));
})();
var G__19238 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$yurl,[cljs.core.str(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v=")),cljs.core.str("&t="),cljs.core.str(startTime)].join(''),(0),(100)));
return React.createElement(G__19235,G__19236,G__19237,G__19238);
})();
var G__19226 = (function (){var G__19240 = "div";
var G__19241 = null;
var G__19242 = (function (){var attrs19239 = [cljs.core.str("start time: "),cljs.core.str((startTime | (0))),cljs.core.str("s")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19239))?sablono.interpreter.attributes(attrs19239):null),((cljs.core.map_QMARK_(attrs19239))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19239)], null)));
})();
var G__19243 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$startTime,startTime,(0),(100)));
return React.createElement(G__19240,G__19241,G__19242,G__19243);
})();
var G__19227 = (function (){var G__19245 = "div";
var G__19246 = null;
var G__19247 = (function (){var attrs19244 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19244))?sablono.interpreter.attributes(attrs19244):null),((cljs.core.map_QMARK_(attrs19244))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19244)], null)));
})();
var G__19248 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__19245,G__19246,G__19247,G__19248);
})();
var G__19228 = (function (){var G__19250 = "div";
var G__19251 = null;
var G__19252 = (function (){var attrs19249 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19249))?sablono.interpreter.attributes(attrs19249):null),((cljs.core.map_QMARK_(attrs19249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19249)], null)));
})();
var G__19253 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__19250,G__19251,G__19252,G__19253);
})();
var G__19229 = (function (){var G__19255 = "div";
var G__19256 = null;
var G__19257 = (function (){var attrs19254 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19254))?sablono.interpreter.attributes(attrs19254):null),((cljs.core.map_QMARK_(attrs19254))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19254)], null)));
})();
var G__19258 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__19255,G__19256,G__19257,G__19258);
})();
var G__19230 = (function (){var G__19260 = "div";
var G__19261 = null;
var G__19262 = (function (){var attrs19259 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19259))?sablono.interpreter.attributes(attrs19259):null),((cljs.core.map_QMARK_(attrs19259))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19259)], null)));
})();
var G__19263 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__19260,G__19261,G__19262,G__19263);
})();
var G__19231 = (function (){var G__19265 = "div";
var G__19266 = null;
var G__19267 = (function (){var attrs19264 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19264))?sablono.interpreter.attributes(attrs19264):null),((cljs.core.map_QMARK_(attrs19264))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19264)], null)));
})();
var G__19268 = (function (){var G__19270 = "span";
var G__19271 = ({"style": ({"color": color})});
var G__19272 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__19270,G__19271,G__19272);
})();
var G__19269 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__19265,G__19266,G__19267,G__19268,G__19269);
})();
var G__19232 = (function (){var G__19274 = "div";
var G__19275 = null;
var G__19276 = (function (){var attrs19273 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19273))?sablono.interpreter.attributes(attrs19273):null),((cljs.core.map_QMARK_(attrs19273))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19273)], null)));
})();
var G__19277 = sablono.interpreter.interpret(htmlms.youtube.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__19274,G__19275,G__19276,G__19277);
})();
var G__19233 = (function (){var G__19279 = "div";
var G__19280 = null;
var G__19281 = (function (){var attrs19278 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19278))?sablono.interpreter.attributes(attrs19278):null),((cljs.core.map_QMARK_(attrs19278))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19278)], null)));
})();
var G__19282 = sablono.interpreter.interpret(htmlms.youtube.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__19279,G__19280,G__19281,G__19282);
})();
return React.createElement(G__19222,G__19223,G__19224,G__19225,G__19226,G__19227,G__19228,G__19229,G__19230,G__19231,G__19232,G__19233);
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
var G__19287 = React.createElement("div",null,"");
var G__19288 = node;
return React.render(G__19287,G__19288);
} else {
return null;
}
});
htmlms.youtube.main();
