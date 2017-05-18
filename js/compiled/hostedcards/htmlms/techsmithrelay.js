// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('htmlms.techsmithrelay');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
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
if(typeof htmlms.techsmithrelay.initial_title !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_title = (function (){var G__28678 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28678) : cljs.core.atom.call(null,G__28678));
})();
}
if(typeof htmlms.techsmithrelay.initial_length !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_length = (function (){var G__28679 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28679) : cljs.core.atom.call(null,G__28679));
})();
}
htmlms.techsmithrelay.intervalobj = (function (){var G__28680 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.initial_length) : cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__28680) : goog.date.Interval.fromIsoString.call(null,G__28680));
})();
htmlms.techsmithrelay.get_id_from_url = (function htmlms$techsmithrelay$get_id_from_url(u){

return clojure.string.replace_first(u,"https://boisestate.techsmithrelay.com/","");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.techsmithrelay.get_id_from_url("https://boisestate.techsmithrelay.com/TB3U")], 0));
htmlms.techsmithrelay.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.techsmithrelay.timeout = (function htmlms$techsmithrelay$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__28683_28685 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__28684_28686 = ms;
setTimeout(G__28683_28685,G__28684_28686);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.techsmithrelay.gcd = (function htmlms$techsmithrelay$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28687_SHARP_){
return (cljs.core.mod(x,p1__28687_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.techsmithrelay.xhr_data = (function htmlms$techsmithrelay$xhr_data(url,cb){
var G__28691 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__28692 = ((function (G__28691){
return (function (f){
var xhr = f.target;
var G__28693 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__28693) : cb.call(null,G__28693));
});})(G__28691))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__28691,G__28692) : goog.net.XhrIo.send.call(null,G__28691,G__28692));
});
htmlms.techsmithrelay.calc_bmi = (function htmlms$techsmithrelay$calc_bmi(bmi_data){
var map__28696 = bmi_data;
var map__28696__$1 = ((((!((map__28696 == null)))?((((map__28696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28696):map__28696);
var data = map__28696__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,cljs.core.cst$kw$title);
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
htmlms.techsmithrelay.xhr_data([cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://boisestate.techsmithrelay.com/api/v1/media/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.get_id_from_url(e.target.value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/details")].join(''),(function (g){
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
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("param:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join('')], 0));

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" height=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.ifriendly(skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" scrolling=\"no\" style=\"width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" border:0;\" frameBorder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(skinny),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" target=\"_blank\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a> ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")</p><p>Start the video to access more options in the video frame. To access the <strong>closed captions</strong> for this video click on the\n       <strong>CC</strong> button in the toolbar at the bottom of the video. To expand the video, click the <strong>Full Screen icon</strong> in the toolbar at the bottom of the video.</p>\n")].join('');
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
var G__28740 = "div";
var G__28741 = null;
var G__28742 = (function (){var G__28746 = "p";
var G__28747 = ({"style": ({"fontSize": ".8em"})});
var G__28748 = "Click the ";
var G__28749 = React.createElement("strong",null,"Play");
var G__28750 = " icon to begin.";
return React.createElement(G__28746,G__28747,G__28748,G__28749,G__28750);
})();
var G__28743 = (function (){var G__28751 = "iframe";
var G__28752 = ({"width": width, "height": height, "src": htmlms.techsmithrelay.ifriendly([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__28751,G__28740,G__28741,G__28742){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__28751,G__28740,G__28741,G__28742))
});
return React.createElement(G__28751,G__28752);
})();
var G__28744 = (function (){var G__28753 = "p";
var G__28754 = ({"style": ({"fontSize": ".8em"})});
var G__28755 = "If video doesn't appear, follow this direct link: ";
var G__28756 = (function (){var G__28760 = "a";
var G__28761 = ({"href": value, "title": title, "target": "_blank"});
var G__28762 = sablono.interpreter.interpret(title);
return React.createElement(G__28760,G__28761,G__28762);
})();
var G__28757 = " (";
var G__28758 = sablono.interpreter.interpret(length);
var G__28759 = ")";
return React.createElement(G__28753,G__28754,G__28755,G__28756,G__28757,G__28758,G__28759);
})();
var G__28745 = (function (){var G__28763 = "p";
var G__28764 = ({"style": ({"fontSize": ".8em"})});
var G__28765 = "Start the video to access more options in the video frame. To access the ";
var G__28766 = React.createElement("strong",null,"closed captions");
var G__28767 = " for this video click on\n     the ";
var G__28768 = React.createElement("strong",null,"CC");
var G__28769 = " button in the toolbar at the bottom of the video.\u00A0To ";
var G__28770 = React.createElement("strong",null,"expand the video");
var G__28771 = ", click the ";
var G__28772 = React.createElement("strong",null,"Full Screen icon");
var G__28773 = " in the toolbar\n     at the bottom of the video.";
return React.createElement(G__28763,G__28764,G__28765,G__28766,G__28767,G__28768,G__28769,G__28770,G__28771,G__28772,G__28773);
})();
return React.createElement(G__28740,G__28741,G__28742,G__28743,G__28744,G__28745);
});
htmlms.techsmithrelay.height_ratio = (function htmlms$techsmithrelay$height_ratio(w,h){
return (h / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.width_ratio = (function htmlms$techsmithrelay$width_ratio(w,h){
return (w / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.bmi_component = (function htmlms$techsmithrelay$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__28836 = htmlms.techsmithrelay.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__28836__$1 = ((((!((map__28836 == null)))?((((map__28836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28836):map__28836);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,cljs.core.cst$kw$title);
var vec__28837 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 16:9. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 4:3. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("non-standard ratio "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(1),null);
var G__28843 = "div";
var G__28844 = null;
var G__28845 = React.createElement("h3",null,"Parameters");
var G__28846 = (function (){var G__28855 = "div";
var G__28856 = null;
var G__28857 = (function (){var attrs28854 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28854))?sablono.interpreter.attributes(attrs28854):null),((cljs.core.map_QMARK_(attrs28854))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28854)], null)));
})();
var G__28858 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__28855,G__28856,G__28857,G__28858);
})();
var G__28847 = (function (){var G__28860 = "div";
var G__28861 = null;
var G__28862 = (function (){var attrs28859 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((width | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28859))?sablono.interpreter.attributes(attrs28859):null),((cljs.core.map_QMARK_(attrs28859))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28859)], null)));
})();
var G__28863 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__28860,G__28861,G__28862,G__28863);
})();
var G__28848 = (function (){var G__28865 = "div";
var G__28866 = null;
var G__28867 = (function (){var attrs28864 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((height | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28864))?sablono.interpreter.attributes(attrs28864):null),((cljs.core.map_QMARK_(attrs28864))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28864)], null)));
})();
var G__28868 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__28865,G__28866,G__28867,G__28868);
})();
var G__28849 = (function (){var G__28870 = "div";
var G__28871 = null;
var G__28872 = (function (){var attrs28869 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28869))?sablono.interpreter.attributes(attrs28869):null),((cljs.core.map_QMARK_(attrs28869))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28869)], null)));
})();
var G__28873 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__28870,G__28871,G__28872,G__28873);
})();
var G__28850 = (function (){var G__28875 = "div";
var G__28876 = null;
var G__28877 = (function (){var attrs28874 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28874))?sablono.interpreter.attributes(attrs28874):null),((cljs.core.map_QMARK_(attrs28874))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28874)], null)));
})();
var G__28878 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__28875,G__28876,G__28877,G__28878);
})();
var G__28851 = (function (){var G__28880 = "div";
var G__28881 = null;
var G__28882 = (function (){var attrs28879 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28879))?sablono.interpreter.attributes(attrs28879):null),((cljs.core.map_QMARK_(attrs28879))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28879)], null)));
})();
var G__28883 = (function (){var G__28885 = "span";
var G__28886 = ({"style": ({"color": color})});
var G__28887 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__28885,G__28886,G__28887);
})();
var G__28884 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__28880,G__28881,G__28882,G__28883,G__28884);
})();
var G__28852 = (function (){var G__28889 = "div";
var G__28890 = null;
var G__28891 = (function (){var attrs28888 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28888))?sablono.interpreter.attributes(attrs28888):null),((cljs.core.map_QMARK_(attrs28888))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28888)], null)));
})();
var G__28892 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28889,G__28890,G__28891,G__28892);
})();
var G__28853 = (function (){var G__28894 = "div";
var G__28895 = null;
var G__28896 = (function (){var attrs28893 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs28893))?sablono.interpreter.attributes(attrs28893):null),((cljs.core.map_QMARK_(attrs28893))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28893)], null)));
})();
var G__28897 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__28894,G__28895,G__28896,G__28897);
})();
return React.createElement(G__28843,G__28844,G__28845,G__28846,G__28847,G__28848,G__28849,G__28850,G__28851,G__28852,G__28853);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$TechSmithRelay], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"TechSmithRelay",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return htmlms.techsmithrelay.bmi_component(data_atom);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(315),cljs.core.cst$kw$width,(560),cljs.core.cst$kw$yurl,"https://boisestate.techsmithrelay.com/TB3U",cljs.core.cst$kw$length,"04:22",cljs.core.cst$kw$title,"Stephen Hill Introduction"], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$frame,true,cljs.core.cst$kw$history,true,cljs.core.cst$kw$heading,true], null)], null));
})], null));
htmlms.techsmithrelay.main = (function htmlms$techsmithrelay$main(){
var temp__6736__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__6736__auto__)){
var node = temp__6736__auto__;
var G__28902 = React.createElement("div",null,"");
var G__28903 = node;
return ReactDOM.render(G__28902,G__28903);
} else {
return null;
}
});
htmlms.techsmithrelay.main();
