// Compiled by ClojureScript 1.7.170 {}
goog.provide('youtube_embed.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof youtube_embed.core.first_example_state !== 'undefined'){
} else {
youtube_embed.core.first_example_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"yourl","yourl",-1206729931),"http://youtube.com/watch?v=2FpW1ctrDHE"], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"youtube_embed.core","youtube_embed.core",1304469563),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*BlackBoard HTML Generator*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
/**
 * (gcd a b) computes the greatest common divisor of a and b. for ratio http://rosettacode.org/wiki/Greatest_common_divisor#Clojure
 */
youtube_embed.core.gcd = (function youtube_embed$core$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__21280 = b;
var G__21281 = cljs.core.mod.call(null,a,b);
a = G__21280;
b = G__21281;
continue;
}
break;
}
});
youtube_embed.core.calc_bmi = (function youtube_embed$core$calc_bmi(bmi_data){
var map__21284 = bmi_data;
var map__21284__$1 = ((((!((map__21284 == null)))?((((map__21284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21284):map__21284);
var data = map__21284__$1;
var height = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / youtube_embed.core.gcd.call(null,width,height)) / (height / youtube_embed.core.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
youtube_embed.core.slider = (function youtube_embed$core$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "value": value, "min": min, "max": max, "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
youtube_embed.core.ifriendly = (function youtube_embed$core$ifriendly(url){

return clojure.string.replace_first.call(null,url,"watch?v=","embed/");
});
youtube_embed.core.fluff = (function youtube_embed$core$fluff(skinny,width,height,length){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(youtube_embed.core.ifriendly.call(null,skinny)),cljs.core.str("\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\"Video\" target=\"_blank\">"),cljs.core.str(skinny),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>To display video captions, start video and click\u00A0<strong>CC</strong>\u00A0in the video frame. To expand the video, use direct link above to open video in YouTube.</p>\n")].join('');
});
youtube_embed.core.htmlout = (function youtube_embed$core$htmlout(bmi_data,param,value,width,height,min,max,length){
return sablono.interpreter.create_element.call(null,"textarea",{"cols": max, "rows": min, "value": youtube_embed.core.fluff.call(null,value,width,height,length), "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
youtube_embed.core.htmloutvisual = (function youtube_embed$core$htmloutvisual(bmi_data,param,value,width,height,min,max,length){
return React.createElement("div",null,React.createElement("p",{"style": {"fontSize": ".8em"}},"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",{"width": width, "height": height, "src": youtube_embed.core.ifriendly.call(null,value), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}),React.createElement("p",{"style": {"fontSize": ".8em"}},"If video doesn't appear, follow this direct link: ",React.createElement("a",{"href": value, "title": "Video", "target": "_blank"},sablono.interpreter.interpret.call(null,value))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",{"style": {"fontSize": ".8em"}},"To display video captions, start video and click ",React.createElement("strong",null,"CC"),"\u00A0in the video\n     frame. To expand the video, use direct link above to open video in YouTube."));
});
youtube_embed.core.bmi_component = (function youtube_embed$core$bmi_component(bmi_data){
var map__21306 = youtube_embed.core.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__21306__$1 = ((((!((map__21306 == null)))?((((map__21306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21306):map__21306);
var width = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"length","length",588987862));
var vec__21307 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str((width / youtube_embed.core.gcd.call(null,width,height))),cljs.core.str(" by "),cljs.core.str((height / youtube_embed.core.gcd.call(null,width,height))),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str((width / youtube_embed.core.gcd.call(null,width,height))),cljs.core.str(" by "),cljs.core.str((height / youtube_embed.core.gcd.call(null,width,height))),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","non-standard ratio"], null)
));
var color = cljs.core.nth.call(null,vec__21307,(0),null);
var diagnose = cljs.core.nth.call(null,vec__21307,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs21311 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21311))?sablono.interpreter.attributes.call(null,attrs21311):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21311))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21311)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,(0),(100)))),React.createElement("div",null,(function (){var attrs21312 = [cljs.core.str("time: "),cljs.core.str(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21312))?sablono.interpreter.attributes.call(null,attrs21312):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21312))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21312)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs21313 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21313))?sablono.interpreter.attributes.call(null,attrs21313):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21313))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21313)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs21314 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21314))?sablono.interpreter.attributes.call(null,attrs21314):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21314))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21314)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs21315 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21315))?sablono.interpreter.attributes.call(null,attrs21315):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21315))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21315)], null))));
})(),React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs21316 = [cljs.core.str("html")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21316))?sablono.interpreter.attributes.call(null,attrs21316):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21316))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21316)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length))),React.createElement("div",null,(function (){var attrs21317 = [cljs.core.str("preview")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs21317))?sablono.interpreter.attributes.call(null,attrs21317):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21317))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21317)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"youtube_embed.core","youtube_embed.core",1304469563),new cljs.core.Keyword(null,"YouTube","YouTube",36124916)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"YouTube",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return youtube_embed.core.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"yurl","yurl",182188908),"https://youtube.com/watch?v=2FpW1ctrDHE",new cljs.core.Keyword(null,"length","length",588987862),"3m 45s"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true], null)], null));
})], null));
cljs.core.List.EMPTY;
youtube_embed.core.main = (function youtube_embed$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
youtube_embed.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1453240865176