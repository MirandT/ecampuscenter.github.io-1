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
var args28623 = [];
var len__25835__auto___28629 = arguments.length;
var i__25836__auto___28630 = (0);
while(true){
if((i__25836__auto___28630 < len__25835__auto___28629)){
args28623.push((arguments[i__25836__auto___28630]));

var G__28631 = (i__25836__auto___28630 + (1));
i__25836__auto___28630 = G__28631;
continue;
} else {
}
break;
}

var G__28625 = args28623.length;
switch (G__28625) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28623.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28626 = (function (f,blockable,meta28627){
this.f = f;
this.blockable = blockable;
this.meta28627 = meta28627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28628,meta28627__$1){
var self__ = this;
var _28628__$1 = this;
return (new cljs.core.async.t_cljs$core$async28626(self__.f,self__.blockable,meta28627__$1));
});

cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28628){
var self__ = this;
var _28628__$1 = this;
return self__.meta28627;
});

cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28627","meta28627",-719660264,null)], null);
});

cljs.core.async.t_cljs$core$async28626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28626";

cljs.core.async.t_cljs$core$async28626.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28626");
});

cljs.core.async.__GT_t_cljs$core$async28626 = (function cljs$core$async$__GT_t_cljs$core$async28626(f__$1,blockable__$1,meta28627){
return (new cljs.core.async.t_cljs$core$async28626(f__$1,blockable__$1,meta28627));
});

}

return (new cljs.core.async.t_cljs$core$async28626(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28635 = [];
var len__25835__auto___28638 = arguments.length;
var i__25836__auto___28639 = (0);
while(true){
if((i__25836__auto___28639 < len__25835__auto___28638)){
args28635.push((arguments[i__25836__auto___28639]));

var G__28640 = (i__25836__auto___28639 + (1));
i__25836__auto___28639 = G__28640;
continue;
} else {
}
break;
}

var G__28637 = args28635.length;
switch (G__28637) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28635.length)].join('')));

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
var args28642 = [];
var len__25835__auto___28645 = arguments.length;
var i__25836__auto___28646 = (0);
while(true){
if((i__25836__auto___28646 < len__25835__auto___28645)){
args28642.push((arguments[i__25836__auto___28646]));

var G__28647 = (i__25836__auto___28646 + (1));
i__25836__auto___28646 = G__28647;
continue;
} else {
}
break;
}

var G__28644 = args28642.length;
switch (G__28644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28642.length)].join('')));

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
var args28649 = [];
var len__25835__auto___28652 = arguments.length;
var i__25836__auto___28653 = (0);
while(true){
if((i__25836__auto___28653 < len__25835__auto___28652)){
args28649.push((arguments[i__25836__auto___28653]));

var G__28654 = (i__25836__auto___28653 + (1));
i__25836__auto___28653 = G__28654;
continue;
} else {
}
break;
}

var G__28651 = args28649.length;
switch (G__28651) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28649.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28656 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28656);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28656,ret){
return (function (){
return fn1.call(null,val_28656);
});})(val_28656,ret))
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
var args28657 = [];
var len__25835__auto___28660 = arguments.length;
var i__25836__auto___28661 = (0);
while(true){
if((i__25836__auto___28661 < len__25835__auto___28660)){
args28657.push((arguments[i__25836__auto___28661]));

var G__28662 = (i__25836__auto___28661 + (1));
i__25836__auto___28661 = G__28662;
continue;
} else {
}
break;
}

var G__28659 = args28657.length;
switch (G__28659) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28657.length)].join('')));

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
var n__25675__auto___28664 = n;
var x_28665 = (0);
while(true){
if((x_28665 < n__25675__auto___28664)){
(a[x_28665] = (0));

var G__28666 = (x_28665 + (1));
x_28665 = G__28666;
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

var G__28667 = (i + (1));
i = G__28667;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28671 = (function (alt_flag,flag,meta28672){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28672 = meta28672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28673,meta28672__$1){
var self__ = this;
var _28673__$1 = this;
return (new cljs.core.async.t_cljs$core$async28671(self__.alt_flag,self__.flag,meta28672__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28673){
var self__ = this;
var _28673__$1 = this;
return self__.meta28672;
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28672","meta28672",-537519056,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28671";

cljs.core.async.t_cljs$core$async28671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28671");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28671 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28671(alt_flag__$1,flag__$1,meta28672){
return (new cljs.core.async.t_cljs$core$async28671(alt_flag__$1,flag__$1,meta28672));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28671(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28677 = (function (alt_handler,flag,cb,meta28678){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28678 = meta28678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28679,meta28678__$1){
var self__ = this;
var _28679__$1 = this;
return (new cljs.core.async.t_cljs$core$async28677(self__.alt_handler,self__.flag,self__.cb,meta28678__$1));
});

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28679){
var self__ = this;
var _28679__$1 = this;
return self__.meta28678;
});

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28678","meta28678",-204935111,null)], null);
});

cljs.core.async.t_cljs$core$async28677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28677";

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28677");
});

cljs.core.async.__GT_t_cljs$core$async28677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28677(alt_handler__$1,flag__$1,cb__$1,meta28678){
return (new cljs.core.async.t_cljs$core$async28677(alt_handler__$1,flag__$1,cb__$1,meta28678));
});

}

return (new cljs.core.async.t_cljs$core$async28677(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28681_SHARP_,port], null));
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
var G__28682 = (i + (1));
i = G__28682;
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
var len__25835__auto___28688 = arguments.length;
var i__25836__auto___28689 = (0);
while(true){
if((i__25836__auto___28689 < len__25835__auto___28688)){
args__25842__auto__.push((arguments[i__25836__auto___28689]));

var G__28690 = (i__25836__auto___28689 + (1));
i__25836__auto___28689 = G__28690;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28685){
var map__28686 = p__28685;
var map__28686__$1 = ((((!((map__28686 == null)))?((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);
var opts = map__28686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28683){
var G__28684 = cljs.core.first.call(null,seq28683);
var seq28683__$1 = cljs.core.next.call(null,seq28683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28684,seq28683__$1);
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
var args28691 = [];
var len__25835__auto___28741 = arguments.length;
var i__25836__auto___28742 = (0);
while(true){
if((i__25836__auto___28742 < len__25835__auto___28741)){
args28691.push((arguments[i__25836__auto___28742]));

var G__28743 = (i__25836__auto___28742 + (1));
i__25836__auto___28742 = G__28743;
continue;
} else {
}
break;
}

var G__28693 = args28691.length;
switch (G__28693) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28691.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28578__auto___28745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___28745){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___28745){
return (function (state_28717){
var state_val_28718 = (state_28717[(1)]);
if((state_val_28718 === (7))){
var inst_28713 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28719_28746 = state_28717__$1;
(statearr_28719_28746[(2)] = inst_28713);

(statearr_28719_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (1))){
var state_28717__$1 = state_28717;
var statearr_28720_28747 = state_28717__$1;
(statearr_28720_28747[(2)] = null);

(statearr_28720_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (4))){
var inst_28696 = (state_28717[(7)]);
var inst_28696__$1 = (state_28717[(2)]);
var inst_28697 = (inst_28696__$1 == null);
var state_28717__$1 = (function (){var statearr_28721 = state_28717;
(statearr_28721[(7)] = inst_28696__$1);

return statearr_28721;
})();
if(cljs.core.truth_(inst_28697)){
var statearr_28722_28748 = state_28717__$1;
(statearr_28722_28748[(1)] = (5));

} else {
var statearr_28723_28749 = state_28717__$1;
(statearr_28723_28749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (13))){
var state_28717__$1 = state_28717;
var statearr_28724_28750 = state_28717__$1;
(statearr_28724_28750[(2)] = null);

(statearr_28724_28750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (6))){
var inst_28696 = (state_28717[(7)]);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28717__$1,(11),to,inst_28696);
} else {
if((state_val_28718 === (3))){
var inst_28715 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28717__$1,inst_28715);
} else {
if((state_val_28718 === (12))){
var state_28717__$1 = state_28717;
var statearr_28725_28751 = state_28717__$1;
(statearr_28725_28751[(2)] = null);

(statearr_28725_28751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (2))){
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28717__$1,(4),from);
} else {
if((state_val_28718 === (11))){
var inst_28706 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
if(cljs.core.truth_(inst_28706)){
var statearr_28726_28752 = state_28717__$1;
(statearr_28726_28752[(1)] = (12));

} else {
var statearr_28727_28753 = state_28717__$1;
(statearr_28727_28753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (9))){
var state_28717__$1 = state_28717;
var statearr_28728_28754 = state_28717__$1;
(statearr_28728_28754[(2)] = null);

(statearr_28728_28754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (5))){
var state_28717__$1 = state_28717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28729_28755 = state_28717__$1;
(statearr_28729_28755[(1)] = (8));

} else {
var statearr_28730_28756 = state_28717__$1;
(statearr_28730_28756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (14))){
var inst_28711 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28731_28757 = state_28717__$1;
(statearr_28731_28757[(2)] = inst_28711);

(statearr_28731_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (10))){
var inst_28703 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28732_28758 = state_28717__$1;
(statearr_28732_28758[(2)] = inst_28703);

(statearr_28732_28758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (8))){
var inst_28700 = cljs.core.async.close_BANG_.call(null,to);
var state_28717__$1 = state_28717;
var statearr_28733_28759 = state_28717__$1;
(statearr_28733_28759[(2)] = inst_28700);

(statearr_28733_28759[(1)] = (10));


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
});})(c__28578__auto___28745))
;
return ((function (switch__28466__auto__,c__28578__auto___28745){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_28737 = [null,null,null,null,null,null,null,null];
(statearr_28737[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_28737[(1)] = (1));

return statearr_28737;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_28717){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_28717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e28738){if((e28738 instanceof Object)){
var ex__28470__auto__ = e28738;
var statearr_28739_28760 = state_28717;
(statearr_28739_28760[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28761 = state_28717;
state_28717 = G__28761;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_28717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_28717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___28745))
})();
var state__28580__auto__ = (function (){var statearr_28740 = f__28579__auto__.call(null);
(statearr_28740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___28745);

return statearr_28740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___28745))
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
return (function (p__28949){
var vec__28950 = p__28949;
var v = cljs.core.nth.call(null,vec__28950,(0),null);
var p = cljs.core.nth.call(null,vec__28950,(1),null);
var job = vec__28950;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28578__auto___29136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28957__$1,(2),res,v);
} else {
if((state_val_28958 === (2))){
var inst_28954 = (state_28957[(2)]);
var inst_28955 = cljs.core.async.close_BANG_.call(null,res);
var state_28957__$1 = (function (){var statearr_28959 = state_28957;
(statearr_28959[(7)] = inst_28954);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
return null;
}
}
});})(c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results))
;
return ((function (switch__28466__auto__,c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_28963 = [null,null,null,null,null,null,null,null];
(statearr_28963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__);

(statearr_28963[(1)] = (1));

return statearr_28963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1 = (function (state_28957){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e28964){if((e28964 instanceof Object)){
var ex__28470__auto__ = e28964;
var statearr_28965_29137 = state_28957;
(statearr_28965_29137[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29138 = state_28957;
state_28957 = G__29138;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results))
})();
var state__28580__auto__ = (function (){var statearr_28966 = f__28579__auto__.call(null);
(statearr_28966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29136);

return statearr_28966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___29136,res,vec__28950,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28967){
var vec__28968 = p__28967;
var v = cljs.core.nth.call(null,vec__28968,(0),null);
var p = cljs.core.nth.call(null,vec__28968,(1),null);
var job = vec__28968;
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
var n__25675__auto___29139 = n;
var __29140 = (0);
while(true){
if((__29140 < n__25675__auto___29139)){
var G__28971_29141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28971_29141) {
case "compute":
var c__28578__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29140,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (__29140,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (1))){
var state_28984__$1 = state_28984;
var statearr_28986_29144 = state_28984__$1;
(statearr_28986_29144[(2)] = null);

(statearr_28986_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (2))){
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(4),jobs);
} else {
if((state_val_28985 === (3))){
var inst_28982 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (4))){
var inst_28974 = (state_28984[(2)]);
var inst_28975 = process.call(null,inst_28974);
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28975)){
var statearr_28987_29145 = state_28984__$1;
(statearr_28987_29145[(1)] = (5));

} else {
var statearr_28988_29146 = state_28984__$1;
(statearr_28988_29146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (5))){
var state_28984__$1 = state_28984;
var statearr_28989_29147 = state_28984__$1;
(statearr_28989_29147[(2)] = null);

(statearr_28989_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (6))){
var state_28984__$1 = state_28984;
var statearr_28990_29148 = state_28984__$1;
(statearr_28990_29148[(2)] = null);

(statearr_28990_29148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (7))){
var inst_28980 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28991_29149 = state_28984__$1;
(statearr_28991_29149[(2)] = inst_28980);

(statearr_28991_29149[(1)] = (3));


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
});})(__29140,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
;
return ((function (__29140,switch__28466__auto__,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_28995 = [null,null,null,null,null,null,null];
(statearr_28995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1 = (function (state_28984){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__28470__auto__ = e28996;
var statearr_28997_29150 = state_28984;
(statearr_28997_29150[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29151 = state_28984;
state_28984 = G__29151;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__;
})()
;})(__29140,switch__28466__auto__,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
})();
var state__28580__auto__ = (function (){var statearr_28998 = f__28579__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29143);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(__29140,c__28578__auto___29143,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
);


break;
case "async":
var c__28578__auto___29152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29140,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (__29140,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function (state_29011){
var state_val_29012 = (state_29011[(1)]);
if((state_val_29012 === (1))){
var state_29011__$1 = state_29011;
var statearr_29013_29153 = state_29011__$1;
(statearr_29013_29153[(2)] = null);

(statearr_29013_29153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (2))){
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(4),jobs);
} else {
if((state_val_29012 === (3))){
var inst_29009 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29011__$1,inst_29009);
} else {
if((state_val_29012 === (4))){
var inst_29001 = (state_29011[(2)]);
var inst_29002 = async.call(null,inst_29001);
var state_29011__$1 = state_29011;
if(cljs.core.truth_(inst_29002)){
var statearr_29014_29154 = state_29011__$1;
(statearr_29014_29154[(1)] = (5));

} else {
var statearr_29015_29155 = state_29011__$1;
(statearr_29015_29155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (5))){
var state_29011__$1 = state_29011;
var statearr_29016_29156 = state_29011__$1;
(statearr_29016_29156[(2)] = null);

(statearr_29016_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (6))){
var state_29011__$1 = state_29011;
var statearr_29017_29157 = state_29011__$1;
(statearr_29017_29157[(2)] = null);

(statearr_29017_29157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (7))){
var inst_29007 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29018_29158 = state_29011__$1;
(statearr_29018_29158[(2)] = inst_29007);

(statearr_29018_29158[(1)] = (3));


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
});})(__29140,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
;
return ((function (__29140,switch__28466__auto__,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_29022 = [null,null,null,null,null,null,null];
(statearr_29022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__);

(statearr_29022[(1)] = (1));

return statearr_29022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1 = (function (state_29011){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29023){if((e29023 instanceof Object)){
var ex__28470__auto__ = e29023;
var statearr_29024_29159 = state_29011;
(statearr_29024_29159[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29160 = state_29011;
state_29011 = G__29160;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = function(state_29011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1.call(this,state_29011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__;
})()
;})(__29140,switch__28466__auto__,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
})();
var state__28580__auto__ = (function (){var statearr_29025 = f__28579__auto__.call(null);
(statearr_29025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29152);

return statearr_29025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(__29140,c__28578__auto___29152,G__28971_29141,n__25675__auto___29139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29161 = (__29140 + (1));
__29140 = G__29161;
continue;
} else {
}
break;
}

var c__28578__auto___29162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___29162,jobs,results,process,async){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___29162,jobs,results,process,async){
return (function (state_29047){
var state_val_29048 = (state_29047[(1)]);
if((state_val_29048 === (1))){
var state_29047__$1 = state_29047;
var statearr_29049_29163 = state_29047__$1;
(statearr_29049_29163[(2)] = null);

(statearr_29049_29163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (2))){
var state_29047__$1 = state_29047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29047__$1,(4),from);
} else {
if((state_val_29048 === (3))){
var inst_29045 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29047__$1,inst_29045);
} else {
if((state_val_29048 === (4))){
var inst_29028 = (state_29047[(7)]);
var inst_29028__$1 = (state_29047[(2)]);
var inst_29029 = (inst_29028__$1 == null);
var state_29047__$1 = (function (){var statearr_29050 = state_29047;
(statearr_29050[(7)] = inst_29028__$1);

return statearr_29050;
})();
if(cljs.core.truth_(inst_29029)){
var statearr_29051_29164 = state_29047__$1;
(statearr_29051_29164[(1)] = (5));

} else {
var statearr_29052_29165 = state_29047__$1;
(statearr_29052_29165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (5))){
var inst_29031 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29047__$1 = state_29047;
var statearr_29053_29166 = state_29047__$1;
(statearr_29053_29166[(2)] = inst_29031);

(statearr_29053_29166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (6))){
var inst_29028 = (state_29047[(7)]);
var inst_29033 = (state_29047[(8)]);
var inst_29033__$1 = cljs.core.async.chan.call(null,(1));
var inst_29034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29035 = [inst_29028,inst_29033__$1];
var inst_29036 = (new cljs.core.PersistentVector(null,2,(5),inst_29034,inst_29035,null));
var state_29047__$1 = (function (){var statearr_29054 = state_29047;
(statearr_29054[(8)] = inst_29033__$1);

return statearr_29054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29047__$1,(8),jobs,inst_29036);
} else {
if((state_val_29048 === (7))){
var inst_29043 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29055_29167 = state_29047__$1;
(statearr_29055_29167[(2)] = inst_29043);

(statearr_29055_29167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (8))){
var inst_29033 = (state_29047[(8)]);
var inst_29038 = (state_29047[(2)]);
var state_29047__$1 = (function (){var statearr_29056 = state_29047;
(statearr_29056[(9)] = inst_29038);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29047__$1,(9),results,inst_29033);
} else {
if((state_val_29048 === (9))){
var inst_29040 = (state_29047[(2)]);
var state_29047__$1 = (function (){var statearr_29057 = state_29047;
(statearr_29057[(10)] = inst_29040);

return statearr_29057;
})();
var statearr_29058_29168 = state_29047__$1;
(statearr_29058_29168[(2)] = null);

(statearr_29058_29168[(1)] = (2));


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
});})(c__28578__auto___29162,jobs,results,process,async))
;
return ((function (switch__28466__auto__,c__28578__auto___29162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1 = (function (state_29047){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object)){
var ex__28470__auto__ = e29063;
var statearr_29064_29169 = state_29047;
(statearr_29064_29169[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29170 = state_29047;
state_29047 = G__29170;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = function(state_29047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1.call(this,state_29047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___29162,jobs,results,process,async))
})();
var state__28580__auto__ = (function (){var statearr_29065 = f__28579__auto__.call(null);
(statearr_29065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29162);

return statearr_29065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___29162,jobs,results,process,async))
);


var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,jobs,results,process,async){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__,jobs,results,process,async){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29105_29171 = state_29103__$1;
(statearr_29105_29171[(2)] = inst_29099);

(statearr_29105_29171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (20))){
var state_29103__$1 = state_29103;
var statearr_29106_29172 = state_29103__$1;
(statearr_29106_29172[(2)] = null);

(statearr_29106_29172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (1))){
var state_29103__$1 = state_29103;
var statearr_29107_29173 = state_29103__$1;
(statearr_29107_29173[(2)] = null);

(statearr_29107_29173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29068 = (state_29103[(7)]);
var inst_29068__$1 = (state_29103[(2)]);
var inst_29069 = (inst_29068__$1 == null);
var state_29103__$1 = (function (){var statearr_29108 = state_29103;
(statearr_29108[(7)] = inst_29068__$1);

return statearr_29108;
})();
if(cljs.core.truth_(inst_29069)){
var statearr_29109_29174 = state_29103__$1;
(statearr_29109_29174[(1)] = (5));

} else {
var statearr_29110_29175 = state_29103__$1;
(statearr_29110_29175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (15))){
var inst_29081 = (state_29103[(8)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(18),to,inst_29081);
} else {
if((state_val_29104 === (21))){
var inst_29094 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29111_29176 = state_29103__$1;
(statearr_29111_29176[(2)] = inst_29094);

(statearr_29111_29176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (13))){
var inst_29096 = (state_29103[(2)]);
var state_29103__$1 = (function (){var statearr_29112 = state_29103;
(statearr_29112[(9)] = inst_29096);

return statearr_29112;
})();
var statearr_29113_29177 = state_29103__$1;
(statearr_29113_29177[(2)] = null);

(statearr_29113_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29068 = (state_29103[(7)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(11),inst_29068);
} else {
if((state_val_29104 === (17))){
var inst_29089 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29089)){
var statearr_29114_29178 = state_29103__$1;
(statearr_29114_29178[(1)] = (19));

} else {
var statearr_29115_29179 = state_29103__$1;
(statearr_29115_29179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (12))){
var inst_29078 = (state_29103[(10)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(14),inst_29078);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),results);
} else {
if((state_val_29104 === (19))){
var state_29103__$1 = state_29103;
var statearr_29116_29180 = state_29103__$1;
(statearr_29116_29180[(2)] = null);

(statearr_29116_29180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (11))){
var inst_29078 = (state_29103[(2)]);
var state_29103__$1 = (function (){var statearr_29117 = state_29103;
(statearr_29117[(10)] = inst_29078);

return statearr_29117;
})();
var statearr_29118_29181 = state_29103__$1;
(statearr_29118_29181[(2)] = null);

(statearr_29118_29181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (9))){
var state_29103__$1 = state_29103;
var statearr_29119_29182 = state_29103__$1;
(statearr_29119_29182[(2)] = null);

(statearr_29119_29182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (5))){
var state_29103__$1 = state_29103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29120_29183 = state_29103__$1;
(statearr_29120_29183[(1)] = (8));

} else {
var statearr_29121_29184 = state_29103__$1;
(statearr_29121_29184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (14))){
var inst_29083 = (state_29103[(11)]);
var inst_29081 = (state_29103[(8)]);
var inst_29081__$1 = (state_29103[(2)]);
var inst_29082 = (inst_29081__$1 == null);
var inst_29083__$1 = cljs.core.not.call(null,inst_29082);
var state_29103__$1 = (function (){var statearr_29122 = state_29103;
(statearr_29122[(11)] = inst_29083__$1);

(statearr_29122[(8)] = inst_29081__$1);

return statearr_29122;
})();
if(inst_29083__$1){
var statearr_29123_29185 = state_29103__$1;
(statearr_29123_29185[(1)] = (15));

} else {
var statearr_29124_29186 = state_29103__$1;
(statearr_29124_29186[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (16))){
var inst_29083 = (state_29103[(11)]);
var state_29103__$1 = state_29103;
var statearr_29125_29187 = state_29103__$1;
(statearr_29125_29187[(2)] = inst_29083);

(statearr_29125_29187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (10))){
var inst_29075 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29126_29188 = state_29103__$1;
(statearr_29126_29188[(2)] = inst_29075);

(statearr_29126_29188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (18))){
var inst_29086 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29127_29189 = state_29103__$1;
(statearr_29127_29189[(2)] = inst_29086);

(statearr_29127_29189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29072 = cljs.core.async.close_BANG_.call(null,to);
var state_29103__$1 = state_29103;
var statearr_29128_29190 = state_29103__$1;
(statearr_29128_29190[(2)] = inst_29072);

(statearr_29128_29190[(1)] = (10));


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
});})(c__28578__auto__,jobs,results,process,async))
;
return ((function (switch__28466__auto__,c__28578__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_29132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__);

(statearr_29132[(1)] = (1));

return statearr_29132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1 = (function (state_29103){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29133){if((e29133 instanceof Object)){
var ex__28470__auto__ = e29133;
var statearr_29134_29191 = state_29103;
(statearr_29134_29191[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29192 = state_29103;
state_29103 = G__29192;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__,jobs,results,process,async))
})();
var state__28580__auto__ = (function (){var statearr_29135 = f__28579__auto__.call(null);
(statearr_29135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_29135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,jobs,results,process,async))
);

return c__28578__auto__;
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
var args29193 = [];
var len__25835__auto___29196 = arguments.length;
var i__25836__auto___29197 = (0);
while(true){
if((i__25836__auto___29197 < len__25835__auto___29196)){
args29193.push((arguments[i__25836__auto___29197]));

var G__29198 = (i__25836__auto___29197 + (1));
i__25836__auto___29197 = G__29198;
continue;
} else {
}
break;
}

var G__29195 = args29193.length;
switch (G__29195) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29193.length)].join('')));

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
var args29200 = [];
var len__25835__auto___29203 = arguments.length;
var i__25836__auto___29204 = (0);
while(true){
if((i__25836__auto___29204 < len__25835__auto___29203)){
args29200.push((arguments[i__25836__auto___29204]));

var G__29205 = (i__25836__auto___29204 + (1));
i__25836__auto___29204 = G__29205;
continue;
} else {
}
break;
}

var G__29202 = args29200.length;
switch (G__29202) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29200.length)].join('')));

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
var args29207 = [];
var len__25835__auto___29260 = arguments.length;
var i__25836__auto___29261 = (0);
while(true){
if((i__25836__auto___29261 < len__25835__auto___29260)){
args29207.push((arguments[i__25836__auto___29261]));

var G__29262 = (i__25836__auto___29261 + (1));
i__25836__auto___29261 = G__29262;
continue;
} else {
}
break;
}

var G__29209 = args29207.length;
switch (G__29209) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29207.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28578__auto___29264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___29264,tc,fc){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___29264,tc,fc){
return (function (state_29235){
var state_val_29236 = (state_29235[(1)]);
if((state_val_29236 === (7))){
var inst_29231 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29237_29265 = state_29235__$1;
(statearr_29237_29265[(2)] = inst_29231);

(statearr_29237_29265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (1))){
var state_29235__$1 = state_29235;
var statearr_29238_29266 = state_29235__$1;
(statearr_29238_29266[(2)] = null);

(statearr_29238_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (4))){
var inst_29212 = (state_29235[(7)]);
var inst_29212__$1 = (state_29235[(2)]);
var inst_29213 = (inst_29212__$1 == null);
var state_29235__$1 = (function (){var statearr_29239 = state_29235;
(statearr_29239[(7)] = inst_29212__$1);

return statearr_29239;
})();
if(cljs.core.truth_(inst_29213)){
var statearr_29240_29267 = state_29235__$1;
(statearr_29240_29267[(1)] = (5));

} else {
var statearr_29241_29268 = state_29235__$1;
(statearr_29241_29268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (13))){
var state_29235__$1 = state_29235;
var statearr_29242_29269 = state_29235__$1;
(statearr_29242_29269[(2)] = null);

(statearr_29242_29269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (6))){
var inst_29212 = (state_29235[(7)]);
var inst_29218 = p.call(null,inst_29212);
var state_29235__$1 = state_29235;
if(cljs.core.truth_(inst_29218)){
var statearr_29243_29270 = state_29235__$1;
(statearr_29243_29270[(1)] = (9));

} else {
var statearr_29244_29271 = state_29235__$1;
(statearr_29244_29271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (3))){
var inst_29233 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29235__$1,inst_29233);
} else {
if((state_val_29236 === (12))){
var state_29235__$1 = state_29235;
var statearr_29245_29272 = state_29235__$1;
(statearr_29245_29272[(2)] = null);

(statearr_29245_29272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (2))){
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29235__$1,(4),ch);
} else {
if((state_val_29236 === (11))){
var inst_29212 = (state_29235[(7)]);
var inst_29222 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29235__$1,(8),inst_29222,inst_29212);
} else {
if((state_val_29236 === (9))){
var state_29235__$1 = state_29235;
var statearr_29246_29273 = state_29235__$1;
(statearr_29246_29273[(2)] = tc);

(statearr_29246_29273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (5))){
var inst_29215 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29216 = cljs.core.async.close_BANG_.call(null,fc);
var state_29235__$1 = (function (){var statearr_29247 = state_29235;
(statearr_29247[(8)] = inst_29215);

return statearr_29247;
})();
var statearr_29248_29274 = state_29235__$1;
(statearr_29248_29274[(2)] = inst_29216);

(statearr_29248_29274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (14))){
var inst_29229 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29249_29275 = state_29235__$1;
(statearr_29249_29275[(2)] = inst_29229);

(statearr_29249_29275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (10))){
var state_29235__$1 = state_29235;
var statearr_29250_29276 = state_29235__$1;
(statearr_29250_29276[(2)] = fc);

(statearr_29250_29276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (8))){
var inst_29224 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
if(cljs.core.truth_(inst_29224)){
var statearr_29251_29277 = state_29235__$1;
(statearr_29251_29277[(1)] = (12));

} else {
var statearr_29252_29278 = state_29235__$1;
(statearr_29252_29278[(1)] = (13));

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
});})(c__28578__auto___29264,tc,fc))
;
return ((function (switch__28466__auto__,c__28578__auto___29264,tc,fc){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_29235){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29257){if((e29257 instanceof Object)){
var ex__28470__auto__ = e29257;
var statearr_29258_29279 = state_29235;
(statearr_29258_29279[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29280 = state_29235;
state_29235 = G__29280;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_29235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_29235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___29264,tc,fc))
})();
var state__28580__auto__ = (function (){var statearr_29259 = f__28579__auto__.call(null);
(statearr_29259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29264);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___29264,tc,fc))
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
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (7))){
var inst_29340 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29346_29367 = state_29344__$1;
(statearr_29346_29367[(2)] = inst_29340);

(statearr_29346_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (1))){
var inst_29324 = init;
var state_29344__$1 = (function (){var statearr_29347 = state_29344;
(statearr_29347[(7)] = inst_29324);

return statearr_29347;
})();
var statearr_29348_29368 = state_29344__$1;
(statearr_29348_29368[(2)] = null);

(statearr_29348_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (4))){
var inst_29327 = (state_29344[(8)]);
var inst_29327__$1 = (state_29344[(2)]);
var inst_29328 = (inst_29327__$1 == null);
var state_29344__$1 = (function (){var statearr_29349 = state_29344;
(statearr_29349[(8)] = inst_29327__$1);

return statearr_29349;
})();
if(cljs.core.truth_(inst_29328)){
var statearr_29350_29369 = state_29344__$1;
(statearr_29350_29369[(1)] = (5));

} else {
var statearr_29351_29370 = state_29344__$1;
(statearr_29351_29370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (6))){
var inst_29331 = (state_29344[(9)]);
var inst_29327 = (state_29344[(8)]);
var inst_29324 = (state_29344[(7)]);
var inst_29331__$1 = f.call(null,inst_29324,inst_29327);
var inst_29332 = cljs.core.reduced_QMARK_.call(null,inst_29331__$1);
var state_29344__$1 = (function (){var statearr_29352 = state_29344;
(statearr_29352[(9)] = inst_29331__$1);

return statearr_29352;
})();
if(inst_29332){
var statearr_29353_29371 = state_29344__$1;
(statearr_29353_29371[(1)] = (8));

} else {
var statearr_29354_29372 = state_29344__$1;
(statearr_29354_29372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (3))){
var inst_29342 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29344__$1,inst_29342);
} else {
if((state_val_29345 === (2))){
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29344__$1,(4),ch);
} else {
if((state_val_29345 === (9))){
var inst_29331 = (state_29344[(9)]);
var inst_29324 = inst_29331;
var state_29344__$1 = (function (){var statearr_29355 = state_29344;
(statearr_29355[(7)] = inst_29324);

return statearr_29355;
})();
var statearr_29356_29373 = state_29344__$1;
(statearr_29356_29373[(2)] = null);

(statearr_29356_29373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (5))){
var inst_29324 = (state_29344[(7)]);
var state_29344__$1 = state_29344;
var statearr_29357_29374 = state_29344__$1;
(statearr_29357_29374[(2)] = inst_29324);

(statearr_29357_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (10))){
var inst_29338 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29358_29375 = state_29344__$1;
(statearr_29358_29375[(2)] = inst_29338);

(statearr_29358_29375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (8))){
var inst_29331 = (state_29344[(9)]);
var inst_29334 = cljs.core.deref.call(null,inst_29331);
var state_29344__$1 = state_29344;
var statearr_29359_29376 = state_29344__$1;
(statearr_29359_29376[(2)] = inst_29334);

(statearr_29359_29376[(1)] = (10));


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
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28467__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28467__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = cljs$core$async$reduce_$_state_machine__28467__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var cljs$core$async$reduce_$_state_machine__28467__auto____1 = (function (state_29344){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__28470__auto__ = e29364;
var statearr_29365_29377 = state_29344;
(statearr_29365_29377[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29344;
state_29344 = G__29378;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28467__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28467__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28467__auto____0;
cljs$core$async$reduce_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28467__auto____1;
return cljs$core$async$reduce_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_29366 = f__28579__auto__.call(null);
(statearr_29366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
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
var args29379 = [];
var len__25835__auto___29431 = arguments.length;
var i__25836__auto___29432 = (0);
while(true){
if((i__25836__auto___29432 < len__25835__auto___29431)){
args29379.push((arguments[i__25836__auto___29432]));

var G__29433 = (i__25836__auto___29432 + (1));
i__25836__auto___29432 = G__29433;
continue;
} else {
}
break;
}

var G__29381 = args29379.length;
switch (G__29381) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29379.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_29406){
var state_val_29407 = (state_29406[(1)]);
if((state_val_29407 === (7))){
var inst_29388 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29408_29435 = state_29406__$1;
(statearr_29408_29435[(2)] = inst_29388);

(statearr_29408_29435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (1))){
var inst_29382 = cljs.core.seq.call(null,coll);
var inst_29383 = inst_29382;
var state_29406__$1 = (function (){var statearr_29409 = state_29406;
(statearr_29409[(7)] = inst_29383);

return statearr_29409;
})();
var statearr_29410_29436 = state_29406__$1;
(statearr_29410_29436[(2)] = null);

(statearr_29410_29436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (4))){
var inst_29383 = (state_29406[(7)]);
var inst_29386 = cljs.core.first.call(null,inst_29383);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29406__$1,(7),ch,inst_29386);
} else {
if((state_val_29407 === (13))){
var inst_29400 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29411_29437 = state_29406__$1;
(statearr_29411_29437[(2)] = inst_29400);

(statearr_29411_29437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (6))){
var inst_29391 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29391)){
var statearr_29412_29438 = state_29406__$1;
(statearr_29412_29438[(1)] = (8));

} else {
var statearr_29413_29439 = state_29406__$1;
(statearr_29413_29439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (3))){
var inst_29404 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29406__$1,inst_29404);
} else {
if((state_val_29407 === (12))){
var state_29406__$1 = state_29406;
var statearr_29414_29440 = state_29406__$1;
(statearr_29414_29440[(2)] = null);

(statearr_29414_29440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (2))){
var inst_29383 = (state_29406[(7)]);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29383)){
var statearr_29415_29441 = state_29406__$1;
(statearr_29415_29441[(1)] = (4));

} else {
var statearr_29416_29442 = state_29406__$1;
(statearr_29416_29442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (11))){
var inst_29397 = cljs.core.async.close_BANG_.call(null,ch);
var state_29406__$1 = state_29406;
var statearr_29417_29443 = state_29406__$1;
(statearr_29417_29443[(2)] = inst_29397);

(statearr_29417_29443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (9))){
var state_29406__$1 = state_29406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29418_29444 = state_29406__$1;
(statearr_29418_29444[(1)] = (11));

} else {
var statearr_29419_29445 = state_29406__$1;
(statearr_29419_29445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (5))){
var inst_29383 = (state_29406[(7)]);
var state_29406__$1 = state_29406;
var statearr_29420_29446 = state_29406__$1;
(statearr_29420_29446[(2)] = inst_29383);

(statearr_29420_29446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (10))){
var inst_29402 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29421_29447 = state_29406__$1;
(statearr_29421_29447[(2)] = inst_29402);

(statearr_29421_29447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (8))){
var inst_29383 = (state_29406[(7)]);
var inst_29393 = cljs.core.next.call(null,inst_29383);
var inst_29383__$1 = inst_29393;
var state_29406__$1 = (function (){var statearr_29422 = state_29406;
(statearr_29422[(7)] = inst_29383__$1);

return statearr_29422;
})();
var statearr_29423_29448 = state_29406__$1;
(statearr_29423_29448[(2)] = null);

(statearr_29423_29448[(1)] = (2));


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
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_29427 = [null,null,null,null,null,null,null,null];
(statearr_29427[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_29427[(1)] = (1));

return statearr_29427;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_29406){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29428){if((e29428 instanceof Object)){
var ex__28470__auto__ = e29428;
var statearr_29429_29449 = state_29406;
(statearr_29429_29449[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29450 = state_29406;
state_29406 = G__29450;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_29406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_29406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_29430 = f__28579__auto__.call(null);
(statearr_29430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_29430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29676 = (function (mult,ch,cs,meta29677){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29677 = meta29677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29678,meta29677__$1){
var self__ = this;
var _29678__$1 = this;
return (new cljs.core.async.t_cljs$core$async29676(self__.mult,self__.ch,self__.cs,meta29677__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29678){
var self__ = this;
var _29678__$1 = this;
return self__.meta29677;
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29677","meta29677",1919473920,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29676";

cljs.core.async.t_cljs$core$async29676.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29676");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29676 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29676(mult__$1,ch__$1,cs__$1,meta29677){
return (new cljs.core.async.t_cljs$core$async29676(mult__$1,ch__$1,cs__$1,meta29677));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29676(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28578__auto___29901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___29901,cs,m,dchan,dctr,done){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___29901,cs,m,dchan,dctr,done){
return (function (state_29813){
var state_val_29814 = (state_29813[(1)]);
if((state_val_29814 === (7))){
var inst_29809 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29815_29902 = state_29813__$1;
(statearr_29815_29902[(2)] = inst_29809);

(statearr_29815_29902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (20))){
var inst_29712 = (state_29813[(7)]);
var inst_29724 = cljs.core.first.call(null,inst_29712);
var inst_29725 = cljs.core.nth.call(null,inst_29724,(0),null);
var inst_29726 = cljs.core.nth.call(null,inst_29724,(1),null);
var state_29813__$1 = (function (){var statearr_29816 = state_29813;
(statearr_29816[(8)] = inst_29725);

return statearr_29816;
})();
if(cljs.core.truth_(inst_29726)){
var statearr_29817_29903 = state_29813__$1;
(statearr_29817_29903[(1)] = (22));

} else {
var statearr_29818_29904 = state_29813__$1;
(statearr_29818_29904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (27))){
var inst_29681 = (state_29813[(9)]);
var inst_29756 = (state_29813[(10)]);
var inst_29754 = (state_29813[(11)]);
var inst_29761 = (state_29813[(12)]);
var inst_29761__$1 = cljs.core._nth.call(null,inst_29754,inst_29756);
var inst_29762 = cljs.core.async.put_BANG_.call(null,inst_29761__$1,inst_29681,done);
var state_29813__$1 = (function (){var statearr_29819 = state_29813;
(statearr_29819[(12)] = inst_29761__$1);

return statearr_29819;
})();
if(cljs.core.truth_(inst_29762)){
var statearr_29820_29905 = state_29813__$1;
(statearr_29820_29905[(1)] = (30));

} else {
var statearr_29821_29906 = state_29813__$1;
(statearr_29821_29906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (1))){
var state_29813__$1 = state_29813;
var statearr_29822_29907 = state_29813__$1;
(statearr_29822_29907[(2)] = null);

(statearr_29822_29907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (24))){
var inst_29712 = (state_29813[(7)]);
var inst_29731 = (state_29813[(2)]);
var inst_29732 = cljs.core.next.call(null,inst_29712);
var inst_29690 = inst_29732;
var inst_29691 = null;
var inst_29692 = (0);
var inst_29693 = (0);
var state_29813__$1 = (function (){var statearr_29823 = state_29813;
(statearr_29823[(13)] = inst_29692);

(statearr_29823[(14)] = inst_29731);

(statearr_29823[(15)] = inst_29693);

(statearr_29823[(16)] = inst_29690);

(statearr_29823[(17)] = inst_29691);

return statearr_29823;
})();
var statearr_29824_29908 = state_29813__$1;
(statearr_29824_29908[(2)] = null);

(statearr_29824_29908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (39))){
var state_29813__$1 = state_29813;
var statearr_29828_29909 = state_29813__$1;
(statearr_29828_29909[(2)] = null);

(statearr_29828_29909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (4))){
var inst_29681 = (state_29813[(9)]);
var inst_29681__$1 = (state_29813[(2)]);
var inst_29682 = (inst_29681__$1 == null);
var state_29813__$1 = (function (){var statearr_29829 = state_29813;
(statearr_29829[(9)] = inst_29681__$1);

return statearr_29829;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29830_29910 = state_29813__$1;
(statearr_29830_29910[(1)] = (5));

} else {
var statearr_29831_29911 = state_29813__$1;
(statearr_29831_29911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (15))){
var inst_29692 = (state_29813[(13)]);
var inst_29693 = (state_29813[(15)]);
var inst_29690 = (state_29813[(16)]);
var inst_29691 = (state_29813[(17)]);
var inst_29708 = (state_29813[(2)]);
var inst_29709 = (inst_29693 + (1));
var tmp29825 = inst_29692;
var tmp29826 = inst_29690;
var tmp29827 = inst_29691;
var inst_29690__$1 = tmp29826;
var inst_29691__$1 = tmp29827;
var inst_29692__$1 = tmp29825;
var inst_29693__$1 = inst_29709;
var state_29813__$1 = (function (){var statearr_29832 = state_29813;
(statearr_29832[(18)] = inst_29708);

(statearr_29832[(13)] = inst_29692__$1);

(statearr_29832[(15)] = inst_29693__$1);

(statearr_29832[(16)] = inst_29690__$1);

(statearr_29832[(17)] = inst_29691__$1);

return statearr_29832;
})();
var statearr_29833_29912 = state_29813__$1;
(statearr_29833_29912[(2)] = null);

(statearr_29833_29912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (21))){
var inst_29735 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29837_29913 = state_29813__$1;
(statearr_29837_29913[(2)] = inst_29735);

(statearr_29837_29913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (31))){
var inst_29761 = (state_29813[(12)]);
var inst_29765 = done.call(null,null);
var inst_29766 = cljs.core.async.untap_STAR_.call(null,m,inst_29761);
var state_29813__$1 = (function (){var statearr_29838 = state_29813;
(statearr_29838[(19)] = inst_29765);

return statearr_29838;
})();
var statearr_29839_29914 = state_29813__$1;
(statearr_29839_29914[(2)] = inst_29766);

(statearr_29839_29914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (32))){
var inst_29755 = (state_29813[(20)]);
var inst_29756 = (state_29813[(10)]);
var inst_29754 = (state_29813[(11)]);
var inst_29753 = (state_29813[(21)]);
var inst_29768 = (state_29813[(2)]);
var inst_29769 = (inst_29756 + (1));
var tmp29834 = inst_29755;
var tmp29835 = inst_29754;
var tmp29836 = inst_29753;
var inst_29753__$1 = tmp29836;
var inst_29754__$1 = tmp29835;
var inst_29755__$1 = tmp29834;
var inst_29756__$1 = inst_29769;
var state_29813__$1 = (function (){var statearr_29840 = state_29813;
(statearr_29840[(20)] = inst_29755__$1);

(statearr_29840[(22)] = inst_29768);

(statearr_29840[(10)] = inst_29756__$1);

(statearr_29840[(11)] = inst_29754__$1);

(statearr_29840[(21)] = inst_29753__$1);

return statearr_29840;
})();
var statearr_29841_29915 = state_29813__$1;
(statearr_29841_29915[(2)] = null);

(statearr_29841_29915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (40))){
var inst_29781 = (state_29813[(23)]);
var inst_29785 = done.call(null,null);
var inst_29786 = cljs.core.async.untap_STAR_.call(null,m,inst_29781);
var state_29813__$1 = (function (){var statearr_29842 = state_29813;
(statearr_29842[(24)] = inst_29785);

return statearr_29842;
})();
var statearr_29843_29916 = state_29813__$1;
(statearr_29843_29916[(2)] = inst_29786);

(statearr_29843_29916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (33))){
var inst_29772 = (state_29813[(25)]);
var inst_29774 = cljs.core.chunked_seq_QMARK_.call(null,inst_29772);
var state_29813__$1 = state_29813;
if(inst_29774){
var statearr_29844_29917 = state_29813__$1;
(statearr_29844_29917[(1)] = (36));

} else {
var statearr_29845_29918 = state_29813__$1;
(statearr_29845_29918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (13))){
var inst_29702 = (state_29813[(26)]);
var inst_29705 = cljs.core.async.close_BANG_.call(null,inst_29702);
var state_29813__$1 = state_29813;
var statearr_29846_29919 = state_29813__$1;
(statearr_29846_29919[(2)] = inst_29705);

(statearr_29846_29919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (22))){
var inst_29725 = (state_29813[(8)]);
var inst_29728 = cljs.core.async.close_BANG_.call(null,inst_29725);
var state_29813__$1 = state_29813;
var statearr_29847_29920 = state_29813__$1;
(statearr_29847_29920[(2)] = inst_29728);

(statearr_29847_29920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (36))){
var inst_29772 = (state_29813[(25)]);
var inst_29776 = cljs.core.chunk_first.call(null,inst_29772);
var inst_29777 = cljs.core.chunk_rest.call(null,inst_29772);
var inst_29778 = cljs.core.count.call(null,inst_29776);
var inst_29753 = inst_29777;
var inst_29754 = inst_29776;
var inst_29755 = inst_29778;
var inst_29756 = (0);
var state_29813__$1 = (function (){var statearr_29848 = state_29813;
(statearr_29848[(20)] = inst_29755);

(statearr_29848[(10)] = inst_29756);

(statearr_29848[(11)] = inst_29754);

(statearr_29848[(21)] = inst_29753);

return statearr_29848;
})();
var statearr_29849_29921 = state_29813__$1;
(statearr_29849_29921[(2)] = null);

(statearr_29849_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (41))){
var inst_29772 = (state_29813[(25)]);
var inst_29788 = (state_29813[(2)]);
var inst_29789 = cljs.core.next.call(null,inst_29772);
var inst_29753 = inst_29789;
var inst_29754 = null;
var inst_29755 = (0);
var inst_29756 = (0);
var state_29813__$1 = (function (){var statearr_29850 = state_29813;
(statearr_29850[(20)] = inst_29755);

(statearr_29850[(27)] = inst_29788);

(statearr_29850[(10)] = inst_29756);

(statearr_29850[(11)] = inst_29754);

(statearr_29850[(21)] = inst_29753);

return statearr_29850;
})();
var statearr_29851_29922 = state_29813__$1;
(statearr_29851_29922[(2)] = null);

(statearr_29851_29922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (43))){
var state_29813__$1 = state_29813;
var statearr_29852_29923 = state_29813__$1;
(statearr_29852_29923[(2)] = null);

(statearr_29852_29923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (29))){
var inst_29797 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29853_29924 = state_29813__$1;
(statearr_29853_29924[(2)] = inst_29797);

(statearr_29853_29924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (44))){
var inst_29806 = (state_29813[(2)]);
var state_29813__$1 = (function (){var statearr_29854 = state_29813;
(statearr_29854[(28)] = inst_29806);

return statearr_29854;
})();
var statearr_29855_29925 = state_29813__$1;
(statearr_29855_29925[(2)] = null);

(statearr_29855_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (6))){
var inst_29745 = (state_29813[(29)]);
var inst_29744 = cljs.core.deref.call(null,cs);
var inst_29745__$1 = cljs.core.keys.call(null,inst_29744);
var inst_29746 = cljs.core.count.call(null,inst_29745__$1);
var inst_29747 = cljs.core.reset_BANG_.call(null,dctr,inst_29746);
var inst_29752 = cljs.core.seq.call(null,inst_29745__$1);
var inst_29753 = inst_29752;
var inst_29754 = null;
var inst_29755 = (0);
var inst_29756 = (0);
var state_29813__$1 = (function (){var statearr_29856 = state_29813;
(statearr_29856[(20)] = inst_29755);

(statearr_29856[(10)] = inst_29756);

(statearr_29856[(30)] = inst_29747);

(statearr_29856[(11)] = inst_29754);

(statearr_29856[(29)] = inst_29745__$1);

(statearr_29856[(21)] = inst_29753);

return statearr_29856;
})();
var statearr_29857_29926 = state_29813__$1;
(statearr_29857_29926[(2)] = null);

(statearr_29857_29926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (28))){
var inst_29772 = (state_29813[(25)]);
var inst_29753 = (state_29813[(21)]);
var inst_29772__$1 = cljs.core.seq.call(null,inst_29753);
var state_29813__$1 = (function (){var statearr_29858 = state_29813;
(statearr_29858[(25)] = inst_29772__$1);

return statearr_29858;
})();
if(inst_29772__$1){
var statearr_29859_29927 = state_29813__$1;
(statearr_29859_29927[(1)] = (33));

} else {
var statearr_29860_29928 = state_29813__$1;
(statearr_29860_29928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (25))){
var inst_29755 = (state_29813[(20)]);
var inst_29756 = (state_29813[(10)]);
var inst_29758 = (inst_29756 < inst_29755);
var inst_29759 = inst_29758;
var state_29813__$1 = state_29813;
if(cljs.core.truth_(inst_29759)){
var statearr_29861_29929 = state_29813__$1;
(statearr_29861_29929[(1)] = (27));

} else {
var statearr_29862_29930 = state_29813__$1;
(statearr_29862_29930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (34))){
var state_29813__$1 = state_29813;
var statearr_29863_29931 = state_29813__$1;
(statearr_29863_29931[(2)] = null);

(statearr_29863_29931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (17))){
var state_29813__$1 = state_29813;
var statearr_29864_29932 = state_29813__$1;
(statearr_29864_29932[(2)] = null);

(statearr_29864_29932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (3))){
var inst_29811 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29813__$1,inst_29811);
} else {
if((state_val_29814 === (12))){
var inst_29740 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29865_29933 = state_29813__$1;
(statearr_29865_29933[(2)] = inst_29740);

(statearr_29865_29933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (2))){
var state_29813__$1 = state_29813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29813__$1,(4),ch);
} else {
if((state_val_29814 === (23))){
var state_29813__$1 = state_29813;
var statearr_29866_29934 = state_29813__$1;
(statearr_29866_29934[(2)] = null);

(statearr_29866_29934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (35))){
var inst_29795 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29867_29935 = state_29813__$1;
(statearr_29867_29935[(2)] = inst_29795);

(statearr_29867_29935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (19))){
var inst_29712 = (state_29813[(7)]);
var inst_29716 = cljs.core.chunk_first.call(null,inst_29712);
var inst_29717 = cljs.core.chunk_rest.call(null,inst_29712);
var inst_29718 = cljs.core.count.call(null,inst_29716);
var inst_29690 = inst_29717;
var inst_29691 = inst_29716;
var inst_29692 = inst_29718;
var inst_29693 = (0);
var state_29813__$1 = (function (){var statearr_29868 = state_29813;
(statearr_29868[(13)] = inst_29692);

(statearr_29868[(15)] = inst_29693);

(statearr_29868[(16)] = inst_29690);

(statearr_29868[(17)] = inst_29691);

return statearr_29868;
})();
var statearr_29869_29936 = state_29813__$1;
(statearr_29869_29936[(2)] = null);

(statearr_29869_29936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (11))){
var inst_29712 = (state_29813[(7)]);
var inst_29690 = (state_29813[(16)]);
var inst_29712__$1 = cljs.core.seq.call(null,inst_29690);
var state_29813__$1 = (function (){var statearr_29870 = state_29813;
(statearr_29870[(7)] = inst_29712__$1);

return statearr_29870;
})();
if(inst_29712__$1){
var statearr_29871_29937 = state_29813__$1;
(statearr_29871_29937[(1)] = (16));

} else {
var statearr_29872_29938 = state_29813__$1;
(statearr_29872_29938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (9))){
var inst_29742 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29873_29939 = state_29813__$1;
(statearr_29873_29939[(2)] = inst_29742);

(statearr_29873_29939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (5))){
var inst_29688 = cljs.core.deref.call(null,cs);
var inst_29689 = cljs.core.seq.call(null,inst_29688);
var inst_29690 = inst_29689;
var inst_29691 = null;
var inst_29692 = (0);
var inst_29693 = (0);
var state_29813__$1 = (function (){var statearr_29874 = state_29813;
(statearr_29874[(13)] = inst_29692);

(statearr_29874[(15)] = inst_29693);

(statearr_29874[(16)] = inst_29690);

(statearr_29874[(17)] = inst_29691);

return statearr_29874;
})();
var statearr_29875_29940 = state_29813__$1;
(statearr_29875_29940[(2)] = null);

(statearr_29875_29940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (14))){
var state_29813__$1 = state_29813;
var statearr_29876_29941 = state_29813__$1;
(statearr_29876_29941[(2)] = null);

(statearr_29876_29941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (45))){
var inst_29803 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29877_29942 = state_29813__$1;
(statearr_29877_29942[(2)] = inst_29803);

(statearr_29877_29942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (26))){
var inst_29745 = (state_29813[(29)]);
var inst_29799 = (state_29813[(2)]);
var inst_29800 = cljs.core.seq.call(null,inst_29745);
var state_29813__$1 = (function (){var statearr_29878 = state_29813;
(statearr_29878[(31)] = inst_29799);

return statearr_29878;
})();
if(inst_29800){
var statearr_29879_29943 = state_29813__$1;
(statearr_29879_29943[(1)] = (42));

} else {
var statearr_29880_29944 = state_29813__$1;
(statearr_29880_29944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (16))){
var inst_29712 = (state_29813[(7)]);
var inst_29714 = cljs.core.chunked_seq_QMARK_.call(null,inst_29712);
var state_29813__$1 = state_29813;
if(inst_29714){
var statearr_29881_29945 = state_29813__$1;
(statearr_29881_29945[(1)] = (19));

} else {
var statearr_29882_29946 = state_29813__$1;
(statearr_29882_29946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (38))){
var inst_29792 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29883_29947 = state_29813__$1;
(statearr_29883_29947[(2)] = inst_29792);

(statearr_29883_29947[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (30))){
var state_29813__$1 = state_29813;
var statearr_29884_29948 = state_29813__$1;
(statearr_29884_29948[(2)] = null);

(statearr_29884_29948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (10))){
var inst_29693 = (state_29813[(15)]);
var inst_29691 = (state_29813[(17)]);
var inst_29701 = cljs.core._nth.call(null,inst_29691,inst_29693);
var inst_29702 = cljs.core.nth.call(null,inst_29701,(0),null);
var inst_29703 = cljs.core.nth.call(null,inst_29701,(1),null);
var state_29813__$1 = (function (){var statearr_29885 = state_29813;
(statearr_29885[(26)] = inst_29702);

return statearr_29885;
})();
if(cljs.core.truth_(inst_29703)){
var statearr_29886_29949 = state_29813__$1;
(statearr_29886_29949[(1)] = (13));

} else {
var statearr_29887_29950 = state_29813__$1;
(statearr_29887_29950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (18))){
var inst_29738 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29888_29951 = state_29813__$1;
(statearr_29888_29951[(2)] = inst_29738);

(statearr_29888_29951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (42))){
var state_29813__$1 = state_29813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29813__$1,(45),dchan);
} else {
if((state_val_29814 === (37))){
var inst_29781 = (state_29813[(23)]);
var inst_29772 = (state_29813[(25)]);
var inst_29681 = (state_29813[(9)]);
var inst_29781__$1 = cljs.core.first.call(null,inst_29772);
var inst_29782 = cljs.core.async.put_BANG_.call(null,inst_29781__$1,inst_29681,done);
var state_29813__$1 = (function (){var statearr_29889 = state_29813;
(statearr_29889[(23)] = inst_29781__$1);

return statearr_29889;
})();
if(cljs.core.truth_(inst_29782)){
var statearr_29890_29952 = state_29813__$1;
(statearr_29890_29952[(1)] = (39));

} else {
var statearr_29891_29953 = state_29813__$1;
(statearr_29891_29953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (8))){
var inst_29692 = (state_29813[(13)]);
var inst_29693 = (state_29813[(15)]);
var inst_29695 = (inst_29693 < inst_29692);
var inst_29696 = inst_29695;
var state_29813__$1 = state_29813;
if(cljs.core.truth_(inst_29696)){
var statearr_29892_29954 = state_29813__$1;
(statearr_29892_29954[(1)] = (10));

} else {
var statearr_29893_29955 = state_29813__$1;
(statearr_29893_29955[(1)] = (11));

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
});})(c__28578__auto___29901,cs,m,dchan,dctr,done))
;
return ((function (switch__28466__auto__,c__28578__auto___29901,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28467__auto__ = null;
var cljs$core$async$mult_$_state_machine__28467__auto____0 = (function (){
var statearr_29897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29897[(0)] = cljs$core$async$mult_$_state_machine__28467__auto__);

(statearr_29897[(1)] = (1));

return statearr_29897;
});
var cljs$core$async$mult_$_state_machine__28467__auto____1 = (function (state_29813){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_29813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e29898){if((e29898 instanceof Object)){
var ex__28470__auto__ = e29898;
var statearr_29899_29956 = state_29813;
(statearr_29899_29956[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29957 = state_29813;
state_29813 = G__29957;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28467__auto__ = function(state_29813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28467__auto____1.call(this,state_29813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28467__auto____0;
cljs$core$async$mult_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28467__auto____1;
return cljs$core$async$mult_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___29901,cs,m,dchan,dctr,done))
})();
var state__28580__auto__ = (function (){var statearr_29900 = f__28579__auto__.call(null);
(statearr_29900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___29901);

return statearr_29900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___29901,cs,m,dchan,dctr,done))
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
var args29958 = [];
var len__25835__auto___29961 = arguments.length;
var i__25836__auto___29962 = (0);
while(true){
if((i__25836__auto___29962 < len__25835__auto___29961)){
args29958.push((arguments[i__25836__auto___29962]));

var G__29963 = (i__25836__auto___29962 + (1));
i__25836__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var G__29960 = args29958.length;
switch (G__29960) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29958.length)].join('')));

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
var len__25835__auto___29975 = arguments.length;
var i__25836__auto___29976 = (0);
while(true){
if((i__25836__auto___29976 < len__25835__auto___29975)){
args__25842__auto__.push((arguments[i__25836__auto___29976]));

var G__29977 = (i__25836__auto___29976 + (1));
i__25836__auto___29976 = G__29977;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29969){
var map__29970 = p__29969;
var map__29970__$1 = ((((!((map__29970 == null)))?((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var opts = map__29970__$1;
var statearr_29972_29978 = state;
(statearr_29972_29978[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29970,map__29970__$1,opts){
return (function (val){
var statearr_29973_29979 = state;
(statearr_29973_29979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29970,map__29970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29974_29980 = state;
(statearr_29974_29980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29965){
var G__29966 = cljs.core.first.call(null,seq29965);
var seq29965__$1 = cljs.core.next.call(null,seq29965);
var G__29967 = cljs.core.first.call(null,seq29965__$1);
var seq29965__$2 = cljs.core.next.call(null,seq29965__$1);
var G__29968 = cljs.core.first.call(null,seq29965__$2);
var seq29965__$3 = cljs.core.next.call(null,seq29965__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29966,G__29967,G__29968,seq29965__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30146 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30147){
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
this.meta30147 = meta30147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30148,meta30147__$1){
var self__ = this;
var _30148__$1 = this;
return (new cljs.core.async.t_cljs$core$async30146(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30147__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30148){
var self__ = this;
var _30148__$1 = this;
return self__.meta30147;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30146.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30147","meta30147",-1730398299,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30146";

cljs.core.async.t_cljs$core$async30146.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30146");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30146 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30147){
return (new cljs.core.async.t_cljs$core$async30146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30147));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30146(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28578__auto___30311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30248){
var state_val_30249 = (state_30248[(1)]);
if((state_val_30249 === (7))){
var inst_30164 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30250_30312 = state_30248__$1;
(statearr_30250_30312[(2)] = inst_30164);

(statearr_30250_30312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (20))){
var inst_30176 = (state_30248[(7)]);
var state_30248__$1 = state_30248;
var statearr_30251_30313 = state_30248__$1;
(statearr_30251_30313[(2)] = inst_30176);

(statearr_30251_30313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (27))){
var state_30248__$1 = state_30248;
var statearr_30252_30314 = state_30248__$1;
(statearr_30252_30314[(2)] = null);

(statearr_30252_30314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (1))){
var inst_30152 = (state_30248[(8)]);
var inst_30152__$1 = calc_state.call(null);
var inst_30154 = (inst_30152__$1 == null);
var inst_30155 = cljs.core.not.call(null,inst_30154);
var state_30248__$1 = (function (){var statearr_30253 = state_30248;
(statearr_30253[(8)] = inst_30152__$1);

return statearr_30253;
})();
if(inst_30155){
var statearr_30254_30315 = state_30248__$1;
(statearr_30254_30315[(1)] = (2));

} else {
var statearr_30255_30316 = state_30248__$1;
(statearr_30255_30316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (24))){
var inst_30208 = (state_30248[(9)]);
var inst_30222 = (state_30248[(10)]);
var inst_30199 = (state_30248[(11)]);
var inst_30222__$1 = inst_30199.call(null,inst_30208);
var state_30248__$1 = (function (){var statearr_30256 = state_30248;
(statearr_30256[(10)] = inst_30222__$1);

return statearr_30256;
})();
if(cljs.core.truth_(inst_30222__$1)){
var statearr_30257_30317 = state_30248__$1;
(statearr_30257_30317[(1)] = (29));

} else {
var statearr_30258_30318 = state_30248__$1;
(statearr_30258_30318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (4))){
var inst_30167 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30167)){
var statearr_30259_30319 = state_30248__$1;
(statearr_30259_30319[(1)] = (8));

} else {
var statearr_30260_30320 = state_30248__$1;
(statearr_30260_30320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (15))){
var inst_30193 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30193)){
var statearr_30261_30321 = state_30248__$1;
(statearr_30261_30321[(1)] = (19));

} else {
var statearr_30262_30322 = state_30248__$1;
(statearr_30262_30322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (21))){
var inst_30198 = (state_30248[(12)]);
var inst_30198__$1 = (state_30248[(2)]);
var inst_30199 = cljs.core.get.call(null,inst_30198__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30200 = cljs.core.get.call(null,inst_30198__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30201 = cljs.core.get.call(null,inst_30198__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30248__$1 = (function (){var statearr_30263 = state_30248;
(statearr_30263[(13)] = inst_30200);

(statearr_30263[(12)] = inst_30198__$1);

(statearr_30263[(11)] = inst_30199);

return statearr_30263;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30248__$1,(22),inst_30201);
} else {
if((state_val_30249 === (31))){
var inst_30230 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30230)){
var statearr_30264_30323 = state_30248__$1;
(statearr_30264_30323[(1)] = (32));

} else {
var statearr_30265_30324 = state_30248__$1;
(statearr_30265_30324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (32))){
var inst_30207 = (state_30248[(14)]);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30248__$1,(35),out,inst_30207);
} else {
if((state_val_30249 === (33))){
var inst_30198 = (state_30248[(12)]);
var inst_30176 = inst_30198;
var state_30248__$1 = (function (){var statearr_30266 = state_30248;
(statearr_30266[(7)] = inst_30176);

return statearr_30266;
})();
var statearr_30267_30325 = state_30248__$1;
(statearr_30267_30325[(2)] = null);

(statearr_30267_30325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (13))){
var inst_30176 = (state_30248[(7)]);
var inst_30183 = inst_30176.cljs$lang$protocol_mask$partition0$;
var inst_30184 = (inst_30183 & (64));
var inst_30185 = inst_30176.cljs$core$ISeq$;
var inst_30186 = (inst_30184) || (inst_30185);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30186)){
var statearr_30268_30326 = state_30248__$1;
(statearr_30268_30326[(1)] = (16));

} else {
var statearr_30269_30327 = state_30248__$1;
(statearr_30269_30327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (22))){
var inst_30208 = (state_30248[(9)]);
var inst_30207 = (state_30248[(14)]);
var inst_30206 = (state_30248[(2)]);
var inst_30207__$1 = cljs.core.nth.call(null,inst_30206,(0),null);
var inst_30208__$1 = cljs.core.nth.call(null,inst_30206,(1),null);
var inst_30209 = (inst_30207__$1 == null);
var inst_30210 = cljs.core._EQ_.call(null,inst_30208__$1,change);
var inst_30211 = (inst_30209) || (inst_30210);
var state_30248__$1 = (function (){var statearr_30270 = state_30248;
(statearr_30270[(9)] = inst_30208__$1);

(statearr_30270[(14)] = inst_30207__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30211)){
var statearr_30271_30328 = state_30248__$1;
(statearr_30271_30328[(1)] = (23));

} else {
var statearr_30272_30329 = state_30248__$1;
(statearr_30272_30329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (36))){
var inst_30198 = (state_30248[(12)]);
var inst_30176 = inst_30198;
var state_30248__$1 = (function (){var statearr_30273 = state_30248;
(statearr_30273[(7)] = inst_30176);

return statearr_30273;
})();
var statearr_30274_30330 = state_30248__$1;
(statearr_30274_30330[(2)] = null);

(statearr_30274_30330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (29))){
var inst_30222 = (state_30248[(10)]);
var state_30248__$1 = state_30248;
var statearr_30275_30331 = state_30248__$1;
(statearr_30275_30331[(2)] = inst_30222);

(statearr_30275_30331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (6))){
var state_30248__$1 = state_30248;
var statearr_30276_30332 = state_30248__$1;
(statearr_30276_30332[(2)] = false);

(statearr_30276_30332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (28))){
var inst_30218 = (state_30248[(2)]);
var inst_30219 = calc_state.call(null);
var inst_30176 = inst_30219;
var state_30248__$1 = (function (){var statearr_30277 = state_30248;
(statearr_30277[(15)] = inst_30218);

(statearr_30277[(7)] = inst_30176);

return statearr_30277;
})();
var statearr_30278_30333 = state_30248__$1;
(statearr_30278_30333[(2)] = null);

(statearr_30278_30333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (25))){
var inst_30244 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30279_30334 = state_30248__$1;
(statearr_30279_30334[(2)] = inst_30244);

(statearr_30279_30334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (34))){
var inst_30242 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30280_30335 = state_30248__$1;
(statearr_30280_30335[(2)] = inst_30242);

(statearr_30280_30335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (17))){
var state_30248__$1 = state_30248;
var statearr_30281_30336 = state_30248__$1;
(statearr_30281_30336[(2)] = false);

(statearr_30281_30336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (3))){
var state_30248__$1 = state_30248;
var statearr_30282_30337 = state_30248__$1;
(statearr_30282_30337[(2)] = false);

(statearr_30282_30337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (12))){
var inst_30246 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30248__$1,inst_30246);
} else {
if((state_val_30249 === (2))){
var inst_30152 = (state_30248[(8)]);
var inst_30157 = inst_30152.cljs$lang$protocol_mask$partition0$;
var inst_30158 = (inst_30157 & (64));
var inst_30159 = inst_30152.cljs$core$ISeq$;
var inst_30160 = (inst_30158) || (inst_30159);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30160)){
var statearr_30283_30338 = state_30248__$1;
(statearr_30283_30338[(1)] = (5));

} else {
var statearr_30284_30339 = state_30248__$1;
(statearr_30284_30339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (23))){
var inst_30207 = (state_30248[(14)]);
var inst_30213 = (inst_30207 == null);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30213)){
var statearr_30285_30340 = state_30248__$1;
(statearr_30285_30340[(1)] = (26));

} else {
var statearr_30286_30341 = state_30248__$1;
(statearr_30286_30341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (35))){
var inst_30233 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30233)){
var statearr_30287_30342 = state_30248__$1;
(statearr_30287_30342[(1)] = (36));

} else {
var statearr_30288_30343 = state_30248__$1;
(statearr_30288_30343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (19))){
var inst_30176 = (state_30248[(7)]);
var inst_30195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30176);
var state_30248__$1 = state_30248;
var statearr_30289_30344 = state_30248__$1;
(statearr_30289_30344[(2)] = inst_30195);

(statearr_30289_30344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (11))){
var inst_30176 = (state_30248[(7)]);
var inst_30180 = (inst_30176 == null);
var inst_30181 = cljs.core.not.call(null,inst_30180);
var state_30248__$1 = state_30248;
if(inst_30181){
var statearr_30290_30345 = state_30248__$1;
(statearr_30290_30345[(1)] = (13));

} else {
var statearr_30291_30346 = state_30248__$1;
(statearr_30291_30346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (9))){
var inst_30152 = (state_30248[(8)]);
var state_30248__$1 = state_30248;
var statearr_30292_30347 = state_30248__$1;
(statearr_30292_30347[(2)] = inst_30152);

(statearr_30292_30347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (5))){
var state_30248__$1 = state_30248;
var statearr_30293_30348 = state_30248__$1;
(statearr_30293_30348[(2)] = true);

(statearr_30293_30348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (14))){
var state_30248__$1 = state_30248;
var statearr_30294_30349 = state_30248__$1;
(statearr_30294_30349[(2)] = false);

(statearr_30294_30349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (26))){
var inst_30208 = (state_30248[(9)]);
var inst_30215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30208);
var state_30248__$1 = state_30248;
var statearr_30295_30350 = state_30248__$1;
(statearr_30295_30350[(2)] = inst_30215);

(statearr_30295_30350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (16))){
var state_30248__$1 = state_30248;
var statearr_30296_30351 = state_30248__$1;
(statearr_30296_30351[(2)] = true);

(statearr_30296_30351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (38))){
var inst_30238 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30297_30352 = state_30248__$1;
(statearr_30297_30352[(2)] = inst_30238);

(statearr_30297_30352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (30))){
var inst_30208 = (state_30248[(9)]);
var inst_30200 = (state_30248[(13)]);
var inst_30199 = (state_30248[(11)]);
var inst_30225 = cljs.core.empty_QMARK_.call(null,inst_30199);
var inst_30226 = inst_30200.call(null,inst_30208);
var inst_30227 = cljs.core.not.call(null,inst_30226);
var inst_30228 = (inst_30225) && (inst_30227);
var state_30248__$1 = state_30248;
var statearr_30298_30353 = state_30248__$1;
(statearr_30298_30353[(2)] = inst_30228);

(statearr_30298_30353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (10))){
var inst_30152 = (state_30248[(8)]);
var inst_30172 = (state_30248[(2)]);
var inst_30173 = cljs.core.get.call(null,inst_30172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30174 = cljs.core.get.call(null,inst_30172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30175 = cljs.core.get.call(null,inst_30172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30176 = inst_30152;
var state_30248__$1 = (function (){var statearr_30299 = state_30248;
(statearr_30299[(16)] = inst_30174);

(statearr_30299[(17)] = inst_30173);

(statearr_30299[(18)] = inst_30175);

(statearr_30299[(7)] = inst_30176);

return statearr_30299;
})();
var statearr_30300_30354 = state_30248__$1;
(statearr_30300_30354[(2)] = null);

(statearr_30300_30354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (18))){
var inst_30190 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30301_30355 = state_30248__$1;
(statearr_30301_30355[(2)] = inst_30190);

(statearr_30301_30355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (37))){
var state_30248__$1 = state_30248;
var statearr_30302_30356 = state_30248__$1;
(statearr_30302_30356[(2)] = null);

(statearr_30302_30356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (8))){
var inst_30152 = (state_30248[(8)]);
var inst_30169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30152);
var state_30248__$1 = state_30248;
var statearr_30303_30357 = state_30248__$1;
(statearr_30303_30357[(2)] = inst_30169);

(statearr_30303_30357[(1)] = (10));


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
});})(c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28466__auto__,c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28467__auto__ = null;
var cljs$core$async$mix_$_state_machine__28467__auto____0 = (function (){
var statearr_30307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30307[(0)] = cljs$core$async$mix_$_state_machine__28467__auto__);

(statearr_30307[(1)] = (1));

return statearr_30307;
});
var cljs$core$async$mix_$_state_machine__28467__auto____1 = (function (state_30248){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30308){if((e30308 instanceof Object)){
var ex__28470__auto__ = e30308;
var statearr_30309_30358 = state_30248;
(statearr_30309_30358[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30359 = state_30248;
state_30248 = G__30359;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28467__auto__ = function(state_30248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28467__auto____1.call(this,state_30248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28467__auto____0;
cljs$core$async$mix_$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28467__auto____1;
return cljs$core$async$mix_$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28580__auto__ = (function (){var statearr_30310 = f__28579__auto__.call(null);
(statearr_30310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30311);

return statearr_30310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30360 = [];
var len__25835__auto___30363 = arguments.length;
var i__25836__auto___30364 = (0);
while(true){
if((i__25836__auto___30364 < len__25835__auto___30363)){
args30360.push((arguments[i__25836__auto___30364]));

var G__30365 = (i__25836__auto___30364 + (1));
i__25836__auto___30364 = G__30365;
continue;
} else {
}
break;
}

var G__30362 = args30360.length;
switch (G__30362) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30360.length)].join('')));

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
var args30368 = [];
var len__25835__auto___30493 = arguments.length;
var i__25836__auto___30494 = (0);
while(true){
if((i__25836__auto___30494 < len__25835__auto___30493)){
args30368.push((arguments[i__25836__auto___30494]));

var G__30495 = (i__25836__auto___30494 + (1));
i__25836__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var G__30370 = args30368.length;
switch (G__30370) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30368.length)].join('')));

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
return (function (p1__30367_SHARP_){
if(cljs.core.truth_(p1__30367_SHARP_.call(null,topic))){
return p1__30367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30372 = meta30372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30373,meta30372__$1){
var self__ = this;
var _30373__$1 = this;
return (new cljs.core.async.t_cljs$core$async30371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30373){
var self__ = this;
var _30373__$1 = this;
return self__.meta30372;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30372","meta30372",1485432196,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30371";

cljs.core.async.t_cljs$core$async30371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30372){
return (new cljs.core.async.t_cljs$core$async30371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28578__auto___30497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30497,mults,ensure_mult,p){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30497,mults,ensure_mult,p){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (7))){
var inst_30441 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30447_30498 = state_30445__$1;
(statearr_30447_30498[(2)] = inst_30441);

(statearr_30447_30498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (20))){
var state_30445__$1 = state_30445;
var statearr_30448_30499 = state_30445__$1;
(statearr_30448_30499[(2)] = null);

(statearr_30448_30499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (1))){
var state_30445__$1 = state_30445;
var statearr_30449_30500 = state_30445__$1;
(statearr_30449_30500[(2)] = null);

(statearr_30449_30500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (24))){
var inst_30424 = (state_30445[(7)]);
var inst_30433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30424);
var state_30445__$1 = state_30445;
var statearr_30450_30501 = state_30445__$1;
(statearr_30450_30501[(2)] = inst_30433);

(statearr_30450_30501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (4))){
var inst_30376 = (state_30445[(8)]);
var inst_30376__$1 = (state_30445[(2)]);
var inst_30377 = (inst_30376__$1 == null);
var state_30445__$1 = (function (){var statearr_30451 = state_30445;
(statearr_30451[(8)] = inst_30376__$1);

return statearr_30451;
})();
if(cljs.core.truth_(inst_30377)){
var statearr_30452_30502 = state_30445__$1;
(statearr_30452_30502[(1)] = (5));

} else {
var statearr_30453_30503 = state_30445__$1;
(statearr_30453_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (15))){
var inst_30418 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30454_30504 = state_30445__$1;
(statearr_30454_30504[(2)] = inst_30418);

(statearr_30454_30504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (21))){
var inst_30438 = (state_30445[(2)]);
var state_30445__$1 = (function (){var statearr_30455 = state_30445;
(statearr_30455[(9)] = inst_30438);

return statearr_30455;
})();
var statearr_30456_30505 = state_30445__$1;
(statearr_30456_30505[(2)] = null);

(statearr_30456_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (13))){
var inst_30400 = (state_30445[(10)]);
var inst_30402 = cljs.core.chunked_seq_QMARK_.call(null,inst_30400);
var state_30445__$1 = state_30445;
if(inst_30402){
var statearr_30457_30506 = state_30445__$1;
(statearr_30457_30506[(1)] = (16));

} else {
var statearr_30458_30507 = state_30445__$1;
(statearr_30458_30507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (22))){
var inst_30430 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
if(cljs.core.truth_(inst_30430)){
var statearr_30459_30508 = state_30445__$1;
(statearr_30459_30508[(1)] = (23));

} else {
var statearr_30460_30509 = state_30445__$1;
(statearr_30460_30509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (6))){
var inst_30426 = (state_30445[(11)]);
var inst_30424 = (state_30445[(7)]);
var inst_30376 = (state_30445[(8)]);
var inst_30424__$1 = topic_fn.call(null,inst_30376);
var inst_30425 = cljs.core.deref.call(null,mults);
var inst_30426__$1 = cljs.core.get.call(null,inst_30425,inst_30424__$1);
var state_30445__$1 = (function (){var statearr_30461 = state_30445;
(statearr_30461[(11)] = inst_30426__$1);

(statearr_30461[(7)] = inst_30424__$1);

return statearr_30461;
})();
if(cljs.core.truth_(inst_30426__$1)){
var statearr_30462_30510 = state_30445__$1;
(statearr_30462_30510[(1)] = (19));

} else {
var statearr_30463_30511 = state_30445__$1;
(statearr_30463_30511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (25))){
var inst_30435 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30464_30512 = state_30445__$1;
(statearr_30464_30512[(2)] = inst_30435);

(statearr_30464_30512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (17))){
var inst_30400 = (state_30445[(10)]);
var inst_30409 = cljs.core.first.call(null,inst_30400);
var inst_30410 = cljs.core.async.muxch_STAR_.call(null,inst_30409);
var inst_30411 = cljs.core.async.close_BANG_.call(null,inst_30410);
var inst_30412 = cljs.core.next.call(null,inst_30400);
var inst_30386 = inst_30412;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30445__$1 = (function (){var statearr_30465 = state_30445;
(statearr_30465[(12)] = inst_30387);

(statearr_30465[(13)] = inst_30389);

(statearr_30465[(14)] = inst_30388);

(statearr_30465[(15)] = inst_30411);

(statearr_30465[(16)] = inst_30386);

return statearr_30465;
})();
var statearr_30466_30513 = state_30445__$1;
(statearr_30466_30513[(2)] = null);

(statearr_30466_30513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (3))){
var inst_30443 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30445__$1,inst_30443);
} else {
if((state_val_30446 === (12))){
var inst_30420 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30467_30514 = state_30445__$1;
(statearr_30467_30514[(2)] = inst_30420);

(statearr_30467_30514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (2))){
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(4),ch);
} else {
if((state_val_30446 === (23))){
var state_30445__$1 = state_30445;
var statearr_30468_30515 = state_30445__$1;
(statearr_30468_30515[(2)] = null);

(statearr_30468_30515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (19))){
var inst_30426 = (state_30445[(11)]);
var inst_30376 = (state_30445[(8)]);
var inst_30428 = cljs.core.async.muxch_STAR_.call(null,inst_30426);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30445__$1,(22),inst_30428,inst_30376);
} else {
if((state_val_30446 === (11))){
var inst_30400 = (state_30445[(10)]);
var inst_30386 = (state_30445[(16)]);
var inst_30400__$1 = cljs.core.seq.call(null,inst_30386);
var state_30445__$1 = (function (){var statearr_30469 = state_30445;
(statearr_30469[(10)] = inst_30400__$1);

return statearr_30469;
})();
if(inst_30400__$1){
var statearr_30470_30516 = state_30445__$1;
(statearr_30470_30516[(1)] = (13));

} else {
var statearr_30471_30517 = state_30445__$1;
(statearr_30471_30517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (9))){
var inst_30422 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30472_30518 = state_30445__$1;
(statearr_30472_30518[(2)] = inst_30422);

(statearr_30472_30518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (5))){
var inst_30383 = cljs.core.deref.call(null,mults);
var inst_30384 = cljs.core.vals.call(null,inst_30383);
var inst_30385 = cljs.core.seq.call(null,inst_30384);
var inst_30386 = inst_30385;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30445__$1 = (function (){var statearr_30473 = state_30445;
(statearr_30473[(12)] = inst_30387);

(statearr_30473[(13)] = inst_30389);

(statearr_30473[(14)] = inst_30388);

(statearr_30473[(16)] = inst_30386);

return statearr_30473;
})();
var statearr_30474_30519 = state_30445__$1;
(statearr_30474_30519[(2)] = null);

(statearr_30474_30519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (14))){
var state_30445__$1 = state_30445;
var statearr_30478_30520 = state_30445__$1;
(statearr_30478_30520[(2)] = null);

(statearr_30478_30520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (16))){
var inst_30400 = (state_30445[(10)]);
var inst_30404 = cljs.core.chunk_first.call(null,inst_30400);
var inst_30405 = cljs.core.chunk_rest.call(null,inst_30400);
var inst_30406 = cljs.core.count.call(null,inst_30404);
var inst_30386 = inst_30405;
var inst_30387 = inst_30404;
var inst_30388 = inst_30406;
var inst_30389 = (0);
var state_30445__$1 = (function (){var statearr_30479 = state_30445;
(statearr_30479[(12)] = inst_30387);

(statearr_30479[(13)] = inst_30389);

(statearr_30479[(14)] = inst_30388);

(statearr_30479[(16)] = inst_30386);

return statearr_30479;
})();
var statearr_30480_30521 = state_30445__$1;
(statearr_30480_30521[(2)] = null);

(statearr_30480_30521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (10))){
var inst_30387 = (state_30445[(12)]);
var inst_30389 = (state_30445[(13)]);
var inst_30388 = (state_30445[(14)]);
var inst_30386 = (state_30445[(16)]);
var inst_30394 = cljs.core._nth.call(null,inst_30387,inst_30389);
var inst_30395 = cljs.core.async.muxch_STAR_.call(null,inst_30394);
var inst_30396 = cljs.core.async.close_BANG_.call(null,inst_30395);
var inst_30397 = (inst_30389 + (1));
var tmp30475 = inst_30387;
var tmp30476 = inst_30388;
var tmp30477 = inst_30386;
var inst_30386__$1 = tmp30477;
var inst_30387__$1 = tmp30475;
var inst_30388__$1 = tmp30476;
var inst_30389__$1 = inst_30397;
var state_30445__$1 = (function (){var statearr_30481 = state_30445;
(statearr_30481[(12)] = inst_30387__$1);

(statearr_30481[(13)] = inst_30389__$1);

(statearr_30481[(14)] = inst_30388__$1);

(statearr_30481[(17)] = inst_30396);

(statearr_30481[(16)] = inst_30386__$1);

return statearr_30481;
})();
var statearr_30482_30522 = state_30445__$1;
(statearr_30482_30522[(2)] = null);

(statearr_30482_30522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (18))){
var inst_30415 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30483_30523 = state_30445__$1;
(statearr_30483_30523[(2)] = inst_30415);

(statearr_30483_30523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (8))){
var inst_30389 = (state_30445[(13)]);
var inst_30388 = (state_30445[(14)]);
var inst_30391 = (inst_30389 < inst_30388);
var inst_30392 = inst_30391;
var state_30445__$1 = state_30445;
if(cljs.core.truth_(inst_30392)){
var statearr_30484_30524 = state_30445__$1;
(statearr_30484_30524[(1)] = (10));

} else {
var statearr_30485_30525 = state_30445__$1;
(statearr_30485_30525[(1)] = (11));

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
});})(c__28578__auto___30497,mults,ensure_mult,p))
;
return ((function (switch__28466__auto__,c__28578__auto___30497,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_30445){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30490){if((e30490 instanceof Object)){
var ex__28470__auto__ = e30490;
var statearr_30491_30526 = state_30445;
(statearr_30491_30526[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30527 = state_30445;
state_30445 = G__30527;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30497,mults,ensure_mult,p))
})();
var state__28580__auto__ = (function (){var statearr_30492 = f__28579__auto__.call(null);
(statearr_30492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30497);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30497,mults,ensure_mult,p))
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
var args30528 = [];
var len__25835__auto___30531 = arguments.length;
var i__25836__auto___30532 = (0);
while(true){
if((i__25836__auto___30532 < len__25835__auto___30531)){
args30528.push((arguments[i__25836__auto___30532]));

var G__30533 = (i__25836__auto___30532 + (1));
i__25836__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var G__30530 = args30528.length;
switch (G__30530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30528.length)].join('')));

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
var args30535 = [];
var len__25835__auto___30538 = arguments.length;
var i__25836__auto___30539 = (0);
while(true){
if((i__25836__auto___30539 < len__25835__auto___30538)){
args30535.push((arguments[i__25836__auto___30539]));

var G__30540 = (i__25836__auto___30539 + (1));
i__25836__auto___30539 = G__30540;
continue;
} else {
}
break;
}

var G__30537 = args30535.length;
switch (G__30537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30535.length)].join('')));

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
var args30542 = [];
var len__25835__auto___30613 = arguments.length;
var i__25836__auto___30614 = (0);
while(true){
if((i__25836__auto___30614 < len__25835__auto___30613)){
args30542.push((arguments[i__25836__auto___30614]));

var G__30615 = (i__25836__auto___30614 + (1));
i__25836__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var G__30544 = args30542.length;
switch (G__30544) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30542.length)].join('')));

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
var c__28578__auto___30617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (7))){
var state_30583__$1 = state_30583;
var statearr_30585_30618 = state_30583__$1;
(statearr_30585_30618[(2)] = null);

(statearr_30585_30618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
var statearr_30586_30619 = state_30583__$1;
(statearr_30586_30619[(2)] = null);

(statearr_30586_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (4))){
var inst_30547 = (state_30583[(7)]);
var inst_30549 = (inst_30547 < cnt);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30549)){
var statearr_30587_30620 = state_30583__$1;
(statearr_30587_30620[(1)] = (6));

} else {
var statearr_30588_30621 = state_30583__$1;
(statearr_30588_30621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (15))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30589_30622 = state_30583__$1;
(statearr_30589_30622[(2)] = inst_30579);

(statearr_30589_30622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (13))){
var inst_30572 = cljs.core.async.close_BANG_.call(null,out);
var state_30583__$1 = state_30583;
var statearr_30590_30623 = state_30583__$1;
(statearr_30590_30623[(2)] = inst_30572);

(statearr_30590_30623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var state_30583__$1 = state_30583;
var statearr_30591_30624 = state_30583__$1;
(statearr_30591_30624[(2)] = null);

(statearr_30591_30624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (12))){
var inst_30569 = (state_30583[(8)]);
var inst_30569__$1 = (state_30583[(2)]);
var inst_30570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30569__$1);
var state_30583__$1 = (function (){var statearr_30592 = state_30583;
(statearr_30592[(8)] = inst_30569__$1);

return statearr_30592;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30593_30625 = state_30583__$1;
(statearr_30593_30625[(1)] = (13));

} else {
var statearr_30594_30626 = state_30583__$1;
(statearr_30594_30626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (2))){
var inst_30546 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30547 = (0);
var state_30583__$1 = (function (){var statearr_30595 = state_30583;
(statearr_30595[(7)] = inst_30547);

(statearr_30595[(9)] = inst_30546);

return statearr_30595;
})();
var statearr_30596_30627 = state_30583__$1;
(statearr_30596_30627[(2)] = null);

(statearr_30596_30627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (11))){
var inst_30547 = (state_30583[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30583,(10),Object,null,(9));
var inst_30556 = chs__$1.call(null,inst_30547);
var inst_30557 = done.call(null,inst_30547);
var inst_30558 = cljs.core.async.take_BANG_.call(null,inst_30556,inst_30557);
var state_30583__$1 = state_30583;
var statearr_30597_30628 = state_30583__$1;
(statearr_30597_30628[(2)] = inst_30558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (9))){
var inst_30547 = (state_30583[(7)]);
var inst_30560 = (state_30583[(2)]);
var inst_30561 = (inst_30547 + (1));
var inst_30547__$1 = inst_30561;
var state_30583__$1 = (function (){var statearr_30598 = state_30583;
(statearr_30598[(7)] = inst_30547__$1);

(statearr_30598[(10)] = inst_30560);

return statearr_30598;
})();
var statearr_30599_30629 = state_30583__$1;
(statearr_30599_30629[(2)] = null);

(statearr_30599_30629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var inst_30567 = (state_30583[(2)]);
var state_30583__$1 = (function (){var statearr_30600 = state_30583;
(statearr_30600[(11)] = inst_30567);

return statearr_30600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30583__$1,(12),dchan);
} else {
if((state_val_30584 === (14))){
var inst_30569 = (state_30583[(8)]);
var inst_30574 = cljs.core.apply.call(null,f,inst_30569);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30583__$1,(16),out,inst_30574);
} else {
if((state_val_30584 === (16))){
var inst_30576 = (state_30583[(2)]);
var state_30583__$1 = (function (){var statearr_30601 = state_30583;
(statearr_30601[(12)] = inst_30576);

return statearr_30601;
})();
var statearr_30602_30630 = state_30583__$1;
(statearr_30602_30630[(2)] = null);

(statearr_30602_30630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (10))){
var inst_30551 = (state_30583[(2)]);
var inst_30552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30583__$1 = (function (){var statearr_30603 = state_30583;
(statearr_30603[(13)] = inst_30551);

return statearr_30603;
})();
var statearr_30604_30631 = state_30583__$1;
(statearr_30604_30631[(2)] = inst_30552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (8))){
var inst_30565 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30605_30632 = state_30583__$1;
(statearr_30605_30632[(2)] = inst_30565);

(statearr_30605_30632[(1)] = (5));


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
});})(c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28466__auto__,c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_30583){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30610){if((e30610 instanceof Object)){
var ex__28470__auto__ = e30610;
var statearr_30611_30633 = state_30583;
(statearr_30611_30633[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30634 = state_30583;
state_30583 = G__30634;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28580__auto__ = (function (){var statearr_30612 = f__28579__auto__.call(null);
(statearr_30612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30617);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30617,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30636 = [];
var len__25835__auto___30694 = arguments.length;
var i__25836__auto___30695 = (0);
while(true){
if((i__25836__auto___30695 < len__25835__auto___30694)){
args30636.push((arguments[i__25836__auto___30695]));

var G__30696 = (i__25836__auto___30695 + (1));
i__25836__auto___30695 = G__30696;
continue;
} else {
}
break;
}

var G__30638 = args30636.length;
switch (G__30638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30636.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___30698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30698,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30698,out){
return (function (state_30670){
var state_val_30671 = (state_30670[(1)]);
if((state_val_30671 === (7))){
var inst_30650 = (state_30670[(7)]);
var inst_30649 = (state_30670[(8)]);
var inst_30649__$1 = (state_30670[(2)]);
var inst_30650__$1 = cljs.core.nth.call(null,inst_30649__$1,(0),null);
var inst_30651 = cljs.core.nth.call(null,inst_30649__$1,(1),null);
var inst_30652 = (inst_30650__$1 == null);
var state_30670__$1 = (function (){var statearr_30672 = state_30670;
(statearr_30672[(9)] = inst_30651);

(statearr_30672[(7)] = inst_30650__$1);

(statearr_30672[(8)] = inst_30649__$1);

return statearr_30672;
})();
if(cljs.core.truth_(inst_30652)){
var statearr_30673_30699 = state_30670__$1;
(statearr_30673_30699[(1)] = (8));

} else {
var statearr_30674_30700 = state_30670__$1;
(statearr_30674_30700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (1))){
var inst_30639 = cljs.core.vec.call(null,chs);
var inst_30640 = inst_30639;
var state_30670__$1 = (function (){var statearr_30675 = state_30670;
(statearr_30675[(10)] = inst_30640);

return statearr_30675;
})();
var statearr_30676_30701 = state_30670__$1;
(statearr_30676_30701[(2)] = null);

(statearr_30676_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (4))){
var inst_30640 = (state_30670[(10)]);
var state_30670__$1 = state_30670;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30670__$1,(7),inst_30640);
} else {
if((state_val_30671 === (6))){
var inst_30666 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30677_30702 = state_30670__$1;
(statearr_30677_30702[(2)] = inst_30666);

(statearr_30677_30702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (3))){
var inst_30668 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30670__$1,inst_30668);
} else {
if((state_val_30671 === (2))){
var inst_30640 = (state_30670[(10)]);
var inst_30642 = cljs.core.count.call(null,inst_30640);
var inst_30643 = (inst_30642 > (0));
var state_30670__$1 = state_30670;
if(cljs.core.truth_(inst_30643)){
var statearr_30679_30703 = state_30670__$1;
(statearr_30679_30703[(1)] = (4));

} else {
var statearr_30680_30704 = state_30670__$1;
(statearr_30680_30704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (11))){
var inst_30640 = (state_30670[(10)]);
var inst_30659 = (state_30670[(2)]);
var tmp30678 = inst_30640;
var inst_30640__$1 = tmp30678;
var state_30670__$1 = (function (){var statearr_30681 = state_30670;
(statearr_30681[(10)] = inst_30640__$1);

(statearr_30681[(11)] = inst_30659);

return statearr_30681;
})();
var statearr_30682_30705 = state_30670__$1;
(statearr_30682_30705[(2)] = null);

(statearr_30682_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (9))){
var inst_30650 = (state_30670[(7)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30670__$1,(11),out,inst_30650);
} else {
if((state_val_30671 === (5))){
var inst_30664 = cljs.core.async.close_BANG_.call(null,out);
var state_30670__$1 = state_30670;
var statearr_30683_30706 = state_30670__$1;
(statearr_30683_30706[(2)] = inst_30664);

(statearr_30683_30706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (10))){
var inst_30662 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30684_30707 = state_30670__$1;
(statearr_30684_30707[(2)] = inst_30662);

(statearr_30684_30707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (8))){
var inst_30651 = (state_30670[(9)]);
var inst_30640 = (state_30670[(10)]);
var inst_30650 = (state_30670[(7)]);
var inst_30649 = (state_30670[(8)]);
var inst_30654 = (function (){var cs = inst_30640;
var vec__30645 = inst_30649;
var v = inst_30650;
var c = inst_30651;
return ((function (cs,vec__30645,v,c,inst_30651,inst_30640,inst_30650,inst_30649,state_val_30671,c__28578__auto___30698,out){
return (function (p1__30635_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30635_SHARP_);
});
;})(cs,vec__30645,v,c,inst_30651,inst_30640,inst_30650,inst_30649,state_val_30671,c__28578__auto___30698,out))
})();
var inst_30655 = cljs.core.filterv.call(null,inst_30654,inst_30640);
var inst_30640__$1 = inst_30655;
var state_30670__$1 = (function (){var statearr_30685 = state_30670;
(statearr_30685[(10)] = inst_30640__$1);

return statearr_30685;
})();
var statearr_30686_30708 = state_30670__$1;
(statearr_30686_30708[(2)] = null);

(statearr_30686_30708[(1)] = (2));


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
});})(c__28578__auto___30698,out))
;
return ((function (switch__28466__auto__,c__28578__auto___30698,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_30690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30690[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_30690[(1)] = (1));

return statearr_30690;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_30670){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30691){if((e30691 instanceof Object)){
var ex__28470__auto__ = e30691;
var statearr_30692_30709 = state_30670;
(statearr_30692_30709[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30710 = state_30670;
state_30670 = G__30710;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_30670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_30670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30698,out))
})();
var state__28580__auto__ = (function (){var statearr_30693 = f__28579__auto__.call(null);
(statearr_30693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30698);

return statearr_30693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30698,out))
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
var args30711 = [];
var len__25835__auto___30760 = arguments.length;
var i__25836__auto___30761 = (0);
while(true){
if((i__25836__auto___30761 < len__25835__auto___30760)){
args30711.push((arguments[i__25836__auto___30761]));

var G__30762 = (i__25836__auto___30761 + (1));
i__25836__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var G__30713 = args30711.length;
switch (G__30713) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30711.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___30764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30764,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30764,out){
return (function (state_30737){
var state_val_30738 = (state_30737[(1)]);
if((state_val_30738 === (7))){
var inst_30719 = (state_30737[(7)]);
var inst_30719__$1 = (state_30737[(2)]);
var inst_30720 = (inst_30719__$1 == null);
var inst_30721 = cljs.core.not.call(null,inst_30720);
var state_30737__$1 = (function (){var statearr_30739 = state_30737;
(statearr_30739[(7)] = inst_30719__$1);

return statearr_30739;
})();
if(inst_30721){
var statearr_30740_30765 = state_30737__$1;
(statearr_30740_30765[(1)] = (8));

} else {
var statearr_30741_30766 = state_30737__$1;
(statearr_30741_30766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (1))){
var inst_30714 = (0);
var state_30737__$1 = (function (){var statearr_30742 = state_30737;
(statearr_30742[(8)] = inst_30714);

return statearr_30742;
})();
var statearr_30743_30767 = state_30737__$1;
(statearr_30743_30767[(2)] = null);

(statearr_30743_30767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (4))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30737__$1,(7),ch);
} else {
if((state_val_30738 === (6))){
var inst_30732 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30744_30768 = state_30737__$1;
(statearr_30744_30768[(2)] = inst_30732);

(statearr_30744_30768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (3))){
var inst_30734 = (state_30737[(2)]);
var inst_30735 = cljs.core.async.close_BANG_.call(null,out);
var state_30737__$1 = (function (){var statearr_30745 = state_30737;
(statearr_30745[(9)] = inst_30734);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30737__$1,inst_30735);
} else {
if((state_val_30738 === (2))){
var inst_30714 = (state_30737[(8)]);
var inst_30716 = (inst_30714 < n);
var state_30737__$1 = state_30737;
if(cljs.core.truth_(inst_30716)){
var statearr_30746_30769 = state_30737__$1;
(statearr_30746_30769[(1)] = (4));

} else {
var statearr_30747_30770 = state_30737__$1;
(statearr_30747_30770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (11))){
var inst_30714 = (state_30737[(8)]);
var inst_30724 = (state_30737[(2)]);
var inst_30725 = (inst_30714 + (1));
var inst_30714__$1 = inst_30725;
var state_30737__$1 = (function (){var statearr_30748 = state_30737;
(statearr_30748[(8)] = inst_30714__$1);

(statearr_30748[(10)] = inst_30724);

return statearr_30748;
})();
var statearr_30749_30771 = state_30737__$1;
(statearr_30749_30771[(2)] = null);

(statearr_30749_30771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (9))){
var state_30737__$1 = state_30737;
var statearr_30750_30772 = state_30737__$1;
(statearr_30750_30772[(2)] = null);

(statearr_30750_30772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (5))){
var state_30737__$1 = state_30737;
var statearr_30751_30773 = state_30737__$1;
(statearr_30751_30773[(2)] = null);

(statearr_30751_30773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (10))){
var inst_30729 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30752_30774 = state_30737__$1;
(statearr_30752_30774[(2)] = inst_30729);

(statearr_30752_30774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (8))){
var inst_30719 = (state_30737[(7)]);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30737__$1,(11),out,inst_30719);
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
});})(c__28578__auto___30764,out))
;
return ((function (switch__28466__auto__,c__28578__auto___30764,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_30737){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30757){if((e30757 instanceof Object)){
var ex__28470__auto__ = e30757;
var statearr_30758_30775 = state_30737;
(statearr_30758_30775[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30776 = state_30737;
state_30737 = G__30776;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_30737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_30737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30764,out))
})();
var state__28580__auto__ = (function (){var statearr_30759 = f__28579__auto__.call(null);
(statearr_30759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30764);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30764,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30784 = (function (map_LT_,f,ch,meta30785){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30785 = meta30785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30786,meta30785__$1){
var self__ = this;
var _30786__$1 = this;
return (new cljs.core.async.t_cljs$core$async30784(self__.map_LT_,self__.f,self__.ch,meta30785__$1));
});

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30786){
var self__ = this;
var _30786__$1 = this;
return self__.meta30785;
});

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30787 = (function (map_LT_,f,ch,meta30785,_,fn1,meta30788){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30785 = meta30785;
this._ = _;
this.fn1 = fn1;
this.meta30788 = meta30788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30789,meta30788__$1){
var self__ = this;
var _30789__$1 = this;
return (new cljs.core.async.t_cljs$core$async30787(self__.map_LT_,self__.f,self__.ch,self__.meta30785,self__._,self__.fn1,meta30788__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30789){
var self__ = this;
var _30789__$1 = this;
return self__.meta30788;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30777_SHARP_){
return f1.call(null,(((p1__30777_SHARP_ == null))?null:self__.f.call(null,p1__30777_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30785","meta30785",-657698780,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30784","cljs.core.async/t_cljs$core$async30784",-938360556,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30788","meta30788",1734429926,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30787";

cljs.core.async.t_cljs$core$async30787.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30787");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30787 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30787(map_LT___$1,f__$1,ch__$1,meta30785__$1,___$2,fn1__$1,meta30788){
return (new cljs.core.async.t_cljs$core$async30787(map_LT___$1,f__$1,ch__$1,meta30785__$1,___$2,fn1__$1,meta30788));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30787(self__.map_LT_,self__.f,self__.ch,self__.meta30785,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30785","meta30785",-657698780,null)], null);
});

cljs.core.async.t_cljs$core$async30784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30784";

cljs.core.async.t_cljs$core$async30784.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30784");
});

cljs.core.async.__GT_t_cljs$core$async30784 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30784(map_LT___$1,f__$1,ch__$1,meta30785){
return (new cljs.core.async.t_cljs$core$async30784(map_LT___$1,f__$1,ch__$1,meta30785));
});

}

return (new cljs.core.async.t_cljs$core$async30784(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30793 = (function (map_GT_,f,ch,meta30794){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30794 = meta30794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30795,meta30794__$1){
var self__ = this;
var _30795__$1 = this;
return (new cljs.core.async.t_cljs$core$async30793(self__.map_GT_,self__.f,self__.ch,meta30794__$1));
});

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30795){
var self__ = this;
var _30795__$1 = this;
return self__.meta30794;
});

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30794","meta30794",-893798459,null)], null);
});

cljs.core.async.t_cljs$core$async30793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30793";

cljs.core.async.t_cljs$core$async30793.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30793");
});

cljs.core.async.__GT_t_cljs$core$async30793 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30793(map_GT___$1,f__$1,ch__$1,meta30794){
return (new cljs.core.async.t_cljs$core$async30793(map_GT___$1,f__$1,ch__$1,meta30794));
});

}

return (new cljs.core.async.t_cljs$core$async30793(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30799 = (function (filter_GT_,p,ch,meta30800){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new cljs.core.async.t_cljs$core$async30799(self__.filter_GT_,self__.p,self__.ch,meta30800__$1));
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null)], null);
});

cljs.core.async.t_cljs$core$async30799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30799";

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30799");
});

cljs.core.async.__GT_t_cljs$core$async30799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30799(filter_GT___$1,p__$1,ch__$1,meta30800){
return (new cljs.core.async.t_cljs$core$async30799(filter_GT___$1,p__$1,ch__$1,meta30800));
});

}

return (new cljs.core.async.t_cljs$core$async30799(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30802 = [];
var len__25835__auto___30846 = arguments.length;
var i__25836__auto___30847 = (0);
while(true){
if((i__25836__auto___30847 < len__25835__auto___30846)){
args30802.push((arguments[i__25836__auto___30847]));

var G__30848 = (i__25836__auto___30847 + (1));
i__25836__auto___30847 = G__30848;
continue;
} else {
}
break;
}

var G__30804 = args30802.length;
switch (G__30804) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30802.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___30850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___30850,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___30850,out){
return (function (state_30825){
var state_val_30826 = (state_30825[(1)]);
if((state_val_30826 === (7))){
var inst_30821 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30827_30851 = state_30825__$1;
(statearr_30827_30851[(2)] = inst_30821);

(statearr_30827_30851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (1))){
var state_30825__$1 = state_30825;
var statearr_30828_30852 = state_30825__$1;
(statearr_30828_30852[(2)] = null);

(statearr_30828_30852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (4))){
var inst_30807 = (state_30825[(7)]);
var inst_30807__$1 = (state_30825[(2)]);
var inst_30808 = (inst_30807__$1 == null);
var state_30825__$1 = (function (){var statearr_30829 = state_30825;
(statearr_30829[(7)] = inst_30807__$1);

return statearr_30829;
})();
if(cljs.core.truth_(inst_30808)){
var statearr_30830_30853 = state_30825__$1;
(statearr_30830_30853[(1)] = (5));

} else {
var statearr_30831_30854 = state_30825__$1;
(statearr_30831_30854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (6))){
var inst_30807 = (state_30825[(7)]);
var inst_30812 = p.call(null,inst_30807);
var state_30825__$1 = state_30825;
if(cljs.core.truth_(inst_30812)){
var statearr_30832_30855 = state_30825__$1;
(statearr_30832_30855[(1)] = (8));

} else {
var statearr_30833_30856 = state_30825__$1;
(statearr_30833_30856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (3))){
var inst_30823 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30825__$1,inst_30823);
} else {
if((state_val_30826 === (2))){
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30825__$1,(4),ch);
} else {
if((state_val_30826 === (11))){
var inst_30815 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30834_30857 = state_30825__$1;
(statearr_30834_30857[(2)] = inst_30815);

(statearr_30834_30857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (9))){
var state_30825__$1 = state_30825;
var statearr_30835_30858 = state_30825__$1;
(statearr_30835_30858[(2)] = null);

(statearr_30835_30858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (5))){
var inst_30810 = cljs.core.async.close_BANG_.call(null,out);
var state_30825__$1 = state_30825;
var statearr_30836_30859 = state_30825__$1;
(statearr_30836_30859[(2)] = inst_30810);

(statearr_30836_30859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (10))){
var inst_30818 = (state_30825[(2)]);
var state_30825__$1 = (function (){var statearr_30837 = state_30825;
(statearr_30837[(8)] = inst_30818);

return statearr_30837;
})();
var statearr_30838_30860 = state_30825__$1;
(statearr_30838_30860[(2)] = null);

(statearr_30838_30860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (8))){
var inst_30807 = (state_30825[(7)]);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30825__$1,(11),out,inst_30807);
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
});})(c__28578__auto___30850,out))
;
return ((function (switch__28466__auto__,c__28578__auto___30850,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_30842 = [null,null,null,null,null,null,null,null,null];
(statearr_30842[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_30842[(1)] = (1));

return statearr_30842;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_30825){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_30825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e30843){if((e30843 instanceof Object)){
var ex__28470__auto__ = e30843;
var statearr_30844_30861 = state_30825;
(statearr_30844_30861[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30862 = state_30825;
state_30825 = G__30862;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_30825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_30825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___30850,out))
})();
var state__28580__auto__ = (function (){var statearr_30845 = f__28579__auto__.call(null);
(statearr_30845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___30850);

return statearr_30845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___30850,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30863 = [];
var len__25835__auto___30866 = arguments.length;
var i__25836__auto___30867 = (0);
while(true){
if((i__25836__auto___30867 < len__25835__auto___30866)){
args30863.push((arguments[i__25836__auto___30867]));

var G__30868 = (i__25836__auto___30867 + (1));
i__25836__auto___30867 = G__30868;
continue;
} else {
}
break;
}

var G__30865 = args30863.length;
switch (G__30865) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30863.length)].join('')));

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
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto__){
return (function (state_31035){
var state_val_31036 = (state_31035[(1)]);
if((state_val_31036 === (7))){
var inst_31031 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31037_31078 = state_31035__$1;
(statearr_31037_31078[(2)] = inst_31031);

(statearr_31037_31078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (20))){
var inst_31001 = (state_31035[(7)]);
var inst_31012 = (state_31035[(2)]);
var inst_31013 = cljs.core.next.call(null,inst_31001);
var inst_30987 = inst_31013;
var inst_30988 = null;
var inst_30989 = (0);
var inst_30990 = (0);
var state_31035__$1 = (function (){var statearr_31038 = state_31035;
(statearr_31038[(8)] = inst_30989);

(statearr_31038[(9)] = inst_30990);

(statearr_31038[(10)] = inst_30987);

(statearr_31038[(11)] = inst_31012);

(statearr_31038[(12)] = inst_30988);

return statearr_31038;
})();
var statearr_31039_31079 = state_31035__$1;
(statearr_31039_31079[(2)] = null);

(statearr_31039_31079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (1))){
var state_31035__$1 = state_31035;
var statearr_31040_31080 = state_31035__$1;
(statearr_31040_31080[(2)] = null);

(statearr_31040_31080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (4))){
var inst_30976 = (state_31035[(13)]);
var inst_30976__$1 = (state_31035[(2)]);
var inst_30977 = (inst_30976__$1 == null);
var state_31035__$1 = (function (){var statearr_31041 = state_31035;
(statearr_31041[(13)] = inst_30976__$1);

return statearr_31041;
})();
if(cljs.core.truth_(inst_30977)){
var statearr_31042_31081 = state_31035__$1;
(statearr_31042_31081[(1)] = (5));

} else {
var statearr_31043_31082 = state_31035__$1;
(statearr_31043_31082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (15))){
var state_31035__$1 = state_31035;
var statearr_31047_31083 = state_31035__$1;
(statearr_31047_31083[(2)] = null);

(statearr_31047_31083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (21))){
var state_31035__$1 = state_31035;
var statearr_31048_31084 = state_31035__$1;
(statearr_31048_31084[(2)] = null);

(statearr_31048_31084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (13))){
var inst_30989 = (state_31035[(8)]);
var inst_30990 = (state_31035[(9)]);
var inst_30987 = (state_31035[(10)]);
var inst_30988 = (state_31035[(12)]);
var inst_30997 = (state_31035[(2)]);
var inst_30998 = (inst_30990 + (1));
var tmp31044 = inst_30989;
var tmp31045 = inst_30987;
var tmp31046 = inst_30988;
var inst_30987__$1 = tmp31045;
var inst_30988__$1 = tmp31046;
var inst_30989__$1 = tmp31044;
var inst_30990__$1 = inst_30998;
var state_31035__$1 = (function (){var statearr_31049 = state_31035;
(statearr_31049[(8)] = inst_30989__$1);

(statearr_31049[(9)] = inst_30990__$1);

(statearr_31049[(14)] = inst_30997);

(statearr_31049[(10)] = inst_30987__$1);

(statearr_31049[(12)] = inst_30988__$1);

return statearr_31049;
})();
var statearr_31050_31085 = state_31035__$1;
(statearr_31050_31085[(2)] = null);

(statearr_31050_31085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (22))){
var state_31035__$1 = state_31035;
var statearr_31051_31086 = state_31035__$1;
(statearr_31051_31086[(2)] = null);

(statearr_31051_31086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (6))){
var inst_30976 = (state_31035[(13)]);
var inst_30985 = f.call(null,inst_30976);
var inst_30986 = cljs.core.seq.call(null,inst_30985);
var inst_30987 = inst_30986;
var inst_30988 = null;
var inst_30989 = (0);
var inst_30990 = (0);
var state_31035__$1 = (function (){var statearr_31052 = state_31035;
(statearr_31052[(8)] = inst_30989);

(statearr_31052[(9)] = inst_30990);

(statearr_31052[(10)] = inst_30987);

(statearr_31052[(12)] = inst_30988);

return statearr_31052;
})();
var statearr_31053_31087 = state_31035__$1;
(statearr_31053_31087[(2)] = null);

(statearr_31053_31087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (17))){
var inst_31001 = (state_31035[(7)]);
var inst_31005 = cljs.core.chunk_first.call(null,inst_31001);
var inst_31006 = cljs.core.chunk_rest.call(null,inst_31001);
var inst_31007 = cljs.core.count.call(null,inst_31005);
var inst_30987 = inst_31006;
var inst_30988 = inst_31005;
var inst_30989 = inst_31007;
var inst_30990 = (0);
var state_31035__$1 = (function (){var statearr_31054 = state_31035;
(statearr_31054[(8)] = inst_30989);

(statearr_31054[(9)] = inst_30990);

(statearr_31054[(10)] = inst_30987);

(statearr_31054[(12)] = inst_30988);

return statearr_31054;
})();
var statearr_31055_31088 = state_31035__$1;
(statearr_31055_31088[(2)] = null);

(statearr_31055_31088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (3))){
var inst_31033 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31035__$1,inst_31033);
} else {
if((state_val_31036 === (12))){
var inst_31021 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31056_31089 = state_31035__$1;
(statearr_31056_31089[(2)] = inst_31021);

(statearr_31056_31089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (2))){
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31035__$1,(4),in$);
} else {
if((state_val_31036 === (23))){
var inst_31029 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31057_31090 = state_31035__$1;
(statearr_31057_31090[(2)] = inst_31029);

(statearr_31057_31090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (19))){
var inst_31016 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31058_31091 = state_31035__$1;
(statearr_31058_31091[(2)] = inst_31016);

(statearr_31058_31091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (11))){
var inst_30987 = (state_31035[(10)]);
var inst_31001 = (state_31035[(7)]);
var inst_31001__$1 = cljs.core.seq.call(null,inst_30987);
var state_31035__$1 = (function (){var statearr_31059 = state_31035;
(statearr_31059[(7)] = inst_31001__$1);

return statearr_31059;
})();
if(inst_31001__$1){
var statearr_31060_31092 = state_31035__$1;
(statearr_31060_31092[(1)] = (14));

} else {
var statearr_31061_31093 = state_31035__$1;
(statearr_31061_31093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (9))){
var inst_31023 = (state_31035[(2)]);
var inst_31024 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31035__$1 = (function (){var statearr_31062 = state_31035;
(statearr_31062[(15)] = inst_31023);

return statearr_31062;
})();
if(cljs.core.truth_(inst_31024)){
var statearr_31063_31094 = state_31035__$1;
(statearr_31063_31094[(1)] = (21));

} else {
var statearr_31064_31095 = state_31035__$1;
(statearr_31064_31095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (5))){
var inst_30979 = cljs.core.async.close_BANG_.call(null,out);
var state_31035__$1 = state_31035;
var statearr_31065_31096 = state_31035__$1;
(statearr_31065_31096[(2)] = inst_30979);

(statearr_31065_31096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (14))){
var inst_31001 = (state_31035[(7)]);
var inst_31003 = cljs.core.chunked_seq_QMARK_.call(null,inst_31001);
var state_31035__$1 = state_31035;
if(inst_31003){
var statearr_31066_31097 = state_31035__$1;
(statearr_31066_31097[(1)] = (17));

} else {
var statearr_31067_31098 = state_31035__$1;
(statearr_31067_31098[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (16))){
var inst_31019 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31068_31099 = state_31035__$1;
(statearr_31068_31099[(2)] = inst_31019);

(statearr_31068_31099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (10))){
var inst_30990 = (state_31035[(9)]);
var inst_30988 = (state_31035[(12)]);
var inst_30995 = cljs.core._nth.call(null,inst_30988,inst_30990);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31035__$1,(13),out,inst_30995);
} else {
if((state_val_31036 === (18))){
var inst_31001 = (state_31035[(7)]);
var inst_31010 = cljs.core.first.call(null,inst_31001);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31035__$1,(20),out,inst_31010);
} else {
if((state_val_31036 === (8))){
var inst_30989 = (state_31035[(8)]);
var inst_30990 = (state_31035[(9)]);
var inst_30992 = (inst_30990 < inst_30989);
var inst_30993 = inst_30992;
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_30993)){
var statearr_31069_31100 = state_31035__$1;
(statearr_31069_31100[(1)] = (10));

} else {
var statearr_31070_31101 = state_31035__$1;
(statearr_31070_31101[(1)] = (11));

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
});})(c__28578__auto__))
;
return ((function (switch__28466__auto__,c__28578__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____0 = (function (){
var statearr_31074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31074[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__);

(statearr_31074[(1)] = (1));

return statearr_31074;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____1 = (function (state_31035){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_31035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e31075){if((e31075 instanceof Object)){
var ex__28470__auto__ = e31075;
var statearr_31076_31102 = state_31035;
(statearr_31076_31102[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31103 = state_31035;
state_31035 = G__31103;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__ = function(state_31035){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____1.call(this,state_31035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28467__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_31077 = f__28579__auto__.call(null);
(statearr_31077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31104 = [];
var len__25835__auto___31107 = arguments.length;
var i__25836__auto___31108 = (0);
while(true){
if((i__25836__auto___31108 < len__25835__auto___31107)){
args31104.push((arguments[i__25836__auto___31108]));

var G__31109 = (i__25836__auto___31108 + (1));
i__25836__auto___31108 = G__31109;
continue;
} else {
}
break;
}

var G__31106 = args31104.length;
switch (G__31106) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31104.length)].join('')));

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
var args31111 = [];
var len__25835__auto___31114 = arguments.length;
var i__25836__auto___31115 = (0);
while(true){
if((i__25836__auto___31115 < len__25835__auto___31114)){
args31111.push((arguments[i__25836__auto___31115]));

var G__31116 = (i__25836__auto___31115 + (1));
i__25836__auto___31115 = G__31116;
continue;
} else {
}
break;
}

var G__31113 = args31111.length;
switch (G__31113) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31111.length)].join('')));

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
var args31118 = [];
var len__25835__auto___31169 = arguments.length;
var i__25836__auto___31170 = (0);
while(true){
if((i__25836__auto___31170 < len__25835__auto___31169)){
args31118.push((arguments[i__25836__auto___31170]));

var G__31171 = (i__25836__auto___31170 + (1));
i__25836__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var G__31120 = args31118.length;
switch (G__31120) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31118.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___31173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___31173,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___31173,out){
return (function (state_31144){
var state_val_31145 = (state_31144[(1)]);
if((state_val_31145 === (7))){
var inst_31139 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31146_31174 = state_31144__$1;
(statearr_31146_31174[(2)] = inst_31139);

(statearr_31146_31174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (1))){
var inst_31121 = null;
var state_31144__$1 = (function (){var statearr_31147 = state_31144;
(statearr_31147[(7)] = inst_31121);

return statearr_31147;
})();
var statearr_31148_31175 = state_31144__$1;
(statearr_31148_31175[(2)] = null);

(statearr_31148_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (4))){
var inst_31124 = (state_31144[(8)]);
var inst_31124__$1 = (state_31144[(2)]);
var inst_31125 = (inst_31124__$1 == null);
var inst_31126 = cljs.core.not.call(null,inst_31125);
var state_31144__$1 = (function (){var statearr_31149 = state_31144;
(statearr_31149[(8)] = inst_31124__$1);

return statearr_31149;
})();
if(inst_31126){
var statearr_31150_31176 = state_31144__$1;
(statearr_31150_31176[(1)] = (5));

} else {
var statearr_31151_31177 = state_31144__$1;
(statearr_31151_31177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (6))){
var state_31144__$1 = state_31144;
var statearr_31152_31178 = state_31144__$1;
(statearr_31152_31178[(2)] = null);

(statearr_31152_31178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (3))){
var inst_31141 = (state_31144[(2)]);
var inst_31142 = cljs.core.async.close_BANG_.call(null,out);
var state_31144__$1 = (function (){var statearr_31153 = state_31144;
(statearr_31153[(9)] = inst_31141);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31144__$1,inst_31142);
} else {
if((state_val_31145 === (2))){
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31144__$1,(4),ch);
} else {
if((state_val_31145 === (11))){
var inst_31124 = (state_31144[(8)]);
var inst_31133 = (state_31144[(2)]);
var inst_31121 = inst_31124;
var state_31144__$1 = (function (){var statearr_31154 = state_31144;
(statearr_31154[(10)] = inst_31133);

(statearr_31154[(7)] = inst_31121);

return statearr_31154;
})();
var statearr_31155_31179 = state_31144__$1;
(statearr_31155_31179[(2)] = null);

(statearr_31155_31179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (9))){
var inst_31124 = (state_31144[(8)]);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31144__$1,(11),out,inst_31124);
} else {
if((state_val_31145 === (5))){
var inst_31124 = (state_31144[(8)]);
var inst_31121 = (state_31144[(7)]);
var inst_31128 = cljs.core._EQ_.call(null,inst_31124,inst_31121);
var state_31144__$1 = state_31144;
if(inst_31128){
var statearr_31157_31180 = state_31144__$1;
(statearr_31157_31180[(1)] = (8));

} else {
var statearr_31158_31181 = state_31144__$1;
(statearr_31158_31181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (10))){
var inst_31136 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31159_31182 = state_31144__$1;
(statearr_31159_31182[(2)] = inst_31136);

(statearr_31159_31182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (8))){
var inst_31121 = (state_31144[(7)]);
var tmp31156 = inst_31121;
var inst_31121__$1 = tmp31156;
var state_31144__$1 = (function (){var statearr_31160 = state_31144;
(statearr_31160[(7)] = inst_31121__$1);

return statearr_31160;
})();
var statearr_31161_31183 = state_31144__$1;
(statearr_31161_31183[(2)] = null);

(statearr_31161_31183[(1)] = (2));


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
});})(c__28578__auto___31173,out))
;
return ((function (switch__28466__auto__,c__28578__auto___31173,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_31165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31165[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_31165[(1)] = (1));

return statearr_31165;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_31144){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_31144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e31166){if((e31166 instanceof Object)){
var ex__28470__auto__ = e31166;
var statearr_31167_31184 = state_31144;
(statearr_31167_31184[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31185 = state_31144;
state_31144 = G__31185;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_31144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_31144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___31173,out))
})();
var state__28580__auto__ = (function (){var statearr_31168 = f__28579__auto__.call(null);
(statearr_31168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___31173);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___31173,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31186 = [];
var len__25835__auto___31256 = arguments.length;
var i__25836__auto___31257 = (0);
while(true){
if((i__25836__auto___31257 < len__25835__auto___31256)){
args31186.push((arguments[i__25836__auto___31257]));

var G__31258 = (i__25836__auto___31257 + (1));
i__25836__auto___31257 = G__31258;
continue;
} else {
}
break;
}

var G__31188 = args31186.length;
switch (G__31188) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31186.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___31260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___31260,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___31260,out){
return (function (state_31226){
var state_val_31227 = (state_31226[(1)]);
if((state_val_31227 === (7))){
var inst_31222 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31228_31261 = state_31226__$1;
(statearr_31228_31261[(2)] = inst_31222);

(statearr_31228_31261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (1))){
var inst_31189 = (new Array(n));
var inst_31190 = inst_31189;
var inst_31191 = (0);
var state_31226__$1 = (function (){var statearr_31229 = state_31226;
(statearr_31229[(7)] = inst_31190);

(statearr_31229[(8)] = inst_31191);

return statearr_31229;
})();
var statearr_31230_31262 = state_31226__$1;
(statearr_31230_31262[(2)] = null);

(statearr_31230_31262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (4))){
var inst_31194 = (state_31226[(9)]);
var inst_31194__$1 = (state_31226[(2)]);
var inst_31195 = (inst_31194__$1 == null);
var inst_31196 = cljs.core.not.call(null,inst_31195);
var state_31226__$1 = (function (){var statearr_31231 = state_31226;
(statearr_31231[(9)] = inst_31194__$1);

return statearr_31231;
})();
if(inst_31196){
var statearr_31232_31263 = state_31226__$1;
(statearr_31232_31263[(1)] = (5));

} else {
var statearr_31233_31264 = state_31226__$1;
(statearr_31233_31264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (15))){
var inst_31216 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31234_31265 = state_31226__$1;
(statearr_31234_31265[(2)] = inst_31216);

(statearr_31234_31265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (13))){
var state_31226__$1 = state_31226;
var statearr_31235_31266 = state_31226__$1;
(statearr_31235_31266[(2)] = null);

(statearr_31235_31266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (6))){
var inst_31191 = (state_31226[(8)]);
var inst_31212 = (inst_31191 > (0));
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31212)){
var statearr_31236_31267 = state_31226__$1;
(statearr_31236_31267[(1)] = (12));

} else {
var statearr_31237_31268 = state_31226__$1;
(statearr_31237_31268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (3))){
var inst_31224 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31226__$1,inst_31224);
} else {
if((state_val_31227 === (12))){
var inst_31190 = (state_31226[(7)]);
var inst_31214 = cljs.core.vec.call(null,inst_31190);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31226__$1,(15),out,inst_31214);
} else {
if((state_val_31227 === (2))){
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(4),ch);
} else {
if((state_val_31227 === (11))){
var inst_31206 = (state_31226[(2)]);
var inst_31207 = (new Array(n));
var inst_31190 = inst_31207;
var inst_31191 = (0);
var state_31226__$1 = (function (){var statearr_31238 = state_31226;
(statearr_31238[(7)] = inst_31190);

(statearr_31238[(10)] = inst_31206);

(statearr_31238[(8)] = inst_31191);

return statearr_31238;
})();
var statearr_31239_31269 = state_31226__$1;
(statearr_31239_31269[(2)] = null);

(statearr_31239_31269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (9))){
var inst_31190 = (state_31226[(7)]);
var inst_31204 = cljs.core.vec.call(null,inst_31190);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31226__$1,(11),out,inst_31204);
} else {
if((state_val_31227 === (5))){
var inst_31194 = (state_31226[(9)]);
var inst_31190 = (state_31226[(7)]);
var inst_31199 = (state_31226[(11)]);
var inst_31191 = (state_31226[(8)]);
var inst_31198 = (inst_31190[inst_31191] = inst_31194);
var inst_31199__$1 = (inst_31191 + (1));
var inst_31200 = (inst_31199__$1 < n);
var state_31226__$1 = (function (){var statearr_31240 = state_31226;
(statearr_31240[(12)] = inst_31198);

(statearr_31240[(11)] = inst_31199__$1);

return statearr_31240;
})();
if(cljs.core.truth_(inst_31200)){
var statearr_31241_31270 = state_31226__$1;
(statearr_31241_31270[(1)] = (8));

} else {
var statearr_31242_31271 = state_31226__$1;
(statearr_31242_31271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (14))){
var inst_31219 = (state_31226[(2)]);
var inst_31220 = cljs.core.async.close_BANG_.call(null,out);
var state_31226__$1 = (function (){var statearr_31244 = state_31226;
(statearr_31244[(13)] = inst_31219);

return statearr_31244;
})();
var statearr_31245_31272 = state_31226__$1;
(statearr_31245_31272[(2)] = inst_31220);

(statearr_31245_31272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (10))){
var inst_31210 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31246_31273 = state_31226__$1;
(statearr_31246_31273[(2)] = inst_31210);

(statearr_31246_31273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (8))){
var inst_31190 = (state_31226[(7)]);
var inst_31199 = (state_31226[(11)]);
var tmp31243 = inst_31190;
var inst_31190__$1 = tmp31243;
var inst_31191 = inst_31199;
var state_31226__$1 = (function (){var statearr_31247 = state_31226;
(statearr_31247[(7)] = inst_31190__$1);

(statearr_31247[(8)] = inst_31191);

return statearr_31247;
})();
var statearr_31248_31274 = state_31226__$1;
(statearr_31248_31274[(2)] = null);

(statearr_31248_31274[(1)] = (2));


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
});})(c__28578__auto___31260,out))
;
return ((function (switch__28466__auto__,c__28578__auto___31260,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_31252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31252[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_31252[(1)] = (1));

return statearr_31252;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_31226){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_31226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e31253){if((e31253 instanceof Object)){
var ex__28470__auto__ = e31253;
var statearr_31254_31275 = state_31226;
(statearr_31254_31275[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31276 = state_31226;
state_31226 = G__31276;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_31226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_31226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___31260,out))
})();
var state__28580__auto__ = (function (){var statearr_31255 = f__28579__auto__.call(null);
(statearr_31255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___31260);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___31260,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31277 = [];
var len__25835__auto___31351 = arguments.length;
var i__25836__auto___31352 = (0);
while(true){
if((i__25836__auto___31352 < len__25835__auto___31351)){
args31277.push((arguments[i__25836__auto___31352]));

var G__31353 = (i__25836__auto___31352 + (1));
i__25836__auto___31352 = G__31353;
continue;
} else {
}
break;
}

var G__31279 = args31277.length;
switch (G__31279) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31277.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28578__auto___31355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___31355,out){
return (function (){
var f__28579__auto__ = (function (){var switch__28466__auto__ = ((function (c__28578__auto___31355,out){
return (function (state_31321){
var state_val_31322 = (state_31321[(1)]);
if((state_val_31322 === (7))){
var inst_31317 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31323_31356 = state_31321__$1;
(statearr_31323_31356[(2)] = inst_31317);

(statearr_31323_31356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (1))){
var inst_31280 = [];
var inst_31281 = inst_31280;
var inst_31282 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31321__$1 = (function (){var statearr_31324 = state_31321;
(statearr_31324[(7)] = inst_31281);

(statearr_31324[(8)] = inst_31282);

return statearr_31324;
})();
var statearr_31325_31357 = state_31321__$1;
(statearr_31325_31357[(2)] = null);

(statearr_31325_31357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (4))){
var inst_31285 = (state_31321[(9)]);
var inst_31285__$1 = (state_31321[(2)]);
var inst_31286 = (inst_31285__$1 == null);
var inst_31287 = cljs.core.not.call(null,inst_31286);
var state_31321__$1 = (function (){var statearr_31326 = state_31321;
(statearr_31326[(9)] = inst_31285__$1);

return statearr_31326;
})();
if(inst_31287){
var statearr_31327_31358 = state_31321__$1;
(statearr_31327_31358[(1)] = (5));

} else {
var statearr_31328_31359 = state_31321__$1;
(statearr_31328_31359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (15))){
var inst_31311 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31329_31360 = state_31321__$1;
(statearr_31329_31360[(2)] = inst_31311);

(statearr_31329_31360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (13))){
var state_31321__$1 = state_31321;
var statearr_31330_31361 = state_31321__$1;
(statearr_31330_31361[(2)] = null);

(statearr_31330_31361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (6))){
var inst_31281 = (state_31321[(7)]);
var inst_31306 = inst_31281.length;
var inst_31307 = (inst_31306 > (0));
var state_31321__$1 = state_31321;
if(cljs.core.truth_(inst_31307)){
var statearr_31331_31362 = state_31321__$1;
(statearr_31331_31362[(1)] = (12));

} else {
var statearr_31332_31363 = state_31321__$1;
(statearr_31332_31363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (3))){
var inst_31319 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31321__$1,inst_31319);
} else {
if((state_val_31322 === (12))){
var inst_31281 = (state_31321[(7)]);
var inst_31309 = cljs.core.vec.call(null,inst_31281);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31321__$1,(15),out,inst_31309);
} else {
if((state_val_31322 === (2))){
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31321__$1,(4),ch);
} else {
if((state_val_31322 === (11))){
var inst_31285 = (state_31321[(9)]);
var inst_31289 = (state_31321[(10)]);
var inst_31299 = (state_31321[(2)]);
var inst_31300 = [];
var inst_31301 = inst_31300.push(inst_31285);
var inst_31281 = inst_31300;
var inst_31282 = inst_31289;
var state_31321__$1 = (function (){var statearr_31333 = state_31321;
(statearr_31333[(11)] = inst_31301);

(statearr_31333[(7)] = inst_31281);

(statearr_31333[(12)] = inst_31299);

(statearr_31333[(8)] = inst_31282);

return statearr_31333;
})();
var statearr_31334_31364 = state_31321__$1;
(statearr_31334_31364[(2)] = null);

(statearr_31334_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (9))){
var inst_31281 = (state_31321[(7)]);
var inst_31297 = cljs.core.vec.call(null,inst_31281);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31321__$1,(11),out,inst_31297);
} else {
if((state_val_31322 === (5))){
var inst_31285 = (state_31321[(9)]);
var inst_31289 = (state_31321[(10)]);
var inst_31282 = (state_31321[(8)]);
var inst_31289__$1 = f.call(null,inst_31285);
var inst_31290 = cljs.core._EQ_.call(null,inst_31289__$1,inst_31282);
var inst_31291 = cljs.core.keyword_identical_QMARK_.call(null,inst_31282,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31292 = (inst_31290) || (inst_31291);
var state_31321__$1 = (function (){var statearr_31335 = state_31321;
(statearr_31335[(10)] = inst_31289__$1);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31292)){
var statearr_31336_31365 = state_31321__$1;
(statearr_31336_31365[(1)] = (8));

} else {
var statearr_31337_31366 = state_31321__$1;
(statearr_31337_31366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (14))){
var inst_31314 = (state_31321[(2)]);
var inst_31315 = cljs.core.async.close_BANG_.call(null,out);
var state_31321__$1 = (function (){var statearr_31339 = state_31321;
(statearr_31339[(13)] = inst_31314);

return statearr_31339;
})();
var statearr_31340_31367 = state_31321__$1;
(statearr_31340_31367[(2)] = inst_31315);

(statearr_31340_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (10))){
var inst_31304 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31341_31368 = state_31321__$1;
(statearr_31341_31368[(2)] = inst_31304);

(statearr_31341_31368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (8))){
var inst_31285 = (state_31321[(9)]);
var inst_31281 = (state_31321[(7)]);
var inst_31289 = (state_31321[(10)]);
var inst_31294 = inst_31281.push(inst_31285);
var tmp31338 = inst_31281;
var inst_31281__$1 = tmp31338;
var inst_31282 = inst_31289;
var state_31321__$1 = (function (){var statearr_31342 = state_31321;
(statearr_31342[(14)] = inst_31294);

(statearr_31342[(7)] = inst_31281__$1);

(statearr_31342[(8)] = inst_31282);

return statearr_31342;
})();
var statearr_31343_31369 = state_31321__$1;
(statearr_31343_31369[(2)] = null);

(statearr_31343_31369[(1)] = (2));


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
});})(c__28578__auto___31355,out))
;
return ((function (switch__28466__auto__,c__28578__auto___31355,out){
return (function() {
var cljs$core$async$state_machine__28467__auto__ = null;
var cljs$core$async$state_machine__28467__auto____0 = (function (){
var statearr_31347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31347[(0)] = cljs$core$async$state_machine__28467__auto__);

(statearr_31347[(1)] = (1));

return statearr_31347;
});
var cljs$core$async$state_machine__28467__auto____1 = (function (state_31321){
while(true){
var ret_value__28468__auto__ = (function (){try{while(true){
var result__28469__auto__ = switch__28466__auto__.call(null,state_31321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28469__auto__;
}
break;
}
}catch (e31348){if((e31348 instanceof Object)){
var ex__28470__auto__ = e31348;
var statearr_31349_31370 = state_31321;
(statearr_31349_31370[(5)] = ex__28470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31371 = state_31321;
state_31321 = G__31371;
continue;
} else {
return ret_value__28468__auto__;
}
break;
}
});
cljs$core$async$state_machine__28467__auto__ = function(state_31321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28467__auto____1.call(this,state_31321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28467__auto____0;
cljs$core$async$state_machine__28467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28467__auto____1;
return cljs$core$async$state_machine__28467__auto__;
})()
;})(switch__28466__auto__,c__28578__auto___31355,out))
})();
var state__28580__auto__ = (function (){var statearr_31350 = f__28579__auto__.call(null);
(statearr_31350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___31355);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___31355,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481153818469