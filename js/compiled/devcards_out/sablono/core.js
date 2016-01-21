// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23733__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23732 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__23732,(0),null);
var body = cljs.core.nthnext.call(null,vec__23732,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23734__i = 0, G__23734__a = new Array(arguments.length -  0);
while (G__23734__i < G__23734__a.length) {G__23734__a[G__23734__i] = arguments[G__23734__i + 0]; ++G__23734__i;}
  args = new cljs.core.IndexedSeq(G__23734__a,0);
} 
return G__23733__delegate.call(this,args);};
G__23733.cljs$lang$maxFixedArity = 0;
G__23733.cljs$lang$applyTo = (function (arglist__23735){
var args = cljs.core.seq(arglist__23735);
return G__23733__delegate(args);
});
G__23733.cljs$core$IFn$_invoke$arity$variadic = G__23733__delegate;
return G__23733;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17624__auto__ = (function sablono$core$update_arglists_$_iter__23740(s__23741){
return (new cljs.core.LazySeq(null,(function (){
var s__23741__$1 = s__23741;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23741__$1);
if(temp__4425__auto__){
var s__23741__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23741__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__23741__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__23743 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__23742 = (0);
while(true){
if((i__23742 < size__17623__auto__)){
var args = cljs.core._nth.call(null,c__17622__auto__,i__23742);
cljs.core.chunk_append.call(null,b__23743,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23744 = (i__23742 + (1));
i__23742 = G__23744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23743),sablono$core$update_arglists_$_iter__23740.call(null,cljs.core.chunk_rest.call(null,s__23741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23743),null);
}
} else {
var args = cljs.core.first.call(null,s__23741__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23740.call(null,cljs.core.rest.call(null,s__23741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23750 = arguments.length;
var i__17911__auto___23751 = (0);
while(true){
if((i__17911__auto___23751 < len__17910__auto___23750)){
args__17917__auto__.push((arguments[i__17911__auto___23751]));

var G__23752 = (i__17911__auto___23751 + (1));
i__17911__auto___23751 = G__23752;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17624__auto__ = (function sablono$core$iter__23746(s__23747){
return (new cljs.core.LazySeq(null,(function (){
var s__23747__$1 = s__23747;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23747__$1);
if(temp__4425__auto__){
var s__23747__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23747__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__23747__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__23749 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__23748 = (0);
while(true){
if((i__23748 < size__17623__auto__)){
var style = cljs.core._nth.call(null,c__17622__auto__,i__23748);
cljs.core.chunk_append.call(null,b__23749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23753 = (i__23748 + (1));
i__23748 = G__23753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23749),sablono$core$iter__23746.call(null,cljs.core.chunk_rest.call(null,s__23747__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23749),null);
}
} else {
var style = cljs.core.first.call(null,s__23747__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23746.call(null,cljs.core.rest.call(null,s__23747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq23745){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23745));
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
sablono.core.link_to23754 = (function sablono$core$link_to23754(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23757 = arguments.length;
var i__17911__auto___23758 = (0);
while(true){
if((i__17911__auto___23758 < len__17910__auto___23757)){
args__17917__auto__.push((arguments[i__17911__auto___23758]));

var G__23759 = (i__17911__auto___23758 + (1));
i__17911__auto___23758 = G__23759;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return sablono.core.link_to23754.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

sablono.core.link_to23754.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23754.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23754.cljs$lang$applyTo = (function (seq23755){
var G__23756 = cljs.core.first.call(null,seq23755);
var seq23755__$1 = cljs.core.next.call(null,seq23755);
return sablono.core.link_to23754.cljs$core$IFn$_invoke$arity$variadic(G__23756,seq23755__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23754);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23760 = (function sablono$core$mail_to23760(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23765 = arguments.length;
var i__17911__auto___23766 = (0);
while(true){
if((i__17911__auto___23766 < len__17910__auto___23765)){
args__17917__auto__.push((arguments[i__17911__auto___23766]));

var G__23767 = (i__17911__auto___23766 + (1));
i__17911__auto___23766 = G__23767;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return sablono.core.mail_to23760.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

sablono.core.mail_to23760.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23763){
var vec__23764 = p__23763;
var content = cljs.core.nth.call(null,vec__23764,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16852__auto__ = content;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23760.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23760.cljs$lang$applyTo = (function (seq23761){
var G__23762 = cljs.core.first.call(null,seq23761);
var seq23761__$1 = cljs.core.next.call(null,seq23761);
return sablono.core.mail_to23760.cljs$core$IFn$_invoke$arity$variadic(G__23762,seq23761__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23760);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23768 = (function sablono$core$unordered_list23768(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17624__auto__ = (function sablono$core$unordered_list23768_$_iter__23773(s__23774){
return (new cljs.core.LazySeq(null,(function (){
var s__23774__$1 = s__23774;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23774__$1);
if(temp__4425__auto__){
var s__23774__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23774__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__23774__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__23776 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__23775 = (0);
while(true){
if((i__23775 < size__17623__auto__)){
var x = cljs.core._nth.call(null,c__17622__auto__,i__23775);
cljs.core.chunk_append.call(null,b__23776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23777 = (i__23775 + (1));
i__23775 = G__23777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23776),sablono$core$unordered_list23768_$_iter__23773.call(null,cljs.core.chunk_rest.call(null,s__23774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23776),null);
}
} else {
var x = cljs.core.first.call(null,s__23774__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23768_$_iter__23773.call(null,cljs.core.rest.call(null,s__23774__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23768);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23778 = (function sablono$core$ordered_list23778(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17624__auto__ = (function sablono$core$ordered_list23778_$_iter__23783(s__23784){
return (new cljs.core.LazySeq(null,(function (){
var s__23784__$1 = s__23784;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23784__$1);
if(temp__4425__auto__){
var s__23784__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23784__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__23784__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__23786 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__23785 = (0);
while(true){
if((i__23785 < size__17623__auto__)){
var x = cljs.core._nth.call(null,c__17622__auto__,i__23785);
cljs.core.chunk_append.call(null,b__23786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23787 = (i__23785 + (1));
i__23785 = G__23787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23786),sablono$core$ordered_list23778_$_iter__23783.call(null,cljs.core.chunk_rest.call(null,s__23784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23786),null);
}
} else {
var x = cljs.core.first.call(null,s__23784__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23778_$_iter__23783.call(null,cljs.core.rest.call(null,s__23784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23778);
/**
 * Create an image element.
 */
sablono.core.image23788 = (function sablono$core$image23788(var_args){
var args23789 = [];
var len__17910__auto___23792 = arguments.length;
var i__17911__auto___23793 = (0);
while(true){
if((i__17911__auto___23793 < len__17910__auto___23792)){
args23789.push((arguments[i__17911__auto___23793]));

var G__23794 = (i__17911__auto___23793 + (1));
i__17911__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var G__23791 = args23789.length;
switch (G__23791) {
case 1:
return sablono.core.image23788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23789.length)].join('')));

}
});

sablono.core.image23788.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23788.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23788.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23788);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23796_SHARP_,p2__23797_SHARP_){
return [cljs.core.str(p1__23796_SHARP_),cljs.core.str("["),cljs.core.str(p2__23797_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23798_SHARP_,p2__23799_SHARP_){
return [cljs.core.str(p1__23798_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23799_SHARP_)].join('');
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
sablono.core.color_field23800 = (function sablono$core$color_field23800(var_args){
var args23801 = [];
var len__17910__auto___23868 = arguments.length;
var i__17911__auto___23869 = (0);
while(true){
if((i__17911__auto___23869 < len__17910__auto___23868)){
args23801.push((arguments[i__17911__auto___23869]));

var G__23870 = (i__17911__auto___23869 + (1));
i__17911__auto___23869 = G__23870;
continue;
} else {
}
break;
}

var G__23803 = args23801.length;
switch (G__23803) {
case 1:
return sablono.core.color_field23800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23801.length)].join('')));

}
});

sablono.core.color_field23800.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.color_field23800.call(null,name__23721__auto__,null);
});

sablono.core.color_field23800.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.color_field23800.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23800);

/**
 * Creates a date input field.
 */
sablono.core.date_field23804 = (function sablono$core$date_field23804(var_args){
var args23805 = [];
var len__17910__auto___23872 = arguments.length;
var i__17911__auto___23873 = (0);
while(true){
if((i__17911__auto___23873 < len__17910__auto___23872)){
args23805.push((arguments[i__17911__auto___23873]));

var G__23874 = (i__17911__auto___23873 + (1));
i__17911__auto___23873 = G__23874;
continue;
} else {
}
break;
}

var G__23807 = args23805.length;
switch (G__23807) {
case 1:
return sablono.core.date_field23804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23805.length)].join('')));

}
});

sablono.core.date_field23804.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.date_field23804.call(null,name__23721__auto__,null);
});

sablono.core.date_field23804.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.date_field23804.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23804);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23808 = (function sablono$core$datetime_field23808(var_args){
var args23809 = [];
var len__17910__auto___23876 = arguments.length;
var i__17911__auto___23877 = (0);
while(true){
if((i__17911__auto___23877 < len__17910__auto___23876)){
args23809.push((arguments[i__17911__auto___23877]));

var G__23878 = (i__17911__auto___23877 + (1));
i__17911__auto___23877 = G__23878;
continue;
} else {
}
break;
}

var G__23811 = args23809.length;
switch (G__23811) {
case 1:
return sablono.core.datetime_field23808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23809.length)].join('')));

}
});

sablono.core.datetime_field23808.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.datetime_field23808.call(null,name__23721__auto__,null);
});

sablono.core.datetime_field23808.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.datetime_field23808.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23808);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23812 = (function sablono$core$datetime_local_field23812(var_args){
var args23813 = [];
var len__17910__auto___23880 = arguments.length;
var i__17911__auto___23881 = (0);
while(true){
if((i__17911__auto___23881 < len__17910__auto___23880)){
args23813.push((arguments[i__17911__auto___23881]));

var G__23882 = (i__17911__auto___23881 + (1));
i__17911__auto___23881 = G__23882;
continue;
} else {
}
break;
}

var G__23815 = args23813.length;
switch (G__23815) {
case 1:
return sablono.core.datetime_local_field23812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23813.length)].join('')));

}
});

sablono.core.datetime_local_field23812.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.datetime_local_field23812.call(null,name__23721__auto__,null);
});

sablono.core.datetime_local_field23812.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.datetime_local_field23812.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23812);

/**
 * Creates a email input field.
 */
sablono.core.email_field23816 = (function sablono$core$email_field23816(var_args){
var args23817 = [];
var len__17910__auto___23884 = arguments.length;
var i__17911__auto___23885 = (0);
while(true){
if((i__17911__auto___23885 < len__17910__auto___23884)){
args23817.push((arguments[i__17911__auto___23885]));

var G__23886 = (i__17911__auto___23885 + (1));
i__17911__auto___23885 = G__23886;
continue;
} else {
}
break;
}

var G__23819 = args23817.length;
switch (G__23819) {
case 1:
return sablono.core.email_field23816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23817.length)].join('')));

}
});

sablono.core.email_field23816.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.email_field23816.call(null,name__23721__auto__,null);
});

sablono.core.email_field23816.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.email_field23816.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23816);

/**
 * Creates a file input field.
 */
sablono.core.file_field23820 = (function sablono$core$file_field23820(var_args){
var args23821 = [];
var len__17910__auto___23888 = arguments.length;
var i__17911__auto___23889 = (0);
while(true){
if((i__17911__auto___23889 < len__17910__auto___23888)){
args23821.push((arguments[i__17911__auto___23889]));

var G__23890 = (i__17911__auto___23889 + (1));
i__17911__auto___23889 = G__23890;
continue;
} else {
}
break;
}

var G__23823 = args23821.length;
switch (G__23823) {
case 1:
return sablono.core.file_field23820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23821.length)].join('')));

}
});

sablono.core.file_field23820.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.file_field23820.call(null,name__23721__auto__,null);
});

sablono.core.file_field23820.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.file_field23820.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23820);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23824 = (function sablono$core$hidden_field23824(var_args){
var args23825 = [];
var len__17910__auto___23892 = arguments.length;
var i__17911__auto___23893 = (0);
while(true){
if((i__17911__auto___23893 < len__17910__auto___23892)){
args23825.push((arguments[i__17911__auto___23893]));

var G__23894 = (i__17911__auto___23893 + (1));
i__17911__auto___23893 = G__23894;
continue;
} else {
}
break;
}

var G__23827 = args23825.length;
switch (G__23827) {
case 1:
return sablono.core.hidden_field23824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23825.length)].join('')));

}
});

sablono.core.hidden_field23824.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.hidden_field23824.call(null,name__23721__auto__,null);
});

sablono.core.hidden_field23824.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.hidden_field23824.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23824);

/**
 * Creates a month input field.
 */
sablono.core.month_field23828 = (function sablono$core$month_field23828(var_args){
var args23829 = [];
var len__17910__auto___23896 = arguments.length;
var i__17911__auto___23897 = (0);
while(true){
if((i__17911__auto___23897 < len__17910__auto___23896)){
args23829.push((arguments[i__17911__auto___23897]));

var G__23898 = (i__17911__auto___23897 + (1));
i__17911__auto___23897 = G__23898;
continue;
} else {
}
break;
}

var G__23831 = args23829.length;
switch (G__23831) {
case 1:
return sablono.core.month_field23828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23829.length)].join('')));

}
});

sablono.core.month_field23828.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.month_field23828.call(null,name__23721__auto__,null);
});

sablono.core.month_field23828.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.month_field23828.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23828);

/**
 * Creates a number input field.
 */
sablono.core.number_field23832 = (function sablono$core$number_field23832(var_args){
var args23833 = [];
var len__17910__auto___23900 = arguments.length;
var i__17911__auto___23901 = (0);
while(true){
if((i__17911__auto___23901 < len__17910__auto___23900)){
args23833.push((arguments[i__17911__auto___23901]));

var G__23902 = (i__17911__auto___23901 + (1));
i__17911__auto___23901 = G__23902;
continue;
} else {
}
break;
}

var G__23835 = args23833.length;
switch (G__23835) {
case 1:
return sablono.core.number_field23832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23833.length)].join('')));

}
});

sablono.core.number_field23832.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.number_field23832.call(null,name__23721__auto__,null);
});

sablono.core.number_field23832.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.number_field23832.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23832);

/**
 * Creates a password input field.
 */
sablono.core.password_field23836 = (function sablono$core$password_field23836(var_args){
var args23837 = [];
var len__17910__auto___23904 = arguments.length;
var i__17911__auto___23905 = (0);
while(true){
if((i__17911__auto___23905 < len__17910__auto___23904)){
args23837.push((arguments[i__17911__auto___23905]));

var G__23906 = (i__17911__auto___23905 + (1));
i__17911__auto___23905 = G__23906;
continue;
} else {
}
break;
}

var G__23839 = args23837.length;
switch (G__23839) {
case 1:
return sablono.core.password_field23836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23837.length)].join('')));

}
});

sablono.core.password_field23836.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.password_field23836.call(null,name__23721__auto__,null);
});

sablono.core.password_field23836.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.password_field23836.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23836);

/**
 * Creates a range input field.
 */
sablono.core.range_field23840 = (function sablono$core$range_field23840(var_args){
var args23841 = [];
var len__17910__auto___23908 = arguments.length;
var i__17911__auto___23909 = (0);
while(true){
if((i__17911__auto___23909 < len__17910__auto___23908)){
args23841.push((arguments[i__17911__auto___23909]));

var G__23910 = (i__17911__auto___23909 + (1));
i__17911__auto___23909 = G__23910;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 1:
return sablono.core.range_field23840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

}
});

sablono.core.range_field23840.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.range_field23840.call(null,name__23721__auto__,null);
});

sablono.core.range_field23840.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.range_field23840.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23840);

/**
 * Creates a search input field.
 */
sablono.core.search_field23844 = (function sablono$core$search_field23844(var_args){
var args23845 = [];
var len__17910__auto___23912 = arguments.length;
var i__17911__auto___23913 = (0);
while(true){
if((i__17911__auto___23913 < len__17910__auto___23912)){
args23845.push((arguments[i__17911__auto___23913]));

var G__23914 = (i__17911__auto___23913 + (1));
i__17911__auto___23913 = G__23914;
continue;
} else {
}
break;
}

var G__23847 = args23845.length;
switch (G__23847) {
case 1:
return sablono.core.search_field23844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23845.length)].join('')));

}
});

sablono.core.search_field23844.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.search_field23844.call(null,name__23721__auto__,null);
});

sablono.core.search_field23844.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.search_field23844.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23844);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23848 = (function sablono$core$tel_field23848(var_args){
var args23849 = [];
var len__17910__auto___23916 = arguments.length;
var i__17911__auto___23917 = (0);
while(true){
if((i__17911__auto___23917 < len__17910__auto___23916)){
args23849.push((arguments[i__17911__auto___23917]));

var G__23918 = (i__17911__auto___23917 + (1));
i__17911__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var G__23851 = args23849.length;
switch (G__23851) {
case 1:
return sablono.core.tel_field23848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23849.length)].join('')));

}
});

sablono.core.tel_field23848.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.tel_field23848.call(null,name__23721__auto__,null);
});

sablono.core.tel_field23848.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.tel_field23848.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23848);

/**
 * Creates a text input field.
 */
sablono.core.text_field23852 = (function sablono$core$text_field23852(var_args){
var args23853 = [];
var len__17910__auto___23920 = arguments.length;
var i__17911__auto___23921 = (0);
while(true){
if((i__17911__auto___23921 < len__17910__auto___23920)){
args23853.push((arguments[i__17911__auto___23921]));

var G__23922 = (i__17911__auto___23921 + (1));
i__17911__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var G__23855 = args23853.length;
switch (G__23855) {
case 1:
return sablono.core.text_field23852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23853.length)].join('')));

}
});

sablono.core.text_field23852.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.text_field23852.call(null,name__23721__auto__,null);
});

sablono.core.text_field23852.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.text_field23852.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23852);

/**
 * Creates a time input field.
 */
sablono.core.time_field23856 = (function sablono$core$time_field23856(var_args){
var args23857 = [];
var len__17910__auto___23924 = arguments.length;
var i__17911__auto___23925 = (0);
while(true){
if((i__17911__auto___23925 < len__17910__auto___23924)){
args23857.push((arguments[i__17911__auto___23925]));

var G__23926 = (i__17911__auto___23925 + (1));
i__17911__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var G__23859 = args23857.length;
switch (G__23859) {
case 1:
return sablono.core.time_field23856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23857.length)].join('')));

}
});

sablono.core.time_field23856.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.time_field23856.call(null,name__23721__auto__,null);
});

sablono.core.time_field23856.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.time_field23856.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23856);

/**
 * Creates a url input field.
 */
sablono.core.url_field23860 = (function sablono$core$url_field23860(var_args){
var args23861 = [];
var len__17910__auto___23928 = arguments.length;
var i__17911__auto___23929 = (0);
while(true){
if((i__17911__auto___23929 < len__17910__auto___23928)){
args23861.push((arguments[i__17911__auto___23929]));

var G__23930 = (i__17911__auto___23929 + (1));
i__17911__auto___23929 = G__23930;
continue;
} else {
}
break;
}

var G__23863 = args23861.length;
switch (G__23863) {
case 1:
return sablono.core.url_field23860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23861.length)].join('')));

}
});

sablono.core.url_field23860.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.url_field23860.call(null,name__23721__auto__,null);
});

sablono.core.url_field23860.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.url_field23860.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23860);

/**
 * Creates a week input field.
 */
sablono.core.week_field23864 = (function sablono$core$week_field23864(var_args){
var args23865 = [];
var len__17910__auto___23932 = arguments.length;
var i__17911__auto___23933 = (0);
while(true){
if((i__17911__auto___23933 < len__17910__auto___23932)){
args23865.push((arguments[i__17911__auto___23933]));

var G__23934 = (i__17911__auto___23933 + (1));
i__17911__auto___23933 = G__23934;
continue;
} else {
}
break;
}

var G__23867 = args23865.length;
switch (G__23867) {
case 1:
return sablono.core.week_field23864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23865.length)].join('')));

}
});

sablono.core.week_field23864.cljs$core$IFn$_invoke$arity$1 = (function (name__23721__auto__){
return sablono.core.week_field23864.call(null,name__23721__auto__,null);
});

sablono.core.week_field23864.cljs$core$IFn$_invoke$arity$2 = (function (name__23721__auto__,value__23722__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23721__auto__,value__23722__auto__);
});

sablono.core.week_field23864.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23864);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23936 = (function sablono$core$check_box23936(var_args){
var args23937 = [];
var len__17910__auto___23940 = arguments.length;
var i__17911__auto___23941 = (0);
while(true){
if((i__17911__auto___23941 < len__17910__auto___23940)){
args23937.push((arguments[i__17911__auto___23941]));

var G__23942 = (i__17911__auto___23941 + (1));
i__17911__auto___23941 = G__23942;
continue;
} else {
}
break;
}

var G__23939 = args23937.length;
switch (G__23939) {
case 1:
return sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23937.length)].join('')));

}
});

sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box23936.call(null,name,null);
});

sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box23936.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box23936.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23936.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23936);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23944 = (function sablono$core$radio_button23944(var_args){
var args23945 = [];
var len__17910__auto___23948 = arguments.length;
var i__17911__auto___23949 = (0);
while(true){
if((i__17911__auto___23949 < len__17910__auto___23948)){
args23945.push((arguments[i__17911__auto___23949]));

var G__23950 = (i__17911__auto___23949 + (1));
i__17911__auto___23949 = G__23950;
continue;
} else {
}
break;
}

var G__23947 = args23945.length;
switch (G__23947) {
case 1:
return sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23945.length)].join('')));

}
});

sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button23944.call(null,group,null);
});

sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button23944.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button23944.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23944.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23944);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23952 = (function sablono$core$select_options23952(coll){
var iter__17624__auto__ = (function sablono$core$select_options23952_$_iter__23961(s__23962){
return (new cljs.core.LazySeq(null,(function (){
var s__23962__$1 = s__23962;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23962__$1);
if(temp__4425__auto__){
var s__23962__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23962__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__23962__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__23964 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__23963 = (0);
while(true){
if((i__23963 < size__17623__auto__)){
var x = cljs.core._nth.call(null,c__17622__auto__,i__23963);
cljs.core.chunk_append.call(null,b__23964,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23967 = x;
var text = cljs.core.nth.call(null,vec__23967,(0),null);
var val = cljs.core.nth.call(null,vec__23967,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23967,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23952.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23969 = (i__23963 + (1));
i__23963 = G__23969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23964),sablono$core$select_options23952_$_iter__23961.call(null,cljs.core.chunk_rest.call(null,s__23962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23964),null);
}
} else {
var x = cljs.core.first.call(null,s__23962__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23968 = x;
var text = cljs.core.nth.call(null,vec__23968,(0),null);
var val = cljs.core.nth.call(null,vec__23968,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23968,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23952.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23952_$_iter__23961.call(null,cljs.core.rest.call(null,s__23962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23952);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23970 = (function sablono$core$drop_down23970(var_args){
var args23971 = [];
var len__17910__auto___23974 = arguments.length;
var i__17911__auto___23975 = (0);
while(true){
if((i__17911__auto___23975 < len__17910__auto___23974)){
args23971.push((arguments[i__17911__auto___23975]));

var G__23976 = (i__17911__auto___23975 + (1));
i__17911__auto___23975 = G__23976;
continue;
} else {
}
break;
}

var G__23973 = args23971.length;
switch (G__23973) {
case 2:
return sablono.core.drop_down23970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23970.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23971.length)].join('')));

}
});

sablono.core.drop_down23970.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23970.call(null,name,options,null);
});

sablono.core.drop_down23970.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23970.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23970);
/**
 * Creates a text area element.
 */
sablono.core.text_area23978 = (function sablono$core$text_area23978(var_args){
var args23979 = [];
var len__17910__auto___23982 = arguments.length;
var i__17911__auto___23983 = (0);
while(true){
if((i__17911__auto___23983 < len__17910__auto___23982)){
args23979.push((arguments[i__17911__auto___23983]));

var G__23984 = (i__17911__auto___23983 + (1));
i__17911__auto___23983 = G__23984;
continue;
} else {
}
break;
}

var G__23981 = args23979.length;
switch (G__23981) {
case 1:
return sablono.core.text_area23978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23979.length)].join('')));

}
});

sablono.core.text_area23978.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area23978.call(null,name,null);
});

sablono.core.text_area23978.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area23978.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23978);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23986 = (function sablono$core$label23986(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23986);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23987 = (function sablono$core$submit_button23987(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23987);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23988 = (function sablono$core$reset_button23988(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23988);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23989 = (function sablono$core$form_to23989(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23994 = arguments.length;
var i__17911__auto___23995 = (0);
while(true){
if((i__17911__auto___23995 < len__17910__auto___23994)){
args__17917__auto__.push((arguments[i__17911__auto___23995]));

var G__23996 = (i__17911__auto___23995 + (1));
i__17911__auto___23995 = G__23996;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return sablono.core.form_to23989.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

sablono.core.form_to23989.cljs$core$IFn$_invoke$arity$variadic = (function (p__23992,body){
var vec__23993 = p__23992;
var method = cljs.core.nth.call(null,vec__23993,(0),null);
var action = cljs.core.nth.call(null,vec__23993,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23989.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23989.cljs$lang$applyTo = (function (seq23990){
var G__23991 = cljs.core.first.call(null,seq23990);
var seq23990__$1 = cljs.core.next.call(null,seq23990);
return sablono.core.form_to23989.cljs$core$IFn$_invoke$arity$variadic(G__23991,seq23990__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23989);

//# sourceMappingURL=core.js.map?rel=1453415053701