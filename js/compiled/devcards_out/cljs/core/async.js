// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28622 = [];
var len__25835__auto___28628 = arguments.length;
var i__25836__auto___28629 = (0);
while(true){
if((i__25836__auto___28629 < len__25835__auto___28628)){
args28622.push((arguments[i__25836__auto___28629]));

var G__28630 = (i__25836__auto___28629 + (1));
i__25836__auto___28629 = G__28630;
continue;
} else {
}
break;
}

var G__28624 = args28622.length;
switch (G__28624) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28622.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28625 = (function (f,blockable,meta28626){
this.f = f;
this.blockable = blockable;
this.meta28626 = meta28626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28627,meta28626__$1){
var self__ = this;
var _28627__$1 = this;
return (new cljs.core.async.t_cljs$core$async28625(self__.f,self__.blockable,meta28626__$1));
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28627){
var self__ = this;
var _28627__$1 = this;
return self__.meta28626;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28626","meta28626",-979470726,null)], null);
});

cljs.core.async.t_cljs$core$async28625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28625";

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28625");
});

cljs.core.async.__GT_t_cljs$core$async28625 = (function cljs$core$async$__GT_t_cljs$core$async28625(f__$1,blockable__$1,meta28626){
return (new cljs.core.async.t_cljs$core$async28625(f__$1,blockable__$1,meta28626));
});

}

return (new cljs.core.async.t_cljs$core$async28625(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28634 = [];
var len__25835__auto___28637 = arguments.length;
var i__25836__auto___28638 = (0);
while(true){
if((i__25836__auto___28638 < len__25835__auto___28637)){
args28634.push((arguments[i__25836__auto___28638]));

var G__28639 = (i__25836__auto___28638 + (1));
i__25836__auto___28638 = G__28639;
continue;
} else {
}
break;
}

var G__28636 = args28634.length;
switch (G__28636) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28634.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args28641 = [];
var len__25835__auto___28644 = arguments.length;
var i__25836__auto___28645 = (0);
while(true){
if((i__25836__auto___28645 < len__25835__auto___28644)){
args28641.push((arguments[i__25836__auto___28645]));

var G__28646 = (i__25836__auto___28645 + (1));
i__25836__auto___28645 = G__28646;
continue;
} else {
}
break;
}

var G__28643 = args28641.length;
switch (G__28643) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28641.length)].join('')));

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
var args28648 = [];
var len__25835__auto___28651 = arguments.length;
var i__25836__auto___28652 = (0);
while(true){
if((i__25836__auto___28652 < len__25835__auto___28651)){
args28648.push((arguments[i__25836__auto___28652]));

var G__28653 = (i__25836__auto___28652 + (1));
i__25836__auto___28652 = G__28653;
continue;
} else {
}
break;
}

var G__28650 = args28648.length;
switch (G__28650) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28648.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28655,ret){
return (function (){
return fn1.call(null,val_28655);
});})(val_28655,ret))
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
var args28656 = [];
var len__25835__auto___28659 = arguments.length;
var i__25836__auto___28660 = (0);
while(true){
if((i__25836__auto___28660 < len__25835__auto___28659)){
args28656.push((arguments[i__25836__auto___28660]));

var G__28661 = (i__25836__auto___28660 + (1));
i__25836__auto___28660 = G__28661;
continue;
} else {
}
break;
}

var G__28658 = args28656.length;
switch (G__28658) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28656.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25675__auto___28663 = n;
var x_28664 = (0);
while(true){
if((x_28664 < n__25675__auto___28663)){
(a[x_28664] = (0));

var G__28665 = (x_28664 + (1));
x_28664 = G__28665;
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

var G__28666 = (i + (1));
i = G__28666;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28670 = (function (alt_flag,flag,meta28671){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28671 = meta28671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28672,meta28671__$1){
var self__ = this;
var _28672__$1 = this;
return (new cljs.core.async.t_cljs$core$async28670(self__.alt_flag,self__.flag,meta28671__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28672){
var self__ = this;
var _28672__$1 = this;
return self__.meta28671;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28671","meta28671",-1871706037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28670";

cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28670");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28670 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28670(alt_flag__$1,flag__$1,meta28671){
return (new cljs.core.async.t_cljs$core$async28670(alt_flag__$1,flag__$1,meta28671));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28670(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28676 = (function (alt_handler,flag,cb,meta28677){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28677 = meta28677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28678,meta28677__$1){
var self__ = this;
var _28678__$1 = this;
return (new cljs.core.async.t_cljs$core$async28676(self__.alt_handler,self__.flag,self__.cb,meta28677__$1));
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28678){
var self__ = this;
var _28678__$1 = this;
return self__.meta28677;
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28677","meta28677",1834703698,null)], null);
});

cljs.core.async.t_cljs$core$async28676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28676";

cljs.core.async.t_cljs$core$async28676.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28676");
});

cljs.core.async.__GT_t_cljs$core$async28676 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28676(alt_handler__$1,flag__$1,cb__$1,meta28677){
return (new cljs.core.async.t_cljs$core$async28676(alt_handler__$1,flag__$1,cb__$1,meta28677));
});

}

return (new cljs.core.async.t_cljs$core$async28676(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28679_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28679_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28680_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24760__auto__ = wport;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28681 = (i + (1));
i = G__28681;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24760__auto__ = ret;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25842__auto__ = [];
var len__25835__auto___28687 = arguments.length;
var i__25836__auto___28688 = (0);
while(true){
if((i__25836__auto___28688 < len__25835__auto___28687)){
args__25842__auto__.push((arguments[i__25836__auto___28688]));

var G__28689 = (i__25836__auto___28688 + (1));
i__25836__auto___28688 = G__28689;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28684){
var map__28685 = p__28684;
var map__28685__$1 = ((((!((map__28685 == null)))?((((map__28685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28685):map__28685);
var opts = map__28685__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28682){
var G__28683 = cljs.core.first.call(null,seq28682);
var seq28682__$1 = cljs.core.next.call(null,seq28682);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28683,seq28682__$1);
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
var args28690 = [];
var len__25835__auto___28740 = arguments.length;
var i__25836__auto___28741 = (0);
while(true){
if((i__25836__auto___28741 < len__25835__auto___28740)){
args28690.push((arguments[i__25836__auto___28741]));

var G__28742 = (i__25836__auto___28741 + (1));
i__25836__auto___28741 = G__28742;
continue;
} else {
}
break;
}

var G__28692 = args28690.length;
switch (G__28692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28690.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28577__auto___28744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___28744){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___28744){
return (function (state_28716){
var state_val_28717 = (state_28716[(1)]);
if((state_val_28717 === (7))){
var inst_28712 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28718_28745 = state_28716__$1;
(statearr_28718_28745[(2)] = inst_28712);

(statearr_28718_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (1))){
var state_28716__$1 = state_28716;
var statearr_28719_28746 = state_28716__$1;
(statearr_28719_28746[(2)] = null);

(statearr_28719_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (4))){
var inst_28695 = (state_28716[(7)]);
var inst_28695__$1 = (state_28716[(2)]);
var inst_28696 = (inst_28695__$1 == null);
var state_28716__$1 = (function (){var statearr_28720 = state_28716;
(statearr_28720[(7)] = inst_28695__$1);

return statearr_28720;
})();
if(cljs.core.truth_(inst_28696)){
var statearr_28721_28747 = state_28716__$1;
(statearr_28721_28747[(1)] = (5));

} else {
var statearr_28722_28748 = state_28716__$1;
(statearr_28722_28748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (13))){
var state_28716__$1 = state_28716;
var statearr_28723_28749 = state_28716__$1;
(statearr_28723_28749[(2)] = null);

(statearr_28723_28749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (6))){
var inst_28695 = (state_28716[(7)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28716__$1,(11),to,inst_28695);
} else {
if((state_val_28717 === (3))){
var inst_28714 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28716__$1,inst_28714);
} else {
if((state_val_28717 === (12))){
var state_28716__$1 = state_28716;
var statearr_28724_28750 = state_28716__$1;
(statearr_28724_28750[(2)] = null);

(statearr_28724_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (2))){
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(4),from);
} else {
if((state_val_28717 === (11))){
var inst_28705 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
if(cljs.core.truth_(inst_28705)){
var statearr_28725_28751 = state_28716__$1;
(statearr_28725_28751[(1)] = (12));

} else {
var statearr_28726_28752 = state_28716__$1;
(statearr_28726_28752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (9))){
var state_28716__$1 = state_28716;
var statearr_28727_28753 = state_28716__$1;
(statearr_28727_28753[(2)] = null);

(statearr_28727_28753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (5))){
var state_28716__$1 = state_28716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28728_28754 = state_28716__$1;
(statearr_28728_28754[(1)] = (8));

} else {
var statearr_28729_28755 = state_28716__$1;
(statearr_28729_28755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (14))){
var inst_28710 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28730_28756 = state_28716__$1;
(statearr_28730_28756[(2)] = inst_28710);

(statearr_28730_28756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (10))){
var inst_28702 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28731_28757 = state_28716__$1;
(statearr_28731_28757[(2)] = inst_28702);

(statearr_28731_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (8))){
var inst_28699 = cljs.core.async.close_BANG_.call(null,to);
var state_28716__$1 = state_28716;
var statearr_28732_28758 = state_28716__$1;
(statearr_28732_28758[(2)] = inst_28699);

(statearr_28732_28758[(1)] = (10));


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
});})(c__28577__auto___28744))
;
return ((function (switch__28465__auto__,c__28577__auto___28744){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_28716){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28737){if((e28737 instanceof Object)){
var ex__28469__auto__ = e28737;
var statearr_28738_28759 = state_28716;
(statearr_28738_28759[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28716;
state_28716 = G__28760;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_28716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_28716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___28744))
})();
var state__28579__auto__ = (function (){var statearr_28739 = f__28578__auto__.call(null);
(statearr_28739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___28744);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___28744))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28948){
var vec__28949 = p__28948;
var v = cljs.core.nth.call(null,vec__28949,(0),null);
var p = cljs.core.nth.call(null,vec__28949,(1),null);
var job = vec__28949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28577__auto___29135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (1))){
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(2),res,v);
} else {
if((state_val_28957 === (2))){
var inst_28953 = (state_28956[(2)]);
var inst_28954 = cljs.core.async.close_BANG_.call(null,res);
var state_28956__$1 = (function (){var statearr_28958 = state_28956;
(statearr_28958[(7)] = inst_28953);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
return null;
}
}
});})(c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
;
return ((function (switch__28465__auto__,c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_28962 = [null,null,null,null,null,null,null,null];
(statearr_28962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_28962[(1)] = (1));

return statearr_28962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_28956){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28963){if((e28963 instanceof Object)){
var ex__28469__auto__ = e28963;
var statearr_28964_29136 = state_28956;
(statearr_28964_29136[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29137 = state_28956;
state_28956 = G__29137;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
})();
var state__28579__auto__ = (function (){var statearr_28965 = f__28578__auto__.call(null);
(statearr_28965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29135);

return statearr_28965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28966){
var vec__28967 = p__28966;
var v = cljs.core.nth.call(null,vec__28967,(0),null);
var p = cljs.core.nth.call(null,vec__28967,(1),null);
var job = vec__28967;
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
var n__25675__auto___29138 = n;
var __29139 = (0);
while(true){
if((__29139 < n__25675__auto___29138)){
var G__28970_29140 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28970_29140) {
case "compute":
var c__28577__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29139,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (__29139,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (1))){
var state_28983__$1 = state_28983;
var statearr_28985_29143 = state_28983__$1;
(statearr_28985_29143[(2)] = null);

(statearr_28985_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (2))){
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28983__$1,(4),jobs);
} else {
if((state_val_28984 === (3))){
var inst_28981 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (4))){
var inst_28973 = (state_28983[(2)]);
var inst_28974 = process.call(null,inst_28973);
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28974)){
var statearr_28986_29144 = state_28983__$1;
(statearr_28986_29144[(1)] = (5));

} else {
var statearr_28987_29145 = state_28983__$1;
(statearr_28987_29145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (5))){
var state_28983__$1 = state_28983;
var statearr_28988_29146 = state_28983__$1;
(statearr_28988_29146[(2)] = null);

(statearr_28988_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (6))){
var state_28983__$1 = state_28983;
var statearr_28989_29147 = state_28983__$1;
(statearr_28989_29147[(2)] = null);

(statearr_28989_29147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (7))){
var inst_28979 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28990_29148 = state_28983__$1;
(statearr_28990_29148[(2)] = inst_28979);

(statearr_28990_29148[(1)] = (3));


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
});})(__29139,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
;
return ((function (__29139,switch__28465__auto__,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_28994 = [null,null,null,null,null,null,null];
(statearr_28994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_28994[(1)] = (1));

return statearr_28994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_28983){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28995){if((e28995 instanceof Object)){
var ex__28469__auto__ = e28995;
var statearr_28996_29149 = state_28983;
(statearr_28996_29149[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29150 = state_28983;
state_28983 = G__29150;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(__29139,switch__28465__auto__,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_28997 = f__28578__auto__.call(null);
(statearr_28997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29142);

return statearr_28997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(__29139,c__28577__auto___29142,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
);


break;
case "async":
var c__28577__auto___29151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29139,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (__29139,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function (state_29010){
var state_val_29011 = (state_29010[(1)]);
if((state_val_29011 === (1))){
var state_29010__$1 = state_29010;
var statearr_29012_29152 = state_29010__$1;
(statearr_29012_29152[(2)] = null);

(statearr_29012_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (2))){
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(4),jobs);
} else {
if((state_val_29011 === (3))){
var inst_29008 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29010__$1,inst_29008);
} else {
if((state_val_29011 === (4))){
var inst_29000 = (state_29010[(2)]);
var inst_29001 = async.call(null,inst_29000);
var state_29010__$1 = state_29010;
if(cljs.core.truth_(inst_29001)){
var statearr_29013_29153 = state_29010__$1;
(statearr_29013_29153[(1)] = (5));

} else {
var statearr_29014_29154 = state_29010__$1;
(statearr_29014_29154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (5))){
var state_29010__$1 = state_29010;
var statearr_29015_29155 = state_29010__$1;
(statearr_29015_29155[(2)] = null);

(statearr_29015_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (6))){
var state_29010__$1 = state_29010;
var statearr_29016_29156 = state_29010__$1;
(statearr_29016_29156[(2)] = null);

(statearr_29016_29156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (7))){
var inst_29006 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29017_29157 = state_29010__$1;
(statearr_29017_29157[(2)] = inst_29006);

(statearr_29017_29157[(1)] = (3));


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
});})(__29139,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
;
return ((function (__29139,switch__28465__auto__,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29010){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29022){if((e29022 instanceof Object)){
var ex__28469__auto__ = e29022;
var statearr_29023_29158 = state_29010;
(statearr_29023_29158[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29010;
state_29010 = G__29159;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(__29139,switch__28465__auto__,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29024 = f__28578__auto__.call(null);
(statearr_29024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29151);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(__29139,c__28577__auto___29151,G__28970_29140,n__25675__auto___29138,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29160 = (__29139 + (1));
__29139 = G__29160;
continue;
} else {
}
break;
}

var c__28577__auto___29161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29161,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29161,jobs,results,process,async){
return (function (state_29046){
var state_val_29047 = (state_29046[(1)]);
if((state_val_29047 === (1))){
var state_29046__$1 = state_29046;
var statearr_29048_29162 = state_29046__$1;
(statearr_29048_29162[(2)] = null);

(statearr_29048_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (2))){
var state_29046__$1 = state_29046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29046__$1,(4),from);
} else {
if((state_val_29047 === (3))){
var inst_29044 = (state_29046[(2)]);
var state_29046__$1 = state_29046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29046__$1,inst_29044);
} else {
if((state_val_29047 === (4))){
var inst_29027 = (state_29046[(7)]);
var inst_29027__$1 = (state_29046[(2)]);
var inst_29028 = (inst_29027__$1 == null);
var state_29046__$1 = (function (){var statearr_29049 = state_29046;
(statearr_29049[(7)] = inst_29027__$1);

return statearr_29049;
})();
if(cljs.core.truth_(inst_29028)){
var statearr_29050_29163 = state_29046__$1;
(statearr_29050_29163[(1)] = (5));

} else {
var statearr_29051_29164 = state_29046__$1;
(statearr_29051_29164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (5))){
var inst_29030 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29046__$1 = state_29046;
var statearr_29052_29165 = state_29046__$1;
(statearr_29052_29165[(2)] = inst_29030);

(statearr_29052_29165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (6))){
var inst_29027 = (state_29046[(7)]);
var inst_29032 = (state_29046[(8)]);
var inst_29032__$1 = cljs.core.async.chan.call(null,(1));
var inst_29033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29034 = [inst_29027,inst_29032__$1];
var inst_29035 = (new cljs.core.PersistentVector(null,2,(5),inst_29033,inst_29034,null));
var state_29046__$1 = (function (){var statearr_29053 = state_29046;
(statearr_29053[(8)] = inst_29032__$1);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29046__$1,(8),jobs,inst_29035);
} else {
if((state_val_29047 === (7))){
var inst_29042 = (state_29046[(2)]);
var state_29046__$1 = state_29046;
var statearr_29054_29166 = state_29046__$1;
(statearr_29054_29166[(2)] = inst_29042);

(statearr_29054_29166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (8))){
var inst_29032 = (state_29046[(8)]);
var inst_29037 = (state_29046[(2)]);
var state_29046__$1 = (function (){var statearr_29055 = state_29046;
(statearr_29055[(9)] = inst_29037);

return statearr_29055;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29046__$1,(9),results,inst_29032);
} else {
if((state_val_29047 === (9))){
var inst_29039 = (state_29046[(2)]);
var state_29046__$1 = (function (){var statearr_29056 = state_29046;
(statearr_29056[(10)] = inst_29039);

return statearr_29056;
})();
var statearr_29057_29167 = state_29046__$1;
(statearr_29057_29167[(2)] = null);

(statearr_29057_29167[(1)] = (2));


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
});})(c__28577__auto___29161,jobs,results,process,async))
;
return ((function (switch__28465__auto__,c__28577__auto___29161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29061[(1)] = (1));

return statearr_29061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29046){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__28469__auto__ = e29062;
var statearr_29063_29168 = state_29046;
(statearr_29063_29168[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29169 = state_29046;
state_29046 = G__29169;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29161,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29064 = f__28578__auto__.call(null);
(statearr_29064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29161);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29161,jobs,results,process,async))
);


var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,jobs,results,process,async){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (7))){
var inst_29098 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29104_29170 = state_29102__$1;
(statearr_29104_29170[(2)] = inst_29098);

(statearr_29104_29170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (20))){
var state_29102__$1 = state_29102;
var statearr_29105_29171 = state_29102__$1;
(statearr_29105_29171[(2)] = null);

(statearr_29105_29171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (1))){
var state_29102__$1 = state_29102;
var statearr_29106_29172 = state_29102__$1;
(statearr_29106_29172[(2)] = null);

(statearr_29106_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (4))){
var inst_29067 = (state_29102[(7)]);
var inst_29067__$1 = (state_29102[(2)]);
var inst_29068 = (inst_29067__$1 == null);
var state_29102__$1 = (function (){var statearr_29107 = state_29102;
(statearr_29107[(7)] = inst_29067__$1);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29068)){
var statearr_29108_29173 = state_29102__$1;
(statearr_29108_29173[(1)] = (5));

} else {
var statearr_29109_29174 = state_29102__$1;
(statearr_29109_29174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (15))){
var inst_29080 = (state_29102[(8)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29102__$1,(18),to,inst_29080);
} else {
if((state_val_29103 === (21))){
var inst_29093 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29110_29175 = state_29102__$1;
(statearr_29110_29175[(2)] = inst_29093);

(statearr_29110_29175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (13))){
var inst_29095 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29111 = state_29102;
(statearr_29111[(9)] = inst_29095);

return statearr_29111;
})();
var statearr_29112_29176 = state_29102__$1;
(statearr_29112_29176[(2)] = null);

(statearr_29112_29176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (6))){
var inst_29067 = (state_29102[(7)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(11),inst_29067);
} else {
if((state_val_29103 === (17))){
var inst_29088 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
if(cljs.core.truth_(inst_29088)){
var statearr_29113_29177 = state_29102__$1;
(statearr_29113_29177[(1)] = (19));

} else {
var statearr_29114_29178 = state_29102__$1;
(statearr_29114_29178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (3))){
var inst_29100 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (12))){
var inst_29077 = (state_29102[(10)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(14),inst_29077);
} else {
if((state_val_29103 === (2))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(4),results);
} else {
if((state_val_29103 === (19))){
var state_29102__$1 = state_29102;
var statearr_29115_29179 = state_29102__$1;
(statearr_29115_29179[(2)] = null);

(statearr_29115_29179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (11))){
var inst_29077 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29116 = state_29102;
(statearr_29116[(10)] = inst_29077);

return statearr_29116;
})();
var statearr_29117_29180 = state_29102__$1;
(statearr_29117_29180[(2)] = null);

(statearr_29117_29180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (9))){
var state_29102__$1 = state_29102;
var statearr_29118_29181 = state_29102__$1;
(statearr_29118_29181[(2)] = null);

(statearr_29118_29181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (5))){
var state_29102__$1 = state_29102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29119_29182 = state_29102__$1;
(statearr_29119_29182[(1)] = (8));

} else {
var statearr_29120_29183 = state_29102__$1;
(statearr_29120_29183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (14))){
var inst_29082 = (state_29102[(11)]);
var inst_29080 = (state_29102[(8)]);
var inst_29080__$1 = (state_29102[(2)]);
var inst_29081 = (inst_29080__$1 == null);
var inst_29082__$1 = cljs.core.not.call(null,inst_29081);
var state_29102__$1 = (function (){var statearr_29121 = state_29102;
(statearr_29121[(11)] = inst_29082__$1);

(statearr_29121[(8)] = inst_29080__$1);

return statearr_29121;
})();
if(inst_29082__$1){
var statearr_29122_29184 = state_29102__$1;
(statearr_29122_29184[(1)] = (15));

} else {
var statearr_29123_29185 = state_29102__$1;
(statearr_29123_29185[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (16))){
var inst_29082 = (state_29102[(11)]);
var state_29102__$1 = state_29102;
var statearr_29124_29186 = state_29102__$1;
(statearr_29124_29186[(2)] = inst_29082);

(statearr_29124_29186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (10))){
var inst_29074 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29125_29187 = state_29102__$1;
(statearr_29125_29187[(2)] = inst_29074);

(statearr_29125_29187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (18))){
var inst_29085 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29126_29188 = state_29102__$1;
(statearr_29126_29188[(2)] = inst_29085);

(statearr_29126_29188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (8))){
var inst_29071 = cljs.core.async.close_BANG_.call(null,to);
var state_29102__$1 = state_29102;
var statearr_29127_29189 = state_29102__$1;
(statearr_29127_29189[(2)] = inst_29071);

(statearr_29127_29189[(1)] = (10));


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
});})(c__28577__auto__,jobs,results,process,async))
;
return ((function (switch__28465__auto__,c__28577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29131[(1)] = (1));

return statearr_29131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29102){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29132){if((e29132 instanceof Object)){
var ex__28469__auto__ = e29132;
var statearr_29133_29190 = state_29102;
(statearr_29133_29190[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29191 = state_29102;
state_29102 = G__29191;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29134 = f__28578__auto__.call(null);
(statearr_29134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,jobs,results,process,async))
);

return c__28577__auto__;
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
var args29192 = [];
var len__25835__auto___29195 = arguments.length;
var i__25836__auto___29196 = (0);
while(true){
if((i__25836__auto___29196 < len__25835__auto___29195)){
args29192.push((arguments[i__25836__auto___29196]));

var G__29197 = (i__25836__auto___29196 + (1));
i__25836__auto___29196 = G__29197;
continue;
} else {
}
break;
}

var G__29194 = args29192.length;
switch (G__29194) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29192.length)].join('')));

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
var args29199 = [];
var len__25835__auto___29202 = arguments.length;
var i__25836__auto___29203 = (0);
while(true){
if((i__25836__auto___29203 < len__25835__auto___29202)){
args29199.push((arguments[i__25836__auto___29203]));

var G__29204 = (i__25836__auto___29203 + (1));
i__25836__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var G__29201 = args29199.length;
switch (G__29201) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29199.length)].join('')));

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
var args29206 = [];
var len__25835__auto___29259 = arguments.length;
var i__25836__auto___29260 = (0);
while(true){
if((i__25836__auto___29260 < len__25835__auto___29259)){
args29206.push((arguments[i__25836__auto___29260]));

var G__29261 = (i__25836__auto___29260 + (1));
i__25836__auto___29260 = G__29261;
continue;
} else {
}
break;
}

var G__29208 = args29206.length;
switch (G__29208) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29206.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28577__auto___29263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29263,tc,fc){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29263,tc,fc){
return (function (state_29234){
var state_val_29235 = (state_29234[(1)]);
if((state_val_29235 === (7))){
var inst_29230 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29236_29264 = state_29234__$1;
(statearr_29236_29264[(2)] = inst_29230);

(statearr_29236_29264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (1))){
var state_29234__$1 = state_29234;
var statearr_29237_29265 = state_29234__$1;
(statearr_29237_29265[(2)] = null);

(statearr_29237_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (4))){
var inst_29211 = (state_29234[(7)]);
var inst_29211__$1 = (state_29234[(2)]);
var inst_29212 = (inst_29211__$1 == null);
var state_29234__$1 = (function (){var statearr_29238 = state_29234;
(statearr_29238[(7)] = inst_29211__$1);

return statearr_29238;
})();
if(cljs.core.truth_(inst_29212)){
var statearr_29239_29266 = state_29234__$1;
(statearr_29239_29266[(1)] = (5));

} else {
var statearr_29240_29267 = state_29234__$1;
(statearr_29240_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (13))){
var state_29234__$1 = state_29234;
var statearr_29241_29268 = state_29234__$1;
(statearr_29241_29268[(2)] = null);

(statearr_29241_29268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (6))){
var inst_29211 = (state_29234[(7)]);
var inst_29217 = p.call(null,inst_29211);
var state_29234__$1 = state_29234;
if(cljs.core.truth_(inst_29217)){
var statearr_29242_29269 = state_29234__$1;
(statearr_29242_29269[(1)] = (9));

} else {
var statearr_29243_29270 = state_29234__$1;
(statearr_29243_29270[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (3))){
var inst_29232 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29234__$1,inst_29232);
} else {
if((state_val_29235 === (12))){
var state_29234__$1 = state_29234;
var statearr_29244_29271 = state_29234__$1;
(statearr_29244_29271[(2)] = null);

(statearr_29244_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (2))){
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29234__$1,(4),ch);
} else {
if((state_val_29235 === (11))){
var inst_29211 = (state_29234[(7)]);
var inst_29221 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29234__$1,(8),inst_29221,inst_29211);
} else {
if((state_val_29235 === (9))){
var state_29234__$1 = state_29234;
var statearr_29245_29272 = state_29234__$1;
(statearr_29245_29272[(2)] = tc);

(statearr_29245_29272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (5))){
var inst_29214 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29215 = cljs.core.async.close_BANG_.call(null,fc);
var state_29234__$1 = (function (){var statearr_29246 = state_29234;
(statearr_29246[(8)] = inst_29214);

return statearr_29246;
})();
var statearr_29247_29273 = state_29234__$1;
(statearr_29247_29273[(2)] = inst_29215);

(statearr_29247_29273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (14))){
var inst_29228 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29248_29274 = state_29234__$1;
(statearr_29248_29274[(2)] = inst_29228);

(statearr_29248_29274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (10))){
var state_29234__$1 = state_29234;
var statearr_29249_29275 = state_29234__$1;
(statearr_29249_29275[(2)] = fc);

(statearr_29249_29275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (8))){
var inst_29223 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
if(cljs.core.truth_(inst_29223)){
var statearr_29250_29276 = state_29234__$1;
(statearr_29250_29276[(1)] = (12));

} else {
var statearr_29251_29277 = state_29234__$1;
(statearr_29251_29277[(1)] = (13));

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
});})(c__28577__auto___29263,tc,fc))
;
return ((function (switch__28465__auto__,c__28577__auto___29263,tc,fc){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_29255 = [null,null,null,null,null,null,null,null,null];
(statearr_29255[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_29255[(1)] = (1));

return statearr_29255;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_29234){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29256){if((e29256 instanceof Object)){
var ex__28469__auto__ = e29256;
var statearr_29257_29278 = state_29234;
(statearr_29257_29278[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29234;
state_29234 = G__29279;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_29234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_29234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29263,tc,fc))
})();
var state__28579__auto__ = (function (){var statearr_29258 = f__28578__auto__.call(null);
(statearr_29258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29263);

return statearr_29258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29263,tc,fc))
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
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_29343){
var state_val_29344 = (state_29343[(1)]);
if((state_val_29344 === (7))){
var inst_29339 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29345_29366 = state_29343__$1;
(statearr_29345_29366[(2)] = inst_29339);

(statearr_29345_29366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (1))){
var inst_29323 = init;
var state_29343__$1 = (function (){var statearr_29346 = state_29343;
(statearr_29346[(7)] = inst_29323);

return statearr_29346;
})();
var statearr_29347_29367 = state_29343__$1;
(statearr_29347_29367[(2)] = null);

(statearr_29347_29367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (4))){
var inst_29326 = (state_29343[(8)]);
var inst_29326__$1 = (state_29343[(2)]);
var inst_29327 = (inst_29326__$1 == null);
var state_29343__$1 = (function (){var statearr_29348 = state_29343;
(statearr_29348[(8)] = inst_29326__$1);

return statearr_29348;
})();
if(cljs.core.truth_(inst_29327)){
var statearr_29349_29368 = state_29343__$1;
(statearr_29349_29368[(1)] = (5));

} else {
var statearr_29350_29369 = state_29343__$1;
(statearr_29350_29369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (6))){
var inst_29330 = (state_29343[(9)]);
var inst_29323 = (state_29343[(7)]);
var inst_29326 = (state_29343[(8)]);
var inst_29330__$1 = f.call(null,inst_29323,inst_29326);
var inst_29331 = cljs.core.reduced_QMARK_.call(null,inst_29330__$1);
var state_29343__$1 = (function (){var statearr_29351 = state_29343;
(statearr_29351[(9)] = inst_29330__$1);

return statearr_29351;
})();
if(inst_29331){
var statearr_29352_29370 = state_29343__$1;
(statearr_29352_29370[(1)] = (8));

} else {
var statearr_29353_29371 = state_29343__$1;
(statearr_29353_29371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (3))){
var inst_29341 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29343__$1,inst_29341);
} else {
if((state_val_29344 === (2))){
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29343__$1,(4),ch);
} else {
if((state_val_29344 === (9))){
var inst_29330 = (state_29343[(9)]);
var inst_29323 = inst_29330;
var state_29343__$1 = (function (){var statearr_29354 = state_29343;
(statearr_29354[(7)] = inst_29323);

return statearr_29354;
})();
var statearr_29355_29372 = state_29343__$1;
(statearr_29355_29372[(2)] = null);

(statearr_29355_29372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (5))){
var inst_29323 = (state_29343[(7)]);
var state_29343__$1 = state_29343;
var statearr_29356_29373 = state_29343__$1;
(statearr_29356_29373[(2)] = inst_29323);

(statearr_29356_29373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (10))){
var inst_29337 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29357_29374 = state_29343__$1;
(statearr_29357_29374[(2)] = inst_29337);

(statearr_29357_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (8))){
var inst_29330 = (state_29343[(9)]);
var inst_29333 = cljs.core.deref.call(null,inst_29330);
var state_29343__$1 = state_29343;
var statearr_29358_29375 = state_29343__$1;
(statearr_29358_29375[(2)] = inst_29333);

(statearr_29358_29375[(1)] = (10));


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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28466__auto____0 = (function (){
var statearr_29362 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29362[(0)] = cljs$core$async$reduce_$_state_machine__28466__auto__);

(statearr_29362[(1)] = (1));

return statearr_29362;
});
var cljs$core$async$reduce_$_state_machine__28466__auto____1 = (function (state_29343){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29363){if((e29363 instanceof Object)){
var ex__28469__auto__ = e29363;
var statearr_29364_29376 = state_29343;
(statearr_29364_29376[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29377 = state_29343;
state_29343 = G__29377;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28466__auto__ = function(state_29343){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28466__auto____1.call(this,state_29343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28466__auto____0;
cljs$core$async$reduce_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28466__auto____1;
return cljs$core$async$reduce_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_29365 = f__28578__auto__.call(null);
(statearr_29365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
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
var args29378 = [];
var len__25835__auto___29430 = arguments.length;
var i__25836__auto___29431 = (0);
while(true){
if((i__25836__auto___29431 < len__25835__auto___29430)){
args29378.push((arguments[i__25836__auto___29431]));

var G__29432 = (i__25836__auto___29431 + (1));
i__25836__auto___29431 = G__29432;
continue;
} else {
}
break;
}

var G__29380 = args29378.length;
switch (G__29380) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29378.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29387 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29407_29434 = state_29405__$1;
(statearr_29407_29434[(2)] = inst_29387);

(statearr_29407_29434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29381 = cljs.core.seq.call(null,coll);
var inst_29382 = inst_29381;
var state_29405__$1 = (function (){var statearr_29408 = state_29405;
(statearr_29408[(7)] = inst_29382);

return statearr_29408;
})();
var statearr_29409_29435 = state_29405__$1;
(statearr_29409_29435[(2)] = null);

(statearr_29409_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29382 = (state_29405[(7)]);
var inst_29385 = cljs.core.first.call(null,inst_29382);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29405__$1,(7),ch,inst_29385);
} else {
if((state_val_29406 === (13))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29410_29436 = state_29405__$1;
(statearr_29410_29436[(2)] = inst_29399);

(statearr_29410_29436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29390 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29390)){
var statearr_29411_29437 = state_29405__$1;
(statearr_29411_29437[(1)] = (8));

} else {
var statearr_29412_29438 = state_29405__$1;
(statearr_29412_29438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (12))){
var state_29405__$1 = state_29405;
var statearr_29413_29439 = state_29405__$1;
(statearr_29413_29439[(2)] = null);

(statearr_29413_29439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var inst_29382 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29382)){
var statearr_29414_29440 = state_29405__$1;
(statearr_29414_29440[(1)] = (4));

} else {
var statearr_29415_29441 = state_29405__$1;
(statearr_29415_29441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (11))){
var inst_29396 = cljs.core.async.close_BANG_.call(null,ch);
var state_29405__$1 = state_29405;
var statearr_29416_29442 = state_29405__$1;
(statearr_29416_29442[(2)] = inst_29396);

(statearr_29416_29442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (9))){
var state_29405__$1 = state_29405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29417_29443 = state_29405__$1;
(statearr_29417_29443[(1)] = (11));

} else {
var statearr_29418_29444 = state_29405__$1;
(statearr_29418_29444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29382 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29419_29445 = state_29405__$1;
(statearr_29419_29445[(2)] = inst_29382);

(statearr_29419_29445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29420_29446 = state_29405__$1;
(statearr_29420_29446[(2)] = inst_29401);

(statearr_29420_29446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29382 = (state_29405[(7)]);
var inst_29392 = cljs.core.next.call(null,inst_29382);
var inst_29382__$1 = inst_29392;
var state_29405__$1 = (function (){var statearr_29421 = state_29405;
(statearr_29421[(7)] = inst_29382__$1);

return statearr_29421;
})();
var statearr_29422_29447 = state_29405__$1;
(statearr_29422_29447[(2)] = null);

(statearr_29422_29447[(1)] = (2));


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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_29426 = [null,null,null,null,null,null,null,null];
(statearr_29426[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_29426[(1)] = (1));

return statearr_29426;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_29405){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29427){if((e29427 instanceof Object)){
var ex__28469__auto__ = e29427;
var statearr_29428_29448 = state_29405;
(statearr_29428_29448[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29405;
state_29405 = G__29449;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_29429 = f__28578__auto__.call(null);
(statearr_29429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
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
var x__25423__auto__ = (((_ == null))?null:_);
var m__25424__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,_);
} else {
var m__25424__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,_);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29675 = (function (mult,ch,cs,meta29676){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29676 = meta29676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29677,meta29676__$1){
var self__ = this;
var _29677__$1 = this;
return (new cljs.core.async.t_cljs$core$async29675(self__.mult,self__.ch,self__.cs,meta29676__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29677){
var self__ = this;
var _29677__$1 = this;
return self__.meta29676;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29676","meta29676",-878467886,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29675";

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29675");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29675 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29675(mult__$1,ch__$1,cs__$1,meta29676){
return (new cljs.core.async.t_cljs$core$async29675(mult__$1,ch__$1,cs__$1,meta29676));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29675(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28577__auto___29900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (7))){
var inst_29808 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29814_29901 = state_29812__$1;
(statearr_29814_29901[(2)] = inst_29808);

(statearr_29814_29901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (20))){
var inst_29711 = (state_29812[(7)]);
var inst_29723 = cljs.core.first.call(null,inst_29711);
var inst_29724 = cljs.core.nth.call(null,inst_29723,(0),null);
var inst_29725 = cljs.core.nth.call(null,inst_29723,(1),null);
var state_29812__$1 = (function (){var statearr_29815 = state_29812;
(statearr_29815[(8)] = inst_29724);

return statearr_29815;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29816_29902 = state_29812__$1;
(statearr_29816_29902[(1)] = (22));

} else {
var statearr_29817_29903 = state_29812__$1;
(statearr_29817_29903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (27))){
var inst_29680 = (state_29812[(9)]);
var inst_29755 = (state_29812[(10)]);
var inst_29760 = (state_29812[(11)]);
var inst_29753 = (state_29812[(12)]);
var inst_29760__$1 = cljs.core._nth.call(null,inst_29753,inst_29755);
var inst_29761 = cljs.core.async.put_BANG_.call(null,inst_29760__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29818 = state_29812;
(statearr_29818[(11)] = inst_29760__$1);

return statearr_29818;
})();
if(cljs.core.truth_(inst_29761)){
var statearr_29819_29904 = state_29812__$1;
(statearr_29819_29904[(1)] = (30));

} else {
var statearr_29820_29905 = state_29812__$1;
(statearr_29820_29905[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (1))){
var state_29812__$1 = state_29812;
var statearr_29821_29906 = state_29812__$1;
(statearr_29821_29906[(2)] = null);

(statearr_29821_29906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (24))){
var inst_29711 = (state_29812[(7)]);
var inst_29730 = (state_29812[(2)]);
var inst_29731 = cljs.core.next.call(null,inst_29711);
var inst_29689 = inst_29731;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29822 = state_29812;
(statearr_29822[(13)] = inst_29692);

(statearr_29822[(14)] = inst_29730);

(statearr_29822[(15)] = inst_29690);

(statearr_29822[(16)] = inst_29689);

(statearr_29822[(17)] = inst_29691);

return statearr_29822;
})();
var statearr_29823_29907 = state_29812__$1;
(statearr_29823_29907[(2)] = null);

(statearr_29823_29907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (39))){
var state_29812__$1 = state_29812;
var statearr_29827_29908 = state_29812__$1;
(statearr_29827_29908[(2)] = null);

(statearr_29827_29908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (4))){
var inst_29680 = (state_29812[(9)]);
var inst_29680__$1 = (state_29812[(2)]);
var inst_29681 = (inst_29680__$1 == null);
var state_29812__$1 = (function (){var statearr_29828 = state_29812;
(statearr_29828[(9)] = inst_29680__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29681)){
var statearr_29829_29909 = state_29812__$1;
(statearr_29829_29909[(1)] = (5));

} else {
var statearr_29830_29910 = state_29812__$1;
(statearr_29830_29910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (15))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29689 = (state_29812[(16)]);
var inst_29691 = (state_29812[(17)]);
var inst_29707 = (state_29812[(2)]);
var inst_29708 = (inst_29692 + (1));
var tmp29824 = inst_29690;
var tmp29825 = inst_29689;
var tmp29826 = inst_29691;
var inst_29689__$1 = tmp29825;
var inst_29690__$1 = tmp29824;
var inst_29691__$1 = tmp29826;
var inst_29692__$1 = inst_29708;
var state_29812__$1 = (function (){var statearr_29831 = state_29812;
(statearr_29831[(13)] = inst_29692__$1);

(statearr_29831[(15)] = inst_29690__$1);

(statearr_29831[(16)] = inst_29689__$1);

(statearr_29831[(17)] = inst_29691__$1);

(statearr_29831[(18)] = inst_29707);

return statearr_29831;
})();
var statearr_29832_29911 = state_29812__$1;
(statearr_29832_29911[(2)] = null);

(statearr_29832_29911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (21))){
var inst_29734 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29836_29912 = state_29812__$1;
(statearr_29836_29912[(2)] = inst_29734);

(statearr_29836_29912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (31))){
var inst_29760 = (state_29812[(11)]);
var inst_29764 = done.call(null,null);
var inst_29765 = cljs.core.async.untap_STAR_.call(null,m,inst_29760);
var state_29812__$1 = (function (){var statearr_29837 = state_29812;
(statearr_29837[(19)] = inst_29764);

return statearr_29837;
})();
var statearr_29838_29913 = state_29812__$1;
(statearr_29838_29913[(2)] = inst_29765);

(statearr_29838_29913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (32))){
var inst_29755 = (state_29812[(10)]);
var inst_29752 = (state_29812[(20)]);
var inst_29754 = (state_29812[(21)]);
var inst_29753 = (state_29812[(12)]);
var inst_29767 = (state_29812[(2)]);
var inst_29768 = (inst_29755 + (1));
var tmp29833 = inst_29752;
var tmp29834 = inst_29754;
var tmp29835 = inst_29753;
var inst_29752__$1 = tmp29833;
var inst_29753__$1 = tmp29835;
var inst_29754__$1 = tmp29834;
var inst_29755__$1 = inst_29768;
var state_29812__$1 = (function (){var statearr_29839 = state_29812;
(statearr_29839[(10)] = inst_29755__$1);

(statearr_29839[(22)] = inst_29767);

(statearr_29839[(20)] = inst_29752__$1);

(statearr_29839[(21)] = inst_29754__$1);

(statearr_29839[(12)] = inst_29753__$1);

return statearr_29839;
})();
var statearr_29840_29914 = state_29812__$1;
(statearr_29840_29914[(2)] = null);

(statearr_29840_29914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (40))){
var inst_29780 = (state_29812[(23)]);
var inst_29784 = done.call(null,null);
var inst_29785 = cljs.core.async.untap_STAR_.call(null,m,inst_29780);
var state_29812__$1 = (function (){var statearr_29841 = state_29812;
(statearr_29841[(24)] = inst_29784);

return statearr_29841;
})();
var statearr_29842_29915 = state_29812__$1;
(statearr_29842_29915[(2)] = inst_29785);

(statearr_29842_29915[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (33))){
var inst_29771 = (state_29812[(25)]);
var inst_29773 = cljs.core.chunked_seq_QMARK_.call(null,inst_29771);
var state_29812__$1 = state_29812;
if(inst_29773){
var statearr_29843_29916 = state_29812__$1;
(statearr_29843_29916[(1)] = (36));

} else {
var statearr_29844_29917 = state_29812__$1;
(statearr_29844_29917[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (13))){
var inst_29701 = (state_29812[(26)]);
var inst_29704 = cljs.core.async.close_BANG_.call(null,inst_29701);
var state_29812__$1 = state_29812;
var statearr_29845_29918 = state_29812__$1;
(statearr_29845_29918[(2)] = inst_29704);

(statearr_29845_29918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (22))){
var inst_29724 = (state_29812[(8)]);
var inst_29727 = cljs.core.async.close_BANG_.call(null,inst_29724);
var state_29812__$1 = state_29812;
var statearr_29846_29919 = state_29812__$1;
(statearr_29846_29919[(2)] = inst_29727);

(statearr_29846_29919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (36))){
var inst_29771 = (state_29812[(25)]);
var inst_29775 = cljs.core.chunk_first.call(null,inst_29771);
var inst_29776 = cljs.core.chunk_rest.call(null,inst_29771);
var inst_29777 = cljs.core.count.call(null,inst_29775);
var inst_29752 = inst_29776;
var inst_29753 = inst_29775;
var inst_29754 = inst_29777;
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29847 = state_29812;
(statearr_29847[(10)] = inst_29755);

(statearr_29847[(20)] = inst_29752);

(statearr_29847[(21)] = inst_29754);

(statearr_29847[(12)] = inst_29753);

return statearr_29847;
})();
var statearr_29848_29920 = state_29812__$1;
(statearr_29848_29920[(2)] = null);

(statearr_29848_29920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (41))){
var inst_29771 = (state_29812[(25)]);
var inst_29787 = (state_29812[(2)]);
var inst_29788 = cljs.core.next.call(null,inst_29771);
var inst_29752 = inst_29788;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29849 = state_29812;
(statearr_29849[(10)] = inst_29755);

(statearr_29849[(20)] = inst_29752);

(statearr_29849[(27)] = inst_29787);

(statearr_29849[(21)] = inst_29754);

(statearr_29849[(12)] = inst_29753);

return statearr_29849;
})();
var statearr_29850_29921 = state_29812__$1;
(statearr_29850_29921[(2)] = null);

(statearr_29850_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (43))){
var state_29812__$1 = state_29812;
var statearr_29851_29922 = state_29812__$1;
(statearr_29851_29922[(2)] = null);

(statearr_29851_29922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (29))){
var inst_29796 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29852_29923 = state_29812__$1;
(statearr_29852_29923[(2)] = inst_29796);

(statearr_29852_29923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (44))){
var inst_29805 = (state_29812[(2)]);
var state_29812__$1 = (function (){var statearr_29853 = state_29812;
(statearr_29853[(28)] = inst_29805);

return statearr_29853;
})();
var statearr_29854_29924 = state_29812__$1;
(statearr_29854_29924[(2)] = null);

(statearr_29854_29924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (6))){
var inst_29744 = (state_29812[(29)]);
var inst_29743 = cljs.core.deref.call(null,cs);
var inst_29744__$1 = cljs.core.keys.call(null,inst_29743);
var inst_29745 = cljs.core.count.call(null,inst_29744__$1);
var inst_29746 = cljs.core.reset_BANG_.call(null,dctr,inst_29745);
var inst_29751 = cljs.core.seq.call(null,inst_29744__$1);
var inst_29752 = inst_29751;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29855 = state_29812;
(statearr_29855[(30)] = inst_29746);

(statearr_29855[(10)] = inst_29755);

(statearr_29855[(20)] = inst_29752);

(statearr_29855[(29)] = inst_29744__$1);

(statearr_29855[(21)] = inst_29754);

(statearr_29855[(12)] = inst_29753);

return statearr_29855;
})();
var statearr_29856_29925 = state_29812__$1;
(statearr_29856_29925[(2)] = null);

(statearr_29856_29925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (28))){
var inst_29771 = (state_29812[(25)]);
var inst_29752 = (state_29812[(20)]);
var inst_29771__$1 = cljs.core.seq.call(null,inst_29752);
var state_29812__$1 = (function (){var statearr_29857 = state_29812;
(statearr_29857[(25)] = inst_29771__$1);

return statearr_29857;
})();
if(inst_29771__$1){
var statearr_29858_29926 = state_29812__$1;
(statearr_29858_29926[(1)] = (33));

} else {
var statearr_29859_29927 = state_29812__$1;
(statearr_29859_29927[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (25))){
var inst_29755 = (state_29812[(10)]);
var inst_29754 = (state_29812[(21)]);
var inst_29757 = (inst_29755 < inst_29754);
var inst_29758 = inst_29757;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29758)){
var statearr_29860_29928 = state_29812__$1;
(statearr_29860_29928[(1)] = (27));

} else {
var statearr_29861_29929 = state_29812__$1;
(statearr_29861_29929[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (34))){
var state_29812__$1 = state_29812;
var statearr_29862_29930 = state_29812__$1;
(statearr_29862_29930[(2)] = null);

(statearr_29862_29930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (17))){
var state_29812__$1 = state_29812;
var statearr_29863_29931 = state_29812__$1;
(statearr_29863_29931[(2)] = null);

(statearr_29863_29931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (3))){
var inst_29810 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29812__$1,inst_29810);
} else {
if((state_val_29813 === (12))){
var inst_29739 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29864_29932 = state_29812__$1;
(statearr_29864_29932[(2)] = inst_29739);

(statearr_29864_29932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (2))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(4),ch);
} else {
if((state_val_29813 === (23))){
var state_29812__$1 = state_29812;
var statearr_29865_29933 = state_29812__$1;
(statearr_29865_29933[(2)] = null);

(statearr_29865_29933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (35))){
var inst_29794 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29866_29934 = state_29812__$1;
(statearr_29866_29934[(2)] = inst_29794);

(statearr_29866_29934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (19))){
var inst_29711 = (state_29812[(7)]);
var inst_29715 = cljs.core.chunk_first.call(null,inst_29711);
var inst_29716 = cljs.core.chunk_rest.call(null,inst_29711);
var inst_29717 = cljs.core.count.call(null,inst_29715);
var inst_29689 = inst_29716;
var inst_29690 = inst_29715;
var inst_29691 = inst_29717;
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29867 = state_29812;
(statearr_29867[(13)] = inst_29692);

(statearr_29867[(15)] = inst_29690);

(statearr_29867[(16)] = inst_29689);

(statearr_29867[(17)] = inst_29691);

return statearr_29867;
})();
var statearr_29868_29935 = state_29812__$1;
(statearr_29868_29935[(2)] = null);

(statearr_29868_29935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (11))){
var inst_29689 = (state_29812[(16)]);
var inst_29711 = (state_29812[(7)]);
var inst_29711__$1 = cljs.core.seq.call(null,inst_29689);
var state_29812__$1 = (function (){var statearr_29869 = state_29812;
(statearr_29869[(7)] = inst_29711__$1);

return statearr_29869;
})();
if(inst_29711__$1){
var statearr_29870_29936 = state_29812__$1;
(statearr_29870_29936[(1)] = (16));

} else {
var statearr_29871_29937 = state_29812__$1;
(statearr_29871_29937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (9))){
var inst_29741 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29872_29938 = state_29812__$1;
(statearr_29872_29938[(2)] = inst_29741);

(statearr_29872_29938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (5))){
var inst_29687 = cljs.core.deref.call(null,cs);
var inst_29688 = cljs.core.seq.call(null,inst_29687);
var inst_29689 = inst_29688;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29873 = state_29812;
(statearr_29873[(13)] = inst_29692);

(statearr_29873[(15)] = inst_29690);

(statearr_29873[(16)] = inst_29689);

(statearr_29873[(17)] = inst_29691);

return statearr_29873;
})();
var statearr_29874_29939 = state_29812__$1;
(statearr_29874_29939[(2)] = null);

(statearr_29874_29939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (14))){
var state_29812__$1 = state_29812;
var statearr_29875_29940 = state_29812__$1;
(statearr_29875_29940[(2)] = null);

(statearr_29875_29940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (45))){
var inst_29802 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29876_29941 = state_29812__$1;
(statearr_29876_29941[(2)] = inst_29802);

(statearr_29876_29941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (26))){
var inst_29744 = (state_29812[(29)]);
var inst_29798 = (state_29812[(2)]);
var inst_29799 = cljs.core.seq.call(null,inst_29744);
var state_29812__$1 = (function (){var statearr_29877 = state_29812;
(statearr_29877[(31)] = inst_29798);

return statearr_29877;
})();
if(inst_29799){
var statearr_29878_29942 = state_29812__$1;
(statearr_29878_29942[(1)] = (42));

} else {
var statearr_29879_29943 = state_29812__$1;
(statearr_29879_29943[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (16))){
var inst_29711 = (state_29812[(7)]);
var inst_29713 = cljs.core.chunked_seq_QMARK_.call(null,inst_29711);
var state_29812__$1 = state_29812;
if(inst_29713){
var statearr_29880_29944 = state_29812__$1;
(statearr_29880_29944[(1)] = (19));

} else {
var statearr_29881_29945 = state_29812__$1;
(statearr_29881_29945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (38))){
var inst_29791 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29882_29946 = state_29812__$1;
(statearr_29882_29946[(2)] = inst_29791);

(statearr_29882_29946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (30))){
var state_29812__$1 = state_29812;
var statearr_29883_29947 = state_29812__$1;
(statearr_29883_29947[(2)] = null);

(statearr_29883_29947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (10))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29700 = cljs.core._nth.call(null,inst_29690,inst_29692);
var inst_29701 = cljs.core.nth.call(null,inst_29700,(0),null);
var inst_29702 = cljs.core.nth.call(null,inst_29700,(1),null);
var state_29812__$1 = (function (){var statearr_29884 = state_29812;
(statearr_29884[(26)] = inst_29701);

return statearr_29884;
})();
if(cljs.core.truth_(inst_29702)){
var statearr_29885_29948 = state_29812__$1;
(statearr_29885_29948[(1)] = (13));

} else {
var statearr_29886_29949 = state_29812__$1;
(statearr_29886_29949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (18))){
var inst_29737 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29887_29950 = state_29812__$1;
(statearr_29887_29950[(2)] = inst_29737);

(statearr_29887_29950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (42))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(45),dchan);
} else {
if((state_val_29813 === (37))){
var inst_29771 = (state_29812[(25)]);
var inst_29680 = (state_29812[(9)]);
var inst_29780 = (state_29812[(23)]);
var inst_29780__$1 = cljs.core.first.call(null,inst_29771);
var inst_29781 = cljs.core.async.put_BANG_.call(null,inst_29780__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29888 = state_29812;
(statearr_29888[(23)] = inst_29780__$1);

return statearr_29888;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29889_29951 = state_29812__$1;
(statearr_29889_29951[(1)] = (39));

} else {
var statearr_29890_29952 = state_29812__$1;
(statearr_29890_29952[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (8))){
var inst_29692 = (state_29812[(13)]);
var inst_29691 = (state_29812[(17)]);
var inst_29694 = (inst_29692 < inst_29691);
var inst_29695 = inst_29694;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29695)){
var statearr_29891_29953 = state_29812__$1;
(statearr_29891_29953[(1)] = (10));

} else {
var statearr_29892_29954 = state_29812__$1;
(statearr_29892_29954[(1)] = (11));

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
});})(c__28577__auto___29900,cs,m,dchan,dctr,done))
;
return ((function (switch__28465__auto__,c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28466__auto__ = null;
var cljs$core$async$mult_$_state_machine__28466__auto____0 = (function (){
var statearr_29896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29896[(0)] = cljs$core$async$mult_$_state_machine__28466__auto__);

(statearr_29896[(1)] = (1));

return statearr_29896;
});
var cljs$core$async$mult_$_state_machine__28466__auto____1 = (function (state_29812){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29897){if((e29897 instanceof Object)){
var ex__28469__auto__ = e29897;
var statearr_29898_29955 = state_29812;
(statearr_29898_29955[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29956 = state_29812;
state_29812 = G__29956;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28466__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28466__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28466__auto____0;
cljs$core$async$mult_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28466__auto____1;
return cljs$core$async$mult_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29900,cs,m,dchan,dctr,done))
})();
var state__28579__auto__ = (function (){var statearr_29899 = f__28578__auto__.call(null);
(statearr_29899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29900);

return statearr_29899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29900,cs,m,dchan,dctr,done))
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
var args29957 = [];
var len__25835__auto___29960 = arguments.length;
var i__25836__auto___29961 = (0);
while(true){
if((i__25836__auto___29961 < len__25835__auto___29960)){
args29957.push((arguments[i__25836__auto___29961]));

var G__29962 = (i__25836__auto___29961 + (1));
i__25836__auto___29961 = G__29962;
continue;
} else {
}
break;
}

var G__29959 = args29957.length;
switch (G__29959) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29957.length)].join('')));

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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,state_map);
} else {
var m__25424__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,state_map);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,mode);
} else {
var m__25424__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29974 = arguments.length;
var i__25836__auto___29975 = (0);
while(true){
if((i__25836__auto___29975 < len__25835__auto___29974)){
args__25842__auto__.push((arguments[i__25836__auto___29975]));

var G__29976 = (i__25836__auto___29975 + (1));
i__25836__auto___29975 = G__29976;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29968){
var map__29969 = p__29968;
var map__29969__$1 = ((((!((map__29969 == null)))?((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var opts = map__29969__$1;
var statearr_29971_29977 = state;
(statearr_29971_29977[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29969,map__29969__$1,opts){
return (function (val){
var statearr_29972_29978 = state;
(statearr_29972_29978[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29969,map__29969__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29973_29979 = state;
(statearr_29973_29979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29964){
var G__29965 = cljs.core.first.call(null,seq29964);
var seq29964__$1 = cljs.core.next.call(null,seq29964);
var G__29966 = cljs.core.first.call(null,seq29964__$1);
var seq29964__$2 = cljs.core.next.call(null,seq29964__$1);
var G__29967 = cljs.core.first.call(null,seq29964__$2);
var seq29964__$3 = cljs.core.next.call(null,seq29964__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29965,G__29966,G__29967,seq29964__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30145 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30146){
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
this.meta30146 = meta30146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30147,meta30146__$1){
var self__ = this;
var _30147__$1 = this;
return (new cljs.core.async.t_cljs$core$async30145(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30146__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30147){
var self__ = this;
var _30147__$1 = this;
return self__.meta30146;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30146","meta30146",257624596,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30145";

cljs.core.async.t_cljs$core$async30145.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30145");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30145 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30145(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30146){
return (new cljs.core.async.t_cljs$core$async30145(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30146));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30145(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28577__auto___30310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30247){
var state_val_30248 = (state_30247[(1)]);
if((state_val_30248 === (7))){
var inst_30163 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30249_30311 = state_30247__$1;
(statearr_30249_30311[(2)] = inst_30163);

(statearr_30249_30311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (20))){
var inst_30175 = (state_30247[(7)]);
var state_30247__$1 = state_30247;
var statearr_30250_30312 = state_30247__$1;
(statearr_30250_30312[(2)] = inst_30175);

(statearr_30250_30312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (27))){
var state_30247__$1 = state_30247;
var statearr_30251_30313 = state_30247__$1;
(statearr_30251_30313[(2)] = null);

(statearr_30251_30313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (1))){
var inst_30151 = (state_30247[(8)]);
var inst_30151__$1 = calc_state.call(null);
var inst_30153 = (inst_30151__$1 == null);
var inst_30154 = cljs.core.not.call(null,inst_30153);
var state_30247__$1 = (function (){var statearr_30252 = state_30247;
(statearr_30252[(8)] = inst_30151__$1);

return statearr_30252;
})();
if(inst_30154){
var statearr_30253_30314 = state_30247__$1;
(statearr_30253_30314[(1)] = (2));

} else {
var statearr_30254_30315 = state_30247__$1;
(statearr_30254_30315[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (24))){
var inst_30221 = (state_30247[(9)]);
var inst_30198 = (state_30247[(10)]);
var inst_30207 = (state_30247[(11)]);
var inst_30221__$1 = inst_30198.call(null,inst_30207);
var state_30247__$1 = (function (){var statearr_30255 = state_30247;
(statearr_30255[(9)] = inst_30221__$1);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30221__$1)){
var statearr_30256_30316 = state_30247__$1;
(statearr_30256_30316[(1)] = (29));

} else {
var statearr_30257_30317 = state_30247__$1;
(statearr_30257_30317[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (4))){
var inst_30166 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30166)){
var statearr_30258_30318 = state_30247__$1;
(statearr_30258_30318[(1)] = (8));

} else {
var statearr_30259_30319 = state_30247__$1;
(statearr_30259_30319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (15))){
var inst_30192 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30192)){
var statearr_30260_30320 = state_30247__$1;
(statearr_30260_30320[(1)] = (19));

} else {
var statearr_30261_30321 = state_30247__$1;
(statearr_30261_30321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (21))){
var inst_30197 = (state_30247[(12)]);
var inst_30197__$1 = (state_30247[(2)]);
var inst_30198 = cljs.core.get.call(null,inst_30197__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30199 = cljs.core.get.call(null,inst_30197__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30200 = cljs.core.get.call(null,inst_30197__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30247__$1 = (function (){var statearr_30262 = state_30247;
(statearr_30262[(12)] = inst_30197__$1);

(statearr_30262[(10)] = inst_30198);

(statearr_30262[(13)] = inst_30199);

return statearr_30262;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30247__$1,(22),inst_30200);
} else {
if((state_val_30248 === (31))){
var inst_30229 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30229)){
var statearr_30263_30322 = state_30247__$1;
(statearr_30263_30322[(1)] = (32));

} else {
var statearr_30264_30323 = state_30247__$1;
(statearr_30264_30323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (32))){
var inst_30206 = (state_30247[(14)]);
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30247__$1,(35),out,inst_30206);
} else {
if((state_val_30248 === (33))){
var inst_30197 = (state_30247[(12)]);
var inst_30175 = inst_30197;
var state_30247__$1 = (function (){var statearr_30265 = state_30247;
(statearr_30265[(7)] = inst_30175);

return statearr_30265;
})();
var statearr_30266_30324 = state_30247__$1;
(statearr_30266_30324[(2)] = null);

(statearr_30266_30324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (13))){
var inst_30175 = (state_30247[(7)]);
var inst_30182 = inst_30175.cljs$lang$protocol_mask$partition0$;
var inst_30183 = (inst_30182 & (64));
var inst_30184 = inst_30175.cljs$core$ISeq$;
var inst_30185 = (inst_30183) || (inst_30184);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30185)){
var statearr_30267_30325 = state_30247__$1;
(statearr_30267_30325[(1)] = (16));

} else {
var statearr_30268_30326 = state_30247__$1;
(statearr_30268_30326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (22))){
var inst_30206 = (state_30247[(14)]);
var inst_30207 = (state_30247[(11)]);
var inst_30205 = (state_30247[(2)]);
var inst_30206__$1 = cljs.core.nth.call(null,inst_30205,(0),null);
var inst_30207__$1 = cljs.core.nth.call(null,inst_30205,(1),null);
var inst_30208 = (inst_30206__$1 == null);
var inst_30209 = cljs.core._EQ_.call(null,inst_30207__$1,change);
var inst_30210 = (inst_30208) || (inst_30209);
var state_30247__$1 = (function (){var statearr_30269 = state_30247;
(statearr_30269[(14)] = inst_30206__$1);

(statearr_30269[(11)] = inst_30207__$1);

return statearr_30269;
})();
if(cljs.core.truth_(inst_30210)){
var statearr_30270_30327 = state_30247__$1;
(statearr_30270_30327[(1)] = (23));

} else {
var statearr_30271_30328 = state_30247__$1;
(statearr_30271_30328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (36))){
var inst_30197 = (state_30247[(12)]);
var inst_30175 = inst_30197;
var state_30247__$1 = (function (){var statearr_30272 = state_30247;
(statearr_30272[(7)] = inst_30175);

return statearr_30272;
})();
var statearr_30273_30329 = state_30247__$1;
(statearr_30273_30329[(2)] = null);

(statearr_30273_30329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (29))){
var inst_30221 = (state_30247[(9)]);
var state_30247__$1 = state_30247;
var statearr_30274_30330 = state_30247__$1;
(statearr_30274_30330[(2)] = inst_30221);

(statearr_30274_30330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (6))){
var state_30247__$1 = state_30247;
var statearr_30275_30331 = state_30247__$1;
(statearr_30275_30331[(2)] = false);

(statearr_30275_30331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (28))){
var inst_30217 = (state_30247[(2)]);
var inst_30218 = calc_state.call(null);
var inst_30175 = inst_30218;
var state_30247__$1 = (function (){var statearr_30276 = state_30247;
(statearr_30276[(7)] = inst_30175);

(statearr_30276[(15)] = inst_30217);

return statearr_30276;
})();
var statearr_30277_30332 = state_30247__$1;
(statearr_30277_30332[(2)] = null);

(statearr_30277_30332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (25))){
var inst_30243 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30278_30333 = state_30247__$1;
(statearr_30278_30333[(2)] = inst_30243);

(statearr_30278_30333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (34))){
var inst_30241 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30279_30334 = state_30247__$1;
(statearr_30279_30334[(2)] = inst_30241);

(statearr_30279_30334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (17))){
var state_30247__$1 = state_30247;
var statearr_30280_30335 = state_30247__$1;
(statearr_30280_30335[(2)] = false);

(statearr_30280_30335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (3))){
var state_30247__$1 = state_30247;
var statearr_30281_30336 = state_30247__$1;
(statearr_30281_30336[(2)] = false);

(statearr_30281_30336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (12))){
var inst_30245 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30247__$1,inst_30245);
} else {
if((state_val_30248 === (2))){
var inst_30151 = (state_30247[(8)]);
var inst_30156 = inst_30151.cljs$lang$protocol_mask$partition0$;
var inst_30157 = (inst_30156 & (64));
var inst_30158 = inst_30151.cljs$core$ISeq$;
var inst_30159 = (inst_30157) || (inst_30158);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30159)){
var statearr_30282_30337 = state_30247__$1;
(statearr_30282_30337[(1)] = (5));

} else {
var statearr_30283_30338 = state_30247__$1;
(statearr_30283_30338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (23))){
var inst_30206 = (state_30247[(14)]);
var inst_30212 = (inst_30206 == null);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30212)){
var statearr_30284_30339 = state_30247__$1;
(statearr_30284_30339[(1)] = (26));

} else {
var statearr_30285_30340 = state_30247__$1;
(statearr_30285_30340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (35))){
var inst_30232 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30232)){
var statearr_30286_30341 = state_30247__$1;
(statearr_30286_30341[(1)] = (36));

} else {
var statearr_30287_30342 = state_30247__$1;
(statearr_30287_30342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (19))){
var inst_30175 = (state_30247[(7)]);
var inst_30194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30175);
var state_30247__$1 = state_30247;
var statearr_30288_30343 = state_30247__$1;
(statearr_30288_30343[(2)] = inst_30194);

(statearr_30288_30343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (11))){
var inst_30175 = (state_30247[(7)]);
var inst_30179 = (inst_30175 == null);
var inst_30180 = cljs.core.not.call(null,inst_30179);
var state_30247__$1 = state_30247;
if(inst_30180){
var statearr_30289_30344 = state_30247__$1;
(statearr_30289_30344[(1)] = (13));

} else {
var statearr_30290_30345 = state_30247__$1;
(statearr_30290_30345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (9))){
var inst_30151 = (state_30247[(8)]);
var state_30247__$1 = state_30247;
var statearr_30291_30346 = state_30247__$1;
(statearr_30291_30346[(2)] = inst_30151);

(statearr_30291_30346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (5))){
var state_30247__$1 = state_30247;
var statearr_30292_30347 = state_30247__$1;
(statearr_30292_30347[(2)] = true);

(statearr_30292_30347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (14))){
var state_30247__$1 = state_30247;
var statearr_30293_30348 = state_30247__$1;
(statearr_30293_30348[(2)] = false);

(statearr_30293_30348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (26))){
var inst_30207 = (state_30247[(11)]);
var inst_30214 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30207);
var state_30247__$1 = state_30247;
var statearr_30294_30349 = state_30247__$1;
(statearr_30294_30349[(2)] = inst_30214);

(statearr_30294_30349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (16))){
var state_30247__$1 = state_30247;
var statearr_30295_30350 = state_30247__$1;
(statearr_30295_30350[(2)] = true);

(statearr_30295_30350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (38))){
var inst_30237 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30296_30351 = state_30247__$1;
(statearr_30296_30351[(2)] = inst_30237);

(statearr_30296_30351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (30))){
var inst_30198 = (state_30247[(10)]);
var inst_30199 = (state_30247[(13)]);
var inst_30207 = (state_30247[(11)]);
var inst_30224 = cljs.core.empty_QMARK_.call(null,inst_30198);
var inst_30225 = inst_30199.call(null,inst_30207);
var inst_30226 = cljs.core.not.call(null,inst_30225);
var inst_30227 = (inst_30224) && (inst_30226);
var state_30247__$1 = state_30247;
var statearr_30297_30352 = state_30247__$1;
(statearr_30297_30352[(2)] = inst_30227);

(statearr_30297_30352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (10))){
var inst_30151 = (state_30247[(8)]);
var inst_30171 = (state_30247[(2)]);
var inst_30172 = cljs.core.get.call(null,inst_30171,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30173 = cljs.core.get.call(null,inst_30171,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30174 = cljs.core.get.call(null,inst_30171,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30175 = inst_30151;
var state_30247__$1 = (function (){var statearr_30298 = state_30247;
(statearr_30298[(16)] = inst_30174);

(statearr_30298[(17)] = inst_30173);

(statearr_30298[(7)] = inst_30175);

(statearr_30298[(18)] = inst_30172);

return statearr_30298;
})();
var statearr_30299_30353 = state_30247__$1;
(statearr_30299_30353[(2)] = null);

(statearr_30299_30353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (18))){
var inst_30189 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30300_30354 = state_30247__$1;
(statearr_30300_30354[(2)] = inst_30189);

(statearr_30300_30354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (37))){
var state_30247__$1 = state_30247;
var statearr_30301_30355 = state_30247__$1;
(statearr_30301_30355[(2)] = null);

(statearr_30301_30355[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (8))){
var inst_30151 = (state_30247[(8)]);
var inst_30168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30151);
var state_30247__$1 = state_30247;
var statearr_30302_30356 = state_30247__$1;
(statearr_30302_30356[(2)] = inst_30168);

(statearr_30302_30356[(1)] = (10));


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
});})(c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28465__auto__,c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28466__auto__ = null;
var cljs$core$async$mix_$_state_machine__28466__auto____0 = (function (){
var statearr_30306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30306[(0)] = cljs$core$async$mix_$_state_machine__28466__auto__);

(statearr_30306[(1)] = (1));

return statearr_30306;
});
var cljs$core$async$mix_$_state_machine__28466__auto____1 = (function (state_30247){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30307){if((e30307 instanceof Object)){
var ex__28469__auto__ = e30307;
var statearr_30308_30357 = state_30247;
(statearr_30308_30357[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30247;
state_30247 = G__30358;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28466__auto__ = function(state_30247){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28466__auto____1.call(this,state_30247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28466__auto____0;
cljs$core$async$mix_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28466__auto____1;
return cljs$core$async$mix_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28579__auto__ = (function (){var statearr_30309 = f__28578__auto__.call(null);
(statearr_30309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30310);

return statearr_30309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30359 = [];
var len__25835__auto___30362 = arguments.length;
var i__25836__auto___30363 = (0);
while(true){
if((i__25836__auto___30363 < len__25835__auto___30362)){
args30359.push((arguments[i__25836__auto___30363]));

var G__30364 = (i__25836__auto___30363 + (1));
i__25836__auto___30363 = G__30364;
continue;
} else {
}
break;
}

var G__30361 = args30359.length;
switch (G__30361) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30359.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p);
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v);
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
var args30367 = [];
var len__25835__auto___30492 = arguments.length;
var i__25836__auto___30493 = (0);
while(true){
if((i__25836__auto___30493 < len__25835__auto___30492)){
args30367.push((arguments[i__25836__auto___30493]));

var G__30494 = (i__25836__auto___30493 + (1));
i__25836__auto___30493 = G__30494;
continue;
} else {
}
break;
}

var G__30369 = args30367.length;
switch (G__30369) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30367.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24760__auto__,mults){
return (function (p1__30366_SHARP_){
if(cljs.core.truth_(p1__30366_SHARP_.call(null,topic))){
return p1__30366_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30366_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30371 = meta30371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30372,meta30371__$1){
var self__ = this;
var _30372__$1 = this;
return (new cljs.core.async.t_cljs$core$async30370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30371__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30372){
var self__ = this;
var _30372__$1 = this;
return self__.meta30371;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30371","meta30371",-409997101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30370";

cljs.core.async.t_cljs$core$async30370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30370");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30370 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30371){
return (new cljs.core.async.t_cljs$core$async30370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30371));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28577__auto___30496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30496,mults,ensure_mult,p){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30496,mults,ensure_mult,p){
return (function (state_30444){
var state_val_30445 = (state_30444[(1)]);
if((state_val_30445 === (7))){
var inst_30440 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30446_30497 = state_30444__$1;
(statearr_30446_30497[(2)] = inst_30440);

(statearr_30446_30497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (20))){
var state_30444__$1 = state_30444;
var statearr_30447_30498 = state_30444__$1;
(statearr_30447_30498[(2)] = null);

(statearr_30447_30498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (1))){
var state_30444__$1 = state_30444;
var statearr_30448_30499 = state_30444__$1;
(statearr_30448_30499[(2)] = null);

(statearr_30448_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (24))){
var inst_30423 = (state_30444[(7)]);
var inst_30432 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30423);
var state_30444__$1 = state_30444;
var statearr_30449_30500 = state_30444__$1;
(statearr_30449_30500[(2)] = inst_30432);

(statearr_30449_30500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (4))){
var inst_30375 = (state_30444[(8)]);
var inst_30375__$1 = (state_30444[(2)]);
var inst_30376 = (inst_30375__$1 == null);
var state_30444__$1 = (function (){var statearr_30450 = state_30444;
(statearr_30450[(8)] = inst_30375__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30376)){
var statearr_30451_30501 = state_30444__$1;
(statearr_30451_30501[(1)] = (5));

} else {
var statearr_30452_30502 = state_30444__$1;
(statearr_30452_30502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (15))){
var inst_30417 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30453_30503 = state_30444__$1;
(statearr_30453_30503[(2)] = inst_30417);

(statearr_30453_30503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (21))){
var inst_30437 = (state_30444[(2)]);
var state_30444__$1 = (function (){var statearr_30454 = state_30444;
(statearr_30454[(9)] = inst_30437);

return statearr_30454;
})();
var statearr_30455_30504 = state_30444__$1;
(statearr_30455_30504[(2)] = null);

(statearr_30455_30504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (13))){
var inst_30399 = (state_30444[(10)]);
var inst_30401 = cljs.core.chunked_seq_QMARK_.call(null,inst_30399);
var state_30444__$1 = state_30444;
if(inst_30401){
var statearr_30456_30505 = state_30444__$1;
(statearr_30456_30505[(1)] = (16));

} else {
var statearr_30457_30506 = state_30444__$1;
(statearr_30457_30506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (22))){
var inst_30429 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
if(cljs.core.truth_(inst_30429)){
var statearr_30458_30507 = state_30444__$1;
(statearr_30458_30507[(1)] = (23));

} else {
var statearr_30459_30508 = state_30444__$1;
(statearr_30459_30508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (6))){
var inst_30423 = (state_30444[(7)]);
var inst_30375 = (state_30444[(8)]);
var inst_30425 = (state_30444[(11)]);
var inst_30423__$1 = topic_fn.call(null,inst_30375);
var inst_30424 = cljs.core.deref.call(null,mults);
var inst_30425__$1 = cljs.core.get.call(null,inst_30424,inst_30423__$1);
var state_30444__$1 = (function (){var statearr_30460 = state_30444;
(statearr_30460[(7)] = inst_30423__$1);

(statearr_30460[(11)] = inst_30425__$1);

return statearr_30460;
})();
if(cljs.core.truth_(inst_30425__$1)){
var statearr_30461_30509 = state_30444__$1;
(statearr_30461_30509[(1)] = (19));

} else {
var statearr_30462_30510 = state_30444__$1;
(statearr_30462_30510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (25))){
var inst_30434 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30463_30511 = state_30444__$1;
(statearr_30463_30511[(2)] = inst_30434);

(statearr_30463_30511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (17))){
var inst_30399 = (state_30444[(10)]);
var inst_30408 = cljs.core.first.call(null,inst_30399);
var inst_30409 = cljs.core.async.muxch_STAR_.call(null,inst_30408);
var inst_30410 = cljs.core.async.close_BANG_.call(null,inst_30409);
var inst_30411 = cljs.core.next.call(null,inst_30399);
var inst_30385 = inst_30411;
var inst_30386 = null;
var inst_30387 = (0);
var inst_30388 = (0);
var state_30444__$1 = (function (){var statearr_30464 = state_30444;
(statearr_30464[(12)] = inst_30387);

(statearr_30464[(13)] = inst_30388);

(statearr_30464[(14)] = inst_30385);

(statearr_30464[(15)] = inst_30386);

(statearr_30464[(16)] = inst_30410);

return statearr_30464;
})();
var statearr_30465_30512 = state_30444__$1;
(statearr_30465_30512[(2)] = null);

(statearr_30465_30512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (3))){
var inst_30442 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30444__$1,inst_30442);
} else {
if((state_val_30445 === (12))){
var inst_30419 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30466_30513 = state_30444__$1;
(statearr_30466_30513[(2)] = inst_30419);

(statearr_30466_30513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (2))){
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30444__$1,(4),ch);
} else {
if((state_val_30445 === (23))){
var state_30444__$1 = state_30444;
var statearr_30467_30514 = state_30444__$1;
(statearr_30467_30514[(2)] = null);

(statearr_30467_30514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (19))){
var inst_30375 = (state_30444[(8)]);
var inst_30425 = (state_30444[(11)]);
var inst_30427 = cljs.core.async.muxch_STAR_.call(null,inst_30425);
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30444__$1,(22),inst_30427,inst_30375);
} else {
if((state_val_30445 === (11))){
var inst_30399 = (state_30444[(10)]);
var inst_30385 = (state_30444[(14)]);
var inst_30399__$1 = cljs.core.seq.call(null,inst_30385);
var state_30444__$1 = (function (){var statearr_30468 = state_30444;
(statearr_30468[(10)] = inst_30399__$1);

return statearr_30468;
})();
if(inst_30399__$1){
var statearr_30469_30515 = state_30444__$1;
(statearr_30469_30515[(1)] = (13));

} else {
var statearr_30470_30516 = state_30444__$1;
(statearr_30470_30516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (9))){
var inst_30421 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30471_30517 = state_30444__$1;
(statearr_30471_30517[(2)] = inst_30421);

(statearr_30471_30517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (5))){
var inst_30382 = cljs.core.deref.call(null,mults);
var inst_30383 = cljs.core.vals.call(null,inst_30382);
var inst_30384 = cljs.core.seq.call(null,inst_30383);
var inst_30385 = inst_30384;
var inst_30386 = null;
var inst_30387 = (0);
var inst_30388 = (0);
var state_30444__$1 = (function (){var statearr_30472 = state_30444;
(statearr_30472[(12)] = inst_30387);

(statearr_30472[(13)] = inst_30388);

(statearr_30472[(14)] = inst_30385);

(statearr_30472[(15)] = inst_30386);

return statearr_30472;
})();
var statearr_30473_30518 = state_30444__$1;
(statearr_30473_30518[(2)] = null);

(statearr_30473_30518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (14))){
var state_30444__$1 = state_30444;
var statearr_30477_30519 = state_30444__$1;
(statearr_30477_30519[(2)] = null);

(statearr_30477_30519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (16))){
var inst_30399 = (state_30444[(10)]);
var inst_30403 = cljs.core.chunk_first.call(null,inst_30399);
var inst_30404 = cljs.core.chunk_rest.call(null,inst_30399);
var inst_30405 = cljs.core.count.call(null,inst_30403);
var inst_30385 = inst_30404;
var inst_30386 = inst_30403;
var inst_30387 = inst_30405;
var inst_30388 = (0);
var state_30444__$1 = (function (){var statearr_30478 = state_30444;
(statearr_30478[(12)] = inst_30387);

(statearr_30478[(13)] = inst_30388);

(statearr_30478[(14)] = inst_30385);

(statearr_30478[(15)] = inst_30386);

return statearr_30478;
})();
var statearr_30479_30520 = state_30444__$1;
(statearr_30479_30520[(2)] = null);

(statearr_30479_30520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (10))){
var inst_30387 = (state_30444[(12)]);
var inst_30388 = (state_30444[(13)]);
var inst_30385 = (state_30444[(14)]);
var inst_30386 = (state_30444[(15)]);
var inst_30393 = cljs.core._nth.call(null,inst_30386,inst_30388);
var inst_30394 = cljs.core.async.muxch_STAR_.call(null,inst_30393);
var inst_30395 = cljs.core.async.close_BANG_.call(null,inst_30394);
var inst_30396 = (inst_30388 + (1));
var tmp30474 = inst_30387;
var tmp30475 = inst_30385;
var tmp30476 = inst_30386;
var inst_30385__$1 = tmp30475;
var inst_30386__$1 = tmp30476;
var inst_30387__$1 = tmp30474;
var inst_30388__$1 = inst_30396;
var state_30444__$1 = (function (){var statearr_30480 = state_30444;
(statearr_30480[(12)] = inst_30387__$1);

(statearr_30480[(13)] = inst_30388__$1);

(statearr_30480[(14)] = inst_30385__$1);

(statearr_30480[(15)] = inst_30386__$1);

(statearr_30480[(17)] = inst_30395);

return statearr_30480;
})();
var statearr_30481_30521 = state_30444__$1;
(statearr_30481_30521[(2)] = null);

(statearr_30481_30521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (18))){
var inst_30414 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30482_30522 = state_30444__$1;
(statearr_30482_30522[(2)] = inst_30414);

(statearr_30482_30522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (8))){
var inst_30387 = (state_30444[(12)]);
var inst_30388 = (state_30444[(13)]);
var inst_30390 = (inst_30388 < inst_30387);
var inst_30391 = inst_30390;
var state_30444__$1 = state_30444;
if(cljs.core.truth_(inst_30391)){
var statearr_30483_30523 = state_30444__$1;
(statearr_30483_30523[(1)] = (10));

} else {
var statearr_30484_30524 = state_30444__$1;
(statearr_30484_30524[(1)] = (11));

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
});})(c__28577__auto___30496,mults,ensure_mult,p))
;
return ((function (switch__28465__auto__,c__28577__auto___30496,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30488[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30488[(1)] = (1));

return statearr_30488;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30444){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30489){if((e30489 instanceof Object)){
var ex__28469__auto__ = e30489;
var statearr_30490_30525 = state_30444;
(statearr_30490_30525[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30526 = state_30444;
state_30444 = G__30526;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30496,mults,ensure_mult,p))
})();
var state__28579__auto__ = (function (){var statearr_30491 = f__28578__auto__.call(null);
(statearr_30491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30496);

return statearr_30491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30496,mults,ensure_mult,p))
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
var args30527 = [];
var len__25835__auto___30530 = arguments.length;
var i__25836__auto___30531 = (0);
while(true){
if((i__25836__auto___30531 < len__25835__auto___30530)){
args30527.push((arguments[i__25836__auto___30531]));

var G__30532 = (i__25836__auto___30531 + (1));
i__25836__auto___30531 = G__30532;
continue;
} else {
}
break;
}

var G__30529 = args30527.length;
switch (G__30529) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30527.length)].join('')));

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
var args30534 = [];
var len__25835__auto___30537 = arguments.length;
var i__25836__auto___30538 = (0);
while(true){
if((i__25836__auto___30538 < len__25835__auto___30537)){
args30534.push((arguments[i__25836__auto___30538]));

var G__30539 = (i__25836__auto___30538 + (1));
i__25836__auto___30538 = G__30539;
continue;
} else {
}
break;
}

var G__30536 = args30534.length;
switch (G__30536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30534.length)].join('')));

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
var args30541 = [];
var len__25835__auto___30612 = arguments.length;
var i__25836__auto___30613 = (0);
while(true){
if((i__25836__auto___30613 < len__25835__auto___30612)){
args30541.push((arguments[i__25836__auto___30613]));

var G__30614 = (i__25836__auto___30613 + (1));
i__25836__auto___30613 = G__30614;
continue;
} else {
}
break;
}

var G__30543 = args30541.length;
switch (G__30543) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30541.length)].join('')));

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
var c__28577__auto___30616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (7))){
var state_30582__$1 = state_30582;
var statearr_30584_30617 = state_30582__$1;
(statearr_30584_30617[(2)] = null);

(statearr_30584_30617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30585_30618 = state_30582__$1;
(statearr_30585_30618[(2)] = null);

(statearr_30585_30618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (4))){
var inst_30546 = (state_30582[(7)]);
var inst_30548 = (inst_30546 < cnt);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30548)){
var statearr_30586_30619 = state_30582__$1;
(statearr_30586_30619[(1)] = (6));

} else {
var statearr_30587_30620 = state_30582__$1;
(statearr_30587_30620[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (15))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30588_30621 = state_30582__$1;
(statearr_30588_30621[(2)] = inst_30578);

(statearr_30588_30621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (13))){
var inst_30571 = cljs.core.async.close_BANG_.call(null,out);
var state_30582__$1 = state_30582;
var statearr_30589_30622 = state_30582__$1;
(statearr_30589_30622[(2)] = inst_30571);

(statearr_30589_30622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var state_30582__$1 = state_30582;
var statearr_30590_30623 = state_30582__$1;
(statearr_30590_30623[(2)] = null);

(statearr_30590_30623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (12))){
var inst_30568 = (state_30582[(8)]);
var inst_30568__$1 = (state_30582[(2)]);
var inst_30569 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30568__$1);
var state_30582__$1 = (function (){var statearr_30591 = state_30582;
(statearr_30591[(8)] = inst_30568__$1);

return statearr_30591;
})();
if(cljs.core.truth_(inst_30569)){
var statearr_30592_30624 = state_30582__$1;
(statearr_30592_30624[(1)] = (13));

} else {
var statearr_30593_30625 = state_30582__$1;
(statearr_30593_30625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (2))){
var inst_30545 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30546 = (0);
var state_30582__$1 = (function (){var statearr_30594 = state_30582;
(statearr_30594[(9)] = inst_30545);

(statearr_30594[(7)] = inst_30546);

return statearr_30594;
})();
var statearr_30595_30626 = state_30582__$1;
(statearr_30595_30626[(2)] = null);

(statearr_30595_30626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (11))){
var inst_30546 = (state_30582[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30582,(10),Object,null,(9));
var inst_30555 = chs__$1.call(null,inst_30546);
var inst_30556 = done.call(null,inst_30546);
var inst_30557 = cljs.core.async.take_BANG_.call(null,inst_30555,inst_30556);
var state_30582__$1 = state_30582;
var statearr_30596_30627 = state_30582__$1;
(statearr_30596_30627[(2)] = inst_30557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (9))){
var inst_30546 = (state_30582[(7)]);
var inst_30559 = (state_30582[(2)]);
var inst_30560 = (inst_30546 + (1));
var inst_30546__$1 = inst_30560;
var state_30582__$1 = (function (){var statearr_30597 = state_30582;
(statearr_30597[(7)] = inst_30546__$1);

(statearr_30597[(10)] = inst_30559);

return statearr_30597;
})();
var statearr_30598_30628 = state_30582__$1;
(statearr_30598_30628[(2)] = null);

(statearr_30598_30628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var inst_30566 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30599 = state_30582;
(statearr_30599[(11)] = inst_30566);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,(12),dchan);
} else {
if((state_val_30583 === (14))){
var inst_30568 = (state_30582[(8)]);
var inst_30573 = cljs.core.apply.call(null,f,inst_30568);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30582__$1,(16),out,inst_30573);
} else {
if((state_val_30583 === (16))){
var inst_30575 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30600 = state_30582;
(statearr_30600[(12)] = inst_30575);

return statearr_30600;
})();
var statearr_30601_30629 = state_30582__$1;
(statearr_30601_30629[(2)] = null);

(statearr_30601_30629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (10))){
var inst_30550 = (state_30582[(2)]);
var inst_30551 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30582__$1 = (function (){var statearr_30602 = state_30582;
(statearr_30602[(13)] = inst_30550);

return statearr_30602;
})();
var statearr_30603_30630 = state_30582__$1;
(statearr_30603_30630[(2)] = inst_30551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (8))){
var inst_30564 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30604_30631 = state_30582__$1;
(statearr_30604_30631[(2)] = inst_30564);

(statearr_30604_30631[(1)] = (5));


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
});})(c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28465__auto__,c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30608[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30608[(1)] = (1));

return statearr_30608;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30582){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object)){
var ex__28469__auto__ = e30609;
var statearr_30610_30632 = state_30582;
(statearr_30610_30632[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30633 = state_30582;
state_30582 = G__30633;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28579__auto__ = (function (){var statearr_30611 = f__28578__auto__.call(null);
(statearr_30611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30616);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30616,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30635 = [];
var len__25835__auto___30693 = arguments.length;
var i__25836__auto___30694 = (0);
while(true){
if((i__25836__auto___30694 < len__25835__auto___30693)){
args30635.push((arguments[i__25836__auto___30694]));

var G__30695 = (i__25836__auto___30694 + (1));
i__25836__auto___30694 = G__30695;
continue;
} else {
}
break;
}

var G__30637 = args30635.length;
switch (G__30637) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30635.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30697,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30697,out){
return (function (state_30669){
var state_val_30670 = (state_30669[(1)]);
if((state_val_30670 === (7))){
var inst_30649 = (state_30669[(7)]);
var inst_30648 = (state_30669[(8)]);
var inst_30648__$1 = (state_30669[(2)]);
var inst_30649__$1 = cljs.core.nth.call(null,inst_30648__$1,(0),null);
var inst_30650 = cljs.core.nth.call(null,inst_30648__$1,(1),null);
var inst_30651 = (inst_30649__$1 == null);
var state_30669__$1 = (function (){var statearr_30671 = state_30669;
(statearr_30671[(9)] = inst_30650);

(statearr_30671[(7)] = inst_30649__$1);

(statearr_30671[(8)] = inst_30648__$1);

return statearr_30671;
})();
if(cljs.core.truth_(inst_30651)){
var statearr_30672_30698 = state_30669__$1;
(statearr_30672_30698[(1)] = (8));

} else {
var statearr_30673_30699 = state_30669__$1;
(statearr_30673_30699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (1))){
var inst_30638 = cljs.core.vec.call(null,chs);
var inst_30639 = inst_30638;
var state_30669__$1 = (function (){var statearr_30674 = state_30669;
(statearr_30674[(10)] = inst_30639);

return statearr_30674;
})();
var statearr_30675_30700 = state_30669__$1;
(statearr_30675_30700[(2)] = null);

(statearr_30675_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (4))){
var inst_30639 = (state_30669[(10)]);
var state_30669__$1 = state_30669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30669__$1,(7),inst_30639);
} else {
if((state_val_30670 === (6))){
var inst_30665 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
var statearr_30676_30701 = state_30669__$1;
(statearr_30676_30701[(2)] = inst_30665);

(statearr_30676_30701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (3))){
var inst_30667 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30669__$1,inst_30667);
} else {
if((state_val_30670 === (2))){
var inst_30639 = (state_30669[(10)]);
var inst_30641 = cljs.core.count.call(null,inst_30639);
var inst_30642 = (inst_30641 > (0));
var state_30669__$1 = state_30669;
if(cljs.core.truth_(inst_30642)){
var statearr_30678_30702 = state_30669__$1;
(statearr_30678_30702[(1)] = (4));

} else {
var statearr_30679_30703 = state_30669__$1;
(statearr_30679_30703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (11))){
var inst_30639 = (state_30669[(10)]);
var inst_30658 = (state_30669[(2)]);
var tmp30677 = inst_30639;
var inst_30639__$1 = tmp30677;
var state_30669__$1 = (function (){var statearr_30680 = state_30669;
(statearr_30680[(10)] = inst_30639__$1);

(statearr_30680[(11)] = inst_30658);

return statearr_30680;
})();
var statearr_30681_30704 = state_30669__$1;
(statearr_30681_30704[(2)] = null);

(statearr_30681_30704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (9))){
var inst_30649 = (state_30669[(7)]);
var state_30669__$1 = state_30669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30669__$1,(11),out,inst_30649);
} else {
if((state_val_30670 === (5))){
var inst_30663 = cljs.core.async.close_BANG_.call(null,out);
var state_30669__$1 = state_30669;
var statearr_30682_30705 = state_30669__$1;
(statearr_30682_30705[(2)] = inst_30663);

(statearr_30682_30705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (10))){
var inst_30661 = (state_30669[(2)]);
var state_30669__$1 = state_30669;
var statearr_30683_30706 = state_30669__$1;
(statearr_30683_30706[(2)] = inst_30661);

(statearr_30683_30706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30670 === (8))){
var inst_30639 = (state_30669[(10)]);
var inst_30650 = (state_30669[(9)]);
var inst_30649 = (state_30669[(7)]);
var inst_30648 = (state_30669[(8)]);
var inst_30653 = (function (){var cs = inst_30639;
var vec__30644 = inst_30648;
var v = inst_30649;
var c = inst_30650;
return ((function (cs,vec__30644,v,c,inst_30639,inst_30650,inst_30649,inst_30648,state_val_30670,c__28577__auto___30697,out){
return (function (p1__30634_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30634_SHARP_);
});
;})(cs,vec__30644,v,c,inst_30639,inst_30650,inst_30649,inst_30648,state_val_30670,c__28577__auto___30697,out))
})();
var inst_30654 = cljs.core.filterv.call(null,inst_30653,inst_30639);
var inst_30639__$1 = inst_30654;
var state_30669__$1 = (function (){var statearr_30684 = state_30669;
(statearr_30684[(10)] = inst_30639__$1);

return statearr_30684;
})();
var statearr_30685_30707 = state_30669__$1;
(statearr_30685_30707[(2)] = null);

(statearr_30685_30707[(1)] = (2));


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
});})(c__28577__auto___30697,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30697,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30689[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30689[(1)] = (1));

return statearr_30689;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30669){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30690){if((e30690 instanceof Object)){
var ex__28469__auto__ = e30690;
var statearr_30691_30708 = state_30669;
(statearr_30691_30708[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30709 = state_30669;
state_30669 = G__30709;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30697,out))
})();
var state__28579__auto__ = (function (){var statearr_30692 = f__28578__auto__.call(null);
(statearr_30692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30697);

return statearr_30692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30697,out))
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
var args30710 = [];
var len__25835__auto___30759 = arguments.length;
var i__25836__auto___30760 = (0);
while(true){
if((i__25836__auto___30760 < len__25835__auto___30759)){
args30710.push((arguments[i__25836__auto___30760]));

var G__30761 = (i__25836__auto___30760 + (1));
i__25836__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30712 = args30710.length;
switch (G__30712) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30710.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30763,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30763,out){
return (function (state_30736){
var state_val_30737 = (state_30736[(1)]);
if((state_val_30737 === (7))){
var inst_30718 = (state_30736[(7)]);
var inst_30718__$1 = (state_30736[(2)]);
var inst_30719 = (inst_30718__$1 == null);
var inst_30720 = cljs.core.not.call(null,inst_30719);
var state_30736__$1 = (function (){var statearr_30738 = state_30736;
(statearr_30738[(7)] = inst_30718__$1);

return statearr_30738;
})();
if(inst_30720){
var statearr_30739_30764 = state_30736__$1;
(statearr_30739_30764[(1)] = (8));

} else {
var statearr_30740_30765 = state_30736__$1;
(statearr_30740_30765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (1))){
var inst_30713 = (0);
var state_30736__$1 = (function (){var statearr_30741 = state_30736;
(statearr_30741[(8)] = inst_30713);

return statearr_30741;
})();
var statearr_30742_30766 = state_30736__$1;
(statearr_30742_30766[(2)] = null);

(statearr_30742_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (4))){
var state_30736__$1 = state_30736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30736__$1,(7),ch);
} else {
if((state_val_30737 === (6))){
var inst_30731 = (state_30736[(2)]);
var state_30736__$1 = state_30736;
var statearr_30743_30767 = state_30736__$1;
(statearr_30743_30767[(2)] = inst_30731);

(statearr_30743_30767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (3))){
var inst_30733 = (state_30736[(2)]);
var inst_30734 = cljs.core.async.close_BANG_.call(null,out);
var state_30736__$1 = (function (){var statearr_30744 = state_30736;
(statearr_30744[(9)] = inst_30733);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30736__$1,inst_30734);
} else {
if((state_val_30737 === (2))){
var inst_30713 = (state_30736[(8)]);
var inst_30715 = (inst_30713 < n);
var state_30736__$1 = state_30736;
if(cljs.core.truth_(inst_30715)){
var statearr_30745_30768 = state_30736__$1;
(statearr_30745_30768[(1)] = (4));

} else {
var statearr_30746_30769 = state_30736__$1;
(statearr_30746_30769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (11))){
var inst_30713 = (state_30736[(8)]);
var inst_30723 = (state_30736[(2)]);
var inst_30724 = (inst_30713 + (1));
var inst_30713__$1 = inst_30724;
var state_30736__$1 = (function (){var statearr_30747 = state_30736;
(statearr_30747[(10)] = inst_30723);

(statearr_30747[(8)] = inst_30713__$1);

return statearr_30747;
})();
var statearr_30748_30770 = state_30736__$1;
(statearr_30748_30770[(2)] = null);

(statearr_30748_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (9))){
var state_30736__$1 = state_30736;
var statearr_30749_30771 = state_30736__$1;
(statearr_30749_30771[(2)] = null);

(statearr_30749_30771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (5))){
var state_30736__$1 = state_30736;
var statearr_30750_30772 = state_30736__$1;
(statearr_30750_30772[(2)] = null);

(statearr_30750_30772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (10))){
var inst_30728 = (state_30736[(2)]);
var state_30736__$1 = state_30736;
var statearr_30751_30773 = state_30736__$1;
(statearr_30751_30773[(2)] = inst_30728);

(statearr_30751_30773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (8))){
var inst_30718 = (state_30736[(7)]);
var state_30736__$1 = state_30736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30736__$1,(11),out,inst_30718);
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
});})(c__28577__auto___30763,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30763,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30755[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30755[(1)] = (1));

return statearr_30755;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30736){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30756){if((e30756 instanceof Object)){
var ex__28469__auto__ = e30756;
var statearr_30757_30774 = state_30736;
(statearr_30757_30774[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30775 = state_30736;
state_30736 = G__30775;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30763,out))
})();
var state__28579__auto__ = (function (){var statearr_30758 = f__28578__auto__.call(null);
(statearr_30758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30763);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30763,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30783 = (function (map_LT_,f,ch,meta30784){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30784 = meta30784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30785,meta30784__$1){
var self__ = this;
var _30785__$1 = this;
return (new cljs.core.async.t_cljs$core$async30783(self__.map_LT_,self__.f,self__.ch,meta30784__$1));
});

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30785){
var self__ = this;
var _30785__$1 = this;
return self__.meta30784;
});

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30786 = (function (map_LT_,f,ch,meta30784,_,fn1,meta30787){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30784 = meta30784;
this._ = _;
this.fn1 = fn1;
this.meta30787 = meta30787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30788,meta30787__$1){
var self__ = this;
var _30788__$1 = this;
return (new cljs.core.async.t_cljs$core$async30786(self__.map_LT_,self__.f,self__.ch,self__.meta30784,self__._,self__.fn1,meta30787__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30788){
var self__ = this;
var _30788__$1 = this;
return self__.meta30787;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30776_SHARP_){
return f1.call(null,(((p1__30776_SHARP_ == null))?null:self__.f.call(null,p1__30776_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30784","meta30784",79365252,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30783","cljs.core.async/t_cljs$core$async30783",-1092690217,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30787","meta30787",-1835159621,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30786";

cljs.core.async.t_cljs$core$async30786.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30786");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30786 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30786(map_LT___$1,f__$1,ch__$1,meta30784__$1,___$2,fn1__$1,meta30787){
return (new cljs.core.async.t_cljs$core$async30786(map_LT___$1,f__$1,ch__$1,meta30784__$1,___$2,fn1__$1,meta30787));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30786(self__.map_LT_,self__.f,self__.ch,self__.meta30784,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24748__auto__ = ret;
if(cljs.core.truth_(and__24748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30784","meta30784",79365252,null)], null);
});

cljs.core.async.t_cljs$core$async30783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30783";

cljs.core.async.t_cljs$core$async30783.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30783");
});

cljs.core.async.__GT_t_cljs$core$async30783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30783(map_LT___$1,f__$1,ch__$1,meta30784){
return (new cljs.core.async.t_cljs$core$async30783(map_LT___$1,f__$1,ch__$1,meta30784));
});

}

return (new cljs.core.async.t_cljs$core$async30783(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30792 = (function (map_GT_,f,ch,meta30793){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30793 = meta30793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30794,meta30793__$1){
var self__ = this;
var _30794__$1 = this;
return (new cljs.core.async.t_cljs$core$async30792(self__.map_GT_,self__.f,self__.ch,meta30793__$1));
});

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30794){
var self__ = this;
var _30794__$1 = this;
return self__.meta30793;
});

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30793","meta30793",1437842446,null)], null);
});

cljs.core.async.t_cljs$core$async30792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30792";

cljs.core.async.t_cljs$core$async30792.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30792");
});

cljs.core.async.__GT_t_cljs$core$async30792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30792(map_GT___$1,f__$1,ch__$1,meta30793){
return (new cljs.core.async.t_cljs$core$async30792(map_GT___$1,f__$1,ch__$1,meta30793));
});

}

return (new cljs.core.async.t_cljs$core$async30792(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30798 = (function (filter_GT_,p,ch,meta30799){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30799 = meta30799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30800,meta30799__$1){
var self__ = this;
var _30800__$1 = this;
return (new cljs.core.async.t_cljs$core$async30798(self__.filter_GT_,self__.p,self__.ch,meta30799__$1));
});

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30800){
var self__ = this;
var _30800__$1 = this;
return self__.meta30799;
});

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30799","meta30799",-1176977308,null)], null);
});

cljs.core.async.t_cljs$core$async30798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30798";

cljs.core.async.t_cljs$core$async30798.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30798");
});

cljs.core.async.__GT_t_cljs$core$async30798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30798(filter_GT___$1,p__$1,ch__$1,meta30799){
return (new cljs.core.async.t_cljs$core$async30798(filter_GT___$1,p__$1,ch__$1,meta30799));
});

}

return (new cljs.core.async.t_cljs$core$async30798(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30801 = [];
var len__25835__auto___30845 = arguments.length;
var i__25836__auto___30846 = (0);
while(true){
if((i__25836__auto___30846 < len__25835__auto___30845)){
args30801.push((arguments[i__25836__auto___30846]));

var G__30847 = (i__25836__auto___30846 + (1));
i__25836__auto___30846 = G__30847;
continue;
} else {
}
break;
}

var G__30803 = args30801.length;
switch (G__30803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30801.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30849,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30849,out){
return (function (state_30824){
var state_val_30825 = (state_30824[(1)]);
if((state_val_30825 === (7))){
var inst_30820 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30826_30850 = state_30824__$1;
(statearr_30826_30850[(2)] = inst_30820);

(statearr_30826_30850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (1))){
var state_30824__$1 = state_30824;
var statearr_30827_30851 = state_30824__$1;
(statearr_30827_30851[(2)] = null);

(statearr_30827_30851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (4))){
var inst_30806 = (state_30824[(7)]);
var inst_30806__$1 = (state_30824[(2)]);
var inst_30807 = (inst_30806__$1 == null);
var state_30824__$1 = (function (){var statearr_30828 = state_30824;
(statearr_30828[(7)] = inst_30806__$1);

return statearr_30828;
})();
if(cljs.core.truth_(inst_30807)){
var statearr_30829_30852 = state_30824__$1;
(statearr_30829_30852[(1)] = (5));

} else {
var statearr_30830_30853 = state_30824__$1;
(statearr_30830_30853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (6))){
var inst_30806 = (state_30824[(7)]);
var inst_30811 = p.call(null,inst_30806);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30811)){
var statearr_30831_30854 = state_30824__$1;
(statearr_30831_30854[(1)] = (8));

} else {
var statearr_30832_30855 = state_30824__$1;
(statearr_30832_30855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (3))){
var inst_30822 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30824__$1,inst_30822);
} else {
if((state_val_30825 === (2))){
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30824__$1,(4),ch);
} else {
if((state_val_30825 === (11))){
var inst_30814 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30833_30856 = state_30824__$1;
(statearr_30833_30856[(2)] = inst_30814);

(statearr_30833_30856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (9))){
var state_30824__$1 = state_30824;
var statearr_30834_30857 = state_30824__$1;
(statearr_30834_30857[(2)] = null);

(statearr_30834_30857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (5))){
var inst_30809 = cljs.core.async.close_BANG_.call(null,out);
var state_30824__$1 = state_30824;
var statearr_30835_30858 = state_30824__$1;
(statearr_30835_30858[(2)] = inst_30809);

(statearr_30835_30858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (10))){
var inst_30817 = (state_30824[(2)]);
var state_30824__$1 = (function (){var statearr_30836 = state_30824;
(statearr_30836[(8)] = inst_30817);

return statearr_30836;
})();
var statearr_30837_30859 = state_30824__$1;
(statearr_30837_30859[(2)] = null);

(statearr_30837_30859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (8))){
var inst_30806 = (state_30824[(7)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30824__$1,(11),out,inst_30806);
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
});})(c__28577__auto___30849,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30849,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30841 = [null,null,null,null,null,null,null,null,null];
(statearr_30841[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30841[(1)] = (1));

return statearr_30841;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30824){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30842){if((e30842 instanceof Object)){
var ex__28469__auto__ = e30842;
var statearr_30843_30860 = state_30824;
(statearr_30843_30860[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30861 = state_30824;
state_30824 = G__30861;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30849,out))
})();
var state__28579__auto__ = (function (){var statearr_30844 = f__28578__auto__.call(null);
(statearr_30844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30849);

return statearr_30844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30849,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30862 = [];
var len__25835__auto___30865 = arguments.length;
var i__25836__auto___30866 = (0);
while(true){
if((i__25836__auto___30866 < len__25835__auto___30865)){
args30862.push((arguments[i__25836__auto___30866]));

var G__30867 = (i__25836__auto___30866 + (1));
i__25836__auto___30866 = G__30867;
continue;
} else {
}
break;
}

var G__30864 = args30862.length;
switch (G__30864) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30862.length)].join('')));

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
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_31034){
var state_val_31035 = (state_31034[(1)]);
if((state_val_31035 === (7))){
var inst_31030 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31036_31077 = state_31034__$1;
(statearr_31036_31077[(2)] = inst_31030);

(statearr_31036_31077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (20))){
var inst_31000 = (state_31034[(7)]);
var inst_31011 = (state_31034[(2)]);
var inst_31012 = cljs.core.next.call(null,inst_31000);
var inst_30986 = inst_31012;
var inst_30987 = null;
var inst_30988 = (0);
var inst_30989 = (0);
var state_31034__$1 = (function (){var statearr_31037 = state_31034;
(statearr_31037[(8)] = inst_30989);

(statearr_31037[(9)] = inst_30986);

(statearr_31037[(10)] = inst_30987);

(statearr_31037[(11)] = inst_31011);

(statearr_31037[(12)] = inst_30988);

return statearr_31037;
})();
var statearr_31038_31078 = state_31034__$1;
(statearr_31038_31078[(2)] = null);

(statearr_31038_31078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (1))){
var state_31034__$1 = state_31034;
var statearr_31039_31079 = state_31034__$1;
(statearr_31039_31079[(2)] = null);

(statearr_31039_31079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (4))){
var inst_30975 = (state_31034[(13)]);
var inst_30975__$1 = (state_31034[(2)]);
var inst_30976 = (inst_30975__$1 == null);
var state_31034__$1 = (function (){var statearr_31040 = state_31034;
(statearr_31040[(13)] = inst_30975__$1);

return statearr_31040;
})();
if(cljs.core.truth_(inst_30976)){
var statearr_31041_31080 = state_31034__$1;
(statearr_31041_31080[(1)] = (5));

} else {
var statearr_31042_31081 = state_31034__$1;
(statearr_31042_31081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (15))){
var state_31034__$1 = state_31034;
var statearr_31046_31082 = state_31034__$1;
(statearr_31046_31082[(2)] = null);

(statearr_31046_31082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (21))){
var state_31034__$1 = state_31034;
var statearr_31047_31083 = state_31034__$1;
(statearr_31047_31083[(2)] = null);

(statearr_31047_31083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (13))){
var inst_30989 = (state_31034[(8)]);
var inst_30986 = (state_31034[(9)]);
var inst_30987 = (state_31034[(10)]);
var inst_30988 = (state_31034[(12)]);
var inst_30996 = (state_31034[(2)]);
var inst_30997 = (inst_30989 + (1));
var tmp31043 = inst_30986;
var tmp31044 = inst_30987;
var tmp31045 = inst_30988;
var inst_30986__$1 = tmp31043;
var inst_30987__$1 = tmp31044;
var inst_30988__$1 = tmp31045;
var inst_30989__$1 = inst_30997;
var state_31034__$1 = (function (){var statearr_31048 = state_31034;
(statearr_31048[(8)] = inst_30989__$1);

(statearr_31048[(14)] = inst_30996);

(statearr_31048[(9)] = inst_30986__$1);

(statearr_31048[(10)] = inst_30987__$1);

(statearr_31048[(12)] = inst_30988__$1);

return statearr_31048;
})();
var statearr_31049_31084 = state_31034__$1;
(statearr_31049_31084[(2)] = null);

(statearr_31049_31084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (22))){
var state_31034__$1 = state_31034;
var statearr_31050_31085 = state_31034__$1;
(statearr_31050_31085[(2)] = null);

(statearr_31050_31085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (6))){
var inst_30975 = (state_31034[(13)]);
var inst_30984 = f.call(null,inst_30975);
var inst_30985 = cljs.core.seq.call(null,inst_30984);
var inst_30986 = inst_30985;
var inst_30987 = null;
var inst_30988 = (0);
var inst_30989 = (0);
var state_31034__$1 = (function (){var statearr_31051 = state_31034;
(statearr_31051[(8)] = inst_30989);

(statearr_31051[(9)] = inst_30986);

(statearr_31051[(10)] = inst_30987);

(statearr_31051[(12)] = inst_30988);

return statearr_31051;
})();
var statearr_31052_31086 = state_31034__$1;
(statearr_31052_31086[(2)] = null);

(statearr_31052_31086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (17))){
var inst_31000 = (state_31034[(7)]);
var inst_31004 = cljs.core.chunk_first.call(null,inst_31000);
var inst_31005 = cljs.core.chunk_rest.call(null,inst_31000);
var inst_31006 = cljs.core.count.call(null,inst_31004);
var inst_30986 = inst_31005;
var inst_30987 = inst_31004;
var inst_30988 = inst_31006;
var inst_30989 = (0);
var state_31034__$1 = (function (){var statearr_31053 = state_31034;
(statearr_31053[(8)] = inst_30989);

(statearr_31053[(9)] = inst_30986);

(statearr_31053[(10)] = inst_30987);

(statearr_31053[(12)] = inst_30988);

return statearr_31053;
})();
var statearr_31054_31087 = state_31034__$1;
(statearr_31054_31087[(2)] = null);

(statearr_31054_31087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (3))){
var inst_31032 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31034__$1,inst_31032);
} else {
if((state_val_31035 === (12))){
var inst_31020 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31055_31088 = state_31034__$1;
(statearr_31055_31088[(2)] = inst_31020);

(statearr_31055_31088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (2))){
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(4),in$);
} else {
if((state_val_31035 === (23))){
var inst_31028 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31056_31089 = state_31034__$1;
(statearr_31056_31089[(2)] = inst_31028);

(statearr_31056_31089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (19))){
var inst_31015 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31057_31090 = state_31034__$1;
(statearr_31057_31090[(2)] = inst_31015);

(statearr_31057_31090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (11))){
var inst_30986 = (state_31034[(9)]);
var inst_31000 = (state_31034[(7)]);
var inst_31000__$1 = cljs.core.seq.call(null,inst_30986);
var state_31034__$1 = (function (){var statearr_31058 = state_31034;
(statearr_31058[(7)] = inst_31000__$1);

return statearr_31058;
})();
if(inst_31000__$1){
var statearr_31059_31091 = state_31034__$1;
(statearr_31059_31091[(1)] = (14));

} else {
var statearr_31060_31092 = state_31034__$1;
(statearr_31060_31092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (9))){
var inst_31022 = (state_31034[(2)]);
var inst_31023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31034__$1 = (function (){var statearr_31061 = state_31034;
(statearr_31061[(15)] = inst_31022);

return statearr_31061;
})();
if(cljs.core.truth_(inst_31023)){
var statearr_31062_31093 = state_31034__$1;
(statearr_31062_31093[(1)] = (21));

} else {
var statearr_31063_31094 = state_31034__$1;
(statearr_31063_31094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (5))){
var inst_30978 = cljs.core.async.close_BANG_.call(null,out);
var state_31034__$1 = state_31034;
var statearr_31064_31095 = state_31034__$1;
(statearr_31064_31095[(2)] = inst_30978);

(statearr_31064_31095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (14))){
var inst_31000 = (state_31034[(7)]);
var inst_31002 = cljs.core.chunked_seq_QMARK_.call(null,inst_31000);
var state_31034__$1 = state_31034;
if(inst_31002){
var statearr_31065_31096 = state_31034__$1;
(statearr_31065_31096[(1)] = (17));

} else {
var statearr_31066_31097 = state_31034__$1;
(statearr_31066_31097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (16))){
var inst_31018 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31067_31098 = state_31034__$1;
(statearr_31067_31098[(2)] = inst_31018);

(statearr_31067_31098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (10))){
var inst_30989 = (state_31034[(8)]);
var inst_30987 = (state_31034[(10)]);
var inst_30994 = cljs.core._nth.call(null,inst_30987,inst_30989);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31034__$1,(13),out,inst_30994);
} else {
if((state_val_31035 === (18))){
var inst_31000 = (state_31034[(7)]);
var inst_31009 = cljs.core.first.call(null,inst_31000);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31034__$1,(20),out,inst_31009);
} else {
if((state_val_31035 === (8))){
var inst_30989 = (state_31034[(8)]);
var inst_30988 = (state_31034[(12)]);
var inst_30991 = (inst_30989 < inst_30988);
var inst_30992 = inst_30991;
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30992)){
var statearr_31068_31099 = state_31034__$1;
(statearr_31068_31099[(1)] = (10));

} else {
var statearr_31069_31100 = state_31034__$1;
(statearr_31069_31100[(1)] = (11));

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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_31073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__);

(statearr_31073[(1)] = (1));

return statearr_31073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1 = (function (state_31034){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31074){if((e31074 instanceof Object)){
var ex__28469__auto__ = e31074;
var statearr_31075_31101 = state_31034;
(statearr_31075_31101[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31102 = state_31034;
state_31034 = G__31102;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__ = function(state_31034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1.call(this,state_31034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_31076 = f__28578__auto__.call(null);
(statearr_31076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_31076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31103 = [];
var len__25835__auto___31106 = arguments.length;
var i__25836__auto___31107 = (0);
while(true){
if((i__25836__auto___31107 < len__25835__auto___31106)){
args31103.push((arguments[i__25836__auto___31107]));

var G__31108 = (i__25836__auto___31107 + (1));
i__25836__auto___31107 = G__31108;
continue;
} else {
}
break;
}

var G__31105 = args31103.length;
switch (G__31105) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31103.length)].join('')));

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
var args31110 = [];
var len__25835__auto___31113 = arguments.length;
var i__25836__auto___31114 = (0);
while(true){
if((i__25836__auto___31114 < len__25835__auto___31113)){
args31110.push((arguments[i__25836__auto___31114]));

var G__31115 = (i__25836__auto___31114 + (1));
i__25836__auto___31114 = G__31115;
continue;
} else {
}
break;
}

var G__31112 = args31110.length;
switch (G__31112) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31110.length)].join('')));

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
var args31117 = [];
var len__25835__auto___31168 = arguments.length;
var i__25836__auto___31169 = (0);
while(true){
if((i__25836__auto___31169 < len__25835__auto___31168)){
args31117.push((arguments[i__25836__auto___31169]));

var G__31170 = (i__25836__auto___31169 + (1));
i__25836__auto___31169 = G__31170;
continue;
} else {
}
break;
}

var G__31119 = args31117.length;
switch (G__31119) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31117.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31172,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31172,out){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31138 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31145_31173 = state_31143__$1;
(statearr_31145_31173[(2)] = inst_31138);

(statearr_31145_31173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var inst_31120 = null;
var state_31143__$1 = (function (){var statearr_31146 = state_31143;
(statearr_31146[(7)] = inst_31120);

return statearr_31146;
})();
var statearr_31147_31174 = state_31143__$1;
(statearr_31147_31174[(2)] = null);

(statearr_31147_31174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31123 = (state_31143[(8)]);
var inst_31123__$1 = (state_31143[(2)]);
var inst_31124 = (inst_31123__$1 == null);
var inst_31125 = cljs.core.not.call(null,inst_31124);
var state_31143__$1 = (function (){var statearr_31148 = state_31143;
(statearr_31148[(8)] = inst_31123__$1);

return statearr_31148;
})();
if(inst_31125){
var statearr_31149_31175 = state_31143__$1;
(statearr_31149_31175[(1)] = (5));

} else {
var statearr_31150_31176 = state_31143__$1;
(statearr_31150_31176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var state_31143__$1 = state_31143;
var statearr_31151_31177 = state_31143__$1;
(statearr_31151_31177[(2)] = null);

(statearr_31151_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (3))){
var inst_31140 = (state_31143[(2)]);
var inst_31141 = cljs.core.async.close_BANG_.call(null,out);
var state_31143__$1 = (function (){var statearr_31152 = state_31143;
(statearr_31152[(9)] = inst_31140);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (2))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(4),ch);
} else {
if((state_val_31144 === (11))){
var inst_31123 = (state_31143[(8)]);
var inst_31132 = (state_31143[(2)]);
var inst_31120 = inst_31123;
var state_31143__$1 = (function (){var statearr_31153 = state_31143;
(statearr_31153[(10)] = inst_31132);

(statearr_31153[(7)] = inst_31120);

return statearr_31153;
})();
var statearr_31154_31178 = state_31143__$1;
(statearr_31154_31178[(2)] = null);

(statearr_31154_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var inst_31123 = (state_31143[(8)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31143__$1,(11),out,inst_31123);
} else {
if((state_val_31144 === (5))){
var inst_31123 = (state_31143[(8)]);
var inst_31120 = (state_31143[(7)]);
var inst_31127 = cljs.core._EQ_.call(null,inst_31123,inst_31120);
var state_31143__$1 = state_31143;
if(inst_31127){
var statearr_31156_31179 = state_31143__$1;
(statearr_31156_31179[(1)] = (8));

} else {
var statearr_31157_31180 = state_31143__$1;
(statearr_31157_31180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31135 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31158_31181 = state_31143__$1;
(statearr_31158_31181[(2)] = inst_31135);

(statearr_31158_31181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31120 = (state_31143[(7)]);
var tmp31155 = inst_31120;
var inst_31120__$1 = tmp31155;
var state_31143__$1 = (function (){var statearr_31159 = state_31143;
(statearr_31159[(7)] = inst_31120__$1);

return statearr_31159;
})();
var statearr_31160_31182 = state_31143__$1;
(statearr_31160_31182[(2)] = null);

(statearr_31160_31182[(1)] = (2));


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
});})(c__28577__auto___31172,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31172,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31164[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31164[(1)] = (1));

return statearr_31164;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31143){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31165){if((e31165 instanceof Object)){
var ex__28469__auto__ = e31165;
var statearr_31166_31183 = state_31143;
(statearr_31166_31183[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31184 = state_31143;
state_31143 = G__31184;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31172,out))
})();
var state__28579__auto__ = (function (){var statearr_31167 = f__28578__auto__.call(null);
(statearr_31167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31172);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31172,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31185 = [];
var len__25835__auto___31255 = arguments.length;
var i__25836__auto___31256 = (0);
while(true){
if((i__25836__auto___31256 < len__25835__auto___31255)){
args31185.push((arguments[i__25836__auto___31256]));

var G__31257 = (i__25836__auto___31256 + (1));
i__25836__auto___31256 = G__31257;
continue;
} else {
}
break;
}

var G__31187 = args31185.length;
switch (G__31187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31185.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31259,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31259,out){
return (function (state_31225){
var state_val_31226 = (state_31225[(1)]);
if((state_val_31226 === (7))){
var inst_31221 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31227_31260 = state_31225__$1;
(statearr_31227_31260[(2)] = inst_31221);

(statearr_31227_31260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (1))){
var inst_31188 = (new Array(n));
var inst_31189 = inst_31188;
var inst_31190 = (0);
var state_31225__$1 = (function (){var statearr_31228 = state_31225;
(statearr_31228[(7)] = inst_31190);

(statearr_31228[(8)] = inst_31189);

return statearr_31228;
})();
var statearr_31229_31261 = state_31225__$1;
(statearr_31229_31261[(2)] = null);

(statearr_31229_31261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (4))){
var inst_31193 = (state_31225[(9)]);
var inst_31193__$1 = (state_31225[(2)]);
var inst_31194 = (inst_31193__$1 == null);
var inst_31195 = cljs.core.not.call(null,inst_31194);
var state_31225__$1 = (function (){var statearr_31230 = state_31225;
(statearr_31230[(9)] = inst_31193__$1);

return statearr_31230;
})();
if(inst_31195){
var statearr_31231_31262 = state_31225__$1;
(statearr_31231_31262[(1)] = (5));

} else {
var statearr_31232_31263 = state_31225__$1;
(statearr_31232_31263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (15))){
var inst_31215 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31233_31264 = state_31225__$1;
(statearr_31233_31264[(2)] = inst_31215);

(statearr_31233_31264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (13))){
var state_31225__$1 = state_31225;
var statearr_31234_31265 = state_31225__$1;
(statearr_31234_31265[(2)] = null);

(statearr_31234_31265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (6))){
var inst_31190 = (state_31225[(7)]);
var inst_31211 = (inst_31190 > (0));
var state_31225__$1 = state_31225;
if(cljs.core.truth_(inst_31211)){
var statearr_31235_31266 = state_31225__$1;
(statearr_31235_31266[(1)] = (12));

} else {
var statearr_31236_31267 = state_31225__$1;
(statearr_31236_31267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (3))){
var inst_31223 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31225__$1,inst_31223);
} else {
if((state_val_31226 === (12))){
var inst_31189 = (state_31225[(8)]);
var inst_31213 = cljs.core.vec.call(null,inst_31189);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31225__$1,(15),out,inst_31213);
} else {
if((state_val_31226 === (2))){
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31225__$1,(4),ch);
} else {
if((state_val_31226 === (11))){
var inst_31205 = (state_31225[(2)]);
var inst_31206 = (new Array(n));
var inst_31189 = inst_31206;
var inst_31190 = (0);
var state_31225__$1 = (function (){var statearr_31237 = state_31225;
(statearr_31237[(7)] = inst_31190);

(statearr_31237[(8)] = inst_31189);

(statearr_31237[(10)] = inst_31205);

return statearr_31237;
})();
var statearr_31238_31268 = state_31225__$1;
(statearr_31238_31268[(2)] = null);

(statearr_31238_31268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (9))){
var inst_31189 = (state_31225[(8)]);
var inst_31203 = cljs.core.vec.call(null,inst_31189);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31225__$1,(11),out,inst_31203);
} else {
if((state_val_31226 === (5))){
var inst_31198 = (state_31225[(11)]);
var inst_31190 = (state_31225[(7)]);
var inst_31189 = (state_31225[(8)]);
var inst_31193 = (state_31225[(9)]);
var inst_31197 = (inst_31189[inst_31190] = inst_31193);
var inst_31198__$1 = (inst_31190 + (1));
var inst_31199 = (inst_31198__$1 < n);
var state_31225__$1 = (function (){var statearr_31239 = state_31225;
(statearr_31239[(11)] = inst_31198__$1);

(statearr_31239[(12)] = inst_31197);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31199)){
var statearr_31240_31269 = state_31225__$1;
(statearr_31240_31269[(1)] = (8));

} else {
var statearr_31241_31270 = state_31225__$1;
(statearr_31241_31270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (14))){
var inst_31218 = (state_31225[(2)]);
var inst_31219 = cljs.core.async.close_BANG_.call(null,out);
var state_31225__$1 = (function (){var statearr_31243 = state_31225;
(statearr_31243[(13)] = inst_31218);

return statearr_31243;
})();
var statearr_31244_31271 = state_31225__$1;
(statearr_31244_31271[(2)] = inst_31219);

(statearr_31244_31271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (10))){
var inst_31209 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31245_31272 = state_31225__$1;
(statearr_31245_31272[(2)] = inst_31209);

(statearr_31245_31272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (8))){
var inst_31198 = (state_31225[(11)]);
var inst_31189 = (state_31225[(8)]);
var tmp31242 = inst_31189;
var inst_31189__$1 = tmp31242;
var inst_31190 = inst_31198;
var state_31225__$1 = (function (){var statearr_31246 = state_31225;
(statearr_31246[(7)] = inst_31190);

(statearr_31246[(8)] = inst_31189__$1);

return statearr_31246;
})();
var statearr_31247_31273 = state_31225__$1;
(statearr_31247_31273[(2)] = null);

(statearr_31247_31273[(1)] = (2));


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
});})(c__28577__auto___31259,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31259,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31251[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31251[(1)] = (1));

return statearr_31251;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31225){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31252){if((e31252 instanceof Object)){
var ex__28469__auto__ = e31252;
var statearr_31253_31274 = state_31225;
(statearr_31253_31274[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31275 = state_31225;
state_31225 = G__31275;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31259,out))
})();
var state__28579__auto__ = (function (){var statearr_31254 = f__28578__auto__.call(null);
(statearr_31254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31259);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31259,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31276 = [];
var len__25835__auto___31350 = arguments.length;
var i__25836__auto___31351 = (0);
while(true){
if((i__25836__auto___31351 < len__25835__auto___31350)){
args31276.push((arguments[i__25836__auto___31351]));

var G__31352 = (i__25836__auto___31351 + (1));
i__25836__auto___31351 = G__31352;
continue;
} else {
}
break;
}

var G__31278 = args31276.length;
switch (G__31278) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31276.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31354,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31354,out){
return (function (state_31320){
var state_val_31321 = (state_31320[(1)]);
if((state_val_31321 === (7))){
var inst_31316 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31322_31355 = state_31320__$1;
(statearr_31322_31355[(2)] = inst_31316);

(statearr_31322_31355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (1))){
var inst_31279 = [];
var inst_31280 = inst_31279;
var inst_31281 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31320__$1 = (function (){var statearr_31323 = state_31320;
(statearr_31323[(7)] = inst_31281);

(statearr_31323[(8)] = inst_31280);

return statearr_31323;
})();
var statearr_31324_31356 = state_31320__$1;
(statearr_31324_31356[(2)] = null);

(statearr_31324_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (4))){
var inst_31284 = (state_31320[(9)]);
var inst_31284__$1 = (state_31320[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var inst_31286 = cljs.core.not.call(null,inst_31285);
var state_31320__$1 = (function (){var statearr_31325 = state_31320;
(statearr_31325[(9)] = inst_31284__$1);

return statearr_31325;
})();
if(inst_31286){
var statearr_31326_31357 = state_31320__$1;
(statearr_31326_31357[(1)] = (5));

} else {
var statearr_31327_31358 = state_31320__$1;
(statearr_31327_31358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (15))){
var inst_31310 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31328_31359 = state_31320__$1;
(statearr_31328_31359[(2)] = inst_31310);

(statearr_31328_31359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (13))){
var state_31320__$1 = state_31320;
var statearr_31329_31360 = state_31320__$1;
(statearr_31329_31360[(2)] = null);

(statearr_31329_31360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (6))){
var inst_31280 = (state_31320[(8)]);
var inst_31305 = inst_31280.length;
var inst_31306 = (inst_31305 > (0));
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31306)){
var statearr_31330_31361 = state_31320__$1;
(statearr_31330_31361[(1)] = (12));

} else {
var statearr_31331_31362 = state_31320__$1;
(statearr_31331_31362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (3))){
var inst_31318 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31320__$1,inst_31318);
} else {
if((state_val_31321 === (12))){
var inst_31280 = (state_31320[(8)]);
var inst_31308 = cljs.core.vec.call(null,inst_31280);
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31320__$1,(15),out,inst_31308);
} else {
if((state_val_31321 === (2))){
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31320__$1,(4),ch);
} else {
if((state_val_31321 === (11))){
var inst_31288 = (state_31320[(10)]);
var inst_31284 = (state_31320[(9)]);
var inst_31298 = (state_31320[(2)]);
var inst_31299 = [];
var inst_31300 = inst_31299.push(inst_31284);
var inst_31280 = inst_31299;
var inst_31281 = inst_31288;
var state_31320__$1 = (function (){var statearr_31332 = state_31320;
(statearr_31332[(7)] = inst_31281);

(statearr_31332[(8)] = inst_31280);

(statearr_31332[(11)] = inst_31300);

(statearr_31332[(12)] = inst_31298);

return statearr_31332;
})();
var statearr_31333_31363 = state_31320__$1;
(statearr_31333_31363[(2)] = null);

(statearr_31333_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (9))){
var inst_31280 = (state_31320[(8)]);
var inst_31296 = cljs.core.vec.call(null,inst_31280);
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31320__$1,(11),out,inst_31296);
} else {
if((state_val_31321 === (5))){
var inst_31281 = (state_31320[(7)]);
var inst_31288 = (state_31320[(10)]);
var inst_31284 = (state_31320[(9)]);
var inst_31288__$1 = f.call(null,inst_31284);
var inst_31289 = cljs.core._EQ_.call(null,inst_31288__$1,inst_31281);
var inst_31290 = cljs.core.keyword_identical_QMARK_.call(null,inst_31281,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31291 = (inst_31289) || (inst_31290);
var state_31320__$1 = (function (){var statearr_31334 = state_31320;
(statearr_31334[(10)] = inst_31288__$1);

return statearr_31334;
})();
if(cljs.core.truth_(inst_31291)){
var statearr_31335_31364 = state_31320__$1;
(statearr_31335_31364[(1)] = (8));

} else {
var statearr_31336_31365 = state_31320__$1;
(statearr_31336_31365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (14))){
var inst_31313 = (state_31320[(2)]);
var inst_31314 = cljs.core.async.close_BANG_.call(null,out);
var state_31320__$1 = (function (){var statearr_31338 = state_31320;
(statearr_31338[(13)] = inst_31313);

return statearr_31338;
})();
var statearr_31339_31366 = state_31320__$1;
(statearr_31339_31366[(2)] = inst_31314);

(statearr_31339_31366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (10))){
var inst_31303 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31340_31367 = state_31320__$1;
(statearr_31340_31367[(2)] = inst_31303);

(statearr_31340_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (8))){
var inst_31288 = (state_31320[(10)]);
var inst_31280 = (state_31320[(8)]);
var inst_31284 = (state_31320[(9)]);
var inst_31293 = inst_31280.push(inst_31284);
var tmp31337 = inst_31280;
var inst_31280__$1 = tmp31337;
var inst_31281 = inst_31288;
var state_31320__$1 = (function (){var statearr_31341 = state_31320;
(statearr_31341[(7)] = inst_31281);

(statearr_31341[(8)] = inst_31280__$1);

(statearr_31341[(14)] = inst_31293);

return statearr_31341;
})();
var statearr_31342_31368 = state_31320__$1;
(statearr_31342_31368[(2)] = null);

(statearr_31342_31368[(1)] = (2));


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
});})(c__28577__auto___31354,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31354,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31346[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31346[(1)] = (1));

return statearr_31346;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31320){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31347){if((e31347 instanceof Object)){
var ex__28469__auto__ = e31347;
var statearr_31348_31369 = state_31320;
(statearr_31348_31369[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31370 = state_31320;
state_31320 = G__31370;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31354,out))
})();
var state__28579__auto__ = (function (){var statearr_31349 = f__28578__auto__.call(null);
(statearr_31349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31354);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31354,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488930771045