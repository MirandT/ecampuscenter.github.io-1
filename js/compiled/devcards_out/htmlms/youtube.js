// Compiled by ClojureScript 1.9.229 {}
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
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if(typeof htmlms.youtube.initial_title !== 'undefined'){
} else {
htmlms.youtube.initial_title = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inittitle","inittitle",544536363),"Like I Used to Do.mp4"], null));
}
if(typeof htmlms.youtube.initial_length !== 'undefined'){
} else {
htmlms.youtube.initial_length = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initlength","initlength",768389849),"0m 0s"], null));
}
htmlms.youtube.intervalobj = goog.date.Interval.fromIsoString.call(null,new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.youtube.initial_length)));
htmlms.youtube.get_id_from_url = (function htmlms$youtube$get_id_from_url(u){

return cljs.core.get.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,clojure.string.replace_first.call(null,u,"youtu.be/","www.youtube.com/watch?v="))),"v");
});
cljs.core.println.call(null,htmlms.youtube.get_id_from_url.call(null,"https://www.youtube.com/watch?v=Wfj4g8zh2gk"));
htmlms.youtube.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
htmlms.youtube.timeout = (function htmlms$youtube$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.youtube","htmlms.youtube",1853509686),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*BlackBoard HTML Generator*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
htmlms.youtube.gcd = (function htmlms$youtube$gcd(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,(function (x){
return cljs.core.filter.call(null,(function (p1__39264_SHARP_){
return (cljs.core.mod.call(null,x,p1__39264_SHARP_) === (0));
}),cljs.core.range.call(null,(1),(x + (1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))));
});
htmlms.youtube.xhr_data = (function htmlms$youtube$xhr_data(url,cb){
return goog.net.XhrIo.send.call(null,[cljs.core.str(url)].join(''),(function (f){
var xhr = f.target;
return cb.call(null,xhr.getResponseText());
}));
});
htmlms.youtube.calc_bmi = (function htmlms$youtube$calc_bmi(bmi_data){
var map__39267 = bmi_data;
var map__39267__$1 = ((((!((map__39267 == null)))?((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39267):map__39267);
var data = map__39267__$1;
var height = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bmi = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"title","title",636505583));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((1) / ((width / htmlms.youtube.gcd.call(null,width,height)) / (height / htmlms.youtube.gcd.call(null,width,height)))));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"width","width",-384071477),((bmi * h) * h));
}
});
htmlms.youtube.slider = (function htmlms$youtube$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core._EQ_.call(null,param,new cljs.core.Keyword(null,"yurl","yurl",182188908))){
htmlms.youtube.xhr_data.call(null,[cljs.core.str("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id="),cljs.core.str(htmlms.youtube.get_id_from_url.call(null,e.target.value)),cljs.core.str("&fields=items(contentDetails%2Csnippet)&key=AIzaSyAEqd5yONIxbtMZO-iF5t5aQ0Am1QmTPzs")].join(''),(function (g){
var updlength = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"contentDetails","duration"], null));
var updtitle = cljs.core.get_in.call(null,cognitect.transit.read.call(null,htmlms.youtube.r,g),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",(0),"snippet","title"], null));
cljs.core.println.call(null,"url: ",value);

cljs.core.println.call(null,"can i get a new url? ",e.target.value);

cljs.core.println.call(null,"updlength: ",updlength);

cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),(function (){var me = goog.date.Interval.fromIsoString.call(null,updlength);
return [cljs.core.str((((me.hours > (0)))?[cljs.core.str(me.hours),cljs.core.str("h ")].join(''):null)),cljs.core.str(me.minutes),cljs.core.str("m "),cljs.core.str(me.seconds),cljs.core.str("s")].join('');
})());

cljs.core.swap_BANG_.call(null,htmlms.youtube.initial_length,cljs.core.assoc,new cljs.core.Keyword(null,"initlength","initlength",768389849),updlength);

cljs.core.println.call(null,":initlength: ",new cljs.core.Keyword(null,"initlength","initlength",768389849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,htmlms.youtube.initial_length)));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),updtitle);
}));
} else {
}

cljs.core.println.call(null,"initial-length: ",htmlms.youtube.initial_length);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
cljs.core.println.call(null,[cljs.core.str("param:"),cljs.core.str(param)].join(''));

return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.youtube.ifriendly = (function htmlms$youtube$ifriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"youtu.be/","www.youtube.com/watch?v="),"watch?v=","embed/"),"https:","");
});
htmlms.youtube.ialmostfriendly = (function htmlms$youtube$ialmostfriendly(url){

return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,"youtu.be/","www.youtube.com/watch?v="),"https:","");
});
htmlms.youtube.fluff = (function htmlms$youtube$fluff(skinny,startTime,width,height,length,title){
return [cljs.core.str("<p>Click the <strong>Play</strong> icon to begin.</p>\n<p><iframe width=\""),cljs.core.str(width),cljs.core.str("\" height=\""),cljs.core.str(height),cljs.core.str("\" src=\""),cljs.core.str(htmlms.youtube.ifriendly.call(null,skinny)),cljs.core.str("?rel=0&start="),cljs.core.str(startTime),cljs.core.str("\" frameBorder=\"0\" allowfullscreen></iframe></p>\n<p>If video doesn't appear, follow this direct link:\n<a href=\""),cljs.core.str([cljs.core.str(htmlms.youtube.ialmostfriendly.call(null,skinny)),cljs.core.str("&t="),cljs.core.str(startTime)].join('')),cljs.core.str("\" title=\""),cljs.core.str(title),cljs.core.str("\" target=\"_blank\">"),cljs.core.str(title),cljs.core.str("</a> ("),cljs.core.str(length),cljs.core.str(")</p><p>Start the video to access more options in the video frame: to display the video captions, click\u00A0<strong>CC</strong>.\u00A0To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript, click YouTube, select ...More, then Transcript.</p>\n")].join('');
});
htmlms.youtube.get_data = (function htmlms$youtube$get_data(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "min": min, "max": max, "style": ({"width": "100%"}), "value": value, "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);
})}));
});
htmlms.youtube.htmlout = (function htmlms$youtube$htmlout(bmi_data,param,value,startTime,width,height,min,max,length,title){
return sablono.interpreter.create_element.call(null,"textarea",({"cols": max, "rows": min, "value": htmlms.youtube.fluff.call(null,value,startTime,width,height,length,title), "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
htmlms.youtube.htmloutvisual = (function htmlms$youtube$htmloutvisual(bmi_data,param,value,startTime,width,height,min,max,length,title){
return React.createElement("div",null,React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Click the ",React.createElement("strong",null,"Play")," icon to begin."),React.createElement("iframe",({"width": width, "height": height, "src": htmlms.youtube.ifriendly.call(null,[cljs.core.str(value),cljs.core.str("?rel=0&start="),cljs.core.str(startTime)].join('')), "frameborder": (0), "allowfullscreen": null, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})})),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"If video doesn't appear, follow this direct link: ",React.createElement("a",({"href": [cljs.core.str(htmlms.youtube.ialmostfriendly.call(null,value)),cljs.core.str("&t="),cljs.core.str(startTime)].join(''), "title": title, "target": "_blank"}),sablono.interpreter.interpret.call(null,title))," (",sablono.interpreter.interpret.call(null,length),")"),React.createElement("p",({"style": ({"fontSize": ".8em"})}),"Start the video to access more options in the video frame: to display the video captions, click ",React.createElement("strong",null,"CC"),".\u00A0\n     To expand the video, use the direct link above to open video in YouTube, and click the Full Screen icon. To navigate the video using the transcript,\n     click YouTube, select ...More, then Transcript."));
});
htmlms.youtube.height_ratio = (function htmlms$youtube$height_ratio(w,h){
return (h / htmlms.youtube.gcd.call(null,w,h));
});
htmlms.youtube.width_ratio = (function htmlms$youtube$width_ratio(w,h){
return (w / htmlms.youtube.gcd.call(null,w,h));
});
htmlms.youtube.bmi_component = (function htmlms$youtube$bmi_component(bmi_data){
cljs.core.println.call(null,"@bmi-data: ",cljs.core.deref.call(null,bmi_data));

var map__39293 = htmlms.youtube.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__39293__$1 = ((((!((map__39293 == null)))?((((map__39293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39293):map__39293);
var startTime = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"startTime","startTime",1583467878));
var width = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var yurl = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"yurl","yurl",182188908));
var length = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"length","length",588987862));
var title = cljs.core.get.call(null,map__39293__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__39294 = ((((bmi > .562)) && ((bmi < .563)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green",[cljs.core.str("approx ratio: 16:9. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):((((bmi > .74)) && ((bmi < .76)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit",[cljs.core.str("approx ratio: 4:3. exact ratio: "),cljs.core.str(htmlms.youtube.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",[cljs.core.str("non-standard ratio "),cljs.core.str(htmlms.youtube.width_ratio.call(null,width,height)),cljs.core.str(" by "),cljs.core.str(htmlms.youtube.height_ratio.call(null,width,height)),cljs.core.str(".")].join('')], null)
));
var color = cljs.core.nth.call(null,vec__39294,(0),null);
var diagnose = cljs.core.nth.call(null,vec__39294,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"Parameters"),React.createElement("div",null,(function (){var attrs39300 = [cljs.core.str("url: "),cljs.core.str([cljs.core.str(yurl),cljs.core.str("&t="),cljs.core.str(startTime)].join(''))].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39300))?sablono.interpreter.attributes.call(null,attrs39300):null),((cljs.core.map_QMARK_.call(null,attrs39300))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39300)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),[cljs.core.str(clojure.string.replace_first.call(null,yurl,"youtu.be/","www.youtube.com/watch?v=")),cljs.core.str("&t="),cljs.core.str(startTime)].join(''),(0),(100)))),React.createElement("div",null,(function (){var attrs39301 = [cljs.core.str("start time: "),cljs.core.str((startTime | (0))),cljs.core.str("s")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39301))?sablono.interpreter.attributes.call(null,attrs39301):null),((cljs.core.map_QMARK_.call(null,attrs39301))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39301)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"startTime","startTime",1583467878),startTime,(0),(100)))),React.createElement("div",null,(function (){var attrs39302 = [cljs.core.str("width: "),cljs.core.str((width | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39302))?sablono.interpreter.attributes.call(null,attrs39302):null),((cljs.core.map_QMARK_.call(null,attrs39302))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39302)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"width","width",-384071477),width,(30),(150)))),React.createElement("div",null,(function (){var attrs39303 = [cljs.core.str("height: "),cljs.core.str((height | (0))),cljs.core.str("px")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39303))?sablono.interpreter.attributes.call(null,attrs39303):null),((cljs.core.map_QMARK_.call(null,attrs39303))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39303)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs39304 = [cljs.core.str("length: "),cljs.core.str(length)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39304))?sablono.interpreter.attributes.call(null,attrs39304):null),((cljs.core.map_QMARK_.call(null,attrs39304))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39304)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"length","length",588987862),length,(0),(100)))),React.createElement("div",null,(function (){var attrs39305 = [cljs.core.str("Title: "),cljs.core.str(title)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39305))?sablono.interpreter.attributes.call(null,attrs39305):null),((cljs.core.map_QMARK_.call(null,attrs39305))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39305)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"title","title",636505583),title,(0),(100)))),React.createElement("div",null,(function (){var attrs39306 = [cljs.core.str("ratio: "),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~,3f",bmi)),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39306))?sablono.interpreter.attributes.call(null,attrs39306):null),((cljs.core.map_QMARK_.call(null,attrs39306))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39306)], null)));
})(),React.createElement("span",({"style": ({"color": color})}),sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,htmlms.youtube.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))),React.createElement("div",null,(function (){var attrs39307 = [cljs.core.str("html:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39307))?sablono.interpreter.attributes.call(null,attrs39307):null),((cljs.core.map_QMARK_.call(null,attrs39307))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39307)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.htmlout.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,startTime,width,height,(10),(50),length,title))),React.createElement("div",null,(function (){var attrs39308 = [cljs.core.str("preview:")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39308))?sablono.interpreter.attributes.call(null,attrs39308):null),((cljs.core.map_QMARK_.call(null,attrs39308))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39308)], null)));
})(),sablono.interpreter.interpret.call(null,htmlms.youtube.htmloutvisual.call(null,bmi_data,new cljs.core.Keyword(null,"yurl","yurl",182188908),yurl,startTime,width,height,(10),(50),length,title))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"htmlms.youtube","htmlms.youtube",1853509686),new cljs.core.Keyword(null,"YouTube","YouTube",36124916)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"YouTube",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return htmlms.youtube.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"yurl","yurl",182188908),"https://www.youtube.com/watch?v=Wfj4g8zh2gk",new cljs.core.Keyword(null,"length","length",588987862),"4m 16s",new cljs.core.Keyword(null,"title","title",636505583),"Like I used to do.mp4"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true], null)], null));
})], null));
htmlms.youtube.main = (function htmlms$youtube$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,""),node);
} else {
return null;
}
});
htmlms.youtube.main.call(null);

//# sourceMappingURL=youtube.js.map?rel=1488930991968