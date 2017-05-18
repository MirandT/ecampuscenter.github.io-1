// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__9426__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
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
var _STAR_always_update_STAR_24236 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_24236){
return (function (){
var _STAR_always_update_STAR_24237 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24237;
}});})(_STAR_always_update_STAR_24236))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24236;
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
var args24238 = [];
var len__10647__auto___24241 = arguments.length;
var i__10648__auto___24242 = (0);
while(true){
if((i__10648__auto___24242 < len__10647__auto___24241)){
args24238.push((arguments[i__10648__auto___24242]));

var G__24243 = (i__10648__auto___24242 + (1));
i__10648__auto___24242 = G__24243;
continue;
} else {
}
break;
}

var G__24240 = args24238.length;
switch (G__24240) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24238.length)].join('')));

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
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
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

var seq__24249_24253 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__24250_24254 = null;
var count__24251_24255 = (0);
var i__24252_24256 = (0);
while(true){
if((i__24252_24256 < count__24251_24255)){
var v_24257 = cljs.core._nth.call(null,chunk__24250_24254,i__24252_24256);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24257);

var G__24258 = seq__24249_24253;
var G__24259 = chunk__24250_24254;
var G__24260 = count__24251_24255;
var G__24261 = (i__24252_24256 + (1));
seq__24249_24253 = G__24258;
chunk__24250_24254 = G__24259;
count__24251_24255 = G__24260;
i__24252_24256 = G__24261;
continue;
} else {
var temp__6738__auto___24262 = cljs.core.seq.call(null,seq__24249_24253);
if(temp__6738__auto___24262){
var seq__24249_24263__$1 = temp__6738__auto___24262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24249_24263__$1)){
var c__10337__auto___24264 = cljs.core.chunk_first.call(null,seq__24249_24263__$1);
var G__24265 = cljs.core.chunk_rest.call(null,seq__24249_24263__$1);
var G__24266 = c__10337__auto___24264;
var G__24267 = cljs.core.count.call(null,c__10337__auto___24264);
var G__24268 = (0);
seq__24249_24253 = G__24265;
chunk__24250_24254 = G__24266;
count__24251_24255 = G__24267;
i__24252_24256 = G__24268;
continue;
} else {
var v_24269 = cljs.core.first.call(null,seq__24249_24263__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24269);

var G__24270 = cljs.core.next.call(null,seq__24249_24263__$1);
var G__24271 = null;
var G__24272 = (0);
var G__24273 = (0);
seq__24249_24253 = G__24270;
chunk__24250_24254 = G__24271;
count__24251_24255 = G__24272;
i__24252_24256 = G__24273;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
