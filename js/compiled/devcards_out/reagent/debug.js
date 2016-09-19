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
var G__27737__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27738__i = 0, G__27738__a = new Array(arguments.length -  0);
while (G__27738__i < G__27738__a.length) {G__27738__a[G__27738__i] = arguments[G__27738__i + 0]; ++G__27738__i;}
  args = new cljs.core.IndexedSeq(G__27738__a,0);
} 
return G__27737__delegate.call(this,args);};
G__27737.cljs$lang$maxFixedArity = 0;
G__27737.cljs$lang$applyTo = (function (arglist__27739){
var args = cljs.core.seq(arglist__27739);
return G__27737__delegate(args);
});
G__27737.cljs$core$IFn$_invoke$arity$variadic = G__27737__delegate;
return G__27737;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27740__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27741__i = 0, G__27741__a = new Array(arguments.length -  0);
while (G__27741__i < G__27741__a.length) {G__27741__a[G__27741__i] = arguments[G__27741__i + 0]; ++G__27741__i;}
  args = new cljs.core.IndexedSeq(G__27741__a,0);
} 
return G__27740__delegate.call(this,args);};
G__27740.cljs$lang$maxFixedArity = 0;
G__27740.cljs$lang$applyTo = (function (arglist__27742){
var args = cljs.core.seq(arglist__27742);
return G__27740__delegate(args);
});
G__27740.cljs$core$IFn$_invoke$arity$variadic = G__27740__delegate;
return G__27740;
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

//# sourceMappingURL=debug.js.map?rel=1474300064167