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
var args15730 = [];
var len__7484__auto___15736 = arguments.length;
var i__7485__auto___15737 = (0);
while(true){
if((i__7485__auto___15737 < len__7484__auto___15736)){
args15730.push((arguments[i__7485__auto___15737]));

var G__15738 = (i__7485__auto___15737 + (1));
i__7485__auto___15737 = G__15738;
continue;
} else {
}
break;
}

var G__15732 = args15730.length;
switch (G__15732) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15730.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15733 = (function (f,blockable,meta15734){
this.f = f;
this.blockable = blockable;
this.meta15734 = meta15734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15735,meta15734__$1){
var self__ = this;
var _15735__$1 = this;
return (new cljs.core.async.t_cljs$core$async15733(self__.f,self__.blockable,meta15734__$1));
});

cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15735){
var self__ = this;
var _15735__$1 = this;
return self__.meta15734;
});

cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15734], null);
});

cljs.core.async.t_cljs$core$async15733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15733";

cljs.core.async.t_cljs$core$async15733.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15733");
});

cljs.core.async.__GT_t_cljs$core$async15733 = (function cljs$core$async$__GT_t_cljs$core$async15733(f__$1,blockable__$1,meta15734){
return (new cljs.core.async.t_cljs$core$async15733(f__$1,blockable__$1,meta15734));
});

}

return (new cljs.core.async.t_cljs$core$async15733(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15742 = [];
var len__7484__auto___15745 = arguments.length;
var i__7485__auto___15746 = (0);
while(true){
if((i__7485__auto___15746 < len__7484__auto___15745)){
args15742.push((arguments[i__7485__auto___15746]));

var G__15747 = (i__7485__auto___15746 + (1));
i__7485__auto___15746 = G__15747;
continue;
} else {
}
break;
}

var G__15744 = args15742.length;
switch (G__15744) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15742.length)].join('')));

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
var args15749 = [];
var len__7484__auto___15752 = arguments.length;
var i__7485__auto___15753 = (0);
while(true){
if((i__7485__auto___15753 < len__7484__auto___15752)){
args15749.push((arguments[i__7485__auto___15753]));

var G__15754 = (i__7485__auto___15753 + (1));
i__7485__auto___15753 = G__15754;
continue;
} else {
}
break;
}

var G__15751 = args15749.length;
switch (G__15751) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15749.length)].join('')));

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
var args15756 = [];
var len__7484__auto___15759 = arguments.length;
var i__7485__auto___15760 = (0);
while(true){
if((i__7485__auto___15760 < len__7484__auto___15759)){
args15756.push((arguments[i__7485__auto___15760]));

var G__15761 = (i__7485__auto___15760 + (1));
i__7485__auto___15760 = G__15761;
continue;
} else {
}
break;
}

var G__15758 = args15756.length;
switch (G__15758) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15756.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15763 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15763) : fn1.call(null,val_15763));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15763,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15763) : fn1.call(null,val_15763));
});})(val_15763,ret))
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
var args15764 = [];
var len__7484__auto___15767 = arguments.length;
var i__7485__auto___15768 = (0);
while(true){
if((i__7485__auto___15768 < len__7484__auto___15767)){
args15764.push((arguments[i__7485__auto___15768]));

var G__15769 = (i__7485__auto___15768 + (1));
i__7485__auto___15768 = G__15769;
continue;
} else {
}
break;
}

var G__15766 = args15764.length;
switch (G__15766) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15764.length)].join('')));

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
var n__7324__auto___15771 = n;
var x_15772 = (0);
while(true){
if((x_15772 < n__7324__auto___15771)){
(a[x_15772] = (0));

var G__15773 = (x_15772 + (1));
x_15772 = G__15773;
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

var G__15774 = (i + (1));
i = G__15774;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15778 = (function (alt_flag,flag,meta15779){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15779 = meta15779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15780,meta15779__$1){
var self__ = this;
var _15780__$1 = this;
return (new cljs.core.async.t_cljs$core$async15778(self__.alt_flag,self__.flag,meta15779__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15780){
var self__ = this;
var _15780__$1 = this;
return self__.meta15779;
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15779], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15778";

cljs.core.async.t_cljs$core$async15778.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15778");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15778 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15778(alt_flag__$1,flag__$1,meta15779){
return (new cljs.core.async.t_cljs$core$async15778(alt_flag__$1,flag__$1,meta15779));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15778(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15784 = (function (alt_handler,flag,cb,meta15785){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15785 = meta15785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15786,meta15785__$1){
var self__ = this;
var _15786__$1 = this;
return (new cljs.core.async.t_cljs$core$async15784(self__.alt_handler,self__.flag,self__.cb,meta15785__$1));
});

cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15786){
var self__ = this;
var _15786__$1 = this;
return self__.meta15785;
});

cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15785], null);
});

cljs.core.async.t_cljs$core$async15784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15784";

cljs.core.async.t_cljs$core$async15784.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15784");
});

cljs.core.async.__GT_t_cljs$core$async15784 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15784(alt_handler__$1,flag__$1,cb__$1,meta15785){
return (new cljs.core.async.t_cljs$core$async15784(alt_handler__$1,flag__$1,cb__$1,meta15785));
});

}

return (new cljs.core.async.t_cljs$core$async15784(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15787_SHARP_){
var G__15791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15787_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15791) : fret.call(null,G__15791));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15788_SHARP_){
var G__15792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15788_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15792) : fret.call(null,G__15792));
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
var G__15793 = (i + (1));
i = G__15793;
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
var len__7484__auto___15799 = arguments.length;
var i__7485__auto___15800 = (0);
while(true){
if((i__7485__auto___15800 < len__7484__auto___15799)){
args__7491__auto__.push((arguments[i__7485__auto___15800]));

var G__15801 = (i__7485__auto___15800 + (1));
i__7485__auto___15800 = G__15801;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15796){
var map__15797 = p__15796;
var map__15797__$1 = ((((!((map__15797 == null)))?((((map__15797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15797):map__15797);
var opts = map__15797__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15794){
var G__15795 = cljs.core.first(seq15794);
var seq15794__$1 = cljs.core.next(seq15794);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15795,seq15794__$1);
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
var args15802 = [];
var len__7484__auto___15852 = arguments.length;
var i__7485__auto___15853 = (0);
while(true){
if((i__7485__auto___15853 < len__7484__auto___15852)){
args15802.push((arguments[i__7485__auto___15853]));

var G__15854 = (i__7485__auto___15853 + (1));
i__7485__auto___15853 = G__15854;
continue;
} else {
}
break;
}

var G__15804 = args15802.length;
switch (G__15804) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15802.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15685__auto___15856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___15856){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___15856){
return (function (state_15828){
var state_val_15829 = (state_15828[(1)]);
if((state_val_15829 === (7))){
var inst_15824 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
var statearr_15830_15857 = state_15828__$1;
(statearr_15830_15857[(2)] = inst_15824);

(statearr_15830_15857[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (1))){
var state_15828__$1 = state_15828;
var statearr_15831_15858 = state_15828__$1;
(statearr_15831_15858[(2)] = null);

(statearr_15831_15858[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (4))){
var inst_15807 = (state_15828[(7)]);
var inst_15807__$1 = (state_15828[(2)]);
var inst_15808 = (inst_15807__$1 == null);
var state_15828__$1 = (function (){var statearr_15832 = state_15828;
(statearr_15832[(7)] = inst_15807__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15808)){
var statearr_15833_15859 = state_15828__$1;
(statearr_15833_15859[(1)] = (5));

} else {
var statearr_15834_15860 = state_15828__$1;
(statearr_15834_15860[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (13))){
var state_15828__$1 = state_15828;
var statearr_15835_15861 = state_15828__$1;
(statearr_15835_15861[(2)] = null);

(statearr_15835_15861[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (6))){
var inst_15807 = (state_15828[(7)]);
var state_15828__$1 = state_15828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15828__$1,(11),to,inst_15807);
} else {
if((state_val_15829 === (3))){
var inst_15826 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15828__$1,inst_15826);
} else {
if((state_val_15829 === (12))){
var state_15828__$1 = state_15828;
var statearr_15836_15862 = state_15828__$1;
(statearr_15836_15862[(2)] = null);

(statearr_15836_15862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (2))){
var state_15828__$1 = state_15828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15828__$1,(4),from);
} else {
if((state_val_15829 === (11))){
var inst_15817 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
if(cljs.core.truth_(inst_15817)){
var statearr_15837_15863 = state_15828__$1;
(statearr_15837_15863[(1)] = (12));

} else {
var statearr_15838_15864 = state_15828__$1;
(statearr_15838_15864[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (9))){
var state_15828__$1 = state_15828;
var statearr_15839_15865 = state_15828__$1;
(statearr_15839_15865[(2)] = null);

(statearr_15839_15865[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (5))){
var state_15828__$1 = state_15828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15840_15866 = state_15828__$1;
(statearr_15840_15866[(1)] = (8));

} else {
var statearr_15841_15867 = state_15828__$1;
(statearr_15841_15867[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (14))){
var inst_15822 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
var statearr_15842_15868 = state_15828__$1;
(statearr_15842_15868[(2)] = inst_15822);

(statearr_15842_15868[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (10))){
var inst_15814 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
var statearr_15843_15869 = state_15828__$1;
(statearr_15843_15869[(2)] = inst_15814);

(statearr_15843_15869[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15829 === (8))){
var inst_15811 = cljs.core.async.close_BANG_(to);
var state_15828__$1 = state_15828;
var statearr_15844_15870 = state_15828__$1;
(statearr_15844_15870[(2)] = inst_15811);

(statearr_15844_15870[(1)] = (10));


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
});})(c__15685__auto___15856))
;
return ((function (switch__15561__auto__,c__15685__auto___15856){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_15848 = [null,null,null,null,null,null,null,null];
(statearr_15848[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_15848[(1)] = (1));

return statearr_15848;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_15828){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_15828);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e15849){if((e15849 instanceof Object)){
var ex__15565__auto__ = e15849;
var statearr_15850_15871 = state_15828;
(statearr_15850_15871[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15828);

return cljs.core.cst$kw$recur;
} else {
throw e15849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__15872 = state_15828;
state_15828 = G__15872;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_15828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_15828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___15856))
})();
var state__15687__auto__ = (function (){var statearr_15851 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_15851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___15856);

return statearr_15851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___15856))
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
return (function (p__16060){
var vec__16061 = p__16060;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16061,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16061,(1),null);
var job = vec__16061;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15685__auto___16247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results){
return (function (state_16068){
var state_val_16069 = (state_16068[(1)]);
if((state_val_16069 === (1))){
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16068__$1,(2),res,v);
} else {
if((state_val_16069 === (2))){
var inst_16065 = (state_16068[(2)]);
var inst_16066 = cljs.core.async.close_BANG_(res);
var state_16068__$1 = (function (){var statearr_16070 = state_16068;
(statearr_16070[(7)] = inst_16065);

return statearr_16070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16068__$1,inst_16066);
} else {
return null;
}
}
});})(c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results))
;
return ((function (switch__15561__auto__,c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_16074 = [null,null,null,null,null,null,null,null];
(statearr_16074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__);

(statearr_16074[(1)] = (1));

return statearr_16074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1 = (function (state_16068){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16068);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16075){if((e16075 instanceof Object)){
var ex__15565__auto__ = e16075;
var statearr_16076_16248 = state_16068;
(statearr_16076_16248[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16068);

return cljs.core.cst$kw$recur;
} else {
throw e16075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16249 = state_16068;
state_16068 = G__16249;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results))
})();
var state__15687__auto__ = (function (){var statearr_16077 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___16247);

return statearr_16077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___16247,res,vec__16061,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16078){
var vec__16079 = p__16078;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079,(1),null);
var job = vec__16079;
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
var n__7324__auto___16250 = n;
var __16251 = (0);
while(true){
if((__16251 < n__7324__auto___16250)){
var G__16082_16252 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16082_16252) {
case "compute":
var c__15685__auto___16254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16251,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (__16251,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function (state_16095){
var state_val_16096 = (state_16095[(1)]);
if((state_val_16096 === (1))){
var state_16095__$1 = state_16095;
var statearr_16097_16255 = state_16095__$1;
(statearr_16097_16255[(2)] = null);

(statearr_16097_16255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16096 === (2))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(4),jobs);
} else {
if((state_val_16096 === (3))){
var inst_16093 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16095__$1,inst_16093);
} else {
if((state_val_16096 === (4))){
var inst_16085 = (state_16095[(2)]);
var inst_16086 = process(inst_16085);
var state_16095__$1 = state_16095;
if(cljs.core.truth_(inst_16086)){
var statearr_16098_16256 = state_16095__$1;
(statearr_16098_16256[(1)] = (5));

} else {
var statearr_16099_16257 = state_16095__$1;
(statearr_16099_16257[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16096 === (5))){
var state_16095__$1 = state_16095;
var statearr_16100_16258 = state_16095__$1;
(statearr_16100_16258[(2)] = null);

(statearr_16100_16258[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16096 === (6))){
var state_16095__$1 = state_16095;
var statearr_16101_16259 = state_16095__$1;
(statearr_16101_16259[(2)] = null);

(statearr_16101_16259[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16096 === (7))){
var inst_16091 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16102_16260 = state_16095__$1;
(statearr_16102_16260[(2)] = inst_16091);

(statearr_16102_16260[(1)] = (3));


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
});})(__16251,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
;
return ((function (__16251,switch__15561__auto__,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_16106 = [null,null,null,null,null,null,null];
(statearr_16106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__);

(statearr_16106[(1)] = (1));

return statearr_16106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1 = (function (state_16095){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16095);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16107){if((e16107 instanceof Object)){
var ex__15565__auto__ = e16107;
var statearr_16108_16261 = state_16095;
(statearr_16108_16261[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16095);

return cljs.core.cst$kw$recur;
} else {
throw e16107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16262 = state_16095;
state_16095 = G__16262;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = function(state_16095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1.call(this,state_16095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__;
})()
;})(__16251,switch__15561__auto__,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
})();
var state__15687__auto__ = (function (){var statearr_16109 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___16254);

return statearr_16109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(__16251,c__15685__auto___16254,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
);


break;
case "async":
var c__15685__auto___16263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16251,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (__16251,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function (state_16122){
var state_val_16123 = (state_16122[(1)]);
if((state_val_16123 === (1))){
var state_16122__$1 = state_16122;
var statearr_16124_16264 = state_16122__$1;
(statearr_16124_16264[(2)] = null);

(statearr_16124_16264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (2))){
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16122__$1,(4),jobs);
} else {
if((state_val_16123 === (3))){
var inst_16120 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16122__$1,inst_16120);
} else {
if((state_val_16123 === (4))){
var inst_16112 = (state_16122[(2)]);
var inst_16113 = async(inst_16112);
var state_16122__$1 = state_16122;
if(cljs.core.truth_(inst_16113)){
var statearr_16125_16265 = state_16122__$1;
(statearr_16125_16265[(1)] = (5));

} else {
var statearr_16126_16266 = state_16122__$1;
(statearr_16126_16266[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (5))){
var state_16122__$1 = state_16122;
var statearr_16127_16267 = state_16122__$1;
(statearr_16127_16267[(2)] = null);

(statearr_16127_16267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (6))){
var state_16122__$1 = state_16122;
var statearr_16128_16268 = state_16122__$1;
(statearr_16128_16268[(2)] = null);

(statearr_16128_16268[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (7))){
var inst_16118 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
var statearr_16129_16269 = state_16122__$1;
(statearr_16129_16269[(2)] = inst_16118);

(statearr_16129_16269[(1)] = (3));


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
});})(__16251,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
;
return ((function (__16251,switch__15561__auto__,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_16133 = [null,null,null,null,null,null,null];
(statearr_16133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__);

(statearr_16133[(1)] = (1));

return statearr_16133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1 = (function (state_16122){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16122);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16134){if((e16134 instanceof Object)){
var ex__15565__auto__ = e16134;
var statearr_16135_16270 = state_16122;
(statearr_16135_16270[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16122);

return cljs.core.cst$kw$recur;
} else {
throw e16134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16271 = state_16122;
state_16122 = G__16271;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = function(state_16122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1.call(this,state_16122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__;
})()
;})(__16251,switch__15561__auto__,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
})();
var state__15687__auto__ = (function (){var statearr_16136 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___16263);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(__16251,c__15685__auto___16263,G__16082_16252,n__7324__auto___16250,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16272 = (__16251 + (1));
__16251 = G__16272;
continue;
} else {
}
break;
}

var c__15685__auto___16273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___16273,jobs,results,process,async){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___16273,jobs,results,process,async){
return (function (state_16158){
var state_val_16159 = (state_16158[(1)]);
if((state_val_16159 === (1))){
var state_16158__$1 = state_16158;
var statearr_16160_16274 = state_16158__$1;
(statearr_16160_16274[(2)] = null);

(statearr_16160_16274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (2))){
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16158__$1,(4),from);
} else {
if((state_val_16159 === (3))){
var inst_16156 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16158__$1,inst_16156);
} else {
if((state_val_16159 === (4))){
var inst_16139 = (state_16158[(7)]);
var inst_16139__$1 = (state_16158[(2)]);
var inst_16140 = (inst_16139__$1 == null);
var state_16158__$1 = (function (){var statearr_16161 = state_16158;
(statearr_16161[(7)] = inst_16139__$1);

return statearr_16161;
})();
if(cljs.core.truth_(inst_16140)){
var statearr_16162_16275 = state_16158__$1;
(statearr_16162_16275[(1)] = (5));

} else {
var statearr_16163_16276 = state_16158__$1;
(statearr_16163_16276[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (5))){
var inst_16142 = cljs.core.async.close_BANG_(jobs);
var state_16158__$1 = state_16158;
var statearr_16164_16277 = state_16158__$1;
(statearr_16164_16277[(2)] = inst_16142);

(statearr_16164_16277[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (6))){
var inst_16139 = (state_16158[(7)]);
var inst_16144 = (state_16158[(8)]);
var inst_16144__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16146 = [inst_16139,inst_16144__$1];
var inst_16147 = (new cljs.core.PersistentVector(null,2,(5),inst_16145,inst_16146,null));
var state_16158__$1 = (function (){var statearr_16165 = state_16158;
(statearr_16165[(8)] = inst_16144__$1);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16158__$1,(8),jobs,inst_16147);
} else {
if((state_val_16159 === (7))){
var inst_16154 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
var statearr_16166_16278 = state_16158__$1;
(statearr_16166_16278[(2)] = inst_16154);

(statearr_16166_16278[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16159 === (8))){
var inst_16144 = (state_16158[(8)]);
var inst_16149 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16167 = state_16158;
(statearr_16167[(9)] = inst_16149);

return statearr_16167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16158__$1,(9),results,inst_16144);
} else {
if((state_val_16159 === (9))){
var inst_16151 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16168 = state_16158;
(statearr_16168[(10)] = inst_16151);

return statearr_16168;
})();
var statearr_16169_16279 = state_16158__$1;
(statearr_16169_16279[(2)] = null);

(statearr_16169_16279[(1)] = (2));


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
});})(c__15685__auto___16273,jobs,results,process,async))
;
return ((function (switch__15561__auto__,c__15685__auto___16273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_16173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__);

(statearr_16173[(1)] = (1));

return statearr_16173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1 = (function (state_16158){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16158);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16174){if((e16174 instanceof Object)){
var ex__15565__auto__ = e16174;
var statearr_16175_16280 = state_16158;
(statearr_16175_16280[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16158);

return cljs.core.cst$kw$recur;
} else {
throw e16174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16281 = state_16158;
state_16158 = G__16281;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = function(state_16158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1.call(this,state_16158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___16273,jobs,results,process,async))
})();
var state__15687__auto__ = (function (){var statearr_16176 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___16273);

return statearr_16176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___16273,jobs,results,process,async))
);


var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__,jobs,results,process,async){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__,jobs,results,process,async){
return (function (state_16214){
var state_val_16215 = (state_16214[(1)]);
if((state_val_16215 === (7))){
var inst_16210 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
var statearr_16216_16282 = state_16214__$1;
(statearr_16216_16282[(2)] = inst_16210);

(statearr_16216_16282[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (20))){
var state_16214__$1 = state_16214;
var statearr_16217_16283 = state_16214__$1;
(statearr_16217_16283[(2)] = null);

(statearr_16217_16283[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (1))){
var state_16214__$1 = state_16214;
var statearr_16218_16284 = state_16214__$1;
(statearr_16218_16284[(2)] = null);

(statearr_16218_16284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (4))){
var inst_16179 = (state_16214[(7)]);
var inst_16179__$1 = (state_16214[(2)]);
var inst_16180 = (inst_16179__$1 == null);
var state_16214__$1 = (function (){var statearr_16219 = state_16214;
(statearr_16219[(7)] = inst_16179__$1);

return statearr_16219;
})();
if(cljs.core.truth_(inst_16180)){
var statearr_16220_16285 = state_16214__$1;
(statearr_16220_16285[(1)] = (5));

} else {
var statearr_16221_16286 = state_16214__$1;
(statearr_16221_16286[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (15))){
var inst_16192 = (state_16214[(8)]);
var state_16214__$1 = state_16214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16214__$1,(18),to,inst_16192);
} else {
if((state_val_16215 === (21))){
var inst_16205 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
var statearr_16222_16287 = state_16214__$1;
(statearr_16222_16287[(2)] = inst_16205);

(statearr_16222_16287[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (13))){
var inst_16207 = (state_16214[(2)]);
var state_16214__$1 = (function (){var statearr_16223 = state_16214;
(statearr_16223[(9)] = inst_16207);

return statearr_16223;
})();
var statearr_16224_16288 = state_16214__$1;
(statearr_16224_16288[(2)] = null);

(statearr_16224_16288[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (6))){
var inst_16179 = (state_16214[(7)]);
var state_16214__$1 = state_16214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16214__$1,(11),inst_16179);
} else {
if((state_val_16215 === (17))){
var inst_16200 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
if(cljs.core.truth_(inst_16200)){
var statearr_16225_16289 = state_16214__$1;
(statearr_16225_16289[(1)] = (19));

} else {
var statearr_16226_16290 = state_16214__$1;
(statearr_16226_16290[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (3))){
var inst_16212 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16214__$1,inst_16212);
} else {
if((state_val_16215 === (12))){
var inst_16189 = (state_16214[(10)]);
var state_16214__$1 = state_16214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16214__$1,(14),inst_16189);
} else {
if((state_val_16215 === (2))){
var state_16214__$1 = state_16214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16214__$1,(4),results);
} else {
if((state_val_16215 === (19))){
var state_16214__$1 = state_16214;
var statearr_16227_16291 = state_16214__$1;
(statearr_16227_16291[(2)] = null);

(statearr_16227_16291[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (11))){
var inst_16189 = (state_16214[(2)]);
var state_16214__$1 = (function (){var statearr_16228 = state_16214;
(statearr_16228[(10)] = inst_16189);

return statearr_16228;
})();
var statearr_16229_16292 = state_16214__$1;
(statearr_16229_16292[(2)] = null);

(statearr_16229_16292[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (9))){
var state_16214__$1 = state_16214;
var statearr_16230_16293 = state_16214__$1;
(statearr_16230_16293[(2)] = null);

(statearr_16230_16293[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (5))){
var state_16214__$1 = state_16214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16231_16294 = state_16214__$1;
(statearr_16231_16294[(1)] = (8));

} else {
var statearr_16232_16295 = state_16214__$1;
(statearr_16232_16295[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (14))){
var inst_16192 = (state_16214[(8)]);
var inst_16194 = (state_16214[(11)]);
var inst_16192__$1 = (state_16214[(2)]);
var inst_16193 = (inst_16192__$1 == null);
var inst_16194__$1 = cljs.core.not(inst_16193);
var state_16214__$1 = (function (){var statearr_16233 = state_16214;
(statearr_16233[(8)] = inst_16192__$1);

(statearr_16233[(11)] = inst_16194__$1);

return statearr_16233;
})();
if(inst_16194__$1){
var statearr_16234_16296 = state_16214__$1;
(statearr_16234_16296[(1)] = (15));

} else {
var statearr_16235_16297 = state_16214__$1;
(statearr_16235_16297[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (16))){
var inst_16194 = (state_16214[(11)]);
var state_16214__$1 = state_16214;
var statearr_16236_16298 = state_16214__$1;
(statearr_16236_16298[(2)] = inst_16194);

(statearr_16236_16298[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (10))){
var inst_16186 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
var statearr_16237_16299 = state_16214__$1;
(statearr_16237_16299[(2)] = inst_16186);

(statearr_16237_16299[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (18))){
var inst_16197 = (state_16214[(2)]);
var state_16214__$1 = state_16214;
var statearr_16238_16300 = state_16214__$1;
(statearr_16238_16300[(2)] = inst_16197);

(statearr_16238_16300[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16215 === (8))){
var inst_16183 = cljs.core.async.close_BANG_(to);
var state_16214__$1 = state_16214;
var statearr_16239_16301 = state_16214__$1;
(statearr_16239_16301[(2)] = inst_16183);

(statearr_16239_16301[(1)] = (10));


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
});})(c__15685__auto__,jobs,results,process,async))
;
return ((function (switch__15561__auto__,c__15685__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_16243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__);

(statearr_16243[(1)] = (1));

return statearr_16243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1 = (function (state_16214){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16214);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16244){if((e16244 instanceof Object)){
var ex__15565__auto__ = e16244;
var statearr_16245_16302 = state_16214;
(statearr_16245_16302[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16214);

return cljs.core.cst$kw$recur;
} else {
throw e16244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16303 = state_16214;
state_16214 = G__16303;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__ = function(state_16214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1.call(this,state_16214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__,jobs,results,process,async))
})();
var state__15687__auto__ = (function (){var statearr_16246 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_16246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__,jobs,results,process,async))
);

return c__15685__auto__;
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
var args16304 = [];
var len__7484__auto___16307 = arguments.length;
var i__7485__auto___16308 = (0);
while(true){
if((i__7485__auto___16308 < len__7484__auto___16307)){
args16304.push((arguments[i__7485__auto___16308]));

var G__16309 = (i__7485__auto___16308 + (1));
i__7485__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var G__16306 = args16304.length;
switch (G__16306) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16304.length)].join('')));

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
var args16311 = [];
var len__7484__auto___16314 = arguments.length;
var i__7485__auto___16315 = (0);
while(true){
if((i__7485__auto___16315 < len__7484__auto___16314)){
args16311.push((arguments[i__7485__auto___16315]));

var G__16316 = (i__7485__auto___16315 + (1));
i__7485__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var G__16313 = args16311.length;
switch (G__16313) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16311.length)].join('')));

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
var args16318 = [];
var len__7484__auto___16371 = arguments.length;
var i__7485__auto___16372 = (0);
while(true){
if((i__7485__auto___16372 < len__7484__auto___16371)){
args16318.push((arguments[i__7485__auto___16372]));

var G__16373 = (i__7485__auto___16372 + (1));
i__7485__auto___16372 = G__16373;
continue;
} else {
}
break;
}

var G__16320 = args16318.length;
switch (G__16320) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16318.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15685__auto___16375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___16375,tc,fc){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___16375,tc,fc){
return (function (state_16346){
var state_val_16347 = (state_16346[(1)]);
if((state_val_16347 === (7))){
var inst_16342 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16348_16376 = state_16346__$1;
(statearr_16348_16376[(2)] = inst_16342);

(statearr_16348_16376[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (1))){
var state_16346__$1 = state_16346;
var statearr_16349_16377 = state_16346__$1;
(statearr_16349_16377[(2)] = null);

(statearr_16349_16377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (4))){
var inst_16323 = (state_16346[(7)]);
var inst_16323__$1 = (state_16346[(2)]);
var inst_16324 = (inst_16323__$1 == null);
var state_16346__$1 = (function (){var statearr_16350 = state_16346;
(statearr_16350[(7)] = inst_16323__$1);

return statearr_16350;
})();
if(cljs.core.truth_(inst_16324)){
var statearr_16351_16378 = state_16346__$1;
(statearr_16351_16378[(1)] = (5));

} else {
var statearr_16352_16379 = state_16346__$1;
(statearr_16352_16379[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (13))){
var state_16346__$1 = state_16346;
var statearr_16353_16380 = state_16346__$1;
(statearr_16353_16380[(2)] = null);

(statearr_16353_16380[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (6))){
var inst_16323 = (state_16346[(7)]);
var inst_16329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16323) : p.call(null,inst_16323));
var state_16346__$1 = state_16346;
if(cljs.core.truth_(inst_16329)){
var statearr_16354_16381 = state_16346__$1;
(statearr_16354_16381[(1)] = (9));

} else {
var statearr_16355_16382 = state_16346__$1;
(statearr_16355_16382[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (3))){
var inst_16344 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16346__$1,inst_16344);
} else {
if((state_val_16347 === (12))){
var state_16346__$1 = state_16346;
var statearr_16356_16383 = state_16346__$1;
(statearr_16356_16383[(2)] = null);

(statearr_16356_16383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (2))){
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16346__$1,(4),ch);
} else {
if((state_val_16347 === (11))){
var inst_16323 = (state_16346[(7)]);
var inst_16333 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16346__$1,(8),inst_16333,inst_16323);
} else {
if((state_val_16347 === (9))){
var state_16346__$1 = state_16346;
var statearr_16357_16384 = state_16346__$1;
(statearr_16357_16384[(2)] = tc);

(statearr_16357_16384[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (5))){
var inst_16326 = cljs.core.async.close_BANG_(tc);
var inst_16327 = cljs.core.async.close_BANG_(fc);
var state_16346__$1 = (function (){var statearr_16358 = state_16346;
(statearr_16358[(8)] = inst_16326);

return statearr_16358;
})();
var statearr_16359_16385 = state_16346__$1;
(statearr_16359_16385[(2)] = inst_16327);

(statearr_16359_16385[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (14))){
var inst_16340 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16360_16386 = state_16346__$1;
(statearr_16360_16386[(2)] = inst_16340);

(statearr_16360_16386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (10))){
var state_16346__$1 = state_16346;
var statearr_16361_16387 = state_16346__$1;
(statearr_16361_16387[(2)] = fc);

(statearr_16361_16387[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (8))){
var inst_16335 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
if(cljs.core.truth_(inst_16335)){
var statearr_16362_16388 = state_16346__$1;
(statearr_16362_16388[(1)] = (12));

} else {
var statearr_16363_16389 = state_16346__$1;
(statearr_16363_16389[(1)] = (13));

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
});})(c__15685__auto___16375,tc,fc))
;
return ((function (switch__15561__auto__,c__15685__auto___16375,tc,fc){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_16367 = [null,null,null,null,null,null,null,null,null];
(statearr_16367[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_16367[(1)] = (1));

return statearr_16367;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_16346){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16346);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16368){if((e16368 instanceof Object)){
var ex__15565__auto__ = e16368;
var statearr_16369_16390 = state_16346;
(statearr_16369_16390[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16346);

return cljs.core.cst$kw$recur;
} else {
throw e16368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16391 = state_16346;
state_16346 = G__16391;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_16346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_16346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___16375,tc,fc))
})();
var state__15687__auto__ = (function (){var statearr_16370 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___16375);

return statearr_16370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___16375,tc,fc))
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
var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__){
return (function (state_16455){
var state_val_16456 = (state_16455[(1)]);
if((state_val_16456 === (7))){
var inst_16451 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16457_16478 = state_16455__$1;
(statearr_16457_16478[(2)] = inst_16451);

(statearr_16457_16478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (1))){
var inst_16435 = init;
var state_16455__$1 = (function (){var statearr_16458 = state_16455;
(statearr_16458[(7)] = inst_16435);

return statearr_16458;
})();
var statearr_16459_16479 = state_16455__$1;
(statearr_16459_16479[(2)] = null);

(statearr_16459_16479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (4))){
var inst_16438 = (state_16455[(8)]);
var inst_16438__$1 = (state_16455[(2)]);
var inst_16439 = (inst_16438__$1 == null);
var state_16455__$1 = (function (){var statearr_16460 = state_16455;
(statearr_16460[(8)] = inst_16438__$1);

return statearr_16460;
})();
if(cljs.core.truth_(inst_16439)){
var statearr_16461_16480 = state_16455__$1;
(statearr_16461_16480[(1)] = (5));

} else {
var statearr_16462_16481 = state_16455__$1;
(statearr_16462_16481[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (6))){
var inst_16442 = (state_16455[(9)]);
var inst_16435 = (state_16455[(7)]);
var inst_16438 = (state_16455[(8)]);
var inst_16442__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16435,inst_16438) : f.call(null,inst_16435,inst_16438));
var inst_16443 = cljs.core.reduced_QMARK_(inst_16442__$1);
var state_16455__$1 = (function (){var statearr_16463 = state_16455;
(statearr_16463[(9)] = inst_16442__$1);

return statearr_16463;
})();
if(inst_16443){
var statearr_16464_16482 = state_16455__$1;
(statearr_16464_16482[(1)] = (8));

} else {
var statearr_16465_16483 = state_16455__$1;
(statearr_16465_16483[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (3))){
var inst_16453 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16455__$1,inst_16453);
} else {
if((state_val_16456 === (2))){
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16455__$1,(4),ch);
} else {
if((state_val_16456 === (9))){
var inst_16442 = (state_16455[(9)]);
var inst_16435 = inst_16442;
var state_16455__$1 = (function (){var statearr_16466 = state_16455;
(statearr_16466[(7)] = inst_16435);

return statearr_16466;
})();
var statearr_16467_16484 = state_16455__$1;
(statearr_16467_16484[(2)] = null);

(statearr_16467_16484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (5))){
var inst_16435 = (state_16455[(7)]);
var state_16455__$1 = state_16455;
var statearr_16468_16485 = state_16455__$1;
(statearr_16468_16485[(2)] = inst_16435);

(statearr_16468_16485[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (10))){
var inst_16449 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16469_16486 = state_16455__$1;
(statearr_16469_16486[(2)] = inst_16449);

(statearr_16469_16486[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (8))){
var inst_16442 = (state_16455[(9)]);
var inst_16445 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16442) : cljs.core.deref.call(null,inst_16442));
var state_16455__$1 = state_16455;
var statearr_16470_16487 = state_16455__$1;
(statearr_16470_16487[(2)] = inst_16445);

(statearr_16470_16487[(1)] = (10));


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
});})(c__15685__auto__))
;
return ((function (switch__15561__auto__,c__15685__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15562__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15562__auto____0 = (function (){
var statearr_16474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16474[(0)] = cljs$core$async$reduce_$_state_machine__15562__auto__);

(statearr_16474[(1)] = (1));

return statearr_16474;
});
var cljs$core$async$reduce_$_state_machine__15562__auto____1 = (function (state_16455){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16455);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16475){if((e16475 instanceof Object)){
var ex__15565__auto__ = e16475;
var statearr_16476_16488 = state_16455;
(statearr_16476_16488[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16455);

return cljs.core.cst$kw$recur;
} else {
throw e16475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16489 = state_16455;
state_16455 = G__16489;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15562__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15562__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15562__auto____0;
cljs$core$async$reduce_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15562__auto____1;
return cljs$core$async$reduce_$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__))
})();
var state__15687__auto__ = (function (){var statearr_16477 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_16477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__))
);

return c__15685__auto__;
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
var args16490 = [];
var len__7484__auto___16542 = arguments.length;
var i__7485__auto___16543 = (0);
while(true){
if((i__7485__auto___16543 < len__7484__auto___16542)){
args16490.push((arguments[i__7485__auto___16543]));

var G__16544 = (i__7485__auto___16543 + (1));
i__7485__auto___16543 = G__16544;
continue;
} else {
}
break;
}

var G__16492 = args16490.length;
switch (G__16492) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16490.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__){
return (function (state_16517){
var state_val_16518 = (state_16517[(1)]);
if((state_val_16518 === (7))){
var inst_16499 = (state_16517[(2)]);
var state_16517__$1 = state_16517;
var statearr_16519_16546 = state_16517__$1;
(statearr_16519_16546[(2)] = inst_16499);

(statearr_16519_16546[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (1))){
var inst_16493 = cljs.core.seq(coll);
var inst_16494 = inst_16493;
var state_16517__$1 = (function (){var statearr_16520 = state_16517;
(statearr_16520[(7)] = inst_16494);

return statearr_16520;
})();
var statearr_16521_16547 = state_16517__$1;
(statearr_16521_16547[(2)] = null);

(statearr_16521_16547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (4))){
var inst_16494 = (state_16517[(7)]);
var inst_16497 = cljs.core.first(inst_16494);
var state_16517__$1 = state_16517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16517__$1,(7),ch,inst_16497);
} else {
if((state_val_16518 === (13))){
var inst_16511 = (state_16517[(2)]);
var state_16517__$1 = state_16517;
var statearr_16522_16548 = state_16517__$1;
(statearr_16522_16548[(2)] = inst_16511);

(statearr_16522_16548[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (6))){
var inst_16502 = (state_16517[(2)]);
var state_16517__$1 = state_16517;
if(cljs.core.truth_(inst_16502)){
var statearr_16523_16549 = state_16517__$1;
(statearr_16523_16549[(1)] = (8));

} else {
var statearr_16524_16550 = state_16517__$1;
(statearr_16524_16550[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (3))){
var inst_16515 = (state_16517[(2)]);
var state_16517__$1 = state_16517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16517__$1,inst_16515);
} else {
if((state_val_16518 === (12))){
var state_16517__$1 = state_16517;
var statearr_16525_16551 = state_16517__$1;
(statearr_16525_16551[(2)] = null);

(statearr_16525_16551[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (2))){
var inst_16494 = (state_16517[(7)]);
var state_16517__$1 = state_16517;
if(cljs.core.truth_(inst_16494)){
var statearr_16526_16552 = state_16517__$1;
(statearr_16526_16552[(1)] = (4));

} else {
var statearr_16527_16553 = state_16517__$1;
(statearr_16527_16553[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (11))){
var inst_16508 = cljs.core.async.close_BANG_(ch);
var state_16517__$1 = state_16517;
var statearr_16528_16554 = state_16517__$1;
(statearr_16528_16554[(2)] = inst_16508);

(statearr_16528_16554[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (9))){
var state_16517__$1 = state_16517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16529_16555 = state_16517__$1;
(statearr_16529_16555[(1)] = (11));

} else {
var statearr_16530_16556 = state_16517__$1;
(statearr_16530_16556[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (5))){
var inst_16494 = (state_16517[(7)]);
var state_16517__$1 = state_16517;
var statearr_16531_16557 = state_16517__$1;
(statearr_16531_16557[(2)] = inst_16494);

(statearr_16531_16557[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (10))){
var inst_16513 = (state_16517[(2)]);
var state_16517__$1 = state_16517;
var statearr_16532_16558 = state_16517__$1;
(statearr_16532_16558[(2)] = inst_16513);

(statearr_16532_16558[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16518 === (8))){
var inst_16494 = (state_16517[(7)]);
var inst_16504 = cljs.core.next(inst_16494);
var inst_16494__$1 = inst_16504;
var state_16517__$1 = (function (){var statearr_16533 = state_16517;
(statearr_16533[(7)] = inst_16494__$1);

return statearr_16533;
})();
var statearr_16534_16559 = state_16517__$1;
(statearr_16534_16559[(2)] = null);

(statearr_16534_16559[(1)] = (2));


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
});})(c__15685__auto__))
;
return ((function (switch__15561__auto__,c__15685__auto__){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_16538 = [null,null,null,null,null,null,null,null];
(statearr_16538[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_16538[(1)] = (1));

return statearr_16538;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_16517){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16517);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e16539){if((e16539 instanceof Object)){
var ex__15565__auto__ = e16539;
var statearr_16540_16560 = state_16517;
(statearr_16540_16560[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16517);

return cljs.core.cst$kw$recur;
} else {
throw e16539;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__16561 = state_16517;
state_16517 = G__16561;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_16517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_16517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__))
})();
var state__15687__auto__ = (function (){var statearr_16541 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_16541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_16541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__))
);

return c__15685__auto__;
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
var cs = (function (){var G__16790 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16790) : cljs.core.atom.call(null,G__16790));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16791 = (function (mult,ch,cs,meta16792){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16792 = meta16792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16793,meta16792__$1){
var self__ = this;
var _16793__$1 = this;
return (new cljs.core.async.t_cljs$core$async16791(self__.mult,self__.ch,self__.cs,meta16792__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16793){
var self__ = this;
var _16793__$1 = this;
return self__.meta16792;
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16794_17018 = self__.cs;
var G__16795_17019 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16794_17018,G__16795_17019) : cljs.core.reset_BANG_.call(null,G__16794_17018,G__16795_17019));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16792], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16791";

cljs.core.async.t_cljs$core$async16791.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16791");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16791 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16791(mult__$1,ch__$1,cs__$1,meta16792){
return (new cljs.core.async.t_cljs$core$async16791(mult__$1,ch__$1,cs__$1,meta16792));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16791(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15685__auto___17020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17020,cs,m,dchan,dctr,done){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17020,cs,m,dchan,dctr,done){
return (function (state_16930){
var state_val_16931 = (state_16930[(1)]);
if((state_val_16931 === (7))){
var inst_16926 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16932_17021 = state_16930__$1;
(statearr_16932_17021[(2)] = inst_16926);

(statearr_16932_17021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (20))){
var inst_16829 = (state_16930[(7)]);
var inst_16841 = cljs.core.first(inst_16829);
var inst_16842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16841,(0),null);
var inst_16843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16841,(1),null);
var state_16930__$1 = (function (){var statearr_16933 = state_16930;
(statearr_16933[(8)] = inst_16842);

return statearr_16933;
})();
if(cljs.core.truth_(inst_16843)){
var statearr_16934_17022 = state_16930__$1;
(statearr_16934_17022[(1)] = (22));

} else {
var statearr_16935_17023 = state_16930__$1;
(statearr_16935_17023[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (27))){
var inst_16871 = (state_16930[(9)]);
var inst_16873 = (state_16930[(10)]);
var inst_16878 = (state_16930[(11)]);
var inst_16798 = (state_16930[(12)]);
var inst_16878__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16871,inst_16873);
var inst_16879 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16878__$1,inst_16798,done);
var state_16930__$1 = (function (){var statearr_16936 = state_16930;
(statearr_16936[(11)] = inst_16878__$1);

return statearr_16936;
})();
if(cljs.core.truth_(inst_16879)){
var statearr_16937_17024 = state_16930__$1;
(statearr_16937_17024[(1)] = (30));

} else {
var statearr_16938_17025 = state_16930__$1;
(statearr_16938_17025[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (1))){
var state_16930__$1 = state_16930;
var statearr_16939_17026 = state_16930__$1;
(statearr_16939_17026[(2)] = null);

(statearr_16939_17026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (24))){
var inst_16829 = (state_16930[(7)]);
var inst_16848 = (state_16930[(2)]);
var inst_16849 = cljs.core.next(inst_16829);
var inst_16807 = inst_16849;
var inst_16808 = null;
var inst_16809 = (0);
var inst_16810 = (0);
var state_16930__$1 = (function (){var statearr_16940 = state_16930;
(statearr_16940[(13)] = inst_16809);

(statearr_16940[(14)] = inst_16848);

(statearr_16940[(15)] = inst_16807);

(statearr_16940[(16)] = inst_16808);

(statearr_16940[(17)] = inst_16810);

return statearr_16940;
})();
var statearr_16941_17027 = state_16930__$1;
(statearr_16941_17027[(2)] = null);

(statearr_16941_17027[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (39))){
var state_16930__$1 = state_16930;
var statearr_16945_17028 = state_16930__$1;
(statearr_16945_17028[(2)] = null);

(statearr_16945_17028[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (4))){
var inst_16798 = (state_16930[(12)]);
var inst_16798__$1 = (state_16930[(2)]);
var inst_16799 = (inst_16798__$1 == null);
var state_16930__$1 = (function (){var statearr_16946 = state_16930;
(statearr_16946[(12)] = inst_16798__$1);

return statearr_16946;
})();
if(cljs.core.truth_(inst_16799)){
var statearr_16947_17029 = state_16930__$1;
(statearr_16947_17029[(1)] = (5));

} else {
var statearr_16948_17030 = state_16930__$1;
(statearr_16948_17030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (15))){
var inst_16809 = (state_16930[(13)]);
var inst_16807 = (state_16930[(15)]);
var inst_16808 = (state_16930[(16)]);
var inst_16810 = (state_16930[(17)]);
var inst_16825 = (state_16930[(2)]);
var inst_16826 = (inst_16810 + (1));
var tmp16942 = inst_16809;
var tmp16943 = inst_16807;
var tmp16944 = inst_16808;
var inst_16807__$1 = tmp16943;
var inst_16808__$1 = tmp16944;
var inst_16809__$1 = tmp16942;
var inst_16810__$1 = inst_16826;
var state_16930__$1 = (function (){var statearr_16949 = state_16930;
(statearr_16949[(13)] = inst_16809__$1);

(statearr_16949[(15)] = inst_16807__$1);

(statearr_16949[(16)] = inst_16808__$1);

(statearr_16949[(18)] = inst_16825);

(statearr_16949[(17)] = inst_16810__$1);

return statearr_16949;
})();
var statearr_16950_17031 = state_16930__$1;
(statearr_16950_17031[(2)] = null);

(statearr_16950_17031[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (21))){
var inst_16852 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16954_17032 = state_16930__$1;
(statearr_16954_17032[(2)] = inst_16852);

(statearr_16954_17032[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (31))){
var inst_16878 = (state_16930[(11)]);
var inst_16882 = done(null);
var inst_16883 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16878);
var state_16930__$1 = (function (){var statearr_16955 = state_16930;
(statearr_16955[(19)] = inst_16882);

return statearr_16955;
})();
var statearr_16956_17033 = state_16930__$1;
(statearr_16956_17033[(2)] = inst_16883);

(statearr_16956_17033[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (32))){
var inst_16871 = (state_16930[(9)]);
var inst_16873 = (state_16930[(10)]);
var inst_16872 = (state_16930[(20)]);
var inst_16870 = (state_16930[(21)]);
var inst_16885 = (state_16930[(2)]);
var inst_16886 = (inst_16873 + (1));
var tmp16951 = inst_16871;
var tmp16952 = inst_16872;
var tmp16953 = inst_16870;
var inst_16870__$1 = tmp16953;
var inst_16871__$1 = tmp16951;
var inst_16872__$1 = tmp16952;
var inst_16873__$1 = inst_16886;
var state_16930__$1 = (function (){var statearr_16957 = state_16930;
(statearr_16957[(9)] = inst_16871__$1);

(statearr_16957[(10)] = inst_16873__$1);

(statearr_16957[(20)] = inst_16872__$1);

(statearr_16957[(21)] = inst_16870__$1);

(statearr_16957[(22)] = inst_16885);

return statearr_16957;
})();
var statearr_16958_17034 = state_16930__$1;
(statearr_16958_17034[(2)] = null);

(statearr_16958_17034[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (40))){
var inst_16898 = (state_16930[(23)]);
var inst_16902 = done(null);
var inst_16903 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16898);
var state_16930__$1 = (function (){var statearr_16959 = state_16930;
(statearr_16959[(24)] = inst_16902);

return statearr_16959;
})();
var statearr_16960_17035 = state_16930__$1;
(statearr_16960_17035[(2)] = inst_16903);

(statearr_16960_17035[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (33))){
var inst_16889 = (state_16930[(25)]);
var inst_16891 = cljs.core.chunked_seq_QMARK_(inst_16889);
var state_16930__$1 = state_16930;
if(inst_16891){
var statearr_16961_17036 = state_16930__$1;
(statearr_16961_17036[(1)] = (36));

} else {
var statearr_16962_17037 = state_16930__$1;
(statearr_16962_17037[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (13))){
var inst_16819 = (state_16930[(26)]);
var inst_16822 = cljs.core.async.close_BANG_(inst_16819);
var state_16930__$1 = state_16930;
var statearr_16963_17038 = state_16930__$1;
(statearr_16963_17038[(2)] = inst_16822);

(statearr_16963_17038[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (22))){
var inst_16842 = (state_16930[(8)]);
var inst_16845 = cljs.core.async.close_BANG_(inst_16842);
var state_16930__$1 = state_16930;
var statearr_16964_17039 = state_16930__$1;
(statearr_16964_17039[(2)] = inst_16845);

(statearr_16964_17039[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (36))){
var inst_16889 = (state_16930[(25)]);
var inst_16893 = cljs.core.chunk_first(inst_16889);
var inst_16894 = cljs.core.chunk_rest(inst_16889);
var inst_16895 = cljs.core.count(inst_16893);
var inst_16870 = inst_16894;
var inst_16871 = inst_16893;
var inst_16872 = inst_16895;
var inst_16873 = (0);
var state_16930__$1 = (function (){var statearr_16965 = state_16930;
(statearr_16965[(9)] = inst_16871);

(statearr_16965[(10)] = inst_16873);

(statearr_16965[(20)] = inst_16872);

(statearr_16965[(21)] = inst_16870);

return statearr_16965;
})();
var statearr_16966_17040 = state_16930__$1;
(statearr_16966_17040[(2)] = null);

(statearr_16966_17040[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (41))){
var inst_16889 = (state_16930[(25)]);
var inst_16905 = (state_16930[(2)]);
var inst_16906 = cljs.core.next(inst_16889);
var inst_16870 = inst_16906;
var inst_16871 = null;
var inst_16872 = (0);
var inst_16873 = (0);
var state_16930__$1 = (function (){var statearr_16967 = state_16930;
(statearr_16967[(9)] = inst_16871);

(statearr_16967[(10)] = inst_16873);

(statearr_16967[(20)] = inst_16872);

(statearr_16967[(27)] = inst_16905);

(statearr_16967[(21)] = inst_16870);

return statearr_16967;
})();
var statearr_16968_17041 = state_16930__$1;
(statearr_16968_17041[(2)] = null);

(statearr_16968_17041[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (43))){
var state_16930__$1 = state_16930;
var statearr_16969_17042 = state_16930__$1;
(statearr_16969_17042[(2)] = null);

(statearr_16969_17042[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (29))){
var inst_16914 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16970_17043 = state_16930__$1;
(statearr_16970_17043[(2)] = inst_16914);

(statearr_16970_17043[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (44))){
var inst_16923 = (state_16930[(2)]);
var state_16930__$1 = (function (){var statearr_16971 = state_16930;
(statearr_16971[(28)] = inst_16923);

return statearr_16971;
})();
var statearr_16972_17044 = state_16930__$1;
(statearr_16972_17044[(2)] = null);

(statearr_16972_17044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (6))){
var inst_16862 = (state_16930[(29)]);
var inst_16861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16862__$1 = cljs.core.keys(inst_16861);
var inst_16863 = cljs.core.count(inst_16862__$1);
var inst_16864 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16863) : cljs.core.reset_BANG_.call(null,dctr,inst_16863));
var inst_16869 = cljs.core.seq(inst_16862__$1);
var inst_16870 = inst_16869;
var inst_16871 = null;
var inst_16872 = (0);
var inst_16873 = (0);
var state_16930__$1 = (function (){var statearr_16973 = state_16930;
(statearr_16973[(29)] = inst_16862__$1);

(statearr_16973[(9)] = inst_16871);

(statearr_16973[(10)] = inst_16873);

(statearr_16973[(20)] = inst_16872);

(statearr_16973[(21)] = inst_16870);

(statearr_16973[(30)] = inst_16864);

return statearr_16973;
})();
var statearr_16974_17045 = state_16930__$1;
(statearr_16974_17045[(2)] = null);

(statearr_16974_17045[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (28))){
var inst_16889 = (state_16930[(25)]);
var inst_16870 = (state_16930[(21)]);
var inst_16889__$1 = cljs.core.seq(inst_16870);
var state_16930__$1 = (function (){var statearr_16975 = state_16930;
(statearr_16975[(25)] = inst_16889__$1);

return statearr_16975;
})();
if(inst_16889__$1){
var statearr_16976_17046 = state_16930__$1;
(statearr_16976_17046[(1)] = (33));

} else {
var statearr_16977_17047 = state_16930__$1;
(statearr_16977_17047[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (25))){
var inst_16873 = (state_16930[(10)]);
var inst_16872 = (state_16930[(20)]);
var inst_16875 = (inst_16873 < inst_16872);
var inst_16876 = inst_16875;
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16876)){
var statearr_16978_17048 = state_16930__$1;
(statearr_16978_17048[(1)] = (27));

} else {
var statearr_16979_17049 = state_16930__$1;
(statearr_16979_17049[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (34))){
var state_16930__$1 = state_16930;
var statearr_16980_17050 = state_16930__$1;
(statearr_16980_17050[(2)] = null);

(statearr_16980_17050[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (17))){
var state_16930__$1 = state_16930;
var statearr_16981_17051 = state_16930__$1;
(statearr_16981_17051[(2)] = null);

(statearr_16981_17051[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (3))){
var inst_16928 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16930__$1,inst_16928);
} else {
if((state_val_16931 === (12))){
var inst_16857 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16982_17052 = state_16930__$1;
(statearr_16982_17052[(2)] = inst_16857);

(statearr_16982_17052[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (2))){
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16930__$1,(4),ch);
} else {
if((state_val_16931 === (23))){
var state_16930__$1 = state_16930;
var statearr_16983_17053 = state_16930__$1;
(statearr_16983_17053[(2)] = null);

(statearr_16983_17053[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (35))){
var inst_16912 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16984_17054 = state_16930__$1;
(statearr_16984_17054[(2)] = inst_16912);

(statearr_16984_17054[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (19))){
var inst_16829 = (state_16930[(7)]);
var inst_16833 = cljs.core.chunk_first(inst_16829);
var inst_16834 = cljs.core.chunk_rest(inst_16829);
var inst_16835 = cljs.core.count(inst_16833);
var inst_16807 = inst_16834;
var inst_16808 = inst_16833;
var inst_16809 = inst_16835;
var inst_16810 = (0);
var state_16930__$1 = (function (){var statearr_16985 = state_16930;
(statearr_16985[(13)] = inst_16809);

(statearr_16985[(15)] = inst_16807);

(statearr_16985[(16)] = inst_16808);

(statearr_16985[(17)] = inst_16810);

return statearr_16985;
})();
var statearr_16986_17055 = state_16930__$1;
(statearr_16986_17055[(2)] = null);

(statearr_16986_17055[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (11))){
var inst_16829 = (state_16930[(7)]);
var inst_16807 = (state_16930[(15)]);
var inst_16829__$1 = cljs.core.seq(inst_16807);
var state_16930__$1 = (function (){var statearr_16987 = state_16930;
(statearr_16987[(7)] = inst_16829__$1);

return statearr_16987;
})();
if(inst_16829__$1){
var statearr_16988_17056 = state_16930__$1;
(statearr_16988_17056[(1)] = (16));

} else {
var statearr_16989_17057 = state_16930__$1;
(statearr_16989_17057[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (9))){
var inst_16859 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16990_17058 = state_16930__$1;
(statearr_16990_17058[(2)] = inst_16859);

(statearr_16990_17058[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (5))){
var inst_16805 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16806 = cljs.core.seq(inst_16805);
var inst_16807 = inst_16806;
var inst_16808 = null;
var inst_16809 = (0);
var inst_16810 = (0);
var state_16930__$1 = (function (){var statearr_16991 = state_16930;
(statearr_16991[(13)] = inst_16809);

(statearr_16991[(15)] = inst_16807);

(statearr_16991[(16)] = inst_16808);

(statearr_16991[(17)] = inst_16810);

return statearr_16991;
})();
var statearr_16992_17059 = state_16930__$1;
(statearr_16992_17059[(2)] = null);

(statearr_16992_17059[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (14))){
var state_16930__$1 = state_16930;
var statearr_16993_17060 = state_16930__$1;
(statearr_16993_17060[(2)] = null);

(statearr_16993_17060[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (45))){
var inst_16920 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_16994_17061 = state_16930__$1;
(statearr_16994_17061[(2)] = inst_16920);

(statearr_16994_17061[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (26))){
var inst_16862 = (state_16930[(29)]);
var inst_16916 = (state_16930[(2)]);
var inst_16917 = cljs.core.seq(inst_16862);
var state_16930__$1 = (function (){var statearr_16995 = state_16930;
(statearr_16995[(31)] = inst_16916);

return statearr_16995;
})();
if(inst_16917){
var statearr_16996_17062 = state_16930__$1;
(statearr_16996_17062[(1)] = (42));

} else {
var statearr_16997_17063 = state_16930__$1;
(statearr_16997_17063[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (16))){
var inst_16829 = (state_16930[(7)]);
var inst_16831 = cljs.core.chunked_seq_QMARK_(inst_16829);
var state_16930__$1 = state_16930;
if(inst_16831){
var statearr_16998_17064 = state_16930__$1;
(statearr_16998_17064[(1)] = (19));

} else {
var statearr_16999_17065 = state_16930__$1;
(statearr_16999_17065[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (38))){
var inst_16909 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_17000_17066 = state_16930__$1;
(statearr_17000_17066[(2)] = inst_16909);

(statearr_17000_17066[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (30))){
var state_16930__$1 = state_16930;
var statearr_17001_17067 = state_16930__$1;
(statearr_17001_17067[(2)] = null);

(statearr_17001_17067[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (10))){
var inst_16808 = (state_16930[(16)]);
var inst_16810 = (state_16930[(17)]);
var inst_16818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16808,inst_16810);
var inst_16819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16818,(0),null);
var inst_16820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16818,(1),null);
var state_16930__$1 = (function (){var statearr_17002 = state_16930;
(statearr_17002[(26)] = inst_16819);

return statearr_17002;
})();
if(cljs.core.truth_(inst_16820)){
var statearr_17003_17068 = state_16930__$1;
(statearr_17003_17068[(1)] = (13));

} else {
var statearr_17004_17069 = state_16930__$1;
(statearr_17004_17069[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (18))){
var inst_16855 = (state_16930[(2)]);
var state_16930__$1 = state_16930;
var statearr_17005_17070 = state_16930__$1;
(statearr_17005_17070[(2)] = inst_16855);

(statearr_17005_17070[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (42))){
var state_16930__$1 = state_16930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16930__$1,(45),dchan);
} else {
if((state_val_16931 === (37))){
var inst_16889 = (state_16930[(25)]);
var inst_16898 = (state_16930[(23)]);
var inst_16798 = (state_16930[(12)]);
var inst_16898__$1 = cljs.core.first(inst_16889);
var inst_16899 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16898__$1,inst_16798,done);
var state_16930__$1 = (function (){var statearr_17006 = state_16930;
(statearr_17006[(23)] = inst_16898__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16899)){
var statearr_17007_17071 = state_16930__$1;
(statearr_17007_17071[(1)] = (39));

} else {
var statearr_17008_17072 = state_16930__$1;
(statearr_17008_17072[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16931 === (8))){
var inst_16809 = (state_16930[(13)]);
var inst_16810 = (state_16930[(17)]);
var inst_16812 = (inst_16810 < inst_16809);
var inst_16813 = inst_16812;
var state_16930__$1 = state_16930;
if(cljs.core.truth_(inst_16813)){
var statearr_17009_17073 = state_16930__$1;
(statearr_17009_17073[(1)] = (10));

} else {
var statearr_17010_17074 = state_16930__$1;
(statearr_17010_17074[(1)] = (11));

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
});})(c__15685__auto___17020,cs,m,dchan,dctr,done))
;
return ((function (switch__15561__auto__,c__15685__auto___17020,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15562__auto__ = null;
var cljs$core$async$mult_$_state_machine__15562__auto____0 = (function (){
var statearr_17014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17014[(0)] = cljs$core$async$mult_$_state_machine__15562__auto__);

(statearr_17014[(1)] = (1));

return statearr_17014;
});
var cljs$core$async$mult_$_state_machine__15562__auto____1 = (function (state_16930){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_16930);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17015){if((e17015 instanceof Object)){
var ex__15565__auto__ = e17015;
var statearr_17016_17075 = state_16930;
(statearr_17016_17075[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16930);

return cljs.core.cst$kw$recur;
} else {
throw e17015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17076 = state_16930;
state_16930 = G__17076;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15562__auto__ = function(state_16930){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15562__auto____1.call(this,state_16930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15562__auto____0;
cljs$core$async$mult_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15562__auto____1;
return cljs$core$async$mult_$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17020,cs,m,dchan,dctr,done))
})();
var state__15687__auto__ = (function (){var statearr_17017 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17020);

return statearr_17017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17020,cs,m,dchan,dctr,done))
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
var args17077 = [];
var len__7484__auto___17080 = arguments.length;
var i__7485__auto___17081 = (0);
while(true){
if((i__7485__auto___17081 < len__7484__auto___17080)){
args17077.push((arguments[i__7485__auto___17081]));

var G__17082 = (i__7485__auto___17081 + (1));
i__7485__auto___17081 = G__17082;
continue;
} else {
}
break;
}

var G__17079 = args17077.length;
switch (G__17079) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17077.length)].join('')));

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
var len__7484__auto___17094 = arguments.length;
var i__7485__auto___17095 = (0);
while(true){
if((i__7485__auto___17095 < len__7484__auto___17094)){
args__7491__auto__.push((arguments[i__7485__auto___17095]));

var G__17096 = (i__7485__auto___17095 + (1));
i__7485__auto___17095 = G__17096;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17088){
var map__17089 = p__17088;
var map__17089__$1 = ((((!((map__17089 == null)))?((((map__17089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17089):map__17089);
var opts = map__17089__$1;
var statearr_17091_17097 = state;
(statearr_17091_17097[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17089,map__17089__$1,opts){
return (function (val){
var statearr_17092_17098 = state;
(statearr_17092_17098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17089,map__17089__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17093_17099 = state;
(statearr_17093_17099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17084){
var G__17085 = cljs.core.first(seq17084);
var seq17084__$1 = cljs.core.next(seq17084);
var G__17086 = cljs.core.first(seq17084__$1);
var seq17084__$2 = cljs.core.next(seq17084__$1);
var G__17087 = cljs.core.first(seq17084__$2);
var seq17084__$3 = cljs.core.next(seq17084__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17085,G__17086,G__17087,seq17084__$3);
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
var cs = (function (){var G__17269 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17269) : cljs.core.atom.call(null,G__17269));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__17270 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17270) : cljs.core.atom.call(null,G__17270));
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
if(typeof cljs.core.async.t_cljs$core$async17271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17271 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17272){
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
this.meta17272 = meta17272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17273,meta17272__$1){
var self__ = this;
var _17273__$1 = this;
return (new cljs.core.async.t_cljs$core$async17271(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17272__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17273){
var self__ = this;
var _17273__$1 = this;
return self__.meta17272;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17274_17438 = self__.cs;
var G__17275_17439 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17274_17438,G__17275_17439) : cljs.core.reset_BANG_.call(null,G__17274_17438,G__17275_17439));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17271.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17272], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17271";

cljs.core.async.t_cljs$core$async17271.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17271");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17271 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17271(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17272){
return (new cljs.core.async.t_cljs$core$async17271(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17272));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17271(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15685__auto___17440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17375){
var state_val_17376 = (state_17375[(1)]);
if((state_val_17376 === (7))){
var inst_17291 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17377_17441 = state_17375__$1;
(statearr_17377_17441[(2)] = inst_17291);

(statearr_17377_17441[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (20))){
var inst_17303 = (state_17375[(7)]);
var state_17375__$1 = state_17375;
var statearr_17378_17442 = state_17375__$1;
(statearr_17378_17442[(2)] = inst_17303);

(statearr_17378_17442[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (27))){
var state_17375__$1 = state_17375;
var statearr_17379_17443 = state_17375__$1;
(statearr_17379_17443[(2)] = null);

(statearr_17379_17443[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (1))){
var inst_17279 = (state_17375[(8)]);
var inst_17279__$1 = calc_state();
var inst_17281 = (inst_17279__$1 == null);
var inst_17282 = cljs.core.not(inst_17281);
var state_17375__$1 = (function (){var statearr_17380 = state_17375;
(statearr_17380[(8)] = inst_17279__$1);

return statearr_17380;
})();
if(inst_17282){
var statearr_17381_17444 = state_17375__$1;
(statearr_17381_17444[(1)] = (2));

} else {
var statearr_17382_17445 = state_17375__$1;
(statearr_17382_17445[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (24))){
var inst_17335 = (state_17375[(9)]);
var inst_17349 = (state_17375[(10)]);
var inst_17326 = (state_17375[(11)]);
var inst_17349__$1 = (inst_17326.cljs$core$IFn$_invoke$arity$1 ? inst_17326.cljs$core$IFn$_invoke$arity$1(inst_17335) : inst_17326.call(null,inst_17335));
var state_17375__$1 = (function (){var statearr_17383 = state_17375;
(statearr_17383[(10)] = inst_17349__$1);

return statearr_17383;
})();
if(cljs.core.truth_(inst_17349__$1)){
var statearr_17384_17446 = state_17375__$1;
(statearr_17384_17446[(1)] = (29));

} else {
var statearr_17385_17447 = state_17375__$1;
(statearr_17385_17447[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (4))){
var inst_17294 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17294)){
var statearr_17386_17448 = state_17375__$1;
(statearr_17386_17448[(1)] = (8));

} else {
var statearr_17387_17449 = state_17375__$1;
(statearr_17387_17449[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (15))){
var inst_17320 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17320)){
var statearr_17388_17450 = state_17375__$1;
(statearr_17388_17450[(1)] = (19));

} else {
var statearr_17389_17451 = state_17375__$1;
(statearr_17389_17451[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (21))){
var inst_17325 = (state_17375[(12)]);
var inst_17325__$1 = (state_17375[(2)]);
var inst_17326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17325__$1,cljs.core.cst$kw$solos);
var inst_17327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17325__$1,cljs.core.cst$kw$mutes);
var inst_17328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17325__$1,cljs.core.cst$kw$reads);
var state_17375__$1 = (function (){var statearr_17390 = state_17375;
(statearr_17390[(13)] = inst_17327);

(statearr_17390[(11)] = inst_17326);

(statearr_17390[(12)] = inst_17325__$1);

return statearr_17390;
})();
return cljs.core.async.ioc_alts_BANG_(state_17375__$1,(22),inst_17328);
} else {
if((state_val_17376 === (31))){
var inst_17357 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17357)){
var statearr_17391_17452 = state_17375__$1;
(statearr_17391_17452[(1)] = (32));

} else {
var statearr_17392_17453 = state_17375__$1;
(statearr_17392_17453[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (32))){
var inst_17334 = (state_17375[(14)]);
var state_17375__$1 = state_17375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17375__$1,(35),out,inst_17334);
} else {
if((state_val_17376 === (33))){
var inst_17325 = (state_17375[(12)]);
var inst_17303 = inst_17325;
var state_17375__$1 = (function (){var statearr_17393 = state_17375;
(statearr_17393[(7)] = inst_17303);

return statearr_17393;
})();
var statearr_17394_17454 = state_17375__$1;
(statearr_17394_17454[(2)] = null);

(statearr_17394_17454[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (13))){
var inst_17303 = (state_17375[(7)]);
var inst_17310 = inst_17303.cljs$lang$protocol_mask$partition0$;
var inst_17311 = (inst_17310 & (64));
var inst_17312 = inst_17303.cljs$core$ISeq$;
var inst_17313 = (inst_17311) || (inst_17312);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17313)){
var statearr_17395_17455 = state_17375__$1;
(statearr_17395_17455[(1)] = (16));

} else {
var statearr_17396_17456 = state_17375__$1;
(statearr_17396_17456[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (22))){
var inst_17335 = (state_17375[(9)]);
var inst_17334 = (state_17375[(14)]);
var inst_17333 = (state_17375[(2)]);
var inst_17334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(0),null);
var inst_17335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(1),null);
var inst_17336 = (inst_17334__$1 == null);
var inst_17337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17335__$1,change);
var inst_17338 = (inst_17336) || (inst_17337);
var state_17375__$1 = (function (){var statearr_17397 = state_17375;
(statearr_17397[(9)] = inst_17335__$1);

(statearr_17397[(14)] = inst_17334__$1);

return statearr_17397;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17398_17457 = state_17375__$1;
(statearr_17398_17457[(1)] = (23));

} else {
var statearr_17399_17458 = state_17375__$1;
(statearr_17399_17458[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (36))){
var inst_17325 = (state_17375[(12)]);
var inst_17303 = inst_17325;
var state_17375__$1 = (function (){var statearr_17400 = state_17375;
(statearr_17400[(7)] = inst_17303);

return statearr_17400;
})();
var statearr_17401_17459 = state_17375__$1;
(statearr_17401_17459[(2)] = null);

(statearr_17401_17459[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (29))){
var inst_17349 = (state_17375[(10)]);
var state_17375__$1 = state_17375;
var statearr_17402_17460 = state_17375__$1;
(statearr_17402_17460[(2)] = inst_17349);

(statearr_17402_17460[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (6))){
var state_17375__$1 = state_17375;
var statearr_17403_17461 = state_17375__$1;
(statearr_17403_17461[(2)] = false);

(statearr_17403_17461[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (28))){
var inst_17345 = (state_17375[(2)]);
var inst_17346 = calc_state();
var inst_17303 = inst_17346;
var state_17375__$1 = (function (){var statearr_17404 = state_17375;
(statearr_17404[(7)] = inst_17303);

(statearr_17404[(15)] = inst_17345);

return statearr_17404;
})();
var statearr_17405_17462 = state_17375__$1;
(statearr_17405_17462[(2)] = null);

(statearr_17405_17462[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (25))){
var inst_17371 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17406_17463 = state_17375__$1;
(statearr_17406_17463[(2)] = inst_17371);

(statearr_17406_17463[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (34))){
var inst_17369 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17407_17464 = state_17375__$1;
(statearr_17407_17464[(2)] = inst_17369);

(statearr_17407_17464[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (17))){
var state_17375__$1 = state_17375;
var statearr_17408_17465 = state_17375__$1;
(statearr_17408_17465[(2)] = false);

(statearr_17408_17465[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (3))){
var state_17375__$1 = state_17375;
var statearr_17409_17466 = state_17375__$1;
(statearr_17409_17466[(2)] = false);

(statearr_17409_17466[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (12))){
var inst_17373 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17375__$1,inst_17373);
} else {
if((state_val_17376 === (2))){
var inst_17279 = (state_17375[(8)]);
var inst_17284 = inst_17279.cljs$lang$protocol_mask$partition0$;
var inst_17285 = (inst_17284 & (64));
var inst_17286 = inst_17279.cljs$core$ISeq$;
var inst_17287 = (inst_17285) || (inst_17286);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17287)){
var statearr_17410_17467 = state_17375__$1;
(statearr_17410_17467[(1)] = (5));

} else {
var statearr_17411_17468 = state_17375__$1;
(statearr_17411_17468[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (23))){
var inst_17334 = (state_17375[(14)]);
var inst_17340 = (inst_17334 == null);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17340)){
var statearr_17412_17469 = state_17375__$1;
(statearr_17412_17469[(1)] = (26));

} else {
var statearr_17413_17470 = state_17375__$1;
(statearr_17413_17470[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (35))){
var inst_17360 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
if(cljs.core.truth_(inst_17360)){
var statearr_17414_17471 = state_17375__$1;
(statearr_17414_17471[(1)] = (36));

} else {
var statearr_17415_17472 = state_17375__$1;
(statearr_17415_17472[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (19))){
var inst_17303 = (state_17375[(7)]);
var inst_17322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17303);
var state_17375__$1 = state_17375;
var statearr_17416_17473 = state_17375__$1;
(statearr_17416_17473[(2)] = inst_17322);

(statearr_17416_17473[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (11))){
var inst_17303 = (state_17375[(7)]);
var inst_17307 = (inst_17303 == null);
var inst_17308 = cljs.core.not(inst_17307);
var state_17375__$1 = state_17375;
if(inst_17308){
var statearr_17417_17474 = state_17375__$1;
(statearr_17417_17474[(1)] = (13));

} else {
var statearr_17418_17475 = state_17375__$1;
(statearr_17418_17475[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (9))){
var inst_17279 = (state_17375[(8)]);
var state_17375__$1 = state_17375;
var statearr_17419_17476 = state_17375__$1;
(statearr_17419_17476[(2)] = inst_17279);

(statearr_17419_17476[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (5))){
var state_17375__$1 = state_17375;
var statearr_17420_17477 = state_17375__$1;
(statearr_17420_17477[(2)] = true);

(statearr_17420_17477[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (14))){
var state_17375__$1 = state_17375;
var statearr_17421_17478 = state_17375__$1;
(statearr_17421_17478[(2)] = false);

(statearr_17421_17478[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (26))){
var inst_17335 = (state_17375[(9)]);
var inst_17342 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17335);
var state_17375__$1 = state_17375;
var statearr_17422_17479 = state_17375__$1;
(statearr_17422_17479[(2)] = inst_17342);

(statearr_17422_17479[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (16))){
var state_17375__$1 = state_17375;
var statearr_17423_17480 = state_17375__$1;
(statearr_17423_17480[(2)] = true);

(statearr_17423_17480[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (38))){
var inst_17365 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17424_17481 = state_17375__$1;
(statearr_17424_17481[(2)] = inst_17365);

(statearr_17424_17481[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (30))){
var inst_17335 = (state_17375[(9)]);
var inst_17327 = (state_17375[(13)]);
var inst_17326 = (state_17375[(11)]);
var inst_17352 = cljs.core.empty_QMARK_(inst_17326);
var inst_17353 = (inst_17327.cljs$core$IFn$_invoke$arity$1 ? inst_17327.cljs$core$IFn$_invoke$arity$1(inst_17335) : inst_17327.call(null,inst_17335));
var inst_17354 = cljs.core.not(inst_17353);
var inst_17355 = (inst_17352) && (inst_17354);
var state_17375__$1 = state_17375;
var statearr_17425_17482 = state_17375__$1;
(statearr_17425_17482[(2)] = inst_17355);

(statearr_17425_17482[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (10))){
var inst_17279 = (state_17375[(8)]);
var inst_17299 = (state_17375[(2)]);
var inst_17300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17299,cljs.core.cst$kw$solos);
var inst_17301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17299,cljs.core.cst$kw$mutes);
var inst_17302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17299,cljs.core.cst$kw$reads);
var inst_17303 = inst_17279;
var state_17375__$1 = (function (){var statearr_17426 = state_17375;
(statearr_17426[(7)] = inst_17303);

(statearr_17426[(16)] = inst_17300);

(statearr_17426[(17)] = inst_17302);

(statearr_17426[(18)] = inst_17301);

return statearr_17426;
})();
var statearr_17427_17483 = state_17375__$1;
(statearr_17427_17483[(2)] = null);

(statearr_17427_17483[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (18))){
var inst_17317 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17428_17484 = state_17375__$1;
(statearr_17428_17484[(2)] = inst_17317);

(statearr_17428_17484[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (37))){
var state_17375__$1 = state_17375;
var statearr_17429_17485 = state_17375__$1;
(statearr_17429_17485[(2)] = null);

(statearr_17429_17485[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17376 === (8))){
var inst_17279 = (state_17375[(8)]);
var inst_17296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17279);
var state_17375__$1 = state_17375;
var statearr_17430_17486 = state_17375__$1;
(statearr_17430_17486[(2)] = inst_17296);

(statearr_17430_17486[(1)] = (10));


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
});})(c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15561__auto__,c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15562__auto__ = null;
var cljs$core$async$mix_$_state_machine__15562__auto____0 = (function (){
var statearr_17434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17434[(0)] = cljs$core$async$mix_$_state_machine__15562__auto__);

(statearr_17434[(1)] = (1));

return statearr_17434;
});
var cljs$core$async$mix_$_state_machine__15562__auto____1 = (function (state_17375){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17375);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17435){if((e17435 instanceof Object)){
var ex__15565__auto__ = e17435;
var statearr_17436_17487 = state_17375;
(statearr_17436_17487[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17375);

return cljs.core.cst$kw$recur;
} else {
throw e17435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17488 = state_17375;
state_17375 = G__17488;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15562__auto__ = function(state_17375){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15562__auto____1.call(this,state_17375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15562__auto____0;
cljs$core$async$mix_$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15562__auto____1;
return cljs$core$async$mix_$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15687__auto__ = (function (){var statearr_17437 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17440);

return statearr_17437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args17489 = [];
var len__7484__auto___17492 = arguments.length;
var i__7485__auto___17493 = (0);
while(true){
if((i__7485__auto___17493 < len__7484__auto___17492)){
args17489.push((arguments[i__7485__auto___17493]));

var G__17494 = (i__7485__auto___17493 + (1));
i__7485__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var G__17491 = args17489.length;
switch (G__17491) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17489.length)].join('')));

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
var args17497 = [];
var len__7484__auto___17625 = arguments.length;
var i__7485__auto___17626 = (0);
while(true){
if((i__7485__auto___17626 < len__7484__auto___17625)){
args17497.push((arguments[i__7485__auto___17626]));

var G__17627 = (i__7485__auto___17626 + (1));
i__7485__auto___17626 = G__17627;
continue;
} else {
}
break;
}

var G__17499 = args17497.length;
switch (G__17499) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17497.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17500 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17500) : cljs.core.atom.call(null,G__17500));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6409__auto__,mults){
return (function (p1__17496_SHARP_){
if(cljs.core.truth_((p1__17496_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17496_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17496_SHARP_.call(null,topic)))){
return p1__17496_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17496_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17501 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17502){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17502 = meta17502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17503,meta17502__$1){
var self__ = this;
var _17503__$1 = this;
return (new cljs.core.async.t_cljs$core$async17501(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17502__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17503){
var self__ = this;
var _17503__$1 = this;
return self__.meta17502;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17504 = self__.mults;
var G__17505 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17504,G__17505) : cljs.core.reset_BANG_.call(null,G__17504,G__17505));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17502], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17501";

cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17501");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17501 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17501(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17502){
return (new cljs.core.async.t_cljs$core$async17501(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17502));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17501(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15685__auto___17629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17629,mults,ensure_mult,p){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17629,mults,ensure_mult,p){
return (function (state_17577){
var state_val_17578 = (state_17577[(1)]);
if((state_val_17578 === (7))){
var inst_17573 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17579_17630 = state_17577__$1;
(statearr_17579_17630[(2)] = inst_17573);

(statearr_17579_17630[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (20))){
var state_17577__$1 = state_17577;
var statearr_17580_17631 = state_17577__$1;
(statearr_17580_17631[(2)] = null);

(statearr_17580_17631[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (1))){
var state_17577__$1 = state_17577;
var statearr_17581_17632 = state_17577__$1;
(statearr_17581_17632[(2)] = null);

(statearr_17581_17632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (24))){
var inst_17556 = (state_17577[(7)]);
var inst_17565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17556);
var state_17577__$1 = state_17577;
var statearr_17582_17633 = state_17577__$1;
(statearr_17582_17633[(2)] = inst_17565);

(statearr_17582_17633[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (4))){
var inst_17508 = (state_17577[(8)]);
var inst_17508__$1 = (state_17577[(2)]);
var inst_17509 = (inst_17508__$1 == null);
var state_17577__$1 = (function (){var statearr_17583 = state_17577;
(statearr_17583[(8)] = inst_17508__$1);

return statearr_17583;
})();
if(cljs.core.truth_(inst_17509)){
var statearr_17584_17634 = state_17577__$1;
(statearr_17584_17634[(1)] = (5));

} else {
var statearr_17585_17635 = state_17577__$1;
(statearr_17585_17635[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (15))){
var inst_17550 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17586_17636 = state_17577__$1;
(statearr_17586_17636[(2)] = inst_17550);

(statearr_17586_17636[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (21))){
var inst_17570 = (state_17577[(2)]);
var state_17577__$1 = (function (){var statearr_17587 = state_17577;
(statearr_17587[(9)] = inst_17570);

return statearr_17587;
})();
var statearr_17588_17637 = state_17577__$1;
(statearr_17588_17637[(2)] = null);

(statearr_17588_17637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (13))){
var inst_17532 = (state_17577[(10)]);
var inst_17534 = cljs.core.chunked_seq_QMARK_(inst_17532);
var state_17577__$1 = state_17577;
if(inst_17534){
var statearr_17589_17638 = state_17577__$1;
(statearr_17589_17638[(1)] = (16));

} else {
var statearr_17590_17639 = state_17577__$1;
(statearr_17590_17639[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (22))){
var inst_17562 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
if(cljs.core.truth_(inst_17562)){
var statearr_17591_17640 = state_17577__$1;
(statearr_17591_17640[(1)] = (23));

} else {
var statearr_17592_17641 = state_17577__$1;
(statearr_17592_17641[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (6))){
var inst_17508 = (state_17577[(8)]);
var inst_17558 = (state_17577[(11)]);
var inst_17556 = (state_17577[(7)]);
var inst_17556__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17508) : topic_fn.call(null,inst_17508));
var inst_17557 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17557,inst_17556__$1);
var state_17577__$1 = (function (){var statearr_17593 = state_17577;
(statearr_17593[(11)] = inst_17558__$1);

(statearr_17593[(7)] = inst_17556__$1);

return statearr_17593;
})();
if(cljs.core.truth_(inst_17558__$1)){
var statearr_17594_17642 = state_17577__$1;
(statearr_17594_17642[(1)] = (19));

} else {
var statearr_17595_17643 = state_17577__$1;
(statearr_17595_17643[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (25))){
var inst_17567 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17596_17644 = state_17577__$1;
(statearr_17596_17644[(2)] = inst_17567);

(statearr_17596_17644[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (17))){
var inst_17532 = (state_17577[(10)]);
var inst_17541 = cljs.core.first(inst_17532);
var inst_17542 = cljs.core.async.muxch_STAR_(inst_17541);
var inst_17543 = cljs.core.async.close_BANG_(inst_17542);
var inst_17544 = cljs.core.next(inst_17532);
var inst_17518 = inst_17544;
var inst_17519 = null;
var inst_17520 = (0);
var inst_17521 = (0);
var state_17577__$1 = (function (){var statearr_17597 = state_17577;
(statearr_17597[(12)] = inst_17518);

(statearr_17597[(13)] = inst_17520);

(statearr_17597[(14)] = inst_17543);

(statearr_17597[(15)] = inst_17521);

(statearr_17597[(16)] = inst_17519);

return statearr_17597;
})();
var statearr_17598_17645 = state_17577__$1;
(statearr_17598_17645[(2)] = null);

(statearr_17598_17645[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (3))){
var inst_17575 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17577__$1,inst_17575);
} else {
if((state_val_17578 === (12))){
var inst_17552 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17599_17646 = state_17577__$1;
(statearr_17599_17646[(2)] = inst_17552);

(statearr_17599_17646[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (2))){
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17577__$1,(4),ch);
} else {
if((state_val_17578 === (23))){
var state_17577__$1 = state_17577;
var statearr_17600_17647 = state_17577__$1;
(statearr_17600_17647[(2)] = null);

(statearr_17600_17647[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (19))){
var inst_17508 = (state_17577[(8)]);
var inst_17558 = (state_17577[(11)]);
var inst_17560 = cljs.core.async.muxch_STAR_(inst_17558);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(22),inst_17560,inst_17508);
} else {
if((state_val_17578 === (11))){
var inst_17518 = (state_17577[(12)]);
var inst_17532 = (state_17577[(10)]);
var inst_17532__$1 = cljs.core.seq(inst_17518);
var state_17577__$1 = (function (){var statearr_17601 = state_17577;
(statearr_17601[(10)] = inst_17532__$1);

return statearr_17601;
})();
if(inst_17532__$1){
var statearr_17602_17648 = state_17577__$1;
(statearr_17602_17648[(1)] = (13));

} else {
var statearr_17603_17649 = state_17577__$1;
(statearr_17603_17649[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (9))){
var inst_17554 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17604_17650 = state_17577__$1;
(statearr_17604_17650[(2)] = inst_17554);

(statearr_17604_17650[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (5))){
var inst_17515 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17516 = cljs.core.vals(inst_17515);
var inst_17517 = cljs.core.seq(inst_17516);
var inst_17518 = inst_17517;
var inst_17519 = null;
var inst_17520 = (0);
var inst_17521 = (0);
var state_17577__$1 = (function (){var statearr_17605 = state_17577;
(statearr_17605[(12)] = inst_17518);

(statearr_17605[(13)] = inst_17520);

(statearr_17605[(15)] = inst_17521);

(statearr_17605[(16)] = inst_17519);

return statearr_17605;
})();
var statearr_17606_17651 = state_17577__$1;
(statearr_17606_17651[(2)] = null);

(statearr_17606_17651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (14))){
var state_17577__$1 = state_17577;
var statearr_17610_17652 = state_17577__$1;
(statearr_17610_17652[(2)] = null);

(statearr_17610_17652[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (16))){
var inst_17532 = (state_17577[(10)]);
var inst_17536 = cljs.core.chunk_first(inst_17532);
var inst_17537 = cljs.core.chunk_rest(inst_17532);
var inst_17538 = cljs.core.count(inst_17536);
var inst_17518 = inst_17537;
var inst_17519 = inst_17536;
var inst_17520 = inst_17538;
var inst_17521 = (0);
var state_17577__$1 = (function (){var statearr_17611 = state_17577;
(statearr_17611[(12)] = inst_17518);

(statearr_17611[(13)] = inst_17520);

(statearr_17611[(15)] = inst_17521);

(statearr_17611[(16)] = inst_17519);

return statearr_17611;
})();
var statearr_17612_17653 = state_17577__$1;
(statearr_17612_17653[(2)] = null);

(statearr_17612_17653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (10))){
var inst_17518 = (state_17577[(12)]);
var inst_17520 = (state_17577[(13)]);
var inst_17521 = (state_17577[(15)]);
var inst_17519 = (state_17577[(16)]);
var inst_17526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17519,inst_17521);
var inst_17527 = cljs.core.async.muxch_STAR_(inst_17526);
var inst_17528 = cljs.core.async.close_BANG_(inst_17527);
var inst_17529 = (inst_17521 + (1));
var tmp17607 = inst_17518;
var tmp17608 = inst_17520;
var tmp17609 = inst_17519;
var inst_17518__$1 = tmp17607;
var inst_17519__$1 = tmp17609;
var inst_17520__$1 = tmp17608;
var inst_17521__$1 = inst_17529;
var state_17577__$1 = (function (){var statearr_17613 = state_17577;
(statearr_17613[(12)] = inst_17518__$1);

(statearr_17613[(13)] = inst_17520__$1);

(statearr_17613[(17)] = inst_17528);

(statearr_17613[(15)] = inst_17521__$1);

(statearr_17613[(16)] = inst_17519__$1);

return statearr_17613;
})();
var statearr_17614_17654 = state_17577__$1;
(statearr_17614_17654[(2)] = null);

(statearr_17614_17654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (18))){
var inst_17547 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17615_17655 = state_17577__$1;
(statearr_17615_17655[(2)] = inst_17547);

(statearr_17615_17655[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17578 === (8))){
var inst_17520 = (state_17577[(13)]);
var inst_17521 = (state_17577[(15)]);
var inst_17523 = (inst_17521 < inst_17520);
var inst_17524 = inst_17523;
var state_17577__$1 = state_17577;
if(cljs.core.truth_(inst_17524)){
var statearr_17616_17656 = state_17577__$1;
(statearr_17616_17656[(1)] = (10));

} else {
var statearr_17617_17657 = state_17577__$1;
(statearr_17617_17657[(1)] = (11));

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
});})(c__15685__auto___17629,mults,ensure_mult,p))
;
return ((function (switch__15561__auto__,c__15685__auto___17629,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_17621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17621[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_17621[(1)] = (1));

return statearr_17621;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_17577){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17577);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17622){if((e17622 instanceof Object)){
var ex__15565__auto__ = e17622;
var statearr_17623_17658 = state_17577;
(statearr_17623_17658[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17577);

return cljs.core.cst$kw$recur;
} else {
throw e17622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17659 = state_17577;
state_17577 = G__17659;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17629,mults,ensure_mult,p))
})();
var state__15687__auto__ = (function (){var statearr_17624 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17629);

return statearr_17624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17629,mults,ensure_mult,p))
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
var args17660 = [];
var len__7484__auto___17663 = arguments.length;
var i__7485__auto___17664 = (0);
while(true){
if((i__7485__auto___17664 < len__7484__auto___17663)){
args17660.push((arguments[i__7485__auto___17664]));

var G__17665 = (i__7485__auto___17664 + (1));
i__7485__auto___17664 = G__17665;
continue;
} else {
}
break;
}

var G__17662 = args17660.length;
switch (G__17662) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17660.length)].join('')));

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
var args17667 = [];
var len__7484__auto___17670 = arguments.length;
var i__7485__auto___17671 = (0);
while(true){
if((i__7485__auto___17671 < len__7484__auto___17670)){
args17667.push((arguments[i__7485__auto___17671]));

var G__17672 = (i__7485__auto___17671 + (1));
i__7485__auto___17671 = G__17672;
continue;
} else {
}
break;
}

var G__17669 = args17667.length;
switch (G__17669) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17667.length)].join('')));

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
var args17674 = [];
var len__7484__auto___17745 = arguments.length;
var i__7485__auto___17746 = (0);
while(true){
if((i__7485__auto___17746 < len__7484__auto___17745)){
args17674.push((arguments[i__7485__auto___17746]));

var G__17747 = (i__7485__auto___17746 + (1));
i__7485__auto___17746 = G__17747;
continue;
} else {
}
break;
}

var G__17676 = args17674.length;
switch (G__17676) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17674.length)].join('')));

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
var c__15685__auto___17749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (7))){
var state_17715__$1 = state_17715;
var statearr_17717_17750 = state_17715__$1;
(statearr_17717_17750[(2)] = null);

(statearr_17717_17750[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (1))){
var state_17715__$1 = state_17715;
var statearr_17718_17751 = state_17715__$1;
(statearr_17718_17751[(2)] = null);

(statearr_17718_17751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (4))){
var inst_17679 = (state_17715[(7)]);
var inst_17681 = (inst_17679 < cnt);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17681)){
var statearr_17719_17752 = state_17715__$1;
(statearr_17719_17752[(1)] = (6));

} else {
var statearr_17720_17753 = state_17715__$1;
(statearr_17720_17753[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (15))){
var inst_17711 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17721_17754 = state_17715__$1;
(statearr_17721_17754[(2)] = inst_17711);

(statearr_17721_17754[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (13))){
var inst_17704 = cljs.core.async.close_BANG_(out);
var state_17715__$1 = state_17715;
var statearr_17722_17755 = state_17715__$1;
(statearr_17722_17755[(2)] = inst_17704);

(statearr_17722_17755[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (6))){
var state_17715__$1 = state_17715;
var statearr_17723_17756 = state_17715__$1;
(statearr_17723_17756[(2)] = null);

(statearr_17723_17756[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (3))){
var inst_17713 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17713);
} else {
if((state_val_17716 === (12))){
var inst_17701 = (state_17715[(8)]);
var inst_17701__$1 = (state_17715[(2)]);
var inst_17702 = cljs.core.some(cljs.core.nil_QMARK_,inst_17701__$1);
var state_17715__$1 = (function (){var statearr_17724 = state_17715;
(statearr_17724[(8)] = inst_17701__$1);

return statearr_17724;
})();
if(cljs.core.truth_(inst_17702)){
var statearr_17725_17757 = state_17715__$1;
(statearr_17725_17757[(1)] = (13));

} else {
var statearr_17726_17758 = state_17715__$1;
(statearr_17726_17758[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (2))){
var inst_17678 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17679 = (0);
var state_17715__$1 = (function (){var statearr_17727 = state_17715;
(statearr_17727[(9)] = inst_17678);

(statearr_17727[(7)] = inst_17679);

return statearr_17727;
})();
var statearr_17728_17759 = state_17715__$1;
(statearr_17728_17759[(2)] = null);

(statearr_17728_17759[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (11))){
var inst_17679 = (state_17715[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17715,(10),Object,null,(9));
var inst_17688 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17679) : chs__$1.call(null,inst_17679));
var inst_17689 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17679) : done.call(null,inst_17679));
var inst_17690 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17688,inst_17689);
var state_17715__$1 = state_17715;
var statearr_17729_17760 = state_17715__$1;
(statearr_17729_17760[(2)] = inst_17690);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (9))){
var inst_17679 = (state_17715[(7)]);
var inst_17692 = (state_17715[(2)]);
var inst_17693 = (inst_17679 + (1));
var inst_17679__$1 = inst_17693;
var state_17715__$1 = (function (){var statearr_17730 = state_17715;
(statearr_17730[(10)] = inst_17692);

(statearr_17730[(7)] = inst_17679__$1);

return statearr_17730;
})();
var statearr_17731_17761 = state_17715__$1;
(statearr_17731_17761[(2)] = null);

(statearr_17731_17761[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (5))){
var inst_17699 = (state_17715[(2)]);
var state_17715__$1 = (function (){var statearr_17732 = state_17715;
(statearr_17732[(11)] = inst_17699);

return statearr_17732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(12),dchan);
} else {
if((state_val_17716 === (14))){
var inst_17701 = (state_17715[(8)]);
var inst_17706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17701);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(16),out,inst_17706);
} else {
if((state_val_17716 === (16))){
var inst_17708 = (state_17715[(2)]);
var state_17715__$1 = (function (){var statearr_17733 = state_17715;
(statearr_17733[(12)] = inst_17708);

return statearr_17733;
})();
var statearr_17734_17762 = state_17715__$1;
(statearr_17734_17762[(2)] = null);

(statearr_17734_17762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (10))){
var inst_17683 = (state_17715[(2)]);
var inst_17684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17715__$1 = (function (){var statearr_17735 = state_17715;
(statearr_17735[(13)] = inst_17683);

return statearr_17735;
})();
var statearr_17736_17763 = state_17715__$1;
(statearr_17736_17763[(2)] = inst_17684);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (8))){
var inst_17697 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17737_17764 = state_17715__$1;
(statearr_17737_17764[(2)] = inst_17697);

(statearr_17737_17764[(1)] = (5));


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
});})(c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15561__auto__,c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_17741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17741[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_17741[(1)] = (1));

return statearr_17741;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_17715){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17742){if((e17742 instanceof Object)){
var ex__15565__auto__ = e17742;
var statearr_17743_17765 = state_17715;
(statearr_17743_17765[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715);

return cljs.core.cst$kw$recur;
} else {
throw e17742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17766 = state_17715;
state_17715 = G__17766;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15687__auto__ = (function (){var statearr_17744 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17749);

return statearr_17744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17749,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17768 = [];
var len__7484__auto___17826 = arguments.length;
var i__7485__auto___17827 = (0);
while(true){
if((i__7485__auto___17827 < len__7484__auto___17826)){
args17768.push((arguments[i__7485__auto___17827]));

var G__17828 = (i__7485__auto___17827 + (1));
i__7485__auto___17827 = G__17828;
continue;
} else {
}
break;
}

var G__17770 = args17768.length;
switch (G__17770) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17768.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___17830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17830,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17830,out){
return (function (state_17802){
var state_val_17803 = (state_17802[(1)]);
if((state_val_17803 === (7))){
var inst_17782 = (state_17802[(7)]);
var inst_17781 = (state_17802[(8)]);
var inst_17781__$1 = (state_17802[(2)]);
var inst_17782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17781__$1,(0),null);
var inst_17783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17781__$1,(1),null);
var inst_17784 = (inst_17782__$1 == null);
var state_17802__$1 = (function (){var statearr_17804 = state_17802;
(statearr_17804[(9)] = inst_17783);

(statearr_17804[(7)] = inst_17782__$1);

(statearr_17804[(8)] = inst_17781__$1);

return statearr_17804;
})();
if(cljs.core.truth_(inst_17784)){
var statearr_17805_17831 = state_17802__$1;
(statearr_17805_17831[(1)] = (8));

} else {
var statearr_17806_17832 = state_17802__$1;
(statearr_17806_17832[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (1))){
var inst_17771 = cljs.core.vec(chs);
var inst_17772 = inst_17771;
var state_17802__$1 = (function (){var statearr_17807 = state_17802;
(statearr_17807[(10)] = inst_17772);

return statearr_17807;
})();
var statearr_17808_17833 = state_17802__$1;
(statearr_17808_17833[(2)] = null);

(statearr_17808_17833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (4))){
var inst_17772 = (state_17802[(10)]);
var state_17802__$1 = state_17802;
return cljs.core.async.ioc_alts_BANG_(state_17802__$1,(7),inst_17772);
} else {
if((state_val_17803 === (6))){
var inst_17798 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
var statearr_17809_17834 = state_17802__$1;
(statearr_17809_17834[(2)] = inst_17798);

(statearr_17809_17834[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (3))){
var inst_17800 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17802__$1,inst_17800);
} else {
if((state_val_17803 === (2))){
var inst_17772 = (state_17802[(10)]);
var inst_17774 = cljs.core.count(inst_17772);
var inst_17775 = (inst_17774 > (0));
var state_17802__$1 = state_17802;
if(cljs.core.truth_(inst_17775)){
var statearr_17811_17835 = state_17802__$1;
(statearr_17811_17835[(1)] = (4));

} else {
var statearr_17812_17836 = state_17802__$1;
(statearr_17812_17836[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (11))){
var inst_17772 = (state_17802[(10)]);
var inst_17791 = (state_17802[(2)]);
var tmp17810 = inst_17772;
var inst_17772__$1 = tmp17810;
var state_17802__$1 = (function (){var statearr_17813 = state_17802;
(statearr_17813[(10)] = inst_17772__$1);

(statearr_17813[(11)] = inst_17791);

return statearr_17813;
})();
var statearr_17814_17837 = state_17802__$1;
(statearr_17814_17837[(2)] = null);

(statearr_17814_17837[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (9))){
var inst_17782 = (state_17802[(7)]);
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17802__$1,(11),out,inst_17782);
} else {
if((state_val_17803 === (5))){
var inst_17796 = cljs.core.async.close_BANG_(out);
var state_17802__$1 = state_17802;
var statearr_17815_17838 = state_17802__$1;
(statearr_17815_17838[(2)] = inst_17796);

(statearr_17815_17838[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (10))){
var inst_17794 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
var statearr_17816_17839 = state_17802__$1;
(statearr_17816_17839[(2)] = inst_17794);

(statearr_17816_17839[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17803 === (8))){
var inst_17783 = (state_17802[(9)]);
var inst_17772 = (state_17802[(10)]);
var inst_17782 = (state_17802[(7)]);
var inst_17781 = (state_17802[(8)]);
var inst_17786 = (function (){var cs = inst_17772;
var vec__17777 = inst_17781;
var v = inst_17782;
var c = inst_17783;
return ((function (cs,vec__17777,v,c,inst_17783,inst_17772,inst_17782,inst_17781,state_val_17803,c__15685__auto___17830,out){
return (function (p1__17767_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17767_SHARP_);
});
;})(cs,vec__17777,v,c,inst_17783,inst_17772,inst_17782,inst_17781,state_val_17803,c__15685__auto___17830,out))
})();
var inst_17787 = cljs.core.filterv(inst_17786,inst_17772);
var inst_17772__$1 = inst_17787;
var state_17802__$1 = (function (){var statearr_17817 = state_17802;
(statearr_17817[(10)] = inst_17772__$1);

return statearr_17817;
})();
var statearr_17818_17840 = state_17802__$1;
(statearr_17818_17840[(2)] = null);

(statearr_17818_17840[(1)] = (2));


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
});})(c__15685__auto___17830,out))
;
return ((function (switch__15561__auto__,c__15685__auto___17830,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17822[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_17802){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17802);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17823){if((e17823 instanceof Object)){
var ex__15565__auto__ = e17823;
var statearr_17824_17841 = state_17802;
(statearr_17824_17841[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17802);

return cljs.core.cst$kw$recur;
} else {
throw e17823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17842 = state_17802;
state_17802 = G__17842;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_17802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_17802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17830,out))
})();
var state__15687__auto__ = (function (){var statearr_17825 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17830);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17830,out))
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
var args17843 = [];
var len__7484__auto___17892 = arguments.length;
var i__7485__auto___17893 = (0);
while(true){
if((i__7485__auto___17893 < len__7484__auto___17892)){
args17843.push((arguments[i__7485__auto___17893]));

var G__17894 = (i__7485__auto___17893 + (1));
i__7485__auto___17893 = G__17894;
continue;
} else {
}
break;
}

var G__17845 = args17843.length;
switch (G__17845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17843.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___17896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17896,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17896,out){
return (function (state_17869){
var state_val_17870 = (state_17869[(1)]);
if((state_val_17870 === (7))){
var inst_17851 = (state_17869[(7)]);
var inst_17851__$1 = (state_17869[(2)]);
var inst_17852 = (inst_17851__$1 == null);
var inst_17853 = cljs.core.not(inst_17852);
var state_17869__$1 = (function (){var statearr_17871 = state_17869;
(statearr_17871[(7)] = inst_17851__$1);

return statearr_17871;
})();
if(inst_17853){
var statearr_17872_17897 = state_17869__$1;
(statearr_17872_17897[(1)] = (8));

} else {
var statearr_17873_17898 = state_17869__$1;
(statearr_17873_17898[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (1))){
var inst_17846 = (0);
var state_17869__$1 = (function (){var statearr_17874 = state_17869;
(statearr_17874[(8)] = inst_17846);

return statearr_17874;
})();
var statearr_17875_17899 = state_17869__$1;
(statearr_17875_17899[(2)] = null);

(statearr_17875_17899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (4))){
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17869__$1,(7),ch);
} else {
if((state_val_17870 === (6))){
var inst_17864 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17876_17900 = state_17869__$1;
(statearr_17876_17900[(2)] = inst_17864);

(statearr_17876_17900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (3))){
var inst_17866 = (state_17869[(2)]);
var inst_17867 = cljs.core.async.close_BANG_(out);
var state_17869__$1 = (function (){var statearr_17877 = state_17869;
(statearr_17877[(9)] = inst_17866);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17869__$1,inst_17867);
} else {
if((state_val_17870 === (2))){
var inst_17846 = (state_17869[(8)]);
var inst_17848 = (inst_17846 < n);
var state_17869__$1 = state_17869;
if(cljs.core.truth_(inst_17848)){
var statearr_17878_17901 = state_17869__$1;
(statearr_17878_17901[(1)] = (4));

} else {
var statearr_17879_17902 = state_17869__$1;
(statearr_17879_17902[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (11))){
var inst_17846 = (state_17869[(8)]);
var inst_17856 = (state_17869[(2)]);
var inst_17857 = (inst_17846 + (1));
var inst_17846__$1 = inst_17857;
var state_17869__$1 = (function (){var statearr_17880 = state_17869;
(statearr_17880[(10)] = inst_17856);

(statearr_17880[(8)] = inst_17846__$1);

return statearr_17880;
})();
var statearr_17881_17903 = state_17869__$1;
(statearr_17881_17903[(2)] = null);

(statearr_17881_17903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (9))){
var state_17869__$1 = state_17869;
var statearr_17882_17904 = state_17869__$1;
(statearr_17882_17904[(2)] = null);

(statearr_17882_17904[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (5))){
var state_17869__$1 = state_17869;
var statearr_17883_17905 = state_17869__$1;
(statearr_17883_17905[(2)] = null);

(statearr_17883_17905[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (10))){
var inst_17861 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17884_17906 = state_17869__$1;
(statearr_17884_17906[(2)] = inst_17861);

(statearr_17884_17906[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17870 === (8))){
var inst_17851 = (state_17869[(7)]);
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17869__$1,(11),out,inst_17851);
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
});})(c__15685__auto___17896,out))
;
return ((function (switch__15561__auto__,c__15685__auto___17896,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_17888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17888[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_17888[(1)] = (1));

return statearr_17888;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_17869){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17869);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17889){if((e17889 instanceof Object)){
var ex__15565__auto__ = e17889;
var statearr_17890_17907 = state_17869;
(statearr_17890_17907[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17869);

return cljs.core.cst$kw$recur;
} else {
throw e17889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17908 = state_17869;
state_17869 = G__17908;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_17869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_17869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17896,out))
})();
var state__15687__auto__ = (function (){var statearr_17891 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17896);

return statearr_17891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17896,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17918 = (function (map_LT_,f,ch,meta17919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17919 = meta17919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17920,meta17919__$1){
var self__ = this;
var _17920__$1 = this;
return (new cljs.core.async.t_cljs$core$async17918(self__.map_LT_,self__.f,self__.ch,meta17919__$1));
});

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17920){
var self__ = this;
var _17920__$1 = this;
return self__.meta17919;
});

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17921 = (function (map_LT_,f,ch,meta17919,_,fn1,meta17922){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17919 = meta17919;
this._ = _;
this.fn1 = fn1;
this.meta17922 = meta17922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17923,meta17922__$1){
var self__ = this;
var _17923__$1 = this;
return (new cljs.core.async.t_cljs$core$async17921(self__.map_LT_,self__.f,self__.ch,self__.meta17919,self__._,self__.fn1,meta17922__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17923){
var self__ = this;
var _17923__$1 = this;
return self__.meta17922;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17909_SHARP_){
var G__17924 = (((p1__17909_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17909_SHARP_) : self__.f.call(null,p1__17909_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17924) : f1.call(null,G__17924));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17919,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17918], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17922], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17921";

cljs.core.async.t_cljs$core$async17921.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17921");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17921 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17921(map_LT___$1,f__$1,ch__$1,meta17919__$1,___$2,fn1__$1,meta17922){
return (new cljs.core.async.t_cljs$core$async17921(map_LT___$1,f__$1,ch__$1,meta17919__$1,___$2,fn1__$1,meta17922));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17921(self__.map_LT_,self__.f,self__.ch,self__.meta17919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17925 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17925) : self__.f.call(null,G__17925));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17919], null);
});

cljs.core.async.t_cljs$core$async17918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17918";

cljs.core.async.t_cljs$core$async17918.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17918");
});

cljs.core.async.__GT_t_cljs$core$async17918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17918(map_LT___$1,f__$1,ch__$1,meta17919){
return (new cljs.core.async.t_cljs$core$async17918(map_LT___$1,f__$1,ch__$1,meta17919));
});

}

return (new cljs.core.async.t_cljs$core$async17918(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17929 = (function (map_GT_,f,ch,meta17930){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17930 = meta17930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17931,meta17930__$1){
var self__ = this;
var _17931__$1 = this;
return (new cljs.core.async.t_cljs$core$async17929(self__.map_GT_,self__.f,self__.ch,meta17930__$1));
});

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17931){
var self__ = this;
var _17931__$1 = this;
return self__.meta17930;
});

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17930], null);
});

cljs.core.async.t_cljs$core$async17929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17929";

cljs.core.async.t_cljs$core$async17929.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17929");
});

cljs.core.async.__GT_t_cljs$core$async17929 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17929(map_GT___$1,f__$1,ch__$1,meta17930){
return (new cljs.core.async.t_cljs$core$async17929(map_GT___$1,f__$1,ch__$1,meta17930));
});

}

return (new cljs.core.async.t_cljs$core$async17929(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17935 = (function (filter_GT_,p,ch,meta17936){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17936 = meta17936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17937,meta17936__$1){
var self__ = this;
var _17937__$1 = this;
return (new cljs.core.async.t_cljs$core$async17935(self__.filter_GT_,self__.p,self__.ch,meta17936__$1));
});

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17937){
var self__ = this;
var _17937__$1 = this;
return self__.meta17936;
});

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17936], null);
});

cljs.core.async.t_cljs$core$async17935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17935";

cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async17935");
});

cljs.core.async.__GT_t_cljs$core$async17935 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17935(filter_GT___$1,p__$1,ch__$1,meta17936){
return (new cljs.core.async.t_cljs$core$async17935(filter_GT___$1,p__$1,ch__$1,meta17936));
});

}

return (new cljs.core.async.t_cljs$core$async17935(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17938 = [];
var len__7484__auto___17982 = arguments.length;
var i__7485__auto___17983 = (0);
while(true){
if((i__7485__auto___17983 < len__7484__auto___17982)){
args17938.push((arguments[i__7485__auto___17983]));

var G__17984 = (i__7485__auto___17983 + (1));
i__7485__auto___17983 = G__17984;
continue;
} else {
}
break;
}

var G__17940 = args17938.length;
switch (G__17940) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17938.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___17986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___17986,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___17986,out){
return (function (state_17961){
var state_val_17962 = (state_17961[(1)]);
if((state_val_17962 === (7))){
var inst_17957 = (state_17961[(2)]);
var state_17961__$1 = state_17961;
var statearr_17963_17987 = state_17961__$1;
(statearr_17963_17987[(2)] = inst_17957);

(statearr_17963_17987[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (1))){
var state_17961__$1 = state_17961;
var statearr_17964_17988 = state_17961__$1;
(statearr_17964_17988[(2)] = null);

(statearr_17964_17988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (4))){
var inst_17943 = (state_17961[(7)]);
var inst_17943__$1 = (state_17961[(2)]);
var inst_17944 = (inst_17943__$1 == null);
var state_17961__$1 = (function (){var statearr_17965 = state_17961;
(statearr_17965[(7)] = inst_17943__$1);

return statearr_17965;
})();
if(cljs.core.truth_(inst_17944)){
var statearr_17966_17989 = state_17961__$1;
(statearr_17966_17989[(1)] = (5));

} else {
var statearr_17967_17990 = state_17961__$1;
(statearr_17967_17990[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (6))){
var inst_17943 = (state_17961[(7)]);
var inst_17948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17943) : p.call(null,inst_17943));
var state_17961__$1 = state_17961;
if(cljs.core.truth_(inst_17948)){
var statearr_17968_17991 = state_17961__$1;
(statearr_17968_17991[(1)] = (8));

} else {
var statearr_17969_17992 = state_17961__$1;
(statearr_17969_17992[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (3))){
var inst_17959 = (state_17961[(2)]);
var state_17961__$1 = state_17961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17961__$1,inst_17959);
} else {
if((state_val_17962 === (2))){
var state_17961__$1 = state_17961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17961__$1,(4),ch);
} else {
if((state_val_17962 === (11))){
var inst_17951 = (state_17961[(2)]);
var state_17961__$1 = state_17961;
var statearr_17970_17993 = state_17961__$1;
(statearr_17970_17993[(2)] = inst_17951);

(statearr_17970_17993[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (9))){
var state_17961__$1 = state_17961;
var statearr_17971_17994 = state_17961__$1;
(statearr_17971_17994[(2)] = null);

(statearr_17971_17994[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (5))){
var inst_17946 = cljs.core.async.close_BANG_(out);
var state_17961__$1 = state_17961;
var statearr_17972_17995 = state_17961__$1;
(statearr_17972_17995[(2)] = inst_17946);

(statearr_17972_17995[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (10))){
var inst_17954 = (state_17961[(2)]);
var state_17961__$1 = (function (){var statearr_17973 = state_17961;
(statearr_17973[(8)] = inst_17954);

return statearr_17973;
})();
var statearr_17974_17996 = state_17961__$1;
(statearr_17974_17996[(2)] = null);

(statearr_17974_17996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17962 === (8))){
var inst_17943 = (state_17961[(7)]);
var state_17961__$1 = state_17961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17961__$1,(11),out,inst_17943);
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
});})(c__15685__auto___17986,out))
;
return ((function (switch__15561__auto__,c__15685__auto___17986,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_17978 = [null,null,null,null,null,null,null,null,null];
(statearr_17978[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_17978[(1)] = (1));

return statearr_17978;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_17961){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_17961);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e17979){if((e17979 instanceof Object)){
var ex__15565__auto__ = e17979;
var statearr_17980_17997 = state_17961;
(statearr_17980_17997[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17961);

return cljs.core.cst$kw$recur;
} else {
throw e17979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__17998 = state_17961;
state_17961 = G__17998;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_17961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_17961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___17986,out))
})();
var state__15687__auto__ = (function (){var statearr_17981 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_17981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___17986);

return statearr_17981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___17986,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17999 = [];
var len__7484__auto___18002 = arguments.length;
var i__7485__auto___18003 = (0);
while(true){
if((i__7485__auto___18003 < len__7484__auto___18002)){
args17999.push((arguments[i__7485__auto___18003]));

var G__18004 = (i__7485__auto___18003 + (1));
i__7485__auto___18003 = G__18004;
continue;
} else {
}
break;
}

var G__18001 = args17999.length;
switch (G__18001) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17999.length)].join('')));

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
var c__15685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto__){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto__){
return (function (state_18171){
var state_val_18172 = (state_18171[(1)]);
if((state_val_18172 === (7))){
var inst_18167 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18173_18214 = state_18171__$1;
(statearr_18173_18214[(2)] = inst_18167);

(statearr_18173_18214[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (20))){
var inst_18137 = (state_18171[(7)]);
var inst_18148 = (state_18171[(2)]);
var inst_18149 = cljs.core.next(inst_18137);
var inst_18123 = inst_18149;
var inst_18124 = null;
var inst_18125 = (0);
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18174 = state_18171;
(statearr_18174[(8)] = inst_18123);

(statearr_18174[(9)] = inst_18148);

(statearr_18174[(10)] = inst_18124);

(statearr_18174[(11)] = inst_18126);

(statearr_18174[(12)] = inst_18125);

return statearr_18174;
})();
var statearr_18175_18215 = state_18171__$1;
(statearr_18175_18215[(2)] = null);

(statearr_18175_18215[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (1))){
var state_18171__$1 = state_18171;
var statearr_18176_18216 = state_18171__$1;
(statearr_18176_18216[(2)] = null);

(statearr_18176_18216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (4))){
var inst_18112 = (state_18171[(13)]);
var inst_18112__$1 = (state_18171[(2)]);
var inst_18113 = (inst_18112__$1 == null);
var state_18171__$1 = (function (){var statearr_18177 = state_18171;
(statearr_18177[(13)] = inst_18112__$1);

return statearr_18177;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18178_18217 = state_18171__$1;
(statearr_18178_18217[(1)] = (5));

} else {
var statearr_18179_18218 = state_18171__$1;
(statearr_18179_18218[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (15))){
var state_18171__$1 = state_18171;
var statearr_18183_18219 = state_18171__$1;
(statearr_18183_18219[(2)] = null);

(statearr_18183_18219[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (21))){
var state_18171__$1 = state_18171;
var statearr_18184_18220 = state_18171__$1;
(statearr_18184_18220[(2)] = null);

(statearr_18184_18220[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (13))){
var inst_18123 = (state_18171[(8)]);
var inst_18124 = (state_18171[(10)]);
var inst_18126 = (state_18171[(11)]);
var inst_18125 = (state_18171[(12)]);
var inst_18133 = (state_18171[(2)]);
var inst_18134 = (inst_18126 + (1));
var tmp18180 = inst_18123;
var tmp18181 = inst_18124;
var tmp18182 = inst_18125;
var inst_18123__$1 = tmp18180;
var inst_18124__$1 = tmp18181;
var inst_18125__$1 = tmp18182;
var inst_18126__$1 = inst_18134;
var state_18171__$1 = (function (){var statearr_18185 = state_18171;
(statearr_18185[(8)] = inst_18123__$1);

(statearr_18185[(10)] = inst_18124__$1);

(statearr_18185[(14)] = inst_18133);

(statearr_18185[(11)] = inst_18126__$1);

(statearr_18185[(12)] = inst_18125__$1);

return statearr_18185;
})();
var statearr_18186_18221 = state_18171__$1;
(statearr_18186_18221[(2)] = null);

(statearr_18186_18221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (22))){
var state_18171__$1 = state_18171;
var statearr_18187_18222 = state_18171__$1;
(statearr_18187_18222[(2)] = null);

(statearr_18187_18222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (6))){
var inst_18112 = (state_18171[(13)]);
var inst_18121 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18112) : f.call(null,inst_18112));
var inst_18122 = cljs.core.seq(inst_18121);
var inst_18123 = inst_18122;
var inst_18124 = null;
var inst_18125 = (0);
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18188 = state_18171;
(statearr_18188[(8)] = inst_18123);

(statearr_18188[(10)] = inst_18124);

(statearr_18188[(11)] = inst_18126);

(statearr_18188[(12)] = inst_18125);

return statearr_18188;
})();
var statearr_18189_18223 = state_18171__$1;
(statearr_18189_18223[(2)] = null);

(statearr_18189_18223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (17))){
var inst_18137 = (state_18171[(7)]);
var inst_18141 = cljs.core.chunk_first(inst_18137);
var inst_18142 = cljs.core.chunk_rest(inst_18137);
var inst_18143 = cljs.core.count(inst_18141);
var inst_18123 = inst_18142;
var inst_18124 = inst_18141;
var inst_18125 = inst_18143;
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18190 = state_18171;
(statearr_18190[(8)] = inst_18123);

(statearr_18190[(10)] = inst_18124);

(statearr_18190[(11)] = inst_18126);

(statearr_18190[(12)] = inst_18125);

return statearr_18190;
})();
var statearr_18191_18224 = state_18171__$1;
(statearr_18191_18224[(2)] = null);

(statearr_18191_18224[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (3))){
var inst_18169 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18171__$1,inst_18169);
} else {
if((state_val_18172 === (12))){
var inst_18157 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18192_18225 = state_18171__$1;
(statearr_18192_18225[(2)] = inst_18157);

(statearr_18192_18225[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (2))){
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18171__$1,(4),in$);
} else {
if((state_val_18172 === (23))){
var inst_18165 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18193_18226 = state_18171__$1;
(statearr_18193_18226[(2)] = inst_18165);

(statearr_18193_18226[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (19))){
var inst_18152 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18194_18227 = state_18171__$1;
(statearr_18194_18227[(2)] = inst_18152);

(statearr_18194_18227[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (11))){
var inst_18123 = (state_18171[(8)]);
var inst_18137 = (state_18171[(7)]);
var inst_18137__$1 = cljs.core.seq(inst_18123);
var state_18171__$1 = (function (){var statearr_18195 = state_18171;
(statearr_18195[(7)] = inst_18137__$1);

return statearr_18195;
})();
if(inst_18137__$1){
var statearr_18196_18228 = state_18171__$1;
(statearr_18196_18228[(1)] = (14));

} else {
var statearr_18197_18229 = state_18171__$1;
(statearr_18197_18229[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (9))){
var inst_18159 = (state_18171[(2)]);
var inst_18160 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18171__$1 = (function (){var statearr_18198 = state_18171;
(statearr_18198[(15)] = inst_18159);

return statearr_18198;
})();
if(cljs.core.truth_(inst_18160)){
var statearr_18199_18230 = state_18171__$1;
(statearr_18199_18230[(1)] = (21));

} else {
var statearr_18200_18231 = state_18171__$1;
(statearr_18200_18231[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (5))){
var inst_18115 = cljs.core.async.close_BANG_(out);
var state_18171__$1 = state_18171;
var statearr_18201_18232 = state_18171__$1;
(statearr_18201_18232[(2)] = inst_18115);

(statearr_18201_18232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (14))){
var inst_18137 = (state_18171[(7)]);
var inst_18139 = cljs.core.chunked_seq_QMARK_(inst_18137);
var state_18171__$1 = state_18171;
if(inst_18139){
var statearr_18202_18233 = state_18171__$1;
(statearr_18202_18233[(1)] = (17));

} else {
var statearr_18203_18234 = state_18171__$1;
(statearr_18203_18234[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (16))){
var inst_18155 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18204_18235 = state_18171__$1;
(statearr_18204_18235[(2)] = inst_18155);

(statearr_18204_18235[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (10))){
var inst_18124 = (state_18171[(10)]);
var inst_18126 = (state_18171[(11)]);
var inst_18131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18124,inst_18126);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(13),out,inst_18131);
} else {
if((state_val_18172 === (18))){
var inst_18137 = (state_18171[(7)]);
var inst_18146 = cljs.core.first(inst_18137);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(20),out,inst_18146);
} else {
if((state_val_18172 === (8))){
var inst_18126 = (state_18171[(11)]);
var inst_18125 = (state_18171[(12)]);
var inst_18128 = (inst_18126 < inst_18125);
var inst_18129 = inst_18128;
var state_18171__$1 = state_18171;
if(cljs.core.truth_(inst_18129)){
var statearr_18205_18236 = state_18171__$1;
(statearr_18205_18236[(1)] = (10));

} else {
var statearr_18206_18237 = state_18171__$1;
(statearr_18206_18237[(1)] = (11));

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
});})(c__15685__auto__))
;
return ((function (switch__15561__auto__,c__15685__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____0 = (function (){
var statearr_18210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18210[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__);

(statearr_18210[(1)] = (1));

return statearr_18210;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____1 = (function (state_18171){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_18171);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e18211){if((e18211 instanceof Object)){
var ex__15565__auto__ = e18211;
var statearr_18212_18238 = state_18171;
(statearr_18212_18238[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18171);

return cljs.core.cst$kw$recur;
} else {
throw e18211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__18239 = state_18171;
state_18171 = G__18239;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__ = function(state_18171){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____1.call(this,state_18171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15562__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto__))
})();
var state__15687__auto__ = (function (){var statearr_18213 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_18213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto__);

return statearr_18213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto__))
);

return c__15685__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18240 = [];
var len__7484__auto___18243 = arguments.length;
var i__7485__auto___18244 = (0);
while(true){
if((i__7485__auto___18244 < len__7484__auto___18243)){
args18240.push((arguments[i__7485__auto___18244]));

var G__18245 = (i__7485__auto___18244 + (1));
i__7485__auto___18244 = G__18245;
continue;
} else {
}
break;
}

var G__18242 = args18240.length;
switch (G__18242) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18240.length)].join('')));

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
var args18247 = [];
var len__7484__auto___18250 = arguments.length;
var i__7485__auto___18251 = (0);
while(true){
if((i__7485__auto___18251 < len__7484__auto___18250)){
args18247.push((arguments[i__7485__auto___18251]));

var G__18252 = (i__7485__auto___18251 + (1));
i__7485__auto___18251 = G__18252;
continue;
} else {
}
break;
}

var G__18249 = args18247.length;
switch (G__18249) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18247.length)].join('')));

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
var args18254 = [];
var len__7484__auto___18305 = arguments.length;
var i__7485__auto___18306 = (0);
while(true){
if((i__7485__auto___18306 < len__7484__auto___18305)){
args18254.push((arguments[i__7485__auto___18306]));

var G__18307 = (i__7485__auto___18306 + (1));
i__7485__auto___18306 = G__18307;
continue;
} else {
}
break;
}

var G__18256 = args18254.length;
switch (G__18256) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18254.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___18309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___18309,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___18309,out){
return (function (state_18280){
var state_val_18281 = (state_18280[(1)]);
if((state_val_18281 === (7))){
var inst_18275 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18282_18310 = state_18280__$1;
(statearr_18282_18310[(2)] = inst_18275);

(statearr_18282_18310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (1))){
var inst_18257 = null;
var state_18280__$1 = (function (){var statearr_18283 = state_18280;
(statearr_18283[(7)] = inst_18257);

return statearr_18283;
})();
var statearr_18284_18311 = state_18280__$1;
(statearr_18284_18311[(2)] = null);

(statearr_18284_18311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (4))){
var inst_18260 = (state_18280[(8)]);
var inst_18260__$1 = (state_18280[(2)]);
var inst_18261 = (inst_18260__$1 == null);
var inst_18262 = cljs.core.not(inst_18261);
var state_18280__$1 = (function (){var statearr_18285 = state_18280;
(statearr_18285[(8)] = inst_18260__$1);

return statearr_18285;
})();
if(inst_18262){
var statearr_18286_18312 = state_18280__$1;
(statearr_18286_18312[(1)] = (5));

} else {
var statearr_18287_18313 = state_18280__$1;
(statearr_18287_18313[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (6))){
var state_18280__$1 = state_18280;
var statearr_18288_18314 = state_18280__$1;
(statearr_18288_18314[(2)] = null);

(statearr_18288_18314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (3))){
var inst_18277 = (state_18280[(2)]);
var inst_18278 = cljs.core.async.close_BANG_(out);
var state_18280__$1 = (function (){var statearr_18289 = state_18280;
(statearr_18289[(9)] = inst_18277);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18280__$1,inst_18278);
} else {
if((state_val_18281 === (2))){
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18280__$1,(4),ch);
} else {
if((state_val_18281 === (11))){
var inst_18260 = (state_18280[(8)]);
var inst_18269 = (state_18280[(2)]);
var inst_18257 = inst_18260;
var state_18280__$1 = (function (){var statearr_18290 = state_18280;
(statearr_18290[(10)] = inst_18269);

(statearr_18290[(7)] = inst_18257);

return statearr_18290;
})();
var statearr_18291_18315 = state_18280__$1;
(statearr_18291_18315[(2)] = null);

(statearr_18291_18315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (9))){
var inst_18260 = (state_18280[(8)]);
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18280__$1,(11),out,inst_18260);
} else {
if((state_val_18281 === (5))){
var inst_18260 = (state_18280[(8)]);
var inst_18257 = (state_18280[(7)]);
var inst_18264 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18260,inst_18257);
var state_18280__$1 = state_18280;
if(inst_18264){
var statearr_18293_18316 = state_18280__$1;
(statearr_18293_18316[(1)] = (8));

} else {
var statearr_18294_18317 = state_18280__$1;
(statearr_18294_18317[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (10))){
var inst_18272 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18295_18318 = state_18280__$1;
(statearr_18295_18318[(2)] = inst_18272);

(statearr_18295_18318[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18281 === (8))){
var inst_18257 = (state_18280[(7)]);
var tmp18292 = inst_18257;
var inst_18257__$1 = tmp18292;
var state_18280__$1 = (function (){var statearr_18296 = state_18280;
(statearr_18296[(7)] = inst_18257__$1);

return statearr_18296;
})();
var statearr_18297_18319 = state_18280__$1;
(statearr_18297_18319[(2)] = null);

(statearr_18297_18319[(1)] = (2));


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
});})(c__15685__auto___18309,out))
;
return ((function (switch__15561__auto__,c__15685__auto___18309,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_18301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18301[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_18301[(1)] = (1));

return statearr_18301;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_18280){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_18280);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e18302){if((e18302 instanceof Object)){
var ex__15565__auto__ = e18302;
var statearr_18303_18320 = state_18280;
(statearr_18303_18320[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18280);

return cljs.core.cst$kw$recur;
} else {
throw e18302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__18321 = state_18280;
state_18280 = G__18321;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_18280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_18280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___18309,out))
})();
var state__15687__auto__ = (function (){var statearr_18304 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_18304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___18309);

return statearr_18304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___18309,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18322 = [];
var len__7484__auto___18392 = arguments.length;
var i__7485__auto___18393 = (0);
while(true){
if((i__7485__auto___18393 < len__7484__auto___18392)){
args18322.push((arguments[i__7485__auto___18393]));

var G__18394 = (i__7485__auto___18393 + (1));
i__7485__auto___18393 = G__18394;
continue;
} else {
}
break;
}

var G__18324 = args18322.length;
switch (G__18324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18322.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___18396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___18396,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___18396,out){
return (function (state_18362){
var state_val_18363 = (state_18362[(1)]);
if((state_val_18363 === (7))){
var inst_18358 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18364_18397 = state_18362__$1;
(statearr_18364_18397[(2)] = inst_18358);

(statearr_18364_18397[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (1))){
var inst_18325 = (new Array(n));
var inst_18326 = inst_18325;
var inst_18327 = (0);
var state_18362__$1 = (function (){var statearr_18365 = state_18362;
(statearr_18365[(7)] = inst_18327);

(statearr_18365[(8)] = inst_18326);

return statearr_18365;
})();
var statearr_18366_18398 = state_18362__$1;
(statearr_18366_18398[(2)] = null);

(statearr_18366_18398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (4))){
var inst_18330 = (state_18362[(9)]);
var inst_18330__$1 = (state_18362[(2)]);
var inst_18331 = (inst_18330__$1 == null);
var inst_18332 = cljs.core.not(inst_18331);
var state_18362__$1 = (function (){var statearr_18367 = state_18362;
(statearr_18367[(9)] = inst_18330__$1);

return statearr_18367;
})();
if(inst_18332){
var statearr_18368_18399 = state_18362__$1;
(statearr_18368_18399[(1)] = (5));

} else {
var statearr_18369_18400 = state_18362__$1;
(statearr_18369_18400[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (15))){
var inst_18352 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18370_18401 = state_18362__$1;
(statearr_18370_18401[(2)] = inst_18352);

(statearr_18370_18401[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (13))){
var state_18362__$1 = state_18362;
var statearr_18371_18402 = state_18362__$1;
(statearr_18371_18402[(2)] = null);

(statearr_18371_18402[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (6))){
var inst_18327 = (state_18362[(7)]);
var inst_18348 = (inst_18327 > (0));
var state_18362__$1 = state_18362;
if(cljs.core.truth_(inst_18348)){
var statearr_18372_18403 = state_18362__$1;
(statearr_18372_18403[(1)] = (12));

} else {
var statearr_18373_18404 = state_18362__$1;
(statearr_18373_18404[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (3))){
var inst_18360 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18362__$1,inst_18360);
} else {
if((state_val_18363 === (12))){
var inst_18326 = (state_18362[(8)]);
var inst_18350 = cljs.core.vec(inst_18326);
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18362__$1,(15),out,inst_18350);
} else {
if((state_val_18363 === (2))){
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18362__$1,(4),ch);
} else {
if((state_val_18363 === (11))){
var inst_18342 = (state_18362[(2)]);
var inst_18343 = (new Array(n));
var inst_18326 = inst_18343;
var inst_18327 = (0);
var state_18362__$1 = (function (){var statearr_18374 = state_18362;
(statearr_18374[(7)] = inst_18327);

(statearr_18374[(10)] = inst_18342);

(statearr_18374[(8)] = inst_18326);

return statearr_18374;
})();
var statearr_18375_18405 = state_18362__$1;
(statearr_18375_18405[(2)] = null);

(statearr_18375_18405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (9))){
var inst_18326 = (state_18362[(8)]);
var inst_18340 = cljs.core.vec(inst_18326);
var state_18362__$1 = state_18362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18362__$1,(11),out,inst_18340);
} else {
if((state_val_18363 === (5))){
var inst_18327 = (state_18362[(7)]);
var inst_18335 = (state_18362[(11)]);
var inst_18330 = (state_18362[(9)]);
var inst_18326 = (state_18362[(8)]);
var inst_18334 = (inst_18326[inst_18327] = inst_18330);
var inst_18335__$1 = (inst_18327 + (1));
var inst_18336 = (inst_18335__$1 < n);
var state_18362__$1 = (function (){var statearr_18376 = state_18362;
(statearr_18376[(11)] = inst_18335__$1);

(statearr_18376[(12)] = inst_18334);

return statearr_18376;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18377_18406 = state_18362__$1;
(statearr_18377_18406[(1)] = (8));

} else {
var statearr_18378_18407 = state_18362__$1;
(statearr_18378_18407[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (14))){
var inst_18355 = (state_18362[(2)]);
var inst_18356 = cljs.core.async.close_BANG_(out);
var state_18362__$1 = (function (){var statearr_18380 = state_18362;
(statearr_18380[(13)] = inst_18355);

return statearr_18380;
})();
var statearr_18381_18408 = state_18362__$1;
(statearr_18381_18408[(2)] = inst_18356);

(statearr_18381_18408[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (10))){
var inst_18346 = (state_18362[(2)]);
var state_18362__$1 = state_18362;
var statearr_18382_18409 = state_18362__$1;
(statearr_18382_18409[(2)] = inst_18346);

(statearr_18382_18409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18363 === (8))){
var inst_18335 = (state_18362[(11)]);
var inst_18326 = (state_18362[(8)]);
var tmp18379 = inst_18326;
var inst_18326__$1 = tmp18379;
var inst_18327 = inst_18335;
var state_18362__$1 = (function (){var statearr_18383 = state_18362;
(statearr_18383[(7)] = inst_18327);

(statearr_18383[(8)] = inst_18326__$1);

return statearr_18383;
})();
var statearr_18384_18410 = state_18362__$1;
(statearr_18384_18410[(2)] = null);

(statearr_18384_18410[(1)] = (2));


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
});})(c__15685__auto___18396,out))
;
return ((function (switch__15561__auto__,c__15685__auto___18396,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_18388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18388[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_18388[(1)] = (1));

return statearr_18388;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_18362){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_18362);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e18389){if((e18389 instanceof Object)){
var ex__15565__auto__ = e18389;
var statearr_18390_18411 = state_18362;
(statearr_18390_18411[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18362);

return cljs.core.cst$kw$recur;
} else {
throw e18389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__18412 = state_18362;
state_18362 = G__18412;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_18362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_18362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___18396,out))
})();
var state__15687__auto__ = (function (){var statearr_18391 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_18391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___18396);

return statearr_18391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___18396,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18413 = [];
var len__7484__auto___18487 = arguments.length;
var i__7485__auto___18488 = (0);
while(true){
if((i__7485__auto___18488 < len__7484__auto___18487)){
args18413.push((arguments[i__7485__auto___18488]));

var G__18489 = (i__7485__auto___18488 + (1));
i__7485__auto___18488 = G__18489;
continue;
} else {
}
break;
}

var G__18415 = args18413.length;
switch (G__18415) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18413.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15685__auto___18491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15685__auto___18491,out){
return (function (){
var f__15686__auto__ = (function (){var switch__15561__auto__ = ((function (c__15685__auto___18491,out){
return (function (state_18457){
var state_val_18458 = (state_18457[(1)]);
if((state_val_18458 === (7))){
var inst_18453 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18459_18492 = state_18457__$1;
(statearr_18459_18492[(2)] = inst_18453);

(statearr_18459_18492[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (1))){
var inst_18416 = [];
var inst_18417 = inst_18416;
var inst_18418 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18457__$1 = (function (){var statearr_18460 = state_18457;
(statearr_18460[(7)] = inst_18417);

(statearr_18460[(8)] = inst_18418);

return statearr_18460;
})();
var statearr_18461_18493 = state_18457__$1;
(statearr_18461_18493[(2)] = null);

(statearr_18461_18493[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (4))){
var inst_18421 = (state_18457[(9)]);
var inst_18421__$1 = (state_18457[(2)]);
var inst_18422 = (inst_18421__$1 == null);
var inst_18423 = cljs.core.not(inst_18422);
var state_18457__$1 = (function (){var statearr_18462 = state_18457;
(statearr_18462[(9)] = inst_18421__$1);

return statearr_18462;
})();
if(inst_18423){
var statearr_18463_18494 = state_18457__$1;
(statearr_18463_18494[(1)] = (5));

} else {
var statearr_18464_18495 = state_18457__$1;
(statearr_18464_18495[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (15))){
var inst_18447 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18465_18496 = state_18457__$1;
(statearr_18465_18496[(2)] = inst_18447);

(statearr_18465_18496[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (13))){
var state_18457__$1 = state_18457;
var statearr_18466_18497 = state_18457__$1;
(statearr_18466_18497[(2)] = null);

(statearr_18466_18497[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (6))){
var inst_18417 = (state_18457[(7)]);
var inst_18442 = inst_18417.length;
var inst_18443 = (inst_18442 > (0));
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18443)){
var statearr_18467_18498 = state_18457__$1;
(statearr_18467_18498[(1)] = (12));

} else {
var statearr_18468_18499 = state_18457__$1;
(statearr_18468_18499[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (3))){
var inst_18455 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18457__$1,inst_18455);
} else {
if((state_val_18458 === (12))){
var inst_18417 = (state_18457[(7)]);
var inst_18445 = cljs.core.vec(inst_18417);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18457__$1,(15),out,inst_18445);
} else {
if((state_val_18458 === (2))){
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18457__$1,(4),ch);
} else {
if((state_val_18458 === (11))){
var inst_18425 = (state_18457[(10)]);
var inst_18421 = (state_18457[(9)]);
var inst_18435 = (state_18457[(2)]);
var inst_18436 = [];
var inst_18437 = inst_18436.push(inst_18421);
var inst_18417 = inst_18436;
var inst_18418 = inst_18425;
var state_18457__$1 = (function (){var statearr_18469 = state_18457;
(statearr_18469[(7)] = inst_18417);

(statearr_18469[(11)] = inst_18435);

(statearr_18469[(8)] = inst_18418);

(statearr_18469[(12)] = inst_18437);

return statearr_18469;
})();
var statearr_18470_18500 = state_18457__$1;
(statearr_18470_18500[(2)] = null);

(statearr_18470_18500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (9))){
var inst_18417 = (state_18457[(7)]);
var inst_18433 = cljs.core.vec(inst_18417);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18457__$1,(11),out,inst_18433);
} else {
if((state_val_18458 === (5))){
var inst_18425 = (state_18457[(10)]);
var inst_18421 = (state_18457[(9)]);
var inst_18418 = (state_18457[(8)]);
var inst_18425__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18421) : f.call(null,inst_18421));
var inst_18426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18425__$1,inst_18418);
var inst_18427 = cljs.core.keyword_identical_QMARK_(inst_18418,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18428 = (inst_18426) || (inst_18427);
var state_18457__$1 = (function (){var statearr_18471 = state_18457;
(statearr_18471[(10)] = inst_18425__$1);

return statearr_18471;
})();
if(cljs.core.truth_(inst_18428)){
var statearr_18472_18501 = state_18457__$1;
(statearr_18472_18501[(1)] = (8));

} else {
var statearr_18473_18502 = state_18457__$1;
(statearr_18473_18502[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (14))){
var inst_18450 = (state_18457[(2)]);
var inst_18451 = cljs.core.async.close_BANG_(out);
var state_18457__$1 = (function (){var statearr_18475 = state_18457;
(statearr_18475[(13)] = inst_18450);

return statearr_18475;
})();
var statearr_18476_18503 = state_18457__$1;
(statearr_18476_18503[(2)] = inst_18451);

(statearr_18476_18503[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (10))){
var inst_18440 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18477_18504 = state_18457__$1;
(statearr_18477_18504[(2)] = inst_18440);

(statearr_18477_18504[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18458 === (8))){
var inst_18425 = (state_18457[(10)]);
var inst_18417 = (state_18457[(7)]);
var inst_18421 = (state_18457[(9)]);
var inst_18430 = inst_18417.push(inst_18421);
var tmp18474 = inst_18417;
var inst_18417__$1 = tmp18474;
var inst_18418 = inst_18425;
var state_18457__$1 = (function (){var statearr_18478 = state_18457;
(statearr_18478[(14)] = inst_18430);

(statearr_18478[(7)] = inst_18417__$1);

(statearr_18478[(8)] = inst_18418);

return statearr_18478;
})();
var statearr_18479_18505 = state_18457__$1;
(statearr_18479_18505[(2)] = null);

(statearr_18479_18505[(1)] = (2));


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
});})(c__15685__auto___18491,out))
;
return ((function (switch__15561__auto__,c__15685__auto___18491,out){
return (function() {
var cljs$core$async$state_machine__15562__auto__ = null;
var cljs$core$async$state_machine__15562__auto____0 = (function (){
var statearr_18483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18483[(0)] = cljs$core$async$state_machine__15562__auto__);

(statearr_18483[(1)] = (1));

return statearr_18483;
});
var cljs$core$async$state_machine__15562__auto____1 = (function (state_18457){
while(true){
var ret_value__15563__auto__ = (function (){try{while(true){
var result__15564__auto__ = switch__15561__auto__(state_18457);
if(cljs.core.keyword_identical_QMARK_(result__15564__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15564__auto__;
}
break;
}
}catch (e18484){if((e18484 instanceof Object)){
var ex__15565__auto__ = e18484;
var statearr_18485_18506 = state_18457;
(statearr_18485_18506[(5)] = ex__15565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18457);

return cljs.core.cst$kw$recur;
} else {
throw e18484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15563__auto__,cljs.core.cst$kw$recur)){
var G__18507 = state_18457;
state_18457 = G__18507;
continue;
} else {
return ret_value__15563__auto__;
}
break;
}
});
cljs$core$async$state_machine__15562__auto__ = function(state_18457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15562__auto____1.call(this,state_18457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15562__auto____0;
cljs$core$async$state_machine__15562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15562__auto____1;
return cljs$core$async$state_machine__15562__auto__;
})()
;})(switch__15561__auto__,c__15685__auto___18491,out))
})();
var state__15687__auto__ = (function (){var statearr_18486 = (f__15686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15686__auto__.cljs$core$IFn$_invoke$arity$0() : f__15686__auto__.call(null));
(statearr_18486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15685__auto___18491);

return statearr_18486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15687__auto__);
});})(c__15685__auto___18491,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

