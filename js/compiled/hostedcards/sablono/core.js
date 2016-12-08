// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19278__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19275 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__19276 = cljs.core.seq(vec__19275);
var first__19277 = cljs.core.first(seq__19276);
var seq__19276__$1 = cljs.core.next(seq__19276);
var tag = first__19277;
var body = seq__19276__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19279__i = 0, G__19279__a = new Array(arguments.length -  0);
while (G__19279__i < G__19279__a.length) {G__19279__a[G__19279__i] = arguments[G__19279__i + 0]; ++G__19279__i;}
  args = new cljs.core.IndexedSeq(G__19279__a,0);
} 
return G__19278__delegate.call(this,args);};
G__19278.cljs$lang$maxFixedArity = 0;
G__19278.cljs$lang$applyTo = (function (arglist__19280){
var args = cljs.core.seq(arglist__19280);
return G__19278__delegate(args);
});
G__19278.cljs$core$IFn$_invoke$arity$variadic = G__19278__delegate;
return G__19278;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7189__auto__ = (function sablono$core$update_arglists_$_iter__19287(s__19288){
return (new cljs.core.LazySeq(null,(function (){
var s__19288__$1 = s__19288;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19288__$1);
if(temp__4657__auto__){
var s__19288__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19288__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19288__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19290 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19289 = (0);
while(true){
if((i__19289 < size__7188__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19289);
cljs.core.chunk_append(b__19290,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19293 = (i__19289 + (1));
i__19289 = G__19293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19290),sablono$core$update_arglists_$_iter__19287(cljs.core.chunk_rest(s__19288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19290),null);
}
} else {
var args = cljs.core.first(s__19288__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19287(cljs.core.rest(s__19288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19301 = arguments.length;
var i__7485__auto___19302 = (0);
while(true){
if((i__7485__auto___19302 < len__7484__auto___19301)){
args__7491__auto__.push((arguments[i__7485__auto___19302]));

var G__19303 = (i__7485__auto___19302 + (1));
i__7485__auto___19302 = G__19303;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7189__auto__ = (function sablono$core$iter__19295(s__19296){
return (new cljs.core.LazySeq(null,(function (){
var s__19296__$1 = s__19296;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19296__$1);
if(temp__4657__auto__){
var s__19296__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19296__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19296__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19298 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19297 = (0);
while(true){
if((i__19297 < size__7188__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19297);
cljs.core.chunk_append(b__19298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19304 = (i__19297 + (1));
i__19297 = G__19304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19298),sablono$core$iter__19295(cljs.core.chunk_rest(s__19296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19298),null);
}
} else {
var style = cljs.core.first(s__19296__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19295(cljs.core.rest(s__19296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19294){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19294));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19309 = goog.dom.getDocument().body;
var G__19310 = (function (){var G__19311 = "script";
var G__19312 = ({"src": src});
return goog.dom.createDom(G__19311,G__19312);
})();
return goog.dom.appendChild(G__19309,G__19310);
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
sablono.core.link_to19313 = (function sablono$core$link_to19313(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19316 = arguments.length;
var i__7485__auto___19317 = (0);
while(true){
if((i__7485__auto___19317 < len__7484__auto___19316)){
args__7491__auto__.push((arguments[i__7485__auto___19317]));

var G__19318 = (i__7485__auto___19317 + (1));
i__7485__auto___19317 = G__19318;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to19313.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.link_to19313.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19313.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19313.cljs$lang$applyTo = (function (seq19314){
var G__19315 = cljs.core.first(seq19314);
var seq19314__$1 = cljs.core.next(seq19314);
return sablono.core.link_to19313.cljs$core$IFn$_invoke$arity$variadic(G__19315,seq19314__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19313);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19319 = (function sablono$core$mail_to19319(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19326 = arguments.length;
var i__7485__auto___19327 = (0);
while(true){
if((i__7485__auto___19327 < len__7484__auto___19326)){
args__7491__auto__.push((arguments[i__7485__auto___19327]));

var G__19328 = (i__7485__auto___19327 + (1));
i__7485__auto___19327 = G__19328;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to19319.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.mail_to19319.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19322){
var vec__19323 = p__19322;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6409__auto__ = content;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19319.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19319.cljs$lang$applyTo = (function (seq19320){
var G__19321 = cljs.core.first(seq19320);
var seq19320__$1 = cljs.core.next(seq19320);
return sablono.core.mail_to19319.cljs$core$IFn$_invoke$arity$variadic(G__19321,seq19320__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19319);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19329 = (function sablono$core$unordered_list19329(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7189__auto__ = (function sablono$core$unordered_list19329_$_iter__19336(s__19337){
return (new cljs.core.LazySeq(null,(function (){
var s__19337__$1 = s__19337;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19337__$1);
if(temp__4657__auto__){
var s__19337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19337__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19337__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19339 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19338 = (0);
while(true){
if((i__19338 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19338);
cljs.core.chunk_append(b__19339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19342 = (i__19338 + (1));
i__19338 = G__19342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19339),sablono$core$unordered_list19329_$_iter__19336(cljs.core.chunk_rest(s__19337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19339),null);
}
} else {
var x = cljs.core.first(s__19337__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19329_$_iter__19336(cljs.core.rest(s__19337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19329);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19343 = (function sablono$core$ordered_list19343(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7189__auto__ = (function sablono$core$ordered_list19343_$_iter__19350(s__19351){
return (new cljs.core.LazySeq(null,(function (){
var s__19351__$1 = s__19351;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19351__$1);
if(temp__4657__auto__){
var s__19351__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19351__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19351__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19353 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19352 = (0);
while(true){
if((i__19352 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19352);
cljs.core.chunk_append(b__19353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19356 = (i__19352 + (1));
i__19352 = G__19356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19353),sablono$core$ordered_list19343_$_iter__19350(cljs.core.chunk_rest(s__19351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19353),null);
}
} else {
var x = cljs.core.first(s__19351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19343_$_iter__19350(cljs.core.rest(s__19351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19343);
/**
 * Create an image element.
 */
sablono.core.image19357 = (function sablono$core$image19357(var_args){
var args19358 = [];
var len__7484__auto___19361 = arguments.length;
var i__7485__auto___19362 = (0);
while(true){
if((i__7485__auto___19362 < len__7484__auto___19361)){
args19358.push((arguments[i__7485__auto___19362]));

var G__19363 = (i__7485__auto___19362 + (1));
i__7485__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var G__19360 = args19358.length;
switch (G__19360) {
case 1:
return sablono.core.image19357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19358.length)].join('')));

}
});

sablono.core.image19357.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19357.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19357.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19357);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19365_SHARP_,p2__19366_SHARP_){
return [cljs.core.str(p1__19365_SHARP_),cljs.core.str("["),cljs.core.str(p2__19366_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19367_SHARP_,p2__19368_SHARP_){
return [cljs.core.str(p1__19367_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19368_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19369 = (function sablono$core$color_field19369(var_args){
var args19370 = [];
var len__7484__auto___19437 = arguments.length;
var i__7485__auto___19438 = (0);
while(true){
if((i__7485__auto___19438 < len__7484__auto___19437)){
args19370.push((arguments[i__7485__auto___19438]));

var G__19439 = (i__7485__auto___19438 + (1));
i__7485__auto___19438 = G__19439;
continue;
} else {
}
break;
}

var G__19372 = args19370.length;
switch (G__19372) {
case 1:
return sablono.core.color_field19369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19370.length)].join('')));

}
});

sablono.core.color_field19369.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.color_field19369.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.color_field19369.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.color_field19369.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19369);

/**
 * Creates a date input field.
 */
sablono.core.date_field19373 = (function sablono$core$date_field19373(var_args){
var args19374 = [];
var len__7484__auto___19441 = arguments.length;
var i__7485__auto___19442 = (0);
while(true){
if((i__7485__auto___19442 < len__7484__auto___19441)){
args19374.push((arguments[i__7485__auto___19442]));

var G__19443 = (i__7485__auto___19442 + (1));
i__7485__auto___19442 = G__19443;
continue;
} else {
}
break;
}

var G__19376 = args19374.length;
switch (G__19376) {
case 1:
return sablono.core.date_field19373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19374.length)].join('')));

}
});

sablono.core.date_field19373.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.date_field19373.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.date_field19373.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.date_field19373.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19373);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19377 = (function sablono$core$datetime_field19377(var_args){
var args19378 = [];
var len__7484__auto___19445 = arguments.length;
var i__7485__auto___19446 = (0);
while(true){
if((i__7485__auto___19446 < len__7484__auto___19445)){
args19378.push((arguments[i__7485__auto___19446]));

var G__19447 = (i__7485__auto___19446 + (1));
i__7485__auto___19446 = G__19447;
continue;
} else {
}
break;
}

var G__19380 = args19378.length;
switch (G__19380) {
case 1:
return sablono.core.datetime_field19377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19378.length)].join('')));

}
});

sablono.core.datetime_field19377.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.datetime_field19377.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.datetime_field19377.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.datetime_field19377.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19377);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19381 = (function sablono$core$datetime_local_field19381(var_args){
var args19382 = [];
var len__7484__auto___19449 = arguments.length;
var i__7485__auto___19450 = (0);
while(true){
if((i__7485__auto___19450 < len__7484__auto___19449)){
args19382.push((arguments[i__7485__auto___19450]));

var G__19451 = (i__7485__auto___19450 + (1));
i__7485__auto___19450 = G__19451;
continue;
} else {
}
break;
}

var G__19384 = args19382.length;
switch (G__19384) {
case 1:
return sablono.core.datetime_local_field19381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19382.length)].join('')));

}
});

sablono.core.datetime_local_field19381.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.datetime_local_field19381.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.datetime_local_field19381.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.datetime_local_field19381.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19381);

/**
 * Creates a email input field.
 */
sablono.core.email_field19385 = (function sablono$core$email_field19385(var_args){
var args19386 = [];
var len__7484__auto___19453 = arguments.length;
var i__7485__auto___19454 = (0);
while(true){
if((i__7485__auto___19454 < len__7484__auto___19453)){
args19386.push((arguments[i__7485__auto___19454]));

var G__19455 = (i__7485__auto___19454 + (1));
i__7485__auto___19454 = G__19455;
continue;
} else {
}
break;
}

var G__19388 = args19386.length;
switch (G__19388) {
case 1:
return sablono.core.email_field19385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19386.length)].join('')));

}
});

sablono.core.email_field19385.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.email_field19385.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.email_field19385.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.email_field19385.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19385);

/**
 * Creates a file input field.
 */
sablono.core.file_field19389 = (function sablono$core$file_field19389(var_args){
var args19390 = [];
var len__7484__auto___19457 = arguments.length;
var i__7485__auto___19458 = (0);
while(true){
if((i__7485__auto___19458 < len__7484__auto___19457)){
args19390.push((arguments[i__7485__auto___19458]));

var G__19459 = (i__7485__auto___19458 + (1));
i__7485__auto___19458 = G__19459;
continue;
} else {
}
break;
}

var G__19392 = args19390.length;
switch (G__19392) {
case 1:
return sablono.core.file_field19389.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19389.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19390.length)].join('')));

}
});

sablono.core.file_field19389.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.file_field19389.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.file_field19389.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.file_field19389.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19389);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19393 = (function sablono$core$hidden_field19393(var_args){
var args19394 = [];
var len__7484__auto___19461 = arguments.length;
var i__7485__auto___19462 = (0);
while(true){
if((i__7485__auto___19462 < len__7484__auto___19461)){
args19394.push((arguments[i__7485__auto___19462]));

var G__19463 = (i__7485__auto___19462 + (1));
i__7485__auto___19462 = G__19463;
continue;
} else {
}
break;
}

var G__19396 = args19394.length;
switch (G__19396) {
case 1:
return sablono.core.hidden_field19393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19394.length)].join('')));

}
});

sablono.core.hidden_field19393.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.hidden_field19393.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.hidden_field19393.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.hidden_field19393.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19393);

/**
 * Creates a month input field.
 */
sablono.core.month_field19397 = (function sablono$core$month_field19397(var_args){
var args19398 = [];
var len__7484__auto___19465 = arguments.length;
var i__7485__auto___19466 = (0);
while(true){
if((i__7485__auto___19466 < len__7484__auto___19465)){
args19398.push((arguments[i__7485__auto___19466]));

var G__19467 = (i__7485__auto___19466 + (1));
i__7485__auto___19466 = G__19467;
continue;
} else {
}
break;
}

var G__19400 = args19398.length;
switch (G__19400) {
case 1:
return sablono.core.month_field19397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19398.length)].join('')));

}
});

sablono.core.month_field19397.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.month_field19397.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.month_field19397.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.month_field19397.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19397);

/**
 * Creates a number input field.
 */
sablono.core.number_field19401 = (function sablono$core$number_field19401(var_args){
var args19402 = [];
var len__7484__auto___19469 = arguments.length;
var i__7485__auto___19470 = (0);
while(true){
if((i__7485__auto___19470 < len__7484__auto___19469)){
args19402.push((arguments[i__7485__auto___19470]));

var G__19471 = (i__7485__auto___19470 + (1));
i__7485__auto___19470 = G__19471;
continue;
} else {
}
break;
}

var G__19404 = args19402.length;
switch (G__19404) {
case 1:
return sablono.core.number_field19401.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19401.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19402.length)].join('')));

}
});

sablono.core.number_field19401.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.number_field19401.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.number_field19401.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.number_field19401.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19401);

/**
 * Creates a password input field.
 */
sablono.core.password_field19405 = (function sablono$core$password_field19405(var_args){
var args19406 = [];
var len__7484__auto___19473 = arguments.length;
var i__7485__auto___19474 = (0);
while(true){
if((i__7485__auto___19474 < len__7484__auto___19473)){
args19406.push((arguments[i__7485__auto___19474]));

var G__19475 = (i__7485__auto___19474 + (1));
i__7485__auto___19474 = G__19475;
continue;
} else {
}
break;
}

var G__19408 = args19406.length;
switch (G__19408) {
case 1:
return sablono.core.password_field19405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19406.length)].join('')));

}
});

sablono.core.password_field19405.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.password_field19405.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.password_field19405.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.password_field19405.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19405);

/**
 * Creates a range input field.
 */
sablono.core.range_field19409 = (function sablono$core$range_field19409(var_args){
var args19410 = [];
var len__7484__auto___19477 = arguments.length;
var i__7485__auto___19478 = (0);
while(true){
if((i__7485__auto___19478 < len__7484__auto___19477)){
args19410.push((arguments[i__7485__auto___19478]));

var G__19479 = (i__7485__auto___19478 + (1));
i__7485__auto___19478 = G__19479;
continue;
} else {
}
break;
}

var G__19412 = args19410.length;
switch (G__19412) {
case 1:
return sablono.core.range_field19409.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19409.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19410.length)].join('')));

}
});

sablono.core.range_field19409.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.range_field19409.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.range_field19409.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.range_field19409.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19409);

/**
 * Creates a search input field.
 */
sablono.core.search_field19413 = (function sablono$core$search_field19413(var_args){
var args19414 = [];
var len__7484__auto___19481 = arguments.length;
var i__7485__auto___19482 = (0);
while(true){
if((i__7485__auto___19482 < len__7484__auto___19481)){
args19414.push((arguments[i__7485__auto___19482]));

var G__19483 = (i__7485__auto___19482 + (1));
i__7485__auto___19482 = G__19483;
continue;
} else {
}
break;
}

var G__19416 = args19414.length;
switch (G__19416) {
case 1:
return sablono.core.search_field19413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19414.length)].join('')));

}
});

sablono.core.search_field19413.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.search_field19413.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.search_field19413.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.search_field19413.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19413);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19417 = (function sablono$core$tel_field19417(var_args){
var args19418 = [];
var len__7484__auto___19485 = arguments.length;
var i__7485__auto___19486 = (0);
while(true){
if((i__7485__auto___19486 < len__7484__auto___19485)){
args19418.push((arguments[i__7485__auto___19486]));

var G__19487 = (i__7485__auto___19486 + (1));
i__7485__auto___19486 = G__19487;
continue;
} else {
}
break;
}

var G__19420 = args19418.length;
switch (G__19420) {
case 1:
return sablono.core.tel_field19417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19418.length)].join('')));

}
});

sablono.core.tel_field19417.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.tel_field19417.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.tel_field19417.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.tel_field19417.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19417);

/**
 * Creates a text input field.
 */
sablono.core.text_field19421 = (function sablono$core$text_field19421(var_args){
var args19422 = [];
var len__7484__auto___19489 = arguments.length;
var i__7485__auto___19490 = (0);
while(true){
if((i__7485__auto___19490 < len__7484__auto___19489)){
args19422.push((arguments[i__7485__auto___19490]));

var G__19491 = (i__7485__auto___19490 + (1));
i__7485__auto___19490 = G__19491;
continue;
} else {
}
break;
}

var G__19424 = args19422.length;
switch (G__19424) {
case 1:
return sablono.core.text_field19421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19422.length)].join('')));

}
});

sablono.core.text_field19421.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.text_field19421.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.text_field19421.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.text_field19421.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19421);

/**
 * Creates a time input field.
 */
sablono.core.time_field19425 = (function sablono$core$time_field19425(var_args){
var args19426 = [];
var len__7484__auto___19493 = arguments.length;
var i__7485__auto___19494 = (0);
while(true){
if((i__7485__auto___19494 < len__7484__auto___19493)){
args19426.push((arguments[i__7485__auto___19494]));

var G__19495 = (i__7485__auto___19494 + (1));
i__7485__auto___19494 = G__19495;
continue;
} else {
}
break;
}

var G__19428 = args19426.length;
switch (G__19428) {
case 1:
return sablono.core.time_field19425.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19425.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19426.length)].join('')));

}
});

sablono.core.time_field19425.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.time_field19425.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.time_field19425.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.time_field19425.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19425);

/**
 * Creates a url input field.
 */
sablono.core.url_field19429 = (function sablono$core$url_field19429(var_args){
var args19430 = [];
var len__7484__auto___19497 = arguments.length;
var i__7485__auto___19498 = (0);
while(true){
if((i__7485__auto___19498 < len__7484__auto___19497)){
args19430.push((arguments[i__7485__auto___19498]));

var G__19499 = (i__7485__auto___19498 + (1));
i__7485__auto___19498 = G__19499;
continue;
} else {
}
break;
}

var G__19432 = args19430.length;
switch (G__19432) {
case 1:
return sablono.core.url_field19429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19430.length)].join('')));

}
});

sablono.core.url_field19429.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.url_field19429.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.url_field19429.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.url_field19429.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19429);

/**
 * Creates a week input field.
 */
sablono.core.week_field19433 = (function sablono$core$week_field19433(var_args){
var args19434 = [];
var len__7484__auto___19501 = arguments.length;
var i__7485__auto___19502 = (0);
while(true){
if((i__7485__auto___19502 < len__7484__auto___19501)){
args19434.push((arguments[i__7485__auto___19502]));

var G__19503 = (i__7485__auto___19502 + (1));
i__7485__auto___19502 = G__19503;
continue;
} else {
}
break;
}

var G__19436 = args19434.length;
switch (G__19436) {
case 1:
return sablono.core.week_field19433.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19433.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19434.length)].join('')));

}
});

sablono.core.week_field19433.cljs$core$IFn$_invoke$arity$1 = (function (name__19262__auto__){
return sablono.core.week_field19433.cljs$core$IFn$_invoke$arity$2(name__19262__auto__,null);
});

sablono.core.week_field19433.cljs$core$IFn$_invoke$arity$2 = (function (name__19262__auto__,value__19263__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19262__auto__,value__19263__auto__);
});

sablono.core.week_field19433.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19433);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19505 = (function sablono$core$check_box19505(var_args){
var args19506 = [];
var len__7484__auto___19509 = arguments.length;
var i__7485__auto___19510 = (0);
while(true){
if((i__7485__auto___19510 < len__7484__auto___19509)){
args19506.push((arguments[i__7485__auto___19510]));

var G__19511 = (i__7485__auto___19510 + (1));
i__7485__auto___19510 = G__19511;
continue;
} else {
}
break;
}

var G__19508 = args19506.length;
switch (G__19508) {
case 1:
return sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19506.length)].join('')));

}
});

sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19505.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19505.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19505);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19513 = (function sablono$core$radio_button19513(var_args){
var args19514 = [];
var len__7484__auto___19517 = arguments.length;
var i__7485__auto___19518 = (0);
while(true){
if((i__7485__auto___19518 < len__7484__auto___19517)){
args19514.push((arguments[i__7485__auto___19518]));

var G__19519 = (i__7485__auto___19518 + (1));
i__7485__auto___19518 = G__19519;
continue;
} else {
}
break;
}

var G__19516 = args19514.length;
switch (G__19516) {
case 1:
return sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19514.length)].join('')));

}
});

sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19513.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19513.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19513);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19522 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19522);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19523 = (function sablono$core$select_options19523(coll){
var iter__7189__auto__ = (function sablono$core$select_options19523_$_iter__19542(s__19543){
return (new cljs.core.LazySeq(null,(function (){
var s__19543__$1 = s__19543;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19543__$1);
if(temp__4657__auto__){
var s__19543__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19543__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19543__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19545 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19544 = (0);
while(true){
if((i__19544 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19544);
cljs.core.chunk_append(b__19545,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19554 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19523(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19560 = (i__19544 + (1));
i__19544 = G__19560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19545),sablono$core$select_options19523_$_iter__19542(cljs.core.chunk_rest(s__19543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19545),null);
}
} else {
var x = cljs.core.first(s__19543__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19557 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19557,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19557,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19557,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19523(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19523_$_iter__19542(cljs.core.rest(s__19543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19523);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19561 = (function sablono$core$drop_down19561(var_args){
var args19562 = [];
var len__7484__auto___19565 = arguments.length;
var i__7485__auto___19566 = (0);
while(true){
if((i__7485__auto___19566 < len__7484__auto___19565)){
args19562.push((arguments[i__7485__auto___19566]));

var G__19567 = (i__7485__auto___19566 + (1));
i__7485__auto___19566 = G__19567;
continue;
} else {
}
break;
}

var G__19564 = args19562.length;
switch (G__19564) {
case 2:
return sablono.core.drop_down19561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19561.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19562.length)].join('')));

}
});

sablono.core.drop_down19561.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19561.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19561.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19561.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19561);
/**
 * Creates a text area element.
 */
sablono.core.text_area19569 = (function sablono$core$text_area19569(var_args){
var args19570 = [];
var len__7484__auto___19573 = arguments.length;
var i__7485__auto___19574 = (0);
while(true){
if((i__7485__auto___19574 < len__7484__auto___19573)){
args19570.push((arguments[i__7485__auto___19574]));

var G__19575 = (i__7485__auto___19574 + (1));
i__7485__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 1:
return sablono.core.text_area19569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

sablono.core.text_area19569.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19569.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19569.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area19569.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19569);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19577 = (function sablono$core$label19577(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19577);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19578 = (function sablono$core$submit_button19578(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19578);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19579 = (function sablono$core$reset_button19579(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19579);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19580 = (function sablono$core$form_to19580(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19590 = arguments.length;
var i__7485__auto___19591 = (0);
while(true){
if((i__7485__auto___19591 < len__7484__auto___19590)){
args__7491__auto__.push((arguments[i__7485__auto___19591]));

var G__19592 = (i__7485__auto___19591 + (1));
i__7485__auto___19591 = G__19592;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to19580.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.form_to19580.cljs$core$IFn$_invoke$arity$variadic = (function (p__19583,body){
var vec__19584 = p__19583;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19587 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19588 = "_method";
var G__19589 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19587,G__19588,G__19589) : sablono.core.hidden_field.call(null,G__19587,G__19588,G__19589));
})()], null)),body));
});

sablono.core.form_to19580.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19580.cljs$lang$applyTo = (function (seq19581){
var G__19582 = cljs.core.first(seq19581);
var seq19581__$1 = cljs.core.next(seq19581);
return sablono.core.form_to19580.cljs$core$IFn$_invoke$arity$variadic(G__19582,seq19581__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19580);
