// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15167__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15168__i = 0, G__15168__a = new Array(arguments.length -  0);
while (G__15168__i < G__15168__a.length) {G__15168__a[G__15168__i] = arguments[G__15168__i + 0]; ++G__15168__i;}
  args = new cljs.core.IndexedSeq(G__15168__a,0,null);
} 
return G__15167__delegate.call(this,args);};
G__15167.cljs$lang$maxFixedArity = 0;
G__15167.cljs$lang$applyTo = (function (arglist__15169){
var args = cljs.core.seq(arglist__15169);
return G__15167__delegate(args);
});
G__15167.cljs$core$IFn$_invoke$arity$variadic = G__15167__delegate;
return G__15167;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15170__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15171__i = 0, G__15171__a = new Array(arguments.length -  0);
while (G__15171__i < G__15171__a.length) {G__15171__a[G__15171__i] = arguments[G__15171__i + 0]; ++G__15171__i;}
  args = new cljs.core.IndexedSeq(G__15171__a,0,null);
} 
return G__15170__delegate.call(this,args);};
G__15170.cljs$lang$maxFixedArity = 0;
G__15170.cljs$lang$applyTo = (function (arglist__15172){
var args = cljs.core.seq(arglist__15172);
return G__15170__delegate(args);
});
G__15170.cljs$core$IFn$_invoke$arity$variadic = G__15170__delegate;
return G__15170;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
