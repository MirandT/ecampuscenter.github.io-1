// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args15868 = [];
var len__7484__auto___15874 = arguments.length;
var i__7485__auto___15875 = (0);
while(true){
if((i__7485__auto___15875 < len__7484__auto___15874)){
args15868.push((arguments[i__7485__auto___15875]));

var G__15876 = (i__7485__auto___15875 + (1));
i__7485__auto___15875 = G__15876;
continue;
} else {
}
break;
}

var G__15870 = args15868.length;
switch (G__15870) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15868.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15871 = (function (f,blockable,meta15872){
this.f = f;
this.blockable = blockable;
this.meta15872 = meta15872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15873,meta15872__$1){
var self__ = this;
var _15873__$1 = this;
return (new cljs.core.async.t_cljs$core$async15871(self__.f,self__.blockable,meta15872__$1));
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15873){
var self__ = this;
var _15873__$1 = this;
return self__.meta15872;
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15872], null);
});

cljs.core.async.t_cljs$core$async15871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15871";

cljs.core.async.t_cljs$core$async15871.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15871");
});

cljs.core.async.__GT_t_cljs$core$async15871 = (function cljs$core$async$__GT_t_cljs$core$async15871(f__$1,blockable__$1,meta15872){
return (new cljs.core.async.t_cljs$core$async15871(f__$1,blockable__$1,meta15872));
});

}

return (new cljs.core.async.t_cljs$core$async15871(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args15880 = [];
var len__7484__auto___15883 = arguments.length;
var i__7485__auto___15884 = (0);
while(true){
if((i__7485__auto___15884 < len__7484__auto___15883)){
args15880.push((arguments[i__7485__auto___15884]));

var G__15885 = (i__7485__auto___15884 + (1));
i__7485__auto___15884 = G__15885;
continue;
} else {
}
break;
}

var G__15882 = args15880.length;
switch (G__15882) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15880.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args15887 = [];
var len__7484__auto___15890 = arguments.length;
var i__7485__auto___15891 = (0);
while(true){
if((i__7485__auto___15891 < len__7484__auto___15890)){
args15887.push((arguments[i__7485__auto___15891]));

var G__15892 = (i__7485__auto___15891 + (1));
i__7485__auto___15891 = G__15892;
continue;
} else {
}
break;
}

var G__15889 = args15887.length;
switch (G__15889) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15887.length)].join('')));

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
var args15894 = [];
var len__7484__auto___15897 = arguments.length;
var i__7485__auto___15898 = (0);
while(true){
if((i__7485__auto___15898 < len__7484__auto___15897)){
args15894.push((arguments[i__7485__auto___15898]));

var G__15899 = (i__7485__auto___15898 + (1));
i__7485__auto___15898 = G__15899;
continue;
} else {
}
break;
}

var G__15896 = args15894.length;
switch (G__15896) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15894.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15901 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15901) : fn1.call(null,val_15901));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15901,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15901) : fn1.call(null,val_15901));
});})(val_15901,ret))
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
var args15902 = [];
var len__7484__auto___15905 = arguments.length;
var i__7485__auto___15906 = (0);
while(true){
if((i__7485__auto___15906 < len__7484__auto___15905)){
args15902.push((arguments[i__7485__auto___15906]));

var G__15907 = (i__7485__auto___15906 + (1));
i__7485__auto___15906 = G__15907;
continue;
} else {
}
break;
}

var G__15904 = args15902.length;
switch (G__15904) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15902.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
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
var n__7324__auto___15909 = n;
var x_15910 = (0);
while(true){
if((x_15910 < n__7324__auto___15909)){
(a[x_15910] = (0));

var G__15911 = (x_15910 + (1));
x_15910 = G__15911;
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

var G__15912 = (i + (1));
i = G__15912;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15916 = (function (alt_flag,flag,meta15917){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15917 = meta15917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15918,meta15917__$1){
var self__ = this;
var _15918__$1 = this;
return (new cljs.core.async.t_cljs$core$async15916(self__.alt_flag,self__.flag,meta15917__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15918){
var self__ = this;
var _15918__$1 = this;
return self__.meta15917;
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15917], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15916";

cljs.core.async.t_cljs$core$async15916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15916");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15916 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15916(alt_flag__$1,flag__$1,meta15917){
return (new cljs.core.async.t_cljs$core$async15916(alt_flag__$1,flag__$1,meta15917));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15916(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15922 = (function (alt_handler,flag,cb,meta15923){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15923 = meta15923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15924,meta15923__$1){
var self__ = this;
var _15924__$1 = this;
return (new cljs.core.async.t_cljs$core$async15922(self__.alt_handler,self__.flag,self__.cb,meta15923__$1));
});

cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15924){
var self__ = this;
var _15924__$1 = this;
return self__.meta15923;
});

cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15923], null);
});

cljs.core.async.t_cljs$core$async15922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15922";

cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15922");
});

cljs.core.async.__GT_t_cljs$core$async15922 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15922(alt_handler__$1,flag__$1,cb__$1,meta15923){
return (new cljs.core.async.t_cljs$core$async15922(alt_handler__$1,flag__$1,cb__$1,meta15923));
});

}

return (new cljs.core.async.t_cljs$core$async15922(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15925_SHARP_){
var G__15929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15925_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15929) : fret.call(null,G__15929));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15926_SHARP_){
var G__15930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15926_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15930) : fret.call(null,G__15930));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15931 = (i + (1));
i = G__15931;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6409__auto__ = ret;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___15937 = arguments.length;
var i__7485__auto___15938 = (0);
while(true){
if((i__7485__auto___15938 < len__7484__auto___15937)){
args__7491__auto__.push((arguments[i__7485__auto___15938]));

var G__15939 = (i__7485__auto___15938 + (1));
i__7485__auto___15938 = G__15939;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15934){
var map__15935 = p__15934;
var map__15935__$1 = ((((!((map__15935 == null)))?((((map__15935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15935):map__15935);
var opts = map__15935__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15932){
var G__15933 = cljs.core.first(seq15932);
var seq15932__$1 = cljs.core.next(seq15932);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15933,seq15932__$1);
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
var args15940 = [];
var len__7484__auto___15990 = arguments.length;
var i__7485__auto___15991 = (0);
while(true){
if((i__7485__auto___15991 < len__7484__auto___15990)){
args15940.push((arguments[i__7485__auto___15991]));

var G__15992 = (i__7485__auto___15991 + (1));
i__7485__auto___15991 = G__15992;
continue;
} else {
}
break;
}

var G__15942 = args15940.length;
switch (G__15942) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15940.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15823__auto___15994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___15994){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___15994){
return (function (state_15966){
var state_val_15967 = (state_15966[(1)]);
if((state_val_15967 === (7))){
var inst_15962 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_15968_15995 = state_15966__$1;
(statearr_15968_15995[(2)] = inst_15962);

(statearr_15968_15995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (1))){
var state_15966__$1 = state_15966;
var statearr_15969_15996 = state_15966__$1;
(statearr_15969_15996[(2)] = null);

(statearr_15969_15996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (4))){
var inst_15945 = (state_15966[(7)]);
var inst_15945__$1 = (state_15966[(2)]);
var inst_15946 = (inst_15945__$1 == null);
var state_15966__$1 = (function (){var statearr_15970 = state_15966;
(statearr_15970[(7)] = inst_15945__$1);

return statearr_15970;
})();
if(cljs.core.truth_(inst_15946)){
var statearr_15971_15997 = state_15966__$1;
(statearr_15971_15997[(1)] = (5));

} else {
var statearr_15972_15998 = state_15966__$1;
(statearr_15972_15998[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (13))){
var state_15966__$1 = state_15966;
var statearr_15973_15999 = state_15966__$1;
(statearr_15973_15999[(2)] = null);

(statearr_15973_15999[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (6))){
var inst_15945 = (state_15966[(7)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15966__$1,(11),to,inst_15945);
} else {
if((state_val_15967 === (3))){
var inst_15964 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15966__$1,inst_15964);
} else {
if((state_val_15967 === (12))){
var state_15966__$1 = state_15966;
var statearr_15974_16000 = state_15966__$1;
(statearr_15974_16000[(2)] = null);

(statearr_15974_16000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (2))){
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15966__$1,(4),from);
} else {
if((state_val_15967 === (11))){
var inst_15955 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
if(cljs.core.truth_(inst_15955)){
var statearr_15975_16001 = state_15966__$1;
(statearr_15975_16001[(1)] = (12));

} else {
var statearr_15976_16002 = state_15966__$1;
(statearr_15976_16002[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (9))){
var state_15966__$1 = state_15966;
var statearr_15977_16003 = state_15966__$1;
(statearr_15977_16003[(2)] = null);

(statearr_15977_16003[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (5))){
var state_15966__$1 = state_15966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15978_16004 = state_15966__$1;
(statearr_15978_16004[(1)] = (8));

} else {
var statearr_15979_16005 = state_15966__$1;
(statearr_15979_16005[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (14))){
var inst_15960 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_15980_16006 = state_15966__$1;
(statearr_15980_16006[(2)] = inst_15960);

(statearr_15980_16006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (10))){
var inst_15952 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_15981_16007 = state_15966__$1;
(statearr_15981_16007[(2)] = inst_15952);

(statearr_15981_16007[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15967 === (8))){
var inst_15949 = cljs.core.async.close_BANG_(to);
var state_15966__$1 = state_15966;
var statearr_15982_16008 = state_15966__$1;
(statearr_15982_16008[(2)] = inst_15949);

(statearr_15982_16008[(1)] = (10));


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
});})(c__15823__auto___15994))
;
return ((function (switch__15699__auto__,c__15823__auto___15994){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_15986 = [null,null,null,null,null,null,null,null];
(statearr_15986[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_15986[(1)] = (1));

return statearr_15986;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_15966){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_15966);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e15987){if((e15987 instanceof Object)){
var ex__15703__auto__ = e15987;
var statearr_15988_16009 = state_15966;
(statearr_15988_16009[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15966);

return cljs.core.cst$kw$recur;
} else {
throw e15987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16010 = state_15966;
state_15966 = G__16010;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_15966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_15966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___15994))
})();
var state__15825__auto__ = (function (){var statearr_15989 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_15989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___15994);

return statearr_15989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___15994))
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
return (function (p__16198){
var vec__16199 = p__16198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(1),null);
var job = vec__16199;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15823__auto___16385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results){
return (function (state_16206){
var state_val_16207 = (state_16206[(1)]);
if((state_val_16207 === (1))){
var state_16206__$1 = state_16206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16206__$1,(2),res,v);
} else {
if((state_val_16207 === (2))){
var inst_16203 = (state_16206[(2)]);
var inst_16204 = cljs.core.async.close_BANG_(res);
var state_16206__$1 = (function (){var statearr_16208 = state_16206;
(statearr_16208[(7)] = inst_16203);

return statearr_16208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16206__$1,inst_16204);
} else {
return null;
}
}
});})(c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results))
;
return ((function (switch__15699__auto__,c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_16212 = [null,null,null,null,null,null,null,null];
(statearr_16212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__);

(statearr_16212[(1)] = (1));

return statearr_16212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1 = (function (state_16206){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16206);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16213){if((e16213 instanceof Object)){
var ex__15703__auto__ = e16213;
var statearr_16214_16386 = state_16206;
(statearr_16214_16386[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16206);

return cljs.core.cst$kw$recur;
} else {
throw e16213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16387 = state_16206;
state_16206 = G__16387;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = function(state_16206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1.call(this,state_16206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results))
})();
var state__15825__auto__ = (function (){var statearr_16215 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___16385);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___16385,res,vec__16199,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16216){
var vec__16217 = p__16216;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(1),null);
var job = vec__16217;
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
var n__7324__auto___16388 = n;
var __16389 = (0);
while(true){
if((__16389 < n__7324__auto___16388)){
var G__16220_16390 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16220_16390) {
case "compute":
var c__15823__auto___16392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16389,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (__16389,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function (state_16233){
var state_val_16234 = (state_16233[(1)]);
if((state_val_16234 === (1))){
var state_16233__$1 = state_16233;
var statearr_16235_16393 = state_16233__$1;
(statearr_16235_16393[(2)] = null);

(statearr_16235_16393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16234 === (2))){
var state_16233__$1 = state_16233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16233__$1,(4),jobs);
} else {
if((state_val_16234 === (3))){
var inst_16231 = (state_16233[(2)]);
var state_16233__$1 = state_16233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16233__$1,inst_16231);
} else {
if((state_val_16234 === (4))){
var inst_16223 = (state_16233[(2)]);
var inst_16224 = process(inst_16223);
var state_16233__$1 = state_16233;
if(cljs.core.truth_(inst_16224)){
var statearr_16236_16394 = state_16233__$1;
(statearr_16236_16394[(1)] = (5));

} else {
var statearr_16237_16395 = state_16233__$1;
(statearr_16237_16395[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16234 === (5))){
var state_16233__$1 = state_16233;
var statearr_16238_16396 = state_16233__$1;
(statearr_16238_16396[(2)] = null);

(statearr_16238_16396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16234 === (6))){
var state_16233__$1 = state_16233;
var statearr_16239_16397 = state_16233__$1;
(statearr_16239_16397[(2)] = null);

(statearr_16239_16397[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16234 === (7))){
var inst_16229 = (state_16233[(2)]);
var state_16233__$1 = state_16233;
var statearr_16240_16398 = state_16233__$1;
(statearr_16240_16398[(2)] = inst_16229);

(statearr_16240_16398[(1)] = (3));


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
});})(__16389,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
;
return ((function (__16389,switch__15699__auto__,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_16244 = [null,null,null,null,null,null,null];
(statearr_16244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__);

(statearr_16244[(1)] = (1));

return statearr_16244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1 = (function (state_16233){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16233);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16245){if((e16245 instanceof Object)){
var ex__15703__auto__ = e16245;
var statearr_16246_16399 = state_16233;
(statearr_16246_16399[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16233);

return cljs.core.cst$kw$recur;
} else {
throw e16245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16400 = state_16233;
state_16233 = G__16400;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = function(state_16233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1.call(this,state_16233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__;
})()
;})(__16389,switch__15699__auto__,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
})();
var state__15825__auto__ = (function (){var statearr_16247 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___16392);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(__16389,c__15823__auto___16392,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
);


break;
case "async":
var c__15823__auto___16401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16389,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (__16389,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function (state_16260){
var state_val_16261 = (state_16260[(1)]);
if((state_val_16261 === (1))){
var state_16260__$1 = state_16260;
var statearr_16262_16402 = state_16260__$1;
(statearr_16262_16402[(2)] = null);

(statearr_16262_16402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16261 === (2))){
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16260__$1,(4),jobs);
} else {
if((state_val_16261 === (3))){
var inst_16258 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16260__$1,inst_16258);
} else {
if((state_val_16261 === (4))){
var inst_16250 = (state_16260[(2)]);
var inst_16251 = async(inst_16250);
var state_16260__$1 = state_16260;
if(cljs.core.truth_(inst_16251)){
var statearr_16263_16403 = state_16260__$1;
(statearr_16263_16403[(1)] = (5));

} else {
var statearr_16264_16404 = state_16260__$1;
(statearr_16264_16404[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16261 === (5))){
var state_16260__$1 = state_16260;
var statearr_16265_16405 = state_16260__$1;
(statearr_16265_16405[(2)] = null);

(statearr_16265_16405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16261 === (6))){
var state_16260__$1 = state_16260;
var statearr_16266_16406 = state_16260__$1;
(statearr_16266_16406[(2)] = null);

(statearr_16266_16406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16261 === (7))){
var inst_16256 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16267_16407 = state_16260__$1;
(statearr_16267_16407[(2)] = inst_16256);

(statearr_16267_16407[(1)] = (3));


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
});})(__16389,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
;
return ((function (__16389,switch__15699__auto__,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_16271 = [null,null,null,null,null,null,null];
(statearr_16271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__);

(statearr_16271[(1)] = (1));

return statearr_16271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1 = (function (state_16260){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16260);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16272){if((e16272 instanceof Object)){
var ex__15703__auto__ = e16272;
var statearr_16273_16408 = state_16260;
(statearr_16273_16408[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16260);

return cljs.core.cst$kw$recur;
} else {
throw e16272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16409 = state_16260;
state_16260 = G__16409;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = function(state_16260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1.call(this,state_16260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__;
})()
;})(__16389,switch__15699__auto__,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
})();
var state__15825__auto__ = (function (){var statearr_16274 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___16401);

return statearr_16274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(__16389,c__15823__auto___16401,G__16220_16390,n__7324__auto___16388,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16410 = (__16389 + (1));
__16389 = G__16410;
continue;
} else {
}
break;
}

var c__15823__auto___16411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___16411,jobs,results,process,async){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___16411,jobs,results,process,async){
return (function (state_16296){
var state_val_16297 = (state_16296[(1)]);
if((state_val_16297 === (1))){
var state_16296__$1 = state_16296;
var statearr_16298_16412 = state_16296__$1;
(statearr_16298_16412[(2)] = null);

(statearr_16298_16412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16297 === (2))){
var state_16296__$1 = state_16296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16296__$1,(4),from);
} else {
if((state_val_16297 === (3))){
var inst_16294 = (state_16296[(2)]);
var state_16296__$1 = state_16296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16296__$1,inst_16294);
} else {
if((state_val_16297 === (4))){
var inst_16277 = (state_16296[(7)]);
var inst_16277__$1 = (state_16296[(2)]);
var inst_16278 = (inst_16277__$1 == null);
var state_16296__$1 = (function (){var statearr_16299 = state_16296;
(statearr_16299[(7)] = inst_16277__$1);

return statearr_16299;
})();
if(cljs.core.truth_(inst_16278)){
var statearr_16300_16413 = state_16296__$1;
(statearr_16300_16413[(1)] = (5));

} else {
var statearr_16301_16414 = state_16296__$1;
(statearr_16301_16414[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16297 === (5))){
var inst_16280 = cljs.core.async.close_BANG_(jobs);
var state_16296__$1 = state_16296;
var statearr_16302_16415 = state_16296__$1;
(statearr_16302_16415[(2)] = inst_16280);

(statearr_16302_16415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16297 === (6))){
var inst_16282 = (state_16296[(8)]);
var inst_16277 = (state_16296[(7)]);
var inst_16282__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16284 = [inst_16277,inst_16282__$1];
var inst_16285 = (new cljs.core.PersistentVector(null,2,(5),inst_16283,inst_16284,null));
var state_16296__$1 = (function (){var statearr_16303 = state_16296;
(statearr_16303[(8)] = inst_16282__$1);

return statearr_16303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16296__$1,(8),jobs,inst_16285);
} else {
if((state_val_16297 === (7))){
var inst_16292 = (state_16296[(2)]);
var state_16296__$1 = state_16296;
var statearr_16304_16416 = state_16296__$1;
(statearr_16304_16416[(2)] = inst_16292);

(statearr_16304_16416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16297 === (8))){
var inst_16282 = (state_16296[(8)]);
var inst_16287 = (state_16296[(2)]);
var state_16296__$1 = (function (){var statearr_16305 = state_16296;
(statearr_16305[(9)] = inst_16287);

return statearr_16305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16296__$1,(9),results,inst_16282);
} else {
if((state_val_16297 === (9))){
var inst_16289 = (state_16296[(2)]);
var state_16296__$1 = (function (){var statearr_16306 = state_16296;
(statearr_16306[(10)] = inst_16289);

return statearr_16306;
})();
var statearr_16307_16417 = state_16296__$1;
(statearr_16307_16417[(2)] = null);

(statearr_16307_16417[(1)] = (2));


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
});})(c__15823__auto___16411,jobs,results,process,async))
;
return ((function (switch__15699__auto__,c__15823__auto___16411,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_16311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__);

(statearr_16311[(1)] = (1));

return statearr_16311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1 = (function (state_16296){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16296);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16312){if((e16312 instanceof Object)){
var ex__15703__auto__ = e16312;
var statearr_16313_16418 = state_16296;
(statearr_16313_16418[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16296);

return cljs.core.cst$kw$recur;
} else {
throw e16312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16419 = state_16296;
state_16296 = G__16419;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = function(state_16296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1.call(this,state_16296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___16411,jobs,results,process,async))
})();
var state__15825__auto__ = (function (){var statearr_16314 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___16411);

return statearr_16314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___16411,jobs,results,process,async))
);


var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__,jobs,results,process,async){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__,jobs,results,process,async){
return (function (state_16352){
var state_val_16353 = (state_16352[(1)]);
if((state_val_16353 === (7))){
var inst_16348 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
var statearr_16354_16420 = state_16352__$1;
(statearr_16354_16420[(2)] = inst_16348);

(statearr_16354_16420[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (20))){
var state_16352__$1 = state_16352;
var statearr_16355_16421 = state_16352__$1;
(statearr_16355_16421[(2)] = null);

(statearr_16355_16421[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (1))){
var state_16352__$1 = state_16352;
var statearr_16356_16422 = state_16352__$1;
(statearr_16356_16422[(2)] = null);

(statearr_16356_16422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (4))){
var inst_16317 = (state_16352[(7)]);
var inst_16317__$1 = (state_16352[(2)]);
var inst_16318 = (inst_16317__$1 == null);
var state_16352__$1 = (function (){var statearr_16357 = state_16352;
(statearr_16357[(7)] = inst_16317__$1);

return statearr_16357;
})();
if(cljs.core.truth_(inst_16318)){
var statearr_16358_16423 = state_16352__$1;
(statearr_16358_16423[(1)] = (5));

} else {
var statearr_16359_16424 = state_16352__$1;
(statearr_16359_16424[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (15))){
var inst_16330 = (state_16352[(8)]);
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16352__$1,(18),to,inst_16330);
} else {
if((state_val_16353 === (21))){
var inst_16343 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
var statearr_16360_16425 = state_16352__$1;
(statearr_16360_16425[(2)] = inst_16343);

(statearr_16360_16425[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (13))){
var inst_16345 = (state_16352[(2)]);
var state_16352__$1 = (function (){var statearr_16361 = state_16352;
(statearr_16361[(9)] = inst_16345);

return statearr_16361;
})();
var statearr_16362_16426 = state_16352__$1;
(statearr_16362_16426[(2)] = null);

(statearr_16362_16426[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (6))){
var inst_16317 = (state_16352[(7)]);
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16352__$1,(11),inst_16317);
} else {
if((state_val_16353 === (17))){
var inst_16338 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
if(cljs.core.truth_(inst_16338)){
var statearr_16363_16427 = state_16352__$1;
(statearr_16363_16427[(1)] = (19));

} else {
var statearr_16364_16428 = state_16352__$1;
(statearr_16364_16428[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (3))){
var inst_16350 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16352__$1,inst_16350);
} else {
if((state_val_16353 === (12))){
var inst_16327 = (state_16352[(10)]);
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16352__$1,(14),inst_16327);
} else {
if((state_val_16353 === (2))){
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16352__$1,(4),results);
} else {
if((state_val_16353 === (19))){
var state_16352__$1 = state_16352;
var statearr_16365_16429 = state_16352__$1;
(statearr_16365_16429[(2)] = null);

(statearr_16365_16429[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (11))){
var inst_16327 = (state_16352[(2)]);
var state_16352__$1 = (function (){var statearr_16366 = state_16352;
(statearr_16366[(10)] = inst_16327);

return statearr_16366;
})();
var statearr_16367_16430 = state_16352__$1;
(statearr_16367_16430[(2)] = null);

(statearr_16367_16430[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (9))){
var state_16352__$1 = state_16352;
var statearr_16368_16431 = state_16352__$1;
(statearr_16368_16431[(2)] = null);

(statearr_16368_16431[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (5))){
var state_16352__$1 = state_16352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16369_16432 = state_16352__$1;
(statearr_16369_16432[(1)] = (8));

} else {
var statearr_16370_16433 = state_16352__$1;
(statearr_16370_16433[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (14))){
var inst_16330 = (state_16352[(8)]);
var inst_16332 = (state_16352[(11)]);
var inst_16330__$1 = (state_16352[(2)]);
var inst_16331 = (inst_16330__$1 == null);
var inst_16332__$1 = cljs.core.not(inst_16331);
var state_16352__$1 = (function (){var statearr_16371 = state_16352;
(statearr_16371[(8)] = inst_16330__$1);

(statearr_16371[(11)] = inst_16332__$1);

return statearr_16371;
})();
if(inst_16332__$1){
var statearr_16372_16434 = state_16352__$1;
(statearr_16372_16434[(1)] = (15));

} else {
var statearr_16373_16435 = state_16352__$1;
(statearr_16373_16435[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (16))){
var inst_16332 = (state_16352[(11)]);
var state_16352__$1 = state_16352;
var statearr_16374_16436 = state_16352__$1;
(statearr_16374_16436[(2)] = inst_16332);

(statearr_16374_16436[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (10))){
var inst_16324 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
var statearr_16375_16437 = state_16352__$1;
(statearr_16375_16437[(2)] = inst_16324);

(statearr_16375_16437[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (18))){
var inst_16335 = (state_16352[(2)]);
var state_16352__$1 = state_16352;
var statearr_16376_16438 = state_16352__$1;
(statearr_16376_16438[(2)] = inst_16335);

(statearr_16376_16438[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16353 === (8))){
var inst_16321 = cljs.core.async.close_BANG_(to);
var state_16352__$1 = state_16352;
var statearr_16377_16439 = state_16352__$1;
(statearr_16377_16439[(2)] = inst_16321);

(statearr_16377_16439[(1)] = (10));


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
});})(c__15823__auto__,jobs,results,process,async))
;
return ((function (switch__15699__auto__,c__15823__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_16381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__);

(statearr_16381[(1)] = (1));

return statearr_16381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1 = (function (state_16352){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16352);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16382){if((e16382 instanceof Object)){
var ex__15703__auto__ = e16382;
var statearr_16383_16440 = state_16352;
(statearr_16383_16440[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16352);

return cljs.core.cst$kw$recur;
} else {
throw e16382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16441 = state_16352;
state_16352 = G__16441;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__ = function(state_16352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1.call(this,state_16352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__,jobs,results,process,async))
})();
var state__15825__auto__ = (function (){var statearr_16384 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_16384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__,jobs,results,process,async))
);

return c__15823__auto__;
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
var args16442 = [];
var len__7484__auto___16445 = arguments.length;
var i__7485__auto___16446 = (0);
while(true){
if((i__7485__auto___16446 < len__7484__auto___16445)){
args16442.push((arguments[i__7485__auto___16446]));

var G__16447 = (i__7485__auto___16446 + (1));
i__7485__auto___16446 = G__16447;
continue;
} else {
}
break;
}

var G__16444 = args16442.length;
switch (G__16444) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16442.length)].join('')));

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
var args16449 = [];
var len__7484__auto___16452 = arguments.length;
var i__7485__auto___16453 = (0);
while(true){
if((i__7485__auto___16453 < len__7484__auto___16452)){
args16449.push((arguments[i__7485__auto___16453]));

var G__16454 = (i__7485__auto___16453 + (1));
i__7485__auto___16453 = G__16454;
continue;
} else {
}
break;
}

var G__16451 = args16449.length;
switch (G__16451) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16449.length)].join('')));

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
var args16456 = [];
var len__7484__auto___16509 = arguments.length;
var i__7485__auto___16510 = (0);
while(true){
if((i__7485__auto___16510 < len__7484__auto___16509)){
args16456.push((arguments[i__7485__auto___16510]));

var G__16511 = (i__7485__auto___16510 + (1));
i__7485__auto___16510 = G__16511;
continue;
} else {
}
break;
}

var G__16458 = args16456.length;
switch (G__16458) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16456.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15823__auto___16513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___16513,tc,fc){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___16513,tc,fc){
return (function (state_16484){
var state_val_16485 = (state_16484[(1)]);
if((state_val_16485 === (7))){
var inst_16480 = (state_16484[(2)]);
var state_16484__$1 = state_16484;
var statearr_16486_16514 = state_16484__$1;
(statearr_16486_16514[(2)] = inst_16480);

(statearr_16486_16514[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (1))){
var state_16484__$1 = state_16484;
var statearr_16487_16515 = state_16484__$1;
(statearr_16487_16515[(2)] = null);

(statearr_16487_16515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (4))){
var inst_16461 = (state_16484[(7)]);
var inst_16461__$1 = (state_16484[(2)]);
var inst_16462 = (inst_16461__$1 == null);
var state_16484__$1 = (function (){var statearr_16488 = state_16484;
(statearr_16488[(7)] = inst_16461__$1);

return statearr_16488;
})();
if(cljs.core.truth_(inst_16462)){
var statearr_16489_16516 = state_16484__$1;
(statearr_16489_16516[(1)] = (5));

} else {
var statearr_16490_16517 = state_16484__$1;
(statearr_16490_16517[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (13))){
var state_16484__$1 = state_16484;
var statearr_16491_16518 = state_16484__$1;
(statearr_16491_16518[(2)] = null);

(statearr_16491_16518[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (6))){
var inst_16461 = (state_16484[(7)]);
var inst_16467 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16461) : p.call(null,inst_16461));
var state_16484__$1 = state_16484;
if(cljs.core.truth_(inst_16467)){
var statearr_16492_16519 = state_16484__$1;
(statearr_16492_16519[(1)] = (9));

} else {
var statearr_16493_16520 = state_16484__$1;
(statearr_16493_16520[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (3))){
var inst_16482 = (state_16484[(2)]);
var state_16484__$1 = state_16484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16484__$1,inst_16482);
} else {
if((state_val_16485 === (12))){
var state_16484__$1 = state_16484;
var statearr_16494_16521 = state_16484__$1;
(statearr_16494_16521[(2)] = null);

(statearr_16494_16521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (2))){
var state_16484__$1 = state_16484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16484__$1,(4),ch);
} else {
if((state_val_16485 === (11))){
var inst_16461 = (state_16484[(7)]);
var inst_16471 = (state_16484[(2)]);
var state_16484__$1 = state_16484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16484__$1,(8),inst_16471,inst_16461);
} else {
if((state_val_16485 === (9))){
var state_16484__$1 = state_16484;
var statearr_16495_16522 = state_16484__$1;
(statearr_16495_16522[(2)] = tc);

(statearr_16495_16522[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (5))){
var inst_16464 = cljs.core.async.close_BANG_(tc);
var inst_16465 = cljs.core.async.close_BANG_(fc);
var state_16484__$1 = (function (){var statearr_16496 = state_16484;
(statearr_16496[(8)] = inst_16464);

return statearr_16496;
})();
var statearr_16497_16523 = state_16484__$1;
(statearr_16497_16523[(2)] = inst_16465);

(statearr_16497_16523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (14))){
var inst_16478 = (state_16484[(2)]);
var state_16484__$1 = state_16484;
var statearr_16498_16524 = state_16484__$1;
(statearr_16498_16524[(2)] = inst_16478);

(statearr_16498_16524[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (10))){
var state_16484__$1 = state_16484;
var statearr_16499_16525 = state_16484__$1;
(statearr_16499_16525[(2)] = fc);

(statearr_16499_16525[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16485 === (8))){
var inst_16473 = (state_16484[(2)]);
var state_16484__$1 = state_16484;
if(cljs.core.truth_(inst_16473)){
var statearr_16500_16526 = state_16484__$1;
(statearr_16500_16526[(1)] = (12));

} else {
var statearr_16501_16527 = state_16484__$1;
(statearr_16501_16527[(1)] = (13));

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
});})(c__15823__auto___16513,tc,fc))
;
return ((function (switch__15699__auto__,c__15823__auto___16513,tc,fc){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_16505 = [null,null,null,null,null,null,null,null,null];
(statearr_16505[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_16505[(1)] = (1));

return statearr_16505;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_16484){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16484);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16506){if((e16506 instanceof Object)){
var ex__15703__auto__ = e16506;
var statearr_16507_16528 = state_16484;
(statearr_16507_16528[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16484);

return cljs.core.cst$kw$recur;
} else {
throw e16506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16529 = state_16484;
state_16484 = G__16529;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_16484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_16484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___16513,tc,fc))
})();
var state__15825__auto__ = (function (){var statearr_16508 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___16513);

return statearr_16508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___16513,tc,fc))
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
var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_16593){
var state_val_16594 = (state_16593[(1)]);
if((state_val_16594 === (7))){
var inst_16589 = (state_16593[(2)]);
var state_16593__$1 = state_16593;
var statearr_16595_16616 = state_16593__$1;
(statearr_16595_16616[(2)] = inst_16589);

(statearr_16595_16616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (1))){
var inst_16573 = init;
var state_16593__$1 = (function (){var statearr_16596 = state_16593;
(statearr_16596[(7)] = inst_16573);

return statearr_16596;
})();
var statearr_16597_16617 = state_16593__$1;
(statearr_16597_16617[(2)] = null);

(statearr_16597_16617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (4))){
var inst_16576 = (state_16593[(8)]);
var inst_16576__$1 = (state_16593[(2)]);
var inst_16577 = (inst_16576__$1 == null);
var state_16593__$1 = (function (){var statearr_16598 = state_16593;
(statearr_16598[(8)] = inst_16576__$1);

return statearr_16598;
})();
if(cljs.core.truth_(inst_16577)){
var statearr_16599_16618 = state_16593__$1;
(statearr_16599_16618[(1)] = (5));

} else {
var statearr_16600_16619 = state_16593__$1;
(statearr_16600_16619[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (6))){
var inst_16580 = (state_16593[(9)]);
var inst_16576 = (state_16593[(8)]);
var inst_16573 = (state_16593[(7)]);
var inst_16580__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16573,inst_16576) : f.call(null,inst_16573,inst_16576));
var inst_16581 = cljs.core.reduced_QMARK_(inst_16580__$1);
var state_16593__$1 = (function (){var statearr_16601 = state_16593;
(statearr_16601[(9)] = inst_16580__$1);

return statearr_16601;
})();
if(inst_16581){
var statearr_16602_16620 = state_16593__$1;
(statearr_16602_16620[(1)] = (8));

} else {
var statearr_16603_16621 = state_16593__$1;
(statearr_16603_16621[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (3))){
var inst_16591 = (state_16593[(2)]);
var state_16593__$1 = state_16593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16593__$1,inst_16591);
} else {
if((state_val_16594 === (2))){
var state_16593__$1 = state_16593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16593__$1,(4),ch);
} else {
if((state_val_16594 === (9))){
var inst_16580 = (state_16593[(9)]);
var inst_16573 = inst_16580;
var state_16593__$1 = (function (){var statearr_16604 = state_16593;
(statearr_16604[(7)] = inst_16573);

return statearr_16604;
})();
var statearr_16605_16622 = state_16593__$1;
(statearr_16605_16622[(2)] = null);

(statearr_16605_16622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (5))){
var inst_16573 = (state_16593[(7)]);
var state_16593__$1 = state_16593;
var statearr_16606_16623 = state_16593__$1;
(statearr_16606_16623[(2)] = inst_16573);

(statearr_16606_16623[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (10))){
var inst_16587 = (state_16593[(2)]);
var state_16593__$1 = state_16593;
var statearr_16607_16624 = state_16593__$1;
(statearr_16607_16624[(2)] = inst_16587);

(statearr_16607_16624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16594 === (8))){
var inst_16580 = (state_16593[(9)]);
var inst_16583 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16580) : cljs.core.deref.call(null,inst_16580));
var state_16593__$1 = state_16593;
var statearr_16608_16625 = state_16593__$1;
(statearr_16608_16625[(2)] = inst_16583);

(statearr_16608_16625[(1)] = (10));


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
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15700__auto____0 = (function (){
var statearr_16612 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16612[(0)] = cljs$core$async$reduce_$_state_machine__15700__auto__);

(statearr_16612[(1)] = (1));

return statearr_16612;
});
var cljs$core$async$reduce_$_state_machine__15700__auto____1 = (function (state_16593){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16593);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16613){if((e16613 instanceof Object)){
var ex__15703__auto__ = e16613;
var statearr_16614_16626 = state_16593;
(statearr_16614_16626[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16593);

return cljs.core.cst$kw$recur;
} else {
throw e16613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16627 = state_16593;
state_16593 = G__16627;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15700__auto__ = function(state_16593){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15700__auto____1.call(this,state_16593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15700__auto____0;
cljs$core$async$reduce_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15700__auto____1;
return cljs$core$async$reduce_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_16615 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_16615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
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
var args16628 = [];
var len__7484__auto___16680 = arguments.length;
var i__7485__auto___16681 = (0);
while(true){
if((i__7485__auto___16681 < len__7484__auto___16680)){
args16628.push((arguments[i__7485__auto___16681]));

var G__16682 = (i__7485__auto___16681 + (1));
i__7485__auto___16681 = G__16682;
continue;
} else {
}
break;
}

var G__16630 = args16628.length;
switch (G__16630) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16628.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_16655){
var state_val_16656 = (state_16655[(1)]);
if((state_val_16656 === (7))){
var inst_16637 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
var statearr_16657_16684 = state_16655__$1;
(statearr_16657_16684[(2)] = inst_16637);

(statearr_16657_16684[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (1))){
var inst_16631 = cljs.core.seq(coll);
var inst_16632 = inst_16631;
var state_16655__$1 = (function (){var statearr_16658 = state_16655;
(statearr_16658[(7)] = inst_16632);

return statearr_16658;
})();
var statearr_16659_16685 = state_16655__$1;
(statearr_16659_16685[(2)] = null);

(statearr_16659_16685[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (4))){
var inst_16632 = (state_16655[(7)]);
var inst_16635 = cljs.core.first(inst_16632);
var state_16655__$1 = state_16655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16655__$1,(7),ch,inst_16635);
} else {
if((state_val_16656 === (13))){
var inst_16649 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
var statearr_16660_16686 = state_16655__$1;
(statearr_16660_16686[(2)] = inst_16649);

(statearr_16660_16686[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (6))){
var inst_16640 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
if(cljs.core.truth_(inst_16640)){
var statearr_16661_16687 = state_16655__$1;
(statearr_16661_16687[(1)] = (8));

} else {
var statearr_16662_16688 = state_16655__$1;
(statearr_16662_16688[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (3))){
var inst_16653 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16655__$1,inst_16653);
} else {
if((state_val_16656 === (12))){
var state_16655__$1 = state_16655;
var statearr_16663_16689 = state_16655__$1;
(statearr_16663_16689[(2)] = null);

(statearr_16663_16689[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (2))){
var inst_16632 = (state_16655[(7)]);
var state_16655__$1 = state_16655;
if(cljs.core.truth_(inst_16632)){
var statearr_16664_16690 = state_16655__$1;
(statearr_16664_16690[(1)] = (4));

} else {
var statearr_16665_16691 = state_16655__$1;
(statearr_16665_16691[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (11))){
var inst_16646 = cljs.core.async.close_BANG_(ch);
var state_16655__$1 = state_16655;
var statearr_16666_16692 = state_16655__$1;
(statearr_16666_16692[(2)] = inst_16646);

(statearr_16666_16692[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (9))){
var state_16655__$1 = state_16655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16667_16693 = state_16655__$1;
(statearr_16667_16693[(1)] = (11));

} else {
var statearr_16668_16694 = state_16655__$1;
(statearr_16668_16694[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (5))){
var inst_16632 = (state_16655[(7)]);
var state_16655__$1 = state_16655;
var statearr_16669_16695 = state_16655__$1;
(statearr_16669_16695[(2)] = inst_16632);

(statearr_16669_16695[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (10))){
var inst_16651 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
var statearr_16670_16696 = state_16655__$1;
(statearr_16670_16696[(2)] = inst_16651);

(statearr_16670_16696[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16656 === (8))){
var inst_16632 = (state_16655[(7)]);
var inst_16642 = cljs.core.next(inst_16632);
var inst_16632__$1 = inst_16642;
var state_16655__$1 = (function (){var statearr_16671 = state_16655;
(statearr_16671[(7)] = inst_16632__$1);

return statearr_16671;
})();
var statearr_16672_16697 = state_16655__$1;
(statearr_16672_16697[(2)] = null);

(statearr_16672_16697[(1)] = (2));


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
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_16676 = [null,null,null,null,null,null,null,null];
(statearr_16676[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_16676[(1)] = (1));

return statearr_16676;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_16655){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_16655);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e16677){if((e16677 instanceof Object)){
var ex__15703__auto__ = e16677;
var statearr_16678_16698 = state_16655;
(statearr_16678_16698[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16655);

return cljs.core.cst$kw$recur;
} else {
throw e16677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__16699 = state_16655;
state_16655 = G__16699;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_16655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_16655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_16679 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_16679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_16679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
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
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto__.call(null,_));
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto____$1.call(null,_));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
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
var cs = (function (){var G__16928 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16928) : cljs.core.atom.call(null,G__16928));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16929 = (function (mult,ch,cs,meta16930){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16930 = meta16930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16931,meta16930__$1){
var self__ = this;
var _16931__$1 = this;
return (new cljs.core.async.t_cljs$core$async16929(self__.mult,self__.ch,self__.cs,meta16930__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16931){
var self__ = this;
var _16931__$1 = this;
return self__.meta16930;
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16932_17156 = self__.cs;
var G__16933_17157 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16932_17156,G__16933_17157) : cljs.core.reset_BANG_.call(null,G__16932_17156,G__16933_17157));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16930], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16929";

cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16929");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16929 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16929(mult__$1,ch__$1,cs__$1,meta16930){
return (new cljs.core.async.t_cljs$core$async16929(mult__$1,ch__$1,cs__$1,meta16930));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16929(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15823__auto___17158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___17158,cs,m,dchan,dctr,done){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___17158,cs,m,dchan,dctr,done){
return (function (state_17068){
var state_val_17069 = (state_17068[(1)]);
if((state_val_17069 === (7))){
var inst_17064 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17070_17159 = state_17068__$1;
(statearr_17070_17159[(2)] = inst_17064);

(statearr_17070_17159[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (20))){
var inst_16967 = (state_17068[(7)]);
var inst_16979 = cljs.core.first(inst_16967);
var inst_16980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16979,(0),null);
var inst_16981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16979,(1),null);
var state_17068__$1 = (function (){var statearr_17071 = state_17068;
(statearr_17071[(8)] = inst_16980);

return statearr_17071;
})();
if(cljs.core.truth_(inst_16981)){
var statearr_17072_17160 = state_17068__$1;
(statearr_17072_17160[(1)] = (22));

} else {
var statearr_17073_17161 = state_17068__$1;
(statearr_17073_17161[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (27))){
var inst_17011 = (state_17068[(9)]);
var inst_17016 = (state_17068[(10)]);
var inst_16936 = (state_17068[(11)]);
var inst_17009 = (state_17068[(12)]);
var inst_17016__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17009,inst_17011);
var inst_17017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17016__$1,inst_16936,done);
var state_17068__$1 = (function (){var statearr_17074 = state_17068;
(statearr_17074[(10)] = inst_17016__$1);

return statearr_17074;
})();
if(cljs.core.truth_(inst_17017)){
var statearr_17075_17162 = state_17068__$1;
(statearr_17075_17162[(1)] = (30));

} else {
var statearr_17076_17163 = state_17068__$1;
(statearr_17076_17163[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (1))){
var state_17068__$1 = state_17068;
var statearr_17077_17164 = state_17068__$1;
(statearr_17077_17164[(2)] = null);

(statearr_17077_17164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (24))){
var inst_16967 = (state_17068[(7)]);
var inst_16986 = (state_17068[(2)]);
var inst_16987 = cljs.core.next(inst_16967);
var inst_16945 = inst_16987;
var inst_16946 = null;
var inst_16947 = (0);
var inst_16948 = (0);
var state_17068__$1 = (function (){var statearr_17078 = state_17068;
(statearr_17078[(13)] = inst_16946);

(statearr_17078[(14)] = inst_16948);

(statearr_17078[(15)] = inst_16945);

(statearr_17078[(16)] = inst_16986);

(statearr_17078[(17)] = inst_16947);

return statearr_17078;
})();
var statearr_17079_17165 = state_17068__$1;
(statearr_17079_17165[(2)] = null);

(statearr_17079_17165[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (39))){
var state_17068__$1 = state_17068;
var statearr_17083_17166 = state_17068__$1;
(statearr_17083_17166[(2)] = null);

(statearr_17083_17166[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (4))){
var inst_16936 = (state_17068[(11)]);
var inst_16936__$1 = (state_17068[(2)]);
var inst_16937 = (inst_16936__$1 == null);
var state_17068__$1 = (function (){var statearr_17084 = state_17068;
(statearr_17084[(11)] = inst_16936__$1);

return statearr_17084;
})();
if(cljs.core.truth_(inst_16937)){
var statearr_17085_17167 = state_17068__$1;
(statearr_17085_17167[(1)] = (5));

} else {
var statearr_17086_17168 = state_17068__$1;
(statearr_17086_17168[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (15))){
var inst_16946 = (state_17068[(13)]);
var inst_16948 = (state_17068[(14)]);
var inst_16945 = (state_17068[(15)]);
var inst_16947 = (state_17068[(17)]);
var inst_16963 = (state_17068[(2)]);
var inst_16964 = (inst_16948 + (1));
var tmp17080 = inst_16946;
var tmp17081 = inst_16945;
var tmp17082 = inst_16947;
var inst_16945__$1 = tmp17081;
var inst_16946__$1 = tmp17080;
var inst_16947__$1 = tmp17082;
var inst_16948__$1 = inst_16964;
var state_17068__$1 = (function (){var statearr_17087 = state_17068;
(statearr_17087[(13)] = inst_16946__$1);

(statearr_17087[(18)] = inst_16963);

(statearr_17087[(14)] = inst_16948__$1);

(statearr_17087[(15)] = inst_16945__$1);

(statearr_17087[(17)] = inst_16947__$1);

return statearr_17087;
})();
var statearr_17088_17169 = state_17068__$1;
(statearr_17088_17169[(2)] = null);

(statearr_17088_17169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (21))){
var inst_16990 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17092_17170 = state_17068__$1;
(statearr_17092_17170[(2)] = inst_16990);

(statearr_17092_17170[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (31))){
var inst_17016 = (state_17068[(10)]);
var inst_17020 = done(null);
var inst_17021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17016);
var state_17068__$1 = (function (){var statearr_17093 = state_17068;
(statearr_17093[(19)] = inst_17020);

return statearr_17093;
})();
var statearr_17094_17171 = state_17068__$1;
(statearr_17094_17171[(2)] = inst_17021);

(statearr_17094_17171[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (32))){
var inst_17011 = (state_17068[(9)]);
var inst_17009 = (state_17068[(12)]);
var inst_17008 = (state_17068[(20)]);
var inst_17010 = (state_17068[(21)]);
var inst_17023 = (state_17068[(2)]);
var inst_17024 = (inst_17011 + (1));
var tmp17089 = inst_17009;
var tmp17090 = inst_17008;
var tmp17091 = inst_17010;
var inst_17008__$1 = tmp17090;
var inst_17009__$1 = tmp17089;
var inst_17010__$1 = tmp17091;
var inst_17011__$1 = inst_17024;
var state_17068__$1 = (function (){var statearr_17095 = state_17068;
(statearr_17095[(22)] = inst_17023);

(statearr_17095[(9)] = inst_17011__$1);

(statearr_17095[(12)] = inst_17009__$1);

(statearr_17095[(20)] = inst_17008__$1);

(statearr_17095[(21)] = inst_17010__$1);

return statearr_17095;
})();
var statearr_17096_17172 = state_17068__$1;
(statearr_17096_17172[(2)] = null);

(statearr_17096_17172[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (40))){
var inst_17036 = (state_17068[(23)]);
var inst_17040 = done(null);
var inst_17041 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17036);
var state_17068__$1 = (function (){var statearr_17097 = state_17068;
(statearr_17097[(24)] = inst_17040);

return statearr_17097;
})();
var statearr_17098_17173 = state_17068__$1;
(statearr_17098_17173[(2)] = inst_17041);

(statearr_17098_17173[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (33))){
var inst_17027 = (state_17068[(25)]);
var inst_17029 = cljs.core.chunked_seq_QMARK_(inst_17027);
var state_17068__$1 = state_17068;
if(inst_17029){
var statearr_17099_17174 = state_17068__$1;
(statearr_17099_17174[(1)] = (36));

} else {
var statearr_17100_17175 = state_17068__$1;
(statearr_17100_17175[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (13))){
var inst_16957 = (state_17068[(26)]);
var inst_16960 = cljs.core.async.close_BANG_(inst_16957);
var state_17068__$1 = state_17068;
var statearr_17101_17176 = state_17068__$1;
(statearr_17101_17176[(2)] = inst_16960);

(statearr_17101_17176[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (22))){
var inst_16980 = (state_17068[(8)]);
var inst_16983 = cljs.core.async.close_BANG_(inst_16980);
var state_17068__$1 = state_17068;
var statearr_17102_17177 = state_17068__$1;
(statearr_17102_17177[(2)] = inst_16983);

(statearr_17102_17177[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (36))){
var inst_17027 = (state_17068[(25)]);
var inst_17031 = cljs.core.chunk_first(inst_17027);
var inst_17032 = cljs.core.chunk_rest(inst_17027);
var inst_17033 = cljs.core.count(inst_17031);
var inst_17008 = inst_17032;
var inst_17009 = inst_17031;
var inst_17010 = inst_17033;
var inst_17011 = (0);
var state_17068__$1 = (function (){var statearr_17103 = state_17068;
(statearr_17103[(9)] = inst_17011);

(statearr_17103[(12)] = inst_17009);

(statearr_17103[(20)] = inst_17008);

(statearr_17103[(21)] = inst_17010);

return statearr_17103;
})();
var statearr_17104_17178 = state_17068__$1;
(statearr_17104_17178[(2)] = null);

(statearr_17104_17178[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (41))){
var inst_17027 = (state_17068[(25)]);
var inst_17043 = (state_17068[(2)]);
var inst_17044 = cljs.core.next(inst_17027);
var inst_17008 = inst_17044;
var inst_17009 = null;
var inst_17010 = (0);
var inst_17011 = (0);
var state_17068__$1 = (function (){var statearr_17105 = state_17068;
(statearr_17105[(9)] = inst_17011);

(statearr_17105[(27)] = inst_17043);

(statearr_17105[(12)] = inst_17009);

(statearr_17105[(20)] = inst_17008);

(statearr_17105[(21)] = inst_17010);

return statearr_17105;
})();
var statearr_17106_17179 = state_17068__$1;
(statearr_17106_17179[(2)] = null);

(statearr_17106_17179[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (43))){
var state_17068__$1 = state_17068;
var statearr_17107_17180 = state_17068__$1;
(statearr_17107_17180[(2)] = null);

(statearr_17107_17180[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (29))){
var inst_17052 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17108_17181 = state_17068__$1;
(statearr_17108_17181[(2)] = inst_17052);

(statearr_17108_17181[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (44))){
var inst_17061 = (state_17068[(2)]);
var state_17068__$1 = (function (){var statearr_17109 = state_17068;
(statearr_17109[(28)] = inst_17061);

return statearr_17109;
})();
var statearr_17110_17182 = state_17068__$1;
(statearr_17110_17182[(2)] = null);

(statearr_17110_17182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (6))){
var inst_17000 = (state_17068[(29)]);
var inst_16999 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17000__$1 = cljs.core.keys(inst_16999);
var inst_17001 = cljs.core.count(inst_17000__$1);
var inst_17002 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17001) : cljs.core.reset_BANG_.call(null,dctr,inst_17001));
var inst_17007 = cljs.core.seq(inst_17000__$1);
var inst_17008 = inst_17007;
var inst_17009 = null;
var inst_17010 = (0);
var inst_17011 = (0);
var state_17068__$1 = (function (){var statearr_17111 = state_17068;
(statearr_17111[(9)] = inst_17011);

(statearr_17111[(30)] = inst_17002);

(statearr_17111[(12)] = inst_17009);

(statearr_17111[(20)] = inst_17008);

(statearr_17111[(21)] = inst_17010);

(statearr_17111[(29)] = inst_17000__$1);

return statearr_17111;
})();
var statearr_17112_17183 = state_17068__$1;
(statearr_17112_17183[(2)] = null);

(statearr_17112_17183[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (28))){
var inst_17027 = (state_17068[(25)]);
var inst_17008 = (state_17068[(20)]);
var inst_17027__$1 = cljs.core.seq(inst_17008);
var state_17068__$1 = (function (){var statearr_17113 = state_17068;
(statearr_17113[(25)] = inst_17027__$1);

return statearr_17113;
})();
if(inst_17027__$1){
var statearr_17114_17184 = state_17068__$1;
(statearr_17114_17184[(1)] = (33));

} else {
var statearr_17115_17185 = state_17068__$1;
(statearr_17115_17185[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (25))){
var inst_17011 = (state_17068[(9)]);
var inst_17010 = (state_17068[(21)]);
var inst_17013 = (inst_17011 < inst_17010);
var inst_17014 = inst_17013;
var state_17068__$1 = state_17068;
if(cljs.core.truth_(inst_17014)){
var statearr_17116_17186 = state_17068__$1;
(statearr_17116_17186[(1)] = (27));

} else {
var statearr_17117_17187 = state_17068__$1;
(statearr_17117_17187[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (34))){
var state_17068__$1 = state_17068;
var statearr_17118_17188 = state_17068__$1;
(statearr_17118_17188[(2)] = null);

(statearr_17118_17188[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (17))){
var state_17068__$1 = state_17068;
var statearr_17119_17189 = state_17068__$1;
(statearr_17119_17189[(2)] = null);

(statearr_17119_17189[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (3))){
var inst_17066 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17068__$1,inst_17066);
} else {
if((state_val_17069 === (12))){
var inst_16995 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17120_17190 = state_17068__$1;
(statearr_17120_17190[(2)] = inst_16995);

(statearr_17120_17190[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (2))){
var state_17068__$1 = state_17068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17068__$1,(4),ch);
} else {
if((state_val_17069 === (23))){
var state_17068__$1 = state_17068;
var statearr_17121_17191 = state_17068__$1;
(statearr_17121_17191[(2)] = null);

(statearr_17121_17191[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (35))){
var inst_17050 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17122_17192 = state_17068__$1;
(statearr_17122_17192[(2)] = inst_17050);

(statearr_17122_17192[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (19))){
var inst_16967 = (state_17068[(7)]);
var inst_16971 = cljs.core.chunk_first(inst_16967);
var inst_16972 = cljs.core.chunk_rest(inst_16967);
var inst_16973 = cljs.core.count(inst_16971);
var inst_16945 = inst_16972;
var inst_16946 = inst_16971;
var inst_16947 = inst_16973;
var inst_16948 = (0);
var state_17068__$1 = (function (){var statearr_17123 = state_17068;
(statearr_17123[(13)] = inst_16946);

(statearr_17123[(14)] = inst_16948);

(statearr_17123[(15)] = inst_16945);

(statearr_17123[(17)] = inst_16947);

return statearr_17123;
})();
var statearr_17124_17193 = state_17068__$1;
(statearr_17124_17193[(2)] = null);

(statearr_17124_17193[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (11))){
var inst_16967 = (state_17068[(7)]);
var inst_16945 = (state_17068[(15)]);
var inst_16967__$1 = cljs.core.seq(inst_16945);
var state_17068__$1 = (function (){var statearr_17125 = state_17068;
(statearr_17125[(7)] = inst_16967__$1);

return statearr_17125;
})();
if(inst_16967__$1){
var statearr_17126_17194 = state_17068__$1;
(statearr_17126_17194[(1)] = (16));

} else {
var statearr_17127_17195 = state_17068__$1;
(statearr_17127_17195[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (9))){
var inst_16997 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17128_17196 = state_17068__$1;
(statearr_17128_17196[(2)] = inst_16997);

(statearr_17128_17196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (5))){
var inst_16943 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16944 = cljs.core.seq(inst_16943);
var inst_16945 = inst_16944;
var inst_16946 = null;
var inst_16947 = (0);
var inst_16948 = (0);
var state_17068__$1 = (function (){var statearr_17129 = state_17068;
(statearr_17129[(13)] = inst_16946);

(statearr_17129[(14)] = inst_16948);

(statearr_17129[(15)] = inst_16945);

(statearr_17129[(17)] = inst_16947);

return statearr_17129;
})();
var statearr_17130_17197 = state_17068__$1;
(statearr_17130_17197[(2)] = null);

(statearr_17130_17197[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (14))){
var state_17068__$1 = state_17068;
var statearr_17131_17198 = state_17068__$1;
(statearr_17131_17198[(2)] = null);

(statearr_17131_17198[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (45))){
var inst_17058 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17132_17199 = state_17068__$1;
(statearr_17132_17199[(2)] = inst_17058);

(statearr_17132_17199[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (26))){
var inst_17000 = (state_17068[(29)]);
var inst_17054 = (state_17068[(2)]);
var inst_17055 = cljs.core.seq(inst_17000);
var state_17068__$1 = (function (){var statearr_17133 = state_17068;
(statearr_17133[(31)] = inst_17054);

return statearr_17133;
})();
if(inst_17055){
var statearr_17134_17200 = state_17068__$1;
(statearr_17134_17200[(1)] = (42));

} else {
var statearr_17135_17201 = state_17068__$1;
(statearr_17135_17201[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (16))){
var inst_16967 = (state_17068[(7)]);
var inst_16969 = cljs.core.chunked_seq_QMARK_(inst_16967);
var state_17068__$1 = state_17068;
if(inst_16969){
var statearr_17136_17202 = state_17068__$1;
(statearr_17136_17202[(1)] = (19));

} else {
var statearr_17137_17203 = state_17068__$1;
(statearr_17137_17203[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (38))){
var inst_17047 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17138_17204 = state_17068__$1;
(statearr_17138_17204[(2)] = inst_17047);

(statearr_17138_17204[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (30))){
var state_17068__$1 = state_17068;
var statearr_17139_17205 = state_17068__$1;
(statearr_17139_17205[(2)] = null);

(statearr_17139_17205[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (10))){
var inst_16946 = (state_17068[(13)]);
var inst_16948 = (state_17068[(14)]);
var inst_16956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16946,inst_16948);
var inst_16957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16956,(0),null);
var inst_16958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16956,(1),null);
var state_17068__$1 = (function (){var statearr_17140 = state_17068;
(statearr_17140[(26)] = inst_16957);

return statearr_17140;
})();
if(cljs.core.truth_(inst_16958)){
var statearr_17141_17206 = state_17068__$1;
(statearr_17141_17206[(1)] = (13));

} else {
var statearr_17142_17207 = state_17068__$1;
(statearr_17142_17207[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (18))){
var inst_16993 = (state_17068[(2)]);
var state_17068__$1 = state_17068;
var statearr_17143_17208 = state_17068__$1;
(statearr_17143_17208[(2)] = inst_16993);

(statearr_17143_17208[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (42))){
var state_17068__$1 = state_17068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17068__$1,(45),dchan);
} else {
if((state_val_17069 === (37))){
var inst_17036 = (state_17068[(23)]);
var inst_16936 = (state_17068[(11)]);
var inst_17027 = (state_17068[(25)]);
var inst_17036__$1 = cljs.core.first(inst_17027);
var inst_17037 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17036__$1,inst_16936,done);
var state_17068__$1 = (function (){var statearr_17144 = state_17068;
(statearr_17144[(23)] = inst_17036__$1);

return statearr_17144;
})();
if(cljs.core.truth_(inst_17037)){
var statearr_17145_17209 = state_17068__$1;
(statearr_17145_17209[(1)] = (39));

} else {
var statearr_17146_17210 = state_17068__$1;
(statearr_17146_17210[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17069 === (8))){
var inst_16948 = (state_17068[(14)]);
var inst_16947 = (state_17068[(17)]);
var inst_16950 = (inst_16948 < inst_16947);
var inst_16951 = inst_16950;
var state_17068__$1 = state_17068;
if(cljs.core.truth_(inst_16951)){
var statearr_17147_17211 = state_17068__$1;
(statearr_17147_17211[(1)] = (10));

} else {
var statearr_17148_17212 = state_17068__$1;
(statearr_17148_17212[(1)] = (11));

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
});})(c__15823__auto___17158,cs,m,dchan,dctr,done))
;
return ((function (switch__15699__auto__,c__15823__auto___17158,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15700__auto__ = null;
var cljs$core$async$mult_$_state_machine__15700__auto____0 = (function (){
var statearr_17152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17152[(0)] = cljs$core$async$mult_$_state_machine__15700__auto__);

(statearr_17152[(1)] = (1));

return statearr_17152;
});
var cljs$core$async$mult_$_state_machine__15700__auto____1 = (function (state_17068){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_17068);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e17153){if((e17153 instanceof Object)){
var ex__15703__auto__ = e17153;
var statearr_17154_17213 = state_17068;
(statearr_17154_17213[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17068);

return cljs.core.cst$kw$recur;
} else {
throw e17153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__17214 = state_17068;
state_17068 = G__17214;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15700__auto__ = function(state_17068){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15700__auto____1.call(this,state_17068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15700__auto____0;
cljs$core$async$mult_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15700__auto____1;
return cljs$core$async$mult_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___17158,cs,m,dchan,dctr,done))
})();
var state__15825__auto__ = (function (){var statearr_17155 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_17155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___17158);

return statearr_17155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___17158,cs,m,dchan,dctr,done))
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
var args17215 = [];
var len__7484__auto___17218 = arguments.length;
var i__7485__auto___17219 = (0);
while(true){
if((i__7485__auto___17219 < len__7484__auto___17218)){
args17215.push((arguments[i__7485__auto___17219]));

var G__17220 = (i__7485__auto___17219 + (1));
i__7485__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var G__17217 = args17215.length;
switch (G__17217) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17215.length)].join('')));

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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto__.call(null,m,state_map));
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto____$1.call(null,m,state_map));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto__.call(null,m,mode));
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17232 = arguments.length;
var i__7485__auto___17233 = (0);
while(true){
if((i__7485__auto___17233 < len__7484__auto___17232)){
args__7491__auto__.push((arguments[i__7485__auto___17233]));

var G__17234 = (i__7485__auto___17233 + (1));
i__7485__auto___17233 = G__17234;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17226){
var map__17227 = p__17226;
var map__17227__$1 = ((((!((map__17227 == null)))?((((map__17227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17227):map__17227);
var opts = map__17227__$1;
var statearr_17229_17235 = state;
(statearr_17229_17235[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17227,map__17227__$1,opts){
return (function (val){
var statearr_17230_17236 = state;
(statearr_17230_17236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17227,map__17227__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17231_17237 = state;
(statearr_17231_17237[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17222){
var G__17223 = cljs.core.first(seq17222);
var seq17222__$1 = cljs.core.next(seq17222);
var G__17224 = cljs.core.first(seq17222__$1);
var seq17222__$2 = cljs.core.next(seq17222__$1);
var G__17225 = cljs.core.first(seq17222__$2);
var seq17222__$3 = cljs.core.next(seq17222__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17223,G__17224,G__17225,seq17222__$3);
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
var cs = (function (){var G__17407 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17407) : cljs.core.atom.call(null,G__17407));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__17408 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17408) : cljs.core.atom.call(null,G__17408));
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
if(typeof cljs.core.async.t_cljs$core$async17409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17409 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17410){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17410 = meta17410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17411,meta17410__$1){
var self__ = this;
var _17411__$1 = this;
return (new cljs.core.async.t_cljs$core$async17409(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17410__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17411){
var self__ = this;
var _17411__$1 = this;
return self__.meta17410;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17412_17576 = self__.cs;
var G__17413_17577 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17412_17576,G__17413_17577) : cljs.core.reset_BANG_.call(null,G__17412_17576,G__17413_17577));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17410], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17409";

cljs.core.async.t_cljs$core$async17409.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17409");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17409 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17410){
return (new cljs.core.async.t_cljs$core$async17409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17410));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17409(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15823__auto___17578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17513){
var state_val_17514 = (state_17513[(1)]);
if((state_val_17514 === (7))){
var inst_17429 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17515_17579 = state_17513__$1;
(statearr_17515_17579[(2)] = inst_17429);

(statearr_17515_17579[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (20))){
var inst_17441 = (state_17513[(7)]);
var state_17513__$1 = state_17513;
var statearr_17516_17580 = state_17513__$1;
(statearr_17516_17580[(2)] = inst_17441);

(statearr_17516_17580[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (27))){
var state_17513__$1 = state_17513;
var statearr_17517_17581 = state_17513__$1;
(statearr_17517_17581[(2)] = null);

(statearr_17517_17581[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (1))){
var inst_17417 = (state_17513[(8)]);
var inst_17417__$1 = calc_state();
var inst_17419 = (inst_17417__$1 == null);
var inst_17420 = cljs.core.not(inst_17419);
var state_17513__$1 = (function (){var statearr_17518 = state_17513;
(statearr_17518[(8)] = inst_17417__$1);

return statearr_17518;
})();
if(inst_17420){
var statearr_17519_17582 = state_17513__$1;
(statearr_17519_17582[(1)] = (2));

} else {
var statearr_17520_17583 = state_17513__$1;
(statearr_17520_17583[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (24))){
var inst_17487 = (state_17513[(9)]);
var inst_17473 = (state_17513[(10)]);
var inst_17464 = (state_17513[(11)]);
var inst_17487__$1 = (inst_17464.cljs$core$IFn$_invoke$arity$1 ? inst_17464.cljs$core$IFn$_invoke$arity$1(inst_17473) : inst_17464.call(null,inst_17473));
var state_17513__$1 = (function (){var statearr_17521 = state_17513;
(statearr_17521[(9)] = inst_17487__$1);

return statearr_17521;
})();
if(cljs.core.truth_(inst_17487__$1)){
var statearr_17522_17584 = state_17513__$1;
(statearr_17522_17584[(1)] = (29));

} else {
var statearr_17523_17585 = state_17513__$1;
(statearr_17523_17585[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (4))){
var inst_17432 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17432)){
var statearr_17524_17586 = state_17513__$1;
(statearr_17524_17586[(1)] = (8));

} else {
var statearr_17525_17587 = state_17513__$1;
(statearr_17525_17587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (15))){
var inst_17458 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17458)){
var statearr_17526_17588 = state_17513__$1;
(statearr_17526_17588[(1)] = (19));

} else {
var statearr_17527_17589 = state_17513__$1;
(statearr_17527_17589[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (21))){
var inst_17463 = (state_17513[(12)]);
var inst_17463__$1 = (state_17513[(2)]);
var inst_17464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17463__$1,cljs.core.cst$kw$solos);
var inst_17465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17463__$1,cljs.core.cst$kw$mutes);
var inst_17466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17463__$1,cljs.core.cst$kw$reads);
var state_17513__$1 = (function (){var statearr_17528 = state_17513;
(statearr_17528[(12)] = inst_17463__$1);

(statearr_17528[(11)] = inst_17464);

(statearr_17528[(13)] = inst_17465);

return statearr_17528;
})();
return cljs.core.async.ioc_alts_BANG_(state_17513__$1,(22),inst_17466);
} else {
if((state_val_17514 === (31))){
var inst_17495 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17495)){
var statearr_17529_17590 = state_17513__$1;
(statearr_17529_17590[(1)] = (32));

} else {
var statearr_17530_17591 = state_17513__$1;
(statearr_17530_17591[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (32))){
var inst_17472 = (state_17513[(14)]);
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17513__$1,(35),out,inst_17472);
} else {
if((state_val_17514 === (33))){
var inst_17463 = (state_17513[(12)]);
var inst_17441 = inst_17463;
var state_17513__$1 = (function (){var statearr_17531 = state_17513;
(statearr_17531[(7)] = inst_17441);

return statearr_17531;
})();
var statearr_17532_17592 = state_17513__$1;
(statearr_17532_17592[(2)] = null);

(statearr_17532_17592[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (13))){
var inst_17441 = (state_17513[(7)]);
var inst_17448 = inst_17441.cljs$lang$protocol_mask$partition0$;
var inst_17449 = (inst_17448 & (64));
var inst_17450 = inst_17441.cljs$core$ISeq$;
var inst_17451 = (inst_17449) || (inst_17450);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17451)){
var statearr_17533_17593 = state_17513__$1;
(statearr_17533_17593[(1)] = (16));

} else {
var statearr_17534_17594 = state_17513__$1;
(statearr_17534_17594[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (22))){
var inst_17473 = (state_17513[(10)]);
var inst_17472 = (state_17513[(14)]);
var inst_17471 = (state_17513[(2)]);
var inst_17472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17471,(0),null);
var inst_17473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17471,(1),null);
var inst_17474 = (inst_17472__$1 == null);
var inst_17475 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17473__$1,change);
var inst_17476 = (inst_17474) || (inst_17475);
var state_17513__$1 = (function (){var statearr_17535 = state_17513;
(statearr_17535[(10)] = inst_17473__$1);

(statearr_17535[(14)] = inst_17472__$1);

return statearr_17535;
})();
if(cljs.core.truth_(inst_17476)){
var statearr_17536_17595 = state_17513__$1;
(statearr_17536_17595[(1)] = (23));

} else {
var statearr_17537_17596 = state_17513__$1;
(statearr_17537_17596[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (36))){
var inst_17463 = (state_17513[(12)]);
var inst_17441 = inst_17463;
var state_17513__$1 = (function (){var statearr_17538 = state_17513;
(statearr_17538[(7)] = inst_17441);

return statearr_17538;
})();
var statearr_17539_17597 = state_17513__$1;
(statearr_17539_17597[(2)] = null);

(statearr_17539_17597[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (29))){
var inst_17487 = (state_17513[(9)]);
var state_17513__$1 = state_17513;
var statearr_17540_17598 = state_17513__$1;
(statearr_17540_17598[(2)] = inst_17487);

(statearr_17540_17598[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (6))){
var state_17513__$1 = state_17513;
var statearr_17541_17599 = state_17513__$1;
(statearr_17541_17599[(2)] = false);

(statearr_17541_17599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (28))){
var inst_17483 = (state_17513[(2)]);
var inst_17484 = calc_state();
var inst_17441 = inst_17484;
var state_17513__$1 = (function (){var statearr_17542 = state_17513;
(statearr_17542[(15)] = inst_17483);

(statearr_17542[(7)] = inst_17441);

return statearr_17542;
})();
var statearr_17543_17600 = state_17513__$1;
(statearr_17543_17600[(2)] = null);

(statearr_17543_17600[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (25))){
var inst_17509 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17544_17601 = state_17513__$1;
(statearr_17544_17601[(2)] = inst_17509);

(statearr_17544_17601[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (34))){
var inst_17507 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17545_17602 = state_17513__$1;
(statearr_17545_17602[(2)] = inst_17507);

(statearr_17545_17602[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (17))){
var state_17513__$1 = state_17513;
var statearr_17546_17603 = state_17513__$1;
(statearr_17546_17603[(2)] = false);

(statearr_17546_17603[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (3))){
var state_17513__$1 = state_17513;
var statearr_17547_17604 = state_17513__$1;
(statearr_17547_17604[(2)] = false);

(statearr_17547_17604[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (12))){
var inst_17511 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17513__$1,inst_17511);
} else {
if((state_val_17514 === (2))){
var inst_17417 = (state_17513[(8)]);
var inst_17422 = inst_17417.cljs$lang$protocol_mask$partition0$;
var inst_17423 = (inst_17422 & (64));
var inst_17424 = inst_17417.cljs$core$ISeq$;
var inst_17425 = (inst_17423) || (inst_17424);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17425)){
var statearr_17548_17605 = state_17513__$1;
(statearr_17548_17605[(1)] = (5));

} else {
var statearr_17549_17606 = state_17513__$1;
(statearr_17549_17606[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (23))){
var inst_17472 = (state_17513[(14)]);
var inst_17478 = (inst_17472 == null);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17478)){
var statearr_17550_17607 = state_17513__$1;
(statearr_17550_17607[(1)] = (26));

} else {
var statearr_17551_17608 = state_17513__$1;
(statearr_17551_17608[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (35))){
var inst_17498 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17498)){
var statearr_17552_17609 = state_17513__$1;
(statearr_17552_17609[(1)] = (36));

} else {
var statearr_17553_17610 = state_17513__$1;
(statearr_17553_17610[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (19))){
var inst_17441 = (state_17513[(7)]);
var inst_17460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17441);
var state_17513__$1 = state_17513;
var statearr_17554_17611 = state_17513__$1;
(statearr_17554_17611[(2)] = inst_17460);

(statearr_17554_17611[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (11))){
var inst_17441 = (state_17513[(7)]);
var inst_17445 = (inst_17441 == null);
var inst_17446 = cljs.core.not(inst_17445);
var state_17513__$1 = state_17513;
if(inst_17446){
var statearr_17555_17612 = state_17513__$1;
(statearr_17555_17612[(1)] = (13));

} else {
var statearr_17556_17613 = state_17513__$1;
(statearr_17556_17613[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (9))){
var inst_17417 = (state_17513[(8)]);
var state_17513__$1 = state_17513;
var statearr_17557_17614 = state_17513__$1;
(statearr_17557_17614[(2)] = inst_17417);

(statearr_17557_17614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (5))){
var state_17513__$1 = state_17513;
var statearr_17558_17615 = state_17513__$1;
(statearr_17558_17615[(2)] = true);

(statearr_17558_17615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (14))){
var state_17513__$1 = state_17513;
var statearr_17559_17616 = state_17513__$1;
(statearr_17559_17616[(2)] = false);

(statearr_17559_17616[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (26))){
var inst_17473 = (state_17513[(10)]);
var inst_17480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17473);
var state_17513__$1 = state_17513;
var statearr_17560_17617 = state_17513__$1;
(statearr_17560_17617[(2)] = inst_17480);

(statearr_17560_17617[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (16))){
var state_17513__$1 = state_17513;
var statearr_17561_17618 = state_17513__$1;
(statearr_17561_17618[(2)] = true);

(statearr_17561_17618[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (38))){
var inst_17503 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17562_17619 = state_17513__$1;
(statearr_17562_17619[(2)] = inst_17503);

(statearr_17562_17619[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (30))){
var inst_17473 = (state_17513[(10)]);
var inst_17464 = (state_17513[(11)]);
var inst_17465 = (state_17513[(13)]);
var inst_17490 = cljs.core.empty_QMARK_(inst_17464);
var inst_17491 = (inst_17465.cljs$core$IFn$_invoke$arity$1 ? inst_17465.cljs$core$IFn$_invoke$arity$1(inst_17473) : inst_17465.call(null,inst_17473));
var inst_17492 = cljs.core.not(inst_17491);
var inst_17493 = (inst_17490) && (inst_17492);
var state_17513__$1 = state_17513;
var statearr_17563_17620 = state_17513__$1;
(statearr_17563_17620[(2)] = inst_17493);

(statearr_17563_17620[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (10))){
var inst_17417 = (state_17513[(8)]);
var inst_17437 = (state_17513[(2)]);
var inst_17438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17437,cljs.core.cst$kw$solos);
var inst_17439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17437,cljs.core.cst$kw$mutes);
var inst_17440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17437,cljs.core.cst$kw$reads);
var inst_17441 = inst_17417;
var state_17513__$1 = (function (){var statearr_17564 = state_17513;
(statearr_17564[(16)] = inst_17440);

(statearr_17564[(17)] = inst_17438);

(statearr_17564[(18)] = inst_17439);

(statearr_17564[(7)] = inst_17441);

return statearr_17564;
})();
var statearr_17565_17621 = state_17513__$1;
(statearr_17565_17621[(2)] = null);

(statearr_17565_17621[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (18))){
var inst_17455 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17566_17622 = state_17513__$1;
(statearr_17566_17622[(2)] = inst_17455);

(statearr_17566_17622[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (37))){
var state_17513__$1 = state_17513;
var statearr_17567_17623 = state_17513__$1;
(statearr_17567_17623[(2)] = null);

(statearr_17567_17623[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17514 === (8))){
var inst_17417 = (state_17513[(8)]);
var inst_17434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17417);
var state_17513__$1 = state_17513;
var statearr_17568_17624 = state_17513__$1;
(statearr_17568_17624[(2)] = inst_17434);

(statearr_17568_17624[(1)] = (10));


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
});})(c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15699__auto__,c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15700__auto__ = null;
var cljs$core$async$mix_$_state_machine__15700__auto____0 = (function (){
var statearr_17572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17572[(0)] = cljs$core$async$mix_$_state_machine__15700__auto__);

(statearr_17572[(1)] = (1));

return statearr_17572;
});
var cljs$core$async$mix_$_state_machine__15700__auto____1 = (function (state_17513){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_17513);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e17573){if((e17573 instanceof Object)){
var ex__15703__auto__ = e17573;
var statearr_17574_17625 = state_17513;
(statearr_17574_17625[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17513);

return cljs.core.cst$kw$recur;
} else {
throw e17573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__17626 = state_17513;
state_17513 = G__17626;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15700__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15700__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15700__auto____0;
cljs$core$async$mix_$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15700__auto____1;
return cljs$core$async$mix_$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15825__auto__ = (function (){var statearr_17575 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_17575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___17578);

return statearr_17575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___17578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto__.call(null,p,v,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17627 = [];
var len__7484__auto___17630 = arguments.length;
var i__7485__auto___17631 = (0);
while(true){
if((i__7485__auto___17631 < len__7484__auto___17630)){
args17627.push((arguments[i__7485__auto___17631]));

var G__17632 = (i__7485__auto___17631 + (1));
i__7485__auto___17631 = G__17632;
continue;
} else {
}
break;
}

var G__17629 = args17627.length;
switch (G__17629) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17627.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto__.call(null,p));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto____$1.call(null,p));
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto__.call(null,p,v));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto____$1.call(null,p,v));
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
var args17635 = [];
var len__7484__auto___17763 = arguments.length;
var i__7485__auto___17764 = (0);
while(true){
if((i__7485__auto___17764 < len__7484__auto___17763)){
args17635.push((arguments[i__7485__auto___17764]));

var G__17765 = (i__7485__auto___17764 + (1));
i__7485__auto___17764 = G__17765;
continue;
} else {
}
break;
}

var G__17637 = args17635.length;
switch (G__17637) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17635.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17638 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17638) : cljs.core.atom.call(null,G__17638));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6409__auto__,mults){
return (function (p1__17634_SHARP_){
if(cljs.core.truth_((p1__17634_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17634_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17634_SHARP_.call(null,topic)))){
return p1__17634_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17634_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17639 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17640){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17640 = meta17640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17641,meta17640__$1){
var self__ = this;
var _17641__$1 = this;
return (new cljs.core.async.t_cljs$core$async17639(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17640__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17641){
var self__ = this;
var _17641__$1 = this;
return self__.meta17640;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17642 = self__.mults;
var G__17643 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17642,G__17643) : cljs.core.reset_BANG_.call(null,G__17642,G__17643));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17640], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17639";

cljs.core.async.t_cljs$core$async17639.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17639");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17639 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17640){
return (new cljs.core.async.t_cljs$core$async17639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17640));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17639(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15823__auto___17767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___17767,mults,ensure_mult,p){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___17767,mults,ensure_mult,p){
return (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (7))){
var inst_17711 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17717_17768 = state_17715__$1;
(statearr_17717_17768[(2)] = inst_17711);

(statearr_17717_17768[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (20))){
var state_17715__$1 = state_17715;
var statearr_17718_17769 = state_17715__$1;
(statearr_17718_17769[(2)] = null);

(statearr_17718_17769[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (1))){
var state_17715__$1 = state_17715;
var statearr_17719_17770 = state_17715__$1;
(statearr_17719_17770[(2)] = null);

(statearr_17719_17770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (24))){
var inst_17694 = (state_17715[(7)]);
var inst_17703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17694);
var state_17715__$1 = state_17715;
var statearr_17720_17771 = state_17715__$1;
(statearr_17720_17771[(2)] = inst_17703);

(statearr_17720_17771[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (4))){
var inst_17646 = (state_17715[(8)]);
var inst_17646__$1 = (state_17715[(2)]);
var inst_17647 = (inst_17646__$1 == null);
var state_17715__$1 = (function (){var statearr_17721 = state_17715;
(statearr_17721[(8)] = inst_17646__$1);

return statearr_17721;
})();
if(cljs.core.truth_(inst_17647)){
var statearr_17722_17772 = state_17715__$1;
(statearr_17722_17772[(1)] = (5));

} else {
var statearr_17723_17773 = state_17715__$1;
(statearr_17723_17773[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (15))){
var inst_17688 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17724_17774 = state_17715__$1;
(statearr_17724_17774[(2)] = inst_17688);

(statearr_17724_17774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (21))){
var inst_17708 = (state_17715[(2)]);
var state_17715__$1 = (function (){var statearr_17725 = state_17715;
(statearr_17725[(9)] = inst_17708);

return statearr_17725;
})();
var statearr_17726_17775 = state_17715__$1;
(statearr_17726_17775[(2)] = null);

(statearr_17726_17775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (13))){
var inst_17670 = (state_17715[(10)]);
var inst_17672 = cljs.core.chunked_seq_QMARK_(inst_17670);
var state_17715__$1 = state_17715;
if(inst_17672){
var statearr_17727_17776 = state_17715__$1;
(statearr_17727_17776[(1)] = (16));

} else {
var statearr_17728_17777 = state_17715__$1;
(statearr_17728_17777[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (22))){
var inst_17700 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17700)){
var statearr_17729_17778 = state_17715__$1;
(statearr_17729_17778[(1)] = (23));

} else {
var statearr_17730_17779 = state_17715__$1;
(statearr_17730_17779[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (6))){
var inst_17696 = (state_17715[(11)]);
var inst_17646 = (state_17715[(8)]);
var inst_17694 = (state_17715[(7)]);
var inst_17694__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17646) : topic_fn.call(null,inst_17646));
var inst_17695 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17696__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17695,inst_17694__$1);
var state_17715__$1 = (function (){var statearr_17731 = state_17715;
(statearr_17731[(11)] = inst_17696__$1);

(statearr_17731[(7)] = inst_17694__$1);

return statearr_17731;
})();
if(cljs.core.truth_(inst_17696__$1)){
var statearr_17732_17780 = state_17715__$1;
(statearr_17732_17780[(1)] = (19));

} else {
var statearr_17733_17781 = state_17715__$1;
(statearr_17733_17781[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (25))){
var inst_17705 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17734_17782 = state_17715__$1;
(statearr_17734_17782[(2)] = inst_17705);

(statearr_17734_17782[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (17))){
var inst_17670 = (state_17715[(10)]);
var inst_17679 = cljs.core.first(inst_17670);
var inst_17680 = cljs.core.async.muxch_STAR_(inst_17679);
var inst_17681 = cljs.core.async.close_BANG_(inst_17680);
var inst_17682 = cljs.core.next(inst_17670);
var inst_17656 = inst_17682;
var inst_17657 = null;
var inst_17658 = (0);
var inst_17659 = (0);
var state_17715__$1 = (function (){var statearr_17735 = state_17715;
(statearr_17735[(12)] = inst_17681);

(statearr_17735[(13)] = inst_17659);

(statearr_17735[(14)] = inst_17658);

(statearr_17735[(15)] = inst_17656);

(statearr_17735[(16)] = inst_17657);

return statearr_17735;
})();
var statearr_17736_17783 = state_17715__$1;
(statearr_17736_17783[(2)] = null);

(statearr_17736_17783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (3))){
var inst_17713 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17713);
} else {
if((state_val_17716 === (12))){
var inst_17690 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17737_17784 = state_17715__$1;
(statearr_17737_17784[(2)] = inst_17690);

(statearr_17737_17784[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (2))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(4),ch);
} else {
if((state_val_17716 === (23))){
var state_17715__$1 = state_17715;
var statearr_17738_17785 = state_17715__$1;
(statearr_17738_17785[(2)] = null);

(statearr_17738_17785[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (19))){
var inst_17696 = (state_17715[(11)]);
var inst_17646 = (state_17715[(8)]);
var inst_17698 = cljs.core.async.muxch_STAR_(inst_17696);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(22),inst_17698,inst_17646);
} else {
if((state_val_17716 === (11))){
var inst_17670 = (state_17715[(10)]);
var inst_17656 = (state_17715[(15)]);
var inst_17670__$1 = cljs.core.seq(inst_17656);
var state_17715__$1 = (function (){var statearr_17739 = state_17715;
(statearr_17739[(10)] = inst_17670__$1);

return statearr_17739;
})();
if(inst_17670__$1){
var statearr_17740_17786 = state_17715__$1;
(statearr_17740_17786[(1)] = (13));

} else {
var statearr_17741_17787 = state_17715__$1;
(statearr_17741_17787[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (9))){
var inst_17692 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17742_17788 = state_17715__$1;
(statearr_17742_17788[(2)] = inst_17692);

(statearr_17742_17788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (5))){
var inst_17653 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17654 = cljs.core.vals(inst_17653);
var inst_17655 = cljs.core.seq(inst_17654);
var inst_17656 = inst_17655;
var inst_17657 = null;
var inst_17658 = (0);
var inst_17659 = (0);
var state_17715__$1 = (function (){var statearr_17743 = state_17715;
(statearr_17743[(13)] = inst_17659);

(statearr_17743[(14)] = inst_17658);

(statearr_17743[(15)] = inst_17656);

(statearr_17743[(16)] = inst_17657);

return statearr_17743;
})();
var statearr_17744_17789 = state_17715__$1;
(statearr_17744_17789[(2)] = null);

(statearr_17744_17789[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (14))){
var state_17715__$1 = state_17715;
var statearr_17748_17790 = state_17715__$1;
(statearr_17748_17790[(2)] = null);

(statearr_17748_17790[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (16))){
var inst_17670 = (state_17715[(10)]);
var inst_17674 = cljs.core.chunk_first(inst_17670);
var inst_17675 = cljs.core.chunk_rest(inst_17670);
var inst_17676 = cljs.core.count(inst_17674);
var inst_17656 = inst_17675;
var inst_17657 = inst_17674;
var inst_17658 = inst_17676;
var inst_17659 = (0);
var state_17715__$1 = (function (){var statearr_17749 = state_17715;
(statearr_17749[(13)] = inst_17659);

(statearr_17749[(14)] = inst_17658);

(statearr_17749[(15)] = inst_17656);

(statearr_17749[(16)] = inst_17657);

return statearr_17749;
})();
var statearr_17750_17791 = state_17715__$1;
(statearr_17750_17791[(2)] = null);

(statearr_17750_17791[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (10))){
var inst_17659 = (state_17715[(13)]);
var inst_17658 = (state_17715[(14)]);
var inst_17656 = (state_17715[(15)]);
var inst_17657 = (state_17715[(16)]);
var inst_17664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17657,inst_17659);
var inst_17665 = cljs.core.async.muxch_STAR_(inst_17664);
var inst_17666 = cljs.core.async.close_BANG_(inst_17665);
var inst_17667 = (inst_17659 + (1));
var tmp17745 = inst_17658;
var tmp17746 = inst_17656;
var tmp17747 = inst_17657;
var inst_17656__$1 = tmp17746;
var inst_17657__$1 = tmp17747;
var inst_17658__$1 = tmp17745;
var inst_17659__$1 = inst_17667;
var state_17715__$1 = (function (){var statearr_17751 = state_17715;
(statearr_17751[(13)] = inst_17659__$1);

(statearr_17751[(14)] = inst_17658__$1);

(statearr_17751[(15)] = inst_17656__$1);

(statearr_17751[(16)] = inst_17657__$1);

(statearr_17751[(17)] = inst_17666);

return statearr_17751;
})();
var statearr_17752_17792 = state_17715__$1;
(statearr_17752_17792[(2)] = null);

(statearr_17752_17792[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (18))){
var inst_17685 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17753_17793 = state_17715__$1;
(statearr_17753_17793[(2)] = inst_17685);

(statearr_17753_17793[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (8))){
var inst_17659 = (state_17715[(13)]);
var inst_17658 = (state_17715[(14)]);
var inst_17661 = (inst_17659 < inst_17658);
var inst_17662 = inst_17661;
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17662)){
var statearr_17754_17794 = state_17715__$1;
(statearr_17754_17794[(1)] = (10));

} else {
var statearr_17755_17795 = state_17715__$1;
(statearr_17755_17795[(1)] = (11));

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
});})(c__15823__auto___17767,mults,ensure_mult,p))
;
return ((function (switch__15699__auto__,c__15823__auto___17767,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_17759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17759[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_17759[(1)] = (1));

return statearr_17759;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_17715){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e17760){if((e17760 instanceof Object)){
var ex__15703__auto__ = e17760;
var statearr_17761_17796 = state_17715;
(statearr_17761_17796[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715);

return cljs.core.cst$kw$recur;
} else {
throw e17760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__17797 = state_17715;
state_17715 = G__17797;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___17767,mults,ensure_mult,p))
})();
var state__15825__auto__ = (function (){var statearr_17762 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_17762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___17767);

return statearr_17762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___17767,mults,ensure_mult,p))
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
var args17798 = [];
var len__7484__auto___17801 = arguments.length;
var i__7485__auto___17802 = (0);
while(true){
if((i__7485__auto___17802 < len__7484__auto___17801)){
args17798.push((arguments[i__7485__auto___17802]));

var G__17803 = (i__7485__auto___17802 + (1));
i__7485__auto___17802 = G__17803;
continue;
} else {
}
break;
}

var G__17800 = args17798.length;
switch (G__17800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17798.length)].join('')));

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
var args17805 = [];
var len__7484__auto___17808 = arguments.length;
var i__7485__auto___17809 = (0);
while(true){
if((i__7485__auto___17809 < len__7484__auto___17808)){
args17805.push((arguments[i__7485__auto___17809]));

var G__17810 = (i__7485__auto___17809 + (1));
i__7485__auto___17809 = G__17810;
continue;
} else {
}
break;
}

var G__17807 = args17805.length;
switch (G__17807) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17805.length)].join('')));

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
var args17812 = [];
var len__7484__auto___17883 = arguments.length;
var i__7485__auto___17884 = (0);
while(true){
if((i__7485__auto___17884 < len__7484__auto___17883)){
args17812.push((arguments[i__7485__auto___17884]));

var G__17885 = (i__7485__auto___17884 + (1));
i__7485__auto___17884 = G__17885;
continue;
} else {
}
break;
}

var G__17814 = args17812.length;
switch (G__17814) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17812.length)].join('')));

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
var c__15823__auto___17887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17853){
var state_val_17854 = (state_17853[(1)]);
if((state_val_17854 === (7))){
var state_17853__$1 = state_17853;
var statearr_17855_17888 = state_17853__$1;
(statearr_17855_17888[(2)] = null);

(statearr_17855_17888[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (1))){
var state_17853__$1 = state_17853;
var statearr_17856_17889 = state_17853__$1;
(statearr_17856_17889[(2)] = null);

(statearr_17856_17889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (4))){
var inst_17817 = (state_17853[(7)]);
var inst_17819 = (inst_17817 < cnt);
var state_17853__$1 = state_17853;
if(cljs.core.truth_(inst_17819)){
var statearr_17857_17890 = state_17853__$1;
(statearr_17857_17890[(1)] = (6));

} else {
var statearr_17858_17891 = state_17853__$1;
(statearr_17858_17891[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (15))){
var inst_17849 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17859_17892 = state_17853__$1;
(statearr_17859_17892[(2)] = inst_17849);

(statearr_17859_17892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (13))){
var inst_17842 = cljs.core.async.close_BANG_(out);
var state_17853__$1 = state_17853;
var statearr_17860_17893 = state_17853__$1;
(statearr_17860_17893[(2)] = inst_17842);

(statearr_17860_17893[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (6))){
var state_17853__$1 = state_17853;
var statearr_17861_17894 = state_17853__$1;
(statearr_17861_17894[(2)] = null);

(statearr_17861_17894[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (3))){
var inst_17851 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17853__$1,inst_17851);
} else {
if((state_val_17854 === (12))){
var inst_17839 = (state_17853[(8)]);
var inst_17839__$1 = (state_17853[(2)]);
var inst_17840 = cljs.core.some(cljs.core.nil_QMARK_,inst_17839__$1);
var state_17853__$1 = (function (){var statearr_17862 = state_17853;
(statearr_17862[(8)] = inst_17839__$1);

return statearr_17862;
})();
if(cljs.core.truth_(inst_17840)){
var statearr_17863_17895 = state_17853__$1;
(statearr_17863_17895[(1)] = (13));

} else {
var statearr_17864_17896 = state_17853__$1;
(statearr_17864_17896[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (2))){
var inst_17816 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17817 = (0);
var state_17853__$1 = (function (){var statearr_17865 = state_17853;
(statearr_17865[(7)] = inst_17817);

(statearr_17865[(9)] = inst_17816);

return statearr_17865;
})();
var statearr_17866_17897 = state_17853__$1;
(statearr_17866_17897[(2)] = null);

(statearr_17866_17897[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (11))){
var inst_17817 = (state_17853[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17853,(10),Object,null,(9));
var inst_17826 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17817) : chs__$1.call(null,inst_17817));
var inst_17827 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17817) : done.call(null,inst_17817));
var inst_17828 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17826,inst_17827);
var state_17853__$1 = state_17853;
var statearr_17867_17898 = state_17853__$1;
(statearr_17867_17898[(2)] = inst_17828);


cljs.core.async.impl.ioc_helpers.process_exception(state_17853__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (9))){
var inst_17817 = (state_17853[(7)]);
var inst_17830 = (state_17853[(2)]);
var inst_17831 = (inst_17817 + (1));
var inst_17817__$1 = inst_17831;
var state_17853__$1 = (function (){var statearr_17868 = state_17853;
(statearr_17868[(7)] = inst_17817__$1);

(statearr_17868[(10)] = inst_17830);

return statearr_17868;
})();
var statearr_17869_17899 = state_17853__$1;
(statearr_17869_17899[(2)] = null);

(statearr_17869_17899[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (5))){
var inst_17837 = (state_17853[(2)]);
var state_17853__$1 = (function (){var statearr_17870 = state_17853;
(statearr_17870[(11)] = inst_17837);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17853__$1,(12),dchan);
} else {
if((state_val_17854 === (14))){
var inst_17839 = (state_17853[(8)]);
var inst_17844 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17839);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17853__$1,(16),out,inst_17844);
} else {
if((state_val_17854 === (16))){
var inst_17846 = (state_17853[(2)]);
var state_17853__$1 = (function (){var statearr_17871 = state_17853;
(statearr_17871[(12)] = inst_17846);

return statearr_17871;
})();
var statearr_17872_17900 = state_17853__$1;
(statearr_17872_17900[(2)] = null);

(statearr_17872_17900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (10))){
var inst_17821 = (state_17853[(2)]);
var inst_17822 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17853__$1 = (function (){var statearr_17873 = state_17853;
(statearr_17873[(13)] = inst_17821);

return statearr_17873;
})();
var statearr_17874_17901 = state_17853__$1;
(statearr_17874_17901[(2)] = inst_17822);


cljs.core.async.impl.ioc_helpers.process_exception(state_17853__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17854 === (8))){
var inst_17835 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17875_17902 = state_17853__$1;
(statearr_17875_17902[(2)] = inst_17835);

(statearr_17875_17902[(1)] = (5));


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
});})(c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15699__auto__,c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_17879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17879[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_17879[(1)] = (1));

return statearr_17879;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_17853){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_17853);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e17880){if((e17880 instanceof Object)){
var ex__15703__auto__ = e17880;
var statearr_17881_17903 = state_17853;
(statearr_17881_17903[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17853);

return cljs.core.cst$kw$recur;
} else {
throw e17880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__17904 = state_17853;
state_17853 = G__17904;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_17853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_17853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15825__auto__ = (function (){var statearr_17882 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_17882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___17887);

return statearr_17882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___17887,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17906 = [];
var len__7484__auto___17964 = arguments.length;
var i__7485__auto___17965 = (0);
while(true){
if((i__7485__auto___17965 < len__7484__auto___17964)){
args17906.push((arguments[i__7485__auto___17965]));

var G__17966 = (i__7485__auto___17965 + (1));
i__7485__auto___17965 = G__17966;
continue;
} else {
}
break;
}

var G__17908 = args17906.length;
switch (G__17908) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17906.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___17968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___17968,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___17968,out){
return (function (state_17940){
var state_val_17941 = (state_17940[(1)]);
if((state_val_17941 === (7))){
var inst_17920 = (state_17940[(7)]);
var inst_17919 = (state_17940[(8)]);
var inst_17919__$1 = (state_17940[(2)]);
var inst_17920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17919__$1,(0),null);
var inst_17921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17919__$1,(1),null);
var inst_17922 = (inst_17920__$1 == null);
var state_17940__$1 = (function (){var statearr_17942 = state_17940;
(statearr_17942[(9)] = inst_17921);

(statearr_17942[(7)] = inst_17920__$1);

(statearr_17942[(8)] = inst_17919__$1);

return statearr_17942;
})();
if(cljs.core.truth_(inst_17922)){
var statearr_17943_17969 = state_17940__$1;
(statearr_17943_17969[(1)] = (8));

} else {
var statearr_17944_17970 = state_17940__$1;
(statearr_17944_17970[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (1))){
var inst_17909 = cljs.core.vec(chs);
var inst_17910 = inst_17909;
var state_17940__$1 = (function (){var statearr_17945 = state_17940;
(statearr_17945[(10)] = inst_17910);

return statearr_17945;
})();
var statearr_17946_17971 = state_17940__$1;
(statearr_17946_17971[(2)] = null);

(statearr_17946_17971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (4))){
var inst_17910 = (state_17940[(10)]);
var state_17940__$1 = state_17940;
return cljs.core.async.ioc_alts_BANG_(state_17940__$1,(7),inst_17910);
} else {
if((state_val_17941 === (6))){
var inst_17936 = (state_17940[(2)]);
var state_17940__$1 = state_17940;
var statearr_17947_17972 = state_17940__$1;
(statearr_17947_17972[(2)] = inst_17936);

(statearr_17947_17972[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (3))){
var inst_17938 = (state_17940[(2)]);
var state_17940__$1 = state_17940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17940__$1,inst_17938);
} else {
if((state_val_17941 === (2))){
var inst_17910 = (state_17940[(10)]);
var inst_17912 = cljs.core.count(inst_17910);
var inst_17913 = (inst_17912 > (0));
var state_17940__$1 = state_17940;
if(cljs.core.truth_(inst_17913)){
var statearr_17949_17973 = state_17940__$1;
(statearr_17949_17973[(1)] = (4));

} else {
var statearr_17950_17974 = state_17940__$1;
(statearr_17950_17974[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (11))){
var inst_17910 = (state_17940[(10)]);
var inst_17929 = (state_17940[(2)]);
var tmp17948 = inst_17910;
var inst_17910__$1 = tmp17948;
var state_17940__$1 = (function (){var statearr_17951 = state_17940;
(statearr_17951[(10)] = inst_17910__$1);

(statearr_17951[(11)] = inst_17929);

return statearr_17951;
})();
var statearr_17952_17975 = state_17940__$1;
(statearr_17952_17975[(2)] = null);

(statearr_17952_17975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (9))){
var inst_17920 = (state_17940[(7)]);
var state_17940__$1 = state_17940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17940__$1,(11),out,inst_17920);
} else {
if((state_val_17941 === (5))){
var inst_17934 = cljs.core.async.close_BANG_(out);
var state_17940__$1 = state_17940;
var statearr_17953_17976 = state_17940__$1;
(statearr_17953_17976[(2)] = inst_17934);

(statearr_17953_17976[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (10))){
var inst_17932 = (state_17940[(2)]);
var state_17940__$1 = state_17940;
var statearr_17954_17977 = state_17940__$1;
(statearr_17954_17977[(2)] = inst_17932);

(statearr_17954_17977[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17941 === (8))){
var inst_17921 = (state_17940[(9)]);
var inst_17910 = (state_17940[(10)]);
var inst_17920 = (state_17940[(7)]);
var inst_17919 = (state_17940[(8)]);
var inst_17924 = (function (){var cs = inst_17910;
var vec__17915 = inst_17919;
var v = inst_17920;
var c = inst_17921;
return ((function (cs,vec__17915,v,c,inst_17921,inst_17910,inst_17920,inst_17919,state_val_17941,c__15823__auto___17968,out){
return (function (p1__17905_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17905_SHARP_);
});
;})(cs,vec__17915,v,c,inst_17921,inst_17910,inst_17920,inst_17919,state_val_17941,c__15823__auto___17968,out))
})();
var inst_17925 = cljs.core.filterv(inst_17924,inst_17910);
var inst_17910__$1 = inst_17925;
var state_17940__$1 = (function (){var statearr_17955 = state_17940;
(statearr_17955[(10)] = inst_17910__$1);

return statearr_17955;
})();
var statearr_17956_17978 = state_17940__$1;
(statearr_17956_17978[(2)] = null);

(statearr_17956_17978[(1)] = (2));


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
});})(c__15823__auto___17968,out))
;
return ((function (switch__15699__auto__,c__15823__auto___17968,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_17960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17960[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_17960[(1)] = (1));

return statearr_17960;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_17940){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_17940);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e17961){if((e17961 instanceof Object)){
var ex__15703__auto__ = e17961;
var statearr_17962_17979 = state_17940;
(statearr_17962_17979[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17940);

return cljs.core.cst$kw$recur;
} else {
throw e17961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__17980 = state_17940;
state_17940 = G__17980;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_17940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_17940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___17968,out))
})();
var state__15825__auto__ = (function (){var statearr_17963 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_17963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___17968);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___17968,out))
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
var args17981 = [];
var len__7484__auto___18030 = arguments.length;
var i__7485__auto___18031 = (0);
while(true){
if((i__7485__auto___18031 < len__7484__auto___18030)){
args17981.push((arguments[i__7485__auto___18031]));

var G__18032 = (i__7485__auto___18031 + (1));
i__7485__auto___18031 = G__18032;
continue;
} else {
}
break;
}

var G__17983 = args17981.length;
switch (G__17983) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17981.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___18034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___18034,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___18034,out){
return (function (state_18007){
var state_val_18008 = (state_18007[(1)]);
if((state_val_18008 === (7))){
var inst_17989 = (state_18007[(7)]);
var inst_17989__$1 = (state_18007[(2)]);
var inst_17990 = (inst_17989__$1 == null);
var inst_17991 = cljs.core.not(inst_17990);
var state_18007__$1 = (function (){var statearr_18009 = state_18007;
(statearr_18009[(7)] = inst_17989__$1);

return statearr_18009;
})();
if(inst_17991){
var statearr_18010_18035 = state_18007__$1;
(statearr_18010_18035[(1)] = (8));

} else {
var statearr_18011_18036 = state_18007__$1;
(statearr_18011_18036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (1))){
var inst_17984 = (0);
var state_18007__$1 = (function (){var statearr_18012 = state_18007;
(statearr_18012[(8)] = inst_17984);

return statearr_18012;
})();
var statearr_18013_18037 = state_18007__$1;
(statearr_18013_18037[(2)] = null);

(statearr_18013_18037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (4))){
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18007__$1,(7),ch);
} else {
if((state_val_18008 === (6))){
var inst_18002 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18014_18038 = state_18007__$1;
(statearr_18014_18038[(2)] = inst_18002);

(statearr_18014_18038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (3))){
var inst_18004 = (state_18007[(2)]);
var inst_18005 = cljs.core.async.close_BANG_(out);
var state_18007__$1 = (function (){var statearr_18015 = state_18007;
(statearr_18015[(9)] = inst_18004);

return statearr_18015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18007__$1,inst_18005);
} else {
if((state_val_18008 === (2))){
var inst_17984 = (state_18007[(8)]);
var inst_17986 = (inst_17984 < n);
var state_18007__$1 = state_18007;
if(cljs.core.truth_(inst_17986)){
var statearr_18016_18039 = state_18007__$1;
(statearr_18016_18039[(1)] = (4));

} else {
var statearr_18017_18040 = state_18007__$1;
(statearr_18017_18040[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (11))){
var inst_17984 = (state_18007[(8)]);
var inst_17994 = (state_18007[(2)]);
var inst_17995 = (inst_17984 + (1));
var inst_17984__$1 = inst_17995;
var state_18007__$1 = (function (){var statearr_18018 = state_18007;
(statearr_18018[(10)] = inst_17994);

(statearr_18018[(8)] = inst_17984__$1);

return statearr_18018;
})();
var statearr_18019_18041 = state_18007__$1;
(statearr_18019_18041[(2)] = null);

(statearr_18019_18041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (9))){
var state_18007__$1 = state_18007;
var statearr_18020_18042 = state_18007__$1;
(statearr_18020_18042[(2)] = null);

(statearr_18020_18042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (5))){
var state_18007__$1 = state_18007;
var statearr_18021_18043 = state_18007__$1;
(statearr_18021_18043[(2)] = null);

(statearr_18021_18043[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (10))){
var inst_17999 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18022_18044 = state_18007__$1;
(statearr_18022_18044[(2)] = inst_17999);

(statearr_18022_18044[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (8))){
var inst_17989 = (state_18007[(7)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18007__$1,(11),out,inst_17989);
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
});})(c__15823__auto___18034,out))
;
return ((function (switch__15699__auto__,c__15823__auto___18034,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_18026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_18007){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18007);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18027){if((e18027 instanceof Object)){
var ex__15703__auto__ = e18027;
var statearr_18028_18045 = state_18007;
(statearr_18028_18045[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18007);

return cljs.core.cst$kw$recur;
} else {
throw e18027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18046 = state_18007;
state_18007 = G__18046;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_18007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___18034,out))
})();
var state__15825__auto__ = (function (){var statearr_18029 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___18034);

return statearr_18029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___18034,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18056 = (function (map_LT_,f,ch,meta18057){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18057 = meta18057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18058,meta18057__$1){
var self__ = this;
var _18058__$1 = this;
return (new cljs.core.async.t_cljs$core$async18056(self__.map_LT_,self__.f,self__.ch,meta18057__$1));
});

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18058){
var self__ = this;
var _18058__$1 = this;
return self__.meta18057;
});

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18059 = (function (map_LT_,f,ch,meta18057,_,fn1,meta18060){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18057 = meta18057;
this._ = _;
this.fn1 = fn1;
this.meta18060 = meta18060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18061,meta18060__$1){
var self__ = this;
var _18061__$1 = this;
return (new cljs.core.async.t_cljs$core$async18059(self__.map_LT_,self__.f,self__.ch,self__.meta18057,self__._,self__.fn1,meta18060__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18061){
var self__ = this;
var _18061__$1 = this;
return self__.meta18060;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18047_SHARP_){
var G__18062 = (((p1__18047_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18047_SHARP_) : self__.f.call(null,p1__18047_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18062) : f1.call(null,G__18062));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18057,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18056], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18060], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18059";

cljs.core.async.t_cljs$core$async18059.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async18059");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18059 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18059(map_LT___$1,f__$1,ch__$1,meta18057__$1,___$2,fn1__$1,meta18060){
return (new cljs.core.async.t_cljs$core$async18059(map_LT___$1,f__$1,ch__$1,meta18057__$1,___$2,fn1__$1,meta18060));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18059(self__.map_LT_,self__.f,self__.ch,self__.meta18057,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18063 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18063) : self__.f.call(null,G__18063));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18057], null);
});

cljs.core.async.t_cljs$core$async18056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18056";

cljs.core.async.t_cljs$core$async18056.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async18056");
});

cljs.core.async.__GT_t_cljs$core$async18056 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18056(map_LT___$1,f__$1,ch__$1,meta18057){
return (new cljs.core.async.t_cljs$core$async18056(map_LT___$1,f__$1,ch__$1,meta18057));
});

}

return (new cljs.core.async.t_cljs$core$async18056(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18067 = (function (map_GT_,f,ch,meta18068){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18068 = meta18068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18069,meta18068__$1){
var self__ = this;
var _18069__$1 = this;
return (new cljs.core.async.t_cljs$core$async18067(self__.map_GT_,self__.f,self__.ch,meta18068__$1));
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18069){
var self__ = this;
var _18069__$1 = this;
return self__.meta18068;
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18068], null);
});

cljs.core.async.t_cljs$core$async18067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18067";

cljs.core.async.t_cljs$core$async18067.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async18067");
});

cljs.core.async.__GT_t_cljs$core$async18067 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18067(map_GT___$1,f__$1,ch__$1,meta18068){
return (new cljs.core.async.t_cljs$core$async18067(map_GT___$1,f__$1,ch__$1,meta18068));
});

}

return (new cljs.core.async.t_cljs$core$async18067(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18073 = (function (filter_GT_,p,ch,meta18074){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18074 = meta18074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18075,meta18074__$1){
var self__ = this;
var _18075__$1 = this;
return (new cljs.core.async.t_cljs$core$async18073(self__.filter_GT_,self__.p,self__.ch,meta18074__$1));
});

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18075){
var self__ = this;
var _18075__$1 = this;
return self__.meta18074;
});

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18074], null);
});

cljs.core.async.t_cljs$core$async18073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18073";

cljs.core.async.t_cljs$core$async18073.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async18073");
});

cljs.core.async.__GT_t_cljs$core$async18073 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18073(filter_GT___$1,p__$1,ch__$1,meta18074){
return (new cljs.core.async.t_cljs$core$async18073(filter_GT___$1,p__$1,ch__$1,meta18074));
});

}

return (new cljs.core.async.t_cljs$core$async18073(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18076 = [];
var len__7484__auto___18120 = arguments.length;
var i__7485__auto___18121 = (0);
while(true){
if((i__7485__auto___18121 < len__7484__auto___18120)){
args18076.push((arguments[i__7485__auto___18121]));

var G__18122 = (i__7485__auto___18121 + (1));
i__7485__auto___18121 = G__18122;
continue;
} else {
}
break;
}

var G__18078 = args18076.length;
switch (G__18078) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18076.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___18124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___18124,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___18124,out){
return (function (state_18099){
var state_val_18100 = (state_18099[(1)]);
if((state_val_18100 === (7))){
var inst_18095 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18101_18125 = state_18099__$1;
(statearr_18101_18125[(2)] = inst_18095);

(statearr_18101_18125[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (1))){
var state_18099__$1 = state_18099;
var statearr_18102_18126 = state_18099__$1;
(statearr_18102_18126[(2)] = null);

(statearr_18102_18126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (4))){
var inst_18081 = (state_18099[(7)]);
var inst_18081__$1 = (state_18099[(2)]);
var inst_18082 = (inst_18081__$1 == null);
var state_18099__$1 = (function (){var statearr_18103 = state_18099;
(statearr_18103[(7)] = inst_18081__$1);

return statearr_18103;
})();
if(cljs.core.truth_(inst_18082)){
var statearr_18104_18127 = state_18099__$1;
(statearr_18104_18127[(1)] = (5));

} else {
var statearr_18105_18128 = state_18099__$1;
(statearr_18105_18128[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (6))){
var inst_18081 = (state_18099[(7)]);
var inst_18086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18081) : p.call(null,inst_18081));
var state_18099__$1 = state_18099;
if(cljs.core.truth_(inst_18086)){
var statearr_18106_18129 = state_18099__$1;
(statearr_18106_18129[(1)] = (8));

} else {
var statearr_18107_18130 = state_18099__$1;
(statearr_18107_18130[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (3))){
var inst_18097 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18099__$1,inst_18097);
} else {
if((state_val_18100 === (2))){
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18099__$1,(4),ch);
} else {
if((state_val_18100 === (11))){
var inst_18089 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18108_18131 = state_18099__$1;
(statearr_18108_18131[(2)] = inst_18089);

(statearr_18108_18131[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (9))){
var state_18099__$1 = state_18099;
var statearr_18109_18132 = state_18099__$1;
(statearr_18109_18132[(2)] = null);

(statearr_18109_18132[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (5))){
var inst_18084 = cljs.core.async.close_BANG_(out);
var state_18099__$1 = state_18099;
var statearr_18110_18133 = state_18099__$1;
(statearr_18110_18133[(2)] = inst_18084);

(statearr_18110_18133[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (10))){
var inst_18092 = (state_18099[(2)]);
var state_18099__$1 = (function (){var statearr_18111 = state_18099;
(statearr_18111[(8)] = inst_18092);

return statearr_18111;
})();
var statearr_18112_18134 = state_18099__$1;
(statearr_18112_18134[(2)] = null);

(statearr_18112_18134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18100 === (8))){
var inst_18081 = (state_18099[(7)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18099__$1,(11),out,inst_18081);
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
});})(c__15823__auto___18124,out))
;
return ((function (switch__15699__auto__,c__15823__auto___18124,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_18116 = [null,null,null,null,null,null,null,null,null];
(statearr_18116[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_18116[(1)] = (1));

return statearr_18116;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_18099){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18099);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18117){if((e18117 instanceof Object)){
var ex__15703__auto__ = e18117;
var statearr_18118_18135 = state_18099;
(statearr_18118_18135[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18099);

return cljs.core.cst$kw$recur;
} else {
throw e18117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18136 = state_18099;
state_18099 = G__18136;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_18099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_18099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___18124,out))
})();
var state__15825__auto__ = (function (){var statearr_18119 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___18124);

return statearr_18119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___18124,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18137 = [];
var len__7484__auto___18140 = arguments.length;
var i__7485__auto___18141 = (0);
while(true){
if((i__7485__auto___18141 < len__7484__auto___18140)){
args18137.push((arguments[i__7485__auto___18141]));

var G__18142 = (i__7485__auto___18141 + (1));
i__7485__auto___18141 = G__18142;
continue;
} else {
}
break;
}

var G__18139 = args18137.length;
switch (G__18139) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18137.length)].join('')));

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
var c__15823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto__){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto__){
return (function (state_18309){
var state_val_18310 = (state_18309[(1)]);
if((state_val_18310 === (7))){
var inst_18305 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18311_18352 = state_18309__$1;
(statearr_18311_18352[(2)] = inst_18305);

(statearr_18311_18352[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (20))){
var inst_18275 = (state_18309[(7)]);
var inst_18286 = (state_18309[(2)]);
var inst_18287 = cljs.core.next(inst_18275);
var inst_18261 = inst_18287;
var inst_18262 = null;
var inst_18263 = (0);
var inst_18264 = (0);
var state_18309__$1 = (function (){var statearr_18312 = state_18309;
(statearr_18312[(8)] = inst_18286);

(statearr_18312[(9)] = inst_18264);

(statearr_18312[(10)] = inst_18263);

(statearr_18312[(11)] = inst_18262);

(statearr_18312[(12)] = inst_18261);

return statearr_18312;
})();
var statearr_18313_18353 = state_18309__$1;
(statearr_18313_18353[(2)] = null);

(statearr_18313_18353[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (1))){
var state_18309__$1 = state_18309;
var statearr_18314_18354 = state_18309__$1;
(statearr_18314_18354[(2)] = null);

(statearr_18314_18354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (4))){
var inst_18250 = (state_18309[(13)]);
var inst_18250__$1 = (state_18309[(2)]);
var inst_18251 = (inst_18250__$1 == null);
var state_18309__$1 = (function (){var statearr_18315 = state_18309;
(statearr_18315[(13)] = inst_18250__$1);

return statearr_18315;
})();
if(cljs.core.truth_(inst_18251)){
var statearr_18316_18355 = state_18309__$1;
(statearr_18316_18355[(1)] = (5));

} else {
var statearr_18317_18356 = state_18309__$1;
(statearr_18317_18356[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (15))){
var state_18309__$1 = state_18309;
var statearr_18321_18357 = state_18309__$1;
(statearr_18321_18357[(2)] = null);

(statearr_18321_18357[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (21))){
var state_18309__$1 = state_18309;
var statearr_18322_18358 = state_18309__$1;
(statearr_18322_18358[(2)] = null);

(statearr_18322_18358[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (13))){
var inst_18264 = (state_18309[(9)]);
var inst_18263 = (state_18309[(10)]);
var inst_18262 = (state_18309[(11)]);
var inst_18261 = (state_18309[(12)]);
var inst_18271 = (state_18309[(2)]);
var inst_18272 = (inst_18264 + (1));
var tmp18318 = inst_18263;
var tmp18319 = inst_18262;
var tmp18320 = inst_18261;
var inst_18261__$1 = tmp18320;
var inst_18262__$1 = tmp18319;
var inst_18263__$1 = tmp18318;
var inst_18264__$1 = inst_18272;
var state_18309__$1 = (function (){var statearr_18323 = state_18309;
(statearr_18323[(9)] = inst_18264__$1);

(statearr_18323[(10)] = inst_18263__$1);

(statearr_18323[(11)] = inst_18262__$1);

(statearr_18323[(12)] = inst_18261__$1);

(statearr_18323[(14)] = inst_18271);

return statearr_18323;
})();
var statearr_18324_18359 = state_18309__$1;
(statearr_18324_18359[(2)] = null);

(statearr_18324_18359[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (22))){
var state_18309__$1 = state_18309;
var statearr_18325_18360 = state_18309__$1;
(statearr_18325_18360[(2)] = null);

(statearr_18325_18360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (6))){
var inst_18250 = (state_18309[(13)]);
var inst_18259 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18250) : f.call(null,inst_18250));
var inst_18260 = cljs.core.seq(inst_18259);
var inst_18261 = inst_18260;
var inst_18262 = null;
var inst_18263 = (0);
var inst_18264 = (0);
var state_18309__$1 = (function (){var statearr_18326 = state_18309;
(statearr_18326[(9)] = inst_18264);

(statearr_18326[(10)] = inst_18263);

(statearr_18326[(11)] = inst_18262);

(statearr_18326[(12)] = inst_18261);

return statearr_18326;
})();
var statearr_18327_18361 = state_18309__$1;
(statearr_18327_18361[(2)] = null);

(statearr_18327_18361[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (17))){
var inst_18275 = (state_18309[(7)]);
var inst_18279 = cljs.core.chunk_first(inst_18275);
var inst_18280 = cljs.core.chunk_rest(inst_18275);
var inst_18281 = cljs.core.count(inst_18279);
var inst_18261 = inst_18280;
var inst_18262 = inst_18279;
var inst_18263 = inst_18281;
var inst_18264 = (0);
var state_18309__$1 = (function (){var statearr_18328 = state_18309;
(statearr_18328[(9)] = inst_18264);

(statearr_18328[(10)] = inst_18263);

(statearr_18328[(11)] = inst_18262);

(statearr_18328[(12)] = inst_18261);

return statearr_18328;
})();
var statearr_18329_18362 = state_18309__$1;
(statearr_18329_18362[(2)] = null);

(statearr_18329_18362[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (3))){
var inst_18307 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18309__$1,inst_18307);
} else {
if((state_val_18310 === (12))){
var inst_18295 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18330_18363 = state_18309__$1;
(statearr_18330_18363[(2)] = inst_18295);

(statearr_18330_18363[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (2))){
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18309__$1,(4),in$);
} else {
if((state_val_18310 === (23))){
var inst_18303 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18331_18364 = state_18309__$1;
(statearr_18331_18364[(2)] = inst_18303);

(statearr_18331_18364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (19))){
var inst_18290 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18332_18365 = state_18309__$1;
(statearr_18332_18365[(2)] = inst_18290);

(statearr_18332_18365[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (11))){
var inst_18275 = (state_18309[(7)]);
var inst_18261 = (state_18309[(12)]);
var inst_18275__$1 = cljs.core.seq(inst_18261);
var state_18309__$1 = (function (){var statearr_18333 = state_18309;
(statearr_18333[(7)] = inst_18275__$1);

return statearr_18333;
})();
if(inst_18275__$1){
var statearr_18334_18366 = state_18309__$1;
(statearr_18334_18366[(1)] = (14));

} else {
var statearr_18335_18367 = state_18309__$1;
(statearr_18335_18367[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (9))){
var inst_18297 = (state_18309[(2)]);
var inst_18298 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18309__$1 = (function (){var statearr_18336 = state_18309;
(statearr_18336[(15)] = inst_18297);

return statearr_18336;
})();
if(cljs.core.truth_(inst_18298)){
var statearr_18337_18368 = state_18309__$1;
(statearr_18337_18368[(1)] = (21));

} else {
var statearr_18338_18369 = state_18309__$1;
(statearr_18338_18369[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (5))){
var inst_18253 = cljs.core.async.close_BANG_(out);
var state_18309__$1 = state_18309;
var statearr_18339_18370 = state_18309__$1;
(statearr_18339_18370[(2)] = inst_18253);

(statearr_18339_18370[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (14))){
var inst_18275 = (state_18309[(7)]);
var inst_18277 = cljs.core.chunked_seq_QMARK_(inst_18275);
var state_18309__$1 = state_18309;
if(inst_18277){
var statearr_18340_18371 = state_18309__$1;
(statearr_18340_18371[(1)] = (17));

} else {
var statearr_18341_18372 = state_18309__$1;
(statearr_18341_18372[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (16))){
var inst_18293 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18342_18373 = state_18309__$1;
(statearr_18342_18373[(2)] = inst_18293);

(statearr_18342_18373[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (10))){
var inst_18264 = (state_18309[(9)]);
var inst_18262 = (state_18309[(11)]);
var inst_18269 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18262,inst_18264);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18309__$1,(13),out,inst_18269);
} else {
if((state_val_18310 === (18))){
var inst_18275 = (state_18309[(7)]);
var inst_18284 = cljs.core.first(inst_18275);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18309__$1,(20),out,inst_18284);
} else {
if((state_val_18310 === (8))){
var inst_18264 = (state_18309[(9)]);
var inst_18263 = (state_18309[(10)]);
var inst_18266 = (inst_18264 < inst_18263);
var inst_18267 = inst_18266;
var state_18309__$1 = state_18309;
if(cljs.core.truth_(inst_18267)){
var statearr_18343_18374 = state_18309__$1;
(statearr_18343_18374[(1)] = (10));

} else {
var statearr_18344_18375 = state_18309__$1;
(statearr_18344_18375[(1)] = (11));

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
});})(c__15823__auto__))
;
return ((function (switch__15699__auto__,c__15823__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____0 = (function (){
var statearr_18348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18348[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__);

(statearr_18348[(1)] = (1));

return statearr_18348;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____1 = (function (state_18309){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18309);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18349){if((e18349 instanceof Object)){
var ex__15703__auto__ = e18349;
var statearr_18350_18376 = state_18309;
(statearr_18350_18376[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18309);

return cljs.core.cst$kw$recur;
} else {
throw e18349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18377 = state_18309;
state_18309 = G__18377;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__ = function(state_18309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____1.call(this,state_18309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto__))
})();
var state__15825__auto__ = (function (){var statearr_18351 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto__);

return statearr_18351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto__))
);

return c__15823__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18378 = [];
var len__7484__auto___18381 = arguments.length;
var i__7485__auto___18382 = (0);
while(true){
if((i__7485__auto___18382 < len__7484__auto___18381)){
args18378.push((arguments[i__7485__auto___18382]));

var G__18383 = (i__7485__auto___18382 + (1));
i__7485__auto___18382 = G__18383;
continue;
} else {
}
break;
}

var G__18380 = args18378.length;
switch (G__18380) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18378.length)].join('')));

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
var args18385 = [];
var len__7484__auto___18388 = arguments.length;
var i__7485__auto___18389 = (0);
while(true){
if((i__7485__auto___18389 < len__7484__auto___18388)){
args18385.push((arguments[i__7485__auto___18389]));

var G__18390 = (i__7485__auto___18389 + (1));
i__7485__auto___18389 = G__18390;
continue;
} else {
}
break;
}

var G__18387 = args18385.length;
switch (G__18387) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18385.length)].join('')));

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
var args18392 = [];
var len__7484__auto___18443 = arguments.length;
var i__7485__auto___18444 = (0);
while(true){
if((i__7485__auto___18444 < len__7484__auto___18443)){
args18392.push((arguments[i__7485__auto___18444]));

var G__18445 = (i__7485__auto___18444 + (1));
i__7485__auto___18444 = G__18445;
continue;
} else {
}
break;
}

var G__18394 = args18392.length;
switch (G__18394) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18392.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___18447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___18447,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___18447,out){
return (function (state_18418){
var state_val_18419 = (state_18418[(1)]);
if((state_val_18419 === (7))){
var inst_18413 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
var statearr_18420_18448 = state_18418__$1;
(statearr_18420_18448[(2)] = inst_18413);

(statearr_18420_18448[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (1))){
var inst_18395 = null;
var state_18418__$1 = (function (){var statearr_18421 = state_18418;
(statearr_18421[(7)] = inst_18395);

return statearr_18421;
})();
var statearr_18422_18449 = state_18418__$1;
(statearr_18422_18449[(2)] = null);

(statearr_18422_18449[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (4))){
var inst_18398 = (state_18418[(8)]);
var inst_18398__$1 = (state_18418[(2)]);
var inst_18399 = (inst_18398__$1 == null);
var inst_18400 = cljs.core.not(inst_18399);
var state_18418__$1 = (function (){var statearr_18423 = state_18418;
(statearr_18423[(8)] = inst_18398__$1);

return statearr_18423;
})();
if(inst_18400){
var statearr_18424_18450 = state_18418__$1;
(statearr_18424_18450[(1)] = (5));

} else {
var statearr_18425_18451 = state_18418__$1;
(statearr_18425_18451[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (6))){
var state_18418__$1 = state_18418;
var statearr_18426_18452 = state_18418__$1;
(statearr_18426_18452[(2)] = null);

(statearr_18426_18452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (3))){
var inst_18415 = (state_18418[(2)]);
var inst_18416 = cljs.core.async.close_BANG_(out);
var state_18418__$1 = (function (){var statearr_18427 = state_18418;
(statearr_18427[(9)] = inst_18415);

return statearr_18427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18418__$1,inst_18416);
} else {
if((state_val_18419 === (2))){
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18418__$1,(4),ch);
} else {
if((state_val_18419 === (11))){
var inst_18398 = (state_18418[(8)]);
var inst_18407 = (state_18418[(2)]);
var inst_18395 = inst_18398;
var state_18418__$1 = (function (){var statearr_18428 = state_18418;
(statearr_18428[(7)] = inst_18395);

(statearr_18428[(10)] = inst_18407);

return statearr_18428;
})();
var statearr_18429_18453 = state_18418__$1;
(statearr_18429_18453[(2)] = null);

(statearr_18429_18453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (9))){
var inst_18398 = (state_18418[(8)]);
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18418__$1,(11),out,inst_18398);
} else {
if((state_val_18419 === (5))){
var inst_18398 = (state_18418[(8)]);
var inst_18395 = (state_18418[(7)]);
var inst_18402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18398,inst_18395);
var state_18418__$1 = state_18418;
if(inst_18402){
var statearr_18431_18454 = state_18418__$1;
(statearr_18431_18454[(1)] = (8));

} else {
var statearr_18432_18455 = state_18418__$1;
(statearr_18432_18455[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (10))){
var inst_18410 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
var statearr_18433_18456 = state_18418__$1;
(statearr_18433_18456[(2)] = inst_18410);

(statearr_18433_18456[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18419 === (8))){
var inst_18395 = (state_18418[(7)]);
var tmp18430 = inst_18395;
var inst_18395__$1 = tmp18430;
var state_18418__$1 = (function (){var statearr_18434 = state_18418;
(statearr_18434[(7)] = inst_18395__$1);

return statearr_18434;
})();
var statearr_18435_18457 = state_18418__$1;
(statearr_18435_18457[(2)] = null);

(statearr_18435_18457[(1)] = (2));


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
});})(c__15823__auto___18447,out))
;
return ((function (switch__15699__auto__,c__15823__auto___18447,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_18439 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18439[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_18439[(1)] = (1));

return statearr_18439;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_18418){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18418);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18440){if((e18440 instanceof Object)){
var ex__15703__auto__ = e18440;
var statearr_18441_18458 = state_18418;
(statearr_18441_18458[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18418);

return cljs.core.cst$kw$recur;
} else {
throw e18440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18459 = state_18418;
state_18418 = G__18459;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_18418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_18418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___18447,out))
})();
var state__15825__auto__ = (function (){var statearr_18442 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___18447);

return statearr_18442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___18447,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18460 = [];
var len__7484__auto___18530 = arguments.length;
var i__7485__auto___18531 = (0);
while(true){
if((i__7485__auto___18531 < len__7484__auto___18530)){
args18460.push((arguments[i__7485__auto___18531]));

var G__18532 = (i__7485__auto___18531 + (1));
i__7485__auto___18531 = G__18532;
continue;
} else {
}
break;
}

var G__18462 = args18460.length;
switch (G__18462) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18460.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___18534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___18534,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___18534,out){
return (function (state_18500){
var state_val_18501 = (state_18500[(1)]);
if((state_val_18501 === (7))){
var inst_18496 = (state_18500[(2)]);
var state_18500__$1 = state_18500;
var statearr_18502_18535 = state_18500__$1;
(statearr_18502_18535[(2)] = inst_18496);

(statearr_18502_18535[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (1))){
var inst_18463 = (new Array(n));
var inst_18464 = inst_18463;
var inst_18465 = (0);
var state_18500__$1 = (function (){var statearr_18503 = state_18500;
(statearr_18503[(7)] = inst_18465);

(statearr_18503[(8)] = inst_18464);

return statearr_18503;
})();
var statearr_18504_18536 = state_18500__$1;
(statearr_18504_18536[(2)] = null);

(statearr_18504_18536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (4))){
var inst_18468 = (state_18500[(9)]);
var inst_18468__$1 = (state_18500[(2)]);
var inst_18469 = (inst_18468__$1 == null);
var inst_18470 = cljs.core.not(inst_18469);
var state_18500__$1 = (function (){var statearr_18505 = state_18500;
(statearr_18505[(9)] = inst_18468__$1);

return statearr_18505;
})();
if(inst_18470){
var statearr_18506_18537 = state_18500__$1;
(statearr_18506_18537[(1)] = (5));

} else {
var statearr_18507_18538 = state_18500__$1;
(statearr_18507_18538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (15))){
var inst_18490 = (state_18500[(2)]);
var state_18500__$1 = state_18500;
var statearr_18508_18539 = state_18500__$1;
(statearr_18508_18539[(2)] = inst_18490);

(statearr_18508_18539[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (13))){
var state_18500__$1 = state_18500;
var statearr_18509_18540 = state_18500__$1;
(statearr_18509_18540[(2)] = null);

(statearr_18509_18540[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (6))){
var inst_18465 = (state_18500[(7)]);
var inst_18486 = (inst_18465 > (0));
var state_18500__$1 = state_18500;
if(cljs.core.truth_(inst_18486)){
var statearr_18510_18541 = state_18500__$1;
(statearr_18510_18541[(1)] = (12));

} else {
var statearr_18511_18542 = state_18500__$1;
(statearr_18511_18542[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (3))){
var inst_18498 = (state_18500[(2)]);
var state_18500__$1 = state_18500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18500__$1,inst_18498);
} else {
if((state_val_18501 === (12))){
var inst_18464 = (state_18500[(8)]);
var inst_18488 = cljs.core.vec(inst_18464);
var state_18500__$1 = state_18500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18500__$1,(15),out,inst_18488);
} else {
if((state_val_18501 === (2))){
var state_18500__$1 = state_18500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18500__$1,(4),ch);
} else {
if((state_val_18501 === (11))){
var inst_18480 = (state_18500[(2)]);
var inst_18481 = (new Array(n));
var inst_18464 = inst_18481;
var inst_18465 = (0);
var state_18500__$1 = (function (){var statearr_18512 = state_18500;
(statearr_18512[(7)] = inst_18465);

(statearr_18512[(8)] = inst_18464);

(statearr_18512[(10)] = inst_18480);

return statearr_18512;
})();
var statearr_18513_18543 = state_18500__$1;
(statearr_18513_18543[(2)] = null);

(statearr_18513_18543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (9))){
var inst_18464 = (state_18500[(8)]);
var inst_18478 = cljs.core.vec(inst_18464);
var state_18500__$1 = state_18500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18500__$1,(11),out,inst_18478);
} else {
if((state_val_18501 === (5))){
var inst_18473 = (state_18500[(11)]);
var inst_18465 = (state_18500[(7)]);
var inst_18464 = (state_18500[(8)]);
var inst_18468 = (state_18500[(9)]);
var inst_18472 = (inst_18464[inst_18465] = inst_18468);
var inst_18473__$1 = (inst_18465 + (1));
var inst_18474 = (inst_18473__$1 < n);
var state_18500__$1 = (function (){var statearr_18514 = state_18500;
(statearr_18514[(11)] = inst_18473__$1);

(statearr_18514[(12)] = inst_18472);

return statearr_18514;
})();
if(cljs.core.truth_(inst_18474)){
var statearr_18515_18544 = state_18500__$1;
(statearr_18515_18544[(1)] = (8));

} else {
var statearr_18516_18545 = state_18500__$1;
(statearr_18516_18545[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (14))){
var inst_18493 = (state_18500[(2)]);
var inst_18494 = cljs.core.async.close_BANG_(out);
var state_18500__$1 = (function (){var statearr_18518 = state_18500;
(statearr_18518[(13)] = inst_18493);

return statearr_18518;
})();
var statearr_18519_18546 = state_18500__$1;
(statearr_18519_18546[(2)] = inst_18494);

(statearr_18519_18546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (10))){
var inst_18484 = (state_18500[(2)]);
var state_18500__$1 = state_18500;
var statearr_18520_18547 = state_18500__$1;
(statearr_18520_18547[(2)] = inst_18484);

(statearr_18520_18547[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18501 === (8))){
var inst_18473 = (state_18500[(11)]);
var inst_18464 = (state_18500[(8)]);
var tmp18517 = inst_18464;
var inst_18464__$1 = tmp18517;
var inst_18465 = inst_18473;
var state_18500__$1 = (function (){var statearr_18521 = state_18500;
(statearr_18521[(7)] = inst_18465);

(statearr_18521[(8)] = inst_18464__$1);

return statearr_18521;
})();
var statearr_18522_18548 = state_18500__$1;
(statearr_18522_18548[(2)] = null);

(statearr_18522_18548[(1)] = (2));


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
});})(c__15823__auto___18534,out))
;
return ((function (switch__15699__auto__,c__15823__auto___18534,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_18526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18526[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_18526[(1)] = (1));

return statearr_18526;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_18500){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18500);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18527){if((e18527 instanceof Object)){
var ex__15703__auto__ = e18527;
var statearr_18528_18549 = state_18500;
(statearr_18528_18549[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18500);

return cljs.core.cst$kw$recur;
} else {
throw e18527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18550 = state_18500;
state_18500 = G__18550;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_18500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_18500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___18534,out))
})();
var state__15825__auto__ = (function (){var statearr_18529 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___18534);

return statearr_18529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___18534,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18551 = [];
var len__7484__auto___18625 = arguments.length;
var i__7485__auto___18626 = (0);
while(true){
if((i__7485__auto___18626 < len__7484__auto___18625)){
args18551.push((arguments[i__7485__auto___18626]));

var G__18627 = (i__7485__auto___18626 + (1));
i__7485__auto___18626 = G__18627;
continue;
} else {
}
break;
}

var G__18553 = args18551.length;
switch (G__18553) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18551.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15823__auto___18629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15823__auto___18629,out){
return (function (){
var f__15824__auto__ = (function (){var switch__15699__auto__ = ((function (c__15823__auto___18629,out){
return (function (state_18595){
var state_val_18596 = (state_18595[(1)]);
if((state_val_18596 === (7))){
var inst_18591 = (state_18595[(2)]);
var state_18595__$1 = state_18595;
var statearr_18597_18630 = state_18595__$1;
(statearr_18597_18630[(2)] = inst_18591);

(statearr_18597_18630[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (1))){
var inst_18554 = [];
var inst_18555 = inst_18554;
var inst_18556 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18595__$1 = (function (){var statearr_18598 = state_18595;
(statearr_18598[(7)] = inst_18556);

(statearr_18598[(8)] = inst_18555);

return statearr_18598;
})();
var statearr_18599_18631 = state_18595__$1;
(statearr_18599_18631[(2)] = null);

(statearr_18599_18631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (4))){
var inst_18559 = (state_18595[(9)]);
var inst_18559__$1 = (state_18595[(2)]);
var inst_18560 = (inst_18559__$1 == null);
var inst_18561 = cljs.core.not(inst_18560);
var state_18595__$1 = (function (){var statearr_18600 = state_18595;
(statearr_18600[(9)] = inst_18559__$1);

return statearr_18600;
})();
if(inst_18561){
var statearr_18601_18632 = state_18595__$1;
(statearr_18601_18632[(1)] = (5));

} else {
var statearr_18602_18633 = state_18595__$1;
(statearr_18602_18633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (15))){
var inst_18585 = (state_18595[(2)]);
var state_18595__$1 = state_18595;
var statearr_18603_18634 = state_18595__$1;
(statearr_18603_18634[(2)] = inst_18585);

(statearr_18603_18634[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (13))){
var state_18595__$1 = state_18595;
var statearr_18604_18635 = state_18595__$1;
(statearr_18604_18635[(2)] = null);

(statearr_18604_18635[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (6))){
var inst_18555 = (state_18595[(8)]);
var inst_18580 = inst_18555.length;
var inst_18581 = (inst_18580 > (0));
var state_18595__$1 = state_18595;
if(cljs.core.truth_(inst_18581)){
var statearr_18605_18636 = state_18595__$1;
(statearr_18605_18636[(1)] = (12));

} else {
var statearr_18606_18637 = state_18595__$1;
(statearr_18606_18637[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (3))){
var inst_18593 = (state_18595[(2)]);
var state_18595__$1 = state_18595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18595__$1,inst_18593);
} else {
if((state_val_18596 === (12))){
var inst_18555 = (state_18595[(8)]);
var inst_18583 = cljs.core.vec(inst_18555);
var state_18595__$1 = state_18595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18595__$1,(15),out,inst_18583);
} else {
if((state_val_18596 === (2))){
var state_18595__$1 = state_18595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18595__$1,(4),ch);
} else {
if((state_val_18596 === (11))){
var inst_18559 = (state_18595[(9)]);
var inst_18563 = (state_18595[(10)]);
var inst_18573 = (state_18595[(2)]);
var inst_18574 = [];
var inst_18575 = inst_18574.push(inst_18559);
var inst_18555 = inst_18574;
var inst_18556 = inst_18563;
var state_18595__$1 = (function (){var statearr_18607 = state_18595;
(statearr_18607[(11)] = inst_18573);

(statearr_18607[(7)] = inst_18556);

(statearr_18607[(12)] = inst_18575);

(statearr_18607[(8)] = inst_18555);

return statearr_18607;
})();
var statearr_18608_18638 = state_18595__$1;
(statearr_18608_18638[(2)] = null);

(statearr_18608_18638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (9))){
var inst_18555 = (state_18595[(8)]);
var inst_18571 = cljs.core.vec(inst_18555);
var state_18595__$1 = state_18595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18595__$1,(11),out,inst_18571);
} else {
if((state_val_18596 === (5))){
var inst_18559 = (state_18595[(9)]);
var inst_18556 = (state_18595[(7)]);
var inst_18563 = (state_18595[(10)]);
var inst_18563__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18559) : f.call(null,inst_18559));
var inst_18564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18563__$1,inst_18556);
var inst_18565 = cljs.core.keyword_identical_QMARK_(inst_18556,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18566 = (inst_18564) || (inst_18565);
var state_18595__$1 = (function (){var statearr_18609 = state_18595;
(statearr_18609[(10)] = inst_18563__$1);

return statearr_18609;
})();
if(cljs.core.truth_(inst_18566)){
var statearr_18610_18639 = state_18595__$1;
(statearr_18610_18639[(1)] = (8));

} else {
var statearr_18611_18640 = state_18595__$1;
(statearr_18611_18640[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (14))){
var inst_18588 = (state_18595[(2)]);
var inst_18589 = cljs.core.async.close_BANG_(out);
var state_18595__$1 = (function (){var statearr_18613 = state_18595;
(statearr_18613[(13)] = inst_18588);

return statearr_18613;
})();
var statearr_18614_18641 = state_18595__$1;
(statearr_18614_18641[(2)] = inst_18589);

(statearr_18614_18641[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (10))){
var inst_18578 = (state_18595[(2)]);
var state_18595__$1 = state_18595;
var statearr_18615_18642 = state_18595__$1;
(statearr_18615_18642[(2)] = inst_18578);

(statearr_18615_18642[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18596 === (8))){
var inst_18559 = (state_18595[(9)]);
var inst_18563 = (state_18595[(10)]);
var inst_18555 = (state_18595[(8)]);
var inst_18568 = inst_18555.push(inst_18559);
var tmp18612 = inst_18555;
var inst_18555__$1 = tmp18612;
var inst_18556 = inst_18563;
var state_18595__$1 = (function (){var statearr_18616 = state_18595;
(statearr_18616[(7)] = inst_18556);

(statearr_18616[(8)] = inst_18555__$1);

(statearr_18616[(14)] = inst_18568);

return statearr_18616;
})();
var statearr_18617_18643 = state_18595__$1;
(statearr_18617_18643[(2)] = null);

(statearr_18617_18643[(1)] = (2));


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
});})(c__15823__auto___18629,out))
;
return ((function (switch__15699__auto__,c__15823__auto___18629,out){
return (function() {
var cljs$core$async$state_machine__15700__auto__ = null;
var cljs$core$async$state_machine__15700__auto____0 = (function (){
var statearr_18621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18621[(0)] = cljs$core$async$state_machine__15700__auto__);

(statearr_18621[(1)] = (1));

return statearr_18621;
});
var cljs$core$async$state_machine__15700__auto____1 = (function (state_18595){
while(true){
var ret_value__15701__auto__ = (function (){try{while(true){
var result__15702__auto__ = switch__15699__auto__(state_18595);
if(cljs.core.keyword_identical_QMARK_(result__15702__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15702__auto__;
}
break;
}
}catch (e18622){if((e18622 instanceof Object)){
var ex__15703__auto__ = e18622;
var statearr_18623_18644 = state_18595;
(statearr_18623_18644[(5)] = ex__15703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18595);

return cljs.core.cst$kw$recur;
} else {
throw e18622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15701__auto__,cljs.core.cst$kw$recur)){
var G__18645 = state_18595;
state_18595 = G__18645;
continue;
} else {
return ret_value__15701__auto__;
}
break;
}
});
cljs$core$async$state_machine__15700__auto__ = function(state_18595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15700__auto____1.call(this,state_18595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15700__auto____0;
cljs$core$async$state_machine__15700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15700__auto____1;
return cljs$core$async$state_machine__15700__auto__;
})()
;})(switch__15699__auto__,c__15823__auto___18629,out))
})();
var state__15825__auto__ = (function (){var statearr_18624 = (f__15824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15824__auto__.cljs$core$IFn$_invoke$arity$0() : f__15824__auto__.call(null));
(statearr_18624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15823__auto___18629);

return statearr_18624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15825__auto__);
});})(c__15823__auto___18629,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

