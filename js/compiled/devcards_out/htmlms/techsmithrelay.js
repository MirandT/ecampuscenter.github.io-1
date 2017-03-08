// Compiled by ClojureScript 1.9.229 {}
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
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if(typeof htmlms.techsmithrelay.initial_title !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_title = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inittitle","inittitle",544536363),"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.techsmithrelay.initial_length !== 'undefined'){
} else {
htmlms.techsmithrelay.initial_length = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initlength","initlength",768389849),"0m 0s"], null));
}
htmlms.techsmithrelay.intervalobj = goog.date.Interval.fromIsoString.call(null,new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));
htmlms.techsmithrelay.get_id_from_url = (function htmlms$techsmithrelay$get_id_from_url(u){

return clojure.string.replace_first.call(null,u,"https://boisestate.techsmithrelay.com/","");
});
cljs.core.println.call(null,htmlms.techsmithrelay.get_id_from_url.call(null,"https://boisestate.techsmithrelay.com/TB3U"));
htmlms.techsmithrelay.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
htmlms.techsmithrelay.timeout = (function htmlms$techsmithrelay$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.techsmithrelay","htmlms.techsmithrelay",1537614166),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*BlackBoard HTML Generator*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
htmlms.techsmithrelay.gcd = (function htmlms$techsmithrelay$gcd(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,(function (x){
return cljs.core.filter.call(null,(function (p1__35509_SHARP_){
return (cljs.core.mod.call(null,x,p1__35509_SHARP_) === (0));
}),cljs.core.range.call(null,(1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.techsmithrelay.xhr_data = (function htmlms$techsmithrelay$xhr_data(url,cb){
return goog.net.XhrIo.send.call(null,[cljs.core.str(url)].join(''),(function (f){
var xhr = f.target;
return cb.call(null,xhr.getResponseText());
}));
});
htmlms.techsmithrelay.calc_bmi = (function htmlms$techsmithrelay$calc_bmi(bmi_data){
var map__35512 = bmi_data;
var map__35512__$1 = ((((!((map__35512 == null)))?((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35512):map__35512);
var data = map__35512__$1;
var height = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"title","title",636505583));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / htmlms.techsmithrelay.gcd.call(null,width,height)) / (height / htmlms.techsmithrelay.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
htmlms.techsmithrelay.slider = (function htmlms$techsmithrelay$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.call(null,param,new cljs.core.Keyword(null,"yurl","yurl",182188908))){
htmlms.techsmithrelay.xhr_data.call(null,[cljs.core.str("https://boisestate.techsmithrelay.com/api/v1/media/"),cljs.core.str(htmlms.techsmithrelay.get_id_from_url.call(null,e.target.value)),cljs.core.str("/details")].join(''),(function (g){
var updlength = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.techsmithrelay.r,g),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration"], null));
var updtitle = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.techsmithrelay.r,g),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Description"], null));
cljs.core.println.call(null,"url: ",value);

cljs.core.println.call(null,"can i get a new url? ",e.target.value);

cljs.core.println.call(null,"updlength: ",updlength);

cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),clojure.string.replace_first.call(null,updlength,/\.(\d+)/,""));

cljs.core.swap_BANG_.call(null,htmlms.techsmithrelay.initial_length,cljs.core.assoc,new cljs.core.Keyword(null,"initlength","initlength",768389849),clojure.string.replace_first.call(null,updlength,/\.(\d+)/,""));

cljs.core.println.call(null,":initlength: ",new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.techsmithrelay.initial_length)));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),updtitle);
}));
} else {
}

cljs.core.println.call(null,"initial-length: ",htmlms.techsmithrelay.initial_length);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
cljs.core.println.call(null,[cljs.core.str("param:"),cljs.core.str(param)].join(''));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.techsmithrelay.ifriendly = (function htmlms$techsmithrelay$ifriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"boisestate.techsmithrelay.com/","boisestate.techsmithrelay.com/connector/embed/index/"),"https:","");
});
htmlms.techsmithrelay.fluff = (function htmlms$techsmithrelay$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.techsmithrelay.ifriendly.call(null,skinny)),cljs.core.str("\" scrolling=\"no\" style=\"width: "),cljs.core.str(width),cljs.core.str(";height: "),cljs.core.str(height),cljs.core.str(" border:0;\" frameBorder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame. To access the <strong>closed captions</strong> for this video click on the\n       <strong>CC</strong> button in the toolbar at the bottom of the video. To expand the video, click the <strong>Full Screen icon</strong> in the toolbar at the bottom of the video.</p>\n")].join('');
});
htmlms.techsmithrelay.get_data = (function htmlms$techsmithrelay$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.techsmithrelay.htmlout = (function htmlms$techsmithrelay$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element.call(null,"textarea",({"cols": max, "rows": min, "value": htmlms.techsmithrelay.fluff.call(null,value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.techsmithrelay.htmloutvisual = (function htmlms$techsmithrelay$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
return React.createElement("div",null,React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",({"width": width, "height": height, "src": htmlms.techsmithrelay.ifriendly.call(null,[cljs.core.str(value)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})})),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"If video doesn't appear, follow this direct link: ",React.createElement("a",({"href": value, "title": title, "target": "_blank"}),sablono.interpreter.interpret.call(null,title))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Start the video to access more options in the video frame. To access the ",React.createElement("strong",null,"closed captions")," for this video click on\n     the ",React.createElement("strong",null,"CC")," button in the toolbar at the bottom of the video.\u00A0To ",React.createElement("strong",null,"expand the video"),", click the ",React.createElement("strong",null,"Full Screen icon")," in the toolbar\n     at the bottom of the video."));
});
htmlms.techsmithrelay.height_ratio = (function htmlms$techsmithrelay$height_ratio(w,h){
return (h / htmlms.techsmithrelay.gcd.call(null,w,h));
});
htmlms.techsmithrelay.width_ratio = (function htmlms$techsmithrelay$width_ratio(w,h){
return (w / htmlms.techsmithrelay.gcd.call(null,w,h));
});
htmlms.techsmithrelay.bmi_component = (function htmlms$techsmithrelay$bmi_component(bmi_data){
cljs.core.println.call(null,"@bmi-data: ",cljs.core.deref.call(null,bmi_data));

var map__35537 = htmlms.techsmithrelay.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__35537__$1 = ((((!((map__35537 == null)))?((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35537):map__35537);
var width = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__35538 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.techsmithrelay.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.techsmithrelay.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.techsmithrelay.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.call(null,vec__35538,(0),null);
var diagnose = cljs.core.nth.call(null,vec__35538,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs35544 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35544))?sablono.interpreter.attributes.call(null,attrs35544):null),((cljs.core.map_QMARK_.call(null,attrs35544))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35544)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,(0),(100)))),React.createElement("div",null,(function (){var attrs35545 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35545))?sablono.interpreter.attributes.call(null,attrs35545):null),((cljs.core.map_QMARK_.call(null,attrs35545))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35545)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs35546 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35546))?sablono.interpreter.attributes.call(null,attrs35546):null),((cljs.core.map_QMARK_.call(null,attrs35546))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35546)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs35547 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35547))?sablono.interpreter.attributes.call(null,attrs35547):null),((cljs.core.map_QMARK_.call(null,attrs35547))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35547)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs35548 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35548))?sablono.interpreter.attributes.call(null,attrs35548):null),((cljs.core.map_QMARK_.call(null,attrs35548))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35548)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"title","title",636505583),title,(0),(100)))),React.createElement("div",null,(function (){var attrs35549 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35549))?sablono.interpreter.attributes.call(null,attrs35549):null),((cljs.core.map_QMARK_.call(null,attrs35549))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35549)], null)));
})(),React.createElement("span",({"style": ({"color": color})}),sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs35550 = [cljs.core.str("html:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35550))?sablono.interpreter.attributes.call(null,attrs35550):null),((cljs.core.map_QMARK_.call(null,attrs35550))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35550)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))),React.createElement("div",null,(function (){var attrs35551 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35551))?sablono.interpreter.attributes.call(null,attrs35551):null),((cljs.core.map_QMARK_.call(null,attrs35551))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35551)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.techsmithrelay.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.techsmithrelay","htmlms.techsmithrelay",1537614166),new cljs.core.Keyword(null,"TechSmithRelay","TechSmithRelay",1570964309)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"TechSmithRelay",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return htmlms.techsmithrelay.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"yurl","yurl",182188908),"https://boisestate.techsmithrelay.com/TB3U",new cljs.core.Keyword(null,"length","length",588987862),"04:22",new cljs.core.Keyword(null,"title","title",636505583),"Stephen Hill Introduction"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true], null)], null));
})], null));
htmlms.techsmithrelay.main = (function htmlms$techsmithrelay$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,""),node);
} else {
return null;
}
});
htmlms.techsmithrelay.main.call(null);

//# sourceMappingURL=techsmithrelay.js.map?rel=1488930783740