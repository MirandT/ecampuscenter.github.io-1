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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__19798__auto__ = [];
var len__19791__auto___30576 = arguments.length;
var i__19792__auto___30577 = (0);
while(true){
if((i__19792__auto___30577 < len__19791__auto___30576)){
args__19798__auto__.push((arguments[i__19792__auto___30577]));

var G__30578 = (i__19792__auto___30577 + (1));
i__19792__auto___30577 = G__30578;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30575){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30575));
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
var args__19798__auto__ = [];
var len__19791__auto___30580 = arguments.length;
var i__19792__auto___30581 = (0);
while(true){
if((i__19792__auto___30581 < len__19791__auto___30580)){
args__19798__auto__.push((arguments[i__19792__auto___30581]));

var G__30582 = (i__19792__auto___30581 + (1));
i__19792__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30579){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30579));
});

var g_QMARK__30583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30584 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30583){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30583))
,null));
var mkg_30585 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30583,g_30584){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30583,g_30584))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30583,g_30584,mkg_30585){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30583).call(null,x);
});})(g_QMARK__30583,g_30584,mkg_30585))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30583,g_30584,mkg_30585){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30585).call(null,gfn);
});})(g_QMARK__30583,g_30584,mkg_30585))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30583,g_30584,mkg_30585){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30584).call(null,generator);
});})(g_QMARK__30583,g_30584,mkg_30585))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30547__auto___30604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__30547__auto___30604){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30605 = arguments.length;
var i__19792__auto___30606 = (0);
while(true){
if((i__19792__auto___30606 < len__19791__auto___30605)){
args__19798__auto__.push((arguments[i__19792__auto___30606]));

var G__30607 = (i__19792__auto___30606 + (1));
i__19792__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30604))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30604){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30604),args);
});})(g__30547__auto___30604))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__30547__auto___30604){
return (function (seq30586){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30586));
});})(g__30547__auto___30604))
;


var g__30547__auto___30608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__30547__auto___30608){
return (function cljs$spec$impl$gen$list(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30609 = arguments.length;
var i__19792__auto___30610 = (0);
while(true){
if((i__19792__auto___30610 < len__19791__auto___30609)){
args__19798__auto__.push((arguments[i__19792__auto___30610]));

var G__30611 = (i__19792__auto___30610 + (1));
i__19792__auto___30610 = G__30611;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30608))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30608){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30608),args);
});})(g__30547__auto___30608))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__30547__auto___30608){
return (function (seq30587){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30587));
});})(g__30547__auto___30608))
;


var g__30547__auto___30612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__30547__auto___30612){
return (function cljs$spec$impl$gen$map(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30613 = arguments.length;
var i__19792__auto___30614 = (0);
while(true){
if((i__19792__auto___30614 < len__19791__auto___30613)){
args__19798__auto__.push((arguments[i__19792__auto___30614]));

var G__30615 = (i__19792__auto___30614 + (1));
i__19792__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30612))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30612){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30612),args);
});})(g__30547__auto___30612))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__30547__auto___30612){
return (function (seq30588){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30588));
});})(g__30547__auto___30612))
;


var g__30547__auto___30616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__30547__auto___30616){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30617 = arguments.length;
var i__19792__auto___30618 = (0);
while(true){
if((i__19792__auto___30618 < len__19791__auto___30617)){
args__19798__auto__.push((arguments[i__19792__auto___30618]));

var G__30619 = (i__19792__auto___30618 + (1));
i__19792__auto___30618 = G__30619;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30616))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30616){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30616),args);
});})(g__30547__auto___30616))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__30547__auto___30616){
return (function (seq30589){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30589));
});})(g__30547__auto___30616))
;


var g__30547__auto___30620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__30547__auto___30620){
return (function cljs$spec$impl$gen$set(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30621 = arguments.length;
var i__19792__auto___30622 = (0);
while(true){
if((i__19792__auto___30622 < len__19791__auto___30621)){
args__19798__auto__.push((arguments[i__19792__auto___30622]));

var G__30623 = (i__19792__auto___30622 + (1));
i__19792__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30620))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30620),args);
});})(g__30547__auto___30620))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__30547__auto___30620){
return (function (seq30590){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30590));
});})(g__30547__auto___30620))
;


var g__30547__auto___30624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__30547__auto___30624){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30625 = arguments.length;
var i__19792__auto___30626 = (0);
while(true){
if((i__19792__auto___30626 < len__19791__auto___30625)){
args__19798__auto__.push((arguments[i__19792__auto___30626]));

var G__30627 = (i__19792__auto___30626 + (1));
i__19792__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30624))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30624),args);
});})(g__30547__auto___30624))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__30547__auto___30624){
return (function (seq30591){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30591));
});})(g__30547__auto___30624))
;


var g__30547__auto___30628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__30547__auto___30628){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30629 = arguments.length;
var i__19792__auto___30630 = (0);
while(true){
if((i__19792__auto___30630 < len__19791__auto___30629)){
args__19798__auto__.push((arguments[i__19792__auto___30630]));

var G__30631 = (i__19792__auto___30630 + (1));
i__19792__auto___30630 = G__30631;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30628))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30628),args);
});})(g__30547__auto___30628))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__30547__auto___30628){
return (function (seq30592){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30592));
});})(g__30547__auto___30628))
;


var g__30547__auto___30632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__30547__auto___30632){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30633 = arguments.length;
var i__19792__auto___30634 = (0);
while(true){
if((i__19792__auto___30634 < len__19791__auto___30633)){
args__19798__auto__.push((arguments[i__19792__auto___30634]));

var G__30635 = (i__19792__auto___30634 + (1));
i__19792__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30632))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30632),args);
});})(g__30547__auto___30632))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__30547__auto___30632){
return (function (seq30593){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30593));
});})(g__30547__auto___30632))
;


var g__30547__auto___30636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__30547__auto___30636){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30637 = arguments.length;
var i__19792__auto___30638 = (0);
while(true){
if((i__19792__auto___30638 < len__19791__auto___30637)){
args__19798__auto__.push((arguments[i__19792__auto___30638]));

var G__30639 = (i__19792__auto___30638 + (1));
i__19792__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30636))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30636),args);
});})(g__30547__auto___30636))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__30547__auto___30636){
return (function (seq30594){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30594));
});})(g__30547__auto___30636))
;


var g__30547__auto___30640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__30547__auto___30640){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30641 = arguments.length;
var i__19792__auto___30642 = (0);
while(true){
if((i__19792__auto___30642 < len__19791__auto___30641)){
args__19798__auto__.push((arguments[i__19792__auto___30642]));

var G__30643 = (i__19792__auto___30642 + (1));
i__19792__auto___30642 = G__30643;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30640))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30640),args);
});})(g__30547__auto___30640))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__30547__auto___30640){
return (function (seq30595){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30595));
});})(g__30547__auto___30640))
;


var g__30547__auto___30644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__30547__auto___30644){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30645 = arguments.length;
var i__19792__auto___30646 = (0);
while(true){
if((i__19792__auto___30646 < len__19791__auto___30645)){
args__19798__auto__.push((arguments[i__19792__auto___30646]));

var G__30647 = (i__19792__auto___30646 + (1));
i__19792__auto___30646 = G__30647;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30644))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30644),args);
});})(g__30547__auto___30644))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__30547__auto___30644){
return (function (seq30596){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30596));
});})(g__30547__auto___30644))
;


var g__30547__auto___30648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__30547__auto___30648){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30649 = arguments.length;
var i__19792__auto___30650 = (0);
while(true){
if((i__19792__auto___30650 < len__19791__auto___30649)){
args__19798__auto__.push((arguments[i__19792__auto___30650]));

var G__30651 = (i__19792__auto___30650 + (1));
i__19792__auto___30650 = G__30651;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30648))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30648),args);
});})(g__30547__auto___30648))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__30547__auto___30648){
return (function (seq30597){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30597));
});})(g__30547__auto___30648))
;


var g__30547__auto___30652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__30547__auto___30652){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30653 = arguments.length;
var i__19792__auto___30654 = (0);
while(true){
if((i__19792__auto___30654 < len__19791__auto___30653)){
args__19798__auto__.push((arguments[i__19792__auto___30654]));

var G__30655 = (i__19792__auto___30654 + (1));
i__19792__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30652))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30652),args);
});})(g__30547__auto___30652))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__30547__auto___30652){
return (function (seq30598){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30598));
});})(g__30547__auto___30652))
;


var g__30547__auto___30656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__30547__auto___30656){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30657 = arguments.length;
var i__19792__auto___30658 = (0);
while(true){
if((i__19792__auto___30658 < len__19791__auto___30657)){
args__19798__auto__.push((arguments[i__19792__auto___30658]));

var G__30659 = (i__19792__auto___30658 + (1));
i__19792__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30656))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30656),args);
});})(g__30547__auto___30656))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__30547__auto___30656){
return (function (seq30599){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30599));
});})(g__30547__auto___30656))
;


var g__30547__auto___30660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__30547__auto___30660){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30661 = arguments.length;
var i__19792__auto___30662 = (0);
while(true){
if((i__19792__auto___30662 < len__19791__auto___30661)){
args__19798__auto__.push((arguments[i__19792__auto___30662]));

var G__30663 = (i__19792__auto___30662 + (1));
i__19792__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30660))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30660),args);
});})(g__30547__auto___30660))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__30547__auto___30660){
return (function (seq30600){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30600));
});})(g__30547__auto___30660))
;


var g__30547__auto___30664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__30547__auto___30664){
return (function cljs$spec$impl$gen$return(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30665 = arguments.length;
var i__19792__auto___30666 = (0);
while(true){
if((i__19792__auto___30666 < len__19791__auto___30665)){
args__19798__auto__.push((arguments[i__19792__auto___30666]));

var G__30667 = (i__19792__auto___30666 + (1));
i__19792__auto___30666 = G__30667;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30664))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30664),args);
});})(g__30547__auto___30664))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__30547__auto___30664){
return (function (seq30601){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30601));
});})(g__30547__auto___30664))
;


var g__30547__auto___30668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__30547__auto___30668){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30669 = arguments.length;
var i__19792__auto___30670 = (0);
while(true){
if((i__19792__auto___30670 < len__19791__auto___30669)){
args__19798__auto__.push((arguments[i__19792__auto___30670]));

var G__30671 = (i__19792__auto___30670 + (1));
i__19792__auto___30670 = G__30671;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30668))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30668),args);
});})(g__30547__auto___30668))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30547__auto___30668){
return (function (seq30602){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30602));
});})(g__30547__auto___30668))
;


var g__30547__auto___30672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__30547__auto___30672){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30673 = arguments.length;
var i__19792__auto___30674 = (0);
while(true){
if((i__19792__auto___30674 < len__19791__auto___30673)){
args__19798__auto__.push((arguments[i__19792__auto___30674]));

var G__30675 = (i__19792__auto___30674 + (1));
i__19792__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30547__auto___30672))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30547__auto___30672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30547__auto___30672),args);
});})(g__30547__auto___30672))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__30547__auto___30672){
return (function (seq30603){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30603));
});})(g__30547__auto___30672))
;

var g__30560__auto___30697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__30560__auto___30697){
return (function cljs$spec$impl$gen$any(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30698 = arguments.length;
var i__19792__auto___30699 = (0);
while(true){
if((i__19792__auto___30699 < len__19791__auto___30698)){
args__19798__auto__.push((arguments[i__19792__auto___30699]));

var G__30700 = (i__19792__auto___30699 + (1));
i__19792__auto___30699 = G__30700;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30697))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30697){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30697);
});})(g__30560__auto___30697))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__30560__auto___30697){
return (function (seq30676){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30676));
});})(g__30560__auto___30697))
;


var g__30560__auto___30701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__30560__auto___30701){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30702 = arguments.length;
var i__19792__auto___30703 = (0);
while(true){
if((i__19792__auto___30703 < len__19791__auto___30702)){
args__19798__auto__.push((arguments[i__19792__auto___30703]));

var G__30704 = (i__19792__auto___30703 + (1));
i__19792__auto___30703 = G__30704;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30701))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30701){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30701);
});})(g__30560__auto___30701))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__30560__auto___30701){
return (function (seq30677){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30677));
});})(g__30560__auto___30701))
;


var g__30560__auto___30705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__30560__auto___30705){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30706 = arguments.length;
var i__19792__auto___30707 = (0);
while(true){
if((i__19792__auto___30707 < len__19791__auto___30706)){
args__19798__auto__.push((arguments[i__19792__auto___30707]));

var G__30708 = (i__19792__auto___30707 + (1));
i__19792__auto___30707 = G__30708;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30705))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30705){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30705);
});})(g__30560__auto___30705))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__30560__auto___30705){
return (function (seq30678){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30678));
});})(g__30560__auto___30705))
;


var g__30560__auto___30709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__30560__auto___30709){
return (function cljs$spec$impl$gen$char(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30710 = arguments.length;
var i__19792__auto___30711 = (0);
while(true){
if((i__19792__auto___30711 < len__19791__auto___30710)){
args__19798__auto__.push((arguments[i__19792__auto___30711]));

var G__30712 = (i__19792__auto___30711 + (1));
i__19792__auto___30711 = G__30712;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30709))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30709){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30709);
});})(g__30560__auto___30709))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__30560__auto___30709){
return (function (seq30679){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30679));
});})(g__30560__auto___30709))
;


var g__30560__auto___30713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__30560__auto___30713){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30714 = arguments.length;
var i__19792__auto___30715 = (0);
while(true){
if((i__19792__auto___30715 < len__19791__auto___30714)){
args__19798__auto__.push((arguments[i__19792__auto___30715]));

var G__30716 = (i__19792__auto___30715 + (1));
i__19792__auto___30715 = G__30716;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30713))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30713){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30713);
});})(g__30560__auto___30713))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__30560__auto___30713){
return (function (seq30680){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30680));
});})(g__30560__auto___30713))
;


var g__30560__auto___30717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__30560__auto___30717){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30718 = arguments.length;
var i__19792__auto___30719 = (0);
while(true){
if((i__19792__auto___30719 < len__19791__auto___30718)){
args__19798__auto__.push((arguments[i__19792__auto___30719]));

var G__30720 = (i__19792__auto___30719 + (1));
i__19792__auto___30719 = G__30720;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30717))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30717){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30717);
});})(g__30560__auto___30717))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__30560__auto___30717){
return (function (seq30681){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30681));
});})(g__30560__auto___30717))
;


var g__30560__auto___30721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__30560__auto___30721){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30722 = arguments.length;
var i__19792__auto___30723 = (0);
while(true){
if((i__19792__auto___30723 < len__19791__auto___30722)){
args__19798__auto__.push((arguments[i__19792__auto___30723]));

var G__30724 = (i__19792__auto___30723 + (1));
i__19792__auto___30723 = G__30724;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30721))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30721){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30721);
});})(g__30560__auto___30721))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__30560__auto___30721){
return (function (seq30682){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30682));
});})(g__30560__auto___30721))
;


var g__30560__auto___30725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__30560__auto___30725){
return (function cljs$spec$impl$gen$double(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30726 = arguments.length;
var i__19792__auto___30727 = (0);
while(true){
if((i__19792__auto___30727 < len__19791__auto___30726)){
args__19798__auto__.push((arguments[i__19792__auto___30727]));

var G__30728 = (i__19792__auto___30727 + (1));
i__19792__auto___30727 = G__30728;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30725))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30725){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30725);
});})(g__30560__auto___30725))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__30560__auto___30725){
return (function (seq30683){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30683));
});})(g__30560__auto___30725))
;


var g__30560__auto___30729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__30560__auto___30729){
return (function cljs$spec$impl$gen$int(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30730 = arguments.length;
var i__19792__auto___30731 = (0);
while(true){
if((i__19792__auto___30731 < len__19791__auto___30730)){
args__19798__auto__.push((arguments[i__19792__auto___30731]));

var G__30732 = (i__19792__auto___30731 + (1));
i__19792__auto___30731 = G__30732;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30729))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30729){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30729);
});})(g__30560__auto___30729))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__30560__auto___30729){
return (function (seq30684){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30684));
});})(g__30560__auto___30729))
;


var g__30560__auto___30733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__30560__auto___30733){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30734 = arguments.length;
var i__19792__auto___30735 = (0);
while(true){
if((i__19792__auto___30735 < len__19791__auto___30734)){
args__19798__auto__.push((arguments[i__19792__auto___30735]));

var G__30736 = (i__19792__auto___30735 + (1));
i__19792__auto___30735 = G__30736;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30733))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30733){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30733);
});})(g__30560__auto___30733))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__30560__auto___30733){
return (function (seq30685){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30685));
});})(g__30560__auto___30733))
;


var g__30560__auto___30737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__30560__auto___30737){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30738 = arguments.length;
var i__19792__auto___30739 = (0);
while(true){
if((i__19792__auto___30739 < len__19791__auto___30738)){
args__19798__auto__.push((arguments[i__19792__auto___30739]));

var G__30740 = (i__19792__auto___30739 + (1));
i__19792__auto___30739 = G__30740;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30737))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30737){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30737);
});})(g__30560__auto___30737))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__30560__auto___30737){
return (function (seq30686){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30686));
});})(g__30560__auto___30737))
;


var g__30560__auto___30741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__30560__auto___30741){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30742 = arguments.length;
var i__19792__auto___30743 = (0);
while(true){
if((i__19792__auto___30743 < len__19791__auto___30742)){
args__19798__auto__.push((arguments[i__19792__auto___30743]));

var G__30744 = (i__19792__auto___30743 + (1));
i__19792__auto___30743 = G__30744;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30741))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30741){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30741);
});})(g__30560__auto___30741))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__30560__auto___30741){
return (function (seq30687){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30687));
});})(g__30560__auto___30741))
;


var g__30560__auto___30745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__30560__auto___30745){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30746 = arguments.length;
var i__19792__auto___30747 = (0);
while(true){
if((i__19792__auto___30747 < len__19791__auto___30746)){
args__19798__auto__.push((arguments[i__19792__auto___30747]));

var G__30748 = (i__19792__auto___30747 + (1));
i__19792__auto___30747 = G__30748;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30745))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30745){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30745);
});})(g__30560__auto___30745))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__30560__auto___30745){
return (function (seq30688){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30688));
});})(g__30560__auto___30745))
;


var g__30560__auto___30749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__30560__auto___30749){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30750 = arguments.length;
var i__19792__auto___30751 = (0);
while(true){
if((i__19792__auto___30751 < len__19791__auto___30750)){
args__19798__auto__.push((arguments[i__19792__auto___30751]));

var G__30752 = (i__19792__auto___30751 + (1));
i__19792__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30749))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30749){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30749);
});})(g__30560__auto___30749))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__30560__auto___30749){
return (function (seq30689){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30689));
});})(g__30560__auto___30749))
;


var g__30560__auto___30753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__30560__auto___30753){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30754 = arguments.length;
var i__19792__auto___30755 = (0);
while(true){
if((i__19792__auto___30755 < len__19791__auto___30754)){
args__19798__auto__.push((arguments[i__19792__auto___30755]));

var G__30756 = (i__19792__auto___30755 + (1));
i__19792__auto___30755 = G__30756;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30753))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30753){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30753);
});})(g__30560__auto___30753))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__30560__auto___30753){
return (function (seq30690){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30690));
});})(g__30560__auto___30753))
;


var g__30560__auto___30757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__30560__auto___30757){
return (function cljs$spec$impl$gen$string(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30758 = arguments.length;
var i__19792__auto___30759 = (0);
while(true){
if((i__19792__auto___30759 < len__19791__auto___30758)){
args__19798__auto__.push((arguments[i__19792__auto___30759]));

var G__30760 = (i__19792__auto___30759 + (1));
i__19792__auto___30759 = G__30760;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30757))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30757){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30757);
});})(g__30560__auto___30757))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__30560__auto___30757){
return (function (seq30691){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30691));
});})(g__30560__auto___30757))
;


var g__30560__auto___30761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__30560__auto___30761){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30762 = arguments.length;
var i__19792__auto___30763 = (0);
while(true){
if((i__19792__auto___30763 < len__19791__auto___30762)){
args__19798__auto__.push((arguments[i__19792__auto___30763]));

var G__30764 = (i__19792__auto___30763 + (1));
i__19792__auto___30763 = G__30764;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30761))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30761){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30761);
});})(g__30560__auto___30761))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__30560__auto___30761){
return (function (seq30692){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30692));
});})(g__30560__auto___30761))
;


var g__30560__auto___30765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__30560__auto___30765){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30766 = arguments.length;
var i__19792__auto___30767 = (0);
while(true){
if((i__19792__auto___30767 < len__19791__auto___30766)){
args__19798__auto__.push((arguments[i__19792__auto___30767]));

var G__30768 = (i__19792__auto___30767 + (1));
i__19792__auto___30767 = G__30768;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30765))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30765){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30765);
});})(g__30560__auto___30765))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__30560__auto___30765){
return (function (seq30693){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30693));
});})(g__30560__auto___30765))
;


var g__30560__auto___30769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__30560__auto___30769){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30770 = arguments.length;
var i__19792__auto___30771 = (0);
while(true){
if((i__19792__auto___30771 < len__19791__auto___30770)){
args__19798__auto__.push((arguments[i__19792__auto___30771]));

var G__30772 = (i__19792__auto___30771 + (1));
i__19792__auto___30771 = G__30772;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30769))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30769){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30769);
});})(g__30560__auto___30769))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__30560__auto___30769){
return (function (seq30694){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30694));
});})(g__30560__auto___30769))
;


var g__30560__auto___30773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__30560__auto___30773){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30774 = arguments.length;
var i__19792__auto___30775 = (0);
while(true){
if((i__19792__auto___30775 < len__19791__auto___30774)){
args__19798__auto__.push((arguments[i__19792__auto___30775]));

var G__30776 = (i__19792__auto___30775 + (1));
i__19792__auto___30775 = G__30776;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30773))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30773){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30773);
});})(g__30560__auto___30773))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__30560__auto___30773){
return (function (seq30695){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30695));
});})(g__30560__auto___30773))
;


var g__30560__auto___30777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__30560__auto___30777){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30778 = arguments.length;
var i__19792__auto___30779 = (0);
while(true){
if((i__19792__auto___30779 < len__19791__auto___30778)){
args__19798__auto__.push((arguments[i__19792__auto___30779]));

var G__30780 = (i__19792__auto___30779 + (1));
i__19792__auto___30779 = G__30780;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});})(g__30560__auto___30777))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30560__auto___30777){
return (function (args){
return cljs.core.deref.call(null,g__30560__auto___30777);
});})(g__30560__auto___30777))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__30560__auto___30777){
return (function (seq30696){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30696));
});})(g__30560__auto___30777))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19798__auto__ = [];
var len__19791__auto___30783 = arguments.length;
var i__19792__auto___30784 = (0);
while(true){
if((i__19792__auto___30784 < len__19791__auto___30783)){
args__19798__auto__.push((arguments[i__19792__auto___30784]));

var G__30785 = (i__19792__auto___30784 + (1));
i__19792__auto___30784 = G__30785;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((0) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19799__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30781_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30781_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30782){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30782));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30786_SHARP_){
return (new Date(p1__30786_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1474300070242