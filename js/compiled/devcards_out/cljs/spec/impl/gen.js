// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37578 = arguments.length;
var i__25836__auto___37579 = (0);
while(true){
if((i__25836__auto___37579 < len__25835__auto___37578)){
args__25842__auto__.push((arguments[i__25836__auto___37579]));

var G__37580 = (i__25836__auto___37579 + (1));
i__25836__auto___37579 = G__37580;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq37577){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37577));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37582 = arguments.length;
var i__25836__auto___37583 = (0);
while(true){
if((i__25836__auto___37583 < len__25835__auto___37582)){
args__25842__auto__.push((arguments[i__25836__auto___37583]));

var G__37584 = (i__25836__auto___37583 + (1));
i__25836__auto___37583 = G__37584;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq37581){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37581));
});

var g_QMARK__37585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_37586 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37585){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37585))
,null));
var mkg_37587 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37585,g_37586){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37585,g_37586))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__37585,g_37586,mkg_37587){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37585).call(null,x);
});})(g_QMARK__37585,g_37586,mkg_37587))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__37585,g_37586,mkg_37587){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_37587).call(null,gfn);
});})(g_QMARK__37585,g_37586,mkg_37587))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__37585,g_37586,mkg_37587){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_37586).call(null,generator);
});})(g_QMARK__37585,g_37586,mkg_37587))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37549__auto___37606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__37549__auto___37606){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37607 = arguments.length;
var i__25836__auto___37608 = (0);
while(true){
if((i__25836__auto___37608 < len__25835__auto___37607)){
args__25842__auto__.push((arguments[i__25836__auto___37608]));

var G__37609 = (i__25836__auto___37608 + (1));
i__25836__auto___37608 = G__37609;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37606))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37606),args);
});})(g__37549__auto___37606))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__37549__auto___37606){
return (function (seq37588){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37588));
});})(g__37549__auto___37606))
;


var g__37549__auto___37610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__37549__auto___37610){
return (function cljs$spec$impl$gen$list(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37611 = arguments.length;
var i__25836__auto___37612 = (0);
while(true){
if((i__25836__auto___37612 < len__25835__auto___37611)){
args__25842__auto__.push((arguments[i__25836__auto___37612]));

var G__37613 = (i__25836__auto___37612 + (1));
i__25836__auto___37612 = G__37613;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37610))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37610),args);
});})(g__37549__auto___37610))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__37549__auto___37610){
return (function (seq37589){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37589));
});})(g__37549__auto___37610))
;


var g__37549__auto___37614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__37549__auto___37614){
return (function cljs$spec$impl$gen$map(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37615 = arguments.length;
var i__25836__auto___37616 = (0);
while(true){
if((i__25836__auto___37616 < len__25835__auto___37615)){
args__25842__auto__.push((arguments[i__25836__auto___37616]));

var G__37617 = (i__25836__auto___37616 + (1));
i__25836__auto___37616 = G__37617;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37614))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37614),args);
});})(g__37549__auto___37614))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__37549__auto___37614){
return (function (seq37590){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37590));
});})(g__37549__auto___37614))
;


var g__37549__auto___37618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__37549__auto___37618){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37619 = arguments.length;
var i__25836__auto___37620 = (0);
while(true){
if((i__25836__auto___37620 < len__25835__auto___37619)){
args__25842__auto__.push((arguments[i__25836__auto___37620]));

var G__37621 = (i__25836__auto___37620 + (1));
i__25836__auto___37620 = G__37621;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37618))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37618),args);
});})(g__37549__auto___37618))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__37549__auto___37618){
return (function (seq37591){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37591));
});})(g__37549__auto___37618))
;


var g__37549__auto___37622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__37549__auto___37622){
return (function cljs$spec$impl$gen$set(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37623 = arguments.length;
var i__25836__auto___37624 = (0);
while(true){
if((i__25836__auto___37624 < len__25835__auto___37623)){
args__25842__auto__.push((arguments[i__25836__auto___37624]));

var G__37625 = (i__25836__auto___37624 + (1));
i__25836__auto___37624 = G__37625;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37622))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37622),args);
});})(g__37549__auto___37622))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__37549__auto___37622){
return (function (seq37592){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37592));
});})(g__37549__auto___37622))
;


var g__37549__auto___37626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__37549__auto___37626){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37627 = arguments.length;
var i__25836__auto___37628 = (0);
while(true){
if((i__25836__auto___37628 < len__25835__auto___37627)){
args__25842__auto__.push((arguments[i__25836__auto___37628]));

var G__37629 = (i__25836__auto___37628 + (1));
i__25836__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37626))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37626),args);
});})(g__37549__auto___37626))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__37549__auto___37626){
return (function (seq37593){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37593));
});})(g__37549__auto___37626))
;


var g__37549__auto___37630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__37549__auto___37630){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37631 = arguments.length;
var i__25836__auto___37632 = (0);
while(true){
if((i__25836__auto___37632 < len__25835__auto___37631)){
args__25842__auto__.push((arguments[i__25836__auto___37632]));

var G__37633 = (i__25836__auto___37632 + (1));
i__25836__auto___37632 = G__37633;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37630))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37630),args);
});})(g__37549__auto___37630))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__37549__auto___37630){
return (function (seq37594){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37594));
});})(g__37549__auto___37630))
;


var g__37549__auto___37634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__37549__auto___37634){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37635 = arguments.length;
var i__25836__auto___37636 = (0);
while(true){
if((i__25836__auto___37636 < len__25835__auto___37635)){
args__25842__auto__.push((arguments[i__25836__auto___37636]));

var G__37637 = (i__25836__auto___37636 + (1));
i__25836__auto___37636 = G__37637;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37634))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37634),args);
});})(g__37549__auto___37634))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__37549__auto___37634){
return (function (seq37595){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37595));
});})(g__37549__auto___37634))
;


var g__37549__auto___37638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__37549__auto___37638){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37639 = arguments.length;
var i__25836__auto___37640 = (0);
while(true){
if((i__25836__auto___37640 < len__25835__auto___37639)){
args__25842__auto__.push((arguments[i__25836__auto___37640]));

var G__37641 = (i__25836__auto___37640 + (1));
i__25836__auto___37640 = G__37641;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37638))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37638),args);
});})(g__37549__auto___37638))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__37549__auto___37638){
return (function (seq37596){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37596));
});})(g__37549__auto___37638))
;


var g__37549__auto___37642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__37549__auto___37642){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37643 = arguments.length;
var i__25836__auto___37644 = (0);
while(true){
if((i__25836__auto___37644 < len__25835__auto___37643)){
args__25842__auto__.push((arguments[i__25836__auto___37644]));

var G__37645 = (i__25836__auto___37644 + (1));
i__25836__auto___37644 = G__37645;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37642))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37642),args);
});})(g__37549__auto___37642))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__37549__auto___37642){
return (function (seq37597){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37597));
});})(g__37549__auto___37642))
;


var g__37549__auto___37646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__37549__auto___37646){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37647 = arguments.length;
var i__25836__auto___37648 = (0);
while(true){
if((i__25836__auto___37648 < len__25835__auto___37647)){
args__25842__auto__.push((arguments[i__25836__auto___37648]));

var G__37649 = (i__25836__auto___37648 + (1));
i__25836__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37646))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37646),args);
});})(g__37549__auto___37646))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__37549__auto___37646){
return (function (seq37598){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37598));
});})(g__37549__auto___37646))
;


var g__37549__auto___37650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__37549__auto___37650){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37651 = arguments.length;
var i__25836__auto___37652 = (0);
while(true){
if((i__25836__auto___37652 < len__25835__auto___37651)){
args__25842__auto__.push((arguments[i__25836__auto___37652]));

var G__37653 = (i__25836__auto___37652 + (1));
i__25836__auto___37652 = G__37653;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37650))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37650),args);
});})(g__37549__auto___37650))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__37549__auto___37650){
return (function (seq37599){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37599));
});})(g__37549__auto___37650))
;


var g__37549__auto___37654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__37549__auto___37654){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37655 = arguments.length;
var i__25836__auto___37656 = (0);
while(true){
if((i__25836__auto___37656 < len__25835__auto___37655)){
args__25842__auto__.push((arguments[i__25836__auto___37656]));

var G__37657 = (i__25836__auto___37656 + (1));
i__25836__auto___37656 = G__37657;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37654))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37654),args);
});})(g__37549__auto___37654))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__37549__auto___37654){
return (function (seq37600){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37600));
});})(g__37549__auto___37654))
;


var g__37549__auto___37658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__37549__auto___37658){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37659 = arguments.length;
var i__25836__auto___37660 = (0);
while(true){
if((i__25836__auto___37660 < len__25835__auto___37659)){
args__25842__auto__.push((arguments[i__25836__auto___37660]));

var G__37661 = (i__25836__auto___37660 + (1));
i__25836__auto___37660 = G__37661;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37658))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37658),args);
});})(g__37549__auto___37658))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__37549__auto___37658){
return (function (seq37601){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37601));
});})(g__37549__auto___37658))
;


var g__37549__auto___37662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__37549__auto___37662){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37663 = arguments.length;
var i__25836__auto___37664 = (0);
while(true){
if((i__25836__auto___37664 < len__25835__auto___37663)){
args__25842__auto__.push((arguments[i__25836__auto___37664]));

var G__37665 = (i__25836__auto___37664 + (1));
i__25836__auto___37664 = G__37665;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37662))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37662),args);
});})(g__37549__auto___37662))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__37549__auto___37662){
return (function (seq37602){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37602));
});})(g__37549__auto___37662))
;


var g__37549__auto___37666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__37549__auto___37666){
return (function cljs$spec$impl$gen$return(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37667 = arguments.length;
var i__25836__auto___37668 = (0);
while(true){
if((i__25836__auto___37668 < len__25835__auto___37667)){
args__25842__auto__.push((arguments[i__25836__auto___37668]));

var G__37669 = (i__25836__auto___37668 + (1));
i__25836__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37666))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37666),args);
});})(g__37549__auto___37666))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__37549__auto___37666){
return (function (seq37603){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37603));
});})(g__37549__auto___37666))
;


var g__37549__auto___37670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__37549__auto___37670){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37671 = arguments.length;
var i__25836__auto___37672 = (0);
while(true){
if((i__25836__auto___37672 < len__25835__auto___37671)){
args__25842__auto__.push((arguments[i__25836__auto___37672]));

var G__37673 = (i__25836__auto___37672 + (1));
i__25836__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37670))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37670),args);
});})(g__37549__auto___37670))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37549__auto___37670){
return (function (seq37604){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37604));
});})(g__37549__auto___37670))
;


var g__37549__auto___37674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__37549__auto___37674){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37675 = arguments.length;
var i__25836__auto___37676 = (0);
while(true){
if((i__25836__auto___37676 < len__25835__auto___37675)){
args__25842__auto__.push((arguments[i__25836__auto___37676]));

var G__37677 = (i__25836__auto___37676 + (1));
i__25836__auto___37676 = G__37677;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37549__auto___37674))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37549__auto___37674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37549__auto___37674),args);
});})(g__37549__auto___37674))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__37549__auto___37674){
return (function (seq37605){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37605));
});})(g__37549__auto___37674))
;

var g__37562__auto___37699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__37562__auto___37699){
return (function cljs$spec$impl$gen$any(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37700 = arguments.length;
var i__25836__auto___37701 = (0);
while(true){
if((i__25836__auto___37701 < len__25835__auto___37700)){
args__25842__auto__.push((arguments[i__25836__auto___37701]));

var G__37702 = (i__25836__auto___37701 + (1));
i__25836__auto___37701 = G__37702;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37699))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37699){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37699);
});})(g__37562__auto___37699))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__37562__auto___37699){
return (function (seq37678){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37678));
});})(g__37562__auto___37699))
;


var g__37562__auto___37703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__37562__auto___37703){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37704 = arguments.length;
var i__25836__auto___37705 = (0);
while(true){
if((i__25836__auto___37705 < len__25835__auto___37704)){
args__25842__auto__.push((arguments[i__25836__auto___37705]));

var G__37706 = (i__25836__auto___37705 + (1));
i__25836__auto___37705 = G__37706;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37703))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37703){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37703);
});})(g__37562__auto___37703))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__37562__auto___37703){
return (function (seq37679){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37679));
});})(g__37562__auto___37703))
;


var g__37562__auto___37707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__37562__auto___37707){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37708 = arguments.length;
var i__25836__auto___37709 = (0);
while(true){
if((i__25836__auto___37709 < len__25835__auto___37708)){
args__25842__auto__.push((arguments[i__25836__auto___37709]));

var G__37710 = (i__25836__auto___37709 + (1));
i__25836__auto___37709 = G__37710;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37707))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37707){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37707);
});})(g__37562__auto___37707))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__37562__auto___37707){
return (function (seq37680){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37680));
});})(g__37562__auto___37707))
;


var g__37562__auto___37711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__37562__auto___37711){
return (function cljs$spec$impl$gen$char(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37712 = arguments.length;
var i__25836__auto___37713 = (0);
while(true){
if((i__25836__auto___37713 < len__25835__auto___37712)){
args__25842__auto__.push((arguments[i__25836__auto___37713]));

var G__37714 = (i__25836__auto___37713 + (1));
i__25836__auto___37713 = G__37714;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37711))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37711){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37711);
});})(g__37562__auto___37711))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__37562__auto___37711){
return (function (seq37681){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37681));
});})(g__37562__auto___37711))
;


var g__37562__auto___37715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__37562__auto___37715){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37716 = arguments.length;
var i__25836__auto___37717 = (0);
while(true){
if((i__25836__auto___37717 < len__25835__auto___37716)){
args__25842__auto__.push((arguments[i__25836__auto___37717]));

var G__37718 = (i__25836__auto___37717 + (1));
i__25836__auto___37717 = G__37718;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37715))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37715){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37715);
});})(g__37562__auto___37715))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__37562__auto___37715){
return (function (seq37682){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37682));
});})(g__37562__auto___37715))
;


var g__37562__auto___37719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__37562__auto___37719){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37720 = arguments.length;
var i__25836__auto___37721 = (0);
while(true){
if((i__25836__auto___37721 < len__25835__auto___37720)){
args__25842__auto__.push((arguments[i__25836__auto___37721]));

var G__37722 = (i__25836__auto___37721 + (1));
i__25836__auto___37721 = G__37722;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37719))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37719){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37719);
});})(g__37562__auto___37719))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__37562__auto___37719){
return (function (seq37683){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37683));
});})(g__37562__auto___37719))
;


var g__37562__auto___37723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__37562__auto___37723){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37724 = arguments.length;
var i__25836__auto___37725 = (0);
while(true){
if((i__25836__auto___37725 < len__25835__auto___37724)){
args__25842__auto__.push((arguments[i__25836__auto___37725]));

var G__37726 = (i__25836__auto___37725 + (1));
i__25836__auto___37725 = G__37726;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37723))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37723){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37723);
});})(g__37562__auto___37723))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__37562__auto___37723){
return (function (seq37684){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37684));
});})(g__37562__auto___37723))
;


var g__37562__auto___37727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__37562__auto___37727){
return (function cljs$spec$impl$gen$double(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37728 = arguments.length;
var i__25836__auto___37729 = (0);
while(true){
if((i__25836__auto___37729 < len__25835__auto___37728)){
args__25842__auto__.push((arguments[i__25836__auto___37729]));

var G__37730 = (i__25836__auto___37729 + (1));
i__25836__auto___37729 = G__37730;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37727))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37727){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37727);
});})(g__37562__auto___37727))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__37562__auto___37727){
return (function (seq37685){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37685));
});})(g__37562__auto___37727))
;


var g__37562__auto___37731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__37562__auto___37731){
return (function cljs$spec$impl$gen$int(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37732 = arguments.length;
var i__25836__auto___37733 = (0);
while(true){
if((i__25836__auto___37733 < len__25835__auto___37732)){
args__25842__auto__.push((arguments[i__25836__auto___37733]));

var G__37734 = (i__25836__auto___37733 + (1));
i__25836__auto___37733 = G__37734;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37731))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37731){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37731);
});})(g__37562__auto___37731))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__37562__auto___37731){
return (function (seq37686){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37686));
});})(g__37562__auto___37731))
;


var g__37562__auto___37735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__37562__auto___37735){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37736 = arguments.length;
var i__25836__auto___37737 = (0);
while(true){
if((i__25836__auto___37737 < len__25835__auto___37736)){
args__25842__auto__.push((arguments[i__25836__auto___37737]));

var G__37738 = (i__25836__auto___37737 + (1));
i__25836__auto___37737 = G__37738;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37735))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37735){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37735);
});})(g__37562__auto___37735))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__37562__auto___37735){
return (function (seq37687){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37687));
});})(g__37562__auto___37735))
;


var g__37562__auto___37739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__37562__auto___37739){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37740 = arguments.length;
var i__25836__auto___37741 = (0);
while(true){
if((i__25836__auto___37741 < len__25835__auto___37740)){
args__25842__auto__.push((arguments[i__25836__auto___37741]));

var G__37742 = (i__25836__auto___37741 + (1));
i__25836__auto___37741 = G__37742;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37739))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37739){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37739);
});})(g__37562__auto___37739))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__37562__auto___37739){
return (function (seq37688){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37688));
});})(g__37562__auto___37739))
;


var g__37562__auto___37743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__37562__auto___37743){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37744 = arguments.length;
var i__25836__auto___37745 = (0);
while(true){
if((i__25836__auto___37745 < len__25835__auto___37744)){
args__25842__auto__.push((arguments[i__25836__auto___37745]));

var G__37746 = (i__25836__auto___37745 + (1));
i__25836__auto___37745 = G__37746;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37743))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37743){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37743);
});})(g__37562__auto___37743))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__37562__auto___37743){
return (function (seq37689){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37689));
});})(g__37562__auto___37743))
;


var g__37562__auto___37747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__37562__auto___37747){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37748 = arguments.length;
var i__25836__auto___37749 = (0);
while(true){
if((i__25836__auto___37749 < len__25835__auto___37748)){
args__25842__auto__.push((arguments[i__25836__auto___37749]));

var G__37750 = (i__25836__auto___37749 + (1));
i__25836__auto___37749 = G__37750;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37747))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37747){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37747);
});})(g__37562__auto___37747))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__37562__auto___37747){
return (function (seq37690){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37690));
});})(g__37562__auto___37747))
;


var g__37562__auto___37751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__37562__auto___37751){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37752 = arguments.length;
var i__25836__auto___37753 = (0);
while(true){
if((i__25836__auto___37753 < len__25835__auto___37752)){
args__25842__auto__.push((arguments[i__25836__auto___37753]));

var G__37754 = (i__25836__auto___37753 + (1));
i__25836__auto___37753 = G__37754;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37751))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37751){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37751);
});})(g__37562__auto___37751))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__37562__auto___37751){
return (function (seq37691){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37691));
});})(g__37562__auto___37751))
;


var g__37562__auto___37755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__37562__auto___37755){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37756 = arguments.length;
var i__25836__auto___37757 = (0);
while(true){
if((i__25836__auto___37757 < len__25835__auto___37756)){
args__25842__auto__.push((arguments[i__25836__auto___37757]));

var G__37758 = (i__25836__auto___37757 + (1));
i__25836__auto___37757 = G__37758;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37755))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37755){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37755);
});})(g__37562__auto___37755))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__37562__auto___37755){
return (function (seq37692){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37692));
});})(g__37562__auto___37755))
;


var g__37562__auto___37759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__37562__auto___37759){
return (function cljs$spec$impl$gen$string(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37760 = arguments.length;
var i__25836__auto___37761 = (0);
while(true){
if((i__25836__auto___37761 < len__25835__auto___37760)){
args__25842__auto__.push((arguments[i__25836__auto___37761]));

var G__37762 = (i__25836__auto___37761 + (1));
i__25836__auto___37761 = G__37762;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37759))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37759){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37759);
});})(g__37562__auto___37759))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__37562__auto___37759){
return (function (seq37693){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37693));
});})(g__37562__auto___37759))
;


var g__37562__auto___37763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__37562__auto___37763){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37764 = arguments.length;
var i__25836__auto___37765 = (0);
while(true){
if((i__25836__auto___37765 < len__25835__auto___37764)){
args__25842__auto__.push((arguments[i__25836__auto___37765]));

var G__37766 = (i__25836__auto___37765 + (1));
i__25836__auto___37765 = G__37766;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37763))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37763){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37763);
});})(g__37562__auto___37763))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__37562__auto___37763){
return (function (seq37694){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37694));
});})(g__37562__auto___37763))
;


var g__37562__auto___37767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__37562__auto___37767){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37768 = arguments.length;
var i__25836__auto___37769 = (0);
while(true){
if((i__25836__auto___37769 < len__25835__auto___37768)){
args__25842__auto__.push((arguments[i__25836__auto___37769]));

var G__37770 = (i__25836__auto___37769 + (1));
i__25836__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37767))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37767){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37767);
});})(g__37562__auto___37767))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__37562__auto___37767){
return (function (seq37695){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37695));
});})(g__37562__auto___37767))
;


var g__37562__auto___37771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__37562__auto___37771){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37772 = arguments.length;
var i__25836__auto___37773 = (0);
while(true){
if((i__25836__auto___37773 < len__25835__auto___37772)){
args__25842__auto__.push((arguments[i__25836__auto___37773]));

var G__37774 = (i__25836__auto___37773 + (1));
i__25836__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37771))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37771){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37771);
});})(g__37562__auto___37771))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__37562__auto___37771){
return (function (seq37696){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37696));
});})(g__37562__auto___37771))
;


var g__37562__auto___37775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__37562__auto___37775){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37776 = arguments.length;
var i__25836__auto___37777 = (0);
while(true){
if((i__25836__auto___37777 < len__25835__auto___37776)){
args__25842__auto__.push((arguments[i__25836__auto___37777]));

var G__37778 = (i__25836__auto___37777 + (1));
i__25836__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37775))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37775){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37775);
});})(g__37562__auto___37775))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__37562__auto___37775){
return (function (seq37697){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37697));
});})(g__37562__auto___37775))
;


var g__37562__auto___37779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__37562__auto___37779){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37780 = arguments.length;
var i__25836__auto___37781 = (0);
while(true){
if((i__25836__auto___37781 < len__25835__auto___37780)){
args__25842__auto__.push((arguments[i__25836__auto___37781]));

var G__37782 = (i__25836__auto___37781 + (1));
i__25836__auto___37781 = G__37782;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});})(g__37562__auto___37779))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37562__auto___37779){
return (function (args){
return cljs.core.deref.call(null,g__37562__auto___37779);
});})(g__37562__auto___37779))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__37562__auto___37779){
return (function (seq37698){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37698));
});})(g__37562__auto___37779))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37785 = arguments.length;
var i__25836__auto___37786 = (0);
while(true){
if((i__25836__auto___37786 < len__25835__auto___37785)){
args__25842__auto__.push((arguments[i__25836__auto___37786]));

var G__37787 = (i__25836__auto___37786 + (1));
i__25836__auto___37786 = G__37787;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__37783_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37783_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq37784){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37784));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__37788_SHARP_){
return (new Date(p1__37788_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1481153826233