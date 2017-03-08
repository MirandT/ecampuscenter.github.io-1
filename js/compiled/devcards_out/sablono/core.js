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
var G__31985__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31982 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31983 = cljs.core.seq.call(null,vec__31982);
var first__31984 = cljs.core.first.call(null,seq__31983);
var seq__31983__$1 = cljs.core.next.call(null,seq__31983);
var tag = first__31984;
var body = seq__31983__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31986__i = 0, G__31986__a = new Array(arguments.length -  0);
while (G__31986__i < G__31986__a.length) {G__31986__a[G__31986__i] = arguments[G__31986__i + 0]; ++G__31986__i;}
  args = new cljs.core.IndexedSeq(G__31986__a,0);
} 
return G__31985__delegate.call(this,args);};
G__31985.cljs$lang$maxFixedArity = 0;
G__31985.cljs$lang$applyTo = (function (arglist__31987){
var args = cljs.core.seq(arglist__31987);
return G__31985__delegate(args);
});
G__31985.cljs$core$IFn$_invoke$arity$variadic = G__31985__delegate;
return G__31985;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25540__auto__ = (function sablono$core$update_arglists_$_iter__31992(s__31993){
return (new cljs.core.LazySeq(null,(function (){
var s__31993__$1 = s__31993;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31993__$1);
if(temp__4657__auto__){
var s__31993__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31993__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__31993__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__31995 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__31994 = (0);
while(true){
if((i__31994 < size__25539__auto__)){
var args = cljs.core._nth.call(null,c__25538__auto__,i__31994);
cljs.core.chunk_append.call(null,b__31995,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31996 = (i__31994 + (1));
i__31994 = G__31996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31995),sablono$core$update_arglists_$_iter__31992.call(null,cljs.core.chunk_rest.call(null,s__31993__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31995),null);
}
} else {
var args = cljs.core.first.call(null,s__31993__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31992.call(null,cljs.core.rest.call(null,s__31993__$2)));
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
var len__25835__auto___32002 = arguments.length;
var i__25836__auto___32003 = (0);
while(true){
if((i__25836__auto___32003 < len__25835__auto___32002)){
args__25842__auto__.push((arguments[i__25836__auto___32003]));

var G__32004 = (i__25836__auto___32003 + (1));
i__25836__auto___32003 = G__32004;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25540__auto__ = (function sablono$core$iter__31998(s__31999){
return (new cljs.core.LazySeq(null,(function (){
var s__31999__$1 = s__31999;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31999__$1);
if(temp__4657__auto__){
var s__31999__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31999__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__31999__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32001 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32000 = (0);
while(true){
if((i__32000 < size__25539__auto__)){
var style = cljs.core._nth.call(null,c__25538__auto__,i__32000);
cljs.core.chunk_append.call(null,b__32001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32005 = (i__32000 + (1));
i__32000 = G__32005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32001),sablono$core$iter__31998.call(null,cljs.core.chunk_rest.call(null,s__31999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32001),null);
}
} else {
var style = cljs.core.first.call(null,s__31999__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31998.call(null,cljs.core.rest.call(null,s__31999__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq31997){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31997));
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
sablono.core.link_to32006 = (function sablono$core$link_to32006(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32009 = arguments.length;
var i__25836__auto___32010 = (0);
while(true){
if((i__25836__auto___32010 < len__25835__auto___32009)){
args__25842__auto__.push((arguments[i__25836__auto___32010]));

var G__32011 = (i__25836__auto___32010 + (1));
i__25836__auto___32010 = G__32011;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32006.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.link_to32006.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32006.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32006.cljs$lang$applyTo = (function (seq32007){
var G__32008 = cljs.core.first.call(null,seq32007);
var seq32007__$1 = cljs.core.next.call(null,seq32007);
return sablono.core.link_to32006.cljs$core$IFn$_invoke$arity$variadic(G__32008,seq32007__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32006);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32012 = (function sablono$core$mail_to32012(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32019 = arguments.length;
var i__25836__auto___32020 = (0);
while(true){
if((i__25836__auto___32020 < len__25835__auto___32019)){
args__25842__auto__.push((arguments[i__25836__auto___32020]));

var G__32021 = (i__25836__auto___32020 + (1));
i__25836__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32012.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.mail_to32012.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32015){
var vec__32016 = p__32015;
var content = cljs.core.nth.call(null,vec__32016,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24760__auto__ = content;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32012.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32012.cljs$lang$applyTo = (function (seq32013){
var G__32014 = cljs.core.first.call(null,seq32013);
var seq32013__$1 = cljs.core.next.call(null,seq32013);
return sablono.core.mail_to32012.cljs$core$IFn$_invoke$arity$variadic(G__32014,seq32013__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32012);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32022 = (function sablono$core$unordered_list32022(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25540__auto__ = (function sablono$core$unordered_list32022_$_iter__32027(s__32028){
return (new cljs.core.LazySeq(null,(function (){
var s__32028__$1 = s__32028;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32028__$1);
if(temp__4657__auto__){
var s__32028__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32028__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32028__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32030 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32029 = (0);
while(true){
if((i__32029 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32029);
cljs.core.chunk_append.call(null,b__32030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32031 = (i__32029 + (1));
i__32029 = G__32031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32030),sablono$core$unordered_list32022_$_iter__32027.call(null,cljs.core.chunk_rest.call(null,s__32028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32030),null);
}
} else {
var x = cljs.core.first.call(null,s__32028__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32022_$_iter__32027.call(null,cljs.core.rest.call(null,s__32028__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32022);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32032 = (function sablono$core$ordered_list32032(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25540__auto__ = (function sablono$core$ordered_list32032_$_iter__32037(s__32038){
return (new cljs.core.LazySeq(null,(function (){
var s__32038__$1 = s__32038;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32038__$1);
if(temp__4657__auto__){
var s__32038__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32038__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32038__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32040 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32039 = (0);
while(true){
if((i__32039 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32039);
cljs.core.chunk_append.call(null,b__32040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32041 = (i__32039 + (1));
i__32039 = G__32041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32040),sablono$core$ordered_list32032_$_iter__32037.call(null,cljs.core.chunk_rest.call(null,s__32038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32040),null);
}
} else {
var x = cljs.core.first.call(null,s__32038__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32032_$_iter__32037.call(null,cljs.core.rest.call(null,s__32038__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32032);
/**
 * Create an image element.
 */
sablono.core.image32042 = (function sablono$core$image32042(var_args){
var args32043 = [];
var len__25835__auto___32046 = arguments.length;
var i__25836__auto___32047 = (0);
while(true){
if((i__25836__auto___32047 < len__25835__auto___32046)){
args32043.push((arguments[i__25836__auto___32047]));

var G__32048 = (i__25836__auto___32047 + (1));
i__25836__auto___32047 = G__32048;
continue;
} else {
}
break;
}

var G__32045 = args32043.length;
switch (G__32045) {
case 1:
return sablono.core.image32042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32043.length)].join('')));

}
});

sablono.core.image32042.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32042.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32042.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32042);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32050_SHARP_,p2__32051_SHARP_){
return [cljs.core.str(p1__32050_SHARP_),cljs.core.str("["),cljs.core.str(p2__32051_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32052_SHARP_,p2__32053_SHARP_){
return [cljs.core.str(p1__32052_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32053_SHARP_)].join('');
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
sablono.core.color_field32054 = (function sablono$core$color_field32054(var_args){
var args32055 = [];
var len__25835__auto___32122 = arguments.length;
var i__25836__auto___32123 = (0);
while(true){
if((i__25836__auto___32123 < len__25835__auto___32122)){
args32055.push((arguments[i__25836__auto___32123]));

var G__32124 = (i__25836__auto___32123 + (1));
i__25836__auto___32123 = G__32124;
continue;
} else {
}
break;
}

var G__32057 = args32055.length;
switch (G__32057) {
case 1:
return sablono.core.color_field32054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32055.length)].join('')));

}
});

sablono.core.color_field32054.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.color_field32054.call(null,name__31969__auto__,null);
});

sablono.core.color_field32054.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.color_field32054.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32054);

/**
 * Creates a date input field.
 */
sablono.core.date_field32058 = (function sablono$core$date_field32058(var_args){
var args32059 = [];
var len__25835__auto___32126 = arguments.length;
var i__25836__auto___32127 = (0);
while(true){
if((i__25836__auto___32127 < len__25835__auto___32126)){
args32059.push((arguments[i__25836__auto___32127]));

var G__32128 = (i__25836__auto___32127 + (1));
i__25836__auto___32127 = G__32128;
continue;
} else {
}
break;
}

var G__32061 = args32059.length;
switch (G__32061) {
case 1:
return sablono.core.date_field32058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32059.length)].join('')));

}
});

sablono.core.date_field32058.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.date_field32058.call(null,name__31969__auto__,null);
});

sablono.core.date_field32058.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.date_field32058.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32058);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32062 = (function sablono$core$datetime_field32062(var_args){
var args32063 = [];
var len__25835__auto___32130 = arguments.length;
var i__25836__auto___32131 = (0);
while(true){
if((i__25836__auto___32131 < len__25835__auto___32130)){
args32063.push((arguments[i__25836__auto___32131]));

var G__32132 = (i__25836__auto___32131 + (1));
i__25836__auto___32131 = G__32132;
continue;
} else {
}
break;
}

var G__32065 = args32063.length;
switch (G__32065) {
case 1:
return sablono.core.datetime_field32062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32063.length)].join('')));

}
});

sablono.core.datetime_field32062.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.datetime_field32062.call(null,name__31969__auto__,null);
});

sablono.core.datetime_field32062.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.datetime_field32062.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32062);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32066 = (function sablono$core$datetime_local_field32066(var_args){
var args32067 = [];
var len__25835__auto___32134 = arguments.length;
var i__25836__auto___32135 = (0);
while(true){
if((i__25836__auto___32135 < len__25835__auto___32134)){
args32067.push((arguments[i__25836__auto___32135]));

var G__32136 = (i__25836__auto___32135 + (1));
i__25836__auto___32135 = G__32136;
continue;
} else {
}
break;
}

var G__32069 = args32067.length;
switch (G__32069) {
case 1:
return sablono.core.datetime_local_field32066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32067.length)].join('')));

}
});

sablono.core.datetime_local_field32066.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.datetime_local_field32066.call(null,name__31969__auto__,null);
});

sablono.core.datetime_local_field32066.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.datetime_local_field32066.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32066);

/**
 * Creates a email input field.
 */
sablono.core.email_field32070 = (function sablono$core$email_field32070(var_args){
var args32071 = [];
var len__25835__auto___32138 = arguments.length;
var i__25836__auto___32139 = (0);
while(true){
if((i__25836__auto___32139 < len__25835__auto___32138)){
args32071.push((arguments[i__25836__auto___32139]));

var G__32140 = (i__25836__auto___32139 + (1));
i__25836__auto___32139 = G__32140;
continue;
} else {
}
break;
}

var G__32073 = args32071.length;
switch (G__32073) {
case 1:
return sablono.core.email_field32070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32071.length)].join('')));

}
});

sablono.core.email_field32070.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.email_field32070.call(null,name__31969__auto__,null);
});

sablono.core.email_field32070.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.email_field32070.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32070);

/**
 * Creates a file input field.
 */
sablono.core.file_field32074 = (function sablono$core$file_field32074(var_args){
var args32075 = [];
var len__25835__auto___32142 = arguments.length;
var i__25836__auto___32143 = (0);
while(true){
if((i__25836__auto___32143 < len__25835__auto___32142)){
args32075.push((arguments[i__25836__auto___32143]));

var G__32144 = (i__25836__auto___32143 + (1));
i__25836__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var G__32077 = args32075.length;
switch (G__32077) {
case 1:
return sablono.core.file_field32074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32075.length)].join('')));

}
});

sablono.core.file_field32074.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.file_field32074.call(null,name__31969__auto__,null);
});

sablono.core.file_field32074.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.file_field32074.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32074);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32078 = (function sablono$core$hidden_field32078(var_args){
var args32079 = [];
var len__25835__auto___32146 = arguments.length;
var i__25836__auto___32147 = (0);
while(true){
if((i__25836__auto___32147 < len__25835__auto___32146)){
args32079.push((arguments[i__25836__auto___32147]));

var G__32148 = (i__25836__auto___32147 + (1));
i__25836__auto___32147 = G__32148;
continue;
} else {
}
break;
}

var G__32081 = args32079.length;
switch (G__32081) {
case 1:
return sablono.core.hidden_field32078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32079.length)].join('')));

}
});

sablono.core.hidden_field32078.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.hidden_field32078.call(null,name__31969__auto__,null);
});

sablono.core.hidden_field32078.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.hidden_field32078.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32078);

/**
 * Creates a month input field.
 */
sablono.core.month_field32082 = (function sablono$core$month_field32082(var_args){
var args32083 = [];
var len__25835__auto___32150 = arguments.length;
var i__25836__auto___32151 = (0);
while(true){
if((i__25836__auto___32151 < len__25835__auto___32150)){
args32083.push((arguments[i__25836__auto___32151]));

var G__32152 = (i__25836__auto___32151 + (1));
i__25836__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var G__32085 = args32083.length;
switch (G__32085) {
case 1:
return sablono.core.month_field32082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32083.length)].join('')));

}
});

sablono.core.month_field32082.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.month_field32082.call(null,name__31969__auto__,null);
});

sablono.core.month_field32082.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.month_field32082.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32082);

/**
 * Creates a number input field.
 */
sablono.core.number_field32086 = (function sablono$core$number_field32086(var_args){
var args32087 = [];
var len__25835__auto___32154 = arguments.length;
var i__25836__auto___32155 = (0);
while(true){
if((i__25836__auto___32155 < len__25835__auto___32154)){
args32087.push((arguments[i__25836__auto___32155]));

var G__32156 = (i__25836__auto___32155 + (1));
i__25836__auto___32155 = G__32156;
continue;
} else {
}
break;
}

var G__32089 = args32087.length;
switch (G__32089) {
case 1:
return sablono.core.number_field32086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32087.length)].join('')));

}
});

sablono.core.number_field32086.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.number_field32086.call(null,name__31969__auto__,null);
});

sablono.core.number_field32086.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.number_field32086.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32086);

/**
 * Creates a password input field.
 */
sablono.core.password_field32090 = (function sablono$core$password_field32090(var_args){
var args32091 = [];
var len__25835__auto___32158 = arguments.length;
var i__25836__auto___32159 = (0);
while(true){
if((i__25836__auto___32159 < len__25835__auto___32158)){
args32091.push((arguments[i__25836__auto___32159]));

var G__32160 = (i__25836__auto___32159 + (1));
i__25836__auto___32159 = G__32160;
continue;
} else {
}
break;
}

var G__32093 = args32091.length;
switch (G__32093) {
case 1:
return sablono.core.password_field32090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32091.length)].join('')));

}
});

sablono.core.password_field32090.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.password_field32090.call(null,name__31969__auto__,null);
});

sablono.core.password_field32090.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.password_field32090.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32090);

/**
 * Creates a range input field.
 */
sablono.core.range_field32094 = (function sablono$core$range_field32094(var_args){
var args32095 = [];
var len__25835__auto___32162 = arguments.length;
var i__25836__auto___32163 = (0);
while(true){
if((i__25836__auto___32163 < len__25835__auto___32162)){
args32095.push((arguments[i__25836__auto___32163]));

var G__32164 = (i__25836__auto___32163 + (1));
i__25836__auto___32163 = G__32164;
continue;
} else {
}
break;
}

var G__32097 = args32095.length;
switch (G__32097) {
case 1:
return sablono.core.range_field32094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32095.length)].join('')));

}
});

sablono.core.range_field32094.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.range_field32094.call(null,name__31969__auto__,null);
});

sablono.core.range_field32094.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.range_field32094.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32094);

/**
 * Creates a search input field.
 */
sablono.core.search_field32098 = (function sablono$core$search_field32098(var_args){
var args32099 = [];
var len__25835__auto___32166 = arguments.length;
var i__25836__auto___32167 = (0);
while(true){
if((i__25836__auto___32167 < len__25835__auto___32166)){
args32099.push((arguments[i__25836__auto___32167]));

var G__32168 = (i__25836__auto___32167 + (1));
i__25836__auto___32167 = G__32168;
continue;
} else {
}
break;
}

var G__32101 = args32099.length;
switch (G__32101) {
case 1:
return sablono.core.search_field32098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32099.length)].join('')));

}
});

sablono.core.search_field32098.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.search_field32098.call(null,name__31969__auto__,null);
});

sablono.core.search_field32098.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.search_field32098.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32098);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32102 = (function sablono$core$tel_field32102(var_args){
var args32103 = [];
var len__25835__auto___32170 = arguments.length;
var i__25836__auto___32171 = (0);
while(true){
if((i__25836__auto___32171 < len__25835__auto___32170)){
args32103.push((arguments[i__25836__auto___32171]));

var G__32172 = (i__25836__auto___32171 + (1));
i__25836__auto___32171 = G__32172;
continue;
} else {
}
break;
}

var G__32105 = args32103.length;
switch (G__32105) {
case 1:
return sablono.core.tel_field32102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32103.length)].join('')));

}
});

sablono.core.tel_field32102.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.tel_field32102.call(null,name__31969__auto__,null);
});

sablono.core.tel_field32102.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.tel_field32102.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32102);

/**
 * Creates a text input field.
 */
sablono.core.text_field32106 = (function sablono$core$text_field32106(var_args){
var args32107 = [];
var len__25835__auto___32174 = arguments.length;
var i__25836__auto___32175 = (0);
while(true){
if((i__25836__auto___32175 < len__25835__auto___32174)){
args32107.push((arguments[i__25836__auto___32175]));

var G__32176 = (i__25836__auto___32175 + (1));
i__25836__auto___32175 = G__32176;
continue;
} else {
}
break;
}

var G__32109 = args32107.length;
switch (G__32109) {
case 1:
return sablono.core.text_field32106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32107.length)].join('')));

}
});

sablono.core.text_field32106.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.text_field32106.call(null,name__31969__auto__,null);
});

sablono.core.text_field32106.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.text_field32106.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32106);

/**
 * Creates a time input field.
 */
sablono.core.time_field32110 = (function sablono$core$time_field32110(var_args){
var args32111 = [];
var len__25835__auto___32178 = arguments.length;
var i__25836__auto___32179 = (0);
while(true){
if((i__25836__auto___32179 < len__25835__auto___32178)){
args32111.push((arguments[i__25836__auto___32179]));

var G__32180 = (i__25836__auto___32179 + (1));
i__25836__auto___32179 = G__32180;
continue;
} else {
}
break;
}

var G__32113 = args32111.length;
switch (G__32113) {
case 1:
return sablono.core.time_field32110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32111.length)].join('')));

}
});

sablono.core.time_field32110.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.time_field32110.call(null,name__31969__auto__,null);
});

sablono.core.time_field32110.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.time_field32110.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32110);

/**
 * Creates a url input field.
 */
sablono.core.url_field32114 = (function sablono$core$url_field32114(var_args){
var args32115 = [];
var len__25835__auto___32182 = arguments.length;
var i__25836__auto___32183 = (0);
while(true){
if((i__25836__auto___32183 < len__25835__auto___32182)){
args32115.push((arguments[i__25836__auto___32183]));

var G__32184 = (i__25836__auto___32183 + (1));
i__25836__auto___32183 = G__32184;
continue;
} else {
}
break;
}

var G__32117 = args32115.length;
switch (G__32117) {
case 1:
return sablono.core.url_field32114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32115.length)].join('')));

}
});

sablono.core.url_field32114.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.url_field32114.call(null,name__31969__auto__,null);
});

sablono.core.url_field32114.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.url_field32114.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32114);

/**
 * Creates a week input field.
 */
sablono.core.week_field32118 = (function sablono$core$week_field32118(var_args){
var args32119 = [];
var len__25835__auto___32186 = arguments.length;
var i__25836__auto___32187 = (0);
while(true){
if((i__25836__auto___32187 < len__25835__auto___32186)){
args32119.push((arguments[i__25836__auto___32187]));

var G__32188 = (i__25836__auto___32187 + (1));
i__25836__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var G__32121 = args32119.length;
switch (G__32121) {
case 1:
return sablono.core.week_field32118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32119.length)].join('')));

}
});

sablono.core.week_field32118.cljs$core$IFn$_invoke$arity$1 = (function (name__31969__auto__){
return sablono.core.week_field32118.call(null,name__31969__auto__,null);
});

sablono.core.week_field32118.cljs$core$IFn$_invoke$arity$2 = (function (name__31969__auto__,value__31970__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31969__auto__,value__31970__auto__);
});

sablono.core.week_field32118.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32118);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32190 = (function sablono$core$check_box32190(var_args){
var args32191 = [];
var len__25835__auto___32194 = arguments.length;
var i__25836__auto___32195 = (0);
while(true){
if((i__25836__auto___32195 < len__25835__auto___32194)){
args32191.push((arguments[i__25836__auto___32195]));

var G__32196 = (i__25836__auto___32195 + (1));
i__25836__auto___32195 = G__32196;
continue;
} else {
}
break;
}

var G__32193 = args32191.length;
switch (G__32193) {
case 1:
return sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32191.length)].join('')));

}
});

sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32190.call(null,name,null);
});

sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32190.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32190.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32190.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32190);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32198 = (function sablono$core$radio_button32198(var_args){
var args32199 = [];
var len__25835__auto___32202 = arguments.length;
var i__25836__auto___32203 = (0);
while(true){
if((i__25836__auto___32203 < len__25835__auto___32202)){
args32199.push((arguments[i__25836__auto___32203]));

var G__32204 = (i__25836__auto___32203 + (1));
i__25836__auto___32203 = G__32204;
continue;
} else {
}
break;
}

var G__32201 = args32199.length;
switch (G__32201) {
case 1:
return sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32199.length)].join('')));

}
});

sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32198.call(null,group,null);
});

sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32198.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32198.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32198.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32198);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32206 = (function sablono$core$select_options32206(coll){
var iter__25540__auto__ = (function sablono$core$select_options32206_$_iter__32223(s__32224){
return (new cljs.core.LazySeq(null,(function (){
var s__32224__$1 = s__32224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32224__$1);
if(temp__4657__auto__){
var s__32224__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32224__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__32224__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__32226 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__32225 = (0);
while(true){
if((i__32225 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__32225);
cljs.core.chunk_append.call(null,b__32226,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32233 = x;
var text = cljs.core.nth.call(null,vec__32233,(0),null);
var val = cljs.core.nth.call(null,vec__32233,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32233,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32206.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32239 = (i__32225 + (1));
i__32225 = G__32239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32226),sablono$core$select_options32206_$_iter__32223.call(null,cljs.core.chunk_rest.call(null,s__32224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32226),null);
}
} else {
var x = cljs.core.first.call(null,s__32224__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32236 = x;
var text = cljs.core.nth.call(null,vec__32236,(0),null);
var val = cljs.core.nth.call(null,vec__32236,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32236,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32206.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32206_$_iter__32223.call(null,cljs.core.rest.call(null,s__32224__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32206);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32240 = (function sablono$core$drop_down32240(var_args){
var args32241 = [];
var len__25835__auto___32244 = arguments.length;
var i__25836__auto___32245 = (0);
while(true){
if((i__25836__auto___32245 < len__25835__auto___32244)){
args32241.push((arguments[i__25836__auto___32245]));

var G__32246 = (i__25836__auto___32245 + (1));
i__25836__auto___32245 = G__32246;
continue;
} else {
}
break;
}

var G__32243 = args32241.length;
switch (G__32243) {
case 2:
return sablono.core.drop_down32240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32240.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32241.length)].join('')));

}
});

sablono.core.drop_down32240.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32240.call(null,name,options,null);
});

sablono.core.drop_down32240.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32240.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32240);
/**
 * Creates a text area element.
 */
sablono.core.text_area32248 = (function sablono$core$text_area32248(var_args){
var args32249 = [];
var len__25835__auto___32252 = arguments.length;
var i__25836__auto___32253 = (0);
while(true){
if((i__25836__auto___32253 < len__25835__auto___32252)){
args32249.push((arguments[i__25836__auto___32253]));

var G__32254 = (i__25836__auto___32253 + (1));
i__25836__auto___32253 = G__32254;
continue;
} else {
}
break;
}

var G__32251 = args32249.length;
switch (G__32251) {
case 1:
return sablono.core.text_area32248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32249.length)].join('')));

}
});

sablono.core.text_area32248.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32248.call(null,name,null);
});

sablono.core.text_area32248.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32248.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32248);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32256 = (function sablono$core$label32256(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32256);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32257 = (function sablono$core$submit_button32257(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32257);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32258 = (function sablono$core$reset_button32258(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32258);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32259 = (function sablono$core$form_to32259(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32266 = arguments.length;
var i__25836__auto___32267 = (0);
while(true){
if((i__25836__auto___32267 < len__25835__auto___32266)){
args__25842__auto__.push((arguments[i__25836__auto___32267]));

var G__32268 = (i__25836__auto___32267 + (1));
i__25836__auto___32267 = G__32268;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32259.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.form_to32259.cljs$core$IFn$_invoke$arity$variadic = (function (p__32262,body){
var vec__32263 = p__32262;
var method = cljs.core.nth.call(null,vec__32263,(0),null);
var action = cljs.core.nth.call(null,vec__32263,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32259.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32259.cljs$lang$applyTo = (function (seq32260){
var G__32261 = cljs.core.first.call(null,seq32260);
var seq32260__$1 = cljs.core.next.call(null,seq32260);
return sablono.core.form_to32259.cljs$core$IFn$_invoke$arity$variadic(G__32261,seq32260__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32259);

//# sourceMappingURL=core.js.map?rel=1488930772993