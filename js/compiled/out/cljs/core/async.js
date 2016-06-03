// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7795 = [];
var len__5726__auto___7801 = arguments.length;
var i__5727__auto___7802 = (0);
while(true){
if((i__5727__auto___7802 < len__5726__auto___7801)){
args7795.push((arguments[i__5727__auto___7802]));

var G__7803 = (i__5727__auto___7802 + (1));
i__5727__auto___7802 = G__7803;
continue;
} else {
}
break;
}

var G__7797 = args7795.length;
switch (G__7797) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7795.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7798 = (function (f,blockable,meta7799){
this.f = f;
this.blockable = blockable;
this.meta7799 = meta7799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7800,meta7799__$1){
var self__ = this;
var _7800__$1 = this;
return (new cljs.core.async.t_cljs$core$async7798(self__.f,self__.blockable,meta7799__$1));
});

cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7800){
var self__ = this;
var _7800__$1 = this;
return self__.meta7799;
});

cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7799","meta7799",1226870621,null)], null);
});

cljs.core.async.t_cljs$core$async7798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7798";

cljs.core.async.t_cljs$core$async7798.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7798");
});

cljs.core.async.__GT_t_cljs$core$async7798 = (function cljs$core$async$__GT_t_cljs$core$async7798(f__$1,blockable__$1,meta7799){
return (new cljs.core.async.t_cljs$core$async7798(f__$1,blockable__$1,meta7799));
});

}

return (new cljs.core.async.t_cljs$core$async7798(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args7807 = [];
var len__5726__auto___7810 = arguments.length;
var i__5727__auto___7811 = (0);
while(true){
if((i__5727__auto___7811 < len__5726__auto___7810)){
args7807.push((arguments[i__5727__auto___7811]));

var G__7812 = (i__5727__auto___7811 + (1));
i__5727__auto___7811 = G__7812;
continue;
} else {
}
break;
}

var G__7809 = args7807.length;
switch (G__7809) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7807.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args7814 = [];
var len__5726__auto___7817 = arguments.length;
var i__5727__auto___7818 = (0);
while(true){
if((i__5727__auto___7818 < len__5726__auto___7817)){
args7814.push((arguments[i__5727__auto___7818]));

var G__7819 = (i__5727__auto___7818 + (1));
i__5727__auto___7818 = G__7819;
continue;
} else {
}
break;
}

var G__7816 = args7814.length;
switch (G__7816) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7814.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args7821 = [];
var len__5726__auto___7824 = arguments.length;
var i__5727__auto___7825 = (0);
while(true){
if((i__5727__auto___7825 < len__5726__auto___7824)){
args7821.push((arguments[i__5727__auto___7825]));

var G__7826 = (i__5727__auto___7825 + (1));
i__5727__auto___7825 = G__7826;
continue;
} else {
}
break;
}

var G__7823 = args7821.length;
switch (G__7823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7821.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7828 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7828);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7828,ret){
return (function (){
return fn1.call(null,val_7828);
});})(val_7828,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args7829 = [];
var len__5726__auto___7832 = arguments.length;
var i__5727__auto___7833 = (0);
while(true){
if((i__5727__auto___7833 < len__5726__auto___7832)){
args7829.push((arguments[i__5727__auto___7833]));

var G__7834 = (i__5727__auto___7833 + (1));
i__5727__auto___7833 = G__7834;
continue;
} else {
}
break;
}

var G__7831 = args7829.length;
switch (G__7831) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7829.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___7836 = n;
var x_7837 = (0);
while(true){
if((x_7837 < n__5571__auto___7836)){
(a[x_7837] = (0));

var G__7838 = (x_7837 + (1));
x_7837 = G__7838;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7839 = (i + (1));
i = G__7839;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7843 = (function (alt_flag,flag,meta7844){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7844 = meta7844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7845,meta7844__$1){
var self__ = this;
var _7845__$1 = this;
return (new cljs.core.async.t_cljs$core$async7843(self__.alt_flag,self__.flag,meta7844__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7845){
var self__ = this;
var _7845__$1 = this;
return self__.meta7844;
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7844","meta7844",806541566,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7843";

cljs.core.async.t_cljs$core$async7843.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7843");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7843 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7843(alt_flag__$1,flag__$1,meta7844){
return (new cljs.core.async.t_cljs$core$async7843(alt_flag__$1,flag__$1,meta7844));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7843(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7849 = (function (alt_handler,flag,cb,meta7850){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7850 = meta7850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7851,meta7850__$1){
var self__ = this;
var _7851__$1 = this;
return (new cljs.core.async.t_cljs$core$async7849(self__.alt_handler,self__.flag,self__.cb,meta7850__$1));
});

cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7851){
var self__ = this;
var _7851__$1 = this;
return self__.meta7850;
});

cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7850","meta7850",-1232968217,null)], null);
});

cljs.core.async.t_cljs$core$async7849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7849";

cljs.core.async.t_cljs$core$async7849.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7849");
});

cljs.core.async.__GT_t_cljs$core$async7849 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7849(alt_handler__$1,flag__$1,cb__$1,meta7850){
return (new cljs.core.async.t_cljs$core$async7849(alt_handler__$1,flag__$1,cb__$1,meta7850));
});

}

return (new cljs.core.async.t_cljs$core$async7849(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7852_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7852_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7853_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7854 = (i + (1));
i = G__7854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5733__auto__ = [];
var len__5726__auto___7860 = arguments.length;
var i__5727__auto___7861 = (0);
while(true){
if((i__5727__auto___7861 < len__5726__auto___7860)){
args__5733__auto__.push((arguments[i__5727__auto___7861]));

var G__7862 = (i__5727__auto___7861 + (1));
i__5727__auto___7861 = G__7862;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7857){
var map__7858 = p__7857;
var map__7858__$1 = ((((!((map__7858 == null)))?((((map__7858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7858):map__7858);
var opts = map__7858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7855){
var G__7856 = cljs.core.first.call(null,seq7855);
var seq7855__$1 = cljs.core.next.call(null,seq7855);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7856,seq7855__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args7863 = [];
var len__5726__auto___7913 = arguments.length;
var i__5727__auto___7914 = (0);
while(true){
if((i__5727__auto___7914 < len__5726__auto___7913)){
args7863.push((arguments[i__5727__auto___7914]));

var G__7915 = (i__5727__auto___7914 + (1));
i__5727__auto___7914 = G__7915;
continue;
} else {
}
break;
}

var G__7865 = args7863.length;
switch (G__7865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7863.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7750__auto___7917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___7917){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___7917){
return (function (state_7889){
var state_val_7890 = (state_7889[(1)]);
if((state_val_7890 === (7))){
var inst_7885 = (state_7889[(2)]);
var state_7889__$1 = state_7889;
var statearr_7891_7918 = state_7889__$1;
(statearr_7891_7918[(2)] = inst_7885);

(statearr_7891_7918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (1))){
var state_7889__$1 = state_7889;
var statearr_7892_7919 = state_7889__$1;
(statearr_7892_7919[(2)] = null);

(statearr_7892_7919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (4))){
var inst_7868 = (state_7889[(7)]);
var inst_7868__$1 = (state_7889[(2)]);
var inst_7869 = (inst_7868__$1 == null);
var state_7889__$1 = (function (){var statearr_7893 = state_7889;
(statearr_7893[(7)] = inst_7868__$1);

return statearr_7893;
})();
if(cljs.core.truth_(inst_7869)){
var statearr_7894_7920 = state_7889__$1;
(statearr_7894_7920[(1)] = (5));

} else {
var statearr_7895_7921 = state_7889__$1;
(statearr_7895_7921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (13))){
var state_7889__$1 = state_7889;
var statearr_7896_7922 = state_7889__$1;
(statearr_7896_7922[(2)] = null);

(statearr_7896_7922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (6))){
var inst_7868 = (state_7889[(7)]);
var state_7889__$1 = state_7889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7889__$1,(11),to,inst_7868);
} else {
if((state_val_7890 === (3))){
var inst_7887 = (state_7889[(2)]);
var state_7889__$1 = state_7889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7889__$1,inst_7887);
} else {
if((state_val_7890 === (12))){
var state_7889__$1 = state_7889;
var statearr_7897_7923 = state_7889__$1;
(statearr_7897_7923[(2)] = null);

(statearr_7897_7923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (2))){
var state_7889__$1 = state_7889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7889__$1,(4),from);
} else {
if((state_val_7890 === (11))){
var inst_7878 = (state_7889[(2)]);
var state_7889__$1 = state_7889;
if(cljs.core.truth_(inst_7878)){
var statearr_7898_7924 = state_7889__$1;
(statearr_7898_7924[(1)] = (12));

} else {
var statearr_7899_7925 = state_7889__$1;
(statearr_7899_7925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (9))){
var state_7889__$1 = state_7889;
var statearr_7900_7926 = state_7889__$1;
(statearr_7900_7926[(2)] = null);

(statearr_7900_7926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (5))){
var state_7889__$1 = state_7889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7901_7927 = state_7889__$1;
(statearr_7901_7927[(1)] = (8));

} else {
var statearr_7902_7928 = state_7889__$1;
(statearr_7902_7928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (14))){
var inst_7883 = (state_7889[(2)]);
var state_7889__$1 = state_7889;
var statearr_7903_7929 = state_7889__$1;
(statearr_7903_7929[(2)] = inst_7883);

(statearr_7903_7929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (10))){
var inst_7875 = (state_7889[(2)]);
var state_7889__$1 = state_7889;
var statearr_7904_7930 = state_7889__$1;
(statearr_7904_7930[(2)] = inst_7875);

(statearr_7904_7930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7890 === (8))){
var inst_7872 = cljs.core.async.close_BANG_.call(null,to);
var state_7889__$1 = state_7889;
var statearr_7905_7931 = state_7889__$1;
(statearr_7905_7931[(2)] = inst_7872);

(statearr_7905_7931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___7917))
;
return ((function (switch__7638__auto__,c__7750__auto___7917){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_7909 = [null,null,null,null,null,null,null,null];
(statearr_7909[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_7909[(1)] = (1));

return statearr_7909;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_7889){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_7889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e7910){if((e7910 instanceof Object)){
var ex__7642__auto__ = e7910;
var statearr_7911_7932 = state_7889;
(statearr_7911_7932[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7933 = state_7889;
state_7889 = G__7933;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_7889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_7889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___7917))
})();
var state__7752__auto__ = (function (){var statearr_7912 = f__7751__auto__.call(null);
(statearr_7912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___7917);

return statearr_7912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___7917))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__8117){
var vec__8118 = p__8117;
var v = cljs.core.nth.call(null,vec__8118,(0),null);
var p = cljs.core.nth.call(null,vec__8118,(1),null);
var job = vec__8118;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7750__auto___8300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results){
return (function (state_8123){
var state_val_8124 = (state_8123[(1)]);
if((state_val_8124 === (1))){
var state_8123__$1 = state_8123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8123__$1,(2),res,v);
} else {
if((state_val_8124 === (2))){
var inst_8120 = (state_8123[(2)]);
var inst_8121 = cljs.core.async.close_BANG_.call(null,res);
var state_8123__$1 = (function (){var statearr_8125 = state_8123;
(statearr_8125[(7)] = inst_8120);

return statearr_8125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8123__$1,inst_8121);
} else {
return null;
}
}
});})(c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results))
;
return ((function (switch__7638__auto__,c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_8129 = [null,null,null,null,null,null,null,null];
(statearr_8129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__);

(statearr_8129[(1)] = (1));

return statearr_8129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1 = (function (state_8123){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8130){if((e8130 instanceof Object)){
var ex__7642__auto__ = e8130;
var statearr_8131_8301 = state_8123;
(statearr_8131_8301[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8302 = state_8123;
state_8123 = G__8302;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = function(state_8123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1.call(this,state_8123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results))
})();
var state__7752__auto__ = (function (){var statearr_8132 = f__7751__auto__.call(null);
(statearr_8132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___8300);

return statearr_8132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___8300,res,vec__8118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8133){
var vec__8134 = p__8133;
var v = cljs.core.nth.call(null,vec__8134,(0),null);
var p = cljs.core.nth.call(null,vec__8134,(1),null);
var job = vec__8134;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___8303 = n;
var __8304 = (0);
while(true){
if((__8304 < n__5571__auto___8303)){
var G__8135_8305 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8135_8305) {
case "compute":
var c__7750__auto___8307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8304,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (__8304,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function (state_8148){
var state_val_8149 = (state_8148[(1)]);
if((state_val_8149 === (1))){
var state_8148__$1 = state_8148;
var statearr_8150_8308 = state_8148__$1;
(statearr_8150_8308[(2)] = null);

(statearr_8150_8308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8149 === (2))){
var state_8148__$1 = state_8148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8148__$1,(4),jobs);
} else {
if((state_val_8149 === (3))){
var inst_8146 = (state_8148[(2)]);
var state_8148__$1 = state_8148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8148__$1,inst_8146);
} else {
if((state_val_8149 === (4))){
var inst_8138 = (state_8148[(2)]);
var inst_8139 = process.call(null,inst_8138);
var state_8148__$1 = state_8148;
if(cljs.core.truth_(inst_8139)){
var statearr_8151_8309 = state_8148__$1;
(statearr_8151_8309[(1)] = (5));

} else {
var statearr_8152_8310 = state_8148__$1;
(statearr_8152_8310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8149 === (5))){
var state_8148__$1 = state_8148;
var statearr_8153_8311 = state_8148__$1;
(statearr_8153_8311[(2)] = null);

(statearr_8153_8311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8149 === (6))){
var state_8148__$1 = state_8148;
var statearr_8154_8312 = state_8148__$1;
(statearr_8154_8312[(2)] = null);

(statearr_8154_8312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8149 === (7))){
var inst_8144 = (state_8148[(2)]);
var state_8148__$1 = state_8148;
var statearr_8155_8313 = state_8148__$1;
(statearr_8155_8313[(2)] = inst_8144);

(statearr_8155_8313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__8304,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
;
return ((function (__8304,switch__7638__auto__,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_8159 = [null,null,null,null,null,null,null];
(statearr_8159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__);

(statearr_8159[(1)] = (1));

return statearr_8159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1 = (function (state_8148){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8160){if((e8160 instanceof Object)){
var ex__7642__auto__ = e8160;
var statearr_8161_8314 = state_8148;
(statearr_8161_8314[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8315 = state_8148;
state_8148 = G__8315;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = function(state_8148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1.call(this,state_8148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__;
})()
;})(__8304,switch__7638__auto__,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
})();
var state__7752__auto__ = (function (){var statearr_8162 = f__7751__auto__.call(null);
(statearr_8162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___8307);

return statearr_8162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(__8304,c__7750__auto___8307,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
);


break;
case "async":
var c__7750__auto___8316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8304,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (__8304,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function (state_8175){
var state_val_8176 = (state_8175[(1)]);
if((state_val_8176 === (1))){
var state_8175__$1 = state_8175;
var statearr_8177_8317 = state_8175__$1;
(statearr_8177_8317[(2)] = null);

(statearr_8177_8317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8176 === (2))){
var state_8175__$1 = state_8175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8175__$1,(4),jobs);
} else {
if((state_val_8176 === (3))){
var inst_8173 = (state_8175[(2)]);
var state_8175__$1 = state_8175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8175__$1,inst_8173);
} else {
if((state_val_8176 === (4))){
var inst_8165 = (state_8175[(2)]);
var inst_8166 = async.call(null,inst_8165);
var state_8175__$1 = state_8175;
if(cljs.core.truth_(inst_8166)){
var statearr_8178_8318 = state_8175__$1;
(statearr_8178_8318[(1)] = (5));

} else {
var statearr_8179_8319 = state_8175__$1;
(statearr_8179_8319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8176 === (5))){
var state_8175__$1 = state_8175;
var statearr_8180_8320 = state_8175__$1;
(statearr_8180_8320[(2)] = null);

(statearr_8180_8320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8176 === (6))){
var state_8175__$1 = state_8175;
var statearr_8181_8321 = state_8175__$1;
(statearr_8181_8321[(2)] = null);

(statearr_8181_8321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8176 === (7))){
var inst_8171 = (state_8175[(2)]);
var state_8175__$1 = state_8175;
var statearr_8182_8322 = state_8175__$1;
(statearr_8182_8322[(2)] = inst_8171);

(statearr_8182_8322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__8304,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
;
return ((function (__8304,switch__7638__auto__,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_8186 = [null,null,null,null,null,null,null];
(statearr_8186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__);

(statearr_8186[(1)] = (1));

return statearr_8186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1 = (function (state_8175){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8187){if((e8187 instanceof Object)){
var ex__7642__auto__ = e8187;
var statearr_8188_8323 = state_8175;
(statearr_8188_8323[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8324 = state_8175;
state_8175 = G__8324;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = function(state_8175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1.call(this,state_8175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__;
})()
;})(__8304,switch__7638__auto__,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
})();
var state__7752__auto__ = (function (){var statearr_8189 = f__7751__auto__.call(null);
(statearr_8189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___8316);

return statearr_8189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(__8304,c__7750__auto___8316,G__8135_8305,n__5571__auto___8303,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8325 = (__8304 + (1));
__8304 = G__8325;
continue;
} else {
}
break;
}

var c__7750__auto___8326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___8326,jobs,results,process,async){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___8326,jobs,results,process,async){
return (function (state_8211){
var state_val_8212 = (state_8211[(1)]);
if((state_val_8212 === (1))){
var state_8211__$1 = state_8211;
var statearr_8213_8327 = state_8211__$1;
(statearr_8213_8327[(2)] = null);

(statearr_8213_8327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8212 === (2))){
var state_8211__$1 = state_8211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8211__$1,(4),from);
} else {
if((state_val_8212 === (3))){
var inst_8209 = (state_8211[(2)]);
var state_8211__$1 = state_8211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8211__$1,inst_8209);
} else {
if((state_val_8212 === (4))){
var inst_8192 = (state_8211[(7)]);
var inst_8192__$1 = (state_8211[(2)]);
var inst_8193 = (inst_8192__$1 == null);
var state_8211__$1 = (function (){var statearr_8214 = state_8211;
(statearr_8214[(7)] = inst_8192__$1);

return statearr_8214;
})();
if(cljs.core.truth_(inst_8193)){
var statearr_8215_8328 = state_8211__$1;
(statearr_8215_8328[(1)] = (5));

} else {
var statearr_8216_8329 = state_8211__$1;
(statearr_8216_8329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8212 === (5))){
var inst_8195 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8211__$1 = state_8211;
var statearr_8217_8330 = state_8211__$1;
(statearr_8217_8330[(2)] = inst_8195);

(statearr_8217_8330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8212 === (6))){
var inst_8192 = (state_8211[(7)]);
var inst_8197 = (state_8211[(8)]);
var inst_8197__$1 = cljs.core.async.chan.call(null,(1));
var inst_8198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8199 = [inst_8192,inst_8197__$1];
var inst_8200 = (new cljs.core.PersistentVector(null,2,(5),inst_8198,inst_8199,null));
var state_8211__$1 = (function (){var statearr_8218 = state_8211;
(statearr_8218[(8)] = inst_8197__$1);

return statearr_8218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8211__$1,(8),jobs,inst_8200);
} else {
if((state_val_8212 === (7))){
var inst_8207 = (state_8211[(2)]);
var state_8211__$1 = state_8211;
var statearr_8219_8331 = state_8211__$1;
(statearr_8219_8331[(2)] = inst_8207);

(statearr_8219_8331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8212 === (8))){
var inst_8197 = (state_8211[(8)]);
var inst_8202 = (state_8211[(2)]);
var state_8211__$1 = (function (){var statearr_8220 = state_8211;
(statearr_8220[(9)] = inst_8202);

return statearr_8220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8211__$1,(9),results,inst_8197);
} else {
if((state_val_8212 === (9))){
var inst_8204 = (state_8211[(2)]);
var state_8211__$1 = (function (){var statearr_8221 = state_8211;
(statearr_8221[(10)] = inst_8204);

return statearr_8221;
})();
var statearr_8222_8332 = state_8211__$1;
(statearr_8222_8332[(2)] = null);

(statearr_8222_8332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___8326,jobs,results,process,async))
;
return ((function (switch__7638__auto__,c__7750__auto___8326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_8226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__);

(statearr_8226[(1)] = (1));

return statearr_8226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1 = (function (state_8211){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8227){if((e8227 instanceof Object)){
var ex__7642__auto__ = e8227;
var statearr_8228_8333 = state_8211;
(statearr_8228_8333[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8334 = state_8211;
state_8211 = G__8334;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = function(state_8211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1.call(this,state_8211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___8326,jobs,results,process,async))
})();
var state__7752__auto__ = (function (){var statearr_8229 = f__7751__auto__.call(null);
(statearr_8229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___8326);

return statearr_8229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___8326,jobs,results,process,async))
);


var c__7750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto__,jobs,results,process,async){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto__,jobs,results,process,async){
return (function (state_8267){
var state_val_8268 = (state_8267[(1)]);
if((state_val_8268 === (7))){
var inst_8263 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8269_8335 = state_8267__$1;
(statearr_8269_8335[(2)] = inst_8263);

(statearr_8269_8335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (20))){
var state_8267__$1 = state_8267;
var statearr_8270_8336 = state_8267__$1;
(statearr_8270_8336[(2)] = null);

(statearr_8270_8336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (1))){
var state_8267__$1 = state_8267;
var statearr_8271_8337 = state_8267__$1;
(statearr_8271_8337[(2)] = null);

(statearr_8271_8337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (4))){
var inst_8232 = (state_8267[(7)]);
var inst_8232__$1 = (state_8267[(2)]);
var inst_8233 = (inst_8232__$1 == null);
var state_8267__$1 = (function (){var statearr_8272 = state_8267;
(statearr_8272[(7)] = inst_8232__$1);

return statearr_8272;
})();
if(cljs.core.truth_(inst_8233)){
var statearr_8273_8338 = state_8267__$1;
(statearr_8273_8338[(1)] = (5));

} else {
var statearr_8274_8339 = state_8267__$1;
(statearr_8274_8339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (15))){
var inst_8245 = (state_8267[(8)]);
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8267__$1,(18),to,inst_8245);
} else {
if((state_val_8268 === (21))){
var inst_8258 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8275_8340 = state_8267__$1;
(statearr_8275_8340[(2)] = inst_8258);

(statearr_8275_8340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (13))){
var inst_8260 = (state_8267[(2)]);
var state_8267__$1 = (function (){var statearr_8276 = state_8267;
(statearr_8276[(9)] = inst_8260);

return statearr_8276;
})();
var statearr_8277_8341 = state_8267__$1;
(statearr_8277_8341[(2)] = null);

(statearr_8277_8341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (6))){
var inst_8232 = (state_8267[(7)]);
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8267__$1,(11),inst_8232);
} else {
if((state_val_8268 === (17))){
var inst_8253 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
if(cljs.core.truth_(inst_8253)){
var statearr_8278_8342 = state_8267__$1;
(statearr_8278_8342[(1)] = (19));

} else {
var statearr_8279_8343 = state_8267__$1;
(statearr_8279_8343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (3))){
var inst_8265 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8267__$1,inst_8265);
} else {
if((state_val_8268 === (12))){
var inst_8242 = (state_8267[(10)]);
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8267__$1,(14),inst_8242);
} else {
if((state_val_8268 === (2))){
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8267__$1,(4),results);
} else {
if((state_val_8268 === (19))){
var state_8267__$1 = state_8267;
var statearr_8280_8344 = state_8267__$1;
(statearr_8280_8344[(2)] = null);

(statearr_8280_8344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (11))){
var inst_8242 = (state_8267[(2)]);
var state_8267__$1 = (function (){var statearr_8281 = state_8267;
(statearr_8281[(10)] = inst_8242);

return statearr_8281;
})();
var statearr_8282_8345 = state_8267__$1;
(statearr_8282_8345[(2)] = null);

(statearr_8282_8345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (9))){
var state_8267__$1 = state_8267;
var statearr_8283_8346 = state_8267__$1;
(statearr_8283_8346[(2)] = null);

(statearr_8283_8346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (5))){
var state_8267__$1 = state_8267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8284_8347 = state_8267__$1;
(statearr_8284_8347[(1)] = (8));

} else {
var statearr_8285_8348 = state_8267__$1;
(statearr_8285_8348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (14))){
var inst_8245 = (state_8267[(8)]);
var inst_8247 = (state_8267[(11)]);
var inst_8245__$1 = (state_8267[(2)]);
var inst_8246 = (inst_8245__$1 == null);
var inst_8247__$1 = cljs.core.not.call(null,inst_8246);
var state_8267__$1 = (function (){var statearr_8286 = state_8267;
(statearr_8286[(8)] = inst_8245__$1);

(statearr_8286[(11)] = inst_8247__$1);

return statearr_8286;
})();
if(inst_8247__$1){
var statearr_8287_8349 = state_8267__$1;
(statearr_8287_8349[(1)] = (15));

} else {
var statearr_8288_8350 = state_8267__$1;
(statearr_8288_8350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (16))){
var inst_8247 = (state_8267[(11)]);
var state_8267__$1 = state_8267;
var statearr_8289_8351 = state_8267__$1;
(statearr_8289_8351[(2)] = inst_8247);

(statearr_8289_8351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (10))){
var inst_8239 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8290_8352 = state_8267__$1;
(statearr_8290_8352[(2)] = inst_8239);

(statearr_8290_8352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (18))){
var inst_8250 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8291_8353 = state_8267__$1;
(statearr_8291_8353[(2)] = inst_8250);

(statearr_8291_8353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8268 === (8))){
var inst_8236 = cljs.core.async.close_BANG_.call(null,to);
var state_8267__$1 = state_8267;
var statearr_8292_8354 = state_8267__$1;
(statearr_8292_8354[(2)] = inst_8236);

(statearr_8292_8354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto__,jobs,results,process,async))
;
return ((function (switch__7638__auto__,c__7750__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_8296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__);

(statearr_8296[(1)] = (1));

return statearr_8296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1 = (function (state_8267){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8297){if((e8297 instanceof Object)){
var ex__7642__auto__ = e8297;
var statearr_8298_8355 = state_8267;
(statearr_8298_8355[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8356 = state_8267;
state_8267 = G__8356;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__ = function(state_8267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1.call(this,state_8267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto__,jobs,results,process,async))
})();
var state__7752__auto__ = (function (){var statearr_8299 = f__7751__auto__.call(null);
(statearr_8299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto__);

return statearr_8299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto__,jobs,results,process,async))
);

return c__7750__auto__;
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
var args8357 = [];
var len__5726__auto___8360 = arguments.length;
var i__5727__auto___8361 = (0);
while(true){
if((i__5727__auto___8361 < len__5726__auto___8360)){
args8357.push((arguments[i__5727__auto___8361]));

var G__8362 = (i__5727__auto___8361 + (1));
i__5727__auto___8361 = G__8362;
continue;
} else {
}
break;
}

var G__8359 = args8357.length;
switch (G__8359) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8357.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args8364 = [];
var len__5726__auto___8367 = arguments.length;
var i__5727__auto___8368 = (0);
while(true){
if((i__5727__auto___8368 < len__5726__auto___8367)){
args8364.push((arguments[i__5727__auto___8368]));

var G__8369 = (i__5727__auto___8368 + (1));
i__5727__auto___8368 = G__8369;
continue;
} else {
}
break;
}

var G__8366 = args8364.length;
switch (G__8366) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8364.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args8371 = [];
var len__5726__auto___8424 = arguments.length;
var i__5727__auto___8425 = (0);
while(true){
if((i__5727__auto___8425 < len__5726__auto___8424)){
args8371.push((arguments[i__5727__auto___8425]));

var G__8426 = (i__5727__auto___8425 + (1));
i__5727__auto___8425 = G__8426;
continue;
} else {
}
break;
}

var G__8373 = args8371.length;
switch (G__8373) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8371.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7750__auto___8428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___8428,tc,fc){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___8428,tc,fc){
return (function (state_8399){
var state_val_8400 = (state_8399[(1)]);
if((state_val_8400 === (7))){
var inst_8395 = (state_8399[(2)]);
var state_8399__$1 = state_8399;
var statearr_8401_8429 = state_8399__$1;
(statearr_8401_8429[(2)] = inst_8395);

(statearr_8401_8429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (1))){
var state_8399__$1 = state_8399;
var statearr_8402_8430 = state_8399__$1;
(statearr_8402_8430[(2)] = null);

(statearr_8402_8430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (4))){
var inst_8376 = (state_8399[(7)]);
var inst_8376__$1 = (state_8399[(2)]);
var inst_8377 = (inst_8376__$1 == null);
var state_8399__$1 = (function (){var statearr_8403 = state_8399;
(statearr_8403[(7)] = inst_8376__$1);

return statearr_8403;
})();
if(cljs.core.truth_(inst_8377)){
var statearr_8404_8431 = state_8399__$1;
(statearr_8404_8431[(1)] = (5));

} else {
var statearr_8405_8432 = state_8399__$1;
(statearr_8405_8432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (13))){
var state_8399__$1 = state_8399;
var statearr_8406_8433 = state_8399__$1;
(statearr_8406_8433[(2)] = null);

(statearr_8406_8433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (6))){
var inst_8376 = (state_8399[(7)]);
var inst_8382 = p.call(null,inst_8376);
var state_8399__$1 = state_8399;
if(cljs.core.truth_(inst_8382)){
var statearr_8407_8434 = state_8399__$1;
(statearr_8407_8434[(1)] = (9));

} else {
var statearr_8408_8435 = state_8399__$1;
(statearr_8408_8435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (3))){
var inst_8397 = (state_8399[(2)]);
var state_8399__$1 = state_8399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8399__$1,inst_8397);
} else {
if((state_val_8400 === (12))){
var state_8399__$1 = state_8399;
var statearr_8409_8436 = state_8399__$1;
(statearr_8409_8436[(2)] = null);

(statearr_8409_8436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (2))){
var state_8399__$1 = state_8399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8399__$1,(4),ch);
} else {
if((state_val_8400 === (11))){
var inst_8376 = (state_8399[(7)]);
var inst_8386 = (state_8399[(2)]);
var state_8399__$1 = state_8399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8399__$1,(8),inst_8386,inst_8376);
} else {
if((state_val_8400 === (9))){
var state_8399__$1 = state_8399;
var statearr_8410_8437 = state_8399__$1;
(statearr_8410_8437[(2)] = tc);

(statearr_8410_8437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (5))){
var inst_8379 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8380 = cljs.core.async.close_BANG_.call(null,fc);
var state_8399__$1 = (function (){var statearr_8411 = state_8399;
(statearr_8411[(8)] = inst_8379);

return statearr_8411;
})();
var statearr_8412_8438 = state_8399__$1;
(statearr_8412_8438[(2)] = inst_8380);

(statearr_8412_8438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (14))){
var inst_8393 = (state_8399[(2)]);
var state_8399__$1 = state_8399;
var statearr_8413_8439 = state_8399__$1;
(statearr_8413_8439[(2)] = inst_8393);

(statearr_8413_8439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (10))){
var state_8399__$1 = state_8399;
var statearr_8414_8440 = state_8399__$1;
(statearr_8414_8440[(2)] = fc);

(statearr_8414_8440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8400 === (8))){
var inst_8388 = (state_8399[(2)]);
var state_8399__$1 = state_8399;
if(cljs.core.truth_(inst_8388)){
var statearr_8415_8441 = state_8399__$1;
(statearr_8415_8441[(1)] = (12));

} else {
var statearr_8416_8442 = state_8399__$1;
(statearr_8416_8442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___8428,tc,fc))
;
return ((function (switch__7638__auto__,c__7750__auto___8428,tc,fc){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_8420 = [null,null,null,null,null,null,null,null,null];
(statearr_8420[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_8420[(1)] = (1));

return statearr_8420;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_8399){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8421){if((e8421 instanceof Object)){
var ex__7642__auto__ = e8421;
var statearr_8422_8443 = state_8399;
(statearr_8422_8443[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8444 = state_8399;
state_8399 = G__8444;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_8399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_8399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___8428,tc,fc))
})();
var state__7752__auto__ = (function (){var statearr_8423 = f__7751__auto__.call(null);
(statearr_8423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___8428);

return statearr_8423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___8428,tc,fc))
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
var c__7750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto__){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto__){
return (function (state_8508){
var state_val_8509 = (state_8508[(1)]);
if((state_val_8509 === (7))){
var inst_8504 = (state_8508[(2)]);
var state_8508__$1 = state_8508;
var statearr_8510_8531 = state_8508__$1;
(statearr_8510_8531[(2)] = inst_8504);

(statearr_8510_8531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (1))){
var inst_8488 = init;
var state_8508__$1 = (function (){var statearr_8511 = state_8508;
(statearr_8511[(7)] = inst_8488);

return statearr_8511;
})();
var statearr_8512_8532 = state_8508__$1;
(statearr_8512_8532[(2)] = null);

(statearr_8512_8532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (4))){
var inst_8491 = (state_8508[(8)]);
var inst_8491__$1 = (state_8508[(2)]);
var inst_8492 = (inst_8491__$1 == null);
var state_8508__$1 = (function (){var statearr_8513 = state_8508;
(statearr_8513[(8)] = inst_8491__$1);

return statearr_8513;
})();
if(cljs.core.truth_(inst_8492)){
var statearr_8514_8533 = state_8508__$1;
(statearr_8514_8533[(1)] = (5));

} else {
var statearr_8515_8534 = state_8508__$1;
(statearr_8515_8534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (6))){
var inst_8488 = (state_8508[(7)]);
var inst_8491 = (state_8508[(8)]);
var inst_8495 = (state_8508[(9)]);
var inst_8495__$1 = f.call(null,inst_8488,inst_8491);
var inst_8496 = cljs.core.reduced_QMARK_.call(null,inst_8495__$1);
var state_8508__$1 = (function (){var statearr_8516 = state_8508;
(statearr_8516[(9)] = inst_8495__$1);

return statearr_8516;
})();
if(inst_8496){
var statearr_8517_8535 = state_8508__$1;
(statearr_8517_8535[(1)] = (8));

} else {
var statearr_8518_8536 = state_8508__$1;
(statearr_8518_8536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (3))){
var inst_8506 = (state_8508[(2)]);
var state_8508__$1 = state_8508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8508__$1,inst_8506);
} else {
if((state_val_8509 === (2))){
var state_8508__$1 = state_8508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8508__$1,(4),ch);
} else {
if((state_val_8509 === (9))){
var inst_8495 = (state_8508[(9)]);
var inst_8488 = inst_8495;
var state_8508__$1 = (function (){var statearr_8519 = state_8508;
(statearr_8519[(7)] = inst_8488);

return statearr_8519;
})();
var statearr_8520_8537 = state_8508__$1;
(statearr_8520_8537[(2)] = null);

(statearr_8520_8537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (5))){
var inst_8488 = (state_8508[(7)]);
var state_8508__$1 = state_8508;
var statearr_8521_8538 = state_8508__$1;
(statearr_8521_8538[(2)] = inst_8488);

(statearr_8521_8538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (10))){
var inst_8502 = (state_8508[(2)]);
var state_8508__$1 = state_8508;
var statearr_8522_8539 = state_8508__$1;
(statearr_8522_8539[(2)] = inst_8502);

(statearr_8522_8539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8509 === (8))){
var inst_8495 = (state_8508[(9)]);
var inst_8498 = cljs.core.deref.call(null,inst_8495);
var state_8508__$1 = state_8508;
var statearr_8523_8540 = state_8508__$1;
(statearr_8523_8540[(2)] = inst_8498);

(statearr_8523_8540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto__))
;
return ((function (switch__7638__auto__,c__7750__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7639__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7639__auto____0 = (function (){
var statearr_8527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8527[(0)] = cljs$core$async$reduce_$_state_machine__7639__auto__);

(statearr_8527[(1)] = (1));

return statearr_8527;
});
var cljs$core$async$reduce_$_state_machine__7639__auto____1 = (function (state_8508){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8528){if((e8528 instanceof Object)){
var ex__7642__auto__ = e8528;
var statearr_8529_8541 = state_8508;
(statearr_8529_8541[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8542 = state_8508;
state_8508 = G__8542;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7639__auto__ = function(state_8508){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7639__auto____1.call(this,state_8508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7639__auto____0;
cljs$core$async$reduce_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7639__auto____1;
return cljs$core$async$reduce_$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto__))
})();
var state__7752__auto__ = (function (){var statearr_8530 = f__7751__auto__.call(null);
(statearr_8530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto__);

return statearr_8530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto__))
);

return c__7750__auto__;
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
var args8543 = [];
var len__5726__auto___8595 = arguments.length;
var i__5727__auto___8596 = (0);
while(true){
if((i__5727__auto___8596 < len__5726__auto___8595)){
args8543.push((arguments[i__5727__auto___8596]));

var G__8597 = (i__5727__auto___8596 + (1));
i__5727__auto___8596 = G__8597;
continue;
} else {
}
break;
}

var G__8545 = args8543.length;
switch (G__8545) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8543.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto__){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto__){
return (function (state_8570){
var state_val_8571 = (state_8570[(1)]);
if((state_val_8571 === (7))){
var inst_8552 = (state_8570[(2)]);
var state_8570__$1 = state_8570;
var statearr_8572_8599 = state_8570__$1;
(statearr_8572_8599[(2)] = inst_8552);

(statearr_8572_8599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (1))){
var inst_8546 = cljs.core.seq.call(null,coll);
var inst_8547 = inst_8546;
var state_8570__$1 = (function (){var statearr_8573 = state_8570;
(statearr_8573[(7)] = inst_8547);

return statearr_8573;
})();
var statearr_8574_8600 = state_8570__$1;
(statearr_8574_8600[(2)] = null);

(statearr_8574_8600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (4))){
var inst_8547 = (state_8570[(7)]);
var inst_8550 = cljs.core.first.call(null,inst_8547);
var state_8570__$1 = state_8570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8570__$1,(7),ch,inst_8550);
} else {
if((state_val_8571 === (13))){
var inst_8564 = (state_8570[(2)]);
var state_8570__$1 = state_8570;
var statearr_8575_8601 = state_8570__$1;
(statearr_8575_8601[(2)] = inst_8564);

(statearr_8575_8601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (6))){
var inst_8555 = (state_8570[(2)]);
var state_8570__$1 = state_8570;
if(cljs.core.truth_(inst_8555)){
var statearr_8576_8602 = state_8570__$1;
(statearr_8576_8602[(1)] = (8));

} else {
var statearr_8577_8603 = state_8570__$1;
(statearr_8577_8603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (3))){
var inst_8568 = (state_8570[(2)]);
var state_8570__$1 = state_8570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8570__$1,inst_8568);
} else {
if((state_val_8571 === (12))){
var state_8570__$1 = state_8570;
var statearr_8578_8604 = state_8570__$1;
(statearr_8578_8604[(2)] = null);

(statearr_8578_8604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (2))){
var inst_8547 = (state_8570[(7)]);
var state_8570__$1 = state_8570;
if(cljs.core.truth_(inst_8547)){
var statearr_8579_8605 = state_8570__$1;
(statearr_8579_8605[(1)] = (4));

} else {
var statearr_8580_8606 = state_8570__$1;
(statearr_8580_8606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (11))){
var inst_8561 = cljs.core.async.close_BANG_.call(null,ch);
var state_8570__$1 = state_8570;
var statearr_8581_8607 = state_8570__$1;
(statearr_8581_8607[(2)] = inst_8561);

(statearr_8581_8607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (9))){
var state_8570__$1 = state_8570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8582_8608 = state_8570__$1;
(statearr_8582_8608[(1)] = (11));

} else {
var statearr_8583_8609 = state_8570__$1;
(statearr_8583_8609[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (5))){
var inst_8547 = (state_8570[(7)]);
var state_8570__$1 = state_8570;
var statearr_8584_8610 = state_8570__$1;
(statearr_8584_8610[(2)] = inst_8547);

(statearr_8584_8610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (10))){
var inst_8566 = (state_8570[(2)]);
var state_8570__$1 = state_8570;
var statearr_8585_8611 = state_8570__$1;
(statearr_8585_8611[(2)] = inst_8566);

(statearr_8585_8611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8571 === (8))){
var inst_8547 = (state_8570[(7)]);
var inst_8557 = cljs.core.next.call(null,inst_8547);
var inst_8547__$1 = inst_8557;
var state_8570__$1 = (function (){var statearr_8586 = state_8570;
(statearr_8586[(7)] = inst_8547__$1);

return statearr_8586;
})();
var statearr_8587_8612 = state_8570__$1;
(statearr_8587_8612[(2)] = null);

(statearr_8587_8612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto__))
;
return ((function (switch__7638__auto__,c__7750__auto__){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_8591 = [null,null,null,null,null,null,null,null];
(statearr_8591[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_8591[(1)] = (1));

return statearr_8591;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_8570){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e8592){if((e8592 instanceof Object)){
var ex__7642__auto__ = e8592;
var statearr_8593_8613 = state_8570;
(statearr_8593_8613[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8614 = state_8570;
state_8570 = G__8614;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_8570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_8570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto__))
})();
var state__7752__auto__ = (function (){var statearr_8594 = f__7751__auto__.call(null);
(statearr_8594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto__);

return statearr_8594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto__))
);

return c__7750__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8836 = (function (mult,ch,cs,meta8837){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8837 = meta8837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8838,meta8837__$1){
var self__ = this;
var _8838__$1 = this;
return (new cljs.core.async.t_cljs$core$async8836(self__.mult,self__.ch,self__.cs,meta8837__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8838){
var self__ = this;
var _8838__$1 = this;
return self__.meta8837;
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8837","meta8837",-1340608888,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8836";

cljs.core.async.t_cljs$core$async8836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8836");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8836 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8836(mult__$1,ch__$1,cs__$1,meta8837){
return (new cljs.core.async.t_cljs$core$async8836(mult__$1,ch__$1,cs__$1,meta8837));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8836(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7750__auto___9057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9057,cs,m,dchan,dctr,done){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9057,cs,m,dchan,dctr,done){
return (function (state_8969){
var state_val_8970 = (state_8969[(1)]);
if((state_val_8970 === (7))){
var inst_8965 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_8971_9058 = state_8969__$1;
(statearr_8971_9058[(2)] = inst_8965);

(statearr_8971_9058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (20))){
var inst_8870 = (state_8969[(7)]);
var inst_8880 = cljs.core.first.call(null,inst_8870);
var inst_8881 = cljs.core.nth.call(null,inst_8880,(0),null);
var inst_8882 = cljs.core.nth.call(null,inst_8880,(1),null);
var state_8969__$1 = (function (){var statearr_8972 = state_8969;
(statearr_8972[(8)] = inst_8881);

return statearr_8972;
})();
if(cljs.core.truth_(inst_8882)){
var statearr_8973_9059 = state_8969__$1;
(statearr_8973_9059[(1)] = (22));

} else {
var statearr_8974_9060 = state_8969__$1;
(statearr_8974_9060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (27))){
var inst_8910 = (state_8969[(9)]);
var inst_8917 = (state_8969[(10)]);
var inst_8912 = (state_8969[(11)]);
var inst_8841 = (state_8969[(12)]);
var inst_8917__$1 = cljs.core._nth.call(null,inst_8910,inst_8912);
var inst_8918 = cljs.core.async.put_BANG_.call(null,inst_8917__$1,inst_8841,done);
var state_8969__$1 = (function (){var statearr_8975 = state_8969;
(statearr_8975[(10)] = inst_8917__$1);

return statearr_8975;
})();
if(cljs.core.truth_(inst_8918)){
var statearr_8976_9061 = state_8969__$1;
(statearr_8976_9061[(1)] = (30));

} else {
var statearr_8977_9062 = state_8969__$1;
(statearr_8977_9062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (1))){
var state_8969__$1 = state_8969;
var statearr_8978_9063 = state_8969__$1;
(statearr_8978_9063[(2)] = null);

(statearr_8978_9063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (24))){
var inst_8870 = (state_8969[(7)]);
var inst_8887 = (state_8969[(2)]);
var inst_8888 = cljs.core.next.call(null,inst_8870);
var inst_8850 = inst_8888;
var inst_8851 = null;
var inst_8852 = (0);
var inst_8853 = (0);
var state_8969__$1 = (function (){var statearr_8979 = state_8969;
(statearr_8979[(13)] = inst_8852);

(statearr_8979[(14)] = inst_8851);

(statearr_8979[(15)] = inst_8853);

(statearr_8979[(16)] = inst_8887);

(statearr_8979[(17)] = inst_8850);

return statearr_8979;
})();
var statearr_8980_9064 = state_8969__$1;
(statearr_8980_9064[(2)] = null);

(statearr_8980_9064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (39))){
var state_8969__$1 = state_8969;
var statearr_8984_9065 = state_8969__$1;
(statearr_8984_9065[(2)] = null);

(statearr_8984_9065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (4))){
var inst_8841 = (state_8969[(12)]);
var inst_8841__$1 = (state_8969[(2)]);
var inst_8842 = (inst_8841__$1 == null);
var state_8969__$1 = (function (){var statearr_8985 = state_8969;
(statearr_8985[(12)] = inst_8841__$1);

return statearr_8985;
})();
if(cljs.core.truth_(inst_8842)){
var statearr_8986_9066 = state_8969__$1;
(statearr_8986_9066[(1)] = (5));

} else {
var statearr_8987_9067 = state_8969__$1;
(statearr_8987_9067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (15))){
var inst_8852 = (state_8969[(13)]);
var inst_8851 = (state_8969[(14)]);
var inst_8853 = (state_8969[(15)]);
var inst_8850 = (state_8969[(17)]);
var inst_8866 = (state_8969[(2)]);
var inst_8867 = (inst_8853 + (1));
var tmp8981 = inst_8852;
var tmp8982 = inst_8851;
var tmp8983 = inst_8850;
var inst_8850__$1 = tmp8983;
var inst_8851__$1 = tmp8982;
var inst_8852__$1 = tmp8981;
var inst_8853__$1 = inst_8867;
var state_8969__$1 = (function (){var statearr_8988 = state_8969;
(statearr_8988[(13)] = inst_8852__$1);

(statearr_8988[(14)] = inst_8851__$1);

(statearr_8988[(15)] = inst_8853__$1);

(statearr_8988[(18)] = inst_8866);

(statearr_8988[(17)] = inst_8850__$1);

return statearr_8988;
})();
var statearr_8989_9068 = state_8969__$1;
(statearr_8989_9068[(2)] = null);

(statearr_8989_9068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (21))){
var inst_8891 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_8993_9069 = state_8969__$1;
(statearr_8993_9069[(2)] = inst_8891);

(statearr_8993_9069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (31))){
var inst_8917 = (state_8969[(10)]);
var inst_8921 = done.call(null,null);
var inst_8922 = cljs.core.async.untap_STAR_.call(null,m,inst_8917);
var state_8969__$1 = (function (){var statearr_8994 = state_8969;
(statearr_8994[(19)] = inst_8921);

return statearr_8994;
})();
var statearr_8995_9070 = state_8969__$1;
(statearr_8995_9070[(2)] = inst_8922);

(statearr_8995_9070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (32))){
var inst_8910 = (state_8969[(9)]);
var inst_8912 = (state_8969[(11)]);
var inst_8909 = (state_8969[(20)]);
var inst_8911 = (state_8969[(21)]);
var inst_8924 = (state_8969[(2)]);
var inst_8925 = (inst_8912 + (1));
var tmp8990 = inst_8910;
var tmp8991 = inst_8909;
var tmp8992 = inst_8911;
var inst_8909__$1 = tmp8991;
var inst_8910__$1 = tmp8990;
var inst_8911__$1 = tmp8992;
var inst_8912__$1 = inst_8925;
var state_8969__$1 = (function (){var statearr_8996 = state_8969;
(statearr_8996[(9)] = inst_8910__$1);

(statearr_8996[(22)] = inst_8924);

(statearr_8996[(11)] = inst_8912__$1);

(statearr_8996[(20)] = inst_8909__$1);

(statearr_8996[(21)] = inst_8911__$1);

return statearr_8996;
})();
var statearr_8997_9071 = state_8969__$1;
(statearr_8997_9071[(2)] = null);

(statearr_8997_9071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (40))){
var inst_8937 = (state_8969[(23)]);
var inst_8941 = done.call(null,null);
var inst_8942 = cljs.core.async.untap_STAR_.call(null,m,inst_8937);
var state_8969__$1 = (function (){var statearr_8998 = state_8969;
(statearr_8998[(24)] = inst_8941);

return statearr_8998;
})();
var statearr_8999_9072 = state_8969__$1;
(statearr_8999_9072[(2)] = inst_8942);

(statearr_8999_9072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (33))){
var inst_8928 = (state_8969[(25)]);
var inst_8930 = cljs.core.chunked_seq_QMARK_.call(null,inst_8928);
var state_8969__$1 = state_8969;
if(inst_8930){
var statearr_9000_9073 = state_8969__$1;
(statearr_9000_9073[(1)] = (36));

} else {
var statearr_9001_9074 = state_8969__$1;
(statearr_9001_9074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (13))){
var inst_8860 = (state_8969[(26)]);
var inst_8863 = cljs.core.async.close_BANG_.call(null,inst_8860);
var state_8969__$1 = state_8969;
var statearr_9002_9075 = state_8969__$1;
(statearr_9002_9075[(2)] = inst_8863);

(statearr_9002_9075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (22))){
var inst_8881 = (state_8969[(8)]);
var inst_8884 = cljs.core.async.close_BANG_.call(null,inst_8881);
var state_8969__$1 = state_8969;
var statearr_9003_9076 = state_8969__$1;
(statearr_9003_9076[(2)] = inst_8884);

(statearr_9003_9076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (36))){
var inst_8928 = (state_8969[(25)]);
var inst_8932 = cljs.core.chunk_first.call(null,inst_8928);
var inst_8933 = cljs.core.chunk_rest.call(null,inst_8928);
var inst_8934 = cljs.core.count.call(null,inst_8932);
var inst_8909 = inst_8933;
var inst_8910 = inst_8932;
var inst_8911 = inst_8934;
var inst_8912 = (0);
var state_8969__$1 = (function (){var statearr_9004 = state_8969;
(statearr_9004[(9)] = inst_8910);

(statearr_9004[(11)] = inst_8912);

(statearr_9004[(20)] = inst_8909);

(statearr_9004[(21)] = inst_8911);

return statearr_9004;
})();
var statearr_9005_9077 = state_8969__$1;
(statearr_9005_9077[(2)] = null);

(statearr_9005_9077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (41))){
var inst_8928 = (state_8969[(25)]);
var inst_8944 = (state_8969[(2)]);
var inst_8945 = cljs.core.next.call(null,inst_8928);
var inst_8909 = inst_8945;
var inst_8910 = null;
var inst_8911 = (0);
var inst_8912 = (0);
var state_8969__$1 = (function (){var statearr_9006 = state_8969;
(statearr_9006[(9)] = inst_8910);

(statearr_9006[(27)] = inst_8944);

(statearr_9006[(11)] = inst_8912);

(statearr_9006[(20)] = inst_8909);

(statearr_9006[(21)] = inst_8911);

return statearr_9006;
})();
var statearr_9007_9078 = state_8969__$1;
(statearr_9007_9078[(2)] = null);

(statearr_9007_9078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (43))){
var state_8969__$1 = state_8969;
var statearr_9008_9079 = state_8969__$1;
(statearr_9008_9079[(2)] = null);

(statearr_9008_9079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (29))){
var inst_8953 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9009_9080 = state_8969__$1;
(statearr_9009_9080[(2)] = inst_8953);

(statearr_9009_9080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (44))){
var inst_8962 = (state_8969[(2)]);
var state_8969__$1 = (function (){var statearr_9010 = state_8969;
(statearr_9010[(28)] = inst_8962);

return statearr_9010;
})();
var statearr_9011_9081 = state_8969__$1;
(statearr_9011_9081[(2)] = null);

(statearr_9011_9081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (6))){
var inst_8901 = (state_8969[(29)]);
var inst_8900 = cljs.core.deref.call(null,cs);
var inst_8901__$1 = cljs.core.keys.call(null,inst_8900);
var inst_8902 = cljs.core.count.call(null,inst_8901__$1);
var inst_8903 = cljs.core.reset_BANG_.call(null,dctr,inst_8902);
var inst_8908 = cljs.core.seq.call(null,inst_8901__$1);
var inst_8909 = inst_8908;
var inst_8910 = null;
var inst_8911 = (0);
var inst_8912 = (0);
var state_8969__$1 = (function (){var statearr_9012 = state_8969;
(statearr_9012[(9)] = inst_8910);

(statearr_9012[(11)] = inst_8912);

(statearr_9012[(29)] = inst_8901__$1);

(statearr_9012[(20)] = inst_8909);

(statearr_9012[(30)] = inst_8903);

(statearr_9012[(21)] = inst_8911);

return statearr_9012;
})();
var statearr_9013_9082 = state_8969__$1;
(statearr_9013_9082[(2)] = null);

(statearr_9013_9082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (28))){
var inst_8909 = (state_8969[(20)]);
var inst_8928 = (state_8969[(25)]);
var inst_8928__$1 = cljs.core.seq.call(null,inst_8909);
var state_8969__$1 = (function (){var statearr_9014 = state_8969;
(statearr_9014[(25)] = inst_8928__$1);

return statearr_9014;
})();
if(inst_8928__$1){
var statearr_9015_9083 = state_8969__$1;
(statearr_9015_9083[(1)] = (33));

} else {
var statearr_9016_9084 = state_8969__$1;
(statearr_9016_9084[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (25))){
var inst_8912 = (state_8969[(11)]);
var inst_8911 = (state_8969[(21)]);
var inst_8914 = (inst_8912 < inst_8911);
var inst_8915 = inst_8914;
var state_8969__$1 = state_8969;
if(cljs.core.truth_(inst_8915)){
var statearr_9017_9085 = state_8969__$1;
(statearr_9017_9085[(1)] = (27));

} else {
var statearr_9018_9086 = state_8969__$1;
(statearr_9018_9086[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (34))){
var state_8969__$1 = state_8969;
var statearr_9019_9087 = state_8969__$1;
(statearr_9019_9087[(2)] = null);

(statearr_9019_9087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (17))){
var state_8969__$1 = state_8969;
var statearr_9020_9088 = state_8969__$1;
(statearr_9020_9088[(2)] = null);

(statearr_9020_9088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (3))){
var inst_8967 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8969__$1,inst_8967);
} else {
if((state_val_8970 === (12))){
var inst_8896 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9021_9089 = state_8969__$1;
(statearr_9021_9089[(2)] = inst_8896);

(statearr_9021_9089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (2))){
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8969__$1,(4),ch);
} else {
if((state_val_8970 === (23))){
var state_8969__$1 = state_8969;
var statearr_9022_9090 = state_8969__$1;
(statearr_9022_9090[(2)] = null);

(statearr_9022_9090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (35))){
var inst_8951 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9023_9091 = state_8969__$1;
(statearr_9023_9091[(2)] = inst_8951);

(statearr_9023_9091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (19))){
var inst_8870 = (state_8969[(7)]);
var inst_8874 = cljs.core.chunk_first.call(null,inst_8870);
var inst_8875 = cljs.core.chunk_rest.call(null,inst_8870);
var inst_8876 = cljs.core.count.call(null,inst_8874);
var inst_8850 = inst_8875;
var inst_8851 = inst_8874;
var inst_8852 = inst_8876;
var inst_8853 = (0);
var state_8969__$1 = (function (){var statearr_9024 = state_8969;
(statearr_9024[(13)] = inst_8852);

(statearr_9024[(14)] = inst_8851);

(statearr_9024[(15)] = inst_8853);

(statearr_9024[(17)] = inst_8850);

return statearr_9024;
})();
var statearr_9025_9092 = state_8969__$1;
(statearr_9025_9092[(2)] = null);

(statearr_9025_9092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (11))){
var inst_8870 = (state_8969[(7)]);
var inst_8850 = (state_8969[(17)]);
var inst_8870__$1 = cljs.core.seq.call(null,inst_8850);
var state_8969__$1 = (function (){var statearr_9026 = state_8969;
(statearr_9026[(7)] = inst_8870__$1);

return statearr_9026;
})();
if(inst_8870__$1){
var statearr_9027_9093 = state_8969__$1;
(statearr_9027_9093[(1)] = (16));

} else {
var statearr_9028_9094 = state_8969__$1;
(statearr_9028_9094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (9))){
var inst_8898 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9029_9095 = state_8969__$1;
(statearr_9029_9095[(2)] = inst_8898);

(statearr_9029_9095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (5))){
var inst_8848 = cljs.core.deref.call(null,cs);
var inst_8849 = cljs.core.seq.call(null,inst_8848);
var inst_8850 = inst_8849;
var inst_8851 = null;
var inst_8852 = (0);
var inst_8853 = (0);
var state_8969__$1 = (function (){var statearr_9030 = state_8969;
(statearr_9030[(13)] = inst_8852);

(statearr_9030[(14)] = inst_8851);

(statearr_9030[(15)] = inst_8853);

(statearr_9030[(17)] = inst_8850);

return statearr_9030;
})();
var statearr_9031_9096 = state_8969__$1;
(statearr_9031_9096[(2)] = null);

(statearr_9031_9096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (14))){
var state_8969__$1 = state_8969;
var statearr_9032_9097 = state_8969__$1;
(statearr_9032_9097[(2)] = null);

(statearr_9032_9097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (45))){
var inst_8959 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9033_9098 = state_8969__$1;
(statearr_9033_9098[(2)] = inst_8959);

(statearr_9033_9098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (26))){
var inst_8901 = (state_8969[(29)]);
var inst_8955 = (state_8969[(2)]);
var inst_8956 = cljs.core.seq.call(null,inst_8901);
var state_8969__$1 = (function (){var statearr_9034 = state_8969;
(statearr_9034[(31)] = inst_8955);

return statearr_9034;
})();
if(inst_8956){
var statearr_9035_9099 = state_8969__$1;
(statearr_9035_9099[(1)] = (42));

} else {
var statearr_9036_9100 = state_8969__$1;
(statearr_9036_9100[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (16))){
var inst_8870 = (state_8969[(7)]);
var inst_8872 = cljs.core.chunked_seq_QMARK_.call(null,inst_8870);
var state_8969__$1 = state_8969;
if(inst_8872){
var statearr_9037_9101 = state_8969__$1;
(statearr_9037_9101[(1)] = (19));

} else {
var statearr_9038_9102 = state_8969__$1;
(statearr_9038_9102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (38))){
var inst_8948 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9039_9103 = state_8969__$1;
(statearr_9039_9103[(2)] = inst_8948);

(statearr_9039_9103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (30))){
var state_8969__$1 = state_8969;
var statearr_9040_9104 = state_8969__$1;
(statearr_9040_9104[(2)] = null);

(statearr_9040_9104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (10))){
var inst_8851 = (state_8969[(14)]);
var inst_8853 = (state_8969[(15)]);
var inst_8859 = cljs.core._nth.call(null,inst_8851,inst_8853);
var inst_8860 = cljs.core.nth.call(null,inst_8859,(0),null);
var inst_8861 = cljs.core.nth.call(null,inst_8859,(1),null);
var state_8969__$1 = (function (){var statearr_9041 = state_8969;
(statearr_9041[(26)] = inst_8860);

return statearr_9041;
})();
if(cljs.core.truth_(inst_8861)){
var statearr_9042_9105 = state_8969__$1;
(statearr_9042_9105[(1)] = (13));

} else {
var statearr_9043_9106 = state_8969__$1;
(statearr_9043_9106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (18))){
var inst_8894 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_9044_9107 = state_8969__$1;
(statearr_9044_9107[(2)] = inst_8894);

(statearr_9044_9107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (42))){
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8969__$1,(45),dchan);
} else {
if((state_val_8970 === (37))){
var inst_8841 = (state_8969[(12)]);
var inst_8937 = (state_8969[(23)]);
var inst_8928 = (state_8969[(25)]);
var inst_8937__$1 = cljs.core.first.call(null,inst_8928);
var inst_8938 = cljs.core.async.put_BANG_.call(null,inst_8937__$1,inst_8841,done);
var state_8969__$1 = (function (){var statearr_9045 = state_8969;
(statearr_9045[(23)] = inst_8937__$1);

return statearr_9045;
})();
if(cljs.core.truth_(inst_8938)){
var statearr_9046_9108 = state_8969__$1;
(statearr_9046_9108[(1)] = (39));

} else {
var statearr_9047_9109 = state_8969__$1;
(statearr_9047_9109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (8))){
var inst_8852 = (state_8969[(13)]);
var inst_8853 = (state_8969[(15)]);
var inst_8855 = (inst_8853 < inst_8852);
var inst_8856 = inst_8855;
var state_8969__$1 = state_8969;
if(cljs.core.truth_(inst_8856)){
var statearr_9048_9110 = state_8969__$1;
(statearr_9048_9110[(1)] = (10));

} else {
var statearr_9049_9111 = state_8969__$1;
(statearr_9049_9111[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___9057,cs,m,dchan,dctr,done))
;
return ((function (switch__7638__auto__,c__7750__auto___9057,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7639__auto__ = null;
var cljs$core$async$mult_$_state_machine__7639__auto____0 = (function (){
var statearr_9053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9053[(0)] = cljs$core$async$mult_$_state_machine__7639__auto__);

(statearr_9053[(1)] = (1));

return statearr_9053;
});
var cljs$core$async$mult_$_state_machine__7639__auto____1 = (function (state_8969){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_8969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9054){if((e9054 instanceof Object)){
var ex__7642__auto__ = e9054;
var statearr_9055_9112 = state_8969;
(statearr_9055_9112[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9113 = state_8969;
state_8969 = G__9113;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7639__auto__ = function(state_8969){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7639__auto____1.call(this,state_8969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7639__auto____0;
cljs$core$async$mult_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7639__auto____1;
return cljs$core$async$mult_$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9057,cs,m,dchan,dctr,done))
})();
var state__7752__auto__ = (function (){var statearr_9056 = f__7751__auto__.call(null);
(statearr_9056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9057);

return statearr_9056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9057,cs,m,dchan,dctr,done))
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
var args9114 = [];
var len__5726__auto___9117 = arguments.length;
var i__5727__auto___9118 = (0);
while(true){
if((i__5727__auto___9118 < len__5726__auto___9117)){
args9114.push((arguments[i__5727__auto___9118]));

var G__9119 = (i__5727__auto___9118 + (1));
i__5727__auto___9118 = G__9119;
continue;
} else {
}
break;
}

var G__9116 = args9114.length;
switch (G__9116) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9114.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___9131 = arguments.length;
var i__5727__auto___9132 = (0);
while(true){
if((i__5727__auto___9132 < len__5726__auto___9131)){
args__5733__auto__.push((arguments[i__5727__auto___9132]));

var G__9133 = (i__5727__auto___9132 + (1));
i__5727__auto___9132 = G__9133;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9125){
var map__9126 = p__9125;
var map__9126__$1 = ((((!((map__9126 == null)))?((((map__9126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9126):map__9126);
var opts = map__9126__$1;
var statearr_9128_9134 = state;
(statearr_9128_9134[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9126,map__9126__$1,opts){
return (function (val){
var statearr_9129_9135 = state;
(statearr_9129_9135[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9126,map__9126__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9130_9136 = state;
(statearr_9130_9136[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9121){
var G__9122 = cljs.core.first.call(null,seq9121);
var seq9121__$1 = cljs.core.next.call(null,seq9121);
var G__9123 = cljs.core.first.call(null,seq9121__$1);
var seq9121__$2 = cljs.core.next.call(null,seq9121__$1);
var G__9124 = cljs.core.first.call(null,seq9121__$2);
var seq9121__$3 = cljs.core.next.call(null,seq9121__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9122,G__9123,G__9124,seq9121__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9300 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9301){
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
this.meta9301 = meta9301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9302,meta9301__$1){
var self__ = this;
var _9302__$1 = this;
return (new cljs.core.async.t_cljs$core$async9300(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9301__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9302){
var self__ = this;
var _9302__$1 = this;
return self__.meta9301;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9301","meta9301",604077274,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9300";

cljs.core.async.t_cljs$core$async9300.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9300");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9300 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9301){
return (new cljs.core.async.t_cljs$core$async9300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9301));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9300(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7750__auto___9463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9400){
var state_val_9401 = (state_9400[(1)]);
if((state_val_9401 === (7))){
var inst_9318 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
var statearr_9402_9464 = state_9400__$1;
(statearr_9402_9464[(2)] = inst_9318);

(statearr_9402_9464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (20))){
var inst_9330 = (state_9400[(7)]);
var state_9400__$1 = state_9400;
var statearr_9403_9465 = state_9400__$1;
(statearr_9403_9465[(2)] = inst_9330);

(statearr_9403_9465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (27))){
var state_9400__$1 = state_9400;
var statearr_9404_9466 = state_9400__$1;
(statearr_9404_9466[(2)] = null);

(statearr_9404_9466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (1))){
var inst_9306 = (state_9400[(8)]);
var inst_9306__$1 = calc_state.call(null);
var inst_9308 = (inst_9306__$1 == null);
var inst_9309 = cljs.core.not.call(null,inst_9308);
var state_9400__$1 = (function (){var statearr_9405 = state_9400;
(statearr_9405[(8)] = inst_9306__$1);

return statearr_9405;
})();
if(inst_9309){
var statearr_9406_9467 = state_9400__$1;
(statearr_9406_9467[(1)] = (2));

} else {
var statearr_9407_9468 = state_9400__$1;
(statearr_9407_9468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (24))){
var inst_9360 = (state_9400[(9)]);
var inst_9374 = (state_9400[(10)]);
var inst_9353 = (state_9400[(11)]);
var inst_9374__$1 = inst_9353.call(null,inst_9360);
var state_9400__$1 = (function (){var statearr_9408 = state_9400;
(statearr_9408[(10)] = inst_9374__$1);

return statearr_9408;
})();
if(cljs.core.truth_(inst_9374__$1)){
var statearr_9409_9469 = state_9400__$1;
(statearr_9409_9469[(1)] = (29));

} else {
var statearr_9410_9470 = state_9400__$1;
(statearr_9410_9470[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (4))){
var inst_9321 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9321)){
var statearr_9411_9471 = state_9400__$1;
(statearr_9411_9471[(1)] = (8));

} else {
var statearr_9412_9472 = state_9400__$1;
(statearr_9412_9472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (15))){
var inst_9347 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9347)){
var statearr_9413_9473 = state_9400__$1;
(statearr_9413_9473[(1)] = (19));

} else {
var statearr_9414_9474 = state_9400__$1;
(statearr_9414_9474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (21))){
var inst_9352 = (state_9400[(12)]);
var inst_9352__$1 = (state_9400[(2)]);
var inst_9353 = cljs.core.get.call(null,inst_9352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9354 = cljs.core.get.call(null,inst_9352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9355 = cljs.core.get.call(null,inst_9352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9400__$1 = (function (){var statearr_9415 = state_9400;
(statearr_9415[(12)] = inst_9352__$1);

(statearr_9415[(11)] = inst_9353);

(statearr_9415[(13)] = inst_9354);

return statearr_9415;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9400__$1,(22),inst_9355);
} else {
if((state_val_9401 === (31))){
var inst_9382 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9382)){
var statearr_9416_9475 = state_9400__$1;
(statearr_9416_9475[(1)] = (32));

} else {
var statearr_9417_9476 = state_9400__$1;
(statearr_9417_9476[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (32))){
var inst_9359 = (state_9400[(14)]);
var state_9400__$1 = state_9400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9400__$1,(35),out,inst_9359);
} else {
if((state_val_9401 === (33))){
var inst_9352 = (state_9400[(12)]);
var inst_9330 = inst_9352;
var state_9400__$1 = (function (){var statearr_9418 = state_9400;
(statearr_9418[(7)] = inst_9330);

return statearr_9418;
})();
var statearr_9419_9477 = state_9400__$1;
(statearr_9419_9477[(2)] = null);

(statearr_9419_9477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (13))){
var inst_9330 = (state_9400[(7)]);
var inst_9337 = inst_9330.cljs$lang$protocol_mask$partition0$;
var inst_9338 = (inst_9337 & (64));
var inst_9339 = inst_9330.cljs$core$ISeq$;
var inst_9340 = (inst_9338) || (inst_9339);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9340)){
var statearr_9420_9478 = state_9400__$1;
(statearr_9420_9478[(1)] = (16));

} else {
var statearr_9421_9479 = state_9400__$1;
(statearr_9421_9479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (22))){
var inst_9360 = (state_9400[(9)]);
var inst_9359 = (state_9400[(14)]);
var inst_9358 = (state_9400[(2)]);
var inst_9359__$1 = cljs.core.nth.call(null,inst_9358,(0),null);
var inst_9360__$1 = cljs.core.nth.call(null,inst_9358,(1),null);
var inst_9361 = (inst_9359__$1 == null);
var inst_9362 = cljs.core._EQ_.call(null,inst_9360__$1,change);
var inst_9363 = (inst_9361) || (inst_9362);
var state_9400__$1 = (function (){var statearr_9422 = state_9400;
(statearr_9422[(9)] = inst_9360__$1);

(statearr_9422[(14)] = inst_9359__$1);

return statearr_9422;
})();
if(cljs.core.truth_(inst_9363)){
var statearr_9423_9480 = state_9400__$1;
(statearr_9423_9480[(1)] = (23));

} else {
var statearr_9424_9481 = state_9400__$1;
(statearr_9424_9481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (36))){
var inst_9352 = (state_9400[(12)]);
var inst_9330 = inst_9352;
var state_9400__$1 = (function (){var statearr_9425 = state_9400;
(statearr_9425[(7)] = inst_9330);

return statearr_9425;
})();
var statearr_9426_9482 = state_9400__$1;
(statearr_9426_9482[(2)] = null);

(statearr_9426_9482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (29))){
var inst_9374 = (state_9400[(10)]);
var state_9400__$1 = state_9400;
var statearr_9427_9483 = state_9400__$1;
(statearr_9427_9483[(2)] = inst_9374);

(statearr_9427_9483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (6))){
var state_9400__$1 = state_9400;
var statearr_9428_9484 = state_9400__$1;
(statearr_9428_9484[(2)] = false);

(statearr_9428_9484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (28))){
var inst_9370 = (state_9400[(2)]);
var inst_9371 = calc_state.call(null);
var inst_9330 = inst_9371;
var state_9400__$1 = (function (){var statearr_9429 = state_9400;
(statearr_9429[(15)] = inst_9370);

(statearr_9429[(7)] = inst_9330);

return statearr_9429;
})();
var statearr_9430_9485 = state_9400__$1;
(statearr_9430_9485[(2)] = null);

(statearr_9430_9485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (25))){
var inst_9396 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
var statearr_9431_9486 = state_9400__$1;
(statearr_9431_9486[(2)] = inst_9396);

(statearr_9431_9486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (34))){
var inst_9394 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
var statearr_9432_9487 = state_9400__$1;
(statearr_9432_9487[(2)] = inst_9394);

(statearr_9432_9487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (17))){
var state_9400__$1 = state_9400;
var statearr_9433_9488 = state_9400__$1;
(statearr_9433_9488[(2)] = false);

(statearr_9433_9488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (3))){
var state_9400__$1 = state_9400;
var statearr_9434_9489 = state_9400__$1;
(statearr_9434_9489[(2)] = false);

(statearr_9434_9489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (12))){
var inst_9398 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9400__$1,inst_9398);
} else {
if((state_val_9401 === (2))){
var inst_9306 = (state_9400[(8)]);
var inst_9311 = inst_9306.cljs$lang$protocol_mask$partition0$;
var inst_9312 = (inst_9311 & (64));
var inst_9313 = inst_9306.cljs$core$ISeq$;
var inst_9314 = (inst_9312) || (inst_9313);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9314)){
var statearr_9435_9490 = state_9400__$1;
(statearr_9435_9490[(1)] = (5));

} else {
var statearr_9436_9491 = state_9400__$1;
(statearr_9436_9491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (23))){
var inst_9359 = (state_9400[(14)]);
var inst_9365 = (inst_9359 == null);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9365)){
var statearr_9437_9492 = state_9400__$1;
(statearr_9437_9492[(1)] = (26));

} else {
var statearr_9438_9493 = state_9400__$1;
(statearr_9438_9493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (35))){
var inst_9385 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
if(cljs.core.truth_(inst_9385)){
var statearr_9439_9494 = state_9400__$1;
(statearr_9439_9494[(1)] = (36));

} else {
var statearr_9440_9495 = state_9400__$1;
(statearr_9440_9495[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (19))){
var inst_9330 = (state_9400[(7)]);
var inst_9349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9330);
var state_9400__$1 = state_9400;
var statearr_9441_9496 = state_9400__$1;
(statearr_9441_9496[(2)] = inst_9349);

(statearr_9441_9496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (11))){
var inst_9330 = (state_9400[(7)]);
var inst_9334 = (inst_9330 == null);
var inst_9335 = cljs.core.not.call(null,inst_9334);
var state_9400__$1 = state_9400;
if(inst_9335){
var statearr_9442_9497 = state_9400__$1;
(statearr_9442_9497[(1)] = (13));

} else {
var statearr_9443_9498 = state_9400__$1;
(statearr_9443_9498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (9))){
var inst_9306 = (state_9400[(8)]);
var state_9400__$1 = state_9400;
var statearr_9444_9499 = state_9400__$1;
(statearr_9444_9499[(2)] = inst_9306);

(statearr_9444_9499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (5))){
var state_9400__$1 = state_9400;
var statearr_9445_9500 = state_9400__$1;
(statearr_9445_9500[(2)] = true);

(statearr_9445_9500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (14))){
var state_9400__$1 = state_9400;
var statearr_9446_9501 = state_9400__$1;
(statearr_9446_9501[(2)] = false);

(statearr_9446_9501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (26))){
var inst_9360 = (state_9400[(9)]);
var inst_9367 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9360);
var state_9400__$1 = state_9400;
var statearr_9447_9502 = state_9400__$1;
(statearr_9447_9502[(2)] = inst_9367);

(statearr_9447_9502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (16))){
var state_9400__$1 = state_9400;
var statearr_9448_9503 = state_9400__$1;
(statearr_9448_9503[(2)] = true);

(statearr_9448_9503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (38))){
var inst_9390 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
var statearr_9449_9504 = state_9400__$1;
(statearr_9449_9504[(2)] = inst_9390);

(statearr_9449_9504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (30))){
var inst_9360 = (state_9400[(9)]);
var inst_9353 = (state_9400[(11)]);
var inst_9354 = (state_9400[(13)]);
var inst_9377 = cljs.core.empty_QMARK_.call(null,inst_9353);
var inst_9378 = inst_9354.call(null,inst_9360);
var inst_9379 = cljs.core.not.call(null,inst_9378);
var inst_9380 = (inst_9377) && (inst_9379);
var state_9400__$1 = state_9400;
var statearr_9450_9505 = state_9400__$1;
(statearr_9450_9505[(2)] = inst_9380);

(statearr_9450_9505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (10))){
var inst_9306 = (state_9400[(8)]);
var inst_9326 = (state_9400[(2)]);
var inst_9327 = cljs.core.get.call(null,inst_9326,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9328 = cljs.core.get.call(null,inst_9326,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9329 = cljs.core.get.call(null,inst_9326,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9330 = inst_9306;
var state_9400__$1 = (function (){var statearr_9451 = state_9400;
(statearr_9451[(16)] = inst_9328);

(statearr_9451[(17)] = inst_9329);

(statearr_9451[(18)] = inst_9327);

(statearr_9451[(7)] = inst_9330);

return statearr_9451;
})();
var statearr_9452_9506 = state_9400__$1;
(statearr_9452_9506[(2)] = null);

(statearr_9452_9506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (18))){
var inst_9344 = (state_9400[(2)]);
var state_9400__$1 = state_9400;
var statearr_9453_9507 = state_9400__$1;
(statearr_9453_9507[(2)] = inst_9344);

(statearr_9453_9507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (37))){
var state_9400__$1 = state_9400;
var statearr_9454_9508 = state_9400__$1;
(statearr_9454_9508[(2)] = null);

(statearr_9454_9508[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9401 === (8))){
var inst_9306 = (state_9400[(8)]);
var inst_9323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9306);
var state_9400__$1 = state_9400;
var statearr_9455_9509 = state_9400__$1;
(statearr_9455_9509[(2)] = inst_9323);

(statearr_9455_9509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7638__auto__,c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7639__auto__ = null;
var cljs$core$async$mix_$_state_machine__7639__auto____0 = (function (){
var statearr_9459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9459[(0)] = cljs$core$async$mix_$_state_machine__7639__auto__);

(statearr_9459[(1)] = (1));

return statearr_9459;
});
var cljs$core$async$mix_$_state_machine__7639__auto____1 = (function (state_9400){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9460){if((e9460 instanceof Object)){
var ex__7642__auto__ = e9460;
var statearr_9461_9510 = state_9400;
(statearr_9461_9510[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9511 = state_9400;
state_9400 = G__9511;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7639__auto__ = function(state_9400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7639__auto____1.call(this,state_9400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7639__auto____0;
cljs$core$async$mix_$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7639__auto____1;
return cljs$core$async$mix_$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7752__auto__ = (function (){var statearr_9462 = f__7751__auto__.call(null);
(statearr_9462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9463);

return statearr_9462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9512 = [];
var len__5726__auto___9515 = arguments.length;
var i__5727__auto___9516 = (0);
while(true){
if((i__5727__auto___9516 < len__5726__auto___9515)){
args9512.push((arguments[i__5727__auto___9516]));

var G__9517 = (i__5727__auto___9516 + (1));
i__5727__auto___9516 = G__9517;
continue;
} else {
}
break;
}

var G__9514 = args9512.length;
switch (G__9514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9512.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args9520 = [];
var len__5726__auto___9645 = arguments.length;
var i__5727__auto___9646 = (0);
while(true){
if((i__5727__auto___9646 < len__5726__auto___9645)){
args9520.push((arguments[i__5727__auto___9646]));

var G__9647 = (i__5727__auto___9646 + (1));
i__5727__auto___9646 = G__9647;
continue;
} else {
}
break;
}

var G__9522 = args9520.length;
switch (G__9522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__9519_SHARP_){
if(cljs.core.truth_(p1__9519_SHARP_.call(null,topic))){
return p1__9519_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9519_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9524 = meta9524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9525,meta9524__$1){
var self__ = this;
var _9525__$1 = this;
return (new cljs.core.async.t_cljs$core$async9523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9525){
var self__ = this;
var _9525__$1 = this;
return self__.meta9524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9524","meta9524",-1028165873,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9523";

cljs.core.async.t_cljs$core$async9523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9523");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9524){
return (new cljs.core.async.t_cljs$core$async9523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7750__auto___9649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9649,mults,ensure_mult,p){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9649,mults,ensure_mult,p){
return (function (state_9597){
var state_val_9598 = (state_9597[(1)]);
if((state_val_9598 === (7))){
var inst_9593 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9599_9650 = state_9597__$1;
(statearr_9599_9650[(2)] = inst_9593);

(statearr_9599_9650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (20))){
var state_9597__$1 = state_9597;
var statearr_9600_9651 = state_9597__$1;
(statearr_9600_9651[(2)] = null);

(statearr_9600_9651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (1))){
var state_9597__$1 = state_9597;
var statearr_9601_9652 = state_9597__$1;
(statearr_9601_9652[(2)] = null);

(statearr_9601_9652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (24))){
var inst_9576 = (state_9597[(7)]);
var inst_9585 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9576);
var state_9597__$1 = state_9597;
var statearr_9602_9653 = state_9597__$1;
(statearr_9602_9653[(2)] = inst_9585);

(statearr_9602_9653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (4))){
var inst_9528 = (state_9597[(8)]);
var inst_9528__$1 = (state_9597[(2)]);
var inst_9529 = (inst_9528__$1 == null);
var state_9597__$1 = (function (){var statearr_9603 = state_9597;
(statearr_9603[(8)] = inst_9528__$1);

return statearr_9603;
})();
if(cljs.core.truth_(inst_9529)){
var statearr_9604_9654 = state_9597__$1;
(statearr_9604_9654[(1)] = (5));

} else {
var statearr_9605_9655 = state_9597__$1;
(statearr_9605_9655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (15))){
var inst_9570 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9606_9656 = state_9597__$1;
(statearr_9606_9656[(2)] = inst_9570);

(statearr_9606_9656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (21))){
var inst_9590 = (state_9597[(2)]);
var state_9597__$1 = (function (){var statearr_9607 = state_9597;
(statearr_9607[(9)] = inst_9590);

return statearr_9607;
})();
var statearr_9608_9657 = state_9597__$1;
(statearr_9608_9657[(2)] = null);

(statearr_9608_9657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (13))){
var inst_9552 = (state_9597[(10)]);
var inst_9554 = cljs.core.chunked_seq_QMARK_.call(null,inst_9552);
var state_9597__$1 = state_9597;
if(inst_9554){
var statearr_9609_9658 = state_9597__$1;
(statearr_9609_9658[(1)] = (16));

} else {
var statearr_9610_9659 = state_9597__$1;
(statearr_9610_9659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (22))){
var inst_9582 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
if(cljs.core.truth_(inst_9582)){
var statearr_9611_9660 = state_9597__$1;
(statearr_9611_9660[(1)] = (23));

} else {
var statearr_9612_9661 = state_9597__$1;
(statearr_9612_9661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (6))){
var inst_9578 = (state_9597[(11)]);
var inst_9528 = (state_9597[(8)]);
var inst_9576 = (state_9597[(7)]);
var inst_9576__$1 = topic_fn.call(null,inst_9528);
var inst_9577 = cljs.core.deref.call(null,mults);
var inst_9578__$1 = cljs.core.get.call(null,inst_9577,inst_9576__$1);
var state_9597__$1 = (function (){var statearr_9613 = state_9597;
(statearr_9613[(11)] = inst_9578__$1);

(statearr_9613[(7)] = inst_9576__$1);

return statearr_9613;
})();
if(cljs.core.truth_(inst_9578__$1)){
var statearr_9614_9662 = state_9597__$1;
(statearr_9614_9662[(1)] = (19));

} else {
var statearr_9615_9663 = state_9597__$1;
(statearr_9615_9663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (25))){
var inst_9587 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9616_9664 = state_9597__$1;
(statearr_9616_9664[(2)] = inst_9587);

(statearr_9616_9664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (17))){
var inst_9552 = (state_9597[(10)]);
var inst_9561 = cljs.core.first.call(null,inst_9552);
var inst_9562 = cljs.core.async.muxch_STAR_.call(null,inst_9561);
var inst_9563 = cljs.core.async.close_BANG_.call(null,inst_9562);
var inst_9564 = cljs.core.next.call(null,inst_9552);
var inst_9538 = inst_9564;
var inst_9539 = null;
var inst_9540 = (0);
var inst_9541 = (0);
var state_9597__$1 = (function (){var statearr_9617 = state_9597;
(statearr_9617[(12)] = inst_9563);

(statearr_9617[(13)] = inst_9539);

(statearr_9617[(14)] = inst_9540);

(statearr_9617[(15)] = inst_9541);

(statearr_9617[(16)] = inst_9538);

return statearr_9617;
})();
var statearr_9618_9665 = state_9597__$1;
(statearr_9618_9665[(2)] = null);

(statearr_9618_9665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (3))){
var inst_9595 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9597__$1,inst_9595);
} else {
if((state_val_9598 === (12))){
var inst_9572 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9619_9666 = state_9597__$1;
(statearr_9619_9666[(2)] = inst_9572);

(statearr_9619_9666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (2))){
var state_9597__$1 = state_9597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9597__$1,(4),ch);
} else {
if((state_val_9598 === (23))){
var state_9597__$1 = state_9597;
var statearr_9620_9667 = state_9597__$1;
(statearr_9620_9667[(2)] = null);

(statearr_9620_9667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (19))){
var inst_9578 = (state_9597[(11)]);
var inst_9528 = (state_9597[(8)]);
var inst_9580 = cljs.core.async.muxch_STAR_.call(null,inst_9578);
var state_9597__$1 = state_9597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9597__$1,(22),inst_9580,inst_9528);
} else {
if((state_val_9598 === (11))){
var inst_9552 = (state_9597[(10)]);
var inst_9538 = (state_9597[(16)]);
var inst_9552__$1 = cljs.core.seq.call(null,inst_9538);
var state_9597__$1 = (function (){var statearr_9621 = state_9597;
(statearr_9621[(10)] = inst_9552__$1);

return statearr_9621;
})();
if(inst_9552__$1){
var statearr_9622_9668 = state_9597__$1;
(statearr_9622_9668[(1)] = (13));

} else {
var statearr_9623_9669 = state_9597__$1;
(statearr_9623_9669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (9))){
var inst_9574 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9624_9670 = state_9597__$1;
(statearr_9624_9670[(2)] = inst_9574);

(statearr_9624_9670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (5))){
var inst_9535 = cljs.core.deref.call(null,mults);
var inst_9536 = cljs.core.vals.call(null,inst_9535);
var inst_9537 = cljs.core.seq.call(null,inst_9536);
var inst_9538 = inst_9537;
var inst_9539 = null;
var inst_9540 = (0);
var inst_9541 = (0);
var state_9597__$1 = (function (){var statearr_9625 = state_9597;
(statearr_9625[(13)] = inst_9539);

(statearr_9625[(14)] = inst_9540);

(statearr_9625[(15)] = inst_9541);

(statearr_9625[(16)] = inst_9538);

return statearr_9625;
})();
var statearr_9626_9671 = state_9597__$1;
(statearr_9626_9671[(2)] = null);

(statearr_9626_9671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (14))){
var state_9597__$1 = state_9597;
var statearr_9630_9672 = state_9597__$1;
(statearr_9630_9672[(2)] = null);

(statearr_9630_9672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (16))){
var inst_9552 = (state_9597[(10)]);
var inst_9556 = cljs.core.chunk_first.call(null,inst_9552);
var inst_9557 = cljs.core.chunk_rest.call(null,inst_9552);
var inst_9558 = cljs.core.count.call(null,inst_9556);
var inst_9538 = inst_9557;
var inst_9539 = inst_9556;
var inst_9540 = inst_9558;
var inst_9541 = (0);
var state_9597__$1 = (function (){var statearr_9631 = state_9597;
(statearr_9631[(13)] = inst_9539);

(statearr_9631[(14)] = inst_9540);

(statearr_9631[(15)] = inst_9541);

(statearr_9631[(16)] = inst_9538);

return statearr_9631;
})();
var statearr_9632_9673 = state_9597__$1;
(statearr_9632_9673[(2)] = null);

(statearr_9632_9673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (10))){
var inst_9539 = (state_9597[(13)]);
var inst_9540 = (state_9597[(14)]);
var inst_9541 = (state_9597[(15)]);
var inst_9538 = (state_9597[(16)]);
var inst_9546 = cljs.core._nth.call(null,inst_9539,inst_9541);
var inst_9547 = cljs.core.async.muxch_STAR_.call(null,inst_9546);
var inst_9548 = cljs.core.async.close_BANG_.call(null,inst_9547);
var inst_9549 = (inst_9541 + (1));
var tmp9627 = inst_9539;
var tmp9628 = inst_9540;
var tmp9629 = inst_9538;
var inst_9538__$1 = tmp9629;
var inst_9539__$1 = tmp9627;
var inst_9540__$1 = tmp9628;
var inst_9541__$1 = inst_9549;
var state_9597__$1 = (function (){var statearr_9633 = state_9597;
(statearr_9633[(13)] = inst_9539__$1);

(statearr_9633[(14)] = inst_9540__$1);

(statearr_9633[(17)] = inst_9548);

(statearr_9633[(15)] = inst_9541__$1);

(statearr_9633[(16)] = inst_9538__$1);

return statearr_9633;
})();
var statearr_9634_9674 = state_9597__$1;
(statearr_9634_9674[(2)] = null);

(statearr_9634_9674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (18))){
var inst_9567 = (state_9597[(2)]);
var state_9597__$1 = state_9597;
var statearr_9635_9675 = state_9597__$1;
(statearr_9635_9675[(2)] = inst_9567);

(statearr_9635_9675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9598 === (8))){
var inst_9540 = (state_9597[(14)]);
var inst_9541 = (state_9597[(15)]);
var inst_9543 = (inst_9541 < inst_9540);
var inst_9544 = inst_9543;
var state_9597__$1 = state_9597;
if(cljs.core.truth_(inst_9544)){
var statearr_9636_9676 = state_9597__$1;
(statearr_9636_9676[(1)] = (10));

} else {
var statearr_9637_9677 = state_9597__$1;
(statearr_9637_9677[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___9649,mults,ensure_mult,p))
;
return ((function (switch__7638__auto__,c__7750__auto___9649,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_9641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9641[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_9641[(1)] = (1));

return statearr_9641;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_9597){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9642){if((e9642 instanceof Object)){
var ex__7642__auto__ = e9642;
var statearr_9643_9678 = state_9597;
(statearr_9643_9678[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9679 = state_9597;
state_9597 = G__9679;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_9597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_9597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9649,mults,ensure_mult,p))
})();
var state__7752__auto__ = (function (){var statearr_9644 = f__7751__auto__.call(null);
(statearr_9644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9649);

return statearr_9644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9649,mults,ensure_mult,p))
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
var args9680 = [];
var len__5726__auto___9683 = arguments.length;
var i__5727__auto___9684 = (0);
while(true){
if((i__5727__auto___9684 < len__5726__auto___9683)){
args9680.push((arguments[i__5727__auto___9684]));

var G__9685 = (i__5727__auto___9684 + (1));
i__5727__auto___9684 = G__9685;
continue;
} else {
}
break;
}

var G__9682 = args9680.length;
switch (G__9682) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9680.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9687 = [];
var len__5726__auto___9690 = arguments.length;
var i__5727__auto___9691 = (0);
while(true){
if((i__5727__auto___9691 < len__5726__auto___9690)){
args9687.push((arguments[i__5727__auto___9691]));

var G__9692 = (i__5727__auto___9691 + (1));
i__5727__auto___9691 = G__9692;
continue;
} else {
}
break;
}

var G__9689 = args9687.length;
switch (G__9689) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9687.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args9694 = [];
var len__5726__auto___9765 = arguments.length;
var i__5727__auto___9766 = (0);
while(true){
if((i__5727__auto___9766 < len__5726__auto___9765)){
args9694.push((arguments[i__5727__auto___9766]));

var G__9767 = (i__5727__auto___9766 + (1));
i__5727__auto___9766 = G__9767;
continue;
} else {
}
break;
}

var G__9696 = args9694.length;
switch (G__9696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9694.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7750__auto___9769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9735){
var state_val_9736 = (state_9735[(1)]);
if((state_val_9736 === (7))){
var state_9735__$1 = state_9735;
var statearr_9737_9770 = state_9735__$1;
(statearr_9737_9770[(2)] = null);

(statearr_9737_9770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (1))){
var state_9735__$1 = state_9735;
var statearr_9738_9771 = state_9735__$1;
(statearr_9738_9771[(2)] = null);

(statearr_9738_9771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (4))){
var inst_9699 = (state_9735[(7)]);
var inst_9701 = (inst_9699 < cnt);
var state_9735__$1 = state_9735;
if(cljs.core.truth_(inst_9701)){
var statearr_9739_9772 = state_9735__$1;
(statearr_9739_9772[(1)] = (6));

} else {
var statearr_9740_9773 = state_9735__$1;
(statearr_9740_9773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (15))){
var inst_9731 = (state_9735[(2)]);
var state_9735__$1 = state_9735;
var statearr_9741_9774 = state_9735__$1;
(statearr_9741_9774[(2)] = inst_9731);

(statearr_9741_9774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (13))){
var inst_9724 = cljs.core.async.close_BANG_.call(null,out);
var state_9735__$1 = state_9735;
var statearr_9742_9775 = state_9735__$1;
(statearr_9742_9775[(2)] = inst_9724);

(statearr_9742_9775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (6))){
var state_9735__$1 = state_9735;
var statearr_9743_9776 = state_9735__$1;
(statearr_9743_9776[(2)] = null);

(statearr_9743_9776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (3))){
var inst_9733 = (state_9735[(2)]);
var state_9735__$1 = state_9735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9735__$1,inst_9733);
} else {
if((state_val_9736 === (12))){
var inst_9721 = (state_9735[(8)]);
var inst_9721__$1 = (state_9735[(2)]);
var inst_9722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9721__$1);
var state_9735__$1 = (function (){var statearr_9744 = state_9735;
(statearr_9744[(8)] = inst_9721__$1);

return statearr_9744;
})();
if(cljs.core.truth_(inst_9722)){
var statearr_9745_9777 = state_9735__$1;
(statearr_9745_9777[(1)] = (13));

} else {
var statearr_9746_9778 = state_9735__$1;
(statearr_9746_9778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (2))){
var inst_9698 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9699 = (0);
var state_9735__$1 = (function (){var statearr_9747 = state_9735;
(statearr_9747[(9)] = inst_9698);

(statearr_9747[(7)] = inst_9699);

return statearr_9747;
})();
var statearr_9748_9779 = state_9735__$1;
(statearr_9748_9779[(2)] = null);

(statearr_9748_9779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (11))){
var inst_9699 = (state_9735[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9735,(10),Object,null,(9));
var inst_9708 = chs__$1.call(null,inst_9699);
var inst_9709 = done.call(null,inst_9699);
var inst_9710 = cljs.core.async.take_BANG_.call(null,inst_9708,inst_9709);
var state_9735__$1 = state_9735;
var statearr_9749_9780 = state_9735__$1;
(statearr_9749_9780[(2)] = inst_9710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (9))){
var inst_9699 = (state_9735[(7)]);
var inst_9712 = (state_9735[(2)]);
var inst_9713 = (inst_9699 + (1));
var inst_9699__$1 = inst_9713;
var state_9735__$1 = (function (){var statearr_9750 = state_9735;
(statearr_9750[(10)] = inst_9712);

(statearr_9750[(7)] = inst_9699__$1);

return statearr_9750;
})();
var statearr_9751_9781 = state_9735__$1;
(statearr_9751_9781[(2)] = null);

(statearr_9751_9781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (5))){
var inst_9719 = (state_9735[(2)]);
var state_9735__$1 = (function (){var statearr_9752 = state_9735;
(statearr_9752[(11)] = inst_9719);

return statearr_9752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9735__$1,(12),dchan);
} else {
if((state_val_9736 === (14))){
var inst_9721 = (state_9735[(8)]);
var inst_9726 = cljs.core.apply.call(null,f,inst_9721);
var state_9735__$1 = state_9735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9735__$1,(16),out,inst_9726);
} else {
if((state_val_9736 === (16))){
var inst_9728 = (state_9735[(2)]);
var state_9735__$1 = (function (){var statearr_9753 = state_9735;
(statearr_9753[(12)] = inst_9728);

return statearr_9753;
})();
var statearr_9754_9782 = state_9735__$1;
(statearr_9754_9782[(2)] = null);

(statearr_9754_9782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (10))){
var inst_9703 = (state_9735[(2)]);
var inst_9704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9735__$1 = (function (){var statearr_9755 = state_9735;
(statearr_9755[(13)] = inst_9703);

return statearr_9755;
})();
var statearr_9756_9783 = state_9735__$1;
(statearr_9756_9783[(2)] = inst_9704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (8))){
var inst_9717 = (state_9735[(2)]);
var state_9735__$1 = state_9735;
var statearr_9757_9784 = state_9735__$1;
(statearr_9757_9784[(2)] = inst_9717);

(statearr_9757_9784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7638__auto__,c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_9761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9761[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_9761[(1)] = (1));

return statearr_9761;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_9735){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9762){if((e9762 instanceof Object)){
var ex__7642__auto__ = e9762;
var statearr_9763_9785 = state_9735;
(statearr_9763_9785[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9786 = state_9735;
state_9735 = G__9786;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_9735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_9735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7752__auto__ = (function (){var statearr_9764 = f__7751__auto__.call(null);
(statearr_9764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9769);

return statearr_9764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9769,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args9788 = [];
var len__5726__auto___9844 = arguments.length;
var i__5727__auto___9845 = (0);
while(true){
if((i__5727__auto___9845 < len__5726__auto___9844)){
args9788.push((arguments[i__5727__auto___9845]));

var G__9846 = (i__5727__auto___9845 + (1));
i__5727__auto___9845 = G__9846;
continue;
} else {
}
break;
}

var G__9790 = args9788.length;
switch (G__9790) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9788.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___9848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9848,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9848,out){
return (function (state_9820){
var state_val_9821 = (state_9820[(1)]);
if((state_val_9821 === (7))){
var inst_9799 = (state_9820[(7)]);
var inst_9800 = (state_9820[(8)]);
var inst_9799__$1 = (state_9820[(2)]);
var inst_9800__$1 = cljs.core.nth.call(null,inst_9799__$1,(0),null);
var inst_9801 = cljs.core.nth.call(null,inst_9799__$1,(1),null);
var inst_9802 = (inst_9800__$1 == null);
var state_9820__$1 = (function (){var statearr_9822 = state_9820;
(statearr_9822[(7)] = inst_9799__$1);

(statearr_9822[(8)] = inst_9800__$1);

(statearr_9822[(9)] = inst_9801);

return statearr_9822;
})();
if(cljs.core.truth_(inst_9802)){
var statearr_9823_9849 = state_9820__$1;
(statearr_9823_9849[(1)] = (8));

} else {
var statearr_9824_9850 = state_9820__$1;
(statearr_9824_9850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (1))){
var inst_9791 = cljs.core.vec.call(null,chs);
var inst_9792 = inst_9791;
var state_9820__$1 = (function (){var statearr_9825 = state_9820;
(statearr_9825[(10)] = inst_9792);

return statearr_9825;
})();
var statearr_9826_9851 = state_9820__$1;
(statearr_9826_9851[(2)] = null);

(statearr_9826_9851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (4))){
var inst_9792 = (state_9820[(10)]);
var state_9820__$1 = state_9820;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9820__$1,(7),inst_9792);
} else {
if((state_val_9821 === (6))){
var inst_9816 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
var statearr_9827_9852 = state_9820__$1;
(statearr_9827_9852[(2)] = inst_9816);

(statearr_9827_9852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (3))){
var inst_9818 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9820__$1,inst_9818);
} else {
if((state_val_9821 === (2))){
var inst_9792 = (state_9820[(10)]);
var inst_9794 = cljs.core.count.call(null,inst_9792);
var inst_9795 = (inst_9794 > (0));
var state_9820__$1 = state_9820;
if(cljs.core.truth_(inst_9795)){
var statearr_9829_9853 = state_9820__$1;
(statearr_9829_9853[(1)] = (4));

} else {
var statearr_9830_9854 = state_9820__$1;
(statearr_9830_9854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (11))){
var inst_9792 = (state_9820[(10)]);
var inst_9809 = (state_9820[(2)]);
var tmp9828 = inst_9792;
var inst_9792__$1 = tmp9828;
var state_9820__$1 = (function (){var statearr_9831 = state_9820;
(statearr_9831[(10)] = inst_9792__$1);

(statearr_9831[(11)] = inst_9809);

return statearr_9831;
})();
var statearr_9832_9855 = state_9820__$1;
(statearr_9832_9855[(2)] = null);

(statearr_9832_9855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (9))){
var inst_9800 = (state_9820[(8)]);
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9820__$1,(11),out,inst_9800);
} else {
if((state_val_9821 === (5))){
var inst_9814 = cljs.core.async.close_BANG_.call(null,out);
var state_9820__$1 = state_9820;
var statearr_9833_9856 = state_9820__$1;
(statearr_9833_9856[(2)] = inst_9814);

(statearr_9833_9856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (10))){
var inst_9812 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
var statearr_9834_9857 = state_9820__$1;
(statearr_9834_9857[(2)] = inst_9812);

(statearr_9834_9857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (8))){
var inst_9799 = (state_9820[(7)]);
var inst_9792 = (state_9820[(10)]);
var inst_9800 = (state_9820[(8)]);
var inst_9801 = (state_9820[(9)]);
var inst_9804 = (function (){var cs = inst_9792;
var vec__9797 = inst_9799;
var v = inst_9800;
var c = inst_9801;
return ((function (cs,vec__9797,v,c,inst_9799,inst_9792,inst_9800,inst_9801,state_val_9821,c__7750__auto___9848,out){
return (function (p1__9787_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9787_SHARP_);
});
;})(cs,vec__9797,v,c,inst_9799,inst_9792,inst_9800,inst_9801,state_val_9821,c__7750__auto___9848,out))
})();
var inst_9805 = cljs.core.filterv.call(null,inst_9804,inst_9792);
var inst_9792__$1 = inst_9805;
var state_9820__$1 = (function (){var statearr_9835 = state_9820;
(statearr_9835[(10)] = inst_9792__$1);

return statearr_9835;
})();
var statearr_9836_9858 = state_9820__$1;
(statearr_9836_9858[(2)] = null);

(statearr_9836_9858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___9848,out))
;
return ((function (switch__7638__auto__,c__7750__auto___9848,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_9840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9840[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_9840[(1)] = (1));

return statearr_9840;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_9820){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9841){if((e9841 instanceof Object)){
var ex__7642__auto__ = e9841;
var statearr_9842_9859 = state_9820;
(statearr_9842_9859[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9860 = state_9820;
state_9820 = G__9860;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_9820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_9820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9848,out))
})();
var state__7752__auto__ = (function (){var statearr_9843 = f__7751__auto__.call(null);
(statearr_9843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9848);

return statearr_9843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9848,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9861 = [];
var len__5726__auto___9910 = arguments.length;
var i__5727__auto___9911 = (0);
while(true){
if((i__5727__auto___9911 < len__5726__auto___9910)){
args9861.push((arguments[i__5727__auto___9911]));

var G__9912 = (i__5727__auto___9911 + (1));
i__5727__auto___9911 = G__9912;
continue;
} else {
}
break;
}

var G__9863 = args9861.length;
switch (G__9863) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9861.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___9914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___9914,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___9914,out){
return (function (state_9887){
var state_val_9888 = (state_9887[(1)]);
if((state_val_9888 === (7))){
var inst_9869 = (state_9887[(7)]);
var inst_9869__$1 = (state_9887[(2)]);
var inst_9870 = (inst_9869__$1 == null);
var inst_9871 = cljs.core.not.call(null,inst_9870);
var state_9887__$1 = (function (){var statearr_9889 = state_9887;
(statearr_9889[(7)] = inst_9869__$1);

return statearr_9889;
})();
if(inst_9871){
var statearr_9890_9915 = state_9887__$1;
(statearr_9890_9915[(1)] = (8));

} else {
var statearr_9891_9916 = state_9887__$1;
(statearr_9891_9916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (1))){
var inst_9864 = (0);
var state_9887__$1 = (function (){var statearr_9892 = state_9887;
(statearr_9892[(8)] = inst_9864);

return statearr_9892;
})();
var statearr_9893_9917 = state_9887__$1;
(statearr_9893_9917[(2)] = null);

(statearr_9893_9917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (4))){
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9887__$1,(7),ch);
} else {
if((state_val_9888 === (6))){
var inst_9882 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9894_9918 = state_9887__$1;
(statearr_9894_9918[(2)] = inst_9882);

(statearr_9894_9918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (3))){
var inst_9884 = (state_9887[(2)]);
var inst_9885 = cljs.core.async.close_BANG_.call(null,out);
var state_9887__$1 = (function (){var statearr_9895 = state_9887;
(statearr_9895[(9)] = inst_9884);

return statearr_9895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9887__$1,inst_9885);
} else {
if((state_val_9888 === (2))){
var inst_9864 = (state_9887[(8)]);
var inst_9866 = (inst_9864 < n);
var state_9887__$1 = state_9887;
if(cljs.core.truth_(inst_9866)){
var statearr_9896_9919 = state_9887__$1;
(statearr_9896_9919[(1)] = (4));

} else {
var statearr_9897_9920 = state_9887__$1;
(statearr_9897_9920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (11))){
var inst_9864 = (state_9887[(8)]);
var inst_9874 = (state_9887[(2)]);
var inst_9875 = (inst_9864 + (1));
var inst_9864__$1 = inst_9875;
var state_9887__$1 = (function (){var statearr_9898 = state_9887;
(statearr_9898[(10)] = inst_9874);

(statearr_9898[(8)] = inst_9864__$1);

return statearr_9898;
})();
var statearr_9899_9921 = state_9887__$1;
(statearr_9899_9921[(2)] = null);

(statearr_9899_9921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (9))){
var state_9887__$1 = state_9887;
var statearr_9900_9922 = state_9887__$1;
(statearr_9900_9922[(2)] = null);

(statearr_9900_9922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (5))){
var state_9887__$1 = state_9887;
var statearr_9901_9923 = state_9887__$1;
(statearr_9901_9923[(2)] = null);

(statearr_9901_9923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (10))){
var inst_9879 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9902_9924 = state_9887__$1;
(statearr_9902_9924[(2)] = inst_9879);

(statearr_9902_9924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (8))){
var inst_9869 = (state_9887[(7)]);
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9887__$1,(11),out,inst_9869);
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
});})(c__7750__auto___9914,out))
;
return ((function (switch__7638__auto__,c__7750__auto___9914,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_9906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9906[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_9906[(1)] = (1));

return statearr_9906;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_9887){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9907){if((e9907 instanceof Object)){
var ex__7642__auto__ = e9907;
var statearr_9908_9925 = state_9887;
(statearr_9908_9925[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9926 = state_9887;
state_9887 = G__9926;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_9887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_9887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___9914,out))
})();
var state__7752__auto__ = (function (){var statearr_9909 = f__7751__auto__.call(null);
(statearr_9909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___9914);

return statearr_9909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___9914,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9934 = (function (map_LT_,f,ch,meta9935){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9935 = meta9935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9936,meta9935__$1){
var self__ = this;
var _9936__$1 = this;
return (new cljs.core.async.t_cljs$core$async9934(self__.map_LT_,self__.f,self__.ch,meta9935__$1));
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9936){
var self__ = this;
var _9936__$1 = this;
return self__.meta9935;
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9937 = (function (map_LT_,f,ch,meta9935,_,fn1,meta9938){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9935 = meta9935;
this._ = _;
this.fn1 = fn1;
this.meta9938 = meta9938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9939,meta9938__$1){
var self__ = this;
var _9939__$1 = this;
return (new cljs.core.async.t_cljs$core$async9937(self__.map_LT_,self__.f,self__.ch,self__.meta9935,self__._,self__.fn1,meta9938__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9939){
var self__ = this;
var _9939__$1 = this;
return self__.meta9938;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9927_SHARP_){
return f1.call(null,(((p1__9927_SHARP_ == null))?null:self__.f.call(null,p1__9927_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9935","meta9935",1383408560,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9934","cljs.core.async/t_cljs$core$async9934",-1220604252,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9938","meta9938",-712526306,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9937";

cljs.core.async.t_cljs$core$async9937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9937");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9937 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9937(map_LT___$1,f__$1,ch__$1,meta9935__$1,___$2,fn1__$1,meta9938){
return (new cljs.core.async.t_cljs$core$async9937(map_LT___$1,f__$1,ch__$1,meta9935__$1,___$2,fn1__$1,meta9938));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9937(self__.map_LT_,self__.f,self__.ch,self__.meta9935,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9935","meta9935",1383408560,null)], null);
});

cljs.core.async.t_cljs$core$async9934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9934";

cljs.core.async.t_cljs$core$async9934.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9934");
});

cljs.core.async.__GT_t_cljs$core$async9934 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9934(map_LT___$1,f__$1,ch__$1,meta9935){
return (new cljs.core.async.t_cljs$core$async9934(map_LT___$1,f__$1,ch__$1,meta9935));
});

}

return (new cljs.core.async.t_cljs$core$async9934(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9943 = (function (map_GT_,f,ch,meta9944){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9944 = meta9944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9945,meta9944__$1){
var self__ = this;
var _9945__$1 = this;
return (new cljs.core.async.t_cljs$core$async9943(self__.map_GT_,self__.f,self__.ch,meta9944__$1));
});

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9945){
var self__ = this;
var _9945__$1 = this;
return self__.meta9944;
});

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9944","meta9944",1074087291,null)], null);
});

cljs.core.async.t_cljs$core$async9943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9943";

cljs.core.async.t_cljs$core$async9943.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9943");
});

cljs.core.async.__GT_t_cljs$core$async9943 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9943(map_GT___$1,f__$1,ch__$1,meta9944){
return (new cljs.core.async.t_cljs$core$async9943(map_GT___$1,f__$1,ch__$1,meta9944));
});

}

return (new cljs.core.async.t_cljs$core$async9943(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9949 = (function (filter_GT_,p,ch,meta9950){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9950 = meta9950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9951,meta9950__$1){
var self__ = this;
var _9951__$1 = this;
return (new cljs.core.async.t_cljs$core$async9949(self__.filter_GT_,self__.p,self__.ch,meta9950__$1));
});

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9951){
var self__ = this;
var _9951__$1 = this;
return self__.meta9950;
});

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9950","meta9950",-1742629574,null)], null);
});

cljs.core.async.t_cljs$core$async9949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9949";

cljs.core.async.t_cljs$core$async9949.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9949");
});

cljs.core.async.__GT_t_cljs$core$async9949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9949(filter_GT___$1,p__$1,ch__$1,meta9950){
return (new cljs.core.async.t_cljs$core$async9949(filter_GT___$1,p__$1,ch__$1,meta9950));
});

}

return (new cljs.core.async.t_cljs$core$async9949(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9952 = [];
var len__5726__auto___9996 = arguments.length;
var i__5727__auto___9997 = (0);
while(true){
if((i__5727__auto___9997 < len__5726__auto___9996)){
args9952.push((arguments[i__5727__auto___9997]));

var G__9998 = (i__5727__auto___9997 + (1));
i__5727__auto___9997 = G__9998;
continue;
} else {
}
break;
}

var G__9954 = args9952.length;
switch (G__9954) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9952.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___10000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___10000,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___10000,out){
return (function (state_9975){
var state_val_9976 = (state_9975[(1)]);
if((state_val_9976 === (7))){
var inst_9971 = (state_9975[(2)]);
var state_9975__$1 = state_9975;
var statearr_9977_10001 = state_9975__$1;
(statearr_9977_10001[(2)] = inst_9971);

(statearr_9977_10001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (1))){
var state_9975__$1 = state_9975;
var statearr_9978_10002 = state_9975__$1;
(statearr_9978_10002[(2)] = null);

(statearr_9978_10002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (4))){
var inst_9957 = (state_9975[(7)]);
var inst_9957__$1 = (state_9975[(2)]);
var inst_9958 = (inst_9957__$1 == null);
var state_9975__$1 = (function (){var statearr_9979 = state_9975;
(statearr_9979[(7)] = inst_9957__$1);

return statearr_9979;
})();
if(cljs.core.truth_(inst_9958)){
var statearr_9980_10003 = state_9975__$1;
(statearr_9980_10003[(1)] = (5));

} else {
var statearr_9981_10004 = state_9975__$1;
(statearr_9981_10004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (6))){
var inst_9957 = (state_9975[(7)]);
var inst_9962 = p.call(null,inst_9957);
var state_9975__$1 = state_9975;
if(cljs.core.truth_(inst_9962)){
var statearr_9982_10005 = state_9975__$1;
(statearr_9982_10005[(1)] = (8));

} else {
var statearr_9983_10006 = state_9975__$1;
(statearr_9983_10006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (3))){
var inst_9973 = (state_9975[(2)]);
var state_9975__$1 = state_9975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9975__$1,inst_9973);
} else {
if((state_val_9976 === (2))){
var state_9975__$1 = state_9975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9975__$1,(4),ch);
} else {
if((state_val_9976 === (11))){
var inst_9965 = (state_9975[(2)]);
var state_9975__$1 = state_9975;
var statearr_9984_10007 = state_9975__$1;
(statearr_9984_10007[(2)] = inst_9965);

(statearr_9984_10007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (9))){
var state_9975__$1 = state_9975;
var statearr_9985_10008 = state_9975__$1;
(statearr_9985_10008[(2)] = null);

(statearr_9985_10008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (5))){
var inst_9960 = cljs.core.async.close_BANG_.call(null,out);
var state_9975__$1 = state_9975;
var statearr_9986_10009 = state_9975__$1;
(statearr_9986_10009[(2)] = inst_9960);

(statearr_9986_10009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (10))){
var inst_9968 = (state_9975[(2)]);
var state_9975__$1 = (function (){var statearr_9987 = state_9975;
(statearr_9987[(8)] = inst_9968);

return statearr_9987;
})();
var statearr_9988_10010 = state_9975__$1;
(statearr_9988_10010[(2)] = null);

(statearr_9988_10010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9976 === (8))){
var inst_9957 = (state_9975[(7)]);
var state_9975__$1 = state_9975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9975__$1,(11),out,inst_9957);
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
});})(c__7750__auto___10000,out))
;
return ((function (switch__7638__auto__,c__7750__auto___10000,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_9992 = [null,null,null,null,null,null,null,null,null];
(statearr_9992[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_9992[(1)] = (1));

return statearr_9992;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_9975){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_9975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e9993){if((e9993 instanceof Object)){
var ex__7642__auto__ = e9993;
var statearr_9994_10011 = state_9975;
(statearr_9994_10011[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10012 = state_9975;
state_9975 = G__10012;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_9975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_9975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___10000,out))
})();
var state__7752__auto__ = (function (){var statearr_9995 = f__7751__auto__.call(null);
(statearr_9995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___10000);

return statearr_9995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___10000,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10013 = [];
var len__5726__auto___10016 = arguments.length;
var i__5727__auto___10017 = (0);
while(true){
if((i__5727__auto___10017 < len__5726__auto___10016)){
args10013.push((arguments[i__5727__auto___10017]));

var G__10018 = (i__5727__auto___10017 + (1));
i__5727__auto___10017 = G__10018;
continue;
} else {
}
break;
}

var G__10015 = args10013.length;
switch (G__10015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10013.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto__){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto__){
return (function (state_10185){
var state_val_10186 = (state_10185[(1)]);
if((state_val_10186 === (7))){
var inst_10181 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
var statearr_10187_10228 = state_10185__$1;
(statearr_10187_10228[(2)] = inst_10181);

(statearr_10187_10228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (20))){
var inst_10151 = (state_10185[(7)]);
var inst_10162 = (state_10185[(2)]);
var inst_10163 = cljs.core.next.call(null,inst_10151);
var inst_10137 = inst_10163;
var inst_10138 = null;
var inst_10139 = (0);
var inst_10140 = (0);
var state_10185__$1 = (function (){var statearr_10188 = state_10185;
(statearr_10188[(8)] = inst_10139);

(statearr_10188[(9)] = inst_10137);

(statearr_10188[(10)] = inst_10138);

(statearr_10188[(11)] = inst_10162);

(statearr_10188[(12)] = inst_10140);

return statearr_10188;
})();
var statearr_10189_10229 = state_10185__$1;
(statearr_10189_10229[(2)] = null);

(statearr_10189_10229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (1))){
var state_10185__$1 = state_10185;
var statearr_10190_10230 = state_10185__$1;
(statearr_10190_10230[(2)] = null);

(statearr_10190_10230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (4))){
var inst_10126 = (state_10185[(13)]);
var inst_10126__$1 = (state_10185[(2)]);
var inst_10127 = (inst_10126__$1 == null);
var state_10185__$1 = (function (){var statearr_10191 = state_10185;
(statearr_10191[(13)] = inst_10126__$1);

return statearr_10191;
})();
if(cljs.core.truth_(inst_10127)){
var statearr_10192_10231 = state_10185__$1;
(statearr_10192_10231[(1)] = (5));

} else {
var statearr_10193_10232 = state_10185__$1;
(statearr_10193_10232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (15))){
var state_10185__$1 = state_10185;
var statearr_10197_10233 = state_10185__$1;
(statearr_10197_10233[(2)] = null);

(statearr_10197_10233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (21))){
var state_10185__$1 = state_10185;
var statearr_10198_10234 = state_10185__$1;
(statearr_10198_10234[(2)] = null);

(statearr_10198_10234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (13))){
var inst_10139 = (state_10185[(8)]);
var inst_10137 = (state_10185[(9)]);
var inst_10138 = (state_10185[(10)]);
var inst_10140 = (state_10185[(12)]);
var inst_10147 = (state_10185[(2)]);
var inst_10148 = (inst_10140 + (1));
var tmp10194 = inst_10139;
var tmp10195 = inst_10137;
var tmp10196 = inst_10138;
var inst_10137__$1 = tmp10195;
var inst_10138__$1 = tmp10196;
var inst_10139__$1 = tmp10194;
var inst_10140__$1 = inst_10148;
var state_10185__$1 = (function (){var statearr_10199 = state_10185;
(statearr_10199[(8)] = inst_10139__$1);

(statearr_10199[(9)] = inst_10137__$1);

(statearr_10199[(10)] = inst_10138__$1);

(statearr_10199[(12)] = inst_10140__$1);

(statearr_10199[(14)] = inst_10147);

return statearr_10199;
})();
var statearr_10200_10235 = state_10185__$1;
(statearr_10200_10235[(2)] = null);

(statearr_10200_10235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (22))){
var state_10185__$1 = state_10185;
var statearr_10201_10236 = state_10185__$1;
(statearr_10201_10236[(2)] = null);

(statearr_10201_10236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (6))){
var inst_10126 = (state_10185[(13)]);
var inst_10135 = f.call(null,inst_10126);
var inst_10136 = cljs.core.seq.call(null,inst_10135);
var inst_10137 = inst_10136;
var inst_10138 = null;
var inst_10139 = (0);
var inst_10140 = (0);
var state_10185__$1 = (function (){var statearr_10202 = state_10185;
(statearr_10202[(8)] = inst_10139);

(statearr_10202[(9)] = inst_10137);

(statearr_10202[(10)] = inst_10138);

(statearr_10202[(12)] = inst_10140);

return statearr_10202;
})();
var statearr_10203_10237 = state_10185__$1;
(statearr_10203_10237[(2)] = null);

(statearr_10203_10237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (17))){
var inst_10151 = (state_10185[(7)]);
var inst_10155 = cljs.core.chunk_first.call(null,inst_10151);
var inst_10156 = cljs.core.chunk_rest.call(null,inst_10151);
var inst_10157 = cljs.core.count.call(null,inst_10155);
var inst_10137 = inst_10156;
var inst_10138 = inst_10155;
var inst_10139 = inst_10157;
var inst_10140 = (0);
var state_10185__$1 = (function (){var statearr_10204 = state_10185;
(statearr_10204[(8)] = inst_10139);

(statearr_10204[(9)] = inst_10137);

(statearr_10204[(10)] = inst_10138);

(statearr_10204[(12)] = inst_10140);

return statearr_10204;
})();
var statearr_10205_10238 = state_10185__$1;
(statearr_10205_10238[(2)] = null);

(statearr_10205_10238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (3))){
var inst_10183 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10185__$1,inst_10183);
} else {
if((state_val_10186 === (12))){
var inst_10171 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
var statearr_10206_10239 = state_10185__$1;
(statearr_10206_10239[(2)] = inst_10171);

(statearr_10206_10239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (2))){
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10185__$1,(4),in$);
} else {
if((state_val_10186 === (23))){
var inst_10179 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
var statearr_10207_10240 = state_10185__$1;
(statearr_10207_10240[(2)] = inst_10179);

(statearr_10207_10240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (19))){
var inst_10166 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
var statearr_10208_10241 = state_10185__$1;
(statearr_10208_10241[(2)] = inst_10166);

(statearr_10208_10241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (11))){
var inst_10137 = (state_10185[(9)]);
var inst_10151 = (state_10185[(7)]);
var inst_10151__$1 = cljs.core.seq.call(null,inst_10137);
var state_10185__$1 = (function (){var statearr_10209 = state_10185;
(statearr_10209[(7)] = inst_10151__$1);

return statearr_10209;
})();
if(inst_10151__$1){
var statearr_10210_10242 = state_10185__$1;
(statearr_10210_10242[(1)] = (14));

} else {
var statearr_10211_10243 = state_10185__$1;
(statearr_10211_10243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (9))){
var inst_10173 = (state_10185[(2)]);
var inst_10174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10185__$1 = (function (){var statearr_10212 = state_10185;
(statearr_10212[(15)] = inst_10173);

return statearr_10212;
})();
if(cljs.core.truth_(inst_10174)){
var statearr_10213_10244 = state_10185__$1;
(statearr_10213_10244[(1)] = (21));

} else {
var statearr_10214_10245 = state_10185__$1;
(statearr_10214_10245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (5))){
var inst_10129 = cljs.core.async.close_BANG_.call(null,out);
var state_10185__$1 = state_10185;
var statearr_10215_10246 = state_10185__$1;
(statearr_10215_10246[(2)] = inst_10129);

(statearr_10215_10246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (14))){
var inst_10151 = (state_10185[(7)]);
var inst_10153 = cljs.core.chunked_seq_QMARK_.call(null,inst_10151);
var state_10185__$1 = state_10185;
if(inst_10153){
var statearr_10216_10247 = state_10185__$1;
(statearr_10216_10247[(1)] = (17));

} else {
var statearr_10217_10248 = state_10185__$1;
(statearr_10217_10248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (16))){
var inst_10169 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
var statearr_10218_10249 = state_10185__$1;
(statearr_10218_10249[(2)] = inst_10169);

(statearr_10218_10249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10186 === (10))){
var inst_10138 = (state_10185[(10)]);
var inst_10140 = (state_10185[(12)]);
var inst_10145 = cljs.core._nth.call(null,inst_10138,inst_10140);
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10185__$1,(13),out,inst_10145);
} else {
if((state_val_10186 === (18))){
var inst_10151 = (state_10185[(7)]);
var inst_10160 = cljs.core.first.call(null,inst_10151);
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10185__$1,(20),out,inst_10160);
} else {
if((state_val_10186 === (8))){
var inst_10139 = (state_10185[(8)]);
var inst_10140 = (state_10185[(12)]);
var inst_10142 = (inst_10140 < inst_10139);
var inst_10143 = inst_10142;
var state_10185__$1 = state_10185;
if(cljs.core.truth_(inst_10143)){
var statearr_10219_10250 = state_10185__$1;
(statearr_10219_10250[(1)] = (10));

} else {
var statearr_10220_10251 = state_10185__$1;
(statearr_10220_10251[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto__))
;
return ((function (switch__7638__auto__,c__7750__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____0 = (function (){
var statearr_10224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__);

(statearr_10224[(1)] = (1));

return statearr_10224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____1 = (function (state_10185){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_10185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e10225){if((e10225 instanceof Object)){
var ex__7642__auto__ = e10225;
var statearr_10226_10252 = state_10185;
(statearr_10226_10252[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10253 = state_10185;
state_10185 = G__10253;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__ = function(state_10185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____1.call(this,state_10185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7639__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto__))
})();
var state__7752__auto__ = (function (){var statearr_10227 = f__7751__auto__.call(null);
(statearr_10227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto__);

return statearr_10227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto__))
);

return c__7750__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10254 = [];
var len__5726__auto___10257 = arguments.length;
var i__5727__auto___10258 = (0);
while(true){
if((i__5727__auto___10258 < len__5726__auto___10257)){
args10254.push((arguments[i__5727__auto___10258]));

var G__10259 = (i__5727__auto___10258 + (1));
i__5727__auto___10258 = G__10259;
continue;
} else {
}
break;
}

var G__10256 = args10254.length;
switch (G__10256) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10254.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args10261 = [];
var len__5726__auto___10264 = arguments.length;
var i__5727__auto___10265 = (0);
while(true){
if((i__5727__auto___10265 < len__5726__auto___10264)){
args10261.push((arguments[i__5727__auto___10265]));

var G__10266 = (i__5727__auto___10265 + (1));
i__5727__auto___10265 = G__10266;
continue;
} else {
}
break;
}

var G__10263 = args10261.length;
switch (G__10263) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10261.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args10268 = [];
var len__5726__auto___10319 = arguments.length;
var i__5727__auto___10320 = (0);
while(true){
if((i__5727__auto___10320 < len__5726__auto___10319)){
args10268.push((arguments[i__5727__auto___10320]));

var G__10321 = (i__5727__auto___10320 + (1));
i__5727__auto___10320 = G__10321;
continue;
} else {
}
break;
}

var G__10270 = args10268.length;
switch (G__10270) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10268.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___10323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___10323,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___10323,out){
return (function (state_10294){
var state_val_10295 = (state_10294[(1)]);
if((state_val_10295 === (7))){
var inst_10289 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
var statearr_10296_10324 = state_10294__$1;
(statearr_10296_10324[(2)] = inst_10289);

(statearr_10296_10324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (1))){
var inst_10271 = null;
var state_10294__$1 = (function (){var statearr_10297 = state_10294;
(statearr_10297[(7)] = inst_10271);

return statearr_10297;
})();
var statearr_10298_10325 = state_10294__$1;
(statearr_10298_10325[(2)] = null);

(statearr_10298_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (4))){
var inst_10274 = (state_10294[(8)]);
var inst_10274__$1 = (state_10294[(2)]);
var inst_10275 = (inst_10274__$1 == null);
var inst_10276 = cljs.core.not.call(null,inst_10275);
var state_10294__$1 = (function (){var statearr_10299 = state_10294;
(statearr_10299[(8)] = inst_10274__$1);

return statearr_10299;
})();
if(inst_10276){
var statearr_10300_10326 = state_10294__$1;
(statearr_10300_10326[(1)] = (5));

} else {
var statearr_10301_10327 = state_10294__$1;
(statearr_10301_10327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (6))){
var state_10294__$1 = state_10294;
var statearr_10302_10328 = state_10294__$1;
(statearr_10302_10328[(2)] = null);

(statearr_10302_10328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (3))){
var inst_10291 = (state_10294[(2)]);
var inst_10292 = cljs.core.async.close_BANG_.call(null,out);
var state_10294__$1 = (function (){var statearr_10303 = state_10294;
(statearr_10303[(9)] = inst_10291);

return statearr_10303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10294__$1,inst_10292);
} else {
if((state_val_10295 === (2))){
var state_10294__$1 = state_10294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10294__$1,(4),ch);
} else {
if((state_val_10295 === (11))){
var inst_10274 = (state_10294[(8)]);
var inst_10283 = (state_10294[(2)]);
var inst_10271 = inst_10274;
var state_10294__$1 = (function (){var statearr_10304 = state_10294;
(statearr_10304[(7)] = inst_10271);

(statearr_10304[(10)] = inst_10283);

return statearr_10304;
})();
var statearr_10305_10329 = state_10294__$1;
(statearr_10305_10329[(2)] = null);

(statearr_10305_10329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (9))){
var inst_10274 = (state_10294[(8)]);
var state_10294__$1 = state_10294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10294__$1,(11),out,inst_10274);
} else {
if((state_val_10295 === (5))){
var inst_10271 = (state_10294[(7)]);
var inst_10274 = (state_10294[(8)]);
var inst_10278 = cljs.core._EQ_.call(null,inst_10274,inst_10271);
var state_10294__$1 = state_10294;
if(inst_10278){
var statearr_10307_10330 = state_10294__$1;
(statearr_10307_10330[(1)] = (8));

} else {
var statearr_10308_10331 = state_10294__$1;
(statearr_10308_10331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (10))){
var inst_10286 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
var statearr_10309_10332 = state_10294__$1;
(statearr_10309_10332[(2)] = inst_10286);

(statearr_10309_10332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (8))){
var inst_10271 = (state_10294[(7)]);
var tmp10306 = inst_10271;
var inst_10271__$1 = tmp10306;
var state_10294__$1 = (function (){var statearr_10310 = state_10294;
(statearr_10310[(7)] = inst_10271__$1);

return statearr_10310;
})();
var statearr_10311_10333 = state_10294__$1;
(statearr_10311_10333[(2)] = null);

(statearr_10311_10333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___10323,out))
;
return ((function (switch__7638__auto__,c__7750__auto___10323,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_10315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10315[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_10315[(1)] = (1));

return statearr_10315;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_10294){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_10294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e10316){if((e10316 instanceof Object)){
var ex__7642__auto__ = e10316;
var statearr_10317_10334 = state_10294;
(statearr_10317_10334[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10335 = state_10294;
state_10294 = G__10335;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_10294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_10294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___10323,out))
})();
var state__7752__auto__ = (function (){var statearr_10318 = f__7751__auto__.call(null);
(statearr_10318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___10323);

return statearr_10318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___10323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10336 = [];
var len__5726__auto___10406 = arguments.length;
var i__5727__auto___10407 = (0);
while(true){
if((i__5727__auto___10407 < len__5726__auto___10406)){
args10336.push((arguments[i__5727__auto___10407]));

var G__10408 = (i__5727__auto___10407 + (1));
i__5727__auto___10407 = G__10408;
continue;
} else {
}
break;
}

var G__10338 = args10336.length;
switch (G__10338) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10336.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___10410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___10410,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___10410,out){
return (function (state_10376){
var state_val_10377 = (state_10376[(1)]);
if((state_val_10377 === (7))){
var inst_10372 = (state_10376[(2)]);
var state_10376__$1 = state_10376;
var statearr_10378_10411 = state_10376__$1;
(statearr_10378_10411[(2)] = inst_10372);

(statearr_10378_10411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (1))){
var inst_10339 = (new Array(n));
var inst_10340 = inst_10339;
var inst_10341 = (0);
var state_10376__$1 = (function (){var statearr_10379 = state_10376;
(statearr_10379[(7)] = inst_10341);

(statearr_10379[(8)] = inst_10340);

return statearr_10379;
})();
var statearr_10380_10412 = state_10376__$1;
(statearr_10380_10412[(2)] = null);

(statearr_10380_10412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (4))){
var inst_10344 = (state_10376[(9)]);
var inst_10344__$1 = (state_10376[(2)]);
var inst_10345 = (inst_10344__$1 == null);
var inst_10346 = cljs.core.not.call(null,inst_10345);
var state_10376__$1 = (function (){var statearr_10381 = state_10376;
(statearr_10381[(9)] = inst_10344__$1);

return statearr_10381;
})();
if(inst_10346){
var statearr_10382_10413 = state_10376__$1;
(statearr_10382_10413[(1)] = (5));

} else {
var statearr_10383_10414 = state_10376__$1;
(statearr_10383_10414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (15))){
var inst_10366 = (state_10376[(2)]);
var state_10376__$1 = state_10376;
var statearr_10384_10415 = state_10376__$1;
(statearr_10384_10415[(2)] = inst_10366);

(statearr_10384_10415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (13))){
var state_10376__$1 = state_10376;
var statearr_10385_10416 = state_10376__$1;
(statearr_10385_10416[(2)] = null);

(statearr_10385_10416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (6))){
var inst_10341 = (state_10376[(7)]);
var inst_10362 = (inst_10341 > (0));
var state_10376__$1 = state_10376;
if(cljs.core.truth_(inst_10362)){
var statearr_10386_10417 = state_10376__$1;
(statearr_10386_10417[(1)] = (12));

} else {
var statearr_10387_10418 = state_10376__$1;
(statearr_10387_10418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (3))){
var inst_10374 = (state_10376[(2)]);
var state_10376__$1 = state_10376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10376__$1,inst_10374);
} else {
if((state_val_10377 === (12))){
var inst_10340 = (state_10376[(8)]);
var inst_10364 = cljs.core.vec.call(null,inst_10340);
var state_10376__$1 = state_10376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10376__$1,(15),out,inst_10364);
} else {
if((state_val_10377 === (2))){
var state_10376__$1 = state_10376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10376__$1,(4),ch);
} else {
if((state_val_10377 === (11))){
var inst_10356 = (state_10376[(2)]);
var inst_10357 = (new Array(n));
var inst_10340 = inst_10357;
var inst_10341 = (0);
var state_10376__$1 = (function (){var statearr_10388 = state_10376;
(statearr_10388[(7)] = inst_10341);

(statearr_10388[(10)] = inst_10356);

(statearr_10388[(8)] = inst_10340);

return statearr_10388;
})();
var statearr_10389_10419 = state_10376__$1;
(statearr_10389_10419[(2)] = null);

(statearr_10389_10419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (9))){
var inst_10340 = (state_10376[(8)]);
var inst_10354 = cljs.core.vec.call(null,inst_10340);
var state_10376__$1 = state_10376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10376__$1,(11),out,inst_10354);
} else {
if((state_val_10377 === (5))){
var inst_10341 = (state_10376[(7)]);
var inst_10340 = (state_10376[(8)]);
var inst_10349 = (state_10376[(11)]);
var inst_10344 = (state_10376[(9)]);
var inst_10348 = (inst_10340[inst_10341] = inst_10344);
var inst_10349__$1 = (inst_10341 + (1));
var inst_10350 = (inst_10349__$1 < n);
var state_10376__$1 = (function (){var statearr_10390 = state_10376;
(statearr_10390[(12)] = inst_10348);

(statearr_10390[(11)] = inst_10349__$1);

return statearr_10390;
})();
if(cljs.core.truth_(inst_10350)){
var statearr_10391_10420 = state_10376__$1;
(statearr_10391_10420[(1)] = (8));

} else {
var statearr_10392_10421 = state_10376__$1;
(statearr_10392_10421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (14))){
var inst_10369 = (state_10376[(2)]);
var inst_10370 = cljs.core.async.close_BANG_.call(null,out);
var state_10376__$1 = (function (){var statearr_10394 = state_10376;
(statearr_10394[(13)] = inst_10369);

return statearr_10394;
})();
var statearr_10395_10422 = state_10376__$1;
(statearr_10395_10422[(2)] = inst_10370);

(statearr_10395_10422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (10))){
var inst_10360 = (state_10376[(2)]);
var state_10376__$1 = state_10376;
var statearr_10396_10423 = state_10376__$1;
(statearr_10396_10423[(2)] = inst_10360);

(statearr_10396_10423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10377 === (8))){
var inst_10340 = (state_10376[(8)]);
var inst_10349 = (state_10376[(11)]);
var tmp10393 = inst_10340;
var inst_10340__$1 = tmp10393;
var inst_10341 = inst_10349;
var state_10376__$1 = (function (){var statearr_10397 = state_10376;
(statearr_10397[(7)] = inst_10341);

(statearr_10397[(8)] = inst_10340__$1);

return statearr_10397;
})();
var statearr_10398_10424 = state_10376__$1;
(statearr_10398_10424[(2)] = null);

(statearr_10398_10424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___10410,out))
;
return ((function (switch__7638__auto__,c__7750__auto___10410,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_10402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10402[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_10402[(1)] = (1));

return statearr_10402;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_10376){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_10376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e10403){if((e10403 instanceof Object)){
var ex__7642__auto__ = e10403;
var statearr_10404_10425 = state_10376;
(statearr_10404_10425[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10426 = state_10376;
state_10376 = G__10426;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_10376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_10376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___10410,out))
})();
var state__7752__auto__ = (function (){var statearr_10405 = f__7751__auto__.call(null);
(statearr_10405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___10410);

return statearr_10405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___10410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10427 = [];
var len__5726__auto___10501 = arguments.length;
var i__5727__auto___10502 = (0);
while(true){
if((i__5727__auto___10502 < len__5726__auto___10501)){
args10427.push((arguments[i__5727__auto___10502]));

var G__10503 = (i__5727__auto___10502 + (1));
i__5727__auto___10502 = G__10503;
continue;
} else {
}
break;
}

var G__10429 = args10427.length;
switch (G__10429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10427.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7750__auto___10505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7750__auto___10505,out){
return (function (){
var f__7751__auto__ = (function (){var switch__7638__auto__ = ((function (c__7750__auto___10505,out){
return (function (state_10471){
var state_val_10472 = (state_10471[(1)]);
if((state_val_10472 === (7))){
var inst_10467 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
var statearr_10473_10506 = state_10471__$1;
(statearr_10473_10506[(2)] = inst_10467);

(statearr_10473_10506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (1))){
var inst_10430 = [];
var inst_10431 = inst_10430;
var inst_10432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10471__$1 = (function (){var statearr_10474 = state_10471;
(statearr_10474[(7)] = inst_10431);

(statearr_10474[(8)] = inst_10432);

return statearr_10474;
})();
var statearr_10475_10507 = state_10471__$1;
(statearr_10475_10507[(2)] = null);

(statearr_10475_10507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (4))){
var inst_10435 = (state_10471[(9)]);
var inst_10435__$1 = (state_10471[(2)]);
var inst_10436 = (inst_10435__$1 == null);
var inst_10437 = cljs.core.not.call(null,inst_10436);
var state_10471__$1 = (function (){var statearr_10476 = state_10471;
(statearr_10476[(9)] = inst_10435__$1);

return statearr_10476;
})();
if(inst_10437){
var statearr_10477_10508 = state_10471__$1;
(statearr_10477_10508[(1)] = (5));

} else {
var statearr_10478_10509 = state_10471__$1;
(statearr_10478_10509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (15))){
var inst_10461 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
var statearr_10479_10510 = state_10471__$1;
(statearr_10479_10510[(2)] = inst_10461);

(statearr_10479_10510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (13))){
var state_10471__$1 = state_10471;
var statearr_10480_10511 = state_10471__$1;
(statearr_10480_10511[(2)] = null);

(statearr_10480_10511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (6))){
var inst_10431 = (state_10471[(7)]);
var inst_10456 = inst_10431.length;
var inst_10457 = (inst_10456 > (0));
var state_10471__$1 = state_10471;
if(cljs.core.truth_(inst_10457)){
var statearr_10481_10512 = state_10471__$1;
(statearr_10481_10512[(1)] = (12));

} else {
var statearr_10482_10513 = state_10471__$1;
(statearr_10482_10513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (3))){
var inst_10469 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10471__$1,inst_10469);
} else {
if((state_val_10472 === (12))){
var inst_10431 = (state_10471[(7)]);
var inst_10459 = cljs.core.vec.call(null,inst_10431);
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10471__$1,(15),out,inst_10459);
} else {
if((state_val_10472 === (2))){
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10471__$1,(4),ch);
} else {
if((state_val_10472 === (11))){
var inst_10439 = (state_10471[(10)]);
var inst_10435 = (state_10471[(9)]);
var inst_10449 = (state_10471[(2)]);
var inst_10450 = [];
var inst_10451 = inst_10450.push(inst_10435);
var inst_10431 = inst_10450;
var inst_10432 = inst_10439;
var state_10471__$1 = (function (){var statearr_10483 = state_10471;
(statearr_10483[(11)] = inst_10451);

(statearr_10483[(7)] = inst_10431);

(statearr_10483[(8)] = inst_10432);

(statearr_10483[(12)] = inst_10449);

return statearr_10483;
})();
var statearr_10484_10514 = state_10471__$1;
(statearr_10484_10514[(2)] = null);

(statearr_10484_10514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (9))){
var inst_10431 = (state_10471[(7)]);
var inst_10447 = cljs.core.vec.call(null,inst_10431);
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10471__$1,(11),out,inst_10447);
} else {
if((state_val_10472 === (5))){
var inst_10439 = (state_10471[(10)]);
var inst_10435 = (state_10471[(9)]);
var inst_10432 = (state_10471[(8)]);
var inst_10439__$1 = f.call(null,inst_10435);
var inst_10440 = cljs.core._EQ_.call(null,inst_10439__$1,inst_10432);
var inst_10441 = cljs.core.keyword_identical_QMARK_.call(null,inst_10432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10442 = (inst_10440) || (inst_10441);
var state_10471__$1 = (function (){var statearr_10485 = state_10471;
(statearr_10485[(10)] = inst_10439__$1);

return statearr_10485;
})();
if(cljs.core.truth_(inst_10442)){
var statearr_10486_10515 = state_10471__$1;
(statearr_10486_10515[(1)] = (8));

} else {
var statearr_10487_10516 = state_10471__$1;
(statearr_10487_10516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (14))){
var inst_10464 = (state_10471[(2)]);
var inst_10465 = cljs.core.async.close_BANG_.call(null,out);
var state_10471__$1 = (function (){var statearr_10489 = state_10471;
(statearr_10489[(13)] = inst_10464);

return statearr_10489;
})();
var statearr_10490_10517 = state_10471__$1;
(statearr_10490_10517[(2)] = inst_10465);

(statearr_10490_10517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (10))){
var inst_10454 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
var statearr_10491_10518 = state_10471__$1;
(statearr_10491_10518[(2)] = inst_10454);

(statearr_10491_10518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (8))){
var inst_10439 = (state_10471[(10)]);
var inst_10435 = (state_10471[(9)]);
var inst_10431 = (state_10471[(7)]);
var inst_10444 = inst_10431.push(inst_10435);
var tmp10488 = inst_10431;
var inst_10431__$1 = tmp10488;
var inst_10432 = inst_10439;
var state_10471__$1 = (function (){var statearr_10492 = state_10471;
(statearr_10492[(14)] = inst_10444);

(statearr_10492[(7)] = inst_10431__$1);

(statearr_10492[(8)] = inst_10432);

return statearr_10492;
})();
var statearr_10493_10519 = state_10471__$1;
(statearr_10493_10519[(2)] = null);

(statearr_10493_10519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7750__auto___10505,out))
;
return ((function (switch__7638__auto__,c__7750__auto___10505,out){
return (function() {
var cljs$core$async$state_machine__7639__auto__ = null;
var cljs$core$async$state_machine__7639__auto____0 = (function (){
var statearr_10497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10497[(0)] = cljs$core$async$state_machine__7639__auto__);

(statearr_10497[(1)] = (1));

return statearr_10497;
});
var cljs$core$async$state_machine__7639__auto____1 = (function (state_10471){
while(true){
var ret_value__7640__auto__ = (function (){try{while(true){
var result__7641__auto__ = switch__7638__auto__.call(null,state_10471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7641__auto__;
}
break;
}
}catch (e10498){if((e10498 instanceof Object)){
var ex__7642__auto__ = e10498;
var statearr_10499_10520 = state_10471;
(statearr_10499_10520[(5)] = ex__7642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10521 = state_10471;
state_10471 = G__10521;
continue;
} else {
return ret_value__7640__auto__;
}
break;
}
});
cljs$core$async$state_machine__7639__auto__ = function(state_10471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7639__auto____1.call(this,state_10471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7639__auto____0;
cljs$core$async$state_machine__7639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7639__auto____1;
return cljs$core$async$state_machine__7639__auto__;
})()
;})(switch__7638__auto__,c__7750__auto___10505,out))
})();
var state__7752__auto__ = (function (){var statearr_10500 = f__7751__auto__.call(null);
(statearr_10500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7750__auto___10505);

return statearr_10500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7752__auto__);
});})(c__7750__auto___10505,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1455038949695