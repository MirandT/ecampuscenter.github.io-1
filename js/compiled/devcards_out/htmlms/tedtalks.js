// Compiled by ClojureScript 1.7.170 {}
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
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if(typeof htmlms.tedtalks.initial_title !== 'undefined'){
} else {
htmlms.tedtalks.initial_title = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inittitle","inittitle",544536363),"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.tedtalks.initial_length !== 'undefined'){
} else {
htmlms.tedtalks.initial_length = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initlength","initlength",768389849),"0m 0s"], null));
}
htmlms.tedtalks.intervalobj = goog.date.Interval.fromIsoString.call(null,new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.tedtalks.initial_length)));
htmlms.tedtalks.get_id_from_url = (function htmlms$tedtalks$get_id_from_url(u){

return u;
});
cljs.core.println.call(null,htmlms.tedtalks.get_id_from_url.call(null,"https://www.youtube.com/watch?v=Wfj4g8zh2gk"));
htmlms.tedtalks.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
htmlms.tedtalks.timeout = (function htmlms$tedtalks$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.tedtalks","htmlms.tedtalks",-1913831246),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*BlackBoard HTML Generator* \n\n  This application has been developed using the TED API and is not an official service of TED",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
htmlms.tedtalks.gcd = (function htmlms$tedtalks$gcd(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,(function (x){
return cljs.core.filter.call(null,(function (p1__20667_SHARP_){
return (cljs.core.mod.call(null,x,p1__20667_SHARP_) === (0));
}),cljs.core.range.call(null,(1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.tedtalks.receiver = (function htmlms$tedtalks$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.tedtalks.xhr_data = (function htmlms$tedtalks$xhr_data(url,cb){
return goog.net.XhrIo.send.call(null,[cljs.core.str(url)].join(''),(function (f){
var xhr = f.target;
return cb.call(null,xhr.getResponseText());
}));
});
htmlms.tedtalks.xhr_data_ted = (function htmlms$tedtalks$xhr_data_ted(url,content){
return goog.net.XhrIo.send.call(null,[cljs.core.str(url)].join(''),htmlms.tedtalks.receiver,"GET",content);
});
htmlms.tedtalks.calc_bmi = (function htmlms$tedtalks$calc_bmi(bmi_data){
var map__20670 = bmi_data;
var map__20670__$1 = ((((!((map__20670 == null)))?((((map__20670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20670):map__20670);
var data = map__20670__$1;
var height = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"title","title",636505583));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / htmlms.tedtalks.gcd.call(null,width,height)) / (height / htmlms.tedtalks.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
htmlms.tedtalks.slider = (function htmlms$tedtalks$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "value": value, "min": min, "max": max, "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.call(null,param,new cljs.core.Keyword(null,"yurl","yurl",182188908))){
htmlms.tedtalks.xhr_data.call(null,[cljs.core.str(htmlms.tedtalks.get_id_from_url.call(null,e.target.value))].join(''),(function (g){
var response = g.target;
var updlength = domina.text.call(null,domina.xpath.xpath.call(null,g,"//*[@id=\"player-hero\"]/div[1]/div[2]/div/span[1]"));
var updtitle = domina.text.call(null,domina.xpath.xpath.call(null,g,"//*[@id=\"player-hero\"]/div[1]/div[2]/h1/div[2]/span"));
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),updlength);

cljs.core.swap_BANG_.call(null,htmlms.tedtalks.initial_length,cljs.core.assoc,new cljs.core.Keyword(null,"initlength","initlength",768389849),updlength);

cljs.core.println.call(null,":initlength: ",new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.tedtalks.initial_length)));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),updtitle);
}));
} else {
}

cljs.core.println.call(null,"initial-length: ",htmlms.tedtalks.initial_length);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
cljs.core.println.call(null,[cljs.core.str("param:"),cljs.core.str(param)].join(''));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
htmlms.tedtalks.ifriendly = (function htmlms$tedtalks$ifriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"www.ted.com/talks","embed-ssl.ted.com/talks/lang/en"),"https:",""),"http:","");
});
htmlms.tedtalks.fluff = (function htmlms$tedtalks$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.tedtalks.ifriendly.call(null,skinny)),cljs.core.str("\" frameBorder=\"0\" scrolling=\"no\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame: To display the video captions, click Subtitles. To expand the video, use the direct link above to open video on the TED website, and click the\u00A0<strong>Full Screen</strong>\u00A0icon. To navigate the video using the transcript, click <strong>Transcript</strong>.</p>\n")].join('');
});
htmlms.tedtalks.get_data = (function htmlms$tedtalks$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "min": min, "max": max, "style": {"width": "100%"}, "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);
})});
});
htmlms.tedtalks.htmlout = (function htmlms$tedtalks$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element.call(null,"textarea",{"cols": max, "rows": min, "value": htmlms.tedtalks.fluff.call(null,value,width,height,length,title), "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
htmlms.tedtalks.htmloutvisual = (function htmlms$tedtalks$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
return React.createElement("div",null,React.createElement("p",{"style": {"fontSize": ".8em"}},"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",{"width": width, "height": height, "src": htmlms.tedtalks.ifriendly.call(null,[cljs.core.str(value),cljs.core.str("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}),React.createElement("p",{"style": {"fontSize": ".8em"}},"If video doesn't appear, follow this direct link: ",React.createElement("a",{"href": value, "title": title, "target": "_blank"},sablono.interpreter.interpret.call(null,title))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",{"style": {"fontSize": ".8em"}},"Start the video to access more options in the video frame: To display the video captions,\n     click Subtitles. To expand the video, use the direct link above to open video on the TED website, and click the ",React.createElement("strong",null,"Full Screen")," icon.\n     To navigate the video using the transcript, click ",React.createElement("strong",null," Transcript"),"."));
});
htmlms.tedtalks.height_ratio = (function htmlms$tedtalks$height_ratio(w,h){
return (h / htmlms.tedtalks.gcd.call(null,w,h));
});
htmlms.tedtalks.width_ratio = (function htmlms$tedtalks$width_ratio(w,h){
return (w / htmlms.tedtalks.gcd.call(null,w,h));
});
htmlms.tedtalks.bmi_component = (function htmlms$tedtalks$bmi_component(bmi_data){
cljs.core.println.call(null,"@bmi-data: ",cljs.core.deref.call(null,bmi_data));

var map__20693 = htmlms.tedtalks.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__20693__$1 = ((((!((map__20693 == null)))?((((map__20693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20693):map__20693);
var width = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__20694 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.tedtalks.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.tedtalks.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.tedtalks.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.call(null,vec__20694,(0),null);
var diagnose = cljs.core.nth.call(null,vec__20694,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs20698 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20698))?sablono.interpreter.attributes.call(null,attrs20698):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20698))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20698)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,(0),(100)))),React.createElement("div",null,(function (){var attrs20699 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20699))?sablono.interpreter.attributes.call(null,attrs20699):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20699))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20699)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs20700 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20700))?sablono.interpreter.attributes.call(null,attrs20700):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20700)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs20701 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20701))?sablono.interpreter.attributes.call(null,attrs20701):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20701))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20701)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs20702 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20702))?sablono.interpreter.attributes.call(null,attrs20702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20702)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"title","title",636505583),title,(0),(100)))),React.createElement("div",null,(function (){var attrs20703 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20703))?sablono.interpreter.attributes.call(null,attrs20703):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20703))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20703)], null))));
})(),React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,htmlms.tedtalks.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs20704 = [cljs.core.str("html:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20704))?sablono.interpreter.attributes.call(null,attrs20704):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20704))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20704)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))),React.createElement("div",null,(function (){var attrs20705 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs20705))?sablono.interpreter.attributes.call(null,attrs20705):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20705)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.tedtalks.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.tedtalks","htmlms.tedtalks",-1913831246),new cljs.core.Keyword(null,"\u00A9TED-CC-BY-NC-ND-3.0","\u00A9TED-CC-BY-NC-ND-3.0",-832731975)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u00A9TED-CC-BY-NC-ND-3.0",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return htmlms.tedtalks.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"yurl","yurl",182188908),"https://www.ted.com/talks/teenaged_boy_wonders_play_bluegrass",new cljs.core.Keyword(null,"length","length",588987862),"4m 55s",new cljs.core.Keyword(null,"title","title",636505583),"Sleep Man Banjo Boys: Teen wonders play bluegrass"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true], null)], null));
})], null));
htmlms.tedtalks.main = (function htmlms$tedtalks$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,""),node);
} else {
return null;
}
});
htmlms.tedtalks.main.call(null);

//# sourceMappingURL=tedtalks.js.map?rel=1457365444592