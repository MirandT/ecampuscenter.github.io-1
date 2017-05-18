// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15792__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15793__i = 0, G__15793__a = new Array(arguments.length -  0);
while (G__15793__i < G__15793__a.length) {G__15793__a[G__15793__i] = arguments[G__15793__i + 0]; ++G__15793__i;}
  args = new cljs.core.IndexedSeq(G__15793__a,0,null);
} 
return G__15792__delegate.call(this,args);};
G__15792.cljs$lang$maxFixedArity = 0;
G__15792.cljs$lang$applyTo = (function (arglist__15794){
var args = cljs.core.seq(arglist__15794);
return G__15792__delegate(args);
});
G__15792.cljs$core$IFn$_invoke$arity$variadic = G__15792__delegate;
return G__15792;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15795__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15796__i = 0, G__15796__a = new Array(arguments.length -  0);
while (G__15796__i < G__15796__a.length) {G__15796__a[G__15796__i] = arguments[G__15796__i + 0]; ++G__15796__i;}
  args = new cljs.core.IndexedSeq(G__15796__a,0,null);
} 
return G__15795__delegate.call(this,args);};
G__15795.cljs$lang$maxFixedArity = 0;
G__15795.cljs$lang$applyTo = (function (arglist__15797){
var args = cljs.core.seq(arglist__15797);
return G__15795__delegate(args);
});
G__15795.cljs$core$IFn$_invoke$arity$variadic = G__15795__delegate;
return G__15795;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
