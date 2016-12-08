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
htmlms.techsmithrelay.initial_title = (function (){var G__24615 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inittitle,"Like I Used to Do.mp4"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24615) : cljs.core.atom.call(null,G__24615));
})();
}
if(typeof htmlms.techsmithrelay.initial_length !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_length = (function (){var G__24616 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$initlength,"0m 0s"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24616) : cljs.core.atom.call(null,G__24616));
})();
}
htmlms.techsmithrelay.intervalobj = (function (){var G__24617 = cljs.core.cst$kw$initlength.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(htmlms.techsmithrelay.initial_length) : cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));
return (goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1 ? goog.date.Interval.fromIsoString.cljs$core$IFn$_invoke$arity$1(G__24617) : goog.date.Interval.fromIsoString.call(null,G__24617));
})();
htmlms.techsmithrelay.get_id_from_url = (function htmlms$techsmithrelay$get_id_from_url(u){

return clojure.string.replace_first(u,"https://boisestate.techsmithrelay.com/","");
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlms.techsmithrelay.get_id_from_url("https://boisestate.techsmithrelay.com/TB3U")], 0));
htmlms.techsmithrelay.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
htmlms.techsmithrelay.timeout = (function htmlms$techsmithrelay$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__24620_24622 = ((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
;
var G__24621_24623 = ms;
setTimeout(G__24620_24622,G__24621_24623);

return c;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$htmlms$techsmithrelay,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"*BlackBoard HTML Generator*",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
htmlms.techsmithrelay.gcd = (function htmlms$techsmithrelay$gcd(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24624_SHARP_){
return (cljs.core.mod(x,p1__24624_SHARP_) === (0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.techsmithrelay.xhr_data = (function htmlms$techsmithrelay$xhr_data(url,cb){
var G__24628 = [cljs.core.str(url)].join('');
var G__24629 = ((function (G__24628){
return (function (f){
var xhr = f.target;
var G__24630 = xhr.getResponseText();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24630) : cb.call(null,G__24630));
});})(G__24628))
;
return (goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2 ? goog.net.XhrIo.send.cljs$core$IFn$_invoke$arity$2(G__24628,G__24629) : goog.net.XhrIo.send.call(null,G__24628,G__24629));
});
htmlms.techsmithrelay.calc_bmi = (function htmlms$techsmithrelay$calc_bmi(bmi_data){
var map__24633 = bmi_data;
var map__24633__$1 = ((((!((map__24633 == null)))?((((map__24633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24633):map__24633);
var data = map__24633__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$width);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24633__$1,cljs.core.cst$kw$title);
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
var G__24677 = "div";
var G__24678 = null;
var G__24679 = (function (){var G__24683 = "p";
var G__24684 = ({"style": ({"fontSize": ".8em"})});
var G__24685 = "Click the ";
var G__24686 = React.createElement("strong",null,"Play");
var G__24687 = " icon to begin.";
return React.createElement(G__24683,G__24684,G__24685,G__24686,G__24687);
})();
var G__24680 = (function (){var G__24688 = "iframe";
var G__24689 = ({"width": width, "height": height, "src": htmlms.techsmithrelay.ifriendly([cljs.core.str(value)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": ((function (G__24688,G__24677,G__24678,G__24679){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.cst$kw$bmi)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bmi_data,cljs.core.assoc,cljs.core.cst$kw$bmi,null);
} else {
return null;
}
});})(G__24688,G__24677,G__24678,G__24679))
});
return React.createElement(G__24688,G__24689);
})();
var G__24681 = (function (){var G__24690 = "p";
var G__24691 = ({"style": ({"fontSize": ".8em"})});
var G__24692 = "If video doesn't appear, follow this direct link: ";
var G__24693 = (function (){var G__24697 = "a";
var G__24698 = ({"href": value, "title": title, "target": "_blank"});
var G__24699 = sablono.interpreter.interpret(title);
return React.createElement(G__24697,G__24698,G__24699);
})();
var G__24694 = " (";
var G__24695 = sablono.interpreter.interpret(length);
var G__24696 = ")";
return React.createElement(G__24690,G__24691,G__24692,G__24693,G__24694,G__24695,G__24696);
})();
var G__24682 = (function (){var G__24700 = "p";
var G__24701 = ({"style": ({"fontSize": ".8em"})});
var G__24702 = "Start the video to access more options in the video frame. To access the ";
var G__24703 = React.createElement("strong",null,"closed captions");
var G__24704 = " for this video click on\n     the ";
var G__24705 = React.createElement("strong",null,"CC");
var G__24706 = " button in the toolbar at the bottom of the video.\u00A0To ";
var G__24707 = React.createElement("strong",null,"expand the video");
var G__24708 = ", click the ";
var G__24709 = React.createElement("strong",null,"Full Screen icon");
var G__24710 = " in the toolbar\n     at the bottom of the video.";
return React.createElement(G__24700,G__24701,G__24702,G__24703,G__24704,G__24705,G__24706,G__24707,G__24708,G__24709,G__24710);
})();
return React.createElement(G__24677,G__24678,G__24679,G__24680,G__24681,G__24682);
});
htmlms.techsmithrelay.height_ratio = (function htmlms$techsmithrelay$height_ratio(w,h){
return (h / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.width_ratio = (function htmlms$techsmithrelay$width_ratio(w,h){
return (w / htmlms.techsmithrelay.gcd(w,h));
});
htmlms.techsmithrelay.bmi_component = (function htmlms$techsmithrelay$bmi_component(bmi_data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@bmi-data: ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data))], 0));

var map__24773 = htmlms.techsmithrelay.calc_bmi((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bmi_data) : cljs.core.deref.call(null,bmi_data)));
var map__24773__$1 = ((((!((map__24773 == null)))?((((map__24773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24773):map__24773);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$height);
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$bmi);
var yurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$yurl);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$length);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24773__$1,cljs.core.cst$kw$title);
var vec__24774 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.techsmithrelay.width_ratio(width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio(width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24774,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24774,(1),null);
var G__24780 = "div";
var G__24781 = null;
var G__24782 = React.createElement("h3",null,"Parameters");
var G__24783 = (function (){var G__24792 = "div";
var G__24793 = null;
var G__24794 = (function (){var attrs24791 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24791))?sablono.interpreter.attributes(attrs24791):null),((cljs.core.map_QMARK_(attrs24791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24791)], null)));
})();
var G__24795 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$yurl,yurl,(0),(100)));
return React.createElement(G__24792,G__24793,G__24794,G__24795);
})();
var G__24784 = (function (){var G__24797 = "div";
var G__24798 = null;
var G__24799 = (function (){var attrs24796 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24796))?sablono.interpreter.attributes(attrs24796):null),((cljs.core.map_QMARK_(attrs24796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24796)], null)));
})();
var G__24800 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$width,width,(30),(150)));
return React.createElement(G__24797,G__24798,G__24799,G__24800);
})();
var G__24785 = (function (){var G__24802 = "div";
var G__24803 = null;
var G__24804 = (function (){var attrs24801 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24801))?sablono.interpreter.attributes(attrs24801):null),((cljs.core.map_QMARK_(attrs24801))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24801)], null)));
})();
var G__24805 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$height,height,(100),(220)));
return React.createElement(G__24802,G__24803,G__24804,G__24805);
})();
var G__24786 = (function (){var G__24807 = "div";
var G__24808 = null;
var G__24809 = (function (){var attrs24806 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24806))?sablono.interpreter.attributes(attrs24806):null),((cljs.core.map_QMARK_(attrs24806))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24806)], null)));
})();
var G__24810 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$length,length,(0),(100)));
return React.createElement(G__24807,G__24808,G__24809,G__24810);
})();
var G__24787 = (function (){var G__24812 = "div";
var G__24813 = null;
var G__24814 = (function (){var attrs24811 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24811))?sablono.interpreter.attributes(attrs24811):null),((cljs.core.map_QMARK_(attrs24811))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24811)], null)));
})();
var G__24815 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$title,title,(0),(100)));
return React.createElement(G__24812,G__24813,G__24814,G__24815);
})();
var G__24788 = (function (){var G__24817 = "div";
var G__24818 = null;
var G__24819 = (function (){var attrs24816 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.array_seq([bmi], 0))),cljs.core.str(" ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24816))?sablono.interpreter.attributes(attrs24816):null),((cljs.core.map_QMARK_(attrs24816))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24816)], null)));
})();
var G__24820 = (function (){var G__24822 = "span";
var G__24823 = ({"style": ({"color": color})});
var G__24824 = sablono.interpreter.interpret(diagnose);
return React.createElement(G__24822,G__24823,G__24824);
})();
var G__24821 = sablono.interpreter.interpret(htmlms.techsmithrelay.slider(bmi_data,cljs.core.cst$kw$bmi,bmi,(10),(50)));
return React.createElement(G__24817,G__24818,G__24819,G__24820,G__24821);
})();
var G__24789 = (function (){var G__24826 = "div";
var G__24827 = null;
var G__24828 = (function (){var attrs24825 = [cljs.core.str("html:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24825))?sablono.interpreter.attributes(attrs24825):null),((cljs.core.map_QMARK_(attrs24825))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24825)], null)));
})();
var G__24829 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmlout(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24826,G__24827,G__24828,G__24829);
})();
var G__24790 = (function (){var G__24831 = "div";
var G__24832 = null;
var G__24833 = (function (){var attrs24830 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs24830))?sablono.interpreter.attributes(attrs24830):null),((cljs.core.map_QMARK_(attrs24830))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24830)], null)));
})();
var G__24834 = sablono.interpreter.interpret(htmlms.techsmithrelay.htmloutvisual(bmi_data,cljs.core.cst$kw$yurl,yurl,width,height,(10),(50),length,title));
return React.createElement(G__24831,G__24832,G__24833,G__24834);
})();
return React.createElement(G__24780,G__24781,G__24782,G__24783,G__24784,G__24785,G__24786,G__24787,G__24788,G__24789,G__24790);
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
var G__24839 = React.createElement("div",null,"");
var G__24840 = node;
return React.render(G__24839,G__24840);
} else {
return null;
}
});
htmlms.techsmithrelay.main();
