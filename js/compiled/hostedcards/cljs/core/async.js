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
var args15727 = [];
var len__7481__auto___15733 = arguments.length;
var i__7482__auto___15734 = (0);
while(true){
if((i__7482__auto___15734 < len__7481__auto___15733)){
args15727.push((arguments[i__7482__auto___15734]));

var G__15735 = (i__7482__auto___15734 + (1));
i__7482__auto___15734 = G__15735;
continue;
} else {
}
break;
}

var G__15729 = args15727.length;
switch (G__15729) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15727.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15730 = (function (f,blockable,meta15731){
this.f = f;
this.blockable = blockable;
this.meta15731 = meta15731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15732,meta15731__$1){
var self__ = this;
var _15732__$1 = this;
return (new cljs.core.async.t_cljs$core$async15730(self__.f,self__.blockable,meta15731__$1));
});

cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15732){
var self__ = this;
var _15732__$1 = this;
return self__.meta15731;
});

cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15731], null);
});

cljs.core.async.t_cljs$core$async15730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15730";

cljs.core.async.t_cljs$core$async15730.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async15730");
});

cljs.core.async.__GT_t_cljs$core$async15730 = (function cljs$core$async$__GT_t_cljs$core$async15730(f__$1,blockable__$1,meta15731){
return (new cljs.core.async.t_cljs$core$async15730(f__$1,blockable__$1,meta15731));
});

}

return (new cljs.core.async.t_cljs$core$async15730(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15739 = [];
var len__7481__auto___15742 = arguments.length;
var i__7482__auto___15743 = (0);
while(true){
if((i__7482__auto___15743 < len__7481__auto___15742)){
args15739.push((arguments[i__7482__auto___15743]));

var G__15744 = (i__7482__auto___15743 + (1));
i__7482__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var G__15741 = args15739.length;
switch (G__15741) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15739.length)].join('')));

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
var args15746 = [];
var len__7481__auto___15749 = arguments.length;
var i__7482__auto___15750 = (0);
while(true){
if((i__7482__auto___15750 < len__7481__auto___15749)){
args15746.push((arguments[i__7482__auto___15750]));

var G__15751 = (i__7482__auto___15750 + (1));
i__7482__auto___15750 = G__15751;
continue;
} else {
}
break;
}

var G__15748 = args15746.length;
switch (G__15748) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15746.length)].join('')));

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
var args15753 = [];
var len__7481__auto___15756 = arguments.length;
var i__7482__auto___15757 = (0);
while(true){
if((i__7482__auto___15757 < len__7481__auto___15756)){
args15753.push((arguments[i__7482__auto___15757]));

var G__15758 = (i__7482__auto___15757 + (1));
i__7482__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var G__15755 = args15753.length;
switch (G__15755) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15753.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15760 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15760) : fn1.call(null,val_15760));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15760,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15760) : fn1.call(null,val_15760));
});})(val_15760,ret))
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
var args15761 = [];
var len__7481__auto___15764 = arguments.length;
var i__7482__auto___15765 = (0);
while(true){
if((i__7482__auto___15765 < len__7481__auto___15764)){
args15761.push((arguments[i__7482__auto___15765]));

var G__15766 = (i__7482__auto___15765 + (1));
i__7482__auto___15765 = G__15766;
continue;
} else {
}
break;
}

var G__15763 = args15761.length;
switch (G__15763) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15761.length)].join('')));

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
var n__7321__auto___15768 = n;
var x_15769 = (0);
while(true){
if((x_15769 < n__7321__auto___15768)){
(a[x_15769] = (0));

var G__15770 = (x_15769 + (1));
x_15769 = G__15770;
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

var G__15771 = (i + (1));
i = G__15771;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15775 = (function (alt_flag,flag,meta15776){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15776 = meta15776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15777,meta15776__$1){
var self__ = this;
var _15777__$1 = this;
return (new cljs.core.async.t_cljs$core$async15775(self__.alt_flag,self__.flag,meta15776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15777){
var self__ = this;
var _15777__$1 = this;
return self__.meta15776;
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15776], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15775";

cljs.core.async.t_cljs$core$async15775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async15775");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15775(alt_flag__$1,flag__$1,meta15776){
return (new cljs.core.async.t_cljs$core$async15775(alt_flag__$1,flag__$1,meta15776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15775(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15781 = (function (alt_handler,flag,cb,meta15782){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15782 = meta15782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15783,meta15782__$1){
var self__ = this;
var _15783__$1 = this;
return (new cljs.core.async.t_cljs$core$async15781(self__.alt_handler,self__.flag,self__.cb,meta15782__$1));
});

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15783){
var self__ = this;
var _15783__$1 = this;
return self__.meta15782;
});

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15782], null);
});

cljs.core.async.t_cljs$core$async15781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15781";

cljs.core.async.t_cljs$core$async15781.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async15781");
});

cljs.core.async.__GT_t_cljs$core$async15781 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15781(alt_handler__$1,flag__$1,cb__$1,meta15782){
return (new cljs.core.async.t_cljs$core$async15781(alt_handler__$1,flag__$1,cb__$1,meta15782));
});

}

return (new cljs.core.async.t_cljs$core$async15781(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15784_SHARP_){
var G__15788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15784_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15788) : fret.call(null,G__15788));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15785_SHARP_){
var G__15789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15785_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15789) : fret.call(null,G__15789));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6406__auto__ = wport;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15790 = (i + (1));
i = G__15790;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6406__auto__ = ret;
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6394__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6394__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6394__auto__;
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
var args__7488__auto__ = [];
var len__7481__auto___15796 = arguments.length;
var i__7482__auto___15797 = (0);
while(true){
if((i__7482__auto___15797 < len__7481__auto___15796)){
args__7488__auto__.push((arguments[i__7482__auto___15797]));

var G__15798 = (i__7482__auto___15797 + (1));
i__7482__auto___15797 = G__15798;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((1) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7489__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15793){
var map__15794 = p__15793;
var map__15794__$1 = ((((!((map__15794 == null)))?((((map__15794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15794):map__15794);
var opts = map__15794__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15791){
var G__15792 = cljs.core.first(seq15791);
var seq15791__$1 = cljs.core.next(seq15791);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15792,seq15791__$1);
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
var args15799 = [];
var len__7481__auto___15849 = arguments.length;
var i__7482__auto___15850 = (0);
while(true){
if((i__7482__auto___15850 < len__7481__auto___15849)){
args15799.push((arguments[i__7482__auto___15850]));

var G__15851 = (i__7482__auto___15850 + (1));
i__7482__auto___15850 = G__15851;
continue;
} else {
}
break;
}

var G__15801 = args15799.length;
switch (G__15801) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15799.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15682__auto___15853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___15853){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___15853){
return (function (state_15825){
var state_val_15826 = (state_15825[(1)]);
if((state_val_15826 === (7))){
var inst_15821 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15827_15854 = state_15825__$1;
(statearr_15827_15854[(2)] = inst_15821);

(statearr_15827_15854[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (1))){
var state_15825__$1 = state_15825;
var statearr_15828_15855 = state_15825__$1;
(statearr_15828_15855[(2)] = null);

(statearr_15828_15855[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (4))){
var inst_15804 = (state_15825[(7)]);
var inst_15804__$1 = (state_15825[(2)]);
var inst_15805 = (inst_15804__$1 == null);
var state_15825__$1 = (function (){var statearr_15829 = state_15825;
(statearr_15829[(7)] = inst_15804__$1);

return statearr_15829;
})();
if(cljs.core.truth_(inst_15805)){
var statearr_15830_15856 = state_15825__$1;
(statearr_15830_15856[(1)] = (5));

} else {
var statearr_15831_15857 = state_15825__$1;
(statearr_15831_15857[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (13))){
var state_15825__$1 = state_15825;
var statearr_15832_15858 = state_15825__$1;
(statearr_15832_15858[(2)] = null);

(statearr_15832_15858[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (6))){
var inst_15804 = (state_15825[(7)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15825__$1,(11),to,inst_15804);
} else {
if((state_val_15826 === (3))){
var inst_15823 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15825__$1,inst_15823);
} else {
if((state_val_15826 === (12))){
var state_15825__$1 = state_15825;
var statearr_15833_15859 = state_15825__$1;
(statearr_15833_15859[(2)] = null);

(statearr_15833_15859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (2))){
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15825__$1,(4),from);
} else {
if((state_val_15826 === (11))){
var inst_15814 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15814)){
var statearr_15834_15860 = state_15825__$1;
(statearr_15834_15860[(1)] = (12));

} else {
var statearr_15835_15861 = state_15825__$1;
(statearr_15835_15861[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (9))){
var state_15825__$1 = state_15825;
var statearr_15836_15862 = state_15825__$1;
(statearr_15836_15862[(2)] = null);

(statearr_15836_15862[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (5))){
var state_15825__$1 = state_15825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15837_15863 = state_15825__$1;
(statearr_15837_15863[(1)] = (8));

} else {
var statearr_15838_15864 = state_15825__$1;
(statearr_15838_15864[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (14))){
var inst_15819 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15839_15865 = state_15825__$1;
(statearr_15839_15865[(2)] = inst_15819);

(statearr_15839_15865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (10))){
var inst_15811 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15840_15866 = state_15825__$1;
(statearr_15840_15866[(2)] = inst_15811);

(statearr_15840_15866[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15826 === (8))){
var inst_15808 = cljs.core.async.close_BANG_(to);
var state_15825__$1 = state_15825;
var statearr_15841_15867 = state_15825__$1;
(statearr_15841_15867[(2)] = inst_15808);

(statearr_15841_15867[(1)] = (10));


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
});})(c__15682__auto___15853))
;
return ((function (switch__15558__auto__,c__15682__auto___15853){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_15845 = [null,null,null,null,null,null,null,null];
(statearr_15845[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_15845[(1)] = (1));

return statearr_15845;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_15825){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_15825);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e15846){if((e15846 instanceof Object)){
var ex__15562__auto__ = e15846;
var statearr_15847_15868 = state_15825;
(statearr_15847_15868[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15825);

return cljs.core.cst$kw$recur;
} else {
throw e15846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__15869 = state_15825;
state_15825 = G__15869;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___15853))
})();
var state__15684__auto__ = (function (){var statearr_15848 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_15848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___15853);

return statearr_15848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___15853))
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
return (function (p__16057){
var vec__16058 = p__16057;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(1),null);
var job = vec__16058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15682__auto___16244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results){
return (function (state_16065){
var state_val_16066 = (state_16065[(1)]);
if((state_val_16066 === (1))){
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16065__$1,(2),res,v);
} else {
if((state_val_16066 === (2))){
var inst_16062 = (state_16065[(2)]);
var inst_16063 = cljs.core.async.close_BANG_(res);
var state_16065__$1 = (function (){var statearr_16067 = state_16065;
(statearr_16067[(7)] = inst_16062);

return statearr_16067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16065__$1,inst_16063);
} else {
return null;
}
}
});})(c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results))
;
return ((function (switch__15558__auto__,c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_16071 = [null,null,null,null,null,null,null,null];
(statearr_16071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__);

(statearr_16071[(1)] = (1));

return statearr_16071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1 = (function (state_16065){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16065);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16072){if((e16072 instanceof Object)){
var ex__15562__auto__ = e16072;
var statearr_16073_16245 = state_16065;
(statearr_16073_16245[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16065);

return cljs.core.cst$kw$recur;
} else {
throw e16072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16246 = state_16065;
state_16065 = G__16246;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = function(state_16065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1.call(this,state_16065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results))
})();
var state__15684__auto__ = (function (){var statearr_16074 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___16244);

return statearr_16074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___16244,res,vec__16058,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16075){
var vec__16076 = p__16075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076,(1),null);
var job = vec__16076;
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
var n__7321__auto___16247 = n;
var __16248 = (0);
while(true){
if((__16248 < n__7321__auto___16247)){
var G__16079_16249 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16079_16249) {
case "compute":
var c__15682__auto___16251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16248,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (__16248,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function (state_16092){
var state_val_16093 = (state_16092[(1)]);
if((state_val_16093 === (1))){
var state_16092__$1 = state_16092;
var statearr_16094_16252 = state_16092__$1;
(statearr_16094_16252[(2)] = null);

(statearr_16094_16252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16093 === (2))){
var state_16092__$1 = state_16092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16092__$1,(4),jobs);
} else {
if((state_val_16093 === (3))){
var inst_16090 = (state_16092[(2)]);
var state_16092__$1 = state_16092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16092__$1,inst_16090);
} else {
if((state_val_16093 === (4))){
var inst_16082 = (state_16092[(2)]);
var inst_16083 = process(inst_16082);
var state_16092__$1 = state_16092;
if(cljs.core.truth_(inst_16083)){
var statearr_16095_16253 = state_16092__$1;
(statearr_16095_16253[(1)] = (5));

} else {
var statearr_16096_16254 = state_16092__$1;
(statearr_16096_16254[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16093 === (5))){
var state_16092__$1 = state_16092;
var statearr_16097_16255 = state_16092__$1;
(statearr_16097_16255[(2)] = null);

(statearr_16097_16255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16093 === (6))){
var state_16092__$1 = state_16092;
var statearr_16098_16256 = state_16092__$1;
(statearr_16098_16256[(2)] = null);

(statearr_16098_16256[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16093 === (7))){
var inst_16088 = (state_16092[(2)]);
var state_16092__$1 = state_16092;
var statearr_16099_16257 = state_16092__$1;
(statearr_16099_16257[(2)] = inst_16088);

(statearr_16099_16257[(1)] = (3));


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
});})(__16248,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
;
return ((function (__16248,switch__15558__auto__,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_16103 = [null,null,null,null,null,null,null];
(statearr_16103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__);

(statearr_16103[(1)] = (1));

return statearr_16103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1 = (function (state_16092){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16092);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16104){if((e16104 instanceof Object)){
var ex__15562__auto__ = e16104;
var statearr_16105_16258 = state_16092;
(statearr_16105_16258[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16092);

return cljs.core.cst$kw$recur;
} else {
throw e16104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16259 = state_16092;
state_16092 = G__16259;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = function(state_16092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1.call(this,state_16092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__;
})()
;})(__16248,switch__15558__auto__,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
})();
var state__15684__auto__ = (function (){var statearr_16106 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___16251);

return statearr_16106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(__16248,c__15682__auto___16251,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
);


break;
case "async":
var c__15682__auto___16260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16248,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (__16248,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function (state_16119){
var state_val_16120 = (state_16119[(1)]);
if((state_val_16120 === (1))){
var state_16119__$1 = state_16119;
var statearr_16121_16261 = state_16119__$1;
(statearr_16121_16261[(2)] = null);

(statearr_16121_16261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16120 === (2))){
var state_16119__$1 = state_16119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16119__$1,(4),jobs);
} else {
if((state_val_16120 === (3))){
var inst_16117 = (state_16119[(2)]);
var state_16119__$1 = state_16119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16119__$1,inst_16117);
} else {
if((state_val_16120 === (4))){
var inst_16109 = (state_16119[(2)]);
var inst_16110 = async(inst_16109);
var state_16119__$1 = state_16119;
if(cljs.core.truth_(inst_16110)){
var statearr_16122_16262 = state_16119__$1;
(statearr_16122_16262[(1)] = (5));

} else {
var statearr_16123_16263 = state_16119__$1;
(statearr_16123_16263[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16120 === (5))){
var state_16119__$1 = state_16119;
var statearr_16124_16264 = state_16119__$1;
(statearr_16124_16264[(2)] = null);

(statearr_16124_16264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16120 === (6))){
var state_16119__$1 = state_16119;
var statearr_16125_16265 = state_16119__$1;
(statearr_16125_16265[(2)] = null);

(statearr_16125_16265[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16120 === (7))){
var inst_16115 = (state_16119[(2)]);
var state_16119__$1 = state_16119;
var statearr_16126_16266 = state_16119__$1;
(statearr_16126_16266[(2)] = inst_16115);

(statearr_16126_16266[(1)] = (3));


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
});})(__16248,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
;
return ((function (__16248,switch__15558__auto__,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_16130 = [null,null,null,null,null,null,null];
(statearr_16130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__);

(statearr_16130[(1)] = (1));

return statearr_16130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1 = (function (state_16119){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16119);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16131){if((e16131 instanceof Object)){
var ex__15562__auto__ = e16131;
var statearr_16132_16267 = state_16119;
(statearr_16132_16267[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16119);

return cljs.core.cst$kw$recur;
} else {
throw e16131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16268 = state_16119;
state_16119 = G__16268;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__;
})()
;})(__16248,switch__15558__auto__,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
})();
var state__15684__auto__ = (function (){var statearr_16133 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___16260);

return statearr_16133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(__16248,c__15682__auto___16260,G__16079_16249,n__7321__auto___16247,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16269 = (__16248 + (1));
__16248 = G__16269;
continue;
} else {
}
break;
}

var c__15682__auto___16270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___16270,jobs,results,process,async){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___16270,jobs,results,process,async){
return (function (state_16155){
var state_val_16156 = (state_16155[(1)]);
if((state_val_16156 === (1))){
var state_16155__$1 = state_16155;
var statearr_16157_16271 = state_16155__$1;
(statearr_16157_16271[(2)] = null);

(statearr_16157_16271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16156 === (2))){
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16155__$1,(4),from);
} else {
if((state_val_16156 === (3))){
var inst_16153 = (state_16155[(2)]);
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16155__$1,inst_16153);
} else {
if((state_val_16156 === (4))){
var inst_16136 = (state_16155[(7)]);
var inst_16136__$1 = (state_16155[(2)]);
var inst_16137 = (inst_16136__$1 == null);
var state_16155__$1 = (function (){var statearr_16158 = state_16155;
(statearr_16158[(7)] = inst_16136__$1);

return statearr_16158;
})();
if(cljs.core.truth_(inst_16137)){
var statearr_16159_16272 = state_16155__$1;
(statearr_16159_16272[(1)] = (5));

} else {
var statearr_16160_16273 = state_16155__$1;
(statearr_16160_16273[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16156 === (5))){
var inst_16139 = cljs.core.async.close_BANG_(jobs);
var state_16155__$1 = state_16155;
var statearr_16161_16274 = state_16155__$1;
(statearr_16161_16274[(2)] = inst_16139);

(statearr_16161_16274[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16156 === (6))){
var inst_16136 = (state_16155[(7)]);
var inst_16141 = (state_16155[(8)]);
var inst_16141__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16143 = [inst_16136,inst_16141__$1];
var inst_16144 = (new cljs.core.PersistentVector(null,2,(5),inst_16142,inst_16143,null));
var state_16155__$1 = (function (){var statearr_16162 = state_16155;
(statearr_16162[(8)] = inst_16141__$1);

return statearr_16162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16155__$1,(8),jobs,inst_16144);
} else {
if((state_val_16156 === (7))){
var inst_16151 = (state_16155[(2)]);
var state_16155__$1 = state_16155;
var statearr_16163_16275 = state_16155__$1;
(statearr_16163_16275[(2)] = inst_16151);

(statearr_16163_16275[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16156 === (8))){
var inst_16141 = (state_16155[(8)]);
var inst_16146 = (state_16155[(2)]);
var state_16155__$1 = (function (){var statearr_16164 = state_16155;
(statearr_16164[(9)] = inst_16146);

return statearr_16164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16155__$1,(9),results,inst_16141);
} else {
if((state_val_16156 === (9))){
var inst_16148 = (state_16155[(2)]);
var state_16155__$1 = (function (){var statearr_16165 = state_16155;
(statearr_16165[(10)] = inst_16148);

return statearr_16165;
})();
var statearr_16166_16276 = state_16155__$1;
(statearr_16166_16276[(2)] = null);

(statearr_16166_16276[(1)] = (2));


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
});})(c__15682__auto___16270,jobs,results,process,async))
;
return ((function (switch__15558__auto__,c__15682__auto___16270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_16170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__);

(statearr_16170[(1)] = (1));

return statearr_16170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1 = (function (state_16155){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16155);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16171){if((e16171 instanceof Object)){
var ex__15562__auto__ = e16171;
var statearr_16172_16277 = state_16155;
(statearr_16172_16277[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16155);

return cljs.core.cst$kw$recur;
} else {
throw e16171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16278 = state_16155;
state_16155 = G__16278;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = function(state_16155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1.call(this,state_16155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___16270,jobs,results,process,async))
})();
var state__15684__auto__ = (function (){var statearr_16173 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___16270);

return statearr_16173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___16270,jobs,results,process,async))
);


var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__,jobs,results,process,async){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__,jobs,results,process,async){
return (function (state_16211){
var state_val_16212 = (state_16211[(1)]);
if((state_val_16212 === (7))){
var inst_16207 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16213_16279 = state_16211__$1;
(statearr_16213_16279[(2)] = inst_16207);

(statearr_16213_16279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (20))){
var state_16211__$1 = state_16211;
var statearr_16214_16280 = state_16211__$1;
(statearr_16214_16280[(2)] = null);

(statearr_16214_16280[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (1))){
var state_16211__$1 = state_16211;
var statearr_16215_16281 = state_16211__$1;
(statearr_16215_16281[(2)] = null);

(statearr_16215_16281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (4))){
var inst_16176 = (state_16211[(7)]);
var inst_16176__$1 = (state_16211[(2)]);
var inst_16177 = (inst_16176__$1 == null);
var state_16211__$1 = (function (){var statearr_16216 = state_16211;
(statearr_16216[(7)] = inst_16176__$1);

return statearr_16216;
})();
if(cljs.core.truth_(inst_16177)){
var statearr_16217_16282 = state_16211__$1;
(statearr_16217_16282[(1)] = (5));

} else {
var statearr_16218_16283 = state_16211__$1;
(statearr_16218_16283[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (15))){
var inst_16189 = (state_16211[(8)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16211__$1,(18),to,inst_16189);
} else {
if((state_val_16212 === (21))){
var inst_16202 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16219_16284 = state_16211__$1;
(statearr_16219_16284[(2)] = inst_16202);

(statearr_16219_16284[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (13))){
var inst_16204 = (state_16211[(2)]);
var state_16211__$1 = (function (){var statearr_16220 = state_16211;
(statearr_16220[(9)] = inst_16204);

return statearr_16220;
})();
var statearr_16221_16285 = state_16211__$1;
(statearr_16221_16285[(2)] = null);

(statearr_16221_16285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (6))){
var inst_16176 = (state_16211[(7)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16211__$1,(11),inst_16176);
} else {
if((state_val_16212 === (17))){
var inst_16197 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
if(cljs.core.truth_(inst_16197)){
var statearr_16222_16286 = state_16211__$1;
(statearr_16222_16286[(1)] = (19));

} else {
var statearr_16223_16287 = state_16211__$1;
(statearr_16223_16287[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (3))){
var inst_16209 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16211__$1,inst_16209);
} else {
if((state_val_16212 === (12))){
var inst_16186 = (state_16211[(10)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16211__$1,(14),inst_16186);
} else {
if((state_val_16212 === (2))){
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16211__$1,(4),results);
} else {
if((state_val_16212 === (19))){
var state_16211__$1 = state_16211;
var statearr_16224_16288 = state_16211__$1;
(statearr_16224_16288[(2)] = null);

(statearr_16224_16288[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (11))){
var inst_16186 = (state_16211[(2)]);
var state_16211__$1 = (function (){var statearr_16225 = state_16211;
(statearr_16225[(10)] = inst_16186);

return statearr_16225;
})();
var statearr_16226_16289 = state_16211__$1;
(statearr_16226_16289[(2)] = null);

(statearr_16226_16289[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (9))){
var state_16211__$1 = state_16211;
var statearr_16227_16290 = state_16211__$1;
(statearr_16227_16290[(2)] = null);

(statearr_16227_16290[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (5))){
var state_16211__$1 = state_16211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16228_16291 = state_16211__$1;
(statearr_16228_16291[(1)] = (8));

} else {
var statearr_16229_16292 = state_16211__$1;
(statearr_16229_16292[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (14))){
var inst_16191 = (state_16211[(11)]);
var inst_16189 = (state_16211[(8)]);
var inst_16189__$1 = (state_16211[(2)]);
var inst_16190 = (inst_16189__$1 == null);
var inst_16191__$1 = cljs.core.not(inst_16190);
var state_16211__$1 = (function (){var statearr_16230 = state_16211;
(statearr_16230[(11)] = inst_16191__$1);

(statearr_16230[(8)] = inst_16189__$1);

return statearr_16230;
})();
if(inst_16191__$1){
var statearr_16231_16293 = state_16211__$1;
(statearr_16231_16293[(1)] = (15));

} else {
var statearr_16232_16294 = state_16211__$1;
(statearr_16232_16294[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (16))){
var inst_16191 = (state_16211[(11)]);
var state_16211__$1 = state_16211;
var statearr_16233_16295 = state_16211__$1;
(statearr_16233_16295[(2)] = inst_16191);

(statearr_16233_16295[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (10))){
var inst_16183 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16234_16296 = state_16211__$1;
(statearr_16234_16296[(2)] = inst_16183);

(statearr_16234_16296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (18))){
var inst_16194 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16235_16297 = state_16211__$1;
(statearr_16235_16297[(2)] = inst_16194);

(statearr_16235_16297[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16212 === (8))){
var inst_16180 = cljs.core.async.close_BANG_(to);
var state_16211__$1 = state_16211;
var statearr_16236_16298 = state_16211__$1;
(statearr_16236_16298[(2)] = inst_16180);

(statearr_16236_16298[(1)] = (10));


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
});})(c__15682__auto__,jobs,results,process,async))
;
return ((function (switch__15558__auto__,c__15682__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_16240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__);

(statearr_16240[(1)] = (1));

return statearr_16240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1 = (function (state_16211){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16211);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16241){if((e16241 instanceof Object)){
var ex__15562__auto__ = e16241;
var statearr_16242_16299 = state_16211;
(statearr_16242_16299[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16211);

return cljs.core.cst$kw$recur;
} else {
throw e16241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16300 = state_16211;
state_16211 = G__16300;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__ = function(state_16211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1.call(this,state_16211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__,jobs,results,process,async))
})();
var state__15684__auto__ = (function (){var statearr_16243 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_16243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__,jobs,results,process,async))
);

return c__15682__auto__;
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
var args16301 = [];
var len__7481__auto___16304 = arguments.length;
var i__7482__auto___16305 = (0);
while(true){
if((i__7482__auto___16305 < len__7481__auto___16304)){
args16301.push((arguments[i__7482__auto___16305]));

var G__16306 = (i__7482__auto___16305 + (1));
i__7482__auto___16305 = G__16306;
continue;
} else {
}
break;
}

var G__16303 = args16301.length;
switch (G__16303) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16301.length)].join('')));

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
var args16308 = [];
var len__7481__auto___16311 = arguments.length;
var i__7482__auto___16312 = (0);
while(true){
if((i__7482__auto___16312 < len__7481__auto___16311)){
args16308.push((arguments[i__7482__auto___16312]));

var G__16313 = (i__7482__auto___16312 + (1));
i__7482__auto___16312 = G__16313;
continue;
} else {
}
break;
}

var G__16310 = args16308.length;
switch (G__16310) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16308.length)].join('')));

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
var args16315 = [];
var len__7481__auto___16368 = arguments.length;
var i__7482__auto___16369 = (0);
while(true){
if((i__7482__auto___16369 < len__7481__auto___16368)){
args16315.push((arguments[i__7482__auto___16369]));

var G__16370 = (i__7482__auto___16369 + (1));
i__7482__auto___16369 = G__16370;
continue;
} else {
}
break;
}

var G__16317 = args16315.length;
switch (G__16317) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16315.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15682__auto___16372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___16372,tc,fc){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___16372,tc,fc){
return (function (state_16343){
var state_val_16344 = (state_16343[(1)]);
if((state_val_16344 === (7))){
var inst_16339 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16345_16373 = state_16343__$1;
(statearr_16345_16373[(2)] = inst_16339);

(statearr_16345_16373[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (1))){
var state_16343__$1 = state_16343;
var statearr_16346_16374 = state_16343__$1;
(statearr_16346_16374[(2)] = null);

(statearr_16346_16374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (4))){
var inst_16320 = (state_16343[(7)]);
var inst_16320__$1 = (state_16343[(2)]);
var inst_16321 = (inst_16320__$1 == null);
var state_16343__$1 = (function (){var statearr_16347 = state_16343;
(statearr_16347[(7)] = inst_16320__$1);

return statearr_16347;
})();
if(cljs.core.truth_(inst_16321)){
var statearr_16348_16375 = state_16343__$1;
(statearr_16348_16375[(1)] = (5));

} else {
var statearr_16349_16376 = state_16343__$1;
(statearr_16349_16376[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (13))){
var state_16343__$1 = state_16343;
var statearr_16350_16377 = state_16343__$1;
(statearr_16350_16377[(2)] = null);

(statearr_16350_16377[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (6))){
var inst_16320 = (state_16343[(7)]);
var inst_16326 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16320) : p.call(null,inst_16320));
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16326)){
var statearr_16351_16378 = state_16343__$1;
(statearr_16351_16378[(1)] = (9));

} else {
var statearr_16352_16379 = state_16343__$1;
(statearr_16352_16379[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (3))){
var inst_16341 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16343__$1,inst_16341);
} else {
if((state_val_16344 === (12))){
var state_16343__$1 = state_16343;
var statearr_16353_16380 = state_16343__$1;
(statearr_16353_16380[(2)] = null);

(statearr_16353_16380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (2))){
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16343__$1,(4),ch);
} else {
if((state_val_16344 === (11))){
var inst_16320 = (state_16343[(7)]);
var inst_16330 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16343__$1,(8),inst_16330,inst_16320);
} else {
if((state_val_16344 === (9))){
var state_16343__$1 = state_16343;
var statearr_16354_16381 = state_16343__$1;
(statearr_16354_16381[(2)] = tc);

(statearr_16354_16381[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (5))){
var inst_16323 = cljs.core.async.close_BANG_(tc);
var inst_16324 = cljs.core.async.close_BANG_(fc);
var state_16343__$1 = (function (){var statearr_16355 = state_16343;
(statearr_16355[(8)] = inst_16323);

return statearr_16355;
})();
var statearr_16356_16382 = state_16343__$1;
(statearr_16356_16382[(2)] = inst_16324);

(statearr_16356_16382[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (14))){
var inst_16337 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16357_16383 = state_16343__$1;
(statearr_16357_16383[(2)] = inst_16337);

(statearr_16357_16383[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (10))){
var state_16343__$1 = state_16343;
var statearr_16358_16384 = state_16343__$1;
(statearr_16358_16384[(2)] = fc);

(statearr_16358_16384[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (8))){
var inst_16332 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16332)){
var statearr_16359_16385 = state_16343__$1;
(statearr_16359_16385[(1)] = (12));

} else {
var statearr_16360_16386 = state_16343__$1;
(statearr_16360_16386[(1)] = (13));

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
});})(c__15682__auto___16372,tc,fc))
;
return ((function (switch__15558__auto__,c__15682__auto___16372,tc,fc){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_16364 = [null,null,null,null,null,null,null,null,null];
(statearr_16364[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_16364[(1)] = (1));

return statearr_16364;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_16343){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16343);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object)){
var ex__15562__auto__ = e16365;
var statearr_16366_16387 = state_16343;
(statearr_16366_16387[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16343);

return cljs.core.cst$kw$recur;
} else {
throw e16365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16388 = state_16343;
state_16343 = G__16388;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_16343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_16343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___16372,tc,fc))
})();
var state__15684__auto__ = (function (){var statearr_16367 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___16372);

return statearr_16367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___16372,tc,fc))
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
var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__){
return (function (state_16452){
var state_val_16453 = (state_16452[(1)]);
if((state_val_16453 === (7))){
var inst_16448 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
var statearr_16454_16475 = state_16452__$1;
(statearr_16454_16475[(2)] = inst_16448);

(statearr_16454_16475[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (1))){
var inst_16432 = init;
var state_16452__$1 = (function (){var statearr_16455 = state_16452;
(statearr_16455[(7)] = inst_16432);

return statearr_16455;
})();
var statearr_16456_16476 = state_16452__$1;
(statearr_16456_16476[(2)] = null);

(statearr_16456_16476[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (4))){
var inst_16435 = (state_16452[(8)]);
var inst_16435__$1 = (state_16452[(2)]);
var inst_16436 = (inst_16435__$1 == null);
var state_16452__$1 = (function (){var statearr_16457 = state_16452;
(statearr_16457[(8)] = inst_16435__$1);

return statearr_16457;
})();
if(cljs.core.truth_(inst_16436)){
var statearr_16458_16477 = state_16452__$1;
(statearr_16458_16477[(1)] = (5));

} else {
var statearr_16459_16478 = state_16452__$1;
(statearr_16459_16478[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (6))){
var inst_16435 = (state_16452[(8)]);
var inst_16439 = (state_16452[(9)]);
var inst_16432 = (state_16452[(7)]);
var inst_16439__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16432,inst_16435) : f.call(null,inst_16432,inst_16435));
var inst_16440 = cljs.core.reduced_QMARK_(inst_16439__$1);
var state_16452__$1 = (function (){var statearr_16460 = state_16452;
(statearr_16460[(9)] = inst_16439__$1);

return statearr_16460;
})();
if(inst_16440){
var statearr_16461_16479 = state_16452__$1;
(statearr_16461_16479[(1)] = (8));

} else {
var statearr_16462_16480 = state_16452__$1;
(statearr_16462_16480[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (3))){
var inst_16450 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16452__$1,inst_16450);
} else {
if((state_val_16453 === (2))){
var state_16452__$1 = state_16452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16452__$1,(4),ch);
} else {
if((state_val_16453 === (9))){
var inst_16439 = (state_16452[(9)]);
var inst_16432 = inst_16439;
var state_16452__$1 = (function (){var statearr_16463 = state_16452;
(statearr_16463[(7)] = inst_16432);

return statearr_16463;
})();
var statearr_16464_16481 = state_16452__$1;
(statearr_16464_16481[(2)] = null);

(statearr_16464_16481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (5))){
var inst_16432 = (state_16452[(7)]);
var state_16452__$1 = state_16452;
var statearr_16465_16482 = state_16452__$1;
(statearr_16465_16482[(2)] = inst_16432);

(statearr_16465_16482[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (10))){
var inst_16446 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
var statearr_16466_16483 = state_16452__$1;
(statearr_16466_16483[(2)] = inst_16446);

(statearr_16466_16483[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16453 === (8))){
var inst_16439 = (state_16452[(9)]);
var inst_16442 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16439) : cljs.core.deref.call(null,inst_16439));
var state_16452__$1 = state_16452;
var statearr_16467_16484 = state_16452__$1;
(statearr_16467_16484[(2)] = inst_16442);

(statearr_16467_16484[(1)] = (10));


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
});})(c__15682__auto__))
;
return ((function (switch__15558__auto__,c__15682__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15559__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15559__auto____0 = (function (){
var statearr_16471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16471[(0)] = cljs$core$async$reduce_$_state_machine__15559__auto__);

(statearr_16471[(1)] = (1));

return statearr_16471;
});
var cljs$core$async$reduce_$_state_machine__15559__auto____1 = (function (state_16452){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16452);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16472){if((e16472 instanceof Object)){
var ex__15562__auto__ = e16472;
var statearr_16473_16485 = state_16452;
(statearr_16473_16485[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16452);

return cljs.core.cst$kw$recur;
} else {
throw e16472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16486 = state_16452;
state_16452 = G__16486;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15559__auto__ = function(state_16452){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15559__auto____1.call(this,state_16452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15559__auto____0;
cljs$core$async$reduce_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15559__auto____1;
return cljs$core$async$reduce_$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__))
})();
var state__15684__auto__ = (function (){var statearr_16474 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_16474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__))
);

return c__15682__auto__;
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
var args16487 = [];
var len__7481__auto___16539 = arguments.length;
var i__7482__auto___16540 = (0);
while(true){
if((i__7482__auto___16540 < len__7481__auto___16539)){
args16487.push((arguments[i__7482__auto___16540]));

var G__16541 = (i__7482__auto___16540 + (1));
i__7482__auto___16540 = G__16541;
continue;
} else {
}
break;
}

var G__16489 = args16487.length;
switch (G__16489) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16487.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__){
return (function (state_16514){
var state_val_16515 = (state_16514[(1)]);
if((state_val_16515 === (7))){
var inst_16496 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16516_16543 = state_16514__$1;
(statearr_16516_16543[(2)] = inst_16496);

(statearr_16516_16543[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (1))){
var inst_16490 = cljs.core.seq(coll);
var inst_16491 = inst_16490;
var state_16514__$1 = (function (){var statearr_16517 = state_16514;
(statearr_16517[(7)] = inst_16491);

return statearr_16517;
})();
var statearr_16518_16544 = state_16514__$1;
(statearr_16518_16544[(2)] = null);

(statearr_16518_16544[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (4))){
var inst_16491 = (state_16514[(7)]);
var inst_16494 = cljs.core.first(inst_16491);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16514__$1,(7),ch,inst_16494);
} else {
if((state_val_16515 === (13))){
var inst_16508 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16519_16545 = state_16514__$1;
(statearr_16519_16545[(2)] = inst_16508);

(statearr_16519_16545[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (6))){
var inst_16499 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16499)){
var statearr_16520_16546 = state_16514__$1;
(statearr_16520_16546[(1)] = (8));

} else {
var statearr_16521_16547 = state_16514__$1;
(statearr_16521_16547[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (3))){
var inst_16512 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16514__$1,inst_16512);
} else {
if((state_val_16515 === (12))){
var state_16514__$1 = state_16514;
var statearr_16522_16548 = state_16514__$1;
(statearr_16522_16548[(2)] = null);

(statearr_16522_16548[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (2))){
var inst_16491 = (state_16514[(7)]);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16491)){
var statearr_16523_16549 = state_16514__$1;
(statearr_16523_16549[(1)] = (4));

} else {
var statearr_16524_16550 = state_16514__$1;
(statearr_16524_16550[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (11))){
var inst_16505 = cljs.core.async.close_BANG_(ch);
var state_16514__$1 = state_16514;
var statearr_16525_16551 = state_16514__$1;
(statearr_16525_16551[(2)] = inst_16505);

(statearr_16525_16551[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (9))){
var state_16514__$1 = state_16514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16526_16552 = state_16514__$1;
(statearr_16526_16552[(1)] = (11));

} else {
var statearr_16527_16553 = state_16514__$1;
(statearr_16527_16553[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (5))){
var inst_16491 = (state_16514[(7)]);
var state_16514__$1 = state_16514;
var statearr_16528_16554 = state_16514__$1;
(statearr_16528_16554[(2)] = inst_16491);

(statearr_16528_16554[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (10))){
var inst_16510 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16529_16555 = state_16514__$1;
(statearr_16529_16555[(2)] = inst_16510);

(statearr_16529_16555[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16515 === (8))){
var inst_16491 = (state_16514[(7)]);
var inst_16501 = cljs.core.next(inst_16491);
var inst_16491__$1 = inst_16501;
var state_16514__$1 = (function (){var statearr_16530 = state_16514;
(statearr_16530[(7)] = inst_16491__$1);

return statearr_16530;
})();
var statearr_16531_16556 = state_16514__$1;
(statearr_16531_16556[(2)] = null);

(statearr_16531_16556[(1)] = (2));


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
});})(c__15682__auto__))
;
return ((function (switch__15558__auto__,c__15682__auto__){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_16535 = [null,null,null,null,null,null,null,null];
(statearr_16535[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_16535[(1)] = (1));

return statearr_16535;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_16514){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16514);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e16536){if((e16536 instanceof Object)){
var ex__15562__auto__ = e16536;
var statearr_16537_16557 = state_16514;
(statearr_16537_16557[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16514);

return cljs.core.cst$kw$recur;
} else {
throw e16536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__16558 = state_16514;
state_16514 = G__16558;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_16514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_16514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__))
})();
var state__15684__auto__ = (function (){var statearr_16538 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_16538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_16538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__))
);

return c__15682__auto__;
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
var x__7069__auto__ = (((_ == null))?null:_);
var m__7070__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7070__auto__.call(null,_));
} else {
var m__7070__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7070__auto____$1.call(null,_));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7070__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7070__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7070__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto__.call(null,m,ch));
} else {
var m__7070__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto____$1.call(null,m,ch));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7070__auto__.call(null,m));
} else {
var m__7070__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7070__auto____$1.call(null,m));
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
var cs = (function (){var G__16787 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16787) : cljs.core.atom.call(null,G__16787));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16788 = (function (mult,ch,cs,meta16789){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16789 = meta16789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16790,meta16789__$1){
var self__ = this;
var _16790__$1 = this;
return (new cljs.core.async.t_cljs$core$async16788(self__.mult,self__.ch,self__.cs,meta16789__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16790){
var self__ = this;
var _16790__$1 = this;
return self__.meta16789;
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16791_17015 = self__.cs;
var G__16792_17016 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16791_17015,G__16792_17016) : cljs.core.reset_BANG_.call(null,G__16791_17015,G__16792_17016));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16789], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16788";

cljs.core.async.t_cljs$core$async16788.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async16788");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16788 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16788(mult__$1,ch__$1,cs__$1,meta16789){
return (new cljs.core.async.t_cljs$core$async16788(mult__$1,ch__$1,cs__$1,meta16789));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16788(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15682__auto___17017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17017,cs,m,dchan,dctr,done){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17017,cs,m,dchan,dctr,done){
return (function (state_16927){
var state_val_16928 = (state_16927[(1)]);
if((state_val_16928 === (7))){
var inst_16923 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16929_17018 = state_16927__$1;
(statearr_16929_17018[(2)] = inst_16923);

(statearr_16929_17018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (20))){
var inst_16826 = (state_16927[(7)]);
var inst_16838 = cljs.core.first(inst_16826);
var inst_16839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16838,(0),null);
var inst_16840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16838,(1),null);
var state_16927__$1 = (function (){var statearr_16930 = state_16927;
(statearr_16930[(8)] = inst_16839);

return statearr_16930;
})();
if(cljs.core.truth_(inst_16840)){
var statearr_16931_17019 = state_16927__$1;
(statearr_16931_17019[(1)] = (22));

} else {
var statearr_16932_17020 = state_16927__$1;
(statearr_16932_17020[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (27))){
var inst_16795 = (state_16927[(9)]);
var inst_16868 = (state_16927[(10)]);
var inst_16875 = (state_16927[(11)]);
var inst_16870 = (state_16927[(12)]);
var inst_16875__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16868,inst_16870);
var inst_16876 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16875__$1,inst_16795,done);
var state_16927__$1 = (function (){var statearr_16933 = state_16927;
(statearr_16933[(11)] = inst_16875__$1);

return statearr_16933;
})();
if(cljs.core.truth_(inst_16876)){
var statearr_16934_17021 = state_16927__$1;
(statearr_16934_17021[(1)] = (30));

} else {
var statearr_16935_17022 = state_16927__$1;
(statearr_16935_17022[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (1))){
var state_16927__$1 = state_16927;
var statearr_16936_17023 = state_16927__$1;
(statearr_16936_17023[(2)] = null);

(statearr_16936_17023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (24))){
var inst_16826 = (state_16927[(7)]);
var inst_16845 = (state_16927[(2)]);
var inst_16846 = cljs.core.next(inst_16826);
var inst_16804 = inst_16846;
var inst_16805 = null;
var inst_16806 = (0);
var inst_16807 = (0);
var state_16927__$1 = (function (){var statearr_16937 = state_16927;
(statearr_16937[(13)] = inst_16806);

(statearr_16937[(14)] = inst_16845);

(statearr_16937[(15)] = inst_16807);

(statearr_16937[(16)] = inst_16805);

(statearr_16937[(17)] = inst_16804);

return statearr_16937;
})();
var statearr_16938_17024 = state_16927__$1;
(statearr_16938_17024[(2)] = null);

(statearr_16938_17024[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (39))){
var state_16927__$1 = state_16927;
var statearr_16942_17025 = state_16927__$1;
(statearr_16942_17025[(2)] = null);

(statearr_16942_17025[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (4))){
var inst_16795 = (state_16927[(9)]);
var inst_16795__$1 = (state_16927[(2)]);
var inst_16796 = (inst_16795__$1 == null);
var state_16927__$1 = (function (){var statearr_16943 = state_16927;
(statearr_16943[(9)] = inst_16795__$1);

return statearr_16943;
})();
if(cljs.core.truth_(inst_16796)){
var statearr_16944_17026 = state_16927__$1;
(statearr_16944_17026[(1)] = (5));

} else {
var statearr_16945_17027 = state_16927__$1;
(statearr_16945_17027[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (15))){
var inst_16806 = (state_16927[(13)]);
var inst_16807 = (state_16927[(15)]);
var inst_16805 = (state_16927[(16)]);
var inst_16804 = (state_16927[(17)]);
var inst_16822 = (state_16927[(2)]);
var inst_16823 = (inst_16807 + (1));
var tmp16939 = inst_16806;
var tmp16940 = inst_16805;
var tmp16941 = inst_16804;
var inst_16804__$1 = tmp16941;
var inst_16805__$1 = tmp16940;
var inst_16806__$1 = tmp16939;
var inst_16807__$1 = inst_16823;
var state_16927__$1 = (function (){var statearr_16946 = state_16927;
(statearr_16946[(13)] = inst_16806__$1);

(statearr_16946[(15)] = inst_16807__$1);

(statearr_16946[(16)] = inst_16805__$1);

(statearr_16946[(17)] = inst_16804__$1);

(statearr_16946[(18)] = inst_16822);

return statearr_16946;
})();
var statearr_16947_17028 = state_16927__$1;
(statearr_16947_17028[(2)] = null);

(statearr_16947_17028[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (21))){
var inst_16849 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16951_17029 = state_16927__$1;
(statearr_16951_17029[(2)] = inst_16849);

(statearr_16951_17029[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (31))){
var inst_16875 = (state_16927[(11)]);
var inst_16879 = done(null);
var inst_16880 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16875);
var state_16927__$1 = (function (){var statearr_16952 = state_16927;
(statearr_16952[(19)] = inst_16879);

return statearr_16952;
})();
var statearr_16953_17030 = state_16927__$1;
(statearr_16953_17030[(2)] = inst_16880);

(statearr_16953_17030[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (32))){
var inst_16868 = (state_16927[(10)]);
var inst_16870 = (state_16927[(12)]);
var inst_16867 = (state_16927[(20)]);
var inst_16869 = (state_16927[(21)]);
var inst_16882 = (state_16927[(2)]);
var inst_16883 = (inst_16870 + (1));
var tmp16948 = inst_16868;
var tmp16949 = inst_16867;
var tmp16950 = inst_16869;
var inst_16867__$1 = tmp16949;
var inst_16868__$1 = tmp16948;
var inst_16869__$1 = tmp16950;
var inst_16870__$1 = inst_16883;
var state_16927__$1 = (function (){var statearr_16954 = state_16927;
(statearr_16954[(10)] = inst_16868__$1);

(statearr_16954[(12)] = inst_16870__$1);

(statearr_16954[(20)] = inst_16867__$1);

(statearr_16954[(22)] = inst_16882);

(statearr_16954[(21)] = inst_16869__$1);

return statearr_16954;
})();
var statearr_16955_17031 = state_16927__$1;
(statearr_16955_17031[(2)] = null);

(statearr_16955_17031[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (40))){
var inst_16895 = (state_16927[(23)]);
var inst_16899 = done(null);
var inst_16900 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16895);
var state_16927__$1 = (function (){var statearr_16956 = state_16927;
(statearr_16956[(24)] = inst_16899);

return statearr_16956;
})();
var statearr_16957_17032 = state_16927__$1;
(statearr_16957_17032[(2)] = inst_16900);

(statearr_16957_17032[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (33))){
var inst_16886 = (state_16927[(25)]);
var inst_16888 = cljs.core.chunked_seq_QMARK_(inst_16886);
var state_16927__$1 = state_16927;
if(inst_16888){
var statearr_16958_17033 = state_16927__$1;
(statearr_16958_17033[(1)] = (36));

} else {
var statearr_16959_17034 = state_16927__$1;
(statearr_16959_17034[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (13))){
var inst_16816 = (state_16927[(26)]);
var inst_16819 = cljs.core.async.close_BANG_(inst_16816);
var state_16927__$1 = state_16927;
var statearr_16960_17035 = state_16927__$1;
(statearr_16960_17035[(2)] = inst_16819);

(statearr_16960_17035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (22))){
var inst_16839 = (state_16927[(8)]);
var inst_16842 = cljs.core.async.close_BANG_(inst_16839);
var state_16927__$1 = state_16927;
var statearr_16961_17036 = state_16927__$1;
(statearr_16961_17036[(2)] = inst_16842);

(statearr_16961_17036[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (36))){
var inst_16886 = (state_16927[(25)]);
var inst_16890 = cljs.core.chunk_first(inst_16886);
var inst_16891 = cljs.core.chunk_rest(inst_16886);
var inst_16892 = cljs.core.count(inst_16890);
var inst_16867 = inst_16891;
var inst_16868 = inst_16890;
var inst_16869 = inst_16892;
var inst_16870 = (0);
var state_16927__$1 = (function (){var statearr_16962 = state_16927;
(statearr_16962[(10)] = inst_16868);

(statearr_16962[(12)] = inst_16870);

(statearr_16962[(20)] = inst_16867);

(statearr_16962[(21)] = inst_16869);

return statearr_16962;
})();
var statearr_16963_17037 = state_16927__$1;
(statearr_16963_17037[(2)] = null);

(statearr_16963_17037[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (41))){
var inst_16886 = (state_16927[(25)]);
var inst_16902 = (state_16927[(2)]);
var inst_16903 = cljs.core.next(inst_16886);
var inst_16867 = inst_16903;
var inst_16868 = null;
var inst_16869 = (0);
var inst_16870 = (0);
var state_16927__$1 = (function (){var statearr_16964 = state_16927;
(statearr_16964[(10)] = inst_16868);

(statearr_16964[(12)] = inst_16870);

(statearr_16964[(27)] = inst_16902);

(statearr_16964[(20)] = inst_16867);

(statearr_16964[(21)] = inst_16869);

return statearr_16964;
})();
var statearr_16965_17038 = state_16927__$1;
(statearr_16965_17038[(2)] = null);

(statearr_16965_17038[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (43))){
var state_16927__$1 = state_16927;
var statearr_16966_17039 = state_16927__$1;
(statearr_16966_17039[(2)] = null);

(statearr_16966_17039[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (29))){
var inst_16911 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16967_17040 = state_16927__$1;
(statearr_16967_17040[(2)] = inst_16911);

(statearr_16967_17040[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (44))){
var inst_16920 = (state_16927[(2)]);
var state_16927__$1 = (function (){var statearr_16968 = state_16927;
(statearr_16968[(28)] = inst_16920);

return statearr_16968;
})();
var statearr_16969_17041 = state_16927__$1;
(statearr_16969_17041[(2)] = null);

(statearr_16969_17041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (6))){
var inst_16859 = (state_16927[(29)]);
var inst_16858 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16859__$1 = cljs.core.keys(inst_16858);
var inst_16860 = cljs.core.count(inst_16859__$1);
var inst_16861 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16860) : cljs.core.reset_BANG_.call(null,dctr,inst_16860));
var inst_16866 = cljs.core.seq(inst_16859__$1);
var inst_16867 = inst_16866;
var inst_16868 = null;
var inst_16869 = (0);
var inst_16870 = (0);
var state_16927__$1 = (function (){var statearr_16970 = state_16927;
(statearr_16970[(29)] = inst_16859__$1);

(statearr_16970[(10)] = inst_16868);

(statearr_16970[(12)] = inst_16870);

(statearr_16970[(30)] = inst_16861);

(statearr_16970[(20)] = inst_16867);

(statearr_16970[(21)] = inst_16869);

return statearr_16970;
})();
var statearr_16971_17042 = state_16927__$1;
(statearr_16971_17042[(2)] = null);

(statearr_16971_17042[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (28))){
var inst_16886 = (state_16927[(25)]);
var inst_16867 = (state_16927[(20)]);
var inst_16886__$1 = cljs.core.seq(inst_16867);
var state_16927__$1 = (function (){var statearr_16972 = state_16927;
(statearr_16972[(25)] = inst_16886__$1);

return statearr_16972;
})();
if(inst_16886__$1){
var statearr_16973_17043 = state_16927__$1;
(statearr_16973_17043[(1)] = (33));

} else {
var statearr_16974_17044 = state_16927__$1;
(statearr_16974_17044[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (25))){
var inst_16870 = (state_16927[(12)]);
var inst_16869 = (state_16927[(21)]);
var inst_16872 = (inst_16870 < inst_16869);
var inst_16873 = inst_16872;
var state_16927__$1 = state_16927;
if(cljs.core.truth_(inst_16873)){
var statearr_16975_17045 = state_16927__$1;
(statearr_16975_17045[(1)] = (27));

} else {
var statearr_16976_17046 = state_16927__$1;
(statearr_16976_17046[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (34))){
var state_16927__$1 = state_16927;
var statearr_16977_17047 = state_16927__$1;
(statearr_16977_17047[(2)] = null);

(statearr_16977_17047[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (17))){
var state_16927__$1 = state_16927;
var statearr_16978_17048 = state_16927__$1;
(statearr_16978_17048[(2)] = null);

(statearr_16978_17048[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (3))){
var inst_16925 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16927__$1,inst_16925);
} else {
if((state_val_16928 === (12))){
var inst_16854 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16979_17049 = state_16927__$1;
(statearr_16979_17049[(2)] = inst_16854);

(statearr_16979_17049[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (2))){
var state_16927__$1 = state_16927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16927__$1,(4),ch);
} else {
if((state_val_16928 === (23))){
var state_16927__$1 = state_16927;
var statearr_16980_17050 = state_16927__$1;
(statearr_16980_17050[(2)] = null);

(statearr_16980_17050[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (35))){
var inst_16909 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16981_17051 = state_16927__$1;
(statearr_16981_17051[(2)] = inst_16909);

(statearr_16981_17051[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (19))){
var inst_16826 = (state_16927[(7)]);
var inst_16830 = cljs.core.chunk_first(inst_16826);
var inst_16831 = cljs.core.chunk_rest(inst_16826);
var inst_16832 = cljs.core.count(inst_16830);
var inst_16804 = inst_16831;
var inst_16805 = inst_16830;
var inst_16806 = inst_16832;
var inst_16807 = (0);
var state_16927__$1 = (function (){var statearr_16982 = state_16927;
(statearr_16982[(13)] = inst_16806);

(statearr_16982[(15)] = inst_16807);

(statearr_16982[(16)] = inst_16805);

(statearr_16982[(17)] = inst_16804);

return statearr_16982;
})();
var statearr_16983_17052 = state_16927__$1;
(statearr_16983_17052[(2)] = null);

(statearr_16983_17052[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (11))){
var inst_16804 = (state_16927[(17)]);
var inst_16826 = (state_16927[(7)]);
var inst_16826__$1 = cljs.core.seq(inst_16804);
var state_16927__$1 = (function (){var statearr_16984 = state_16927;
(statearr_16984[(7)] = inst_16826__$1);

return statearr_16984;
})();
if(inst_16826__$1){
var statearr_16985_17053 = state_16927__$1;
(statearr_16985_17053[(1)] = (16));

} else {
var statearr_16986_17054 = state_16927__$1;
(statearr_16986_17054[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (9))){
var inst_16856 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16987_17055 = state_16927__$1;
(statearr_16987_17055[(2)] = inst_16856);

(statearr_16987_17055[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (5))){
var inst_16802 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16803 = cljs.core.seq(inst_16802);
var inst_16804 = inst_16803;
var inst_16805 = null;
var inst_16806 = (0);
var inst_16807 = (0);
var state_16927__$1 = (function (){var statearr_16988 = state_16927;
(statearr_16988[(13)] = inst_16806);

(statearr_16988[(15)] = inst_16807);

(statearr_16988[(16)] = inst_16805);

(statearr_16988[(17)] = inst_16804);

return statearr_16988;
})();
var statearr_16989_17056 = state_16927__$1;
(statearr_16989_17056[(2)] = null);

(statearr_16989_17056[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (14))){
var state_16927__$1 = state_16927;
var statearr_16990_17057 = state_16927__$1;
(statearr_16990_17057[(2)] = null);

(statearr_16990_17057[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (45))){
var inst_16917 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16991_17058 = state_16927__$1;
(statearr_16991_17058[(2)] = inst_16917);

(statearr_16991_17058[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (26))){
var inst_16859 = (state_16927[(29)]);
var inst_16913 = (state_16927[(2)]);
var inst_16914 = cljs.core.seq(inst_16859);
var state_16927__$1 = (function (){var statearr_16992 = state_16927;
(statearr_16992[(31)] = inst_16913);

return statearr_16992;
})();
if(inst_16914){
var statearr_16993_17059 = state_16927__$1;
(statearr_16993_17059[(1)] = (42));

} else {
var statearr_16994_17060 = state_16927__$1;
(statearr_16994_17060[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (16))){
var inst_16826 = (state_16927[(7)]);
var inst_16828 = cljs.core.chunked_seq_QMARK_(inst_16826);
var state_16927__$1 = state_16927;
if(inst_16828){
var statearr_16995_17061 = state_16927__$1;
(statearr_16995_17061[(1)] = (19));

} else {
var statearr_16996_17062 = state_16927__$1;
(statearr_16996_17062[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (38))){
var inst_16906 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_16997_17063 = state_16927__$1;
(statearr_16997_17063[(2)] = inst_16906);

(statearr_16997_17063[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (30))){
var state_16927__$1 = state_16927;
var statearr_16998_17064 = state_16927__$1;
(statearr_16998_17064[(2)] = null);

(statearr_16998_17064[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (10))){
var inst_16807 = (state_16927[(15)]);
var inst_16805 = (state_16927[(16)]);
var inst_16815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16805,inst_16807);
var inst_16816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16815,(0),null);
var inst_16817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16815,(1),null);
var state_16927__$1 = (function (){var statearr_16999 = state_16927;
(statearr_16999[(26)] = inst_16816);

return statearr_16999;
})();
if(cljs.core.truth_(inst_16817)){
var statearr_17000_17065 = state_16927__$1;
(statearr_17000_17065[(1)] = (13));

} else {
var statearr_17001_17066 = state_16927__$1;
(statearr_17001_17066[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (18))){
var inst_16852 = (state_16927[(2)]);
var state_16927__$1 = state_16927;
var statearr_17002_17067 = state_16927__$1;
(statearr_17002_17067[(2)] = inst_16852);

(statearr_17002_17067[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (42))){
var state_16927__$1 = state_16927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16927__$1,(45),dchan);
} else {
if((state_val_16928 === (37))){
var inst_16886 = (state_16927[(25)]);
var inst_16795 = (state_16927[(9)]);
var inst_16895 = (state_16927[(23)]);
var inst_16895__$1 = cljs.core.first(inst_16886);
var inst_16896 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16895__$1,inst_16795,done);
var state_16927__$1 = (function (){var statearr_17003 = state_16927;
(statearr_17003[(23)] = inst_16895__$1);

return statearr_17003;
})();
if(cljs.core.truth_(inst_16896)){
var statearr_17004_17068 = state_16927__$1;
(statearr_17004_17068[(1)] = (39));

} else {
var statearr_17005_17069 = state_16927__$1;
(statearr_17005_17069[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16928 === (8))){
var inst_16806 = (state_16927[(13)]);
var inst_16807 = (state_16927[(15)]);
var inst_16809 = (inst_16807 < inst_16806);
var inst_16810 = inst_16809;
var state_16927__$1 = state_16927;
if(cljs.core.truth_(inst_16810)){
var statearr_17006_17070 = state_16927__$1;
(statearr_17006_17070[(1)] = (10));

} else {
var statearr_17007_17071 = state_16927__$1;
(statearr_17007_17071[(1)] = (11));

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
});})(c__15682__auto___17017,cs,m,dchan,dctr,done))
;
return ((function (switch__15558__auto__,c__15682__auto___17017,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15559__auto__ = null;
var cljs$core$async$mult_$_state_machine__15559__auto____0 = (function (){
var statearr_17011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17011[(0)] = cljs$core$async$mult_$_state_machine__15559__auto__);

(statearr_17011[(1)] = (1));

return statearr_17011;
});
var cljs$core$async$mult_$_state_machine__15559__auto____1 = (function (state_16927){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_16927);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17012){if((e17012 instanceof Object)){
var ex__15562__auto__ = e17012;
var statearr_17013_17072 = state_16927;
(statearr_17013_17072[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16927);

return cljs.core.cst$kw$recur;
} else {
throw e17012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17073 = state_16927;
state_16927 = G__17073;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15559__auto__ = function(state_16927){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15559__auto____1.call(this,state_16927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15559__auto____0;
cljs$core$async$mult_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15559__auto____1;
return cljs$core$async$mult_$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17017,cs,m,dchan,dctr,done))
})();
var state__15684__auto__ = (function (){var statearr_17014 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17017);

return statearr_17014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17017,cs,m,dchan,dctr,done))
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
var args17074 = [];
var len__7481__auto___17077 = arguments.length;
var i__7482__auto___17078 = (0);
while(true){
if((i__7482__auto___17078 < len__7481__auto___17077)){
args17074.push((arguments[i__7482__auto___17078]));

var G__17079 = (i__7482__auto___17078 + (1));
i__7482__auto___17078 = G__17079;
continue;
} else {
}
break;
}

var G__17076 = args17074.length;
switch (G__17076) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17074.length)].join('')));

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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto__.call(null,m,ch));
} else {
var m__7070__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto____$1.call(null,m,ch));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto__.call(null,m,ch));
} else {
var m__7070__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7070__auto____$1.call(null,m,ch));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7070__auto__.call(null,m));
} else {
var m__7070__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7070__auto____$1.call(null,m));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7070__auto__.call(null,m,state_map));
} else {
var m__7070__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7070__auto____$1.call(null,m,state_map));
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
var x__7069__auto__ = (((m == null))?null:m);
var m__7070__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7070__auto__.call(null,m,mode));
} else {
var m__7070__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7070__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7488__auto__ = [];
var len__7481__auto___17091 = arguments.length;
var i__7482__auto___17092 = (0);
while(true){
if((i__7482__auto___17092 < len__7481__auto___17091)){
args__7488__auto__.push((arguments[i__7482__auto___17092]));

var G__17093 = (i__7482__auto___17092 + (1));
i__7482__auto___17092 = G__17093;
continue;
} else {
}
break;
}

var argseq__7489__auto__ = ((((3) < args__7488__auto__.length))?(new cljs.core.IndexedSeq(args__7488__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7489__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17085){
var map__17086 = p__17085;
var map__17086__$1 = ((((!((map__17086 == null)))?((((map__17086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17086):map__17086);
var opts = map__17086__$1;
var statearr_17088_17094 = state;
(statearr_17088_17094[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17086,map__17086__$1,opts){
return (function (val){
var statearr_17089_17095 = state;
(statearr_17089_17095[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17086,map__17086__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17090_17096 = state;
(statearr_17090_17096[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17081){
var G__17082 = cljs.core.first(seq17081);
var seq17081__$1 = cljs.core.next(seq17081);
var G__17083 = cljs.core.first(seq17081__$1);
var seq17081__$2 = cljs.core.next(seq17081__$1);
var G__17084 = cljs.core.first(seq17081__$2);
var seq17081__$3 = cljs.core.next(seq17081__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17082,G__17083,G__17084,seq17081__$3);
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
var cs = (function (){var G__17266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17266) : cljs.core.atom.call(null,G__17266));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__17267 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17267) : cljs.core.atom.call(null,G__17267));
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
if(typeof cljs.core.async.t_cljs$core$async17268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17268 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17269){
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
this.meta17269 = meta17269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17270,meta17269__$1){
var self__ = this;
var _17270__$1 = this;
return (new cljs.core.async.t_cljs$core$async17268(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17269__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17270){
var self__ = this;
var _17270__$1 = this;
return self__.meta17269;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17271_17435 = self__.cs;
var G__17272_17436 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17271_17435,G__17272_17436) : cljs.core.reset_BANG_.call(null,G__17271_17435,G__17272_17436));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17268.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17269], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17268";

cljs.core.async.t_cljs$core$async17268.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17268");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17268 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17268(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17269){
return (new cljs.core.async.t_cljs$core$async17268(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17269));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17268(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15682__auto___17437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17372){
var state_val_17373 = (state_17372[(1)]);
if((state_val_17373 === (7))){
var inst_17288 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17374_17438 = state_17372__$1;
(statearr_17374_17438[(2)] = inst_17288);

(statearr_17374_17438[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (20))){
var inst_17300 = (state_17372[(7)]);
var state_17372__$1 = state_17372;
var statearr_17375_17439 = state_17372__$1;
(statearr_17375_17439[(2)] = inst_17300);

(statearr_17375_17439[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (27))){
var state_17372__$1 = state_17372;
var statearr_17376_17440 = state_17372__$1;
(statearr_17376_17440[(2)] = null);

(statearr_17376_17440[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (1))){
var inst_17276 = (state_17372[(8)]);
var inst_17276__$1 = calc_state();
var inst_17278 = (inst_17276__$1 == null);
var inst_17279 = cljs.core.not(inst_17278);
var state_17372__$1 = (function (){var statearr_17377 = state_17372;
(statearr_17377[(8)] = inst_17276__$1);

return statearr_17377;
})();
if(inst_17279){
var statearr_17378_17441 = state_17372__$1;
(statearr_17378_17441[(1)] = (2));

} else {
var statearr_17379_17442 = state_17372__$1;
(statearr_17379_17442[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (24))){
var inst_17323 = (state_17372[(9)]);
var inst_17332 = (state_17372[(10)]);
var inst_17346 = (state_17372[(11)]);
var inst_17346__$1 = (inst_17323.cljs$core$IFn$_invoke$arity$1 ? inst_17323.cljs$core$IFn$_invoke$arity$1(inst_17332) : inst_17323.call(null,inst_17332));
var state_17372__$1 = (function (){var statearr_17380 = state_17372;
(statearr_17380[(11)] = inst_17346__$1);

return statearr_17380;
})();
if(cljs.core.truth_(inst_17346__$1)){
var statearr_17381_17443 = state_17372__$1;
(statearr_17381_17443[(1)] = (29));

} else {
var statearr_17382_17444 = state_17372__$1;
(statearr_17382_17444[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (4))){
var inst_17291 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17291)){
var statearr_17383_17445 = state_17372__$1;
(statearr_17383_17445[(1)] = (8));

} else {
var statearr_17384_17446 = state_17372__$1;
(statearr_17384_17446[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (15))){
var inst_17317 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17317)){
var statearr_17385_17447 = state_17372__$1;
(statearr_17385_17447[(1)] = (19));

} else {
var statearr_17386_17448 = state_17372__$1;
(statearr_17386_17448[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (21))){
var inst_17322 = (state_17372[(12)]);
var inst_17322__$1 = (state_17372[(2)]);
var inst_17323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17322__$1,cljs.core.cst$kw$solos);
var inst_17324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17322__$1,cljs.core.cst$kw$mutes);
var inst_17325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17322__$1,cljs.core.cst$kw$reads);
var state_17372__$1 = (function (){var statearr_17387 = state_17372;
(statearr_17387[(9)] = inst_17323);

(statearr_17387[(13)] = inst_17324);

(statearr_17387[(12)] = inst_17322__$1);

return statearr_17387;
})();
return cljs.core.async.ioc_alts_BANG_(state_17372__$1,(22),inst_17325);
} else {
if((state_val_17373 === (31))){
var inst_17354 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17354)){
var statearr_17388_17449 = state_17372__$1;
(statearr_17388_17449[(1)] = (32));

} else {
var statearr_17389_17450 = state_17372__$1;
(statearr_17389_17450[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (32))){
var inst_17331 = (state_17372[(14)]);
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17372__$1,(35),out,inst_17331);
} else {
if((state_val_17373 === (33))){
var inst_17322 = (state_17372[(12)]);
var inst_17300 = inst_17322;
var state_17372__$1 = (function (){var statearr_17390 = state_17372;
(statearr_17390[(7)] = inst_17300);

return statearr_17390;
})();
var statearr_17391_17451 = state_17372__$1;
(statearr_17391_17451[(2)] = null);

(statearr_17391_17451[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (13))){
var inst_17300 = (state_17372[(7)]);
var inst_17307 = inst_17300.cljs$lang$protocol_mask$partition0$;
var inst_17308 = (inst_17307 & (64));
var inst_17309 = inst_17300.cljs$core$ISeq$;
var inst_17310 = (inst_17308) || (inst_17309);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17310)){
var statearr_17392_17452 = state_17372__$1;
(statearr_17392_17452[(1)] = (16));

} else {
var statearr_17393_17453 = state_17372__$1;
(statearr_17393_17453[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (22))){
var inst_17331 = (state_17372[(14)]);
var inst_17332 = (state_17372[(10)]);
var inst_17330 = (state_17372[(2)]);
var inst_17331__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(0),null);
var inst_17332__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(1),null);
var inst_17333 = (inst_17331__$1 == null);
var inst_17334 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17332__$1,change);
var inst_17335 = (inst_17333) || (inst_17334);
var state_17372__$1 = (function (){var statearr_17394 = state_17372;
(statearr_17394[(14)] = inst_17331__$1);

(statearr_17394[(10)] = inst_17332__$1);

return statearr_17394;
})();
if(cljs.core.truth_(inst_17335)){
var statearr_17395_17454 = state_17372__$1;
(statearr_17395_17454[(1)] = (23));

} else {
var statearr_17396_17455 = state_17372__$1;
(statearr_17396_17455[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (36))){
var inst_17322 = (state_17372[(12)]);
var inst_17300 = inst_17322;
var state_17372__$1 = (function (){var statearr_17397 = state_17372;
(statearr_17397[(7)] = inst_17300);

return statearr_17397;
})();
var statearr_17398_17456 = state_17372__$1;
(statearr_17398_17456[(2)] = null);

(statearr_17398_17456[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (29))){
var inst_17346 = (state_17372[(11)]);
var state_17372__$1 = state_17372;
var statearr_17399_17457 = state_17372__$1;
(statearr_17399_17457[(2)] = inst_17346);

(statearr_17399_17457[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (6))){
var state_17372__$1 = state_17372;
var statearr_17400_17458 = state_17372__$1;
(statearr_17400_17458[(2)] = false);

(statearr_17400_17458[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (28))){
var inst_17342 = (state_17372[(2)]);
var inst_17343 = calc_state();
var inst_17300 = inst_17343;
var state_17372__$1 = (function (){var statearr_17401 = state_17372;
(statearr_17401[(15)] = inst_17342);

(statearr_17401[(7)] = inst_17300);

return statearr_17401;
})();
var statearr_17402_17459 = state_17372__$1;
(statearr_17402_17459[(2)] = null);

(statearr_17402_17459[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (25))){
var inst_17368 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17403_17460 = state_17372__$1;
(statearr_17403_17460[(2)] = inst_17368);

(statearr_17403_17460[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (34))){
var inst_17366 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17404_17461 = state_17372__$1;
(statearr_17404_17461[(2)] = inst_17366);

(statearr_17404_17461[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (17))){
var state_17372__$1 = state_17372;
var statearr_17405_17462 = state_17372__$1;
(statearr_17405_17462[(2)] = false);

(statearr_17405_17462[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (3))){
var state_17372__$1 = state_17372;
var statearr_17406_17463 = state_17372__$1;
(statearr_17406_17463[(2)] = false);

(statearr_17406_17463[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (12))){
var inst_17370 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17372__$1,inst_17370);
} else {
if((state_val_17373 === (2))){
var inst_17276 = (state_17372[(8)]);
var inst_17281 = inst_17276.cljs$lang$protocol_mask$partition0$;
var inst_17282 = (inst_17281 & (64));
var inst_17283 = inst_17276.cljs$core$ISeq$;
var inst_17284 = (inst_17282) || (inst_17283);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17284)){
var statearr_17407_17464 = state_17372__$1;
(statearr_17407_17464[(1)] = (5));

} else {
var statearr_17408_17465 = state_17372__$1;
(statearr_17408_17465[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (23))){
var inst_17331 = (state_17372[(14)]);
var inst_17337 = (inst_17331 == null);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17337)){
var statearr_17409_17466 = state_17372__$1;
(statearr_17409_17466[(1)] = (26));

} else {
var statearr_17410_17467 = state_17372__$1;
(statearr_17410_17467[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (35))){
var inst_17357 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17357)){
var statearr_17411_17468 = state_17372__$1;
(statearr_17411_17468[(1)] = (36));

} else {
var statearr_17412_17469 = state_17372__$1;
(statearr_17412_17469[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (19))){
var inst_17300 = (state_17372[(7)]);
var inst_17319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17300);
var state_17372__$1 = state_17372;
var statearr_17413_17470 = state_17372__$1;
(statearr_17413_17470[(2)] = inst_17319);

(statearr_17413_17470[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (11))){
var inst_17300 = (state_17372[(7)]);
var inst_17304 = (inst_17300 == null);
var inst_17305 = cljs.core.not(inst_17304);
var state_17372__$1 = state_17372;
if(inst_17305){
var statearr_17414_17471 = state_17372__$1;
(statearr_17414_17471[(1)] = (13));

} else {
var statearr_17415_17472 = state_17372__$1;
(statearr_17415_17472[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (9))){
var inst_17276 = (state_17372[(8)]);
var state_17372__$1 = state_17372;
var statearr_17416_17473 = state_17372__$1;
(statearr_17416_17473[(2)] = inst_17276);

(statearr_17416_17473[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (5))){
var state_17372__$1 = state_17372;
var statearr_17417_17474 = state_17372__$1;
(statearr_17417_17474[(2)] = true);

(statearr_17417_17474[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (14))){
var state_17372__$1 = state_17372;
var statearr_17418_17475 = state_17372__$1;
(statearr_17418_17475[(2)] = false);

(statearr_17418_17475[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (26))){
var inst_17332 = (state_17372[(10)]);
var inst_17339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17332);
var state_17372__$1 = state_17372;
var statearr_17419_17476 = state_17372__$1;
(statearr_17419_17476[(2)] = inst_17339);

(statearr_17419_17476[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (16))){
var state_17372__$1 = state_17372;
var statearr_17420_17477 = state_17372__$1;
(statearr_17420_17477[(2)] = true);

(statearr_17420_17477[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (38))){
var inst_17362 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17421_17478 = state_17372__$1;
(statearr_17421_17478[(2)] = inst_17362);

(statearr_17421_17478[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (30))){
var inst_17323 = (state_17372[(9)]);
var inst_17332 = (state_17372[(10)]);
var inst_17324 = (state_17372[(13)]);
var inst_17349 = cljs.core.empty_QMARK_(inst_17323);
var inst_17350 = (inst_17324.cljs$core$IFn$_invoke$arity$1 ? inst_17324.cljs$core$IFn$_invoke$arity$1(inst_17332) : inst_17324.call(null,inst_17332));
var inst_17351 = cljs.core.not(inst_17350);
var inst_17352 = (inst_17349) && (inst_17351);
var state_17372__$1 = state_17372;
var statearr_17422_17479 = state_17372__$1;
(statearr_17422_17479[(2)] = inst_17352);

(statearr_17422_17479[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (10))){
var inst_17276 = (state_17372[(8)]);
var inst_17296 = (state_17372[(2)]);
var inst_17297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17296,cljs.core.cst$kw$solos);
var inst_17298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17296,cljs.core.cst$kw$mutes);
var inst_17299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17296,cljs.core.cst$kw$reads);
var inst_17300 = inst_17276;
var state_17372__$1 = (function (){var statearr_17423 = state_17372;
(statearr_17423[(16)] = inst_17298);

(statearr_17423[(7)] = inst_17300);

(statearr_17423[(17)] = inst_17297);

(statearr_17423[(18)] = inst_17299);

return statearr_17423;
})();
var statearr_17424_17480 = state_17372__$1;
(statearr_17424_17480[(2)] = null);

(statearr_17424_17480[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (18))){
var inst_17314 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17425_17481 = state_17372__$1;
(statearr_17425_17481[(2)] = inst_17314);

(statearr_17425_17481[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (37))){
var state_17372__$1 = state_17372;
var statearr_17426_17482 = state_17372__$1;
(statearr_17426_17482[(2)] = null);

(statearr_17426_17482[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17373 === (8))){
var inst_17276 = (state_17372[(8)]);
var inst_17293 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17276);
var state_17372__$1 = state_17372;
var statearr_17427_17483 = state_17372__$1;
(statearr_17427_17483[(2)] = inst_17293);

(statearr_17427_17483[(1)] = (10));


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
});})(c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15558__auto__,c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15559__auto__ = null;
var cljs$core$async$mix_$_state_machine__15559__auto____0 = (function (){
var statearr_17431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17431[(0)] = cljs$core$async$mix_$_state_machine__15559__auto__);

(statearr_17431[(1)] = (1));

return statearr_17431;
});
var cljs$core$async$mix_$_state_machine__15559__auto____1 = (function (state_17372){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17372);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object)){
var ex__15562__auto__ = e17432;
var statearr_17433_17484 = state_17372;
(statearr_17433_17484[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17372);

return cljs.core.cst$kw$recur;
} else {
throw e17432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17485 = state_17372;
state_17372 = G__17485;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15559__auto__ = function(state_17372){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15559__auto____1.call(this,state_17372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15559__auto____0;
cljs$core$async$mix_$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15559__auto____1;
return cljs$core$async$mix_$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15684__auto__ = (function (){var statearr_17434 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17437);

return statearr_17434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7069__auto__ = (((p == null))?null:p);
var m__7070__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7070__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7070__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7070__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__7069__auto__ = (((p == null))?null:p);
var m__7070__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7070__auto__.call(null,p,v,ch));
} else {
var m__7070__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7070__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17486 = [];
var len__7481__auto___17489 = arguments.length;
var i__7482__auto___17490 = (0);
while(true){
if((i__7482__auto___17490 < len__7481__auto___17489)){
args17486.push((arguments[i__7482__auto___17490]));

var G__17491 = (i__7482__auto___17490 + (1));
i__7482__auto___17490 = G__17491;
continue;
} else {
}
break;
}

var G__17488 = args17486.length;
switch (G__17488) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17486.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7069__auto__ = (((p == null))?null:p);
var m__7070__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7070__auto__.call(null,p));
} else {
var m__7070__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7070__auto____$1.call(null,p));
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
var x__7069__auto__ = (((p == null))?null:p);
var m__7070__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7069__auto__)]);
if(!((m__7070__auto__ == null))){
return (m__7070__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7070__auto__.call(null,p,v));
} else {
var m__7070__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7070__auto____$1 == null))){
return (m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7070__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7070__auto____$1.call(null,p,v));
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
var args17494 = [];
var len__7481__auto___17622 = arguments.length;
var i__7482__auto___17623 = (0);
while(true){
if((i__7482__auto___17623 < len__7481__auto___17622)){
args17494.push((arguments[i__7482__auto___17623]));

var G__17624 = (i__7482__auto___17623 + (1));
i__7482__auto___17623 = G__17624;
continue;
} else {
}
break;
}

var G__17496 = args17494.length;
switch (G__17496) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17494.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17497 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17497) : cljs.core.atom.call(null,G__17497));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6406__auto__)){
return or__6406__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6406__auto__,mults){
return (function (p1__17493_SHARP_){
if(cljs.core.truth_((p1__17493_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17493_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17493_SHARP_.call(null,topic)))){
return p1__17493_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17493_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6406__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17498 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17499){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17499 = meta17499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17500,meta17499__$1){
var self__ = this;
var _17500__$1 = this;
return (new cljs.core.async.t_cljs$core$async17498(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17499__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17500){
var self__ = this;
var _17500__$1 = this;
return self__.meta17499;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17501 = self__.mults;
var G__17502 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17501,G__17502) : cljs.core.reset_BANG_.call(null,G__17501,G__17502));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17499], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17498";

cljs.core.async.t_cljs$core$async17498.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17498");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17498 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17498(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17499){
return (new cljs.core.async.t_cljs$core$async17498(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17499));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17498(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15682__auto___17626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17626,mults,ensure_mult,p){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17626,mults,ensure_mult,p){
return (function (state_17574){
var state_val_17575 = (state_17574[(1)]);
if((state_val_17575 === (7))){
var inst_17570 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17576_17627 = state_17574__$1;
(statearr_17576_17627[(2)] = inst_17570);

(statearr_17576_17627[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (20))){
var state_17574__$1 = state_17574;
var statearr_17577_17628 = state_17574__$1;
(statearr_17577_17628[(2)] = null);

(statearr_17577_17628[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (1))){
var state_17574__$1 = state_17574;
var statearr_17578_17629 = state_17574__$1;
(statearr_17578_17629[(2)] = null);

(statearr_17578_17629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (24))){
var inst_17553 = (state_17574[(7)]);
var inst_17562 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17553);
var state_17574__$1 = state_17574;
var statearr_17579_17630 = state_17574__$1;
(statearr_17579_17630[(2)] = inst_17562);

(statearr_17579_17630[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (4))){
var inst_17505 = (state_17574[(8)]);
var inst_17505__$1 = (state_17574[(2)]);
var inst_17506 = (inst_17505__$1 == null);
var state_17574__$1 = (function (){var statearr_17580 = state_17574;
(statearr_17580[(8)] = inst_17505__$1);

return statearr_17580;
})();
if(cljs.core.truth_(inst_17506)){
var statearr_17581_17631 = state_17574__$1;
(statearr_17581_17631[(1)] = (5));

} else {
var statearr_17582_17632 = state_17574__$1;
(statearr_17582_17632[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (15))){
var inst_17547 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17583_17633 = state_17574__$1;
(statearr_17583_17633[(2)] = inst_17547);

(statearr_17583_17633[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (21))){
var inst_17567 = (state_17574[(2)]);
var state_17574__$1 = (function (){var statearr_17584 = state_17574;
(statearr_17584[(9)] = inst_17567);

return statearr_17584;
})();
var statearr_17585_17634 = state_17574__$1;
(statearr_17585_17634[(2)] = null);

(statearr_17585_17634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (13))){
var inst_17529 = (state_17574[(10)]);
var inst_17531 = cljs.core.chunked_seq_QMARK_(inst_17529);
var state_17574__$1 = state_17574;
if(inst_17531){
var statearr_17586_17635 = state_17574__$1;
(statearr_17586_17635[(1)] = (16));

} else {
var statearr_17587_17636 = state_17574__$1;
(statearr_17587_17636[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (22))){
var inst_17559 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
if(cljs.core.truth_(inst_17559)){
var statearr_17588_17637 = state_17574__$1;
(statearr_17588_17637[(1)] = (23));

} else {
var statearr_17589_17638 = state_17574__$1;
(statearr_17589_17638[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (6))){
var inst_17505 = (state_17574[(8)]);
var inst_17555 = (state_17574[(11)]);
var inst_17553 = (state_17574[(7)]);
var inst_17553__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17505) : topic_fn.call(null,inst_17505));
var inst_17554 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17554,inst_17553__$1);
var state_17574__$1 = (function (){var statearr_17590 = state_17574;
(statearr_17590[(11)] = inst_17555__$1);

(statearr_17590[(7)] = inst_17553__$1);

return statearr_17590;
})();
if(cljs.core.truth_(inst_17555__$1)){
var statearr_17591_17639 = state_17574__$1;
(statearr_17591_17639[(1)] = (19));

} else {
var statearr_17592_17640 = state_17574__$1;
(statearr_17592_17640[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (25))){
var inst_17564 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17593_17641 = state_17574__$1;
(statearr_17593_17641[(2)] = inst_17564);

(statearr_17593_17641[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (17))){
var inst_17529 = (state_17574[(10)]);
var inst_17538 = cljs.core.first(inst_17529);
var inst_17539 = cljs.core.async.muxch_STAR_(inst_17538);
var inst_17540 = cljs.core.async.close_BANG_(inst_17539);
var inst_17541 = cljs.core.next(inst_17529);
var inst_17515 = inst_17541;
var inst_17516 = null;
var inst_17517 = (0);
var inst_17518 = (0);
var state_17574__$1 = (function (){var statearr_17594 = state_17574;
(statearr_17594[(12)] = inst_17518);

(statearr_17594[(13)] = inst_17540);

(statearr_17594[(14)] = inst_17516);

(statearr_17594[(15)] = inst_17517);

(statearr_17594[(16)] = inst_17515);

return statearr_17594;
})();
var statearr_17595_17642 = state_17574__$1;
(statearr_17595_17642[(2)] = null);

(statearr_17595_17642[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (3))){
var inst_17572 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17574__$1,inst_17572);
} else {
if((state_val_17575 === (12))){
var inst_17549 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17596_17643 = state_17574__$1;
(statearr_17596_17643[(2)] = inst_17549);

(statearr_17596_17643[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (2))){
var state_17574__$1 = state_17574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17574__$1,(4),ch);
} else {
if((state_val_17575 === (23))){
var state_17574__$1 = state_17574;
var statearr_17597_17644 = state_17574__$1;
(statearr_17597_17644[(2)] = null);

(statearr_17597_17644[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (19))){
var inst_17505 = (state_17574[(8)]);
var inst_17555 = (state_17574[(11)]);
var inst_17557 = cljs.core.async.muxch_STAR_(inst_17555);
var state_17574__$1 = state_17574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17574__$1,(22),inst_17557,inst_17505);
} else {
if((state_val_17575 === (11))){
var inst_17529 = (state_17574[(10)]);
var inst_17515 = (state_17574[(16)]);
var inst_17529__$1 = cljs.core.seq(inst_17515);
var state_17574__$1 = (function (){var statearr_17598 = state_17574;
(statearr_17598[(10)] = inst_17529__$1);

return statearr_17598;
})();
if(inst_17529__$1){
var statearr_17599_17645 = state_17574__$1;
(statearr_17599_17645[(1)] = (13));

} else {
var statearr_17600_17646 = state_17574__$1;
(statearr_17600_17646[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (9))){
var inst_17551 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17601_17647 = state_17574__$1;
(statearr_17601_17647[(2)] = inst_17551);

(statearr_17601_17647[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (5))){
var inst_17512 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17513 = cljs.core.vals(inst_17512);
var inst_17514 = cljs.core.seq(inst_17513);
var inst_17515 = inst_17514;
var inst_17516 = null;
var inst_17517 = (0);
var inst_17518 = (0);
var state_17574__$1 = (function (){var statearr_17602 = state_17574;
(statearr_17602[(12)] = inst_17518);

(statearr_17602[(14)] = inst_17516);

(statearr_17602[(15)] = inst_17517);

(statearr_17602[(16)] = inst_17515);

return statearr_17602;
})();
var statearr_17603_17648 = state_17574__$1;
(statearr_17603_17648[(2)] = null);

(statearr_17603_17648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (14))){
var state_17574__$1 = state_17574;
var statearr_17607_17649 = state_17574__$1;
(statearr_17607_17649[(2)] = null);

(statearr_17607_17649[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (16))){
var inst_17529 = (state_17574[(10)]);
var inst_17533 = cljs.core.chunk_first(inst_17529);
var inst_17534 = cljs.core.chunk_rest(inst_17529);
var inst_17535 = cljs.core.count(inst_17533);
var inst_17515 = inst_17534;
var inst_17516 = inst_17533;
var inst_17517 = inst_17535;
var inst_17518 = (0);
var state_17574__$1 = (function (){var statearr_17608 = state_17574;
(statearr_17608[(12)] = inst_17518);

(statearr_17608[(14)] = inst_17516);

(statearr_17608[(15)] = inst_17517);

(statearr_17608[(16)] = inst_17515);

return statearr_17608;
})();
var statearr_17609_17650 = state_17574__$1;
(statearr_17609_17650[(2)] = null);

(statearr_17609_17650[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (10))){
var inst_17518 = (state_17574[(12)]);
var inst_17516 = (state_17574[(14)]);
var inst_17517 = (state_17574[(15)]);
var inst_17515 = (state_17574[(16)]);
var inst_17523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17516,inst_17518);
var inst_17524 = cljs.core.async.muxch_STAR_(inst_17523);
var inst_17525 = cljs.core.async.close_BANG_(inst_17524);
var inst_17526 = (inst_17518 + (1));
var tmp17604 = inst_17516;
var tmp17605 = inst_17517;
var tmp17606 = inst_17515;
var inst_17515__$1 = tmp17606;
var inst_17516__$1 = tmp17604;
var inst_17517__$1 = tmp17605;
var inst_17518__$1 = inst_17526;
var state_17574__$1 = (function (){var statearr_17610 = state_17574;
(statearr_17610[(12)] = inst_17518__$1);

(statearr_17610[(14)] = inst_17516__$1);

(statearr_17610[(15)] = inst_17517__$1);

(statearr_17610[(16)] = inst_17515__$1);

(statearr_17610[(17)] = inst_17525);

return statearr_17610;
})();
var statearr_17611_17651 = state_17574__$1;
(statearr_17611_17651[(2)] = null);

(statearr_17611_17651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (18))){
var inst_17544 = (state_17574[(2)]);
var state_17574__$1 = state_17574;
var statearr_17612_17652 = state_17574__$1;
(statearr_17612_17652[(2)] = inst_17544);

(statearr_17612_17652[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17575 === (8))){
var inst_17518 = (state_17574[(12)]);
var inst_17517 = (state_17574[(15)]);
var inst_17520 = (inst_17518 < inst_17517);
var inst_17521 = inst_17520;
var state_17574__$1 = state_17574;
if(cljs.core.truth_(inst_17521)){
var statearr_17613_17653 = state_17574__$1;
(statearr_17613_17653[(1)] = (10));

} else {
var statearr_17614_17654 = state_17574__$1;
(statearr_17614_17654[(1)] = (11));

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
});})(c__15682__auto___17626,mults,ensure_mult,p))
;
return ((function (switch__15558__auto__,c__15682__auto___17626,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_17618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17618[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_17618[(1)] = (1));

return statearr_17618;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_17574){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17574);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17619){if((e17619 instanceof Object)){
var ex__15562__auto__ = e17619;
var statearr_17620_17655 = state_17574;
(statearr_17620_17655[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17574);

return cljs.core.cst$kw$recur;
} else {
throw e17619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17656 = state_17574;
state_17574 = G__17656;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_17574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_17574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17626,mults,ensure_mult,p))
})();
var state__15684__auto__ = (function (){var statearr_17621 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17626);

return statearr_17621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17626,mults,ensure_mult,p))
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
var args17657 = [];
var len__7481__auto___17660 = arguments.length;
var i__7482__auto___17661 = (0);
while(true){
if((i__7482__auto___17661 < len__7481__auto___17660)){
args17657.push((arguments[i__7482__auto___17661]));

var G__17662 = (i__7482__auto___17661 + (1));
i__7482__auto___17661 = G__17662;
continue;
} else {
}
break;
}

var G__17659 = args17657.length;
switch (G__17659) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17657.length)].join('')));

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
var args17664 = [];
var len__7481__auto___17667 = arguments.length;
var i__7482__auto___17668 = (0);
while(true){
if((i__7482__auto___17668 < len__7481__auto___17667)){
args17664.push((arguments[i__7482__auto___17668]));

var G__17669 = (i__7482__auto___17668 + (1));
i__7482__auto___17668 = G__17669;
continue;
} else {
}
break;
}

var G__17666 = args17664.length;
switch (G__17666) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17664.length)].join('')));

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
var args17671 = [];
var len__7481__auto___17742 = arguments.length;
var i__7482__auto___17743 = (0);
while(true){
if((i__7482__auto___17743 < len__7481__auto___17742)){
args17671.push((arguments[i__7482__auto___17743]));

var G__17744 = (i__7482__auto___17743 + (1));
i__7482__auto___17743 = G__17744;
continue;
} else {
}
break;
}

var G__17673 = args17671.length;
switch (G__17673) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17671.length)].join('')));

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
var c__15682__auto___17746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17712){
var state_val_17713 = (state_17712[(1)]);
if((state_val_17713 === (7))){
var state_17712__$1 = state_17712;
var statearr_17714_17747 = state_17712__$1;
(statearr_17714_17747[(2)] = null);

(statearr_17714_17747[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (1))){
var state_17712__$1 = state_17712;
var statearr_17715_17748 = state_17712__$1;
(statearr_17715_17748[(2)] = null);

(statearr_17715_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (4))){
var inst_17676 = (state_17712[(7)]);
var inst_17678 = (inst_17676 < cnt);
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17678)){
var statearr_17716_17749 = state_17712__$1;
(statearr_17716_17749[(1)] = (6));

} else {
var statearr_17717_17750 = state_17712__$1;
(statearr_17717_17750[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (15))){
var inst_17708 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17718_17751 = state_17712__$1;
(statearr_17718_17751[(2)] = inst_17708);

(statearr_17718_17751[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (13))){
var inst_17701 = cljs.core.async.close_BANG_(out);
var state_17712__$1 = state_17712;
var statearr_17719_17752 = state_17712__$1;
(statearr_17719_17752[(2)] = inst_17701);

(statearr_17719_17752[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (6))){
var state_17712__$1 = state_17712;
var statearr_17720_17753 = state_17712__$1;
(statearr_17720_17753[(2)] = null);

(statearr_17720_17753[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (3))){
var inst_17710 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17712__$1,inst_17710);
} else {
if((state_val_17713 === (12))){
var inst_17698 = (state_17712[(8)]);
var inst_17698__$1 = (state_17712[(2)]);
var inst_17699 = cljs.core.some(cljs.core.nil_QMARK_,inst_17698__$1);
var state_17712__$1 = (function (){var statearr_17721 = state_17712;
(statearr_17721[(8)] = inst_17698__$1);

return statearr_17721;
})();
if(cljs.core.truth_(inst_17699)){
var statearr_17722_17754 = state_17712__$1;
(statearr_17722_17754[(1)] = (13));

} else {
var statearr_17723_17755 = state_17712__$1;
(statearr_17723_17755[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (2))){
var inst_17675 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17676 = (0);
var state_17712__$1 = (function (){var statearr_17724 = state_17712;
(statearr_17724[(9)] = inst_17675);

(statearr_17724[(7)] = inst_17676);

return statearr_17724;
})();
var statearr_17725_17756 = state_17712__$1;
(statearr_17725_17756[(2)] = null);

(statearr_17725_17756[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (11))){
var inst_17676 = (state_17712[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17712,(10),Object,null,(9));
var inst_17685 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17676) : chs__$1.call(null,inst_17676));
var inst_17686 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17676) : done.call(null,inst_17676));
var inst_17687 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17685,inst_17686);
var state_17712__$1 = state_17712;
var statearr_17726_17757 = state_17712__$1;
(statearr_17726_17757[(2)] = inst_17687);


cljs.core.async.impl.ioc_helpers.process_exception(state_17712__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (9))){
var inst_17676 = (state_17712[(7)]);
var inst_17689 = (state_17712[(2)]);
var inst_17690 = (inst_17676 + (1));
var inst_17676__$1 = inst_17690;
var state_17712__$1 = (function (){var statearr_17727 = state_17712;
(statearr_17727[(7)] = inst_17676__$1);

(statearr_17727[(10)] = inst_17689);

return statearr_17727;
})();
var statearr_17728_17758 = state_17712__$1;
(statearr_17728_17758[(2)] = null);

(statearr_17728_17758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (5))){
var inst_17696 = (state_17712[(2)]);
var state_17712__$1 = (function (){var statearr_17729 = state_17712;
(statearr_17729[(11)] = inst_17696);

return statearr_17729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17712__$1,(12),dchan);
} else {
if((state_val_17713 === (14))){
var inst_17698 = (state_17712[(8)]);
var inst_17703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17698);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17712__$1,(16),out,inst_17703);
} else {
if((state_val_17713 === (16))){
var inst_17705 = (state_17712[(2)]);
var state_17712__$1 = (function (){var statearr_17730 = state_17712;
(statearr_17730[(12)] = inst_17705);

return statearr_17730;
})();
var statearr_17731_17759 = state_17712__$1;
(statearr_17731_17759[(2)] = null);

(statearr_17731_17759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (10))){
var inst_17680 = (state_17712[(2)]);
var inst_17681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17712__$1 = (function (){var statearr_17732 = state_17712;
(statearr_17732[(13)] = inst_17680);

return statearr_17732;
})();
var statearr_17733_17760 = state_17712__$1;
(statearr_17733_17760[(2)] = inst_17681);


cljs.core.async.impl.ioc_helpers.process_exception(state_17712__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (8))){
var inst_17694 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17734_17761 = state_17712__$1;
(statearr_17734_17761[(2)] = inst_17694);

(statearr_17734_17761[(1)] = (5));


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
});})(c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15558__auto__,c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_17738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17738[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_17738[(1)] = (1));

return statearr_17738;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_17712){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17712);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17739){if((e17739 instanceof Object)){
var ex__15562__auto__ = e17739;
var statearr_17740_17762 = state_17712;
(statearr_17740_17762[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17712);

return cljs.core.cst$kw$recur;
} else {
throw e17739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17763 = state_17712;
state_17712 = G__17763;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15684__auto__ = (function (){var statearr_17741 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17746);

return statearr_17741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17746,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17765 = [];
var len__7481__auto___17823 = arguments.length;
var i__7482__auto___17824 = (0);
while(true){
if((i__7482__auto___17824 < len__7481__auto___17823)){
args17765.push((arguments[i__7482__auto___17824]));

var G__17825 = (i__7482__auto___17824 + (1));
i__7482__auto___17824 = G__17825;
continue;
} else {
}
break;
}

var G__17767 = args17765.length;
switch (G__17767) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17765.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___17827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17827,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17827,out){
return (function (state_17799){
var state_val_17800 = (state_17799[(1)]);
if((state_val_17800 === (7))){
var inst_17778 = (state_17799[(7)]);
var inst_17779 = (state_17799[(8)]);
var inst_17778__$1 = (state_17799[(2)]);
var inst_17779__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17778__$1,(0),null);
var inst_17780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17778__$1,(1),null);
var inst_17781 = (inst_17779__$1 == null);
var state_17799__$1 = (function (){var statearr_17801 = state_17799;
(statearr_17801[(7)] = inst_17778__$1);

(statearr_17801[(9)] = inst_17780);

(statearr_17801[(8)] = inst_17779__$1);

return statearr_17801;
})();
if(cljs.core.truth_(inst_17781)){
var statearr_17802_17828 = state_17799__$1;
(statearr_17802_17828[(1)] = (8));

} else {
var statearr_17803_17829 = state_17799__$1;
(statearr_17803_17829[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (1))){
var inst_17768 = cljs.core.vec(chs);
var inst_17769 = inst_17768;
var state_17799__$1 = (function (){var statearr_17804 = state_17799;
(statearr_17804[(10)] = inst_17769);

return statearr_17804;
})();
var statearr_17805_17830 = state_17799__$1;
(statearr_17805_17830[(2)] = null);

(statearr_17805_17830[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (4))){
var inst_17769 = (state_17799[(10)]);
var state_17799__$1 = state_17799;
return cljs.core.async.ioc_alts_BANG_(state_17799__$1,(7),inst_17769);
} else {
if((state_val_17800 === (6))){
var inst_17795 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17806_17831 = state_17799__$1;
(statearr_17806_17831[(2)] = inst_17795);

(statearr_17806_17831[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (3))){
var inst_17797 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17799__$1,inst_17797);
} else {
if((state_val_17800 === (2))){
var inst_17769 = (state_17799[(10)]);
var inst_17771 = cljs.core.count(inst_17769);
var inst_17772 = (inst_17771 > (0));
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17772)){
var statearr_17808_17832 = state_17799__$1;
(statearr_17808_17832[(1)] = (4));

} else {
var statearr_17809_17833 = state_17799__$1;
(statearr_17809_17833[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (11))){
var inst_17769 = (state_17799[(10)]);
var inst_17788 = (state_17799[(2)]);
var tmp17807 = inst_17769;
var inst_17769__$1 = tmp17807;
var state_17799__$1 = (function (){var statearr_17810 = state_17799;
(statearr_17810[(11)] = inst_17788);

(statearr_17810[(10)] = inst_17769__$1);

return statearr_17810;
})();
var statearr_17811_17834 = state_17799__$1;
(statearr_17811_17834[(2)] = null);

(statearr_17811_17834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (9))){
var inst_17779 = (state_17799[(8)]);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17799__$1,(11),out,inst_17779);
} else {
if((state_val_17800 === (5))){
var inst_17793 = cljs.core.async.close_BANG_(out);
var state_17799__$1 = state_17799;
var statearr_17812_17835 = state_17799__$1;
(statearr_17812_17835[(2)] = inst_17793);

(statearr_17812_17835[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (10))){
var inst_17791 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17813_17836 = state_17799__$1;
(statearr_17813_17836[(2)] = inst_17791);

(statearr_17813_17836[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17800 === (8))){
var inst_17778 = (state_17799[(7)]);
var inst_17769 = (state_17799[(10)]);
var inst_17780 = (state_17799[(9)]);
var inst_17779 = (state_17799[(8)]);
var inst_17783 = (function (){var cs = inst_17769;
var vec__17774 = inst_17778;
var v = inst_17779;
var c = inst_17780;
return ((function (cs,vec__17774,v,c,inst_17778,inst_17769,inst_17780,inst_17779,state_val_17800,c__15682__auto___17827,out){
return (function (p1__17764_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17764_SHARP_);
});
;})(cs,vec__17774,v,c,inst_17778,inst_17769,inst_17780,inst_17779,state_val_17800,c__15682__auto___17827,out))
})();
var inst_17784 = cljs.core.filterv(inst_17783,inst_17769);
var inst_17769__$1 = inst_17784;
var state_17799__$1 = (function (){var statearr_17814 = state_17799;
(statearr_17814[(10)] = inst_17769__$1);

return statearr_17814;
})();
var statearr_17815_17837 = state_17799__$1;
(statearr_17815_17837[(2)] = null);

(statearr_17815_17837[(1)] = (2));


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
});})(c__15682__auto___17827,out))
;
return ((function (switch__15558__auto__,c__15682__auto___17827,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_17819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17819[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_17819[(1)] = (1));

return statearr_17819;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_17799){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17799);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object)){
var ex__15562__auto__ = e17820;
var statearr_17821_17838 = state_17799;
(statearr_17821_17838[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17799);

return cljs.core.cst$kw$recur;
} else {
throw e17820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17839 = state_17799;
state_17799 = G__17839;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_17799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_17799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17827,out))
})();
var state__15684__auto__ = (function (){var statearr_17822 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17827);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17827,out))
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
var args17840 = [];
var len__7481__auto___17889 = arguments.length;
var i__7482__auto___17890 = (0);
while(true){
if((i__7482__auto___17890 < len__7481__auto___17889)){
args17840.push((arguments[i__7482__auto___17890]));

var G__17891 = (i__7482__auto___17890 + (1));
i__7482__auto___17890 = G__17891;
continue;
} else {
}
break;
}

var G__17842 = args17840.length;
switch (G__17842) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17840.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___17893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17893,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17893,out){
return (function (state_17866){
var state_val_17867 = (state_17866[(1)]);
if((state_val_17867 === (7))){
var inst_17848 = (state_17866[(7)]);
var inst_17848__$1 = (state_17866[(2)]);
var inst_17849 = (inst_17848__$1 == null);
var inst_17850 = cljs.core.not(inst_17849);
var state_17866__$1 = (function (){var statearr_17868 = state_17866;
(statearr_17868[(7)] = inst_17848__$1);

return statearr_17868;
})();
if(inst_17850){
var statearr_17869_17894 = state_17866__$1;
(statearr_17869_17894[(1)] = (8));

} else {
var statearr_17870_17895 = state_17866__$1;
(statearr_17870_17895[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (1))){
var inst_17843 = (0);
var state_17866__$1 = (function (){var statearr_17871 = state_17866;
(statearr_17871[(8)] = inst_17843);

return statearr_17871;
})();
var statearr_17872_17896 = state_17866__$1;
(statearr_17872_17896[(2)] = null);

(statearr_17872_17896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (4))){
var state_17866__$1 = state_17866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17866__$1,(7),ch);
} else {
if((state_val_17867 === (6))){
var inst_17861 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
var statearr_17873_17897 = state_17866__$1;
(statearr_17873_17897[(2)] = inst_17861);

(statearr_17873_17897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (3))){
var inst_17863 = (state_17866[(2)]);
var inst_17864 = cljs.core.async.close_BANG_(out);
var state_17866__$1 = (function (){var statearr_17874 = state_17866;
(statearr_17874[(9)] = inst_17863);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17866__$1,inst_17864);
} else {
if((state_val_17867 === (2))){
var inst_17843 = (state_17866[(8)]);
var inst_17845 = (inst_17843 < n);
var state_17866__$1 = state_17866;
if(cljs.core.truth_(inst_17845)){
var statearr_17875_17898 = state_17866__$1;
(statearr_17875_17898[(1)] = (4));

} else {
var statearr_17876_17899 = state_17866__$1;
(statearr_17876_17899[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (11))){
var inst_17843 = (state_17866[(8)]);
var inst_17853 = (state_17866[(2)]);
var inst_17854 = (inst_17843 + (1));
var inst_17843__$1 = inst_17854;
var state_17866__$1 = (function (){var statearr_17877 = state_17866;
(statearr_17877[(10)] = inst_17853);

(statearr_17877[(8)] = inst_17843__$1);

return statearr_17877;
})();
var statearr_17878_17900 = state_17866__$1;
(statearr_17878_17900[(2)] = null);

(statearr_17878_17900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (9))){
var state_17866__$1 = state_17866;
var statearr_17879_17901 = state_17866__$1;
(statearr_17879_17901[(2)] = null);

(statearr_17879_17901[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (5))){
var state_17866__$1 = state_17866;
var statearr_17880_17902 = state_17866__$1;
(statearr_17880_17902[(2)] = null);

(statearr_17880_17902[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (10))){
var inst_17858 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
var statearr_17881_17903 = state_17866__$1;
(statearr_17881_17903[(2)] = inst_17858);

(statearr_17881_17903[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17867 === (8))){
var inst_17848 = (state_17866[(7)]);
var state_17866__$1 = state_17866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17866__$1,(11),out,inst_17848);
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
});})(c__15682__auto___17893,out))
;
return ((function (switch__15558__auto__,c__15682__auto___17893,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17885[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_17866){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17866);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__15562__auto__ = e17886;
var statearr_17887_17904 = state_17866;
(statearr_17887_17904[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17866);

return cljs.core.cst$kw$recur;
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17905 = state_17866;
state_17866 = G__17905;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_17866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_17866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17893,out))
})();
var state__15684__auto__ = (function (){var statearr_17888 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17893);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17893,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17915 = (function (map_LT_,f,ch,meta17916){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17916 = meta17916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17917,meta17916__$1){
var self__ = this;
var _17917__$1 = this;
return (new cljs.core.async.t_cljs$core$async17915(self__.map_LT_,self__.f,self__.ch,meta17916__$1));
});

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17917){
var self__ = this;
var _17917__$1 = this;
return self__.meta17916;
});

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17918 = (function (map_LT_,f,ch,meta17916,_,fn1,meta17919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17916 = meta17916;
this._ = _;
this.fn1 = fn1;
this.meta17919 = meta17919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17920,meta17919__$1){
var self__ = this;
var _17920__$1 = this;
return (new cljs.core.async.t_cljs$core$async17918(self__.map_LT_,self__.f,self__.ch,self__.meta17916,self__._,self__.fn1,meta17919__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17920){
var self__ = this;
var _17920__$1 = this;
return self__.meta17919;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17906_SHARP_){
var G__17921 = (((p1__17906_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17906_SHARP_) : self__.f.call(null,p1__17906_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17921) : f1.call(null,G__17921));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17916,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17915], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17919], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17918";

cljs.core.async.t_cljs$core$async17918.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17918");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17918 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17918(map_LT___$1,f__$1,ch__$1,meta17916__$1,___$2,fn1__$1,meta17919){
return (new cljs.core.async.t_cljs$core$async17918(map_LT___$1,f__$1,ch__$1,meta17916__$1,___$2,fn1__$1,meta17919));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17918(self__.map_LT_,self__.f,self__.ch,self__.meta17916,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6394__auto__ = ret;
if(cljs.core.truth_(and__6394__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6394__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17922 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17922) : self__.f.call(null,G__17922));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17916], null);
});

cljs.core.async.t_cljs$core$async17915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17915";

cljs.core.async.t_cljs$core$async17915.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17915");
});

cljs.core.async.__GT_t_cljs$core$async17915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17915(map_LT___$1,f__$1,ch__$1,meta17916){
return (new cljs.core.async.t_cljs$core$async17915(map_LT___$1,f__$1,ch__$1,meta17916));
});

}

return (new cljs.core.async.t_cljs$core$async17915(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17926 = (function (map_GT_,f,ch,meta17927){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17927 = meta17927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17928,meta17927__$1){
var self__ = this;
var _17928__$1 = this;
return (new cljs.core.async.t_cljs$core$async17926(self__.map_GT_,self__.f,self__.ch,meta17927__$1));
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17928){
var self__ = this;
var _17928__$1 = this;
return self__.meta17927;
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17927], null);
});

cljs.core.async.t_cljs$core$async17926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17926";

cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17926");
});

cljs.core.async.__GT_t_cljs$core$async17926 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17926(map_GT___$1,f__$1,ch__$1,meta17927){
return (new cljs.core.async.t_cljs$core$async17926(map_GT___$1,f__$1,ch__$1,meta17927));
});

}

return (new cljs.core.async.t_cljs$core$async17926(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17932 = (function (filter_GT_,p,ch,meta17933){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17933 = meta17933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17934,meta17933__$1){
var self__ = this;
var _17934__$1 = this;
return (new cljs.core.async.t_cljs$core$async17932(self__.filter_GT_,self__.p,self__.ch,meta17933__$1));
});

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17934){
var self__ = this;
var _17934__$1 = this;
return self__.meta17933;
});

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17933], null);
});

cljs.core.async.t_cljs$core$async17932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17932";

cljs.core.async.t_cljs$core$async17932.cljs$lang$ctorPrWriter = (function (this__7012__auto__,writer__7013__auto__,opt__7014__auto__){
return cljs.core._write(writer__7013__auto__,"cljs.core.async/t_cljs$core$async17932");
});

cljs.core.async.__GT_t_cljs$core$async17932 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17932(filter_GT___$1,p__$1,ch__$1,meta17933){
return (new cljs.core.async.t_cljs$core$async17932(filter_GT___$1,p__$1,ch__$1,meta17933));
});

}

return (new cljs.core.async.t_cljs$core$async17932(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17935 = [];
var len__7481__auto___17979 = arguments.length;
var i__7482__auto___17980 = (0);
while(true){
if((i__7482__auto___17980 < len__7481__auto___17979)){
args17935.push((arguments[i__7482__auto___17980]));

var G__17981 = (i__7482__auto___17980 + (1));
i__7482__auto___17980 = G__17981;
continue;
} else {
}
break;
}

var G__17937 = args17935.length;
switch (G__17937) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17935.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___17983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___17983,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___17983,out){
return (function (state_17958){
var state_val_17959 = (state_17958[(1)]);
if((state_val_17959 === (7))){
var inst_17954 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17960_17984 = state_17958__$1;
(statearr_17960_17984[(2)] = inst_17954);

(statearr_17960_17984[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (1))){
var state_17958__$1 = state_17958;
var statearr_17961_17985 = state_17958__$1;
(statearr_17961_17985[(2)] = null);

(statearr_17961_17985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (4))){
var inst_17940 = (state_17958[(7)]);
var inst_17940__$1 = (state_17958[(2)]);
var inst_17941 = (inst_17940__$1 == null);
var state_17958__$1 = (function (){var statearr_17962 = state_17958;
(statearr_17962[(7)] = inst_17940__$1);

return statearr_17962;
})();
if(cljs.core.truth_(inst_17941)){
var statearr_17963_17986 = state_17958__$1;
(statearr_17963_17986[(1)] = (5));

} else {
var statearr_17964_17987 = state_17958__$1;
(statearr_17964_17987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (6))){
var inst_17940 = (state_17958[(7)]);
var inst_17945 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17940) : p.call(null,inst_17940));
var state_17958__$1 = state_17958;
if(cljs.core.truth_(inst_17945)){
var statearr_17965_17988 = state_17958__$1;
(statearr_17965_17988[(1)] = (8));

} else {
var statearr_17966_17989 = state_17958__$1;
(statearr_17966_17989[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (3))){
var inst_17956 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17958__$1,inst_17956);
} else {
if((state_val_17959 === (2))){
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17958__$1,(4),ch);
} else {
if((state_val_17959 === (11))){
var inst_17948 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17967_17990 = state_17958__$1;
(statearr_17967_17990[(2)] = inst_17948);

(statearr_17967_17990[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (9))){
var state_17958__$1 = state_17958;
var statearr_17968_17991 = state_17958__$1;
(statearr_17968_17991[(2)] = null);

(statearr_17968_17991[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (5))){
var inst_17943 = cljs.core.async.close_BANG_(out);
var state_17958__$1 = state_17958;
var statearr_17969_17992 = state_17958__$1;
(statearr_17969_17992[(2)] = inst_17943);

(statearr_17969_17992[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (10))){
var inst_17951 = (state_17958[(2)]);
var state_17958__$1 = (function (){var statearr_17970 = state_17958;
(statearr_17970[(8)] = inst_17951);

return statearr_17970;
})();
var statearr_17971_17993 = state_17958__$1;
(statearr_17971_17993[(2)] = null);

(statearr_17971_17993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (8))){
var inst_17940 = (state_17958[(7)]);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17958__$1,(11),out,inst_17940);
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
});})(c__15682__auto___17983,out))
;
return ((function (switch__15558__auto__,c__15682__auto___17983,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_17975 = [null,null,null,null,null,null,null,null,null];
(statearr_17975[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_17975[(1)] = (1));

return statearr_17975;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_17958){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_17958);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e17976){if((e17976 instanceof Object)){
var ex__15562__auto__ = e17976;
var statearr_17977_17994 = state_17958;
(statearr_17977_17994[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17958);

return cljs.core.cst$kw$recur;
} else {
throw e17976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__17995 = state_17958;
state_17958 = G__17995;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_17958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_17958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___17983,out))
})();
var state__15684__auto__ = (function (){var statearr_17978 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_17978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___17983);

return statearr_17978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___17983,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17996 = [];
var len__7481__auto___17999 = arguments.length;
var i__7482__auto___18000 = (0);
while(true){
if((i__7482__auto___18000 < len__7481__auto___17999)){
args17996.push((arguments[i__7482__auto___18000]));

var G__18001 = (i__7482__auto___18000 + (1));
i__7482__auto___18000 = G__18001;
continue;
} else {
}
break;
}

var G__17998 = args17996.length;
switch (G__17998) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17996.length)].join('')));

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
var c__15682__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto__){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto__){
return (function (state_18168){
var state_val_18169 = (state_18168[(1)]);
if((state_val_18169 === (7))){
var inst_18164 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
var statearr_18170_18211 = state_18168__$1;
(statearr_18170_18211[(2)] = inst_18164);

(statearr_18170_18211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (20))){
var inst_18134 = (state_18168[(7)]);
var inst_18145 = (state_18168[(2)]);
var inst_18146 = cljs.core.next(inst_18134);
var inst_18120 = inst_18146;
var inst_18121 = null;
var inst_18122 = (0);
var inst_18123 = (0);
var state_18168__$1 = (function (){var statearr_18171 = state_18168;
(statearr_18171[(8)] = inst_18123);

(statearr_18171[(9)] = inst_18145);

(statearr_18171[(10)] = inst_18120);

(statearr_18171[(11)] = inst_18122);

(statearr_18171[(12)] = inst_18121);

return statearr_18171;
})();
var statearr_18172_18212 = state_18168__$1;
(statearr_18172_18212[(2)] = null);

(statearr_18172_18212[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (1))){
var state_18168__$1 = state_18168;
var statearr_18173_18213 = state_18168__$1;
(statearr_18173_18213[(2)] = null);

(statearr_18173_18213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (4))){
var inst_18109 = (state_18168[(13)]);
var inst_18109__$1 = (state_18168[(2)]);
var inst_18110 = (inst_18109__$1 == null);
var state_18168__$1 = (function (){var statearr_18174 = state_18168;
(statearr_18174[(13)] = inst_18109__$1);

return statearr_18174;
})();
if(cljs.core.truth_(inst_18110)){
var statearr_18175_18214 = state_18168__$1;
(statearr_18175_18214[(1)] = (5));

} else {
var statearr_18176_18215 = state_18168__$1;
(statearr_18176_18215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (15))){
var state_18168__$1 = state_18168;
var statearr_18180_18216 = state_18168__$1;
(statearr_18180_18216[(2)] = null);

(statearr_18180_18216[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (21))){
var state_18168__$1 = state_18168;
var statearr_18181_18217 = state_18168__$1;
(statearr_18181_18217[(2)] = null);

(statearr_18181_18217[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (13))){
var inst_18123 = (state_18168[(8)]);
var inst_18120 = (state_18168[(10)]);
var inst_18122 = (state_18168[(11)]);
var inst_18121 = (state_18168[(12)]);
var inst_18130 = (state_18168[(2)]);
var inst_18131 = (inst_18123 + (1));
var tmp18177 = inst_18120;
var tmp18178 = inst_18122;
var tmp18179 = inst_18121;
var inst_18120__$1 = tmp18177;
var inst_18121__$1 = tmp18179;
var inst_18122__$1 = tmp18178;
var inst_18123__$1 = inst_18131;
var state_18168__$1 = (function (){var statearr_18182 = state_18168;
(statearr_18182[(8)] = inst_18123__$1);

(statearr_18182[(10)] = inst_18120__$1);

(statearr_18182[(14)] = inst_18130);

(statearr_18182[(11)] = inst_18122__$1);

(statearr_18182[(12)] = inst_18121__$1);

return statearr_18182;
})();
var statearr_18183_18218 = state_18168__$1;
(statearr_18183_18218[(2)] = null);

(statearr_18183_18218[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (22))){
var state_18168__$1 = state_18168;
var statearr_18184_18219 = state_18168__$1;
(statearr_18184_18219[(2)] = null);

(statearr_18184_18219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (6))){
var inst_18109 = (state_18168[(13)]);
var inst_18118 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18109) : f.call(null,inst_18109));
var inst_18119 = cljs.core.seq(inst_18118);
var inst_18120 = inst_18119;
var inst_18121 = null;
var inst_18122 = (0);
var inst_18123 = (0);
var state_18168__$1 = (function (){var statearr_18185 = state_18168;
(statearr_18185[(8)] = inst_18123);

(statearr_18185[(10)] = inst_18120);

(statearr_18185[(11)] = inst_18122);

(statearr_18185[(12)] = inst_18121);

return statearr_18185;
})();
var statearr_18186_18220 = state_18168__$1;
(statearr_18186_18220[(2)] = null);

(statearr_18186_18220[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (17))){
var inst_18134 = (state_18168[(7)]);
var inst_18138 = cljs.core.chunk_first(inst_18134);
var inst_18139 = cljs.core.chunk_rest(inst_18134);
var inst_18140 = cljs.core.count(inst_18138);
var inst_18120 = inst_18139;
var inst_18121 = inst_18138;
var inst_18122 = inst_18140;
var inst_18123 = (0);
var state_18168__$1 = (function (){var statearr_18187 = state_18168;
(statearr_18187[(8)] = inst_18123);

(statearr_18187[(10)] = inst_18120);

(statearr_18187[(11)] = inst_18122);

(statearr_18187[(12)] = inst_18121);

return statearr_18187;
})();
var statearr_18188_18221 = state_18168__$1;
(statearr_18188_18221[(2)] = null);

(statearr_18188_18221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (3))){
var inst_18166 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18168__$1,inst_18166);
} else {
if((state_val_18169 === (12))){
var inst_18154 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
var statearr_18189_18222 = state_18168__$1;
(statearr_18189_18222[(2)] = inst_18154);

(statearr_18189_18222[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (2))){
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18168__$1,(4),in$);
} else {
if((state_val_18169 === (23))){
var inst_18162 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
var statearr_18190_18223 = state_18168__$1;
(statearr_18190_18223[(2)] = inst_18162);

(statearr_18190_18223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (19))){
var inst_18149 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
var statearr_18191_18224 = state_18168__$1;
(statearr_18191_18224[(2)] = inst_18149);

(statearr_18191_18224[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (11))){
var inst_18134 = (state_18168[(7)]);
var inst_18120 = (state_18168[(10)]);
var inst_18134__$1 = cljs.core.seq(inst_18120);
var state_18168__$1 = (function (){var statearr_18192 = state_18168;
(statearr_18192[(7)] = inst_18134__$1);

return statearr_18192;
})();
if(inst_18134__$1){
var statearr_18193_18225 = state_18168__$1;
(statearr_18193_18225[(1)] = (14));

} else {
var statearr_18194_18226 = state_18168__$1;
(statearr_18194_18226[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (9))){
var inst_18156 = (state_18168[(2)]);
var inst_18157 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18168__$1 = (function (){var statearr_18195 = state_18168;
(statearr_18195[(15)] = inst_18156);

return statearr_18195;
})();
if(cljs.core.truth_(inst_18157)){
var statearr_18196_18227 = state_18168__$1;
(statearr_18196_18227[(1)] = (21));

} else {
var statearr_18197_18228 = state_18168__$1;
(statearr_18197_18228[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (5))){
var inst_18112 = cljs.core.async.close_BANG_(out);
var state_18168__$1 = state_18168;
var statearr_18198_18229 = state_18168__$1;
(statearr_18198_18229[(2)] = inst_18112);

(statearr_18198_18229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (14))){
var inst_18134 = (state_18168[(7)]);
var inst_18136 = cljs.core.chunked_seq_QMARK_(inst_18134);
var state_18168__$1 = state_18168;
if(inst_18136){
var statearr_18199_18230 = state_18168__$1;
(statearr_18199_18230[(1)] = (17));

} else {
var statearr_18200_18231 = state_18168__$1;
(statearr_18200_18231[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (16))){
var inst_18152 = (state_18168[(2)]);
var state_18168__$1 = state_18168;
var statearr_18201_18232 = state_18168__$1;
(statearr_18201_18232[(2)] = inst_18152);

(statearr_18201_18232[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18169 === (10))){
var inst_18123 = (state_18168[(8)]);
var inst_18121 = (state_18168[(12)]);
var inst_18128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18121,inst_18123);
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18168__$1,(13),out,inst_18128);
} else {
if((state_val_18169 === (18))){
var inst_18134 = (state_18168[(7)]);
var inst_18143 = cljs.core.first(inst_18134);
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18168__$1,(20),out,inst_18143);
} else {
if((state_val_18169 === (8))){
var inst_18123 = (state_18168[(8)]);
var inst_18122 = (state_18168[(11)]);
var inst_18125 = (inst_18123 < inst_18122);
var inst_18126 = inst_18125;
var state_18168__$1 = state_18168;
if(cljs.core.truth_(inst_18126)){
var statearr_18202_18233 = state_18168__$1;
(statearr_18202_18233[(1)] = (10));

} else {
var statearr_18203_18234 = state_18168__$1;
(statearr_18203_18234[(1)] = (11));

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
});})(c__15682__auto__))
;
return ((function (switch__15558__auto__,c__15682__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____0 = (function (){
var statearr_18207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18207[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__);

(statearr_18207[(1)] = (1));

return statearr_18207;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____1 = (function (state_18168){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_18168);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e18208){if((e18208 instanceof Object)){
var ex__15562__auto__ = e18208;
var statearr_18209_18235 = state_18168;
(statearr_18209_18235[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18168);

return cljs.core.cst$kw$recur;
} else {
throw e18208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__18236 = state_18168;
state_18168 = G__18236;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__ = function(state_18168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____1.call(this,state_18168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15559__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto__))
})();
var state__15684__auto__ = (function (){var statearr_18210 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_18210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto__);

return statearr_18210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto__))
);

return c__15682__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18237 = [];
var len__7481__auto___18240 = arguments.length;
var i__7482__auto___18241 = (0);
while(true){
if((i__7482__auto___18241 < len__7481__auto___18240)){
args18237.push((arguments[i__7482__auto___18241]));

var G__18242 = (i__7482__auto___18241 + (1));
i__7482__auto___18241 = G__18242;
continue;
} else {
}
break;
}

var G__18239 = args18237.length;
switch (G__18239) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18237.length)].join('')));

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
var args18244 = [];
var len__7481__auto___18247 = arguments.length;
var i__7482__auto___18248 = (0);
while(true){
if((i__7482__auto___18248 < len__7481__auto___18247)){
args18244.push((arguments[i__7482__auto___18248]));

var G__18249 = (i__7482__auto___18248 + (1));
i__7482__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var G__18246 = args18244.length;
switch (G__18246) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18244.length)].join('')));

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
var args18251 = [];
var len__7481__auto___18302 = arguments.length;
var i__7482__auto___18303 = (0);
while(true){
if((i__7482__auto___18303 < len__7481__auto___18302)){
args18251.push((arguments[i__7482__auto___18303]));

var G__18304 = (i__7482__auto___18303 + (1));
i__7482__auto___18303 = G__18304;
continue;
} else {
}
break;
}

var G__18253 = args18251.length;
switch (G__18253) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18251.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___18306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___18306,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___18306,out){
return (function (state_18277){
var state_val_18278 = (state_18277[(1)]);
if((state_val_18278 === (7))){
var inst_18272 = (state_18277[(2)]);
var state_18277__$1 = state_18277;
var statearr_18279_18307 = state_18277__$1;
(statearr_18279_18307[(2)] = inst_18272);

(statearr_18279_18307[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (1))){
var inst_18254 = null;
var state_18277__$1 = (function (){var statearr_18280 = state_18277;
(statearr_18280[(7)] = inst_18254);

return statearr_18280;
})();
var statearr_18281_18308 = state_18277__$1;
(statearr_18281_18308[(2)] = null);

(statearr_18281_18308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (4))){
var inst_18257 = (state_18277[(8)]);
var inst_18257__$1 = (state_18277[(2)]);
var inst_18258 = (inst_18257__$1 == null);
var inst_18259 = cljs.core.not(inst_18258);
var state_18277__$1 = (function (){var statearr_18282 = state_18277;
(statearr_18282[(8)] = inst_18257__$1);

return statearr_18282;
})();
if(inst_18259){
var statearr_18283_18309 = state_18277__$1;
(statearr_18283_18309[(1)] = (5));

} else {
var statearr_18284_18310 = state_18277__$1;
(statearr_18284_18310[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (6))){
var state_18277__$1 = state_18277;
var statearr_18285_18311 = state_18277__$1;
(statearr_18285_18311[(2)] = null);

(statearr_18285_18311[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (3))){
var inst_18274 = (state_18277[(2)]);
var inst_18275 = cljs.core.async.close_BANG_(out);
var state_18277__$1 = (function (){var statearr_18286 = state_18277;
(statearr_18286[(9)] = inst_18274);

return statearr_18286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18277__$1,inst_18275);
} else {
if((state_val_18278 === (2))){
var state_18277__$1 = state_18277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18277__$1,(4),ch);
} else {
if((state_val_18278 === (11))){
var inst_18257 = (state_18277[(8)]);
var inst_18266 = (state_18277[(2)]);
var inst_18254 = inst_18257;
var state_18277__$1 = (function (){var statearr_18287 = state_18277;
(statearr_18287[(7)] = inst_18254);

(statearr_18287[(10)] = inst_18266);

return statearr_18287;
})();
var statearr_18288_18312 = state_18277__$1;
(statearr_18288_18312[(2)] = null);

(statearr_18288_18312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (9))){
var inst_18257 = (state_18277[(8)]);
var state_18277__$1 = state_18277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18277__$1,(11),out,inst_18257);
} else {
if((state_val_18278 === (5))){
var inst_18254 = (state_18277[(7)]);
var inst_18257 = (state_18277[(8)]);
var inst_18261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18257,inst_18254);
var state_18277__$1 = state_18277;
if(inst_18261){
var statearr_18290_18313 = state_18277__$1;
(statearr_18290_18313[(1)] = (8));

} else {
var statearr_18291_18314 = state_18277__$1;
(statearr_18291_18314[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (10))){
var inst_18269 = (state_18277[(2)]);
var state_18277__$1 = state_18277;
var statearr_18292_18315 = state_18277__$1;
(statearr_18292_18315[(2)] = inst_18269);

(statearr_18292_18315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18278 === (8))){
var inst_18254 = (state_18277[(7)]);
var tmp18289 = inst_18254;
var inst_18254__$1 = tmp18289;
var state_18277__$1 = (function (){var statearr_18293 = state_18277;
(statearr_18293[(7)] = inst_18254__$1);

return statearr_18293;
})();
var statearr_18294_18316 = state_18277__$1;
(statearr_18294_18316[(2)] = null);

(statearr_18294_18316[(1)] = (2));


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
});})(c__15682__auto___18306,out))
;
return ((function (switch__15558__auto__,c__15682__auto___18306,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_18298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18298[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_18298[(1)] = (1));

return statearr_18298;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_18277){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_18277);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e18299){if((e18299 instanceof Object)){
var ex__15562__auto__ = e18299;
var statearr_18300_18317 = state_18277;
(statearr_18300_18317[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18277);

return cljs.core.cst$kw$recur;
} else {
throw e18299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__18318 = state_18277;
state_18277 = G__18318;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_18277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_18277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___18306,out))
})();
var state__15684__auto__ = (function (){var statearr_18301 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_18301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___18306);

return statearr_18301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___18306,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18319 = [];
var len__7481__auto___18389 = arguments.length;
var i__7482__auto___18390 = (0);
while(true){
if((i__7482__auto___18390 < len__7481__auto___18389)){
args18319.push((arguments[i__7482__auto___18390]));

var G__18391 = (i__7482__auto___18390 + (1));
i__7482__auto___18390 = G__18391;
continue;
} else {
}
break;
}

var G__18321 = args18319.length;
switch (G__18321) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18319.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___18393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___18393,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___18393,out){
return (function (state_18359){
var state_val_18360 = (state_18359[(1)]);
if((state_val_18360 === (7))){
var inst_18355 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
var statearr_18361_18394 = state_18359__$1;
(statearr_18361_18394[(2)] = inst_18355);

(statearr_18361_18394[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (1))){
var inst_18322 = (new Array(n));
var inst_18323 = inst_18322;
var inst_18324 = (0);
var state_18359__$1 = (function (){var statearr_18362 = state_18359;
(statearr_18362[(7)] = inst_18323);

(statearr_18362[(8)] = inst_18324);

return statearr_18362;
})();
var statearr_18363_18395 = state_18359__$1;
(statearr_18363_18395[(2)] = null);

(statearr_18363_18395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (4))){
var inst_18327 = (state_18359[(9)]);
var inst_18327__$1 = (state_18359[(2)]);
var inst_18328 = (inst_18327__$1 == null);
var inst_18329 = cljs.core.not(inst_18328);
var state_18359__$1 = (function (){var statearr_18364 = state_18359;
(statearr_18364[(9)] = inst_18327__$1);

return statearr_18364;
})();
if(inst_18329){
var statearr_18365_18396 = state_18359__$1;
(statearr_18365_18396[(1)] = (5));

} else {
var statearr_18366_18397 = state_18359__$1;
(statearr_18366_18397[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (15))){
var inst_18349 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
var statearr_18367_18398 = state_18359__$1;
(statearr_18367_18398[(2)] = inst_18349);

(statearr_18367_18398[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (13))){
var state_18359__$1 = state_18359;
var statearr_18368_18399 = state_18359__$1;
(statearr_18368_18399[(2)] = null);

(statearr_18368_18399[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (6))){
var inst_18324 = (state_18359[(8)]);
var inst_18345 = (inst_18324 > (0));
var state_18359__$1 = state_18359;
if(cljs.core.truth_(inst_18345)){
var statearr_18369_18400 = state_18359__$1;
(statearr_18369_18400[(1)] = (12));

} else {
var statearr_18370_18401 = state_18359__$1;
(statearr_18370_18401[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (3))){
var inst_18357 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18359__$1,inst_18357);
} else {
if((state_val_18360 === (12))){
var inst_18323 = (state_18359[(7)]);
var inst_18347 = cljs.core.vec(inst_18323);
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18359__$1,(15),out,inst_18347);
} else {
if((state_val_18360 === (2))){
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18359__$1,(4),ch);
} else {
if((state_val_18360 === (11))){
var inst_18339 = (state_18359[(2)]);
var inst_18340 = (new Array(n));
var inst_18323 = inst_18340;
var inst_18324 = (0);
var state_18359__$1 = (function (){var statearr_18371 = state_18359;
(statearr_18371[(7)] = inst_18323);

(statearr_18371[(8)] = inst_18324);

(statearr_18371[(10)] = inst_18339);

return statearr_18371;
})();
var statearr_18372_18402 = state_18359__$1;
(statearr_18372_18402[(2)] = null);

(statearr_18372_18402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (9))){
var inst_18323 = (state_18359[(7)]);
var inst_18337 = cljs.core.vec(inst_18323);
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18359__$1,(11),out,inst_18337);
} else {
if((state_val_18360 === (5))){
var inst_18327 = (state_18359[(9)]);
var inst_18323 = (state_18359[(7)]);
var inst_18324 = (state_18359[(8)]);
var inst_18332 = (state_18359[(11)]);
var inst_18331 = (inst_18323[inst_18324] = inst_18327);
var inst_18332__$1 = (inst_18324 + (1));
var inst_18333 = (inst_18332__$1 < n);
var state_18359__$1 = (function (){var statearr_18373 = state_18359;
(statearr_18373[(12)] = inst_18331);

(statearr_18373[(11)] = inst_18332__$1);

return statearr_18373;
})();
if(cljs.core.truth_(inst_18333)){
var statearr_18374_18403 = state_18359__$1;
(statearr_18374_18403[(1)] = (8));

} else {
var statearr_18375_18404 = state_18359__$1;
(statearr_18375_18404[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (14))){
var inst_18352 = (state_18359[(2)]);
var inst_18353 = cljs.core.async.close_BANG_(out);
var state_18359__$1 = (function (){var statearr_18377 = state_18359;
(statearr_18377[(13)] = inst_18352);

return statearr_18377;
})();
var statearr_18378_18405 = state_18359__$1;
(statearr_18378_18405[(2)] = inst_18353);

(statearr_18378_18405[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (10))){
var inst_18343 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
var statearr_18379_18406 = state_18359__$1;
(statearr_18379_18406[(2)] = inst_18343);

(statearr_18379_18406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (8))){
var inst_18323 = (state_18359[(7)]);
var inst_18332 = (state_18359[(11)]);
var tmp18376 = inst_18323;
var inst_18323__$1 = tmp18376;
var inst_18324 = inst_18332;
var state_18359__$1 = (function (){var statearr_18380 = state_18359;
(statearr_18380[(7)] = inst_18323__$1);

(statearr_18380[(8)] = inst_18324);

return statearr_18380;
})();
var statearr_18381_18407 = state_18359__$1;
(statearr_18381_18407[(2)] = null);

(statearr_18381_18407[(1)] = (2));


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
});})(c__15682__auto___18393,out))
;
return ((function (switch__15558__auto__,c__15682__auto___18393,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_18385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18385[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_18385[(1)] = (1));

return statearr_18385;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_18359){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_18359);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e18386){if((e18386 instanceof Object)){
var ex__15562__auto__ = e18386;
var statearr_18387_18408 = state_18359;
(statearr_18387_18408[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18359);

return cljs.core.cst$kw$recur;
} else {
throw e18386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__18409 = state_18359;
state_18359 = G__18409;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_18359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_18359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___18393,out))
})();
var state__15684__auto__ = (function (){var statearr_18388 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_18388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___18393);

return statearr_18388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___18393,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18410 = [];
var len__7481__auto___18484 = arguments.length;
var i__7482__auto___18485 = (0);
while(true){
if((i__7482__auto___18485 < len__7481__auto___18484)){
args18410.push((arguments[i__7482__auto___18485]));

var G__18486 = (i__7482__auto___18485 + (1));
i__7482__auto___18485 = G__18486;
continue;
} else {
}
break;
}

var G__18412 = args18410.length;
switch (G__18412) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18410.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15682__auto___18488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15682__auto___18488,out){
return (function (){
var f__15683__auto__ = (function (){var switch__15558__auto__ = ((function (c__15682__auto___18488,out){
return (function (state_18454){
var state_val_18455 = (state_18454[(1)]);
if((state_val_18455 === (7))){
var inst_18450 = (state_18454[(2)]);
var state_18454__$1 = state_18454;
var statearr_18456_18489 = state_18454__$1;
(statearr_18456_18489[(2)] = inst_18450);

(statearr_18456_18489[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (1))){
var inst_18413 = [];
var inst_18414 = inst_18413;
var inst_18415 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18454__$1 = (function (){var statearr_18457 = state_18454;
(statearr_18457[(7)] = inst_18414);

(statearr_18457[(8)] = inst_18415);

return statearr_18457;
})();
var statearr_18458_18490 = state_18454__$1;
(statearr_18458_18490[(2)] = null);

(statearr_18458_18490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (4))){
var inst_18418 = (state_18454[(9)]);
var inst_18418__$1 = (state_18454[(2)]);
var inst_18419 = (inst_18418__$1 == null);
var inst_18420 = cljs.core.not(inst_18419);
var state_18454__$1 = (function (){var statearr_18459 = state_18454;
(statearr_18459[(9)] = inst_18418__$1);

return statearr_18459;
})();
if(inst_18420){
var statearr_18460_18491 = state_18454__$1;
(statearr_18460_18491[(1)] = (5));

} else {
var statearr_18461_18492 = state_18454__$1;
(statearr_18461_18492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (15))){
var inst_18444 = (state_18454[(2)]);
var state_18454__$1 = state_18454;
var statearr_18462_18493 = state_18454__$1;
(statearr_18462_18493[(2)] = inst_18444);

(statearr_18462_18493[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (13))){
var state_18454__$1 = state_18454;
var statearr_18463_18494 = state_18454__$1;
(statearr_18463_18494[(2)] = null);

(statearr_18463_18494[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (6))){
var inst_18414 = (state_18454[(7)]);
var inst_18439 = inst_18414.length;
var inst_18440 = (inst_18439 > (0));
var state_18454__$1 = state_18454;
if(cljs.core.truth_(inst_18440)){
var statearr_18464_18495 = state_18454__$1;
(statearr_18464_18495[(1)] = (12));

} else {
var statearr_18465_18496 = state_18454__$1;
(statearr_18465_18496[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (3))){
var inst_18452 = (state_18454[(2)]);
var state_18454__$1 = state_18454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18454__$1,inst_18452);
} else {
if((state_val_18455 === (12))){
var inst_18414 = (state_18454[(7)]);
var inst_18442 = cljs.core.vec(inst_18414);
var state_18454__$1 = state_18454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18454__$1,(15),out,inst_18442);
} else {
if((state_val_18455 === (2))){
var state_18454__$1 = state_18454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18454__$1,(4),ch);
} else {
if((state_val_18455 === (11))){
var inst_18418 = (state_18454[(9)]);
var inst_18422 = (state_18454[(10)]);
var inst_18432 = (state_18454[(2)]);
var inst_18433 = [];
var inst_18434 = inst_18433.push(inst_18418);
var inst_18414 = inst_18433;
var inst_18415 = inst_18422;
var state_18454__$1 = (function (){var statearr_18466 = state_18454;
(statearr_18466[(11)] = inst_18434);

(statearr_18466[(7)] = inst_18414);

(statearr_18466[(8)] = inst_18415);

(statearr_18466[(12)] = inst_18432);

return statearr_18466;
})();
var statearr_18467_18497 = state_18454__$1;
(statearr_18467_18497[(2)] = null);

(statearr_18467_18497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (9))){
var inst_18414 = (state_18454[(7)]);
var inst_18430 = cljs.core.vec(inst_18414);
var state_18454__$1 = state_18454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18454__$1,(11),out,inst_18430);
} else {
if((state_val_18455 === (5))){
var inst_18415 = (state_18454[(8)]);
var inst_18418 = (state_18454[(9)]);
var inst_18422 = (state_18454[(10)]);
var inst_18422__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18418) : f.call(null,inst_18418));
var inst_18423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18422__$1,inst_18415);
var inst_18424 = cljs.core.keyword_identical_QMARK_(inst_18415,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18425 = (inst_18423) || (inst_18424);
var state_18454__$1 = (function (){var statearr_18468 = state_18454;
(statearr_18468[(10)] = inst_18422__$1);

return statearr_18468;
})();
if(cljs.core.truth_(inst_18425)){
var statearr_18469_18498 = state_18454__$1;
(statearr_18469_18498[(1)] = (8));

} else {
var statearr_18470_18499 = state_18454__$1;
(statearr_18470_18499[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (14))){
var inst_18447 = (state_18454[(2)]);
var inst_18448 = cljs.core.async.close_BANG_(out);
var state_18454__$1 = (function (){var statearr_18472 = state_18454;
(statearr_18472[(13)] = inst_18447);

return statearr_18472;
})();
var statearr_18473_18500 = state_18454__$1;
(statearr_18473_18500[(2)] = inst_18448);

(statearr_18473_18500[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (10))){
var inst_18437 = (state_18454[(2)]);
var state_18454__$1 = state_18454;
var statearr_18474_18501 = state_18454__$1;
(statearr_18474_18501[(2)] = inst_18437);

(statearr_18474_18501[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18455 === (8))){
var inst_18414 = (state_18454[(7)]);
var inst_18418 = (state_18454[(9)]);
var inst_18422 = (state_18454[(10)]);
var inst_18427 = inst_18414.push(inst_18418);
var tmp18471 = inst_18414;
var inst_18414__$1 = tmp18471;
var inst_18415 = inst_18422;
var state_18454__$1 = (function (){var statearr_18475 = state_18454;
(statearr_18475[(7)] = inst_18414__$1);

(statearr_18475[(8)] = inst_18415);

(statearr_18475[(14)] = inst_18427);

return statearr_18475;
})();
var statearr_18476_18502 = state_18454__$1;
(statearr_18476_18502[(2)] = null);

(statearr_18476_18502[(1)] = (2));


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
});})(c__15682__auto___18488,out))
;
return ((function (switch__15558__auto__,c__15682__auto___18488,out){
return (function() {
var cljs$core$async$state_machine__15559__auto__ = null;
var cljs$core$async$state_machine__15559__auto____0 = (function (){
var statearr_18480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18480[(0)] = cljs$core$async$state_machine__15559__auto__);

(statearr_18480[(1)] = (1));

return statearr_18480;
});
var cljs$core$async$state_machine__15559__auto____1 = (function (state_18454){
while(true){
var ret_value__15560__auto__ = (function (){try{while(true){
var result__15561__auto__ = switch__15558__auto__(state_18454);
if(cljs.core.keyword_identical_QMARK_(result__15561__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15561__auto__;
}
break;
}
}catch (e18481){if((e18481 instanceof Object)){
var ex__15562__auto__ = e18481;
var statearr_18482_18503 = state_18454;
(statearr_18482_18503[(5)] = ex__15562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18454);

return cljs.core.cst$kw$recur;
} else {
throw e18481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15560__auto__,cljs.core.cst$kw$recur)){
var G__18504 = state_18454;
state_18454 = G__18504;
continue;
} else {
return ret_value__15560__auto__;
}
break;
}
});
cljs$core$async$state_machine__15559__auto__ = function(state_18454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15559__auto____1.call(this,state_18454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15559__auto____0;
cljs$core$async$state_machine__15559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15559__auto____1;
return cljs$core$async$state_machine__15559__auto__;
})()
;})(switch__15558__auto__,c__15682__auto___18488,out))
})();
var state__15684__auto__ = (function (){var statearr_18483 = (f__15683__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15683__auto__.cljs$core$IFn$_invoke$arity$0() : f__15683__auto__.call(null));
(statearr_18483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15682__auto___18488);

return statearr_18483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15684__auto__);
});})(c__15682__auto___18488,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

