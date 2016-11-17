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
htmlms.youtube.initial_title = (function (){var G__18837 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18837) : cljs.core.atom.call(null,G__18837));
})();
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = (function (){var G__18838 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18838) : cljs.core.atom.call(null,G__18838));
})();
}
htmlms.youtube.intervalobj = (function (){var G__18839 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.youtube.initial_length) : cljs.core.deref.call(null,htmlms.youtube.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__18839) : goog.date.Interval.fromIsoString.call(null,G__18839));
})();
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.youtube.get_id_from_url("https://www.youtube.com/watch?v=Wfj4g8zh2gk")], 0));
htmlms.youtube.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__18842_18844 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__18843_18845 = ms;
setTimeout(G__18842_18844,G__18843_18845);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$youtube,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18846_SHARP_){
return (cljs.core.mod(x,p1__18846_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
var G__18850 = [cljs.core.str(url)].join('');
var G__18851 = ((function (G__18850){
return (function (f){
var xhr = f.target;
var G__18852 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18852) : cb.call(null,G__18852));
});})(G__18850))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__18850,G__18851) : goog.net.XhrIo.send.call(null,G__18850,G__18851));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__18855 = bmi_data;
var map__18855__$1 = ((((!((map__18855 == null)))?((((map__18855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18855):map__18855);
var data = map__18855__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18855__$1,cljs.core.cst$kw$title);
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
htmlms.youtube.fluff = (function htmlms$youtube$fluff(skinny,startTime,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.youtube.ifriendly(skinny)),cljs.core.str("?rel=0&start="),cljs.core.str(startTime),cljs.core.str("\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str([cljs.core.str(skinny),cljs.core.str("&t="),cljs.core.str(startTime)].join('')),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame: to display the video captions, click\u00A0<strong>CC</strong>.\u00A0To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript, click YouTube, select ...More, then Transcript.</p>\n")].join('');
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
var G__18893 = "div";
var G__18894 = null;
var G__18895 = (function (){var G__18899 = "p";
var G__18900 = ({"style": ({"fontSize": ".8em"})});
var G__18901 = "Click the ";
var G__18902 = React.createElement("strong",null,"Play");
var G__18903 = " icon to begin.";
return React.createElement(G__18899,G__18900,G__18901,G__18902,G__18903);
})();
var G__18896 = (function (){var G__18904 = "iframe";
var G__18905 = ({"width": width, "height": height, "src": htmlms.youtube.ifriendly([cljs.core.str(value),cljs.core.str("?rel=0&start="),cljs.core.str(startTime)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__18904,G__18893,G__18894,G__18895){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__18904,G__18893,G__18894,G__18895))
});
return React.createElement(G__18904,G__18905);
})();
var G__18897 = (function (){var G__18906 = "p";
var G__18907 = ({"style": ({"fontSize": ".8em"})});
var G__18908 = "If video doesn't appear, follow this direct link: ";
var G__18909 = (function (){var G__18913 = "a";
var G__18914 = ({"href": [cljs.core.str(value),cljs.core.str("&t="),cljs.core.str(startTime)].join(''), "title": title, "target": "_blank"});
var G__18915 = sablono.interpreter.interpret(title);
return React.createElement(G__18913,G__18914,G__18915);
})();
var G__18910 = " (";
var G__18911 = sablono.interpreter.interpret(length);
var G__18912 = ")";
return React.createElement(G__18906,G__18907,G__18908,G__18909,G__18910,G__18911,G__18912);
})();
var G__18898 = (function (){var G__18916 = "p";
var G__18917 = ({"style": ({"fontSize": ".8em"})});
var G__18918 = "Start the video to access more options in the video frame: to display the video captions, click ";
var G__18919 = React.createElement("strong",null,"CC");
var G__18920 = ".\u00A0\n     To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript.";
return React.createElement(G__18916,G__18917,G__18918,G__18919,G__18920);
})();
return React.createElement(G__18893,G__18894,G__18895,G__18896,G__18897,G__18898);
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd(w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__18989 = htmlms.youtube.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__18989__$1 = ((((!((map__18989 == null)))?((((map__18989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18989):map__18989);
var startTime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$startTime);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,cljs.core.cst$kw$title);
var vec__18990 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.youtube.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(1),null);
var G__18996 = "div";
var G__18997 = null;
var G__18998 = React.createElement("h3",null,"Parameters");
var G__18999 = (function (){var G__19009 = "div";
var G__19010 = null;
var G__19011 = (function (){var attrs19008 = [cljs.core.str("url: "),cljs.core.str([cljs.core.str(yurl),cljs.core.str("&t="),cljs.core.str(startTime)].join(''))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19008))?sablono.interpreter.attributes(attrs19008):null),((cljs.core.map_QMARK_(attrs19008))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19008)], null)));
})();
var G__19012 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$yurl,[cljs.core.str(clojure.string.replace_first(yurl,"youtu.be/","www.youtube.com/watch?v=")),cljs.core.str("&t="),cljs.core.str(startTime)].join(''),(0),(100)));
return React.createElement(G__19009,G__19010,G__19011,G__19012);
})();
var G__19000 = (function (){var G__19014 = "div";
var G__19015 = null;
var G__19016 = (function (){var attrs19013 = [cljs.core.str("start time: "),cljs.core.str((startTime | (0))),cljs.core.str("s")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19013))?sablono.interpreter.attributes(attrs19013):null),((cljs.core.map_QMARK_(attrs19013))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19013)], null)));
})();
var G__19017 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$startTime,startTime,(0),(100)));
return React.createElement(G__19014,G__19015,G__19016,G__19017);
})();
var G__19001 = (function (){var G__19019 = "div";
var G__19020 = null;
var G__19021 = (function (){var attrs19018 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19018))?sablono.interpreter.attributes(attrs19018):null),((cljs.core.map_QMARK_(attrs19018))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19018)], null)));
})();
var G__19022 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__19019,G__19020,G__19021,G__19022);
})();
var G__19002 = (function (){var G__19024 = "div";
var G__19025 = null;
var G__19026 = (function (){var attrs19023 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19023))?sablono.interpreter.attributes(attrs19023):null),((cljs.core.map_QMARK_(attrs19023))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19023)], null)));
})();
var G__19027 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__19024,G__19025,G__19026,G__19027);
})();
var G__19003 = (function (){var G__19029 = "div";
var G__19030 = null;
var G__19031 = (function (){var attrs19028 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19028))?sablono.interpreter.attributes(attrs19028):null),((cljs.core.map_QMARK_(attrs19028))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19028)], null)));
})();
var G__19032 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__19029,G__19030,G__19031,G__19032);
})();
var G__19004 = (function (){var G__19034 = "div";
var G__19035 = null;
var G__19036 = (function (){var attrs19033 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19033))?sablono.interpreter.attributes(attrs19033):null),((cljs.core.map_QMARK_(attrs19033))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19033)], null)));
})();
var G__19037 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__19034,G__19035,G__19036,G__19037);
})();
var G__19005 = (function (){var G__19039 = "div";
var G__19040 = null;
var G__19041 = (function (){var attrs19038 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19038))?sablono.interpreter.attributes(attrs19038):null),((cljs.core.map_QMARK_(attrs19038))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19038)], null)));
})();
var G__19042 = (function (){var G__19044 = "span";
var G__19045 = ({"style": ({"color": color})});
var G__19046 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__19044,G__19045,G__19046);
})();
var G__19043 = sablono.interpreter.interpret(htmlms.youtube.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__19039,G__19040,G__19041,G__19042,G__19043);
})();
var G__19006 = (function (){var G__19048 = "div";
var G__19049 = null;
var G__19050 = (function (){var attrs19047 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19047))?sablono.interpreter.attributes(attrs19047):null),((cljs.core.map_QMARK_(attrs19047))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19047)], null)));
})();
var G__19051 = sablono.interpreter.interpret(htmlms.youtube.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__19048,G__19049,G__19050,G__19051);
})();
var G__19007 = (function (){var G__19053 = "div";
var G__19054 = null;
var G__19055 = (function (){var attrs19052 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs19052))?sablono.interpreter.attributes(attrs19052):null),((cljs.core.map_QMARK_(attrs19052))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19052)], null)));
})();
var G__19056 = sablono.interpreter.interpret(htmlms.youtube.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,startTime,width,height,(10),(50),length,title));
return React.createElement(G__19053,G__19054,G__19055,G__19056);
})();
return React.createElement(G__18996,G__18997,G__18998,G__18999,G__19000,G__19001,G__19002,G__19003,G__19004,G__19005,G__19006,G__19007);
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
var G__19061 = React.createElement("div",null,"");
var G__19062 = node;
return React.render(G__19061,G__19062);
} else {
return null;
}
});
htmlms.youtube.main();
