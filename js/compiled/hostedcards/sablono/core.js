// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var G__23484__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__23481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__23482 = cljs.core.seq(vec__23481);
var first__23483 = cljs.core.first(seq__23482);
var seq__23482__$1 = cljs.core.next(seq__23482);
var tag = first__23483;
var body = seq__23482__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__23484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23485__i = 0, G__23485__a = new Array(arguments.length -  0);
while (G__23485__i < G__23485__a.length) {G__23485__a[G__23485__i] = arguments[G__23485__i + 0]; ++G__23485__i;}
  args = new cljs.core.IndexedSeq(G__23485__a,0,null);
} 
return G__23484__delegate.call(this,args);};
G__23484.cljs$lang$maxFixedArity = 0;
G__23484.cljs$lang$applyTo = (function (arglist__23486){
var args = cljs.core.seq(arglist__23486);
return G__23484__delegate(args);
});
G__23484.cljs$core$IFn$_invoke$arity$variadic = G__23484__delegate;
return G__23484;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__10288__auto__ = (function sablono$core$update_arglists_$_iter__23493(s__23494){
return (new cljs.core.LazySeq(null,(function (){
var s__23494__$1 = s__23494;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23494__$1);
if(temp__6738__auto__){
var s__23494__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23494__$2)){
var c__10286__auto__ = cljs.core.chunk_first(s__23494__$2);
var size__10287__auto__ = cljs.core.count(c__10286__auto__);
var b__23496 = cljs.core.chunk_buffer(size__10287__auto__);
if((function (){var i__23495 = (0);
while(true){
if((i__23495 < size__10287__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10286__auto__,i__23495);
cljs.core.chunk_append(b__23496,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__23499 = (i__23495 + (1));
i__23495 = G__23499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23496),sablono$core$update_arglists_$_iter__23493(cljs.core.chunk_rest(s__23494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23496),null);
}
} else {
var args = cljs.core.first(s__23494__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__23493(cljs.core.rest(s__23494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__10654__auto__ = [];
var len__10647__auto___23507 = arguments.length;
var i__10648__auto___23508 = (0);
while(true){
if((i__10648__auto___23508 < len__10647__auto___23507)){
args__10654__auto__.push((arguments[i__10648__auto___23508]));

var G__23509 = (i__10648__auto___23508 + (1));
i__10648__auto___23508 = G__23509;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((0) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__10655__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__10288__auto__ = (function sablono$core$iter__23501(s__23502){
return (new cljs.core.LazySeq(null,(function (){
var s__23502__$1 = s__23502;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23502__$1);
if(temp__6738__auto__){
var s__23502__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23502__$2)){
var c__10286__auto__ = cljs.core.chunk_first(s__23502__$2);
var size__10287__auto__ = cljs.core.count(c__10286__auto__);
var b__23504 = cljs.core.chunk_buffer(size__10287__auto__);
if((function (){var i__23503 = (0);
while(true){
if((i__23503 < size__10287__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10286__auto__,i__23503);
cljs.core.chunk_append(b__23504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__23510 = (i__23503 + (1));
i__23503 = G__23510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23504),sablono$core$iter__23501(cljs.core.chunk_rest(s__23502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23504),null);
}
} else {
var style = cljs.core.first(s__23502__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__23501(cljs.core.rest(s__23502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq23500){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23500));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__23515 = goog.dom.getDocument().body;
var G__23516 = (function (){var G__23517 = "script";
var G__23518 = ({"src": src});
return goog.dom.createDom(G__23517,G__23518);
})();
return goog.dom.appendChild(G__23515,G__23516);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23519 = (function sablono$core$link_to23519(var_args){
var args__10654__auto__ = [];
var len__10647__auto___23522 = arguments.length;
var i__10648__auto___23523 = (0);
while(true){
if((i__10648__auto___23523 < len__10647__auto___23522)){
args__10654__auto__.push((arguments[i__10648__auto___23523]));

var G__23524 = (i__10648__auto___23523 + (1));
i__10648__auto___23523 = G__23524;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23519.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.link_to23519.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to23519.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23519.cljs$lang$applyTo = (function (seq23520){
var G__23521 = cljs.core.first(seq23520);
var seq23520__$1 = cljs.core.next(seq23520);
return sablono.core.link_to23519.cljs$core$IFn$_invoke$arity$variadic(G__23521,seq23520__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to23519);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23525 = (function sablono$core$mail_to23525(var_args){
var args__10654__auto__ = [];
var len__10647__auto___23532 = arguments.length;
var i__10648__auto___23533 = (0);
while(true){
if((i__10648__auto___23533 < len__10647__auto___23532)){
args__10654__auto__.push((arguments[i__10648__auto___23533]));

var G__23534 = (i__10648__auto___23533 + (1));
i__10648__auto___23533 = G__23534;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23525.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.mail_to23525.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23528){
var vec__23529 = p__23528;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__9426__auto__ = content;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23525.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23525.cljs$lang$applyTo = (function (seq23526){
var G__23527 = cljs.core.first(seq23526);
var seq23526__$1 = cljs.core.next(seq23526);
return sablono.core.mail_to23525.cljs$core$IFn$_invoke$arity$variadic(G__23527,seq23526__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to23525);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23535 = (function sablono$core$unordered_list23535(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__10288__auto__ = (function sablono$core$unordered_list23535_$_iter__23542(s__23543){
return (new cljs.core.LazySeq(null,(function (){
var s__23543__$1 = s__23543;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23543__$1);
if(temp__6738__auto__){
var s__23543__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23543__$2)){
var c__10286__auto__ = cljs.core.chunk_first(s__23543__$2);
var size__10287__auto__ = cljs.core.count(c__10286__auto__);
var b__23545 = cljs.core.chunk_buffer(size__10287__auto__);
if((function (){var i__23544 = (0);
while(true){
if((i__23544 < size__10287__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10286__auto__,i__23544);
cljs.core.chunk_append(b__23545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__23548 = (i__23544 + (1));
i__23544 = G__23548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23545),sablono$core$unordered_list23535_$_iter__23542(cljs.core.chunk_rest(s__23543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23545),null);
}
} else {
var x = cljs.core.first(s__23543__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list23535_$_iter__23542(cljs.core.rest(s__23543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list23535);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23549 = (function sablono$core$ordered_list23549(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__10288__auto__ = (function sablono$core$ordered_list23549_$_iter__23556(s__23557){
return (new cljs.core.LazySeq(null,(function (){
var s__23557__$1 = s__23557;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23557__$1);
if(temp__6738__auto__){
var s__23557__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23557__$2)){
var c__10286__auto__ = cljs.core.chunk_first(s__23557__$2);
var size__10287__auto__ = cljs.core.count(c__10286__auto__);
var b__23559 = cljs.core.chunk_buffer(size__10287__auto__);
if((function (){var i__23558 = (0);
while(true){
if((i__23558 < size__10287__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10286__auto__,i__23558);
cljs.core.chunk_append(b__23559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__23562 = (i__23558 + (1));
i__23558 = G__23562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23559),sablono$core$ordered_list23549_$_iter__23556(cljs.core.chunk_rest(s__23557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23559),null);
}
} else {
var x = cljs.core.first(s__23557__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list23549_$_iter__23556(cljs.core.rest(s__23557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list23549);
/**
 * Create an image element.
 */
sablono.core.image23563 = (function sablono$core$image23563(var_args){
var args23564 = [];
var len__10647__auto___23567 = arguments.length;
var i__10648__auto___23568 = (0);
while(true){
if((i__10648__auto___23568 < len__10647__auto___23567)){
args23564.push((arguments[i__10648__auto___23568]));

var G__23569 = (i__10648__auto___23568 + (1));
i__10648__auto___23568 = G__23569;
continue;
} else {
}
break;
}

var G__23566 = args23564.length;
switch (G__23566) {
case 1:
return sablono.core.image23563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23564.length)].join('')));

}
});

sablono.core.image23563.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image23563.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image23563.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image23563);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__23571_SHARP_,p2__23572_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23571_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23572_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__23573_SHARP_,p2__23574_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23573_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23574_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args23575 = [];
var len__10647__auto___23578 = arguments.length;
var i__10648__auto___23579 = (0);
while(true){
if((i__10648__auto___23579 < len__10647__auto___23578)){
args23575.push((arguments[i__10648__auto___23579]));

var G__23580 = (i__10648__auto___23579 + (1));
i__10648__auto___23579 = G__23580;
continue;
} else {
}
break;
}

var G__23577 = args23575.length;
switch (G__23577) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23575.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__9426__auto__ = value;
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
sablono.core.color_field23582 = (function sablono$core$color_field23582(var_args){
var args23583 = [];
var len__10647__auto___23650 = arguments.length;
var i__10648__auto___23651 = (0);
while(true){
if((i__10648__auto___23651 < len__10647__auto___23650)){
args23583.push((arguments[i__10648__auto___23651]));

var G__23652 = (i__10648__auto___23651 + (1));
i__10648__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23585 = args23583.length;
switch (G__23585) {
case 1:
return sablono.core.color_field23582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23583.length)].join('')));

}
});

sablono.core.color_field23582.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__23468__auto__);
});

sablono.core.color_field23582.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.color_field23582.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field23582);

/**
 * Creates a date input field.
 */
sablono.core.date_field23586 = (function sablono$core$date_field23586(var_args){
var args23587 = [];
var len__10647__auto___23654 = arguments.length;
var i__10648__auto___23655 = (0);
while(true){
if((i__10648__auto___23655 < len__10647__auto___23654)){
args23587.push((arguments[i__10648__auto___23655]));

var G__23656 = (i__10648__auto___23655 + (1));
i__10648__auto___23655 = G__23656;
continue;
} else {
}
break;
}

var G__23589 = args23587.length;
switch (G__23589) {
case 1:
return sablono.core.date_field23586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23587.length)].join('')));

}
});

sablono.core.date_field23586.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__23468__auto__);
});

sablono.core.date_field23586.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.date_field23586.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field23586);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23590 = (function sablono$core$datetime_field23590(var_args){
var args23591 = [];
var len__10647__auto___23658 = arguments.length;
var i__10648__auto___23659 = (0);
while(true){
if((i__10648__auto___23659 < len__10647__auto___23658)){
args23591.push((arguments[i__10648__auto___23659]));

var G__23660 = (i__10648__auto___23659 + (1));
i__10648__auto___23659 = G__23660;
continue;
} else {
}
break;
}

var G__23593 = args23591.length;
switch (G__23593) {
case 1:
return sablono.core.datetime_field23590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23591.length)].join('')));

}
});

sablono.core.datetime_field23590.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__23468__auto__);
});

sablono.core.datetime_field23590.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.datetime_field23590.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field23590);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23594 = (function sablono$core$datetime_local_field23594(var_args){
var args23595 = [];
var len__10647__auto___23662 = arguments.length;
var i__10648__auto___23663 = (0);
while(true){
if((i__10648__auto___23663 < len__10647__auto___23662)){
args23595.push((arguments[i__10648__auto___23663]));

var G__23664 = (i__10648__auto___23663 + (1));
i__10648__auto___23663 = G__23664;
continue;
} else {
}
break;
}

var G__23597 = args23595.length;
switch (G__23597) {
case 1:
return sablono.core.datetime_local_field23594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23595.length)].join('')));

}
});

sablono.core.datetime_local_field23594.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__23468__auto__);
});

sablono.core.datetime_local_field23594.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.datetime_local_field23594.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field23594);

/**
 * Creates a email input field.
 */
sablono.core.email_field23598 = (function sablono$core$email_field23598(var_args){
var args23599 = [];
var len__10647__auto___23666 = arguments.length;
var i__10648__auto___23667 = (0);
while(true){
if((i__10648__auto___23667 < len__10647__auto___23666)){
args23599.push((arguments[i__10648__auto___23667]));

var G__23668 = (i__10648__auto___23667 + (1));
i__10648__auto___23667 = G__23668;
continue;
} else {
}
break;
}

var G__23601 = args23599.length;
switch (G__23601) {
case 1:
return sablono.core.email_field23598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23599.length)].join('')));

}
});

sablono.core.email_field23598.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__23468__auto__);
});

sablono.core.email_field23598.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.email_field23598.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field23598);

/**
 * Creates a file input field.
 */
sablono.core.file_field23602 = (function sablono$core$file_field23602(var_args){
var args23603 = [];
var len__10647__auto___23670 = arguments.length;
var i__10648__auto___23671 = (0);
while(true){
if((i__10648__auto___23671 < len__10647__auto___23670)){
args23603.push((arguments[i__10648__auto___23671]));

var G__23672 = (i__10648__auto___23671 + (1));
i__10648__auto___23671 = G__23672;
continue;
} else {
}
break;
}

var G__23605 = args23603.length;
switch (G__23605) {
case 1:
return sablono.core.file_field23602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23603.length)].join('')));

}
});

sablono.core.file_field23602.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__23468__auto__);
});

sablono.core.file_field23602.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.file_field23602.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field23602);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23606 = (function sablono$core$hidden_field23606(var_args){
var args23607 = [];
var len__10647__auto___23674 = arguments.length;
var i__10648__auto___23675 = (0);
while(true){
if((i__10648__auto___23675 < len__10647__auto___23674)){
args23607.push((arguments[i__10648__auto___23675]));

var G__23676 = (i__10648__auto___23675 + (1));
i__10648__auto___23675 = G__23676;
continue;
} else {
}
break;
}

var G__23609 = args23607.length;
switch (G__23609) {
case 1:
return sablono.core.hidden_field23606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23607.length)].join('')));

}
});

sablono.core.hidden_field23606.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__23468__auto__);
});

sablono.core.hidden_field23606.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.hidden_field23606.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field23606);

/**
 * Creates a month input field.
 */
sablono.core.month_field23610 = (function sablono$core$month_field23610(var_args){
var args23611 = [];
var len__10647__auto___23678 = arguments.length;
var i__10648__auto___23679 = (0);
while(true){
if((i__10648__auto___23679 < len__10647__auto___23678)){
args23611.push((arguments[i__10648__auto___23679]));

var G__23680 = (i__10648__auto___23679 + (1));
i__10648__auto___23679 = G__23680;
continue;
} else {
}
break;
}

var G__23613 = args23611.length;
switch (G__23613) {
case 1:
return sablono.core.month_field23610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23611.length)].join('')));

}
});

sablono.core.month_field23610.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__23468__auto__);
});

sablono.core.month_field23610.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.month_field23610.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field23610);

/**
 * Creates a number input field.
 */
sablono.core.number_field23614 = (function sablono$core$number_field23614(var_args){
var args23615 = [];
var len__10647__auto___23682 = arguments.length;
var i__10648__auto___23683 = (0);
while(true){
if((i__10648__auto___23683 < len__10647__auto___23682)){
args23615.push((arguments[i__10648__auto___23683]));

var G__23684 = (i__10648__auto___23683 + (1));
i__10648__auto___23683 = G__23684;
continue;
} else {
}
break;
}

var G__23617 = args23615.length;
switch (G__23617) {
case 1:
return sablono.core.number_field23614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23615.length)].join('')));

}
});

sablono.core.number_field23614.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__23468__auto__);
});

sablono.core.number_field23614.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.number_field23614.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field23614);

/**
 * Creates a password input field.
 */
sablono.core.password_field23618 = (function sablono$core$password_field23618(var_args){
var args23619 = [];
var len__10647__auto___23686 = arguments.length;
var i__10648__auto___23687 = (0);
while(true){
if((i__10648__auto___23687 < len__10647__auto___23686)){
args23619.push((arguments[i__10648__auto___23687]));

var G__23688 = (i__10648__auto___23687 + (1));
i__10648__auto___23687 = G__23688;
continue;
} else {
}
break;
}

var G__23621 = args23619.length;
switch (G__23621) {
case 1:
return sablono.core.password_field23618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23619.length)].join('')));

}
});

sablono.core.password_field23618.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__23468__auto__);
});

sablono.core.password_field23618.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.password_field23618.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field23618);

/**
 * Creates a range input field.
 */
sablono.core.range_field23622 = (function sablono$core$range_field23622(var_args){
var args23623 = [];
var len__10647__auto___23690 = arguments.length;
var i__10648__auto___23691 = (0);
while(true){
if((i__10648__auto___23691 < len__10647__auto___23690)){
args23623.push((arguments[i__10648__auto___23691]));

var G__23692 = (i__10648__auto___23691 + (1));
i__10648__auto___23691 = G__23692;
continue;
} else {
}
break;
}

var G__23625 = args23623.length;
switch (G__23625) {
case 1:
return sablono.core.range_field23622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23623.length)].join('')));

}
});

sablono.core.range_field23622.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__23468__auto__);
});

sablono.core.range_field23622.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.range_field23622.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field23622);

/**
 * Creates a search input field.
 */
sablono.core.search_field23626 = (function sablono$core$search_field23626(var_args){
var args23627 = [];
var len__10647__auto___23694 = arguments.length;
var i__10648__auto___23695 = (0);
while(true){
if((i__10648__auto___23695 < len__10647__auto___23694)){
args23627.push((arguments[i__10648__auto___23695]));

var G__23696 = (i__10648__auto___23695 + (1));
i__10648__auto___23695 = G__23696;
continue;
} else {
}
break;
}

var G__23629 = args23627.length;
switch (G__23629) {
case 1:
return sablono.core.search_field23626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23627.length)].join('')));

}
});

sablono.core.search_field23626.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__23468__auto__);
});

sablono.core.search_field23626.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.search_field23626.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field23626);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23630 = (function sablono$core$tel_field23630(var_args){
var args23631 = [];
var len__10647__auto___23698 = arguments.length;
var i__10648__auto___23699 = (0);
while(true){
if((i__10648__auto___23699 < len__10647__auto___23698)){
args23631.push((arguments[i__10648__auto___23699]));

var G__23700 = (i__10648__auto___23699 + (1));
i__10648__auto___23699 = G__23700;
continue;
} else {
}
break;
}

var G__23633 = args23631.length;
switch (G__23633) {
case 1:
return sablono.core.tel_field23630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23631.length)].join('')));

}
});

sablono.core.tel_field23630.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__23468__auto__);
});

sablono.core.tel_field23630.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.tel_field23630.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field23630);

/**
 * Creates a text input field.
 */
sablono.core.text_field23634 = (function sablono$core$text_field23634(var_args){
var args23635 = [];
var len__10647__auto___23702 = arguments.length;
var i__10648__auto___23703 = (0);
while(true){
if((i__10648__auto___23703 < len__10647__auto___23702)){
args23635.push((arguments[i__10648__auto___23703]));

var G__23704 = (i__10648__auto___23703 + (1));
i__10648__auto___23703 = G__23704;
continue;
} else {
}
break;
}

var G__23637 = args23635.length;
switch (G__23637) {
case 1:
return sablono.core.text_field23634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23635.length)].join('')));

}
});

sablono.core.text_field23634.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__23468__auto__);
});

sablono.core.text_field23634.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.text_field23634.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field23634);

/**
 * Creates a time input field.
 */
sablono.core.time_field23638 = (function sablono$core$time_field23638(var_args){
var args23639 = [];
var len__10647__auto___23706 = arguments.length;
var i__10648__auto___23707 = (0);
while(true){
if((i__10648__auto___23707 < len__10647__auto___23706)){
args23639.push((arguments[i__10648__auto___23707]));

var G__23708 = (i__10648__auto___23707 + (1));
i__10648__auto___23707 = G__23708;
continue;
} else {
}
break;
}

var G__23641 = args23639.length;
switch (G__23641) {
case 1:
return sablono.core.time_field23638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23639.length)].join('')));

}
});

sablono.core.time_field23638.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__23468__auto__);
});

sablono.core.time_field23638.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.time_field23638.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field23638);

/**
 * Creates a url input field.
 */
sablono.core.url_field23642 = (function sablono$core$url_field23642(var_args){
var args23643 = [];
var len__10647__auto___23710 = arguments.length;
var i__10648__auto___23711 = (0);
while(true){
if((i__10648__auto___23711 < len__10647__auto___23710)){
args23643.push((arguments[i__10648__auto___23711]));

var G__23712 = (i__10648__auto___23711 + (1));
i__10648__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var G__23645 = args23643.length;
switch (G__23645) {
case 1:
return sablono.core.url_field23642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23643.length)].join('')));

}
});

sablono.core.url_field23642.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__23468__auto__);
});

sablono.core.url_field23642.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.url_field23642.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field23642);

/**
 * Creates a week input field.
 */
sablono.core.week_field23646 = (function sablono$core$week_field23646(var_args){
var args23647 = [];
var len__10647__auto___23714 = arguments.length;
var i__10648__auto___23715 = (0);
while(true){
if((i__10648__auto___23715 < len__10647__auto___23714)){
args23647.push((arguments[i__10648__auto___23715]));

var G__23716 = (i__10648__auto___23715 + (1));
i__10648__auto___23715 = G__23716;
continue;
} else {
}
break;
}

var G__23649 = args23647.length;
switch (G__23649) {
case 1:
return sablono.core.week_field23646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23647.length)].join('')));

}
});

sablono.core.week_field23646.cljs$core$IFn$_invoke$arity$1 = (function (name__23468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__23468__auto__);
});

sablono.core.week_field23646.cljs$core$IFn$_invoke$arity$2 = (function (name__23468__auto__,value__23469__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__23468__auto__,value__23469__auto__);
});

sablono.core.week_field23646.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field23646);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23718 = (function sablono$core$check_box23718(var_args){
var args23719 = [];
var len__10647__auto___23722 = arguments.length;
var i__10648__auto___23723 = (0);
while(true){
if((i__10648__auto___23723 < len__10647__auto___23722)){
args23719.push((arguments[i__10648__auto___23723]));

var G__23724 = (i__10648__auto___23723 + (1));
i__10648__auto___23723 = G__23724;
continue;
} else {
}
break;
}

var G__23721 = args23719.length;
switch (G__23721) {
case 1:
return sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23719.length)].join('')));

}
});

sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box23718.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box23718.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box23718);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23726 = (function sablono$core$radio_button23726(var_args){
var args23727 = [];
var len__10647__auto___23730 = arguments.length;
var i__10648__auto___23731 = (0);
while(true){
if((i__10648__auto___23731 < len__10647__auto___23730)){
args23727.push((arguments[i__10648__auto___23731]));

var G__23732 = (i__10648__auto___23731 + (1));
i__10648__auto___23731 = G__23732;
continue;
} else {
}
break;
}

var G__23729 = args23727.length;
switch (G__23729) {
case 1:
return sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23727.length)].join('')));

}
});

sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))], null)], null);
});

sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button23726.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button23726.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button23726);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__23735 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__23735);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23736 = (function sablono$core$select_options23736(coll){
var iter__10288__auto__ = (function sablono$core$select_options23736_$_iter__23755(s__23756){
return (new cljs.core.LazySeq(null,(function (){
var s__23756__$1 = s__23756;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23756__$1);
if(temp__6738__auto__){
var s__23756__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23756__$2)){
var c__10286__auto__ = cljs.core.chunk_first(s__23756__$2);
var size__10287__auto__ = cljs.core.count(c__10286__auto__);
var b__23758 = cljs.core.chunk_buffer(size__10287__auto__);
if((function (){var i__23757 = (0);
while(true){
if((i__23757 < size__10287__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10286__auto__,i__23757);
cljs.core.chunk_append(b__23758,((cljs.core.sequential_QMARK_(x))?(function (){var vec__23767 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23767,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23767,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23767,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options23736.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options23736.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options23736.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__23773 = (i__23757 + (1));
i__23757 = G__23773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23758),sablono$core$select_options23736_$_iter__23755(cljs.core.chunk_rest(s__23756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23758),null);
}
} else {
var x = cljs.core.first(s__23756__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__23770 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23770,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23770,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23770,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options23736.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options23736.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options23736.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options23736_$_iter__23755(cljs.core.rest(s__23756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10288__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options23736);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23774 = (function sablono$core$drop_down23774(var_args){
var args23775 = [];
var len__10647__auto___23778 = arguments.length;
var i__10648__auto___23779 = (0);
while(true){
if((i__10648__auto___23779 < len__10647__auto___23778)){
args23775.push((arguments[i__10648__auto___23779]));

var G__23780 = (i__10648__auto___23779 + (1));
i__10648__auto___23779 = G__23780;
continue;
} else {
}
break;
}

var G__23777 = args23775.length;
switch (G__23777) {
case 2:
return sablono.core.drop_down23774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23774.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23775.length)].join('')));

}
});

sablono.core.drop_down23774.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23774.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down23774.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down23774.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down23774);
/**
 * Creates a text area element.
 */
sablono.core.text_area23782 = (function sablono$core$text_area23782(var_args){
var args23783 = [];
var len__10647__auto___23786 = arguments.length;
var i__10648__auto___23787 = (0);
while(true){
if((i__10648__auto___23787 < len__10647__auto___23786)){
args23783.push((arguments[i__10648__auto___23787]));

var G__23788 = (i__10648__auto___23787 + (1));
i__10648__auto___23787 = G__23788;
continue;
} else {
}
break;
}

var G__23785 = args23783.length;
switch (G__23785) {
case 1:
return sablono.core.text_area23782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23783.length)].join('')));

}
});

sablono.core.text_area23782.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area23782.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__9426__auto__ = value;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23782.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area23782);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23790 = (function sablono$core$label23790(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label23790);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23791 = (function sablono$core$submit_button23791(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button23791);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23792 = (function sablono$core$reset_button23792(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button23792);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23793 = (function sablono$core$form_to23793(var_args){
var args__10654__auto__ = [];
var len__10647__auto___23803 = arguments.length;
var i__10648__auto___23804 = (0);
while(true){
if((i__10648__auto___23804 < len__10647__auto___23803)){
args__10654__auto__.push((arguments[i__10648__auto___23804]));

var G__23805 = (i__10648__auto___23804 + (1));
i__10648__auto___23804 = G__23805;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23793.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

sablono.core.form_to23793.cljs$core$IFn$_invoke$arity$variadic = (function (p__23796,body){
var vec__23797 = p__23796;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23797,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23797,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__23800 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__23801 = "_method";
var G__23802 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__23800,G__23801,G__23802) : sablono.core.hidden_field.call(null,G__23800,G__23801,G__23802));
})()], null)),body));
});

sablono.core.form_to23793.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23793.cljs$lang$applyTo = (function (seq23794){
var G__23795 = cljs.core.first(seq23794);
var seq23794__$1 = cljs.core.next(seq23794);
return sablono.core.form_to23793.cljs$core$IFn$_invoke$arity$variadic(G__23795,seq23794__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to23793);
