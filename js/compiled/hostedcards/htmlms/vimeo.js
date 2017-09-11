// Compiled by ClojureScript 1.9.542 {}
goog.provide('htmlms.vimeo');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('cljs.reader');
goog.require('domina');
goog.require('domina.xpath');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('devcards.core');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if(typeof htmlms.vimeo.initial_title !== 'undefined'){
} else {
htmlms.vimeo.initial_title = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inittitle","inittitle",544536363),"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.vimeo.initial_length !== 'undefined'){
} else {
htmlms.vimeo.initial_length = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initlength","initlength",768389849),"0m 0s"], null));
}
htmlms.vimeo.intervalobj = goog.date.Interval.fromIsoString.call(null,new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.vimeo.initial_length)));
htmlms.vimeo.get_id_from_url = (function htmlms$vimeo$get_id_from_url(u){

return u;
});
cljs.core.println.call(null,htmlms.vimeo.get_id_from_url.call(null,"https://www.youtube.com/watch?v=Wfj4g8zh2gk"));
htmlms.vimeo.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
htmlms.vimeo.timeout = (function htmlms$vimeo$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.vimeo","htmlms.vimeo",-197763300),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*BlackBoard HTML Generator* \n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
htmlms.vimeo.gcd = (function htmlms$vimeo$gcd(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,(function (x){
return cljs.core.filter.call(null,(function (p1__26126_SHARP_){
return (cljs.core.mod.call(null,x,p1__26126_SHARP_) === (0));
}),cljs.core.range.call(null,(1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.vimeo.receiver = (function htmlms$vimeo$receiver(event){
var response = event.target;
return console.log(response.getResponseText());
});
htmlms.vimeo.xhr_data = (function htmlms$vimeo$xhr_data(url,cb){
return goog.net.XhrIo.send.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),(function (f){
var xhr = f.target;
return cb.call(null,xhr.getResponseText());
}));
});
htmlms.vimeo.xhr_data_ted = (function htmlms$vimeo$xhr_data_ted(url,content){
return goog.net.XhrIo.send.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),htmlms.vimeo.receiver,"GET",content);
});
htmlms.vimeo.calc_bmi = (function htmlms$vimeo$calc_bmi(bmi_data){
var map__26129 = bmi_data;
var map__26129__$1 = ((((!((map__26129 == null)))?((((map__26129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26129):map__26129);
var data = map__26129__$1;
var height = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"title","title",636505583));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / htmlms.vimeo.gcd.call(null,width,height)) / (height / htmlms.vimeo.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
htmlms.vimeo.slider = (function htmlms$vimeo$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.call(null,param,new cljs.core.Keyword(null,"yurl","yurl",182188908))){
htmlms.vimeo.xhr_data.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.get_id_from_url.call(null,e.target.value))].join(''),(function (g){
console.log("new title: ",cljs.core.first.call(null,domina.text.call(null,domina.xpath.xpath.call(null,g,"//title"))),cljs.core.rest.call(null,domina.text.call(null,domina.xpath.xpath.call(null,g,"//title"))));

console.log("new time: ",cljs.core.re_find.call(null,/\d+:\d+/,cljs.core.re_find.call(null,/\"formatted\":\"\d+:\d+\"/,g)));

var response = g.target;
var updlength = cljs.core.re_find.call(null,/\d+:\d+/,cljs.core.re_find.call(null,/\"formatted\":\"\d+:\d+\"/,g));
var updtitle = domina.text.call(null,domina.xpath.xpath.call(null,g,"//title")).toString();
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),updlength);

cljs.core.swap_BANG_.call(null,htmlms.vimeo.initial_length,cljs.core.assoc,new cljs.core.Keyword(null,"initlength","initlength",768389849),updlength);

cljs.core.println.call(null,":initlength: ",new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.vimeo.initial_length)));

console.log("updlength: ",updlength);

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),updtitle);
}));
} else {
}

cljs.core.println.call(null,"initial-length: ",htmlms.vimeo.initial_length);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("param:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.vimeo.ifriendly = (function htmlms$vimeo$ifriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"vimeo.com","player.vimeo.com/video"),"http:","https:");
});
htmlms.vimeo.fluff = (function htmlms$vimeo$fluff(skinny,width,height,length,title){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" height=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.ifriendly.call(null,skinny)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" frameBorder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first.call(null,skinny,"http:","https:")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" target=\"_blank\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a> ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")</p><p>Start the video to access more options in the video frame. To display the video captions, click on the <strong>CC</strong> buton and choose the language you want the captions to be displayed in. To expand the video, use the <strong>Full Screen</strong> icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website.</p>\n")].join('');
});
htmlms.vimeo.get_data = (function htmlms$vimeo$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.vimeo.htmlout = (function htmlms$vimeo$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element.call(null,"textarea",({"cols": max, "rows": min, "value": htmlms.vimeo.fluff.call(null,value,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.vimeo.htmloutvisual = (function htmlms$vimeo$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
return React.createElement("div",null,React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",({"width": width, "height": height, "src": htmlms.vimeo.ifriendly.call(null,value), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})})),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"If video doesn't appear, follow this direct link: ",React.createElement("a",({"href": value, "title": title, "target": "_blank"}),sablono.interpreter.interpret.call(null,title))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Start the video to access more options in the video frame. To display the video captions,\n     click on the ",React.createElement("strong",null,"CC"),"  button and choose the language you want the captions to be displayed in. To expand the video, use the ",React.createElement("strong",null,"Full Screen")," icon in the bottom right-hand corner or use the direct link above to open the video on the Vimeo website."));
});
htmlms.vimeo.height_ratio = (function htmlms$vimeo$height_ratio(w,h){
return (h / htmlms.vimeo.gcd.call(null,w,h));
});
htmlms.vimeo.width_ratio = (function htmlms$vimeo$width_ratio(w,h){
return (w / htmlms.vimeo.gcd.call(null,w,h));
});
htmlms.vimeo.bmi_component = (function htmlms$vimeo$bmi_component(bmi_data){
cljs.core.println.call(null,"@bmi-data: ",cljs.core.deref.call(null,bmi_data));

var map__26154 = htmlms.vimeo.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__26154__$1 = ((((!((map__26154 == null)))?((((map__26154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26154):map__26154);
var width = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__26154__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__26155 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 16:9. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("approx ratio: 4:3. exact ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("non-standard ratio "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.width_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlms.vimeo.height_ratio.call(null,width,height)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('')], null)
));
var color = cljs.core.nth.call(null,vec__26155,(0),null);
var diagnose = cljs.core.nth.call(null,vec__26155,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs26161 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first.call(null,yurl,"http:","https:"))].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26161))?sablono.interpreter.attributes.call(null,attrs26161):null),((cljs.core.map_QMARK_.call(null,attrs26161))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26161)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),clojure.string.replace_first.call(null,yurl,"http:","https:"),(0),(100)))),React.createElement("div",null,(function (){var attrs26162 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((width | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26162))?sablono.interpreter.attributes.call(null,attrs26162):null),((cljs.core.map_QMARK_.call(null,attrs26162))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26162)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs26163 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((height | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26163))?sablono.interpreter.attributes.call(null,attrs26163):null),((cljs.core.map_QMARK_.call(null,attrs26163))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26163)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs26164 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26164))?sablono.interpreter.attributes.call(null,attrs26164):null),((cljs.core.map_QMARK_.call(null,attrs26164))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26164)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs26165 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26165))?sablono.interpreter.attributes.call(null,attrs26165):null),((cljs.core.map_QMARK_.call(null,attrs26165))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26165)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"title","title",636505583),title,(0),(100)))),React.createElement("div",null,(function (){var attrs26166 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26166))?sablono.interpreter.attributes.call(null,attrs26166):null),((cljs.core.map_QMARK_.call(null,attrs26166))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26166)], null)));
})(),React.createElement("span",({"style": ({"color": color})}),sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,htmlms.vimeo.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs26167 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("html:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26167))?sablono.interpreter.attributes.call(null,attrs26167):null),((cljs.core.map_QMARK_.call(null,attrs26167))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26167)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))),React.createElement("div",null,(function (){var attrs26168 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("preview:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26168))?sablono.interpreter.attributes.call(null,attrs26168):null),((cljs.core.map_QMARK_.call(null,attrs26168))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26168)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.vimeo.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.vimeo","htmlms.vimeo",-197763300),new cljs.core.Keyword(null,"Vimeo","Vimeo",-1681513470)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Vimeo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return htmlms.vimeo.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"yurl","yurl",182188908),"https://vimeo.com/10570139",new cljs.core.Keyword(null,"length","length",588987862),"00:22",new cljs.core.Keyword(null,"title","title",636505583),"\u201CThe Last 3 Minutes\u201D Directed by Po Chan"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true], null)], null));
})], null));
htmlms.vimeo.main = (function htmlms$vimeo$main(){
var temp__6736__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__6736__auto__)){
var node = temp__6736__auto__;
return ReactDOM.render(React.createElement("div",null,""),node);
} else {
return null;
}
});
htmlms.vimeo.main.call(null);
