// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20009 = [];
var len__10647__auto___20015 = arguments.length;
var i__10648__auto___20016 = (0);
while(true){
if((i__10648__auto___20016 < len__10647__auto___20015)){
args20009.push((arguments[i__10648__auto___20016]));

var G__20017 = (i__10648__auto___20016 + (1));
i__10648__auto___20016 = G__20017;
continue;
} else {
}
break;
}

var G__20011 = args20009.length;
switch (G__20011) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20009.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20012 = (function (f,blockable,meta20013){
this.f = f;
this.blockable = blockable;
this.meta20013 = meta20013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20014,meta20013__$1){
var self__ = this;
var _20014__$1 = this;
return (new cljs.core.async.t_cljs$core$async20012(self__.f,self__.blockable,meta20013__$1));
});

cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20014){
var self__ = this;
var _20014__$1 = this;
return self__.meta20013;
});

cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta20013], null);
});

cljs.core.async.t_cljs$core$async20012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20012";

cljs.core.async.t_cljs$core$async20012.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async20012");
});

cljs.core.async.__GT_t_cljs$core$async20012 = (function cljs$core$async$__GT_t_cljs$core$async20012(f__$1,blockable__$1,meta20013){
return (new cljs.core.async.t_cljs$core$async20012(f__$1,blockable__$1,meta20013));
});

}

return (new cljs.core.async.t_cljs$core$async20012(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20021 = [];
var len__10647__auto___20024 = arguments.length;
var i__10648__auto___20025 = (0);
while(true){
if((i__10648__auto___20025 < len__10647__auto___20024)){
args20021.push((arguments[i__10648__auto___20025]));

var G__20026 = (i__10648__auto___20025 + (1));
i__10648__auto___20025 = G__20026;
continue;
} else {
}
break;
}

var G__20023 = args20021.length;
switch (G__20023) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20021.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20028 = [];
var len__10647__auto___20031 = arguments.length;
var i__10648__auto___20032 = (0);
while(true){
if((i__10648__auto___20032 < len__10647__auto___20031)){
args20028.push((arguments[i__10648__auto___20032]));

var G__20033 = (i__10648__auto___20032 + (1));
i__10648__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var G__20030 = args20028.length;
switch (G__20030) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20028.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20035 = [];
var len__10647__auto___20038 = arguments.length;
var i__10648__auto___20039 = (0);
while(true){
if((i__10648__auto___20039 < len__10647__auto___20038)){
args20035.push((arguments[i__10648__auto___20039]));

var G__20040 = (i__10648__auto___20039 + (1));
i__10648__auto___20039 = G__20040;
continue;
} else {
}
break;
}

var G__20037 = args20035.length;
switch (G__20037) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20035.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20042 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20042) : fn1.call(null,val_20042));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20042,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20042) : fn1.call(null,val_20042));
});})(val_20042,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20043 = [];
var len__10647__auto___20046 = arguments.length;
var i__10648__auto___20047 = (0);
while(true){
if((i__10648__auto___20047 < len__10647__auto___20046)){
args20043.push((arguments[i__10648__auto___20047]));

var G__20048 = (i__10648__auto___20047 + (1));
i__10648__auto___20047 = G__20048;
continue;
} else {
}
break;
}

var G__20045 = args20043.length;
switch (G__20045) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20043.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6736__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10447__auto___20050 = n;
var x_20051 = (0);
while(true){
if((x_20051 < n__10447__auto___20050)){
(a[x_20051] = (0));

var G__20052 = (x_20051 + (1));
x_20051 = G__20052;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20053 = (i + (1));
i = G__20053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async20057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20057 = (function (flag,meta20058){
this.flag = flag;
this.meta20058 = meta20058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20059,meta20058__$1){
var self__ = this;
var _20059__$1 = this;
return (new cljs.core.async.t_cljs$core$async20057(self__.flag,meta20058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20059){
var self__ = this;
var _20059__$1 = this;
return self__.meta20058;
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta20058], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20057";

cljs.core.async.t_cljs$core$async20057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async20057");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20057(flag__$1,meta20058){
return (new cljs.core.async.t_cljs$core$async20057(flag__$1,meta20058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20063 = (function (flag,cb,meta20064){
this.flag = flag;
this.cb = cb;
this.meta20064 = meta20064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20065,meta20064__$1){
var self__ = this;
var _20065__$1 = this;
return (new cljs.core.async.t_cljs$core$async20063(self__.flag,self__.cb,meta20064__$1));
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20065){
var self__ = this;
var _20065__$1 = this;
return self__.meta20064;
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta20064], null);
});

cljs.core.async.t_cljs$core$async20063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20063";

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async20063");
});

cljs.core.async.__GT_t_cljs$core$async20063 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20063(flag__$1,cb__$1,meta20064){
return (new cljs.core.async.t_cljs$core$async20063(flag__$1,cb__$1,meta20064));
});

}

return (new cljs.core.async.t_cljs$core$async20063(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20066_SHARP_){
var G__20070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20066_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20070) : fret.call(null,G__20070));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20067_SHARP_){
var G__20071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20067_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20071) : fret.call(null,G__20071));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__9426__auto__ = wport;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20072 = (i + (1));
i = G__20072;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9426__auto__ = ret;
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6738__auto__ = (function (){var and__9414__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__9414__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__9414__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___20078 = arguments.length;
var i__10648__auto___20079 = (0);
while(true){
if((i__10648__auto___20079 < len__10647__auto___20078)){
args__10654__auto__.push((arguments[i__10648__auto___20079]));

var G__20080 = (i__10648__auto___20079 + (1));
i__10648__auto___20079 = G__20080;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((1) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10655__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20075){
var map__20076 = p__20075;
var map__20076__$1 = ((((!((map__20076 == null)))?((((map__20076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20076):map__20076);
var opts = map__20076__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20073){
var G__20074 = cljs.core.first(seq20073);
var seq20073__$1 = cljs.core.next(seq20073);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20074,seq20073__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20081 = [];
var len__10647__auto___20131 = arguments.length;
var i__10648__auto___20132 = (0);
while(true){
if((i__10648__auto___20132 < len__10647__auto___20131)){
args20081.push((arguments[i__10648__auto___20132]));

var G__20133 = (i__10648__auto___20132 + (1));
i__10648__auto___20132 = G__20133;
continue;
} else {
}
break;
}

var G__20083 = args20081.length;
switch (G__20083) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20081.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19950__auto___20135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___20135){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___20135){
return (function (state_20107){
var state_val_20108 = (state_20107[(1)]);
if((state_val_20108 === (7))){
var inst_20103 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20109_20136 = state_20107__$1;
(statearr_20109_20136[(2)] = inst_20103);

(statearr_20109_20136[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (1))){
var state_20107__$1 = state_20107;
var statearr_20110_20137 = state_20107__$1;
(statearr_20110_20137[(2)] = null);

(statearr_20110_20137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (4))){
var inst_20086 = (state_20107[(7)]);
var inst_20086__$1 = (state_20107[(2)]);
var inst_20087 = (inst_20086__$1 == null);
var state_20107__$1 = (function (){var statearr_20111 = state_20107;
(statearr_20111[(7)] = inst_20086__$1);

return statearr_20111;
})();
if(cljs.core.truth_(inst_20087)){
var statearr_20112_20138 = state_20107__$1;
(statearr_20112_20138[(1)] = (5));

} else {
var statearr_20113_20139 = state_20107__$1;
(statearr_20113_20139[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (13))){
var state_20107__$1 = state_20107;
var statearr_20114_20140 = state_20107__$1;
(statearr_20114_20140[(2)] = null);

(statearr_20114_20140[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (6))){
var inst_20086 = (state_20107[(7)]);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20107__$1,(11),to,inst_20086);
} else {
if((state_val_20108 === (3))){
var inst_20105 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20107__$1,inst_20105);
} else {
if((state_val_20108 === (12))){
var state_20107__$1 = state_20107;
var statearr_20115_20141 = state_20107__$1;
(statearr_20115_20141[(2)] = null);

(statearr_20115_20141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (2))){
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20107__$1,(4),from);
} else {
if((state_val_20108 === (11))){
var inst_20096 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
if(cljs.core.truth_(inst_20096)){
var statearr_20116_20142 = state_20107__$1;
(statearr_20116_20142[(1)] = (12));

} else {
var statearr_20117_20143 = state_20107__$1;
(statearr_20117_20143[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (9))){
var state_20107__$1 = state_20107;
var statearr_20118_20144 = state_20107__$1;
(statearr_20118_20144[(2)] = null);

(statearr_20118_20144[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (5))){
var state_20107__$1 = state_20107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20119_20145 = state_20107__$1;
(statearr_20119_20145[(1)] = (8));

} else {
var statearr_20120_20146 = state_20107__$1;
(statearr_20120_20146[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (14))){
var inst_20101 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20121_20147 = state_20107__$1;
(statearr_20121_20147[(2)] = inst_20101);

(statearr_20121_20147[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (10))){
var inst_20093 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20122_20148 = state_20107__$1;
(statearr_20122_20148[(2)] = inst_20093);

(statearr_20122_20148[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20108 === (8))){
var inst_20090 = cljs.core.async.close_BANG_(to);
var state_20107__$1 = state_20107;
var statearr_20123_20149 = state_20107__$1;
(statearr_20123_20149[(2)] = inst_20090);

(statearr_20123_20149[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___20135))
;
return ((function (switch__19824__auto__,c__19950__auto___20135){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_20127 = [null,null,null,null,null,null,null,null];
(statearr_20127[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_20127[(1)] = (1));

return statearr_20127;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_20107){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20107);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20128){if((e20128 instanceof Object)){
var ex__19828__auto__ = e20128;
var statearr_20129_20150 = state_20107;
(statearr_20129_20150[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20107);

return cljs.core.cst$kw$recur;
} else {
throw e20128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20151 = state_20107;
state_20107 = G__20151;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_20107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_20107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___20135))
})();
var state__19952__auto__ = (function (){var statearr_20130 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20135);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___20135))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__20339){
var vec__20340 = p__20339;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340,(1),null);
var job = vec__20340;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__19950__auto___20526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results){
return (function (state_20347){
var state_val_20348 = (state_20347[(1)]);
if((state_val_20348 === (1))){
var state_20347__$1 = state_20347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20347__$1,(2),res,v);
} else {
if((state_val_20348 === (2))){
var inst_20344 = (state_20347[(2)]);
var inst_20345 = cljs.core.async.close_BANG_(res);
var state_20347__$1 = (function (){var statearr_20349 = state_20347;
(statearr_20349[(7)] = inst_20344);

return statearr_20349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20347__$1,inst_20345);
} else {
return null;
}
}
});})(c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results))
;
return ((function (switch__19824__auto__,c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_20353 = [null,null,null,null,null,null,null,null];
(statearr_20353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__);

(statearr_20353[(1)] = (1));

return statearr_20353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1 = (function (state_20347){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20347);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20354){if((e20354 instanceof Object)){
var ex__19828__auto__ = e20354;
var statearr_20355_20527 = state_20347;
(statearr_20355_20527[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20347);

return cljs.core.cst$kw$recur;
} else {
throw e20354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20528 = state_20347;
state_20347 = G__20528;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = function(state_20347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1.call(this,state_20347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results))
})();
var state__19952__auto__ = (function (){var statearr_20356 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20526);

return statearr_20356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___20526,res,vec__20340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20357){
var vec__20358 = p__20357;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(1),null);
var job = vec__20358;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__10447__auto___20529 = n;
var __20530 = (0);
while(true){
if((__20530 < n__10447__auto___20529)){
var G__20361_20531 = type;
var G__20361_20532__$1 = (((G__20361_20531 instanceof cljs.core.Keyword))?G__20361_20531.fqn:null);
switch (G__20361_20532__$1) {
case "compute":
var c__19950__auto___20534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20530,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (__20530,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function (state_20374){
var state_val_20375 = (state_20374[(1)]);
if((state_val_20375 === (1))){
var state_20374__$1 = state_20374;
var statearr_20376_20535 = state_20374__$1;
(statearr_20376_20535[(2)] = null);

(statearr_20376_20535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20375 === (2))){
var state_20374__$1 = state_20374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20374__$1,(4),jobs);
} else {
if((state_val_20375 === (3))){
var inst_20372 = (state_20374[(2)]);
var state_20374__$1 = state_20374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20374__$1,inst_20372);
} else {
if((state_val_20375 === (4))){
var inst_20364 = (state_20374[(2)]);
var inst_20365 = process(inst_20364);
var state_20374__$1 = state_20374;
if(cljs.core.truth_(inst_20365)){
var statearr_20377_20536 = state_20374__$1;
(statearr_20377_20536[(1)] = (5));

} else {
var statearr_20378_20537 = state_20374__$1;
(statearr_20378_20537[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20375 === (5))){
var state_20374__$1 = state_20374;
var statearr_20379_20538 = state_20374__$1;
(statearr_20379_20538[(2)] = null);

(statearr_20379_20538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20375 === (6))){
var state_20374__$1 = state_20374;
var statearr_20380_20539 = state_20374__$1;
(statearr_20380_20539[(2)] = null);

(statearr_20380_20539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20375 === (7))){
var inst_20370 = (state_20374[(2)]);
var state_20374__$1 = state_20374;
var statearr_20381_20540 = state_20374__$1;
(statearr_20381_20540[(2)] = inst_20370);

(statearr_20381_20540[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20530,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
;
return ((function (__20530,switch__19824__auto__,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_20385 = [null,null,null,null,null,null,null];
(statearr_20385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__);

(statearr_20385[(1)] = (1));

return statearr_20385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1 = (function (state_20374){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20374);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20386){if((e20386 instanceof Object)){
var ex__19828__auto__ = e20386;
var statearr_20387_20541 = state_20374;
(statearr_20387_20541[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20374);

return cljs.core.cst$kw$recur;
} else {
throw e20386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20542 = state_20374;
state_20374 = G__20542;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = function(state_20374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1.call(this,state_20374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__;
})()
;})(__20530,switch__19824__auto__,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
})();
var state__19952__auto__ = (function (){var statearr_20388 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20534);

return statearr_20388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(__20530,c__19950__auto___20534,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
);


break;
case "async":
var c__19950__auto___20543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20530,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (__20530,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function (state_20401){
var state_val_20402 = (state_20401[(1)]);
if((state_val_20402 === (1))){
var state_20401__$1 = state_20401;
var statearr_20403_20544 = state_20401__$1;
(statearr_20403_20544[(2)] = null);

(statearr_20403_20544[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20402 === (2))){
var state_20401__$1 = state_20401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20401__$1,(4),jobs);
} else {
if((state_val_20402 === (3))){
var inst_20399 = (state_20401[(2)]);
var state_20401__$1 = state_20401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20401__$1,inst_20399);
} else {
if((state_val_20402 === (4))){
var inst_20391 = (state_20401[(2)]);
var inst_20392 = async(inst_20391);
var state_20401__$1 = state_20401;
if(cljs.core.truth_(inst_20392)){
var statearr_20404_20545 = state_20401__$1;
(statearr_20404_20545[(1)] = (5));

} else {
var statearr_20405_20546 = state_20401__$1;
(statearr_20405_20546[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20402 === (5))){
var state_20401__$1 = state_20401;
var statearr_20406_20547 = state_20401__$1;
(statearr_20406_20547[(2)] = null);

(statearr_20406_20547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20402 === (6))){
var state_20401__$1 = state_20401;
var statearr_20407_20548 = state_20401__$1;
(statearr_20407_20548[(2)] = null);

(statearr_20407_20548[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20402 === (7))){
var inst_20397 = (state_20401[(2)]);
var state_20401__$1 = state_20401;
var statearr_20408_20549 = state_20401__$1;
(statearr_20408_20549[(2)] = inst_20397);

(statearr_20408_20549[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__20530,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
;
return ((function (__20530,switch__19824__auto__,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_20412 = [null,null,null,null,null,null,null];
(statearr_20412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__);

(statearr_20412[(1)] = (1));

return statearr_20412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1 = (function (state_20401){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20401);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20413){if((e20413 instanceof Object)){
var ex__19828__auto__ = e20413;
var statearr_20414_20550 = state_20401;
(statearr_20414_20550[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20401);

return cljs.core.cst$kw$recur;
} else {
throw e20413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20551 = state_20401;
state_20401 = G__20551;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = function(state_20401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1.call(this,state_20401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__;
})()
;})(__20530,switch__19824__auto__,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
})();
var state__19952__auto__ = (function (){var statearr_20415 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20543);

return statearr_20415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(__20530,c__19950__auto___20543,G__20361_20531,G__20361_20532__$1,n__10447__auto___20529,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__20552 = (__20530 + (1));
__20530 = G__20552;
continue;
} else {
}
break;
}

var c__19950__auto___20553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___20553,jobs,results,process,async){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___20553,jobs,results,process,async){
return (function (state_20437){
var state_val_20438 = (state_20437[(1)]);
if((state_val_20438 === (1))){
var state_20437__$1 = state_20437;
var statearr_20439_20554 = state_20437__$1;
(statearr_20439_20554[(2)] = null);

(statearr_20439_20554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20438 === (2))){
var state_20437__$1 = state_20437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20437__$1,(4),from);
} else {
if((state_val_20438 === (3))){
var inst_20435 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20437__$1,inst_20435);
} else {
if((state_val_20438 === (4))){
var inst_20418 = (state_20437[(7)]);
var inst_20418__$1 = (state_20437[(2)]);
var inst_20419 = (inst_20418__$1 == null);
var state_20437__$1 = (function (){var statearr_20440 = state_20437;
(statearr_20440[(7)] = inst_20418__$1);

return statearr_20440;
})();
if(cljs.core.truth_(inst_20419)){
var statearr_20441_20555 = state_20437__$1;
(statearr_20441_20555[(1)] = (5));

} else {
var statearr_20442_20556 = state_20437__$1;
(statearr_20442_20556[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20438 === (5))){
var inst_20421 = cljs.core.async.close_BANG_(jobs);
var state_20437__$1 = state_20437;
var statearr_20443_20557 = state_20437__$1;
(statearr_20443_20557[(2)] = inst_20421);

(statearr_20443_20557[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20438 === (6))){
var inst_20423 = (state_20437[(8)]);
var inst_20418 = (state_20437[(7)]);
var inst_20423__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20425 = [inst_20418,inst_20423__$1];
var inst_20426 = (new cljs.core.PersistentVector(null,2,(5),inst_20424,inst_20425,null));
var state_20437__$1 = (function (){var statearr_20444 = state_20437;
(statearr_20444[(8)] = inst_20423__$1);

return statearr_20444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20437__$1,(8),jobs,inst_20426);
} else {
if((state_val_20438 === (7))){
var inst_20433 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
var statearr_20445_20558 = state_20437__$1;
(statearr_20445_20558[(2)] = inst_20433);

(statearr_20445_20558[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20438 === (8))){
var inst_20423 = (state_20437[(8)]);
var inst_20428 = (state_20437[(2)]);
var state_20437__$1 = (function (){var statearr_20446 = state_20437;
(statearr_20446[(9)] = inst_20428);

return statearr_20446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20437__$1,(9),results,inst_20423);
} else {
if((state_val_20438 === (9))){
var inst_20430 = (state_20437[(2)]);
var state_20437__$1 = (function (){var statearr_20447 = state_20437;
(statearr_20447[(10)] = inst_20430);

return statearr_20447;
})();
var statearr_20448_20559 = state_20437__$1;
(statearr_20448_20559[(2)] = null);

(statearr_20448_20559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___20553,jobs,results,process,async))
;
return ((function (switch__19824__auto__,c__19950__auto___20553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_20452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__);

(statearr_20452[(1)] = (1));

return statearr_20452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1 = (function (state_20437){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20437);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20453){if((e20453 instanceof Object)){
var ex__19828__auto__ = e20453;
var statearr_20454_20560 = state_20437;
(statearr_20454_20560[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20437);

return cljs.core.cst$kw$recur;
} else {
throw e20453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20561 = state_20437;
state_20437 = G__20561;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = function(state_20437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1.call(this,state_20437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___20553,jobs,results,process,async))
})();
var state__19952__auto__ = (function (){var statearr_20455 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20553);

return statearr_20455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___20553,jobs,results,process,async))
);


var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__,jobs,results,process,async){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__,jobs,results,process,async){
return (function (state_20493){
var state_val_20494 = (state_20493[(1)]);
if((state_val_20494 === (7))){
var inst_20489 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20495_20562 = state_20493__$1;
(statearr_20495_20562[(2)] = inst_20489);

(statearr_20495_20562[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (20))){
var state_20493__$1 = state_20493;
var statearr_20496_20563 = state_20493__$1;
(statearr_20496_20563[(2)] = null);

(statearr_20496_20563[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (1))){
var state_20493__$1 = state_20493;
var statearr_20497_20564 = state_20493__$1;
(statearr_20497_20564[(2)] = null);

(statearr_20497_20564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (4))){
var inst_20458 = (state_20493[(7)]);
var inst_20458__$1 = (state_20493[(2)]);
var inst_20459 = (inst_20458__$1 == null);
var state_20493__$1 = (function (){var statearr_20498 = state_20493;
(statearr_20498[(7)] = inst_20458__$1);

return statearr_20498;
})();
if(cljs.core.truth_(inst_20459)){
var statearr_20499_20565 = state_20493__$1;
(statearr_20499_20565[(1)] = (5));

} else {
var statearr_20500_20566 = state_20493__$1;
(statearr_20500_20566[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (15))){
var inst_20471 = (state_20493[(8)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20493__$1,(18),to,inst_20471);
} else {
if((state_val_20494 === (21))){
var inst_20484 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20501_20567 = state_20493__$1;
(statearr_20501_20567[(2)] = inst_20484);

(statearr_20501_20567[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (13))){
var inst_20486 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20502 = state_20493;
(statearr_20502[(9)] = inst_20486);

return statearr_20502;
})();
var statearr_20503_20568 = state_20493__$1;
(statearr_20503_20568[(2)] = null);

(statearr_20503_20568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (6))){
var inst_20458 = (state_20493[(7)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,(11),inst_20458);
} else {
if((state_val_20494 === (17))){
var inst_20479 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
if(cljs.core.truth_(inst_20479)){
var statearr_20504_20569 = state_20493__$1;
(statearr_20504_20569[(1)] = (19));

} else {
var statearr_20505_20570 = state_20493__$1;
(statearr_20505_20570[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (3))){
var inst_20491 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20493__$1,inst_20491);
} else {
if((state_val_20494 === (12))){
var inst_20468 = (state_20493[(10)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,(14),inst_20468);
} else {
if((state_val_20494 === (2))){
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,(4),results);
} else {
if((state_val_20494 === (19))){
var state_20493__$1 = state_20493;
var statearr_20506_20571 = state_20493__$1;
(statearr_20506_20571[(2)] = null);

(statearr_20506_20571[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (11))){
var inst_20468 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20507 = state_20493;
(statearr_20507[(10)] = inst_20468);

return statearr_20507;
})();
var statearr_20508_20572 = state_20493__$1;
(statearr_20508_20572[(2)] = null);

(statearr_20508_20572[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (9))){
var state_20493__$1 = state_20493;
var statearr_20509_20573 = state_20493__$1;
(statearr_20509_20573[(2)] = null);

(statearr_20509_20573[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (5))){
var state_20493__$1 = state_20493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20510_20574 = state_20493__$1;
(statearr_20510_20574[(1)] = (8));

} else {
var statearr_20511_20575 = state_20493__$1;
(statearr_20511_20575[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (14))){
var inst_20471 = (state_20493[(8)]);
var inst_20473 = (state_20493[(11)]);
var inst_20471__$1 = (state_20493[(2)]);
var inst_20472 = (inst_20471__$1 == null);
var inst_20473__$1 = cljs.core.not(inst_20472);
var state_20493__$1 = (function (){var statearr_20512 = state_20493;
(statearr_20512[(8)] = inst_20471__$1);

(statearr_20512[(11)] = inst_20473__$1);

return statearr_20512;
})();
if(inst_20473__$1){
var statearr_20513_20576 = state_20493__$1;
(statearr_20513_20576[(1)] = (15));

} else {
var statearr_20514_20577 = state_20493__$1;
(statearr_20514_20577[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (16))){
var inst_20473 = (state_20493[(11)]);
var state_20493__$1 = state_20493;
var statearr_20515_20578 = state_20493__$1;
(statearr_20515_20578[(2)] = inst_20473);

(statearr_20515_20578[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (10))){
var inst_20465 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20516_20579 = state_20493__$1;
(statearr_20516_20579[(2)] = inst_20465);

(statearr_20516_20579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (18))){
var inst_20476 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20517_20580 = state_20493__$1;
(statearr_20517_20580[(2)] = inst_20476);

(statearr_20517_20580[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (8))){
var inst_20462 = cljs.core.async.close_BANG_(to);
var state_20493__$1 = state_20493;
var statearr_20518_20581 = state_20493__$1;
(statearr_20518_20581[(2)] = inst_20462);

(statearr_20518_20581[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto__,jobs,results,process,async))
;
return ((function (switch__19824__auto__,c__19950__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_20522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__);

(statearr_20522[(1)] = (1));

return statearr_20522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1 = (function (state_20493){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20493);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20523){if((e20523 instanceof Object)){
var ex__19828__auto__ = e20523;
var statearr_20524_20582 = state_20493;
(statearr_20524_20582[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20493);

return cljs.core.cst$kw$recur;
} else {
throw e20523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20583 = state_20493;
state_20493 = G__20583;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__ = function(state_20493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1.call(this,state_20493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__,jobs,results,process,async))
})();
var state__19952__auto__ = (function (){var statearr_20525 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_20525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__,jobs,results,process,async))
);

return c__19950__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20584 = [];
var len__10647__auto___20587 = arguments.length;
var i__10648__auto___20588 = (0);
while(true){
if((i__10648__auto___20588 < len__10647__auto___20587)){
args20584.push((arguments[i__10648__auto___20588]));

var G__20589 = (i__10648__auto___20588 + (1));
i__10648__auto___20588 = G__20589;
continue;
} else {
}
break;
}

var G__20586 = args20584.length;
switch (G__20586) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20584.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20591 = [];
var len__10647__auto___20594 = arguments.length;
var i__10648__auto___20595 = (0);
while(true){
if((i__10648__auto___20595 < len__10647__auto___20594)){
args20591.push((arguments[i__10648__auto___20595]));

var G__20596 = (i__10648__auto___20595 + (1));
i__10648__auto___20595 = G__20596;
continue;
} else {
}
break;
}

var G__20593 = args20591.length;
switch (G__20593) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20591.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20598 = [];
var len__10647__auto___20651 = arguments.length;
var i__10648__auto___20652 = (0);
while(true){
if((i__10648__auto___20652 < len__10647__auto___20651)){
args20598.push((arguments[i__10648__auto___20652]));

var G__20653 = (i__10648__auto___20652 + (1));
i__10648__auto___20652 = G__20653;
continue;
} else {
}
break;
}

var G__20600 = args20598.length;
switch (G__20600) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20598.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__19950__auto___20655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___20655,tc,fc){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___20655,tc,fc){
return (function (state_20626){
var state_val_20627 = (state_20626[(1)]);
if((state_val_20627 === (7))){
var inst_20622 = (state_20626[(2)]);
var state_20626__$1 = state_20626;
var statearr_20628_20656 = state_20626__$1;
(statearr_20628_20656[(2)] = inst_20622);

(statearr_20628_20656[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (1))){
var state_20626__$1 = state_20626;
var statearr_20629_20657 = state_20626__$1;
(statearr_20629_20657[(2)] = null);

(statearr_20629_20657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (4))){
var inst_20603 = (state_20626[(7)]);
var inst_20603__$1 = (state_20626[(2)]);
var inst_20604 = (inst_20603__$1 == null);
var state_20626__$1 = (function (){var statearr_20630 = state_20626;
(statearr_20630[(7)] = inst_20603__$1);

return statearr_20630;
})();
if(cljs.core.truth_(inst_20604)){
var statearr_20631_20658 = state_20626__$1;
(statearr_20631_20658[(1)] = (5));

} else {
var statearr_20632_20659 = state_20626__$1;
(statearr_20632_20659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (13))){
var state_20626__$1 = state_20626;
var statearr_20633_20660 = state_20626__$1;
(statearr_20633_20660[(2)] = null);

(statearr_20633_20660[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (6))){
var inst_20603 = (state_20626[(7)]);
var inst_20609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20603) : p.call(null,inst_20603));
var state_20626__$1 = state_20626;
if(cljs.core.truth_(inst_20609)){
var statearr_20634_20661 = state_20626__$1;
(statearr_20634_20661[(1)] = (9));

} else {
var statearr_20635_20662 = state_20626__$1;
(statearr_20635_20662[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (3))){
var inst_20624 = (state_20626[(2)]);
var state_20626__$1 = state_20626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20626__$1,inst_20624);
} else {
if((state_val_20627 === (12))){
var state_20626__$1 = state_20626;
var statearr_20636_20663 = state_20626__$1;
(statearr_20636_20663[(2)] = null);

(statearr_20636_20663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (2))){
var state_20626__$1 = state_20626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20626__$1,(4),ch);
} else {
if((state_val_20627 === (11))){
var inst_20603 = (state_20626[(7)]);
var inst_20613 = (state_20626[(2)]);
var state_20626__$1 = state_20626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20626__$1,(8),inst_20613,inst_20603);
} else {
if((state_val_20627 === (9))){
var state_20626__$1 = state_20626;
var statearr_20637_20664 = state_20626__$1;
(statearr_20637_20664[(2)] = tc);

(statearr_20637_20664[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (5))){
var inst_20606 = cljs.core.async.close_BANG_(tc);
var inst_20607 = cljs.core.async.close_BANG_(fc);
var state_20626__$1 = (function (){var statearr_20638 = state_20626;
(statearr_20638[(8)] = inst_20606);

return statearr_20638;
})();
var statearr_20639_20665 = state_20626__$1;
(statearr_20639_20665[(2)] = inst_20607);

(statearr_20639_20665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (14))){
var inst_20620 = (state_20626[(2)]);
var state_20626__$1 = state_20626;
var statearr_20640_20666 = state_20626__$1;
(statearr_20640_20666[(2)] = inst_20620);

(statearr_20640_20666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (10))){
var state_20626__$1 = state_20626;
var statearr_20641_20667 = state_20626__$1;
(statearr_20641_20667[(2)] = fc);

(statearr_20641_20667[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20627 === (8))){
var inst_20615 = (state_20626[(2)]);
var state_20626__$1 = state_20626;
if(cljs.core.truth_(inst_20615)){
var statearr_20642_20668 = state_20626__$1;
(statearr_20642_20668[(1)] = (12));

} else {
var statearr_20643_20669 = state_20626__$1;
(statearr_20643_20669[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___20655,tc,fc))
;
return ((function (switch__19824__auto__,c__19950__auto___20655,tc,fc){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_20647 = [null,null,null,null,null,null,null,null,null];
(statearr_20647[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_20647[(1)] = (1));

return statearr_20647;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_20626){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20626);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20648){if((e20648 instanceof Object)){
var ex__19828__auto__ = e20648;
var statearr_20649_20670 = state_20626;
(statearr_20649_20670[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20626);

return cljs.core.cst$kw$recur;
} else {
throw e20648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20671 = state_20626;
state_20626 = G__20671;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_20626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_20626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___20655,tc,fc))
})();
var state__19952__auto__ = (function (){var statearr_20650 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___20655);

return statearr_20650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___20655,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_20735){
var state_val_20736 = (state_20735[(1)]);
if((state_val_20736 === (7))){
var inst_20731 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
var statearr_20737_20758 = state_20735__$1;
(statearr_20737_20758[(2)] = inst_20731);

(statearr_20737_20758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (1))){
var inst_20715 = init;
var state_20735__$1 = (function (){var statearr_20738 = state_20735;
(statearr_20738[(7)] = inst_20715);

return statearr_20738;
})();
var statearr_20739_20759 = state_20735__$1;
(statearr_20739_20759[(2)] = null);

(statearr_20739_20759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (4))){
var inst_20718 = (state_20735[(8)]);
var inst_20718__$1 = (state_20735[(2)]);
var inst_20719 = (inst_20718__$1 == null);
var state_20735__$1 = (function (){var statearr_20740 = state_20735;
(statearr_20740[(8)] = inst_20718__$1);

return statearr_20740;
})();
if(cljs.core.truth_(inst_20719)){
var statearr_20741_20760 = state_20735__$1;
(statearr_20741_20760[(1)] = (5));

} else {
var statearr_20742_20761 = state_20735__$1;
(statearr_20742_20761[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (6))){
var inst_20722 = (state_20735[(9)]);
var inst_20718 = (state_20735[(8)]);
var inst_20715 = (state_20735[(7)]);
var inst_20722__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20715,inst_20718) : f.call(null,inst_20715,inst_20718));
var inst_20723 = cljs.core.reduced_QMARK_(inst_20722__$1);
var state_20735__$1 = (function (){var statearr_20743 = state_20735;
(statearr_20743[(9)] = inst_20722__$1);

return statearr_20743;
})();
if(inst_20723){
var statearr_20744_20762 = state_20735__$1;
(statearr_20744_20762[(1)] = (8));

} else {
var statearr_20745_20763 = state_20735__$1;
(statearr_20745_20763[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (3))){
var inst_20733 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20735__$1,inst_20733);
} else {
if((state_val_20736 === (2))){
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20735__$1,(4),ch);
} else {
if((state_val_20736 === (9))){
var inst_20722 = (state_20735[(9)]);
var inst_20715 = inst_20722;
var state_20735__$1 = (function (){var statearr_20746 = state_20735;
(statearr_20746[(7)] = inst_20715);

return statearr_20746;
})();
var statearr_20747_20764 = state_20735__$1;
(statearr_20747_20764[(2)] = null);

(statearr_20747_20764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (5))){
var inst_20715 = (state_20735[(7)]);
var state_20735__$1 = state_20735;
var statearr_20748_20765 = state_20735__$1;
(statearr_20748_20765[(2)] = inst_20715);

(statearr_20748_20765[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (10))){
var inst_20729 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
var statearr_20749_20766 = state_20735__$1;
(statearr_20749_20766[(2)] = inst_20729);

(statearr_20749_20766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20736 === (8))){
var inst_20722 = (state_20735[(9)]);
var inst_20725 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_20722) : cljs.core.deref.call(null,inst_20722));
var state_20735__$1 = state_20735;
var statearr_20750_20767 = state_20735__$1;
(statearr_20750_20767[(2)] = inst_20725);

(statearr_20750_20767[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19825__auto____0 = (function (){
var statearr_20754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20754[(0)] = cljs$core$async$reduce_$_state_machine__19825__auto__);

(statearr_20754[(1)] = (1));

return statearr_20754;
});
var cljs$core$async$reduce_$_state_machine__19825__auto____1 = (function (state_20735){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20735);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20755){if((e20755 instanceof Object)){
var ex__19828__auto__ = e20755;
var statearr_20756_20768 = state_20735;
(statearr_20756_20768[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20735);

return cljs.core.cst$kw$recur;
} else {
throw e20755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20769 = state_20735;
state_20735 = G__20769;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19825__auto__ = function(state_20735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19825__auto____1.call(this,state_20735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19825__auto____0;
cljs$core$async$reduce_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19825__auto____1;
return cljs$core$async$reduce_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_20757 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_20757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__,f__$1){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__,f__$1){
return (function (state_20789){
var state_val_20790 = (state_20789[(1)]);
if((state_val_20790 === (1))){
var inst_20784 = cljs.core.async.reduce(f__$1,init,ch);
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20789__$1,(2),inst_20784);
} else {
if((state_val_20790 === (2))){
var inst_20786 = (state_20789[(2)]);
var inst_20787 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20786) : f__$1.call(null,inst_20786));
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20789__$1,inst_20787);
} else {
return null;
}
}
});})(c__19950__auto__,f__$1))
;
return ((function (switch__19824__auto__,c__19950__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19825__auto____0 = (function (){
var statearr_20794 = [null,null,null,null,null,null,null];
(statearr_20794[(0)] = cljs$core$async$transduce_$_state_machine__19825__auto__);

(statearr_20794[(1)] = (1));

return statearr_20794;
});
var cljs$core$async$transduce_$_state_machine__19825__auto____1 = (function (state_20789){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20789);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object)){
var ex__19828__auto__ = e20795;
var statearr_20796_20798 = state_20789;
(statearr_20796_20798[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20789);

return cljs.core.cst$kw$recur;
} else {
throw e20795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20799 = state_20789;
state_20789 = G__20799;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19825__auto__ = function(state_20789){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19825__auto____1.call(this,state_20789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19825__auto____0;
cljs$core$async$transduce_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19825__auto____1;
return cljs$core$async$transduce_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__,f__$1))
})();
var state__19952__auto__ = (function (){var statearr_20797 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__,f__$1))
);

return c__19950__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20800 = [];
var len__10647__auto___20852 = arguments.length;
var i__10648__auto___20853 = (0);
while(true){
if((i__10648__auto___20853 < len__10647__auto___20852)){
args20800.push((arguments[i__10648__auto___20853]));

var G__20854 = (i__10648__auto___20853 + (1));
i__10648__auto___20853 = G__20854;
continue;
} else {
}
break;
}

var G__20802 = args20800.length;
switch (G__20802) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20800.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_20827){
var state_val_20828 = (state_20827[(1)]);
if((state_val_20828 === (7))){
var inst_20809 = (state_20827[(2)]);
var state_20827__$1 = state_20827;
var statearr_20829_20856 = state_20827__$1;
(statearr_20829_20856[(2)] = inst_20809);

(statearr_20829_20856[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (1))){
var inst_20803 = cljs.core.seq(coll);
var inst_20804 = inst_20803;
var state_20827__$1 = (function (){var statearr_20830 = state_20827;
(statearr_20830[(7)] = inst_20804);

return statearr_20830;
})();
var statearr_20831_20857 = state_20827__$1;
(statearr_20831_20857[(2)] = null);

(statearr_20831_20857[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (4))){
var inst_20804 = (state_20827[(7)]);
var inst_20807 = cljs.core.first(inst_20804);
var state_20827__$1 = state_20827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20827__$1,(7),ch,inst_20807);
} else {
if((state_val_20828 === (13))){
var inst_20821 = (state_20827[(2)]);
var state_20827__$1 = state_20827;
var statearr_20832_20858 = state_20827__$1;
(statearr_20832_20858[(2)] = inst_20821);

(statearr_20832_20858[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (6))){
var inst_20812 = (state_20827[(2)]);
var state_20827__$1 = state_20827;
if(cljs.core.truth_(inst_20812)){
var statearr_20833_20859 = state_20827__$1;
(statearr_20833_20859[(1)] = (8));

} else {
var statearr_20834_20860 = state_20827__$1;
(statearr_20834_20860[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (3))){
var inst_20825 = (state_20827[(2)]);
var state_20827__$1 = state_20827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20827__$1,inst_20825);
} else {
if((state_val_20828 === (12))){
var state_20827__$1 = state_20827;
var statearr_20835_20861 = state_20827__$1;
(statearr_20835_20861[(2)] = null);

(statearr_20835_20861[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (2))){
var inst_20804 = (state_20827[(7)]);
var state_20827__$1 = state_20827;
if(cljs.core.truth_(inst_20804)){
var statearr_20836_20862 = state_20827__$1;
(statearr_20836_20862[(1)] = (4));

} else {
var statearr_20837_20863 = state_20827__$1;
(statearr_20837_20863[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (11))){
var inst_20818 = cljs.core.async.close_BANG_(ch);
var state_20827__$1 = state_20827;
var statearr_20838_20864 = state_20827__$1;
(statearr_20838_20864[(2)] = inst_20818);

(statearr_20838_20864[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (9))){
var state_20827__$1 = state_20827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20839_20865 = state_20827__$1;
(statearr_20839_20865[(1)] = (11));

} else {
var statearr_20840_20866 = state_20827__$1;
(statearr_20840_20866[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (5))){
var inst_20804 = (state_20827[(7)]);
var state_20827__$1 = state_20827;
var statearr_20841_20867 = state_20827__$1;
(statearr_20841_20867[(2)] = inst_20804);

(statearr_20841_20867[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (10))){
var inst_20823 = (state_20827[(2)]);
var state_20827__$1 = state_20827;
var statearr_20842_20868 = state_20827__$1;
(statearr_20842_20868[(2)] = inst_20823);

(statearr_20842_20868[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20828 === (8))){
var inst_20804 = (state_20827[(7)]);
var inst_20814 = cljs.core.next(inst_20804);
var inst_20804__$1 = inst_20814;
var state_20827__$1 = (function (){var statearr_20843 = state_20827;
(statearr_20843[(7)] = inst_20804__$1);

return statearr_20843;
})();
var statearr_20844_20869 = state_20827__$1;
(statearr_20844_20869[(2)] = null);

(statearr_20844_20869[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_20848 = [null,null,null,null,null,null,null,null];
(statearr_20848[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_20848[(1)] = (1));

return statearr_20848;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_20827){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_20827);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e20849){if((e20849 instanceof Object)){
var ex__19828__auto__ = e20849;
var statearr_20850_20870 = state_20827;
(statearr_20850_20870[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20827);

return cljs.core.cst$kw$recur;
} else {
throw e20849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__20871 = state_20827;
state_20827 = G__20871;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_20827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_20827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_20851 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_20851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_20851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__10144__auto__ = (((_ == null))?null:_);
var m__10145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__10145__auto__.call(null,_));
} else {
var m__10145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__10145__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10145__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__10145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10145__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto__.call(null,m,ch));
} else {
var m__10145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10145__auto__.call(null,m));
} else {
var m__10145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10145__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__21100 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21100) : cljs.core.atom.call(null,G__21100));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21101 = (function (ch,cs,meta21102){
this.ch = ch;
this.cs = cs;
this.meta21102 = meta21102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21103,meta21102__$1){
var self__ = this;
var _21103__$1 = this;
return (new cljs.core.async.t_cljs$core$async21101(self__.ch,self__.cs,meta21102__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21103){
var self__ = this;
var _21103__$1 = this;
return self__.meta21102;
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21104_21328 = self__.cs;
var G__21105_21329 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21104_21328,G__21105_21329) : cljs.core.reset_BANG_.call(null,G__21104_21328,G__21105_21329));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta21102], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21101";

cljs.core.async.t_cljs$core$async21101.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async21101");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21101 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21101(ch__$1,cs__$1,meta21102){
return (new cljs.core.async.t_cljs$core$async21101(ch__$1,cs__$1,meta21102));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21101(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19950__auto___21330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___21330,cs,m,dchan,dctr,done){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___21330,cs,m,dchan,dctr,done){
return (function (state_21240){
var state_val_21241 = (state_21240[(1)]);
if((state_val_21241 === (7))){
var inst_21236 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21242_21331 = state_21240__$1;
(statearr_21242_21331[(2)] = inst_21236);

(statearr_21242_21331[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (20))){
var inst_21139 = (state_21240[(7)]);
var inst_21151 = cljs.core.first(inst_21139);
var inst_21152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21151,(0),null);
var inst_21153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21151,(1),null);
var state_21240__$1 = (function (){var statearr_21243 = state_21240;
(statearr_21243[(8)] = inst_21152);

return statearr_21243;
})();
if(cljs.core.truth_(inst_21153)){
var statearr_21244_21332 = state_21240__$1;
(statearr_21244_21332[(1)] = (22));

} else {
var statearr_21245_21333 = state_21240__$1;
(statearr_21245_21333[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (27))){
var inst_21108 = (state_21240[(9)]);
var inst_21183 = (state_21240[(10)]);
var inst_21188 = (state_21240[(11)]);
var inst_21181 = (state_21240[(12)]);
var inst_21188__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21181,inst_21183);
var inst_21189 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21188__$1,inst_21108,done);
var state_21240__$1 = (function (){var statearr_21246 = state_21240;
(statearr_21246[(11)] = inst_21188__$1);

return statearr_21246;
})();
if(cljs.core.truth_(inst_21189)){
var statearr_21247_21334 = state_21240__$1;
(statearr_21247_21334[(1)] = (30));

} else {
var statearr_21248_21335 = state_21240__$1;
(statearr_21248_21335[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (1))){
var state_21240__$1 = state_21240;
var statearr_21249_21336 = state_21240__$1;
(statearr_21249_21336[(2)] = null);

(statearr_21249_21336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (24))){
var inst_21139 = (state_21240[(7)]);
var inst_21158 = (state_21240[(2)]);
var inst_21159 = cljs.core.next(inst_21139);
var inst_21117 = inst_21159;
var inst_21118 = null;
var inst_21119 = (0);
var inst_21120 = (0);
var state_21240__$1 = (function (){var statearr_21250 = state_21240;
(statearr_21250[(13)] = inst_21120);

(statearr_21250[(14)] = inst_21118);

(statearr_21250[(15)] = inst_21119);

(statearr_21250[(16)] = inst_21158);

(statearr_21250[(17)] = inst_21117);

return statearr_21250;
})();
var statearr_21251_21337 = state_21240__$1;
(statearr_21251_21337[(2)] = null);

(statearr_21251_21337[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (39))){
var state_21240__$1 = state_21240;
var statearr_21255_21338 = state_21240__$1;
(statearr_21255_21338[(2)] = null);

(statearr_21255_21338[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (4))){
var inst_21108 = (state_21240[(9)]);
var inst_21108__$1 = (state_21240[(2)]);
var inst_21109 = (inst_21108__$1 == null);
var state_21240__$1 = (function (){var statearr_21256 = state_21240;
(statearr_21256[(9)] = inst_21108__$1);

return statearr_21256;
})();
if(cljs.core.truth_(inst_21109)){
var statearr_21257_21339 = state_21240__$1;
(statearr_21257_21339[(1)] = (5));

} else {
var statearr_21258_21340 = state_21240__$1;
(statearr_21258_21340[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (15))){
var inst_21120 = (state_21240[(13)]);
var inst_21118 = (state_21240[(14)]);
var inst_21119 = (state_21240[(15)]);
var inst_21117 = (state_21240[(17)]);
var inst_21135 = (state_21240[(2)]);
var inst_21136 = (inst_21120 + (1));
var tmp21252 = inst_21118;
var tmp21253 = inst_21119;
var tmp21254 = inst_21117;
var inst_21117__$1 = tmp21254;
var inst_21118__$1 = tmp21252;
var inst_21119__$1 = tmp21253;
var inst_21120__$1 = inst_21136;
var state_21240__$1 = (function (){var statearr_21259 = state_21240;
(statearr_21259[(13)] = inst_21120__$1);

(statearr_21259[(14)] = inst_21118__$1);

(statearr_21259[(15)] = inst_21119__$1);

(statearr_21259[(17)] = inst_21117__$1);

(statearr_21259[(18)] = inst_21135);

return statearr_21259;
})();
var statearr_21260_21341 = state_21240__$1;
(statearr_21260_21341[(2)] = null);

(statearr_21260_21341[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (21))){
var inst_21162 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21264_21342 = state_21240__$1;
(statearr_21264_21342[(2)] = inst_21162);

(statearr_21264_21342[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (31))){
var inst_21188 = (state_21240[(11)]);
var inst_21192 = done(null);
var inst_21193 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21188);
var state_21240__$1 = (function (){var statearr_21265 = state_21240;
(statearr_21265[(19)] = inst_21192);

return statearr_21265;
})();
var statearr_21266_21343 = state_21240__$1;
(statearr_21266_21343[(2)] = inst_21193);

(statearr_21266_21343[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (32))){
var inst_21182 = (state_21240[(20)]);
var inst_21183 = (state_21240[(10)]);
var inst_21180 = (state_21240[(21)]);
var inst_21181 = (state_21240[(12)]);
var inst_21195 = (state_21240[(2)]);
var inst_21196 = (inst_21183 + (1));
var tmp21261 = inst_21182;
var tmp21262 = inst_21180;
var tmp21263 = inst_21181;
var inst_21180__$1 = tmp21262;
var inst_21181__$1 = tmp21263;
var inst_21182__$1 = tmp21261;
var inst_21183__$1 = inst_21196;
var state_21240__$1 = (function (){var statearr_21267 = state_21240;
(statearr_21267[(20)] = inst_21182__$1);

(statearr_21267[(10)] = inst_21183__$1);

(statearr_21267[(22)] = inst_21195);

(statearr_21267[(21)] = inst_21180__$1);

(statearr_21267[(12)] = inst_21181__$1);

return statearr_21267;
})();
var statearr_21268_21344 = state_21240__$1;
(statearr_21268_21344[(2)] = null);

(statearr_21268_21344[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (40))){
var inst_21208 = (state_21240[(23)]);
var inst_21212 = done(null);
var inst_21213 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21208);
var state_21240__$1 = (function (){var statearr_21269 = state_21240;
(statearr_21269[(24)] = inst_21212);

return statearr_21269;
})();
var statearr_21270_21345 = state_21240__$1;
(statearr_21270_21345[(2)] = inst_21213);

(statearr_21270_21345[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (33))){
var inst_21199 = (state_21240[(25)]);
var inst_21201 = cljs.core.chunked_seq_QMARK_(inst_21199);
var state_21240__$1 = state_21240;
if(inst_21201){
var statearr_21271_21346 = state_21240__$1;
(statearr_21271_21346[(1)] = (36));

} else {
var statearr_21272_21347 = state_21240__$1;
(statearr_21272_21347[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (13))){
var inst_21129 = (state_21240[(26)]);
var inst_21132 = cljs.core.async.close_BANG_(inst_21129);
var state_21240__$1 = state_21240;
var statearr_21273_21348 = state_21240__$1;
(statearr_21273_21348[(2)] = inst_21132);

(statearr_21273_21348[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (22))){
var inst_21152 = (state_21240[(8)]);
var inst_21155 = cljs.core.async.close_BANG_(inst_21152);
var state_21240__$1 = state_21240;
var statearr_21274_21349 = state_21240__$1;
(statearr_21274_21349[(2)] = inst_21155);

(statearr_21274_21349[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (36))){
var inst_21199 = (state_21240[(25)]);
var inst_21203 = cljs.core.chunk_first(inst_21199);
var inst_21204 = cljs.core.chunk_rest(inst_21199);
var inst_21205 = cljs.core.count(inst_21203);
var inst_21180 = inst_21204;
var inst_21181 = inst_21203;
var inst_21182 = inst_21205;
var inst_21183 = (0);
var state_21240__$1 = (function (){var statearr_21275 = state_21240;
(statearr_21275[(20)] = inst_21182);

(statearr_21275[(10)] = inst_21183);

(statearr_21275[(21)] = inst_21180);

(statearr_21275[(12)] = inst_21181);

return statearr_21275;
})();
var statearr_21276_21350 = state_21240__$1;
(statearr_21276_21350[(2)] = null);

(statearr_21276_21350[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (41))){
var inst_21199 = (state_21240[(25)]);
var inst_21215 = (state_21240[(2)]);
var inst_21216 = cljs.core.next(inst_21199);
var inst_21180 = inst_21216;
var inst_21181 = null;
var inst_21182 = (0);
var inst_21183 = (0);
var state_21240__$1 = (function (){var statearr_21277 = state_21240;
(statearr_21277[(20)] = inst_21182);

(statearr_21277[(10)] = inst_21183);

(statearr_21277[(27)] = inst_21215);

(statearr_21277[(21)] = inst_21180);

(statearr_21277[(12)] = inst_21181);

return statearr_21277;
})();
var statearr_21278_21351 = state_21240__$1;
(statearr_21278_21351[(2)] = null);

(statearr_21278_21351[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (43))){
var state_21240__$1 = state_21240;
var statearr_21279_21352 = state_21240__$1;
(statearr_21279_21352[(2)] = null);

(statearr_21279_21352[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (29))){
var inst_21224 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21280_21353 = state_21240__$1;
(statearr_21280_21353[(2)] = inst_21224);

(statearr_21280_21353[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (44))){
var inst_21233 = (state_21240[(2)]);
var state_21240__$1 = (function (){var statearr_21281 = state_21240;
(statearr_21281[(28)] = inst_21233);

return statearr_21281;
})();
var statearr_21282_21354 = state_21240__$1;
(statearr_21282_21354[(2)] = null);

(statearr_21282_21354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (6))){
var inst_21172 = (state_21240[(29)]);
var inst_21171 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_21172__$1 = cljs.core.keys(inst_21171);
var inst_21173 = cljs.core.count(inst_21172__$1);
var inst_21174 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_21173) : cljs.core.reset_BANG_.call(null,dctr,inst_21173));
var inst_21179 = cljs.core.seq(inst_21172__$1);
var inst_21180 = inst_21179;
var inst_21181 = null;
var inst_21182 = (0);
var inst_21183 = (0);
var state_21240__$1 = (function (){var statearr_21283 = state_21240;
(statearr_21283[(20)] = inst_21182);

(statearr_21283[(10)] = inst_21183);

(statearr_21283[(29)] = inst_21172__$1);

(statearr_21283[(21)] = inst_21180);

(statearr_21283[(12)] = inst_21181);

(statearr_21283[(30)] = inst_21174);

return statearr_21283;
})();
var statearr_21284_21355 = state_21240__$1;
(statearr_21284_21355[(2)] = null);

(statearr_21284_21355[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (28))){
var inst_21180 = (state_21240[(21)]);
var inst_21199 = (state_21240[(25)]);
var inst_21199__$1 = cljs.core.seq(inst_21180);
var state_21240__$1 = (function (){var statearr_21285 = state_21240;
(statearr_21285[(25)] = inst_21199__$1);

return statearr_21285;
})();
if(inst_21199__$1){
var statearr_21286_21356 = state_21240__$1;
(statearr_21286_21356[(1)] = (33));

} else {
var statearr_21287_21357 = state_21240__$1;
(statearr_21287_21357[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (25))){
var inst_21182 = (state_21240[(20)]);
var inst_21183 = (state_21240[(10)]);
var inst_21185 = (inst_21183 < inst_21182);
var inst_21186 = inst_21185;
var state_21240__$1 = state_21240;
if(cljs.core.truth_(inst_21186)){
var statearr_21288_21358 = state_21240__$1;
(statearr_21288_21358[(1)] = (27));

} else {
var statearr_21289_21359 = state_21240__$1;
(statearr_21289_21359[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (34))){
var state_21240__$1 = state_21240;
var statearr_21290_21360 = state_21240__$1;
(statearr_21290_21360[(2)] = null);

(statearr_21290_21360[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (17))){
var state_21240__$1 = state_21240;
var statearr_21291_21361 = state_21240__$1;
(statearr_21291_21361[(2)] = null);

(statearr_21291_21361[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (3))){
var inst_21238 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21240__$1,inst_21238);
} else {
if((state_val_21241 === (12))){
var inst_21167 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21292_21362 = state_21240__$1;
(statearr_21292_21362[(2)] = inst_21167);

(statearr_21292_21362[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (2))){
var state_21240__$1 = state_21240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21240__$1,(4),ch);
} else {
if((state_val_21241 === (23))){
var state_21240__$1 = state_21240;
var statearr_21293_21363 = state_21240__$1;
(statearr_21293_21363[(2)] = null);

(statearr_21293_21363[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (35))){
var inst_21222 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21294_21364 = state_21240__$1;
(statearr_21294_21364[(2)] = inst_21222);

(statearr_21294_21364[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (19))){
var inst_21139 = (state_21240[(7)]);
var inst_21143 = cljs.core.chunk_first(inst_21139);
var inst_21144 = cljs.core.chunk_rest(inst_21139);
var inst_21145 = cljs.core.count(inst_21143);
var inst_21117 = inst_21144;
var inst_21118 = inst_21143;
var inst_21119 = inst_21145;
var inst_21120 = (0);
var state_21240__$1 = (function (){var statearr_21295 = state_21240;
(statearr_21295[(13)] = inst_21120);

(statearr_21295[(14)] = inst_21118);

(statearr_21295[(15)] = inst_21119);

(statearr_21295[(17)] = inst_21117);

return statearr_21295;
})();
var statearr_21296_21365 = state_21240__$1;
(statearr_21296_21365[(2)] = null);

(statearr_21296_21365[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (11))){
var inst_21139 = (state_21240[(7)]);
var inst_21117 = (state_21240[(17)]);
var inst_21139__$1 = cljs.core.seq(inst_21117);
var state_21240__$1 = (function (){var statearr_21297 = state_21240;
(statearr_21297[(7)] = inst_21139__$1);

return statearr_21297;
})();
if(inst_21139__$1){
var statearr_21298_21366 = state_21240__$1;
(statearr_21298_21366[(1)] = (16));

} else {
var statearr_21299_21367 = state_21240__$1;
(statearr_21299_21367[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (9))){
var inst_21169 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21300_21368 = state_21240__$1;
(statearr_21300_21368[(2)] = inst_21169);

(statearr_21300_21368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (5))){
var inst_21115 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_21116 = cljs.core.seq(inst_21115);
var inst_21117 = inst_21116;
var inst_21118 = null;
var inst_21119 = (0);
var inst_21120 = (0);
var state_21240__$1 = (function (){var statearr_21301 = state_21240;
(statearr_21301[(13)] = inst_21120);

(statearr_21301[(14)] = inst_21118);

(statearr_21301[(15)] = inst_21119);

(statearr_21301[(17)] = inst_21117);

return statearr_21301;
})();
var statearr_21302_21369 = state_21240__$1;
(statearr_21302_21369[(2)] = null);

(statearr_21302_21369[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (14))){
var state_21240__$1 = state_21240;
var statearr_21303_21370 = state_21240__$1;
(statearr_21303_21370[(2)] = null);

(statearr_21303_21370[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (45))){
var inst_21230 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21304_21371 = state_21240__$1;
(statearr_21304_21371[(2)] = inst_21230);

(statearr_21304_21371[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (26))){
var inst_21172 = (state_21240[(29)]);
var inst_21226 = (state_21240[(2)]);
var inst_21227 = cljs.core.seq(inst_21172);
var state_21240__$1 = (function (){var statearr_21305 = state_21240;
(statearr_21305[(31)] = inst_21226);

return statearr_21305;
})();
if(inst_21227){
var statearr_21306_21372 = state_21240__$1;
(statearr_21306_21372[(1)] = (42));

} else {
var statearr_21307_21373 = state_21240__$1;
(statearr_21307_21373[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (16))){
var inst_21139 = (state_21240[(7)]);
var inst_21141 = cljs.core.chunked_seq_QMARK_(inst_21139);
var state_21240__$1 = state_21240;
if(inst_21141){
var statearr_21308_21374 = state_21240__$1;
(statearr_21308_21374[(1)] = (19));

} else {
var statearr_21309_21375 = state_21240__$1;
(statearr_21309_21375[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (38))){
var inst_21219 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21310_21376 = state_21240__$1;
(statearr_21310_21376[(2)] = inst_21219);

(statearr_21310_21376[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (30))){
var state_21240__$1 = state_21240;
var statearr_21311_21377 = state_21240__$1;
(statearr_21311_21377[(2)] = null);

(statearr_21311_21377[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (10))){
var inst_21120 = (state_21240[(13)]);
var inst_21118 = (state_21240[(14)]);
var inst_21128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21118,inst_21120);
var inst_21129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21128,(0),null);
var inst_21130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21128,(1),null);
var state_21240__$1 = (function (){var statearr_21312 = state_21240;
(statearr_21312[(26)] = inst_21129);

return statearr_21312;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21313_21378 = state_21240__$1;
(statearr_21313_21378[(1)] = (13));

} else {
var statearr_21314_21379 = state_21240__$1;
(statearr_21314_21379[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (18))){
var inst_21165 = (state_21240[(2)]);
var state_21240__$1 = state_21240;
var statearr_21315_21380 = state_21240__$1;
(statearr_21315_21380[(2)] = inst_21165);

(statearr_21315_21380[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (42))){
var state_21240__$1 = state_21240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21240__$1,(45),dchan);
} else {
if((state_val_21241 === (37))){
var inst_21208 = (state_21240[(23)]);
var inst_21108 = (state_21240[(9)]);
var inst_21199 = (state_21240[(25)]);
var inst_21208__$1 = cljs.core.first(inst_21199);
var inst_21209 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21208__$1,inst_21108,done);
var state_21240__$1 = (function (){var statearr_21316 = state_21240;
(statearr_21316[(23)] = inst_21208__$1);

return statearr_21316;
})();
if(cljs.core.truth_(inst_21209)){
var statearr_21317_21381 = state_21240__$1;
(statearr_21317_21381[(1)] = (39));

} else {
var statearr_21318_21382 = state_21240__$1;
(statearr_21318_21382[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21241 === (8))){
var inst_21120 = (state_21240[(13)]);
var inst_21119 = (state_21240[(15)]);
var inst_21122 = (inst_21120 < inst_21119);
var inst_21123 = inst_21122;
var state_21240__$1 = state_21240;
if(cljs.core.truth_(inst_21123)){
var statearr_21319_21383 = state_21240__$1;
(statearr_21319_21383[(1)] = (10));

} else {
var statearr_21320_21384 = state_21240__$1;
(statearr_21320_21384[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___21330,cs,m,dchan,dctr,done))
;
return ((function (switch__19824__auto__,c__19950__auto___21330,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19825__auto__ = null;
var cljs$core$async$mult_$_state_machine__19825__auto____0 = (function (){
var statearr_21324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21324[(0)] = cljs$core$async$mult_$_state_machine__19825__auto__);

(statearr_21324[(1)] = (1));

return statearr_21324;
});
var cljs$core$async$mult_$_state_machine__19825__auto____1 = (function (state_21240){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_21240);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e21325){if((e21325 instanceof Object)){
var ex__19828__auto__ = e21325;
var statearr_21326_21385 = state_21240;
(statearr_21326_21385[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21240);

return cljs.core.cst$kw$recur;
} else {
throw e21325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__21386 = state_21240;
state_21240 = G__21386;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19825__auto__ = function(state_21240){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19825__auto____1.call(this,state_21240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19825__auto____0;
cljs$core$async$mult_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19825__auto____1;
return cljs$core$async$mult_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___21330,cs,m,dchan,dctr,done))
})();
var state__19952__auto__ = (function (){var statearr_21327 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_21327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___21330);

return statearr_21327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___21330,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21387 = [];
var len__10647__auto___21390 = arguments.length;
var i__10648__auto___21391 = (0);
while(true){
if((i__10648__auto___21391 < len__10647__auto___21390)){
args21387.push((arguments[i__10648__auto___21391]));

var G__21392 = (i__10648__auto___21391 + (1));
i__10648__auto___21391 = G__21392;
continue;
} else {
}
break;
}

var G__21389 = args21387.length;
switch (G__21389) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21387.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto__.call(null,m,ch));
} else {
var m__10145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto__.call(null,m,ch));
} else {
var m__10145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10145__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10145__auto__.call(null,m));
} else {
var m__10145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10145__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10145__auto__.call(null,m,state_map));
} else {
var m__10145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10145__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__10144__auto__ = (((m == null))?null:m);
var m__10145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10145__auto__.call(null,m,mode));
} else {
var m__10145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10145__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10654__auto__ = [];
var len__10647__auto___21404 = arguments.length;
var i__10648__auto___21405 = (0);
while(true){
if((i__10648__auto___21405 < len__10647__auto___21404)){
args__10654__auto__.push((arguments[i__10648__auto___21405]));

var G__21406 = (i__10648__auto___21405 + (1));
i__10648__auto___21405 = G__21406;
continue;
} else {
}
break;
}

var argseq__10655__auto__ = ((((3) < args__10654__auto__.length))?(new cljs.core.IndexedSeq(args__10654__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10655__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21398){
var map__21399 = p__21398;
var map__21399__$1 = ((((!((map__21399 == null)))?((((map__21399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21399):map__21399);
var opts = map__21399__$1;
var statearr_21401_21407 = state;
(statearr_21401_21407[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts(((function (map__21399,map__21399__$1,opts){
return (function (val){
var statearr_21402_21408 = state;
(statearr_21402_21408[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21399,map__21399__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_21403_21409 = state;
(statearr_21403_21409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21394){
var G__21395 = cljs.core.first(seq21394);
var seq21394__$1 = cljs.core.next(seq21394);
var G__21396 = cljs.core.first(seq21394__$1);
var seq21394__$2 = cljs.core.next(seq21394__$1);
var G__21397 = cljs.core.first(seq21394__$2);
var seq21394__$3 = cljs.core.next(seq21394__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21395,G__21396,G__21397,seq21394__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__21581 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21581) : cljs.core.atom.call(null,G__21581));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__21582 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21582) : cljs.core.atom.call(null,G__21582));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21583 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21584){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21584 = meta21584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21585,meta21584__$1){
var self__ = this;
var _21585__$1 = this;
return (new cljs.core.async.t_cljs$core$async21583(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21585){
var self__ = this;
var _21585__$1 = this;
return self__.meta21584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21586_21752 = self__.cs;
var G__21587_21753 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21586_21752,G__21587_21753) : cljs.core.reset_BANG_.call(null,G__21586_21752,G__21587_21753));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta21584], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21583";

cljs.core.async.t_cljs$core$async21583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async21583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21584){
return (new cljs.core.async.t_cljs$core$async21583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21583(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19950__auto___21754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21689){
var state_val_21690 = (state_21689[(1)]);
if((state_val_21690 === (7))){
var inst_21604 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21691_21755 = state_21689__$1;
(statearr_21691_21755[(2)] = inst_21604);

(statearr_21691_21755[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (20))){
var inst_21616 = (state_21689[(7)]);
var state_21689__$1 = state_21689;
var statearr_21692_21756 = state_21689__$1;
(statearr_21692_21756[(2)] = inst_21616);

(statearr_21692_21756[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (27))){
var state_21689__$1 = state_21689;
var statearr_21693_21757 = state_21689__$1;
(statearr_21693_21757[(2)] = null);

(statearr_21693_21757[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (1))){
var inst_21591 = (state_21689[(8)]);
var inst_21591__$1 = calc_state();
var inst_21593 = (inst_21591__$1 == null);
var inst_21594 = cljs.core.not(inst_21593);
var state_21689__$1 = (function (){var statearr_21694 = state_21689;
(statearr_21694[(8)] = inst_21591__$1);

return statearr_21694;
})();
if(inst_21594){
var statearr_21695_21758 = state_21689__$1;
(statearr_21695_21758[(1)] = (2));

} else {
var statearr_21696_21759 = state_21689__$1;
(statearr_21696_21759[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (24))){
var inst_21640 = (state_21689[(9)]);
var inst_21649 = (state_21689[(10)]);
var inst_21663 = (state_21689[(11)]);
var inst_21663__$1 = (inst_21640.cljs$core$IFn$_invoke$arity$1 ? inst_21640.cljs$core$IFn$_invoke$arity$1(inst_21649) : inst_21640.call(null,inst_21649));
var state_21689__$1 = (function (){var statearr_21697 = state_21689;
(statearr_21697[(11)] = inst_21663__$1);

return statearr_21697;
})();
if(cljs.core.truth_(inst_21663__$1)){
var statearr_21698_21760 = state_21689__$1;
(statearr_21698_21760[(1)] = (29));

} else {
var statearr_21699_21761 = state_21689__$1;
(statearr_21699_21761[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (4))){
var inst_21607 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21607)){
var statearr_21700_21762 = state_21689__$1;
(statearr_21700_21762[(1)] = (8));

} else {
var statearr_21701_21763 = state_21689__$1;
(statearr_21701_21763[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (15))){
var inst_21634 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21634)){
var statearr_21702_21764 = state_21689__$1;
(statearr_21702_21764[(1)] = (19));

} else {
var statearr_21703_21765 = state_21689__$1;
(statearr_21703_21765[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (21))){
var inst_21639 = (state_21689[(12)]);
var inst_21639__$1 = (state_21689[(2)]);
var inst_21640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21639__$1,cljs.core.cst$kw$solos);
var inst_21641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21639__$1,cljs.core.cst$kw$mutes);
var inst_21642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21639__$1,cljs.core.cst$kw$reads);
var state_21689__$1 = (function (){var statearr_21704 = state_21689;
(statearr_21704[(9)] = inst_21640);

(statearr_21704[(12)] = inst_21639__$1);

(statearr_21704[(13)] = inst_21641);

return statearr_21704;
})();
return cljs.core.async.ioc_alts_BANG_(state_21689__$1,(22),inst_21642);
} else {
if((state_val_21690 === (31))){
var inst_21671 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21671)){
var statearr_21705_21766 = state_21689__$1;
(statearr_21705_21766[(1)] = (32));

} else {
var statearr_21706_21767 = state_21689__$1;
(statearr_21706_21767[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (32))){
var inst_21648 = (state_21689[(14)]);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21689__$1,(35),out,inst_21648);
} else {
if((state_val_21690 === (33))){
var inst_21639 = (state_21689[(12)]);
var inst_21616 = inst_21639;
var state_21689__$1 = (function (){var statearr_21707 = state_21689;
(statearr_21707[(7)] = inst_21616);

return statearr_21707;
})();
var statearr_21708_21768 = state_21689__$1;
(statearr_21708_21768[(2)] = null);

(statearr_21708_21768[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (13))){
var inst_21616 = (state_21689[(7)]);
var inst_21623 = inst_21616.cljs$lang$protocol_mask$partition0$;
var inst_21624 = (inst_21623 & (64));
var inst_21625 = inst_21616.cljs$core$ISeq$;
var inst_21626 = (cljs.core.PROTOCOL_SENTINEL === inst_21625);
var inst_21627 = (inst_21624) || (inst_21626);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21627)){
var statearr_21709_21769 = state_21689__$1;
(statearr_21709_21769[(1)] = (16));

} else {
var statearr_21710_21770 = state_21689__$1;
(statearr_21710_21770[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (22))){
var inst_21649 = (state_21689[(10)]);
var inst_21648 = (state_21689[(14)]);
var inst_21647 = (state_21689[(2)]);
var inst_21648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21647,(0),null);
var inst_21649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21647,(1),null);
var inst_21650 = (inst_21648__$1 == null);
var inst_21651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21649__$1,change);
var inst_21652 = (inst_21650) || (inst_21651);
var state_21689__$1 = (function (){var statearr_21711 = state_21689;
(statearr_21711[(10)] = inst_21649__$1);

(statearr_21711[(14)] = inst_21648__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21652)){
var statearr_21712_21771 = state_21689__$1;
(statearr_21712_21771[(1)] = (23));

} else {
var statearr_21713_21772 = state_21689__$1;
(statearr_21713_21772[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (36))){
var inst_21639 = (state_21689[(12)]);
var inst_21616 = inst_21639;
var state_21689__$1 = (function (){var statearr_21714 = state_21689;
(statearr_21714[(7)] = inst_21616);

return statearr_21714;
})();
var statearr_21715_21773 = state_21689__$1;
(statearr_21715_21773[(2)] = null);

(statearr_21715_21773[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (29))){
var inst_21663 = (state_21689[(11)]);
var state_21689__$1 = state_21689;
var statearr_21716_21774 = state_21689__$1;
(statearr_21716_21774[(2)] = inst_21663);

(statearr_21716_21774[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (6))){
var state_21689__$1 = state_21689;
var statearr_21717_21775 = state_21689__$1;
(statearr_21717_21775[(2)] = false);

(statearr_21717_21775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (28))){
var inst_21659 = (state_21689[(2)]);
var inst_21660 = calc_state();
var inst_21616 = inst_21660;
var state_21689__$1 = (function (){var statearr_21718 = state_21689;
(statearr_21718[(15)] = inst_21659);

(statearr_21718[(7)] = inst_21616);

return statearr_21718;
})();
var statearr_21719_21776 = state_21689__$1;
(statearr_21719_21776[(2)] = null);

(statearr_21719_21776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (25))){
var inst_21685 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21720_21777 = state_21689__$1;
(statearr_21720_21777[(2)] = inst_21685);

(statearr_21720_21777[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (34))){
var inst_21683 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21721_21778 = state_21689__$1;
(statearr_21721_21778[(2)] = inst_21683);

(statearr_21721_21778[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (17))){
var state_21689__$1 = state_21689;
var statearr_21722_21779 = state_21689__$1;
(statearr_21722_21779[(2)] = false);

(statearr_21722_21779[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (3))){
var state_21689__$1 = state_21689;
var statearr_21723_21780 = state_21689__$1;
(statearr_21723_21780[(2)] = false);

(statearr_21723_21780[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (12))){
var inst_21687 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21689__$1,inst_21687);
} else {
if((state_val_21690 === (2))){
var inst_21591 = (state_21689[(8)]);
var inst_21596 = inst_21591.cljs$lang$protocol_mask$partition0$;
var inst_21597 = (inst_21596 & (64));
var inst_21598 = inst_21591.cljs$core$ISeq$;
var inst_21599 = (cljs.core.PROTOCOL_SENTINEL === inst_21598);
var inst_21600 = (inst_21597) || (inst_21599);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21600)){
var statearr_21724_21781 = state_21689__$1;
(statearr_21724_21781[(1)] = (5));

} else {
var statearr_21725_21782 = state_21689__$1;
(statearr_21725_21782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (23))){
var inst_21648 = (state_21689[(14)]);
var inst_21654 = (inst_21648 == null);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21654)){
var statearr_21726_21783 = state_21689__$1;
(statearr_21726_21783[(1)] = (26));

} else {
var statearr_21727_21784 = state_21689__$1;
(statearr_21727_21784[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (35))){
var inst_21674 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21674)){
var statearr_21728_21785 = state_21689__$1;
(statearr_21728_21785[(1)] = (36));

} else {
var statearr_21729_21786 = state_21689__$1;
(statearr_21729_21786[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (19))){
var inst_21616 = (state_21689[(7)]);
var inst_21636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21616);
var state_21689__$1 = state_21689;
var statearr_21730_21787 = state_21689__$1;
(statearr_21730_21787[(2)] = inst_21636);

(statearr_21730_21787[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (11))){
var inst_21616 = (state_21689[(7)]);
var inst_21620 = (inst_21616 == null);
var inst_21621 = cljs.core.not(inst_21620);
var state_21689__$1 = state_21689;
if(inst_21621){
var statearr_21731_21788 = state_21689__$1;
(statearr_21731_21788[(1)] = (13));

} else {
var statearr_21732_21789 = state_21689__$1;
(statearr_21732_21789[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (9))){
var inst_21591 = (state_21689[(8)]);
var state_21689__$1 = state_21689;
var statearr_21733_21790 = state_21689__$1;
(statearr_21733_21790[(2)] = inst_21591);

(statearr_21733_21790[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (5))){
var state_21689__$1 = state_21689;
var statearr_21734_21791 = state_21689__$1;
(statearr_21734_21791[(2)] = true);

(statearr_21734_21791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (14))){
var state_21689__$1 = state_21689;
var statearr_21735_21792 = state_21689__$1;
(statearr_21735_21792[(2)] = false);

(statearr_21735_21792[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (26))){
var inst_21649 = (state_21689[(10)]);
var inst_21656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21649);
var state_21689__$1 = state_21689;
var statearr_21736_21793 = state_21689__$1;
(statearr_21736_21793[(2)] = inst_21656);

(statearr_21736_21793[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (16))){
var state_21689__$1 = state_21689;
var statearr_21737_21794 = state_21689__$1;
(statearr_21737_21794[(2)] = true);

(statearr_21737_21794[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (38))){
var inst_21679 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21738_21795 = state_21689__$1;
(statearr_21738_21795[(2)] = inst_21679);

(statearr_21738_21795[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (30))){
var inst_21640 = (state_21689[(9)]);
var inst_21649 = (state_21689[(10)]);
var inst_21641 = (state_21689[(13)]);
var inst_21666 = cljs.core.empty_QMARK_(inst_21640);
var inst_21667 = (inst_21641.cljs$core$IFn$_invoke$arity$1 ? inst_21641.cljs$core$IFn$_invoke$arity$1(inst_21649) : inst_21641.call(null,inst_21649));
var inst_21668 = cljs.core.not(inst_21667);
var inst_21669 = (inst_21666) && (inst_21668);
var state_21689__$1 = state_21689;
var statearr_21739_21796 = state_21689__$1;
(statearr_21739_21796[(2)] = inst_21669);

(statearr_21739_21796[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (10))){
var inst_21591 = (state_21689[(8)]);
var inst_21612 = (state_21689[(2)]);
var inst_21613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21612,cljs.core.cst$kw$solos);
var inst_21614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21612,cljs.core.cst$kw$mutes);
var inst_21615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21612,cljs.core.cst$kw$reads);
var inst_21616 = inst_21591;
var state_21689__$1 = (function (){var statearr_21740 = state_21689;
(statearr_21740[(16)] = inst_21613);

(statearr_21740[(7)] = inst_21616);

(statearr_21740[(17)] = inst_21615);

(statearr_21740[(18)] = inst_21614);

return statearr_21740;
})();
var statearr_21741_21797 = state_21689__$1;
(statearr_21741_21797[(2)] = null);

(statearr_21741_21797[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (18))){
var inst_21631 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21742_21798 = state_21689__$1;
(statearr_21742_21798[(2)] = inst_21631);

(statearr_21742_21798[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (37))){
var state_21689__$1 = state_21689;
var statearr_21743_21799 = state_21689__$1;
(statearr_21743_21799[(2)] = null);

(statearr_21743_21799[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21690 === (8))){
var inst_21591 = (state_21689[(8)]);
var inst_21609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21591);
var state_21689__$1 = state_21689;
var statearr_21744_21800 = state_21689__$1;
(statearr_21744_21800[(2)] = inst_21609);

(statearr_21744_21800[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19824__auto__,c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19825__auto__ = null;
var cljs$core$async$mix_$_state_machine__19825__auto____0 = (function (){
var statearr_21748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21748[(0)] = cljs$core$async$mix_$_state_machine__19825__auto__);

(statearr_21748[(1)] = (1));

return statearr_21748;
});
var cljs$core$async$mix_$_state_machine__19825__auto____1 = (function (state_21689){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_21689);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e21749){if((e21749 instanceof Object)){
var ex__19828__auto__ = e21749;
var statearr_21750_21801 = state_21689;
(statearr_21750_21801[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21689);

return cljs.core.cst$kw$recur;
} else {
throw e21749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__21802 = state_21689;
state_21689 = G__21802;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19825__auto__ = function(state_21689){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19825__auto____1.call(this,state_21689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19825__auto____0;
cljs$core$async$mix_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19825__auto____1;
return cljs$core$async$mix_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19952__auto__ = (function (){var statearr_21751 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_21751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___21754);

return statearr_21751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___21754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10145__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__10145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10145__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10145__auto__.call(null,p,v,ch));
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10145__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21803 = [];
var len__10647__auto___21806 = arguments.length;
var i__10648__auto___21807 = (0);
while(true){
if((i__10648__auto___21807 < len__10647__auto___21806)){
args21803.push((arguments[i__10648__auto___21807]));

var G__21808 = (i__10648__auto___21807 + (1));
i__10648__auto___21807 = G__21808;
continue;
} else {
}
break;
}

var G__21805 = args21803.length;
switch (G__21805) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21803.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__10145__auto__.call(null,p));
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__10145__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__10144__auto__ = (((p == null))?null:p);
var m__10145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10144__auto__)]);
if(!((m__10145__auto__ == null))){
return (m__10145__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__10145__auto__.call(null,p,v));
} else {
var m__10145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10145__auto____$1 == null))){
return (m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10145__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__10145__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21811 = [];
var len__10647__auto___21939 = arguments.length;
var i__10648__auto___21940 = (0);
while(true){
if((i__10648__auto___21940 < len__10647__auto___21939)){
args21811.push((arguments[i__10648__auto___21940]));

var G__21941 = (i__10648__auto___21940 + (1));
i__10648__auto___21940 = G__21941;
continue;
} else {
}
break;
}

var G__21813 = args21811.length;
switch (G__21813) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21811.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__21814 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21814) : cljs.core.atom.call(null,G__21814));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__9426__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__9426__auto__,mults){
return (function (p1__21810_SHARP_){
if(cljs.core.truth_((p1__21810_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21810_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21810_SHARP_.call(null,topic)))){
return p1__21810_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21810_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__9426__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21815 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21816){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21816 = meta21816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21817,meta21816__$1){
var self__ = this;
var _21817__$1 = this;
return (new cljs.core.async.t_cljs$core$async21815(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21816__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21817){
var self__ = this;
var _21817__$1 = this;
return self__.meta21816;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21818 = self__.mults;
var G__21819 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21818,G__21819) : cljs.core.reset_BANG_.call(null,G__21818,G__21819));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta21816], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21815";

cljs.core.async.t_cljs$core$async21815.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async21815");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21815 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21816){
return (new cljs.core.async.t_cljs$core$async21815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21816));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21815(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19950__auto___21943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___21943,mults,ensure_mult,p){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___21943,mults,ensure_mult,p){
return (function (state_21891){
var state_val_21892 = (state_21891[(1)]);
if((state_val_21892 === (7))){
var inst_21887 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21893_21944 = state_21891__$1;
(statearr_21893_21944[(2)] = inst_21887);

(statearr_21893_21944[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (20))){
var state_21891__$1 = state_21891;
var statearr_21894_21945 = state_21891__$1;
(statearr_21894_21945[(2)] = null);

(statearr_21894_21945[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (1))){
var state_21891__$1 = state_21891;
var statearr_21895_21946 = state_21891__$1;
(statearr_21895_21946[(2)] = null);

(statearr_21895_21946[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (24))){
var inst_21870 = (state_21891[(7)]);
var inst_21879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21870);
var state_21891__$1 = state_21891;
var statearr_21896_21947 = state_21891__$1;
(statearr_21896_21947[(2)] = inst_21879);

(statearr_21896_21947[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (4))){
var inst_21822 = (state_21891[(8)]);
var inst_21822__$1 = (state_21891[(2)]);
var inst_21823 = (inst_21822__$1 == null);
var state_21891__$1 = (function (){var statearr_21897 = state_21891;
(statearr_21897[(8)] = inst_21822__$1);

return statearr_21897;
})();
if(cljs.core.truth_(inst_21823)){
var statearr_21898_21948 = state_21891__$1;
(statearr_21898_21948[(1)] = (5));

} else {
var statearr_21899_21949 = state_21891__$1;
(statearr_21899_21949[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (15))){
var inst_21864 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21900_21950 = state_21891__$1;
(statearr_21900_21950[(2)] = inst_21864);

(statearr_21900_21950[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (21))){
var inst_21884 = (state_21891[(2)]);
var state_21891__$1 = (function (){var statearr_21901 = state_21891;
(statearr_21901[(9)] = inst_21884);

return statearr_21901;
})();
var statearr_21902_21951 = state_21891__$1;
(statearr_21902_21951[(2)] = null);

(statearr_21902_21951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (13))){
var inst_21846 = (state_21891[(10)]);
var inst_21848 = cljs.core.chunked_seq_QMARK_(inst_21846);
var state_21891__$1 = state_21891;
if(inst_21848){
var statearr_21903_21952 = state_21891__$1;
(statearr_21903_21952[(1)] = (16));

} else {
var statearr_21904_21953 = state_21891__$1;
(statearr_21904_21953[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (22))){
var inst_21876 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21876)){
var statearr_21905_21954 = state_21891__$1;
(statearr_21905_21954[(1)] = (23));

} else {
var statearr_21906_21955 = state_21891__$1;
(statearr_21906_21955[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (6))){
var inst_21822 = (state_21891[(8)]);
var inst_21870 = (state_21891[(7)]);
var inst_21872 = (state_21891[(11)]);
var inst_21870__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21822) : topic_fn.call(null,inst_21822));
var inst_21871 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_21872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21871,inst_21870__$1);
var state_21891__$1 = (function (){var statearr_21907 = state_21891;
(statearr_21907[(7)] = inst_21870__$1);

(statearr_21907[(11)] = inst_21872__$1);

return statearr_21907;
})();
if(cljs.core.truth_(inst_21872__$1)){
var statearr_21908_21956 = state_21891__$1;
(statearr_21908_21956[(1)] = (19));

} else {
var statearr_21909_21957 = state_21891__$1;
(statearr_21909_21957[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (25))){
var inst_21881 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21910_21958 = state_21891__$1;
(statearr_21910_21958[(2)] = inst_21881);

(statearr_21910_21958[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (17))){
var inst_21846 = (state_21891[(10)]);
var inst_21855 = cljs.core.first(inst_21846);
var inst_21856 = cljs.core.async.muxch_STAR_(inst_21855);
var inst_21857 = cljs.core.async.close_BANG_(inst_21856);
var inst_21858 = cljs.core.next(inst_21846);
var inst_21832 = inst_21858;
var inst_21833 = null;
var inst_21834 = (0);
var inst_21835 = (0);
var state_21891__$1 = (function (){var statearr_21911 = state_21891;
(statearr_21911[(12)] = inst_21832);

(statearr_21911[(13)] = inst_21835);

(statearr_21911[(14)] = inst_21857);

(statearr_21911[(15)] = inst_21833);

(statearr_21911[(16)] = inst_21834);

return statearr_21911;
})();
var statearr_21912_21959 = state_21891__$1;
(statearr_21912_21959[(2)] = null);

(statearr_21912_21959[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (3))){
var inst_21889 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21891__$1,inst_21889);
} else {
if((state_val_21892 === (12))){
var inst_21866 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21913_21960 = state_21891__$1;
(statearr_21913_21960[(2)] = inst_21866);

(statearr_21913_21960[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (2))){
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21891__$1,(4),ch);
} else {
if((state_val_21892 === (23))){
var state_21891__$1 = state_21891;
var statearr_21914_21961 = state_21891__$1;
(statearr_21914_21961[(2)] = null);

(statearr_21914_21961[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (19))){
var inst_21822 = (state_21891[(8)]);
var inst_21872 = (state_21891[(11)]);
var inst_21874 = cljs.core.async.muxch_STAR_(inst_21872);
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21891__$1,(22),inst_21874,inst_21822);
} else {
if((state_val_21892 === (11))){
var inst_21846 = (state_21891[(10)]);
var inst_21832 = (state_21891[(12)]);
var inst_21846__$1 = cljs.core.seq(inst_21832);
var state_21891__$1 = (function (){var statearr_21915 = state_21891;
(statearr_21915[(10)] = inst_21846__$1);

return statearr_21915;
})();
if(inst_21846__$1){
var statearr_21916_21962 = state_21891__$1;
(statearr_21916_21962[(1)] = (13));

} else {
var statearr_21917_21963 = state_21891__$1;
(statearr_21917_21963[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (9))){
var inst_21868 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21918_21964 = state_21891__$1;
(statearr_21918_21964[(2)] = inst_21868);

(statearr_21918_21964[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (5))){
var inst_21829 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_21830 = cljs.core.vals(inst_21829);
var inst_21831 = cljs.core.seq(inst_21830);
var inst_21832 = inst_21831;
var inst_21833 = null;
var inst_21834 = (0);
var inst_21835 = (0);
var state_21891__$1 = (function (){var statearr_21919 = state_21891;
(statearr_21919[(12)] = inst_21832);

(statearr_21919[(13)] = inst_21835);

(statearr_21919[(15)] = inst_21833);

(statearr_21919[(16)] = inst_21834);

return statearr_21919;
})();
var statearr_21920_21965 = state_21891__$1;
(statearr_21920_21965[(2)] = null);

(statearr_21920_21965[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (14))){
var state_21891__$1 = state_21891;
var statearr_21924_21966 = state_21891__$1;
(statearr_21924_21966[(2)] = null);

(statearr_21924_21966[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (16))){
var inst_21846 = (state_21891[(10)]);
var inst_21850 = cljs.core.chunk_first(inst_21846);
var inst_21851 = cljs.core.chunk_rest(inst_21846);
var inst_21852 = cljs.core.count(inst_21850);
var inst_21832 = inst_21851;
var inst_21833 = inst_21850;
var inst_21834 = inst_21852;
var inst_21835 = (0);
var state_21891__$1 = (function (){var statearr_21925 = state_21891;
(statearr_21925[(12)] = inst_21832);

(statearr_21925[(13)] = inst_21835);

(statearr_21925[(15)] = inst_21833);

(statearr_21925[(16)] = inst_21834);

return statearr_21925;
})();
var statearr_21926_21967 = state_21891__$1;
(statearr_21926_21967[(2)] = null);

(statearr_21926_21967[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (10))){
var inst_21832 = (state_21891[(12)]);
var inst_21835 = (state_21891[(13)]);
var inst_21833 = (state_21891[(15)]);
var inst_21834 = (state_21891[(16)]);
var inst_21840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21833,inst_21835);
var inst_21841 = cljs.core.async.muxch_STAR_(inst_21840);
var inst_21842 = cljs.core.async.close_BANG_(inst_21841);
var inst_21843 = (inst_21835 + (1));
var tmp21921 = inst_21832;
var tmp21922 = inst_21833;
var tmp21923 = inst_21834;
var inst_21832__$1 = tmp21921;
var inst_21833__$1 = tmp21922;
var inst_21834__$1 = tmp21923;
var inst_21835__$1 = inst_21843;
var state_21891__$1 = (function (){var statearr_21927 = state_21891;
(statearr_21927[(17)] = inst_21842);

(statearr_21927[(12)] = inst_21832__$1);

(statearr_21927[(13)] = inst_21835__$1);

(statearr_21927[(15)] = inst_21833__$1);

(statearr_21927[(16)] = inst_21834__$1);

return statearr_21927;
})();
var statearr_21928_21968 = state_21891__$1;
(statearr_21928_21968[(2)] = null);

(statearr_21928_21968[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (18))){
var inst_21861 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21929_21969 = state_21891__$1;
(statearr_21929_21969[(2)] = inst_21861);

(statearr_21929_21969[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21892 === (8))){
var inst_21835 = (state_21891[(13)]);
var inst_21834 = (state_21891[(16)]);
var inst_21837 = (inst_21835 < inst_21834);
var inst_21838 = inst_21837;
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21838)){
var statearr_21930_21970 = state_21891__$1;
(statearr_21930_21970[(1)] = (10));

} else {
var statearr_21931_21971 = state_21891__$1;
(statearr_21931_21971[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___21943,mults,ensure_mult,p))
;
return ((function (switch__19824__auto__,c__19950__auto___21943,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_21935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21935[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_21935[(1)] = (1));

return statearr_21935;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_21891){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_21891);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e21936){if((e21936 instanceof Object)){
var ex__19828__auto__ = e21936;
var statearr_21937_21972 = state_21891;
(statearr_21937_21972[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21891);

return cljs.core.cst$kw$recur;
} else {
throw e21936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__21973 = state_21891;
state_21891 = G__21973;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_21891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_21891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___21943,mults,ensure_mult,p))
})();
var state__19952__auto__ = (function (){var statearr_21938 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_21938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___21943);

return statearr_21938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___21943,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21974 = [];
var len__10647__auto___21977 = arguments.length;
var i__10648__auto___21978 = (0);
while(true){
if((i__10648__auto___21978 < len__10647__auto___21977)){
args21974.push((arguments[i__10648__auto___21978]));

var G__21979 = (i__10648__auto___21978 + (1));
i__10648__auto___21978 = G__21979;
continue;
} else {
}
break;
}

var G__21976 = args21974.length;
switch (G__21976) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21974.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21981 = [];
var len__10647__auto___21984 = arguments.length;
var i__10648__auto___21985 = (0);
while(true){
if((i__10648__auto___21985 < len__10647__auto___21984)){
args21981.push((arguments[i__10648__auto___21985]));

var G__21986 = (i__10648__auto___21985 + (1));
i__10648__auto___21985 = G__21986;
continue;
} else {
}
break;
}

var G__21983 = args21981.length;
switch (G__21983) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21981.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21988 = [];
var len__10647__auto___22059 = arguments.length;
var i__10648__auto___22060 = (0);
while(true){
if((i__10648__auto___22060 < len__10647__auto___22059)){
args21988.push((arguments[i__10648__auto___22060]));

var G__22061 = (i__10648__auto___22060 + (1));
i__10648__auto___22060 = G__22061;
continue;
} else {
}
break;
}

var G__21990 = args21988.length;
switch (G__21990) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21988.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__19950__auto___22063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22029){
var state_val_22030 = (state_22029[(1)]);
if((state_val_22030 === (7))){
var state_22029__$1 = state_22029;
var statearr_22031_22064 = state_22029__$1;
(statearr_22031_22064[(2)] = null);

(statearr_22031_22064[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (1))){
var state_22029__$1 = state_22029;
var statearr_22032_22065 = state_22029__$1;
(statearr_22032_22065[(2)] = null);

(statearr_22032_22065[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (4))){
var inst_21993 = (state_22029[(7)]);
var inst_21995 = (inst_21993 < cnt);
var state_22029__$1 = state_22029;
if(cljs.core.truth_(inst_21995)){
var statearr_22033_22066 = state_22029__$1;
(statearr_22033_22066[(1)] = (6));

} else {
var statearr_22034_22067 = state_22029__$1;
(statearr_22034_22067[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (15))){
var inst_22025 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22035_22068 = state_22029__$1;
(statearr_22035_22068[(2)] = inst_22025);

(statearr_22035_22068[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (13))){
var inst_22018 = cljs.core.async.close_BANG_(out);
var state_22029__$1 = state_22029;
var statearr_22036_22069 = state_22029__$1;
(statearr_22036_22069[(2)] = inst_22018);

(statearr_22036_22069[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (6))){
var state_22029__$1 = state_22029;
var statearr_22037_22070 = state_22029__$1;
(statearr_22037_22070[(2)] = null);

(statearr_22037_22070[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (3))){
var inst_22027 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22029__$1,inst_22027);
} else {
if((state_val_22030 === (12))){
var inst_22015 = (state_22029[(8)]);
var inst_22015__$1 = (state_22029[(2)]);
var inst_22016 = cljs.core.some(cljs.core.nil_QMARK_,inst_22015__$1);
var state_22029__$1 = (function (){var statearr_22038 = state_22029;
(statearr_22038[(8)] = inst_22015__$1);

return statearr_22038;
})();
if(cljs.core.truth_(inst_22016)){
var statearr_22039_22071 = state_22029__$1;
(statearr_22039_22071[(1)] = (13));

} else {
var statearr_22040_22072 = state_22029__$1;
(statearr_22040_22072[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (2))){
var inst_21992 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_21993 = (0);
var state_22029__$1 = (function (){var statearr_22041 = state_22029;
(statearr_22041[(9)] = inst_21992);

(statearr_22041[(7)] = inst_21993);

return statearr_22041;
})();
var statearr_22042_22073 = state_22029__$1;
(statearr_22042_22073[(2)] = null);

(statearr_22042_22073[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (11))){
var inst_21993 = (state_22029[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22029,(10),Object,null,(9));
var inst_22002 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_21993) : chs__$1.call(null,inst_21993));
var inst_22003 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_21993) : done.call(null,inst_21993));
var inst_22004 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22002,inst_22003);
var state_22029__$1 = state_22029;
var statearr_22043_22074 = state_22029__$1;
(statearr_22043_22074[(2)] = inst_22004);


cljs.core.async.impl.ioc_helpers.process_exception(state_22029__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (9))){
var inst_21993 = (state_22029[(7)]);
var inst_22006 = (state_22029[(2)]);
var inst_22007 = (inst_21993 + (1));
var inst_21993__$1 = inst_22007;
var state_22029__$1 = (function (){var statearr_22044 = state_22029;
(statearr_22044[(10)] = inst_22006);

(statearr_22044[(7)] = inst_21993__$1);

return statearr_22044;
})();
var statearr_22045_22075 = state_22029__$1;
(statearr_22045_22075[(2)] = null);

(statearr_22045_22075[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (5))){
var inst_22013 = (state_22029[(2)]);
var state_22029__$1 = (function (){var statearr_22046 = state_22029;
(statearr_22046[(11)] = inst_22013);

return statearr_22046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22029__$1,(12),dchan);
} else {
if((state_val_22030 === (14))){
var inst_22015 = (state_22029[(8)]);
var inst_22020 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22015);
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22029__$1,(16),out,inst_22020);
} else {
if((state_val_22030 === (16))){
var inst_22022 = (state_22029[(2)]);
var state_22029__$1 = (function (){var statearr_22047 = state_22029;
(statearr_22047[(12)] = inst_22022);

return statearr_22047;
})();
var statearr_22048_22076 = state_22029__$1;
(statearr_22048_22076[(2)] = null);

(statearr_22048_22076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (10))){
var inst_21997 = (state_22029[(2)]);
var inst_21998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22029__$1 = (function (){var statearr_22049 = state_22029;
(statearr_22049[(13)] = inst_21997);

return statearr_22049;
})();
var statearr_22050_22077 = state_22029__$1;
(statearr_22050_22077[(2)] = inst_21998);


cljs.core.async.impl.ioc_helpers.process_exception(state_22029__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22030 === (8))){
var inst_22011 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22051_22078 = state_22029__$1;
(statearr_22051_22078[(2)] = inst_22011);

(statearr_22051_22078[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19824__auto__,c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22055[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22055[(1)] = (1));

return statearr_22055;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22029){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22029);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22056){if((e22056 instanceof Object)){
var ex__19828__auto__ = e22056;
var statearr_22057_22079 = state_22029;
(statearr_22057_22079[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22029);

return cljs.core.cst$kw$recur;
} else {
throw e22056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22080 = state_22029;
state_22029 = G__22080;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19952__auto__ = (function (){var statearr_22058 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22063);

return statearr_22058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22063,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22082 = [];
var len__10647__auto___22140 = arguments.length;
var i__10648__auto___22141 = (0);
while(true){
if((i__10648__auto___22141 < len__10647__auto___22140)){
args22082.push((arguments[i__10648__auto___22141]));

var G__22142 = (i__10648__auto___22141 + (1));
i__10648__auto___22141 = G__22142;
continue;
} else {
}
break;
}

var G__22084 = args22082.length;
switch (G__22084) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22082.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22144,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22144,out){
return (function (state_22116){
var state_val_22117 = (state_22116[(1)]);
if((state_val_22117 === (7))){
var inst_22095 = (state_22116[(7)]);
var inst_22096 = (state_22116[(8)]);
var inst_22095__$1 = (state_22116[(2)]);
var inst_22096__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22095__$1,(0),null);
var inst_22097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22095__$1,(1),null);
var inst_22098 = (inst_22096__$1 == null);
var state_22116__$1 = (function (){var statearr_22118 = state_22116;
(statearr_22118[(7)] = inst_22095__$1);

(statearr_22118[(8)] = inst_22096__$1);

(statearr_22118[(9)] = inst_22097);

return statearr_22118;
})();
if(cljs.core.truth_(inst_22098)){
var statearr_22119_22145 = state_22116__$1;
(statearr_22119_22145[(1)] = (8));

} else {
var statearr_22120_22146 = state_22116__$1;
(statearr_22120_22146[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (1))){
var inst_22085 = cljs.core.vec(chs);
var inst_22086 = inst_22085;
var state_22116__$1 = (function (){var statearr_22121 = state_22116;
(statearr_22121[(10)] = inst_22086);

return statearr_22121;
})();
var statearr_22122_22147 = state_22116__$1;
(statearr_22122_22147[(2)] = null);

(statearr_22122_22147[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (4))){
var inst_22086 = (state_22116[(10)]);
var state_22116__$1 = state_22116;
return cljs.core.async.ioc_alts_BANG_(state_22116__$1,(7),inst_22086);
} else {
if((state_val_22117 === (6))){
var inst_22112 = (state_22116[(2)]);
var state_22116__$1 = state_22116;
var statearr_22123_22148 = state_22116__$1;
(statearr_22123_22148[(2)] = inst_22112);

(statearr_22123_22148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (3))){
var inst_22114 = (state_22116[(2)]);
var state_22116__$1 = state_22116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22116__$1,inst_22114);
} else {
if((state_val_22117 === (2))){
var inst_22086 = (state_22116[(10)]);
var inst_22088 = cljs.core.count(inst_22086);
var inst_22089 = (inst_22088 > (0));
var state_22116__$1 = state_22116;
if(cljs.core.truth_(inst_22089)){
var statearr_22125_22149 = state_22116__$1;
(statearr_22125_22149[(1)] = (4));

} else {
var statearr_22126_22150 = state_22116__$1;
(statearr_22126_22150[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (11))){
var inst_22086 = (state_22116[(10)]);
var inst_22105 = (state_22116[(2)]);
var tmp22124 = inst_22086;
var inst_22086__$1 = tmp22124;
var state_22116__$1 = (function (){var statearr_22127 = state_22116;
(statearr_22127[(10)] = inst_22086__$1);

(statearr_22127[(11)] = inst_22105);

return statearr_22127;
})();
var statearr_22128_22151 = state_22116__$1;
(statearr_22128_22151[(2)] = null);

(statearr_22128_22151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (9))){
var inst_22096 = (state_22116[(8)]);
var state_22116__$1 = state_22116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22116__$1,(11),out,inst_22096);
} else {
if((state_val_22117 === (5))){
var inst_22110 = cljs.core.async.close_BANG_(out);
var state_22116__$1 = state_22116;
var statearr_22129_22152 = state_22116__$1;
(statearr_22129_22152[(2)] = inst_22110);

(statearr_22129_22152[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (10))){
var inst_22108 = (state_22116[(2)]);
var state_22116__$1 = state_22116;
var statearr_22130_22153 = state_22116__$1;
(statearr_22130_22153[(2)] = inst_22108);

(statearr_22130_22153[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22117 === (8))){
var inst_22095 = (state_22116[(7)]);
var inst_22086 = (state_22116[(10)]);
var inst_22096 = (state_22116[(8)]);
var inst_22097 = (state_22116[(9)]);
var inst_22100 = (function (){var cs = inst_22086;
var vec__22091 = inst_22095;
var v = inst_22096;
var c = inst_22097;
return ((function (cs,vec__22091,v,c,inst_22095,inst_22086,inst_22096,inst_22097,state_val_22117,c__19950__auto___22144,out){
return (function (p1__22081_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22081_SHARP_);
});
;})(cs,vec__22091,v,c,inst_22095,inst_22086,inst_22096,inst_22097,state_val_22117,c__19950__auto___22144,out))
})();
var inst_22101 = cljs.core.filterv(inst_22100,inst_22086);
var inst_22086__$1 = inst_22101;
var state_22116__$1 = (function (){var statearr_22131 = state_22116;
(statearr_22131[(10)] = inst_22086__$1);

return statearr_22131;
})();
var statearr_22132_22154 = state_22116__$1;
(statearr_22132_22154[(2)] = null);

(statearr_22132_22154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22144,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22144,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22136 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22136[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22136[(1)] = (1));

return statearr_22136;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22116){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22116);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22137){if((e22137 instanceof Object)){
var ex__19828__auto__ = e22137;
var statearr_22138_22155 = state_22116;
(statearr_22138_22155[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22116);

return cljs.core.cst$kw$recur;
} else {
throw e22137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22156 = state_22116;
state_22116 = G__22156;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22144,out))
})();
var state__19952__auto__ = (function (){var statearr_22139 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22144);

return statearr_22139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22144,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22157 = [];
var len__10647__auto___22206 = arguments.length;
var i__10648__auto___22207 = (0);
while(true){
if((i__10648__auto___22207 < len__10647__auto___22206)){
args22157.push((arguments[i__10648__auto___22207]));

var G__22208 = (i__10648__auto___22207 + (1));
i__10648__auto___22207 = G__22208;
continue;
} else {
}
break;
}

var G__22159 = args22157.length;
switch (G__22159) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22157.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22210,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22210,out){
return (function (state_22183){
var state_val_22184 = (state_22183[(1)]);
if((state_val_22184 === (7))){
var inst_22165 = (state_22183[(7)]);
var inst_22165__$1 = (state_22183[(2)]);
var inst_22166 = (inst_22165__$1 == null);
var inst_22167 = cljs.core.not(inst_22166);
var state_22183__$1 = (function (){var statearr_22185 = state_22183;
(statearr_22185[(7)] = inst_22165__$1);

return statearr_22185;
})();
if(inst_22167){
var statearr_22186_22211 = state_22183__$1;
(statearr_22186_22211[(1)] = (8));

} else {
var statearr_22187_22212 = state_22183__$1;
(statearr_22187_22212[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (1))){
var inst_22160 = (0);
var state_22183__$1 = (function (){var statearr_22188 = state_22183;
(statearr_22188[(8)] = inst_22160);

return statearr_22188;
})();
var statearr_22189_22213 = state_22183__$1;
(statearr_22189_22213[(2)] = null);

(statearr_22189_22213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (4))){
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22183__$1,(7),ch);
} else {
if((state_val_22184 === (6))){
var inst_22178 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
var statearr_22190_22214 = state_22183__$1;
(statearr_22190_22214[(2)] = inst_22178);

(statearr_22190_22214[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (3))){
var inst_22180 = (state_22183[(2)]);
var inst_22181 = cljs.core.async.close_BANG_(out);
var state_22183__$1 = (function (){var statearr_22191 = state_22183;
(statearr_22191[(9)] = inst_22180);

return statearr_22191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22183__$1,inst_22181);
} else {
if((state_val_22184 === (2))){
var inst_22160 = (state_22183[(8)]);
var inst_22162 = (inst_22160 < n);
var state_22183__$1 = state_22183;
if(cljs.core.truth_(inst_22162)){
var statearr_22192_22215 = state_22183__$1;
(statearr_22192_22215[(1)] = (4));

} else {
var statearr_22193_22216 = state_22183__$1;
(statearr_22193_22216[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (11))){
var inst_22160 = (state_22183[(8)]);
var inst_22170 = (state_22183[(2)]);
var inst_22171 = (inst_22160 + (1));
var inst_22160__$1 = inst_22171;
var state_22183__$1 = (function (){var statearr_22194 = state_22183;
(statearr_22194[(8)] = inst_22160__$1);

(statearr_22194[(10)] = inst_22170);

return statearr_22194;
})();
var statearr_22195_22217 = state_22183__$1;
(statearr_22195_22217[(2)] = null);

(statearr_22195_22217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (9))){
var state_22183__$1 = state_22183;
var statearr_22196_22218 = state_22183__$1;
(statearr_22196_22218[(2)] = null);

(statearr_22196_22218[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (5))){
var state_22183__$1 = state_22183;
var statearr_22197_22219 = state_22183__$1;
(statearr_22197_22219[(2)] = null);

(statearr_22197_22219[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (10))){
var inst_22175 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
var statearr_22198_22220 = state_22183__$1;
(statearr_22198_22220[(2)] = inst_22175);

(statearr_22198_22220[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22184 === (8))){
var inst_22165 = (state_22183[(7)]);
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22183__$1,(11),out,inst_22165);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22210,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22210,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22202[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22202[(1)] = (1));

return statearr_22202;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22183){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22183);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22203){if((e22203 instanceof Object)){
var ex__19828__auto__ = e22203;
var statearr_22204_22221 = state_22183;
(statearr_22204_22221[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22183);

return cljs.core.cst$kw$recur;
} else {
throw e22203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22222 = state_22183;
state_22183 = G__22222;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22210,out))
})();
var state__19952__auto__ = (function (){var statearr_22205 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22210);

return statearr_22205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22210,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22232 = (function (f,ch,meta22233){
this.f = f;
this.ch = ch;
this.meta22233 = meta22233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22234,meta22233__$1){
var self__ = this;
var _22234__$1 = this;
return (new cljs.core.async.t_cljs$core$async22232(self__.f,self__.ch,meta22233__$1));
});

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22234){
var self__ = this;
var _22234__$1 = this;
return self__.meta22233;
});

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22235 = (function (f,ch,meta22233,_,fn1,meta22236){
this.f = f;
this.ch = ch;
this.meta22233 = meta22233;
this._ = _;
this.fn1 = fn1;
this.meta22236 = meta22236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22237,meta22236__$1){
var self__ = this;
var _22237__$1 = this;
return (new cljs.core.async.t_cljs$core$async22235(self__.f,self__.ch,self__.meta22233,self__._,self__.fn1,meta22236__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22237){
var self__ = this;
var _22237__$1 = this;
return self__.meta22236;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22223_SHARP_){
var G__22238 = (((p1__22223_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22223_SHARP_) : self__.f.call(null,p1__22223_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22238) : f1.call(null,G__22238));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22233,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async22232], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta22236], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22235";

cljs.core.async.t_cljs$core$async22235.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async22235");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22235 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22235(f__$1,ch__$1,meta22233__$1,___$2,fn1__$1,meta22236){
return (new cljs.core.async.t_cljs$core$async22235(f__$1,ch__$1,meta22233__$1,___$2,fn1__$1,meta22236));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22235(self__.f,self__.ch,self__.meta22233,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9414__auto__ = ret;
if(cljs.core.truth_(and__9414__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__9414__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22239 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22239) : self__.f.call(null,G__22239));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22233], null);
});

cljs.core.async.t_cljs$core$async22232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22232";

cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async22232");
});

cljs.core.async.__GT_t_cljs$core$async22232 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22232(f__$1,ch__$1,meta22233){
return (new cljs.core.async.t_cljs$core$async22232(f__$1,ch__$1,meta22233));
});

}

return (new cljs.core.async.t_cljs$core$async22232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22243 = (function (f,ch,meta22244){
this.f = f;
this.ch = ch;
this.meta22244 = meta22244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22245,meta22244__$1){
var self__ = this;
var _22245__$1 = this;
return (new cljs.core.async.t_cljs$core$async22243(self__.f,self__.ch,meta22244__$1));
});

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22245){
var self__ = this;
var _22245__$1 = this;
return self__.meta22244;
});

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async22243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22244], null);
});

cljs.core.async.t_cljs$core$async22243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22243";

cljs.core.async.t_cljs$core$async22243.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async22243");
});

cljs.core.async.__GT_t_cljs$core$async22243 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22243(f__$1,ch__$1,meta22244){
return (new cljs.core.async.t_cljs$core$async22243(f__$1,ch__$1,meta22244));
});

}

return (new cljs.core.async.t_cljs$core$async22243(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22249 = (function (p,ch,meta22250){
this.p = p;
this.ch = ch;
this.meta22250 = meta22250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22251,meta22250__$1){
var self__ = this;
var _22251__$1 = this;
return (new cljs.core.async.t_cljs$core$async22249(self__.p,self__.ch,meta22250__$1));
});

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22251){
var self__ = this;
var _22251__$1 = this;
return self__.meta22250;
});

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22250], null);
});

cljs.core.async.t_cljs$core$async22249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22249";

cljs.core.async.t_cljs$core$async22249.cljs$lang$ctorPrWriter = (function (this__10083__auto__,writer__10084__auto__,opt__10085__auto__){
return cljs.core._write(writer__10084__auto__,"cljs.core.async/t_cljs$core$async22249");
});

cljs.core.async.__GT_t_cljs$core$async22249 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22249(p__$1,ch__$1,meta22250){
return (new cljs.core.async.t_cljs$core$async22249(p__$1,ch__$1,meta22250));
});

}

return (new cljs.core.async.t_cljs$core$async22249(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22252 = [];
var len__10647__auto___22296 = arguments.length;
var i__10648__auto___22297 = (0);
while(true){
if((i__10648__auto___22297 < len__10647__auto___22296)){
args22252.push((arguments[i__10648__auto___22297]));

var G__22298 = (i__10648__auto___22297 + (1));
i__10648__auto___22297 = G__22298;
continue;
} else {
}
break;
}

var G__22254 = args22252.length;
switch (G__22254) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22252.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22300,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22300,out){
return (function (state_22275){
var state_val_22276 = (state_22275[(1)]);
if((state_val_22276 === (7))){
var inst_22271 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22277_22301 = state_22275__$1;
(statearr_22277_22301[(2)] = inst_22271);

(statearr_22277_22301[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (1))){
var state_22275__$1 = state_22275;
var statearr_22278_22302 = state_22275__$1;
(statearr_22278_22302[(2)] = null);

(statearr_22278_22302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (4))){
var inst_22257 = (state_22275[(7)]);
var inst_22257__$1 = (state_22275[(2)]);
var inst_22258 = (inst_22257__$1 == null);
var state_22275__$1 = (function (){var statearr_22279 = state_22275;
(statearr_22279[(7)] = inst_22257__$1);

return statearr_22279;
})();
if(cljs.core.truth_(inst_22258)){
var statearr_22280_22303 = state_22275__$1;
(statearr_22280_22303[(1)] = (5));

} else {
var statearr_22281_22304 = state_22275__$1;
(statearr_22281_22304[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (6))){
var inst_22257 = (state_22275[(7)]);
var inst_22262 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22257) : p.call(null,inst_22257));
var state_22275__$1 = state_22275;
if(cljs.core.truth_(inst_22262)){
var statearr_22282_22305 = state_22275__$1;
(statearr_22282_22305[(1)] = (8));

} else {
var statearr_22283_22306 = state_22275__$1;
(statearr_22283_22306[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (3))){
var inst_22273 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22275__$1,inst_22273);
} else {
if((state_val_22276 === (2))){
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22275__$1,(4),ch);
} else {
if((state_val_22276 === (11))){
var inst_22265 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22284_22307 = state_22275__$1;
(statearr_22284_22307[(2)] = inst_22265);

(statearr_22284_22307[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (9))){
var state_22275__$1 = state_22275;
var statearr_22285_22308 = state_22275__$1;
(statearr_22285_22308[(2)] = null);

(statearr_22285_22308[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (5))){
var inst_22260 = cljs.core.async.close_BANG_(out);
var state_22275__$1 = state_22275;
var statearr_22286_22309 = state_22275__$1;
(statearr_22286_22309[(2)] = inst_22260);

(statearr_22286_22309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (10))){
var inst_22268 = (state_22275[(2)]);
var state_22275__$1 = (function (){var statearr_22287 = state_22275;
(statearr_22287[(8)] = inst_22268);

return statearr_22287;
})();
var statearr_22288_22310 = state_22275__$1;
(statearr_22288_22310[(2)] = null);

(statearr_22288_22310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22276 === (8))){
var inst_22257 = (state_22275[(7)]);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22275__$1,(11),out,inst_22257);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22300,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22300,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22292 = [null,null,null,null,null,null,null,null,null];
(statearr_22292[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22292[(1)] = (1));

return statearr_22292;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22275){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22275);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22293){if((e22293 instanceof Object)){
var ex__19828__auto__ = e22293;
var statearr_22294_22311 = state_22275;
(statearr_22294_22311[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22275);

return cljs.core.cst$kw$recur;
} else {
throw e22293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22312 = state_22275;
state_22275 = G__22312;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22300,out))
})();
var state__19952__auto__ = (function (){var statearr_22295 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22300);

return statearr_22295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22300,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22313 = [];
var len__10647__auto___22316 = arguments.length;
var i__10648__auto___22317 = (0);
while(true){
if((i__10648__auto___22317 < len__10647__auto___22316)){
args22313.push((arguments[i__10648__auto___22317]));

var G__22318 = (i__10648__auto___22317 + (1));
i__10648__auto___22317 = G__22318;
continue;
} else {
}
break;
}

var G__22315 = args22313.length;
switch (G__22315) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22313.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_22485){
var state_val_22486 = (state_22485[(1)]);
if((state_val_22486 === (7))){
var inst_22481 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22487_22528 = state_22485__$1;
(statearr_22487_22528[(2)] = inst_22481);

(statearr_22487_22528[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (20))){
var inst_22451 = (state_22485[(7)]);
var inst_22462 = (state_22485[(2)]);
var inst_22463 = cljs.core.next(inst_22451);
var inst_22437 = inst_22463;
var inst_22438 = null;
var inst_22439 = (0);
var inst_22440 = (0);
var state_22485__$1 = (function (){var statearr_22488 = state_22485;
(statearr_22488[(8)] = inst_22462);

(statearr_22488[(9)] = inst_22439);

(statearr_22488[(10)] = inst_22437);

(statearr_22488[(11)] = inst_22438);

(statearr_22488[(12)] = inst_22440);

return statearr_22488;
})();
var statearr_22489_22529 = state_22485__$1;
(statearr_22489_22529[(2)] = null);

(statearr_22489_22529[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (1))){
var state_22485__$1 = state_22485;
var statearr_22490_22530 = state_22485__$1;
(statearr_22490_22530[(2)] = null);

(statearr_22490_22530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (4))){
var inst_22426 = (state_22485[(13)]);
var inst_22426__$1 = (state_22485[(2)]);
var inst_22427 = (inst_22426__$1 == null);
var state_22485__$1 = (function (){var statearr_22491 = state_22485;
(statearr_22491[(13)] = inst_22426__$1);

return statearr_22491;
})();
if(cljs.core.truth_(inst_22427)){
var statearr_22492_22531 = state_22485__$1;
(statearr_22492_22531[(1)] = (5));

} else {
var statearr_22493_22532 = state_22485__$1;
(statearr_22493_22532[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (15))){
var state_22485__$1 = state_22485;
var statearr_22497_22533 = state_22485__$1;
(statearr_22497_22533[(2)] = null);

(statearr_22497_22533[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (21))){
var state_22485__$1 = state_22485;
var statearr_22498_22534 = state_22485__$1;
(statearr_22498_22534[(2)] = null);

(statearr_22498_22534[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (13))){
var inst_22439 = (state_22485[(9)]);
var inst_22437 = (state_22485[(10)]);
var inst_22438 = (state_22485[(11)]);
var inst_22440 = (state_22485[(12)]);
var inst_22447 = (state_22485[(2)]);
var inst_22448 = (inst_22440 + (1));
var tmp22494 = inst_22439;
var tmp22495 = inst_22437;
var tmp22496 = inst_22438;
var inst_22437__$1 = tmp22495;
var inst_22438__$1 = tmp22496;
var inst_22439__$1 = tmp22494;
var inst_22440__$1 = inst_22448;
var state_22485__$1 = (function (){var statearr_22499 = state_22485;
(statearr_22499[(9)] = inst_22439__$1);

(statearr_22499[(14)] = inst_22447);

(statearr_22499[(10)] = inst_22437__$1);

(statearr_22499[(11)] = inst_22438__$1);

(statearr_22499[(12)] = inst_22440__$1);

return statearr_22499;
})();
var statearr_22500_22535 = state_22485__$1;
(statearr_22500_22535[(2)] = null);

(statearr_22500_22535[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (22))){
var state_22485__$1 = state_22485;
var statearr_22501_22536 = state_22485__$1;
(statearr_22501_22536[(2)] = null);

(statearr_22501_22536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (6))){
var inst_22426 = (state_22485[(13)]);
var inst_22435 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22426) : f.call(null,inst_22426));
var inst_22436 = cljs.core.seq(inst_22435);
var inst_22437 = inst_22436;
var inst_22438 = null;
var inst_22439 = (0);
var inst_22440 = (0);
var state_22485__$1 = (function (){var statearr_22502 = state_22485;
(statearr_22502[(9)] = inst_22439);

(statearr_22502[(10)] = inst_22437);

(statearr_22502[(11)] = inst_22438);

(statearr_22502[(12)] = inst_22440);

return statearr_22502;
})();
var statearr_22503_22537 = state_22485__$1;
(statearr_22503_22537[(2)] = null);

(statearr_22503_22537[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (17))){
var inst_22451 = (state_22485[(7)]);
var inst_22455 = cljs.core.chunk_first(inst_22451);
var inst_22456 = cljs.core.chunk_rest(inst_22451);
var inst_22457 = cljs.core.count(inst_22455);
var inst_22437 = inst_22456;
var inst_22438 = inst_22455;
var inst_22439 = inst_22457;
var inst_22440 = (0);
var state_22485__$1 = (function (){var statearr_22504 = state_22485;
(statearr_22504[(9)] = inst_22439);

(statearr_22504[(10)] = inst_22437);

(statearr_22504[(11)] = inst_22438);

(statearr_22504[(12)] = inst_22440);

return statearr_22504;
})();
var statearr_22505_22538 = state_22485__$1;
(statearr_22505_22538[(2)] = null);

(statearr_22505_22538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (3))){
var inst_22483 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22485__$1,inst_22483);
} else {
if((state_val_22486 === (12))){
var inst_22471 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22506_22539 = state_22485__$1;
(statearr_22506_22539[(2)] = inst_22471);

(statearr_22506_22539[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (2))){
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22485__$1,(4),in$);
} else {
if((state_val_22486 === (23))){
var inst_22479 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22507_22540 = state_22485__$1;
(statearr_22507_22540[(2)] = inst_22479);

(statearr_22507_22540[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (19))){
var inst_22466 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22508_22541 = state_22485__$1;
(statearr_22508_22541[(2)] = inst_22466);

(statearr_22508_22541[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (11))){
var inst_22437 = (state_22485[(10)]);
var inst_22451 = (state_22485[(7)]);
var inst_22451__$1 = cljs.core.seq(inst_22437);
var state_22485__$1 = (function (){var statearr_22509 = state_22485;
(statearr_22509[(7)] = inst_22451__$1);

return statearr_22509;
})();
if(inst_22451__$1){
var statearr_22510_22542 = state_22485__$1;
(statearr_22510_22542[(1)] = (14));

} else {
var statearr_22511_22543 = state_22485__$1;
(statearr_22511_22543[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (9))){
var inst_22473 = (state_22485[(2)]);
var inst_22474 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22485__$1 = (function (){var statearr_22512 = state_22485;
(statearr_22512[(15)] = inst_22473);

return statearr_22512;
})();
if(cljs.core.truth_(inst_22474)){
var statearr_22513_22544 = state_22485__$1;
(statearr_22513_22544[(1)] = (21));

} else {
var statearr_22514_22545 = state_22485__$1;
(statearr_22514_22545[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (5))){
var inst_22429 = cljs.core.async.close_BANG_(out);
var state_22485__$1 = state_22485;
var statearr_22515_22546 = state_22485__$1;
(statearr_22515_22546[(2)] = inst_22429);

(statearr_22515_22546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (14))){
var inst_22451 = (state_22485[(7)]);
var inst_22453 = cljs.core.chunked_seq_QMARK_(inst_22451);
var state_22485__$1 = state_22485;
if(inst_22453){
var statearr_22516_22547 = state_22485__$1;
(statearr_22516_22547[(1)] = (17));

} else {
var statearr_22517_22548 = state_22485__$1;
(statearr_22517_22548[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (16))){
var inst_22469 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22518_22549 = state_22485__$1;
(statearr_22518_22549[(2)] = inst_22469);

(statearr_22518_22549[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22486 === (10))){
var inst_22438 = (state_22485[(11)]);
var inst_22440 = (state_22485[(12)]);
var inst_22445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22438,inst_22440);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22485__$1,(13),out,inst_22445);
} else {
if((state_val_22486 === (18))){
var inst_22451 = (state_22485[(7)]);
var inst_22460 = cljs.core.first(inst_22451);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22485__$1,(20),out,inst_22460);
} else {
if((state_val_22486 === (8))){
var inst_22439 = (state_22485[(9)]);
var inst_22440 = (state_22485[(12)]);
var inst_22442 = (inst_22440 < inst_22439);
var inst_22443 = inst_22442;
var state_22485__$1 = state_22485;
if(cljs.core.truth_(inst_22443)){
var statearr_22519_22550 = state_22485__$1;
(statearr_22519_22550[(1)] = (10));

} else {
var statearr_22520_22551 = state_22485__$1;
(statearr_22520_22551[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____0 = (function (){
var statearr_22524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22524[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__);

(statearr_22524[(1)] = (1));

return statearr_22524;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____1 = (function (state_22485){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22485);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22525){if((e22525 instanceof Object)){
var ex__19828__auto__ = e22525;
var statearr_22526_22552 = state_22485;
(statearr_22526_22552[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22485);

return cljs.core.cst$kw$recur;
} else {
throw e22525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22553 = state_22485;
state_22485 = G__22553;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_22527 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_22527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22554 = [];
var len__10647__auto___22557 = arguments.length;
var i__10648__auto___22558 = (0);
while(true){
if((i__10648__auto___22558 < len__10647__auto___22557)){
args22554.push((arguments[i__10648__auto___22558]));

var G__22559 = (i__10648__auto___22558 + (1));
i__10648__auto___22558 = G__22559;
continue;
} else {
}
break;
}

var G__22556 = args22554.length;
switch (G__22556) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22554.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22561 = [];
var len__10647__auto___22564 = arguments.length;
var i__10648__auto___22565 = (0);
while(true){
if((i__10648__auto___22565 < len__10647__auto___22564)){
args22561.push((arguments[i__10648__auto___22565]));

var G__22566 = (i__10648__auto___22565 + (1));
i__10648__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var G__22563 = args22561.length;
switch (G__22563) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22561.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22568 = [];
var len__10647__auto___22619 = arguments.length;
var i__10648__auto___22620 = (0);
while(true){
if((i__10648__auto___22620 < len__10647__auto___22619)){
args22568.push((arguments[i__10648__auto___22620]));

var G__22621 = (i__10648__auto___22620 + (1));
i__10648__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var G__22570 = args22568.length;
switch (G__22570) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22568.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22623,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22623,out){
return (function (state_22594){
var state_val_22595 = (state_22594[(1)]);
if((state_val_22595 === (7))){
var inst_22589 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
var statearr_22596_22624 = state_22594__$1;
(statearr_22596_22624[(2)] = inst_22589);

(statearr_22596_22624[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (1))){
var inst_22571 = null;
var state_22594__$1 = (function (){var statearr_22597 = state_22594;
(statearr_22597[(7)] = inst_22571);

return statearr_22597;
})();
var statearr_22598_22625 = state_22594__$1;
(statearr_22598_22625[(2)] = null);

(statearr_22598_22625[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (4))){
var inst_22574 = (state_22594[(8)]);
var inst_22574__$1 = (state_22594[(2)]);
var inst_22575 = (inst_22574__$1 == null);
var inst_22576 = cljs.core.not(inst_22575);
var state_22594__$1 = (function (){var statearr_22599 = state_22594;
(statearr_22599[(8)] = inst_22574__$1);

return statearr_22599;
})();
if(inst_22576){
var statearr_22600_22626 = state_22594__$1;
(statearr_22600_22626[(1)] = (5));

} else {
var statearr_22601_22627 = state_22594__$1;
(statearr_22601_22627[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (6))){
var state_22594__$1 = state_22594;
var statearr_22602_22628 = state_22594__$1;
(statearr_22602_22628[(2)] = null);

(statearr_22602_22628[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (3))){
var inst_22591 = (state_22594[(2)]);
var inst_22592 = cljs.core.async.close_BANG_(out);
var state_22594__$1 = (function (){var statearr_22603 = state_22594;
(statearr_22603[(9)] = inst_22591);

return statearr_22603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22594__$1,inst_22592);
} else {
if((state_val_22595 === (2))){
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22594__$1,(4),ch);
} else {
if((state_val_22595 === (11))){
var inst_22574 = (state_22594[(8)]);
var inst_22583 = (state_22594[(2)]);
var inst_22571 = inst_22574;
var state_22594__$1 = (function (){var statearr_22604 = state_22594;
(statearr_22604[(7)] = inst_22571);

(statearr_22604[(10)] = inst_22583);

return statearr_22604;
})();
var statearr_22605_22629 = state_22594__$1;
(statearr_22605_22629[(2)] = null);

(statearr_22605_22629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (9))){
var inst_22574 = (state_22594[(8)]);
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22594__$1,(11),out,inst_22574);
} else {
if((state_val_22595 === (5))){
var inst_22571 = (state_22594[(7)]);
var inst_22574 = (state_22594[(8)]);
var inst_22578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22574,inst_22571);
var state_22594__$1 = state_22594;
if(inst_22578){
var statearr_22607_22630 = state_22594__$1;
(statearr_22607_22630[(1)] = (8));

} else {
var statearr_22608_22631 = state_22594__$1;
(statearr_22608_22631[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (10))){
var inst_22586 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
var statearr_22609_22632 = state_22594__$1;
(statearr_22609_22632[(2)] = inst_22586);

(statearr_22609_22632[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22595 === (8))){
var inst_22571 = (state_22594[(7)]);
var tmp22606 = inst_22571;
var inst_22571__$1 = tmp22606;
var state_22594__$1 = (function (){var statearr_22610 = state_22594;
(statearr_22610[(7)] = inst_22571__$1);

return statearr_22610;
})();
var statearr_22611_22633 = state_22594__$1;
(statearr_22611_22633[(2)] = null);

(statearr_22611_22633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22623,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22623,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22615[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22615[(1)] = (1));

return statearr_22615;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22594){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22594);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22616){if((e22616 instanceof Object)){
var ex__19828__auto__ = e22616;
var statearr_22617_22634 = state_22594;
(statearr_22617_22634[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22594);

return cljs.core.cst$kw$recur;
} else {
throw e22616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22635 = state_22594;
state_22594 = G__22635;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22623,out))
})();
var state__19952__auto__ = (function (){var statearr_22618 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22623);

return statearr_22618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22623,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22636 = [];
var len__10647__auto___22706 = arguments.length;
var i__10648__auto___22707 = (0);
while(true){
if((i__10648__auto___22707 < len__10647__auto___22706)){
args22636.push((arguments[i__10648__auto___22707]));

var G__22708 = (i__10648__auto___22707 + (1));
i__10648__auto___22707 = G__22708;
continue;
} else {
}
break;
}

var G__22638 = args22636.length;
switch (G__22638) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22636.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22710,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22710,out){
return (function (state_22676){
var state_val_22677 = (state_22676[(1)]);
if((state_val_22677 === (7))){
var inst_22672 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22678_22711 = state_22676__$1;
(statearr_22678_22711[(2)] = inst_22672);

(statearr_22678_22711[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (1))){
var inst_22639 = (new Array(n));
var inst_22640 = inst_22639;
var inst_22641 = (0);
var state_22676__$1 = (function (){var statearr_22679 = state_22676;
(statearr_22679[(7)] = inst_22640);

(statearr_22679[(8)] = inst_22641);

return statearr_22679;
})();
var statearr_22680_22712 = state_22676__$1;
(statearr_22680_22712[(2)] = null);

(statearr_22680_22712[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (4))){
var inst_22644 = (state_22676[(9)]);
var inst_22644__$1 = (state_22676[(2)]);
var inst_22645 = (inst_22644__$1 == null);
var inst_22646 = cljs.core.not(inst_22645);
var state_22676__$1 = (function (){var statearr_22681 = state_22676;
(statearr_22681[(9)] = inst_22644__$1);

return statearr_22681;
})();
if(inst_22646){
var statearr_22682_22713 = state_22676__$1;
(statearr_22682_22713[(1)] = (5));

} else {
var statearr_22683_22714 = state_22676__$1;
(statearr_22683_22714[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (15))){
var inst_22666 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22684_22715 = state_22676__$1;
(statearr_22684_22715[(2)] = inst_22666);

(statearr_22684_22715[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (13))){
var state_22676__$1 = state_22676;
var statearr_22685_22716 = state_22676__$1;
(statearr_22685_22716[(2)] = null);

(statearr_22685_22716[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (6))){
var inst_22641 = (state_22676[(8)]);
var inst_22662 = (inst_22641 > (0));
var state_22676__$1 = state_22676;
if(cljs.core.truth_(inst_22662)){
var statearr_22686_22717 = state_22676__$1;
(statearr_22686_22717[(1)] = (12));

} else {
var statearr_22687_22718 = state_22676__$1;
(statearr_22687_22718[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (3))){
var inst_22674 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22676__$1,inst_22674);
} else {
if((state_val_22677 === (12))){
var inst_22640 = (state_22676[(7)]);
var inst_22664 = cljs.core.vec(inst_22640);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22676__$1,(15),out,inst_22664);
} else {
if((state_val_22677 === (2))){
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22676__$1,(4),ch);
} else {
if((state_val_22677 === (11))){
var inst_22656 = (state_22676[(2)]);
var inst_22657 = (new Array(n));
var inst_22640 = inst_22657;
var inst_22641 = (0);
var state_22676__$1 = (function (){var statearr_22688 = state_22676;
(statearr_22688[(10)] = inst_22656);

(statearr_22688[(7)] = inst_22640);

(statearr_22688[(8)] = inst_22641);

return statearr_22688;
})();
var statearr_22689_22719 = state_22676__$1;
(statearr_22689_22719[(2)] = null);

(statearr_22689_22719[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (9))){
var inst_22640 = (state_22676[(7)]);
var inst_22654 = cljs.core.vec(inst_22640);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22676__$1,(11),out,inst_22654);
} else {
if((state_val_22677 === (5))){
var inst_22649 = (state_22676[(11)]);
var inst_22640 = (state_22676[(7)]);
var inst_22641 = (state_22676[(8)]);
var inst_22644 = (state_22676[(9)]);
var inst_22648 = (inst_22640[inst_22641] = inst_22644);
var inst_22649__$1 = (inst_22641 + (1));
var inst_22650 = (inst_22649__$1 < n);
var state_22676__$1 = (function (){var statearr_22690 = state_22676;
(statearr_22690[(11)] = inst_22649__$1);

(statearr_22690[(12)] = inst_22648);

return statearr_22690;
})();
if(cljs.core.truth_(inst_22650)){
var statearr_22691_22720 = state_22676__$1;
(statearr_22691_22720[(1)] = (8));

} else {
var statearr_22692_22721 = state_22676__$1;
(statearr_22692_22721[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (14))){
var inst_22669 = (state_22676[(2)]);
var inst_22670 = cljs.core.async.close_BANG_(out);
var state_22676__$1 = (function (){var statearr_22694 = state_22676;
(statearr_22694[(13)] = inst_22669);

return statearr_22694;
})();
var statearr_22695_22722 = state_22676__$1;
(statearr_22695_22722[(2)] = inst_22670);

(statearr_22695_22722[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (10))){
var inst_22660 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22696_22723 = state_22676__$1;
(statearr_22696_22723[(2)] = inst_22660);

(statearr_22696_22723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22677 === (8))){
var inst_22649 = (state_22676[(11)]);
var inst_22640 = (state_22676[(7)]);
var tmp22693 = inst_22640;
var inst_22640__$1 = tmp22693;
var inst_22641 = inst_22649;
var state_22676__$1 = (function (){var statearr_22697 = state_22676;
(statearr_22697[(7)] = inst_22640__$1);

(statearr_22697[(8)] = inst_22641);

return statearr_22697;
})();
var statearr_22698_22724 = state_22676__$1;
(statearr_22698_22724[(2)] = null);

(statearr_22698_22724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22710,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22710,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22702[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22702[(1)] = (1));

return statearr_22702;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22676){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22676);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22703){if((e22703 instanceof Object)){
var ex__19828__auto__ = e22703;
var statearr_22704_22725 = state_22676;
(statearr_22704_22725[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22676);

return cljs.core.cst$kw$recur;
} else {
throw e22703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22726 = state_22676;
state_22676 = G__22726;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22710,out))
})();
var state__19952__auto__ = (function (){var statearr_22705 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22710);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22710,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22727 = [];
var len__10647__auto___22801 = arguments.length;
var i__10648__auto___22802 = (0);
while(true){
if((i__10648__auto___22802 < len__10647__auto___22801)){
args22727.push((arguments[i__10648__auto___22802]));

var G__22803 = (i__10648__auto___22802 + (1));
i__10648__auto___22802 = G__22803;
continue;
} else {
}
break;
}

var G__22729 = args22727.length;
switch (G__22729) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22727.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19950__auto___22805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___22805,out){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___22805,out){
return (function (state_22771){
var state_val_22772 = (state_22771[(1)]);
if((state_val_22772 === (7))){
var inst_22767 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22773_22806 = state_22771__$1;
(statearr_22773_22806[(2)] = inst_22767);

(statearr_22773_22806[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (1))){
var inst_22730 = [];
var inst_22731 = inst_22730;
var inst_22732 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_22771__$1 = (function (){var statearr_22774 = state_22771;
(statearr_22774[(7)] = inst_22732);

(statearr_22774[(8)] = inst_22731);

return statearr_22774;
})();
var statearr_22775_22807 = state_22771__$1;
(statearr_22775_22807[(2)] = null);

(statearr_22775_22807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (4))){
var inst_22735 = (state_22771[(9)]);
var inst_22735__$1 = (state_22771[(2)]);
var inst_22736 = (inst_22735__$1 == null);
var inst_22737 = cljs.core.not(inst_22736);
var state_22771__$1 = (function (){var statearr_22776 = state_22771;
(statearr_22776[(9)] = inst_22735__$1);

return statearr_22776;
})();
if(inst_22737){
var statearr_22777_22808 = state_22771__$1;
(statearr_22777_22808[(1)] = (5));

} else {
var statearr_22778_22809 = state_22771__$1;
(statearr_22778_22809[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (15))){
var inst_22761 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22779_22810 = state_22771__$1;
(statearr_22779_22810[(2)] = inst_22761);

(statearr_22779_22810[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (13))){
var state_22771__$1 = state_22771;
var statearr_22780_22811 = state_22771__$1;
(statearr_22780_22811[(2)] = null);

(statearr_22780_22811[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (6))){
var inst_22731 = (state_22771[(8)]);
var inst_22756 = inst_22731.length;
var inst_22757 = (inst_22756 > (0));
var state_22771__$1 = state_22771;
if(cljs.core.truth_(inst_22757)){
var statearr_22781_22812 = state_22771__$1;
(statearr_22781_22812[(1)] = (12));

} else {
var statearr_22782_22813 = state_22771__$1;
(statearr_22782_22813[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (3))){
var inst_22769 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22771__$1,inst_22769);
} else {
if((state_val_22772 === (12))){
var inst_22731 = (state_22771[(8)]);
var inst_22759 = cljs.core.vec(inst_22731);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22771__$1,(15),out,inst_22759);
} else {
if((state_val_22772 === (2))){
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22771__$1,(4),ch);
} else {
if((state_val_22772 === (11))){
var inst_22739 = (state_22771[(10)]);
var inst_22735 = (state_22771[(9)]);
var inst_22749 = (state_22771[(2)]);
var inst_22750 = [];
var inst_22751 = inst_22750.push(inst_22735);
var inst_22731 = inst_22750;
var inst_22732 = inst_22739;
var state_22771__$1 = (function (){var statearr_22783 = state_22771;
(statearr_22783[(11)] = inst_22749);

(statearr_22783[(12)] = inst_22751);

(statearr_22783[(7)] = inst_22732);

(statearr_22783[(8)] = inst_22731);

return statearr_22783;
})();
var statearr_22784_22814 = state_22771__$1;
(statearr_22784_22814[(2)] = null);

(statearr_22784_22814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (9))){
var inst_22731 = (state_22771[(8)]);
var inst_22747 = cljs.core.vec(inst_22731);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22771__$1,(11),out,inst_22747);
} else {
if((state_val_22772 === (5))){
var inst_22739 = (state_22771[(10)]);
var inst_22735 = (state_22771[(9)]);
var inst_22732 = (state_22771[(7)]);
var inst_22739__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22735) : f.call(null,inst_22735));
var inst_22740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22739__$1,inst_22732);
var inst_22741 = cljs.core.keyword_identical_QMARK_(inst_22732,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_22742 = (inst_22740) || (inst_22741);
var state_22771__$1 = (function (){var statearr_22785 = state_22771;
(statearr_22785[(10)] = inst_22739__$1);

return statearr_22785;
})();
if(cljs.core.truth_(inst_22742)){
var statearr_22786_22815 = state_22771__$1;
(statearr_22786_22815[(1)] = (8));

} else {
var statearr_22787_22816 = state_22771__$1;
(statearr_22787_22816[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (14))){
var inst_22764 = (state_22771[(2)]);
var inst_22765 = cljs.core.async.close_BANG_(out);
var state_22771__$1 = (function (){var statearr_22789 = state_22771;
(statearr_22789[(13)] = inst_22764);

return statearr_22789;
})();
var statearr_22790_22817 = state_22771__$1;
(statearr_22790_22817[(2)] = inst_22765);

(statearr_22790_22817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (10))){
var inst_22754 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22791_22818 = state_22771__$1;
(statearr_22791_22818[(2)] = inst_22754);

(statearr_22791_22818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (8))){
var inst_22739 = (state_22771[(10)]);
var inst_22735 = (state_22771[(9)]);
var inst_22731 = (state_22771[(8)]);
var inst_22744 = inst_22731.push(inst_22735);
var tmp22788 = inst_22731;
var inst_22731__$1 = tmp22788;
var inst_22732 = inst_22739;
var state_22771__$1 = (function (){var statearr_22792 = state_22771;
(statearr_22792[(14)] = inst_22744);

(statearr_22792[(7)] = inst_22732);

(statearr_22792[(8)] = inst_22731__$1);

return statearr_22792;
})();
var statearr_22793_22819 = state_22771__$1;
(statearr_22793_22819[(2)] = null);

(statearr_22793_22819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19950__auto___22805,out))
;
return ((function (switch__19824__auto__,c__19950__auto___22805,out){
return (function() {
var cljs$core$async$state_machine__19825__auto__ = null;
var cljs$core$async$state_machine__19825__auto____0 = (function (){
var statearr_22797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22797[(0)] = cljs$core$async$state_machine__19825__auto__);

(statearr_22797[(1)] = (1));

return statearr_22797;
});
var cljs$core$async$state_machine__19825__auto____1 = (function (state_22771){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_22771);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e22798){if((e22798 instanceof Object)){
var ex__19828__auto__ = e22798;
var statearr_22799_22820 = state_22771;
(statearr_22799_22820[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22771);

return cljs.core.cst$kw$recur;
} else {
throw e22798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__22821 = state_22771;
state_22771 = G__22821;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
cljs$core$async$state_machine__19825__auto__ = function(state_22771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19825__auto____1.call(this,state_22771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19825__auto____0;
cljs$core$async$state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19825__auto____1;
return cljs$core$async$state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___22805,out))
})();
var state__19952__auto__ = (function (){var statearr_22800 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_22800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___22805);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___22805,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

