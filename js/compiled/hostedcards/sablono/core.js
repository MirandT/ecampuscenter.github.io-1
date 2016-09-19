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
var G__19137__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__19135 = cljs.core.seq(vec__19134);
var first__19136 = cljs.core.first(seq__19135);
var seq__19135__$1 = cljs.core.next(seq__19135);
var tag = first__19136;
var body = seq__19135__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19138__i = 0, G__19138__a = new Array(arguments.length -  0);
while (G__19138__i < G__19138__a.length) {G__19138__a[G__19138__i] = arguments[G__19138__i + 0]; ++G__19138__i;}
  args = new cljs.core.IndexedSeq(G__19138__a,0);
} 
return G__19137__delegate.call(this,args);};
G__19137.cljs$lang$maxFixedArity = 0;
G__19137.cljs$lang$applyTo = (function (arglist__19139){
var args = cljs.core.seq(arglist__19139);
return G__19137__delegate(args);
});
G__19137.cljs$core$IFn$_invoke$arity$variadic = G__19137__delegate;
return G__19137;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7186__auto__ = (function sablono$core$update_arglists_$_iter__19146(s__19147){
return (new cljs.core.LazySeq(null,(function (){
var s__19147__$1 = s__19147;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19147__$1);
if(temp__4657__auto__){
var s__19147__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19147__$2)){
var c__7184__auto__ = cljs.core.chunk_first(s__19147__$2);
var size__7185__auto__ = cljs.core.count(c__7184__auto__);
var b__19149 = cljs.core.chunk_buffer(size__7185__auto__);
if((function (){var i__19148 = (0);
while(true){
if((i__19148 < size__7185__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7184__auto__,i__19148);
cljs.core.chunk_append(b__19149,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19152 = (i__19148 + (1));
i__19148 = G__19152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19149),sablono$core$update_arglists_$_iter__19146(cljs.core.chunk_rest(s__19147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19149),null);
}
} else {
var args = cljs.core.first(s__19147__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19146(cljs.core.rest(s__19147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7186__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7488__auto__ = [];
var len__7481__auto___19160 = arguments.length;
var i__7482__auto___19161 = (0);
while(true){
if((i__7482__auto___19161 < len__7481__auto___19160)){
args__7488__auto__.push((arguments[i__7482__auto___19161]));

var G__19162 = (i__7482__auto___19161 + (1));
i__7482__auto___19161 = G__19162;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((0) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7489__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7186__auto__ = (function sablono$core$iter__19154(s__19155){
return (new cljs.core.LazySeq(null,(function (){
var s__19155__$1 = s__19155;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19155__$1);
if(temp__4657__auto__){
var s__19155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19155__$2)){
var c__7184__auto__ = cljs.core.chunk_first(s__19155__$2);
var size__7185__auto__ = cljs.core.count(c__7184__auto__);
var b__19157 = cljs.core.chunk_buffer(size__7185__auto__);
if((function (){var i__19156 = (0);
while(true){
if((i__19156 < size__7185__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7184__auto__,i__19156);
cljs.core.chunk_append(b__19157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19163 = (i__19156 + (1));
i__19156 = G__19163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19157),sablono$core$iter__19154(cljs.core.chunk_rest(s__19155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19157),null);
}
} else {
var style = cljs.core.first(s__19155__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19154(cljs.core.rest(s__19155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7186__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19153){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19153));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19168 = goog.dom.getDocument().body;
var G__19169 = (function (){var G__19170 = "script";
var G__19171 = ({"src": src});
return goog.dom.createDom(G__19170,G__19171);
})();
return goog.dom.appendChild(G__19168,G__19169);
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
sablono.core.link_to19172 = (function sablono$core$link_to19172(var_args){
var args__7488__auto__ = [];
var len__7481__auto___19175 = arguments.length;
var i__7482__auto___19176 = (0);
while(true){
if((i__7482__auto___19176 < len__7481__auto___19175)){
args__7488__auto__.push((arguments[i__7482__auto___19176]));

var G__19177 = (i__7482__auto___19176 + (1));
i__7482__auto___19176 = G__19177;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((1) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to19172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7489__auto__);
});

sablono.core.link_to19172.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19172.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19172.cljs$lang$applyTo = (function (seq19173){
var G__19174 = cljs.core.first(seq19173);
var seq19173__$1 = cljs.core.next(seq19173);
return sablono.core.link_to19172.cljs$core$IFn$_invoke$arity$variadic(G__19174,seq19173__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19172);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19178 = (function sablono$core$mail_to19178(var_args){
var args__7488__auto__ = [];
var len__7481__auto___19185 = arguments.length;
var i__7482__auto___19186 = (0);
while(true){
if((i__7482__auto___19186 < len__7481__auto___19185)){
args__7488__auto__.push((arguments[i__7482__auto___19186]));

var G__19187 = (i__7482__auto___19186 + (1));
i__7482__auto___19186 = G__19187;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((1) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to19178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7489__auto__);
});

sablono.core.mail_to19178.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19181){
var vec__19182 = p__19181;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19182,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6406__auto__ = content;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19178.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19178.cljs$lang$applyTo = (function (seq19179){
var G__19180 = cljs.core.first(seq19179);
var seq19179__$1 = cljs.core.next(seq19179);
return sablono.core.mail_to19178.cljs$core$IFn$_invoke$arity$variadic(G__19180,seq19179__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19178);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19188 = (function sablono$core$unordered_list19188(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7186__auto__ = (function sablono$core$unordered_list19188_$_iter__19195(s__19196){
return (new cljs.core.LazySeq(null,(function (){
var s__19196__$1 = s__19196;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19196__$1);
if(temp__4657__auto__){
var s__19196__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19196__$2)){
var c__7184__auto__ = cljs.core.chunk_first(s__19196__$2);
var size__7185__auto__ = cljs.core.count(c__7184__auto__);
var b__19198 = cljs.core.chunk_buffer(size__7185__auto__);
if((function (){var i__19197 = (0);
while(true){
if((i__19197 < size__7185__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7184__auto__,i__19197);
cljs.core.chunk_append(b__19198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19201 = (i__19197 + (1));
i__19197 = G__19201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19198),sablono$core$unordered_list19188_$_iter__19195(cljs.core.chunk_rest(s__19196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19198),null);
}
} else {
var x = cljs.core.first(s__19196__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19188_$_iter__19195(cljs.core.rest(s__19196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7186__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19188);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19202 = (function sablono$core$ordered_list19202(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7186__auto__ = (function sablono$core$ordered_list19202_$_iter__19209(s__19210){
return (new cljs.core.LazySeq(null,(function (){
var s__19210__$1 = s__19210;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19210__$1);
if(temp__4657__auto__){
var s__19210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19210__$2)){
var c__7184__auto__ = cljs.core.chunk_first(s__19210__$2);
var size__7185__auto__ = cljs.core.count(c__7184__auto__);
var b__19212 = cljs.core.chunk_buffer(size__7185__auto__);
if((function (){var i__19211 = (0);
while(true){
if((i__19211 < size__7185__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7184__auto__,i__19211);
cljs.core.chunk_append(b__19212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19215 = (i__19211 + (1));
i__19211 = G__19215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19212),sablono$core$ordered_list19202_$_iter__19209(cljs.core.chunk_rest(s__19210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19212),null);
}
} else {
var x = cljs.core.first(s__19210__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19202_$_iter__19209(cljs.core.rest(s__19210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7186__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19202);
/**
 * Create an image element.
 */
sablono.core.image19216 = (function sablono$core$image19216(var_args){
var args19217 = [];
var len__7481__auto___19220 = arguments.length;
var i__7482__auto___19221 = (0);
while(true){
if((i__7482__auto___19221 < len__7481__auto___19220)){
args19217.push((arguments[i__7482__auto___19221]));

var G__19222 = (i__7482__auto___19221 + (1));
i__7482__auto___19221 = G__19222;
continue;
} else {
}
break;
}

var G__19219 = args19217.length;
switch (G__19219) {
case 1:
return sablono.core.image19216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19217.length)].join('')));

}
});

sablono.core.image19216.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19216.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19216.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19216);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19224_SHARP_,p2__19225_SHARP_){
return [cljs.core.str(p1__19224_SHARP_),cljs.core.str("["),cljs.core.str(p2__19225_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19226_SHARP_,p2__19227_SHARP_){
return [cljs.core.str(p1__19226_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19227_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6406__auto__ = value;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19228 = (function sablono$core$color_field19228(var_args){
var args19229 = [];
var len__7481__auto___19296 = arguments.length;
var i__7482__auto___19297 = (0);
while(true){
if((i__7482__auto___19297 < len__7481__auto___19296)){
args19229.push((arguments[i__7482__auto___19297]));

var G__19298 = (i__7482__auto___19297 + (1));
i__7482__auto___19297 = G__19298;
continue;
} else {
}
break;
}

var G__19231 = args19229.length;
switch (G__19231) {
case 1:
return sablono.core.color_field19228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19229.length)].join('')));

}
});

sablono.core.color_field19228.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.color_field19228.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.color_field19228.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.color_field19228.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19228);

/**
 * Creates a date input field.
 */
sablono.core.date_field19232 = (function sablono$core$date_field19232(var_args){
var args19233 = [];
var len__7481__auto___19300 = arguments.length;
var i__7482__auto___19301 = (0);
while(true){
if((i__7482__auto___19301 < len__7481__auto___19300)){
args19233.push((arguments[i__7482__auto___19301]));

var G__19302 = (i__7482__auto___19301 + (1));
i__7482__auto___19301 = G__19302;
continue;
} else {
}
break;
}

var G__19235 = args19233.length;
switch (G__19235) {
case 1:
return sablono.core.date_field19232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19233.length)].join('')));

}
});

sablono.core.date_field19232.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.date_field19232.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.date_field19232.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.date_field19232.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19232);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19236 = (function sablono$core$datetime_field19236(var_args){
var args19237 = [];
var len__7481__auto___19304 = arguments.length;
var i__7482__auto___19305 = (0);
while(true){
if((i__7482__auto___19305 < len__7481__auto___19304)){
args19237.push((arguments[i__7482__auto___19305]));

var G__19306 = (i__7482__auto___19305 + (1));
i__7482__auto___19305 = G__19306;
continue;
} else {
}
break;
}

var G__19239 = args19237.length;
switch (G__19239) {
case 1:
return sablono.core.datetime_field19236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19237.length)].join('')));

}
});

sablono.core.datetime_field19236.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.datetime_field19236.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.datetime_field19236.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.datetime_field19236.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19236);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19240 = (function sablono$core$datetime_local_field19240(var_args){
var args19241 = [];
var len__7481__auto___19308 = arguments.length;
var i__7482__auto___19309 = (0);
while(true){
if((i__7482__auto___19309 < len__7481__auto___19308)){
args19241.push((arguments[i__7482__auto___19309]));

var G__19310 = (i__7482__auto___19309 + (1));
i__7482__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var G__19243 = args19241.length;
switch (G__19243) {
case 1:
return sablono.core.datetime_local_field19240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19241.length)].join('')));

}
});

sablono.core.datetime_local_field19240.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.datetime_local_field19240.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.datetime_local_field19240.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.datetime_local_field19240.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19240);

/**
 * Creates a email input field.
 */
sablono.core.email_field19244 = (function sablono$core$email_field19244(var_args){
var args19245 = [];
var len__7481__auto___19312 = arguments.length;
var i__7482__auto___19313 = (0);
while(true){
if((i__7482__auto___19313 < len__7481__auto___19312)){
args19245.push((arguments[i__7482__auto___19313]));

var G__19314 = (i__7482__auto___19313 + (1));
i__7482__auto___19313 = G__19314;
continue;
} else {
}
break;
}

var G__19247 = args19245.length;
switch (G__19247) {
case 1:
return sablono.core.email_field19244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19245.length)].join('')));

}
});

sablono.core.email_field19244.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.email_field19244.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.email_field19244.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.email_field19244.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19244);

/**
 * Creates a file input field.
 */
sablono.core.file_field19248 = (function sablono$core$file_field19248(var_args){
var args19249 = [];
var len__7481__auto___19316 = arguments.length;
var i__7482__auto___19317 = (0);
while(true){
if((i__7482__auto___19317 < len__7481__auto___19316)){
args19249.push((arguments[i__7482__auto___19317]));

var G__19318 = (i__7482__auto___19317 + (1));
i__7482__auto___19317 = G__19318;
continue;
} else {
}
break;
}

var G__19251 = args19249.length;
switch (G__19251) {
case 1:
return sablono.core.file_field19248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19249.length)].join('')));

}
});

sablono.core.file_field19248.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.file_field19248.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.file_field19248.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.file_field19248.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19248);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19252 = (function sablono$core$hidden_field19252(var_args){
var args19253 = [];
var len__7481__auto___19320 = arguments.length;
var i__7482__auto___19321 = (0);
while(true){
if((i__7482__auto___19321 < len__7481__auto___19320)){
args19253.push((arguments[i__7482__auto___19321]));

var G__19322 = (i__7482__auto___19321 + (1));
i__7482__auto___19321 = G__19322;
continue;
} else {
}
break;
}

var G__19255 = args19253.length;
switch (G__19255) {
case 1:
return sablono.core.hidden_field19252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19253.length)].join('')));

}
});

sablono.core.hidden_field19252.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.hidden_field19252.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.hidden_field19252.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.hidden_field19252.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19252);

/**
 * Creates a month input field.
 */
sablono.core.month_field19256 = (function sablono$core$month_field19256(var_args){
var args19257 = [];
var len__7481__auto___19324 = arguments.length;
var i__7482__auto___19325 = (0);
while(true){
if((i__7482__auto___19325 < len__7481__auto___19324)){
args19257.push((arguments[i__7482__auto___19325]));

var G__19326 = (i__7482__auto___19325 + (1));
i__7482__auto___19325 = G__19326;
continue;
} else {
}
break;
}

var G__19259 = args19257.length;
switch (G__19259) {
case 1:
return sablono.core.month_field19256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19257.length)].join('')));

}
});

sablono.core.month_field19256.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.month_field19256.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.month_field19256.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.month_field19256.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19256);

/**
 * Creates a number input field.
 */
sablono.core.number_field19260 = (function sablono$core$number_field19260(var_args){
var args19261 = [];
var len__7481__auto___19328 = arguments.length;
var i__7482__auto___19329 = (0);
while(true){
if((i__7482__auto___19329 < len__7481__auto___19328)){
args19261.push((arguments[i__7482__auto___19329]));

var G__19330 = (i__7482__auto___19329 + (1));
i__7482__auto___19329 = G__19330;
continue;
} else {
}
break;
}

var G__19263 = args19261.length;
switch (G__19263) {
case 1:
return sablono.core.number_field19260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19261.length)].join('')));

}
});

sablono.core.number_field19260.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.number_field19260.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.number_field19260.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.number_field19260.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19260);

/**
 * Creates a password input field.
 */
sablono.core.password_field19264 = (function sablono$core$password_field19264(var_args){
var args19265 = [];
var len__7481__auto___19332 = arguments.length;
var i__7482__auto___19333 = (0);
while(true){
if((i__7482__auto___19333 < len__7481__auto___19332)){
args19265.push((arguments[i__7482__auto___19333]));

var G__19334 = (i__7482__auto___19333 + (1));
i__7482__auto___19333 = G__19334;
continue;
} else {
}
break;
}

var G__19267 = args19265.length;
switch (G__19267) {
case 1:
return sablono.core.password_field19264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19265.length)].join('')));

}
});

sablono.core.password_field19264.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.password_field19264.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.password_field19264.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.password_field19264.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19264);

/**
 * Creates a range input field.
 */
sablono.core.range_field19268 = (function sablono$core$range_field19268(var_args){
var args19269 = [];
var len__7481__auto___19336 = arguments.length;
var i__7482__auto___19337 = (0);
while(true){
if((i__7482__auto___19337 < len__7481__auto___19336)){
args19269.push((arguments[i__7482__auto___19337]));

var G__19338 = (i__7482__auto___19337 + (1));
i__7482__auto___19337 = G__19338;
continue;
} else {
}
break;
}

var G__19271 = args19269.length;
switch (G__19271) {
case 1:
return sablono.core.range_field19268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19269.length)].join('')));

}
});

sablono.core.range_field19268.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.range_field19268.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.range_field19268.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.range_field19268.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19268);

/**
 * Creates a search input field.
 */
sablono.core.search_field19272 = (function sablono$core$search_field19272(var_args){
var args19273 = [];
var len__7481__auto___19340 = arguments.length;
var i__7482__auto___19341 = (0);
while(true){
if((i__7482__auto___19341 < len__7481__auto___19340)){
args19273.push((arguments[i__7482__auto___19341]));

var G__19342 = (i__7482__auto___19341 + (1));
i__7482__auto___19341 = G__19342;
continue;
} else {
}
break;
}

var G__19275 = args19273.length;
switch (G__19275) {
case 1:
return sablono.core.search_field19272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19273.length)].join('')));

}
});

sablono.core.search_field19272.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.search_field19272.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.search_field19272.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.search_field19272.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19272);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19276 = (function sablono$core$tel_field19276(var_args){
var args19277 = [];
var len__7481__auto___19344 = arguments.length;
var i__7482__auto___19345 = (0);
while(true){
if((i__7482__auto___19345 < len__7481__auto___19344)){
args19277.push((arguments[i__7482__auto___19345]));

var G__19346 = (i__7482__auto___19345 + (1));
i__7482__auto___19345 = G__19346;
continue;
} else {
}
break;
}

var G__19279 = args19277.length;
switch (G__19279) {
case 1:
return sablono.core.tel_field19276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19277.length)].join('')));

}
});

sablono.core.tel_field19276.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.tel_field19276.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.tel_field19276.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.tel_field19276.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19276);

/**
 * Creates a text input field.
 */
sablono.core.text_field19280 = (function sablono$core$text_field19280(var_args){
var args19281 = [];
var len__7481__auto___19348 = arguments.length;
var i__7482__auto___19349 = (0);
while(true){
if((i__7482__auto___19349 < len__7481__auto___19348)){
args19281.push((arguments[i__7482__auto___19349]));

var G__19350 = (i__7482__auto___19349 + (1));
i__7482__auto___19349 = G__19350;
continue;
} else {
}
break;
}

var G__19283 = args19281.length;
switch (G__19283) {
case 1:
return sablono.core.text_field19280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19281.length)].join('')));

}
});

sablono.core.text_field19280.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.text_field19280.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.text_field19280.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.text_field19280.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19280);

/**
 * Creates a time input field.
 */
sablono.core.time_field19284 = (function sablono$core$time_field19284(var_args){
var args19285 = [];
var len__7481__auto___19352 = arguments.length;
var i__7482__auto___19353 = (0);
while(true){
if((i__7482__auto___19353 < len__7481__auto___19352)){
args19285.push((arguments[i__7482__auto___19353]));

var G__19354 = (i__7482__auto___19353 + (1));
i__7482__auto___19353 = G__19354;
continue;
} else {
}
break;
}

var G__19287 = args19285.length;
switch (G__19287) {
case 1:
return sablono.core.time_field19284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19285.length)].join('')));

}
});

sablono.core.time_field19284.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.time_field19284.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.time_field19284.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.time_field19284.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19284);

/**
 * Creates a url input field.
 */
sablono.core.url_field19288 = (function sablono$core$url_field19288(var_args){
var args19289 = [];
var len__7481__auto___19356 = arguments.length;
var i__7482__auto___19357 = (0);
while(true){
if((i__7482__auto___19357 < len__7481__auto___19356)){
args19289.push((arguments[i__7482__auto___19357]));

var G__19358 = (i__7482__auto___19357 + (1));
i__7482__auto___19357 = G__19358;
continue;
} else {
}
break;
}

var G__19291 = args19289.length;
switch (G__19291) {
case 1:
return sablono.core.url_field19288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19289.length)].join('')));

}
});

sablono.core.url_field19288.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.url_field19288.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.url_field19288.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.url_field19288.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19288);

/**
 * Creates a week input field.
 */
sablono.core.week_field19292 = (function sablono$core$week_field19292(var_args){
var args19293 = [];
var len__7481__auto___19360 = arguments.length;
var i__7482__auto___19361 = (0);
while(true){
if((i__7482__auto___19361 < len__7481__auto___19360)){
args19293.push((arguments[i__7482__auto___19361]));

var G__19362 = (i__7482__auto___19361 + (1));
i__7482__auto___19361 = G__19362;
continue;
} else {
}
break;
}

var G__19295 = args19293.length;
switch (G__19295) {
case 1:
return sablono.core.week_field19292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19293.length)].join('')));

}
});

sablono.core.week_field19292.cljs$core$IFn$_invoke$arity$1 = (function (name__19121__auto__){
return sablono.core.week_field19292.cljs$core$IFn$_invoke$arity$2(name__19121__auto__,null);
});

sablono.core.week_field19292.cljs$core$IFn$_invoke$arity$2 = (function (name__19121__auto__,value__19122__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19121__auto__,value__19122__auto__);
});

sablono.core.week_field19292.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19292);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19364 = (function sablono$core$check_box19364(var_args){
var args19365 = [];
var len__7481__auto___19368 = arguments.length;
var i__7482__auto___19369 = (0);
while(true){
if((i__7482__auto___19369 < len__7481__auto___19368)){
args19365.push((arguments[i__7482__auto___19369]));

var G__19370 = (i__7482__auto___19369 + (1));
i__7482__auto___19369 = G__19370;
continue;
} else {
}
break;
}

var G__19367 = args19365.length;
switch (G__19367) {
case 1:
return sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19365.length)].join('')));

}
});

sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19364.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6406__auto__ = value;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19364.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19364);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19372 = (function sablono$core$radio_button19372(var_args){
var args19373 = [];
var len__7481__auto___19376 = arguments.length;
var i__7482__auto___19377 = (0);
while(true){
if((i__7482__auto___19377 < len__7481__auto___19376)){
args19373.push((arguments[i__7482__auto___19377]));

var G__19378 = (i__7482__auto___19377 + (1));
i__7482__auto___19377 = G__19378;
continue;
} else {
}
break;
}

var G__19375 = args19373.length;
switch (G__19375) {
case 1:
return sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19373.length)].join('')));

}
});

sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19372.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6406__auto__ = value;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19372.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19372);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19381 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19381);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19382 = (function sablono$core$select_options19382(coll){
var iter__7186__auto__ = (function sablono$core$select_options19382_$_iter__19401(s__19402){
return (new cljs.core.LazySeq(null,(function (){
var s__19402__$1 = s__19402;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19402__$1);
if(temp__4657__auto__){
var s__19402__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19402__$2)){
var c__7184__auto__ = cljs.core.chunk_first(s__19402__$2);
var size__7185__auto__ = cljs.core.count(c__7184__auto__);
var b__19404 = cljs.core.chunk_buffer(size__7185__auto__);
if((function (){var i__19403 = (0);
while(true){
if((i__19403 < size__7185__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7184__auto__,i__19403);
cljs.core.chunk_append(b__19404,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19413 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19413,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19413,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19413,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19382(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19419 = (i__19403 + (1));
i__19403 = G__19419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19404),sablono$core$select_options19382_$_iter__19401(cljs.core.chunk_rest(s__19402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19404),null);
}
} else {
var x = cljs.core.first(s__19402__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19416 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19382(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19382_$_iter__19401(cljs.core.rest(s__19402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7186__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19382);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19420 = (function sablono$core$drop_down19420(var_args){
var args19421 = [];
var len__7481__auto___19424 = arguments.length;
var i__7482__auto___19425 = (0);
while(true){
if((i__7482__auto___19425 < len__7481__auto___19424)){
args19421.push((arguments[i__7482__auto___19425]));

var G__19426 = (i__7482__auto___19425 + (1));
i__7482__auto___19425 = G__19426;
continue;
} else {
}
break;
}

var G__19423 = args19421.length;
switch (G__19423) {
case 2:
return sablono.core.drop_down19420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19420.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19421.length)].join('')));

}
});

sablono.core.drop_down19420.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19420.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19420.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19420.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19420);
/**
 * Creates a text area element.
 */
sablono.core.text_area19428 = (function sablono$core$text_area19428(var_args){
var args19429 = [];
var len__7481__auto___19432 = arguments.length;
var i__7482__auto___19433 = (0);
while(true){
if((i__7482__auto___19433 < len__7481__auto___19432)){
args19429.push((arguments[i__7482__auto___19433]));

var G__19434 = (i__7482__auto___19433 + (1));
i__7482__auto___19433 = G__19434;
continue;
} else {
}
break;
}

var G__19431 = args19429.length;
switch (G__19431) {
case 1:
return sablono.core.text_area19428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19429.length)].join('')));

}
});

sablono.core.text_area19428.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19428.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19428.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6406__auto__ = value;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area19428.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19428);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19436 = (function sablono$core$label19436(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19436);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19437 = (function sablono$core$submit_button19437(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19437);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19438 = (function sablono$core$reset_button19438(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19438);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19439 = (function sablono$core$form_to19439(var_args){
var args__7488__auto__ = [];
var len__7481__auto___19449 = arguments.length;
var i__7482__auto___19450 = (0);
while(true){
if((i__7482__auto___19450 < len__7481__auto___19449)){
args__7488__auto__.push((arguments[i__7482__auto___19450]));

var G__19451 = (i__7482__auto___19450 + (1));
i__7482__auto___19450 = G__19451;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((1) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to19439.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7489__auto__);
});

sablono.core.form_to19439.cljs$core$IFn$_invoke$arity$variadic = (function (p__19442,body){
var vec__19443 = p__19442;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19446 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19447 = "_method";
var G__19448 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19446,G__19447,G__19448) : sablono.core.hidden_field.call(null,G__19446,G__19447,G__19448));
})()], null)),body));
});

sablono.core.form_to19439.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19439.cljs$lang$applyTo = (function (seq19440){
var G__19441 = cljs.core.first(seq19440);
var seq19440__$1 = cljs.core.next(seq19440);
return sablono.core.form_to19439.cljs$core$IFn$_invoke$arity$variadic(G__19441,seq19440__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19439);
