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
var G__25941__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25938 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25939 = cljs.core.seq.call(null,vec__25938);
var first__25940 = cljs.core.first.call(null,seq__25939);
var seq__25939__$1 = cljs.core.next.call(null,seq__25939);
var tag = first__25940;
var body = seq__25939__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25942__i = 0, G__25942__a = new Array(arguments.length -  0);
while (G__25942__i < G__25942__a.length) {G__25942__a[G__25942__i] = arguments[G__25942__i + 0]; ++G__25942__i;}
  args = new cljs.core.IndexedSeq(G__25942__a,0);
} 
return G__25941__delegate.call(this,args);};
G__25941.cljs$lang$maxFixedArity = 0;
G__25941.cljs$lang$applyTo = (function (arglist__25943){
var args = cljs.core.seq(arglist__25943);
return G__25941__delegate(args);
});
G__25941.cljs$core$IFn$_invoke$arity$variadic = G__25941__delegate;
return G__25941;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19496__auto__ = (function sablono$core$update_arglists_$_iter__25948(s__25949){
return (new cljs.core.LazySeq(null,(function (){
var s__25949__$1 = s__25949;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25949__$1);
if(temp__4657__auto__){
var s__25949__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25949__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__25949__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__25951 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__25950 = (0);
while(true){
if((i__25950 < size__19495__auto__)){
var args = cljs.core._nth.call(null,c__19494__auto__,i__25950);
cljs.core.chunk_append.call(null,b__25951,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25952 = (i__25950 + (1));
i__25950 = G__25952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25951),sablono$core$update_arglists_$_iter__25948.call(null,cljs.core.chunk_rest.call(null,s__25949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25951),null);
}
} else {
var args = cljs.core.first.call(null,s__25949__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25948.call(null,cljs.core.rest.call(null,s__25949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19496__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19798__auto__ = [];
var len__19791__auto___25958 = arguments.length;
var i__19792__auto___25959 = (0);
while(true){
if((i__19792__auto___25959 < len__19791__auto___25958)){
args__19798__auto__.push((arguments[i__19792__auto___25959]));

var G__25960 = (i__19792__auto___25959 + (1));
i__19792__auto___25959 = G__25960;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19496__auto__ = (function sablono$core$iter__25954(s__25955){
return (new cljs.core.LazySeq(null,(function (){
var s__25955__$1 = s__25955;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25955__$1);
if(temp__4657__auto__){
var s__25955__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25955__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__25955__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__25957 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__25956 = (0);
while(true){
if((i__25956 < size__19495__auto__)){
var style = cljs.core._nth.call(null,c__19494__auto__,i__25956);
cljs.core.chunk_append.call(null,b__25957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25961 = (i__25956 + (1));
i__25956 = G__25961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25957),sablono$core$iter__25954.call(null,cljs.core.chunk_rest.call(null,s__25955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25957),null);
}
} else {
var style = cljs.core.first.call(null,s__25955__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25954.call(null,cljs.core.rest.call(null,s__25955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19496__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25953){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25953));
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
sablono.core.link_to25962 = (function sablono$core$link_to25962(var_args){
var args__19798__auto__ = [];
var len__19791__auto___25965 = arguments.length;
var i__19792__auto___25966 = (0);
while(true){
if((i__19792__auto___25966 < len__19791__auto___25965)){
args__19798__auto__.push((arguments[i__19792__auto___25966]));

var G__25967 = (i__19792__auto___25966 + (1));
i__19792__auto___25966 = G__25967;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((1) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25962.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19799__auto__);
});

sablono.core.link_to25962.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25962.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25962.cljs$lang$applyTo = (function (seq25963){
var G__25964 = cljs.core.first.call(null,seq25963);
var seq25963__$1 = cljs.core.next.call(null,seq25963);
return sablono.core.link_to25962.cljs$core$IFn$_invoke$arity$variadic(G__25964,seq25963__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25962);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25968 = (function sablono$core$mail_to25968(var_args){
var args__19798__auto__ = [];
var len__19791__auto___25975 = arguments.length;
var i__19792__auto___25976 = (0);
while(true){
if((i__19792__auto___25976 < len__19791__auto___25975)){
args__19798__auto__.push((arguments[i__19792__auto___25976]));

var G__25977 = (i__19792__auto___25976 + (1));
i__19792__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((1) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25968.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19799__auto__);
});

sablono.core.mail_to25968.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25971){
var vec__25972 = p__25971;
var content = cljs.core.nth.call(null,vec__25972,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18716__auto__ = content;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25968.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25968.cljs$lang$applyTo = (function (seq25969){
var G__25970 = cljs.core.first.call(null,seq25969);
var seq25969__$1 = cljs.core.next.call(null,seq25969);
return sablono.core.mail_to25968.cljs$core$IFn$_invoke$arity$variadic(G__25970,seq25969__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25968);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25978 = (function sablono$core$unordered_list25978(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19496__auto__ = (function sablono$core$unordered_list25978_$_iter__25983(s__25984){
return (new cljs.core.LazySeq(null,(function (){
var s__25984__$1 = s__25984;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25984__$1);
if(temp__4657__auto__){
var s__25984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25984__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__25984__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__25986 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__25985 = (0);
while(true){
if((i__25985 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__25985);
cljs.core.chunk_append.call(null,b__25986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25987 = (i__25985 + (1));
i__25985 = G__25987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25986),sablono$core$unordered_list25978_$_iter__25983.call(null,cljs.core.chunk_rest.call(null,s__25984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25986),null);
}
} else {
var x = cljs.core.first.call(null,s__25984__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25978_$_iter__25983.call(null,cljs.core.rest.call(null,s__25984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19496__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25978);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25988 = (function sablono$core$ordered_list25988(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19496__auto__ = (function sablono$core$ordered_list25988_$_iter__25993(s__25994){
return (new cljs.core.LazySeq(null,(function (){
var s__25994__$1 = s__25994;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25994__$1);
if(temp__4657__auto__){
var s__25994__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25994__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__25994__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__25996 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__25995 = (0);
while(true){
if((i__25995 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__25995);
cljs.core.chunk_append.call(null,b__25996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25997 = (i__25995 + (1));
i__25995 = G__25997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25996),sablono$core$ordered_list25988_$_iter__25993.call(null,cljs.core.chunk_rest.call(null,s__25994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25996),null);
}
} else {
var x = cljs.core.first.call(null,s__25994__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25988_$_iter__25993.call(null,cljs.core.rest.call(null,s__25994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19496__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25988);
/**
 * Create an image element.
 */
sablono.core.image25998 = (function sablono$core$image25998(var_args){
var args25999 = [];
var len__19791__auto___26002 = arguments.length;
var i__19792__auto___26003 = (0);
while(true){
if((i__19792__auto___26003 < len__19791__auto___26002)){
args25999.push((arguments[i__19792__auto___26003]));

var G__26004 = (i__19792__auto___26003 + (1));
i__19792__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var G__26001 = args25999.length;
switch (G__26001) {
case 1:
return sablono.core.image25998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25999.length)].join('')));

}
});

sablono.core.image25998.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25998.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25998.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25998);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26006_SHARP_,p2__26007_SHARP_){
return [cljs.core.str(p1__26006_SHARP_),cljs.core.str("["),cljs.core.str(p2__26007_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26008_SHARP_,p2__26009_SHARP_){
return [cljs.core.str(p1__26008_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26009_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18716__auto__ = value;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26010 = (function sablono$core$color_field26010(var_args){
var args26011 = [];
var len__19791__auto___26078 = arguments.length;
var i__19792__auto___26079 = (0);
while(true){
if((i__19792__auto___26079 < len__19791__auto___26078)){
args26011.push((arguments[i__19792__auto___26079]));

var G__26080 = (i__19792__auto___26079 + (1));
i__19792__auto___26079 = G__26080;
continue;
} else {
}
break;
}

var G__26013 = args26011.length;
switch (G__26013) {
case 1:
return sablono.core.color_field26010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26011.length)].join('')));

}
});

sablono.core.color_field26010.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.color_field26010.call(null,name__25925__auto__,null);
});

sablono.core.color_field26010.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.color_field26010.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26010);

/**
 * Creates a date input field.
 */
sablono.core.date_field26014 = (function sablono$core$date_field26014(var_args){
var args26015 = [];
var len__19791__auto___26082 = arguments.length;
var i__19792__auto___26083 = (0);
while(true){
if((i__19792__auto___26083 < len__19791__auto___26082)){
args26015.push((arguments[i__19792__auto___26083]));

var G__26084 = (i__19792__auto___26083 + (1));
i__19792__auto___26083 = G__26084;
continue;
} else {
}
break;
}

var G__26017 = args26015.length;
switch (G__26017) {
case 1:
return sablono.core.date_field26014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26015.length)].join('')));

}
});

sablono.core.date_field26014.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.date_field26014.call(null,name__25925__auto__,null);
});

sablono.core.date_field26014.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.date_field26014.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26014);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26018 = (function sablono$core$datetime_field26018(var_args){
var args26019 = [];
var len__19791__auto___26086 = arguments.length;
var i__19792__auto___26087 = (0);
while(true){
if((i__19792__auto___26087 < len__19791__auto___26086)){
args26019.push((arguments[i__19792__auto___26087]));

var G__26088 = (i__19792__auto___26087 + (1));
i__19792__auto___26087 = G__26088;
continue;
} else {
}
break;
}

var G__26021 = args26019.length;
switch (G__26021) {
case 1:
return sablono.core.datetime_field26018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26019.length)].join('')));

}
});

sablono.core.datetime_field26018.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.datetime_field26018.call(null,name__25925__auto__,null);
});

sablono.core.datetime_field26018.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.datetime_field26018.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26018);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26022 = (function sablono$core$datetime_local_field26022(var_args){
var args26023 = [];
var len__19791__auto___26090 = arguments.length;
var i__19792__auto___26091 = (0);
while(true){
if((i__19792__auto___26091 < len__19791__auto___26090)){
args26023.push((arguments[i__19792__auto___26091]));

var G__26092 = (i__19792__auto___26091 + (1));
i__19792__auto___26091 = G__26092;
continue;
} else {
}
break;
}

var G__26025 = args26023.length;
switch (G__26025) {
case 1:
return sablono.core.datetime_local_field26022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26023.length)].join('')));

}
});

sablono.core.datetime_local_field26022.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.datetime_local_field26022.call(null,name__25925__auto__,null);
});

sablono.core.datetime_local_field26022.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.datetime_local_field26022.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26022);

/**
 * Creates a email input field.
 */
sablono.core.email_field26026 = (function sablono$core$email_field26026(var_args){
var args26027 = [];
var len__19791__auto___26094 = arguments.length;
var i__19792__auto___26095 = (0);
while(true){
if((i__19792__auto___26095 < len__19791__auto___26094)){
args26027.push((arguments[i__19792__auto___26095]));

var G__26096 = (i__19792__auto___26095 + (1));
i__19792__auto___26095 = G__26096;
continue;
} else {
}
break;
}

var G__26029 = args26027.length;
switch (G__26029) {
case 1:
return sablono.core.email_field26026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26027.length)].join('')));

}
});

sablono.core.email_field26026.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.email_field26026.call(null,name__25925__auto__,null);
});

sablono.core.email_field26026.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.email_field26026.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26026);

/**
 * Creates a file input field.
 */
sablono.core.file_field26030 = (function sablono$core$file_field26030(var_args){
var args26031 = [];
var len__19791__auto___26098 = arguments.length;
var i__19792__auto___26099 = (0);
while(true){
if((i__19792__auto___26099 < len__19791__auto___26098)){
args26031.push((arguments[i__19792__auto___26099]));

var G__26100 = (i__19792__auto___26099 + (1));
i__19792__auto___26099 = G__26100;
continue;
} else {
}
break;
}

var G__26033 = args26031.length;
switch (G__26033) {
case 1:
return sablono.core.file_field26030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26031.length)].join('')));

}
});

sablono.core.file_field26030.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.file_field26030.call(null,name__25925__auto__,null);
});

sablono.core.file_field26030.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.file_field26030.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26030);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26034 = (function sablono$core$hidden_field26034(var_args){
var args26035 = [];
var len__19791__auto___26102 = arguments.length;
var i__19792__auto___26103 = (0);
while(true){
if((i__19792__auto___26103 < len__19791__auto___26102)){
args26035.push((arguments[i__19792__auto___26103]));

var G__26104 = (i__19792__auto___26103 + (1));
i__19792__auto___26103 = G__26104;
continue;
} else {
}
break;
}

var G__26037 = args26035.length;
switch (G__26037) {
case 1:
return sablono.core.hidden_field26034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26035.length)].join('')));

}
});

sablono.core.hidden_field26034.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.hidden_field26034.call(null,name__25925__auto__,null);
});

sablono.core.hidden_field26034.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.hidden_field26034.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26034);

/**
 * Creates a month input field.
 */
sablono.core.month_field26038 = (function sablono$core$month_field26038(var_args){
var args26039 = [];
var len__19791__auto___26106 = arguments.length;
var i__19792__auto___26107 = (0);
while(true){
if((i__19792__auto___26107 < len__19791__auto___26106)){
args26039.push((arguments[i__19792__auto___26107]));

var G__26108 = (i__19792__auto___26107 + (1));
i__19792__auto___26107 = G__26108;
continue;
} else {
}
break;
}

var G__26041 = args26039.length;
switch (G__26041) {
case 1:
return sablono.core.month_field26038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26039.length)].join('')));

}
});

sablono.core.month_field26038.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.month_field26038.call(null,name__25925__auto__,null);
});

sablono.core.month_field26038.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.month_field26038.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26038);

/**
 * Creates a number input field.
 */
sablono.core.number_field26042 = (function sablono$core$number_field26042(var_args){
var args26043 = [];
var len__19791__auto___26110 = arguments.length;
var i__19792__auto___26111 = (0);
while(true){
if((i__19792__auto___26111 < len__19791__auto___26110)){
args26043.push((arguments[i__19792__auto___26111]));

var G__26112 = (i__19792__auto___26111 + (1));
i__19792__auto___26111 = G__26112;
continue;
} else {
}
break;
}

var G__26045 = args26043.length;
switch (G__26045) {
case 1:
return sablono.core.number_field26042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26043.length)].join('')));

}
});

sablono.core.number_field26042.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.number_field26042.call(null,name__25925__auto__,null);
});

sablono.core.number_field26042.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.number_field26042.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26042);

/**
 * Creates a password input field.
 */
sablono.core.password_field26046 = (function sablono$core$password_field26046(var_args){
var args26047 = [];
var len__19791__auto___26114 = arguments.length;
var i__19792__auto___26115 = (0);
while(true){
if((i__19792__auto___26115 < len__19791__auto___26114)){
args26047.push((arguments[i__19792__auto___26115]));

var G__26116 = (i__19792__auto___26115 + (1));
i__19792__auto___26115 = G__26116;
continue;
} else {
}
break;
}

var G__26049 = args26047.length;
switch (G__26049) {
case 1:
return sablono.core.password_field26046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26047.length)].join('')));

}
});

sablono.core.password_field26046.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.password_field26046.call(null,name__25925__auto__,null);
});

sablono.core.password_field26046.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.password_field26046.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26046);

/**
 * Creates a range input field.
 */
sablono.core.range_field26050 = (function sablono$core$range_field26050(var_args){
var args26051 = [];
var len__19791__auto___26118 = arguments.length;
var i__19792__auto___26119 = (0);
while(true){
if((i__19792__auto___26119 < len__19791__auto___26118)){
args26051.push((arguments[i__19792__auto___26119]));

var G__26120 = (i__19792__auto___26119 + (1));
i__19792__auto___26119 = G__26120;
continue;
} else {
}
break;
}

var G__26053 = args26051.length;
switch (G__26053) {
case 1:
return sablono.core.range_field26050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26051.length)].join('')));

}
});

sablono.core.range_field26050.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.range_field26050.call(null,name__25925__auto__,null);
});

sablono.core.range_field26050.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.range_field26050.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26050);

/**
 * Creates a search input field.
 */
sablono.core.search_field26054 = (function sablono$core$search_field26054(var_args){
var args26055 = [];
var len__19791__auto___26122 = arguments.length;
var i__19792__auto___26123 = (0);
while(true){
if((i__19792__auto___26123 < len__19791__auto___26122)){
args26055.push((arguments[i__19792__auto___26123]));

var G__26124 = (i__19792__auto___26123 + (1));
i__19792__auto___26123 = G__26124;
continue;
} else {
}
break;
}

var G__26057 = args26055.length;
switch (G__26057) {
case 1:
return sablono.core.search_field26054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26055.length)].join('')));

}
});

sablono.core.search_field26054.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.search_field26054.call(null,name__25925__auto__,null);
});

sablono.core.search_field26054.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.search_field26054.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26054);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26058 = (function sablono$core$tel_field26058(var_args){
var args26059 = [];
var len__19791__auto___26126 = arguments.length;
var i__19792__auto___26127 = (0);
while(true){
if((i__19792__auto___26127 < len__19791__auto___26126)){
args26059.push((arguments[i__19792__auto___26127]));

var G__26128 = (i__19792__auto___26127 + (1));
i__19792__auto___26127 = G__26128;
continue;
} else {
}
break;
}

var G__26061 = args26059.length;
switch (G__26061) {
case 1:
return sablono.core.tel_field26058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26059.length)].join('')));

}
});

sablono.core.tel_field26058.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.tel_field26058.call(null,name__25925__auto__,null);
});

sablono.core.tel_field26058.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.tel_field26058.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26058);

/**
 * Creates a text input field.
 */
sablono.core.text_field26062 = (function sablono$core$text_field26062(var_args){
var args26063 = [];
var len__19791__auto___26130 = arguments.length;
var i__19792__auto___26131 = (0);
while(true){
if((i__19792__auto___26131 < len__19791__auto___26130)){
args26063.push((arguments[i__19792__auto___26131]));

var G__26132 = (i__19792__auto___26131 + (1));
i__19792__auto___26131 = G__26132;
continue;
} else {
}
break;
}

var G__26065 = args26063.length;
switch (G__26065) {
case 1:
return sablono.core.text_field26062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26063.length)].join('')));

}
});

sablono.core.text_field26062.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.text_field26062.call(null,name__25925__auto__,null);
});

sablono.core.text_field26062.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.text_field26062.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26062);

/**
 * Creates a time input field.
 */
sablono.core.time_field26066 = (function sablono$core$time_field26066(var_args){
var args26067 = [];
var len__19791__auto___26134 = arguments.length;
var i__19792__auto___26135 = (0);
while(true){
if((i__19792__auto___26135 < len__19791__auto___26134)){
args26067.push((arguments[i__19792__auto___26135]));

var G__26136 = (i__19792__auto___26135 + (1));
i__19792__auto___26135 = G__26136;
continue;
} else {
}
break;
}

var G__26069 = args26067.length;
switch (G__26069) {
case 1:
return sablono.core.time_field26066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26067.length)].join('')));

}
});

sablono.core.time_field26066.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.time_field26066.call(null,name__25925__auto__,null);
});

sablono.core.time_field26066.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.time_field26066.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26066);

/**
 * Creates a url input field.
 */
sablono.core.url_field26070 = (function sablono$core$url_field26070(var_args){
var args26071 = [];
var len__19791__auto___26138 = arguments.length;
var i__19792__auto___26139 = (0);
while(true){
if((i__19792__auto___26139 < len__19791__auto___26138)){
args26071.push((arguments[i__19792__auto___26139]));

var G__26140 = (i__19792__auto___26139 + (1));
i__19792__auto___26139 = G__26140;
continue;
} else {
}
break;
}

var G__26073 = args26071.length;
switch (G__26073) {
case 1:
return sablono.core.url_field26070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26071.length)].join('')));

}
});

sablono.core.url_field26070.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.url_field26070.call(null,name__25925__auto__,null);
});

sablono.core.url_field26070.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.url_field26070.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26070);

/**
 * Creates a week input field.
 */
sablono.core.week_field26074 = (function sablono$core$week_field26074(var_args){
var args26075 = [];
var len__19791__auto___26142 = arguments.length;
var i__19792__auto___26143 = (0);
while(true){
if((i__19792__auto___26143 < len__19791__auto___26142)){
args26075.push((arguments[i__19792__auto___26143]));

var G__26144 = (i__19792__auto___26143 + (1));
i__19792__auto___26143 = G__26144;
continue;
} else {
}
break;
}

var G__26077 = args26075.length;
switch (G__26077) {
case 1:
return sablono.core.week_field26074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26075.length)].join('')));

}
});

sablono.core.week_field26074.cljs$core$IFn$_invoke$arity$1 = (function (name__25925__auto__){
return sablono.core.week_field26074.call(null,name__25925__auto__,null);
});

sablono.core.week_field26074.cljs$core$IFn$_invoke$arity$2 = (function (name__25925__auto__,value__25926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25925__auto__,value__25926__auto__);
});

sablono.core.week_field26074.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26074);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26146 = (function sablono$core$check_box26146(var_args){
var args26147 = [];
var len__19791__auto___26150 = arguments.length;
var i__19792__auto___26151 = (0);
while(true){
if((i__19792__auto___26151 < len__19791__auto___26150)){
args26147.push((arguments[i__19792__auto___26151]));

var G__26152 = (i__19792__auto___26151 + (1));
i__19792__auto___26151 = G__26152;
continue;
} else {
}
break;
}

var G__26149 = args26147.length;
switch (G__26149) {
case 1:
return sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26147.length)].join('')));

}
});

sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26146.call(null,name,null);
});

sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26146.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26146.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18716__auto__ = value;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26146.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26146);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26154 = (function sablono$core$radio_button26154(var_args){
var args26155 = [];
var len__19791__auto___26158 = arguments.length;
var i__19792__auto___26159 = (0);
while(true){
if((i__19792__auto___26159 < len__19791__auto___26158)){
args26155.push((arguments[i__19792__auto___26159]));

var G__26160 = (i__19792__auto___26159 + (1));
i__19792__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var G__26157 = args26155.length;
switch (G__26157) {
case 1:
return sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26155.length)].join('')));

}
});

sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26154.call(null,group,null);
});

sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26154.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26154.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18716__auto__ = value;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26154.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26154);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26162 = (function sablono$core$select_options26162(coll){
var iter__19496__auto__ = (function sablono$core$select_options26162_$_iter__26179(s__26180){
return (new cljs.core.LazySeq(null,(function (){
var s__26180__$1 = s__26180;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26180__$1);
if(temp__4657__auto__){
var s__26180__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26180__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__26180__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__26182 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__26181 = (0);
while(true){
if((i__26181 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__26181);
cljs.core.chunk_append.call(null,b__26182,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26189 = x;
var text = cljs.core.nth.call(null,vec__26189,(0),null);
var val = cljs.core.nth.call(null,vec__26189,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26189,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26162.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26195 = (i__26181 + (1));
i__26181 = G__26195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26182),sablono$core$select_options26162_$_iter__26179.call(null,cljs.core.chunk_rest.call(null,s__26180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26182),null);
}
} else {
var x = cljs.core.first.call(null,s__26180__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26192 = x;
var text = cljs.core.nth.call(null,vec__26192,(0),null);
var val = cljs.core.nth.call(null,vec__26192,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26192,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26162.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26162_$_iter__26179.call(null,cljs.core.rest.call(null,s__26180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19496__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26162);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26196 = (function sablono$core$drop_down26196(var_args){
var args26197 = [];
var len__19791__auto___26200 = arguments.length;
var i__19792__auto___26201 = (0);
while(true){
if((i__19792__auto___26201 < len__19791__auto___26200)){
args26197.push((arguments[i__19792__auto___26201]));

var G__26202 = (i__19792__auto___26201 + (1));
i__19792__auto___26201 = G__26202;
continue;
} else {
}
break;
}

var G__26199 = args26197.length;
switch (G__26199) {
case 2:
return sablono.core.drop_down26196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26196.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26197.length)].join('')));

}
});

sablono.core.drop_down26196.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26196.call(null,name,options,null);
});

sablono.core.drop_down26196.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26196.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26196);
/**
 * Creates a text area element.
 */
sablono.core.text_area26204 = (function sablono$core$text_area26204(var_args){
var args26205 = [];
var len__19791__auto___26208 = arguments.length;
var i__19792__auto___26209 = (0);
while(true){
if((i__19792__auto___26209 < len__19791__auto___26208)){
args26205.push((arguments[i__19792__auto___26209]));

var G__26210 = (i__19792__auto___26209 + (1));
i__19792__auto___26209 = G__26210;
continue;
} else {
}
break;
}

var G__26207 = args26205.length;
switch (G__26207) {
case 1:
return sablono.core.text_area26204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26205.length)].join('')));

}
});

sablono.core.text_area26204.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26204.call(null,name,null);
});

sablono.core.text_area26204.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18716__auto__ = value;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26204.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26204);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26212 = (function sablono$core$label26212(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26212);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26213 = (function sablono$core$submit_button26213(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26213);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26214 = (function sablono$core$reset_button26214(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26214);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26215 = (function sablono$core$form_to26215(var_args){
var args__19798__auto__ = [];
var len__19791__auto___26222 = arguments.length;
var i__19792__auto___26223 = (0);
while(true){
if((i__19792__auto___26223 < len__19791__auto___26222)){
args__19798__auto__.push((arguments[i__19792__auto___26223]));

var G__26224 = (i__19792__auto___26223 + (1));
i__19792__auto___26223 = G__26224;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((1) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26215.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19799__auto__);
});

sablono.core.form_to26215.cljs$core$IFn$_invoke$arity$variadic = (function (p__26218,body){
var vec__26219 = p__26218;
var method = cljs.core.nth.call(null,vec__26219,(0),null);
var action = cljs.core.nth.call(null,vec__26219,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26215.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26215.cljs$lang$applyTo = (function (seq26216){
var G__26217 = cljs.core.first.call(null,seq26216);
var seq26216__$1 = cljs.core.next.call(null,seq26216);
return sablono.core.form_to26215.cljs$core$IFn$_invoke$arity$variadic(G__26217,seq26216__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26215);

//# sourceMappingURL=core.js.map?rel=1474300061866