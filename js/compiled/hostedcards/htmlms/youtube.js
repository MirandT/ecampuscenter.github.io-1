// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.youtube');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom.server');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('cljs.reader');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('devcards.core');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
cljs.core.enable_console_print_BANG_();
devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
if(typeof htmlms.youtube.initial_title !== 'undefined'){
} else {
htmlms.youtube.initial_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null));
}
htmlms.youtube.intervalobj = (function (){var G__28450 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__28450) : goog.date.Interval.fromIsoString.call(null,G__28450));
})();
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.youtube.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.youtube.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__28453_28455 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__28454_28456 = ms;
setTimeout(G__28453_28455,G__28454_28456);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28457_SHARP_){
return (cljs.core.mod(x,p1__28457_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
var G__28461 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__28462 = ((function (G__28461){
return (function (f){
var xhr = f.target;
var G__28463 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__28463) : cb.call(null,G__28463));
});})(G__28461))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__28461,G__28462) : goog.net.XhrIo.send.call(null,G__28461,G__28462));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__28466 = bmi_data;
var map__28466__$1 = ((((!((map__28466 == null)))?((((map__28466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28466):map__28466);
var data = map__28466__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,cljs.core.cst$kw$title);
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
htmlms.youtube.xhr_data([cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.get_id_from_url(e.target.value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&fields=items(contentDetails%2Csnippet)&key=AIzaSyAEqd5yONIxbtMZO-iF5t5aQ0Am1QmTPzs")].join(''),(function (g){
var updlength = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"contentDetails","duration"], null));
var updtitle = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read(htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"snippet","title"], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["url: ",value], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["updlength: ",updlength], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$length,(function (){var me = (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(updlength) : goog.date.Interval.fromIsoString.call(null,updlength));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((me.hours > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(me.hours),cljs.core.str.cljs$core$IFn$_invoke$arity$1("h ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(me.minutes),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(me.seconds),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(htmlms.youtube.initial_length,cljs.core.assoc,cljs.core.cst$kw$initlength,updlength);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":initlength: ",cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$title,updtitle);
}));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial-length: ",htmlms.youtube.initial_length], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("param:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join('')], 0));

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" height=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.ifriendly(skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel=0&start="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.ialmostfriendly(skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&t="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" target=\"_blank\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a> ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")</p><p>Start the video to access more options in the video frame: to display the video captions, click\u00A0<strong>CC</strong>.\u00A0To expand the video, use the direct link above to open the video in YouTube, and click the Full Screen icon. To navigate the video using the transcript, click YouTube, select ...More, then Transcript.</p>\n")].join('');
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
var G__28504 = "div";
var G__28505 = null;
var G__28506 = (function (){var G__28510 = "p";
var G__28511 = ({"style": ({"fontSize": ".8em"})});
var G__28512 = "Click the ";
var G__28513 = React.createElement("strong",null,"Play");
var G__28514 = " icon to begin.";
return React.createElement(G__28510,G__28511,G__28512,G__28513,G__28514);
})();
var G__28507 = (function (){var G__28515 = "iframe";
var G__28516 = ({"width": width, "height": height, "src": htmlms.youtube.ifriendly([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel=0&start="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__28515,G__28504,G__28505,G__28506){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__28515,G__28504,G__28505,G__28506))
});
return React.createElement(G__28515,G__28516);
})();
var G__28508 = (function (){var G__28517 = "p";
var G__28518 = ({"style": ({"fontSize": ".8em"})});
var G__28519 = "If video doesn't appear, follow this direct link: ";
var G__28520 = (function (){var G__28524 = "a";
var G__28525 = ({"href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.ialmostfriendly(value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&t="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime)].join(''), "title": title, "target": "_blank"});
var G__28526 = sablono.interpreter.interpret(title);
return React.createElement(G__28524,G__28525,G__28526);
})();
var G__28521 = " (";
var G__28522 = sablono.interpreter.interpret(length);
var G__28523 = ")";
return React.createElement(G__28517,G__28518,G__28519,G__28520,G__28521,G__28522,G__28523);
})();
var G__28509 = (function (){var G__28527 = "p";
var G__28528 = ({"style": ({"fontSize": ".8em"})});
var G__28529 = "Start the video to access more options in the video frame: to display the video captions, click ";
var G__28530 = React.createElement("strong",null,"CC");
var G__28531 = ".\u00A0\n     To expand the video, use the direct link above to open the video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript.";
return React.createElement(G__28527,G__28528,G__28529,G__28530,G__28531);
})();
return React.createElement(G__28504,G__28505,G__28506,G__28507,G__28508,G__28509);
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__28600 = htmlms.youtube.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__28600__$1 = ((((!((map__28600 == null)))?((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28600):map__28600);
var startTime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$startTime);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,cljs.core.cst$kw$title);
var vec__28601 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 16:9. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 4:3. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("non-standard ratio "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(1),null);
var G__28607 = "div";
var G__28608 = null;
var G__28609 = React.createElement("h3",null,"Parameters");
var G__28610 = (function (){var G__28620 = "div";
var G__28621 = null;
var G__28622 = (function (){var attrs28619 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v="))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&t="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime)].join(''))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28619))?sablono.interpreter.attributes(attrs28619):null),((cljs.core.map_QMARK_(attrs28619))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28619)], null)));
})();
var G__28623 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$yurl,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v=")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&t="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(startTime)].join(''),(0),(100)));
return React.createElement(G__28620,G__28621,G__28622,G__28623);
})();
var G__28611 = (function (){var G__28625 = "div";
var G__28626 = null;
var G__28627 = (function (){var attrs28624 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("start time: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((startTime | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28624))?sablono.interpreter.attributes(attrs28624):null),((cljs.core.map_QMARK_(attrs28624))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28624)], null)));
})();
var G__28628 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$startTime,startTime,(0),(100)));
return React.createElement(G__28625,G__28626,G__28627,G__28628);
})();
var G__28612 = (function (){var G__28630 = "div";
var G__28631 = null;
var G__28632 = (function (){var attrs28629 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((width | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28629))?sablono.interpreter.attributes(attrs28629):null),((cljs.core.map_QMARK_(attrs28629))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28629)], null)));
})();
var G__28633 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__28630,G__28631,G__28632,G__28633);
})();
var G__28613 = (function (){var G__28635 = "div";
var G__28636 = null;
var G__28637 = (function (){var attrs28634 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((height | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28634))?sablono.interpreter.attributes(attrs28634):null),((cljs.core.map_QMARK_(attrs28634))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28634)], null)));
})();
var G__28638 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__28635,G__28636,G__28637,G__28638);
})();
var G__28614 = (function (){var G__28640 = "div";
var G__28641 = null;
var G__28642 = (function (){var attrs28639 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28639))?sablono.interpreter.attributes(attrs28639):null),((cljs.core.map_QMARK_(attrs28639))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28639)], null)));
})();
var G__28643 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__28640,G__28641,G__28642,G__28643);
})();
var G__28615 = (function (){var G__28645 = "div";
var G__28646 = null;
var G__28647 = (function (){var attrs28644 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28644))?sablono.interpreter.attributes(attrs28644):null),((cljs.core.map_QMARK_(attrs28644))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28644)], null)));
})();
var G__28648 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__28645,G__28646,G__28647,G__28648);
})();
var G__28616 = (function (){var G__28650 = "div";
var G__28651 = null;
var G__28652 = (function (){var attrs28649 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28649))?sablono.interpreter.attributes(attrs28649):null),((cljs.core.map_QMARK_(attrs28649))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28649)], null)));
})();
var G__28653 = (function (){var G__28655 = "span";
var G__28656 = ({"style": ({"color": color})});
var G__28657 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__28655,G__28656,G__28657);
})();
var G__28654 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__28650,G__28651,G__28652,G__28653,G__28654);
})();
var G__28617 = (function (){var G__28659 = "div";
var G__28660 = null;
var G__28661 = (function (){var attrs28658 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28658))?sablono.interpreter.attributes(attrs28658):null),((cljs.core.map_QMARK_(attrs28658))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28658)], null)));
})();
var G__28662 = sablono.interpreter.interpret(htmlms.youtube.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__28659,G__28660,G__28661,G__28662);
})();
var G__28618 = (function (){var G__28664 = "div";
var G__28665 = null;
var G__28666 = (function (){var attrs28663 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28663))?sablono.interpreter.attributes(attrs28663):null),((cljs.core.map_QMARK_(attrs28663))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28663)], null)));
})();
var G__28667 = sablono.interpreter.interpret(htmlms.youtube.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__28664,G__28665,G__28666,G__28667);
})();
return React.createElement(G__28607,G__28608,G__28609,G__28610,G__28611,G__28612,G__28613,G__28614,G__28615,G__28616,G__28617,G__28618);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$YouTube], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"YouTube",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.youtube.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$startTime,(0),cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://www.youtube.com/watch?v=Wfj4g8zh2gk",cljs.core.cst$kw$length,"4m 16s",cljs.core.cst$kw$title,"Like I used to do.mp4"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.youtube.main = (function htmlms$youtube$main(){
var temp__6736__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__6736__auto__)){
var node = temp__6736__auto__;
var G__28672 = React.createElement("div",null,"");
var G__28673 = node;
return ReactDOM.render(G__28672,G__28673);
} else {
return null;
}
});
htmlms.youtube.main();
