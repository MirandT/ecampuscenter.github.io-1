// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__18716__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28081 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_28081){
return (function (){
var _STAR_always_update_STAR_28082 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28082;
}});})(_STAR_always_update_STAR_28081))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28081;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args28083 = [];
var len__19791__auto___28086 = arguments.length;
var i__19792__auto___28087 = (0);
while(true){
if((i__19792__auto___28087 < len__19791__auto___28086)){
args28083.push((arguments[i__19792__auto___28087]));

var G__28088 = (i__19792__auto___28087 + (1));
i__19792__auto___28087 = G__28088;
continue;
} else {
}
break;
}

var G__28085 = args28083.length;
switch (G__28085) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28083.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__28094_28098 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28095_28099 = null;
var count__28096_28100 = (0);
var i__28097_28101 = (0);
while(true){
if((i__28097_28101 < count__28096_28100)){
var v_28102 = cljs.core._nth.call(null,chunk__28095_28099,i__28097_28101);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28102);

var G__28103 = seq__28094_28098;
var G__28104 = chunk__28095_28099;
var G__28105 = count__28096_28100;
var G__28106 = (i__28097_28101 + (1));
seq__28094_28098 = G__28103;
chunk__28095_28099 = G__28104;
count__28096_28100 = G__28105;
i__28097_28101 = G__28106;
continue;
} else {
var temp__4657__auto___28107 = cljs.core.seq.call(null,seq__28094_28098);
if(temp__4657__auto___28107){
var seq__28094_28108__$1 = temp__4657__auto___28107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28094_28108__$1)){
var c__19527__auto___28109 = cljs.core.chunk_first.call(null,seq__28094_28108__$1);
var G__28110 = cljs.core.chunk_rest.call(null,seq__28094_28108__$1);
var G__28111 = c__19527__auto___28109;
var G__28112 = cljs.core.count.call(null,c__19527__auto___28109);
var G__28113 = (0);
seq__28094_28098 = G__28110;
chunk__28095_28099 = G__28111;
count__28096_28100 = G__28112;
i__28097_28101 = G__28113;
continue;
} else {
var v_28114 = cljs.core.first.call(null,seq__28094_28108__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28114);

var G__28115 = cljs.core.next.call(null,seq__28094_28108__$1);
var G__28116 = null;
var G__28117 = (0);
var G__28118 = (0);
seq__28094_28098 = G__28115;
chunk__28095_28099 = G__28116;
count__28096_28100 = G__28117;
i__28097_28101 = G__28118;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1474300065809