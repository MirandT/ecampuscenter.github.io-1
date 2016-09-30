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
var G__33781__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33782__i = 0, G__33782__a = new Array(arguments.length -  0);
while (G__33782__i < G__33782__a.length) {G__33782__a[G__33782__i] = arguments[G__33782__i + 0]; ++G__33782__i;}
  args = new cljs.core.IndexedSeq(G__33782__a,0);
} 
return G__33781__delegate.call(this,args);};
G__33781.cljs$lang$maxFixedArity = 0;
G__33781.cljs$lang$applyTo = (function (arglist__33783){
var args = cljs.core.seq(arglist__33783);
return G__33781__delegate(args);
});
G__33781.cljs$core$IFn$_invoke$arity$variadic = G__33781__delegate;
return G__33781;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33784__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33785__i = 0, G__33785__a = new Array(arguments.length -  0);
while (G__33785__i < G__33785__a.length) {G__33785__a[G__33785__i] = arguments[G__33785__i + 0]; ++G__33785__i;}
  args = new cljs.core.IndexedSeq(G__33785__a,0);
} 
return G__33784__delegate.call(this,args);};
G__33784.cljs$lang$maxFixedArity = 0;
G__33784.cljs$lang$applyTo = (function (arglist__33786){
var args = cljs.core.seq(arglist__33786);
return G__33784__delegate(args);
});
G__33784.cljs$core$IFn$_invoke$arity$variadic = G__33784__delegate;
return G__33784;
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

//# sourceMappingURL=debug.js.map?rel=1475267978323