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
var args20461 = [];
var len__17910__auto___20467 = arguments.length;
var i__17911__auto___20468 = (0);
while(true){
if((i__17911__auto___20468 < len__17910__auto___20467)){
args20461.push((arguments[i__17911__auto___20468]));

var G__20469 = (i__17911__auto___20468 + (1));
i__17911__auto___20468 = G__20469;
continue;
} else {
}
break;
}

var G__20463 = args20461.length;
switch (G__20463) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20461.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20464 = (function (f,blockable,meta20465){
this.f = f;
this.blockable = blockable;
this.meta20465 = meta20465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20466,meta20465__$1){
var self__ = this;
var _20466__$1 = this;
return (new cljs.core.async.t_cljs$core$async20464(self__.f,self__.blockable,meta20465__$1));
});

cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20466){
var self__ = this;
var _20466__$1 = this;
return self__.meta20465;
});

cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20465","meta20465",1617146281,null)], null);
});

cljs.core.async.t_cljs$core$async20464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20464";

cljs.core.async.t_cljs$core$async20464.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20464");
});

cljs.core.async.__GT_t_cljs$core$async20464 = (function cljs$core$async$__GT_t_cljs$core$async20464(f__$1,blockable__$1,meta20465){
return (new cljs.core.async.t_cljs$core$async20464(f__$1,blockable__$1,meta20465));
});

}

return (new cljs.core.async.t_cljs$core$async20464(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20473 = [];
var len__17910__auto___20476 = arguments.length;
var i__17911__auto___20477 = (0);
while(true){
if((i__17911__auto___20477 < len__17910__auto___20476)){
args20473.push((arguments[i__17911__auto___20477]));

var G__20478 = (i__17911__auto___20477 + (1));
i__17911__auto___20477 = G__20478;
continue;
} else {
}
break;
}

var G__20475 = args20473.length;
switch (G__20475) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20473.length)].join('')));

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
var args20480 = [];
var len__17910__auto___20483 = arguments.length;
var i__17911__auto___20484 = (0);
while(true){
if((i__17911__auto___20484 < len__17910__auto___20483)){
args20480.push((arguments[i__17911__auto___20484]));

var G__20485 = (i__17911__auto___20484 + (1));
i__17911__auto___20484 = G__20485;
continue;
} else {
}
break;
}

var G__20482 = args20480.length;
switch (G__20482) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20480.length)].join('')));

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
var args20487 = [];
var len__17910__auto___20490 = arguments.length;
var i__17911__auto___20491 = (0);
while(true){
if((i__17911__auto___20491 < len__17910__auto___20490)){
args20487.push((arguments[i__17911__auto___20491]));

var G__20492 = (i__17911__auto___20491 + (1));
i__17911__auto___20491 = G__20492;
continue;
} else {
}
break;
}

var G__20489 = args20487.length;
switch (G__20489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20487.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20494 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20494);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20494,ret){
return (function (){
return fn1.call(null,val_20494);
});})(val_20494,ret))
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
var args20495 = [];
var len__17910__auto___20498 = arguments.length;
var i__17911__auto___20499 = (0);
while(true){
if((i__17911__auto___20499 < len__17910__auto___20498)){
args20495.push((arguments[i__17911__auto___20499]));

var G__20500 = (i__17911__auto___20499 + (1));
i__17911__auto___20499 = G__20500;
continue;
} else {
}
break;
}

var G__20497 = args20495.length;
switch (G__20497) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20495.length)].join('')));

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
var n__17755__auto___20502 = n;
var x_20503 = (0);
while(true){
if((x_20503 < n__17755__auto___20502)){
(a[x_20503] = (0));

var G__20504 = (x_20503 + (1));
x_20503 = G__20504;
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

var G__20505 = (i + (1));
i = G__20505;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20509 = (function (alt_flag,flag,meta20510){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20510 = meta20510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20511,meta20510__$1){
var self__ = this;
var _20511__$1 = this;
return (new cljs.core.async.t_cljs$core$async20509(self__.alt_flag,self__.flag,meta20510__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20511){
var self__ = this;
var _20511__$1 = this;
return self__.meta20510;
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20510","meta20510",1256120243,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20509";

cljs.core.async.t_cljs$core$async20509.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20509");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20509 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20509(alt_flag__$1,flag__$1,meta20510){
return (new cljs.core.async.t_cljs$core$async20509(alt_flag__$1,flag__$1,meta20510));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20509(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20515 = (function (alt_handler,flag,cb,meta20516){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20516 = meta20516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20517,meta20516__$1){
var self__ = this;
var _20517__$1 = this;
return (new cljs.core.async.t_cljs$core$async20515(self__.alt_handler,self__.flag,self__.cb,meta20516__$1));
});

cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20517){
var self__ = this;
var _20517__$1 = this;
return self__.meta20516;
});

cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20516","meta20516",-770947046,null)], null);
});

cljs.core.async.t_cljs$core$async20515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20515";

cljs.core.async.t_cljs$core$async20515.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20515");
});

cljs.core.async.__GT_t_cljs$core$async20515 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20515(alt_handler__$1,flag__$1,cb__$1,meta20516){
return (new cljs.core.async.t_cljs$core$async20515(alt_handler__$1,flag__$1,cb__$1,meta20516));
});

}

return (new cljs.core.async.t_cljs$core$async20515(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20518_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20518_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20519_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20519_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16852__auto__ = wport;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20520 = (i + (1));
i = G__20520;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16852__auto__ = ret;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16840__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16840__auto__;
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
var args__17917__auto__ = [];
var len__17910__auto___20526 = arguments.length;
var i__17911__auto___20527 = (0);
while(true){
if((i__17911__auto___20527 < len__17910__auto___20526)){
args__17917__auto__.push((arguments[i__17911__auto___20527]));

var G__20528 = (i__17911__auto___20527 + (1));
i__17911__auto___20527 = G__20528;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20523){
var map__20524 = p__20523;
var map__20524__$1 = ((((!((map__20524 == null)))?((((map__20524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20524):map__20524);
var opts = map__20524__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20521){
var G__20522 = cljs.core.first.call(null,seq20521);
var seq20521__$1 = cljs.core.next.call(null,seq20521);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20522,seq20521__$1);
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
var args20529 = [];
var len__17910__auto___20579 = arguments.length;
var i__17911__auto___20580 = (0);
while(true){
if((i__17911__auto___20580 < len__17910__auto___20579)){
args20529.push((arguments[i__17911__auto___20580]));

var G__20581 = (i__17911__auto___20580 + (1));
i__17911__auto___20580 = G__20581;
continue;
} else {
}
break;
}

var G__20531 = args20529.length;
switch (G__20531) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20529.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20416__auto___20583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___20583){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___20583){
return (function (state_20555){
var state_val_20556 = (state_20555[(1)]);
if((state_val_20556 === (7))){
var inst_20551 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20557_20584 = state_20555__$1;
(statearr_20557_20584[(2)] = inst_20551);

(statearr_20557_20584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (1))){
var state_20555__$1 = state_20555;
var statearr_20558_20585 = state_20555__$1;
(statearr_20558_20585[(2)] = null);

(statearr_20558_20585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (4))){
var inst_20534 = (state_20555[(7)]);
var inst_20534__$1 = (state_20555[(2)]);
var inst_20535 = (inst_20534__$1 == null);
var state_20555__$1 = (function (){var statearr_20559 = state_20555;
(statearr_20559[(7)] = inst_20534__$1);

return statearr_20559;
})();
if(cljs.core.truth_(inst_20535)){
var statearr_20560_20586 = state_20555__$1;
(statearr_20560_20586[(1)] = (5));

} else {
var statearr_20561_20587 = state_20555__$1;
(statearr_20561_20587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (13))){
var state_20555__$1 = state_20555;
var statearr_20562_20588 = state_20555__$1;
(statearr_20562_20588[(2)] = null);

(statearr_20562_20588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (6))){
var inst_20534 = (state_20555[(7)]);
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20555__$1,(11),to,inst_20534);
} else {
if((state_val_20556 === (3))){
var inst_20553 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20555__$1,inst_20553);
} else {
if((state_val_20556 === (12))){
var state_20555__$1 = state_20555;
var statearr_20563_20589 = state_20555__$1;
(statearr_20563_20589[(2)] = null);

(statearr_20563_20589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (2))){
var state_20555__$1 = state_20555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20555__$1,(4),from);
} else {
if((state_val_20556 === (11))){
var inst_20544 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
if(cljs.core.truth_(inst_20544)){
var statearr_20564_20590 = state_20555__$1;
(statearr_20564_20590[(1)] = (12));

} else {
var statearr_20565_20591 = state_20555__$1;
(statearr_20565_20591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (9))){
var state_20555__$1 = state_20555;
var statearr_20566_20592 = state_20555__$1;
(statearr_20566_20592[(2)] = null);

(statearr_20566_20592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (5))){
var state_20555__$1 = state_20555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20567_20593 = state_20555__$1;
(statearr_20567_20593[(1)] = (8));

} else {
var statearr_20568_20594 = state_20555__$1;
(statearr_20568_20594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (14))){
var inst_20549 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20569_20595 = state_20555__$1;
(statearr_20569_20595[(2)] = inst_20549);

(statearr_20569_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (10))){
var inst_20541 = (state_20555[(2)]);
var state_20555__$1 = state_20555;
var statearr_20570_20596 = state_20555__$1;
(statearr_20570_20596[(2)] = inst_20541);

(statearr_20570_20596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20556 === (8))){
var inst_20538 = cljs.core.async.close_BANG_.call(null,to);
var state_20555__$1 = state_20555;
var statearr_20571_20597 = state_20555__$1;
(statearr_20571_20597[(2)] = inst_20538);

(statearr_20571_20597[(1)] = (10));


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
});})(c__20416__auto___20583))
;
return ((function (switch__20304__auto__,c__20416__auto___20583){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_20575 = [null,null,null,null,null,null,null,null];
(statearr_20575[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_20575[(1)] = (1));

return statearr_20575;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_20555){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20576){if((e20576 instanceof Object)){
var ex__20308__auto__ = e20576;
var statearr_20577_20598 = state_20555;
(statearr_20577_20598[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20599 = state_20555;
state_20555 = G__20599;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_20555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_20555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___20583))
})();
var state__20418__auto__ = (function (){var statearr_20578 = f__20417__auto__.call(null);
(statearr_20578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___20583);

return statearr_20578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___20583))
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
return (function (p__20783){
var vec__20784 = p__20783;
var v = cljs.core.nth.call(null,vec__20784,(0),null);
var p = cljs.core.nth.call(null,vec__20784,(1),null);
var job = vec__20784;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20416__auto___20966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results){
return (function (state_20789){
var state_val_20790 = (state_20789[(1)]);
if((state_val_20790 === (1))){
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20789__$1,(2),res,v);
} else {
if((state_val_20790 === (2))){
var inst_20786 = (state_20789[(2)]);
var inst_20787 = cljs.core.async.close_BANG_.call(null,res);
var state_20789__$1 = (function (){var statearr_20791 = state_20789;
(statearr_20791[(7)] = inst_20786);

return statearr_20791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20789__$1,inst_20787);
} else {
return null;
}
}
});})(c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results))
;
return ((function (switch__20304__auto__,c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_20795 = [null,null,null,null,null,null,null,null];
(statearr_20795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__);

(statearr_20795[(1)] = (1));

return statearr_20795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1 = (function (state_20789){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20796){if((e20796 instanceof Object)){
var ex__20308__auto__ = e20796;
var statearr_20797_20967 = state_20789;
(statearr_20797_20967[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20968 = state_20789;
state_20789 = G__20968;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = function(state_20789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1.call(this,state_20789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results))
})();
var state__20418__auto__ = (function (){var statearr_20798 = f__20417__auto__.call(null);
(statearr_20798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___20966);

return statearr_20798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___20966,res,vec__20784,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20799){
var vec__20800 = p__20799;
var v = cljs.core.nth.call(null,vec__20800,(0),null);
var p = cljs.core.nth.call(null,vec__20800,(1),null);
var job = vec__20800;
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
var n__17755__auto___20969 = n;
var __20970 = (0);
while(true){
if((__20970 < n__17755__auto___20969)){
var G__20801_20971 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20801_20971) {
case "compute":
var c__20416__auto___20973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20970,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (__20970,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function (state_20814){
var state_val_20815 = (state_20814[(1)]);
if((state_val_20815 === (1))){
var state_20814__$1 = state_20814;
var statearr_20816_20974 = state_20814__$1;
(statearr_20816_20974[(2)] = null);

(statearr_20816_20974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20815 === (2))){
var state_20814__$1 = state_20814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20814__$1,(4),jobs);
} else {
if((state_val_20815 === (3))){
var inst_20812 = (state_20814[(2)]);
var state_20814__$1 = state_20814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20814__$1,inst_20812);
} else {
if((state_val_20815 === (4))){
var inst_20804 = (state_20814[(2)]);
var inst_20805 = process.call(null,inst_20804);
var state_20814__$1 = state_20814;
if(cljs.core.truth_(inst_20805)){
var statearr_20817_20975 = state_20814__$1;
(statearr_20817_20975[(1)] = (5));

} else {
var statearr_20818_20976 = state_20814__$1;
(statearr_20818_20976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20815 === (5))){
var state_20814__$1 = state_20814;
var statearr_20819_20977 = state_20814__$1;
(statearr_20819_20977[(2)] = null);

(statearr_20819_20977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20815 === (6))){
var state_20814__$1 = state_20814;
var statearr_20820_20978 = state_20814__$1;
(statearr_20820_20978[(2)] = null);

(statearr_20820_20978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20815 === (7))){
var inst_20810 = (state_20814[(2)]);
var state_20814__$1 = state_20814;
var statearr_20821_20979 = state_20814__$1;
(statearr_20821_20979[(2)] = inst_20810);

(statearr_20821_20979[(1)] = (3));


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
});})(__20970,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
;
return ((function (__20970,switch__20304__auto__,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_20825 = [null,null,null,null,null,null,null];
(statearr_20825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__);

(statearr_20825[(1)] = (1));

return statearr_20825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1 = (function (state_20814){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20826){if((e20826 instanceof Object)){
var ex__20308__auto__ = e20826;
var statearr_20827_20980 = state_20814;
(statearr_20827_20980[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20981 = state_20814;
state_20814 = G__20981;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = function(state_20814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1.call(this,state_20814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__;
})()
;})(__20970,switch__20304__auto__,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
})();
var state__20418__auto__ = (function (){var statearr_20828 = f__20417__auto__.call(null);
(statearr_20828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___20973);

return statearr_20828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(__20970,c__20416__auto___20973,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
);


break;
case "async":
var c__20416__auto___20982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20970,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (__20970,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function (state_20841){
var state_val_20842 = (state_20841[(1)]);
if((state_val_20842 === (1))){
var state_20841__$1 = state_20841;
var statearr_20843_20983 = state_20841__$1;
(statearr_20843_20983[(2)] = null);

(statearr_20843_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (2))){
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20841__$1,(4),jobs);
} else {
if((state_val_20842 === (3))){
var inst_20839 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20841__$1,inst_20839);
} else {
if((state_val_20842 === (4))){
var inst_20831 = (state_20841[(2)]);
var inst_20832 = async.call(null,inst_20831);
var state_20841__$1 = state_20841;
if(cljs.core.truth_(inst_20832)){
var statearr_20844_20984 = state_20841__$1;
(statearr_20844_20984[(1)] = (5));

} else {
var statearr_20845_20985 = state_20841__$1;
(statearr_20845_20985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (5))){
var state_20841__$1 = state_20841;
var statearr_20846_20986 = state_20841__$1;
(statearr_20846_20986[(2)] = null);

(statearr_20846_20986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (6))){
var state_20841__$1 = state_20841;
var statearr_20847_20987 = state_20841__$1;
(statearr_20847_20987[(2)] = null);

(statearr_20847_20987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (7))){
var inst_20837 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
var statearr_20848_20988 = state_20841__$1;
(statearr_20848_20988[(2)] = inst_20837);

(statearr_20848_20988[(1)] = (3));


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
});})(__20970,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
;
return ((function (__20970,switch__20304__auto__,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_20852 = [null,null,null,null,null,null,null];
(statearr_20852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__);

(statearr_20852[(1)] = (1));

return statearr_20852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1 = (function (state_20841){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20853){if((e20853 instanceof Object)){
var ex__20308__auto__ = e20853;
var statearr_20854_20989 = state_20841;
(statearr_20854_20989[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20990 = state_20841;
state_20841 = G__20990;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = function(state_20841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1.call(this,state_20841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__;
})()
;})(__20970,switch__20304__auto__,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
})();
var state__20418__auto__ = (function (){var statearr_20855 = f__20417__auto__.call(null);
(statearr_20855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___20982);

return statearr_20855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(__20970,c__20416__auto___20982,G__20801_20971,n__17755__auto___20969,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20991 = (__20970 + (1));
__20970 = G__20991;
continue;
} else {
}
break;
}

var c__20416__auto___20992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___20992,jobs,results,process,async){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___20992,jobs,results,process,async){
return (function (state_20877){
var state_val_20878 = (state_20877[(1)]);
if((state_val_20878 === (1))){
var state_20877__$1 = state_20877;
var statearr_20879_20993 = state_20877__$1;
(statearr_20879_20993[(2)] = null);

(statearr_20879_20993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (2))){
var state_20877__$1 = state_20877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20877__$1,(4),from);
} else {
if((state_val_20878 === (3))){
var inst_20875 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20877__$1,inst_20875);
} else {
if((state_val_20878 === (4))){
var inst_20858 = (state_20877[(7)]);
var inst_20858__$1 = (state_20877[(2)]);
var inst_20859 = (inst_20858__$1 == null);
var state_20877__$1 = (function (){var statearr_20880 = state_20877;
(statearr_20880[(7)] = inst_20858__$1);

return statearr_20880;
})();
if(cljs.core.truth_(inst_20859)){
var statearr_20881_20994 = state_20877__$1;
(statearr_20881_20994[(1)] = (5));

} else {
var statearr_20882_20995 = state_20877__$1;
(statearr_20882_20995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (5))){
var inst_20861 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20877__$1 = state_20877;
var statearr_20883_20996 = state_20877__$1;
(statearr_20883_20996[(2)] = inst_20861);

(statearr_20883_20996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (6))){
var inst_20858 = (state_20877[(7)]);
var inst_20863 = (state_20877[(8)]);
var inst_20863__$1 = cljs.core.async.chan.call(null,(1));
var inst_20864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20865 = [inst_20858,inst_20863__$1];
var inst_20866 = (new cljs.core.PersistentVector(null,2,(5),inst_20864,inst_20865,null));
var state_20877__$1 = (function (){var statearr_20884 = state_20877;
(statearr_20884[(8)] = inst_20863__$1);

return statearr_20884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20877__$1,(8),jobs,inst_20866);
} else {
if((state_val_20878 === (7))){
var inst_20873 = (state_20877[(2)]);
var state_20877__$1 = state_20877;
var statearr_20885_20997 = state_20877__$1;
(statearr_20885_20997[(2)] = inst_20873);

(statearr_20885_20997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20878 === (8))){
var inst_20863 = (state_20877[(8)]);
var inst_20868 = (state_20877[(2)]);
var state_20877__$1 = (function (){var statearr_20886 = state_20877;
(statearr_20886[(9)] = inst_20868);

return statearr_20886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20877__$1,(9),results,inst_20863);
} else {
if((state_val_20878 === (9))){
var inst_20870 = (state_20877[(2)]);
var state_20877__$1 = (function (){var statearr_20887 = state_20877;
(statearr_20887[(10)] = inst_20870);

return statearr_20887;
})();
var statearr_20888_20998 = state_20877__$1;
(statearr_20888_20998[(2)] = null);

(statearr_20888_20998[(1)] = (2));


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
});})(c__20416__auto___20992,jobs,results,process,async))
;
return ((function (switch__20304__auto__,c__20416__auto___20992,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_20892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__);

(statearr_20892[(1)] = (1));

return statearr_20892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1 = (function (state_20877){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20893){if((e20893 instanceof Object)){
var ex__20308__auto__ = e20893;
var statearr_20894_20999 = state_20877;
(statearr_20894_20999[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21000 = state_20877;
state_20877 = G__21000;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = function(state_20877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1.call(this,state_20877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___20992,jobs,results,process,async))
})();
var state__20418__auto__ = (function (){var statearr_20895 = f__20417__auto__.call(null);
(statearr_20895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___20992);

return statearr_20895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___20992,jobs,results,process,async))
);


var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__,jobs,results,process,async){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__,jobs,results,process,async){
return (function (state_20933){
var state_val_20934 = (state_20933[(1)]);
if((state_val_20934 === (7))){
var inst_20929 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
var statearr_20935_21001 = state_20933__$1;
(statearr_20935_21001[(2)] = inst_20929);

(statearr_20935_21001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (20))){
var state_20933__$1 = state_20933;
var statearr_20936_21002 = state_20933__$1;
(statearr_20936_21002[(2)] = null);

(statearr_20936_21002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (1))){
var state_20933__$1 = state_20933;
var statearr_20937_21003 = state_20933__$1;
(statearr_20937_21003[(2)] = null);

(statearr_20937_21003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (4))){
var inst_20898 = (state_20933[(7)]);
var inst_20898__$1 = (state_20933[(2)]);
var inst_20899 = (inst_20898__$1 == null);
var state_20933__$1 = (function (){var statearr_20938 = state_20933;
(statearr_20938[(7)] = inst_20898__$1);

return statearr_20938;
})();
if(cljs.core.truth_(inst_20899)){
var statearr_20939_21004 = state_20933__$1;
(statearr_20939_21004[(1)] = (5));

} else {
var statearr_20940_21005 = state_20933__$1;
(statearr_20940_21005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (15))){
var inst_20911 = (state_20933[(8)]);
var state_20933__$1 = state_20933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20933__$1,(18),to,inst_20911);
} else {
if((state_val_20934 === (21))){
var inst_20924 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
var statearr_20941_21006 = state_20933__$1;
(statearr_20941_21006[(2)] = inst_20924);

(statearr_20941_21006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (13))){
var inst_20926 = (state_20933[(2)]);
var state_20933__$1 = (function (){var statearr_20942 = state_20933;
(statearr_20942[(9)] = inst_20926);

return statearr_20942;
})();
var statearr_20943_21007 = state_20933__$1;
(statearr_20943_21007[(2)] = null);

(statearr_20943_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (6))){
var inst_20898 = (state_20933[(7)]);
var state_20933__$1 = state_20933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20933__$1,(11),inst_20898);
} else {
if((state_val_20934 === (17))){
var inst_20919 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
if(cljs.core.truth_(inst_20919)){
var statearr_20944_21008 = state_20933__$1;
(statearr_20944_21008[(1)] = (19));

} else {
var statearr_20945_21009 = state_20933__$1;
(statearr_20945_21009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (3))){
var inst_20931 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20933__$1,inst_20931);
} else {
if((state_val_20934 === (12))){
var inst_20908 = (state_20933[(10)]);
var state_20933__$1 = state_20933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20933__$1,(14),inst_20908);
} else {
if((state_val_20934 === (2))){
var state_20933__$1 = state_20933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20933__$1,(4),results);
} else {
if((state_val_20934 === (19))){
var state_20933__$1 = state_20933;
var statearr_20946_21010 = state_20933__$1;
(statearr_20946_21010[(2)] = null);

(statearr_20946_21010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (11))){
var inst_20908 = (state_20933[(2)]);
var state_20933__$1 = (function (){var statearr_20947 = state_20933;
(statearr_20947[(10)] = inst_20908);

return statearr_20947;
})();
var statearr_20948_21011 = state_20933__$1;
(statearr_20948_21011[(2)] = null);

(statearr_20948_21011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (9))){
var state_20933__$1 = state_20933;
var statearr_20949_21012 = state_20933__$1;
(statearr_20949_21012[(2)] = null);

(statearr_20949_21012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (5))){
var state_20933__$1 = state_20933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20950_21013 = state_20933__$1;
(statearr_20950_21013[(1)] = (8));

} else {
var statearr_20951_21014 = state_20933__$1;
(statearr_20951_21014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (14))){
var inst_20911 = (state_20933[(8)]);
var inst_20913 = (state_20933[(11)]);
var inst_20911__$1 = (state_20933[(2)]);
var inst_20912 = (inst_20911__$1 == null);
var inst_20913__$1 = cljs.core.not.call(null,inst_20912);
var state_20933__$1 = (function (){var statearr_20952 = state_20933;
(statearr_20952[(8)] = inst_20911__$1);

(statearr_20952[(11)] = inst_20913__$1);

return statearr_20952;
})();
if(inst_20913__$1){
var statearr_20953_21015 = state_20933__$1;
(statearr_20953_21015[(1)] = (15));

} else {
var statearr_20954_21016 = state_20933__$1;
(statearr_20954_21016[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (16))){
var inst_20913 = (state_20933[(11)]);
var state_20933__$1 = state_20933;
var statearr_20955_21017 = state_20933__$1;
(statearr_20955_21017[(2)] = inst_20913);

(statearr_20955_21017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (10))){
var inst_20905 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
var statearr_20956_21018 = state_20933__$1;
(statearr_20956_21018[(2)] = inst_20905);

(statearr_20956_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (18))){
var inst_20916 = (state_20933[(2)]);
var state_20933__$1 = state_20933;
var statearr_20957_21019 = state_20933__$1;
(statearr_20957_21019[(2)] = inst_20916);

(statearr_20957_21019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20934 === (8))){
var inst_20902 = cljs.core.async.close_BANG_.call(null,to);
var state_20933__$1 = state_20933;
var statearr_20958_21020 = state_20933__$1;
(statearr_20958_21020[(2)] = inst_20902);

(statearr_20958_21020[(1)] = (10));


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
});})(c__20416__auto__,jobs,results,process,async))
;
return ((function (switch__20304__auto__,c__20416__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_20962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__);

(statearr_20962[(1)] = (1));

return statearr_20962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1 = (function (state_20933){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_20933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e20963){if((e20963 instanceof Object)){
var ex__20308__auto__ = e20963;
var statearr_20964_21021 = state_20933;
(statearr_20964_21021[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21022 = state_20933;
state_20933 = G__21022;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__ = function(state_20933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1.call(this,state_20933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__,jobs,results,process,async))
})();
var state__20418__auto__ = (function (){var statearr_20965 = f__20417__auto__.call(null);
(statearr_20965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_20965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__,jobs,results,process,async))
);

return c__20416__auto__;
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
var args21023 = [];
var len__17910__auto___21026 = arguments.length;
var i__17911__auto___21027 = (0);
while(true){
if((i__17911__auto___21027 < len__17910__auto___21026)){
args21023.push((arguments[i__17911__auto___21027]));

var G__21028 = (i__17911__auto___21027 + (1));
i__17911__auto___21027 = G__21028;
continue;
} else {
}
break;
}

var G__21025 = args21023.length;
switch (G__21025) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21023.length)].join('')));

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
var args21030 = [];
var len__17910__auto___21033 = arguments.length;
var i__17911__auto___21034 = (0);
while(true){
if((i__17911__auto___21034 < len__17910__auto___21033)){
args21030.push((arguments[i__17911__auto___21034]));

var G__21035 = (i__17911__auto___21034 + (1));
i__17911__auto___21034 = G__21035;
continue;
} else {
}
break;
}

var G__21032 = args21030.length;
switch (G__21032) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21030.length)].join('')));

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
var args21037 = [];
var len__17910__auto___21090 = arguments.length;
var i__17911__auto___21091 = (0);
while(true){
if((i__17911__auto___21091 < len__17910__auto___21090)){
args21037.push((arguments[i__17911__auto___21091]));

var G__21092 = (i__17911__auto___21091 + (1));
i__17911__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var G__21039 = args21037.length;
switch (G__21039) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21037.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20416__auto___21094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___21094,tc,fc){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___21094,tc,fc){
return (function (state_21065){
var state_val_21066 = (state_21065[(1)]);
if((state_val_21066 === (7))){
var inst_21061 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21067_21095 = state_21065__$1;
(statearr_21067_21095[(2)] = inst_21061);

(statearr_21067_21095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (1))){
var state_21065__$1 = state_21065;
var statearr_21068_21096 = state_21065__$1;
(statearr_21068_21096[(2)] = null);

(statearr_21068_21096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (4))){
var inst_21042 = (state_21065[(7)]);
var inst_21042__$1 = (state_21065[(2)]);
var inst_21043 = (inst_21042__$1 == null);
var state_21065__$1 = (function (){var statearr_21069 = state_21065;
(statearr_21069[(7)] = inst_21042__$1);

return statearr_21069;
})();
if(cljs.core.truth_(inst_21043)){
var statearr_21070_21097 = state_21065__$1;
(statearr_21070_21097[(1)] = (5));

} else {
var statearr_21071_21098 = state_21065__$1;
(statearr_21071_21098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (13))){
var state_21065__$1 = state_21065;
var statearr_21072_21099 = state_21065__$1;
(statearr_21072_21099[(2)] = null);

(statearr_21072_21099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (6))){
var inst_21042 = (state_21065[(7)]);
var inst_21048 = p.call(null,inst_21042);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21048)){
var statearr_21073_21100 = state_21065__$1;
(statearr_21073_21100[(1)] = (9));

} else {
var statearr_21074_21101 = state_21065__$1;
(statearr_21074_21101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (3))){
var inst_21063 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21065__$1,inst_21063);
} else {
if((state_val_21066 === (12))){
var state_21065__$1 = state_21065;
var statearr_21075_21102 = state_21065__$1;
(statearr_21075_21102[(2)] = null);

(statearr_21075_21102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (2))){
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21065__$1,(4),ch);
} else {
if((state_val_21066 === (11))){
var inst_21042 = (state_21065[(7)]);
var inst_21052 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21065__$1,(8),inst_21052,inst_21042);
} else {
if((state_val_21066 === (9))){
var state_21065__$1 = state_21065;
var statearr_21076_21103 = state_21065__$1;
(statearr_21076_21103[(2)] = tc);

(statearr_21076_21103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (5))){
var inst_21045 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21046 = cljs.core.async.close_BANG_.call(null,fc);
var state_21065__$1 = (function (){var statearr_21077 = state_21065;
(statearr_21077[(8)] = inst_21045);

return statearr_21077;
})();
var statearr_21078_21104 = state_21065__$1;
(statearr_21078_21104[(2)] = inst_21046);

(statearr_21078_21104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (14))){
var inst_21059 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21079_21105 = state_21065__$1;
(statearr_21079_21105[(2)] = inst_21059);

(statearr_21079_21105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (10))){
var state_21065__$1 = state_21065;
var statearr_21080_21106 = state_21065__$1;
(statearr_21080_21106[(2)] = fc);

(statearr_21080_21106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (8))){
var inst_21054 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21054)){
var statearr_21081_21107 = state_21065__$1;
(statearr_21081_21107[(1)] = (12));

} else {
var statearr_21082_21108 = state_21065__$1;
(statearr_21082_21108[(1)] = (13));

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
});})(c__20416__auto___21094,tc,fc))
;
return ((function (switch__20304__auto__,c__20416__auto___21094,tc,fc){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_21086 = [null,null,null,null,null,null,null,null,null];
(statearr_21086[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_21086[(1)] = (1));

return statearr_21086;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_21065){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_21065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e21087){if((e21087 instanceof Object)){
var ex__20308__auto__ = e21087;
var statearr_21088_21109 = state_21065;
(statearr_21088_21109[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21110 = state_21065;
state_21065 = G__21110;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_21065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_21065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___21094,tc,fc))
})();
var state__20418__auto__ = (function (){var statearr_21089 = f__20417__auto__.call(null);
(statearr_21089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___21094);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___21094,tc,fc))
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
var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__){
return (function (state_21174){
var state_val_21175 = (state_21174[(1)]);
if((state_val_21175 === (7))){
var inst_21170 = (state_21174[(2)]);
var state_21174__$1 = state_21174;
var statearr_21176_21197 = state_21174__$1;
(statearr_21176_21197[(2)] = inst_21170);

(statearr_21176_21197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (1))){
var inst_21154 = init;
var state_21174__$1 = (function (){var statearr_21177 = state_21174;
(statearr_21177[(7)] = inst_21154);

return statearr_21177;
})();
var statearr_21178_21198 = state_21174__$1;
(statearr_21178_21198[(2)] = null);

(statearr_21178_21198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (4))){
var inst_21157 = (state_21174[(8)]);
var inst_21157__$1 = (state_21174[(2)]);
var inst_21158 = (inst_21157__$1 == null);
var state_21174__$1 = (function (){var statearr_21179 = state_21174;
(statearr_21179[(8)] = inst_21157__$1);

return statearr_21179;
})();
if(cljs.core.truth_(inst_21158)){
var statearr_21180_21199 = state_21174__$1;
(statearr_21180_21199[(1)] = (5));

} else {
var statearr_21181_21200 = state_21174__$1;
(statearr_21181_21200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (6))){
var inst_21157 = (state_21174[(8)]);
var inst_21154 = (state_21174[(7)]);
var inst_21161 = (state_21174[(9)]);
var inst_21161__$1 = f.call(null,inst_21154,inst_21157);
var inst_21162 = cljs.core.reduced_QMARK_.call(null,inst_21161__$1);
var state_21174__$1 = (function (){var statearr_21182 = state_21174;
(statearr_21182[(9)] = inst_21161__$1);

return statearr_21182;
})();
if(inst_21162){
var statearr_21183_21201 = state_21174__$1;
(statearr_21183_21201[(1)] = (8));

} else {
var statearr_21184_21202 = state_21174__$1;
(statearr_21184_21202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (3))){
var inst_21172 = (state_21174[(2)]);
var state_21174__$1 = state_21174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21174__$1,inst_21172);
} else {
if((state_val_21175 === (2))){
var state_21174__$1 = state_21174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21174__$1,(4),ch);
} else {
if((state_val_21175 === (9))){
var inst_21161 = (state_21174[(9)]);
var inst_21154 = inst_21161;
var state_21174__$1 = (function (){var statearr_21185 = state_21174;
(statearr_21185[(7)] = inst_21154);

return statearr_21185;
})();
var statearr_21186_21203 = state_21174__$1;
(statearr_21186_21203[(2)] = null);

(statearr_21186_21203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (5))){
var inst_21154 = (state_21174[(7)]);
var state_21174__$1 = state_21174;
var statearr_21187_21204 = state_21174__$1;
(statearr_21187_21204[(2)] = inst_21154);

(statearr_21187_21204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (10))){
var inst_21168 = (state_21174[(2)]);
var state_21174__$1 = state_21174;
var statearr_21188_21205 = state_21174__$1;
(statearr_21188_21205[(2)] = inst_21168);

(statearr_21188_21205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (8))){
var inst_21161 = (state_21174[(9)]);
var inst_21164 = cljs.core.deref.call(null,inst_21161);
var state_21174__$1 = state_21174;
var statearr_21189_21206 = state_21174__$1;
(statearr_21189_21206[(2)] = inst_21164);

(statearr_21189_21206[(1)] = (10));


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
});})(c__20416__auto__))
;
return ((function (switch__20304__auto__,c__20416__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20305__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20305__auto____0 = (function (){
var statearr_21193 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21193[(0)] = cljs$core$async$reduce_$_state_machine__20305__auto__);

(statearr_21193[(1)] = (1));

return statearr_21193;
});
var cljs$core$async$reduce_$_state_machine__20305__auto____1 = (function (state_21174){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_21174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e21194){if((e21194 instanceof Object)){
var ex__20308__auto__ = e21194;
var statearr_21195_21207 = state_21174;
(statearr_21195_21207[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21208 = state_21174;
state_21174 = G__21208;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20305__auto__ = function(state_21174){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20305__auto____1.call(this,state_21174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20305__auto____0;
cljs$core$async$reduce_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20305__auto____1;
return cljs$core$async$reduce_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__))
})();
var state__20418__auto__ = (function (){var statearr_21196 = f__20417__auto__.call(null);
(statearr_21196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__))
);

return c__20416__auto__;
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
var args21209 = [];
var len__17910__auto___21261 = arguments.length;
var i__17911__auto___21262 = (0);
while(true){
if((i__17911__auto___21262 < len__17910__auto___21261)){
args21209.push((arguments[i__17911__auto___21262]));

var G__21263 = (i__17911__auto___21262 + (1));
i__17911__auto___21262 = G__21263;
continue;
} else {
}
break;
}

var G__21211 = args21209.length;
switch (G__21211) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21209.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__){
return (function (state_21236){
var state_val_21237 = (state_21236[(1)]);
if((state_val_21237 === (7))){
var inst_21218 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
var statearr_21238_21265 = state_21236__$1;
(statearr_21238_21265[(2)] = inst_21218);

(statearr_21238_21265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (1))){
var inst_21212 = cljs.core.seq.call(null,coll);
var inst_21213 = inst_21212;
var state_21236__$1 = (function (){var statearr_21239 = state_21236;
(statearr_21239[(7)] = inst_21213);

return statearr_21239;
})();
var statearr_21240_21266 = state_21236__$1;
(statearr_21240_21266[(2)] = null);

(statearr_21240_21266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (4))){
var inst_21213 = (state_21236[(7)]);
var inst_21216 = cljs.core.first.call(null,inst_21213);
var state_21236__$1 = state_21236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21236__$1,(7),ch,inst_21216);
} else {
if((state_val_21237 === (13))){
var inst_21230 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
var statearr_21241_21267 = state_21236__$1;
(statearr_21241_21267[(2)] = inst_21230);

(statearr_21241_21267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (6))){
var inst_21221 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
if(cljs.core.truth_(inst_21221)){
var statearr_21242_21268 = state_21236__$1;
(statearr_21242_21268[(1)] = (8));

} else {
var statearr_21243_21269 = state_21236__$1;
(statearr_21243_21269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (3))){
var inst_21234 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21236__$1,inst_21234);
} else {
if((state_val_21237 === (12))){
var state_21236__$1 = state_21236;
var statearr_21244_21270 = state_21236__$1;
(statearr_21244_21270[(2)] = null);

(statearr_21244_21270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (2))){
var inst_21213 = (state_21236[(7)]);
var state_21236__$1 = state_21236;
if(cljs.core.truth_(inst_21213)){
var statearr_21245_21271 = state_21236__$1;
(statearr_21245_21271[(1)] = (4));

} else {
var statearr_21246_21272 = state_21236__$1;
(statearr_21246_21272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (11))){
var inst_21227 = cljs.core.async.close_BANG_.call(null,ch);
var state_21236__$1 = state_21236;
var statearr_21247_21273 = state_21236__$1;
(statearr_21247_21273[(2)] = inst_21227);

(statearr_21247_21273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (9))){
var state_21236__$1 = state_21236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21248_21274 = state_21236__$1;
(statearr_21248_21274[(1)] = (11));

} else {
var statearr_21249_21275 = state_21236__$1;
(statearr_21249_21275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (5))){
var inst_21213 = (state_21236[(7)]);
var state_21236__$1 = state_21236;
var statearr_21250_21276 = state_21236__$1;
(statearr_21250_21276[(2)] = inst_21213);

(statearr_21250_21276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (10))){
var inst_21232 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
var statearr_21251_21277 = state_21236__$1;
(statearr_21251_21277[(2)] = inst_21232);

(statearr_21251_21277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (8))){
var inst_21213 = (state_21236[(7)]);
var inst_21223 = cljs.core.next.call(null,inst_21213);
var inst_21213__$1 = inst_21223;
var state_21236__$1 = (function (){var statearr_21252 = state_21236;
(statearr_21252[(7)] = inst_21213__$1);

return statearr_21252;
})();
var statearr_21253_21278 = state_21236__$1;
(statearr_21253_21278[(2)] = null);

(statearr_21253_21278[(1)] = (2));


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
});})(c__20416__auto__))
;
return ((function (switch__20304__auto__,c__20416__auto__){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_21257 = [null,null,null,null,null,null,null,null];
(statearr_21257[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_21257[(1)] = (1));

return statearr_21257;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_21236){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_21236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e21258){if((e21258 instanceof Object)){
var ex__20308__auto__ = e21258;
var statearr_21259_21279 = state_21236;
(statearr_21259_21279[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21280 = state_21236;
state_21236 = G__21280;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_21236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_21236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__))
})();
var state__20418__auto__ = (function (){var statearr_21260 = f__20417__auto__.call(null);
(statearr_21260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_21260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__))
);

return c__20416__auto__;
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
var x__17507__auto__ = (((_ == null))?null:_);
var m__17508__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,_);
} else {
var m__17508__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,_);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21502 = (function (mult,ch,cs,meta21503){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21503 = meta21503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21504,meta21503__$1){
var self__ = this;
var _21504__$1 = this;
return (new cljs.core.async.t_cljs$core$async21502(self__.mult,self__.ch,self__.cs,meta21503__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21504){
var self__ = this;
var _21504__$1 = this;
return self__.meta21503;
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21503","meta21503",-1325511042,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21502";

cljs.core.async.t_cljs$core$async21502.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21502");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21502 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21502(mult__$1,ch__$1,cs__$1,meta21503){
return (new cljs.core.async.t_cljs$core$async21502(mult__$1,ch__$1,cs__$1,meta21503));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21502(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20416__auto___21723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___21723,cs,m,dchan,dctr,done){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___21723,cs,m,dchan,dctr,done){
return (function (state_21635){
var state_val_21636 = (state_21635[(1)]);
if((state_val_21636 === (7))){
var inst_21631 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21637_21724 = state_21635__$1;
(statearr_21637_21724[(2)] = inst_21631);

(statearr_21637_21724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (20))){
var inst_21536 = (state_21635[(7)]);
var inst_21546 = cljs.core.first.call(null,inst_21536);
var inst_21547 = cljs.core.nth.call(null,inst_21546,(0),null);
var inst_21548 = cljs.core.nth.call(null,inst_21546,(1),null);
var state_21635__$1 = (function (){var statearr_21638 = state_21635;
(statearr_21638[(8)] = inst_21547);

return statearr_21638;
})();
if(cljs.core.truth_(inst_21548)){
var statearr_21639_21725 = state_21635__$1;
(statearr_21639_21725[(1)] = (22));

} else {
var statearr_21640_21726 = state_21635__$1;
(statearr_21640_21726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (27))){
var inst_21578 = (state_21635[(9)]);
var inst_21583 = (state_21635[(10)]);
var inst_21507 = (state_21635[(11)]);
var inst_21576 = (state_21635[(12)]);
var inst_21583__$1 = cljs.core._nth.call(null,inst_21576,inst_21578);
var inst_21584 = cljs.core.async.put_BANG_.call(null,inst_21583__$1,inst_21507,done);
var state_21635__$1 = (function (){var statearr_21641 = state_21635;
(statearr_21641[(10)] = inst_21583__$1);

return statearr_21641;
})();
if(cljs.core.truth_(inst_21584)){
var statearr_21642_21727 = state_21635__$1;
(statearr_21642_21727[(1)] = (30));

} else {
var statearr_21643_21728 = state_21635__$1;
(statearr_21643_21728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (1))){
var state_21635__$1 = state_21635;
var statearr_21644_21729 = state_21635__$1;
(statearr_21644_21729[(2)] = null);

(statearr_21644_21729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (24))){
var inst_21536 = (state_21635[(7)]);
var inst_21553 = (state_21635[(2)]);
var inst_21554 = cljs.core.next.call(null,inst_21536);
var inst_21516 = inst_21554;
var inst_21517 = null;
var inst_21518 = (0);
var inst_21519 = (0);
var state_21635__$1 = (function (){var statearr_21645 = state_21635;
(statearr_21645[(13)] = inst_21516);

(statearr_21645[(14)] = inst_21519);

(statearr_21645[(15)] = inst_21553);

(statearr_21645[(16)] = inst_21517);

(statearr_21645[(17)] = inst_21518);

return statearr_21645;
})();
var statearr_21646_21730 = state_21635__$1;
(statearr_21646_21730[(2)] = null);

(statearr_21646_21730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (39))){
var state_21635__$1 = state_21635;
var statearr_21650_21731 = state_21635__$1;
(statearr_21650_21731[(2)] = null);

(statearr_21650_21731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (4))){
var inst_21507 = (state_21635[(11)]);
var inst_21507__$1 = (state_21635[(2)]);
var inst_21508 = (inst_21507__$1 == null);
var state_21635__$1 = (function (){var statearr_21651 = state_21635;
(statearr_21651[(11)] = inst_21507__$1);

return statearr_21651;
})();
if(cljs.core.truth_(inst_21508)){
var statearr_21652_21732 = state_21635__$1;
(statearr_21652_21732[(1)] = (5));

} else {
var statearr_21653_21733 = state_21635__$1;
(statearr_21653_21733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (15))){
var inst_21516 = (state_21635[(13)]);
var inst_21519 = (state_21635[(14)]);
var inst_21517 = (state_21635[(16)]);
var inst_21518 = (state_21635[(17)]);
var inst_21532 = (state_21635[(2)]);
var inst_21533 = (inst_21519 + (1));
var tmp21647 = inst_21516;
var tmp21648 = inst_21517;
var tmp21649 = inst_21518;
var inst_21516__$1 = tmp21647;
var inst_21517__$1 = tmp21648;
var inst_21518__$1 = tmp21649;
var inst_21519__$1 = inst_21533;
var state_21635__$1 = (function (){var statearr_21654 = state_21635;
(statearr_21654[(18)] = inst_21532);

(statearr_21654[(13)] = inst_21516__$1);

(statearr_21654[(14)] = inst_21519__$1);

(statearr_21654[(16)] = inst_21517__$1);

(statearr_21654[(17)] = inst_21518__$1);

return statearr_21654;
})();
var statearr_21655_21734 = state_21635__$1;
(statearr_21655_21734[(2)] = null);

(statearr_21655_21734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (21))){
var inst_21557 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21659_21735 = state_21635__$1;
(statearr_21659_21735[(2)] = inst_21557);

(statearr_21659_21735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (31))){
var inst_21583 = (state_21635[(10)]);
var inst_21587 = done.call(null,null);
var inst_21588 = cljs.core.async.untap_STAR_.call(null,m,inst_21583);
var state_21635__$1 = (function (){var statearr_21660 = state_21635;
(statearr_21660[(19)] = inst_21587);

return statearr_21660;
})();
var statearr_21661_21736 = state_21635__$1;
(statearr_21661_21736[(2)] = inst_21588);

(statearr_21661_21736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (32))){
var inst_21578 = (state_21635[(9)]);
var inst_21575 = (state_21635[(20)]);
var inst_21577 = (state_21635[(21)]);
var inst_21576 = (state_21635[(12)]);
var inst_21590 = (state_21635[(2)]);
var inst_21591 = (inst_21578 + (1));
var tmp21656 = inst_21575;
var tmp21657 = inst_21577;
var tmp21658 = inst_21576;
var inst_21575__$1 = tmp21656;
var inst_21576__$1 = tmp21658;
var inst_21577__$1 = tmp21657;
var inst_21578__$1 = inst_21591;
var state_21635__$1 = (function (){var statearr_21662 = state_21635;
(statearr_21662[(22)] = inst_21590);

(statearr_21662[(9)] = inst_21578__$1);

(statearr_21662[(20)] = inst_21575__$1);

(statearr_21662[(21)] = inst_21577__$1);

(statearr_21662[(12)] = inst_21576__$1);

return statearr_21662;
})();
var statearr_21663_21737 = state_21635__$1;
(statearr_21663_21737[(2)] = null);

(statearr_21663_21737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (40))){
var inst_21603 = (state_21635[(23)]);
var inst_21607 = done.call(null,null);
var inst_21608 = cljs.core.async.untap_STAR_.call(null,m,inst_21603);
var state_21635__$1 = (function (){var statearr_21664 = state_21635;
(statearr_21664[(24)] = inst_21607);

return statearr_21664;
})();
var statearr_21665_21738 = state_21635__$1;
(statearr_21665_21738[(2)] = inst_21608);

(statearr_21665_21738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (33))){
var inst_21594 = (state_21635[(25)]);
var inst_21596 = cljs.core.chunked_seq_QMARK_.call(null,inst_21594);
var state_21635__$1 = state_21635;
if(inst_21596){
var statearr_21666_21739 = state_21635__$1;
(statearr_21666_21739[(1)] = (36));

} else {
var statearr_21667_21740 = state_21635__$1;
(statearr_21667_21740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (13))){
var inst_21526 = (state_21635[(26)]);
var inst_21529 = cljs.core.async.close_BANG_.call(null,inst_21526);
var state_21635__$1 = state_21635;
var statearr_21668_21741 = state_21635__$1;
(statearr_21668_21741[(2)] = inst_21529);

(statearr_21668_21741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (22))){
var inst_21547 = (state_21635[(8)]);
var inst_21550 = cljs.core.async.close_BANG_.call(null,inst_21547);
var state_21635__$1 = state_21635;
var statearr_21669_21742 = state_21635__$1;
(statearr_21669_21742[(2)] = inst_21550);

(statearr_21669_21742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (36))){
var inst_21594 = (state_21635[(25)]);
var inst_21598 = cljs.core.chunk_first.call(null,inst_21594);
var inst_21599 = cljs.core.chunk_rest.call(null,inst_21594);
var inst_21600 = cljs.core.count.call(null,inst_21598);
var inst_21575 = inst_21599;
var inst_21576 = inst_21598;
var inst_21577 = inst_21600;
var inst_21578 = (0);
var state_21635__$1 = (function (){var statearr_21670 = state_21635;
(statearr_21670[(9)] = inst_21578);

(statearr_21670[(20)] = inst_21575);

(statearr_21670[(21)] = inst_21577);

(statearr_21670[(12)] = inst_21576);

return statearr_21670;
})();
var statearr_21671_21743 = state_21635__$1;
(statearr_21671_21743[(2)] = null);

(statearr_21671_21743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (41))){
var inst_21594 = (state_21635[(25)]);
var inst_21610 = (state_21635[(2)]);
var inst_21611 = cljs.core.next.call(null,inst_21594);
var inst_21575 = inst_21611;
var inst_21576 = null;
var inst_21577 = (0);
var inst_21578 = (0);
var state_21635__$1 = (function (){var statearr_21672 = state_21635;
(statearr_21672[(9)] = inst_21578);

(statearr_21672[(27)] = inst_21610);

(statearr_21672[(20)] = inst_21575);

(statearr_21672[(21)] = inst_21577);

(statearr_21672[(12)] = inst_21576);

return statearr_21672;
})();
var statearr_21673_21744 = state_21635__$1;
(statearr_21673_21744[(2)] = null);

(statearr_21673_21744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (43))){
var state_21635__$1 = state_21635;
var statearr_21674_21745 = state_21635__$1;
(statearr_21674_21745[(2)] = null);

(statearr_21674_21745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (29))){
var inst_21619 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21675_21746 = state_21635__$1;
(statearr_21675_21746[(2)] = inst_21619);

(statearr_21675_21746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (44))){
var inst_21628 = (state_21635[(2)]);
var state_21635__$1 = (function (){var statearr_21676 = state_21635;
(statearr_21676[(28)] = inst_21628);

return statearr_21676;
})();
var statearr_21677_21747 = state_21635__$1;
(statearr_21677_21747[(2)] = null);

(statearr_21677_21747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (6))){
var inst_21567 = (state_21635[(29)]);
var inst_21566 = cljs.core.deref.call(null,cs);
var inst_21567__$1 = cljs.core.keys.call(null,inst_21566);
var inst_21568 = cljs.core.count.call(null,inst_21567__$1);
var inst_21569 = cljs.core.reset_BANG_.call(null,dctr,inst_21568);
var inst_21574 = cljs.core.seq.call(null,inst_21567__$1);
var inst_21575 = inst_21574;
var inst_21576 = null;
var inst_21577 = (0);
var inst_21578 = (0);
var state_21635__$1 = (function (){var statearr_21678 = state_21635;
(statearr_21678[(30)] = inst_21569);

(statearr_21678[(9)] = inst_21578);

(statearr_21678[(29)] = inst_21567__$1);

(statearr_21678[(20)] = inst_21575);

(statearr_21678[(21)] = inst_21577);

(statearr_21678[(12)] = inst_21576);

return statearr_21678;
})();
var statearr_21679_21748 = state_21635__$1;
(statearr_21679_21748[(2)] = null);

(statearr_21679_21748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (28))){
var inst_21594 = (state_21635[(25)]);
var inst_21575 = (state_21635[(20)]);
var inst_21594__$1 = cljs.core.seq.call(null,inst_21575);
var state_21635__$1 = (function (){var statearr_21680 = state_21635;
(statearr_21680[(25)] = inst_21594__$1);

return statearr_21680;
})();
if(inst_21594__$1){
var statearr_21681_21749 = state_21635__$1;
(statearr_21681_21749[(1)] = (33));

} else {
var statearr_21682_21750 = state_21635__$1;
(statearr_21682_21750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (25))){
var inst_21578 = (state_21635[(9)]);
var inst_21577 = (state_21635[(21)]);
var inst_21580 = (inst_21578 < inst_21577);
var inst_21581 = inst_21580;
var state_21635__$1 = state_21635;
if(cljs.core.truth_(inst_21581)){
var statearr_21683_21751 = state_21635__$1;
(statearr_21683_21751[(1)] = (27));

} else {
var statearr_21684_21752 = state_21635__$1;
(statearr_21684_21752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (34))){
var state_21635__$1 = state_21635;
var statearr_21685_21753 = state_21635__$1;
(statearr_21685_21753[(2)] = null);

(statearr_21685_21753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (17))){
var state_21635__$1 = state_21635;
var statearr_21686_21754 = state_21635__$1;
(statearr_21686_21754[(2)] = null);

(statearr_21686_21754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (3))){
var inst_21633 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21635__$1,inst_21633);
} else {
if((state_val_21636 === (12))){
var inst_21562 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21687_21755 = state_21635__$1;
(statearr_21687_21755[(2)] = inst_21562);

(statearr_21687_21755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (2))){
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21635__$1,(4),ch);
} else {
if((state_val_21636 === (23))){
var state_21635__$1 = state_21635;
var statearr_21688_21756 = state_21635__$1;
(statearr_21688_21756[(2)] = null);

(statearr_21688_21756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (35))){
var inst_21617 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21689_21757 = state_21635__$1;
(statearr_21689_21757[(2)] = inst_21617);

(statearr_21689_21757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (19))){
var inst_21536 = (state_21635[(7)]);
var inst_21540 = cljs.core.chunk_first.call(null,inst_21536);
var inst_21541 = cljs.core.chunk_rest.call(null,inst_21536);
var inst_21542 = cljs.core.count.call(null,inst_21540);
var inst_21516 = inst_21541;
var inst_21517 = inst_21540;
var inst_21518 = inst_21542;
var inst_21519 = (0);
var state_21635__$1 = (function (){var statearr_21690 = state_21635;
(statearr_21690[(13)] = inst_21516);

(statearr_21690[(14)] = inst_21519);

(statearr_21690[(16)] = inst_21517);

(statearr_21690[(17)] = inst_21518);

return statearr_21690;
})();
var statearr_21691_21758 = state_21635__$1;
(statearr_21691_21758[(2)] = null);

(statearr_21691_21758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (11))){
var inst_21516 = (state_21635[(13)]);
var inst_21536 = (state_21635[(7)]);
var inst_21536__$1 = cljs.core.seq.call(null,inst_21516);
var state_21635__$1 = (function (){var statearr_21692 = state_21635;
(statearr_21692[(7)] = inst_21536__$1);

return statearr_21692;
})();
if(inst_21536__$1){
var statearr_21693_21759 = state_21635__$1;
(statearr_21693_21759[(1)] = (16));

} else {
var statearr_21694_21760 = state_21635__$1;
(statearr_21694_21760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (9))){
var inst_21564 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21695_21761 = state_21635__$1;
(statearr_21695_21761[(2)] = inst_21564);

(statearr_21695_21761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (5))){
var inst_21514 = cljs.core.deref.call(null,cs);
var inst_21515 = cljs.core.seq.call(null,inst_21514);
var inst_21516 = inst_21515;
var inst_21517 = null;
var inst_21518 = (0);
var inst_21519 = (0);
var state_21635__$1 = (function (){var statearr_21696 = state_21635;
(statearr_21696[(13)] = inst_21516);

(statearr_21696[(14)] = inst_21519);

(statearr_21696[(16)] = inst_21517);

(statearr_21696[(17)] = inst_21518);

return statearr_21696;
})();
var statearr_21697_21762 = state_21635__$1;
(statearr_21697_21762[(2)] = null);

(statearr_21697_21762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (14))){
var state_21635__$1 = state_21635;
var statearr_21698_21763 = state_21635__$1;
(statearr_21698_21763[(2)] = null);

(statearr_21698_21763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (45))){
var inst_21625 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21699_21764 = state_21635__$1;
(statearr_21699_21764[(2)] = inst_21625);

(statearr_21699_21764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (26))){
var inst_21567 = (state_21635[(29)]);
var inst_21621 = (state_21635[(2)]);
var inst_21622 = cljs.core.seq.call(null,inst_21567);
var state_21635__$1 = (function (){var statearr_21700 = state_21635;
(statearr_21700[(31)] = inst_21621);

return statearr_21700;
})();
if(inst_21622){
var statearr_21701_21765 = state_21635__$1;
(statearr_21701_21765[(1)] = (42));

} else {
var statearr_21702_21766 = state_21635__$1;
(statearr_21702_21766[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (16))){
var inst_21536 = (state_21635[(7)]);
var inst_21538 = cljs.core.chunked_seq_QMARK_.call(null,inst_21536);
var state_21635__$1 = state_21635;
if(inst_21538){
var statearr_21703_21767 = state_21635__$1;
(statearr_21703_21767[(1)] = (19));

} else {
var statearr_21704_21768 = state_21635__$1;
(statearr_21704_21768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (38))){
var inst_21614 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21705_21769 = state_21635__$1;
(statearr_21705_21769[(2)] = inst_21614);

(statearr_21705_21769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (30))){
var state_21635__$1 = state_21635;
var statearr_21706_21770 = state_21635__$1;
(statearr_21706_21770[(2)] = null);

(statearr_21706_21770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (10))){
var inst_21519 = (state_21635[(14)]);
var inst_21517 = (state_21635[(16)]);
var inst_21525 = cljs.core._nth.call(null,inst_21517,inst_21519);
var inst_21526 = cljs.core.nth.call(null,inst_21525,(0),null);
var inst_21527 = cljs.core.nth.call(null,inst_21525,(1),null);
var state_21635__$1 = (function (){var statearr_21707 = state_21635;
(statearr_21707[(26)] = inst_21526);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21527)){
var statearr_21708_21771 = state_21635__$1;
(statearr_21708_21771[(1)] = (13));

} else {
var statearr_21709_21772 = state_21635__$1;
(statearr_21709_21772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (18))){
var inst_21560 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21710_21773 = state_21635__$1;
(statearr_21710_21773[(2)] = inst_21560);

(statearr_21710_21773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (42))){
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21635__$1,(45),dchan);
} else {
if((state_val_21636 === (37))){
var inst_21603 = (state_21635[(23)]);
var inst_21507 = (state_21635[(11)]);
var inst_21594 = (state_21635[(25)]);
var inst_21603__$1 = cljs.core.first.call(null,inst_21594);
var inst_21604 = cljs.core.async.put_BANG_.call(null,inst_21603__$1,inst_21507,done);
var state_21635__$1 = (function (){var statearr_21711 = state_21635;
(statearr_21711[(23)] = inst_21603__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21604)){
var statearr_21712_21774 = state_21635__$1;
(statearr_21712_21774[(1)] = (39));

} else {
var statearr_21713_21775 = state_21635__$1;
(statearr_21713_21775[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (8))){
var inst_21519 = (state_21635[(14)]);
var inst_21518 = (state_21635[(17)]);
var inst_21521 = (inst_21519 < inst_21518);
var inst_21522 = inst_21521;
var state_21635__$1 = state_21635;
if(cljs.core.truth_(inst_21522)){
var statearr_21714_21776 = state_21635__$1;
(statearr_21714_21776[(1)] = (10));

} else {
var statearr_21715_21777 = state_21635__$1;
(statearr_21715_21777[(1)] = (11));

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
});})(c__20416__auto___21723,cs,m,dchan,dctr,done))
;
return ((function (switch__20304__auto__,c__20416__auto___21723,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20305__auto__ = null;
var cljs$core$async$mult_$_state_machine__20305__auto____0 = (function (){
var statearr_21719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21719[(0)] = cljs$core$async$mult_$_state_machine__20305__auto__);

(statearr_21719[(1)] = (1));

return statearr_21719;
});
var cljs$core$async$mult_$_state_machine__20305__auto____1 = (function (state_21635){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_21635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e21720){if((e21720 instanceof Object)){
var ex__20308__auto__ = e21720;
var statearr_21721_21778 = state_21635;
(statearr_21721_21778[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21779 = state_21635;
state_21635 = G__21779;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20305__auto__ = function(state_21635){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20305__auto____1.call(this,state_21635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20305__auto____0;
cljs$core$async$mult_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20305__auto____1;
return cljs$core$async$mult_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___21723,cs,m,dchan,dctr,done))
})();
var state__20418__auto__ = (function (){var statearr_21722 = f__20417__auto__.call(null);
(statearr_21722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___21723);

return statearr_21722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___21723,cs,m,dchan,dctr,done))
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
var args21780 = [];
var len__17910__auto___21783 = arguments.length;
var i__17911__auto___21784 = (0);
while(true){
if((i__17911__auto___21784 < len__17910__auto___21783)){
args21780.push((arguments[i__17911__auto___21784]));

var G__21785 = (i__17911__auto___21784 + (1));
i__17911__auto___21784 = G__21785;
continue;
} else {
}
break;
}

var G__21782 = args21780.length;
switch (G__21782) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21780.length)].join('')));

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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,state_map);
} else {
var m__17508__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,state_map);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,mode);
} else {
var m__17508__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___21797 = arguments.length;
var i__17911__auto___21798 = (0);
while(true){
if((i__17911__auto___21798 < len__17910__auto___21797)){
args__17917__auto__.push((arguments[i__17911__auto___21798]));

var G__21799 = (i__17911__auto___21798 + (1));
i__17911__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((3) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21791){
var map__21792 = p__21791;
var map__21792__$1 = ((((!((map__21792 == null)))?((((map__21792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21792):map__21792);
var opts = map__21792__$1;
var statearr_21794_21800 = state;
(statearr_21794_21800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21792,map__21792__$1,opts){
return (function (val){
var statearr_21795_21801 = state;
(statearr_21795_21801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21792,map__21792__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21796_21802 = state;
(statearr_21796_21802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21787){
var G__21788 = cljs.core.first.call(null,seq21787);
var seq21787__$1 = cljs.core.next.call(null,seq21787);
var G__21789 = cljs.core.first.call(null,seq21787__$1);
var seq21787__$2 = cljs.core.next.call(null,seq21787__$1);
var G__21790 = cljs.core.first.call(null,seq21787__$2);
var seq21787__$3 = cljs.core.next.call(null,seq21787__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21788,G__21789,G__21790,seq21787__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21966 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21967){
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
this.meta21967 = meta21967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21968,meta21967__$1){
var self__ = this;
var _21968__$1 = this;
return (new cljs.core.async.t_cljs$core$async21966(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21967__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21968){
var self__ = this;
var _21968__$1 = this;
return self__.meta21967;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21966.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21967","meta21967",-1054740207,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21966";

cljs.core.async.t_cljs$core$async21966.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21966");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21966 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21967){
return (new cljs.core.async.t_cljs$core$async21966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21967));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21966(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20416__auto___22129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22066){
var state_val_22067 = (state_22066[(1)]);
if((state_val_22067 === (7))){
var inst_21984 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22068_22130 = state_22066__$1;
(statearr_22068_22130[(2)] = inst_21984);

(statearr_22068_22130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (20))){
var inst_21996 = (state_22066[(7)]);
var state_22066__$1 = state_22066;
var statearr_22069_22131 = state_22066__$1;
(statearr_22069_22131[(2)] = inst_21996);

(statearr_22069_22131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (27))){
var state_22066__$1 = state_22066;
var statearr_22070_22132 = state_22066__$1;
(statearr_22070_22132[(2)] = null);

(statearr_22070_22132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (1))){
var inst_21972 = (state_22066[(8)]);
var inst_21972__$1 = calc_state.call(null);
var inst_21974 = (inst_21972__$1 == null);
var inst_21975 = cljs.core.not.call(null,inst_21974);
var state_22066__$1 = (function (){var statearr_22071 = state_22066;
(statearr_22071[(8)] = inst_21972__$1);

return statearr_22071;
})();
if(inst_21975){
var statearr_22072_22133 = state_22066__$1;
(statearr_22072_22133[(1)] = (2));

} else {
var statearr_22073_22134 = state_22066__$1;
(statearr_22073_22134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (24))){
var inst_22019 = (state_22066[(9)]);
var inst_22040 = (state_22066[(10)]);
var inst_22026 = (state_22066[(11)]);
var inst_22040__$1 = inst_22019.call(null,inst_22026);
var state_22066__$1 = (function (){var statearr_22074 = state_22066;
(statearr_22074[(10)] = inst_22040__$1);

return statearr_22074;
})();
if(cljs.core.truth_(inst_22040__$1)){
var statearr_22075_22135 = state_22066__$1;
(statearr_22075_22135[(1)] = (29));

} else {
var statearr_22076_22136 = state_22066__$1;
(statearr_22076_22136[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (4))){
var inst_21987 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_21987)){
var statearr_22077_22137 = state_22066__$1;
(statearr_22077_22137[(1)] = (8));

} else {
var statearr_22078_22138 = state_22066__$1;
(statearr_22078_22138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (15))){
var inst_22013 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22013)){
var statearr_22079_22139 = state_22066__$1;
(statearr_22079_22139[(1)] = (19));

} else {
var statearr_22080_22140 = state_22066__$1;
(statearr_22080_22140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (21))){
var inst_22018 = (state_22066[(12)]);
var inst_22018__$1 = (state_22066[(2)]);
var inst_22019 = cljs.core.get.call(null,inst_22018__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22020 = cljs.core.get.call(null,inst_22018__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22021 = cljs.core.get.call(null,inst_22018__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22066__$1 = (function (){var statearr_22081 = state_22066;
(statearr_22081[(9)] = inst_22019);

(statearr_22081[(12)] = inst_22018__$1);

(statearr_22081[(13)] = inst_22020);

return statearr_22081;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22066__$1,(22),inst_22021);
} else {
if((state_val_22067 === (31))){
var inst_22048 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22048)){
var statearr_22082_22141 = state_22066__$1;
(statearr_22082_22141[(1)] = (32));

} else {
var statearr_22083_22142 = state_22066__$1;
(statearr_22083_22142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (32))){
var inst_22025 = (state_22066[(14)]);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,(35),out,inst_22025);
} else {
if((state_val_22067 === (33))){
var inst_22018 = (state_22066[(12)]);
var inst_21996 = inst_22018;
var state_22066__$1 = (function (){var statearr_22084 = state_22066;
(statearr_22084[(7)] = inst_21996);

return statearr_22084;
})();
var statearr_22085_22143 = state_22066__$1;
(statearr_22085_22143[(2)] = null);

(statearr_22085_22143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (13))){
var inst_21996 = (state_22066[(7)]);
var inst_22003 = inst_21996.cljs$lang$protocol_mask$partition0$;
var inst_22004 = (inst_22003 & (64));
var inst_22005 = inst_21996.cljs$core$ISeq$;
var inst_22006 = (inst_22004) || (inst_22005);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22006)){
var statearr_22086_22144 = state_22066__$1;
(statearr_22086_22144[(1)] = (16));

} else {
var statearr_22087_22145 = state_22066__$1;
(statearr_22087_22145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (22))){
var inst_22026 = (state_22066[(11)]);
var inst_22025 = (state_22066[(14)]);
var inst_22024 = (state_22066[(2)]);
var inst_22025__$1 = cljs.core.nth.call(null,inst_22024,(0),null);
var inst_22026__$1 = cljs.core.nth.call(null,inst_22024,(1),null);
var inst_22027 = (inst_22025__$1 == null);
var inst_22028 = cljs.core._EQ_.call(null,inst_22026__$1,change);
var inst_22029 = (inst_22027) || (inst_22028);
var state_22066__$1 = (function (){var statearr_22088 = state_22066;
(statearr_22088[(11)] = inst_22026__$1);

(statearr_22088[(14)] = inst_22025__$1);

return statearr_22088;
})();
if(cljs.core.truth_(inst_22029)){
var statearr_22089_22146 = state_22066__$1;
(statearr_22089_22146[(1)] = (23));

} else {
var statearr_22090_22147 = state_22066__$1;
(statearr_22090_22147[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (36))){
var inst_22018 = (state_22066[(12)]);
var inst_21996 = inst_22018;
var state_22066__$1 = (function (){var statearr_22091 = state_22066;
(statearr_22091[(7)] = inst_21996);

return statearr_22091;
})();
var statearr_22092_22148 = state_22066__$1;
(statearr_22092_22148[(2)] = null);

(statearr_22092_22148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (29))){
var inst_22040 = (state_22066[(10)]);
var state_22066__$1 = state_22066;
var statearr_22093_22149 = state_22066__$1;
(statearr_22093_22149[(2)] = inst_22040);

(statearr_22093_22149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (6))){
var state_22066__$1 = state_22066;
var statearr_22094_22150 = state_22066__$1;
(statearr_22094_22150[(2)] = false);

(statearr_22094_22150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (28))){
var inst_22036 = (state_22066[(2)]);
var inst_22037 = calc_state.call(null);
var inst_21996 = inst_22037;
var state_22066__$1 = (function (){var statearr_22095 = state_22066;
(statearr_22095[(15)] = inst_22036);

(statearr_22095[(7)] = inst_21996);

return statearr_22095;
})();
var statearr_22096_22151 = state_22066__$1;
(statearr_22096_22151[(2)] = null);

(statearr_22096_22151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (25))){
var inst_22062 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22097_22152 = state_22066__$1;
(statearr_22097_22152[(2)] = inst_22062);

(statearr_22097_22152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (34))){
var inst_22060 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22098_22153 = state_22066__$1;
(statearr_22098_22153[(2)] = inst_22060);

(statearr_22098_22153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (17))){
var state_22066__$1 = state_22066;
var statearr_22099_22154 = state_22066__$1;
(statearr_22099_22154[(2)] = false);

(statearr_22099_22154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (3))){
var state_22066__$1 = state_22066;
var statearr_22100_22155 = state_22066__$1;
(statearr_22100_22155[(2)] = false);

(statearr_22100_22155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (12))){
var inst_22064 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22066__$1,inst_22064);
} else {
if((state_val_22067 === (2))){
var inst_21972 = (state_22066[(8)]);
var inst_21977 = inst_21972.cljs$lang$protocol_mask$partition0$;
var inst_21978 = (inst_21977 & (64));
var inst_21979 = inst_21972.cljs$core$ISeq$;
var inst_21980 = (inst_21978) || (inst_21979);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_21980)){
var statearr_22101_22156 = state_22066__$1;
(statearr_22101_22156[(1)] = (5));

} else {
var statearr_22102_22157 = state_22066__$1;
(statearr_22102_22157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (23))){
var inst_22025 = (state_22066[(14)]);
var inst_22031 = (inst_22025 == null);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22031)){
var statearr_22103_22158 = state_22066__$1;
(statearr_22103_22158[(1)] = (26));

} else {
var statearr_22104_22159 = state_22066__$1;
(statearr_22104_22159[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (35))){
var inst_22051 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22051)){
var statearr_22105_22160 = state_22066__$1;
(statearr_22105_22160[(1)] = (36));

} else {
var statearr_22106_22161 = state_22066__$1;
(statearr_22106_22161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (19))){
var inst_21996 = (state_22066[(7)]);
var inst_22015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21996);
var state_22066__$1 = state_22066;
var statearr_22107_22162 = state_22066__$1;
(statearr_22107_22162[(2)] = inst_22015);

(statearr_22107_22162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (11))){
var inst_21996 = (state_22066[(7)]);
var inst_22000 = (inst_21996 == null);
var inst_22001 = cljs.core.not.call(null,inst_22000);
var state_22066__$1 = state_22066;
if(inst_22001){
var statearr_22108_22163 = state_22066__$1;
(statearr_22108_22163[(1)] = (13));

} else {
var statearr_22109_22164 = state_22066__$1;
(statearr_22109_22164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (9))){
var inst_21972 = (state_22066[(8)]);
var state_22066__$1 = state_22066;
var statearr_22110_22165 = state_22066__$1;
(statearr_22110_22165[(2)] = inst_21972);

(statearr_22110_22165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (5))){
var state_22066__$1 = state_22066;
var statearr_22111_22166 = state_22066__$1;
(statearr_22111_22166[(2)] = true);

(statearr_22111_22166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (14))){
var state_22066__$1 = state_22066;
var statearr_22112_22167 = state_22066__$1;
(statearr_22112_22167[(2)] = false);

(statearr_22112_22167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (26))){
var inst_22026 = (state_22066[(11)]);
var inst_22033 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22026);
var state_22066__$1 = state_22066;
var statearr_22113_22168 = state_22066__$1;
(statearr_22113_22168[(2)] = inst_22033);

(statearr_22113_22168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (16))){
var state_22066__$1 = state_22066;
var statearr_22114_22169 = state_22066__$1;
(statearr_22114_22169[(2)] = true);

(statearr_22114_22169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (38))){
var inst_22056 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22115_22170 = state_22066__$1;
(statearr_22115_22170[(2)] = inst_22056);

(statearr_22115_22170[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (30))){
var inst_22019 = (state_22066[(9)]);
var inst_22026 = (state_22066[(11)]);
var inst_22020 = (state_22066[(13)]);
var inst_22043 = cljs.core.empty_QMARK_.call(null,inst_22019);
var inst_22044 = inst_22020.call(null,inst_22026);
var inst_22045 = cljs.core.not.call(null,inst_22044);
var inst_22046 = (inst_22043) && (inst_22045);
var state_22066__$1 = state_22066;
var statearr_22116_22171 = state_22066__$1;
(statearr_22116_22171[(2)] = inst_22046);

(statearr_22116_22171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (10))){
var inst_21972 = (state_22066[(8)]);
var inst_21992 = (state_22066[(2)]);
var inst_21993 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21994 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21995 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21996 = inst_21972;
var state_22066__$1 = (function (){var statearr_22117 = state_22066;
(statearr_22117[(7)] = inst_21996);

(statearr_22117[(16)] = inst_21994);

(statearr_22117[(17)] = inst_21995);

(statearr_22117[(18)] = inst_21993);

return statearr_22117;
})();
var statearr_22118_22172 = state_22066__$1;
(statearr_22118_22172[(2)] = null);

(statearr_22118_22172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (18))){
var inst_22010 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22119_22173 = state_22066__$1;
(statearr_22119_22173[(2)] = inst_22010);

(statearr_22119_22173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (37))){
var state_22066__$1 = state_22066;
var statearr_22120_22174 = state_22066__$1;
(statearr_22120_22174[(2)] = null);

(statearr_22120_22174[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (8))){
var inst_21972 = (state_22066[(8)]);
var inst_21989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21972);
var state_22066__$1 = state_22066;
var statearr_22121_22175 = state_22066__$1;
(statearr_22121_22175[(2)] = inst_21989);

(statearr_22121_22175[(1)] = (10));


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
});})(c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20304__auto__,c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20305__auto__ = null;
var cljs$core$async$mix_$_state_machine__20305__auto____0 = (function (){
var statearr_22125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22125[(0)] = cljs$core$async$mix_$_state_machine__20305__auto__);

(statearr_22125[(1)] = (1));

return statearr_22125;
});
var cljs$core$async$mix_$_state_machine__20305__auto____1 = (function (state_22066){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22126){if((e22126 instanceof Object)){
var ex__20308__auto__ = e22126;
var statearr_22127_22176 = state_22066;
(statearr_22127_22176[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22177 = state_22066;
state_22066 = G__22177;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20305__auto__ = function(state_22066){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20305__auto____1.call(this,state_22066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20305__auto____0;
cljs$core$async$mix_$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20305__auto____1;
return cljs$core$async$mix_$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20418__auto__ = (function (){var statearr_22128 = f__20417__auto__.call(null);
(statearr_22128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22129);

return statearr_22128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22129,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22178 = [];
var len__17910__auto___22181 = arguments.length;
var i__17911__auto___22182 = (0);
while(true){
if((i__17911__auto___22182 < len__17910__auto___22181)){
args22178.push((arguments[i__17911__auto___22182]));

var G__22183 = (i__17911__auto___22182 + (1));
i__17911__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var G__22180 = args22178.length;
switch (G__22180) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22178.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p);
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v);
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
var args22186 = [];
var len__17910__auto___22311 = arguments.length;
var i__17911__auto___22312 = (0);
while(true){
if((i__17911__auto___22312 < len__17910__auto___22311)){
args22186.push((arguments[i__17911__auto___22312]));

var G__22313 = (i__17911__auto___22312 + (1));
i__17911__auto___22312 = G__22313;
continue;
} else {
}
break;
}

var G__22188 = args22186.length;
switch (G__22188) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22186.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16852__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16852__auto__,mults){
return (function (p1__22185_SHARP_){
if(cljs.core.truth_(p1__22185_SHARP_.call(null,topic))){
return p1__22185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16852__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22189 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22190){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22190 = meta22190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22191,meta22190__$1){
var self__ = this;
var _22191__$1 = this;
return (new cljs.core.async.t_cljs$core$async22189(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22190__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22191){
var self__ = this;
var _22191__$1 = this;
return self__.meta22190;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22190","meta22190",-1246325070,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22189";

cljs.core.async.t_cljs$core$async22189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async22189");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22189 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22190){
return (new cljs.core.async.t_cljs$core$async22189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22190));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22189(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20416__auto___22315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22315,mults,ensure_mult,p){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22315,mults,ensure_mult,p){
return (function (state_22263){
var state_val_22264 = (state_22263[(1)]);
if((state_val_22264 === (7))){
var inst_22259 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22265_22316 = state_22263__$1;
(statearr_22265_22316[(2)] = inst_22259);

(statearr_22265_22316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (20))){
var state_22263__$1 = state_22263;
var statearr_22266_22317 = state_22263__$1;
(statearr_22266_22317[(2)] = null);

(statearr_22266_22317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (1))){
var state_22263__$1 = state_22263;
var statearr_22267_22318 = state_22263__$1;
(statearr_22267_22318[(2)] = null);

(statearr_22267_22318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (24))){
var inst_22242 = (state_22263[(7)]);
var inst_22251 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22242);
var state_22263__$1 = state_22263;
var statearr_22268_22319 = state_22263__$1;
(statearr_22268_22319[(2)] = inst_22251);

(statearr_22268_22319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (4))){
var inst_22194 = (state_22263[(8)]);
var inst_22194__$1 = (state_22263[(2)]);
var inst_22195 = (inst_22194__$1 == null);
var state_22263__$1 = (function (){var statearr_22269 = state_22263;
(statearr_22269[(8)] = inst_22194__$1);

return statearr_22269;
})();
if(cljs.core.truth_(inst_22195)){
var statearr_22270_22320 = state_22263__$1;
(statearr_22270_22320[(1)] = (5));

} else {
var statearr_22271_22321 = state_22263__$1;
(statearr_22271_22321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (15))){
var inst_22236 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22272_22322 = state_22263__$1;
(statearr_22272_22322[(2)] = inst_22236);

(statearr_22272_22322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (21))){
var inst_22256 = (state_22263[(2)]);
var state_22263__$1 = (function (){var statearr_22273 = state_22263;
(statearr_22273[(9)] = inst_22256);

return statearr_22273;
})();
var statearr_22274_22323 = state_22263__$1;
(statearr_22274_22323[(2)] = null);

(statearr_22274_22323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (13))){
var inst_22218 = (state_22263[(10)]);
var inst_22220 = cljs.core.chunked_seq_QMARK_.call(null,inst_22218);
var state_22263__$1 = state_22263;
if(inst_22220){
var statearr_22275_22324 = state_22263__$1;
(statearr_22275_22324[(1)] = (16));

} else {
var statearr_22276_22325 = state_22263__$1;
(statearr_22276_22325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (22))){
var inst_22248 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22248)){
var statearr_22277_22326 = state_22263__$1;
(statearr_22277_22326[(1)] = (23));

} else {
var statearr_22278_22327 = state_22263__$1;
(statearr_22278_22327[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (6))){
var inst_22194 = (state_22263[(8)]);
var inst_22244 = (state_22263[(11)]);
var inst_22242 = (state_22263[(7)]);
var inst_22242__$1 = topic_fn.call(null,inst_22194);
var inst_22243 = cljs.core.deref.call(null,mults);
var inst_22244__$1 = cljs.core.get.call(null,inst_22243,inst_22242__$1);
var state_22263__$1 = (function (){var statearr_22279 = state_22263;
(statearr_22279[(11)] = inst_22244__$1);

(statearr_22279[(7)] = inst_22242__$1);

return statearr_22279;
})();
if(cljs.core.truth_(inst_22244__$1)){
var statearr_22280_22328 = state_22263__$1;
(statearr_22280_22328[(1)] = (19));

} else {
var statearr_22281_22329 = state_22263__$1;
(statearr_22281_22329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (25))){
var inst_22253 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22282_22330 = state_22263__$1;
(statearr_22282_22330[(2)] = inst_22253);

(statearr_22282_22330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (17))){
var inst_22218 = (state_22263[(10)]);
var inst_22227 = cljs.core.first.call(null,inst_22218);
var inst_22228 = cljs.core.async.muxch_STAR_.call(null,inst_22227);
var inst_22229 = cljs.core.async.close_BANG_.call(null,inst_22228);
var inst_22230 = cljs.core.next.call(null,inst_22218);
var inst_22204 = inst_22230;
var inst_22205 = null;
var inst_22206 = (0);
var inst_22207 = (0);
var state_22263__$1 = (function (){var statearr_22283 = state_22263;
(statearr_22283[(12)] = inst_22206);

(statearr_22283[(13)] = inst_22204);

(statearr_22283[(14)] = inst_22207);

(statearr_22283[(15)] = inst_22205);

(statearr_22283[(16)] = inst_22229);

return statearr_22283;
})();
var statearr_22284_22331 = state_22263__$1;
(statearr_22284_22331[(2)] = null);

(statearr_22284_22331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (3))){
var inst_22261 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22263__$1,inst_22261);
} else {
if((state_val_22264 === (12))){
var inst_22238 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22285_22332 = state_22263__$1;
(statearr_22285_22332[(2)] = inst_22238);

(statearr_22285_22332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (2))){
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22263__$1,(4),ch);
} else {
if((state_val_22264 === (23))){
var state_22263__$1 = state_22263;
var statearr_22286_22333 = state_22263__$1;
(statearr_22286_22333[(2)] = null);

(statearr_22286_22333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (19))){
var inst_22194 = (state_22263[(8)]);
var inst_22244 = (state_22263[(11)]);
var inst_22246 = cljs.core.async.muxch_STAR_.call(null,inst_22244);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22263__$1,(22),inst_22246,inst_22194);
} else {
if((state_val_22264 === (11))){
var inst_22204 = (state_22263[(13)]);
var inst_22218 = (state_22263[(10)]);
var inst_22218__$1 = cljs.core.seq.call(null,inst_22204);
var state_22263__$1 = (function (){var statearr_22287 = state_22263;
(statearr_22287[(10)] = inst_22218__$1);

return statearr_22287;
})();
if(inst_22218__$1){
var statearr_22288_22334 = state_22263__$1;
(statearr_22288_22334[(1)] = (13));

} else {
var statearr_22289_22335 = state_22263__$1;
(statearr_22289_22335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (9))){
var inst_22240 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22290_22336 = state_22263__$1;
(statearr_22290_22336[(2)] = inst_22240);

(statearr_22290_22336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (5))){
var inst_22201 = cljs.core.deref.call(null,mults);
var inst_22202 = cljs.core.vals.call(null,inst_22201);
var inst_22203 = cljs.core.seq.call(null,inst_22202);
var inst_22204 = inst_22203;
var inst_22205 = null;
var inst_22206 = (0);
var inst_22207 = (0);
var state_22263__$1 = (function (){var statearr_22291 = state_22263;
(statearr_22291[(12)] = inst_22206);

(statearr_22291[(13)] = inst_22204);

(statearr_22291[(14)] = inst_22207);

(statearr_22291[(15)] = inst_22205);

return statearr_22291;
})();
var statearr_22292_22337 = state_22263__$1;
(statearr_22292_22337[(2)] = null);

(statearr_22292_22337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (14))){
var state_22263__$1 = state_22263;
var statearr_22296_22338 = state_22263__$1;
(statearr_22296_22338[(2)] = null);

(statearr_22296_22338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (16))){
var inst_22218 = (state_22263[(10)]);
var inst_22222 = cljs.core.chunk_first.call(null,inst_22218);
var inst_22223 = cljs.core.chunk_rest.call(null,inst_22218);
var inst_22224 = cljs.core.count.call(null,inst_22222);
var inst_22204 = inst_22223;
var inst_22205 = inst_22222;
var inst_22206 = inst_22224;
var inst_22207 = (0);
var state_22263__$1 = (function (){var statearr_22297 = state_22263;
(statearr_22297[(12)] = inst_22206);

(statearr_22297[(13)] = inst_22204);

(statearr_22297[(14)] = inst_22207);

(statearr_22297[(15)] = inst_22205);

return statearr_22297;
})();
var statearr_22298_22339 = state_22263__$1;
(statearr_22298_22339[(2)] = null);

(statearr_22298_22339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (10))){
var inst_22206 = (state_22263[(12)]);
var inst_22204 = (state_22263[(13)]);
var inst_22207 = (state_22263[(14)]);
var inst_22205 = (state_22263[(15)]);
var inst_22212 = cljs.core._nth.call(null,inst_22205,inst_22207);
var inst_22213 = cljs.core.async.muxch_STAR_.call(null,inst_22212);
var inst_22214 = cljs.core.async.close_BANG_.call(null,inst_22213);
var inst_22215 = (inst_22207 + (1));
var tmp22293 = inst_22206;
var tmp22294 = inst_22204;
var tmp22295 = inst_22205;
var inst_22204__$1 = tmp22294;
var inst_22205__$1 = tmp22295;
var inst_22206__$1 = tmp22293;
var inst_22207__$1 = inst_22215;
var state_22263__$1 = (function (){var statearr_22299 = state_22263;
(statearr_22299[(12)] = inst_22206__$1);

(statearr_22299[(13)] = inst_22204__$1);

(statearr_22299[(14)] = inst_22207__$1);

(statearr_22299[(17)] = inst_22214);

(statearr_22299[(15)] = inst_22205__$1);

return statearr_22299;
})();
var statearr_22300_22340 = state_22263__$1;
(statearr_22300_22340[(2)] = null);

(statearr_22300_22340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (18))){
var inst_22233 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22301_22341 = state_22263__$1;
(statearr_22301_22341[(2)] = inst_22233);

(statearr_22301_22341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (8))){
var inst_22206 = (state_22263[(12)]);
var inst_22207 = (state_22263[(14)]);
var inst_22209 = (inst_22207 < inst_22206);
var inst_22210 = inst_22209;
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22210)){
var statearr_22302_22342 = state_22263__$1;
(statearr_22302_22342[(1)] = (10));

} else {
var statearr_22303_22343 = state_22263__$1;
(statearr_22303_22343[(1)] = (11));

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
});})(c__20416__auto___22315,mults,ensure_mult,p))
;
return ((function (switch__20304__auto__,c__20416__auto___22315,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22307[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22307[(1)] = (1));

return statearr_22307;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22263){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object)){
var ex__20308__auto__ = e22308;
var statearr_22309_22344 = state_22263;
(statearr_22309_22344[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22345 = state_22263;
state_22263 = G__22345;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22315,mults,ensure_mult,p))
})();
var state__20418__auto__ = (function (){var statearr_22310 = f__20417__auto__.call(null);
(statearr_22310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22315);

return statearr_22310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22315,mults,ensure_mult,p))
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
var args22346 = [];
var len__17910__auto___22349 = arguments.length;
var i__17911__auto___22350 = (0);
while(true){
if((i__17911__auto___22350 < len__17910__auto___22349)){
args22346.push((arguments[i__17911__auto___22350]));

var G__22351 = (i__17911__auto___22350 + (1));
i__17911__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var G__22348 = args22346.length;
switch (G__22348) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22346.length)].join('')));

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
var args22353 = [];
var len__17910__auto___22356 = arguments.length;
var i__17911__auto___22357 = (0);
while(true){
if((i__17911__auto___22357 < len__17910__auto___22356)){
args22353.push((arguments[i__17911__auto___22357]));

var G__22358 = (i__17911__auto___22357 + (1));
i__17911__auto___22357 = G__22358;
continue;
} else {
}
break;
}

var G__22355 = args22353.length;
switch (G__22355) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22353.length)].join('')));

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
var args22360 = [];
var len__17910__auto___22431 = arguments.length;
var i__17911__auto___22432 = (0);
while(true){
if((i__17911__auto___22432 < len__17910__auto___22431)){
args22360.push((arguments[i__17911__auto___22432]));

var G__22433 = (i__17911__auto___22432 + (1));
i__17911__auto___22432 = G__22433;
continue;
} else {
}
break;
}

var G__22362 = args22360.length;
switch (G__22362) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22360.length)].join('')));

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
var c__20416__auto___22435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22401){
var state_val_22402 = (state_22401[(1)]);
if((state_val_22402 === (7))){
var state_22401__$1 = state_22401;
var statearr_22403_22436 = state_22401__$1;
(statearr_22403_22436[(2)] = null);

(statearr_22403_22436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (1))){
var state_22401__$1 = state_22401;
var statearr_22404_22437 = state_22401__$1;
(statearr_22404_22437[(2)] = null);

(statearr_22404_22437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (4))){
var inst_22365 = (state_22401[(7)]);
var inst_22367 = (inst_22365 < cnt);
var state_22401__$1 = state_22401;
if(cljs.core.truth_(inst_22367)){
var statearr_22405_22438 = state_22401__$1;
(statearr_22405_22438[(1)] = (6));

} else {
var statearr_22406_22439 = state_22401__$1;
(statearr_22406_22439[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (15))){
var inst_22397 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22407_22440 = state_22401__$1;
(statearr_22407_22440[(2)] = inst_22397);

(statearr_22407_22440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (13))){
var inst_22390 = cljs.core.async.close_BANG_.call(null,out);
var state_22401__$1 = state_22401;
var statearr_22408_22441 = state_22401__$1;
(statearr_22408_22441[(2)] = inst_22390);

(statearr_22408_22441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (6))){
var state_22401__$1 = state_22401;
var statearr_22409_22442 = state_22401__$1;
(statearr_22409_22442[(2)] = null);

(statearr_22409_22442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (3))){
var inst_22399 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22401__$1,inst_22399);
} else {
if((state_val_22402 === (12))){
var inst_22387 = (state_22401[(8)]);
var inst_22387__$1 = (state_22401[(2)]);
var inst_22388 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22387__$1);
var state_22401__$1 = (function (){var statearr_22410 = state_22401;
(statearr_22410[(8)] = inst_22387__$1);

return statearr_22410;
})();
if(cljs.core.truth_(inst_22388)){
var statearr_22411_22443 = state_22401__$1;
(statearr_22411_22443[(1)] = (13));

} else {
var statearr_22412_22444 = state_22401__$1;
(statearr_22412_22444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (2))){
var inst_22364 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22365 = (0);
var state_22401__$1 = (function (){var statearr_22413 = state_22401;
(statearr_22413[(7)] = inst_22365);

(statearr_22413[(9)] = inst_22364);

return statearr_22413;
})();
var statearr_22414_22445 = state_22401__$1;
(statearr_22414_22445[(2)] = null);

(statearr_22414_22445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (11))){
var inst_22365 = (state_22401[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22401,(10),Object,null,(9));
var inst_22374 = chs__$1.call(null,inst_22365);
var inst_22375 = done.call(null,inst_22365);
var inst_22376 = cljs.core.async.take_BANG_.call(null,inst_22374,inst_22375);
var state_22401__$1 = state_22401;
var statearr_22415_22446 = state_22401__$1;
(statearr_22415_22446[(2)] = inst_22376);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (9))){
var inst_22365 = (state_22401[(7)]);
var inst_22378 = (state_22401[(2)]);
var inst_22379 = (inst_22365 + (1));
var inst_22365__$1 = inst_22379;
var state_22401__$1 = (function (){var statearr_22416 = state_22401;
(statearr_22416[(7)] = inst_22365__$1);

(statearr_22416[(10)] = inst_22378);

return statearr_22416;
})();
var statearr_22417_22447 = state_22401__$1;
(statearr_22417_22447[(2)] = null);

(statearr_22417_22447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (5))){
var inst_22385 = (state_22401[(2)]);
var state_22401__$1 = (function (){var statearr_22418 = state_22401;
(statearr_22418[(11)] = inst_22385);

return statearr_22418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22401__$1,(12),dchan);
} else {
if((state_val_22402 === (14))){
var inst_22387 = (state_22401[(8)]);
var inst_22392 = cljs.core.apply.call(null,f,inst_22387);
var state_22401__$1 = state_22401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22401__$1,(16),out,inst_22392);
} else {
if((state_val_22402 === (16))){
var inst_22394 = (state_22401[(2)]);
var state_22401__$1 = (function (){var statearr_22419 = state_22401;
(statearr_22419[(12)] = inst_22394);

return statearr_22419;
})();
var statearr_22420_22448 = state_22401__$1;
(statearr_22420_22448[(2)] = null);

(statearr_22420_22448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (10))){
var inst_22369 = (state_22401[(2)]);
var inst_22370 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22401__$1 = (function (){var statearr_22421 = state_22401;
(statearr_22421[(13)] = inst_22369);

return statearr_22421;
})();
var statearr_22422_22449 = state_22401__$1;
(statearr_22422_22449[(2)] = inst_22370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (8))){
var inst_22383 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22423_22450 = state_22401__$1;
(statearr_22423_22450[(2)] = inst_22383);

(statearr_22423_22450[(1)] = (5));


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
});})(c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20304__auto__,c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22427[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22427[(1)] = (1));

return statearr_22427;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22401){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22428){if((e22428 instanceof Object)){
var ex__20308__auto__ = e22428;
var statearr_22429_22451 = state_22401;
(statearr_22429_22451[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22452 = state_22401;
state_22401 = G__22452;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20418__auto__ = (function (){var statearr_22430 = f__20417__auto__.call(null);
(statearr_22430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22435);

return statearr_22430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22435,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22454 = [];
var len__17910__auto___22510 = arguments.length;
var i__17911__auto___22511 = (0);
while(true){
if((i__17911__auto___22511 < len__17910__auto___22510)){
args22454.push((arguments[i__17911__auto___22511]));

var G__22512 = (i__17911__auto___22511 + (1));
i__17911__auto___22511 = G__22512;
continue;
} else {
}
break;
}

var G__22456 = args22454.length;
switch (G__22456) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22454.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___22514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22514,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22514,out){
return (function (state_22486){
var state_val_22487 = (state_22486[(1)]);
if((state_val_22487 === (7))){
var inst_22465 = (state_22486[(7)]);
var inst_22466 = (state_22486[(8)]);
var inst_22465__$1 = (state_22486[(2)]);
var inst_22466__$1 = cljs.core.nth.call(null,inst_22465__$1,(0),null);
var inst_22467 = cljs.core.nth.call(null,inst_22465__$1,(1),null);
var inst_22468 = (inst_22466__$1 == null);
var state_22486__$1 = (function (){var statearr_22488 = state_22486;
(statearr_22488[(7)] = inst_22465__$1);

(statearr_22488[(9)] = inst_22467);

(statearr_22488[(8)] = inst_22466__$1);

return statearr_22488;
})();
if(cljs.core.truth_(inst_22468)){
var statearr_22489_22515 = state_22486__$1;
(statearr_22489_22515[(1)] = (8));

} else {
var statearr_22490_22516 = state_22486__$1;
(statearr_22490_22516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (1))){
var inst_22457 = cljs.core.vec.call(null,chs);
var inst_22458 = inst_22457;
var state_22486__$1 = (function (){var statearr_22491 = state_22486;
(statearr_22491[(10)] = inst_22458);

return statearr_22491;
})();
var statearr_22492_22517 = state_22486__$1;
(statearr_22492_22517[(2)] = null);

(statearr_22492_22517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (4))){
var inst_22458 = (state_22486[(10)]);
var state_22486__$1 = state_22486;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22486__$1,(7),inst_22458);
} else {
if((state_val_22487 === (6))){
var inst_22482 = (state_22486[(2)]);
var state_22486__$1 = state_22486;
var statearr_22493_22518 = state_22486__$1;
(statearr_22493_22518[(2)] = inst_22482);

(statearr_22493_22518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (3))){
var inst_22484 = (state_22486[(2)]);
var state_22486__$1 = state_22486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22486__$1,inst_22484);
} else {
if((state_val_22487 === (2))){
var inst_22458 = (state_22486[(10)]);
var inst_22460 = cljs.core.count.call(null,inst_22458);
var inst_22461 = (inst_22460 > (0));
var state_22486__$1 = state_22486;
if(cljs.core.truth_(inst_22461)){
var statearr_22495_22519 = state_22486__$1;
(statearr_22495_22519[(1)] = (4));

} else {
var statearr_22496_22520 = state_22486__$1;
(statearr_22496_22520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (11))){
var inst_22458 = (state_22486[(10)]);
var inst_22475 = (state_22486[(2)]);
var tmp22494 = inst_22458;
var inst_22458__$1 = tmp22494;
var state_22486__$1 = (function (){var statearr_22497 = state_22486;
(statearr_22497[(11)] = inst_22475);

(statearr_22497[(10)] = inst_22458__$1);

return statearr_22497;
})();
var statearr_22498_22521 = state_22486__$1;
(statearr_22498_22521[(2)] = null);

(statearr_22498_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (9))){
var inst_22466 = (state_22486[(8)]);
var state_22486__$1 = state_22486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22486__$1,(11),out,inst_22466);
} else {
if((state_val_22487 === (5))){
var inst_22480 = cljs.core.async.close_BANG_.call(null,out);
var state_22486__$1 = state_22486;
var statearr_22499_22522 = state_22486__$1;
(statearr_22499_22522[(2)] = inst_22480);

(statearr_22499_22522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (10))){
var inst_22478 = (state_22486[(2)]);
var state_22486__$1 = state_22486;
var statearr_22500_22523 = state_22486__$1;
(statearr_22500_22523[(2)] = inst_22478);

(statearr_22500_22523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22487 === (8))){
var inst_22465 = (state_22486[(7)]);
var inst_22467 = (state_22486[(9)]);
var inst_22466 = (state_22486[(8)]);
var inst_22458 = (state_22486[(10)]);
var inst_22470 = (function (){var cs = inst_22458;
var vec__22463 = inst_22465;
var v = inst_22466;
var c = inst_22467;
return ((function (cs,vec__22463,v,c,inst_22465,inst_22467,inst_22466,inst_22458,state_val_22487,c__20416__auto___22514,out){
return (function (p1__22453_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22453_SHARP_);
});
;})(cs,vec__22463,v,c,inst_22465,inst_22467,inst_22466,inst_22458,state_val_22487,c__20416__auto___22514,out))
})();
var inst_22471 = cljs.core.filterv.call(null,inst_22470,inst_22458);
var inst_22458__$1 = inst_22471;
var state_22486__$1 = (function (){var statearr_22501 = state_22486;
(statearr_22501[(10)] = inst_22458__$1);

return statearr_22501;
})();
var statearr_22502_22524 = state_22486__$1;
(statearr_22502_22524[(2)] = null);

(statearr_22502_22524[(1)] = (2));


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
});})(c__20416__auto___22514,out))
;
return ((function (switch__20304__auto__,c__20416__auto___22514,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22506[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22506[(1)] = (1));

return statearr_22506;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22486){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22507){if((e22507 instanceof Object)){
var ex__20308__auto__ = e22507;
var statearr_22508_22525 = state_22486;
(statearr_22508_22525[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22526 = state_22486;
state_22486 = G__22526;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22514,out))
})();
var state__20418__auto__ = (function (){var statearr_22509 = f__20417__auto__.call(null);
(statearr_22509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22514);

return statearr_22509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22514,out))
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
var args22527 = [];
var len__17910__auto___22576 = arguments.length;
var i__17911__auto___22577 = (0);
while(true){
if((i__17911__auto___22577 < len__17910__auto___22576)){
args22527.push((arguments[i__17911__auto___22577]));

var G__22578 = (i__17911__auto___22577 + (1));
i__17911__auto___22577 = G__22578;
continue;
} else {
}
break;
}

var G__22529 = args22527.length;
switch (G__22529) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22527.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___22580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22580,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22580,out){
return (function (state_22553){
var state_val_22554 = (state_22553[(1)]);
if((state_val_22554 === (7))){
var inst_22535 = (state_22553[(7)]);
var inst_22535__$1 = (state_22553[(2)]);
var inst_22536 = (inst_22535__$1 == null);
var inst_22537 = cljs.core.not.call(null,inst_22536);
var state_22553__$1 = (function (){var statearr_22555 = state_22553;
(statearr_22555[(7)] = inst_22535__$1);

return statearr_22555;
})();
if(inst_22537){
var statearr_22556_22581 = state_22553__$1;
(statearr_22556_22581[(1)] = (8));

} else {
var statearr_22557_22582 = state_22553__$1;
(statearr_22557_22582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (1))){
var inst_22530 = (0);
var state_22553__$1 = (function (){var statearr_22558 = state_22553;
(statearr_22558[(8)] = inst_22530);

return statearr_22558;
})();
var statearr_22559_22583 = state_22553__$1;
(statearr_22559_22583[(2)] = null);

(statearr_22559_22583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (4))){
var state_22553__$1 = state_22553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22553__$1,(7),ch);
} else {
if((state_val_22554 === (6))){
var inst_22548 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
var statearr_22560_22584 = state_22553__$1;
(statearr_22560_22584[(2)] = inst_22548);

(statearr_22560_22584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (3))){
var inst_22550 = (state_22553[(2)]);
var inst_22551 = cljs.core.async.close_BANG_.call(null,out);
var state_22553__$1 = (function (){var statearr_22561 = state_22553;
(statearr_22561[(9)] = inst_22550);

return statearr_22561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22553__$1,inst_22551);
} else {
if((state_val_22554 === (2))){
var inst_22530 = (state_22553[(8)]);
var inst_22532 = (inst_22530 < n);
var state_22553__$1 = state_22553;
if(cljs.core.truth_(inst_22532)){
var statearr_22562_22585 = state_22553__$1;
(statearr_22562_22585[(1)] = (4));

} else {
var statearr_22563_22586 = state_22553__$1;
(statearr_22563_22586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (11))){
var inst_22530 = (state_22553[(8)]);
var inst_22540 = (state_22553[(2)]);
var inst_22541 = (inst_22530 + (1));
var inst_22530__$1 = inst_22541;
var state_22553__$1 = (function (){var statearr_22564 = state_22553;
(statearr_22564[(10)] = inst_22540);

(statearr_22564[(8)] = inst_22530__$1);

return statearr_22564;
})();
var statearr_22565_22587 = state_22553__$1;
(statearr_22565_22587[(2)] = null);

(statearr_22565_22587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (9))){
var state_22553__$1 = state_22553;
var statearr_22566_22588 = state_22553__$1;
(statearr_22566_22588[(2)] = null);

(statearr_22566_22588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (5))){
var state_22553__$1 = state_22553;
var statearr_22567_22589 = state_22553__$1;
(statearr_22567_22589[(2)] = null);

(statearr_22567_22589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (10))){
var inst_22545 = (state_22553[(2)]);
var state_22553__$1 = state_22553;
var statearr_22568_22590 = state_22553__$1;
(statearr_22568_22590[(2)] = inst_22545);

(statearr_22568_22590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22554 === (8))){
var inst_22535 = (state_22553[(7)]);
var state_22553__$1 = state_22553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22553__$1,(11),out,inst_22535);
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
});})(c__20416__auto___22580,out))
;
return ((function (switch__20304__auto__,c__20416__auto___22580,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22572[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22572[(1)] = (1));

return statearr_22572;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22553){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22573){if((e22573 instanceof Object)){
var ex__20308__auto__ = e22573;
var statearr_22574_22591 = state_22553;
(statearr_22574_22591[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22592 = state_22553;
state_22553 = G__22592;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22580,out))
})();
var state__20418__auto__ = (function (){var statearr_22575 = f__20417__auto__.call(null);
(statearr_22575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22580);

return statearr_22575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22580,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22600 = (function (map_LT_,f,ch,meta22601){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22601 = meta22601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22602,meta22601__$1){
var self__ = this;
var _22602__$1 = this;
return (new cljs.core.async.t_cljs$core$async22600(self__.map_LT_,self__.f,self__.ch,meta22601__$1));
});

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22602){
var self__ = this;
var _22602__$1 = this;
return self__.meta22601;
});

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22603 = (function (map_LT_,f,ch,meta22601,_,fn1,meta22604){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22601 = meta22601;
this._ = _;
this.fn1 = fn1;
this.meta22604 = meta22604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22605,meta22604__$1){
var self__ = this;
var _22605__$1 = this;
return (new cljs.core.async.t_cljs$core$async22603(self__.map_LT_,self__.f,self__.ch,self__.meta22601,self__._,self__.fn1,meta22604__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22605){
var self__ = this;
var _22605__$1 = this;
return self__.meta22604;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22593_SHARP_){
return f1.call(null,(((p1__22593_SHARP_ == null))?null:self__.f.call(null,p1__22593_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22601","meta22601",-1484654621,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22600","cljs.core.async/t_cljs$core$async22600",390853560,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22604","meta22604",1870020822,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22603";

cljs.core.async.t_cljs$core$async22603.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async22603");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22603 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22603(map_LT___$1,f__$1,ch__$1,meta22601__$1,___$2,fn1__$1,meta22604){
return (new cljs.core.async.t_cljs$core$async22603(map_LT___$1,f__$1,ch__$1,meta22601__$1,___$2,fn1__$1,meta22604));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22603(self__.map_LT_,self__.f,self__.ch,self__.meta22601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16840__auto__ = ret;
if(cljs.core.truth_(and__16840__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16840__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22601","meta22601",-1484654621,null)], null);
});

cljs.core.async.t_cljs$core$async22600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22600";

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async22600");
});

cljs.core.async.__GT_t_cljs$core$async22600 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22600(map_LT___$1,f__$1,ch__$1,meta22601){
return (new cljs.core.async.t_cljs$core$async22600(map_LT___$1,f__$1,ch__$1,meta22601));
});

}

return (new cljs.core.async.t_cljs$core$async22600(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22609 = (function (map_GT_,f,ch,meta22610){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22610 = meta22610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22611,meta22610__$1){
var self__ = this;
var _22611__$1 = this;
return (new cljs.core.async.t_cljs$core$async22609(self__.map_GT_,self__.f,self__.ch,meta22610__$1));
});

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22611){
var self__ = this;
var _22611__$1 = this;
return self__.meta22610;
});

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22610","meta22610",1098567814,null)], null);
});

cljs.core.async.t_cljs$core$async22609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22609";

cljs.core.async.t_cljs$core$async22609.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async22609");
});

cljs.core.async.__GT_t_cljs$core$async22609 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22609(map_GT___$1,f__$1,ch__$1,meta22610){
return (new cljs.core.async.t_cljs$core$async22609(map_GT___$1,f__$1,ch__$1,meta22610));
});

}

return (new cljs.core.async.t_cljs$core$async22609(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22615 = (function (filter_GT_,p,ch,meta22616){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22616 = meta22616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22617,meta22616__$1){
var self__ = this;
var _22617__$1 = this;
return (new cljs.core.async.t_cljs$core$async22615(self__.filter_GT_,self__.p,self__.ch,meta22616__$1));
});

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22617){
var self__ = this;
var _22617__$1 = this;
return self__.meta22616;
});

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22616","meta22616",1969524175,null)], null);
});

cljs.core.async.t_cljs$core$async22615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22615";

cljs.core.async.t_cljs$core$async22615.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async22615");
});

cljs.core.async.__GT_t_cljs$core$async22615 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22615(filter_GT___$1,p__$1,ch__$1,meta22616){
return (new cljs.core.async.t_cljs$core$async22615(filter_GT___$1,p__$1,ch__$1,meta22616));
});

}

return (new cljs.core.async.t_cljs$core$async22615(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22618 = [];
var len__17910__auto___22662 = arguments.length;
var i__17911__auto___22663 = (0);
while(true){
if((i__17911__auto___22663 < len__17910__auto___22662)){
args22618.push((arguments[i__17911__auto___22663]));

var G__22664 = (i__17911__auto___22663 + (1));
i__17911__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var G__22620 = args22618.length;
switch (G__22620) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22618.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___22666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22666,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22666,out){
return (function (state_22641){
var state_val_22642 = (state_22641[(1)]);
if((state_val_22642 === (7))){
var inst_22637 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
var statearr_22643_22667 = state_22641__$1;
(statearr_22643_22667[(2)] = inst_22637);

(statearr_22643_22667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (1))){
var state_22641__$1 = state_22641;
var statearr_22644_22668 = state_22641__$1;
(statearr_22644_22668[(2)] = null);

(statearr_22644_22668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (4))){
var inst_22623 = (state_22641[(7)]);
var inst_22623__$1 = (state_22641[(2)]);
var inst_22624 = (inst_22623__$1 == null);
var state_22641__$1 = (function (){var statearr_22645 = state_22641;
(statearr_22645[(7)] = inst_22623__$1);

return statearr_22645;
})();
if(cljs.core.truth_(inst_22624)){
var statearr_22646_22669 = state_22641__$1;
(statearr_22646_22669[(1)] = (5));

} else {
var statearr_22647_22670 = state_22641__$1;
(statearr_22647_22670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (6))){
var inst_22623 = (state_22641[(7)]);
var inst_22628 = p.call(null,inst_22623);
var state_22641__$1 = state_22641;
if(cljs.core.truth_(inst_22628)){
var statearr_22648_22671 = state_22641__$1;
(statearr_22648_22671[(1)] = (8));

} else {
var statearr_22649_22672 = state_22641__$1;
(statearr_22649_22672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (3))){
var inst_22639 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22641__$1,inst_22639);
} else {
if((state_val_22642 === (2))){
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22641__$1,(4),ch);
} else {
if((state_val_22642 === (11))){
var inst_22631 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
var statearr_22650_22673 = state_22641__$1;
(statearr_22650_22673[(2)] = inst_22631);

(statearr_22650_22673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (9))){
var state_22641__$1 = state_22641;
var statearr_22651_22674 = state_22641__$1;
(statearr_22651_22674[(2)] = null);

(statearr_22651_22674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (5))){
var inst_22626 = cljs.core.async.close_BANG_.call(null,out);
var state_22641__$1 = state_22641;
var statearr_22652_22675 = state_22641__$1;
(statearr_22652_22675[(2)] = inst_22626);

(statearr_22652_22675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (10))){
var inst_22634 = (state_22641[(2)]);
var state_22641__$1 = (function (){var statearr_22653 = state_22641;
(statearr_22653[(8)] = inst_22634);

return statearr_22653;
})();
var statearr_22654_22676 = state_22641__$1;
(statearr_22654_22676[(2)] = null);

(statearr_22654_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (8))){
var inst_22623 = (state_22641[(7)]);
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22641__$1,(11),out,inst_22623);
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
});})(c__20416__auto___22666,out))
;
return ((function (switch__20304__auto__,c__20416__auto___22666,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22658 = [null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22641){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object)){
var ex__20308__auto__ = e22659;
var statearr_22660_22677 = state_22641;
(statearr_22660_22677[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22678 = state_22641;
state_22641 = G__22678;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22666,out))
})();
var state__20418__auto__ = (function (){var statearr_22661 = f__20417__auto__.call(null);
(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22666);

return statearr_22661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22666,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22679 = [];
var len__17910__auto___22682 = arguments.length;
var i__17911__auto___22683 = (0);
while(true){
if((i__17911__auto___22683 < len__17910__auto___22682)){
args22679.push((arguments[i__17911__auto___22683]));

var G__22684 = (i__17911__auto___22683 + (1));
i__17911__auto___22683 = G__22684;
continue;
} else {
}
break;
}

var G__22681 = args22679.length;
switch (G__22681) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22679.length)].join('')));

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
var c__20416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto__){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto__){
return (function (state_22851){
var state_val_22852 = (state_22851[(1)]);
if((state_val_22852 === (7))){
var inst_22847 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22853_22894 = state_22851__$1;
(statearr_22853_22894[(2)] = inst_22847);

(statearr_22853_22894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (20))){
var inst_22817 = (state_22851[(7)]);
var inst_22828 = (state_22851[(2)]);
var inst_22829 = cljs.core.next.call(null,inst_22817);
var inst_22803 = inst_22829;
var inst_22804 = null;
var inst_22805 = (0);
var inst_22806 = (0);
var state_22851__$1 = (function (){var statearr_22854 = state_22851;
(statearr_22854[(8)] = inst_22804);

(statearr_22854[(9)] = inst_22805);

(statearr_22854[(10)] = inst_22828);

(statearr_22854[(11)] = inst_22806);

(statearr_22854[(12)] = inst_22803);

return statearr_22854;
})();
var statearr_22855_22895 = state_22851__$1;
(statearr_22855_22895[(2)] = null);

(statearr_22855_22895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (1))){
var state_22851__$1 = state_22851;
var statearr_22856_22896 = state_22851__$1;
(statearr_22856_22896[(2)] = null);

(statearr_22856_22896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (4))){
var inst_22792 = (state_22851[(13)]);
var inst_22792__$1 = (state_22851[(2)]);
var inst_22793 = (inst_22792__$1 == null);
var state_22851__$1 = (function (){var statearr_22857 = state_22851;
(statearr_22857[(13)] = inst_22792__$1);

return statearr_22857;
})();
if(cljs.core.truth_(inst_22793)){
var statearr_22858_22897 = state_22851__$1;
(statearr_22858_22897[(1)] = (5));

} else {
var statearr_22859_22898 = state_22851__$1;
(statearr_22859_22898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (15))){
var state_22851__$1 = state_22851;
var statearr_22863_22899 = state_22851__$1;
(statearr_22863_22899[(2)] = null);

(statearr_22863_22899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (21))){
var state_22851__$1 = state_22851;
var statearr_22864_22900 = state_22851__$1;
(statearr_22864_22900[(2)] = null);

(statearr_22864_22900[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (13))){
var inst_22804 = (state_22851[(8)]);
var inst_22805 = (state_22851[(9)]);
var inst_22806 = (state_22851[(11)]);
var inst_22803 = (state_22851[(12)]);
var inst_22813 = (state_22851[(2)]);
var inst_22814 = (inst_22806 + (1));
var tmp22860 = inst_22804;
var tmp22861 = inst_22805;
var tmp22862 = inst_22803;
var inst_22803__$1 = tmp22862;
var inst_22804__$1 = tmp22860;
var inst_22805__$1 = tmp22861;
var inst_22806__$1 = inst_22814;
var state_22851__$1 = (function (){var statearr_22865 = state_22851;
(statearr_22865[(8)] = inst_22804__$1);

(statearr_22865[(9)] = inst_22805__$1);

(statearr_22865[(14)] = inst_22813);

(statearr_22865[(11)] = inst_22806__$1);

(statearr_22865[(12)] = inst_22803__$1);

return statearr_22865;
})();
var statearr_22866_22901 = state_22851__$1;
(statearr_22866_22901[(2)] = null);

(statearr_22866_22901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (22))){
var state_22851__$1 = state_22851;
var statearr_22867_22902 = state_22851__$1;
(statearr_22867_22902[(2)] = null);

(statearr_22867_22902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (6))){
var inst_22792 = (state_22851[(13)]);
var inst_22801 = f.call(null,inst_22792);
var inst_22802 = cljs.core.seq.call(null,inst_22801);
var inst_22803 = inst_22802;
var inst_22804 = null;
var inst_22805 = (0);
var inst_22806 = (0);
var state_22851__$1 = (function (){var statearr_22868 = state_22851;
(statearr_22868[(8)] = inst_22804);

(statearr_22868[(9)] = inst_22805);

(statearr_22868[(11)] = inst_22806);

(statearr_22868[(12)] = inst_22803);

return statearr_22868;
})();
var statearr_22869_22903 = state_22851__$1;
(statearr_22869_22903[(2)] = null);

(statearr_22869_22903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (17))){
var inst_22817 = (state_22851[(7)]);
var inst_22821 = cljs.core.chunk_first.call(null,inst_22817);
var inst_22822 = cljs.core.chunk_rest.call(null,inst_22817);
var inst_22823 = cljs.core.count.call(null,inst_22821);
var inst_22803 = inst_22822;
var inst_22804 = inst_22821;
var inst_22805 = inst_22823;
var inst_22806 = (0);
var state_22851__$1 = (function (){var statearr_22870 = state_22851;
(statearr_22870[(8)] = inst_22804);

(statearr_22870[(9)] = inst_22805);

(statearr_22870[(11)] = inst_22806);

(statearr_22870[(12)] = inst_22803);

return statearr_22870;
})();
var statearr_22871_22904 = state_22851__$1;
(statearr_22871_22904[(2)] = null);

(statearr_22871_22904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (3))){
var inst_22849 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22851__$1,inst_22849);
} else {
if((state_val_22852 === (12))){
var inst_22837 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22872_22905 = state_22851__$1;
(statearr_22872_22905[(2)] = inst_22837);

(statearr_22872_22905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (2))){
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22851__$1,(4),in$);
} else {
if((state_val_22852 === (23))){
var inst_22845 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22873_22906 = state_22851__$1;
(statearr_22873_22906[(2)] = inst_22845);

(statearr_22873_22906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (19))){
var inst_22832 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22874_22907 = state_22851__$1;
(statearr_22874_22907[(2)] = inst_22832);

(statearr_22874_22907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (11))){
var inst_22817 = (state_22851[(7)]);
var inst_22803 = (state_22851[(12)]);
var inst_22817__$1 = cljs.core.seq.call(null,inst_22803);
var state_22851__$1 = (function (){var statearr_22875 = state_22851;
(statearr_22875[(7)] = inst_22817__$1);

return statearr_22875;
})();
if(inst_22817__$1){
var statearr_22876_22908 = state_22851__$1;
(statearr_22876_22908[(1)] = (14));

} else {
var statearr_22877_22909 = state_22851__$1;
(statearr_22877_22909[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (9))){
var inst_22839 = (state_22851[(2)]);
var inst_22840 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22851__$1 = (function (){var statearr_22878 = state_22851;
(statearr_22878[(15)] = inst_22839);

return statearr_22878;
})();
if(cljs.core.truth_(inst_22840)){
var statearr_22879_22910 = state_22851__$1;
(statearr_22879_22910[(1)] = (21));

} else {
var statearr_22880_22911 = state_22851__$1;
(statearr_22880_22911[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (5))){
var inst_22795 = cljs.core.async.close_BANG_.call(null,out);
var state_22851__$1 = state_22851;
var statearr_22881_22912 = state_22851__$1;
(statearr_22881_22912[(2)] = inst_22795);

(statearr_22881_22912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (14))){
var inst_22817 = (state_22851[(7)]);
var inst_22819 = cljs.core.chunked_seq_QMARK_.call(null,inst_22817);
var state_22851__$1 = state_22851;
if(inst_22819){
var statearr_22882_22913 = state_22851__$1;
(statearr_22882_22913[(1)] = (17));

} else {
var statearr_22883_22914 = state_22851__$1;
(statearr_22883_22914[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (16))){
var inst_22835 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22884_22915 = state_22851__$1;
(statearr_22884_22915[(2)] = inst_22835);

(statearr_22884_22915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (10))){
var inst_22804 = (state_22851[(8)]);
var inst_22806 = (state_22851[(11)]);
var inst_22811 = cljs.core._nth.call(null,inst_22804,inst_22806);
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22851__$1,(13),out,inst_22811);
} else {
if((state_val_22852 === (18))){
var inst_22817 = (state_22851[(7)]);
var inst_22826 = cljs.core.first.call(null,inst_22817);
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22851__$1,(20),out,inst_22826);
} else {
if((state_val_22852 === (8))){
var inst_22805 = (state_22851[(9)]);
var inst_22806 = (state_22851[(11)]);
var inst_22808 = (inst_22806 < inst_22805);
var inst_22809 = inst_22808;
var state_22851__$1 = state_22851;
if(cljs.core.truth_(inst_22809)){
var statearr_22885_22916 = state_22851__$1;
(statearr_22885_22916[(1)] = (10));

} else {
var statearr_22886_22917 = state_22851__$1;
(statearr_22886_22917[(1)] = (11));

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
});})(c__20416__auto__))
;
return ((function (switch__20304__auto__,c__20416__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____0 = (function (){
var statearr_22890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22890[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__);

(statearr_22890[(1)] = (1));

return statearr_22890;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____1 = (function (state_22851){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22891){if((e22891 instanceof Object)){
var ex__20308__auto__ = e22891;
var statearr_22892_22918 = state_22851;
(statearr_22892_22918[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22919 = state_22851;
state_22851 = G__22919;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__ = function(state_22851){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____1.call(this,state_22851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20305__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto__))
})();
var state__20418__auto__ = (function (){var statearr_22893 = f__20417__auto__.call(null);
(statearr_22893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto__);

return statearr_22893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto__))
);

return c__20416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22920 = [];
var len__17910__auto___22923 = arguments.length;
var i__17911__auto___22924 = (0);
while(true){
if((i__17911__auto___22924 < len__17910__auto___22923)){
args22920.push((arguments[i__17911__auto___22924]));

var G__22925 = (i__17911__auto___22924 + (1));
i__17911__auto___22924 = G__22925;
continue;
} else {
}
break;
}

var G__22922 = args22920.length;
switch (G__22922) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22920.length)].join('')));

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
var args22927 = [];
var len__17910__auto___22930 = arguments.length;
var i__17911__auto___22931 = (0);
while(true){
if((i__17911__auto___22931 < len__17910__auto___22930)){
args22927.push((arguments[i__17911__auto___22931]));

var G__22932 = (i__17911__auto___22931 + (1));
i__17911__auto___22931 = G__22932;
continue;
} else {
}
break;
}

var G__22929 = args22927.length;
switch (G__22929) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22927.length)].join('')));

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
var args22934 = [];
var len__17910__auto___22985 = arguments.length;
var i__17911__auto___22986 = (0);
while(true){
if((i__17911__auto___22986 < len__17910__auto___22985)){
args22934.push((arguments[i__17911__auto___22986]));

var G__22987 = (i__17911__auto___22986 + (1));
i__17911__auto___22986 = G__22987;
continue;
} else {
}
break;
}

var G__22936 = args22934.length;
switch (G__22936) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22934.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___22989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___22989,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___22989,out){
return (function (state_22960){
var state_val_22961 = (state_22960[(1)]);
if((state_val_22961 === (7))){
var inst_22955 = (state_22960[(2)]);
var state_22960__$1 = state_22960;
var statearr_22962_22990 = state_22960__$1;
(statearr_22962_22990[(2)] = inst_22955);

(statearr_22962_22990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (1))){
var inst_22937 = null;
var state_22960__$1 = (function (){var statearr_22963 = state_22960;
(statearr_22963[(7)] = inst_22937);

return statearr_22963;
})();
var statearr_22964_22991 = state_22960__$1;
(statearr_22964_22991[(2)] = null);

(statearr_22964_22991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (4))){
var inst_22940 = (state_22960[(8)]);
var inst_22940__$1 = (state_22960[(2)]);
var inst_22941 = (inst_22940__$1 == null);
var inst_22942 = cljs.core.not.call(null,inst_22941);
var state_22960__$1 = (function (){var statearr_22965 = state_22960;
(statearr_22965[(8)] = inst_22940__$1);

return statearr_22965;
})();
if(inst_22942){
var statearr_22966_22992 = state_22960__$1;
(statearr_22966_22992[(1)] = (5));

} else {
var statearr_22967_22993 = state_22960__$1;
(statearr_22967_22993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (6))){
var state_22960__$1 = state_22960;
var statearr_22968_22994 = state_22960__$1;
(statearr_22968_22994[(2)] = null);

(statearr_22968_22994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (3))){
var inst_22957 = (state_22960[(2)]);
var inst_22958 = cljs.core.async.close_BANG_.call(null,out);
var state_22960__$1 = (function (){var statearr_22969 = state_22960;
(statearr_22969[(9)] = inst_22957);

return statearr_22969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22960__$1,inst_22958);
} else {
if((state_val_22961 === (2))){
var state_22960__$1 = state_22960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22960__$1,(4),ch);
} else {
if((state_val_22961 === (11))){
var inst_22940 = (state_22960[(8)]);
var inst_22949 = (state_22960[(2)]);
var inst_22937 = inst_22940;
var state_22960__$1 = (function (){var statearr_22970 = state_22960;
(statearr_22970[(7)] = inst_22937);

(statearr_22970[(10)] = inst_22949);

return statearr_22970;
})();
var statearr_22971_22995 = state_22960__$1;
(statearr_22971_22995[(2)] = null);

(statearr_22971_22995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (9))){
var inst_22940 = (state_22960[(8)]);
var state_22960__$1 = state_22960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22960__$1,(11),out,inst_22940);
} else {
if((state_val_22961 === (5))){
var inst_22937 = (state_22960[(7)]);
var inst_22940 = (state_22960[(8)]);
var inst_22944 = cljs.core._EQ_.call(null,inst_22940,inst_22937);
var state_22960__$1 = state_22960;
if(inst_22944){
var statearr_22973_22996 = state_22960__$1;
(statearr_22973_22996[(1)] = (8));

} else {
var statearr_22974_22997 = state_22960__$1;
(statearr_22974_22997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (10))){
var inst_22952 = (state_22960[(2)]);
var state_22960__$1 = state_22960;
var statearr_22975_22998 = state_22960__$1;
(statearr_22975_22998[(2)] = inst_22952);

(statearr_22975_22998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22961 === (8))){
var inst_22937 = (state_22960[(7)]);
var tmp22972 = inst_22937;
var inst_22937__$1 = tmp22972;
var state_22960__$1 = (function (){var statearr_22976 = state_22960;
(statearr_22976[(7)] = inst_22937__$1);

return statearr_22976;
})();
var statearr_22977_22999 = state_22960__$1;
(statearr_22977_22999[(2)] = null);

(statearr_22977_22999[(1)] = (2));


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
});})(c__20416__auto___22989,out))
;
return ((function (switch__20304__auto__,c__20416__auto___22989,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_22981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22981[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_22981[(1)] = (1));

return statearr_22981;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_22960){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_22960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e22982){if((e22982 instanceof Object)){
var ex__20308__auto__ = e22982;
var statearr_22983_23000 = state_22960;
(statearr_22983_23000[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23001 = state_22960;
state_22960 = G__23001;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_22960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_22960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___22989,out))
})();
var state__20418__auto__ = (function (){var statearr_22984 = f__20417__auto__.call(null);
(statearr_22984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___22989);

return statearr_22984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___22989,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23002 = [];
var len__17910__auto___23072 = arguments.length;
var i__17911__auto___23073 = (0);
while(true){
if((i__17911__auto___23073 < len__17910__auto___23072)){
args23002.push((arguments[i__17911__auto___23073]));

var G__23074 = (i__17911__auto___23073 + (1));
i__17911__auto___23073 = G__23074;
continue;
} else {
}
break;
}

var G__23004 = args23002.length;
switch (G__23004) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23002.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___23076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___23076,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___23076,out){
return (function (state_23042){
var state_val_23043 = (state_23042[(1)]);
if((state_val_23043 === (7))){
var inst_23038 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23044_23077 = state_23042__$1;
(statearr_23044_23077[(2)] = inst_23038);

(statearr_23044_23077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (1))){
var inst_23005 = (new Array(n));
var inst_23006 = inst_23005;
var inst_23007 = (0);
var state_23042__$1 = (function (){var statearr_23045 = state_23042;
(statearr_23045[(7)] = inst_23007);

(statearr_23045[(8)] = inst_23006);

return statearr_23045;
})();
var statearr_23046_23078 = state_23042__$1;
(statearr_23046_23078[(2)] = null);

(statearr_23046_23078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (4))){
var inst_23010 = (state_23042[(9)]);
var inst_23010__$1 = (state_23042[(2)]);
var inst_23011 = (inst_23010__$1 == null);
var inst_23012 = cljs.core.not.call(null,inst_23011);
var state_23042__$1 = (function (){var statearr_23047 = state_23042;
(statearr_23047[(9)] = inst_23010__$1);

return statearr_23047;
})();
if(inst_23012){
var statearr_23048_23079 = state_23042__$1;
(statearr_23048_23079[(1)] = (5));

} else {
var statearr_23049_23080 = state_23042__$1;
(statearr_23049_23080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (15))){
var inst_23032 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23050_23081 = state_23042__$1;
(statearr_23050_23081[(2)] = inst_23032);

(statearr_23050_23081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (13))){
var state_23042__$1 = state_23042;
var statearr_23051_23082 = state_23042__$1;
(statearr_23051_23082[(2)] = null);

(statearr_23051_23082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (6))){
var inst_23007 = (state_23042[(7)]);
var inst_23028 = (inst_23007 > (0));
var state_23042__$1 = state_23042;
if(cljs.core.truth_(inst_23028)){
var statearr_23052_23083 = state_23042__$1;
(statearr_23052_23083[(1)] = (12));

} else {
var statearr_23053_23084 = state_23042__$1;
(statearr_23053_23084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (3))){
var inst_23040 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23042__$1,inst_23040);
} else {
if((state_val_23043 === (12))){
var inst_23006 = (state_23042[(8)]);
var inst_23030 = cljs.core.vec.call(null,inst_23006);
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23042__$1,(15),out,inst_23030);
} else {
if((state_val_23043 === (2))){
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23042__$1,(4),ch);
} else {
if((state_val_23043 === (11))){
var inst_23022 = (state_23042[(2)]);
var inst_23023 = (new Array(n));
var inst_23006 = inst_23023;
var inst_23007 = (0);
var state_23042__$1 = (function (){var statearr_23054 = state_23042;
(statearr_23054[(7)] = inst_23007);

(statearr_23054[(8)] = inst_23006);

(statearr_23054[(10)] = inst_23022);

return statearr_23054;
})();
var statearr_23055_23085 = state_23042__$1;
(statearr_23055_23085[(2)] = null);

(statearr_23055_23085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (9))){
var inst_23006 = (state_23042[(8)]);
var inst_23020 = cljs.core.vec.call(null,inst_23006);
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23042__$1,(11),out,inst_23020);
} else {
if((state_val_23043 === (5))){
var inst_23007 = (state_23042[(7)]);
var inst_23006 = (state_23042[(8)]);
var inst_23015 = (state_23042[(11)]);
var inst_23010 = (state_23042[(9)]);
var inst_23014 = (inst_23006[inst_23007] = inst_23010);
var inst_23015__$1 = (inst_23007 + (1));
var inst_23016 = (inst_23015__$1 < n);
var state_23042__$1 = (function (){var statearr_23056 = state_23042;
(statearr_23056[(12)] = inst_23014);

(statearr_23056[(11)] = inst_23015__$1);

return statearr_23056;
})();
if(cljs.core.truth_(inst_23016)){
var statearr_23057_23086 = state_23042__$1;
(statearr_23057_23086[(1)] = (8));

} else {
var statearr_23058_23087 = state_23042__$1;
(statearr_23058_23087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (14))){
var inst_23035 = (state_23042[(2)]);
var inst_23036 = cljs.core.async.close_BANG_.call(null,out);
var state_23042__$1 = (function (){var statearr_23060 = state_23042;
(statearr_23060[(13)] = inst_23035);

return statearr_23060;
})();
var statearr_23061_23088 = state_23042__$1;
(statearr_23061_23088[(2)] = inst_23036);

(statearr_23061_23088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (10))){
var inst_23026 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23062_23089 = state_23042__$1;
(statearr_23062_23089[(2)] = inst_23026);

(statearr_23062_23089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (8))){
var inst_23006 = (state_23042[(8)]);
var inst_23015 = (state_23042[(11)]);
var tmp23059 = inst_23006;
var inst_23006__$1 = tmp23059;
var inst_23007 = inst_23015;
var state_23042__$1 = (function (){var statearr_23063 = state_23042;
(statearr_23063[(7)] = inst_23007);

(statearr_23063[(8)] = inst_23006__$1);

return statearr_23063;
})();
var statearr_23064_23090 = state_23042__$1;
(statearr_23064_23090[(2)] = null);

(statearr_23064_23090[(1)] = (2));


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
});})(c__20416__auto___23076,out))
;
return ((function (switch__20304__auto__,c__20416__auto___23076,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_23068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23068[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_23068[(1)] = (1));

return statearr_23068;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_23042){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_23042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e23069){if((e23069 instanceof Object)){
var ex__20308__auto__ = e23069;
var statearr_23070_23091 = state_23042;
(statearr_23070_23091[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23092 = state_23042;
state_23042 = G__23092;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_23042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_23042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___23076,out))
})();
var state__20418__auto__ = (function (){var statearr_23071 = f__20417__auto__.call(null);
(statearr_23071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___23076);

return statearr_23071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___23076,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23093 = [];
var len__17910__auto___23167 = arguments.length;
var i__17911__auto___23168 = (0);
while(true){
if((i__17911__auto___23168 < len__17910__auto___23167)){
args23093.push((arguments[i__17911__auto___23168]));

var G__23169 = (i__17911__auto___23168 + (1));
i__17911__auto___23168 = G__23169;
continue;
} else {
}
break;
}

var G__23095 = args23093.length;
switch (G__23095) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23093.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20416__auto___23171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20416__auto___23171,out){
return (function (){
var f__20417__auto__ = (function (){var switch__20304__auto__ = ((function (c__20416__auto___23171,out){
return (function (state_23137){
var state_val_23138 = (state_23137[(1)]);
if((state_val_23138 === (7))){
var inst_23133 = (state_23137[(2)]);
var state_23137__$1 = state_23137;
var statearr_23139_23172 = state_23137__$1;
(statearr_23139_23172[(2)] = inst_23133);

(statearr_23139_23172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (1))){
var inst_23096 = [];
var inst_23097 = inst_23096;
var inst_23098 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23137__$1 = (function (){var statearr_23140 = state_23137;
(statearr_23140[(7)] = inst_23097);

(statearr_23140[(8)] = inst_23098);

return statearr_23140;
})();
var statearr_23141_23173 = state_23137__$1;
(statearr_23141_23173[(2)] = null);

(statearr_23141_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (4))){
var inst_23101 = (state_23137[(9)]);
var inst_23101__$1 = (state_23137[(2)]);
var inst_23102 = (inst_23101__$1 == null);
var inst_23103 = cljs.core.not.call(null,inst_23102);
var state_23137__$1 = (function (){var statearr_23142 = state_23137;
(statearr_23142[(9)] = inst_23101__$1);

return statearr_23142;
})();
if(inst_23103){
var statearr_23143_23174 = state_23137__$1;
(statearr_23143_23174[(1)] = (5));

} else {
var statearr_23144_23175 = state_23137__$1;
(statearr_23144_23175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (15))){
var inst_23127 = (state_23137[(2)]);
var state_23137__$1 = state_23137;
var statearr_23145_23176 = state_23137__$1;
(statearr_23145_23176[(2)] = inst_23127);

(statearr_23145_23176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (13))){
var state_23137__$1 = state_23137;
var statearr_23146_23177 = state_23137__$1;
(statearr_23146_23177[(2)] = null);

(statearr_23146_23177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (6))){
var inst_23097 = (state_23137[(7)]);
var inst_23122 = inst_23097.length;
var inst_23123 = (inst_23122 > (0));
var state_23137__$1 = state_23137;
if(cljs.core.truth_(inst_23123)){
var statearr_23147_23178 = state_23137__$1;
(statearr_23147_23178[(1)] = (12));

} else {
var statearr_23148_23179 = state_23137__$1;
(statearr_23148_23179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (3))){
var inst_23135 = (state_23137[(2)]);
var state_23137__$1 = state_23137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23137__$1,inst_23135);
} else {
if((state_val_23138 === (12))){
var inst_23097 = (state_23137[(7)]);
var inst_23125 = cljs.core.vec.call(null,inst_23097);
var state_23137__$1 = state_23137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23137__$1,(15),out,inst_23125);
} else {
if((state_val_23138 === (2))){
var state_23137__$1 = state_23137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23137__$1,(4),ch);
} else {
if((state_val_23138 === (11))){
var inst_23101 = (state_23137[(9)]);
var inst_23105 = (state_23137[(10)]);
var inst_23115 = (state_23137[(2)]);
var inst_23116 = [];
var inst_23117 = inst_23116.push(inst_23101);
var inst_23097 = inst_23116;
var inst_23098 = inst_23105;
var state_23137__$1 = (function (){var statearr_23149 = state_23137;
(statearr_23149[(11)] = inst_23115);

(statearr_23149[(7)] = inst_23097);

(statearr_23149[(8)] = inst_23098);

(statearr_23149[(12)] = inst_23117);

return statearr_23149;
})();
var statearr_23150_23180 = state_23137__$1;
(statearr_23150_23180[(2)] = null);

(statearr_23150_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (9))){
var inst_23097 = (state_23137[(7)]);
var inst_23113 = cljs.core.vec.call(null,inst_23097);
var state_23137__$1 = state_23137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23137__$1,(11),out,inst_23113);
} else {
if((state_val_23138 === (5))){
var inst_23098 = (state_23137[(8)]);
var inst_23101 = (state_23137[(9)]);
var inst_23105 = (state_23137[(10)]);
var inst_23105__$1 = f.call(null,inst_23101);
var inst_23106 = cljs.core._EQ_.call(null,inst_23105__$1,inst_23098);
var inst_23107 = cljs.core.keyword_identical_QMARK_.call(null,inst_23098,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23108 = (inst_23106) || (inst_23107);
var state_23137__$1 = (function (){var statearr_23151 = state_23137;
(statearr_23151[(10)] = inst_23105__$1);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23108)){
var statearr_23152_23181 = state_23137__$1;
(statearr_23152_23181[(1)] = (8));

} else {
var statearr_23153_23182 = state_23137__$1;
(statearr_23153_23182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (14))){
var inst_23130 = (state_23137[(2)]);
var inst_23131 = cljs.core.async.close_BANG_.call(null,out);
var state_23137__$1 = (function (){var statearr_23155 = state_23137;
(statearr_23155[(13)] = inst_23130);

return statearr_23155;
})();
var statearr_23156_23183 = state_23137__$1;
(statearr_23156_23183[(2)] = inst_23131);

(statearr_23156_23183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (10))){
var inst_23120 = (state_23137[(2)]);
var state_23137__$1 = state_23137;
var statearr_23157_23184 = state_23137__$1;
(statearr_23157_23184[(2)] = inst_23120);

(statearr_23157_23184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23138 === (8))){
var inst_23097 = (state_23137[(7)]);
var inst_23101 = (state_23137[(9)]);
var inst_23105 = (state_23137[(10)]);
var inst_23110 = inst_23097.push(inst_23101);
var tmp23154 = inst_23097;
var inst_23097__$1 = tmp23154;
var inst_23098 = inst_23105;
var state_23137__$1 = (function (){var statearr_23158 = state_23137;
(statearr_23158[(14)] = inst_23110);

(statearr_23158[(7)] = inst_23097__$1);

(statearr_23158[(8)] = inst_23098);

return statearr_23158;
})();
var statearr_23159_23185 = state_23137__$1;
(statearr_23159_23185[(2)] = null);

(statearr_23159_23185[(1)] = (2));


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
});})(c__20416__auto___23171,out))
;
return ((function (switch__20304__auto__,c__20416__auto___23171,out){
return (function() {
var cljs$core$async$state_machine__20305__auto__ = null;
var cljs$core$async$state_machine__20305__auto____0 = (function (){
var statearr_23163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23163[(0)] = cljs$core$async$state_machine__20305__auto__);

(statearr_23163[(1)] = (1));

return statearr_23163;
});
var cljs$core$async$state_machine__20305__auto____1 = (function (state_23137){
while(true){
var ret_value__20306__auto__ = (function (){try{while(true){
var result__20307__auto__ = switch__20304__auto__.call(null,state_23137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20307__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object)){
var ex__20308__auto__ = e23164;
var statearr_23165_23186 = state_23137;
(statearr_23165_23186[(5)] = ex__20308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23187 = state_23137;
state_23137 = G__23187;
continue;
} else {
return ret_value__20306__auto__;
}
break;
}
});
cljs$core$async$state_machine__20305__auto__ = function(state_23137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20305__auto____1.call(this,state_23137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20305__auto____0;
cljs$core$async$state_machine__20305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20305__auto____1;
return cljs$core$async$state_machine__20305__auto__;
})()
;})(switch__20304__auto__,c__20416__auto___23171,out))
})();
var state__20418__auto__ = (function (){var statearr_23166 = f__20417__auto__.call(null);
(statearr_23166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20416__auto___23171);

return statearr_23166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20418__auto__);
});})(c__20416__auto___23171,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453415052651