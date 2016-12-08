// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31986__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31983 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31984 = cljs.core.seq.call(null,vec__31983);
var first__31985 = cljs.core.first.call(null,seq__31984);
var seq__31984__$1 = cljs.core.next.call(null,seq__31984);
var tag = first__31985;
var body = seq__31984__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31987__i = 0, G__31987__a = new Array(arguments.length -  0);
while (G__31987__i < G__31987__a.length) {G__31987__a[G__31987__i] = arguments[G__31987__i + 0]; ++G__31987__i;}
  args = new cljs.core.IndexedSeq(G__31987__a,0);
} 
return G__31986__delegate.call(this,args);};
G__31986.cljs$lang$maxFixedArity = 0;
G__31986.cljs$lang$applyTo = (function (arglist__31988){
var args = cljs.core.seq(arglist__31988);
return G__31986__delegate(args);
});
G__31986.cljs$core$IFn$_invoke$arity$variadic = G__31986__delegate;
return G__31986;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25540__auto__ = (function sablono$core$update_arglists_$_iter__31993(s__31994){
return (new cljs.core.LazySeq(null,(function (){
var s__31994__$1 = s__31994;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31994__$1);
if(temp__4657__auto__){
var s__31994__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31994__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__31994__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__31996 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__31995 = (0);
while(true){
if((i__31995 < size__25539__auto__)){
var args = cljs.core._nth.call(null,c__25538__auto__,i__31995);
cljs.core.chunk_append.call(null,b__31996,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31997 = (i__31995 + (1));
i__31995 = G__31997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),sablono$core$update_arglists_$_iter__31993.call(null,cljs.core.chunk_rest.call(null,s__31994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),null);
}
} else {
var args = cljs.core.first.call(null,s__31994__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31993.call(null,cljs.core.rest.call(null,s__31994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32003 = arguments.length;
var i__25836__auto___32004 = (0);
while(true){
if((i__25836__auto___32004 < len__25835__auto___32003)){
args__25842__auto__.push((arguments[i__25836__auto___32004]));

var G__32005 = (i__25836__auto___32004 + (1));
i__25836__auto___32004 = G__32005;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25540__auto__ = (function sablono$core$iter__31999(s__32000){
return (new cljs.core.LazySeq(null,(function (){
var s__32000__$1 = s__32000;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32000__$1);
if(temp__4657__auto__){
var s__32000__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32000__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32000__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32002 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32001 = (0);
while(true){
if((i__32001 < size__25539__auto__)){
var style = cljs.core._nth.call(null,c__25538__auto__,i__32001);
cljs.core.chunk_append.call(null,b__32002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32006 = (i__32001 + (1));
i__32001 = G__32006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32002),sablono$core$iter__31999.call(null,cljs.core.chunk_rest.call(null,s__32000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32002),null);
}
} else {
var style = cljs.core.first.call(null,s__32000__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31999.call(null,cljs.core.rest.call(null,s__32000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31998){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31998));
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
sablono.core.link_to32007 = (function sablono$core$link_to32007(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32010 = arguments.length;
var i__25836__auto___32011 = (0);
while(true){
if((i__25836__auto___32011 < len__25835__auto___32010)){
args__25842__auto__.push((arguments[i__25836__auto___32011]));

var G__32012 = (i__25836__auto___32011 + (1));
i__25836__auto___32011 = G__32012;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32007.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.link_to32007.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32007.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32007.cljs$lang$applyTo = (function (seq32008){
var G__32009 = cljs.core.first.call(null,seq32008);
var seq32008__$1 = cljs.core.next.call(null,seq32008);
return sablono.core.link_to32007.cljs$core$IFn$_invoke$arity$variadic(G__32009,seq32008__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32007);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32013 = (function sablono$core$mail_to32013(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32020 = arguments.length;
var i__25836__auto___32021 = (0);
while(true){
if((i__25836__auto___32021 < len__25835__auto___32020)){
args__25842__auto__.push((arguments[i__25836__auto___32021]));

var G__32022 = (i__25836__auto___32021 + (1));
i__25836__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32013.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.mail_to32013.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32016){
var vec__32017 = p__32016;
var content = cljs.core.nth.call(null,vec__32017,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24760__auto__ = content;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32013.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32013.cljs$lang$applyTo = (function (seq32014){
var G__32015 = cljs.core.first.call(null,seq32014);
var seq32014__$1 = cljs.core.next.call(null,seq32014);
return sablono.core.mail_to32013.cljs$core$IFn$_invoke$arity$variadic(G__32015,seq32014__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32013);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32023 = (function sablono$core$unordered_list32023(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25540__auto__ = (function sablono$core$unordered_list32023_$_iter__32028(s__32029){
return (new cljs.core.LazySeq(null,(function (){
var s__32029__$1 = s__32029;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32029__$1);
if(temp__4657__auto__){
var s__32029__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32029__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32029__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32031 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32030 = (0);
while(true){
if((i__32030 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32030);
cljs.core.chunk_append.call(null,b__32031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32032 = (i__32030 + (1));
i__32030 = G__32032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32031),sablono$core$unordered_list32023_$_iter__32028.call(null,cljs.core.chunk_rest.call(null,s__32029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32031),null);
}
} else {
var x = cljs.core.first.call(null,s__32029__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32023_$_iter__32028.call(null,cljs.core.rest.call(null,s__32029__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32023);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32033 = (function sablono$core$ordered_list32033(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25540__auto__ = (function sablono$core$ordered_list32033_$_iter__32038(s__32039){
return (new cljs.core.LazySeq(null,(function (){
var s__32039__$1 = s__32039;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32039__$1);
if(temp__4657__auto__){
var s__32039__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32039__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32039__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32041 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32040 = (0);
while(true){
if((i__32040 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32040);
cljs.core.chunk_append.call(null,b__32041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32042 = (i__32040 + (1));
i__32040 = G__32042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32041),sablono$core$ordered_list32033_$_iter__32038.call(null,cljs.core.chunk_rest.call(null,s__32039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32041),null);
}
} else {
var x = cljs.core.first.call(null,s__32039__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32033_$_iter__32038.call(null,cljs.core.rest.call(null,s__32039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32033);
/**
 * Create an image element.
 */
sablono.core.image32043 = (function sablono$core$image32043(var_args){
var args32044 = [];
var len__25835__auto___32047 = arguments.length;
var i__25836__auto___32048 = (0);
while(true){
if((i__25836__auto___32048 < len__25835__auto___32047)){
args32044.push((arguments[i__25836__auto___32048]));

var G__32049 = (i__25836__auto___32048 + (1));
i__25836__auto___32048 = G__32049;
continue;
} else {
}
break;
}

var G__32046 = args32044.length;
switch (G__32046) {
case 1:
return sablono.core.image32043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32044.length)].join('')));

}
});

sablono.core.image32043.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32043.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32043.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32043);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32051_SHARP_,p2__32052_SHARP_){
return [cljs.core.str(p1__32051_SHARP_),cljs.core.str("["),cljs.core.str(p2__32052_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32053_SHARP_,p2__32054_SHARP_){
return [cljs.core.str(p1__32053_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32054_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32055 = (function sablono$core$color_field32055(var_args){
var args32056 = [];
var len__25835__auto___32123 = arguments.length;
var i__25836__auto___32124 = (0);
while(true){
if((i__25836__auto___32124 < len__25835__auto___32123)){
args32056.push((arguments[i__25836__auto___32124]));

var G__32125 = (i__25836__auto___32124 + (1));
i__25836__auto___32124 = G__32125;
continue;
} else {
}
break;
}

var G__32058 = args32056.length;
switch (G__32058) {
case 1:
return sablono.core.color_field32055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32056.length)].join('')));

}
});

sablono.core.color_field32055.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.color_field32055.call(null,name__31970__auto__,null);
});

sablono.core.color_field32055.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.color_field32055.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32055);

/**
 * Creates a date input field.
 */
sablono.core.date_field32059 = (function sablono$core$date_field32059(var_args){
var args32060 = [];
var len__25835__auto___32127 = arguments.length;
var i__25836__auto___32128 = (0);
while(true){
if((i__25836__auto___32128 < len__25835__auto___32127)){
args32060.push((arguments[i__25836__auto___32128]));

var G__32129 = (i__25836__auto___32128 + (1));
i__25836__auto___32128 = G__32129;
continue;
} else {
}
break;
}

var G__32062 = args32060.length;
switch (G__32062) {
case 1:
return sablono.core.date_field32059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32060.length)].join('')));

}
});

sablono.core.date_field32059.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.date_field32059.call(null,name__31970__auto__,null);
});

sablono.core.date_field32059.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.date_field32059.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32059);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32063 = (function sablono$core$datetime_field32063(var_args){
var args32064 = [];
var len__25835__auto___32131 = arguments.length;
var i__25836__auto___32132 = (0);
while(true){
if((i__25836__auto___32132 < len__25835__auto___32131)){
args32064.push((arguments[i__25836__auto___32132]));

var G__32133 = (i__25836__auto___32132 + (1));
i__25836__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var G__32066 = args32064.length;
switch (G__32066) {
case 1:
return sablono.core.datetime_field32063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32064.length)].join('')));

}
});

sablono.core.datetime_field32063.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.datetime_field32063.call(null,name__31970__auto__,null);
});

sablono.core.datetime_field32063.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.datetime_field32063.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32063);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32067 = (function sablono$core$datetime_local_field32067(var_args){
var args32068 = [];
var len__25835__auto___32135 = arguments.length;
var i__25836__auto___32136 = (0);
while(true){
if((i__25836__auto___32136 < len__25835__auto___32135)){
args32068.push((arguments[i__25836__auto___32136]));

var G__32137 = (i__25836__auto___32136 + (1));
i__25836__auto___32136 = G__32137;
continue;
} else {
}
break;
}

var G__32070 = args32068.length;
switch (G__32070) {
case 1:
return sablono.core.datetime_local_field32067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32068.length)].join('')));

}
});

sablono.core.datetime_local_field32067.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.datetime_local_field32067.call(null,name__31970__auto__,null);
});

sablono.core.datetime_local_field32067.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.datetime_local_field32067.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32067);

/**
 * Creates a email input field.
 */
sablono.core.email_field32071 = (function sablono$core$email_field32071(var_args){
var args32072 = [];
var len__25835__auto___32139 = arguments.length;
var i__25836__auto___32140 = (0);
while(true){
if((i__25836__auto___32140 < len__25835__auto___32139)){
args32072.push((arguments[i__25836__auto___32140]));

var G__32141 = (i__25836__auto___32140 + (1));
i__25836__auto___32140 = G__32141;
continue;
} else {
}
break;
}

var G__32074 = args32072.length;
switch (G__32074) {
case 1:
return sablono.core.email_field32071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32072.length)].join('')));

}
});

sablono.core.email_field32071.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.email_field32071.call(null,name__31970__auto__,null);
});

sablono.core.email_field32071.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.email_field32071.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32071);

/**
 * Creates a file input field.
 */
sablono.core.file_field32075 = (function sablono$core$file_field32075(var_args){
var args32076 = [];
var len__25835__auto___32143 = arguments.length;
var i__25836__auto___32144 = (0);
while(true){
if((i__25836__auto___32144 < len__25835__auto___32143)){
args32076.push((arguments[i__25836__auto___32144]));

var G__32145 = (i__25836__auto___32144 + (1));
i__25836__auto___32144 = G__32145;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 1:
return sablono.core.file_field32075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32076.length)].join('')));

}
});

sablono.core.file_field32075.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.file_field32075.call(null,name__31970__auto__,null);
});

sablono.core.file_field32075.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.file_field32075.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32075);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32079 = (function sablono$core$hidden_field32079(var_args){
var args32080 = [];
var len__25835__auto___32147 = arguments.length;
var i__25836__auto___32148 = (0);
while(true){
if((i__25836__auto___32148 < len__25835__auto___32147)){
args32080.push((arguments[i__25836__auto___32148]));

var G__32149 = (i__25836__auto___32148 + (1));
i__25836__auto___32148 = G__32149;
continue;
} else {
}
break;
}

var G__32082 = args32080.length;
switch (G__32082) {
case 1:
return sablono.core.hidden_field32079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32080.length)].join('')));

}
});

sablono.core.hidden_field32079.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.hidden_field32079.call(null,name__31970__auto__,null);
});

sablono.core.hidden_field32079.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.hidden_field32079.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32079);

/**
 * Creates a month input field.
 */
sablono.core.month_field32083 = (function sablono$core$month_field32083(var_args){
var args32084 = [];
var len__25835__auto___32151 = arguments.length;
var i__25836__auto___32152 = (0);
while(true){
if((i__25836__auto___32152 < len__25835__auto___32151)){
args32084.push((arguments[i__25836__auto___32152]));

var G__32153 = (i__25836__auto___32152 + (1));
i__25836__auto___32152 = G__32153;
continue;
} else {
}
break;
}

var G__32086 = args32084.length;
switch (G__32086) {
case 1:
return sablono.core.month_field32083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32084.length)].join('')));

}
});

sablono.core.month_field32083.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.month_field32083.call(null,name__31970__auto__,null);
});

sablono.core.month_field32083.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.month_field32083.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32083);

/**
 * Creates a number input field.
 */
sablono.core.number_field32087 = (function sablono$core$number_field32087(var_args){
var args32088 = [];
var len__25835__auto___32155 = arguments.length;
var i__25836__auto___32156 = (0);
while(true){
if((i__25836__auto___32156 < len__25835__auto___32155)){
args32088.push((arguments[i__25836__auto___32156]));

var G__32157 = (i__25836__auto___32156 + (1));
i__25836__auto___32156 = G__32157;
continue;
} else {
}
break;
}

var G__32090 = args32088.length;
switch (G__32090) {
case 1:
return sablono.core.number_field32087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32088.length)].join('')));

}
});

sablono.core.number_field32087.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.number_field32087.call(null,name__31970__auto__,null);
});

sablono.core.number_field32087.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.number_field32087.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32087);

/**
 * Creates a password input field.
 */
sablono.core.password_field32091 = (function sablono$core$password_field32091(var_args){
var args32092 = [];
var len__25835__auto___32159 = arguments.length;
var i__25836__auto___32160 = (0);
while(true){
if((i__25836__auto___32160 < len__25835__auto___32159)){
args32092.push((arguments[i__25836__auto___32160]));

var G__32161 = (i__25836__auto___32160 + (1));
i__25836__auto___32160 = G__32161;
continue;
} else {
}
break;
}

var G__32094 = args32092.length;
switch (G__32094) {
case 1:
return sablono.core.password_field32091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32092.length)].join('')));

}
});

sablono.core.password_field32091.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.password_field32091.call(null,name__31970__auto__,null);
});

sablono.core.password_field32091.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.password_field32091.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32091);

/**
 * Creates a range input field.
 */
sablono.core.range_field32095 = (function sablono$core$range_field32095(var_args){
var args32096 = [];
var len__25835__auto___32163 = arguments.length;
var i__25836__auto___32164 = (0);
while(true){
if((i__25836__auto___32164 < len__25835__auto___32163)){
args32096.push((arguments[i__25836__auto___32164]));

var G__32165 = (i__25836__auto___32164 + (1));
i__25836__auto___32164 = G__32165;
continue;
} else {
}
break;
}

var G__32098 = args32096.length;
switch (G__32098) {
case 1:
return sablono.core.range_field32095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32096.length)].join('')));

}
});

sablono.core.range_field32095.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.range_field32095.call(null,name__31970__auto__,null);
});

sablono.core.range_field32095.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.range_field32095.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32095);

/**
 * Creates a search input field.
 */
sablono.core.search_field32099 = (function sablono$core$search_field32099(var_args){
var args32100 = [];
var len__25835__auto___32167 = arguments.length;
var i__25836__auto___32168 = (0);
while(true){
if((i__25836__auto___32168 < len__25835__auto___32167)){
args32100.push((arguments[i__25836__auto___32168]));

var G__32169 = (i__25836__auto___32168 + (1));
i__25836__auto___32168 = G__32169;
continue;
} else {
}
break;
}

var G__32102 = args32100.length;
switch (G__32102) {
case 1:
return sablono.core.search_field32099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32100.length)].join('')));

}
});

sablono.core.search_field32099.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.search_field32099.call(null,name__31970__auto__,null);
});

sablono.core.search_field32099.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.search_field32099.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32099);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32103 = (function sablono$core$tel_field32103(var_args){
var args32104 = [];
var len__25835__auto___32171 = arguments.length;
var i__25836__auto___32172 = (0);
while(true){
if((i__25836__auto___32172 < len__25835__auto___32171)){
args32104.push((arguments[i__25836__auto___32172]));

var G__32173 = (i__25836__auto___32172 + (1));
i__25836__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var G__32106 = args32104.length;
switch (G__32106) {
case 1:
return sablono.core.tel_field32103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32104.length)].join('')));

}
});

sablono.core.tel_field32103.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.tel_field32103.call(null,name__31970__auto__,null);
});

sablono.core.tel_field32103.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.tel_field32103.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32103);

/**
 * Creates a text input field.
 */
sablono.core.text_field32107 = (function sablono$core$text_field32107(var_args){
var args32108 = [];
var len__25835__auto___32175 = arguments.length;
var i__25836__auto___32176 = (0);
while(true){
if((i__25836__auto___32176 < len__25835__auto___32175)){
args32108.push((arguments[i__25836__auto___32176]));

var G__32177 = (i__25836__auto___32176 + (1));
i__25836__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var G__32110 = args32108.length;
switch (G__32110) {
case 1:
return sablono.core.text_field32107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32108.length)].join('')));

}
});

sablono.core.text_field32107.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.text_field32107.call(null,name__31970__auto__,null);
});

sablono.core.text_field32107.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.text_field32107.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32107);

/**
 * Creates a time input field.
 */
sablono.core.time_field32111 = (function sablono$core$time_field32111(var_args){
var args32112 = [];
var len__25835__auto___32179 = arguments.length;
var i__25836__auto___32180 = (0);
while(true){
if((i__25836__auto___32180 < len__25835__auto___32179)){
args32112.push((arguments[i__25836__auto___32180]));

var G__32181 = (i__25836__auto___32180 + (1));
i__25836__auto___32180 = G__32181;
continue;
} else {
}
break;
}

var G__32114 = args32112.length;
switch (G__32114) {
case 1:
return sablono.core.time_field32111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32112.length)].join('')));

}
});

sablono.core.time_field32111.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.time_field32111.call(null,name__31970__auto__,null);
});

sablono.core.time_field32111.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.time_field32111.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32111);

/**
 * Creates a url input field.
 */
sablono.core.url_field32115 = (function sablono$core$url_field32115(var_args){
var args32116 = [];
var len__25835__auto___32183 = arguments.length;
var i__25836__auto___32184 = (0);
while(true){
if((i__25836__auto___32184 < len__25835__auto___32183)){
args32116.push((arguments[i__25836__auto___32184]));

var G__32185 = (i__25836__auto___32184 + (1));
i__25836__auto___32184 = G__32185;
continue;
} else {
}
break;
}

var G__32118 = args32116.length;
switch (G__32118) {
case 1:
return sablono.core.url_field32115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32116.length)].join('')));

}
});

sablono.core.url_field32115.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.url_field32115.call(null,name__31970__auto__,null);
});

sablono.core.url_field32115.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.url_field32115.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32115);

/**
 * Creates a week input field.
 */
sablono.core.week_field32119 = (function sablono$core$week_field32119(var_args){
var args32120 = [];
var len__25835__auto___32187 = arguments.length;
var i__25836__auto___32188 = (0);
while(true){
if((i__25836__auto___32188 < len__25835__auto___32187)){
args32120.push((arguments[i__25836__auto___32188]));

var G__32189 = (i__25836__auto___32188 + (1));
i__25836__auto___32188 = G__32189;
continue;
} else {
}
break;
}

var G__32122 = args32120.length;
switch (G__32122) {
case 1:
return sablono.core.week_field32119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32120.length)].join('')));

}
});

sablono.core.week_field32119.cljs$core$IFn$_invoke$arity$1 = (function (name__31970__auto__){
return sablono.core.week_field32119.call(null,name__31970__auto__,null);
});

sablono.core.week_field32119.cljs$core$IFn$_invoke$arity$2 = (function (name__31970__auto__,value__31971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31970__auto__,value__31971__auto__);
});

sablono.core.week_field32119.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32119);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32191 = (function sablono$core$check_box32191(var_args){
var args32192 = [];
var len__25835__auto___32195 = arguments.length;
var i__25836__auto___32196 = (0);
while(true){
if((i__25836__auto___32196 < len__25835__auto___32195)){
args32192.push((arguments[i__25836__auto___32196]));

var G__32197 = (i__25836__auto___32196 + (1));
i__25836__auto___32196 = G__32197;
continue;
} else {
}
break;
}

var G__32194 = args32192.length;
switch (G__32194) {
case 1:
return sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32192.length)].join('')));

}
});

sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32191.call(null,name,null);
});

sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32191.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32191.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32191.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32191);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32199 = (function sablono$core$radio_button32199(var_args){
var args32200 = [];
var len__25835__auto___32203 = arguments.length;
var i__25836__auto___32204 = (0);
while(true){
if((i__25836__auto___32204 < len__25835__auto___32203)){
args32200.push((arguments[i__25836__auto___32204]));

var G__32205 = (i__25836__auto___32204 + (1));
i__25836__auto___32204 = G__32205;
continue;
} else {
}
break;
}

var G__32202 = args32200.length;
switch (G__32202) {
case 1:
return sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32200.length)].join('')));

}
});

sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32199.call(null,group,null);
});

sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32199.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32199.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32199.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32199);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32207 = (function sablono$core$select_options32207(coll){
var iter__25540__auto__ = (function sablono$core$select_options32207_$_iter__32224(s__32225){
return (new cljs.core.LazySeq(null,(function (){
var s__32225__$1 = s__32225;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32225__$1);
if(temp__4657__auto__){
var s__32225__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32225__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32225__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32227 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32226 = (0);
while(true){
if((i__32226 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32226);
cljs.core.chunk_append.call(null,b__32227,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32234 = x;
var text = cljs.core.nth.call(null,vec__32234,(0),null);
var val = cljs.core.nth.call(null,vec__32234,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32234,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32207.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32240 = (i__32226 + (1));
i__32226 = G__32240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32227),sablono$core$select_options32207_$_iter__32224.call(null,cljs.core.chunk_rest.call(null,s__32225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32227),null);
}
} else {
var x = cljs.core.first.call(null,s__32225__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32237 = x;
var text = cljs.core.nth.call(null,vec__32237,(0),null);
var val = cljs.core.nth.call(null,vec__32237,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32237,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32207.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32207_$_iter__32224.call(null,cljs.core.rest.call(null,s__32225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32207);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32241 = (function sablono$core$drop_down32241(var_args){
var args32242 = [];
var len__25835__auto___32245 = arguments.length;
var i__25836__auto___32246 = (0);
while(true){
if((i__25836__auto___32246 < len__25835__auto___32245)){
args32242.push((arguments[i__25836__auto___32246]));

var G__32247 = (i__25836__auto___32246 + (1));
i__25836__auto___32246 = G__32247;
continue;
} else {
}
break;
}

var G__32244 = args32242.length;
switch (G__32244) {
case 2:
return sablono.core.drop_down32241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32241.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32242.length)].join('')));

}
});

sablono.core.drop_down32241.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32241.call(null,name,options,null);
});

sablono.core.drop_down32241.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32241.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32241);
/**
 * Creates a text area element.
 */
sablono.core.text_area32249 = (function sablono$core$text_area32249(var_args){
var args32250 = [];
var len__25835__auto___32253 = arguments.length;
var i__25836__auto___32254 = (0);
while(true){
if((i__25836__auto___32254 < len__25835__auto___32253)){
args32250.push((arguments[i__25836__auto___32254]));

var G__32255 = (i__25836__auto___32254 + (1));
i__25836__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var G__32252 = args32250.length;
switch (G__32252) {
case 1:
return sablono.core.text_area32249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32250.length)].join('')));

}
});

sablono.core.text_area32249.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32249.call(null,name,null);
});

sablono.core.text_area32249.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32249.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32249);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32257 = (function sablono$core$label32257(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32257);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32258 = (function sablono$core$submit_button32258(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32258);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32259 = (function sablono$core$reset_button32259(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32259);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32260 = (function sablono$core$form_to32260(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32267 = arguments.length;
var i__25836__auto___32268 = (0);
while(true){
if((i__25836__auto___32268 < len__25835__auto___32267)){
args__25842__auto__.push((arguments[i__25836__auto___32268]));

var G__32269 = (i__25836__auto___32268 + (1));
i__25836__auto___32268 = G__32269;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32260.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.form_to32260.cljs$core$IFn$_invoke$arity$variadic = (function (p__32263,body){
var vec__32264 = p__32263;
var method = cljs.core.nth.call(null,vec__32264,(0),null);
var action = cljs.core.nth.call(null,vec__32264,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32260.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32260.cljs$lang$applyTo = (function (seq32261){
var G__32262 = cljs.core.first.call(null,seq32261);
var seq32261__$1 = cljs.core.next.call(null,seq32261);
return sablono.core.form_to32260.cljs$core$IFn$_invoke$arity$variadic(G__32262,seq32261__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32260);

//# sourceMappingURL=core.js.map?rel=1481153819434