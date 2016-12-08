// Compiled by ClojureScript 1.9.229 {}
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
var G__33782__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33783__i = 0, G__33783__a = new Array(arguments.length -  0);
while (G__33783__i < G__33783__a.length) {G__33783__a[G__33783__i] = arguments[G__33783__i + 0]; ++G__33783__i;}
  args = new cljs.core.IndexedSeq(G__33783__a,0);
} 
return G__33782__delegate.call(this,args);};
G__33782.cljs$lang$maxFixedArity = 0;
G__33782.cljs$lang$applyTo = (function (arglist__33784){
var args = cljs.core.seq(arglist__33784);
return G__33782__delegate(args);
});
G__33782.cljs$core$IFn$_invoke$arity$variadic = G__33782__delegate;
return G__33782;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33785__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33786__i = 0, G__33786__a = new Array(arguments.length -  0);
while (G__33786__i < G__33786__a.length) {G__33786__a[G__33786__i] = arguments[G__33786__i + 0]; ++G__33786__i;}
  args = new cljs.core.IndexedSeq(G__33786__a,0);
} 
return G__33785__delegate.call(this,args);};
G__33785.cljs$lang$maxFixedArity = 0;
G__33785.cljs$lang$applyTo = (function (arglist__33787){
var args = cljs.core.seq(arglist__33787);
return G__33785__delegate(args);
});
G__33785.cljs$core$IFn$_invoke$arity$variadic = G__33785__delegate;
return G__33785;
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

//# sourceMappingURL=debug.js.map?rel=1481153821197