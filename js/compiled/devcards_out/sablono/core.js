// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23552__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23551 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__23551,(0),null);
var body = cljs.core.nthnext.call(null,vec__23551,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23553__i = 0, G__23553__a = new Array(arguments.length -  0);
while (G__23553__i < G__23553__a.length) {G__23553__a[G__23553__i] = arguments[G__23553__i + 0]; ++G__23553__i;}
  args = new cljs.core.IndexedSeq(G__23553__a,0);
} 
return G__23552__delegate.call(this,args);};
G__23552.cljs$lang$maxFixedArity = 0;
G__23552.cljs$lang$applyTo = (function (arglist__23554){
var args = cljs.core.seq(arglist__23554);
return G__23552__delegate(args);
});
G__23552.cljs$core$IFn$_invoke$arity$variadic = G__23552__delegate;
return G__23552;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__23559(s__23560){
return (new cljs.core.LazySeq(null,(function (){
var s__23560__$1 = s__23560;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23560__$1);
if(temp__4425__auto__){
var s__23560__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23560__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__23560__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__23562 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__23561 = (0);
while(true){
if((i__23561 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__23561);
cljs.core.chunk_append.call(null,b__23562,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23563 = (i__23561 + (1));
i__23561 = G__23563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23562),sablono$core$update_arglists_$_iter__23559.call(null,cljs.core.chunk_rest.call(null,s__23560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23562),null);
}
} else {
var args = cljs.core.first.call(null,s__23560__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23559.call(null,cljs.core.rest.call(null,s__23560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23569 = arguments.length;
var i__17885__auto___23570 = (0);
while(true){
if((i__17885__auto___23570 < len__17884__auto___23569)){
args__17891__auto__.push((arguments[i__17885__auto___23570]));

var G__23571 = (i__17885__auto___23570 + (1));
i__17885__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__23565(s__23566){
return (new cljs.core.LazySeq(null,(function (){
var s__23566__$1 = s__23566;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23566__$1);
if(temp__4425__auto__){
var s__23566__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23566__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__23566__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__23568 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__23567 = (0);
while(true){
if((i__23567 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__23567);
cljs.core.chunk_append.call(null,b__23568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23572 = (i__23567 + (1));
i__23567 = G__23572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23568),sablono$core$iter__23565.call(null,cljs.core.chunk_rest.call(null,s__23566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23568),null);
}
} else {
var style = cljs.core.first.call(null,s__23566__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23565.call(null,cljs.core.rest.call(null,s__23566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq23564){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23564));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23573 = (function sablono$core$link_to23573(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23576 = arguments.length;
var i__17885__auto___23577 = (0);
while(true){
if((i__17885__auto___23577 < len__17884__auto___23576)){
args__17891__auto__.push((arguments[i__17885__auto___23577]));

var G__23578 = (i__17885__auto___23577 + (1));
i__17885__auto___23577 = G__23578;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to23573.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to23573.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23573.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23573.cljs$lang$applyTo = (function (seq23574){
var G__23575 = cljs.core.first.call(null,seq23574);
var seq23574__$1 = cljs.core.next.call(null,seq23574);
return sablono.core.link_to23573.cljs$core$IFn$_invoke$arity$variadic(G__23575,seq23574__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23573);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23579 = (function sablono$core$mail_to23579(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23584 = arguments.length;
var i__17885__auto___23585 = (0);
while(true){
if((i__17885__auto___23585 < len__17884__auto___23584)){
args__17891__auto__.push((arguments[i__17885__auto___23585]));

var G__23586 = (i__17885__auto___23585 + (1));
i__17885__auto___23585 = G__23586;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to23579.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to23579.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23582){
var vec__23583 = p__23582;
var content = cljs.core.nth.call(null,vec__23583,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23579.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23579.cljs$lang$applyTo = (function (seq23580){
var G__23581 = cljs.core.first.call(null,seq23580);
var seq23580__$1 = cljs.core.next.call(null,seq23580);
return sablono.core.mail_to23579.cljs$core$IFn$_invoke$arity$variadic(G__23581,seq23580__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23579);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23587 = (function sablono$core$unordered_list23587(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list23587_$_iter__23592(s__23593){
return (new cljs.core.LazySeq(null,(function (){
var s__23593__$1 = s__23593;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23593__$1);
if(temp__4425__auto__){
var s__23593__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23593__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__23593__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__23595 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__23594 = (0);
while(true){
if((i__23594 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__23594);
cljs.core.chunk_append.call(null,b__23595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23596 = (i__23594 + (1));
i__23594 = G__23596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23595),sablono$core$unordered_list23587_$_iter__23592.call(null,cljs.core.chunk_rest.call(null,s__23593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23595),null);
}
} else {
var x = cljs.core.first.call(null,s__23593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23587_$_iter__23592.call(null,cljs.core.rest.call(null,s__23593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23587);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23597 = (function sablono$core$ordered_list23597(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list23597_$_iter__23602(s__23603){
return (new cljs.core.LazySeq(null,(function (){
var s__23603__$1 = s__23603;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23603__$1);
if(temp__4425__auto__){
var s__23603__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23603__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__23603__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__23605 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__23604 = (0);
while(true){
if((i__23604 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__23604);
cljs.core.chunk_append.call(null,b__23605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23606 = (i__23604 + (1));
i__23604 = G__23606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23605),sablono$core$ordered_list23597_$_iter__23602.call(null,cljs.core.chunk_rest.call(null,s__23603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23605),null);
}
} else {
var x = cljs.core.first.call(null,s__23603__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23597_$_iter__23602.call(null,cljs.core.rest.call(null,s__23603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23597);
/**
 * Create an image element.
 */
sablono.core.image23607 = (function sablono$core$image23607(var_args){
var args23608 = [];
var len__17884__auto___23611 = arguments.length;
var i__17885__auto___23612 = (0);
while(true){
if((i__17885__auto___23612 < len__17884__auto___23611)){
args23608.push((arguments[i__17885__auto___23612]));

var G__23613 = (i__17885__auto___23612 + (1));
i__17885__auto___23612 = G__23613;
continue;
} else {
}
break;
}

var G__23610 = args23608.length;
switch (G__23610) {
case 1:
return sablono.core.image23607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23608.length)].join('')));

}
});

sablono.core.image23607.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23607.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23607.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23607);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23615_SHARP_,p2__23616_SHARP_){
return [cljs.core.str(p1__23615_SHARP_),cljs.core.str("["),cljs.core.str(p2__23616_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23617_SHARP_,p2__23618_SHARP_){
return [cljs.core.str(p1__23617_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23618_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field23619 = (function sablono$core$color_field23619(var_args){
var args23620 = [];
var len__17884__auto___23687 = arguments.length;
var i__17885__auto___23688 = (0);
while(true){
if((i__17885__auto___23688 < len__17884__auto___23687)){
args23620.push((arguments[i__17885__auto___23688]));

var G__23689 = (i__17885__auto___23688 + (1));
i__17885__auto___23688 = G__23689;
continue;
} else {
}
break;
}

var G__23622 = args23620.length;
switch (G__23622) {
case 1:
return sablono.core.color_field23619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23620.length)].join('')));

}
});

sablono.core.color_field23619.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.color_field23619.call(null,name__23540__auto__,null);
});

sablono.core.color_field23619.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.color_field23619.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23619);

/**
 * Creates a date input field.
 */
sablono.core.date_field23623 = (function sablono$core$date_field23623(var_args){
var args23624 = [];
var len__17884__auto___23691 = arguments.length;
var i__17885__auto___23692 = (0);
while(true){
if((i__17885__auto___23692 < len__17884__auto___23691)){
args23624.push((arguments[i__17885__auto___23692]));

var G__23693 = (i__17885__auto___23692 + (1));
i__17885__auto___23692 = G__23693;
continue;
} else {
}
break;
}

var G__23626 = args23624.length;
switch (G__23626) {
case 1:
return sablono.core.date_field23623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23624.length)].join('')));

}
});

sablono.core.date_field23623.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.date_field23623.call(null,name__23540__auto__,null);
});

sablono.core.date_field23623.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.date_field23623.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23623);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23627 = (function sablono$core$datetime_field23627(var_args){
var args23628 = [];
var len__17884__auto___23695 = arguments.length;
var i__17885__auto___23696 = (0);
while(true){
if((i__17885__auto___23696 < len__17884__auto___23695)){
args23628.push((arguments[i__17885__auto___23696]));

var G__23697 = (i__17885__auto___23696 + (1));
i__17885__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var G__23630 = args23628.length;
switch (G__23630) {
case 1:
return sablono.core.datetime_field23627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23628.length)].join('')));

}
});

sablono.core.datetime_field23627.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.datetime_field23627.call(null,name__23540__auto__,null);
});

sablono.core.datetime_field23627.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.datetime_field23627.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23627);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23631 = (function sablono$core$datetime_local_field23631(var_args){
var args23632 = [];
var len__17884__auto___23699 = arguments.length;
var i__17885__auto___23700 = (0);
while(true){
if((i__17885__auto___23700 < len__17884__auto___23699)){
args23632.push((arguments[i__17885__auto___23700]));

var G__23701 = (i__17885__auto___23700 + (1));
i__17885__auto___23700 = G__23701;
continue;
} else {
}
break;
}

var G__23634 = args23632.length;
switch (G__23634) {
case 1:
return sablono.core.datetime_local_field23631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23632.length)].join('')));

}
});

sablono.core.datetime_local_field23631.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.datetime_local_field23631.call(null,name__23540__auto__,null);
});

sablono.core.datetime_local_field23631.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.datetime_local_field23631.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23631);

/**
 * Creates a email input field.
 */
sablono.core.email_field23635 = (function sablono$core$email_field23635(var_args){
var args23636 = [];
var len__17884__auto___23703 = arguments.length;
var i__17885__auto___23704 = (0);
while(true){
if((i__17885__auto___23704 < len__17884__auto___23703)){
args23636.push((arguments[i__17885__auto___23704]));

var G__23705 = (i__17885__auto___23704 + (1));
i__17885__auto___23704 = G__23705;
continue;
} else {
}
break;
}

var G__23638 = args23636.length;
switch (G__23638) {
case 1:
return sablono.core.email_field23635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23636.length)].join('')));

}
});

sablono.core.email_field23635.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.email_field23635.call(null,name__23540__auto__,null);
});

sablono.core.email_field23635.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.email_field23635.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23635);

/**
 * Creates a file input field.
 */
sablono.core.file_field23639 = (function sablono$core$file_field23639(var_args){
var args23640 = [];
var len__17884__auto___23707 = arguments.length;
var i__17885__auto___23708 = (0);
while(true){
if((i__17885__auto___23708 < len__17884__auto___23707)){
args23640.push((arguments[i__17885__auto___23708]));

var G__23709 = (i__17885__auto___23708 + (1));
i__17885__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var G__23642 = args23640.length;
switch (G__23642) {
case 1:
return sablono.core.file_field23639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23640.length)].join('')));

}
});

sablono.core.file_field23639.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.file_field23639.call(null,name__23540__auto__,null);
});

sablono.core.file_field23639.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.file_field23639.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23639);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23643 = (function sablono$core$hidden_field23643(var_args){
var args23644 = [];
var len__17884__auto___23711 = arguments.length;
var i__17885__auto___23712 = (0);
while(true){
if((i__17885__auto___23712 < len__17884__auto___23711)){
args23644.push((arguments[i__17885__auto___23712]));

var G__23713 = (i__17885__auto___23712 + (1));
i__17885__auto___23712 = G__23713;
continue;
} else {
}
break;
}

var G__23646 = args23644.length;
switch (G__23646) {
case 1:
return sablono.core.hidden_field23643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23644.length)].join('')));

}
});

sablono.core.hidden_field23643.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.hidden_field23643.call(null,name__23540__auto__,null);
});

sablono.core.hidden_field23643.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.hidden_field23643.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23643);

/**
 * Creates a month input field.
 */
sablono.core.month_field23647 = (function sablono$core$month_field23647(var_args){
var args23648 = [];
var len__17884__auto___23715 = arguments.length;
var i__17885__auto___23716 = (0);
while(true){
if((i__17885__auto___23716 < len__17884__auto___23715)){
args23648.push((arguments[i__17885__auto___23716]));

var G__23717 = (i__17885__auto___23716 + (1));
i__17885__auto___23716 = G__23717;
continue;
} else {
}
break;
}

var G__23650 = args23648.length;
switch (G__23650) {
case 1:
return sablono.core.month_field23647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23648.length)].join('')));

}
});

sablono.core.month_field23647.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.month_field23647.call(null,name__23540__auto__,null);
});

sablono.core.month_field23647.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.month_field23647.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23647);

/**
 * Creates a number input field.
 */
sablono.core.number_field23651 = (function sablono$core$number_field23651(var_args){
var args23652 = [];
var len__17884__auto___23719 = arguments.length;
var i__17885__auto___23720 = (0);
while(true){
if((i__17885__auto___23720 < len__17884__auto___23719)){
args23652.push((arguments[i__17885__auto___23720]));

var G__23721 = (i__17885__auto___23720 + (1));
i__17885__auto___23720 = G__23721;
continue;
} else {
}
break;
}

var G__23654 = args23652.length;
switch (G__23654) {
case 1:
return sablono.core.number_field23651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23652.length)].join('')));

}
});

sablono.core.number_field23651.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.number_field23651.call(null,name__23540__auto__,null);
});

sablono.core.number_field23651.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.number_field23651.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23651);

/**
 * Creates a password input field.
 */
sablono.core.password_field23655 = (function sablono$core$password_field23655(var_args){
var args23656 = [];
var len__17884__auto___23723 = arguments.length;
var i__17885__auto___23724 = (0);
while(true){
if((i__17885__auto___23724 < len__17884__auto___23723)){
args23656.push((arguments[i__17885__auto___23724]));

var G__23725 = (i__17885__auto___23724 + (1));
i__17885__auto___23724 = G__23725;
continue;
} else {
}
break;
}

var G__23658 = args23656.length;
switch (G__23658) {
case 1:
return sablono.core.password_field23655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23656.length)].join('')));

}
});

sablono.core.password_field23655.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.password_field23655.call(null,name__23540__auto__,null);
});

sablono.core.password_field23655.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.password_field23655.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23655);

/**
 * Creates a range input field.
 */
sablono.core.range_field23659 = (function sablono$core$range_field23659(var_args){
var args23660 = [];
var len__17884__auto___23727 = arguments.length;
var i__17885__auto___23728 = (0);
while(true){
if((i__17885__auto___23728 < len__17884__auto___23727)){
args23660.push((arguments[i__17885__auto___23728]));

var G__23729 = (i__17885__auto___23728 + (1));
i__17885__auto___23728 = G__23729;
continue;
} else {
}
break;
}

var G__23662 = args23660.length;
switch (G__23662) {
case 1:
return sablono.core.range_field23659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23660.length)].join('')));

}
});

sablono.core.range_field23659.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.range_field23659.call(null,name__23540__auto__,null);
});

sablono.core.range_field23659.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.range_field23659.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23659);

/**
 * Creates a search input field.
 */
sablono.core.search_field23663 = (function sablono$core$search_field23663(var_args){
var args23664 = [];
var len__17884__auto___23731 = arguments.length;
var i__17885__auto___23732 = (0);
while(true){
if((i__17885__auto___23732 < len__17884__auto___23731)){
args23664.push((arguments[i__17885__auto___23732]));

var G__23733 = (i__17885__auto___23732 + (1));
i__17885__auto___23732 = G__23733;
continue;
} else {
}
break;
}

var G__23666 = args23664.length;
switch (G__23666) {
case 1:
return sablono.core.search_field23663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23664.length)].join('')));

}
});

sablono.core.search_field23663.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.search_field23663.call(null,name__23540__auto__,null);
});

sablono.core.search_field23663.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.search_field23663.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23663);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23667 = (function sablono$core$tel_field23667(var_args){
var args23668 = [];
var len__17884__auto___23735 = arguments.length;
var i__17885__auto___23736 = (0);
while(true){
if((i__17885__auto___23736 < len__17884__auto___23735)){
args23668.push((arguments[i__17885__auto___23736]));

var G__23737 = (i__17885__auto___23736 + (1));
i__17885__auto___23736 = G__23737;
continue;
} else {
}
break;
}

var G__23670 = args23668.length;
switch (G__23670) {
case 1:
return sablono.core.tel_field23667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23668.length)].join('')));

}
});

sablono.core.tel_field23667.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.tel_field23667.call(null,name__23540__auto__,null);
});

sablono.core.tel_field23667.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.tel_field23667.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23667);

/**
 * Creates a text input field.
 */
sablono.core.text_field23671 = (function sablono$core$text_field23671(var_args){
var args23672 = [];
var len__17884__auto___23739 = arguments.length;
var i__17885__auto___23740 = (0);
while(true){
if((i__17885__auto___23740 < len__17884__auto___23739)){
args23672.push((arguments[i__17885__auto___23740]));

var G__23741 = (i__17885__auto___23740 + (1));
i__17885__auto___23740 = G__23741;
continue;
} else {
}
break;
}

var G__23674 = args23672.length;
switch (G__23674) {
case 1:
return sablono.core.text_field23671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23672.length)].join('')));

}
});

sablono.core.text_field23671.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.text_field23671.call(null,name__23540__auto__,null);
});

sablono.core.text_field23671.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.text_field23671.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23671);

/**
 * Creates a time input field.
 */
sablono.core.time_field23675 = (function sablono$core$time_field23675(var_args){
var args23676 = [];
var len__17884__auto___23743 = arguments.length;
var i__17885__auto___23744 = (0);
while(true){
if((i__17885__auto___23744 < len__17884__auto___23743)){
args23676.push((arguments[i__17885__auto___23744]));

var G__23745 = (i__17885__auto___23744 + (1));
i__17885__auto___23744 = G__23745;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
case 1:
return sablono.core.time_field23675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

sablono.core.time_field23675.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.time_field23675.call(null,name__23540__auto__,null);
});

sablono.core.time_field23675.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.time_field23675.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23675);

/**
 * Creates a url input field.
 */
sablono.core.url_field23679 = (function sablono$core$url_field23679(var_args){
var args23680 = [];
var len__17884__auto___23747 = arguments.length;
var i__17885__auto___23748 = (0);
while(true){
if((i__17885__auto___23748 < len__17884__auto___23747)){
args23680.push((arguments[i__17885__auto___23748]));

var G__23749 = (i__17885__auto___23748 + (1));
i__17885__auto___23748 = G__23749;
continue;
} else {
}
break;
}

var G__23682 = args23680.length;
switch (G__23682) {
case 1:
return sablono.core.url_field23679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23680.length)].join('')));

}
});

sablono.core.url_field23679.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.url_field23679.call(null,name__23540__auto__,null);
});

sablono.core.url_field23679.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.url_field23679.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23679);

/**
 * Creates a week input field.
 */
sablono.core.week_field23683 = (function sablono$core$week_field23683(var_args){
var args23684 = [];
var len__17884__auto___23751 = arguments.length;
var i__17885__auto___23752 = (0);
while(true){
if((i__17885__auto___23752 < len__17884__auto___23751)){
args23684.push((arguments[i__17885__auto___23752]));

var G__23753 = (i__17885__auto___23752 + (1));
i__17885__auto___23752 = G__23753;
continue;
} else {
}
break;
}

var G__23686 = args23684.length;
switch (G__23686) {
case 1:
return sablono.core.week_field23683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23684.length)].join('')));

}
});

sablono.core.week_field23683.cljs$core$IFn$_invoke$arity$1 = (function (name__23540__auto__){
return sablono.core.week_field23683.call(null,name__23540__auto__,null);
});

sablono.core.week_field23683.cljs$core$IFn$_invoke$arity$2 = (function (name__23540__auto__,value__23541__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23540__auto__,value__23541__auto__);
});

sablono.core.week_field23683.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23683);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23755 = (function sablono$core$check_box23755(var_args){
var args23756 = [];
var len__17884__auto___23759 = arguments.length;
var i__17885__auto___23760 = (0);
while(true){
if((i__17885__auto___23760 < len__17884__auto___23759)){
args23756.push((arguments[i__17885__auto___23760]));

var G__23761 = (i__17885__auto___23760 + (1));
i__17885__auto___23760 = G__23761;
continue;
} else {
}
break;
}

var G__23758 = args23756.length;
switch (G__23758) {
case 1:
return sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23756.length)].join('')));

}
});

sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box23755.call(null,name,null);
});

sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box23755.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box23755.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23755.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23755);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23763 = (function sablono$core$radio_button23763(var_args){
var args23764 = [];
var len__17884__auto___23767 = arguments.length;
var i__17885__auto___23768 = (0);
while(true){
if((i__17885__auto___23768 < len__17884__auto___23767)){
args23764.push((arguments[i__17885__auto___23768]));

var G__23769 = (i__17885__auto___23768 + (1));
i__17885__auto___23768 = G__23769;
continue;
} else {
}
break;
}

var G__23766 = args23764.length;
switch (G__23766) {
case 1:
return sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23764.length)].join('')));

}
});

sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button23763.call(null,group,null);
});

sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button23763.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button23763.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23763.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23763);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23771 = (function sablono$core$select_options23771(coll){
var iter__17598__auto__ = (function sablono$core$select_options23771_$_iter__23780(s__23781){
return (new cljs.core.LazySeq(null,(function (){
var s__23781__$1 = s__23781;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23781__$1);
if(temp__4425__auto__){
var s__23781__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23781__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__23781__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__23783 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__23782 = (0);
while(true){
if((i__23782 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__23782);
cljs.core.chunk_append.call(null,b__23783,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23786 = x;
var text = cljs.core.nth.call(null,vec__23786,(0),null);
var val = cljs.core.nth.call(null,vec__23786,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23786,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23771.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23788 = (i__23782 + (1));
i__23782 = G__23788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23783),sablono$core$select_options23771_$_iter__23780.call(null,cljs.core.chunk_rest.call(null,s__23781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23783),null);
}
} else {
var x = cljs.core.first.call(null,s__23781__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23787 = x;
var text = cljs.core.nth.call(null,vec__23787,(0),null);
var val = cljs.core.nth.call(null,vec__23787,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23787,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23771.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23771_$_iter__23780.call(null,cljs.core.rest.call(null,s__23781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23771);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23789 = (function sablono$core$drop_down23789(var_args){
var args23790 = [];
var len__17884__auto___23793 = arguments.length;
var i__17885__auto___23794 = (0);
while(true){
if((i__17885__auto___23794 < len__17884__auto___23793)){
args23790.push((arguments[i__17885__auto___23794]));

var G__23795 = (i__17885__auto___23794 + (1));
i__17885__auto___23794 = G__23795;
continue;
} else {
}
break;
}

var G__23792 = args23790.length;
switch (G__23792) {
case 2:
return sablono.core.drop_down23789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23789.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23790.length)].join('')));

}
});

sablono.core.drop_down23789.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23789.call(null,name,options,null);
});

sablono.core.drop_down23789.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23789.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23789);
/**
 * Creates a text area element.
 */
sablono.core.text_area23797 = (function sablono$core$text_area23797(var_args){
var args23798 = [];
var len__17884__auto___23801 = arguments.length;
var i__17885__auto___23802 = (0);
while(true){
if((i__17885__auto___23802 < len__17884__auto___23801)){
args23798.push((arguments[i__17885__auto___23802]));

var G__23803 = (i__17885__auto___23802 + (1));
i__17885__auto___23802 = G__23803;
continue;
} else {
}
break;
}

var G__23800 = args23798.length;
switch (G__23800) {
case 1:
return sablono.core.text_area23797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23798.length)].join('')));

}
});

sablono.core.text_area23797.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area23797.call(null,name,null);
});

sablono.core.text_area23797.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area23797.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23797);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23805 = (function sablono$core$label23805(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23805);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23806 = (function sablono$core$submit_button23806(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23806);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23807 = (function sablono$core$reset_button23807(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23807);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23808 = (function sablono$core$form_to23808(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23813 = arguments.length;
var i__17885__auto___23814 = (0);
while(true){
if((i__17885__auto___23814 < len__17884__auto___23813)){
args__17891__auto__.push((arguments[i__17885__auto___23814]));

var G__23815 = (i__17885__auto___23814 + (1));
i__17885__auto___23814 = G__23815;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to23808.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to23808.cljs$core$IFn$_invoke$arity$variadic = (function (p__23811,body){
var vec__23812 = p__23811;
var method = cljs.core.nth.call(null,vec__23812,(0),null);
var action = cljs.core.nth.call(null,vec__23812,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23808.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23808.cljs$lang$applyTo = (function (seq23809){
var G__23810 = cljs.core.first.call(null,seq23809);
var seq23809__$1 = cljs.core.next.call(null,seq23809);
return sablono.core.form_to23808.cljs$core$IFn$_invoke$arity$variadic(G__23810,seq23809__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23808);

//# sourceMappingURL=core.js.map?rel=1452098820255