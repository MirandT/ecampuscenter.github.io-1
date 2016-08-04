// Compiled by ClojureScript 1.7.170 {}
goog.provide('htmlms.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.date.Interval');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof htmlms.core.initial_title !== 'undefined'){
} else {
htmlms.core.initial_title = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inittitle","inittitle",544536363),"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.core.initial_length !== 'undefined'){
} else {
htmlms.core.initial_length = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initlength","initlength",768389849),"0m 0s"], null));
}
htmlms.core.intervalobj = goog.date.Interval.fromIsoString.call(null,new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.core.initial_length)));
htmlms.core.get_id_from_url = (function htmlms$core$get_id_from_url(u){

return cljs.core.get.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,u)),"v");
});
cljs.core.println.call(null,htmlms.core.get_id_from_url.call(null,"https://www.youtube.com/watch?v=Wfj4g8zh2gk"));
htmlms.core.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
htmlms.core.timeout = (function htmlms$core$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
htmlms.core.gcd = (function htmlms$core$gcd(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,(function (x){
return cljs.core.filter.call(null,(function (p1__12570_SHARP_){
return (cljs.core.mod.call(null,x,p1__12570_SHARP_) === (0));
}),cljs.core.range.call(null,(1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.core.xhr_data = (function htmlms$core$xhr_data(url,cb){
return goog.net.XhrIo.send.call(null,[cljs.core.str(url)].join(''),(function (f){
var xhr = f.target;
return cb.call(null,xhr.getResponseText());
}));
});
htmlms.core.calc_bmi = (function htmlms$core$calc_bmi(bmi_data){
var map__12573 = bmi_data;
var map__12573__$1 = ((((!((map__12573 == null)))?((((map__12573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12573):map__12573);
var data = map__12573__$1;
var height = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"title","title",636505583));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / htmlms.core.gcd.call(null,width,height)) / (height / htmlms.core.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
htmlms.core.slider = (function htmlms$core$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "value": value, "min": min, "max": max, "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.call(null,param,new cljs.core.Keyword(null,"yurl","yurl",182188908))){
htmlms.core.xhr_data.call(null,[cljs.core.str("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id="),cljs.core.str(htmlms.core.get_id_from_url.call(null,e.target.value)),cljs.core.str("&fields=items(contentDetails%2Csnippet)&key=AIzaSyAEqd5yONIxbtMZO-iF5t5aQ0Am1QmTPzs")].join(''),(function (g){
var updlength = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.core.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"contentDetails","duration"], null));
var updtitle = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.core.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"snippet","title"], null));
cljs.core.println.call(null,"url: ",value);

cljs.core.println.call(null,"can i get a new url? ",e.target.value);

cljs.core.println.call(null,"updlength: ",updlength);

cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),(function (){var me = goog.date.Interval.fromIsoString.call(null,updlength);
return [cljs.core.str((((me.hours > (0)))?[cljs.core.str(me.hours),cljs.core.str("h ")].join(''):null)),cljs.core.str(me.minutes),cljs.core.str("m "),cljs.core.str(me.seconds),cljs.core.str("s")].join('');
})());

cljs.core.swap_BANG_.call(null,htmlms.core.initial_length,cljs.core.assoc,new cljs.core.Keyword(null,"initlength","initlength",768389849),updlength);

cljs.core.println.call(null,":initlength: ",new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.core.initial_length)));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),updtitle);
}));
} else {
}

cljs.core.println.call(null,"initial-length: ",htmlms.core.initial_length);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
cljs.core.println.call(null,[cljs.core.str("param:"),cljs.core.str(param)].join(''));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
htmlms.core.ifriendly = (function htmlms$core$ifriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"watch?v=","embed/"),"https:","");
});
htmlms.core.fluff = (function htmlms$core$fluff(skinny,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.core.ifriendly.call(null,skinny)),cljs.core.str("?rel=0\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str(skinny),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>To display video captions, start video and click\u00A0<strong>CC</strong>\u00A0in the video frame. To expand the video, use direct link above to open video in YouTube.</p>\n")].join('');
});
htmlms.core.get_data = (function htmlms$core$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "min": min, "max": max, "style": {"width": "100%"}, "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);
})});
});
htmlms.core.htmlout = (function htmlms$core$htmlout(bmi_data,param,value,width,height,min,max,length,title){
return sablono.interpreter.create_element.call(null,"textarea",{"cols": max, "rows": min, "value": htmlms.core.fluff.call(null,value,width,height,length,title), "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
htmlms.core.htmloutvisual = (function htmlms$core$htmloutvisual(bmi_data,param,value,width,height,min,max,length,title){
return React.createElement("div",null,React.createElement("p",{"style": {"fontSize": ".8em"}},"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",{"width": width, "height": height, "src": htmlms.core.ifriendly.call(null,[cljs.core.str(value),cljs.core.str("?rel=0")].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}),React.createElement("p",{"style": {"fontSize": ".8em"}},"If video doesn't appear, follow this direct link: ",React.createElement("a",{"href": value, "title": title, "target": "_blank"},sablono.interpreter.interpret.call(null,title))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",{"style": {"fontSize": ".8em"}},"To display video captions, start video and click ",React.createElement("strong",null,"CC"),"\u00A0in the video\n     frame. To expand the video, use direct link above to open video in YouTube."));
});
htmlms.core.height_ratio = (function htmlms$core$height_ratio(w,h){
return (h / htmlms.core.gcd.call(null,w,h));
});
htmlms.core.width_ratio = (function htmlms$core$width_ratio(w,h){
return (w / htmlms.core.gcd.call(null,w,h));
});
htmlms.core.bmi_component = (function htmlms$core$bmi_component(bmi_data){
cljs.core.println.call(null,"@bmi-data: ",cljs.core.deref.call(null,bmi_data));

var map__12596 = htmlms.core.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__12596__$1 = ((((!((map__12596 == null)))?((((map__12596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12596):map__12596);
var width = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__12597 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.core.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.core.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.core.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.core.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.core.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.core.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.call(null,vec__12597,(0),null);
var diagnose = cljs.core.nth.call(null,vec__12597,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs12601 = [cljs.core.str("url: "),cljs.core.str(yurl)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12601))?sablono.interpreter.attributes.call(null,attrs12601):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12601)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,(0),(100)))),React.createElement("div",null,(function (){var attrs12602 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12602))?sablono.interpreter.attributes.call(null,attrs12602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12602)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs12603 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12603))?sablono.interpreter.attributes.call(null,attrs12603):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12603))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12603)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs12604 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12604))?sablono.interpreter.attributes.call(null,attrs12604):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12604))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12604)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs12605 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12605))?sablono.interpreter.attributes.call(null,attrs12605):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12605))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12605)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"title","title",636505583),title,(0),(100)))),React.createElement("div",null,(function (){var attrs12606 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12606))?sablono.interpreter.attributes.call(null,attrs12606):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12606)], null))));
})(),React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,htmlms.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs12607 = [cljs.core.str("html:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12607))?sablono.interpreter.attributes.call(null,attrs12607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12607)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))),React.createElement("div",null,(function (){var attrs12608 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs12608))?sablono.interpreter.attributes.call(null,attrs12608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12608)], null))));
})(),sablono.interpreter.interpret.call(null,htmlms.core.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,width,height,(10),(50),length,title))));
});
htmlms.core.main = (function htmlms$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,""),node);
} else {
return null;
}
});
htmlms.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1455038952549