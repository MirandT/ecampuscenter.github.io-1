// Compiled by ClojureScript 1.7.170 {}
goog.provide('youtube_embed.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof youtube_embed.core.first_example_state !== 'undefined'){
} else {
youtube_embed.core.first_example_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"yourl","yourl",-1206729931),"http://youtube.com/watch?v=2FpW1ctrDHE"], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"youtube_embed.core","youtube_embed.core",1304469563),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*Youtube to BlackBoard HTML Generator*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
youtube_embed.core.calc_bmi = (function youtube_embed$core$calc_bmi(bmi_data){
var map__23564 = bmi_data;
var map__23564__$1 = ((((!((map__23564 == null)))?((((map__23564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23564):map__23564);
var data = map__23564__$1;
var height = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var h = (height / (100));
if((bmi == null)){
cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(width / (h * h)));
} else {
cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}

return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl);
});
youtube_embed.core.slider = (function youtube_embed$core$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "value": value, "min": min, "max": max, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
youtube_embed.core.bmi_component = (function youtube_embed$core$bmi_component(bmi_data){
var map__23575 = youtube_embed.core.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__23575__$1 = ((((!((map__23575 == null)))?((((map__23575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23575):map__23575);
var width = cljs.core.get.call(null,map__23575__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__23575__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__23575__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__23575__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var vec__23576 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__23576,(0),null);
var diagnose = cljs.core.nth.call(null,vec__23576,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"YouTube Parameters"),React.createElement("div",null,(function (){var attrs23580 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs23580))?sablono.interpreter.attributes.call(null,attrs23580):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23580)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs23581 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs23581))?sablono.interpreter.attributes.call(null,attrs23581):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23581))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23581)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs23582 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs23582))?sablono.interpreter.attributes.call(null,attrs23582):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23582))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23582)], null))));
})(),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,(0),(100)))),React.createElement("div",null,(function (){var attrs23583 = [cljs.core.str("BMI: "),cljs.core.str((bmi | (0))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs23583))?sablono.interpreter.attributes.call(null,attrs23583):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23583)], null))));
})(),React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,youtube_embed.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"youtube_embed.core","youtube_embed.core",1304469563),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"see [devcards](https://github.com/bhauman/devcards) for deets",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return youtube_embed.core.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"width","width",-384071477),(853),new cljs.core.Keyword(null,"yurl","yurl",182188908),(10)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"youtube_embed.core","youtube_embed.core",1304469563),new cljs.core.Keyword(null,"example-counter","example-counter",1093114668)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return sablono.interpreter.create_element.call(null,"textarea",{"cols": (50), "rows": (10), "name": "title", "id": "title", "color": "#333333", "value": new cljs.core.Keyword(null,"yourl","yourl",-1206729931).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom))});
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),youtube_embed.core.first_example_state,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
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

//# sourceMappingURL=core.js.map?rel=1452289478010