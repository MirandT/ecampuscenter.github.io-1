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
var G__19140__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__19138 = cljs.core.seq(vec__19137);
var first__19139 = cljs.core.first(seq__19138);
var seq__19138__$1 = cljs.core.next(seq__19138);
var tag = first__19139;
var body = seq__19138__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19141__i = 0, G__19141__a = new Array(arguments.length -  0);
while (G__19141__i < G__19141__a.length) {G__19141__a[G__19141__i] = arguments[G__19141__i + 0]; ++G__19141__i;}
  args = new cljs.core.IndexedSeq(G__19141__a,0);
} 
return G__19140__delegate.call(this,args);};
G__19140.cljs$lang$maxFixedArity = 0;
G__19140.cljs$lang$applyTo = (function (arglist__19142){
var args = cljs.core.seq(arglist__19142);
return G__19140__delegate(args);
});
G__19140.cljs$core$IFn$_invoke$arity$variadic = G__19140__delegate;
return G__19140;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7189__auto__ = (function sablono$core$update_arglists_$_iter__19149(s__19150){
return (new cljs.core.LazySeq(null,(function (){
var s__19150__$1 = s__19150;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19150__$1);
if(temp__4657__auto__){
var s__19150__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19150__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19150__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19152 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19151 = (0);
while(true){
if((i__19151 < size__7188__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19151);
cljs.core.chunk_append(b__19152,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19155 = (i__19151 + (1));
i__19151 = G__19155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19152),sablono$core$update_arglists_$_iter__19149(cljs.core.chunk_rest(s__19150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19152),null);
}
} else {
var args = cljs.core.first(s__19150__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19149(cljs.core.rest(s__19150__$2)));
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
var len__7484__auto___19163 = arguments.length;
var i__7485__auto___19164 = (0);
while(true){
if((i__7485__auto___19164 < len__7484__auto___19163)){
args__7491__auto__.push((arguments[i__7485__auto___19164]));

var G__19165 = (i__7485__auto___19164 + (1));
i__7485__auto___19164 = G__19165;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7189__auto__ = (function sablono$core$iter__19157(s__19158){
return (new cljs.core.LazySeq(null,(function (){
var s__19158__$1 = s__19158;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19158__$1);
if(temp__4657__auto__){
var s__19158__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19158__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19158__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19160 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19159 = (0);
while(true){
if((i__19159 < size__7188__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19159);
cljs.core.chunk_append(b__19160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19166 = (i__19159 + (1));
i__19159 = G__19166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19160),sablono$core$iter__19157(cljs.core.chunk_rest(s__19158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19160),null);
}
} else {
var style = cljs.core.first(s__19158__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19157(cljs.core.rest(s__19158__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19156){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19156));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19171 = goog.dom.getDocument().body;
var G__19172 = (function (){var G__19173 = "script";
var G__19174 = ({"src": src});
return goog.dom.createDom(G__19173,G__19174);
})();
return goog.dom.appendChild(G__19171,G__19172);
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
sablono.core.link_to19175 = (function sablono$core$link_to19175(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19178 = arguments.length;
var i__7485__auto___19179 = (0);
while(true){
if((i__7485__auto___19179 < len__7484__auto___19178)){
args__7491__auto__.push((arguments[i__7485__auto___19179]));

var G__19180 = (i__7485__auto___19179 + (1));
i__7485__auto___19179 = G__19180;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to19175.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.link_to19175.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19175.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19175.cljs$lang$applyTo = (function (seq19176){
var G__19177 = cljs.core.first(seq19176);
var seq19176__$1 = cljs.core.next(seq19176);
return sablono.core.link_to19175.cljs$core$IFn$_invoke$arity$variadic(G__19177,seq19176__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19175);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19181 = (function sablono$core$mail_to19181(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19188 = arguments.length;
var i__7485__auto___19189 = (0);
while(true){
if((i__7485__auto___19189 < len__7484__auto___19188)){
args__7491__auto__.push((arguments[i__7485__auto___19189]));

var G__19190 = (i__7485__auto___19189 + (1));
i__7485__auto___19189 = G__19190;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to19181.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.mail_to19181.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19184){
var vec__19185 = p__19184;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6409__auto__ = content;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19181.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19181.cljs$lang$applyTo = (function (seq19182){
var G__19183 = cljs.core.first(seq19182);
var seq19182__$1 = cljs.core.next(seq19182);
return sablono.core.mail_to19181.cljs$core$IFn$_invoke$arity$variadic(G__19183,seq19182__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19181);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19191 = (function sablono$core$unordered_list19191(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7189__auto__ = (function sablono$core$unordered_list19191_$_iter__19198(s__19199){
return (new cljs.core.LazySeq(null,(function (){
var s__19199__$1 = s__19199;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19199__$1);
if(temp__4657__auto__){
var s__19199__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19199__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19199__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19201 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19200 = (0);
while(true){
if((i__19200 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19200);
cljs.core.chunk_append(b__19201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19204 = (i__19200 + (1));
i__19200 = G__19204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19201),sablono$core$unordered_list19191_$_iter__19198(cljs.core.chunk_rest(s__19199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19201),null);
}
} else {
var x = cljs.core.first(s__19199__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19191_$_iter__19198(cljs.core.rest(s__19199__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19191);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19205 = (function sablono$core$ordered_list19205(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7189__auto__ = (function sablono$core$ordered_list19205_$_iter__19212(s__19213){
return (new cljs.core.LazySeq(null,(function (){
var s__19213__$1 = s__19213;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19213__$1);
if(temp__4657__auto__){
var s__19213__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19213__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19213__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19215 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19214 = (0);
while(true){
if((i__19214 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19214);
cljs.core.chunk_append(b__19215,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19218 = (i__19214 + (1));
i__19214 = G__19218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19215),sablono$core$ordered_list19205_$_iter__19212(cljs.core.chunk_rest(s__19213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19215),null);
}
} else {
var x = cljs.core.first(s__19213__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19205_$_iter__19212(cljs.core.rest(s__19213__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19205);
/**
 * Create an image element.
 */
sablono.core.image19219 = (function sablono$core$image19219(var_args){
var args19220 = [];
var len__7484__auto___19223 = arguments.length;
var i__7485__auto___19224 = (0);
while(true){
if((i__7485__auto___19224 < len__7484__auto___19223)){
args19220.push((arguments[i__7485__auto___19224]));

var G__19225 = (i__7485__auto___19224 + (1));
i__7485__auto___19224 = G__19225;
continue;
} else {
}
break;
}

var G__19222 = args19220.length;
switch (G__19222) {
case 1:
return sablono.core.image19219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19220.length)].join('')));

}
});

sablono.core.image19219.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19219.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19219.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19219);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19227_SHARP_,p2__19228_SHARP_){
return [cljs.core.str(p1__19227_SHARP_),cljs.core.str("["),cljs.core.str(p2__19228_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19229_SHARP_,p2__19230_SHARP_){
return [cljs.core.str(p1__19229_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19230_SHARP_)].join('');
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
sablono.core.color_field19231 = (function sablono$core$color_field19231(var_args){
var args19232 = [];
var len__7484__auto___19299 = arguments.length;
var i__7485__auto___19300 = (0);
while(true){
if((i__7485__auto___19300 < len__7484__auto___19299)){
args19232.push((arguments[i__7485__auto___19300]));

var G__19301 = (i__7485__auto___19300 + (1));
i__7485__auto___19300 = G__19301;
continue;
} else {
}
break;
}

var G__19234 = args19232.length;
switch (G__19234) {
case 1:
return sablono.core.color_field19231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19232.length)].join('')));

}
});

sablono.core.color_field19231.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.color_field19231.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.color_field19231.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.color_field19231.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19231);

/**
 * Creates a date input field.
 */
sablono.core.date_field19235 = (function sablono$core$date_field19235(var_args){
var args19236 = [];
var len__7484__auto___19303 = arguments.length;
var i__7485__auto___19304 = (0);
while(true){
if((i__7485__auto___19304 < len__7484__auto___19303)){
args19236.push((arguments[i__7485__auto___19304]));

var G__19305 = (i__7485__auto___19304 + (1));
i__7485__auto___19304 = G__19305;
continue;
} else {
}
break;
}

var G__19238 = args19236.length;
switch (G__19238) {
case 1:
return sablono.core.date_field19235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19236.length)].join('')));

}
});

sablono.core.date_field19235.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.date_field19235.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.date_field19235.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.date_field19235.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19235);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19239 = (function sablono$core$datetime_field19239(var_args){
var args19240 = [];
var len__7484__auto___19307 = arguments.length;
var i__7485__auto___19308 = (0);
while(true){
if((i__7485__auto___19308 < len__7484__auto___19307)){
args19240.push((arguments[i__7485__auto___19308]));

var G__19309 = (i__7485__auto___19308 + (1));
i__7485__auto___19308 = G__19309;
continue;
} else {
}
break;
}

var G__19242 = args19240.length;
switch (G__19242) {
case 1:
return sablono.core.datetime_field19239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19240.length)].join('')));

}
});

sablono.core.datetime_field19239.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.datetime_field19239.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.datetime_field19239.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.datetime_field19239.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19239);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19243 = (function sablono$core$datetime_local_field19243(var_args){
var args19244 = [];
var len__7484__auto___19311 = arguments.length;
var i__7485__auto___19312 = (0);
while(true){
if((i__7485__auto___19312 < len__7484__auto___19311)){
args19244.push((arguments[i__7485__auto___19312]));

var G__19313 = (i__7485__auto___19312 + (1));
i__7485__auto___19312 = G__19313;
continue;
} else {
}
break;
}

var G__19246 = args19244.length;
switch (G__19246) {
case 1:
return sablono.core.datetime_local_field19243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19244.length)].join('')));

}
});

sablono.core.datetime_local_field19243.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.datetime_local_field19243.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.datetime_local_field19243.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.datetime_local_field19243.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19243);

/**
 * Creates a email input field.
 */
sablono.core.email_field19247 = (function sablono$core$email_field19247(var_args){
var args19248 = [];
var len__7484__auto___19315 = arguments.length;
var i__7485__auto___19316 = (0);
while(true){
if((i__7485__auto___19316 < len__7484__auto___19315)){
args19248.push((arguments[i__7485__auto___19316]));

var G__19317 = (i__7485__auto___19316 + (1));
i__7485__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var G__19250 = args19248.length;
switch (G__19250) {
case 1:
return sablono.core.email_field19247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19248.length)].join('')));

}
});

sablono.core.email_field19247.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.email_field19247.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.email_field19247.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.email_field19247.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19247);

/**
 * Creates a file input field.
 */
sablono.core.file_field19251 = (function sablono$core$file_field19251(var_args){
var args19252 = [];
var len__7484__auto___19319 = arguments.length;
var i__7485__auto___19320 = (0);
while(true){
if((i__7485__auto___19320 < len__7484__auto___19319)){
args19252.push((arguments[i__7485__auto___19320]));

var G__19321 = (i__7485__auto___19320 + (1));
i__7485__auto___19320 = G__19321;
continue;
} else {
}
break;
}

var G__19254 = args19252.length;
switch (G__19254) {
case 1:
return sablono.core.file_field19251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19252.length)].join('')));

}
});

sablono.core.file_field19251.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.file_field19251.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.file_field19251.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.file_field19251.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19251);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19255 = (function sablono$core$hidden_field19255(var_args){
var args19256 = [];
var len__7484__auto___19323 = arguments.length;
var i__7485__auto___19324 = (0);
while(true){
if((i__7485__auto___19324 < len__7484__auto___19323)){
args19256.push((arguments[i__7485__auto___19324]));

var G__19325 = (i__7485__auto___19324 + (1));
i__7485__auto___19324 = G__19325;
continue;
} else {
}
break;
}

var G__19258 = args19256.length;
switch (G__19258) {
case 1:
return sablono.core.hidden_field19255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19256.length)].join('')));

}
});

sablono.core.hidden_field19255.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.hidden_field19255.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.hidden_field19255.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.hidden_field19255.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19255);

/**
 * Creates a month input field.
 */
sablono.core.month_field19259 = (function sablono$core$month_field19259(var_args){
var args19260 = [];
var len__7484__auto___19327 = arguments.length;
var i__7485__auto___19328 = (0);
while(true){
if((i__7485__auto___19328 < len__7484__auto___19327)){
args19260.push((arguments[i__7485__auto___19328]));

var G__19329 = (i__7485__auto___19328 + (1));
i__7485__auto___19328 = G__19329;
continue;
} else {
}
break;
}

var G__19262 = args19260.length;
switch (G__19262) {
case 1:
return sablono.core.month_field19259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19260.length)].join('')));

}
});

sablono.core.month_field19259.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.month_field19259.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.month_field19259.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.month_field19259.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19259);

/**
 * Creates a number input field.
 */
sablono.core.number_field19263 = (function sablono$core$number_field19263(var_args){
var args19264 = [];
var len__7484__auto___19331 = arguments.length;
var i__7485__auto___19332 = (0);
while(true){
if((i__7485__auto___19332 < len__7484__auto___19331)){
args19264.push((arguments[i__7485__auto___19332]));

var G__19333 = (i__7485__auto___19332 + (1));
i__7485__auto___19332 = G__19333;
continue;
} else {
}
break;
}

var G__19266 = args19264.length;
switch (G__19266) {
case 1:
return sablono.core.number_field19263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19264.length)].join('')));

}
});

sablono.core.number_field19263.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.number_field19263.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.number_field19263.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.number_field19263.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19263);

/**
 * Creates a password input field.
 */
sablono.core.password_field19267 = (function sablono$core$password_field19267(var_args){
var args19268 = [];
var len__7484__auto___19335 = arguments.length;
var i__7485__auto___19336 = (0);
while(true){
if((i__7485__auto___19336 < len__7484__auto___19335)){
args19268.push((arguments[i__7485__auto___19336]));

var G__19337 = (i__7485__auto___19336 + (1));
i__7485__auto___19336 = G__19337;
continue;
} else {
}
break;
}

var G__19270 = args19268.length;
switch (G__19270) {
case 1:
return sablono.core.password_field19267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19268.length)].join('')));

}
});

sablono.core.password_field19267.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.password_field19267.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.password_field19267.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.password_field19267.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19267);

/**
 * Creates a range input field.
 */
sablono.core.range_field19271 = (function sablono$core$range_field19271(var_args){
var args19272 = [];
var len__7484__auto___19339 = arguments.length;
var i__7485__auto___19340 = (0);
while(true){
if((i__7485__auto___19340 < len__7484__auto___19339)){
args19272.push((arguments[i__7485__auto___19340]));

var G__19341 = (i__7485__auto___19340 + (1));
i__7485__auto___19340 = G__19341;
continue;
} else {
}
break;
}

var G__19274 = args19272.length;
switch (G__19274) {
case 1:
return sablono.core.range_field19271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19272.length)].join('')));

}
});

sablono.core.range_field19271.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.range_field19271.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.range_field19271.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.range_field19271.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19271);

/**
 * Creates a search input field.
 */
sablono.core.search_field19275 = (function sablono$core$search_field19275(var_args){
var args19276 = [];
var len__7484__auto___19343 = arguments.length;
var i__7485__auto___19344 = (0);
while(true){
if((i__7485__auto___19344 < len__7484__auto___19343)){
args19276.push((arguments[i__7485__auto___19344]));

var G__19345 = (i__7485__auto___19344 + (1));
i__7485__auto___19344 = G__19345;
continue;
} else {
}
break;
}

var G__19278 = args19276.length;
switch (G__19278) {
case 1:
return sablono.core.search_field19275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19276.length)].join('')));

}
});

sablono.core.search_field19275.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.search_field19275.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.search_field19275.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.search_field19275.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19275);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19279 = (function sablono$core$tel_field19279(var_args){
var args19280 = [];
var len__7484__auto___19347 = arguments.length;
var i__7485__auto___19348 = (0);
while(true){
if((i__7485__auto___19348 < len__7484__auto___19347)){
args19280.push((arguments[i__7485__auto___19348]));

var G__19349 = (i__7485__auto___19348 + (1));
i__7485__auto___19348 = G__19349;
continue;
} else {
}
break;
}

var G__19282 = args19280.length;
switch (G__19282) {
case 1:
return sablono.core.tel_field19279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19280.length)].join('')));

}
});

sablono.core.tel_field19279.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.tel_field19279.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.tel_field19279.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.tel_field19279.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19279);

/**
 * Creates a text input field.
 */
sablono.core.text_field19283 = (function sablono$core$text_field19283(var_args){
var args19284 = [];
var len__7484__auto___19351 = arguments.length;
var i__7485__auto___19352 = (0);
while(true){
if((i__7485__auto___19352 < len__7484__auto___19351)){
args19284.push((arguments[i__7485__auto___19352]));

var G__19353 = (i__7485__auto___19352 + (1));
i__7485__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var G__19286 = args19284.length;
switch (G__19286) {
case 1:
return sablono.core.text_field19283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19284.length)].join('')));

}
});

sablono.core.text_field19283.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.text_field19283.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.text_field19283.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.text_field19283.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19283);

/**
 * Creates a time input field.
 */
sablono.core.time_field19287 = (function sablono$core$time_field19287(var_args){
var args19288 = [];
var len__7484__auto___19355 = arguments.length;
var i__7485__auto___19356 = (0);
while(true){
if((i__7485__auto___19356 < len__7484__auto___19355)){
args19288.push((arguments[i__7485__auto___19356]));

var G__19357 = (i__7485__auto___19356 + (1));
i__7485__auto___19356 = G__19357;
continue;
} else {
}
break;
}

var G__19290 = args19288.length;
switch (G__19290) {
case 1:
return sablono.core.time_field19287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19288.length)].join('')));

}
});

sablono.core.time_field19287.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.time_field19287.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.time_field19287.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.time_field19287.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19287);

/**
 * Creates a url input field.
 */
sablono.core.url_field19291 = (function sablono$core$url_field19291(var_args){
var args19292 = [];
var len__7484__auto___19359 = arguments.length;
var i__7485__auto___19360 = (0);
while(true){
if((i__7485__auto___19360 < len__7484__auto___19359)){
args19292.push((arguments[i__7485__auto___19360]));

var G__19361 = (i__7485__auto___19360 + (1));
i__7485__auto___19360 = G__19361;
continue;
} else {
}
break;
}

var G__19294 = args19292.length;
switch (G__19294) {
case 1:
return sablono.core.url_field19291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19292.length)].join('')));

}
});

sablono.core.url_field19291.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.url_field19291.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.url_field19291.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.url_field19291.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19291);

/**
 * Creates a week input field.
 */
sablono.core.week_field19295 = (function sablono$core$week_field19295(var_args){
var args19296 = [];
var len__7484__auto___19363 = arguments.length;
var i__7485__auto___19364 = (0);
while(true){
if((i__7485__auto___19364 < len__7484__auto___19363)){
args19296.push((arguments[i__7485__auto___19364]));

var G__19365 = (i__7485__auto___19364 + (1));
i__7485__auto___19364 = G__19365;
continue;
} else {
}
break;
}

var G__19298 = args19296.length;
switch (G__19298) {
case 1:
return sablono.core.week_field19295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19296.length)].join('')));

}
});

sablono.core.week_field19295.cljs$core$IFn$_invoke$arity$1 = (function (name__19124__auto__){
return sablono.core.week_field19295.cljs$core$IFn$_invoke$arity$2(name__19124__auto__,null);
});

sablono.core.week_field19295.cljs$core$IFn$_invoke$arity$2 = (function (name__19124__auto__,value__19125__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19124__auto__,value__19125__auto__);
});

sablono.core.week_field19295.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19295);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19367 = (function sablono$core$check_box19367(var_args){
var args19368 = [];
var len__7484__auto___19371 = arguments.length;
var i__7485__auto___19372 = (0);
while(true){
if((i__7485__auto___19372 < len__7484__auto___19371)){
args19368.push((arguments[i__7485__auto___19372]));

var G__19373 = (i__7485__auto___19372 + (1));
i__7485__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var G__19370 = args19368.length;
switch (G__19370) {
case 1:
return sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19368.length)].join('')));

}
});

sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19367.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19367.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19367);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19375 = (function sablono$core$radio_button19375(var_args){
var args19376 = [];
var len__7484__auto___19379 = arguments.length;
var i__7485__auto___19380 = (0);
while(true){
if((i__7485__auto___19380 < len__7484__auto___19379)){
args19376.push((arguments[i__7485__auto___19380]));

var G__19381 = (i__7485__auto___19380 + (1));
i__7485__auto___19380 = G__19381;
continue;
} else {
}
break;
}

var G__19378 = args19376.length;
switch (G__19378) {
case 1:
return sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19376.length)].join('')));

}
});

sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19375.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19375.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19375);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19384 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19384);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19385 = (function sablono$core$select_options19385(coll){
var iter__7189__auto__ = (function sablono$core$select_options19385_$_iter__19404(s__19405){
return (new cljs.core.LazySeq(null,(function (){
var s__19405__$1 = s__19405;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19405__$1);
if(temp__4657__auto__){
var s__19405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19405__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__19405__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__19407 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__19406 = (0);
while(true){
if((i__19406 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__19406);
cljs.core.chunk_append(b__19407,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19416 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19416,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19385(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19422 = (i__19406 + (1));
i__19406 = G__19422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19407),sablono$core$select_options19385_$_iter__19404(cljs.core.chunk_rest(s__19405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19407),null);
}
} else {
var x = cljs.core.first(s__19405__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19419 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19419,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19419,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19419,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19385(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19385_$_iter__19404(cljs.core.rest(s__19405__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19385);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19423 = (function sablono$core$drop_down19423(var_args){
var args19424 = [];
var len__7484__auto___19427 = arguments.length;
var i__7485__auto___19428 = (0);
while(true){
if((i__7485__auto___19428 < len__7484__auto___19427)){
args19424.push((arguments[i__7485__auto___19428]));

var G__19429 = (i__7485__auto___19428 + (1));
i__7485__auto___19428 = G__19429;
continue;
} else {
}
break;
}

var G__19426 = args19424.length;
switch (G__19426) {
case 2:
return sablono.core.drop_down19423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19423.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19424.length)].join('')));

}
});

sablono.core.drop_down19423.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19423.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19423.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19423.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19423);
/**
 * Creates a text area element.
 */
sablono.core.text_area19431 = (function sablono$core$text_area19431(var_args){
var args19432 = [];
var len__7484__auto___19435 = arguments.length;
var i__7485__auto___19436 = (0);
while(true){
if((i__7485__auto___19436 < len__7484__auto___19435)){
args19432.push((arguments[i__7485__auto___19436]));

var G__19437 = (i__7485__auto___19436 + (1));
i__7485__auto___19436 = G__19437;
continue;
} else {
}
break;
}

var G__19434 = args19432.length;
switch (G__19434) {
case 1:
return sablono.core.text_area19431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19432.length)].join('')));

}
});

sablono.core.text_area19431.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19431.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19431.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area19431.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19431);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19439 = (function sablono$core$label19439(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19439);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19440 = (function sablono$core$submit_button19440(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19440);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19441 = (function sablono$core$reset_button19441(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19441);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19442 = (function sablono$core$form_to19442(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19452 = arguments.length;
var i__7485__auto___19453 = (0);
while(true){
if((i__7485__auto___19453 < len__7484__auto___19452)){
args__7491__auto__.push((arguments[i__7485__auto___19453]));

var G__19454 = (i__7485__auto___19453 + (1));
i__7485__auto___19453 = G__19454;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to19442.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.form_to19442.cljs$core$IFn$_invoke$arity$variadic = (function (p__19445,body){
var vec__19446 = p__19445;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19449 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19450 = "_method";
var G__19451 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19449,G__19450,G__19451) : sablono.core.hidden_field.call(null,G__19449,G__19450,G__19451));
})()], null)),body));
});

sablono.core.form_to19442.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19442.cljs$lang$applyTo = (function (seq19443){
var G__19444 = cljs.core.first(seq19443);
var seq19443__$1 = cljs.core.next(seq19443);
return sablono.core.form_to19442.cljs$core$IFn$_invoke$arity$variadic(G__19444,seq19443__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19442);
