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
var args22578 = [];
var len__19791__auto___22584 = arguments.length;
var i__19792__auto___22585 = (0);
while(true){
if((i__19792__auto___22585 < len__19791__auto___22584)){
args22578.push((arguments[i__19792__auto___22585]));

var G__22586 = (i__19792__auto___22585 + (1));
i__19792__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var G__22580 = args22578.length;
switch (G__22580) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22578.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22581 = (function (f,blockable,meta22582){
this.f = f;
this.blockable = blockable;
this.meta22582 = meta22582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22583,meta22582__$1){
var self__ = this;
var _22583__$1 = this;
return (new cljs.core.async.t_cljs$core$async22581(self__.f,self__.blockable,meta22582__$1));
});

cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22583){
var self__ = this;
var _22583__$1 = this;
return self__.meta22582;
});

cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22582","meta22582",-1754694983,null)], null);
});

cljs.core.async.t_cljs$core$async22581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22581";

cljs.core.async.t_cljs$core$async22581.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async22581");
});

cljs.core.async.__GT_t_cljs$core$async22581 = (function cljs$core$async$__GT_t_cljs$core$async22581(f__$1,blockable__$1,meta22582){
return (new cljs.core.async.t_cljs$core$async22581(f__$1,blockable__$1,meta22582));
});

}

return (new cljs.core.async.t_cljs$core$async22581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22590 = [];
var len__19791__auto___22593 = arguments.length;
var i__19792__auto___22594 = (0);
while(true){
if((i__19792__auto___22594 < len__19791__auto___22593)){
args22590.push((arguments[i__19792__auto___22594]));

var G__22595 = (i__19792__auto___22594 + (1));
i__19792__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var G__22592 = args22590.length;
switch (G__22592) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22590.length)].join('')));

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
var args22597 = [];
var len__19791__auto___22600 = arguments.length;
var i__19792__auto___22601 = (0);
while(true){
if((i__19792__auto___22601 < len__19791__auto___22600)){
args22597.push((arguments[i__19792__auto___22601]));

var G__22602 = (i__19792__auto___22601 + (1));
i__19792__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22599 = args22597.length;
switch (G__22599) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22597.length)].join('')));

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
var args22604 = [];
var len__19791__auto___22607 = arguments.length;
var i__19792__auto___22608 = (0);
while(true){
if((i__19792__auto___22608 < len__19791__auto___22607)){
args22604.push((arguments[i__19792__auto___22608]));

var G__22609 = (i__19792__auto___22608 + (1));
i__19792__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var G__22606 = args22604.length;
switch (G__22606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22604.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22611 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22611);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22611,ret){
return (function (){
return fn1.call(null,val_22611);
});})(val_22611,ret))
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
var args22612 = [];
var len__19791__auto___22615 = arguments.length;
var i__19792__auto___22616 = (0);
while(true){
if((i__19792__auto___22616 < len__19791__auto___22615)){
args22612.push((arguments[i__19792__auto___22616]));

var G__22617 = (i__19792__auto___22616 + (1));
i__19792__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var G__22614 = args22612.length;
switch (G__22614) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22612.length)].join('')));

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
var n__19631__auto___22619 = n;
var x_22620 = (0);
while(true){
if((x_22620 < n__19631__auto___22619)){
(a[x_22620] = (0));

var G__22621 = (x_22620 + (1));
x_22620 = G__22621;
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

var G__22622 = (i + (1));
i = G__22622;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22626 = (function (alt_flag,flag,meta22627){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22627 = meta22627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22628,meta22627__$1){
var self__ = this;
var _22628__$1 = this;
return (new cljs.core.async.t_cljs$core$async22626(self__.alt_flag,self__.flag,meta22627__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22628){
var self__ = this;
var _22628__$1 = this;
return self__.meta22627;
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22627","meta22627",-296063249,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22626";

cljs.core.async.t_cljs$core$async22626.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async22626");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22626 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22626(alt_flag__$1,flag__$1,meta22627){
return (new cljs.core.async.t_cljs$core$async22626(alt_flag__$1,flag__$1,meta22627));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22626(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22632 = (function (alt_handler,flag,cb,meta22633){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22633 = meta22633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22634,meta22633__$1){
var self__ = this;
var _22634__$1 = this;
return (new cljs.core.async.t_cljs$core$async22632(self__.alt_handler,self__.flag,self__.cb,meta22633__$1));
});

cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22634){
var self__ = this;
var _22634__$1 = this;
return self__.meta22633;
});

cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22633","meta22633",-18894761,null)], null);
});

cljs.core.async.t_cljs$core$async22632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22632";

cljs.core.async.t_cljs$core$async22632.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async22632");
});

cljs.core.async.__GT_t_cljs$core$async22632 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22632(alt_handler__$1,flag__$1,cb__$1,meta22633){
return (new cljs.core.async.t_cljs$core$async22632(alt_handler__$1,flag__$1,cb__$1,meta22633));
});

}

return (new cljs.core.async.t_cljs$core$async22632(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22635_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22636_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22636_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18716__auto__ = wport;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22637 = (i + (1));
i = G__22637;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18716__auto__ = ret;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18704__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18704__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18704__auto__;
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
var args__19798__auto__ = [];
var len__19791__auto___22643 = arguments.length;
var i__19792__auto___22644 = (0);
while(true){
if((i__19792__auto___22644 < len__19791__auto___22643)){
args__19798__auto__.push((arguments[i__19792__auto___22644]));

var G__22645 = (i__19792__auto___22644 + (1));
i__19792__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((1) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19799__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22640){
var map__22641 = p__22640;
var map__22641__$1 = ((((!((map__22641 == null)))?((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var opts = map__22641__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22638){
var G__22639 = cljs.core.first.call(null,seq22638);
var seq22638__$1 = cljs.core.next.call(null,seq22638);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22639,seq22638__$1);
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
var args22646 = [];
var len__19791__auto___22696 = arguments.length;
var i__19792__auto___22697 = (0);
while(true){
if((i__19792__auto___22697 < len__19791__auto___22696)){
args22646.push((arguments[i__19792__auto___22697]));

var G__22698 = (i__19792__auto___22697 + (1));
i__19792__auto___22697 = G__22698;
continue;
} else {
}
break;
}

var G__22648 = args22646.length;
switch (G__22648) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22646.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22533__auto___22700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___22700){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___22700){
return (function (state_22672){
var state_val_22673 = (state_22672[(1)]);
if((state_val_22673 === (7))){
var inst_22668 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22674_22701 = state_22672__$1;
(statearr_22674_22701[(2)] = inst_22668);

(statearr_22674_22701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (1))){
var state_22672__$1 = state_22672;
var statearr_22675_22702 = state_22672__$1;
(statearr_22675_22702[(2)] = null);

(statearr_22675_22702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (4))){
var inst_22651 = (state_22672[(7)]);
var inst_22651__$1 = (state_22672[(2)]);
var inst_22652 = (inst_22651__$1 == null);
var state_22672__$1 = (function (){var statearr_22676 = state_22672;
(statearr_22676[(7)] = inst_22651__$1);

return statearr_22676;
})();
if(cljs.core.truth_(inst_22652)){
var statearr_22677_22703 = state_22672__$1;
(statearr_22677_22703[(1)] = (5));

} else {
var statearr_22678_22704 = state_22672__$1;
(statearr_22678_22704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (13))){
var state_22672__$1 = state_22672;
var statearr_22679_22705 = state_22672__$1;
(statearr_22679_22705[(2)] = null);

(statearr_22679_22705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (6))){
var inst_22651 = (state_22672[(7)]);
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22672__$1,(11),to,inst_22651);
} else {
if((state_val_22673 === (3))){
var inst_22670 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22672__$1,inst_22670);
} else {
if((state_val_22673 === (12))){
var state_22672__$1 = state_22672;
var statearr_22680_22706 = state_22672__$1;
(statearr_22680_22706[(2)] = null);

(statearr_22680_22706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (2))){
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22672__$1,(4),from);
} else {
if((state_val_22673 === (11))){
var inst_22661 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
if(cljs.core.truth_(inst_22661)){
var statearr_22681_22707 = state_22672__$1;
(statearr_22681_22707[(1)] = (12));

} else {
var statearr_22682_22708 = state_22672__$1;
(statearr_22682_22708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (9))){
var state_22672__$1 = state_22672;
var statearr_22683_22709 = state_22672__$1;
(statearr_22683_22709[(2)] = null);

(statearr_22683_22709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (5))){
var state_22672__$1 = state_22672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22684_22710 = state_22672__$1;
(statearr_22684_22710[(1)] = (8));

} else {
var statearr_22685_22711 = state_22672__$1;
(statearr_22685_22711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (14))){
var inst_22666 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22686_22712 = state_22672__$1;
(statearr_22686_22712[(2)] = inst_22666);

(statearr_22686_22712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (10))){
var inst_22658 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22687_22713 = state_22672__$1;
(statearr_22687_22713[(2)] = inst_22658);

(statearr_22687_22713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22673 === (8))){
var inst_22655 = cljs.core.async.close_BANG_.call(null,to);
var state_22672__$1 = state_22672;
var statearr_22688_22714 = state_22672__$1;
(statearr_22688_22714[(2)] = inst_22655);

(statearr_22688_22714[(1)] = (10));


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
});})(c__22533__auto___22700))
;
return ((function (switch__22421__auto__,c__22533__auto___22700){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_22692 = [null,null,null,null,null,null,null,null];
(statearr_22692[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_22692[(1)] = (1));

return statearr_22692;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_22672){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_22672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e22693){if((e22693 instanceof Object)){
var ex__22425__auto__ = e22693;
var statearr_22694_22715 = state_22672;
(statearr_22694_22715[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22716 = state_22672;
state_22672 = G__22716;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_22672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_22672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___22700))
})();
var state__22535__auto__ = (function (){var statearr_22695 = f__22534__auto__.call(null);
(statearr_22695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___22700);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___22700))
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
return (function (p__22904){
var vec__22905 = p__22904;
var v = cljs.core.nth.call(null,vec__22905,(0),null);
var p = cljs.core.nth.call(null,vec__22905,(1),null);
var job = vec__22905;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22533__auto___23091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results){
return (function (state_22912){
var state_val_22913 = (state_22912[(1)]);
if((state_val_22913 === (1))){
var state_22912__$1 = state_22912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22912__$1,(2),res,v);
} else {
if((state_val_22913 === (2))){
var inst_22909 = (state_22912[(2)]);
var inst_22910 = cljs.core.async.close_BANG_.call(null,res);
var state_22912__$1 = (function (){var statearr_22914 = state_22912;
(statearr_22914[(7)] = inst_22909);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22912__$1,inst_22910);
} else {
return null;
}
}
});})(c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results))
;
return ((function (switch__22421__auto__,c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_22918 = [null,null,null,null,null,null,null,null];
(statearr_22918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__);

(statearr_22918[(1)] = (1));

return statearr_22918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1 = (function (state_22912){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_22912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e22919){if((e22919 instanceof Object)){
var ex__22425__auto__ = e22919;
var statearr_22920_23092 = state_22912;
(statearr_22920_23092[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23093 = state_22912;
state_22912 = G__23093;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = function(state_22912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1.call(this,state_22912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results))
})();
var state__22535__auto__ = (function (){var statearr_22921 = f__22534__auto__.call(null);
(statearr_22921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23091);

return statearr_22921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___23091,res,vec__22905,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22922){
var vec__22923 = p__22922;
var v = cljs.core.nth.call(null,vec__22923,(0),null);
var p = cljs.core.nth.call(null,vec__22923,(1),null);
var job = vec__22923;
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
var n__19631__auto___23094 = n;
var __23095 = (0);
while(true){
if((__23095 < n__19631__auto___23094)){
var G__22926_23096 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22926_23096) {
case "compute":
var c__22533__auto___23098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23095,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (__23095,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function (state_22939){
var state_val_22940 = (state_22939[(1)]);
if((state_val_22940 === (1))){
var state_22939__$1 = state_22939;
var statearr_22941_23099 = state_22939__$1;
(statearr_22941_23099[(2)] = null);

(statearr_22941_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (2))){
var state_22939__$1 = state_22939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22939__$1,(4),jobs);
} else {
if((state_val_22940 === (3))){
var inst_22937 = (state_22939[(2)]);
var state_22939__$1 = state_22939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22939__$1,inst_22937);
} else {
if((state_val_22940 === (4))){
var inst_22929 = (state_22939[(2)]);
var inst_22930 = process.call(null,inst_22929);
var state_22939__$1 = state_22939;
if(cljs.core.truth_(inst_22930)){
var statearr_22942_23100 = state_22939__$1;
(statearr_22942_23100[(1)] = (5));

} else {
var statearr_22943_23101 = state_22939__$1;
(statearr_22943_23101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (5))){
var state_22939__$1 = state_22939;
var statearr_22944_23102 = state_22939__$1;
(statearr_22944_23102[(2)] = null);

(statearr_22944_23102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (6))){
var state_22939__$1 = state_22939;
var statearr_22945_23103 = state_22939__$1;
(statearr_22945_23103[(2)] = null);

(statearr_22945_23103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (7))){
var inst_22935 = (state_22939[(2)]);
var state_22939__$1 = state_22939;
var statearr_22946_23104 = state_22939__$1;
(statearr_22946_23104[(2)] = inst_22935);

(statearr_22946_23104[(1)] = (3));


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
});})(__23095,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
;
return ((function (__23095,switch__22421__auto__,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_22950 = [null,null,null,null,null,null,null];
(statearr_22950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__);

(statearr_22950[(1)] = (1));

return statearr_22950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1 = (function (state_22939){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_22939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e22951){if((e22951 instanceof Object)){
var ex__22425__auto__ = e22951;
var statearr_22952_23105 = state_22939;
(statearr_22952_23105[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23106 = state_22939;
state_22939 = G__23106;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = function(state_22939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1.call(this,state_22939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__;
})()
;})(__23095,switch__22421__auto__,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
})();
var state__22535__auto__ = (function (){var statearr_22953 = f__22534__auto__.call(null);
(statearr_22953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23098);

return statearr_22953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(__23095,c__22533__auto___23098,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
);


break;
case "async":
var c__22533__auto___23107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23095,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (__23095,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function (state_22966){
var state_val_22967 = (state_22966[(1)]);
if((state_val_22967 === (1))){
var state_22966__$1 = state_22966;
var statearr_22968_23108 = state_22966__$1;
(statearr_22968_23108[(2)] = null);

(statearr_22968_23108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (2))){
var state_22966__$1 = state_22966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22966__$1,(4),jobs);
} else {
if((state_val_22967 === (3))){
var inst_22964 = (state_22966[(2)]);
var state_22966__$1 = state_22966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22966__$1,inst_22964);
} else {
if((state_val_22967 === (4))){
var inst_22956 = (state_22966[(2)]);
var inst_22957 = async.call(null,inst_22956);
var state_22966__$1 = state_22966;
if(cljs.core.truth_(inst_22957)){
var statearr_22969_23109 = state_22966__$1;
(statearr_22969_23109[(1)] = (5));

} else {
var statearr_22970_23110 = state_22966__$1;
(statearr_22970_23110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (5))){
var state_22966__$1 = state_22966;
var statearr_22971_23111 = state_22966__$1;
(statearr_22971_23111[(2)] = null);

(statearr_22971_23111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (6))){
var state_22966__$1 = state_22966;
var statearr_22972_23112 = state_22966__$1;
(statearr_22972_23112[(2)] = null);

(statearr_22972_23112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (7))){
var inst_22962 = (state_22966[(2)]);
var state_22966__$1 = state_22966;
var statearr_22973_23113 = state_22966__$1;
(statearr_22973_23113[(2)] = inst_22962);

(statearr_22973_23113[(1)] = (3));


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
});})(__23095,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
;
return ((function (__23095,switch__22421__auto__,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_22977 = [null,null,null,null,null,null,null];
(statearr_22977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__);

(statearr_22977[(1)] = (1));

return statearr_22977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1 = (function (state_22966){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_22966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e22978){if((e22978 instanceof Object)){
var ex__22425__auto__ = e22978;
var statearr_22979_23114 = state_22966;
(statearr_22979_23114[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23115 = state_22966;
state_22966 = G__23115;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = function(state_22966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1.call(this,state_22966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__;
})()
;})(__23095,switch__22421__auto__,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
})();
var state__22535__auto__ = (function (){var statearr_22980 = f__22534__auto__.call(null);
(statearr_22980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23107);

return statearr_22980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(__23095,c__22533__auto___23107,G__22926_23096,n__19631__auto___23094,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23116 = (__23095 + (1));
__23095 = G__23116;
continue;
} else {
}
break;
}

var c__22533__auto___23117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___23117,jobs,results,process,async){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___23117,jobs,results,process,async){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (1))){
var state_23002__$1 = state_23002;
var statearr_23004_23118 = state_23002__$1;
(statearr_23004_23118[(2)] = null);

(statearr_23004_23118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (2))){
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23002__$1,(4),from);
} else {
if((state_val_23003 === (3))){
var inst_23000 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else {
if((state_val_23003 === (4))){
var inst_22983 = (state_23002[(7)]);
var inst_22983__$1 = (state_23002[(2)]);
var inst_22984 = (inst_22983__$1 == null);
var state_23002__$1 = (function (){var statearr_23005 = state_23002;
(statearr_23005[(7)] = inst_22983__$1);

return statearr_23005;
})();
if(cljs.core.truth_(inst_22984)){
var statearr_23006_23119 = state_23002__$1;
(statearr_23006_23119[(1)] = (5));

} else {
var statearr_23007_23120 = state_23002__$1;
(statearr_23007_23120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (5))){
var inst_22986 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23002__$1 = state_23002;
var statearr_23008_23121 = state_23002__$1;
(statearr_23008_23121[(2)] = inst_22986);

(statearr_23008_23121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (6))){
var inst_22983 = (state_23002[(7)]);
var inst_22988 = (state_23002[(8)]);
var inst_22988__$1 = cljs.core.async.chan.call(null,(1));
var inst_22989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22990 = [inst_22983,inst_22988__$1];
var inst_22991 = (new cljs.core.PersistentVector(null,2,(5),inst_22989,inst_22990,null));
var state_23002__$1 = (function (){var statearr_23009 = state_23002;
(statearr_23009[(8)] = inst_22988__$1);

return statearr_23009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,(8),jobs,inst_22991);
} else {
if((state_val_23003 === (7))){
var inst_22998 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23010_23122 = state_23002__$1;
(statearr_23010_23122[(2)] = inst_22998);

(statearr_23010_23122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (8))){
var inst_22988 = (state_23002[(8)]);
var inst_22993 = (state_23002[(2)]);
var state_23002__$1 = (function (){var statearr_23011 = state_23002;
(statearr_23011[(9)] = inst_22993);

return statearr_23011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,(9),results,inst_22988);
} else {
if((state_val_23003 === (9))){
var inst_22995 = (state_23002[(2)]);
var state_23002__$1 = (function (){var statearr_23012 = state_23002;
(statearr_23012[(10)] = inst_22995);

return statearr_23012;
})();
var statearr_23013_23123 = state_23002__$1;
(statearr_23013_23123[(2)] = null);

(statearr_23013_23123[(1)] = (2));


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
});})(c__22533__auto___23117,jobs,results,process,async))
;
return ((function (switch__22421__auto__,c__22533__auto___23117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_23017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__);

(statearr_23017[(1)] = (1));

return statearr_23017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1 = (function (state_23002){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23018){if((e23018 instanceof Object)){
var ex__22425__auto__ = e23018;
var statearr_23019_23124 = state_23002;
(statearr_23019_23124[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23125 = state_23002;
state_23002 = G__23125;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___23117,jobs,results,process,async))
})();
var state__22535__auto__ = (function (){var statearr_23020 = f__22534__auto__.call(null);
(statearr_23020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23117);

return statearr_23020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___23117,jobs,results,process,async))
);


var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__,jobs,results,process,async){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__,jobs,results,process,async){
return (function (state_23058){
var state_val_23059 = (state_23058[(1)]);
if((state_val_23059 === (7))){
var inst_23054 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23060_23126 = state_23058__$1;
(statearr_23060_23126[(2)] = inst_23054);

(statearr_23060_23126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (20))){
var state_23058__$1 = state_23058;
var statearr_23061_23127 = state_23058__$1;
(statearr_23061_23127[(2)] = null);

(statearr_23061_23127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (1))){
var state_23058__$1 = state_23058;
var statearr_23062_23128 = state_23058__$1;
(statearr_23062_23128[(2)] = null);

(statearr_23062_23128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (4))){
var inst_23023 = (state_23058[(7)]);
var inst_23023__$1 = (state_23058[(2)]);
var inst_23024 = (inst_23023__$1 == null);
var state_23058__$1 = (function (){var statearr_23063 = state_23058;
(statearr_23063[(7)] = inst_23023__$1);

return statearr_23063;
})();
if(cljs.core.truth_(inst_23024)){
var statearr_23064_23129 = state_23058__$1;
(statearr_23064_23129[(1)] = (5));

} else {
var statearr_23065_23130 = state_23058__$1;
(statearr_23065_23130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (15))){
var inst_23036 = (state_23058[(8)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23058__$1,(18),to,inst_23036);
} else {
if((state_val_23059 === (21))){
var inst_23049 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23066_23131 = state_23058__$1;
(statearr_23066_23131[(2)] = inst_23049);

(statearr_23066_23131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (13))){
var inst_23051 = (state_23058[(2)]);
var state_23058__$1 = (function (){var statearr_23067 = state_23058;
(statearr_23067[(9)] = inst_23051);

return statearr_23067;
})();
var statearr_23068_23132 = state_23058__$1;
(statearr_23068_23132[(2)] = null);

(statearr_23068_23132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (6))){
var inst_23023 = (state_23058[(7)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23058__$1,(11),inst_23023);
} else {
if((state_val_23059 === (17))){
var inst_23044 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
if(cljs.core.truth_(inst_23044)){
var statearr_23069_23133 = state_23058__$1;
(statearr_23069_23133[(1)] = (19));

} else {
var statearr_23070_23134 = state_23058__$1;
(statearr_23070_23134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (3))){
var inst_23056 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23058__$1,inst_23056);
} else {
if((state_val_23059 === (12))){
var inst_23033 = (state_23058[(10)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23058__$1,(14),inst_23033);
} else {
if((state_val_23059 === (2))){
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23058__$1,(4),results);
} else {
if((state_val_23059 === (19))){
var state_23058__$1 = state_23058;
var statearr_23071_23135 = state_23058__$1;
(statearr_23071_23135[(2)] = null);

(statearr_23071_23135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (11))){
var inst_23033 = (state_23058[(2)]);
var state_23058__$1 = (function (){var statearr_23072 = state_23058;
(statearr_23072[(10)] = inst_23033);

return statearr_23072;
})();
var statearr_23073_23136 = state_23058__$1;
(statearr_23073_23136[(2)] = null);

(statearr_23073_23136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (9))){
var state_23058__$1 = state_23058;
var statearr_23074_23137 = state_23058__$1;
(statearr_23074_23137[(2)] = null);

(statearr_23074_23137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (5))){
var state_23058__$1 = state_23058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23075_23138 = state_23058__$1;
(statearr_23075_23138[(1)] = (8));

} else {
var statearr_23076_23139 = state_23058__$1;
(statearr_23076_23139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (14))){
var inst_23038 = (state_23058[(11)]);
var inst_23036 = (state_23058[(8)]);
var inst_23036__$1 = (state_23058[(2)]);
var inst_23037 = (inst_23036__$1 == null);
var inst_23038__$1 = cljs.core.not.call(null,inst_23037);
var state_23058__$1 = (function (){var statearr_23077 = state_23058;
(statearr_23077[(11)] = inst_23038__$1);

(statearr_23077[(8)] = inst_23036__$1);

return statearr_23077;
})();
if(inst_23038__$1){
var statearr_23078_23140 = state_23058__$1;
(statearr_23078_23140[(1)] = (15));

} else {
var statearr_23079_23141 = state_23058__$1;
(statearr_23079_23141[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (16))){
var inst_23038 = (state_23058[(11)]);
var state_23058__$1 = state_23058;
var statearr_23080_23142 = state_23058__$1;
(statearr_23080_23142[(2)] = inst_23038);

(statearr_23080_23142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (10))){
var inst_23030 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23081_23143 = state_23058__$1;
(statearr_23081_23143[(2)] = inst_23030);

(statearr_23081_23143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (18))){
var inst_23041 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23082_23144 = state_23058__$1;
(statearr_23082_23144[(2)] = inst_23041);

(statearr_23082_23144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (8))){
var inst_23027 = cljs.core.async.close_BANG_.call(null,to);
var state_23058__$1 = state_23058;
var statearr_23083_23145 = state_23058__$1;
(statearr_23083_23145[(2)] = inst_23027);

(statearr_23083_23145[(1)] = (10));


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
});})(c__22533__auto__,jobs,results,process,async))
;
return ((function (switch__22421__auto__,c__22533__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_23087 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__);

(statearr_23087[(1)] = (1));

return statearr_23087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1 = (function (state_23058){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23088){if((e23088 instanceof Object)){
var ex__22425__auto__ = e23088;
var statearr_23089_23146 = state_23058;
(statearr_23089_23146[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23147 = state_23058;
state_23058 = G__23147;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__ = function(state_23058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1.call(this,state_23058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__,jobs,results,process,async))
})();
var state__22535__auto__ = (function (){var statearr_23090 = f__22534__auto__.call(null);
(statearr_23090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__,jobs,results,process,async))
);

return c__22533__auto__;
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
var args23148 = [];
var len__19791__auto___23151 = arguments.length;
var i__19792__auto___23152 = (0);
while(true){
if((i__19792__auto___23152 < len__19791__auto___23151)){
args23148.push((arguments[i__19792__auto___23152]));

var G__23153 = (i__19792__auto___23152 + (1));
i__19792__auto___23152 = G__23153;
continue;
} else {
}
break;
}

var G__23150 = args23148.length;
switch (G__23150) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23148.length)].join('')));

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
var args23155 = [];
var len__19791__auto___23158 = arguments.length;
var i__19792__auto___23159 = (0);
while(true){
if((i__19792__auto___23159 < len__19791__auto___23158)){
args23155.push((arguments[i__19792__auto___23159]));

var G__23160 = (i__19792__auto___23159 + (1));
i__19792__auto___23159 = G__23160;
continue;
} else {
}
break;
}

var G__23157 = args23155.length;
switch (G__23157) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23155.length)].join('')));

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
var args23162 = [];
var len__19791__auto___23215 = arguments.length;
var i__19792__auto___23216 = (0);
while(true){
if((i__19792__auto___23216 < len__19791__auto___23215)){
args23162.push((arguments[i__19792__auto___23216]));

var G__23217 = (i__19792__auto___23216 + (1));
i__19792__auto___23216 = G__23217;
continue;
} else {
}
break;
}

var G__23164 = args23162.length;
switch (G__23164) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23162.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22533__auto___23219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___23219,tc,fc){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___23219,tc,fc){
return (function (state_23190){
var state_val_23191 = (state_23190[(1)]);
if((state_val_23191 === (7))){
var inst_23186 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23192_23220 = state_23190__$1;
(statearr_23192_23220[(2)] = inst_23186);

(statearr_23192_23220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (1))){
var state_23190__$1 = state_23190;
var statearr_23193_23221 = state_23190__$1;
(statearr_23193_23221[(2)] = null);

(statearr_23193_23221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (4))){
var inst_23167 = (state_23190[(7)]);
var inst_23167__$1 = (state_23190[(2)]);
var inst_23168 = (inst_23167__$1 == null);
var state_23190__$1 = (function (){var statearr_23194 = state_23190;
(statearr_23194[(7)] = inst_23167__$1);

return statearr_23194;
})();
if(cljs.core.truth_(inst_23168)){
var statearr_23195_23222 = state_23190__$1;
(statearr_23195_23222[(1)] = (5));

} else {
var statearr_23196_23223 = state_23190__$1;
(statearr_23196_23223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (13))){
var state_23190__$1 = state_23190;
var statearr_23197_23224 = state_23190__$1;
(statearr_23197_23224[(2)] = null);

(statearr_23197_23224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (6))){
var inst_23167 = (state_23190[(7)]);
var inst_23173 = p.call(null,inst_23167);
var state_23190__$1 = state_23190;
if(cljs.core.truth_(inst_23173)){
var statearr_23198_23225 = state_23190__$1;
(statearr_23198_23225[(1)] = (9));

} else {
var statearr_23199_23226 = state_23190__$1;
(statearr_23199_23226[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (3))){
var inst_23188 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23190__$1,inst_23188);
} else {
if((state_val_23191 === (12))){
var state_23190__$1 = state_23190;
var statearr_23200_23227 = state_23190__$1;
(statearr_23200_23227[(2)] = null);

(statearr_23200_23227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (2))){
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23190__$1,(4),ch);
} else {
if((state_val_23191 === (11))){
var inst_23167 = (state_23190[(7)]);
var inst_23177 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23190__$1,(8),inst_23177,inst_23167);
} else {
if((state_val_23191 === (9))){
var state_23190__$1 = state_23190;
var statearr_23201_23228 = state_23190__$1;
(statearr_23201_23228[(2)] = tc);

(statearr_23201_23228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (5))){
var inst_23170 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23171 = cljs.core.async.close_BANG_.call(null,fc);
var state_23190__$1 = (function (){var statearr_23202 = state_23190;
(statearr_23202[(8)] = inst_23170);

return statearr_23202;
})();
var statearr_23203_23229 = state_23190__$1;
(statearr_23203_23229[(2)] = inst_23171);

(statearr_23203_23229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (14))){
var inst_23184 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23204_23230 = state_23190__$1;
(statearr_23204_23230[(2)] = inst_23184);

(statearr_23204_23230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (10))){
var state_23190__$1 = state_23190;
var statearr_23205_23231 = state_23190__$1;
(statearr_23205_23231[(2)] = fc);

(statearr_23205_23231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (8))){
var inst_23179 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
if(cljs.core.truth_(inst_23179)){
var statearr_23206_23232 = state_23190__$1;
(statearr_23206_23232[(1)] = (12));

} else {
var statearr_23207_23233 = state_23190__$1;
(statearr_23207_23233[(1)] = (13));

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
});})(c__22533__auto___23219,tc,fc))
;
return ((function (switch__22421__auto__,c__22533__auto___23219,tc,fc){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_23211 = [null,null,null,null,null,null,null,null,null];
(statearr_23211[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_23211[(1)] = (1));

return statearr_23211;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_23190){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23212){if((e23212 instanceof Object)){
var ex__22425__auto__ = e23212;
var statearr_23213_23234 = state_23190;
(statearr_23213_23234[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23235 = state_23190;
state_23190 = G__23235;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_23190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_23190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___23219,tc,fc))
})();
var state__22535__auto__ = (function (){var statearr_23214 = f__22534__auto__.call(null);
(statearr_23214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23219);

return statearr_23214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___23219,tc,fc))
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
var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23295 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23301_23322 = state_23299__$1;
(statearr_23301_23322[(2)] = inst_23295);

(statearr_23301_23322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (1))){
var inst_23279 = init;
var state_23299__$1 = (function (){var statearr_23302 = state_23299;
(statearr_23302[(7)] = inst_23279);

return statearr_23302;
})();
var statearr_23303_23323 = state_23299__$1;
(statearr_23303_23323[(2)] = null);

(statearr_23303_23323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (4))){
var inst_23282 = (state_23299[(8)]);
var inst_23282__$1 = (state_23299[(2)]);
var inst_23283 = (inst_23282__$1 == null);
var state_23299__$1 = (function (){var statearr_23304 = state_23299;
(statearr_23304[(8)] = inst_23282__$1);

return statearr_23304;
})();
if(cljs.core.truth_(inst_23283)){
var statearr_23305_23324 = state_23299__$1;
(statearr_23305_23324[(1)] = (5));

} else {
var statearr_23306_23325 = state_23299__$1;
(statearr_23306_23325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (6))){
var inst_23282 = (state_23299[(8)]);
var inst_23279 = (state_23299[(7)]);
var inst_23286 = (state_23299[(9)]);
var inst_23286__$1 = f.call(null,inst_23279,inst_23282);
var inst_23287 = cljs.core.reduced_QMARK_.call(null,inst_23286__$1);
var state_23299__$1 = (function (){var statearr_23307 = state_23299;
(statearr_23307[(9)] = inst_23286__$1);

return statearr_23307;
})();
if(inst_23287){
var statearr_23308_23326 = state_23299__$1;
(statearr_23308_23326[(1)] = (8));

} else {
var statearr_23309_23327 = state_23299__$1;
(statearr_23309_23327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (3))){
var inst_23297 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (2))){
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23299__$1,(4),ch);
} else {
if((state_val_23300 === (9))){
var inst_23286 = (state_23299[(9)]);
var inst_23279 = inst_23286;
var state_23299__$1 = (function (){var statearr_23310 = state_23299;
(statearr_23310[(7)] = inst_23279);

return statearr_23310;
})();
var statearr_23311_23328 = state_23299__$1;
(statearr_23311_23328[(2)] = null);

(statearr_23311_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (5))){
var inst_23279 = (state_23299[(7)]);
var state_23299__$1 = state_23299;
var statearr_23312_23329 = state_23299__$1;
(statearr_23312_23329[(2)] = inst_23279);

(statearr_23312_23329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (10))){
var inst_23293 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23313_23330 = state_23299__$1;
(statearr_23313_23330[(2)] = inst_23293);

(statearr_23313_23330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (8))){
var inst_23286 = (state_23299[(9)]);
var inst_23289 = cljs.core.deref.call(null,inst_23286);
var state_23299__$1 = state_23299;
var statearr_23314_23331 = state_23299__$1;
(statearr_23314_23331[(2)] = inst_23289);

(statearr_23314_23331[(1)] = (10));


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
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22422__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22422__auto____0 = (function (){
var statearr_23318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23318[(0)] = cljs$core$async$reduce_$_state_machine__22422__auto__);

(statearr_23318[(1)] = (1));

return statearr_23318;
});
var cljs$core$async$reduce_$_state_machine__22422__auto____1 = (function (state_23299){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23319){if((e23319 instanceof Object)){
var ex__22425__auto__ = e23319;
var statearr_23320_23332 = state_23299;
(statearr_23320_23332[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23333 = state_23299;
state_23299 = G__23333;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22422__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22422__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22422__auto____0;
cljs$core$async$reduce_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22422__auto____1;
return cljs$core$async$reduce_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_23321 = f__22534__auto__.call(null);
(statearr_23321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
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
var args23334 = [];
var len__19791__auto___23386 = arguments.length;
var i__19792__auto___23387 = (0);
while(true){
if((i__19792__auto___23387 < len__19791__auto___23386)){
args23334.push((arguments[i__19792__auto___23387]));

var G__23388 = (i__19792__auto___23387 + (1));
i__19792__auto___23387 = G__23388;
continue;
} else {
}
break;
}

var G__23336 = args23334.length;
switch (G__23336) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23334.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_23361){
var state_val_23362 = (state_23361[(1)]);
if((state_val_23362 === (7))){
var inst_23343 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23363_23390 = state_23361__$1;
(statearr_23363_23390[(2)] = inst_23343);

(statearr_23363_23390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (1))){
var inst_23337 = cljs.core.seq.call(null,coll);
var inst_23338 = inst_23337;
var state_23361__$1 = (function (){var statearr_23364 = state_23361;
(statearr_23364[(7)] = inst_23338);

return statearr_23364;
})();
var statearr_23365_23391 = state_23361__$1;
(statearr_23365_23391[(2)] = null);

(statearr_23365_23391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (4))){
var inst_23338 = (state_23361[(7)]);
var inst_23341 = cljs.core.first.call(null,inst_23338);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23361__$1,(7),ch,inst_23341);
} else {
if((state_val_23362 === (13))){
var inst_23355 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23366_23392 = state_23361__$1;
(statearr_23366_23392[(2)] = inst_23355);

(statearr_23366_23392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (6))){
var inst_23346 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
if(cljs.core.truth_(inst_23346)){
var statearr_23367_23393 = state_23361__$1;
(statearr_23367_23393[(1)] = (8));

} else {
var statearr_23368_23394 = state_23361__$1;
(statearr_23368_23394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (3))){
var inst_23359 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23361__$1,inst_23359);
} else {
if((state_val_23362 === (12))){
var state_23361__$1 = state_23361;
var statearr_23369_23395 = state_23361__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (2))){
var inst_23338 = (state_23361[(7)]);
var state_23361__$1 = state_23361;
if(cljs.core.truth_(inst_23338)){
var statearr_23370_23396 = state_23361__$1;
(statearr_23370_23396[(1)] = (4));

} else {
var statearr_23371_23397 = state_23361__$1;
(statearr_23371_23397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (11))){
var inst_23352 = cljs.core.async.close_BANG_.call(null,ch);
var state_23361__$1 = state_23361;
var statearr_23372_23398 = state_23361__$1;
(statearr_23372_23398[(2)] = inst_23352);

(statearr_23372_23398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (9))){
var state_23361__$1 = state_23361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23373_23399 = state_23361__$1;
(statearr_23373_23399[(1)] = (11));

} else {
var statearr_23374_23400 = state_23361__$1;
(statearr_23374_23400[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (5))){
var inst_23338 = (state_23361[(7)]);
var state_23361__$1 = state_23361;
var statearr_23375_23401 = state_23361__$1;
(statearr_23375_23401[(2)] = inst_23338);

(statearr_23375_23401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (10))){
var inst_23357 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23376_23402 = state_23361__$1;
(statearr_23376_23402[(2)] = inst_23357);

(statearr_23376_23402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (8))){
var inst_23338 = (state_23361[(7)]);
var inst_23348 = cljs.core.next.call(null,inst_23338);
var inst_23338__$1 = inst_23348;
var state_23361__$1 = (function (){var statearr_23377 = state_23361;
(statearr_23377[(7)] = inst_23338__$1);

return statearr_23377;
})();
var statearr_23378_23403 = state_23361__$1;
(statearr_23378_23403[(2)] = null);

(statearr_23378_23403[(1)] = (2));


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
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_23382 = [null,null,null,null,null,null,null,null];
(statearr_23382[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_23382[(1)] = (1));

return statearr_23382;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_23361){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23383){if((e23383 instanceof Object)){
var ex__22425__auto__ = e23383;
var statearr_23384_23404 = state_23361;
(statearr_23384_23404[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23405 = state_23361;
state_23361 = G__23405;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_23361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_23361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_23385 = f__22534__auto__.call(null);
(statearr_23385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_23385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
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
var x__19379__auto__ = (((_ == null))?null:_);
var m__19380__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,_);
} else {
var m__19380__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,_);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19380__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,ch);
} else {
var m__19380__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,ch);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m);
} else {
var m__19380__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23631 = (function (mult,ch,cs,meta23632){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23632 = meta23632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23633,meta23632__$1){
var self__ = this;
var _23633__$1 = this;
return (new cljs.core.async.t_cljs$core$async23631(self__.mult,self__.ch,self__.cs,meta23632__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23633){
var self__ = this;
var _23633__$1 = this;
return self__.meta23632;
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23632","meta23632",-1773143218,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23631";

cljs.core.async.t_cljs$core$async23631.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async23631");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23631 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23631(mult__$1,ch__$1,cs__$1,meta23632){
return (new cljs.core.async.t_cljs$core$async23631(mult__$1,ch__$1,cs__$1,meta23632));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23631(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22533__auto___23856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___23856,cs,m,dchan,dctr,done){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___23856,cs,m,dchan,dctr,done){
return (function (state_23768){
var state_val_23769 = (state_23768[(1)]);
if((state_val_23769 === (7))){
var inst_23764 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23770_23857 = state_23768__$1;
(statearr_23770_23857[(2)] = inst_23764);

(statearr_23770_23857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (20))){
var inst_23667 = (state_23768[(7)]);
var inst_23679 = cljs.core.first.call(null,inst_23667);
var inst_23680 = cljs.core.nth.call(null,inst_23679,(0),null);
var inst_23681 = cljs.core.nth.call(null,inst_23679,(1),null);
var state_23768__$1 = (function (){var statearr_23771 = state_23768;
(statearr_23771[(8)] = inst_23680);

return statearr_23771;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23772_23858 = state_23768__$1;
(statearr_23772_23858[(1)] = (22));

} else {
var statearr_23773_23859 = state_23768__$1;
(statearr_23773_23859[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (27))){
var inst_23716 = (state_23768[(9)]);
var inst_23709 = (state_23768[(10)]);
var inst_23636 = (state_23768[(11)]);
var inst_23711 = (state_23768[(12)]);
var inst_23716__$1 = cljs.core._nth.call(null,inst_23709,inst_23711);
var inst_23717 = cljs.core.async.put_BANG_.call(null,inst_23716__$1,inst_23636,done);
var state_23768__$1 = (function (){var statearr_23774 = state_23768;
(statearr_23774[(9)] = inst_23716__$1);

return statearr_23774;
})();
if(cljs.core.truth_(inst_23717)){
var statearr_23775_23860 = state_23768__$1;
(statearr_23775_23860[(1)] = (30));

} else {
var statearr_23776_23861 = state_23768__$1;
(statearr_23776_23861[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (1))){
var state_23768__$1 = state_23768;
var statearr_23777_23862 = state_23768__$1;
(statearr_23777_23862[(2)] = null);

(statearr_23777_23862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (24))){
var inst_23667 = (state_23768[(7)]);
var inst_23686 = (state_23768[(2)]);
var inst_23687 = cljs.core.next.call(null,inst_23667);
var inst_23645 = inst_23687;
var inst_23646 = null;
var inst_23647 = (0);
var inst_23648 = (0);
var state_23768__$1 = (function (){var statearr_23778 = state_23768;
(statearr_23778[(13)] = inst_23647);

(statearr_23778[(14)] = inst_23645);

(statearr_23778[(15)] = inst_23646);

(statearr_23778[(16)] = inst_23686);

(statearr_23778[(17)] = inst_23648);

return statearr_23778;
})();
var statearr_23779_23863 = state_23768__$1;
(statearr_23779_23863[(2)] = null);

(statearr_23779_23863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (39))){
var state_23768__$1 = state_23768;
var statearr_23783_23864 = state_23768__$1;
(statearr_23783_23864[(2)] = null);

(statearr_23783_23864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (4))){
var inst_23636 = (state_23768[(11)]);
var inst_23636__$1 = (state_23768[(2)]);
var inst_23637 = (inst_23636__$1 == null);
var state_23768__$1 = (function (){var statearr_23784 = state_23768;
(statearr_23784[(11)] = inst_23636__$1);

return statearr_23784;
})();
if(cljs.core.truth_(inst_23637)){
var statearr_23785_23865 = state_23768__$1;
(statearr_23785_23865[(1)] = (5));

} else {
var statearr_23786_23866 = state_23768__$1;
(statearr_23786_23866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (15))){
var inst_23647 = (state_23768[(13)]);
var inst_23645 = (state_23768[(14)]);
var inst_23646 = (state_23768[(15)]);
var inst_23648 = (state_23768[(17)]);
var inst_23663 = (state_23768[(2)]);
var inst_23664 = (inst_23648 + (1));
var tmp23780 = inst_23647;
var tmp23781 = inst_23645;
var tmp23782 = inst_23646;
var inst_23645__$1 = tmp23781;
var inst_23646__$1 = tmp23782;
var inst_23647__$1 = tmp23780;
var inst_23648__$1 = inst_23664;
var state_23768__$1 = (function (){var statearr_23787 = state_23768;
(statearr_23787[(13)] = inst_23647__$1);

(statearr_23787[(14)] = inst_23645__$1);

(statearr_23787[(18)] = inst_23663);

(statearr_23787[(15)] = inst_23646__$1);

(statearr_23787[(17)] = inst_23648__$1);

return statearr_23787;
})();
var statearr_23788_23867 = state_23768__$1;
(statearr_23788_23867[(2)] = null);

(statearr_23788_23867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (21))){
var inst_23690 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23792_23868 = state_23768__$1;
(statearr_23792_23868[(2)] = inst_23690);

(statearr_23792_23868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (31))){
var inst_23716 = (state_23768[(9)]);
var inst_23720 = done.call(null,null);
var inst_23721 = cljs.core.async.untap_STAR_.call(null,m,inst_23716);
var state_23768__$1 = (function (){var statearr_23793 = state_23768;
(statearr_23793[(19)] = inst_23720);

return statearr_23793;
})();
var statearr_23794_23869 = state_23768__$1;
(statearr_23794_23869[(2)] = inst_23721);

(statearr_23794_23869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (32))){
var inst_23710 = (state_23768[(20)]);
var inst_23708 = (state_23768[(21)]);
var inst_23709 = (state_23768[(10)]);
var inst_23711 = (state_23768[(12)]);
var inst_23723 = (state_23768[(2)]);
var inst_23724 = (inst_23711 + (1));
var tmp23789 = inst_23710;
var tmp23790 = inst_23708;
var tmp23791 = inst_23709;
var inst_23708__$1 = tmp23790;
var inst_23709__$1 = tmp23791;
var inst_23710__$1 = tmp23789;
var inst_23711__$1 = inst_23724;
var state_23768__$1 = (function (){var statearr_23795 = state_23768;
(statearr_23795[(20)] = inst_23710__$1);

(statearr_23795[(21)] = inst_23708__$1);

(statearr_23795[(10)] = inst_23709__$1);

(statearr_23795[(22)] = inst_23723);

(statearr_23795[(12)] = inst_23711__$1);

return statearr_23795;
})();
var statearr_23796_23870 = state_23768__$1;
(statearr_23796_23870[(2)] = null);

(statearr_23796_23870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (40))){
var inst_23736 = (state_23768[(23)]);
var inst_23740 = done.call(null,null);
var inst_23741 = cljs.core.async.untap_STAR_.call(null,m,inst_23736);
var state_23768__$1 = (function (){var statearr_23797 = state_23768;
(statearr_23797[(24)] = inst_23740);

return statearr_23797;
})();
var statearr_23798_23871 = state_23768__$1;
(statearr_23798_23871[(2)] = inst_23741);

(statearr_23798_23871[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (33))){
var inst_23727 = (state_23768[(25)]);
var inst_23729 = cljs.core.chunked_seq_QMARK_.call(null,inst_23727);
var state_23768__$1 = state_23768;
if(inst_23729){
var statearr_23799_23872 = state_23768__$1;
(statearr_23799_23872[(1)] = (36));

} else {
var statearr_23800_23873 = state_23768__$1;
(statearr_23800_23873[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (13))){
var inst_23657 = (state_23768[(26)]);
var inst_23660 = cljs.core.async.close_BANG_.call(null,inst_23657);
var state_23768__$1 = state_23768;
var statearr_23801_23874 = state_23768__$1;
(statearr_23801_23874[(2)] = inst_23660);

(statearr_23801_23874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (22))){
var inst_23680 = (state_23768[(8)]);
var inst_23683 = cljs.core.async.close_BANG_.call(null,inst_23680);
var state_23768__$1 = state_23768;
var statearr_23802_23875 = state_23768__$1;
(statearr_23802_23875[(2)] = inst_23683);

(statearr_23802_23875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (36))){
var inst_23727 = (state_23768[(25)]);
var inst_23731 = cljs.core.chunk_first.call(null,inst_23727);
var inst_23732 = cljs.core.chunk_rest.call(null,inst_23727);
var inst_23733 = cljs.core.count.call(null,inst_23731);
var inst_23708 = inst_23732;
var inst_23709 = inst_23731;
var inst_23710 = inst_23733;
var inst_23711 = (0);
var state_23768__$1 = (function (){var statearr_23803 = state_23768;
(statearr_23803[(20)] = inst_23710);

(statearr_23803[(21)] = inst_23708);

(statearr_23803[(10)] = inst_23709);

(statearr_23803[(12)] = inst_23711);

return statearr_23803;
})();
var statearr_23804_23876 = state_23768__$1;
(statearr_23804_23876[(2)] = null);

(statearr_23804_23876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (41))){
var inst_23727 = (state_23768[(25)]);
var inst_23743 = (state_23768[(2)]);
var inst_23744 = cljs.core.next.call(null,inst_23727);
var inst_23708 = inst_23744;
var inst_23709 = null;
var inst_23710 = (0);
var inst_23711 = (0);
var state_23768__$1 = (function (){var statearr_23805 = state_23768;
(statearr_23805[(20)] = inst_23710);

(statearr_23805[(21)] = inst_23708);

(statearr_23805[(10)] = inst_23709);

(statearr_23805[(12)] = inst_23711);

(statearr_23805[(27)] = inst_23743);

return statearr_23805;
})();
var statearr_23806_23877 = state_23768__$1;
(statearr_23806_23877[(2)] = null);

(statearr_23806_23877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (43))){
var state_23768__$1 = state_23768;
var statearr_23807_23878 = state_23768__$1;
(statearr_23807_23878[(2)] = null);

(statearr_23807_23878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (29))){
var inst_23752 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23808_23879 = state_23768__$1;
(statearr_23808_23879[(2)] = inst_23752);

(statearr_23808_23879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (44))){
var inst_23761 = (state_23768[(2)]);
var state_23768__$1 = (function (){var statearr_23809 = state_23768;
(statearr_23809[(28)] = inst_23761);

return statearr_23809;
})();
var statearr_23810_23880 = state_23768__$1;
(statearr_23810_23880[(2)] = null);

(statearr_23810_23880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (6))){
var inst_23700 = (state_23768[(29)]);
var inst_23699 = cljs.core.deref.call(null,cs);
var inst_23700__$1 = cljs.core.keys.call(null,inst_23699);
var inst_23701 = cljs.core.count.call(null,inst_23700__$1);
var inst_23702 = cljs.core.reset_BANG_.call(null,dctr,inst_23701);
var inst_23707 = cljs.core.seq.call(null,inst_23700__$1);
var inst_23708 = inst_23707;
var inst_23709 = null;
var inst_23710 = (0);
var inst_23711 = (0);
var state_23768__$1 = (function (){var statearr_23811 = state_23768;
(statearr_23811[(29)] = inst_23700__$1);

(statearr_23811[(20)] = inst_23710);

(statearr_23811[(21)] = inst_23708);

(statearr_23811[(10)] = inst_23709);

(statearr_23811[(30)] = inst_23702);

(statearr_23811[(12)] = inst_23711);

return statearr_23811;
})();
var statearr_23812_23881 = state_23768__$1;
(statearr_23812_23881[(2)] = null);

(statearr_23812_23881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (28))){
var inst_23708 = (state_23768[(21)]);
var inst_23727 = (state_23768[(25)]);
var inst_23727__$1 = cljs.core.seq.call(null,inst_23708);
var state_23768__$1 = (function (){var statearr_23813 = state_23768;
(statearr_23813[(25)] = inst_23727__$1);

return statearr_23813;
})();
if(inst_23727__$1){
var statearr_23814_23882 = state_23768__$1;
(statearr_23814_23882[(1)] = (33));

} else {
var statearr_23815_23883 = state_23768__$1;
(statearr_23815_23883[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (25))){
var inst_23710 = (state_23768[(20)]);
var inst_23711 = (state_23768[(12)]);
var inst_23713 = (inst_23711 < inst_23710);
var inst_23714 = inst_23713;
var state_23768__$1 = state_23768;
if(cljs.core.truth_(inst_23714)){
var statearr_23816_23884 = state_23768__$1;
(statearr_23816_23884[(1)] = (27));

} else {
var statearr_23817_23885 = state_23768__$1;
(statearr_23817_23885[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (34))){
var state_23768__$1 = state_23768;
var statearr_23818_23886 = state_23768__$1;
(statearr_23818_23886[(2)] = null);

(statearr_23818_23886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (17))){
var state_23768__$1 = state_23768;
var statearr_23819_23887 = state_23768__$1;
(statearr_23819_23887[(2)] = null);

(statearr_23819_23887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (3))){
var inst_23766 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23768__$1,inst_23766);
} else {
if((state_val_23769 === (12))){
var inst_23695 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23820_23888 = state_23768__$1;
(statearr_23820_23888[(2)] = inst_23695);

(statearr_23820_23888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (2))){
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,(4),ch);
} else {
if((state_val_23769 === (23))){
var state_23768__$1 = state_23768;
var statearr_23821_23889 = state_23768__$1;
(statearr_23821_23889[(2)] = null);

(statearr_23821_23889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (35))){
var inst_23750 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23822_23890 = state_23768__$1;
(statearr_23822_23890[(2)] = inst_23750);

(statearr_23822_23890[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (19))){
var inst_23667 = (state_23768[(7)]);
var inst_23671 = cljs.core.chunk_first.call(null,inst_23667);
var inst_23672 = cljs.core.chunk_rest.call(null,inst_23667);
var inst_23673 = cljs.core.count.call(null,inst_23671);
var inst_23645 = inst_23672;
var inst_23646 = inst_23671;
var inst_23647 = inst_23673;
var inst_23648 = (0);
var state_23768__$1 = (function (){var statearr_23823 = state_23768;
(statearr_23823[(13)] = inst_23647);

(statearr_23823[(14)] = inst_23645);

(statearr_23823[(15)] = inst_23646);

(statearr_23823[(17)] = inst_23648);

return statearr_23823;
})();
var statearr_23824_23891 = state_23768__$1;
(statearr_23824_23891[(2)] = null);

(statearr_23824_23891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (11))){
var inst_23645 = (state_23768[(14)]);
var inst_23667 = (state_23768[(7)]);
var inst_23667__$1 = cljs.core.seq.call(null,inst_23645);
var state_23768__$1 = (function (){var statearr_23825 = state_23768;
(statearr_23825[(7)] = inst_23667__$1);

return statearr_23825;
})();
if(inst_23667__$1){
var statearr_23826_23892 = state_23768__$1;
(statearr_23826_23892[(1)] = (16));

} else {
var statearr_23827_23893 = state_23768__$1;
(statearr_23827_23893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (9))){
var inst_23697 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23828_23894 = state_23768__$1;
(statearr_23828_23894[(2)] = inst_23697);

(statearr_23828_23894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (5))){
var inst_23643 = cljs.core.deref.call(null,cs);
var inst_23644 = cljs.core.seq.call(null,inst_23643);
var inst_23645 = inst_23644;
var inst_23646 = null;
var inst_23647 = (0);
var inst_23648 = (0);
var state_23768__$1 = (function (){var statearr_23829 = state_23768;
(statearr_23829[(13)] = inst_23647);

(statearr_23829[(14)] = inst_23645);

(statearr_23829[(15)] = inst_23646);

(statearr_23829[(17)] = inst_23648);

return statearr_23829;
})();
var statearr_23830_23895 = state_23768__$1;
(statearr_23830_23895[(2)] = null);

(statearr_23830_23895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (14))){
var state_23768__$1 = state_23768;
var statearr_23831_23896 = state_23768__$1;
(statearr_23831_23896[(2)] = null);

(statearr_23831_23896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (45))){
var inst_23758 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23832_23897 = state_23768__$1;
(statearr_23832_23897[(2)] = inst_23758);

(statearr_23832_23897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (26))){
var inst_23700 = (state_23768[(29)]);
var inst_23754 = (state_23768[(2)]);
var inst_23755 = cljs.core.seq.call(null,inst_23700);
var state_23768__$1 = (function (){var statearr_23833 = state_23768;
(statearr_23833[(31)] = inst_23754);

return statearr_23833;
})();
if(inst_23755){
var statearr_23834_23898 = state_23768__$1;
(statearr_23834_23898[(1)] = (42));

} else {
var statearr_23835_23899 = state_23768__$1;
(statearr_23835_23899[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (16))){
var inst_23667 = (state_23768[(7)]);
var inst_23669 = cljs.core.chunked_seq_QMARK_.call(null,inst_23667);
var state_23768__$1 = state_23768;
if(inst_23669){
var statearr_23836_23900 = state_23768__$1;
(statearr_23836_23900[(1)] = (19));

} else {
var statearr_23837_23901 = state_23768__$1;
(statearr_23837_23901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (38))){
var inst_23747 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23838_23902 = state_23768__$1;
(statearr_23838_23902[(2)] = inst_23747);

(statearr_23838_23902[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (30))){
var state_23768__$1 = state_23768;
var statearr_23839_23903 = state_23768__$1;
(statearr_23839_23903[(2)] = null);

(statearr_23839_23903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (10))){
var inst_23646 = (state_23768[(15)]);
var inst_23648 = (state_23768[(17)]);
var inst_23656 = cljs.core._nth.call(null,inst_23646,inst_23648);
var inst_23657 = cljs.core.nth.call(null,inst_23656,(0),null);
var inst_23658 = cljs.core.nth.call(null,inst_23656,(1),null);
var state_23768__$1 = (function (){var statearr_23840 = state_23768;
(statearr_23840[(26)] = inst_23657);

return statearr_23840;
})();
if(cljs.core.truth_(inst_23658)){
var statearr_23841_23904 = state_23768__$1;
(statearr_23841_23904[(1)] = (13));

} else {
var statearr_23842_23905 = state_23768__$1;
(statearr_23842_23905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (18))){
var inst_23693 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23843_23906 = state_23768__$1;
(statearr_23843_23906[(2)] = inst_23693);

(statearr_23843_23906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (42))){
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,(45),dchan);
} else {
if((state_val_23769 === (37))){
var inst_23736 = (state_23768[(23)]);
var inst_23727 = (state_23768[(25)]);
var inst_23636 = (state_23768[(11)]);
var inst_23736__$1 = cljs.core.first.call(null,inst_23727);
var inst_23737 = cljs.core.async.put_BANG_.call(null,inst_23736__$1,inst_23636,done);
var state_23768__$1 = (function (){var statearr_23844 = state_23768;
(statearr_23844[(23)] = inst_23736__$1);

return statearr_23844;
})();
if(cljs.core.truth_(inst_23737)){
var statearr_23845_23907 = state_23768__$1;
(statearr_23845_23907[(1)] = (39));

} else {
var statearr_23846_23908 = state_23768__$1;
(statearr_23846_23908[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (8))){
var inst_23647 = (state_23768[(13)]);
var inst_23648 = (state_23768[(17)]);
var inst_23650 = (inst_23648 < inst_23647);
var inst_23651 = inst_23650;
var state_23768__$1 = state_23768;
if(cljs.core.truth_(inst_23651)){
var statearr_23847_23909 = state_23768__$1;
(statearr_23847_23909[(1)] = (10));

} else {
var statearr_23848_23910 = state_23768__$1;
(statearr_23848_23910[(1)] = (11));

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
});})(c__22533__auto___23856,cs,m,dchan,dctr,done))
;
return ((function (switch__22421__auto__,c__22533__auto___23856,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22422__auto__ = null;
var cljs$core$async$mult_$_state_machine__22422__auto____0 = (function (){
var statearr_23852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23852[(0)] = cljs$core$async$mult_$_state_machine__22422__auto__);

(statearr_23852[(1)] = (1));

return statearr_23852;
});
var cljs$core$async$mult_$_state_machine__22422__auto____1 = (function (state_23768){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_23768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e23853){if((e23853 instanceof Object)){
var ex__22425__auto__ = e23853;
var statearr_23854_23911 = state_23768;
(statearr_23854_23911[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23912 = state_23768;
state_23768 = G__23912;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22422__auto__ = function(state_23768){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22422__auto____1.call(this,state_23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22422__auto____0;
cljs$core$async$mult_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22422__auto____1;
return cljs$core$async$mult_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___23856,cs,m,dchan,dctr,done))
})();
var state__22535__auto__ = (function (){var statearr_23855 = f__22534__auto__.call(null);
(statearr_23855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___23856);

return statearr_23855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___23856,cs,m,dchan,dctr,done))
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
var args23913 = [];
var len__19791__auto___23916 = arguments.length;
var i__19792__auto___23917 = (0);
while(true){
if((i__19792__auto___23917 < len__19791__auto___23916)){
args23913.push((arguments[i__19792__auto___23917]));

var G__23918 = (i__19792__auto___23917 + (1));
i__19792__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var G__23915 = args23913.length;
switch (G__23915) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23913.length)].join('')));

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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,ch);
} else {
var m__19380__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,ch);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,ch);
} else {
var m__19380__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,ch);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m);
} else {
var m__19380__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,state_map);
} else {
var m__19380__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,state_map);
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
var x__19379__auto__ = (((m == null))?null:m);
var m__19380__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,m,mode);
} else {
var m__19380__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19798__auto__ = [];
var len__19791__auto___23930 = arguments.length;
var i__19792__auto___23931 = (0);
while(true){
if((i__19792__auto___23931 < len__19791__auto___23930)){
args__19798__auto__.push((arguments[i__19792__auto___23931]));

var G__23932 = (i__19792__auto___23931 + (1));
i__19792__auto___23931 = G__23932;
continue;
} else {
}
break;
}

var argseq__19799__auto__ = ((((3) < args__19798__auto__.length))?(new cljs.core.IndexedSeq(args__19798__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19799__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23924){
var map__23925 = p__23924;
var map__23925__$1 = ((((!((map__23925 == null)))?((((map__23925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23925):map__23925);
var opts = map__23925__$1;
var statearr_23927_23933 = state;
(statearr_23927_23933[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23925,map__23925__$1,opts){
return (function (val){
var statearr_23928_23934 = state;
(statearr_23928_23934[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23925,map__23925__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23929_23935 = state;
(statearr_23929_23935[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23920){
var G__23921 = cljs.core.first.call(null,seq23920);
var seq23920__$1 = cljs.core.next.call(null,seq23920);
var G__23922 = cljs.core.first.call(null,seq23920__$1);
var seq23920__$2 = cljs.core.next.call(null,seq23920__$1);
var G__23923 = cljs.core.first.call(null,seq23920__$2);
var seq23920__$3 = cljs.core.next.call(null,seq23920__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23921,G__23922,G__23923,seq23920__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24101 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24102){
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
this.meta24102 = meta24102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24103,meta24102__$1){
var self__ = this;
var _24103__$1 = this;
return (new cljs.core.async.t_cljs$core$async24101(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24102__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24103){
var self__ = this;
var _24103__$1 = this;
return self__.meta24102;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24101.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24102","meta24102",2102349561,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24101";

cljs.core.async.t_cljs$core$async24101.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24101");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24101 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24101(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24102){
return (new cljs.core.async.t_cljs$core$async24101(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24102));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24101(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22533__auto___24266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (7))){
var inst_24119 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24205_24267 = state_24203__$1;
(statearr_24205_24267[(2)] = inst_24119);

(statearr_24205_24267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (20))){
var inst_24131 = (state_24203[(7)]);
var state_24203__$1 = state_24203;
var statearr_24206_24268 = state_24203__$1;
(statearr_24206_24268[(2)] = inst_24131);

(statearr_24206_24268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (27))){
var state_24203__$1 = state_24203;
var statearr_24207_24269 = state_24203__$1;
(statearr_24207_24269[(2)] = null);

(statearr_24207_24269[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (1))){
var inst_24107 = (state_24203[(8)]);
var inst_24107__$1 = calc_state.call(null);
var inst_24109 = (inst_24107__$1 == null);
var inst_24110 = cljs.core.not.call(null,inst_24109);
var state_24203__$1 = (function (){var statearr_24208 = state_24203;
(statearr_24208[(8)] = inst_24107__$1);

return statearr_24208;
})();
if(inst_24110){
var statearr_24209_24270 = state_24203__$1;
(statearr_24209_24270[(1)] = (2));

} else {
var statearr_24210_24271 = state_24203__$1;
(statearr_24210_24271[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (24))){
var inst_24177 = (state_24203[(9)]);
var inst_24163 = (state_24203[(10)]);
var inst_24154 = (state_24203[(11)]);
var inst_24177__$1 = inst_24154.call(null,inst_24163);
var state_24203__$1 = (function (){var statearr_24211 = state_24203;
(statearr_24211[(9)] = inst_24177__$1);

return statearr_24211;
})();
if(cljs.core.truth_(inst_24177__$1)){
var statearr_24212_24272 = state_24203__$1;
(statearr_24212_24272[(1)] = (29));

} else {
var statearr_24213_24273 = state_24203__$1;
(statearr_24213_24273[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (4))){
var inst_24122 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24122)){
var statearr_24214_24274 = state_24203__$1;
(statearr_24214_24274[(1)] = (8));

} else {
var statearr_24215_24275 = state_24203__$1;
(statearr_24215_24275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (15))){
var inst_24148 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24148)){
var statearr_24216_24276 = state_24203__$1;
(statearr_24216_24276[(1)] = (19));

} else {
var statearr_24217_24277 = state_24203__$1;
(statearr_24217_24277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (21))){
var inst_24153 = (state_24203[(12)]);
var inst_24153__$1 = (state_24203[(2)]);
var inst_24154 = cljs.core.get.call(null,inst_24153__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24155 = cljs.core.get.call(null,inst_24153__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24156 = cljs.core.get.call(null,inst_24153__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24203__$1 = (function (){var statearr_24218 = state_24203;
(statearr_24218[(13)] = inst_24155);

(statearr_24218[(12)] = inst_24153__$1);

(statearr_24218[(11)] = inst_24154);

return statearr_24218;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24203__$1,(22),inst_24156);
} else {
if((state_val_24204 === (31))){
var inst_24185 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24185)){
var statearr_24219_24278 = state_24203__$1;
(statearr_24219_24278[(1)] = (32));

} else {
var statearr_24220_24279 = state_24203__$1;
(statearr_24220_24279[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (32))){
var inst_24162 = (state_24203[(14)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24203__$1,(35),out,inst_24162);
} else {
if((state_val_24204 === (33))){
var inst_24153 = (state_24203[(12)]);
var inst_24131 = inst_24153;
var state_24203__$1 = (function (){var statearr_24221 = state_24203;
(statearr_24221[(7)] = inst_24131);

return statearr_24221;
})();
var statearr_24222_24280 = state_24203__$1;
(statearr_24222_24280[(2)] = null);

(statearr_24222_24280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (13))){
var inst_24131 = (state_24203[(7)]);
var inst_24138 = inst_24131.cljs$lang$protocol_mask$partition0$;
var inst_24139 = (inst_24138 & (64));
var inst_24140 = inst_24131.cljs$core$ISeq$;
var inst_24141 = (inst_24139) || (inst_24140);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24141)){
var statearr_24223_24281 = state_24203__$1;
(statearr_24223_24281[(1)] = (16));

} else {
var statearr_24224_24282 = state_24203__$1;
(statearr_24224_24282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (22))){
var inst_24163 = (state_24203[(10)]);
var inst_24162 = (state_24203[(14)]);
var inst_24161 = (state_24203[(2)]);
var inst_24162__$1 = cljs.core.nth.call(null,inst_24161,(0),null);
var inst_24163__$1 = cljs.core.nth.call(null,inst_24161,(1),null);
var inst_24164 = (inst_24162__$1 == null);
var inst_24165 = cljs.core._EQ_.call(null,inst_24163__$1,change);
var inst_24166 = (inst_24164) || (inst_24165);
var state_24203__$1 = (function (){var statearr_24225 = state_24203;
(statearr_24225[(10)] = inst_24163__$1);

(statearr_24225[(14)] = inst_24162__$1);

return statearr_24225;
})();
if(cljs.core.truth_(inst_24166)){
var statearr_24226_24283 = state_24203__$1;
(statearr_24226_24283[(1)] = (23));

} else {
var statearr_24227_24284 = state_24203__$1;
(statearr_24227_24284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (36))){
var inst_24153 = (state_24203[(12)]);
var inst_24131 = inst_24153;
var state_24203__$1 = (function (){var statearr_24228 = state_24203;
(statearr_24228[(7)] = inst_24131);

return statearr_24228;
})();
var statearr_24229_24285 = state_24203__$1;
(statearr_24229_24285[(2)] = null);

(statearr_24229_24285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (29))){
var inst_24177 = (state_24203[(9)]);
var state_24203__$1 = state_24203;
var statearr_24230_24286 = state_24203__$1;
(statearr_24230_24286[(2)] = inst_24177);

(statearr_24230_24286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (6))){
var state_24203__$1 = state_24203;
var statearr_24231_24287 = state_24203__$1;
(statearr_24231_24287[(2)] = false);

(statearr_24231_24287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (28))){
var inst_24173 = (state_24203[(2)]);
var inst_24174 = calc_state.call(null);
var inst_24131 = inst_24174;
var state_24203__$1 = (function (){var statearr_24232 = state_24203;
(statearr_24232[(15)] = inst_24173);

(statearr_24232[(7)] = inst_24131);

return statearr_24232;
})();
var statearr_24233_24288 = state_24203__$1;
(statearr_24233_24288[(2)] = null);

(statearr_24233_24288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (25))){
var inst_24199 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24234_24289 = state_24203__$1;
(statearr_24234_24289[(2)] = inst_24199);

(statearr_24234_24289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (34))){
var inst_24197 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24235_24290 = state_24203__$1;
(statearr_24235_24290[(2)] = inst_24197);

(statearr_24235_24290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (17))){
var state_24203__$1 = state_24203;
var statearr_24236_24291 = state_24203__$1;
(statearr_24236_24291[(2)] = false);

(statearr_24236_24291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (3))){
var state_24203__$1 = state_24203;
var statearr_24237_24292 = state_24203__$1;
(statearr_24237_24292[(2)] = false);

(statearr_24237_24292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (12))){
var inst_24201 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24203__$1,inst_24201);
} else {
if((state_val_24204 === (2))){
var inst_24107 = (state_24203[(8)]);
var inst_24112 = inst_24107.cljs$lang$protocol_mask$partition0$;
var inst_24113 = (inst_24112 & (64));
var inst_24114 = inst_24107.cljs$core$ISeq$;
var inst_24115 = (inst_24113) || (inst_24114);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24115)){
var statearr_24238_24293 = state_24203__$1;
(statearr_24238_24293[(1)] = (5));

} else {
var statearr_24239_24294 = state_24203__$1;
(statearr_24239_24294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (23))){
var inst_24162 = (state_24203[(14)]);
var inst_24168 = (inst_24162 == null);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24168)){
var statearr_24240_24295 = state_24203__$1;
(statearr_24240_24295[(1)] = (26));

} else {
var statearr_24241_24296 = state_24203__$1;
(statearr_24241_24296[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (35))){
var inst_24188 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24188)){
var statearr_24242_24297 = state_24203__$1;
(statearr_24242_24297[(1)] = (36));

} else {
var statearr_24243_24298 = state_24203__$1;
(statearr_24243_24298[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (19))){
var inst_24131 = (state_24203[(7)]);
var inst_24150 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24131);
var state_24203__$1 = state_24203;
var statearr_24244_24299 = state_24203__$1;
(statearr_24244_24299[(2)] = inst_24150);

(statearr_24244_24299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (11))){
var inst_24131 = (state_24203[(7)]);
var inst_24135 = (inst_24131 == null);
var inst_24136 = cljs.core.not.call(null,inst_24135);
var state_24203__$1 = state_24203;
if(inst_24136){
var statearr_24245_24300 = state_24203__$1;
(statearr_24245_24300[(1)] = (13));

} else {
var statearr_24246_24301 = state_24203__$1;
(statearr_24246_24301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (9))){
var inst_24107 = (state_24203[(8)]);
var state_24203__$1 = state_24203;
var statearr_24247_24302 = state_24203__$1;
(statearr_24247_24302[(2)] = inst_24107);

(statearr_24247_24302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (5))){
var state_24203__$1 = state_24203;
var statearr_24248_24303 = state_24203__$1;
(statearr_24248_24303[(2)] = true);

(statearr_24248_24303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (14))){
var state_24203__$1 = state_24203;
var statearr_24249_24304 = state_24203__$1;
(statearr_24249_24304[(2)] = false);

(statearr_24249_24304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (26))){
var inst_24163 = (state_24203[(10)]);
var inst_24170 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24163);
var state_24203__$1 = state_24203;
var statearr_24250_24305 = state_24203__$1;
(statearr_24250_24305[(2)] = inst_24170);

(statearr_24250_24305[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (16))){
var state_24203__$1 = state_24203;
var statearr_24251_24306 = state_24203__$1;
(statearr_24251_24306[(2)] = true);

(statearr_24251_24306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (38))){
var inst_24193 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24252_24307 = state_24203__$1;
(statearr_24252_24307[(2)] = inst_24193);

(statearr_24252_24307[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (30))){
var inst_24155 = (state_24203[(13)]);
var inst_24163 = (state_24203[(10)]);
var inst_24154 = (state_24203[(11)]);
var inst_24180 = cljs.core.empty_QMARK_.call(null,inst_24154);
var inst_24181 = inst_24155.call(null,inst_24163);
var inst_24182 = cljs.core.not.call(null,inst_24181);
var inst_24183 = (inst_24180) && (inst_24182);
var state_24203__$1 = state_24203;
var statearr_24253_24308 = state_24203__$1;
(statearr_24253_24308[(2)] = inst_24183);

(statearr_24253_24308[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (10))){
var inst_24107 = (state_24203[(8)]);
var inst_24127 = (state_24203[(2)]);
var inst_24128 = cljs.core.get.call(null,inst_24127,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24129 = cljs.core.get.call(null,inst_24127,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24130 = cljs.core.get.call(null,inst_24127,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24131 = inst_24107;
var state_24203__$1 = (function (){var statearr_24254 = state_24203;
(statearr_24254[(16)] = inst_24128);

(statearr_24254[(7)] = inst_24131);

(statearr_24254[(17)] = inst_24129);

(statearr_24254[(18)] = inst_24130);

return statearr_24254;
})();
var statearr_24255_24309 = state_24203__$1;
(statearr_24255_24309[(2)] = null);

(statearr_24255_24309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (18))){
var inst_24145 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24256_24310 = state_24203__$1;
(statearr_24256_24310[(2)] = inst_24145);

(statearr_24256_24310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (37))){
var state_24203__$1 = state_24203;
var statearr_24257_24311 = state_24203__$1;
(statearr_24257_24311[(2)] = null);

(statearr_24257_24311[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (8))){
var inst_24107 = (state_24203[(8)]);
var inst_24124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24107);
var state_24203__$1 = state_24203;
var statearr_24258_24312 = state_24203__$1;
(statearr_24258_24312[(2)] = inst_24124);

(statearr_24258_24312[(1)] = (10));


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
});})(c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22421__auto__,c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22422__auto__ = null;
var cljs$core$async$mix_$_state_machine__22422__auto____0 = (function (){
var statearr_24262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24262[(0)] = cljs$core$async$mix_$_state_machine__22422__auto__);

(statearr_24262[(1)] = (1));

return statearr_24262;
});
var cljs$core$async$mix_$_state_machine__22422__auto____1 = (function (state_24203){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24263){if((e24263 instanceof Object)){
var ex__22425__auto__ = e24263;
var statearr_24264_24313 = state_24203;
(statearr_24264_24313[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24314 = state_24203;
state_24203 = G__24314;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22422__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22422__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22422__auto____0;
cljs$core$async$mix_$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22422__auto____1;
return cljs$core$async$mix_$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22535__auto__ = (function (){var statearr_24265 = f__22534__auto__.call(null);
(statearr_24265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24266);

return statearr_24265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24266,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19379__auto__ = (((p == null))?null:p);
var m__19380__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19380__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19379__auto__ = (((p == null))?null:p);
var m__19380__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,p,v,ch);
} else {
var m__19380__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24315 = [];
var len__19791__auto___24318 = arguments.length;
var i__19792__auto___24319 = (0);
while(true){
if((i__19792__auto___24319 < len__19791__auto___24318)){
args24315.push((arguments[i__19792__auto___24319]));

var G__24320 = (i__19792__auto___24319 + (1));
i__19792__auto___24319 = G__24320;
continue;
} else {
}
break;
}

var G__24317 = args24315.length;
switch (G__24317) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24315.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19379__auto__ = (((p == null))?null:p);
var m__19380__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,p);
} else {
var m__19380__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,p);
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
var x__19379__auto__ = (((p == null))?null:p);
var m__19380__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19379__auto__)]);
if(!((m__19380__auto__ == null))){
return m__19380__auto__.call(null,p,v);
} else {
var m__19380__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19380__auto____$1 == null))){
return m__19380__auto____$1.call(null,p,v);
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
var args24323 = [];
var len__19791__auto___24448 = arguments.length;
var i__19792__auto___24449 = (0);
while(true){
if((i__19792__auto___24449 < len__19791__auto___24448)){
args24323.push((arguments[i__19792__auto___24449]));

var G__24450 = (i__19792__auto___24449 + (1));
i__19792__auto___24449 = G__24450;
continue;
} else {
}
break;
}

var G__24325 = args24323.length;
switch (G__24325) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24323.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18716__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18716__auto__,mults){
return (function (p1__24322_SHARP_){
if(cljs.core.truth_(p1__24322_SHARP_.call(null,topic))){
return p1__24322_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24322_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18716__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24326 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24327){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24327 = meta24327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24328,meta24327__$1){
var self__ = this;
var _24328__$1 = this;
return (new cljs.core.async.t_cljs$core$async24326(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24327__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24328){
var self__ = this;
var _24328__$1 = this;
return self__.meta24327;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24327","meta24327",1708780483,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24326";

cljs.core.async.t_cljs$core$async24326.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24326");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24326 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24326(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24327){
return (new cljs.core.async.t_cljs$core$async24326(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24327));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24326(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22533__auto___24452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24452,mults,ensure_mult,p){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24452,mults,ensure_mult,p){
return (function (state_24400){
var state_val_24401 = (state_24400[(1)]);
if((state_val_24401 === (7))){
var inst_24396 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24402_24453 = state_24400__$1;
(statearr_24402_24453[(2)] = inst_24396);

(statearr_24402_24453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (20))){
var state_24400__$1 = state_24400;
var statearr_24403_24454 = state_24400__$1;
(statearr_24403_24454[(2)] = null);

(statearr_24403_24454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (1))){
var state_24400__$1 = state_24400;
var statearr_24404_24455 = state_24400__$1;
(statearr_24404_24455[(2)] = null);

(statearr_24404_24455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (24))){
var inst_24379 = (state_24400[(7)]);
var inst_24388 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24379);
var state_24400__$1 = state_24400;
var statearr_24405_24456 = state_24400__$1;
(statearr_24405_24456[(2)] = inst_24388);

(statearr_24405_24456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (4))){
var inst_24331 = (state_24400[(8)]);
var inst_24331__$1 = (state_24400[(2)]);
var inst_24332 = (inst_24331__$1 == null);
var state_24400__$1 = (function (){var statearr_24406 = state_24400;
(statearr_24406[(8)] = inst_24331__$1);

return statearr_24406;
})();
if(cljs.core.truth_(inst_24332)){
var statearr_24407_24457 = state_24400__$1;
(statearr_24407_24457[(1)] = (5));

} else {
var statearr_24408_24458 = state_24400__$1;
(statearr_24408_24458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (15))){
var inst_24373 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24409_24459 = state_24400__$1;
(statearr_24409_24459[(2)] = inst_24373);

(statearr_24409_24459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (21))){
var inst_24393 = (state_24400[(2)]);
var state_24400__$1 = (function (){var statearr_24410 = state_24400;
(statearr_24410[(9)] = inst_24393);

return statearr_24410;
})();
var statearr_24411_24460 = state_24400__$1;
(statearr_24411_24460[(2)] = null);

(statearr_24411_24460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (13))){
var inst_24355 = (state_24400[(10)]);
var inst_24357 = cljs.core.chunked_seq_QMARK_.call(null,inst_24355);
var state_24400__$1 = state_24400;
if(inst_24357){
var statearr_24412_24461 = state_24400__$1;
(statearr_24412_24461[(1)] = (16));

} else {
var statearr_24413_24462 = state_24400__$1;
(statearr_24413_24462[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (22))){
var inst_24385 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
if(cljs.core.truth_(inst_24385)){
var statearr_24414_24463 = state_24400__$1;
(statearr_24414_24463[(1)] = (23));

} else {
var statearr_24415_24464 = state_24400__$1;
(statearr_24415_24464[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (6))){
var inst_24331 = (state_24400[(8)]);
var inst_24381 = (state_24400[(11)]);
var inst_24379 = (state_24400[(7)]);
var inst_24379__$1 = topic_fn.call(null,inst_24331);
var inst_24380 = cljs.core.deref.call(null,mults);
var inst_24381__$1 = cljs.core.get.call(null,inst_24380,inst_24379__$1);
var state_24400__$1 = (function (){var statearr_24416 = state_24400;
(statearr_24416[(11)] = inst_24381__$1);

(statearr_24416[(7)] = inst_24379__$1);

return statearr_24416;
})();
if(cljs.core.truth_(inst_24381__$1)){
var statearr_24417_24465 = state_24400__$1;
(statearr_24417_24465[(1)] = (19));

} else {
var statearr_24418_24466 = state_24400__$1;
(statearr_24418_24466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (25))){
var inst_24390 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24419_24467 = state_24400__$1;
(statearr_24419_24467[(2)] = inst_24390);

(statearr_24419_24467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (17))){
var inst_24355 = (state_24400[(10)]);
var inst_24364 = cljs.core.first.call(null,inst_24355);
var inst_24365 = cljs.core.async.muxch_STAR_.call(null,inst_24364);
var inst_24366 = cljs.core.async.close_BANG_.call(null,inst_24365);
var inst_24367 = cljs.core.next.call(null,inst_24355);
var inst_24341 = inst_24367;
var inst_24342 = null;
var inst_24343 = (0);
var inst_24344 = (0);
var state_24400__$1 = (function (){var statearr_24420 = state_24400;
(statearr_24420[(12)] = inst_24343);

(statearr_24420[(13)] = inst_24344);

(statearr_24420[(14)] = inst_24341);

(statearr_24420[(15)] = inst_24366);

(statearr_24420[(16)] = inst_24342);

return statearr_24420;
})();
var statearr_24421_24468 = state_24400__$1;
(statearr_24421_24468[(2)] = null);

(statearr_24421_24468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (3))){
var inst_24398 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24400__$1,inst_24398);
} else {
if((state_val_24401 === (12))){
var inst_24375 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24422_24469 = state_24400__$1;
(statearr_24422_24469[(2)] = inst_24375);

(statearr_24422_24469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (2))){
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(4),ch);
} else {
if((state_val_24401 === (23))){
var state_24400__$1 = state_24400;
var statearr_24423_24470 = state_24400__$1;
(statearr_24423_24470[(2)] = null);

(statearr_24423_24470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (19))){
var inst_24331 = (state_24400[(8)]);
var inst_24381 = (state_24400[(11)]);
var inst_24383 = cljs.core.async.muxch_STAR_.call(null,inst_24381);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24400__$1,(22),inst_24383,inst_24331);
} else {
if((state_val_24401 === (11))){
var inst_24341 = (state_24400[(14)]);
var inst_24355 = (state_24400[(10)]);
var inst_24355__$1 = cljs.core.seq.call(null,inst_24341);
var state_24400__$1 = (function (){var statearr_24424 = state_24400;
(statearr_24424[(10)] = inst_24355__$1);

return statearr_24424;
})();
if(inst_24355__$1){
var statearr_24425_24471 = state_24400__$1;
(statearr_24425_24471[(1)] = (13));

} else {
var statearr_24426_24472 = state_24400__$1;
(statearr_24426_24472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (9))){
var inst_24377 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24427_24473 = state_24400__$1;
(statearr_24427_24473[(2)] = inst_24377);

(statearr_24427_24473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (5))){
var inst_24338 = cljs.core.deref.call(null,mults);
var inst_24339 = cljs.core.vals.call(null,inst_24338);
var inst_24340 = cljs.core.seq.call(null,inst_24339);
var inst_24341 = inst_24340;
var inst_24342 = null;
var inst_24343 = (0);
var inst_24344 = (0);
var state_24400__$1 = (function (){var statearr_24428 = state_24400;
(statearr_24428[(12)] = inst_24343);

(statearr_24428[(13)] = inst_24344);

(statearr_24428[(14)] = inst_24341);

(statearr_24428[(16)] = inst_24342);

return statearr_24428;
})();
var statearr_24429_24474 = state_24400__$1;
(statearr_24429_24474[(2)] = null);

(statearr_24429_24474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (14))){
var state_24400__$1 = state_24400;
var statearr_24433_24475 = state_24400__$1;
(statearr_24433_24475[(2)] = null);

(statearr_24433_24475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (16))){
var inst_24355 = (state_24400[(10)]);
var inst_24359 = cljs.core.chunk_first.call(null,inst_24355);
var inst_24360 = cljs.core.chunk_rest.call(null,inst_24355);
var inst_24361 = cljs.core.count.call(null,inst_24359);
var inst_24341 = inst_24360;
var inst_24342 = inst_24359;
var inst_24343 = inst_24361;
var inst_24344 = (0);
var state_24400__$1 = (function (){var statearr_24434 = state_24400;
(statearr_24434[(12)] = inst_24343);

(statearr_24434[(13)] = inst_24344);

(statearr_24434[(14)] = inst_24341);

(statearr_24434[(16)] = inst_24342);

return statearr_24434;
})();
var statearr_24435_24476 = state_24400__$1;
(statearr_24435_24476[(2)] = null);

(statearr_24435_24476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (10))){
var inst_24343 = (state_24400[(12)]);
var inst_24344 = (state_24400[(13)]);
var inst_24341 = (state_24400[(14)]);
var inst_24342 = (state_24400[(16)]);
var inst_24349 = cljs.core._nth.call(null,inst_24342,inst_24344);
var inst_24350 = cljs.core.async.muxch_STAR_.call(null,inst_24349);
var inst_24351 = cljs.core.async.close_BANG_.call(null,inst_24350);
var inst_24352 = (inst_24344 + (1));
var tmp24430 = inst_24343;
var tmp24431 = inst_24341;
var tmp24432 = inst_24342;
var inst_24341__$1 = tmp24431;
var inst_24342__$1 = tmp24432;
var inst_24343__$1 = tmp24430;
var inst_24344__$1 = inst_24352;
var state_24400__$1 = (function (){var statearr_24436 = state_24400;
(statearr_24436[(12)] = inst_24343__$1);

(statearr_24436[(13)] = inst_24344__$1);

(statearr_24436[(14)] = inst_24341__$1);

(statearr_24436[(17)] = inst_24351);

(statearr_24436[(16)] = inst_24342__$1);

return statearr_24436;
})();
var statearr_24437_24477 = state_24400__$1;
(statearr_24437_24477[(2)] = null);

(statearr_24437_24477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (18))){
var inst_24370 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24438_24478 = state_24400__$1;
(statearr_24438_24478[(2)] = inst_24370);

(statearr_24438_24478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (8))){
var inst_24343 = (state_24400[(12)]);
var inst_24344 = (state_24400[(13)]);
var inst_24346 = (inst_24344 < inst_24343);
var inst_24347 = inst_24346;
var state_24400__$1 = state_24400;
if(cljs.core.truth_(inst_24347)){
var statearr_24439_24479 = state_24400__$1;
(statearr_24439_24479[(1)] = (10));

} else {
var statearr_24440_24480 = state_24400__$1;
(statearr_24440_24480[(1)] = (11));

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
});})(c__22533__auto___24452,mults,ensure_mult,p))
;
return ((function (switch__22421__auto__,c__22533__auto___24452,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_24444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24444[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_24444[(1)] = (1));

return statearr_24444;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_24400){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24445){if((e24445 instanceof Object)){
var ex__22425__auto__ = e24445;
var statearr_24446_24481 = state_24400;
(statearr_24446_24481[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24482 = state_24400;
state_24400 = G__24482;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_24400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_24400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24452,mults,ensure_mult,p))
})();
var state__22535__auto__ = (function (){var statearr_24447 = f__22534__auto__.call(null);
(statearr_24447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24452);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24452,mults,ensure_mult,p))
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
var args24483 = [];
var len__19791__auto___24486 = arguments.length;
var i__19792__auto___24487 = (0);
while(true){
if((i__19792__auto___24487 < len__19791__auto___24486)){
args24483.push((arguments[i__19792__auto___24487]));

var G__24488 = (i__19792__auto___24487 + (1));
i__19792__auto___24487 = G__24488;
continue;
} else {
}
break;
}

var G__24485 = args24483.length;
switch (G__24485) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24483.length)].join('')));

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
var args24490 = [];
var len__19791__auto___24493 = arguments.length;
var i__19792__auto___24494 = (0);
while(true){
if((i__19792__auto___24494 < len__19791__auto___24493)){
args24490.push((arguments[i__19792__auto___24494]));

var G__24495 = (i__19792__auto___24494 + (1));
i__19792__auto___24494 = G__24495;
continue;
} else {
}
break;
}

var G__24492 = args24490.length;
switch (G__24492) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24490.length)].join('')));

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
var args24497 = [];
var len__19791__auto___24568 = arguments.length;
var i__19792__auto___24569 = (0);
while(true){
if((i__19792__auto___24569 < len__19791__auto___24568)){
args24497.push((arguments[i__19792__auto___24569]));

var G__24570 = (i__19792__auto___24569 + (1));
i__19792__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var G__24499 = args24497.length;
switch (G__24499) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24497.length)].join('')));

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
var c__22533__auto___24572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24538){
var state_val_24539 = (state_24538[(1)]);
if((state_val_24539 === (7))){
var state_24538__$1 = state_24538;
var statearr_24540_24573 = state_24538__$1;
(statearr_24540_24573[(2)] = null);

(statearr_24540_24573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (1))){
var state_24538__$1 = state_24538;
var statearr_24541_24574 = state_24538__$1;
(statearr_24541_24574[(2)] = null);

(statearr_24541_24574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (4))){
var inst_24502 = (state_24538[(7)]);
var inst_24504 = (inst_24502 < cnt);
var state_24538__$1 = state_24538;
if(cljs.core.truth_(inst_24504)){
var statearr_24542_24575 = state_24538__$1;
(statearr_24542_24575[(1)] = (6));

} else {
var statearr_24543_24576 = state_24538__$1;
(statearr_24543_24576[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (15))){
var inst_24534 = (state_24538[(2)]);
var state_24538__$1 = state_24538;
var statearr_24544_24577 = state_24538__$1;
(statearr_24544_24577[(2)] = inst_24534);

(statearr_24544_24577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (13))){
var inst_24527 = cljs.core.async.close_BANG_.call(null,out);
var state_24538__$1 = state_24538;
var statearr_24545_24578 = state_24538__$1;
(statearr_24545_24578[(2)] = inst_24527);

(statearr_24545_24578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (6))){
var state_24538__$1 = state_24538;
var statearr_24546_24579 = state_24538__$1;
(statearr_24546_24579[(2)] = null);

(statearr_24546_24579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (3))){
var inst_24536 = (state_24538[(2)]);
var state_24538__$1 = state_24538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24538__$1,inst_24536);
} else {
if((state_val_24539 === (12))){
var inst_24524 = (state_24538[(8)]);
var inst_24524__$1 = (state_24538[(2)]);
var inst_24525 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24524__$1);
var state_24538__$1 = (function (){var statearr_24547 = state_24538;
(statearr_24547[(8)] = inst_24524__$1);

return statearr_24547;
})();
if(cljs.core.truth_(inst_24525)){
var statearr_24548_24580 = state_24538__$1;
(statearr_24548_24580[(1)] = (13));

} else {
var statearr_24549_24581 = state_24538__$1;
(statearr_24549_24581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (2))){
var inst_24501 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24502 = (0);
var state_24538__$1 = (function (){var statearr_24550 = state_24538;
(statearr_24550[(9)] = inst_24501);

(statearr_24550[(7)] = inst_24502);

return statearr_24550;
})();
var statearr_24551_24582 = state_24538__$1;
(statearr_24551_24582[(2)] = null);

(statearr_24551_24582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (11))){
var inst_24502 = (state_24538[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24538,(10),Object,null,(9));
var inst_24511 = chs__$1.call(null,inst_24502);
var inst_24512 = done.call(null,inst_24502);
var inst_24513 = cljs.core.async.take_BANG_.call(null,inst_24511,inst_24512);
var state_24538__$1 = state_24538;
var statearr_24552_24583 = state_24538__$1;
(statearr_24552_24583[(2)] = inst_24513);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24538__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (9))){
var inst_24502 = (state_24538[(7)]);
var inst_24515 = (state_24538[(2)]);
var inst_24516 = (inst_24502 + (1));
var inst_24502__$1 = inst_24516;
var state_24538__$1 = (function (){var statearr_24553 = state_24538;
(statearr_24553[(10)] = inst_24515);

(statearr_24553[(7)] = inst_24502__$1);

return statearr_24553;
})();
var statearr_24554_24584 = state_24538__$1;
(statearr_24554_24584[(2)] = null);

(statearr_24554_24584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (5))){
var inst_24522 = (state_24538[(2)]);
var state_24538__$1 = (function (){var statearr_24555 = state_24538;
(statearr_24555[(11)] = inst_24522);

return statearr_24555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24538__$1,(12),dchan);
} else {
if((state_val_24539 === (14))){
var inst_24524 = (state_24538[(8)]);
var inst_24529 = cljs.core.apply.call(null,f,inst_24524);
var state_24538__$1 = state_24538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24538__$1,(16),out,inst_24529);
} else {
if((state_val_24539 === (16))){
var inst_24531 = (state_24538[(2)]);
var state_24538__$1 = (function (){var statearr_24556 = state_24538;
(statearr_24556[(12)] = inst_24531);

return statearr_24556;
})();
var statearr_24557_24585 = state_24538__$1;
(statearr_24557_24585[(2)] = null);

(statearr_24557_24585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (10))){
var inst_24506 = (state_24538[(2)]);
var inst_24507 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24538__$1 = (function (){var statearr_24558 = state_24538;
(statearr_24558[(13)] = inst_24506);

return statearr_24558;
})();
var statearr_24559_24586 = state_24538__$1;
(statearr_24559_24586[(2)] = inst_24507);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24538__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24539 === (8))){
var inst_24520 = (state_24538[(2)]);
var state_24538__$1 = state_24538;
var statearr_24560_24587 = state_24538__$1;
(statearr_24560_24587[(2)] = inst_24520);

(statearr_24560_24587[(1)] = (5));


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
});})(c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22421__auto__,c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_24564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24564[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_24564[(1)] = (1));

return statearr_24564;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_24538){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24565){if((e24565 instanceof Object)){
var ex__22425__auto__ = e24565;
var statearr_24566_24588 = state_24538;
(statearr_24566_24588[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24589 = state_24538;
state_24538 = G__24589;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_24538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_24538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22535__auto__ = (function (){var statearr_24567 = f__22534__auto__.call(null);
(statearr_24567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24572);

return statearr_24567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24572,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24591 = [];
var len__19791__auto___24649 = arguments.length;
var i__19792__auto___24650 = (0);
while(true){
if((i__19792__auto___24650 < len__19791__auto___24649)){
args24591.push((arguments[i__19792__auto___24650]));

var G__24651 = (i__19792__auto___24650 + (1));
i__19792__auto___24650 = G__24651;
continue;
} else {
}
break;
}

var G__24593 = args24591.length;
switch (G__24593) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24591.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___24653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24653,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24653,out){
return (function (state_24625){
var state_val_24626 = (state_24625[(1)]);
if((state_val_24626 === (7))){
var inst_24604 = (state_24625[(7)]);
var inst_24605 = (state_24625[(8)]);
var inst_24604__$1 = (state_24625[(2)]);
var inst_24605__$1 = cljs.core.nth.call(null,inst_24604__$1,(0),null);
var inst_24606 = cljs.core.nth.call(null,inst_24604__$1,(1),null);
var inst_24607 = (inst_24605__$1 == null);
var state_24625__$1 = (function (){var statearr_24627 = state_24625;
(statearr_24627[(7)] = inst_24604__$1);

(statearr_24627[(8)] = inst_24605__$1);

(statearr_24627[(9)] = inst_24606);

return statearr_24627;
})();
if(cljs.core.truth_(inst_24607)){
var statearr_24628_24654 = state_24625__$1;
(statearr_24628_24654[(1)] = (8));

} else {
var statearr_24629_24655 = state_24625__$1;
(statearr_24629_24655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (1))){
var inst_24594 = cljs.core.vec.call(null,chs);
var inst_24595 = inst_24594;
var state_24625__$1 = (function (){var statearr_24630 = state_24625;
(statearr_24630[(10)] = inst_24595);

return statearr_24630;
})();
var statearr_24631_24656 = state_24625__$1;
(statearr_24631_24656[(2)] = null);

(statearr_24631_24656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (4))){
var inst_24595 = (state_24625[(10)]);
var state_24625__$1 = state_24625;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24625__$1,(7),inst_24595);
} else {
if((state_val_24626 === (6))){
var inst_24621 = (state_24625[(2)]);
var state_24625__$1 = state_24625;
var statearr_24632_24657 = state_24625__$1;
(statearr_24632_24657[(2)] = inst_24621);

(statearr_24632_24657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (3))){
var inst_24623 = (state_24625[(2)]);
var state_24625__$1 = state_24625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24625__$1,inst_24623);
} else {
if((state_val_24626 === (2))){
var inst_24595 = (state_24625[(10)]);
var inst_24597 = cljs.core.count.call(null,inst_24595);
var inst_24598 = (inst_24597 > (0));
var state_24625__$1 = state_24625;
if(cljs.core.truth_(inst_24598)){
var statearr_24634_24658 = state_24625__$1;
(statearr_24634_24658[(1)] = (4));

} else {
var statearr_24635_24659 = state_24625__$1;
(statearr_24635_24659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (11))){
var inst_24595 = (state_24625[(10)]);
var inst_24614 = (state_24625[(2)]);
var tmp24633 = inst_24595;
var inst_24595__$1 = tmp24633;
var state_24625__$1 = (function (){var statearr_24636 = state_24625;
(statearr_24636[(11)] = inst_24614);

(statearr_24636[(10)] = inst_24595__$1);

return statearr_24636;
})();
var statearr_24637_24660 = state_24625__$1;
(statearr_24637_24660[(2)] = null);

(statearr_24637_24660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (9))){
var inst_24605 = (state_24625[(8)]);
var state_24625__$1 = state_24625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24625__$1,(11),out,inst_24605);
} else {
if((state_val_24626 === (5))){
var inst_24619 = cljs.core.async.close_BANG_.call(null,out);
var state_24625__$1 = state_24625;
var statearr_24638_24661 = state_24625__$1;
(statearr_24638_24661[(2)] = inst_24619);

(statearr_24638_24661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (10))){
var inst_24617 = (state_24625[(2)]);
var state_24625__$1 = state_24625;
var statearr_24639_24662 = state_24625__$1;
(statearr_24639_24662[(2)] = inst_24617);

(statearr_24639_24662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (8))){
var inst_24604 = (state_24625[(7)]);
var inst_24605 = (state_24625[(8)]);
var inst_24595 = (state_24625[(10)]);
var inst_24606 = (state_24625[(9)]);
var inst_24609 = (function (){var cs = inst_24595;
var vec__24600 = inst_24604;
var v = inst_24605;
var c = inst_24606;
return ((function (cs,vec__24600,v,c,inst_24604,inst_24605,inst_24595,inst_24606,state_val_24626,c__22533__auto___24653,out){
return (function (p1__24590_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24590_SHARP_);
});
;})(cs,vec__24600,v,c,inst_24604,inst_24605,inst_24595,inst_24606,state_val_24626,c__22533__auto___24653,out))
})();
var inst_24610 = cljs.core.filterv.call(null,inst_24609,inst_24595);
var inst_24595__$1 = inst_24610;
var state_24625__$1 = (function (){var statearr_24640 = state_24625;
(statearr_24640[(10)] = inst_24595__$1);

return statearr_24640;
})();
var statearr_24641_24663 = state_24625__$1;
(statearr_24641_24663[(2)] = null);

(statearr_24641_24663[(1)] = (2));


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
});})(c__22533__auto___24653,out))
;
return ((function (switch__22421__auto__,c__22533__auto___24653,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_24645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24645[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_24645[(1)] = (1));

return statearr_24645;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_24625){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object)){
var ex__22425__auto__ = e24646;
var statearr_24647_24664 = state_24625;
(statearr_24647_24664[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24665 = state_24625;
state_24625 = G__24665;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_24625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_24625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24653,out))
})();
var state__22535__auto__ = (function (){var statearr_24648 = f__22534__auto__.call(null);
(statearr_24648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24653);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24653,out))
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
var args24666 = [];
var len__19791__auto___24715 = arguments.length;
var i__19792__auto___24716 = (0);
while(true){
if((i__19792__auto___24716 < len__19791__auto___24715)){
args24666.push((arguments[i__19792__auto___24716]));

var G__24717 = (i__19792__auto___24716 + (1));
i__19792__auto___24716 = G__24717;
continue;
} else {
}
break;
}

var G__24668 = args24666.length;
switch (G__24668) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24666.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___24719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24719,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24719,out){
return (function (state_24692){
var state_val_24693 = (state_24692[(1)]);
if((state_val_24693 === (7))){
var inst_24674 = (state_24692[(7)]);
var inst_24674__$1 = (state_24692[(2)]);
var inst_24675 = (inst_24674__$1 == null);
var inst_24676 = cljs.core.not.call(null,inst_24675);
var state_24692__$1 = (function (){var statearr_24694 = state_24692;
(statearr_24694[(7)] = inst_24674__$1);

return statearr_24694;
})();
if(inst_24676){
var statearr_24695_24720 = state_24692__$1;
(statearr_24695_24720[(1)] = (8));

} else {
var statearr_24696_24721 = state_24692__$1;
(statearr_24696_24721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (1))){
var inst_24669 = (0);
var state_24692__$1 = (function (){var statearr_24697 = state_24692;
(statearr_24697[(8)] = inst_24669);

return statearr_24697;
})();
var statearr_24698_24722 = state_24692__$1;
(statearr_24698_24722[(2)] = null);

(statearr_24698_24722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (4))){
var state_24692__$1 = state_24692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24692__$1,(7),ch);
} else {
if((state_val_24693 === (6))){
var inst_24687 = (state_24692[(2)]);
var state_24692__$1 = state_24692;
var statearr_24699_24723 = state_24692__$1;
(statearr_24699_24723[(2)] = inst_24687);

(statearr_24699_24723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (3))){
var inst_24689 = (state_24692[(2)]);
var inst_24690 = cljs.core.async.close_BANG_.call(null,out);
var state_24692__$1 = (function (){var statearr_24700 = state_24692;
(statearr_24700[(9)] = inst_24689);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24692__$1,inst_24690);
} else {
if((state_val_24693 === (2))){
var inst_24669 = (state_24692[(8)]);
var inst_24671 = (inst_24669 < n);
var state_24692__$1 = state_24692;
if(cljs.core.truth_(inst_24671)){
var statearr_24701_24724 = state_24692__$1;
(statearr_24701_24724[(1)] = (4));

} else {
var statearr_24702_24725 = state_24692__$1;
(statearr_24702_24725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (11))){
var inst_24669 = (state_24692[(8)]);
var inst_24679 = (state_24692[(2)]);
var inst_24680 = (inst_24669 + (1));
var inst_24669__$1 = inst_24680;
var state_24692__$1 = (function (){var statearr_24703 = state_24692;
(statearr_24703[(10)] = inst_24679);

(statearr_24703[(8)] = inst_24669__$1);

return statearr_24703;
})();
var statearr_24704_24726 = state_24692__$1;
(statearr_24704_24726[(2)] = null);

(statearr_24704_24726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (9))){
var state_24692__$1 = state_24692;
var statearr_24705_24727 = state_24692__$1;
(statearr_24705_24727[(2)] = null);

(statearr_24705_24727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (5))){
var state_24692__$1 = state_24692;
var statearr_24706_24728 = state_24692__$1;
(statearr_24706_24728[(2)] = null);

(statearr_24706_24728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (10))){
var inst_24684 = (state_24692[(2)]);
var state_24692__$1 = state_24692;
var statearr_24707_24729 = state_24692__$1;
(statearr_24707_24729[(2)] = inst_24684);

(statearr_24707_24729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (8))){
var inst_24674 = (state_24692[(7)]);
var state_24692__$1 = state_24692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24692__$1,(11),out,inst_24674);
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
});})(c__22533__auto___24719,out))
;
return ((function (switch__22421__auto__,c__22533__auto___24719,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_24711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24711[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_24711[(1)] = (1));

return statearr_24711;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_24692){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24712){if((e24712 instanceof Object)){
var ex__22425__auto__ = e24712;
var statearr_24713_24730 = state_24692;
(statearr_24713_24730[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24731 = state_24692;
state_24692 = G__24731;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_24692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_24692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24719,out))
})();
var state__22535__auto__ = (function (){var statearr_24714 = f__22534__auto__.call(null);
(statearr_24714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24719);

return statearr_24714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24719,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24739 = (function (map_LT_,f,ch,meta24740){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24740 = meta24740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24741,meta24740__$1){
var self__ = this;
var _24741__$1 = this;
return (new cljs.core.async.t_cljs$core$async24739(self__.map_LT_,self__.f,self__.ch,meta24740__$1));
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24741){
var self__ = this;
var _24741__$1 = this;
return self__.meta24740;
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24742 = (function (map_LT_,f,ch,meta24740,_,fn1,meta24743){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24740 = meta24740;
this._ = _;
this.fn1 = fn1;
this.meta24743 = meta24743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24744,meta24743__$1){
var self__ = this;
var _24744__$1 = this;
return (new cljs.core.async.t_cljs$core$async24742(self__.map_LT_,self__.f,self__.ch,self__.meta24740,self__._,self__.fn1,meta24743__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24744){
var self__ = this;
var _24744__$1 = this;
return self__.meta24743;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24732_SHARP_){
return f1.call(null,(((p1__24732_SHARP_ == null))?null:self__.f.call(null,p1__24732_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24740","meta24740",267798083,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24739","cljs.core.async/t_cljs$core$async24739",-467498236,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24743","meta24743",-1939555334,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24742";

cljs.core.async.t_cljs$core$async24742.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24742");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24742 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24742(map_LT___$1,f__$1,ch__$1,meta24740__$1,___$2,fn1__$1,meta24743){
return (new cljs.core.async.t_cljs$core$async24742(map_LT___$1,f__$1,ch__$1,meta24740__$1,___$2,fn1__$1,meta24743));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24742(self__.map_LT_,self__.f,self__.ch,self__.meta24740,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18704__auto__ = ret;
if(cljs.core.truth_(and__18704__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18704__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24740","meta24740",267798083,null)], null);
});

cljs.core.async.t_cljs$core$async24739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24739";

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24739");
});

cljs.core.async.__GT_t_cljs$core$async24739 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24739(map_LT___$1,f__$1,ch__$1,meta24740){
return (new cljs.core.async.t_cljs$core$async24739(map_LT___$1,f__$1,ch__$1,meta24740));
});

}

return (new cljs.core.async.t_cljs$core$async24739(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24748 = (function (map_GT_,f,ch,meta24749){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24749 = meta24749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24750,meta24749__$1){
var self__ = this;
var _24750__$1 = this;
return (new cljs.core.async.t_cljs$core$async24748(self__.map_GT_,self__.f,self__.ch,meta24749__$1));
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24750){
var self__ = this;
var _24750__$1 = this;
return self__.meta24749;
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24749","meta24749",-951873875,null)], null);
});

cljs.core.async.t_cljs$core$async24748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24748";

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24748");
});

cljs.core.async.__GT_t_cljs$core$async24748 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24748(map_GT___$1,f__$1,ch__$1,meta24749){
return (new cljs.core.async.t_cljs$core$async24748(map_GT___$1,f__$1,ch__$1,meta24749));
});

}

return (new cljs.core.async.t_cljs$core$async24748(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24754 = (function (filter_GT_,p,ch,meta24755){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24755 = meta24755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24756,meta24755__$1){
var self__ = this;
var _24756__$1 = this;
return (new cljs.core.async.t_cljs$core$async24754(self__.filter_GT_,self__.p,self__.ch,meta24755__$1));
});

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24756){
var self__ = this;
var _24756__$1 = this;
return self__.meta24755;
});

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24755","meta24755",-92838638,null)], null);
});

cljs.core.async.t_cljs$core$async24754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24754";

cljs.core.async.t_cljs$core$async24754.cljs$lang$ctorPrWriter = (function (this__19322__auto__,writer__19323__auto__,opt__19324__auto__){
return cljs.core._write.call(null,writer__19323__auto__,"cljs.core.async/t_cljs$core$async24754");
});

cljs.core.async.__GT_t_cljs$core$async24754 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24754(filter_GT___$1,p__$1,ch__$1,meta24755){
return (new cljs.core.async.t_cljs$core$async24754(filter_GT___$1,p__$1,ch__$1,meta24755));
});

}

return (new cljs.core.async.t_cljs$core$async24754(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24757 = [];
var len__19791__auto___24801 = arguments.length;
var i__19792__auto___24802 = (0);
while(true){
if((i__19792__auto___24802 < len__19791__auto___24801)){
args24757.push((arguments[i__19792__auto___24802]));

var G__24803 = (i__19792__auto___24802 + (1));
i__19792__auto___24802 = G__24803;
continue;
} else {
}
break;
}

var G__24759 = args24757.length;
switch (G__24759) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24757.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___24805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___24805,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___24805,out){
return (function (state_24780){
var state_val_24781 = (state_24780[(1)]);
if((state_val_24781 === (7))){
var inst_24776 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
var statearr_24782_24806 = state_24780__$1;
(statearr_24782_24806[(2)] = inst_24776);

(statearr_24782_24806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (1))){
var state_24780__$1 = state_24780;
var statearr_24783_24807 = state_24780__$1;
(statearr_24783_24807[(2)] = null);

(statearr_24783_24807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (4))){
var inst_24762 = (state_24780[(7)]);
var inst_24762__$1 = (state_24780[(2)]);
var inst_24763 = (inst_24762__$1 == null);
var state_24780__$1 = (function (){var statearr_24784 = state_24780;
(statearr_24784[(7)] = inst_24762__$1);

return statearr_24784;
})();
if(cljs.core.truth_(inst_24763)){
var statearr_24785_24808 = state_24780__$1;
(statearr_24785_24808[(1)] = (5));

} else {
var statearr_24786_24809 = state_24780__$1;
(statearr_24786_24809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (6))){
var inst_24762 = (state_24780[(7)]);
var inst_24767 = p.call(null,inst_24762);
var state_24780__$1 = state_24780;
if(cljs.core.truth_(inst_24767)){
var statearr_24787_24810 = state_24780__$1;
(statearr_24787_24810[(1)] = (8));

} else {
var statearr_24788_24811 = state_24780__$1;
(statearr_24788_24811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (3))){
var inst_24778 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24780__$1,inst_24778);
} else {
if((state_val_24781 === (2))){
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24780__$1,(4),ch);
} else {
if((state_val_24781 === (11))){
var inst_24770 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
var statearr_24789_24812 = state_24780__$1;
(statearr_24789_24812[(2)] = inst_24770);

(statearr_24789_24812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (9))){
var state_24780__$1 = state_24780;
var statearr_24790_24813 = state_24780__$1;
(statearr_24790_24813[(2)] = null);

(statearr_24790_24813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (5))){
var inst_24765 = cljs.core.async.close_BANG_.call(null,out);
var state_24780__$1 = state_24780;
var statearr_24791_24814 = state_24780__$1;
(statearr_24791_24814[(2)] = inst_24765);

(statearr_24791_24814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (10))){
var inst_24773 = (state_24780[(2)]);
var state_24780__$1 = (function (){var statearr_24792 = state_24780;
(statearr_24792[(8)] = inst_24773);

return statearr_24792;
})();
var statearr_24793_24815 = state_24780__$1;
(statearr_24793_24815[(2)] = null);

(statearr_24793_24815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (8))){
var inst_24762 = (state_24780[(7)]);
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24780__$1,(11),out,inst_24762);
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
});})(c__22533__auto___24805,out))
;
return ((function (switch__22421__auto__,c__22533__auto___24805,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_24797 = [null,null,null,null,null,null,null,null,null];
(statearr_24797[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_24797[(1)] = (1));

return statearr_24797;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_24780){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e24798){if((e24798 instanceof Object)){
var ex__22425__auto__ = e24798;
var statearr_24799_24816 = state_24780;
(statearr_24799_24816[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24817 = state_24780;
state_24780 = G__24817;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_24780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_24780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___24805,out))
})();
var state__22535__auto__ = (function (){var statearr_24800 = f__22534__auto__.call(null);
(statearr_24800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___24805);

return statearr_24800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___24805,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24818 = [];
var len__19791__auto___24821 = arguments.length;
var i__19792__auto___24822 = (0);
while(true){
if((i__19792__auto___24822 < len__19791__auto___24821)){
args24818.push((arguments[i__19792__auto___24822]));

var G__24823 = (i__19792__auto___24822 + (1));
i__19792__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var G__24820 = args24818.length;
switch (G__24820) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24818.length)].join('')));

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
var c__22533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto__){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto__){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (7))){
var inst_24986 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_24992_25033 = state_24990__$1;
(statearr_24992_25033[(2)] = inst_24986);

(statearr_24992_25033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (20))){
var inst_24956 = (state_24990[(7)]);
var inst_24967 = (state_24990[(2)]);
var inst_24968 = cljs.core.next.call(null,inst_24956);
var inst_24942 = inst_24968;
var inst_24943 = null;
var inst_24944 = (0);
var inst_24945 = (0);
var state_24990__$1 = (function (){var statearr_24993 = state_24990;
(statearr_24993[(8)] = inst_24967);

(statearr_24993[(9)] = inst_24943);

(statearr_24993[(10)] = inst_24944);

(statearr_24993[(11)] = inst_24945);

(statearr_24993[(12)] = inst_24942);

return statearr_24993;
})();
var statearr_24994_25034 = state_24990__$1;
(statearr_24994_25034[(2)] = null);

(statearr_24994_25034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (1))){
var state_24990__$1 = state_24990;
var statearr_24995_25035 = state_24990__$1;
(statearr_24995_25035[(2)] = null);

(statearr_24995_25035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (4))){
var inst_24931 = (state_24990[(13)]);
var inst_24931__$1 = (state_24990[(2)]);
var inst_24932 = (inst_24931__$1 == null);
var state_24990__$1 = (function (){var statearr_24996 = state_24990;
(statearr_24996[(13)] = inst_24931__$1);

return statearr_24996;
})();
if(cljs.core.truth_(inst_24932)){
var statearr_24997_25036 = state_24990__$1;
(statearr_24997_25036[(1)] = (5));

} else {
var statearr_24998_25037 = state_24990__$1;
(statearr_24998_25037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (15))){
var state_24990__$1 = state_24990;
var statearr_25002_25038 = state_24990__$1;
(statearr_25002_25038[(2)] = null);

(statearr_25002_25038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (21))){
var state_24990__$1 = state_24990;
var statearr_25003_25039 = state_24990__$1;
(statearr_25003_25039[(2)] = null);

(statearr_25003_25039[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (13))){
var inst_24943 = (state_24990[(9)]);
var inst_24944 = (state_24990[(10)]);
var inst_24945 = (state_24990[(11)]);
var inst_24942 = (state_24990[(12)]);
var inst_24952 = (state_24990[(2)]);
var inst_24953 = (inst_24945 + (1));
var tmp24999 = inst_24943;
var tmp25000 = inst_24944;
var tmp25001 = inst_24942;
var inst_24942__$1 = tmp25001;
var inst_24943__$1 = tmp24999;
var inst_24944__$1 = tmp25000;
var inst_24945__$1 = inst_24953;
var state_24990__$1 = (function (){var statearr_25004 = state_24990;
(statearr_25004[(9)] = inst_24943__$1);

(statearr_25004[(10)] = inst_24944__$1);

(statearr_25004[(14)] = inst_24952);

(statearr_25004[(11)] = inst_24945__$1);

(statearr_25004[(12)] = inst_24942__$1);

return statearr_25004;
})();
var statearr_25005_25040 = state_24990__$1;
(statearr_25005_25040[(2)] = null);

(statearr_25005_25040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (22))){
var state_24990__$1 = state_24990;
var statearr_25006_25041 = state_24990__$1;
(statearr_25006_25041[(2)] = null);

(statearr_25006_25041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (6))){
var inst_24931 = (state_24990[(13)]);
var inst_24940 = f.call(null,inst_24931);
var inst_24941 = cljs.core.seq.call(null,inst_24940);
var inst_24942 = inst_24941;
var inst_24943 = null;
var inst_24944 = (0);
var inst_24945 = (0);
var state_24990__$1 = (function (){var statearr_25007 = state_24990;
(statearr_25007[(9)] = inst_24943);

(statearr_25007[(10)] = inst_24944);

(statearr_25007[(11)] = inst_24945);

(statearr_25007[(12)] = inst_24942);

return statearr_25007;
})();
var statearr_25008_25042 = state_24990__$1;
(statearr_25008_25042[(2)] = null);

(statearr_25008_25042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (17))){
var inst_24956 = (state_24990[(7)]);
var inst_24960 = cljs.core.chunk_first.call(null,inst_24956);
var inst_24961 = cljs.core.chunk_rest.call(null,inst_24956);
var inst_24962 = cljs.core.count.call(null,inst_24960);
var inst_24942 = inst_24961;
var inst_24943 = inst_24960;
var inst_24944 = inst_24962;
var inst_24945 = (0);
var state_24990__$1 = (function (){var statearr_25009 = state_24990;
(statearr_25009[(9)] = inst_24943);

(statearr_25009[(10)] = inst_24944);

(statearr_25009[(11)] = inst_24945);

(statearr_25009[(12)] = inst_24942);

return statearr_25009;
})();
var statearr_25010_25043 = state_24990__$1;
(statearr_25010_25043[(2)] = null);

(statearr_25010_25043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (3))){
var inst_24988 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
if((state_val_24991 === (12))){
var inst_24976 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25011_25044 = state_24990__$1;
(statearr_25011_25044[(2)] = inst_24976);

(statearr_25011_25044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (2))){
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(4),in$);
} else {
if((state_val_24991 === (23))){
var inst_24984 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25012_25045 = state_24990__$1;
(statearr_25012_25045[(2)] = inst_24984);

(statearr_25012_25045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (19))){
var inst_24971 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25013_25046 = state_24990__$1;
(statearr_25013_25046[(2)] = inst_24971);

(statearr_25013_25046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (11))){
var inst_24942 = (state_24990[(12)]);
var inst_24956 = (state_24990[(7)]);
var inst_24956__$1 = cljs.core.seq.call(null,inst_24942);
var state_24990__$1 = (function (){var statearr_25014 = state_24990;
(statearr_25014[(7)] = inst_24956__$1);

return statearr_25014;
})();
if(inst_24956__$1){
var statearr_25015_25047 = state_24990__$1;
(statearr_25015_25047[(1)] = (14));

} else {
var statearr_25016_25048 = state_24990__$1;
(statearr_25016_25048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (9))){
var inst_24978 = (state_24990[(2)]);
var inst_24979 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24990__$1 = (function (){var statearr_25017 = state_24990;
(statearr_25017[(15)] = inst_24978);

return statearr_25017;
})();
if(cljs.core.truth_(inst_24979)){
var statearr_25018_25049 = state_24990__$1;
(statearr_25018_25049[(1)] = (21));

} else {
var statearr_25019_25050 = state_24990__$1;
(statearr_25019_25050[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (5))){
var inst_24934 = cljs.core.async.close_BANG_.call(null,out);
var state_24990__$1 = state_24990;
var statearr_25020_25051 = state_24990__$1;
(statearr_25020_25051[(2)] = inst_24934);

(statearr_25020_25051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (14))){
var inst_24956 = (state_24990[(7)]);
var inst_24958 = cljs.core.chunked_seq_QMARK_.call(null,inst_24956);
var state_24990__$1 = state_24990;
if(inst_24958){
var statearr_25021_25052 = state_24990__$1;
(statearr_25021_25052[(1)] = (17));

} else {
var statearr_25022_25053 = state_24990__$1;
(statearr_25022_25053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (16))){
var inst_24974 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25023_25054 = state_24990__$1;
(statearr_25023_25054[(2)] = inst_24974);

(statearr_25023_25054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (10))){
var inst_24943 = (state_24990[(9)]);
var inst_24945 = (state_24990[(11)]);
var inst_24950 = cljs.core._nth.call(null,inst_24943,inst_24945);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24990__$1,(13),out,inst_24950);
} else {
if((state_val_24991 === (18))){
var inst_24956 = (state_24990[(7)]);
var inst_24965 = cljs.core.first.call(null,inst_24956);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24990__$1,(20),out,inst_24965);
} else {
if((state_val_24991 === (8))){
var inst_24944 = (state_24990[(10)]);
var inst_24945 = (state_24990[(11)]);
var inst_24947 = (inst_24945 < inst_24944);
var inst_24948 = inst_24947;
var state_24990__$1 = state_24990;
if(cljs.core.truth_(inst_24948)){
var statearr_25024_25055 = state_24990__$1;
(statearr_25024_25055[(1)] = (10));

} else {
var statearr_25025_25056 = state_24990__$1;
(statearr_25025_25056[(1)] = (11));

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
});})(c__22533__auto__))
;
return ((function (switch__22421__auto__,c__22533__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____0 = (function (){
var statearr_25029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25029[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__);

(statearr_25029[(1)] = (1));

return statearr_25029;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____1 = (function (state_24990){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object)){
var ex__22425__auto__ = e25030;
var statearr_25031_25057 = state_24990;
(statearr_25031_25057[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25058 = state_24990;
state_24990 = G__25058;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22422__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto__))
})();
var state__22535__auto__ = (function (){var statearr_25032 = f__22534__auto__.call(null);
(statearr_25032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto__);

return statearr_25032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto__))
);

return c__22533__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25059 = [];
var len__19791__auto___25062 = arguments.length;
var i__19792__auto___25063 = (0);
while(true){
if((i__19792__auto___25063 < len__19791__auto___25062)){
args25059.push((arguments[i__19792__auto___25063]));

var G__25064 = (i__19792__auto___25063 + (1));
i__19792__auto___25063 = G__25064;
continue;
} else {
}
break;
}

var G__25061 = args25059.length;
switch (G__25061) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25059.length)].join('')));

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
var args25066 = [];
var len__19791__auto___25069 = arguments.length;
var i__19792__auto___25070 = (0);
while(true){
if((i__19792__auto___25070 < len__19791__auto___25069)){
args25066.push((arguments[i__19792__auto___25070]));

var G__25071 = (i__19792__auto___25070 + (1));
i__19792__auto___25070 = G__25071;
continue;
} else {
}
break;
}

var G__25068 = args25066.length;
switch (G__25068) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25066.length)].join('')));

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
var args25073 = [];
var len__19791__auto___25124 = arguments.length;
var i__19792__auto___25125 = (0);
while(true){
if((i__19792__auto___25125 < len__19791__auto___25124)){
args25073.push((arguments[i__19792__auto___25125]));

var G__25126 = (i__19792__auto___25125 + (1));
i__19792__auto___25125 = G__25126;
continue;
} else {
}
break;
}

var G__25075 = args25073.length;
switch (G__25075) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25073.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___25128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___25128,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___25128,out){
return (function (state_25099){
var state_val_25100 = (state_25099[(1)]);
if((state_val_25100 === (7))){
var inst_25094 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25101_25129 = state_25099__$1;
(statearr_25101_25129[(2)] = inst_25094);

(statearr_25101_25129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (1))){
var inst_25076 = null;
var state_25099__$1 = (function (){var statearr_25102 = state_25099;
(statearr_25102[(7)] = inst_25076);

return statearr_25102;
})();
var statearr_25103_25130 = state_25099__$1;
(statearr_25103_25130[(2)] = null);

(statearr_25103_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (4))){
var inst_25079 = (state_25099[(8)]);
var inst_25079__$1 = (state_25099[(2)]);
var inst_25080 = (inst_25079__$1 == null);
var inst_25081 = cljs.core.not.call(null,inst_25080);
var state_25099__$1 = (function (){var statearr_25104 = state_25099;
(statearr_25104[(8)] = inst_25079__$1);

return statearr_25104;
})();
if(inst_25081){
var statearr_25105_25131 = state_25099__$1;
(statearr_25105_25131[(1)] = (5));

} else {
var statearr_25106_25132 = state_25099__$1;
(statearr_25106_25132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (6))){
var state_25099__$1 = state_25099;
var statearr_25107_25133 = state_25099__$1;
(statearr_25107_25133[(2)] = null);

(statearr_25107_25133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (3))){
var inst_25096 = (state_25099[(2)]);
var inst_25097 = cljs.core.async.close_BANG_.call(null,out);
var state_25099__$1 = (function (){var statearr_25108 = state_25099;
(statearr_25108[(9)] = inst_25096);

return statearr_25108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25099__$1,inst_25097);
} else {
if((state_val_25100 === (2))){
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25099__$1,(4),ch);
} else {
if((state_val_25100 === (11))){
var inst_25079 = (state_25099[(8)]);
var inst_25088 = (state_25099[(2)]);
var inst_25076 = inst_25079;
var state_25099__$1 = (function (){var statearr_25109 = state_25099;
(statearr_25109[(7)] = inst_25076);

(statearr_25109[(10)] = inst_25088);

return statearr_25109;
})();
var statearr_25110_25134 = state_25099__$1;
(statearr_25110_25134[(2)] = null);

(statearr_25110_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (9))){
var inst_25079 = (state_25099[(8)]);
var state_25099__$1 = state_25099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25099__$1,(11),out,inst_25079);
} else {
if((state_val_25100 === (5))){
var inst_25076 = (state_25099[(7)]);
var inst_25079 = (state_25099[(8)]);
var inst_25083 = cljs.core._EQ_.call(null,inst_25079,inst_25076);
var state_25099__$1 = state_25099;
if(inst_25083){
var statearr_25112_25135 = state_25099__$1;
(statearr_25112_25135[(1)] = (8));

} else {
var statearr_25113_25136 = state_25099__$1;
(statearr_25113_25136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (10))){
var inst_25091 = (state_25099[(2)]);
var state_25099__$1 = state_25099;
var statearr_25114_25137 = state_25099__$1;
(statearr_25114_25137[(2)] = inst_25091);

(statearr_25114_25137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25100 === (8))){
var inst_25076 = (state_25099[(7)]);
var tmp25111 = inst_25076;
var inst_25076__$1 = tmp25111;
var state_25099__$1 = (function (){var statearr_25115 = state_25099;
(statearr_25115[(7)] = inst_25076__$1);

return statearr_25115;
})();
var statearr_25116_25138 = state_25099__$1;
(statearr_25116_25138[(2)] = null);

(statearr_25116_25138[(1)] = (2));


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
});})(c__22533__auto___25128,out))
;
return ((function (switch__22421__auto__,c__22533__auto___25128,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_25120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25120[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_25120[(1)] = (1));

return statearr_25120;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_25099){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_25099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e25121){if((e25121 instanceof Object)){
var ex__22425__auto__ = e25121;
var statearr_25122_25139 = state_25099;
(statearr_25122_25139[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25140 = state_25099;
state_25099 = G__25140;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_25099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_25099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___25128,out))
})();
var state__22535__auto__ = (function (){var statearr_25123 = f__22534__auto__.call(null);
(statearr_25123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___25128);

return statearr_25123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___25128,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25141 = [];
var len__19791__auto___25211 = arguments.length;
var i__19792__auto___25212 = (0);
while(true){
if((i__19792__auto___25212 < len__19791__auto___25211)){
args25141.push((arguments[i__19792__auto___25212]));

var G__25213 = (i__19792__auto___25212 + (1));
i__19792__auto___25212 = G__25213;
continue;
} else {
}
break;
}

var G__25143 = args25141.length;
switch (G__25143) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25141.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___25215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___25215,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___25215,out){
return (function (state_25181){
var state_val_25182 = (state_25181[(1)]);
if((state_val_25182 === (7))){
var inst_25177 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25183_25216 = state_25181__$1;
(statearr_25183_25216[(2)] = inst_25177);

(statearr_25183_25216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (1))){
var inst_25144 = (new Array(n));
var inst_25145 = inst_25144;
var inst_25146 = (0);
var state_25181__$1 = (function (){var statearr_25184 = state_25181;
(statearr_25184[(7)] = inst_25146);

(statearr_25184[(8)] = inst_25145);

return statearr_25184;
})();
var statearr_25185_25217 = state_25181__$1;
(statearr_25185_25217[(2)] = null);

(statearr_25185_25217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (4))){
var inst_25149 = (state_25181[(9)]);
var inst_25149__$1 = (state_25181[(2)]);
var inst_25150 = (inst_25149__$1 == null);
var inst_25151 = cljs.core.not.call(null,inst_25150);
var state_25181__$1 = (function (){var statearr_25186 = state_25181;
(statearr_25186[(9)] = inst_25149__$1);

return statearr_25186;
})();
if(inst_25151){
var statearr_25187_25218 = state_25181__$1;
(statearr_25187_25218[(1)] = (5));

} else {
var statearr_25188_25219 = state_25181__$1;
(statearr_25188_25219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (15))){
var inst_25171 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25189_25220 = state_25181__$1;
(statearr_25189_25220[(2)] = inst_25171);

(statearr_25189_25220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (13))){
var state_25181__$1 = state_25181;
var statearr_25190_25221 = state_25181__$1;
(statearr_25190_25221[(2)] = null);

(statearr_25190_25221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (6))){
var inst_25146 = (state_25181[(7)]);
var inst_25167 = (inst_25146 > (0));
var state_25181__$1 = state_25181;
if(cljs.core.truth_(inst_25167)){
var statearr_25191_25222 = state_25181__$1;
(statearr_25191_25222[(1)] = (12));

} else {
var statearr_25192_25223 = state_25181__$1;
(statearr_25192_25223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (3))){
var inst_25179 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25181__$1,inst_25179);
} else {
if((state_val_25182 === (12))){
var inst_25145 = (state_25181[(8)]);
var inst_25169 = cljs.core.vec.call(null,inst_25145);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25181__$1,(15),out,inst_25169);
} else {
if((state_val_25182 === (2))){
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25181__$1,(4),ch);
} else {
if((state_val_25182 === (11))){
var inst_25161 = (state_25181[(2)]);
var inst_25162 = (new Array(n));
var inst_25145 = inst_25162;
var inst_25146 = (0);
var state_25181__$1 = (function (){var statearr_25193 = state_25181;
(statearr_25193[(7)] = inst_25146);

(statearr_25193[(8)] = inst_25145);

(statearr_25193[(10)] = inst_25161);

return statearr_25193;
})();
var statearr_25194_25224 = state_25181__$1;
(statearr_25194_25224[(2)] = null);

(statearr_25194_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (9))){
var inst_25145 = (state_25181[(8)]);
var inst_25159 = cljs.core.vec.call(null,inst_25145);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25181__$1,(11),out,inst_25159);
} else {
if((state_val_25182 === (5))){
var inst_25146 = (state_25181[(7)]);
var inst_25154 = (state_25181[(11)]);
var inst_25149 = (state_25181[(9)]);
var inst_25145 = (state_25181[(8)]);
var inst_25153 = (inst_25145[inst_25146] = inst_25149);
var inst_25154__$1 = (inst_25146 + (1));
var inst_25155 = (inst_25154__$1 < n);
var state_25181__$1 = (function (){var statearr_25195 = state_25181;
(statearr_25195[(12)] = inst_25153);

(statearr_25195[(11)] = inst_25154__$1);

return statearr_25195;
})();
if(cljs.core.truth_(inst_25155)){
var statearr_25196_25225 = state_25181__$1;
(statearr_25196_25225[(1)] = (8));

} else {
var statearr_25197_25226 = state_25181__$1;
(statearr_25197_25226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (14))){
var inst_25174 = (state_25181[(2)]);
var inst_25175 = cljs.core.async.close_BANG_.call(null,out);
var state_25181__$1 = (function (){var statearr_25199 = state_25181;
(statearr_25199[(13)] = inst_25174);

return statearr_25199;
})();
var statearr_25200_25227 = state_25181__$1;
(statearr_25200_25227[(2)] = inst_25175);

(statearr_25200_25227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (10))){
var inst_25165 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25201_25228 = state_25181__$1;
(statearr_25201_25228[(2)] = inst_25165);

(statearr_25201_25228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (8))){
var inst_25154 = (state_25181[(11)]);
var inst_25145 = (state_25181[(8)]);
var tmp25198 = inst_25145;
var inst_25145__$1 = tmp25198;
var inst_25146 = inst_25154;
var state_25181__$1 = (function (){var statearr_25202 = state_25181;
(statearr_25202[(7)] = inst_25146);

(statearr_25202[(8)] = inst_25145__$1);

return statearr_25202;
})();
var statearr_25203_25229 = state_25181__$1;
(statearr_25203_25229[(2)] = null);

(statearr_25203_25229[(1)] = (2));


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
});})(c__22533__auto___25215,out))
;
return ((function (switch__22421__auto__,c__22533__auto___25215,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_25207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25207[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_25207[(1)] = (1));

return statearr_25207;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_25181){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_25181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e25208){if((e25208 instanceof Object)){
var ex__22425__auto__ = e25208;
var statearr_25209_25230 = state_25181;
(statearr_25209_25230[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25231 = state_25181;
state_25181 = G__25231;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_25181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_25181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___25215,out))
})();
var state__22535__auto__ = (function (){var statearr_25210 = f__22534__auto__.call(null);
(statearr_25210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___25215);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___25215,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25232 = [];
var len__19791__auto___25306 = arguments.length;
var i__19792__auto___25307 = (0);
while(true){
if((i__19792__auto___25307 < len__19791__auto___25306)){
args25232.push((arguments[i__19792__auto___25307]));

var G__25308 = (i__19792__auto___25307 + (1));
i__19792__auto___25307 = G__25308;
continue;
} else {
}
break;
}

var G__25234 = args25232.length;
switch (G__25234) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25232.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22533__auto___25310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22533__auto___25310,out){
return (function (){
var f__22534__auto__ = (function (){var switch__22421__auto__ = ((function (c__22533__auto___25310,out){
return (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (7))){
var inst_25272 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25278_25311 = state_25276__$1;
(statearr_25278_25311[(2)] = inst_25272);

(statearr_25278_25311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (1))){
var inst_25235 = [];
var inst_25236 = inst_25235;
var inst_25237 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25276__$1 = (function (){var statearr_25279 = state_25276;
(statearr_25279[(7)] = inst_25236);

(statearr_25279[(8)] = inst_25237);

return statearr_25279;
})();
var statearr_25280_25312 = state_25276__$1;
(statearr_25280_25312[(2)] = null);

(statearr_25280_25312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (4))){
var inst_25240 = (state_25276[(9)]);
var inst_25240__$1 = (state_25276[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var inst_25242 = cljs.core.not.call(null,inst_25241);
var state_25276__$1 = (function (){var statearr_25281 = state_25276;
(statearr_25281[(9)] = inst_25240__$1);

return statearr_25281;
})();
if(inst_25242){
var statearr_25282_25313 = state_25276__$1;
(statearr_25282_25313[(1)] = (5));

} else {
var statearr_25283_25314 = state_25276__$1;
(statearr_25283_25314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (15))){
var inst_25266 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25284_25315 = state_25276__$1;
(statearr_25284_25315[(2)] = inst_25266);

(statearr_25284_25315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (13))){
var state_25276__$1 = state_25276;
var statearr_25285_25316 = state_25276__$1;
(statearr_25285_25316[(2)] = null);

(statearr_25285_25316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var inst_25236 = (state_25276[(7)]);
var inst_25261 = inst_25236.length;
var inst_25262 = (inst_25261 > (0));
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25262)){
var statearr_25286_25317 = state_25276__$1;
(statearr_25286_25317[(1)] = (12));

} else {
var statearr_25287_25318 = state_25276__$1;
(statearr_25287_25318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (3))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (12))){
var inst_25236 = (state_25276[(7)]);
var inst_25264 = cljs.core.vec.call(null,inst_25236);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(15),out,inst_25264);
} else {
if((state_val_25277 === (2))){
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(4),ch);
} else {
if((state_val_25277 === (11))){
var inst_25244 = (state_25276[(10)]);
var inst_25240 = (state_25276[(9)]);
var inst_25254 = (state_25276[(2)]);
var inst_25255 = [];
var inst_25256 = inst_25255.push(inst_25240);
var inst_25236 = inst_25255;
var inst_25237 = inst_25244;
var state_25276__$1 = (function (){var statearr_25288 = state_25276;
(statearr_25288[(11)] = inst_25256);

(statearr_25288[(7)] = inst_25236);

(statearr_25288[(8)] = inst_25237);

(statearr_25288[(12)] = inst_25254);

return statearr_25288;
})();
var statearr_25289_25319 = state_25276__$1;
(statearr_25289_25319[(2)] = null);

(statearr_25289_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (9))){
var inst_25236 = (state_25276[(7)]);
var inst_25252 = cljs.core.vec.call(null,inst_25236);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(11),out,inst_25252);
} else {
if((state_val_25277 === (5))){
var inst_25244 = (state_25276[(10)]);
var inst_25237 = (state_25276[(8)]);
var inst_25240 = (state_25276[(9)]);
var inst_25244__$1 = f.call(null,inst_25240);
var inst_25245 = cljs.core._EQ_.call(null,inst_25244__$1,inst_25237);
var inst_25246 = cljs.core.keyword_identical_QMARK_.call(null,inst_25237,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25247 = (inst_25245) || (inst_25246);
var state_25276__$1 = (function (){var statearr_25290 = state_25276;
(statearr_25290[(10)] = inst_25244__$1);

return statearr_25290;
})();
if(cljs.core.truth_(inst_25247)){
var statearr_25291_25320 = state_25276__$1;
(statearr_25291_25320[(1)] = (8));

} else {
var statearr_25292_25321 = state_25276__$1;
(statearr_25292_25321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (14))){
var inst_25269 = (state_25276[(2)]);
var inst_25270 = cljs.core.async.close_BANG_.call(null,out);
var state_25276__$1 = (function (){var statearr_25294 = state_25276;
(statearr_25294[(13)] = inst_25269);

return statearr_25294;
})();
var statearr_25295_25322 = state_25276__$1;
(statearr_25295_25322[(2)] = inst_25270);

(statearr_25295_25322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (10))){
var inst_25259 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25296_25323 = state_25276__$1;
(statearr_25296_25323[(2)] = inst_25259);

(statearr_25296_25323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (8))){
var inst_25244 = (state_25276[(10)]);
var inst_25236 = (state_25276[(7)]);
var inst_25240 = (state_25276[(9)]);
var inst_25249 = inst_25236.push(inst_25240);
var tmp25293 = inst_25236;
var inst_25236__$1 = tmp25293;
var inst_25237 = inst_25244;
var state_25276__$1 = (function (){var statearr_25297 = state_25276;
(statearr_25297[(7)] = inst_25236__$1);

(statearr_25297[(8)] = inst_25237);

(statearr_25297[(14)] = inst_25249);

return statearr_25297;
})();
var statearr_25298_25324 = state_25276__$1;
(statearr_25298_25324[(2)] = null);

(statearr_25298_25324[(1)] = (2));


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
});})(c__22533__auto___25310,out))
;
return ((function (switch__22421__auto__,c__22533__auto___25310,out){
return (function() {
var cljs$core$async$state_machine__22422__auto__ = null;
var cljs$core$async$state_machine__22422__auto____0 = (function (){
var statearr_25302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25302[(0)] = cljs$core$async$state_machine__22422__auto__);

(statearr_25302[(1)] = (1));

return statearr_25302;
});
var cljs$core$async$state_machine__22422__auto____1 = (function (state_25276){
while(true){
var ret_value__22423__auto__ = (function (){try{while(true){
var result__22424__auto__ = switch__22421__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22424__auto__;
}
break;
}
}catch (e25303){if((e25303 instanceof Object)){
var ex__22425__auto__ = e25303;
var statearr_25304_25325 = state_25276;
(statearr_25304_25325[(5)] = ex__22425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25326 = state_25276;
state_25276 = G__25326;
continue;
} else {
return ret_value__22423__auto__;
}
break;
}
});
cljs$core$async$state_machine__22422__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22422__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22422__auto____0;
cljs$core$async$state_machine__22422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22422__auto____1;
return cljs$core$async$state_machine__22422__auto__;
})()
;})(switch__22421__auto__,c__22533__auto___25310,out))
})();
var state__22535__auto__ = (function (){var statearr_25305 = f__22534__auto__.call(null);
(statearr_25305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22533__auto___25310);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22535__auto__);
});})(c__22533__auto___25310,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1474300060507