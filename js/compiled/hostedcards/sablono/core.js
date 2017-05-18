// Compiled by ClojureScript 1.9.542 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22455__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22452 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22453 = cljs.core.seq.call(null,vec__22452);
var first__22454 = cljs.core.first.call(null,seq__22453);
var seq__22453__$1 = cljs.core.next.call(null,seq__22453);
var tag = first__22454;
var body = seq__22453__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22456__i = 0, G__22456__a = new Array(arguments.length -  0);
while (G__22456__i < G__22456__a.length) {G__22456__a[G__22456__i] = arguments[G__22456__i + 0]; ++G__22456__i;}
  args = new cljs.core.IndexedSeq(G__22456__a,0,null);
} 
return G__22455__delegate.call(this,args);};
G__22455.cljs$lang$maxFixedArity = 0;
G__22455.cljs$lang$applyTo = (function (arglist__22457){
var args = cljs.core.seq(arglist__22457);
return G__22455__delegate(args);
});
G__22455.cljs$core$IFn$_invoke$arity$variadic = G__22455__delegate;
return G__22455;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__10288__auto__ = (function sablono$core$update_arglists_$_iter__22462(s__22463){
return (new cljs.core.LazySeq(null,(function (){
var s__22463__$1 = s__22463;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__22463__$1);
if(temp__6738__auto__){
var s__22463__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22463__$2)){
var c__10286__auto__ = cljs.core.chunk_first.call(null,s__22463__$2);
var size__10287__auto__ = cljs.core.count.call(null,c__10286__auto__);
var b__22465 = cljs.core.chunk_buffer.call(null,size__10287__auto__);
if((function (){var i__22464 = (0);
while(true){
if((i__22464 < size__10287__auto__)){
var args = cljs.core._nth.call(null,c__10286__auto__,i__22464);
cljs.core.chunk_append.call(null,b__22465,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22466 = (i__22464 + (1));
i__22464 = G__22466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22465),sablono$core$update_arglists_$_iter__22462.call(null,cljs.core.chunk_rest.call(null,s__22463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22465),null);
}
} else {
var args = cljs.core.first.call(null,s__22463__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22462.call(null,cljs.core.rest.call(null,s__22463__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__10654__auto__ = [];
var len__10647__auto___22472 = arguments.length;
var i__10648__auto___22473 = (0);
while(true){
if((i__10648__auto___22473 < len__10647__auto___22472)){
args__10654__auto__.push((arguments[i__10648__auto___22473]));

var G__22474 = (i__10648__auto___22473 + (1));
i__10648__auto___22473 = G__22474;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__10288__auto__ = (function sablono$core$iter__22468(s__22469){
return (new cljs.core.LazySeq(null,(function (){
var s__22469__$1 = s__22469;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__22469__$1);
if(temp__6738__auto__){
var s__22469__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22469__$2)){
var c__10286__auto__ = cljs.core.chunk_first.call(null,s__22469__$2);
var size__10287__auto__ = cljs.core.count.call(null,c__10286__auto__);
var b__22471 = cljs.core.chunk_buffer.call(null,size__10287__auto__);
if((function (){var i__22470 = (0);
while(true){
if((i__22470 < size__10287__auto__)){
var style = cljs.core._nth.call(null,c__10286__auto__,i__22470);
cljs.core.chunk_append.call(null,b__22471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22475 = (i__22470 + (1));
i__22470 = G__22475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22471),sablono$core$iter__22468.call(null,cljs.core.chunk_rest.call(null,s__22469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22471),null);
}
} else {
var style = cljs.core.first.call(null,s__22469__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22468.call(null,cljs.core.rest.call(null,s__22469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22467){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22467));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
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
sablono.core.link_to22476 = (function sablono$core$link_to22476(var_args){
var args__10654__auto__ = [];
var len__10647__auto___22479 = arguments.length;
var i__10648__auto___22480 = (0);
while(true){
if((i__10648__auto___22480 < len__10647__auto___22479)){
args__10654__auto__.push((arguments[i__10648__auto___22480]));

var G__22481 = (i__10648__auto___22480 + (1));
i__10648__auto___22480 = G__22481;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22476.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.link_to22476.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22476.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22476.cljs$lang$applyTo = (function (seq22477){
var G__22478 = cljs.core.first.call(null,seq22477);
var seq22477__$1 = cljs.core.next.call(null,seq22477);
return sablono.core.link_to22476.cljs$core$IFn$_invoke$arity$variadic(G__22478,seq22477__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22476);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22482 = (function sablono$core$mail_to22482(var_args){
var args__10654__auto__ = [];
var len__10647__auto___22489 = arguments.length;
var i__10648__auto___22490 = (0);
while(true){
if((i__10648__auto___22490 < len__10647__auto___22489)){
args__10654__auto__.push((arguments[i__10648__auto___22490]));

var G__22491 = (i__10648__auto___22490 + (1));
i__10648__auto___22490 = G__22491;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22482.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.mail_to22482.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22485){
var vec__22486 = p__22485;
var content = cljs.core.nth.call(null,vec__22486,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__9426__auto__ = content;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22482.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22482.cljs$lang$applyTo = (function (seq22483){
var G__22484 = cljs.core.first.call(null,seq22483);
var seq22483__$1 = cljs.core.next.call(null,seq22483);
return sablono.core.mail_to22482.cljs$core$IFn$_invoke$arity$variadic(G__22484,seq22483__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22482);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22492 = (function sablono$core$unordered_list22492(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__10288__auto__ = (function sablono$core$unordered_list22492_$_iter__22497(s__22498){
return (new cljs.core.LazySeq(null,(function (){
var s__22498__$1 = s__22498;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__22498__$1);
if(temp__6738__auto__){
var s__22498__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22498__$2)){
var c__10286__auto__ = cljs.core.chunk_first.call(null,s__22498__$2);
var size__10287__auto__ = cljs.core.count.call(null,c__10286__auto__);
var b__22500 = cljs.core.chunk_buffer.call(null,size__10287__auto__);
if((function (){var i__22499 = (0);
while(true){
if((i__22499 < size__10287__auto__)){
var x = cljs.core._nth.call(null,c__10286__auto__,i__22499);
cljs.core.chunk_append.call(null,b__22500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22501 = (i__22499 + (1));
i__22499 = G__22501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22500),sablono$core$unordered_list22492_$_iter__22497.call(null,cljs.core.chunk_rest.call(null,s__22498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22500),null);
}
} else {
var x = cljs.core.first.call(null,s__22498__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22492_$_iter__22497.call(null,cljs.core.rest.call(null,s__22498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22492);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22502 = (function sablono$core$ordered_list22502(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__10288__auto__ = (function sablono$core$ordered_list22502_$_iter__22507(s__22508){
return (new cljs.core.LazySeq(null,(function (){
var s__22508__$1 = s__22508;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__22508__$1);
if(temp__6738__auto__){
var s__22508__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22508__$2)){
var c__10286__auto__ = cljs.core.chunk_first.call(null,s__22508__$2);
var size__10287__auto__ = cljs.core.count.call(null,c__10286__auto__);
var b__22510 = cljs.core.chunk_buffer.call(null,size__10287__auto__);
if((function (){var i__22509 = (0);
while(true){
if((i__22509 < size__10287__auto__)){
var x = cljs.core._nth.call(null,c__10286__auto__,i__22509);
cljs.core.chunk_append.call(null,b__22510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22511 = (i__22509 + (1));
i__22509 = G__22511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22510),sablono$core$ordered_list22502_$_iter__22507.call(null,cljs.core.chunk_rest.call(null,s__22508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22510),null);
}
} else {
var x = cljs.core.first.call(null,s__22508__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22502_$_iter__22507.call(null,cljs.core.rest.call(null,s__22508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22502);
/**
 * Create an image element.
 */
sablono.core.image22512 = (function sablono$core$image22512(var_args){
var args22513 = [];
var len__10647__auto___22516 = arguments.length;
var i__10648__auto___22517 = (0);
while(true){
if((i__10648__auto___22517 < len__10647__auto___22516)){
args22513.push((arguments[i__10648__auto___22517]));

var G__22518 = (i__10648__auto___22517 + (1));
i__10648__auto___22517 = G__22518;
continue;
} else {
}
break;
}

var G__22515 = args22513.length;
switch (G__22515) {
case 1:
return sablono.core.image22512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22513.length)].join('')));

}
});

sablono.core.image22512.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22512.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22512.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22512);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22520_SHARP_,p2__22521_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22520_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22521_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22522_SHARP_,p2__22523_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22522_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22523_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args22524 = [];
var len__10647__auto___22527 = arguments.length;
var i__10648__auto___22528 = (0);
while(true){
if((i__10648__auto___22528 < len__10647__auto___22527)){
args22524.push((arguments[i__10648__auto___22528]));

var G__22529 = (i__10648__auto___22528 + (1));
i__10648__auto___22528 = G__22529;
continue;
} else {
}
break;
}

var G__22526 = args22524.length;
switch (G__22526) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22524.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__9426__auto__ = value;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field22531 = (function sablono$core$color_field22531(var_args){
var args22532 = [];
var len__10647__auto___22599 = arguments.length;
var i__10648__auto___22600 = (0);
while(true){
if((i__10648__auto___22600 < len__10647__auto___22599)){
args22532.push((arguments[i__10648__auto___22600]));

var G__22601 = (i__10648__auto___22600 + (1));
i__10648__auto___22600 = G__22601;
continue;
} else {
}
break;
}

var G__22534 = args22532.length;
switch (G__22534) {
case 1:
return sablono.core.color_field22531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22532.length)].join('')));

}
});

sablono.core.color_field22531.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22439__auto__);
});

sablono.core.color_field22531.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.color_field22531.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22531);

/**
 * Creates a date input field.
 */
sablono.core.date_field22535 = (function sablono$core$date_field22535(var_args){
var args22536 = [];
var len__10647__auto___22603 = arguments.length;
var i__10648__auto___22604 = (0);
while(true){
if((i__10648__auto___22604 < len__10647__auto___22603)){
args22536.push((arguments[i__10648__auto___22604]));

var G__22605 = (i__10648__auto___22604 + (1));
i__10648__auto___22604 = G__22605;
continue;
} else {
}
break;
}

var G__22538 = args22536.length;
switch (G__22538) {
case 1:
return sablono.core.date_field22535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22536.length)].join('')));

}
});

sablono.core.date_field22535.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22439__auto__);
});

sablono.core.date_field22535.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.date_field22535.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22535);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22539 = (function sablono$core$datetime_field22539(var_args){
var args22540 = [];
var len__10647__auto___22607 = arguments.length;
var i__10648__auto___22608 = (0);
while(true){
if((i__10648__auto___22608 < len__10647__auto___22607)){
args22540.push((arguments[i__10648__auto___22608]));

var G__22609 = (i__10648__auto___22608 + (1));
i__10648__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var G__22542 = args22540.length;
switch (G__22542) {
case 1:
return sablono.core.datetime_field22539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22540.length)].join('')));

}
});

sablono.core.datetime_field22539.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22439__auto__);
});

sablono.core.datetime_field22539.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.datetime_field22539.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22539);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22543 = (function sablono$core$datetime_local_field22543(var_args){
var args22544 = [];
var len__10647__auto___22611 = arguments.length;
var i__10648__auto___22612 = (0);
while(true){
if((i__10648__auto___22612 < len__10647__auto___22611)){
args22544.push((arguments[i__10648__auto___22612]));

var G__22613 = (i__10648__auto___22612 + (1));
i__10648__auto___22612 = G__22613;
continue;
} else {
}
break;
}

var G__22546 = args22544.length;
switch (G__22546) {
case 1:
return sablono.core.datetime_local_field22543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22544.length)].join('')));

}
});

sablono.core.datetime_local_field22543.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22439__auto__);
});

sablono.core.datetime_local_field22543.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.datetime_local_field22543.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22543);

/**
 * Creates a email input field.
 */
sablono.core.email_field22547 = (function sablono$core$email_field22547(var_args){
var args22548 = [];
var len__10647__auto___22615 = arguments.length;
var i__10648__auto___22616 = (0);
while(true){
if((i__10648__auto___22616 < len__10647__auto___22615)){
args22548.push((arguments[i__10648__auto___22616]));

var G__22617 = (i__10648__auto___22616 + (1));
i__10648__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var G__22550 = args22548.length;
switch (G__22550) {
case 1:
return sablono.core.email_field22547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22548.length)].join('')));

}
});

sablono.core.email_field22547.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22439__auto__);
});

sablono.core.email_field22547.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.email_field22547.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22547);

/**
 * Creates a file input field.
 */
sablono.core.file_field22551 = (function sablono$core$file_field22551(var_args){
var args22552 = [];
var len__10647__auto___22619 = arguments.length;
var i__10648__auto___22620 = (0);
while(true){
if((i__10648__auto___22620 < len__10647__auto___22619)){
args22552.push((arguments[i__10648__auto___22620]));

var G__22621 = (i__10648__auto___22620 + (1));
i__10648__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var G__22554 = args22552.length;
switch (G__22554) {
case 1:
return sablono.core.file_field22551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22552.length)].join('')));

}
});

sablono.core.file_field22551.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22439__auto__);
});

sablono.core.file_field22551.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.file_field22551.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22551);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22555 = (function sablono$core$hidden_field22555(var_args){
var args22556 = [];
var len__10647__auto___22623 = arguments.length;
var i__10648__auto___22624 = (0);
while(true){
if((i__10648__auto___22624 < len__10647__auto___22623)){
args22556.push((arguments[i__10648__auto___22624]));

var G__22625 = (i__10648__auto___22624 + (1));
i__10648__auto___22624 = G__22625;
continue;
} else {
}
break;
}

var G__22558 = args22556.length;
switch (G__22558) {
case 1:
return sablono.core.hidden_field22555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22556.length)].join('')));

}
});

sablono.core.hidden_field22555.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22439__auto__);
});

sablono.core.hidden_field22555.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.hidden_field22555.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22555);

/**
 * Creates a month input field.
 */
sablono.core.month_field22559 = (function sablono$core$month_field22559(var_args){
var args22560 = [];
var len__10647__auto___22627 = arguments.length;
var i__10648__auto___22628 = (0);
while(true){
if((i__10648__auto___22628 < len__10647__auto___22627)){
args22560.push((arguments[i__10648__auto___22628]));

var G__22629 = (i__10648__auto___22628 + (1));
i__10648__auto___22628 = G__22629;
continue;
} else {
}
break;
}

var G__22562 = args22560.length;
switch (G__22562) {
case 1:
return sablono.core.month_field22559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22560.length)].join('')));

}
});

sablono.core.month_field22559.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22439__auto__);
});

sablono.core.month_field22559.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.month_field22559.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22559);

/**
 * Creates a number input field.
 */
sablono.core.number_field22563 = (function sablono$core$number_field22563(var_args){
var args22564 = [];
var len__10647__auto___22631 = arguments.length;
var i__10648__auto___22632 = (0);
while(true){
if((i__10648__auto___22632 < len__10647__auto___22631)){
args22564.push((arguments[i__10648__auto___22632]));

var G__22633 = (i__10648__auto___22632 + (1));
i__10648__auto___22632 = G__22633;
continue;
} else {
}
break;
}

var G__22566 = args22564.length;
switch (G__22566) {
case 1:
return sablono.core.number_field22563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22564.length)].join('')));

}
});

sablono.core.number_field22563.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22439__auto__);
});

sablono.core.number_field22563.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.number_field22563.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22563);

/**
 * Creates a password input field.
 */
sablono.core.password_field22567 = (function sablono$core$password_field22567(var_args){
var args22568 = [];
var len__10647__auto___22635 = arguments.length;
var i__10648__auto___22636 = (0);
while(true){
if((i__10648__auto___22636 < len__10647__auto___22635)){
args22568.push((arguments[i__10648__auto___22636]));

var G__22637 = (i__10648__auto___22636 + (1));
i__10648__auto___22636 = G__22637;
continue;
} else {
}
break;
}

var G__22570 = args22568.length;
switch (G__22570) {
case 1:
return sablono.core.password_field22567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22568.length)].join('')));

}
});

sablono.core.password_field22567.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22439__auto__);
});

sablono.core.password_field22567.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.password_field22567.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22567);

/**
 * Creates a range input field.
 */
sablono.core.range_field22571 = (function sablono$core$range_field22571(var_args){
var args22572 = [];
var len__10647__auto___22639 = arguments.length;
var i__10648__auto___22640 = (0);
while(true){
if((i__10648__auto___22640 < len__10647__auto___22639)){
args22572.push((arguments[i__10648__auto___22640]));

var G__22641 = (i__10648__auto___22640 + (1));
i__10648__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var G__22574 = args22572.length;
switch (G__22574) {
case 1:
return sablono.core.range_field22571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22572.length)].join('')));

}
});

sablono.core.range_field22571.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22439__auto__);
});

sablono.core.range_field22571.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.range_field22571.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22571);

/**
 * Creates a search input field.
 */
sablono.core.search_field22575 = (function sablono$core$search_field22575(var_args){
var args22576 = [];
var len__10647__auto___22643 = arguments.length;
var i__10648__auto___22644 = (0);
while(true){
if((i__10648__auto___22644 < len__10647__auto___22643)){
args22576.push((arguments[i__10648__auto___22644]));

var G__22645 = (i__10648__auto___22644 + (1));
i__10648__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var G__22578 = args22576.length;
switch (G__22578) {
case 1:
return sablono.core.search_field22575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22576.length)].join('')));

}
});

sablono.core.search_field22575.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22439__auto__);
});

sablono.core.search_field22575.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.search_field22575.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22575);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22579 = (function sablono$core$tel_field22579(var_args){
var args22580 = [];
var len__10647__auto___22647 = arguments.length;
var i__10648__auto___22648 = (0);
while(true){
if((i__10648__auto___22648 < len__10647__auto___22647)){
args22580.push((arguments[i__10648__auto___22648]));

var G__22649 = (i__10648__auto___22648 + (1));
i__10648__auto___22648 = G__22649;
continue;
} else {
}
break;
}

var G__22582 = args22580.length;
switch (G__22582) {
case 1:
return sablono.core.tel_field22579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22580.length)].join('')));

}
});

sablono.core.tel_field22579.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22439__auto__);
});

sablono.core.tel_field22579.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.tel_field22579.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22579);

/**
 * Creates a text input field.
 */
sablono.core.text_field22583 = (function sablono$core$text_field22583(var_args){
var args22584 = [];
var len__10647__auto___22651 = arguments.length;
var i__10648__auto___22652 = (0);
while(true){
if((i__10648__auto___22652 < len__10647__auto___22651)){
args22584.push((arguments[i__10648__auto___22652]));

var G__22653 = (i__10648__auto___22652 + (1));
i__10648__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var G__22586 = args22584.length;
switch (G__22586) {
case 1:
return sablono.core.text_field22583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22584.length)].join('')));

}
});

sablono.core.text_field22583.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22439__auto__);
});

sablono.core.text_field22583.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.text_field22583.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22583);

/**
 * Creates a time input field.
 */
sablono.core.time_field22587 = (function sablono$core$time_field22587(var_args){
var args22588 = [];
var len__10647__auto___22655 = arguments.length;
var i__10648__auto___22656 = (0);
while(true){
if((i__10648__auto___22656 < len__10647__auto___22655)){
args22588.push((arguments[i__10648__auto___22656]));

var G__22657 = (i__10648__auto___22656 + (1));
i__10648__auto___22656 = G__22657;
continue;
} else {
}
break;
}

var G__22590 = args22588.length;
switch (G__22590) {
case 1:
return sablono.core.time_field22587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22588.length)].join('')));

}
});

sablono.core.time_field22587.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22439__auto__);
});

sablono.core.time_field22587.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.time_field22587.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22587);

/**
 * Creates a url input field.
 */
sablono.core.url_field22591 = (function sablono$core$url_field22591(var_args){
var args22592 = [];
var len__10647__auto___22659 = arguments.length;
var i__10648__auto___22660 = (0);
while(true){
if((i__10648__auto___22660 < len__10647__auto___22659)){
args22592.push((arguments[i__10648__auto___22660]));

var G__22661 = (i__10648__auto___22660 + (1));
i__10648__auto___22660 = G__22661;
continue;
} else {
}
break;
}

var G__22594 = args22592.length;
switch (G__22594) {
case 1:
return sablono.core.url_field22591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22592.length)].join('')));

}
});

sablono.core.url_field22591.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22439__auto__);
});

sablono.core.url_field22591.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.url_field22591.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22591);

/**
 * Creates a week input field.
 */
sablono.core.week_field22595 = (function sablono$core$week_field22595(var_args){
var args22596 = [];
var len__10647__auto___22663 = arguments.length;
var i__10648__auto___22664 = (0);
while(true){
if((i__10648__auto___22664 < len__10647__auto___22663)){
args22596.push((arguments[i__10648__auto___22664]));

var G__22665 = (i__10648__auto___22664 + (1));
i__10648__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var G__22598 = args22596.length;
switch (G__22598) {
case 1:
return sablono.core.week_field22595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22596.length)].join('')));

}
});

sablono.core.week_field22595.cljs$core$IFn$_invoke$arity$1 = (function (name__22439__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22439__auto__);
});

sablono.core.week_field22595.cljs$core$IFn$_invoke$arity$2 = (function (name__22439__auto__,value__22440__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22439__auto__,value__22440__auto__);
});

sablono.core.week_field22595.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22595);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22667 = (function sablono$core$check_box22667(var_args){
var args22668 = [];
var len__10647__auto___22671 = arguments.length;
var i__10648__auto___22672 = (0);
while(true){
if((i__10648__auto___22672 < len__10647__auto___22671)){
args22668.push((arguments[i__10648__auto___22672]));

var G__22673 = (i__10648__auto___22672 + (1));
i__10648__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var G__22670 = args22668.length;
switch (G__22670) {
case 1:
return sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22668.length)].join('')));

}
});

sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22667.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22667.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22667);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22675 = (function sablono$core$radio_button22675(var_args){
var args22676 = [];
var len__10647__auto___22679 = arguments.length;
var i__10648__auto___22680 = (0);
while(true){
if((i__10648__auto___22680 < len__10647__auto___22679)){
args22676.push((arguments[i__10648__auto___22680]));

var G__22681 = (i__10648__auto___22680 + (1));
i__10648__auto___22680 = G__22681;
continue;
} else {
}
break;
}

var G__22678 = args22676.length;
switch (G__22678) {
case 1:
return sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22676.length)].join('')));

}
});

sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22675.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22675.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22675);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22683 = (function sablono$core$select_options22683(coll){
var iter__10288__auto__ = (function sablono$core$select_options22683_$_iter__22700(s__22701){
return (new cljs.core.LazySeq(null,(function (){
var s__22701__$1 = s__22701;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__22701__$1);
if(temp__6738__auto__){
var s__22701__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22701__$2)){
var c__10286__auto__ = cljs.core.chunk_first.call(null,s__22701__$2);
var size__10287__auto__ = cljs.core.count.call(null,c__10286__auto__);
var b__22703 = cljs.core.chunk_buffer.call(null,size__10287__auto__);
if((function (){var i__22702 = (0);
while(true){
if((i__22702 < size__10287__auto__)){
var x = cljs.core._nth.call(null,c__10286__auto__,i__22702);
cljs.core.chunk_append.call(null,b__22703,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22710 = x;
var text = cljs.core.nth.call(null,vec__22710,(0),null);
var val = cljs.core.nth.call(null,vec__22710,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22710,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22683.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22716 = (i__22702 + (1));
i__22702 = G__22716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22703),sablono$core$select_options22683_$_iter__22700.call(null,cljs.core.chunk_rest.call(null,s__22701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22703),null);
}
} else {
var x = cljs.core.first.call(null,s__22701__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22713 = x;
var text = cljs.core.nth.call(null,vec__22713,(0),null);
var val = cljs.core.nth.call(null,vec__22713,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22713,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22683.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22683_$_iter__22700.call(null,cljs.core.rest.call(null,s__22701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22683);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22717 = (function sablono$core$drop_down22717(var_args){
var args22718 = [];
var len__10647__auto___22721 = arguments.length;
var i__10648__auto___22722 = (0);
while(true){
if((i__10648__auto___22722 < len__10647__auto___22721)){
args22718.push((arguments[i__10648__auto___22722]));

var G__22723 = (i__10648__auto___22722 + (1));
i__10648__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var G__22720 = args22718.length;
switch (G__22720) {
case 2:
return sablono.core.drop_down22717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22717.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22718.length)].join('')));

}
});

sablono.core.drop_down22717.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22717.call(null,name,options,null);
});

sablono.core.drop_down22717.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22717.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22717);
/**
 * Creates a text area element.
 */
sablono.core.text_area22725 = (function sablono$core$text_area22725(var_args){
var args22726 = [];
var len__10647__auto___22729 = arguments.length;
var i__10648__auto___22730 = (0);
while(true){
if((i__10648__auto___22730 < len__10647__auto___22729)){
args22726.push((arguments[i__10648__auto___22730]));

var G__22731 = (i__10648__auto___22730 + (1));
i__10648__auto___22730 = G__22731;
continue;
} else {
}
break;
}

var G__22728 = args22726.length;
switch (G__22728) {
case 1:
return sablono.core.text_area22725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22726.length)].join('')));

}
});

sablono.core.text_area22725.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area22725.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__9426__auto__ = value;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area22725.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22725);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22733 = (function sablono$core$label22733(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22733);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22734 = (function sablono$core$submit_button22734(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22734);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22735 = (function sablono$core$reset_button22735(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22735);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22736 = (function sablono$core$form_to22736(var_args){
var args__10654__auto__ = [];
var len__10647__auto___22743 = arguments.length;
var i__10648__auto___22744 = (0);
while(true){
if((i__10648__auto___22744 < len__10647__auto___22743)){
args__10654__auto__.push((arguments[i__10648__auto___22744]));

var G__22745 = (i__10648__auto___22744 + (1));
i__10648__auto___22744 = G__22745;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22736.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.form_to22736.cljs$core$IFn$_invoke$arity$variadic = (function (p__22739,body){
var vec__22740 = p__22739;
var method = cljs.core.nth.call(null,vec__22740,(0),null);
var action = cljs.core.nth.call(null,vec__22740,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22736.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22736.cljs$lang$applyTo = (function (seq22737){
var G__22738 = cljs.core.first.call(null,seq22737);
var seq22737__$1 = cljs.core.next.call(null,seq22737);
return sablono.core.form_to22736.cljs$core$IFn$_invoke$arity$variadic(G__22738,seq22737__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22736);
