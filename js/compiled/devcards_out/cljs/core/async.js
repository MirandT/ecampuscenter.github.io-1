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
var args20298 = [];
var len__17884__auto___20304 = arguments.length;
var i__17885__auto___20305 = (0);
while(true){
if((i__17885__auto___20305 < len__17884__auto___20304)){
args20298.push((arguments[i__17885__auto___20305]));

var G__20306 = (i__17885__auto___20305 + (1));
i__17885__auto___20305 = G__20306;
continue;
} else {
}
break;
}

var G__20300 = args20298.length;
switch (G__20300) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20298.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20301 = (function (f,blockable,meta20302){
this.f = f;
this.blockable = blockable;
this.meta20302 = meta20302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20303,meta20302__$1){
var self__ = this;
var _20303__$1 = this;
return (new cljs.core.async.t_cljs$core$async20301(self__.f,self__.blockable,meta20302__$1));
});

cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20303){
var self__ = this;
var _20303__$1 = this;
return self__.meta20302;
});

cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20302","meta20302",-1345022344,null)], null);
});

cljs.core.async.t_cljs$core$async20301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20301";

cljs.core.async.t_cljs$core$async20301.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20301");
});

cljs.core.async.__GT_t_cljs$core$async20301 = (function cljs$core$async$__GT_t_cljs$core$async20301(f__$1,blockable__$1,meta20302){
return (new cljs.core.async.t_cljs$core$async20301(f__$1,blockable__$1,meta20302));
});

}

return (new cljs.core.async.t_cljs$core$async20301(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20310 = [];
var len__17884__auto___20313 = arguments.length;
var i__17885__auto___20314 = (0);
while(true){
if((i__17885__auto___20314 < len__17884__auto___20313)){
args20310.push((arguments[i__17885__auto___20314]));

var G__20315 = (i__17885__auto___20314 + (1));
i__17885__auto___20314 = G__20315;
continue;
} else {
}
break;
}

var G__20312 = args20310.length;
switch (G__20312) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20310.length)].join('')));

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
var args20317 = [];
var len__17884__auto___20320 = arguments.length;
var i__17885__auto___20321 = (0);
while(true){
if((i__17885__auto___20321 < len__17884__auto___20320)){
args20317.push((arguments[i__17885__auto___20321]));

var G__20322 = (i__17885__auto___20321 + (1));
i__17885__auto___20321 = G__20322;
continue;
} else {
}
break;
}

var G__20319 = args20317.length;
switch (G__20319) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20317.length)].join('')));

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
var args20324 = [];
var len__17884__auto___20327 = arguments.length;
var i__17885__auto___20328 = (0);
while(true){
if((i__17885__auto___20328 < len__17884__auto___20327)){
args20324.push((arguments[i__17885__auto___20328]));

var G__20329 = (i__17885__auto___20328 + (1));
i__17885__auto___20328 = G__20329;
continue;
} else {
}
break;
}

var G__20326 = args20324.length;
switch (G__20326) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20324.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20331 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20331);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20331,ret){
return (function (){
return fn1.call(null,val_20331);
});})(val_20331,ret))
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
var args20332 = [];
var len__17884__auto___20335 = arguments.length;
var i__17885__auto___20336 = (0);
while(true){
if((i__17885__auto___20336 < len__17884__auto___20335)){
args20332.push((arguments[i__17885__auto___20336]));

var G__20337 = (i__17885__auto___20336 + (1));
i__17885__auto___20336 = G__20337;
continue;
} else {
}
break;
}

var G__20334 = args20332.length;
switch (G__20334) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20332.length)].join('')));

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
var n__17729__auto___20339 = n;
var x_20340 = (0);
while(true){
if((x_20340 < n__17729__auto___20339)){
(a[x_20340] = (0));

var G__20341 = (x_20340 + (1));
x_20340 = G__20341;
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

var G__20342 = (i + (1));
i = G__20342;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20346 = (function (alt_flag,flag,meta20347){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20347 = meta20347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20348,meta20347__$1){
var self__ = this;
var _20348__$1 = this;
return (new cljs.core.async.t_cljs$core$async20346(self__.alt_flag,self__.flag,meta20347__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20348){
var self__ = this;
var _20348__$1 = this;
return self__.meta20347;
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20347","meta20347",603629034,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20346";

cljs.core.async.t_cljs$core$async20346.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20346");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20346 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20346(alt_flag__$1,flag__$1,meta20347){
return (new cljs.core.async.t_cljs$core$async20346(alt_flag__$1,flag__$1,meta20347));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20346(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20352 = (function (alt_handler,flag,cb,meta20353){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20353 = meta20353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20354,meta20353__$1){
var self__ = this;
var _20354__$1 = this;
return (new cljs.core.async.t_cljs$core$async20352(self__.alt_handler,self__.flag,self__.cb,meta20353__$1));
});

cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20354){
var self__ = this;
var _20354__$1 = this;
return self__.meta20353;
});

cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20353","meta20353",1662030694,null)], null);
});

cljs.core.async.t_cljs$core$async20352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20352";

cljs.core.async.t_cljs$core$async20352.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20352");
});

cljs.core.async.__GT_t_cljs$core$async20352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20352(alt_handler__$1,flag__$1,cb__$1,meta20353){
return (new cljs.core.async.t_cljs$core$async20352(alt_handler__$1,flag__$1,cb__$1,meta20353));
});

}

return (new cljs.core.async.t_cljs$core$async20352(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20355_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20355_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20356_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20356_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20357 = (i + (1));
i = G__20357;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
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
var args__17891__auto__ = [];
var len__17884__auto___20363 = arguments.length;
var i__17885__auto___20364 = (0);
while(true){
if((i__17885__auto___20364 < len__17884__auto___20363)){
args__17891__auto__.push((arguments[i__17885__auto___20364]));

var G__20365 = (i__17885__auto___20364 + (1));
i__17885__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20360){
var map__20361 = p__20360;
var map__20361__$1 = ((((!((map__20361 == null)))?((((map__20361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20361):map__20361);
var opts = map__20361__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20358){
var G__20359 = cljs.core.first.call(null,seq20358);
var seq20358__$1 = cljs.core.next.call(null,seq20358);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20359,seq20358__$1);
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
var args20366 = [];
var len__17884__auto___20416 = arguments.length;
var i__17885__auto___20417 = (0);
while(true){
if((i__17885__auto___20417 < len__17884__auto___20416)){
args20366.push((arguments[i__17885__auto___20417]));

var G__20418 = (i__17885__auto___20417 + (1));
i__17885__auto___20417 = G__20418;
continue;
} else {
}
break;
}

var G__20368 = args20366.length;
switch (G__20368) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20366.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20253__auto___20420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___20420){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___20420){
return (function (state_20392){
var state_val_20393 = (state_20392[(1)]);
if((state_val_20393 === (7))){
var inst_20388 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20394_20421 = state_20392__$1;
(statearr_20394_20421[(2)] = inst_20388);

(statearr_20394_20421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (1))){
var state_20392__$1 = state_20392;
var statearr_20395_20422 = state_20392__$1;
(statearr_20395_20422[(2)] = null);

(statearr_20395_20422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (4))){
var inst_20371 = (state_20392[(7)]);
var inst_20371__$1 = (state_20392[(2)]);
var inst_20372 = (inst_20371__$1 == null);
var state_20392__$1 = (function (){var statearr_20396 = state_20392;
(statearr_20396[(7)] = inst_20371__$1);

return statearr_20396;
})();
if(cljs.core.truth_(inst_20372)){
var statearr_20397_20423 = state_20392__$1;
(statearr_20397_20423[(1)] = (5));

} else {
var statearr_20398_20424 = state_20392__$1;
(statearr_20398_20424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (13))){
var state_20392__$1 = state_20392;
var statearr_20399_20425 = state_20392__$1;
(statearr_20399_20425[(2)] = null);

(statearr_20399_20425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (6))){
var inst_20371 = (state_20392[(7)]);
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20392__$1,(11),to,inst_20371);
} else {
if((state_val_20393 === (3))){
var inst_20390 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20392__$1,inst_20390);
} else {
if((state_val_20393 === (12))){
var state_20392__$1 = state_20392;
var statearr_20400_20426 = state_20392__$1;
(statearr_20400_20426[(2)] = null);

(statearr_20400_20426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (2))){
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20392__$1,(4),from);
} else {
if((state_val_20393 === (11))){
var inst_20381 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20381)){
var statearr_20401_20427 = state_20392__$1;
(statearr_20401_20427[(1)] = (12));

} else {
var statearr_20402_20428 = state_20392__$1;
(statearr_20402_20428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (9))){
var state_20392__$1 = state_20392;
var statearr_20403_20429 = state_20392__$1;
(statearr_20403_20429[(2)] = null);

(statearr_20403_20429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (5))){
var state_20392__$1 = state_20392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20404_20430 = state_20392__$1;
(statearr_20404_20430[(1)] = (8));

} else {
var statearr_20405_20431 = state_20392__$1;
(statearr_20405_20431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (14))){
var inst_20386 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20406_20432 = state_20392__$1;
(statearr_20406_20432[(2)] = inst_20386);

(statearr_20406_20432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (10))){
var inst_20378 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20407_20433 = state_20392__$1;
(statearr_20407_20433[(2)] = inst_20378);

(statearr_20407_20433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (8))){
var inst_20375 = cljs.core.async.close_BANG_.call(null,to);
var state_20392__$1 = state_20392;
var statearr_20408_20434 = state_20392__$1;
(statearr_20408_20434[(2)] = inst_20375);

(statearr_20408_20434[(1)] = (10));


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
});})(c__20253__auto___20420))
;
return ((function (switch__20141__auto__,c__20253__auto___20420){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_20412 = [null,null,null,null,null,null,null,null];
(statearr_20412[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_20412[(1)] = (1));

return statearr_20412;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_20392){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20413){if((e20413 instanceof Object)){
var ex__20145__auto__ = e20413;
var statearr_20414_20435 = state_20392;
(statearr_20414_20435[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20436 = state_20392;
state_20392 = G__20436;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_20392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_20392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___20420))
})();
var state__20255__auto__ = (function (){var statearr_20415 = f__20254__auto__.call(null);
(statearr_20415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20420);

return statearr_20415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___20420))
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
return (function (p__20620){
var vec__20621 = p__20620;
var v = cljs.core.nth.call(null,vec__20621,(0),null);
var p = cljs.core.nth.call(null,vec__20621,(1),null);
var job = vec__20621;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20253__auto___20803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results){
return (function (state_20626){
var state_val_20627 = (state_20626[(1)]);
if((state_val_20627 === (1))){
var state_20626__$1 = state_20626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20626__$1,(2),res,v);
} else {
if((state_val_20627 === (2))){
var inst_20623 = (state_20626[(2)]);
var inst_20624 = cljs.core.async.close_BANG_.call(null,res);
var state_20626__$1 = (function (){var statearr_20628 = state_20626;
(statearr_20628[(7)] = inst_20623);

return statearr_20628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20626__$1,inst_20624);
} else {
return null;
}
}
});})(c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results))
;
return ((function (switch__20141__auto__,c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_20632 = [null,null,null,null,null,null,null,null];
(statearr_20632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__);

(statearr_20632[(1)] = (1));

return statearr_20632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1 = (function (state_20626){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20633){if((e20633 instanceof Object)){
var ex__20145__auto__ = e20633;
var statearr_20634_20804 = state_20626;
(statearr_20634_20804[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20805 = state_20626;
state_20626 = G__20805;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = function(state_20626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1.call(this,state_20626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results))
})();
var state__20255__auto__ = (function (){var statearr_20635 = f__20254__auto__.call(null);
(statearr_20635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20803);

return statearr_20635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___20803,res,vec__20621,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20636){
var vec__20637 = p__20636;
var v = cljs.core.nth.call(null,vec__20637,(0),null);
var p = cljs.core.nth.call(null,vec__20637,(1),null);
var job = vec__20637;
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
var n__17729__auto___20806 = n;
var __20807 = (0);
while(true){
if((__20807 < n__17729__auto___20806)){
var G__20638_20808 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20638_20808) {
case "compute":
var c__20253__auto___20810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20807,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (__20807,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function (state_20651){
var state_val_20652 = (state_20651[(1)]);
if((state_val_20652 === (1))){
var state_20651__$1 = state_20651;
var statearr_20653_20811 = state_20651__$1;
(statearr_20653_20811[(2)] = null);

(statearr_20653_20811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (2))){
var state_20651__$1 = state_20651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20651__$1,(4),jobs);
} else {
if((state_val_20652 === (3))){
var inst_20649 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20651__$1,inst_20649);
} else {
if((state_val_20652 === (4))){
var inst_20641 = (state_20651[(2)]);
var inst_20642 = process.call(null,inst_20641);
var state_20651__$1 = state_20651;
if(cljs.core.truth_(inst_20642)){
var statearr_20654_20812 = state_20651__$1;
(statearr_20654_20812[(1)] = (5));

} else {
var statearr_20655_20813 = state_20651__$1;
(statearr_20655_20813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (5))){
var state_20651__$1 = state_20651;
var statearr_20656_20814 = state_20651__$1;
(statearr_20656_20814[(2)] = null);

(statearr_20656_20814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (6))){
var state_20651__$1 = state_20651;
var statearr_20657_20815 = state_20651__$1;
(statearr_20657_20815[(2)] = null);

(statearr_20657_20815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (7))){
var inst_20647 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
var statearr_20658_20816 = state_20651__$1;
(statearr_20658_20816[(2)] = inst_20647);

(statearr_20658_20816[(1)] = (3));


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
});})(__20807,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
;
return ((function (__20807,switch__20141__auto__,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_20662 = [null,null,null,null,null,null,null];
(statearr_20662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__);

(statearr_20662[(1)] = (1));

return statearr_20662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1 = (function (state_20651){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20663){if((e20663 instanceof Object)){
var ex__20145__auto__ = e20663;
var statearr_20664_20817 = state_20651;
(statearr_20664_20817[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20818 = state_20651;
state_20651 = G__20818;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = function(state_20651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1.call(this,state_20651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__;
})()
;})(__20807,switch__20141__auto__,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
})();
var state__20255__auto__ = (function (){var statearr_20665 = f__20254__auto__.call(null);
(statearr_20665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20810);

return statearr_20665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(__20807,c__20253__auto___20810,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
);


break;
case "async":
var c__20253__auto___20819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20807,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (__20807,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function (state_20678){
var state_val_20679 = (state_20678[(1)]);
if((state_val_20679 === (1))){
var state_20678__$1 = state_20678;
var statearr_20680_20820 = state_20678__$1;
(statearr_20680_20820[(2)] = null);

(statearr_20680_20820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (2))){
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20678__$1,(4),jobs);
} else {
if((state_val_20679 === (3))){
var inst_20676 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20678__$1,inst_20676);
} else {
if((state_val_20679 === (4))){
var inst_20668 = (state_20678[(2)]);
var inst_20669 = async.call(null,inst_20668);
var state_20678__$1 = state_20678;
if(cljs.core.truth_(inst_20669)){
var statearr_20681_20821 = state_20678__$1;
(statearr_20681_20821[(1)] = (5));

} else {
var statearr_20682_20822 = state_20678__$1;
(statearr_20682_20822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (5))){
var state_20678__$1 = state_20678;
var statearr_20683_20823 = state_20678__$1;
(statearr_20683_20823[(2)] = null);

(statearr_20683_20823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (6))){
var state_20678__$1 = state_20678;
var statearr_20684_20824 = state_20678__$1;
(statearr_20684_20824[(2)] = null);

(statearr_20684_20824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (7))){
var inst_20674 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20685_20825 = state_20678__$1;
(statearr_20685_20825[(2)] = inst_20674);

(statearr_20685_20825[(1)] = (3));


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
});})(__20807,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
;
return ((function (__20807,switch__20141__auto__,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_20689 = [null,null,null,null,null,null,null];
(statearr_20689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__);

(statearr_20689[(1)] = (1));

return statearr_20689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1 = (function (state_20678){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20690){if((e20690 instanceof Object)){
var ex__20145__auto__ = e20690;
var statearr_20691_20826 = state_20678;
(statearr_20691_20826[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20678;
state_20678 = G__20827;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = function(state_20678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1.call(this,state_20678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__;
})()
;})(__20807,switch__20141__auto__,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
})();
var state__20255__auto__ = (function (){var statearr_20692 = f__20254__auto__.call(null);
(statearr_20692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20819);

return statearr_20692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(__20807,c__20253__auto___20819,G__20638_20808,n__17729__auto___20806,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20828 = (__20807 + (1));
__20807 = G__20828;
continue;
} else {
}
break;
}

var c__20253__auto___20829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___20829,jobs,results,process,async){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___20829,jobs,results,process,async){
return (function (state_20714){
var state_val_20715 = (state_20714[(1)]);
if((state_val_20715 === (1))){
var state_20714__$1 = state_20714;
var statearr_20716_20830 = state_20714__$1;
(statearr_20716_20830[(2)] = null);

(statearr_20716_20830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20715 === (2))){
var state_20714__$1 = state_20714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20714__$1,(4),from);
} else {
if((state_val_20715 === (3))){
var inst_20712 = (state_20714[(2)]);
var state_20714__$1 = state_20714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20714__$1,inst_20712);
} else {
if((state_val_20715 === (4))){
var inst_20695 = (state_20714[(7)]);
var inst_20695__$1 = (state_20714[(2)]);
var inst_20696 = (inst_20695__$1 == null);
var state_20714__$1 = (function (){var statearr_20717 = state_20714;
(statearr_20717[(7)] = inst_20695__$1);

return statearr_20717;
})();
if(cljs.core.truth_(inst_20696)){
var statearr_20718_20831 = state_20714__$1;
(statearr_20718_20831[(1)] = (5));

} else {
var statearr_20719_20832 = state_20714__$1;
(statearr_20719_20832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20715 === (5))){
var inst_20698 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20714__$1 = state_20714;
var statearr_20720_20833 = state_20714__$1;
(statearr_20720_20833[(2)] = inst_20698);

(statearr_20720_20833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20715 === (6))){
var inst_20700 = (state_20714[(8)]);
var inst_20695 = (state_20714[(7)]);
var inst_20700__$1 = cljs.core.async.chan.call(null,(1));
var inst_20701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20702 = [inst_20695,inst_20700__$1];
var inst_20703 = (new cljs.core.PersistentVector(null,2,(5),inst_20701,inst_20702,null));
var state_20714__$1 = (function (){var statearr_20721 = state_20714;
(statearr_20721[(8)] = inst_20700__$1);

return statearr_20721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20714__$1,(8),jobs,inst_20703);
} else {
if((state_val_20715 === (7))){
var inst_20710 = (state_20714[(2)]);
var state_20714__$1 = state_20714;
var statearr_20722_20834 = state_20714__$1;
(statearr_20722_20834[(2)] = inst_20710);

(statearr_20722_20834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20715 === (8))){
var inst_20700 = (state_20714[(8)]);
var inst_20705 = (state_20714[(2)]);
var state_20714__$1 = (function (){var statearr_20723 = state_20714;
(statearr_20723[(9)] = inst_20705);

return statearr_20723;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20714__$1,(9),results,inst_20700);
} else {
if((state_val_20715 === (9))){
var inst_20707 = (state_20714[(2)]);
var state_20714__$1 = (function (){var statearr_20724 = state_20714;
(statearr_20724[(10)] = inst_20707);

return statearr_20724;
})();
var statearr_20725_20835 = state_20714__$1;
(statearr_20725_20835[(2)] = null);

(statearr_20725_20835[(1)] = (2));


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
});})(c__20253__auto___20829,jobs,results,process,async))
;
return ((function (switch__20141__auto__,c__20253__auto___20829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_20729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__);

(statearr_20729[(1)] = (1));

return statearr_20729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1 = (function (state_20714){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20730){if((e20730 instanceof Object)){
var ex__20145__auto__ = e20730;
var statearr_20731_20836 = state_20714;
(statearr_20731_20836[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20837 = state_20714;
state_20714 = G__20837;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = function(state_20714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1.call(this,state_20714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___20829,jobs,results,process,async))
})();
var state__20255__auto__ = (function (){var statearr_20732 = f__20254__auto__.call(null);
(statearr_20732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20829);

return statearr_20732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___20829,jobs,results,process,async))
);


var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__,jobs,results,process,async){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__,jobs,results,process,async){
return (function (state_20770){
var state_val_20771 = (state_20770[(1)]);
if((state_val_20771 === (7))){
var inst_20766 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
var statearr_20772_20838 = state_20770__$1;
(statearr_20772_20838[(2)] = inst_20766);

(statearr_20772_20838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (20))){
var state_20770__$1 = state_20770;
var statearr_20773_20839 = state_20770__$1;
(statearr_20773_20839[(2)] = null);

(statearr_20773_20839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (1))){
var state_20770__$1 = state_20770;
var statearr_20774_20840 = state_20770__$1;
(statearr_20774_20840[(2)] = null);

(statearr_20774_20840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (4))){
var inst_20735 = (state_20770[(7)]);
var inst_20735__$1 = (state_20770[(2)]);
var inst_20736 = (inst_20735__$1 == null);
var state_20770__$1 = (function (){var statearr_20775 = state_20770;
(statearr_20775[(7)] = inst_20735__$1);

return statearr_20775;
})();
if(cljs.core.truth_(inst_20736)){
var statearr_20776_20841 = state_20770__$1;
(statearr_20776_20841[(1)] = (5));

} else {
var statearr_20777_20842 = state_20770__$1;
(statearr_20777_20842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (15))){
var inst_20748 = (state_20770[(8)]);
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20770__$1,(18),to,inst_20748);
} else {
if((state_val_20771 === (21))){
var inst_20761 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
var statearr_20778_20843 = state_20770__$1;
(statearr_20778_20843[(2)] = inst_20761);

(statearr_20778_20843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (13))){
var inst_20763 = (state_20770[(2)]);
var state_20770__$1 = (function (){var statearr_20779 = state_20770;
(statearr_20779[(9)] = inst_20763);

return statearr_20779;
})();
var statearr_20780_20844 = state_20770__$1;
(statearr_20780_20844[(2)] = null);

(statearr_20780_20844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (6))){
var inst_20735 = (state_20770[(7)]);
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20770__$1,(11),inst_20735);
} else {
if((state_val_20771 === (17))){
var inst_20756 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
if(cljs.core.truth_(inst_20756)){
var statearr_20781_20845 = state_20770__$1;
(statearr_20781_20845[(1)] = (19));

} else {
var statearr_20782_20846 = state_20770__$1;
(statearr_20782_20846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (3))){
var inst_20768 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20770__$1,inst_20768);
} else {
if((state_val_20771 === (12))){
var inst_20745 = (state_20770[(10)]);
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20770__$1,(14),inst_20745);
} else {
if((state_val_20771 === (2))){
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20770__$1,(4),results);
} else {
if((state_val_20771 === (19))){
var state_20770__$1 = state_20770;
var statearr_20783_20847 = state_20770__$1;
(statearr_20783_20847[(2)] = null);

(statearr_20783_20847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (11))){
var inst_20745 = (state_20770[(2)]);
var state_20770__$1 = (function (){var statearr_20784 = state_20770;
(statearr_20784[(10)] = inst_20745);

return statearr_20784;
})();
var statearr_20785_20848 = state_20770__$1;
(statearr_20785_20848[(2)] = null);

(statearr_20785_20848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (9))){
var state_20770__$1 = state_20770;
var statearr_20786_20849 = state_20770__$1;
(statearr_20786_20849[(2)] = null);

(statearr_20786_20849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (5))){
var state_20770__$1 = state_20770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20787_20850 = state_20770__$1;
(statearr_20787_20850[(1)] = (8));

} else {
var statearr_20788_20851 = state_20770__$1;
(statearr_20788_20851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (14))){
var inst_20748 = (state_20770[(8)]);
var inst_20750 = (state_20770[(11)]);
var inst_20748__$1 = (state_20770[(2)]);
var inst_20749 = (inst_20748__$1 == null);
var inst_20750__$1 = cljs.core.not.call(null,inst_20749);
var state_20770__$1 = (function (){var statearr_20789 = state_20770;
(statearr_20789[(8)] = inst_20748__$1);

(statearr_20789[(11)] = inst_20750__$1);

return statearr_20789;
})();
if(inst_20750__$1){
var statearr_20790_20852 = state_20770__$1;
(statearr_20790_20852[(1)] = (15));

} else {
var statearr_20791_20853 = state_20770__$1;
(statearr_20791_20853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (16))){
var inst_20750 = (state_20770[(11)]);
var state_20770__$1 = state_20770;
var statearr_20792_20854 = state_20770__$1;
(statearr_20792_20854[(2)] = inst_20750);

(statearr_20792_20854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (10))){
var inst_20742 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
var statearr_20793_20855 = state_20770__$1;
(statearr_20793_20855[(2)] = inst_20742);

(statearr_20793_20855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (18))){
var inst_20753 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
var statearr_20794_20856 = state_20770__$1;
(statearr_20794_20856[(2)] = inst_20753);

(statearr_20794_20856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (8))){
var inst_20739 = cljs.core.async.close_BANG_.call(null,to);
var state_20770__$1 = state_20770;
var statearr_20795_20857 = state_20770__$1;
(statearr_20795_20857[(2)] = inst_20739);

(statearr_20795_20857[(1)] = (10));


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
});})(c__20253__auto__,jobs,results,process,async))
;
return ((function (switch__20141__auto__,c__20253__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_20799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__);

(statearr_20799[(1)] = (1));

return statearr_20799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1 = (function (state_20770){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20800){if((e20800 instanceof Object)){
var ex__20145__auto__ = e20800;
var statearr_20801_20858 = state_20770;
(statearr_20801_20858[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20859 = state_20770;
state_20770 = G__20859;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__ = function(state_20770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1.call(this,state_20770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__,jobs,results,process,async))
})();
var state__20255__auto__ = (function (){var statearr_20802 = f__20254__auto__.call(null);
(statearr_20802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_20802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__,jobs,results,process,async))
);

return c__20253__auto__;
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
var args20860 = [];
var len__17884__auto___20863 = arguments.length;
var i__17885__auto___20864 = (0);
while(true){
if((i__17885__auto___20864 < len__17884__auto___20863)){
args20860.push((arguments[i__17885__auto___20864]));

var G__20865 = (i__17885__auto___20864 + (1));
i__17885__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var G__20862 = args20860.length;
switch (G__20862) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20860.length)].join('')));

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
var args20867 = [];
var len__17884__auto___20870 = arguments.length;
var i__17885__auto___20871 = (0);
while(true){
if((i__17885__auto___20871 < len__17884__auto___20870)){
args20867.push((arguments[i__17885__auto___20871]));

var G__20872 = (i__17885__auto___20871 + (1));
i__17885__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var G__20869 = args20867.length;
switch (G__20869) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20867.length)].join('')));

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
var args20874 = [];
var len__17884__auto___20927 = arguments.length;
var i__17885__auto___20928 = (0);
while(true){
if((i__17885__auto___20928 < len__17884__auto___20927)){
args20874.push((arguments[i__17885__auto___20928]));

var G__20929 = (i__17885__auto___20928 + (1));
i__17885__auto___20928 = G__20929;
continue;
} else {
}
break;
}

var G__20876 = args20874.length;
switch (G__20876) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20874.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20253__auto___20931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___20931,tc,fc){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___20931,tc,fc){
return (function (state_20902){
var state_val_20903 = (state_20902[(1)]);
if((state_val_20903 === (7))){
var inst_20898 = (state_20902[(2)]);
var state_20902__$1 = state_20902;
var statearr_20904_20932 = state_20902__$1;
(statearr_20904_20932[(2)] = inst_20898);

(statearr_20904_20932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (1))){
var state_20902__$1 = state_20902;
var statearr_20905_20933 = state_20902__$1;
(statearr_20905_20933[(2)] = null);

(statearr_20905_20933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (4))){
var inst_20879 = (state_20902[(7)]);
var inst_20879__$1 = (state_20902[(2)]);
var inst_20880 = (inst_20879__$1 == null);
var state_20902__$1 = (function (){var statearr_20906 = state_20902;
(statearr_20906[(7)] = inst_20879__$1);

return statearr_20906;
})();
if(cljs.core.truth_(inst_20880)){
var statearr_20907_20934 = state_20902__$1;
(statearr_20907_20934[(1)] = (5));

} else {
var statearr_20908_20935 = state_20902__$1;
(statearr_20908_20935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (13))){
var state_20902__$1 = state_20902;
var statearr_20909_20936 = state_20902__$1;
(statearr_20909_20936[(2)] = null);

(statearr_20909_20936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (6))){
var inst_20879 = (state_20902[(7)]);
var inst_20885 = p.call(null,inst_20879);
var state_20902__$1 = state_20902;
if(cljs.core.truth_(inst_20885)){
var statearr_20910_20937 = state_20902__$1;
(statearr_20910_20937[(1)] = (9));

} else {
var statearr_20911_20938 = state_20902__$1;
(statearr_20911_20938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (3))){
var inst_20900 = (state_20902[(2)]);
var state_20902__$1 = state_20902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20902__$1,inst_20900);
} else {
if((state_val_20903 === (12))){
var state_20902__$1 = state_20902;
var statearr_20912_20939 = state_20902__$1;
(statearr_20912_20939[(2)] = null);

(statearr_20912_20939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (2))){
var state_20902__$1 = state_20902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20902__$1,(4),ch);
} else {
if((state_val_20903 === (11))){
var inst_20879 = (state_20902[(7)]);
var inst_20889 = (state_20902[(2)]);
var state_20902__$1 = state_20902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20902__$1,(8),inst_20889,inst_20879);
} else {
if((state_val_20903 === (9))){
var state_20902__$1 = state_20902;
var statearr_20913_20940 = state_20902__$1;
(statearr_20913_20940[(2)] = tc);

(statearr_20913_20940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (5))){
var inst_20882 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20883 = cljs.core.async.close_BANG_.call(null,fc);
var state_20902__$1 = (function (){var statearr_20914 = state_20902;
(statearr_20914[(8)] = inst_20882);

return statearr_20914;
})();
var statearr_20915_20941 = state_20902__$1;
(statearr_20915_20941[(2)] = inst_20883);

(statearr_20915_20941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (14))){
var inst_20896 = (state_20902[(2)]);
var state_20902__$1 = state_20902;
var statearr_20916_20942 = state_20902__$1;
(statearr_20916_20942[(2)] = inst_20896);

(statearr_20916_20942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (10))){
var state_20902__$1 = state_20902;
var statearr_20917_20943 = state_20902__$1;
(statearr_20917_20943[(2)] = fc);

(statearr_20917_20943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20903 === (8))){
var inst_20891 = (state_20902[(2)]);
var state_20902__$1 = state_20902;
if(cljs.core.truth_(inst_20891)){
var statearr_20918_20944 = state_20902__$1;
(statearr_20918_20944[(1)] = (12));

} else {
var statearr_20919_20945 = state_20902__$1;
(statearr_20919_20945[(1)] = (13));

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
});})(c__20253__auto___20931,tc,fc))
;
return ((function (switch__20141__auto__,c__20253__auto___20931,tc,fc){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_20923 = [null,null,null,null,null,null,null,null,null];
(statearr_20923[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_20923[(1)] = (1));

return statearr_20923;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_20902){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_20902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e20924){if((e20924 instanceof Object)){
var ex__20145__auto__ = e20924;
var statearr_20925_20946 = state_20902;
(statearr_20925_20946[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20947 = state_20902;
state_20902 = G__20947;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_20902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_20902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___20931,tc,fc))
})();
var state__20255__auto__ = (function (){var statearr_20926 = f__20254__auto__.call(null);
(statearr_20926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___20931);

return statearr_20926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___20931,tc,fc))
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
var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__){
return (function (state_21011){
var state_val_21012 = (state_21011[(1)]);
if((state_val_21012 === (7))){
var inst_21007 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
var statearr_21013_21034 = state_21011__$1;
(statearr_21013_21034[(2)] = inst_21007);

(statearr_21013_21034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (1))){
var inst_20991 = init;
var state_21011__$1 = (function (){var statearr_21014 = state_21011;
(statearr_21014[(7)] = inst_20991);

return statearr_21014;
})();
var statearr_21015_21035 = state_21011__$1;
(statearr_21015_21035[(2)] = null);

(statearr_21015_21035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (4))){
var inst_20994 = (state_21011[(8)]);
var inst_20994__$1 = (state_21011[(2)]);
var inst_20995 = (inst_20994__$1 == null);
var state_21011__$1 = (function (){var statearr_21016 = state_21011;
(statearr_21016[(8)] = inst_20994__$1);

return statearr_21016;
})();
if(cljs.core.truth_(inst_20995)){
var statearr_21017_21036 = state_21011__$1;
(statearr_21017_21036[(1)] = (5));

} else {
var statearr_21018_21037 = state_21011__$1;
(statearr_21018_21037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (6))){
var inst_20994 = (state_21011[(8)]);
var inst_20998 = (state_21011[(9)]);
var inst_20991 = (state_21011[(7)]);
var inst_20998__$1 = f.call(null,inst_20991,inst_20994);
var inst_20999 = cljs.core.reduced_QMARK_.call(null,inst_20998__$1);
var state_21011__$1 = (function (){var statearr_21019 = state_21011;
(statearr_21019[(9)] = inst_20998__$1);

return statearr_21019;
})();
if(inst_20999){
var statearr_21020_21038 = state_21011__$1;
(statearr_21020_21038[(1)] = (8));

} else {
var statearr_21021_21039 = state_21011__$1;
(statearr_21021_21039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (3))){
var inst_21009 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21011__$1,inst_21009);
} else {
if((state_val_21012 === (2))){
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21011__$1,(4),ch);
} else {
if((state_val_21012 === (9))){
var inst_20998 = (state_21011[(9)]);
var inst_20991 = inst_20998;
var state_21011__$1 = (function (){var statearr_21022 = state_21011;
(statearr_21022[(7)] = inst_20991);

return statearr_21022;
})();
var statearr_21023_21040 = state_21011__$1;
(statearr_21023_21040[(2)] = null);

(statearr_21023_21040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (5))){
var inst_20991 = (state_21011[(7)]);
var state_21011__$1 = state_21011;
var statearr_21024_21041 = state_21011__$1;
(statearr_21024_21041[(2)] = inst_20991);

(statearr_21024_21041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (10))){
var inst_21005 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
var statearr_21025_21042 = state_21011__$1;
(statearr_21025_21042[(2)] = inst_21005);

(statearr_21025_21042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (8))){
var inst_20998 = (state_21011[(9)]);
var inst_21001 = cljs.core.deref.call(null,inst_20998);
var state_21011__$1 = state_21011;
var statearr_21026_21043 = state_21011__$1;
(statearr_21026_21043[(2)] = inst_21001);

(statearr_21026_21043[(1)] = (10));


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
});})(c__20253__auto__))
;
return ((function (switch__20141__auto__,c__20253__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20142__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20142__auto____0 = (function (){
var statearr_21030 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21030[(0)] = cljs$core$async$reduce_$_state_machine__20142__auto__);

(statearr_21030[(1)] = (1));

return statearr_21030;
});
var cljs$core$async$reduce_$_state_machine__20142__auto____1 = (function (state_21011){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_21011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e21031){if((e21031 instanceof Object)){
var ex__20145__auto__ = e21031;
var statearr_21032_21044 = state_21011;
(statearr_21032_21044[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21045 = state_21011;
state_21011 = G__21045;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20142__auto__ = function(state_21011){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20142__auto____1.call(this,state_21011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20142__auto____0;
cljs$core$async$reduce_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20142__auto____1;
return cljs$core$async$reduce_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__))
})();
var state__20255__auto__ = (function (){var statearr_21033 = f__20254__auto__.call(null);
(statearr_21033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_21033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__))
);

return c__20253__auto__;
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
var args21046 = [];
var len__17884__auto___21098 = arguments.length;
var i__17885__auto___21099 = (0);
while(true){
if((i__17885__auto___21099 < len__17884__auto___21098)){
args21046.push((arguments[i__17885__auto___21099]));

var G__21100 = (i__17885__auto___21099 + (1));
i__17885__auto___21099 = G__21100;
continue;
} else {
}
break;
}

var G__21048 = args21046.length;
switch (G__21048) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21046.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__){
return (function (state_21073){
var state_val_21074 = (state_21073[(1)]);
if((state_val_21074 === (7))){
var inst_21055 = (state_21073[(2)]);
var state_21073__$1 = state_21073;
var statearr_21075_21102 = state_21073__$1;
(statearr_21075_21102[(2)] = inst_21055);

(statearr_21075_21102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (1))){
var inst_21049 = cljs.core.seq.call(null,coll);
var inst_21050 = inst_21049;
var state_21073__$1 = (function (){var statearr_21076 = state_21073;
(statearr_21076[(7)] = inst_21050);

return statearr_21076;
})();
var statearr_21077_21103 = state_21073__$1;
(statearr_21077_21103[(2)] = null);

(statearr_21077_21103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (4))){
var inst_21050 = (state_21073[(7)]);
var inst_21053 = cljs.core.first.call(null,inst_21050);
var state_21073__$1 = state_21073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21073__$1,(7),ch,inst_21053);
} else {
if((state_val_21074 === (13))){
var inst_21067 = (state_21073[(2)]);
var state_21073__$1 = state_21073;
var statearr_21078_21104 = state_21073__$1;
(statearr_21078_21104[(2)] = inst_21067);

(statearr_21078_21104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (6))){
var inst_21058 = (state_21073[(2)]);
var state_21073__$1 = state_21073;
if(cljs.core.truth_(inst_21058)){
var statearr_21079_21105 = state_21073__$1;
(statearr_21079_21105[(1)] = (8));

} else {
var statearr_21080_21106 = state_21073__$1;
(statearr_21080_21106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (3))){
var inst_21071 = (state_21073[(2)]);
var state_21073__$1 = state_21073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21073__$1,inst_21071);
} else {
if((state_val_21074 === (12))){
var state_21073__$1 = state_21073;
var statearr_21081_21107 = state_21073__$1;
(statearr_21081_21107[(2)] = null);

(statearr_21081_21107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (2))){
var inst_21050 = (state_21073[(7)]);
var state_21073__$1 = state_21073;
if(cljs.core.truth_(inst_21050)){
var statearr_21082_21108 = state_21073__$1;
(statearr_21082_21108[(1)] = (4));

} else {
var statearr_21083_21109 = state_21073__$1;
(statearr_21083_21109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (11))){
var inst_21064 = cljs.core.async.close_BANG_.call(null,ch);
var state_21073__$1 = state_21073;
var statearr_21084_21110 = state_21073__$1;
(statearr_21084_21110[(2)] = inst_21064);

(statearr_21084_21110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (9))){
var state_21073__$1 = state_21073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21085_21111 = state_21073__$1;
(statearr_21085_21111[(1)] = (11));

} else {
var statearr_21086_21112 = state_21073__$1;
(statearr_21086_21112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (5))){
var inst_21050 = (state_21073[(7)]);
var state_21073__$1 = state_21073;
var statearr_21087_21113 = state_21073__$1;
(statearr_21087_21113[(2)] = inst_21050);

(statearr_21087_21113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (10))){
var inst_21069 = (state_21073[(2)]);
var state_21073__$1 = state_21073;
var statearr_21088_21114 = state_21073__$1;
(statearr_21088_21114[(2)] = inst_21069);

(statearr_21088_21114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21074 === (8))){
var inst_21050 = (state_21073[(7)]);
var inst_21060 = cljs.core.next.call(null,inst_21050);
var inst_21050__$1 = inst_21060;
var state_21073__$1 = (function (){var statearr_21089 = state_21073;
(statearr_21089[(7)] = inst_21050__$1);

return statearr_21089;
})();
var statearr_21090_21115 = state_21073__$1;
(statearr_21090_21115[(2)] = null);

(statearr_21090_21115[(1)] = (2));


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
});})(c__20253__auto__))
;
return ((function (switch__20141__auto__,c__20253__auto__){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_21094 = [null,null,null,null,null,null,null,null];
(statearr_21094[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_21094[(1)] = (1));

return statearr_21094;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_21073){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_21073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e21095){if((e21095 instanceof Object)){
var ex__20145__auto__ = e21095;
var statearr_21096_21116 = state_21073;
(statearr_21096_21116[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21117 = state_21073;
state_21073 = G__21117;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_21073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_21073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__))
})();
var state__20255__auto__ = (function (){var statearr_21097 = f__20254__auto__.call(null);
(statearr_21097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_21097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__))
);

return c__20253__auto__;
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
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21339 = (function (mult,ch,cs,meta21340){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21340 = meta21340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21341,meta21340__$1){
var self__ = this;
var _21341__$1 = this;
return (new cljs.core.async.t_cljs$core$async21339(self__.mult,self__.ch,self__.cs,meta21340__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21341){
var self__ = this;
var _21341__$1 = this;
return self__.meta21340;
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21340","meta21340",-454465415,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21339";

cljs.core.async.t_cljs$core$async21339.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21339");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21339 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21339(mult__$1,ch__$1,cs__$1,meta21340){
return (new cljs.core.async.t_cljs$core$async21339(mult__$1,ch__$1,cs__$1,meta21340));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21339(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20253__auto___21560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___21560,cs,m,dchan,dctr,done){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___21560,cs,m,dchan,dctr,done){
return (function (state_21472){
var state_val_21473 = (state_21472[(1)]);
if((state_val_21473 === (7))){
var inst_21468 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21474_21561 = state_21472__$1;
(statearr_21474_21561[(2)] = inst_21468);

(statearr_21474_21561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (20))){
var inst_21373 = (state_21472[(7)]);
var inst_21383 = cljs.core.first.call(null,inst_21373);
var inst_21384 = cljs.core.nth.call(null,inst_21383,(0),null);
var inst_21385 = cljs.core.nth.call(null,inst_21383,(1),null);
var state_21472__$1 = (function (){var statearr_21475 = state_21472;
(statearr_21475[(8)] = inst_21384);

return statearr_21475;
})();
if(cljs.core.truth_(inst_21385)){
var statearr_21476_21562 = state_21472__$1;
(statearr_21476_21562[(1)] = (22));

} else {
var statearr_21477_21563 = state_21472__$1;
(statearr_21477_21563[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (27))){
var inst_21420 = (state_21472[(9)]);
var inst_21415 = (state_21472[(10)]);
var inst_21344 = (state_21472[(11)]);
var inst_21413 = (state_21472[(12)]);
var inst_21420__$1 = cljs.core._nth.call(null,inst_21413,inst_21415);
var inst_21421 = cljs.core.async.put_BANG_.call(null,inst_21420__$1,inst_21344,done);
var state_21472__$1 = (function (){var statearr_21478 = state_21472;
(statearr_21478[(9)] = inst_21420__$1);

return statearr_21478;
})();
if(cljs.core.truth_(inst_21421)){
var statearr_21479_21564 = state_21472__$1;
(statearr_21479_21564[(1)] = (30));

} else {
var statearr_21480_21565 = state_21472__$1;
(statearr_21480_21565[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (1))){
var state_21472__$1 = state_21472;
var statearr_21481_21566 = state_21472__$1;
(statearr_21481_21566[(2)] = null);

(statearr_21481_21566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (24))){
var inst_21373 = (state_21472[(7)]);
var inst_21390 = (state_21472[(2)]);
var inst_21391 = cljs.core.next.call(null,inst_21373);
var inst_21353 = inst_21391;
var inst_21354 = null;
var inst_21355 = (0);
var inst_21356 = (0);
var state_21472__$1 = (function (){var statearr_21482 = state_21472;
(statearr_21482[(13)] = inst_21390);

(statearr_21482[(14)] = inst_21354);

(statearr_21482[(15)] = inst_21356);

(statearr_21482[(16)] = inst_21353);

(statearr_21482[(17)] = inst_21355);

return statearr_21482;
})();
var statearr_21483_21567 = state_21472__$1;
(statearr_21483_21567[(2)] = null);

(statearr_21483_21567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (39))){
var state_21472__$1 = state_21472;
var statearr_21487_21568 = state_21472__$1;
(statearr_21487_21568[(2)] = null);

(statearr_21487_21568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (4))){
var inst_21344 = (state_21472[(11)]);
var inst_21344__$1 = (state_21472[(2)]);
var inst_21345 = (inst_21344__$1 == null);
var state_21472__$1 = (function (){var statearr_21488 = state_21472;
(statearr_21488[(11)] = inst_21344__$1);

return statearr_21488;
})();
if(cljs.core.truth_(inst_21345)){
var statearr_21489_21569 = state_21472__$1;
(statearr_21489_21569[(1)] = (5));

} else {
var statearr_21490_21570 = state_21472__$1;
(statearr_21490_21570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (15))){
var inst_21354 = (state_21472[(14)]);
var inst_21356 = (state_21472[(15)]);
var inst_21353 = (state_21472[(16)]);
var inst_21355 = (state_21472[(17)]);
var inst_21369 = (state_21472[(2)]);
var inst_21370 = (inst_21356 + (1));
var tmp21484 = inst_21354;
var tmp21485 = inst_21353;
var tmp21486 = inst_21355;
var inst_21353__$1 = tmp21485;
var inst_21354__$1 = tmp21484;
var inst_21355__$1 = tmp21486;
var inst_21356__$1 = inst_21370;
var state_21472__$1 = (function (){var statearr_21491 = state_21472;
(statearr_21491[(14)] = inst_21354__$1);

(statearr_21491[(15)] = inst_21356__$1);

(statearr_21491[(16)] = inst_21353__$1);

(statearr_21491[(18)] = inst_21369);

(statearr_21491[(17)] = inst_21355__$1);

return statearr_21491;
})();
var statearr_21492_21571 = state_21472__$1;
(statearr_21492_21571[(2)] = null);

(statearr_21492_21571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (21))){
var inst_21394 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21496_21572 = state_21472__$1;
(statearr_21496_21572[(2)] = inst_21394);

(statearr_21496_21572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (31))){
var inst_21420 = (state_21472[(9)]);
var inst_21424 = done.call(null,null);
var inst_21425 = cljs.core.async.untap_STAR_.call(null,m,inst_21420);
var state_21472__$1 = (function (){var statearr_21497 = state_21472;
(statearr_21497[(19)] = inst_21424);

return statearr_21497;
})();
var statearr_21498_21573 = state_21472__$1;
(statearr_21498_21573[(2)] = inst_21425);

(statearr_21498_21573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (32))){
var inst_21412 = (state_21472[(20)]);
var inst_21415 = (state_21472[(10)]);
var inst_21414 = (state_21472[(21)]);
var inst_21413 = (state_21472[(12)]);
var inst_21427 = (state_21472[(2)]);
var inst_21428 = (inst_21415 + (1));
var tmp21493 = inst_21412;
var tmp21494 = inst_21414;
var tmp21495 = inst_21413;
var inst_21412__$1 = tmp21493;
var inst_21413__$1 = tmp21495;
var inst_21414__$1 = tmp21494;
var inst_21415__$1 = inst_21428;
var state_21472__$1 = (function (){var statearr_21499 = state_21472;
(statearr_21499[(20)] = inst_21412__$1);

(statearr_21499[(10)] = inst_21415__$1);

(statearr_21499[(21)] = inst_21414__$1);

(statearr_21499[(12)] = inst_21413__$1);

(statearr_21499[(22)] = inst_21427);

return statearr_21499;
})();
var statearr_21500_21574 = state_21472__$1;
(statearr_21500_21574[(2)] = null);

(statearr_21500_21574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (40))){
var inst_21440 = (state_21472[(23)]);
var inst_21444 = done.call(null,null);
var inst_21445 = cljs.core.async.untap_STAR_.call(null,m,inst_21440);
var state_21472__$1 = (function (){var statearr_21501 = state_21472;
(statearr_21501[(24)] = inst_21444);

return statearr_21501;
})();
var statearr_21502_21575 = state_21472__$1;
(statearr_21502_21575[(2)] = inst_21445);

(statearr_21502_21575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (33))){
var inst_21431 = (state_21472[(25)]);
var inst_21433 = cljs.core.chunked_seq_QMARK_.call(null,inst_21431);
var state_21472__$1 = state_21472;
if(inst_21433){
var statearr_21503_21576 = state_21472__$1;
(statearr_21503_21576[(1)] = (36));

} else {
var statearr_21504_21577 = state_21472__$1;
(statearr_21504_21577[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (13))){
var inst_21363 = (state_21472[(26)]);
var inst_21366 = cljs.core.async.close_BANG_.call(null,inst_21363);
var state_21472__$1 = state_21472;
var statearr_21505_21578 = state_21472__$1;
(statearr_21505_21578[(2)] = inst_21366);

(statearr_21505_21578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (22))){
var inst_21384 = (state_21472[(8)]);
var inst_21387 = cljs.core.async.close_BANG_.call(null,inst_21384);
var state_21472__$1 = state_21472;
var statearr_21506_21579 = state_21472__$1;
(statearr_21506_21579[(2)] = inst_21387);

(statearr_21506_21579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (36))){
var inst_21431 = (state_21472[(25)]);
var inst_21435 = cljs.core.chunk_first.call(null,inst_21431);
var inst_21436 = cljs.core.chunk_rest.call(null,inst_21431);
var inst_21437 = cljs.core.count.call(null,inst_21435);
var inst_21412 = inst_21436;
var inst_21413 = inst_21435;
var inst_21414 = inst_21437;
var inst_21415 = (0);
var state_21472__$1 = (function (){var statearr_21507 = state_21472;
(statearr_21507[(20)] = inst_21412);

(statearr_21507[(10)] = inst_21415);

(statearr_21507[(21)] = inst_21414);

(statearr_21507[(12)] = inst_21413);

return statearr_21507;
})();
var statearr_21508_21580 = state_21472__$1;
(statearr_21508_21580[(2)] = null);

(statearr_21508_21580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (41))){
var inst_21431 = (state_21472[(25)]);
var inst_21447 = (state_21472[(2)]);
var inst_21448 = cljs.core.next.call(null,inst_21431);
var inst_21412 = inst_21448;
var inst_21413 = null;
var inst_21414 = (0);
var inst_21415 = (0);
var state_21472__$1 = (function (){var statearr_21509 = state_21472;
(statearr_21509[(20)] = inst_21412);

(statearr_21509[(27)] = inst_21447);

(statearr_21509[(10)] = inst_21415);

(statearr_21509[(21)] = inst_21414);

(statearr_21509[(12)] = inst_21413);

return statearr_21509;
})();
var statearr_21510_21581 = state_21472__$1;
(statearr_21510_21581[(2)] = null);

(statearr_21510_21581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (43))){
var state_21472__$1 = state_21472;
var statearr_21511_21582 = state_21472__$1;
(statearr_21511_21582[(2)] = null);

(statearr_21511_21582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (29))){
var inst_21456 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21512_21583 = state_21472__$1;
(statearr_21512_21583[(2)] = inst_21456);

(statearr_21512_21583[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (44))){
var inst_21465 = (state_21472[(2)]);
var state_21472__$1 = (function (){var statearr_21513 = state_21472;
(statearr_21513[(28)] = inst_21465);

return statearr_21513;
})();
var statearr_21514_21584 = state_21472__$1;
(statearr_21514_21584[(2)] = null);

(statearr_21514_21584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (6))){
var inst_21404 = (state_21472[(29)]);
var inst_21403 = cljs.core.deref.call(null,cs);
var inst_21404__$1 = cljs.core.keys.call(null,inst_21403);
var inst_21405 = cljs.core.count.call(null,inst_21404__$1);
var inst_21406 = cljs.core.reset_BANG_.call(null,dctr,inst_21405);
var inst_21411 = cljs.core.seq.call(null,inst_21404__$1);
var inst_21412 = inst_21411;
var inst_21413 = null;
var inst_21414 = (0);
var inst_21415 = (0);
var state_21472__$1 = (function (){var statearr_21515 = state_21472;
(statearr_21515[(30)] = inst_21406);

(statearr_21515[(20)] = inst_21412);

(statearr_21515[(29)] = inst_21404__$1);

(statearr_21515[(10)] = inst_21415);

(statearr_21515[(21)] = inst_21414);

(statearr_21515[(12)] = inst_21413);

return statearr_21515;
})();
var statearr_21516_21585 = state_21472__$1;
(statearr_21516_21585[(2)] = null);

(statearr_21516_21585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (28))){
var inst_21431 = (state_21472[(25)]);
var inst_21412 = (state_21472[(20)]);
var inst_21431__$1 = cljs.core.seq.call(null,inst_21412);
var state_21472__$1 = (function (){var statearr_21517 = state_21472;
(statearr_21517[(25)] = inst_21431__$1);

return statearr_21517;
})();
if(inst_21431__$1){
var statearr_21518_21586 = state_21472__$1;
(statearr_21518_21586[(1)] = (33));

} else {
var statearr_21519_21587 = state_21472__$1;
(statearr_21519_21587[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (25))){
var inst_21415 = (state_21472[(10)]);
var inst_21414 = (state_21472[(21)]);
var inst_21417 = (inst_21415 < inst_21414);
var inst_21418 = inst_21417;
var state_21472__$1 = state_21472;
if(cljs.core.truth_(inst_21418)){
var statearr_21520_21588 = state_21472__$1;
(statearr_21520_21588[(1)] = (27));

} else {
var statearr_21521_21589 = state_21472__$1;
(statearr_21521_21589[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (34))){
var state_21472__$1 = state_21472;
var statearr_21522_21590 = state_21472__$1;
(statearr_21522_21590[(2)] = null);

(statearr_21522_21590[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (17))){
var state_21472__$1 = state_21472;
var statearr_21523_21591 = state_21472__$1;
(statearr_21523_21591[(2)] = null);

(statearr_21523_21591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (3))){
var inst_21470 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21472__$1,inst_21470);
} else {
if((state_val_21473 === (12))){
var inst_21399 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21524_21592 = state_21472__$1;
(statearr_21524_21592[(2)] = inst_21399);

(statearr_21524_21592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (2))){
var state_21472__$1 = state_21472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21472__$1,(4),ch);
} else {
if((state_val_21473 === (23))){
var state_21472__$1 = state_21472;
var statearr_21525_21593 = state_21472__$1;
(statearr_21525_21593[(2)] = null);

(statearr_21525_21593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (35))){
var inst_21454 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21526_21594 = state_21472__$1;
(statearr_21526_21594[(2)] = inst_21454);

(statearr_21526_21594[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (19))){
var inst_21373 = (state_21472[(7)]);
var inst_21377 = cljs.core.chunk_first.call(null,inst_21373);
var inst_21378 = cljs.core.chunk_rest.call(null,inst_21373);
var inst_21379 = cljs.core.count.call(null,inst_21377);
var inst_21353 = inst_21378;
var inst_21354 = inst_21377;
var inst_21355 = inst_21379;
var inst_21356 = (0);
var state_21472__$1 = (function (){var statearr_21527 = state_21472;
(statearr_21527[(14)] = inst_21354);

(statearr_21527[(15)] = inst_21356);

(statearr_21527[(16)] = inst_21353);

(statearr_21527[(17)] = inst_21355);

return statearr_21527;
})();
var statearr_21528_21595 = state_21472__$1;
(statearr_21528_21595[(2)] = null);

(statearr_21528_21595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (11))){
var inst_21353 = (state_21472[(16)]);
var inst_21373 = (state_21472[(7)]);
var inst_21373__$1 = cljs.core.seq.call(null,inst_21353);
var state_21472__$1 = (function (){var statearr_21529 = state_21472;
(statearr_21529[(7)] = inst_21373__$1);

return statearr_21529;
})();
if(inst_21373__$1){
var statearr_21530_21596 = state_21472__$1;
(statearr_21530_21596[(1)] = (16));

} else {
var statearr_21531_21597 = state_21472__$1;
(statearr_21531_21597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (9))){
var inst_21401 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21532_21598 = state_21472__$1;
(statearr_21532_21598[(2)] = inst_21401);

(statearr_21532_21598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (5))){
var inst_21351 = cljs.core.deref.call(null,cs);
var inst_21352 = cljs.core.seq.call(null,inst_21351);
var inst_21353 = inst_21352;
var inst_21354 = null;
var inst_21355 = (0);
var inst_21356 = (0);
var state_21472__$1 = (function (){var statearr_21533 = state_21472;
(statearr_21533[(14)] = inst_21354);

(statearr_21533[(15)] = inst_21356);

(statearr_21533[(16)] = inst_21353);

(statearr_21533[(17)] = inst_21355);

return statearr_21533;
})();
var statearr_21534_21599 = state_21472__$1;
(statearr_21534_21599[(2)] = null);

(statearr_21534_21599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (14))){
var state_21472__$1 = state_21472;
var statearr_21535_21600 = state_21472__$1;
(statearr_21535_21600[(2)] = null);

(statearr_21535_21600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (45))){
var inst_21462 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21536_21601 = state_21472__$1;
(statearr_21536_21601[(2)] = inst_21462);

(statearr_21536_21601[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (26))){
var inst_21404 = (state_21472[(29)]);
var inst_21458 = (state_21472[(2)]);
var inst_21459 = cljs.core.seq.call(null,inst_21404);
var state_21472__$1 = (function (){var statearr_21537 = state_21472;
(statearr_21537[(31)] = inst_21458);

return statearr_21537;
})();
if(inst_21459){
var statearr_21538_21602 = state_21472__$1;
(statearr_21538_21602[(1)] = (42));

} else {
var statearr_21539_21603 = state_21472__$1;
(statearr_21539_21603[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (16))){
var inst_21373 = (state_21472[(7)]);
var inst_21375 = cljs.core.chunked_seq_QMARK_.call(null,inst_21373);
var state_21472__$1 = state_21472;
if(inst_21375){
var statearr_21540_21604 = state_21472__$1;
(statearr_21540_21604[(1)] = (19));

} else {
var statearr_21541_21605 = state_21472__$1;
(statearr_21541_21605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (38))){
var inst_21451 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21542_21606 = state_21472__$1;
(statearr_21542_21606[(2)] = inst_21451);

(statearr_21542_21606[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (30))){
var state_21472__$1 = state_21472;
var statearr_21543_21607 = state_21472__$1;
(statearr_21543_21607[(2)] = null);

(statearr_21543_21607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (10))){
var inst_21354 = (state_21472[(14)]);
var inst_21356 = (state_21472[(15)]);
var inst_21362 = cljs.core._nth.call(null,inst_21354,inst_21356);
var inst_21363 = cljs.core.nth.call(null,inst_21362,(0),null);
var inst_21364 = cljs.core.nth.call(null,inst_21362,(1),null);
var state_21472__$1 = (function (){var statearr_21544 = state_21472;
(statearr_21544[(26)] = inst_21363);

return statearr_21544;
})();
if(cljs.core.truth_(inst_21364)){
var statearr_21545_21608 = state_21472__$1;
(statearr_21545_21608[(1)] = (13));

} else {
var statearr_21546_21609 = state_21472__$1;
(statearr_21546_21609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (18))){
var inst_21397 = (state_21472[(2)]);
var state_21472__$1 = state_21472;
var statearr_21547_21610 = state_21472__$1;
(statearr_21547_21610[(2)] = inst_21397);

(statearr_21547_21610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (42))){
var state_21472__$1 = state_21472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21472__$1,(45),dchan);
} else {
if((state_val_21473 === (37))){
var inst_21440 = (state_21472[(23)]);
var inst_21431 = (state_21472[(25)]);
var inst_21344 = (state_21472[(11)]);
var inst_21440__$1 = cljs.core.first.call(null,inst_21431);
var inst_21441 = cljs.core.async.put_BANG_.call(null,inst_21440__$1,inst_21344,done);
var state_21472__$1 = (function (){var statearr_21548 = state_21472;
(statearr_21548[(23)] = inst_21440__$1);

return statearr_21548;
})();
if(cljs.core.truth_(inst_21441)){
var statearr_21549_21611 = state_21472__$1;
(statearr_21549_21611[(1)] = (39));

} else {
var statearr_21550_21612 = state_21472__$1;
(statearr_21550_21612[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21473 === (8))){
var inst_21356 = (state_21472[(15)]);
var inst_21355 = (state_21472[(17)]);
var inst_21358 = (inst_21356 < inst_21355);
var inst_21359 = inst_21358;
var state_21472__$1 = state_21472;
if(cljs.core.truth_(inst_21359)){
var statearr_21551_21613 = state_21472__$1;
(statearr_21551_21613[(1)] = (10));

} else {
var statearr_21552_21614 = state_21472__$1;
(statearr_21552_21614[(1)] = (11));

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
});})(c__20253__auto___21560,cs,m,dchan,dctr,done))
;
return ((function (switch__20141__auto__,c__20253__auto___21560,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20142__auto__ = null;
var cljs$core$async$mult_$_state_machine__20142__auto____0 = (function (){
var statearr_21556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21556[(0)] = cljs$core$async$mult_$_state_machine__20142__auto__);

(statearr_21556[(1)] = (1));

return statearr_21556;
});
var cljs$core$async$mult_$_state_machine__20142__auto____1 = (function (state_21472){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_21472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e21557){if((e21557 instanceof Object)){
var ex__20145__auto__ = e21557;
var statearr_21558_21615 = state_21472;
(statearr_21558_21615[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21616 = state_21472;
state_21472 = G__21616;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20142__auto__ = function(state_21472){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20142__auto____1.call(this,state_21472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20142__auto____0;
cljs$core$async$mult_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20142__auto____1;
return cljs$core$async$mult_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___21560,cs,m,dchan,dctr,done))
})();
var state__20255__auto__ = (function (){var statearr_21559 = f__20254__auto__.call(null);
(statearr_21559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___21560);

return statearr_21559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___21560,cs,m,dchan,dctr,done))
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
var args21617 = [];
var len__17884__auto___21620 = arguments.length;
var i__17885__auto___21621 = (0);
while(true){
if((i__17885__auto___21621 < len__17884__auto___21620)){
args21617.push((arguments[i__17885__auto___21621]));

var G__21622 = (i__17885__auto___21621 + (1));
i__17885__auto___21621 = G__21622;
continue;
} else {
}
break;
}

var G__21619 = args21617.length;
switch (G__21619) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21617.length)].join('')));

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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21634 = arguments.length;
var i__17885__auto___21635 = (0);
while(true){
if((i__17885__auto___21635 < len__17884__auto___21634)){
args__17891__auto__.push((arguments[i__17885__auto___21635]));

var G__21636 = (i__17885__auto___21635 + (1));
i__17885__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21628){
var map__21629 = p__21628;
var map__21629__$1 = ((((!((map__21629 == null)))?((((map__21629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21629):map__21629);
var opts = map__21629__$1;
var statearr_21631_21637 = state;
(statearr_21631_21637[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21629,map__21629__$1,opts){
return (function (val){
var statearr_21632_21638 = state;
(statearr_21632_21638[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21629,map__21629__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21633_21639 = state;
(statearr_21633_21639[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21624){
var G__21625 = cljs.core.first.call(null,seq21624);
var seq21624__$1 = cljs.core.next.call(null,seq21624);
var G__21626 = cljs.core.first.call(null,seq21624__$1);
var seq21624__$2 = cljs.core.next.call(null,seq21624__$1);
var G__21627 = cljs.core.first.call(null,seq21624__$2);
var seq21624__$3 = cljs.core.next.call(null,seq21624__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21625,G__21626,G__21627,seq21624__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21803 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21804){
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
this.meta21804 = meta21804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21805,meta21804__$1){
var self__ = this;
var _21805__$1 = this;
return (new cljs.core.async.t_cljs$core$async21803(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21804__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21805){
var self__ = this;
var _21805__$1 = this;
return self__.meta21804;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21803.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21804","meta21804",-1611322982,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21803";

cljs.core.async.t_cljs$core$async21803.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21803");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21803 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21803(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21804){
return (new cljs.core.async.t_cljs$core$async21803(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21804));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21803(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20253__auto___21966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21903){
var state_val_21904 = (state_21903[(1)]);
if((state_val_21904 === (7))){
var inst_21821 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
var statearr_21905_21967 = state_21903__$1;
(statearr_21905_21967[(2)] = inst_21821);

(statearr_21905_21967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (20))){
var inst_21833 = (state_21903[(7)]);
var state_21903__$1 = state_21903;
var statearr_21906_21968 = state_21903__$1;
(statearr_21906_21968[(2)] = inst_21833);

(statearr_21906_21968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (27))){
var state_21903__$1 = state_21903;
var statearr_21907_21969 = state_21903__$1;
(statearr_21907_21969[(2)] = null);

(statearr_21907_21969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (1))){
var inst_21809 = (state_21903[(8)]);
var inst_21809__$1 = calc_state.call(null);
var inst_21811 = (inst_21809__$1 == null);
var inst_21812 = cljs.core.not.call(null,inst_21811);
var state_21903__$1 = (function (){var statearr_21908 = state_21903;
(statearr_21908[(8)] = inst_21809__$1);

return statearr_21908;
})();
if(inst_21812){
var statearr_21909_21970 = state_21903__$1;
(statearr_21909_21970[(1)] = (2));

} else {
var statearr_21910_21971 = state_21903__$1;
(statearr_21910_21971[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (24))){
var inst_21856 = (state_21903[(9)]);
var inst_21877 = (state_21903[(10)]);
var inst_21863 = (state_21903[(11)]);
var inst_21877__$1 = inst_21856.call(null,inst_21863);
var state_21903__$1 = (function (){var statearr_21911 = state_21903;
(statearr_21911[(10)] = inst_21877__$1);

return statearr_21911;
})();
if(cljs.core.truth_(inst_21877__$1)){
var statearr_21912_21972 = state_21903__$1;
(statearr_21912_21972[(1)] = (29));

} else {
var statearr_21913_21973 = state_21903__$1;
(statearr_21913_21973[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (4))){
var inst_21824 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21824)){
var statearr_21914_21974 = state_21903__$1;
(statearr_21914_21974[(1)] = (8));

} else {
var statearr_21915_21975 = state_21903__$1;
(statearr_21915_21975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (15))){
var inst_21850 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21850)){
var statearr_21916_21976 = state_21903__$1;
(statearr_21916_21976[(1)] = (19));

} else {
var statearr_21917_21977 = state_21903__$1;
(statearr_21917_21977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (21))){
var inst_21855 = (state_21903[(12)]);
var inst_21855__$1 = (state_21903[(2)]);
var inst_21856 = cljs.core.get.call(null,inst_21855__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21857 = cljs.core.get.call(null,inst_21855__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21858 = cljs.core.get.call(null,inst_21855__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21903__$1 = (function (){var statearr_21918 = state_21903;
(statearr_21918[(9)] = inst_21856);

(statearr_21918[(13)] = inst_21857);

(statearr_21918[(12)] = inst_21855__$1);

return statearr_21918;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21903__$1,(22),inst_21858);
} else {
if((state_val_21904 === (31))){
var inst_21885 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21885)){
var statearr_21919_21978 = state_21903__$1;
(statearr_21919_21978[(1)] = (32));

} else {
var statearr_21920_21979 = state_21903__$1;
(statearr_21920_21979[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (32))){
var inst_21862 = (state_21903[(14)]);
var state_21903__$1 = state_21903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21903__$1,(35),out,inst_21862);
} else {
if((state_val_21904 === (33))){
var inst_21855 = (state_21903[(12)]);
var inst_21833 = inst_21855;
var state_21903__$1 = (function (){var statearr_21921 = state_21903;
(statearr_21921[(7)] = inst_21833);

return statearr_21921;
})();
var statearr_21922_21980 = state_21903__$1;
(statearr_21922_21980[(2)] = null);

(statearr_21922_21980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (13))){
var inst_21833 = (state_21903[(7)]);
var inst_21840 = inst_21833.cljs$lang$protocol_mask$partition0$;
var inst_21841 = (inst_21840 & (64));
var inst_21842 = inst_21833.cljs$core$ISeq$;
var inst_21843 = (inst_21841) || (inst_21842);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21843)){
var statearr_21923_21981 = state_21903__$1;
(statearr_21923_21981[(1)] = (16));

} else {
var statearr_21924_21982 = state_21903__$1;
(statearr_21924_21982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (22))){
var inst_21863 = (state_21903[(11)]);
var inst_21862 = (state_21903[(14)]);
var inst_21861 = (state_21903[(2)]);
var inst_21862__$1 = cljs.core.nth.call(null,inst_21861,(0),null);
var inst_21863__$1 = cljs.core.nth.call(null,inst_21861,(1),null);
var inst_21864 = (inst_21862__$1 == null);
var inst_21865 = cljs.core._EQ_.call(null,inst_21863__$1,change);
var inst_21866 = (inst_21864) || (inst_21865);
var state_21903__$1 = (function (){var statearr_21925 = state_21903;
(statearr_21925[(11)] = inst_21863__$1);

(statearr_21925[(14)] = inst_21862__$1);

return statearr_21925;
})();
if(cljs.core.truth_(inst_21866)){
var statearr_21926_21983 = state_21903__$1;
(statearr_21926_21983[(1)] = (23));

} else {
var statearr_21927_21984 = state_21903__$1;
(statearr_21927_21984[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (36))){
var inst_21855 = (state_21903[(12)]);
var inst_21833 = inst_21855;
var state_21903__$1 = (function (){var statearr_21928 = state_21903;
(statearr_21928[(7)] = inst_21833);

return statearr_21928;
})();
var statearr_21929_21985 = state_21903__$1;
(statearr_21929_21985[(2)] = null);

(statearr_21929_21985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (29))){
var inst_21877 = (state_21903[(10)]);
var state_21903__$1 = state_21903;
var statearr_21930_21986 = state_21903__$1;
(statearr_21930_21986[(2)] = inst_21877);

(statearr_21930_21986[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (6))){
var state_21903__$1 = state_21903;
var statearr_21931_21987 = state_21903__$1;
(statearr_21931_21987[(2)] = false);

(statearr_21931_21987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (28))){
var inst_21873 = (state_21903[(2)]);
var inst_21874 = calc_state.call(null);
var inst_21833 = inst_21874;
var state_21903__$1 = (function (){var statearr_21932 = state_21903;
(statearr_21932[(15)] = inst_21873);

(statearr_21932[(7)] = inst_21833);

return statearr_21932;
})();
var statearr_21933_21988 = state_21903__$1;
(statearr_21933_21988[(2)] = null);

(statearr_21933_21988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (25))){
var inst_21899 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
var statearr_21934_21989 = state_21903__$1;
(statearr_21934_21989[(2)] = inst_21899);

(statearr_21934_21989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (34))){
var inst_21897 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
var statearr_21935_21990 = state_21903__$1;
(statearr_21935_21990[(2)] = inst_21897);

(statearr_21935_21990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (17))){
var state_21903__$1 = state_21903;
var statearr_21936_21991 = state_21903__$1;
(statearr_21936_21991[(2)] = false);

(statearr_21936_21991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (3))){
var state_21903__$1 = state_21903;
var statearr_21937_21992 = state_21903__$1;
(statearr_21937_21992[(2)] = false);

(statearr_21937_21992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (12))){
var inst_21901 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21903__$1,inst_21901);
} else {
if((state_val_21904 === (2))){
var inst_21809 = (state_21903[(8)]);
var inst_21814 = inst_21809.cljs$lang$protocol_mask$partition0$;
var inst_21815 = (inst_21814 & (64));
var inst_21816 = inst_21809.cljs$core$ISeq$;
var inst_21817 = (inst_21815) || (inst_21816);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21817)){
var statearr_21938_21993 = state_21903__$1;
(statearr_21938_21993[(1)] = (5));

} else {
var statearr_21939_21994 = state_21903__$1;
(statearr_21939_21994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (23))){
var inst_21862 = (state_21903[(14)]);
var inst_21868 = (inst_21862 == null);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21868)){
var statearr_21940_21995 = state_21903__$1;
(statearr_21940_21995[(1)] = (26));

} else {
var statearr_21941_21996 = state_21903__$1;
(statearr_21941_21996[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (35))){
var inst_21888 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
if(cljs.core.truth_(inst_21888)){
var statearr_21942_21997 = state_21903__$1;
(statearr_21942_21997[(1)] = (36));

} else {
var statearr_21943_21998 = state_21903__$1;
(statearr_21943_21998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (19))){
var inst_21833 = (state_21903[(7)]);
var inst_21852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21833);
var state_21903__$1 = state_21903;
var statearr_21944_21999 = state_21903__$1;
(statearr_21944_21999[(2)] = inst_21852);

(statearr_21944_21999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (11))){
var inst_21833 = (state_21903[(7)]);
var inst_21837 = (inst_21833 == null);
var inst_21838 = cljs.core.not.call(null,inst_21837);
var state_21903__$1 = state_21903;
if(inst_21838){
var statearr_21945_22000 = state_21903__$1;
(statearr_21945_22000[(1)] = (13));

} else {
var statearr_21946_22001 = state_21903__$1;
(statearr_21946_22001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (9))){
var inst_21809 = (state_21903[(8)]);
var state_21903__$1 = state_21903;
var statearr_21947_22002 = state_21903__$1;
(statearr_21947_22002[(2)] = inst_21809);

(statearr_21947_22002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (5))){
var state_21903__$1 = state_21903;
var statearr_21948_22003 = state_21903__$1;
(statearr_21948_22003[(2)] = true);

(statearr_21948_22003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (14))){
var state_21903__$1 = state_21903;
var statearr_21949_22004 = state_21903__$1;
(statearr_21949_22004[(2)] = false);

(statearr_21949_22004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (26))){
var inst_21863 = (state_21903[(11)]);
var inst_21870 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21863);
var state_21903__$1 = state_21903;
var statearr_21950_22005 = state_21903__$1;
(statearr_21950_22005[(2)] = inst_21870);

(statearr_21950_22005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (16))){
var state_21903__$1 = state_21903;
var statearr_21951_22006 = state_21903__$1;
(statearr_21951_22006[(2)] = true);

(statearr_21951_22006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (38))){
var inst_21893 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
var statearr_21952_22007 = state_21903__$1;
(statearr_21952_22007[(2)] = inst_21893);

(statearr_21952_22007[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (30))){
var inst_21856 = (state_21903[(9)]);
var inst_21863 = (state_21903[(11)]);
var inst_21857 = (state_21903[(13)]);
var inst_21880 = cljs.core.empty_QMARK_.call(null,inst_21856);
var inst_21881 = inst_21857.call(null,inst_21863);
var inst_21882 = cljs.core.not.call(null,inst_21881);
var inst_21883 = (inst_21880) && (inst_21882);
var state_21903__$1 = state_21903;
var statearr_21953_22008 = state_21903__$1;
(statearr_21953_22008[(2)] = inst_21883);

(statearr_21953_22008[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (10))){
var inst_21809 = (state_21903[(8)]);
var inst_21829 = (state_21903[(2)]);
var inst_21830 = cljs.core.get.call(null,inst_21829,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21831 = cljs.core.get.call(null,inst_21829,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21832 = cljs.core.get.call(null,inst_21829,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21833 = inst_21809;
var state_21903__$1 = (function (){var statearr_21954 = state_21903;
(statearr_21954[(16)] = inst_21832);

(statearr_21954[(17)] = inst_21830);

(statearr_21954[(18)] = inst_21831);

(statearr_21954[(7)] = inst_21833);

return statearr_21954;
})();
var statearr_21955_22009 = state_21903__$1;
(statearr_21955_22009[(2)] = null);

(statearr_21955_22009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (18))){
var inst_21847 = (state_21903[(2)]);
var state_21903__$1 = state_21903;
var statearr_21956_22010 = state_21903__$1;
(statearr_21956_22010[(2)] = inst_21847);

(statearr_21956_22010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (37))){
var state_21903__$1 = state_21903;
var statearr_21957_22011 = state_21903__$1;
(statearr_21957_22011[(2)] = null);

(statearr_21957_22011[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21904 === (8))){
var inst_21809 = (state_21903[(8)]);
var inst_21826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21809);
var state_21903__$1 = state_21903;
var statearr_21958_22012 = state_21903__$1;
(statearr_21958_22012[(2)] = inst_21826);

(statearr_21958_22012[(1)] = (10));


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
});})(c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20141__auto__,c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20142__auto__ = null;
var cljs$core$async$mix_$_state_machine__20142__auto____0 = (function (){
var statearr_21962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21962[(0)] = cljs$core$async$mix_$_state_machine__20142__auto__);

(statearr_21962[(1)] = (1));

return statearr_21962;
});
var cljs$core$async$mix_$_state_machine__20142__auto____1 = (function (state_21903){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_21903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e21963){if((e21963 instanceof Object)){
var ex__20145__auto__ = e21963;
var statearr_21964_22013 = state_21903;
(statearr_21964_22013[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22014 = state_21903;
state_21903 = G__22014;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20142__auto__ = function(state_21903){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20142__auto____1.call(this,state_21903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20142__auto____0;
cljs$core$async$mix_$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20142__auto____1;
return cljs$core$async$mix_$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20255__auto__ = (function (){var statearr_21965 = f__20254__auto__.call(null);
(statearr_21965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___21966);

return statearr_21965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___21966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22015 = [];
var len__17884__auto___22018 = arguments.length;
var i__17885__auto___22019 = (0);
while(true){
if((i__17885__auto___22019 < len__17884__auto___22018)){
args22015.push((arguments[i__17885__auto___22019]));

var G__22020 = (i__17885__auto___22019 + (1));
i__17885__auto___22019 = G__22020;
continue;
} else {
}
break;
}

var G__22017 = args22015.length;
switch (G__22017) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22015.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
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
var args22023 = [];
var len__17884__auto___22148 = arguments.length;
var i__17885__auto___22149 = (0);
while(true){
if((i__17885__auto___22149 < len__17884__auto___22148)){
args22023.push((arguments[i__17885__auto___22149]));

var G__22150 = (i__17885__auto___22149 + (1));
i__17885__auto___22149 = G__22150;
continue;
} else {
}
break;
}

var G__22025 = args22023.length;
switch (G__22025) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22023.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__22022_SHARP_){
if(cljs.core.truth_(p1__22022_SHARP_.call(null,topic))){
return p1__22022_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22022_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22026 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22027){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22027 = meta22027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22028,meta22027__$1){
var self__ = this;
var _22028__$1 = this;
return (new cljs.core.async.t_cljs$core$async22026(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22027__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22028){
var self__ = this;
var _22028__$1 = this;
return self__.meta22027;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22027","meta22027",1261940379,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22026";

cljs.core.async.t_cljs$core$async22026.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22026");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22026 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22027){
return (new cljs.core.async.t_cljs$core$async22026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22027));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22026(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20253__auto___22152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22152,mults,ensure_mult,p){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22152,mults,ensure_mult,p){
return (function (state_22100){
var state_val_22101 = (state_22100[(1)]);
if((state_val_22101 === (7))){
var inst_22096 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22102_22153 = state_22100__$1;
(statearr_22102_22153[(2)] = inst_22096);

(statearr_22102_22153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (20))){
var state_22100__$1 = state_22100;
var statearr_22103_22154 = state_22100__$1;
(statearr_22103_22154[(2)] = null);

(statearr_22103_22154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (1))){
var state_22100__$1 = state_22100;
var statearr_22104_22155 = state_22100__$1;
(statearr_22104_22155[(2)] = null);

(statearr_22104_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (24))){
var inst_22079 = (state_22100[(7)]);
var inst_22088 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22079);
var state_22100__$1 = state_22100;
var statearr_22105_22156 = state_22100__$1;
(statearr_22105_22156[(2)] = inst_22088);

(statearr_22105_22156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (4))){
var inst_22031 = (state_22100[(8)]);
var inst_22031__$1 = (state_22100[(2)]);
var inst_22032 = (inst_22031__$1 == null);
var state_22100__$1 = (function (){var statearr_22106 = state_22100;
(statearr_22106[(8)] = inst_22031__$1);

return statearr_22106;
})();
if(cljs.core.truth_(inst_22032)){
var statearr_22107_22157 = state_22100__$1;
(statearr_22107_22157[(1)] = (5));

} else {
var statearr_22108_22158 = state_22100__$1;
(statearr_22108_22158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (15))){
var inst_22073 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22109_22159 = state_22100__$1;
(statearr_22109_22159[(2)] = inst_22073);

(statearr_22109_22159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (21))){
var inst_22093 = (state_22100[(2)]);
var state_22100__$1 = (function (){var statearr_22110 = state_22100;
(statearr_22110[(9)] = inst_22093);

return statearr_22110;
})();
var statearr_22111_22160 = state_22100__$1;
(statearr_22111_22160[(2)] = null);

(statearr_22111_22160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (13))){
var inst_22055 = (state_22100[(10)]);
var inst_22057 = cljs.core.chunked_seq_QMARK_.call(null,inst_22055);
var state_22100__$1 = state_22100;
if(inst_22057){
var statearr_22112_22161 = state_22100__$1;
(statearr_22112_22161[(1)] = (16));

} else {
var statearr_22113_22162 = state_22100__$1;
(statearr_22113_22162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (22))){
var inst_22085 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
if(cljs.core.truth_(inst_22085)){
var statearr_22114_22163 = state_22100__$1;
(statearr_22114_22163[(1)] = (23));

} else {
var statearr_22115_22164 = state_22100__$1;
(statearr_22115_22164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (6))){
var inst_22081 = (state_22100[(11)]);
var inst_22079 = (state_22100[(7)]);
var inst_22031 = (state_22100[(8)]);
var inst_22079__$1 = topic_fn.call(null,inst_22031);
var inst_22080 = cljs.core.deref.call(null,mults);
var inst_22081__$1 = cljs.core.get.call(null,inst_22080,inst_22079__$1);
var state_22100__$1 = (function (){var statearr_22116 = state_22100;
(statearr_22116[(11)] = inst_22081__$1);

(statearr_22116[(7)] = inst_22079__$1);

return statearr_22116;
})();
if(cljs.core.truth_(inst_22081__$1)){
var statearr_22117_22165 = state_22100__$1;
(statearr_22117_22165[(1)] = (19));

} else {
var statearr_22118_22166 = state_22100__$1;
(statearr_22118_22166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (25))){
var inst_22090 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22119_22167 = state_22100__$1;
(statearr_22119_22167[(2)] = inst_22090);

(statearr_22119_22167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (17))){
var inst_22055 = (state_22100[(10)]);
var inst_22064 = cljs.core.first.call(null,inst_22055);
var inst_22065 = cljs.core.async.muxch_STAR_.call(null,inst_22064);
var inst_22066 = cljs.core.async.close_BANG_.call(null,inst_22065);
var inst_22067 = cljs.core.next.call(null,inst_22055);
var inst_22041 = inst_22067;
var inst_22042 = null;
var inst_22043 = (0);
var inst_22044 = (0);
var state_22100__$1 = (function (){var statearr_22120 = state_22100;
(statearr_22120[(12)] = inst_22066);

(statearr_22120[(13)] = inst_22041);

(statearr_22120[(14)] = inst_22042);

(statearr_22120[(15)] = inst_22043);

(statearr_22120[(16)] = inst_22044);

return statearr_22120;
})();
var statearr_22121_22168 = state_22100__$1;
(statearr_22121_22168[(2)] = null);

(statearr_22121_22168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (3))){
var inst_22098 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22100__$1,inst_22098);
} else {
if((state_val_22101 === (12))){
var inst_22075 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22122_22169 = state_22100__$1;
(statearr_22122_22169[(2)] = inst_22075);

(statearr_22122_22169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (2))){
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22100__$1,(4),ch);
} else {
if((state_val_22101 === (23))){
var state_22100__$1 = state_22100;
var statearr_22123_22170 = state_22100__$1;
(statearr_22123_22170[(2)] = null);

(statearr_22123_22170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (19))){
var inst_22081 = (state_22100[(11)]);
var inst_22031 = (state_22100[(8)]);
var inst_22083 = cljs.core.async.muxch_STAR_.call(null,inst_22081);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(22),inst_22083,inst_22031);
} else {
if((state_val_22101 === (11))){
var inst_22041 = (state_22100[(13)]);
var inst_22055 = (state_22100[(10)]);
var inst_22055__$1 = cljs.core.seq.call(null,inst_22041);
var state_22100__$1 = (function (){var statearr_22124 = state_22100;
(statearr_22124[(10)] = inst_22055__$1);

return statearr_22124;
})();
if(inst_22055__$1){
var statearr_22125_22171 = state_22100__$1;
(statearr_22125_22171[(1)] = (13));

} else {
var statearr_22126_22172 = state_22100__$1;
(statearr_22126_22172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (9))){
var inst_22077 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22127_22173 = state_22100__$1;
(statearr_22127_22173[(2)] = inst_22077);

(statearr_22127_22173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (5))){
var inst_22038 = cljs.core.deref.call(null,mults);
var inst_22039 = cljs.core.vals.call(null,inst_22038);
var inst_22040 = cljs.core.seq.call(null,inst_22039);
var inst_22041 = inst_22040;
var inst_22042 = null;
var inst_22043 = (0);
var inst_22044 = (0);
var state_22100__$1 = (function (){var statearr_22128 = state_22100;
(statearr_22128[(13)] = inst_22041);

(statearr_22128[(14)] = inst_22042);

(statearr_22128[(15)] = inst_22043);

(statearr_22128[(16)] = inst_22044);

return statearr_22128;
})();
var statearr_22129_22174 = state_22100__$1;
(statearr_22129_22174[(2)] = null);

(statearr_22129_22174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (14))){
var state_22100__$1 = state_22100;
var statearr_22133_22175 = state_22100__$1;
(statearr_22133_22175[(2)] = null);

(statearr_22133_22175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (16))){
var inst_22055 = (state_22100[(10)]);
var inst_22059 = cljs.core.chunk_first.call(null,inst_22055);
var inst_22060 = cljs.core.chunk_rest.call(null,inst_22055);
var inst_22061 = cljs.core.count.call(null,inst_22059);
var inst_22041 = inst_22060;
var inst_22042 = inst_22059;
var inst_22043 = inst_22061;
var inst_22044 = (0);
var state_22100__$1 = (function (){var statearr_22134 = state_22100;
(statearr_22134[(13)] = inst_22041);

(statearr_22134[(14)] = inst_22042);

(statearr_22134[(15)] = inst_22043);

(statearr_22134[(16)] = inst_22044);

return statearr_22134;
})();
var statearr_22135_22176 = state_22100__$1;
(statearr_22135_22176[(2)] = null);

(statearr_22135_22176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (10))){
var inst_22041 = (state_22100[(13)]);
var inst_22042 = (state_22100[(14)]);
var inst_22043 = (state_22100[(15)]);
var inst_22044 = (state_22100[(16)]);
var inst_22049 = cljs.core._nth.call(null,inst_22042,inst_22044);
var inst_22050 = cljs.core.async.muxch_STAR_.call(null,inst_22049);
var inst_22051 = cljs.core.async.close_BANG_.call(null,inst_22050);
var inst_22052 = (inst_22044 + (1));
var tmp22130 = inst_22041;
var tmp22131 = inst_22042;
var tmp22132 = inst_22043;
var inst_22041__$1 = tmp22130;
var inst_22042__$1 = tmp22131;
var inst_22043__$1 = tmp22132;
var inst_22044__$1 = inst_22052;
var state_22100__$1 = (function (){var statearr_22136 = state_22100;
(statearr_22136[(13)] = inst_22041__$1);

(statearr_22136[(14)] = inst_22042__$1);

(statearr_22136[(17)] = inst_22051);

(statearr_22136[(15)] = inst_22043__$1);

(statearr_22136[(16)] = inst_22044__$1);

return statearr_22136;
})();
var statearr_22137_22177 = state_22100__$1;
(statearr_22137_22177[(2)] = null);

(statearr_22137_22177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (18))){
var inst_22070 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22138_22178 = state_22100__$1;
(statearr_22138_22178[(2)] = inst_22070);

(statearr_22138_22178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (8))){
var inst_22043 = (state_22100[(15)]);
var inst_22044 = (state_22100[(16)]);
var inst_22046 = (inst_22044 < inst_22043);
var inst_22047 = inst_22046;
var state_22100__$1 = state_22100;
if(cljs.core.truth_(inst_22047)){
var statearr_22139_22179 = state_22100__$1;
(statearr_22139_22179[(1)] = (10));

} else {
var statearr_22140_22180 = state_22100__$1;
(statearr_22140_22180[(1)] = (11));

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
});})(c__20253__auto___22152,mults,ensure_mult,p))
;
return ((function (switch__20141__auto__,c__20253__auto___22152,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22144[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22144[(1)] = (1));

return statearr_22144;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22100){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22145){if((e22145 instanceof Object)){
var ex__20145__auto__ = e22145;
var statearr_22146_22181 = state_22100;
(statearr_22146_22181[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22182 = state_22100;
state_22100 = G__22182;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22152,mults,ensure_mult,p))
})();
var state__20255__auto__ = (function (){var statearr_22147 = f__20254__auto__.call(null);
(statearr_22147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22152);

return statearr_22147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22152,mults,ensure_mult,p))
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
var args22183 = [];
var len__17884__auto___22186 = arguments.length;
var i__17885__auto___22187 = (0);
while(true){
if((i__17885__auto___22187 < len__17884__auto___22186)){
args22183.push((arguments[i__17885__auto___22187]));

var G__22188 = (i__17885__auto___22187 + (1));
i__17885__auto___22187 = G__22188;
continue;
} else {
}
break;
}

var G__22185 = args22183.length;
switch (G__22185) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22183.length)].join('')));

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
var args22190 = [];
var len__17884__auto___22193 = arguments.length;
var i__17885__auto___22194 = (0);
while(true){
if((i__17885__auto___22194 < len__17884__auto___22193)){
args22190.push((arguments[i__17885__auto___22194]));

var G__22195 = (i__17885__auto___22194 + (1));
i__17885__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var G__22192 = args22190.length;
switch (G__22192) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22190.length)].join('')));

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
var args22197 = [];
var len__17884__auto___22268 = arguments.length;
var i__17885__auto___22269 = (0);
while(true){
if((i__17885__auto___22269 < len__17884__auto___22268)){
args22197.push((arguments[i__17885__auto___22269]));

var G__22270 = (i__17885__auto___22269 + (1));
i__17885__auto___22269 = G__22270;
continue;
} else {
}
break;
}

var G__22199 = args22197.length;
switch (G__22199) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22197.length)].join('')));

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
var c__20253__auto___22272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22238){
var state_val_22239 = (state_22238[(1)]);
if((state_val_22239 === (7))){
var state_22238__$1 = state_22238;
var statearr_22240_22273 = state_22238__$1;
(statearr_22240_22273[(2)] = null);

(statearr_22240_22273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (1))){
var state_22238__$1 = state_22238;
var statearr_22241_22274 = state_22238__$1;
(statearr_22241_22274[(2)] = null);

(statearr_22241_22274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (4))){
var inst_22202 = (state_22238[(7)]);
var inst_22204 = (inst_22202 < cnt);
var state_22238__$1 = state_22238;
if(cljs.core.truth_(inst_22204)){
var statearr_22242_22275 = state_22238__$1;
(statearr_22242_22275[(1)] = (6));

} else {
var statearr_22243_22276 = state_22238__$1;
(statearr_22243_22276[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (15))){
var inst_22234 = (state_22238[(2)]);
var state_22238__$1 = state_22238;
var statearr_22244_22277 = state_22238__$1;
(statearr_22244_22277[(2)] = inst_22234);

(statearr_22244_22277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (13))){
var inst_22227 = cljs.core.async.close_BANG_.call(null,out);
var state_22238__$1 = state_22238;
var statearr_22245_22278 = state_22238__$1;
(statearr_22245_22278[(2)] = inst_22227);

(statearr_22245_22278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (6))){
var state_22238__$1 = state_22238;
var statearr_22246_22279 = state_22238__$1;
(statearr_22246_22279[(2)] = null);

(statearr_22246_22279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (3))){
var inst_22236 = (state_22238[(2)]);
var state_22238__$1 = state_22238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22238__$1,inst_22236);
} else {
if((state_val_22239 === (12))){
var inst_22224 = (state_22238[(8)]);
var inst_22224__$1 = (state_22238[(2)]);
var inst_22225 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22224__$1);
var state_22238__$1 = (function (){var statearr_22247 = state_22238;
(statearr_22247[(8)] = inst_22224__$1);

return statearr_22247;
})();
if(cljs.core.truth_(inst_22225)){
var statearr_22248_22280 = state_22238__$1;
(statearr_22248_22280[(1)] = (13));

} else {
var statearr_22249_22281 = state_22238__$1;
(statearr_22249_22281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (2))){
var inst_22201 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22202 = (0);
var state_22238__$1 = (function (){var statearr_22250 = state_22238;
(statearr_22250[(7)] = inst_22202);

(statearr_22250[(9)] = inst_22201);

return statearr_22250;
})();
var statearr_22251_22282 = state_22238__$1;
(statearr_22251_22282[(2)] = null);

(statearr_22251_22282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (11))){
var inst_22202 = (state_22238[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22238,(10),Object,null,(9));
var inst_22211 = chs__$1.call(null,inst_22202);
var inst_22212 = done.call(null,inst_22202);
var inst_22213 = cljs.core.async.take_BANG_.call(null,inst_22211,inst_22212);
var state_22238__$1 = state_22238;
var statearr_22252_22283 = state_22238__$1;
(statearr_22252_22283[(2)] = inst_22213);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (9))){
var inst_22202 = (state_22238[(7)]);
var inst_22215 = (state_22238[(2)]);
var inst_22216 = (inst_22202 + (1));
var inst_22202__$1 = inst_22216;
var state_22238__$1 = (function (){var statearr_22253 = state_22238;
(statearr_22253[(7)] = inst_22202__$1);

(statearr_22253[(10)] = inst_22215);

return statearr_22253;
})();
var statearr_22254_22284 = state_22238__$1;
(statearr_22254_22284[(2)] = null);

(statearr_22254_22284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (5))){
var inst_22222 = (state_22238[(2)]);
var state_22238__$1 = (function (){var statearr_22255 = state_22238;
(statearr_22255[(11)] = inst_22222);

return statearr_22255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22238__$1,(12),dchan);
} else {
if((state_val_22239 === (14))){
var inst_22224 = (state_22238[(8)]);
var inst_22229 = cljs.core.apply.call(null,f,inst_22224);
var state_22238__$1 = state_22238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22238__$1,(16),out,inst_22229);
} else {
if((state_val_22239 === (16))){
var inst_22231 = (state_22238[(2)]);
var state_22238__$1 = (function (){var statearr_22256 = state_22238;
(statearr_22256[(12)] = inst_22231);

return statearr_22256;
})();
var statearr_22257_22285 = state_22238__$1;
(statearr_22257_22285[(2)] = null);

(statearr_22257_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (10))){
var inst_22206 = (state_22238[(2)]);
var inst_22207 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22238__$1 = (function (){var statearr_22258 = state_22238;
(statearr_22258[(13)] = inst_22206);

return statearr_22258;
})();
var statearr_22259_22286 = state_22238__$1;
(statearr_22259_22286[(2)] = inst_22207);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (8))){
var inst_22220 = (state_22238[(2)]);
var state_22238__$1 = state_22238;
var statearr_22260_22287 = state_22238__$1;
(statearr_22260_22287[(2)] = inst_22220);

(statearr_22260_22287[(1)] = (5));


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
});})(c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20141__auto__,c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22264[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22264[(1)] = (1));

return statearr_22264;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22238){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22265){if((e22265 instanceof Object)){
var ex__20145__auto__ = e22265;
var statearr_22266_22288 = state_22238;
(statearr_22266_22288[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22289 = state_22238;
state_22238 = G__22289;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20255__auto__ = (function (){var statearr_22267 = f__20254__auto__.call(null);
(statearr_22267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22272);

return statearr_22267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22272,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22291 = [];
var len__17884__auto___22347 = arguments.length;
var i__17885__auto___22348 = (0);
while(true){
if((i__17885__auto___22348 < len__17884__auto___22347)){
args22291.push((arguments[i__17885__auto___22348]));

var G__22349 = (i__17885__auto___22348 + (1));
i__17885__auto___22348 = G__22349;
continue;
} else {
}
break;
}

var G__22293 = args22291.length;
switch (G__22293) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22291.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___22351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22351,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22351,out){
return (function (state_22323){
var state_val_22324 = (state_22323[(1)]);
if((state_val_22324 === (7))){
var inst_22302 = (state_22323[(7)]);
var inst_22303 = (state_22323[(8)]);
var inst_22302__$1 = (state_22323[(2)]);
var inst_22303__$1 = cljs.core.nth.call(null,inst_22302__$1,(0),null);
var inst_22304 = cljs.core.nth.call(null,inst_22302__$1,(1),null);
var inst_22305 = (inst_22303__$1 == null);
var state_22323__$1 = (function (){var statearr_22325 = state_22323;
(statearr_22325[(7)] = inst_22302__$1);

(statearr_22325[(8)] = inst_22303__$1);

(statearr_22325[(9)] = inst_22304);

return statearr_22325;
})();
if(cljs.core.truth_(inst_22305)){
var statearr_22326_22352 = state_22323__$1;
(statearr_22326_22352[(1)] = (8));

} else {
var statearr_22327_22353 = state_22323__$1;
(statearr_22327_22353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (1))){
var inst_22294 = cljs.core.vec.call(null,chs);
var inst_22295 = inst_22294;
var state_22323__$1 = (function (){var statearr_22328 = state_22323;
(statearr_22328[(10)] = inst_22295);

return statearr_22328;
})();
var statearr_22329_22354 = state_22323__$1;
(statearr_22329_22354[(2)] = null);

(statearr_22329_22354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (4))){
var inst_22295 = (state_22323[(10)]);
var state_22323__$1 = state_22323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22323__$1,(7),inst_22295);
} else {
if((state_val_22324 === (6))){
var inst_22319 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
var statearr_22330_22355 = state_22323__$1;
(statearr_22330_22355[(2)] = inst_22319);

(statearr_22330_22355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (3))){
var inst_22321 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22323__$1,inst_22321);
} else {
if((state_val_22324 === (2))){
var inst_22295 = (state_22323[(10)]);
var inst_22297 = cljs.core.count.call(null,inst_22295);
var inst_22298 = (inst_22297 > (0));
var state_22323__$1 = state_22323;
if(cljs.core.truth_(inst_22298)){
var statearr_22332_22356 = state_22323__$1;
(statearr_22332_22356[(1)] = (4));

} else {
var statearr_22333_22357 = state_22323__$1;
(statearr_22333_22357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (11))){
var inst_22295 = (state_22323[(10)]);
var inst_22312 = (state_22323[(2)]);
var tmp22331 = inst_22295;
var inst_22295__$1 = tmp22331;
var state_22323__$1 = (function (){var statearr_22334 = state_22323;
(statearr_22334[(11)] = inst_22312);

(statearr_22334[(10)] = inst_22295__$1);

return statearr_22334;
})();
var statearr_22335_22358 = state_22323__$1;
(statearr_22335_22358[(2)] = null);

(statearr_22335_22358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (9))){
var inst_22303 = (state_22323[(8)]);
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22323__$1,(11),out,inst_22303);
} else {
if((state_val_22324 === (5))){
var inst_22317 = cljs.core.async.close_BANG_.call(null,out);
var state_22323__$1 = state_22323;
var statearr_22336_22359 = state_22323__$1;
(statearr_22336_22359[(2)] = inst_22317);

(statearr_22336_22359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (10))){
var inst_22315 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
var statearr_22337_22360 = state_22323__$1;
(statearr_22337_22360[(2)] = inst_22315);

(statearr_22337_22360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (8))){
var inst_22302 = (state_22323[(7)]);
var inst_22303 = (state_22323[(8)]);
var inst_22295 = (state_22323[(10)]);
var inst_22304 = (state_22323[(9)]);
var inst_22307 = (function (){var cs = inst_22295;
var vec__22300 = inst_22302;
var v = inst_22303;
var c = inst_22304;
return ((function (cs,vec__22300,v,c,inst_22302,inst_22303,inst_22295,inst_22304,state_val_22324,c__20253__auto___22351,out){
return (function (p1__22290_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22290_SHARP_);
});
;})(cs,vec__22300,v,c,inst_22302,inst_22303,inst_22295,inst_22304,state_val_22324,c__20253__auto___22351,out))
})();
var inst_22308 = cljs.core.filterv.call(null,inst_22307,inst_22295);
var inst_22295__$1 = inst_22308;
var state_22323__$1 = (function (){var statearr_22338 = state_22323;
(statearr_22338[(10)] = inst_22295__$1);

return statearr_22338;
})();
var statearr_22339_22361 = state_22323__$1;
(statearr_22339_22361[(2)] = null);

(statearr_22339_22361[(1)] = (2));


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
});})(c__20253__auto___22351,out))
;
return ((function (switch__20141__auto__,c__20253__auto___22351,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22343[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22343[(1)] = (1));

return statearr_22343;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22323){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22344){if((e22344 instanceof Object)){
var ex__20145__auto__ = e22344;
var statearr_22345_22362 = state_22323;
(statearr_22345_22362[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22363 = state_22323;
state_22323 = G__22363;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22351,out))
})();
var state__20255__auto__ = (function (){var statearr_22346 = f__20254__auto__.call(null);
(statearr_22346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22351);

return statearr_22346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22351,out))
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
var args22364 = [];
var len__17884__auto___22413 = arguments.length;
var i__17885__auto___22414 = (0);
while(true){
if((i__17885__auto___22414 < len__17884__auto___22413)){
args22364.push((arguments[i__17885__auto___22414]));

var G__22415 = (i__17885__auto___22414 + (1));
i__17885__auto___22414 = G__22415;
continue;
} else {
}
break;
}

var G__22366 = args22364.length;
switch (G__22366) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22364.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___22417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22417,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22417,out){
return (function (state_22390){
var state_val_22391 = (state_22390[(1)]);
if((state_val_22391 === (7))){
var inst_22372 = (state_22390[(7)]);
var inst_22372__$1 = (state_22390[(2)]);
var inst_22373 = (inst_22372__$1 == null);
var inst_22374 = cljs.core.not.call(null,inst_22373);
var state_22390__$1 = (function (){var statearr_22392 = state_22390;
(statearr_22392[(7)] = inst_22372__$1);

return statearr_22392;
})();
if(inst_22374){
var statearr_22393_22418 = state_22390__$1;
(statearr_22393_22418[(1)] = (8));

} else {
var statearr_22394_22419 = state_22390__$1;
(statearr_22394_22419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (1))){
var inst_22367 = (0);
var state_22390__$1 = (function (){var statearr_22395 = state_22390;
(statearr_22395[(8)] = inst_22367);

return statearr_22395;
})();
var statearr_22396_22420 = state_22390__$1;
(statearr_22396_22420[(2)] = null);

(statearr_22396_22420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (4))){
var state_22390__$1 = state_22390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22390__$1,(7),ch);
} else {
if((state_val_22391 === (6))){
var inst_22385 = (state_22390[(2)]);
var state_22390__$1 = state_22390;
var statearr_22397_22421 = state_22390__$1;
(statearr_22397_22421[(2)] = inst_22385);

(statearr_22397_22421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (3))){
var inst_22387 = (state_22390[(2)]);
var inst_22388 = cljs.core.async.close_BANG_.call(null,out);
var state_22390__$1 = (function (){var statearr_22398 = state_22390;
(statearr_22398[(9)] = inst_22387);

return statearr_22398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22390__$1,inst_22388);
} else {
if((state_val_22391 === (2))){
var inst_22367 = (state_22390[(8)]);
var inst_22369 = (inst_22367 < n);
var state_22390__$1 = state_22390;
if(cljs.core.truth_(inst_22369)){
var statearr_22399_22422 = state_22390__$1;
(statearr_22399_22422[(1)] = (4));

} else {
var statearr_22400_22423 = state_22390__$1;
(statearr_22400_22423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (11))){
var inst_22367 = (state_22390[(8)]);
var inst_22377 = (state_22390[(2)]);
var inst_22378 = (inst_22367 + (1));
var inst_22367__$1 = inst_22378;
var state_22390__$1 = (function (){var statearr_22401 = state_22390;
(statearr_22401[(8)] = inst_22367__$1);

(statearr_22401[(10)] = inst_22377);

return statearr_22401;
})();
var statearr_22402_22424 = state_22390__$1;
(statearr_22402_22424[(2)] = null);

(statearr_22402_22424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (9))){
var state_22390__$1 = state_22390;
var statearr_22403_22425 = state_22390__$1;
(statearr_22403_22425[(2)] = null);

(statearr_22403_22425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (5))){
var state_22390__$1 = state_22390;
var statearr_22404_22426 = state_22390__$1;
(statearr_22404_22426[(2)] = null);

(statearr_22404_22426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (10))){
var inst_22382 = (state_22390[(2)]);
var state_22390__$1 = state_22390;
var statearr_22405_22427 = state_22390__$1;
(statearr_22405_22427[(2)] = inst_22382);

(statearr_22405_22427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (8))){
var inst_22372 = (state_22390[(7)]);
var state_22390__$1 = state_22390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22390__$1,(11),out,inst_22372);
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
});})(c__20253__auto___22417,out))
;
return ((function (switch__20141__auto__,c__20253__auto___22417,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22409[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22409[(1)] = (1));

return statearr_22409;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22390){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22410){if((e22410 instanceof Object)){
var ex__20145__auto__ = e22410;
var statearr_22411_22428 = state_22390;
(statearr_22411_22428[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22429 = state_22390;
state_22390 = G__22429;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22417,out))
})();
var state__20255__auto__ = (function (){var statearr_22412 = f__20254__auto__.call(null);
(statearr_22412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22417);

return statearr_22412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22417,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22437 = (function (map_LT_,f,ch,meta22438){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22438 = meta22438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22439,meta22438__$1){
var self__ = this;
var _22439__$1 = this;
return (new cljs.core.async.t_cljs$core$async22437(self__.map_LT_,self__.f,self__.ch,meta22438__$1));
});

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22439){
var self__ = this;
var _22439__$1 = this;
return self__.meta22438;
});

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22440 = (function (map_LT_,f,ch,meta22438,_,fn1,meta22441){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22438 = meta22438;
this._ = _;
this.fn1 = fn1;
this.meta22441 = meta22441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22442,meta22441__$1){
var self__ = this;
var _22442__$1 = this;
return (new cljs.core.async.t_cljs$core$async22440(self__.map_LT_,self__.f,self__.ch,self__.meta22438,self__._,self__.fn1,meta22441__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22442){
var self__ = this;
var _22442__$1 = this;
return self__.meta22441;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22430_SHARP_){
return f1.call(null,(((p1__22430_SHARP_ == null))?null:self__.f.call(null,p1__22430_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22438","meta22438",1645754946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22437","cljs.core.async/t_cljs$core$async22437",928743415,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22441","meta22441",31567450,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22440";

cljs.core.async.t_cljs$core$async22440.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22440");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22440 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22440(map_LT___$1,f__$1,ch__$1,meta22438__$1,___$2,fn1__$1,meta22441){
return (new cljs.core.async.t_cljs$core$async22440(map_LT___$1,f__$1,ch__$1,meta22438__$1,___$2,fn1__$1,meta22441));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22440(self__.map_LT_,self__.f,self__.ch,self__.meta22438,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22438","meta22438",1645754946,null)], null);
});

cljs.core.async.t_cljs$core$async22437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22437";

cljs.core.async.t_cljs$core$async22437.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22437");
});

cljs.core.async.__GT_t_cljs$core$async22437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22437(map_LT___$1,f__$1,ch__$1,meta22438){
return (new cljs.core.async.t_cljs$core$async22437(map_LT___$1,f__$1,ch__$1,meta22438));
});

}

return (new cljs.core.async.t_cljs$core$async22437(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22446 = (function (map_GT_,f,ch,meta22447){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22447 = meta22447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22448,meta22447__$1){
var self__ = this;
var _22448__$1 = this;
return (new cljs.core.async.t_cljs$core$async22446(self__.map_GT_,self__.f,self__.ch,meta22447__$1));
});

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22448){
var self__ = this;
var _22448__$1 = this;
return self__.meta22447;
});

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22447","meta22447",-669680830,null)], null);
});

cljs.core.async.t_cljs$core$async22446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22446";

cljs.core.async.t_cljs$core$async22446.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22446");
});

cljs.core.async.__GT_t_cljs$core$async22446 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22446(map_GT___$1,f__$1,ch__$1,meta22447){
return (new cljs.core.async.t_cljs$core$async22446(map_GT___$1,f__$1,ch__$1,meta22447));
});

}

return (new cljs.core.async.t_cljs$core$async22446(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22452 = (function (filter_GT_,p,ch,meta22453){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22453 = meta22453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22454,meta22453__$1){
var self__ = this;
var _22454__$1 = this;
return (new cljs.core.async.t_cljs$core$async22452(self__.filter_GT_,self__.p,self__.ch,meta22453__$1));
});

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22454){
var self__ = this;
var _22454__$1 = this;
return self__.meta22453;
});

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22453","meta22453",-2070767262,null)], null);
});

cljs.core.async.t_cljs$core$async22452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22452";

cljs.core.async.t_cljs$core$async22452.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22452");
});

cljs.core.async.__GT_t_cljs$core$async22452 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22452(filter_GT___$1,p__$1,ch__$1,meta22453){
return (new cljs.core.async.t_cljs$core$async22452(filter_GT___$1,p__$1,ch__$1,meta22453));
});

}

return (new cljs.core.async.t_cljs$core$async22452(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22455 = [];
var len__17884__auto___22499 = arguments.length;
var i__17885__auto___22500 = (0);
while(true){
if((i__17885__auto___22500 < len__17884__auto___22499)){
args22455.push((arguments[i__17885__auto___22500]));

var G__22501 = (i__17885__auto___22500 + (1));
i__17885__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var G__22457 = args22455.length;
switch (G__22457) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22455.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___22503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22503,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22503,out){
return (function (state_22478){
var state_val_22479 = (state_22478[(1)]);
if((state_val_22479 === (7))){
var inst_22474 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
var statearr_22480_22504 = state_22478__$1;
(statearr_22480_22504[(2)] = inst_22474);

(statearr_22480_22504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (1))){
var state_22478__$1 = state_22478;
var statearr_22481_22505 = state_22478__$1;
(statearr_22481_22505[(2)] = null);

(statearr_22481_22505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (4))){
var inst_22460 = (state_22478[(7)]);
var inst_22460__$1 = (state_22478[(2)]);
var inst_22461 = (inst_22460__$1 == null);
var state_22478__$1 = (function (){var statearr_22482 = state_22478;
(statearr_22482[(7)] = inst_22460__$1);

return statearr_22482;
})();
if(cljs.core.truth_(inst_22461)){
var statearr_22483_22506 = state_22478__$1;
(statearr_22483_22506[(1)] = (5));

} else {
var statearr_22484_22507 = state_22478__$1;
(statearr_22484_22507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (6))){
var inst_22460 = (state_22478[(7)]);
var inst_22465 = p.call(null,inst_22460);
var state_22478__$1 = state_22478;
if(cljs.core.truth_(inst_22465)){
var statearr_22485_22508 = state_22478__$1;
(statearr_22485_22508[(1)] = (8));

} else {
var statearr_22486_22509 = state_22478__$1;
(statearr_22486_22509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (3))){
var inst_22476 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22478__$1,inst_22476);
} else {
if((state_val_22479 === (2))){
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22478__$1,(4),ch);
} else {
if((state_val_22479 === (11))){
var inst_22468 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
var statearr_22487_22510 = state_22478__$1;
(statearr_22487_22510[(2)] = inst_22468);

(statearr_22487_22510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (9))){
var state_22478__$1 = state_22478;
var statearr_22488_22511 = state_22478__$1;
(statearr_22488_22511[(2)] = null);

(statearr_22488_22511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (5))){
var inst_22463 = cljs.core.async.close_BANG_.call(null,out);
var state_22478__$1 = state_22478;
var statearr_22489_22512 = state_22478__$1;
(statearr_22489_22512[(2)] = inst_22463);

(statearr_22489_22512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (10))){
var inst_22471 = (state_22478[(2)]);
var state_22478__$1 = (function (){var statearr_22490 = state_22478;
(statearr_22490[(8)] = inst_22471);

return statearr_22490;
})();
var statearr_22491_22513 = state_22478__$1;
(statearr_22491_22513[(2)] = null);

(statearr_22491_22513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (8))){
var inst_22460 = (state_22478[(7)]);
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22478__$1,(11),out,inst_22460);
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
});})(c__20253__auto___22503,out))
;
return ((function (switch__20141__auto__,c__20253__auto___22503,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22495 = [null,null,null,null,null,null,null,null,null];
(statearr_22495[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22495[(1)] = (1));

return statearr_22495;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22478){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22496){if((e22496 instanceof Object)){
var ex__20145__auto__ = e22496;
var statearr_22497_22514 = state_22478;
(statearr_22497_22514[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22515 = state_22478;
state_22478 = G__22515;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22503,out))
})();
var state__20255__auto__ = (function (){var statearr_22498 = f__20254__auto__.call(null);
(statearr_22498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22503);

return statearr_22498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22503,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22516 = [];
var len__17884__auto___22519 = arguments.length;
var i__17885__auto___22520 = (0);
while(true){
if((i__17885__auto___22520 < len__17884__auto___22519)){
args22516.push((arguments[i__17885__auto___22520]));

var G__22521 = (i__17885__auto___22520 + (1));
i__17885__auto___22520 = G__22521;
continue;
} else {
}
break;
}

var G__22518 = args22516.length;
switch (G__22518) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22516.length)].join('')));

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
var c__20253__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto__){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto__){
return (function (state_22688){
var state_val_22689 = (state_22688[(1)]);
if((state_val_22689 === (7))){
var inst_22684 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22690_22731 = state_22688__$1;
(statearr_22690_22731[(2)] = inst_22684);

(statearr_22690_22731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (20))){
var inst_22654 = (state_22688[(7)]);
var inst_22665 = (state_22688[(2)]);
var inst_22666 = cljs.core.next.call(null,inst_22654);
var inst_22640 = inst_22666;
var inst_22641 = null;
var inst_22642 = (0);
var inst_22643 = (0);
var state_22688__$1 = (function (){var statearr_22691 = state_22688;
(statearr_22691[(8)] = inst_22643);

(statearr_22691[(9)] = inst_22642);

(statearr_22691[(10)] = inst_22640);

(statearr_22691[(11)] = inst_22665);

(statearr_22691[(12)] = inst_22641);

return statearr_22691;
})();
var statearr_22692_22732 = state_22688__$1;
(statearr_22692_22732[(2)] = null);

(statearr_22692_22732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (1))){
var state_22688__$1 = state_22688;
var statearr_22693_22733 = state_22688__$1;
(statearr_22693_22733[(2)] = null);

(statearr_22693_22733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (4))){
var inst_22629 = (state_22688[(13)]);
var inst_22629__$1 = (state_22688[(2)]);
var inst_22630 = (inst_22629__$1 == null);
var state_22688__$1 = (function (){var statearr_22694 = state_22688;
(statearr_22694[(13)] = inst_22629__$1);

return statearr_22694;
})();
if(cljs.core.truth_(inst_22630)){
var statearr_22695_22734 = state_22688__$1;
(statearr_22695_22734[(1)] = (5));

} else {
var statearr_22696_22735 = state_22688__$1;
(statearr_22696_22735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (15))){
var state_22688__$1 = state_22688;
var statearr_22700_22736 = state_22688__$1;
(statearr_22700_22736[(2)] = null);

(statearr_22700_22736[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (21))){
var state_22688__$1 = state_22688;
var statearr_22701_22737 = state_22688__$1;
(statearr_22701_22737[(2)] = null);

(statearr_22701_22737[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (13))){
var inst_22643 = (state_22688[(8)]);
var inst_22642 = (state_22688[(9)]);
var inst_22640 = (state_22688[(10)]);
var inst_22641 = (state_22688[(12)]);
var inst_22650 = (state_22688[(2)]);
var inst_22651 = (inst_22643 + (1));
var tmp22697 = inst_22642;
var tmp22698 = inst_22640;
var tmp22699 = inst_22641;
var inst_22640__$1 = tmp22698;
var inst_22641__$1 = tmp22699;
var inst_22642__$1 = tmp22697;
var inst_22643__$1 = inst_22651;
var state_22688__$1 = (function (){var statearr_22702 = state_22688;
(statearr_22702[(8)] = inst_22643__$1);

(statearr_22702[(9)] = inst_22642__$1);

(statearr_22702[(14)] = inst_22650);

(statearr_22702[(10)] = inst_22640__$1);

(statearr_22702[(12)] = inst_22641__$1);

return statearr_22702;
})();
var statearr_22703_22738 = state_22688__$1;
(statearr_22703_22738[(2)] = null);

(statearr_22703_22738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (22))){
var state_22688__$1 = state_22688;
var statearr_22704_22739 = state_22688__$1;
(statearr_22704_22739[(2)] = null);

(statearr_22704_22739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (6))){
var inst_22629 = (state_22688[(13)]);
var inst_22638 = f.call(null,inst_22629);
var inst_22639 = cljs.core.seq.call(null,inst_22638);
var inst_22640 = inst_22639;
var inst_22641 = null;
var inst_22642 = (0);
var inst_22643 = (0);
var state_22688__$1 = (function (){var statearr_22705 = state_22688;
(statearr_22705[(8)] = inst_22643);

(statearr_22705[(9)] = inst_22642);

(statearr_22705[(10)] = inst_22640);

(statearr_22705[(12)] = inst_22641);

return statearr_22705;
})();
var statearr_22706_22740 = state_22688__$1;
(statearr_22706_22740[(2)] = null);

(statearr_22706_22740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (17))){
var inst_22654 = (state_22688[(7)]);
var inst_22658 = cljs.core.chunk_first.call(null,inst_22654);
var inst_22659 = cljs.core.chunk_rest.call(null,inst_22654);
var inst_22660 = cljs.core.count.call(null,inst_22658);
var inst_22640 = inst_22659;
var inst_22641 = inst_22658;
var inst_22642 = inst_22660;
var inst_22643 = (0);
var state_22688__$1 = (function (){var statearr_22707 = state_22688;
(statearr_22707[(8)] = inst_22643);

(statearr_22707[(9)] = inst_22642);

(statearr_22707[(10)] = inst_22640);

(statearr_22707[(12)] = inst_22641);

return statearr_22707;
})();
var statearr_22708_22741 = state_22688__$1;
(statearr_22708_22741[(2)] = null);

(statearr_22708_22741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (3))){
var inst_22686 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22688__$1,inst_22686);
} else {
if((state_val_22689 === (12))){
var inst_22674 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22709_22742 = state_22688__$1;
(statearr_22709_22742[(2)] = inst_22674);

(statearr_22709_22742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (2))){
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22688__$1,(4),in$);
} else {
if((state_val_22689 === (23))){
var inst_22682 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22710_22743 = state_22688__$1;
(statearr_22710_22743[(2)] = inst_22682);

(statearr_22710_22743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (19))){
var inst_22669 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22711_22744 = state_22688__$1;
(statearr_22711_22744[(2)] = inst_22669);

(statearr_22711_22744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (11))){
var inst_22640 = (state_22688[(10)]);
var inst_22654 = (state_22688[(7)]);
var inst_22654__$1 = cljs.core.seq.call(null,inst_22640);
var state_22688__$1 = (function (){var statearr_22712 = state_22688;
(statearr_22712[(7)] = inst_22654__$1);

return statearr_22712;
})();
if(inst_22654__$1){
var statearr_22713_22745 = state_22688__$1;
(statearr_22713_22745[(1)] = (14));

} else {
var statearr_22714_22746 = state_22688__$1;
(statearr_22714_22746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (9))){
var inst_22676 = (state_22688[(2)]);
var inst_22677 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22688__$1 = (function (){var statearr_22715 = state_22688;
(statearr_22715[(15)] = inst_22676);

return statearr_22715;
})();
if(cljs.core.truth_(inst_22677)){
var statearr_22716_22747 = state_22688__$1;
(statearr_22716_22747[(1)] = (21));

} else {
var statearr_22717_22748 = state_22688__$1;
(statearr_22717_22748[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (5))){
var inst_22632 = cljs.core.async.close_BANG_.call(null,out);
var state_22688__$1 = state_22688;
var statearr_22718_22749 = state_22688__$1;
(statearr_22718_22749[(2)] = inst_22632);

(statearr_22718_22749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (14))){
var inst_22654 = (state_22688[(7)]);
var inst_22656 = cljs.core.chunked_seq_QMARK_.call(null,inst_22654);
var state_22688__$1 = state_22688;
if(inst_22656){
var statearr_22719_22750 = state_22688__$1;
(statearr_22719_22750[(1)] = (17));

} else {
var statearr_22720_22751 = state_22688__$1;
(statearr_22720_22751[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (16))){
var inst_22672 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22721_22752 = state_22688__$1;
(statearr_22721_22752[(2)] = inst_22672);

(statearr_22721_22752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (10))){
var inst_22643 = (state_22688[(8)]);
var inst_22641 = (state_22688[(12)]);
var inst_22648 = cljs.core._nth.call(null,inst_22641,inst_22643);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22688__$1,(13),out,inst_22648);
} else {
if((state_val_22689 === (18))){
var inst_22654 = (state_22688[(7)]);
var inst_22663 = cljs.core.first.call(null,inst_22654);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22688__$1,(20),out,inst_22663);
} else {
if((state_val_22689 === (8))){
var inst_22643 = (state_22688[(8)]);
var inst_22642 = (state_22688[(9)]);
var inst_22645 = (inst_22643 < inst_22642);
var inst_22646 = inst_22645;
var state_22688__$1 = state_22688;
if(cljs.core.truth_(inst_22646)){
var statearr_22722_22753 = state_22688__$1;
(statearr_22722_22753[(1)] = (10));

} else {
var statearr_22723_22754 = state_22688__$1;
(statearr_22723_22754[(1)] = (11));

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
});})(c__20253__auto__))
;
return ((function (switch__20141__auto__,c__20253__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____0 = (function (){
var statearr_22727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22727[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__);

(statearr_22727[(1)] = (1));

return statearr_22727;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____1 = (function (state_22688){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22728){if((e22728 instanceof Object)){
var ex__20145__auto__ = e22728;
var statearr_22729_22755 = state_22688;
(statearr_22729_22755[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22756 = state_22688;
state_22688 = G__22756;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__ = function(state_22688){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____1.call(this,state_22688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20142__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto__))
})();
var state__20255__auto__ = (function (){var statearr_22730 = f__20254__auto__.call(null);
(statearr_22730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto__);

return statearr_22730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto__))
);

return c__20253__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22757 = [];
var len__17884__auto___22760 = arguments.length;
var i__17885__auto___22761 = (0);
while(true){
if((i__17885__auto___22761 < len__17884__auto___22760)){
args22757.push((arguments[i__17885__auto___22761]));

var G__22762 = (i__17885__auto___22761 + (1));
i__17885__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var G__22759 = args22757.length;
switch (G__22759) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22757.length)].join('')));

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
var args22764 = [];
var len__17884__auto___22767 = arguments.length;
var i__17885__auto___22768 = (0);
while(true){
if((i__17885__auto___22768 < len__17884__auto___22767)){
args22764.push((arguments[i__17885__auto___22768]));

var G__22769 = (i__17885__auto___22768 + (1));
i__17885__auto___22768 = G__22769;
continue;
} else {
}
break;
}

var G__22766 = args22764.length;
switch (G__22766) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22764.length)].join('')));

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
var args22771 = [];
var len__17884__auto___22822 = arguments.length;
var i__17885__auto___22823 = (0);
while(true){
if((i__17885__auto___22823 < len__17884__auto___22822)){
args22771.push((arguments[i__17885__auto___22823]));

var G__22824 = (i__17885__auto___22823 + (1));
i__17885__auto___22823 = G__22824;
continue;
} else {
}
break;
}

var G__22773 = args22771.length;
switch (G__22773) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22771.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___22826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22826,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22826,out){
return (function (state_22797){
var state_val_22798 = (state_22797[(1)]);
if((state_val_22798 === (7))){
var inst_22792 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22799_22827 = state_22797__$1;
(statearr_22799_22827[(2)] = inst_22792);

(statearr_22799_22827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (1))){
var inst_22774 = null;
var state_22797__$1 = (function (){var statearr_22800 = state_22797;
(statearr_22800[(7)] = inst_22774);

return statearr_22800;
})();
var statearr_22801_22828 = state_22797__$1;
(statearr_22801_22828[(2)] = null);

(statearr_22801_22828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (4))){
var inst_22777 = (state_22797[(8)]);
var inst_22777__$1 = (state_22797[(2)]);
var inst_22778 = (inst_22777__$1 == null);
var inst_22779 = cljs.core.not.call(null,inst_22778);
var state_22797__$1 = (function (){var statearr_22802 = state_22797;
(statearr_22802[(8)] = inst_22777__$1);

return statearr_22802;
})();
if(inst_22779){
var statearr_22803_22829 = state_22797__$1;
(statearr_22803_22829[(1)] = (5));

} else {
var statearr_22804_22830 = state_22797__$1;
(statearr_22804_22830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (6))){
var state_22797__$1 = state_22797;
var statearr_22805_22831 = state_22797__$1;
(statearr_22805_22831[(2)] = null);

(statearr_22805_22831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (3))){
var inst_22794 = (state_22797[(2)]);
var inst_22795 = cljs.core.async.close_BANG_.call(null,out);
var state_22797__$1 = (function (){var statearr_22806 = state_22797;
(statearr_22806[(9)] = inst_22794);

return statearr_22806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22797__$1,inst_22795);
} else {
if((state_val_22798 === (2))){
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22797__$1,(4),ch);
} else {
if((state_val_22798 === (11))){
var inst_22777 = (state_22797[(8)]);
var inst_22786 = (state_22797[(2)]);
var inst_22774 = inst_22777;
var state_22797__$1 = (function (){var statearr_22807 = state_22797;
(statearr_22807[(10)] = inst_22786);

(statearr_22807[(7)] = inst_22774);

return statearr_22807;
})();
var statearr_22808_22832 = state_22797__$1;
(statearr_22808_22832[(2)] = null);

(statearr_22808_22832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (9))){
var inst_22777 = (state_22797[(8)]);
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22797__$1,(11),out,inst_22777);
} else {
if((state_val_22798 === (5))){
var inst_22777 = (state_22797[(8)]);
var inst_22774 = (state_22797[(7)]);
var inst_22781 = cljs.core._EQ_.call(null,inst_22777,inst_22774);
var state_22797__$1 = state_22797;
if(inst_22781){
var statearr_22810_22833 = state_22797__$1;
(statearr_22810_22833[(1)] = (8));

} else {
var statearr_22811_22834 = state_22797__$1;
(statearr_22811_22834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (10))){
var inst_22789 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22812_22835 = state_22797__$1;
(statearr_22812_22835[(2)] = inst_22789);

(statearr_22812_22835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (8))){
var inst_22774 = (state_22797[(7)]);
var tmp22809 = inst_22774;
var inst_22774__$1 = tmp22809;
var state_22797__$1 = (function (){var statearr_22813 = state_22797;
(statearr_22813[(7)] = inst_22774__$1);

return statearr_22813;
})();
var statearr_22814_22836 = state_22797__$1;
(statearr_22814_22836[(2)] = null);

(statearr_22814_22836[(1)] = (2));


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
});})(c__20253__auto___22826,out))
;
return ((function (switch__20141__auto__,c__20253__auto___22826,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22818[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22818[(1)] = (1));

return statearr_22818;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22797){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22819){if((e22819 instanceof Object)){
var ex__20145__auto__ = e22819;
var statearr_22820_22837 = state_22797;
(statearr_22820_22837[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22838 = state_22797;
state_22797 = G__22838;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22826,out))
})();
var state__20255__auto__ = (function (){var statearr_22821 = f__20254__auto__.call(null);
(statearr_22821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22826);

return statearr_22821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22826,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22839 = [];
var len__17884__auto___22909 = arguments.length;
var i__17885__auto___22910 = (0);
while(true){
if((i__17885__auto___22910 < len__17884__auto___22909)){
args22839.push((arguments[i__17885__auto___22910]));

var G__22911 = (i__17885__auto___22910 + (1));
i__17885__auto___22910 = G__22911;
continue;
} else {
}
break;
}

var G__22841 = args22839.length;
switch (G__22841) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22839.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___22913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___22913,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___22913,out){
return (function (state_22879){
var state_val_22880 = (state_22879[(1)]);
if((state_val_22880 === (7))){
var inst_22875 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22881_22914 = state_22879__$1;
(statearr_22881_22914[(2)] = inst_22875);

(statearr_22881_22914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (1))){
var inst_22842 = (new Array(n));
var inst_22843 = inst_22842;
var inst_22844 = (0);
var state_22879__$1 = (function (){var statearr_22882 = state_22879;
(statearr_22882[(7)] = inst_22843);

(statearr_22882[(8)] = inst_22844);

return statearr_22882;
})();
var statearr_22883_22915 = state_22879__$1;
(statearr_22883_22915[(2)] = null);

(statearr_22883_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (4))){
var inst_22847 = (state_22879[(9)]);
var inst_22847__$1 = (state_22879[(2)]);
var inst_22848 = (inst_22847__$1 == null);
var inst_22849 = cljs.core.not.call(null,inst_22848);
var state_22879__$1 = (function (){var statearr_22884 = state_22879;
(statearr_22884[(9)] = inst_22847__$1);

return statearr_22884;
})();
if(inst_22849){
var statearr_22885_22916 = state_22879__$1;
(statearr_22885_22916[(1)] = (5));

} else {
var statearr_22886_22917 = state_22879__$1;
(statearr_22886_22917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (15))){
var inst_22869 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22887_22918 = state_22879__$1;
(statearr_22887_22918[(2)] = inst_22869);

(statearr_22887_22918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (13))){
var state_22879__$1 = state_22879;
var statearr_22888_22919 = state_22879__$1;
(statearr_22888_22919[(2)] = null);

(statearr_22888_22919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (6))){
var inst_22844 = (state_22879[(8)]);
var inst_22865 = (inst_22844 > (0));
var state_22879__$1 = state_22879;
if(cljs.core.truth_(inst_22865)){
var statearr_22889_22920 = state_22879__$1;
(statearr_22889_22920[(1)] = (12));

} else {
var statearr_22890_22921 = state_22879__$1;
(statearr_22890_22921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (3))){
var inst_22877 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22879__$1,inst_22877);
} else {
if((state_val_22880 === (12))){
var inst_22843 = (state_22879[(7)]);
var inst_22867 = cljs.core.vec.call(null,inst_22843);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22879__$1,(15),out,inst_22867);
} else {
if((state_val_22880 === (2))){
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22879__$1,(4),ch);
} else {
if((state_val_22880 === (11))){
var inst_22859 = (state_22879[(2)]);
var inst_22860 = (new Array(n));
var inst_22843 = inst_22860;
var inst_22844 = (0);
var state_22879__$1 = (function (){var statearr_22891 = state_22879;
(statearr_22891[(10)] = inst_22859);

(statearr_22891[(7)] = inst_22843);

(statearr_22891[(8)] = inst_22844);

return statearr_22891;
})();
var statearr_22892_22922 = state_22879__$1;
(statearr_22892_22922[(2)] = null);

(statearr_22892_22922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (9))){
var inst_22843 = (state_22879[(7)]);
var inst_22857 = cljs.core.vec.call(null,inst_22843);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22879__$1,(11),out,inst_22857);
} else {
if((state_val_22880 === (5))){
var inst_22843 = (state_22879[(7)]);
var inst_22847 = (state_22879[(9)]);
var inst_22852 = (state_22879[(11)]);
var inst_22844 = (state_22879[(8)]);
var inst_22851 = (inst_22843[inst_22844] = inst_22847);
var inst_22852__$1 = (inst_22844 + (1));
var inst_22853 = (inst_22852__$1 < n);
var state_22879__$1 = (function (){var statearr_22893 = state_22879;
(statearr_22893[(12)] = inst_22851);

(statearr_22893[(11)] = inst_22852__$1);

return statearr_22893;
})();
if(cljs.core.truth_(inst_22853)){
var statearr_22894_22923 = state_22879__$1;
(statearr_22894_22923[(1)] = (8));

} else {
var statearr_22895_22924 = state_22879__$1;
(statearr_22895_22924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (14))){
var inst_22872 = (state_22879[(2)]);
var inst_22873 = cljs.core.async.close_BANG_.call(null,out);
var state_22879__$1 = (function (){var statearr_22897 = state_22879;
(statearr_22897[(13)] = inst_22872);

return statearr_22897;
})();
var statearr_22898_22925 = state_22879__$1;
(statearr_22898_22925[(2)] = inst_22873);

(statearr_22898_22925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (10))){
var inst_22863 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22899_22926 = state_22879__$1;
(statearr_22899_22926[(2)] = inst_22863);

(statearr_22899_22926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (8))){
var inst_22843 = (state_22879[(7)]);
var inst_22852 = (state_22879[(11)]);
var tmp22896 = inst_22843;
var inst_22843__$1 = tmp22896;
var inst_22844 = inst_22852;
var state_22879__$1 = (function (){var statearr_22900 = state_22879;
(statearr_22900[(7)] = inst_22843__$1);

(statearr_22900[(8)] = inst_22844);

return statearr_22900;
})();
var statearr_22901_22927 = state_22879__$1;
(statearr_22901_22927[(2)] = null);

(statearr_22901_22927[(1)] = (2));


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
});})(c__20253__auto___22913,out))
;
return ((function (switch__20141__auto__,c__20253__auto___22913,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_22905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22905[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_22905[(1)] = (1));

return statearr_22905;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22879){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object)){
var ex__20145__auto__ = e22906;
var statearr_22907_22928 = state_22879;
(statearr_22907_22928[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22929 = state_22879;
state_22879 = G__22929;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___22913,out))
})();
var state__20255__auto__ = (function (){var statearr_22908 = f__20254__auto__.call(null);
(statearr_22908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___22913);

return statearr_22908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___22913,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22930 = [];
var len__17884__auto___23004 = arguments.length;
var i__17885__auto___23005 = (0);
while(true){
if((i__17885__auto___23005 < len__17884__auto___23004)){
args22930.push((arguments[i__17885__auto___23005]));

var G__23006 = (i__17885__auto___23005 + (1));
i__17885__auto___23005 = G__23006;
continue;
} else {
}
break;
}

var G__22932 = args22930.length;
switch (G__22932) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22930.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20253__auto___23008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20253__auto___23008,out){
return (function (){
var f__20254__auto__ = (function (){var switch__20141__auto__ = ((function (c__20253__auto___23008,out){
return (function (state_22974){
var state_val_22975 = (state_22974[(1)]);
if((state_val_22975 === (7))){
var inst_22970 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22976_23009 = state_22974__$1;
(statearr_22976_23009[(2)] = inst_22970);

(statearr_22976_23009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (1))){
var inst_22933 = [];
var inst_22934 = inst_22933;
var inst_22935 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22974__$1 = (function (){var statearr_22977 = state_22974;
(statearr_22977[(7)] = inst_22934);

(statearr_22977[(8)] = inst_22935);

return statearr_22977;
})();
var statearr_22978_23010 = state_22974__$1;
(statearr_22978_23010[(2)] = null);

(statearr_22978_23010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (4))){
var inst_22938 = (state_22974[(9)]);
var inst_22938__$1 = (state_22974[(2)]);
var inst_22939 = (inst_22938__$1 == null);
var inst_22940 = cljs.core.not.call(null,inst_22939);
var state_22974__$1 = (function (){var statearr_22979 = state_22974;
(statearr_22979[(9)] = inst_22938__$1);

return statearr_22979;
})();
if(inst_22940){
var statearr_22980_23011 = state_22974__$1;
(statearr_22980_23011[(1)] = (5));

} else {
var statearr_22981_23012 = state_22974__$1;
(statearr_22981_23012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (15))){
var inst_22964 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22982_23013 = state_22974__$1;
(statearr_22982_23013[(2)] = inst_22964);

(statearr_22982_23013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (13))){
var state_22974__$1 = state_22974;
var statearr_22983_23014 = state_22974__$1;
(statearr_22983_23014[(2)] = null);

(statearr_22983_23014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (6))){
var inst_22934 = (state_22974[(7)]);
var inst_22959 = inst_22934.length;
var inst_22960 = (inst_22959 > (0));
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22960)){
var statearr_22984_23015 = state_22974__$1;
(statearr_22984_23015[(1)] = (12));

} else {
var statearr_22985_23016 = state_22974__$1;
(statearr_22985_23016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (3))){
var inst_22972 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22974__$1,inst_22972);
} else {
if((state_val_22975 === (12))){
var inst_22934 = (state_22974[(7)]);
var inst_22962 = cljs.core.vec.call(null,inst_22934);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22974__$1,(15),out,inst_22962);
} else {
if((state_val_22975 === (2))){
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22974__$1,(4),ch);
} else {
if((state_val_22975 === (11))){
var inst_22942 = (state_22974[(10)]);
var inst_22938 = (state_22974[(9)]);
var inst_22952 = (state_22974[(2)]);
var inst_22953 = [];
var inst_22954 = inst_22953.push(inst_22938);
var inst_22934 = inst_22953;
var inst_22935 = inst_22942;
var state_22974__$1 = (function (){var statearr_22986 = state_22974;
(statearr_22986[(11)] = inst_22952);

(statearr_22986[(7)] = inst_22934);

(statearr_22986[(12)] = inst_22954);

(statearr_22986[(8)] = inst_22935);

return statearr_22986;
})();
var statearr_22987_23017 = state_22974__$1;
(statearr_22987_23017[(2)] = null);

(statearr_22987_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (9))){
var inst_22934 = (state_22974[(7)]);
var inst_22950 = cljs.core.vec.call(null,inst_22934);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22974__$1,(11),out,inst_22950);
} else {
if((state_val_22975 === (5))){
var inst_22935 = (state_22974[(8)]);
var inst_22942 = (state_22974[(10)]);
var inst_22938 = (state_22974[(9)]);
var inst_22942__$1 = f.call(null,inst_22938);
var inst_22943 = cljs.core._EQ_.call(null,inst_22942__$1,inst_22935);
var inst_22944 = cljs.core.keyword_identical_QMARK_.call(null,inst_22935,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22945 = (inst_22943) || (inst_22944);
var state_22974__$1 = (function (){var statearr_22988 = state_22974;
(statearr_22988[(10)] = inst_22942__$1);

return statearr_22988;
})();
if(cljs.core.truth_(inst_22945)){
var statearr_22989_23018 = state_22974__$1;
(statearr_22989_23018[(1)] = (8));

} else {
var statearr_22990_23019 = state_22974__$1;
(statearr_22990_23019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (14))){
var inst_22967 = (state_22974[(2)]);
var inst_22968 = cljs.core.async.close_BANG_.call(null,out);
var state_22974__$1 = (function (){var statearr_22992 = state_22974;
(statearr_22992[(13)] = inst_22967);

return statearr_22992;
})();
var statearr_22993_23020 = state_22974__$1;
(statearr_22993_23020[(2)] = inst_22968);

(statearr_22993_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (10))){
var inst_22957 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22994_23021 = state_22974__$1;
(statearr_22994_23021[(2)] = inst_22957);

(statearr_22994_23021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (8))){
var inst_22934 = (state_22974[(7)]);
var inst_22942 = (state_22974[(10)]);
var inst_22938 = (state_22974[(9)]);
var inst_22947 = inst_22934.push(inst_22938);
var tmp22991 = inst_22934;
var inst_22934__$1 = tmp22991;
var inst_22935 = inst_22942;
var state_22974__$1 = (function (){var statearr_22995 = state_22974;
(statearr_22995[(7)] = inst_22934__$1);

(statearr_22995[(8)] = inst_22935);

(statearr_22995[(14)] = inst_22947);

return statearr_22995;
})();
var statearr_22996_23022 = state_22974__$1;
(statearr_22996_23022[(2)] = null);

(statearr_22996_23022[(1)] = (2));


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
});})(c__20253__auto___23008,out))
;
return ((function (switch__20141__auto__,c__20253__auto___23008,out){
return (function() {
var cljs$core$async$state_machine__20142__auto__ = null;
var cljs$core$async$state_machine__20142__auto____0 = (function (){
var statearr_23000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23000[(0)] = cljs$core$async$state_machine__20142__auto__);

(statearr_23000[(1)] = (1));

return statearr_23000;
});
var cljs$core$async$state_machine__20142__auto____1 = (function (state_22974){
while(true){
var ret_value__20143__auto__ = (function (){try{while(true){
var result__20144__auto__ = switch__20141__auto__.call(null,state_22974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20144__auto__;
}
break;
}
}catch (e23001){if((e23001 instanceof Object)){
var ex__20145__auto__ = e23001;
var statearr_23002_23023 = state_22974;
(statearr_23002_23023[(5)] = ex__20145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23024 = state_22974;
state_22974 = G__23024;
continue;
} else {
return ret_value__20143__auto__;
}
break;
}
});
cljs$core$async$state_machine__20142__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20142__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20142__auto____0;
cljs$core$async$state_machine__20142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20142__auto____1;
return cljs$core$async$state_machine__20142__auto__;
})()
;})(switch__20141__auto__,c__20253__auto___23008,out))
})();
var state__20255__auto__ = (function (){var statearr_23003 = f__20254__auto__.call(null);
(statearr_23003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20253__auto___23008);

return statearr_23003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20255__auto__);
});})(c__20253__auto___23008,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452098819066